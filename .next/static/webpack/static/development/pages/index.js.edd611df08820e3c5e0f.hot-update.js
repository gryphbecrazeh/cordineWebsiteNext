webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/FrontEndViewModal.jsx":
/*!******************************************!*\
  !*** ./components/FrontEndViewModal.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// -----------------------------------------React-----------------------------------------
 // -----------------------------------------Reactstrap-----------------------------------------



var FrontEndViewModal = function FrontEndViewModal(_ref) {
  var URL_HTML = _ref.URL_HTML,
      URL_CSS = _ref.URL_CSS,
      URL_JAVASCRIPT = _ref.URL_JAVASCRIPT;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      toggle = _useState[1];

  var toggleModal = function toggleModal() {
    toggle(!isOpen);
  };

  return __jsx("div", null, __jsx("button", {
    className: "view-now-button",
    onClick: toggleModal
  }, "View Now"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: isOpen,
    toggle: toggleModal
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], null, "Test"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalFooter"], null, "Test")));
};

/* harmony default export */ __webpack_exports__["default"] = (FrontEndViewModal);

/***/ })

})
//# sourceMappingURL=index.js.edd611df08820e3c5e0f.hot-update.js.map