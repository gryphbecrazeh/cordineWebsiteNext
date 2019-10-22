webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/AddPostModal.jsx":
/*!*************************************!*\
  !*** ./components/AddPostModal.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/context */ "./store/context.js");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;
// -----------------------------------------React-----------------------------------------
 // -----------------------------------------Reactstrap-----------------------------------------

 // -----------------------------------------React Hooks-----------------------------------------



var AddPostModal = function AddPostModal(_ref) {
  var isOpen = _ref.isOpen,
      toggle = _ref.toggle;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    title: '',
    technologies: [],
    description: '',
    images: [],
    repo: '',
    codePen: '',
    technology: ''
  }),
      post = _useState[0],
      updatePost = _useState[1];

  var handleUpdatePost = function handleUpdatePost(e) {
    updatePost(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, post, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, e.target.name, e.target.value)));
  };

  var handleAddTechnology = function handleAddTechnology() {
    var technology = post.technology,
        technologies = post.technologies;
    if (technology === '') return 0;
    var updatedTechnologies = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(technologies), [technology]);
    updatePost(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, post, {
      technologies: updatedTechnologies,
      technology: ''
    }));
  };

  var handleRemoveTechnology = function handleRemoveTechnology(e) {
    var target = e.target.getAttribute('name');
    var updatedTechnologies = post.technologies.filter(function (item) {
      return item !== target;
    });
    updatePost(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, post, {
      technologies: updatedTechnologies,
      technology: ''
    }));
  };

  console.log(post);
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    isOpen: isOpen,
    toggle: toggle
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["ModalHeader"], {
    toggle: toggle
  }, "Add a featured post"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["ModalBody"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"], {
    className: "w-100"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], null, "Create Front End Post"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], null, "Create Project Post")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], null, "Title"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "text",
    name: "title",
    placeholder: "Post Title",
    onChange: handleUpdatePost
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], null, "Description"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "textarea",
    name: "description",
    placeholder: "Post Description",
    onChange: handleUpdatePost
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], null, "Repo"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "text",
    name: "repo",
    placeholder: "Repository URL",
    onChange: handleUpdatePost
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], null, "CodePen"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "text",
    name: "codePen",
    placeholder: "CodePen URL",
    onChange: handleUpdatePost
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], null, "Technologies"), __jsx("div", {
    id: "technology-output"
  }, post.technologies.map(function (item) {
    return __jsx("div", {
      className: "technology",
      name: item
    }, item, __jsx("span", {
      className: "close",
      name: item,
      onClick: handleRemoveTechnology
    }, "x"));
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    className: "mt-2"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "text",
    name: "technology",
    placeholder: "React, Bootstrap, Css, Javascript...",
    value: post.technology,
    onChange: handleUpdatePost
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroupAddon"], {
    addonType: "append"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: handleAddTechnology
  }, "Add Technology"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], null, "Add Images"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "file",
    name: "images"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (AddPostModal);

/***/ })

})
//# sourceMappingURL=index.js.72b1dd9e52afeedef6d9.hot-update.js.map