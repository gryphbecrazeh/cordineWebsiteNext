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
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var FeatureCard = function FeatureCard(_ref) {
  var post = _ref.post,
      key = _ref.key;
  var title = post.title,
      technologies = post.technologies,
      description = post.description,
      _id = post._id;
  return __jsx("div", {
    className: "card relative",
    key: "".concat(key)
  }, __jsx("div", {
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
  }, __jsx("div", {
    className: "img-box"
  }), __jsx("div", {
    className: "img-box"
  }), __jsx("div", {
    className: "img-box"
  }), __jsx("div", {
    className: "img-box"
  }), __jsx("div", {
    className: "img-box"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (FeatureCard);

/***/ })

})
//# sourceMappingURL=index.js.7aa125eb604c1f63422d.hot-update.js.map