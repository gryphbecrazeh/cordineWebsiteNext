webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/LoginModal.jsx":
/*!***********************************!*\
  !*** ./components/LoginModal.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/context */ "./store/context.js");
/* harmony import */ var _actions_AuthActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/AuthActions */ "./actions/AuthActions.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
// -----------------------------------------React-----------------------------------------
 // -----------------------------------------Reactstrap-----------------------------------------

 // -----------------------------------------React Hooks-----------------------------------------

 // -----------------------------------------Actions-----------------------------------------



var LoginModal = function LoginModal() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    userName: "",
    password: ""
  }),
      user = _useState[0],
      updateUser = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_context__WEBPACK_IMPORTED_MODULE_4__["default"]),
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

  var updateField = function updateField(e) {
    console.log(e.target.name, e.target.value);
    updateUser(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, user, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
  };

  console.log(user);
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    isOpen: !auth.isAuth,
    toggle: toggle
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalHeader"], {
    toggle: toggle
  }, "Please Log in to Continue..."), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], null, "User"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    name: "userName",
    placeholder: "username",
    type: "username",
    onChange: updateField
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], null, "Password"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    name: "password",
    placeholder: "password",
    type: "password",
    onChange: updateField
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    block: true,
    color: "warning"
  }, "Log In"))));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginModal);

/***/ })

})
//# sourceMappingURL=index.js.a3a70ea63aa19ce71db6.hot-update.js.map