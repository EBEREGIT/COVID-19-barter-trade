webpackHotUpdate("static\\development\\pages\\apis\\test.js",{

/***/ "./utils/dbConnect.js":
/*!****************************!*\
  !*** ./utils/dbConnect.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


var mongoose = __webpack_require__(/*! mongoose */ "./node_modules/mongoose/dist/browser.umd.js");

console.log("mongodb+srv://Ebere:qWjOLsZTlMxY0uHM@cluster0-ev2sa.mongodb.net/test?retryWrites=true&w=majority");

function dbConnect() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function dbConnect$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          mongoose.connect("mongodb+srv://Ebere:qWjOLsZTlMxY0uHM@cluster0-ev2sa.mongodb.net/test?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
          });
          mongoose.connection.once("open", function () {
            console.log("Database Conection Established!");
          }).on("error", function (error) {
            console.log("Error is: ", error);
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

/* harmony default export */ __webpack_exports__["default"] = (dbConnect);

/***/ })

})
//# sourceMappingURL=test.js.ee71c050fc56574eb01f.hot-update.js.map