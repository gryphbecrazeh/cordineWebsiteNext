webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/AddPostModal.jsx":
/*!*************************************!*\
  !*** ./components/AddPostModal.jsx ***!
  \*************************************/
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



var AddPostModal = function AddPostModal(_ref) {
  var isOpen = _ref.isOpen,
      toggle = _ref.toggle;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    title: '',
    technologies: [],
    description: '',
    images: [],
    repo: '',
    codePen: ''
  }),
      post = _useState[0],
      updatePost = _useState[1];

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: isOpen,
    toggle: toggle
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalHeader"], {
    toggle: toggle
  }, "Add a featured post"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], {
    className: "w-100"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Create Front End Post"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Create Project Post")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "Title"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    name: "title",
    placeholder: "Post Title"
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "Description"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "textarea",
    name: "description",
    placeholder: "Post Description"
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "Repo"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    name: "repo",
    placeholder: "Repository URL"
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "CodePen"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    name: "codepen",
    placeholder: "CodePen URL"
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "Technologies"), __jsx("div", {
    id: "technology-output"
  }, __jsx("span", {
    className: "technology"
  }, "React", __jsx("span", {
    className: "close"
  }, "x"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    name: "technologies",
    placeholder: "React, Bootstrap, Css, Javascript...",
    className: "mt-2"
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Add Technology")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "Add Images"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "file",
    name: "images"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (AddPostModal);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js":
false

})
//# sourceMappingURL=index.js.997043cbec7b90c77254.hot-update.js.map