webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ImageViewModal.jsx":
/*!***************************************!*\
  !*** ./components/ImageViewModal.jsx ***!
  \***************************************/
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



var ImageViewModal = function ImageViewModal(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      toggle = _useState[1];

  var toggleModal = function toggleModal() {
    toggle(!isOpen);
  };

  return __jsx("div", {
    className: "img-box"
  }, __jsx("div", {
    className: "img-button-container",
    onClick: toggleModal
  }, children), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: isOpen,
    toggle: toggleModal
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], null, "Test"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalFooter"], null, "Test")));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageViewModal);

/***/ })

})
//# sourceMappingURL=index.js.ed6d43960b511893ec20.hot-update.js.map