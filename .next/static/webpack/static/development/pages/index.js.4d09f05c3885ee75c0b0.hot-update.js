webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/LoginModal.jsx":
/*!***********************************!*\
  !*** ./components/LoginModal.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/context */ "./store/context.js");
/* harmony import */ var _actions_AuthActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/AuthActions */ "./actions/AuthActions.js");




var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;
// -----------------------------------------React-----------------------------------------
 // -----------------------------------------Reactstrap-----------------------------------------

 // -----------------------------------------React Hooks-----------------------------------------

 // -----------------------------------------Actions-----------------------------------------



var LoginModal = function LoginModal() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    userName: '',
    password: ''
  }),
      user = _useState[0],
      updateUser = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_store_context__WEBPACK_IMPORTED_MODULE_6__["default"]),
      state = _useContext.state,
      actions = _useContext.actions;

  var auth = state.auth;

  var handleLogin = function handleLogin(user) {};

  var toggle = function toggle() {
    actions({
      type: 'setState',
      payload: {
        auth: {
          user: 'guest',
          isAuth: true
        }
      }
    });
  }; // Handle Updating fields entered for the log in system


  var updateField = function updateField(e) {
    updateUser(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, user, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, e.target.name, e.target.value)));
  }; // Attempts a login, if it succeeds, log in, else alert the issue


  var attemptLogin =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_actions_AuthActions__WEBPACK_IMPORTED_MODULE_7__["login"])(user).then(function (res) {
                return console.log(res);
              })["catch"](function (err) {
                return alert('Something went wrong');
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function attemptLogin() {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    isOpen: !auth.isAuth,
    toggle: toggle
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ModalHeader"], {
    toggle: toggle
  }, "Please Log in to Continue..."), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ModalBody"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Form"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], null, "User"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    name: "userName",
    placeholder: "username",
    type: "username",
    onChange: updateField
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], null, "Password"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    name: "password",
    placeholder: "password",
    type: "password",
    onChange: updateField
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    block: true,
    color: "warning",
    onClick: attemptLogin
  }, "Log In"))));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginModal);

/***/ })

})
//# sourceMappingURL=index.js.4d09f05c3885ee75c0b0.hot-update.js.map