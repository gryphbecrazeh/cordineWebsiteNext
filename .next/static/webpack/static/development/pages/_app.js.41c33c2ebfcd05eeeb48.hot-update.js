webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./actions/AuthActions.js":
/*!********************************!*\
  !*** ./actions/AuthActions.js ***!
  \********************************/
/*! exports provided: login, tokenConfig, loadUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenConfig", function() { return tokenConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUser", function() { return loadUser; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


// -----------------------------------------Axios-----------------------------------------

var login =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(user) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/auth", user).then(function (res) {
              localStorage.setItem("token", res.data.token);
              return res.data.user;
            })["catch"](function (err) {
              return console.log(err);
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function login(_x) {
    return _ref.apply(this, arguments);
  };
}();
var tokenConfig = function tokenConfig() {
  console.log("getting token"); // Get token from local storage

  var token = localStorage.getItem("token");
  console.log(token); // Headers

  var config = {
    headers: {
      "Content-type": "application/json"
    }
  }; // If token, add to headers

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
}; // Check token and load user

var loadUser =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log("loading user action"); // User Loading

            _context2.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/auth/user", tokenConfig()).then(function (res) {
              return res;
            })["catch"](function (err) {
              return console.log(err);
            });

          case 3:
            return _context2.abrupt("return", _context2.sent);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function loadUser() {
    return _ref2.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=_app.js.41c33c2ebfcd05eeeb48.hot-update.js.map