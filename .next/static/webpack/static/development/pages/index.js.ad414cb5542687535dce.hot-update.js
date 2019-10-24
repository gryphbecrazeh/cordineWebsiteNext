webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Logo.jsx":
/*!*****************************!*\
  !*** ./components/Logo.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/context */ "./store/context.js");
/* harmony import */ var _images_chrisWebsiteLogo_W_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/chrisWebsiteLogo-W.svg */ "./images/chrisWebsiteLogo-W.svg");
/* harmony import */ var _images_chrisWebsiteLogo_W_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_chrisWebsiteLogo_W_svg__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// -----------------------------------------React-----------------------------------------
 // -----------------------------------------React Hooks-----------------------------------------

 // -----------------------------------------Resources-----------------------------------------



var Logo = function Logo() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_context__WEBPACK_IMPORTED_MODULE_1__["default"]),
      state = _useContext.state,
      actions = _useContext.actions;

  var loginReady = state.searchQuery.match(/login/gim);

  var openModal = function openModal() {
    actions({
      type: "setState",
      payload: {
        auth: {
          isAuth: false
        },
        searchQuery: ""
      }
    });
  };

  var handleLogin = function handleLogin() {
    if (loginReady) openModal();
  }; // Convert this Component into a tray with links to the virtual resume, github, codepen, and projects
  // add a tool tip to the top that explains the functionality of the icon
  // tray is collapsable


  return __jsx("img", {
    src: _images_chrisWebsiteLogo_W_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "",
    onClick: handleLogin,
    className: "logo",
    style: {
      cursor: loginReady ? "pointer" : "default"
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ })

})
//# sourceMappingURL=index.js.ad414cb5542687535dce.hot-update.js.map