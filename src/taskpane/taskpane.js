/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global document, Office, Word */

Office.onReady((info) => {
  if (info.host === Office.HostType.Word || info.host === Office.HostType.Excel) {
    document.getElementById("sideload-msg").style.display = "none";
    document.getElementById("app-body").style.display = "flex";
    document.getElementById("sendDocument").onclick = saveAsPdfAndDocumentToServer;
    document.getElementById("fetchDocument").onclick = fetchDocumentFromS3;
    // document.getElementById("sendToNovacom").onclick = saveAsPdfAndSendToBrowser;
  }
});

const urlField = document.getElementById("novacomUrl");

urlField.addEventListener("input", (event) => {
  const fetchDocumentButton = document.getElementById("fetchDocument");

  if (event.target.value.length === 0) {
    fetchDocumentButton.style.display = "none";
  }

  if (event.target.value.length > 0) {
    fetchDocumentButton.style.display = "";
  }
});

async function fetchDocumentFromS3() {
  const officeHost = Office.context.host;

  const s3Url = document.getElementById("novacomUrl").value;

  // Extract the file type from the URL
  const urlParts = s3Url.split("/");
  const fileTypeFromUrl = urlParts[urlParts.length - 1].toLowerCase(); // Extract last part and convert to lowercase

  if (!s3Url) {
    return;
  }

  if (fileTypeFromUrl.toLowerCase() === "pdf" && officeHost.toLowerCase() !== "word") {
    return;
  }

  if (fileTypeFromUrl.toLowerCase() !== "pdf" && fileTypeFromUrl.toLowerCase() !== officeHost.toLowerCase()) {
    return;
  }

  try {
    // Show backdrop while processing
    const backdrop = document.getElementById("backdrop");
    backdrop.style.display = "flex";
    const xhr = new XMLHttpRequest();

    xhr.open("GET", s3Url, true);

    xhr.responseType = "application/json";

    xhr.onload = function () {
      if (xhr.status === 200) {
        const data = xhr.response;

        const parsedData = JSON.parse(data);
        const base64 = parsedData.base64;

        // Select the input element by its id
        const inputElement = document.getElementById("nameOfDocument");

        // Enable the input field temporarily
        inputElement.disabled = false;

        // Set the value of the input element
        inputElement.value = parsedData.name;

        // Disable the input field again (if needed)
        inputElement.disabled = true;

        const sendDocumentButton = document.getElementById("sendDocument");

        sendDocumentButton.style.display = "";

        if (fileTypeFromUrl === "word" || fileTypeFromUrl === "pdf") {
          insertDocumentContent(base64);
        }

        if (fileTypeFromUrl === "excel") {
          insertExcelContent(base64);
        }
      } else {
        throw new Error(`Network response was not ok: ${xhr.statusText}`);
      }
    };

    xhr.onerror = function () {
      throw new Error("Failed to fetch document from S3");
    };

    xhr.send();
    backdrop.style.display = "none";
  } catch (error) {
    await insertErrorToDocument(error);
    const backdrop = document.getElementById("backdrop");
    backdrop.style.display = "none";

    console.error("Failed to fetch document from S3:", error);
  }
}

function arrayBufferToBase64(buffer) {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;

  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  return window.btoa(binary);
}

async function insertDocumentContent(base64) {
  try {
    await Word.run(async (context) => {
      const body = context.document.body;
      body.insertFileFromBase64(base64, Word.InsertLocation.replace);
      await context.sync();
    });
  } catch (error) {
    await insertErrorToDocument(error.message);

    console.error("Failed to insert document content:", error);
  }
}

async function insertExcelContent(base64) {
  try {
    await Excel.run(async (context) => {
      let workbook = context.workbook;

      // Set up the insert options.
      let options = {
        sheetNamesToInsert: [], // Insert all the worksheets from the source workbook.
        positionType: Excel.WorksheetPositionType.after, // Insert after the `relativeTo` sheet.
        relativeTo: "Sheet1", // The sheet relative to which the other worksheets will be inserted. Used with `positionType`.
      };

      // Insert the new worksheets into the current workbook.
      workbook.insertWorksheetsFromBase64(base64, options);
      await context.sync();
    });
  } catch (error) {
    await insertErrorToExcel(error.message);
    console.error("Failed to insert Excel content:", error);
  }
}

async function insertErrorToDocument(errorMessage) {
  try {
    await Word.run(async (context) => {
      const body = context.document.body;
      body.insertText(errorMessage, Word.InsertLocation.end);
      await context.sync();
    });
  } catch (error) {
    console.error("Failed to insert error message to document:", error);
  }
}

function getSliceAsync(file, nextSlice, sliceCount, gotAllSlices, docDataSlices, slicesReceived, resolve, blobType) {
  file.getSliceAsync(nextSlice, function (sliceResult) {
    if (sliceResult.status == "succeeded") {
      if (!gotAllSlices) {
        /* Failed to get all slices, no need to continue. */
        return;
      }

      // Got one slice, store it in a temporary array.
      // (Or you can do something else, such as
      // send it to a third-party server.)
      docDataSlices[sliceResult.value.index] = sliceResult.value.data;
      if (++slicesReceived == sliceCount) {
        // All slices have been received.
        file.closeAsync();
        const pdfBlob = onGotAllSlices(docDataSlices, blobType);

        resolve(pdfBlob);
      } else {
        getSliceAsync(file, ++nextSlice, sliceCount, gotAllSlices, docDataSlices, slicesReceived, resolve, blobType);
      }
    } else {
      gotAllSlices = false;
      file.closeAsync();
      app.showNotification("getSliceAsync Error:", sliceResult.error.message);
    }
  });
}

function returnBlob(fileContent, blobType) {
  // Convert binary string to Uint8Array
  const len = fileContent.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = fileContent.charCodeAt(i);
  }

  // Determine the correct MIME type based on the blobType
  let mimeType;
  if (blobType === "pdf") {
    mimeType = "application/pdf";
  } else if (blobType === "word") {
    mimeType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  } else if (blobType === "excel") {
    mimeType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  } else {
    throw new Error("Unsupported blob type");
  }

  // Create a Blob from the Uint8Array
  const blob = new Blob([bytes], { type: mimeType });

  return blob;
  // saveAs(blob, "document.pdf");
}

function returnWordBlob(fileContent) {
  // Convert binary string to Uint8Array
  const len = fileContent.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = fileContent.charCodeAt(i);
  }

  // Create a Blob from the Uint8Array
  const wordBlob = new Blob([bytes], {
    type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  });

  return wordBlob;
  // saveAs(blob, "document.pdf");
}

function onGotAllSlices(docDataSlices, blobType) {
  let docData = [];
  for (let i = 0; i < docDataSlices.length; i++) {
    docData = docData.concat(docDataSlices[i]);
  }

  let fileContent = new String();
  for (let j = 0; j < docData.length; j++) {
    fileContent += String.fromCharCode(docData[j]);
  }

  // Now all the file content is stored in 'fileContent' variable,
  // you can do something with it, such as print, fax...

  const pdfBlob = returnBlob(fileContent, blobType);

  return pdfBlob;
}

// Function to retrieve the Word document as a Blob
const getWordBlob = () => {
  return new Promise((resolve, reject) => {
    Office.context.document.getFileAsync(Office.FileType.Compressed, function (result) {
      if (result.status == "succeeded") {
        const myFile = result.value;
        const sliceCount = myFile.sliceCount;

        // Get the file slices.
        const docDataSlices = [];
        let slicesReceived = 0,
          gotAllSlices = true;
        getSliceAsync(myFile, 0, sliceCount, gotAllSlices, docDataSlices, slicesReceived, resolve, "word");

        myFile.closeAsync();
      } else {
        reject(result.error);
      }
    });
  });
};

// Function to retrieve the Word document as a Blob
const getExcelBlob = () => {
  return new Promise((resolve, reject) => {
    Office.context.document.getFileAsync(Office.FileType.Compressed, function (result) {
      if (result.status == "succeeded") {
        const myFile = result.value;
        const sliceCount = myFile.sliceCount;

        // Get the file slices.
        const docDataSlices = [];
        let slicesReceived = 0,
          gotAllSlices = true;
        getSliceAsync(myFile, 0, sliceCount, gotAllSlices, docDataSlices, slicesReceived, resolve, "excel");

        myFile.closeAsync();
      } else {
        reject(result.error);
      }
    });
  });
};

// Function to retrieve the PDF document as a Blob
const getPdfBlob = () => {
  return new Promise((resolve, reject) => {
    Office.context.document.getFileAsync(Office.FileType.Pdf, function (result) {
      if (result.status == "succeeded") {
        const myFile = result.value;
        const sliceCount = myFile.sliceCount;

        // Get the file slices.
        const docDataSlices = [];
        let slicesReceived = 0,
          gotAllSlices = true;
        getSliceAsync(myFile, 0, sliceCount, gotAllSlices, docDataSlices, slicesReceived, resolve, "pdf");

        myFile.closeAsync();
      } else {
        reject(result.error);
      }
    });
  });
};

const saveAsPdfAndDocumentToServer = async () => {
  const url = document.getElementById("novacomUrl").value;

  if (!url) {
    return;
  }

  // Extract the file type from the URL
  const urlParts = url.split("/");
  const fileTypeFromUrl = urlParts[urlParts.length - 1];

  try {
    // Show backdrop while processing
    const backdrop = document.getElementById("backdrop");
    backdrop.style.display = "flex";

    if (fileTypeFromUrl === "WORD" || fileTypeFromUrl === "PDF") {
      // Retrieve Word and PDF blobs
      const wordBlob = await getWordBlob();
      const pdfBlob = await getPdfBlob();

      const nameField = document.getElementById("nameOfDocument");

      await sendFilesToServer(pdfBlob, `${nameField.value}.pdf`, wordBlob, `${nameField.value}.docx`, url); // Assuming you have a function to handle server upload
    }

    if (fileTypeFromUrl === "EXCEL") {
      // Retrieve Word and PDF blobs

      const excelBlob = await getExcelBlob();

      const nameField = document.getElementById("nameOfDocument");

      await sendExcelFileToServer(excelBlob, `${nameField.value}.xlsx`, url); // Assuming you have a function to handle server upload
    }

    // Hide backdrop after processing
    backdrop.style.display = "none";
  } catch (error) {
    console.error("Error retrieving files:", error);

    const backdrop = document.getElementById("backdrop");
    backdrop.style.display = "none";
    // Handle error
  }
};

function sendFilesToServer(pdfBlob, pdfFileName, wordBlob, wordFileName, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("POST", url, true);

    const formData = new FormData();

    formData.append("pdf", pdfBlob, pdfFileName);
    formData.append("word", wordBlob, wordFileName);

    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(xhr.responseText); // Resolve with server response on success
      } else {
        reject(new Error(`XHR failed with status ${xhr.status}`)); // Reject with error on failure
      }
    };

    xhr.onerror = function () {
      reject(new Error("Network error during XHR")); // Reject with network error
    };

    // Send the Blob as the request body
    xhr.send(formData);
  });
}

function sendExcelFileToServer(excelFile, excelFileName, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("POST", url, true);

    const formData = new FormData();

    formData.append("excel", excelFile, excelFileName);

    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(xhr.responseText); // Resolve with server response on success
      } else {
        reject(new Error(`XHR failed with status ${xhr.status}`)); // Reject with error on failure
      }
    };

    xhr.onerror = function () {
      reject(new Error("Network error during XHR")); // Reject with network error
    };

    // Send the Blob as the request body
    xhr.send(formData);
  });
}
