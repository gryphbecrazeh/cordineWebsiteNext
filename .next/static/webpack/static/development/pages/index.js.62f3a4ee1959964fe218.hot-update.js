webpackHotUpdate("static/development/pages/index.js",{

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



var LoginModal = function LoginModal() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      code = _useState[0],
      getCode = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_context__WEBPACK_IMPORTED_MODULE_2__["default"]),
      state = _useContext.state,
      actions = _useContext.actions;

  var auth = state.auth;

  var toggle = function toggle() {
    actions({
      type: "setState",
      payload: {
        auth: {
          user: "guest",
          isAuth: true
        }
      }
    });
  };

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: !auth.isAuth,
    toggle: toggle
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalHeader"], {
    toggle: toggle
  }, "Please Log in to Continue..."), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "Email"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "email",
    placeholder: "xxx@domain.com",
    type: "email"
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "Password"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "pass",
    placeholder: "password",
    type: "password"
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    block: true,
    color: "warning"
  }, "Log In"))));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginModal);

/***/ })

})
//# sourceMappingURL=index.js.62f3a4ee1959964fe218.hot-update.js.map