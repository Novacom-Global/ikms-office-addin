/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }
  if (!url) {
    return url;
  }

  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  url = String(url.__esModule ? url.default : url);
  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }
  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }
  return url;
};

/***/ }),

/***/ "./assets/novacomIcon.svg":
/*!********************************!*\
  !*** ./assets/novacomIcon.svg ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "9ffdae3c4f9cf917d3b6.svg";

/***/ }),

/***/ "./src/taskpane/taskpane.css":
/*!***********************************!*\
  !*** ./src/taskpane/taskpane.css ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "131d7728361a77e6d38e.css";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"taskpane": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!**********************************!*\
  !*** ./src/taskpane/taskpane.js ***!
  \**********************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global document, Office, Word */

Office.onReady(function (info) {
  if (info.host === Office.HostType.Word || info.host === Office.HostType.Excel) {
    document.getElementById("sideload-msg").style.display = "none";
    document.getElementById("app-body").style.display = "flex";
    document.getElementById("sendDocument").onclick = saveAsPdfAndDocumentToServer;
    document.getElementById("fetchDocument").onclick = fetchDocumentFromS3;
    // document.getElementById("sendToNovacom").onclick = saveAsPdfAndSendToBrowser;
  }
});
var urlField = document.getElementById("novacomUrl");
urlField.addEventListener("input", function (event) {
  var fetchDocumentButton = document.getElementById("fetchDocument");
  if (event.target.value.length === 0) {
    fetchDocumentButton.style.display = "none";
  }
  if (event.target.value.length > 0) {
    fetchDocumentButton.style.display = "";
  }
});
function fetchDocumentFromS3() {
  return _fetchDocumentFromS.apply(this, arguments);
}
function _fetchDocumentFromS() {
  _fetchDocumentFromS = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var officeHost, s3Url, urlParts, fileTypeFromUrl, backdrop, xhr, _backdrop2;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          officeHost = Office.context.host;
          s3Url = document.getElementById("novacomUrl").value; // Extract the file type from the URL
          urlParts = s3Url.split("/");
          fileTypeFromUrl = urlParts[urlParts.length - 1].toLowerCase(); // Extract last part and convert to lowercase
          if (s3Url) {
            _context2.next = 6;
            break;
          }
          return _context2.abrupt("return");
        case 6:
          if (!(fileTypeFromUrl.toLowerCase() === "pdf" && officeHost.toLowerCase() !== "word")) {
            _context2.next = 8;
            break;
          }
          return _context2.abrupt("return");
        case 8:
          if (!(fileTypeFromUrl.toLowerCase() !== "pdf" && fileTypeFromUrl.toLowerCase() !== officeHost.toLowerCase())) {
            _context2.next = 10;
            break;
          }
          return _context2.abrupt("return");
        case 10:
          _context2.prev = 10;
          // Show backdrop while processing
          backdrop = document.getElementById("backdrop");
          backdrop.style.display = "flex";
          xhr = new XMLHttpRequest();
          xhr.open("GET", s3Url, true);
          xhr.responseType = "application/json";
          xhr.onload = function () {
            if (xhr.status === 200) {
              var data = xhr.response;
              var parsedData = JSON.parse(data);
              var base64 = parsedData.base64;

              // Select the input element by its id
              var inputElement = document.getElementById("nameOfDocument");

              // Enable the input field temporarily
              inputElement.disabled = false;

              // Set the value of the input element
              inputElement.value = parsedData.name;

              // Disable the input field again (if needed)
              inputElement.disabled = true;
              var sendDocumentButton = document.getElementById("sendDocument");
              sendDocumentButton.style.display = "";
              if (fileTypeFromUrl === "word" || fileTypeFromUrl === "pdf") {
                insertDocumentContent(base64);
              }
              if (fileTypeFromUrl === "excel") {
                insertExcelContent(base64);
              }
            } else {
              throw new Error("Network response was not ok: ".concat(xhr.statusText));
            }
          };
          xhr.onerror = function () {
            throw new Error("Failed to fetch document from S3");
          };
          xhr.send();
          backdrop.style.display = "none";
          _context2.next = 29;
          break;
        case 22:
          _context2.prev = 22;
          _context2.t0 = _context2["catch"](10);
          _context2.next = 26;
          return insertErrorToDocument(_context2.t0);
        case 26:
          _backdrop2 = document.getElementById("backdrop");
          _backdrop2.style.display = "none";
          console.error("Failed to fetch document from S3:", _context2.t0);
        case 29:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[10, 22]]);
  }));
  return _fetchDocumentFromS.apply(this, arguments);
}
function arrayBufferToBase64(buffer) {
  var binary = "";
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}
function insertDocumentContent(_x) {
  return _insertDocumentContent.apply(this, arguments);
}
function _insertDocumentContent() {
  _insertDocumentContent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(base64) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Word.run( /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(context) {
              var body;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    body = context.document.body;
                    body.insertFileFromBase64(base64, Word.InsertLocation.replace);
                    _context3.next = 4;
                    return context.sync();
                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }));
            return function (_x4) {
              return _ref2.apply(this, arguments);
            };
          }());
        case 3:
          _context4.next = 10;
          break;
        case 5:
          _context4.prev = 5;
          _context4.t0 = _context4["catch"](0);
          _context4.next = 9;
          return insertErrorToDocument(_context4.t0.message);
        case 9:
          console.error("Failed to insert document content:", _context4.t0);
        case 10:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 5]]);
  }));
  return _insertDocumentContent.apply(this, arguments);
}
function insertExcelContent(_x2) {
  return _insertExcelContent.apply(this, arguments);
}
function _insertExcelContent() {
  _insertExcelContent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(base64) {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Excel.run( /*#__PURE__*/function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(context) {
              var workbook, options;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    workbook = context.workbook; // Set up the insert options.
                    options = {
                      sheetNamesToInsert: [],
                      // Insert all the worksheets from the source workbook.
                      positionType: Excel.WorksheetPositionType.after,
                      // Insert after the `relativeTo` sheet.
                      relativeTo: "Sheet1" // The sheet relative to which the other worksheets will be inserted. Used with `positionType`.
                    }; // Insert the new worksheets into the current workbook.

                    workbook.insertWorksheetsFromBase64(base64, options);
                    _context5.next = 5;
                    return context.sync();
                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5);
            }));
            return function (_x5) {
              return _ref3.apply(this, arguments);
            };
          }());
        case 3:
          _context6.next = 10;
          break;
        case 5:
          _context6.prev = 5;
          _context6.t0 = _context6["catch"](0);
          _context6.next = 9;
          return insertErrorToExcel(_context6.t0.message);
        case 9:
          console.error("Failed to insert Excel content:", _context6.t0);
        case 10:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 5]]);
  }));
  return _insertExcelContent.apply(this, arguments);
}
function insertErrorToDocument(_x3) {
  return _insertErrorToDocument.apply(this, arguments);
}
function _insertErrorToDocument() {
  _insertErrorToDocument = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(errorMessage) {
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return Word.run( /*#__PURE__*/function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(context) {
              var body;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    body = context.document.body;
                    body.insertText(errorMessage, Word.InsertLocation.end);
                    _context7.next = 4;
                    return context.sync();
                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7);
            }));
            return function (_x6) {
              return _ref4.apply(this, arguments);
            };
          }());
        case 3:
          _context8.next = 8;
          break;
        case 5:
          _context8.prev = 5;
          _context8.t0 = _context8["catch"](0);
          console.error("Failed to insert error message to document:", _context8.t0);
        case 8:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 5]]);
  }));
  return _insertErrorToDocument.apply(this, arguments);
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
        var pdfBlob = onGotAllSlices(docDataSlices, blobType);
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
  var len = fileContent.length;
  var bytes = new Uint8Array(len);
  for (var i = 0; i < len; i++) {
    bytes[i] = fileContent.charCodeAt(i);
  }

  // Determine the correct MIME type based on the blobType
  var mimeType;
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
  var blob = new Blob([bytes], {
    type: mimeType
  });
  return blob;
  // saveAs(blob, "document.pdf");
}
function returnWordBlob(fileContent) {
  // Convert binary string to Uint8Array
  var len = fileContent.length;
  var bytes = new Uint8Array(len);
  for (var i = 0; i < len; i++) {
    bytes[i] = fileContent.charCodeAt(i);
  }

  // Create a Blob from the Uint8Array
  var wordBlob = new Blob([bytes], {
    type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  });
  return wordBlob;
  // saveAs(blob, "document.pdf");
}
function onGotAllSlices(docDataSlices, blobType) {
  var docData = [];
  for (var i = 0; i < docDataSlices.length; i++) {
    docData = docData.concat(docDataSlices[i]);
  }
  var fileContent = new String();
  for (var j = 0; j < docData.length; j++) {
    fileContent += String.fromCharCode(docData[j]);
  }

  // Now all the file content is stored in 'fileContent' variable,
  // you can do something with it, such as print, fax...

  var pdfBlob = returnBlob(fileContent, blobType);
  return pdfBlob;
}

// Function to retrieve the Word document as a Blob
var getWordBlob = function getWordBlob() {
  return new Promise(function (resolve, reject) {
    Office.context.document.getFileAsync(Office.FileType.Compressed, function (result) {
      if (result.status == "succeeded") {
        var myFile = result.value;
        var sliceCount = myFile.sliceCount;

        // Get the file slices.
        var docDataSlices = [];
        var slicesReceived = 0,
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
var getExcelBlob = function getExcelBlob() {
  return new Promise(function (resolve, reject) {
    Office.context.document.getFileAsync(Office.FileType.Compressed, function (result) {
      if (result.status == "succeeded") {
        var myFile = result.value;
        var sliceCount = myFile.sliceCount;

        // Get the file slices.
        var docDataSlices = [];
        var slicesReceived = 0,
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
var getPdfBlob = function getPdfBlob() {
  return new Promise(function (resolve, reject) {
    Office.context.document.getFileAsync(Office.FileType.Pdf, function (result) {
      if (result.status == "succeeded") {
        var myFile = result.value;
        var sliceCount = myFile.sliceCount;

        // Get the file slices.
        var docDataSlices = [];
        var slicesReceived = 0,
          gotAllSlices = true;
        getSliceAsync(myFile, 0, sliceCount, gotAllSlices, docDataSlices, slicesReceived, resolve, "pdf");
        myFile.closeAsync();
      } else {
        reject(result.error);
      }
    });
  });
};
var saveAsPdfAndDocumentToServer = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var url, urlParts, fileTypeFromUrl, backdrop, wordBlob, pdfBlob, nameField, excelBlob, _nameField, _backdrop;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          url = document.getElementById("novacomUrl").value;
          if (url) {
            _context.next = 3;
            break;
          }
          return _context.abrupt("return");
        case 3:
          // Extract the file type from the URL
          urlParts = url.split("/");
          fileTypeFromUrl = urlParts[urlParts.length - 1];
          _context.prev = 5;
          // Show backdrop while processing
          backdrop = document.getElementById("backdrop");
          backdrop.style.display = "flex";
          if (!(fileTypeFromUrl === "WORD" || fileTypeFromUrl === "PDF")) {
            _context.next = 18;
            break;
          }
          _context.next = 11;
          return getWordBlob();
        case 11:
          wordBlob = _context.sent;
          _context.next = 14;
          return getPdfBlob();
        case 14:
          pdfBlob = _context.sent;
          nameField = document.getElementById("nameOfDocument");
          _context.next = 18;
          return sendFilesToServer(pdfBlob, "".concat(nameField.value, ".pdf"), wordBlob, "".concat(nameField.value, ".docx"), url);
        case 18:
          if (!(fileTypeFromUrl === "EXCEL")) {
            _context.next = 25;
            break;
          }
          _context.next = 21;
          return getExcelBlob();
        case 21:
          excelBlob = _context.sent;
          _nameField = document.getElementById("nameOfDocument");
          _context.next = 25;
          return sendExcelFileToServer(excelBlob, "".concat(_nameField.value, ".xlsx"), url);
        case 25:
          // Hide backdrop after processing
          backdrop.style.display = "none";
          _context.next = 33;
          break;
        case 28:
          _context.prev = 28;
          _context.t0 = _context["catch"](5);
          console.error("Error retrieving files:", _context.t0);
          _backdrop = document.getElementById("backdrop");
          _backdrop.style.display = "none";
          // Handle error
        case 33:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[5, 28]]);
  }));
  return function saveAsPdfAndDocumentToServer() {
    return _ref.apply(this, arguments);
  };
}();
function sendFilesToServer(pdfBlob, pdfFileName, wordBlob, wordFileName, url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    var formData = new FormData();
    formData.append("pdf", pdfBlob, pdfFileName);
    formData.append("word", wordBlob, wordFileName);
    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(xhr.responseText); // Resolve with server response on success
      } else {
        reject(new Error("XHR failed with status ".concat(xhr.status))); // Reject with error on failure
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
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    var formData = new FormData();
    formData.append("excel", excelFile, excelFileName);
    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(xhr.responseText); // Resolve with server response on success
      } else {
        reject(new Error("XHR failed with status ".concat(xhr.status))); // Reject with error on failure
      }
    };
    xhr.onerror = function () {
      reject(new Error("Network error during XHR")); // Reject with network error
    };

    // Send the Blob as the request body
    xhr.send(formData);
  });
}
}();
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!************************************!*\
  !*** ./src/taskpane/taskpane.html ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./taskpane.css */ "./src/taskpane/taskpane.css"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/novacomIcon.svg */ "./assets/novacomIcon.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var code = "<!-- Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT License. -->\n<!-- This file shows how to design a first-run page that provides a welcome screen to the user about the features of the add-in. -->\n\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <title>Novacom Office addin for IKMS app</title>\n\n    <!-- Office JavaScript API -->\n    <" + "script type=\"text/javascript\" src=\"https://appsforoffice.microsoft.com/lib/1.1/hosted/office.js\"><" + "/script>\n\n    <" + "script src=\"https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js\"><" + "/script>\n\n    <!-- For more information on Fluent UI, visit https://developer.microsoft.com/fluentui#/. -->\n    <link\n      rel=\"stylesheet\"\n      href=\"https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/11.0.0/css/fabric.min.css\"\n    />\n\n    <!-- Template styles -->\n    <link href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" rel=\"stylesheet\" type=\"text/css\" />\n  </head>\n\n  <body class=\"ms-font-m ms-welcome ms-Fabric\">\n    <header class=\"ms-welcome__header ms-bgColor-neutralLighter\">\n      <!-- <div class=\"logo-container\"> -->\n      <img width=\"157\" height=\"22\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"Contoso\" title=\"Contoso\" />\n      <!-- </div> -->\n      <h1 class=\"ms-font-su\" style=\"font-size: 22px\">Welcome</h1>\n    </header>\n\n    <!-- Backdrop and loading indicator -->\n    <div id=\"backdrop\" class=\"backdrop\" style=\"display: none\">\n      <div class=\"loader\"></div>\n    </div>\n\n    <section id=\"sideload-msg\" class=\"ms-welcome__main\">\n      <h2 class=\"ms-font-xl\">\n        Please\n        <a\n          target=\"_blank\"\n          href=\"https://learn.microsoft.com/office/dev/add-ins/testing/test-debug-office-add-ins#sideload-an-office-add-in-for-testing\"\n          >sideload</a\n        >\n        your add-in to see app body.\n      </h2>\n    </section>\n    <main id=\"app-body\" class=\"ms-welcome__main\" style=\"display: none\">\n      <p><label id=\"item-subject\"></label></p>\n      <input\n        type=\"text\"\n        id=\"novacomUrl\"\n        placeholder=\"Enter Novacom Url\"\n        class=\"ms-TextField-field\"\n        style=\"margin-bottom: 10px; width: 98%; margin-left: 10px; margin-right: 10px\"\n      />\n      <input\n        type=\"text\"\n        id=\"nameOfDocument\"\n        placeholder=\"Document name will appear here\"\n        class=\"ms-TextField-field\"\n        style=\"margin-bottom: 10px; width: 98%; margin-left: 10px; margin-right: 10px\"\n        disabled\n      />\n      <div\n        style=\"\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          width: 100%;\n          margin-left: 10px;\n          margin-right: 10px;\n        \"\n      >\n        <button\n          id=\"fetchDocument\"\n          class=\"ms-Button ms-Button--primary\"\n          style=\"margin: 0px; padding: 0px; width: 120px; height: 32.5px; display: none\"\n        >\n          Get Document\n        </button>\n\n        <button\n          id=\"sendDocument\"\n          class=\"ms-Button ms-Button--primary\"\n          style=\"margin: 0px; padding: 0px; width: 120px; height: 32.5px; display: none\"\n        >\n          Save Document\n        </button>\n      </div>\n    </main>\n  </body>\n</html>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);
}();
/******/ })()
;
//# sourceMappingURL=taskpane.js.map