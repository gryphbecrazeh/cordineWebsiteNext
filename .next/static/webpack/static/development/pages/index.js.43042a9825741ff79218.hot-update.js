webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/FeaturedCards.jsx":
/*!**************************************!*\
  !*** ./components/FeaturedCards.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _AddPostModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddPostModal */ "./components/AddPostModal.jsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// -----------------------------------------React-----------------------------------------
 // -----------------------------------------Reactstrap-----------------------------------------

 // -----------------------------------------Components-----------------------------------------

 // -----------------------------------------Resources-----------------------------------------

var FeaturedCards = function FeaturedCards(_ref) {
  var id = _ref.id,
      children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    isOpen: false
  }),
      modal = _useState[0],
      toggleModalOpen = _useState[1];

  var toggleModal = function toggleModal() {
    toggleModalOpen(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, modal, {
      isOpen: !modal.isOpen
    }));
  };

  var addPost = __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "addPost",
    onClick: toggleModal
  }, "+"));

  return __jsx("section", {
    id: id,
    className: "featured-cards"
  }, __jsx(_AddPostModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isOpen: modal.isOpen,
    toggle: toggleModal
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, children)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, "Output Cards"))));
};

/* harmony default export */ __webpack_exports__["default"] = (FeaturedCards);

/***/ })

})
//# sourceMappingURL=index.js.43042a9825741ff79218.hot-update.js.map