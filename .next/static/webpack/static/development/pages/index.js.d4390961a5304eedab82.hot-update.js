webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/FeaturedCards.jsx":
/*!**************************************!*\
  !*** ./components/FeaturedCards.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/context */ "./store/context.js");
/* harmony import */ var _AddPostModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddPostModal */ "./components/AddPostModal.jsx");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
// -----------------------------------------React-----------------------------------------
 // -----------------------------------------Reactstrap-----------------------------------------

 // -----------------------------------------React Hooks-----------------------------------------

 // -----------------------------------------Components-----------------------------------------

 // -----------------------------------------Resources-----------------------------------------

var FeaturedCards = function FeaturedCards(_ref) {
  var id = _ref.id,
      children = _ref.children;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_context__WEBPACK_IMPORTED_MODULE_4__["default"]),
      state = _useContext.state,
      actions = _useContext.actions;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    isOpen: false
  }),
      modal = _useState[0],
      toggleModalOpen = _useState[1];

  var toggleModal = function toggleModal() {
    toggleModalOpen(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, modal, {
      isOpen: !modal.isOpen
    }));
  };

  var addPost = __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "addPost",
    onClick: toggleModal
  }, "+"));

  console.log(state);
  return __jsx("section", {
    id: id,
    className: "featured-cards"
  }, state.auth.role === 'admin' ? addPost : '', __jsx(_AddPostModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isOpen: modal.isOpen,
    toggle: toggleModal
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, children)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, state.frontEndItems ? Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.frontEndItems).map(function (item) {
    return item.title;
  }) : '')));
};

/* harmony default export */ __webpack_exports__["default"] = (FeaturedCards);

/***/ })

})
//# sourceMappingURL=index.js.d4390961a5304eedab82.hot-update.js.map