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

/***/ "./actions/FrontEndActions.js":
/*!************************************!*\
  !*** ./actions/FrontEndActions.js ***!
  \************************************/
/*! exports provided: getFrontEndItems, addFrontEndItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFrontEndItems", function() { return getFrontEndItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFrontEndItem", function() { return addFrontEndItem; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
// -----------------------------------------Axios-----------------------------------------

const getFrontEndItems = () => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/frontEnd").then(res => {
    return [...res.data];
  }).catch(err => console.log("error", err));
};
const addFrontEndItem = item => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/frontEnd", item).then(res => console.log(res)).catch(err => console.log(err));
};

/***/ }),

/***/ "./components/CenteredHeading.jsx":
/*!****************************************!*\
  !*** ./components/CenteredHeading.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// -----------------------------------------React-----------------------------------------


const CenteredHeading = ({
  picture = "#",
  height = "auto",
  children
}) => {
  return __jsx("div", {
    className: "centeredHeading",
    style: {
      height: height,
      backgroundImage: `url(${picture})`
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (CenteredHeading);

/***/ }),

/***/ "./components/FeaturedCards.jsx":
/*!**************************************!*\
  !*** ./components/FeaturedCards.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// -----------------------------------------React-----------------------------------------
 // -----------------------------------------Reactstrap-----------------------------------------

 // -----------------------------------------Components-----------------------------------------
// -----------------------------------------Resources-----------------------------------------

const FeaturedCards = ({
  id,
  children
}) => {
  return __jsx("section", {
    id: id,
    className: "featured-cards"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, children)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, "Output Cards"))));
};

/* harmony default export */ __webpack_exports__["default"] = (FeaturedCards);

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



const LoginModal = () => {
  const {
    0: code,
    1: getCode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    state,
    actions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_context__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const {
    auth
  } = state;

  const toggle = () => {
    actions({
      type: "setState",
      payload: {
        auth: {
          user: "guest",
          isAuth: true
        }
      }
    });
  };

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: !auth.isAuth,
    toggle: toggle
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalHeader"], {
    toggle: toggle
  }, "Please Log in to Continue..."), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "User"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user",
    placeholder: "username",
    type: "username"
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "Password"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "pass",
    placeholder: "password",
    type: "password"
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    block: true,
    color: "warning"
  }, "Log In"))));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginModal);

/***/ }),

/***/ "./components/Logo.jsx":
/*!*****************************!*\
  !*** ./components/Logo.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/context */ "./store/context.js");
/* harmony import */ var _images_chrisWebsiteLogo_W_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/chrisWebsiteLogo-W.svg */ "./images/chrisWebsiteLogo-W.svg");
/* harmony import */ var _images_chrisWebsiteLogo_W_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_chrisWebsiteLogo_W_svg__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// -----------------------------------------React-----------------------------------------
 // -----------------------------------------React Hooks-----------------------------------------

 // -----------------------------------------Resources-----------------------------------------



const Logo = () => {
  const {
    state,
    actions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  let loginReady = state.searchQuery.match(/login/gim);

  const openModal = () => {
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

  const handleLogin = () => {
    if (loginReady) openModal();
  };

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
  }, ".nav-container.jsx-2194696776{position:-webkit-sticky;position:sticky;top:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS9jb3JkaW5lV2Vic2l0ZU5leHQvY29tcG9uZW50cy9OYXZCYXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCSyxBQUd1Qix3Q0FDVixNQUNQIiwiZmlsZSI6Ii9ob21lL3VidW50dS9jb3JkaW5lV2Vic2l0ZU5leHQvY29tcG9uZW50cy9OYXZCYXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1OZXh0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tUmVhY3RzdHJhcC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgeyBOYXYsIE5hdkxpbmssIE5hdkl0ZW0gfSBmcm9tICdyZWFjdHN0cmFwJztcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tUmVhY3QtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vc2Nzcy9zdHlsZS5zY3NzJztcblxuY29uc3QgTmF2QmFyID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSduYXYtY29udGFpbmVyIGdsYXNzJz5cblx0XHRcdDxOYXY+XG5cdFx0XHRcdDxOYXZJdGVtPlxuXHRcdFx0XHRcdDxOYXZMaW5rIGhyZWY9Jy8nPkhvbWU8L05hdkxpbms+XG5cdFx0XHRcdDwvTmF2SXRlbT5cblx0XHRcdFx0PE5hdkl0ZW0+XG5cdFx0XHRcdFx0PE5hdkxpbmsgaHJlZj0nLyc+RnJvbnQgRW5kPC9OYXZMaW5rPlxuXHRcdFx0XHQ8L05hdkl0ZW0+XG5cdFx0XHRcdDxOYXZJdGVtPlxuXHRcdFx0XHRcdDxOYXZMaW5rIGhyZWY9Jy8nPlByb2plY3RzPC9OYXZMaW5rPlxuXHRcdFx0XHQ8L05hdkl0ZW0+XG5cdFx0XHQ8L05hdj5cblx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdHtgXG5cdFx0XHRcdFx0Lm5hdi1jb250YWluZXIge1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IHN0aWNreTtcblx0XHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9XG5cdFx0XHQ8L3N0eWxlPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcbiJdfQ== */\n/*@ sourceURL=/home/ubuntu/cordineWebsiteNext/components/NavBar.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./images/chrisWebsiteLogo-W.svg":
/*!***************************************!*\
  !*** ./images/chrisWebsiteLogo-W.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/chrisWebsiteLogo-W-5cddad12e9b6d75e2cdc19e7ffbaaa48.svg";

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
/* harmony import */ var _components_FeaturedCards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FeaturedCards */ "./components/FeaturedCards.jsx");
/* harmony import */ var _layouts_document__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layouts/document */ "./layouts/document.jsx");
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Logo */ "./components/Logo.jsx");
/* harmony import */ var _actions_FrontEndActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions/FrontEndActions */ "./actions/FrontEndActions.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
// -----------------------------------------Sass-----------------------------------------
 // -----------------------------------------Reactstrap-----------------------------------------

 // -----------------------------------------React-----------------------------------------

 // -----------------------------------------React Hooks-----------------------------------------

 // -----------------------------------------Components-----------------------------------------




 // -----------------------------------------Resources-----------------------------------------
// -----------------------------------------Actions-----------------------------------------


/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    state,
    actions
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_context__WEBPACK_IMPORTED_MODULE_3__["default"]);

  let onChange = e => {
    actions({
      type: "setState",
      payload: {
        searchQuery: e.target.value,
        frontEndItems: Object(_actions_FrontEndActions__WEBPACK_IMPORTED_MODULE_8__["getFrontEndItems"])()
      }
    });
  };

  return __jsx(_layouts_document__WEBPACK_IMPORTED_MODULE_6__["default"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx("header", null, __jsx(_components_CenteredHeading__WEBPACK_IMPORTED_MODULE_4__["default"], {
    picture: "https://images.pexels.com/photos/327308/pexels-photo-327308.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "hero"
  }, __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_7__["default"], null), __jsx("div", null, __jsx("h1", {
    className: "quickSand"
  }, __jsx("span", {
    style: {
      color: "white"
    }
  }, "New York"), " Web Developer"), __jsx("div", {
    className: "search-container d-none d-md-block"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "search",
    placeholder: "What are you looking for?",
    value: state.searchQuery,
    onChange: onChange
  })), __jsx("p", {
    className: "subsearch"
  }, "Use the search bar above to immediately find", " ", __jsx("a", {
    href: "#"
  }, "related work"), " I've done, or scroll down to view my featured projects and front end design."), __jsx("p", null, __jsx("a", {
    href: "https://github.com/gryphbecrazeh"
  }, "GitHub"), ",", " ", __jsx("a", {
    href: "https://codepen.io/gryphbecrazeh"
  }, "Codepen"), ",", " ", __jsx("a", {
    href: "/projects"
  }, "Projects")), __jsx("div", null, __jsx("a", {
    href: "/"
  }, "Download Resume Now")))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(_components_FeaturedCards__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "related-work"
  }, __jsx("h2", null, "Featured Work"), __jsx("p", null, "I like to be constantly busy, and frequently work on several projects at a time, and am always writing, working out ideas, and prototyping for proof of concept. I've listed a few of my favorite work below. These range from a basic HTML and CSS templating, to full stack applications with a clear goal in mind."), __jsx("p", null, "Culpa minim nulla sit elit. Sit dolore sint minim cillum. Elit ullamco deserunt sit proident aliquip fugiat aute dolor. Sit pariatur laborum duis ad eu qui deserunt irure laborum irure id reprehenderit mollit magna. Fugiat deserunt mollit aute voluptate pariatur aliquip ullamco cupidatat nulla eiusmod."))));
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

module.exports = __webpack_require__(/*! /home/ubuntu/cordineWebsiteNext/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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