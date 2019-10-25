webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/context */ "./store/context.js");
/* harmony import */ var _components_CenteredHeading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CenteredHeading */ "./components/CenteredHeading.jsx");
/* harmony import */ var _components_FeaturedCards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/FeaturedCards */ "./components/FeaturedCards.jsx");
/* harmony import */ var _layouts_document__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layouts/document */ "./layouts/document.jsx");
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Logo */ "./components/Logo.jsx");
/* harmony import */ var _actions_FrontEndActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../actions/FrontEndActions */ "./actions/FrontEndActions.js");



var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;
// -----------------------------------------Sass-----------------------------------------
 // -----------------------------------------Reactstrap-----------------------------------------

 // -----------------------------------------React-----------------------------------------

 // -----------------------------------------React Hooks-----------------------------------------

 // -----------------------------------------Components-----------------------------------------




 // -----------------------------------------Resources-----------------------------------------
// -----------------------------------------Actions-----------------------------------------


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(_store_context__WEBPACK_IMPORTED_MODULE_6__["default"]),
      state = _useContext.state,
      actions = _useContext.actions;

  var onChange =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var val;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              val = e.target.value;
              _context.next = 3;
              return Object(_actions_FrontEndActions__WEBPACK_IMPORTED_MODULE_11__["getFrontEndItems"])(val).then(function (res) {
                return actions({
                  type: "setState",
                  payload: {
                    searchQuery: val,
                    frontEndPosts: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(res)
                  }
                });
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  console.log(state);
  if (!state.frontEndPosts.length > 0) Object(_actions_FrontEndActions__WEBPACK_IMPORTED_MODULE_11__["getFrontEndItems"])().then(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    actions({
      type: "setState",
      payload: {
        frontEndPosts: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(res)
      }
    });
  })["catch"](function (err) {
    return console.log(err);
  });
  return __jsx(_layouts_document__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, __jsx("header", null, __jsx(_components_CenteredHeading__WEBPACK_IMPORTED_MODULE_7__["default"], {
    picture: "https://images.pexels.com/photos/327308/pexels-photo-327308.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    fluid: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "hero"
  }, __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_10__["default"], null), __jsx("div", null, __jsx("h1", {
    className: "quickSand"
  }, __jsx("span", {
    style: {
      color: "white"
    }
  }, "New York"), " Web Developer"), __jsx("div", {
    className: "search-container d-none d-md-block"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "search",
    placeholder: "What are you looking for?",
    onChange: onChange
  }), __jsx("p", {
    className: "subsearch"
  }, "Use the search bar above to immediately find", " ", __jsx("a", {
    href: "#related-work"
  }, "related work"), " I've done, or scroll down to view my featured projects and front end design.")), __jsx("p", null, __jsx("a", {
    href: "https://github.com/gryphbecrazeh"
  }, "GitHub"), ",", " ", __jsx("a", {
    href: "https://codepen.io/gryphbecrazeh"
  }, "Codepen"), ",", " ", __jsx("a", {
    href: "/projects"
  }, "Projects")), __jsx("div", {
    className: "resume-button"
  }, __jsx("a", {
    href: "/"
  }, "View Virtual Resume Now")))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, __jsx(_components_FeaturedCards__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "related-work"
  }, __jsx("h3", {
    className: "accent quickSand mb-4"
  }, __jsx("em", null, __jsx("span", {
    className: "accent-2"
  }, "Featured"), " Work")), __jsx("p", {
    className: "elite"
  }, "I dedicate an ", __jsx("em", {
    className: "accent"
  }, "absolutely massive"), " amount of time to studying and experimenting with my never ending list of technologies and design elements. I generally will not go a day without playing with some sort of idea, or investigating and attempting to recreate an interesting feature I've seen online. My codepen is full of random tests, and collections of forks of things that I felt were really cool and interesting. So much so that I've alloccated some space on my website to feature just that."), __jsx("p", {
    className: "elite"
  }, "Below you will find a lot of front end work that I have found fun and interesting, most of which being CSS and Bootstrap renditions of mockups I've made or found online. For more advanced front end work, feel free to check out my front-end-only react, and", " ", __jsx("em", {
    className: "accent"
  }, "full MERN stack"), " projects", " ", __jsx("a", {
    className: "accent",
    href: "/projects"
  }, "here"), "."), __jsx("hr", {
    className: "mb-5"
  }))));
});

/***/ })

})
//# sourceMappingURL=index.js.a03cbb2a777cc16dbd69.hot-update.js.map