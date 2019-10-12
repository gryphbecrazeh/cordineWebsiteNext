webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/context */ "./store/context.js");
/* harmony import */ var _components_CenteredHeading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CenteredHeading */ "./components/CenteredHeading.jsx");
/* harmony import */ var _layouts_document__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layouts/document */ "./layouts/document.jsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;
// -----------------------------------------Sass-----------------------------------------
 // -----------------------------------------Reactstrap-----------------------------------------

 // -----------------------------------------React-----------------------------------------

 // -----------------------------------------React Hooks-----------------------------------------

 // -----------------------------------------Components-----------------------------------------


 // -----------------------------------------Resources-----------------------------------------

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_store_context__WEBPACK_IMPORTED_MODULE_4__["default"]),
      searchQuery = _useContext.searchQuery;

  searchQuery = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("searchQuery"), 'x');
  console.log(searchQuery);

  var onChange = function onChange(e) {
    console.log(e.target.value);
  };

  return __jsx(_layouts_document__WEBPACK_IMPORTED_MODULE_6__["default"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx("header", null, __jsx(_components_CenteredHeading__WEBPACK_IMPORTED_MODULE_5__["default"], {
    picture: "https://images.pexels.com/photos/327308/pexels-photo-327308.jpeg"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    fluid: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "hero"
  }, __jsx("img", {
    src: "http://cordine.site/static/media/christopher-logo-white.427e237a.png",
    "class": "logo"
  }), __jsx("div", null, __jsx("h1", {
    className: "quickSand"
  }, __jsx("span", {
    style: {
      color: 'white'
    }
  }, "New York"), " Web Developer"), __jsx("div", {
    className: "search-container"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "search",
    placeholder: "What are you looking for?",
    onChange: onChange
  })), __jsx("p", {
    className: "subsearch"
  }, "Use the search bar above to immediately find", ' ', __jsx("a", {
    href: "#"
  }, "related work"), " I've done, or scroll down to view my featured projects and front end design."), __jsx("p", null, __jsx("a", {
    href: "https://github.com/gryphbecrazeh"
  }, "GitHub"), ",", __jsx("a", {
    href: "https://codepen.io/gryphbecrazeh"
  }, "Codepen"), ",", __jsx("a", {
    href: "/"
  }, "Download Resume"), ",", __jsx("a", {
    href: "/projects"
  }, "Projects")))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx("section", {
    id: "related-work"
  }, "Test")));
});

/***/ })

})
//# sourceMappingURL=index.js.6751cf4f637bb6620dac.hot-update.js.map