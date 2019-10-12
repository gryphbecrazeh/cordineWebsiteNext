module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CenteredHeading.jsx":
/*!****************************************!*\
  !*** ./components/CenteredHeading.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// -----------------------------------------React-----------------------------------------


const CenteredHeading = ({
  picture,
  height = 'auto',
  children
}) => {
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1985463911", [height, picture]]]) + " " + 'centeredHeading'
  }, children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1985463911",
    dynamic: [height, picture]
  }, `.centeredHeading.__jsx-style-dynamic-selector{height:${height};background-image:url(${picture});}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcR2FtaW5nIHYyLjBcXERlc2t0b3BcXG5leHQtZXhwcmVzcy1tb25nby1wcmUtc2V0XFxjb21wb25lbnRzXFxDZW50ZXJlZEhlYWRpbmcuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9lLEFBRzBDLG9DQUNlLG1EQUNwRCIsImZpbGUiOiJDOlxcVXNlcnNcXEdhbWluZyB2Mi4wXFxEZXNrdG9wXFxuZXh0LWV4cHJlc3MtbW9uZ28tcHJlLXNldFxcY29tcG9uZW50c1xcQ2VudGVyZWRIZWFkaW5nLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tUmVhY3QtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQ2VudGVyZWRIZWFkaW5nID0gKHsgcGljdHVyZSwgaGVpZ2h0ID0gJ2F1dG8nLCBjaGlsZHJlbiB9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjZW50ZXJlZEhlYWRpbmcnPlxyXG5cdFx0XHR7Y2hpbGRyZW59XHJcblx0XHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdFx0XHQuY2VudGVyZWRIZWFkaW5nIHtcclxuXHRcdFx0XHRcdGhlaWdodDogJHtoZWlnaHR9O1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cGljdHVyZX0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0YH08L3N0eWxlPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQ2VudGVyZWRIZWFkaW5nO1xyXG4iXX0= */
/*@ sourceURL=C:\Users\Gaming v2.0\Desktop\next-express-mongo-pre-set\components\CenteredHeading.jsx */`));
};

/* harmony default export */ __webpack_exports__["default"] = (CenteredHeading);

/***/ }),

/***/ "./components/LoginModal.jsx":
/*!***********************************!*\
  !*** ./components/LoginModal.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/context */ "./store/context.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// -----------------------------------------React-----------------------------------------
 // -----------------------------------------Reactstrap-----------------------------------------

 // -----------------------------------------React Hooks-----------------------------------------



const LoginModal = ({
  isOpen = false,
  toggle = () => null
}) => {
  const {
    0: code,
    1: getCode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    auth
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_context__WEBPACK_IMPORTED_MODULE_2__["default"]);
  console.log(auth);
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: isOpen,
    toggle: toggle
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalHeader"], {
    toggle: toggle
  }, "Test"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], null, "Test"));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginModal);

/***/ }),

/***/ "./components/NavBar.jsx":
/*!*******************************!*\
  !*** ./components/NavBar.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
// -----------------------------------------Next-----------------------------------------
// -----------------------------------------Reactstrap-----------------------------------------
 // -----------------------------------------React-----------------------------------------




const NavBar = () => {
  return __jsx("div", {
    className: "jsx-2194696776" + " " + 'nav-container glass'
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    href: "/"
  }, "Home")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    href: "/"
  }, "Front End")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    href: "/"
  }, "Projects"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2194696776"
  }, ".nav-container.jsx-2194696776{position:-webkit-sticky;position:sticky;top:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcR2FtaW5nIHYyLjBcXERlc2t0b3BcXG5leHQtZXhwcmVzcy1tb25nby1wcmUtc2V0XFxjb21wb25lbnRzXFxOYXZCYXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCSyxBQUd1Qix3Q0FDVixNQUNQIiwiZmlsZSI6IkM6XFxVc2Vyc1xcR2FtaW5nIHYyLjBcXERlc2t0b3BcXG5leHQtZXhwcmVzcy1tb25nby1wcmUtc2V0XFxjb21wb25lbnRzXFxOYXZCYXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1OZXh0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1SZWFjdHN0cmFwLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuaW1wb3J0IHsgTmF2LCBOYXZMaW5rLCBOYXZJdGVtIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tUmVhY3QtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4uL3Njc3Mvc3R5bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSduYXYtY29udGFpbmVyIGdsYXNzJz5cclxuXHRcdFx0PE5hdj5cclxuXHRcdFx0XHQ8TmF2SXRlbT5cclxuXHRcdFx0XHRcdDxOYXZMaW5rIGhyZWY9Jy8nPkhvbWU8L05hdkxpbms+XHJcblx0XHRcdFx0PC9OYXZJdGVtPlxyXG5cdFx0XHRcdDxOYXZJdGVtPlxyXG5cdFx0XHRcdFx0PE5hdkxpbmsgaHJlZj0nLyc+RnJvbnQgRW5kPC9OYXZMaW5rPlxyXG5cdFx0XHRcdDwvTmF2SXRlbT5cclxuXHRcdFx0XHQ8TmF2SXRlbT5cclxuXHRcdFx0XHRcdDxOYXZMaW5rIGhyZWY9Jy8nPlByb2plY3RzPC9OYXZMaW5rPlxyXG5cdFx0XHRcdDwvTmF2SXRlbT5cclxuXHRcdFx0PC9OYXY+XHJcblx0XHRcdDxzdHlsZSBqc3g+XHJcblx0XHRcdFx0e2BcclxuXHRcdFx0XHRcdC5uYXYtY29udGFpbmVyIHtcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IHN0aWNreTtcclxuXHRcdFx0XHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdGB9XHJcblx0XHRcdDwvc3R5bGU+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Gaming v2.0\\Desktop\\next-express-mongo-pre-set\\components\\NavBar.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./layouts/document.jsx":
/*!******************************!*\
  !*** ./layouts/document.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NavBar */ "./components/NavBar.jsx");
/* harmony import */ var _components_LoginModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LoginModal */ "./components/LoginModal.jsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;
 // -----------------------------------------Next-----------------------------------------

 // -----------------------------------------Reactstrap-----------------------------------------

 // -----------------------------------------React-----------------------------------------

 // -----------------------------------------Components-----------------------------------------




const Document = props => {
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    fluid: true
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Christopher Cordine New York Based Web Developer"), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Bangers|Oswald|Quicksand|Shadows+Into+Light|Special+Elite|Vibes&display=swap",
    rel: "stylesheet"
  })), __jsx(_components_LoginModal__WEBPACK_IMPORTED_MODULE_5__["default"], null), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Document);

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/context */ "./store/context.js");
/* harmony import */ var _components_CenteredHeading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CenteredHeading */ "./components/CenteredHeading.jsx");
/* harmony import */ var _layouts_document__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/document */ "./layouts/document.jsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
// -----------------------------------------Sass-----------------------------------------
 // -----------------------------------------Reactstrap-----------------------------------------

 // -----------------------------------------React-----------------------------------------

 // -----------------------------------------React Hooks-----------------------------------------

 // -----------------------------------------Components-----------------------------------------


 // -----------------------------------------Resources-----------------------------------------

/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    searchQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_context__WEBPACK_IMPORTED_MODULE_3__["default"]);
  console.log(searchQuery);

  let onChange = e => {
    console.log(e.target.value);
  };

  return __jsx(_layouts_document__WEBPACK_IMPORTED_MODULE_5__["default"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx("header", null, __jsx(_components_CenteredHeading__WEBPACK_IMPORTED_MODULE_4__["default"], {
    picture: "https://images.pexels.com/photos/327308/pexels-photo-327308.jpeg"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "hero"
  }, __jsx("img", {
    src: "http://cordine.site/static/media/christopher-logo-white.427e237a.png",
    class: "logo"
  }), __jsx("div", null, __jsx("h1", {
    className: "quickSand"
  }, __jsx("span", {
    style: {
      color: 'white'
    }
  }, "New York"), " Web Developer"), __jsx("div", {
    className: "search-container"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
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
  }, "Projects")))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx("section", {
    id: "related-work"
  }, "Test")));
});

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./store/context.js":
/*!**************************!*\
  !*** ./store/context.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Context = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
/* harmony default export */ __webpack_exports__["default"] = (Context);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Gaming v2.0\Desktop\next-express-mongo-pre-set\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map