webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/FeatureCard.jsx":
/*!************************************!*\
  !*** ./components/FeatureCard.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ImageViewModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ImageViewModal */ "./components/ImageViewModal.jsx");
/* harmony import */ var _components_FrontEndViewModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FrontEndViewModal */ "./components/FrontEndViewModal.jsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// -----------------------------------------React-----------------------------------------
 // -----------------------------------------Components-----------------------------------------




var FeatureCard = function FeatureCard(_ref) {
  var post = _ref.post,
      key = _ref.key;
  var title = post.title,
      technologies = post.technologies,
      description = post.description,
      _id = post._id;

  var authActions = __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("ul", {
    className: "auth-post-actions"
  }, __jsx("li", null, "Edit"), __jsx("li", null, "Delete")));

  return __jsx("div", {
    className: "card relative",
    key: "".concat(key)
  }, authActions, __jsx("div", {
    className: "row"
  }, __jsx("h2", {
    className: "card-title"
  }, title)), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "technologies"
  }, __jsx("span", {
    className: "accent"
  }, "Tech"), ":", " ", technologies.map(function (item, index) {
    return __jsx("span", {
      key: "".concat(key, "-tech-").concat(index)
    }, item, " ");
  }))), __jsx("div", {
    className: "row"
  }, __jsx("p", {
    className: "description"
  }, description)), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "view-now-button"
  }, "View Now")), __jsx("div", {
    className: "row relative"
  }, __jsx("div", {
    className: "active-image-container"
  })), __jsx("div", {
    className: "row image-container"
  }, __jsx(_components_ImageViewModal__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx(_components_ImageViewModal__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx(_components_ImageViewModal__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx(_components_ImageViewModal__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx(_components_ImageViewModal__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (FeatureCard);

/***/ }),

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

  return __jsx("div", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: toggleModal
  }, "View Now"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: isOpen,
    toggle: toggleModal
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], null, "Test"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalFooter"], null, "Test")));
};

/* harmony default export */ __webpack_exports__["default"] = (FrontEndViewModal);

/***/ })

})
//# sourceMappingURL=index.js.1bc5aaee64af4947fd62.hot-update.js.map