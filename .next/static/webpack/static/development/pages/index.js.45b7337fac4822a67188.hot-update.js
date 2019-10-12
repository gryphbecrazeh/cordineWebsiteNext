webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/LoginModal.jsx":
/*!***********************************!*\
  !*** ./components/LoginModal.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/context */ "./store/context.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// -----------------------------------------React-----------------------------------------
 // -----------------------------------------Reactstrap-----------------------------------------

 // -----------------------------------------React Hooks-----------------------------------------



var LoginModal = function LoginModal(_ref) {
  var _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
      _ref$toggle = _ref.toggle,
      toggle = _ref$toggle === void 0 ? function () {
    return null;
  } : _ref$toggle;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      code = _useState[0],
      getCode = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_context__WEBPACK_IMPORTED_MODULE_2__["default"]),
      auth = _useContext.auth;

  console.log(state);
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: isOpen,
    toggle: toggle
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalHeader"], {
    toggle: toggle
  }, "Test"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], null, "Test"));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginModal);

/***/ })

})
//# sourceMappingURL=index.js.45b7337fac4822a67188.hot-update.js.map