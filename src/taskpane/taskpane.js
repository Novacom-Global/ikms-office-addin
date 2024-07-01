/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global document, Office, Word */

Office.onReady((info) => {
  if (info.host === Office.HostType.Word) {
    document.getElementById("sideload-msg").style.display = "none";
    document.getElementById("app-body").style.display = "flex";
    document.getElementById("sendDocument").onclick = saveAsPdfAndDocumentToServer;
    document.getElementById("fetchDocument").onclick = fetchDocumentFromS3;
    // document.getElementById("sendToNovacom").onclick = saveAsPdfAndSendToBrowser;
  }
});

const urlField = document.getElementById("novacomUrl");

urlField.addEventListener("input", (event) => {
  const sendDocumentButton = document.getElementById("sendDocument");
  const fetchDocumentButton = document.getElementById("fetchDocument");

  if (event.target.value.length === 0) {
    fetchDocumentButton.style.display = "none";
  }

  if (event.target.value.length > 0) {
    fetchDocumentButton.style.display = "";
  }
});

const nameField = document.getElementById("nameOfDocument");

nameField.addEventListener("input", (event) => {
  const urlField = document.getElementById("novacomUrl");

  const sendDocumentButton = document.getElementById("sendDocument");

  if (event.target.value.length === 0 && urlField.value.length === 0) {
    sendDocumentButton.style.display = "none";
  }

  if (event.target.value.length > 0 && urlField.value.length > 0) {
    sendDocumentButton.style.display = "";
  }
});

async function fetchDocumentFromS3() {
  console.log(Office.context.document.url);

  const s3Url = document.getElementById("novacomUrl").value;

  if (!s3Url) {
    return;
  }

  try {
    // Show backdrop while processing
    const backdrop = document.getElementById("backdrop");
    backdrop.style.display = "flex";
    const xhr = new XMLHttpRequest();

    xhr.open("GET", s3Url, true);

    xhr.responseType = "text";

    xhr.onload = function () {
      if (xhr.status === 200) {
        const base64 = xhr.response;
        // const base64 = arrayBufferToBase64(arrayBuffer);

        insertDocumentContent(base64);
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

function returnPDFBlob(fileContent, blobType) {
  // Convert binary string to Uint8Array
  const len = fileContent.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = fileContent.charCodeAt(i);
  }

  // Create a Blob from the Uint8Array
  const pdfBlob = new Blob([bytes], {
    type:
      blobType === "pdf"
        ? "application/pdf"
        : "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  });

  return pdfBlob;
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

  const pdfBlob = returnPDFBlob(fileContent, blobType);

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

  try {
    // Show backdrop while processing
    const backdrop = document.getElementById("backdrop");
    backdrop.style.display = "flex";

    // Retrieve Word and PDF blobs
    const wordBlob = await getWordBlob();
    const pdfBlob = await getPdfBlob();

    // Now you have both Word and PDF blobs, you can use them as needed

    // saveAs(pdfBlob, "document.pdf");
    // saveAs(wordBlob, "document.docx");

    // Example: Send blobs to server or further process them

    const nameField = document.getElementById("nameOfDocument");

    await sendFilesToServer(pdfBlob, `${nameField.value}.pdf`, wordBlob, `${nameField.value}.docx`, url); // Assuming you have a function to handle server upload

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
