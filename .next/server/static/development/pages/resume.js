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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/AuthActions.js":
/*!********************************!*\
  !*** ./actions/AuthActions.js ***!
  \********************************/
/*! exports provided: login, tokenConfig, loadUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenConfig", function() { return tokenConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUser", function() { return loadUser; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
// -----------------------------------------Axios-----------------------------------------

const login = async user => {
  return await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/auth", user).then(res => {
    localStorage.setItem("token", res.data.token);
    return res.data.user;
  }).catch(err => console.log(err));
};
const tokenConfig = () => {
  // Get token from local storage
  const token = localStorage.getItem("token"); // Headers

  const config = {
    headers: {
      "Content-type": "application/json"
    }
  }; // If token, add to headers

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
}; // Check token and load user

const loadUser = async () => {
  // User Loading
  return await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/auth/user", tokenConfig()).then(res => res).catch(err => console.log(err));
};

/***/ }),

/***/ "./components/LoginModal.jsx":
/*!***********************************!*\
  !*** ./components/LoginModal.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/context */ "./store/context.js");
/* harmony import */ var _actions_AuthActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/AuthActions */ "./actions/AuthActions.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// -----------------------------------------React-----------------------------------------
 // -----------------------------------------Reactstrap-----------------------------------------

 // -----------------------------------------React Hooks-----------------------------------------

 // -----------------------------------------Actions-----------------------------------------



const LoginModal = () => {
  const {
    0: user,
    1: updateUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    userName: "",
    password: ""
  });
  const {
    state,
    actions
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store_context__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const {
    auth
  } = state; // Officially logs in the user

  const handleLogin = user => {
    actions({
      type: "setState",
      payload: {
        auth: {
          user: user.userName,
          isAuth: true,
          role: "admin"
        }
      }
    });
  }; // Attempts a login, if it succeeds, log in, else alert the issue


  const attemptLogin = async () => {
    await Object(_actions_AuthActions__WEBPACK_IMPORTED_MODULE_4__["login"])(user).then(res => handleLogin(res)).catch(err => alert("Something went wrong"));
  }; // Toggle is accomplished by making the active user a guest again, login modal is based on whether isAuth is true, authorized guests is the default value


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
  }; // Handle Updating fields entered for the log in system


  const updateField = e => {
    updateUser(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, user, {
      [e.target.name]: e.target.value
    }));
  };

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    isOpen: !auth.isAuth,
    toggle: toggle
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalHeader"], {
    toggle: toggle
  }, "Please Log in to Continue..."), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], null, "User"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "userName",
    placeholder: "username",
    type: "username",
    onChange: updateField
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], null, "Password"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "password",
    placeholder: "password",
    type: "password",
    onChange: updateField
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    block: true,
    color: "warning",
    onClick: attemptLogin
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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_chrisWebsiteLogo_W_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/chrisWebsiteLogo-W.svg */ "./images/chrisWebsiteLogo-W.svg");
/* harmony import */ var _images_chrisWebsiteLogo_W_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_chrisWebsiteLogo_W_svg__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// -----------------------------------------React-----------------------------------------
 // -----------------------------------------React Hooks-----------------------------------------

 // -----------------------------------------Reactstrap-----------------------------------------

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
    if (loginReady) openModal();else window.location = "/";
  }; // Convert this Component into a tray with links to the virtual resume, github, codepen, and projects
  // add a tool tip to the top that explains the functionality of the icon
  // tray is collapsable


  return __jsx("div", {
    className: "tray d-none d-md-block",
    id: "logo-tray"
  }, __jsx("img", {
    src: _images_chrisWebsiteLogo_W_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "",
    onClick: handleLogin,
    className: "logo"
  }), __jsx("ul", null, __jsx("li", {
    className: "tray-item"
  }, __jsx("a", {
    name: "resume",
    href: "/resume"
  }, "Virtual Resume")), __jsx("li", {
    className: "tray-item"
  }, __jsx("a", {
    name: "github",
    href: "https://github.com/gryphbecrazeh"
  }, "Github")), __jsx("li", {
    className: "tray-item"
  }, __jsx("a", {
    name: "codepen",
    href: "https://codepen.io/gryphbecrazeh"
  }, "Codepen")), __jsx("li", {
    className: "tray-item"
  }, __jsx("a", {
    name: "projects",
    href: "/projects"
  }, "Projects"))));
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
  }, ".nav-container.jsx-2194696776{position:-webkit-sticky;position:sticky;top:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS9ibG9nVGVzdC9jb21wb25lbnRzL05hdkJhci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JLLEFBR3VCLHdDQUNWLE1BQ1AiLCJmaWxlIjoiL2hvbWUvdWJ1bnR1L2Jsb2dUZXN0L2NvbXBvbmVudHMvTmF2QmFyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTmV4dC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVJlYWN0c3RyYXAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IHsgTmF2LCBOYXZMaW5rLCBOYXZJdGVtIH0gZnJvbSAncmVhY3RzdHJhcCc7XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVJlYWN0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4uL3Njc3Mvc3R5bGUuc2Nzcyc7XG5cbmNvbnN0IE5hdkJhciA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nbmF2LWNvbnRhaW5lciBnbGFzcyc+XG5cdFx0XHQ8TmF2PlxuXHRcdFx0XHQ8TmF2SXRlbT5cblx0XHRcdFx0XHQ8TmF2TGluayBocmVmPScvJz5Ib21lPC9OYXZMaW5rPlxuXHRcdFx0XHQ8L05hdkl0ZW0+XG5cdFx0XHRcdDxOYXZJdGVtPlxuXHRcdFx0XHRcdDxOYXZMaW5rIGhyZWY9Jy8nPkZyb250IEVuZDwvTmF2TGluaz5cblx0XHRcdFx0PC9OYXZJdGVtPlxuXHRcdFx0XHQ8TmF2SXRlbT5cblx0XHRcdFx0XHQ8TmF2TGluayBocmVmPScvJz5Qcm9qZWN0czwvTmF2TGluaz5cblx0XHRcdFx0PC9OYXZJdGVtPlxuXHRcdFx0PC9OYXY+XG5cdFx0XHQ8c3R5bGUganN4PlxuXHRcdFx0XHR7YFxuXHRcdFx0XHRcdC5uYXYtY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBzdGlja3k7XG5cdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfVxuXHRcdFx0PC9zdHlsZT5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XG4iXX0= */\n/*@ sourceURL=/home/ubuntu/blogTest/components/NavBar.jsx */"));
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/resume.jsx":
/*!**************************!*\
  !*** ./pages/resume.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/document */ "./layouts/document.jsx");
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Logo */ "./components/Logo.jsx");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// -----------------------------------------React-----------------------------------------
 // -----------------------------------------Reactstrap-----------------------------------------

 // -----------------------------------------Components-----------------------------------------


 // -----------------------------------------Sass-----------------------------------------


/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx(_layouts_document__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    id: "resume"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, __jsx("section", {
    id: "personal"
  }, __jsx("div", {
    className: "name"
  }, __jsx("a", {
    href: "/"
  }, __jsx("span", {
    className: "accent-2"
  }, "Christopher"), " Cordine")), __jsx("div", {
    className: "title"
  }, "Web Developer"), __jsx("div", {
    className: "info-contact"
  }, __jsx("div", {
    className: "email"
  }, __jsx("a", {
    href: "mailto:christopher@cordine.site"
  }, "christopher@cordine.site")), __jsx("div", {
    className: "phone"
  }, __jsx("a", {
    href: "tel:+1(516)424-2147"
  }, "(516) 424-2147")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 8
  }, __jsx("section", {
    id: "projects"
  }, __jsx("h3", null, "Projects"), __jsx("ul", null, __jsx("li", null, __jsx("strong", null, "Personal Website "), __jsx("em", null, "NextJS, ExpressJS, NodeJS, Bootstrap, Sass, React, MongoDB, Webpack"), __jsx("p", null, "Built CMS for it, uses CRUD to manage and display posts of code/projects"), __jsx("p", null, "View this project ", __jsx("a", {
    href: "/"
  }, "here"), ".")), __jsx("li", null, __jsx("strong", null, "Streamlined Company Application "), __jsx("em", null, "ReactJS, ExpressJS, NodeJS, MongoDB, Bootstrap, MongoDB, Redux"), __jsx("p", null, "User Manager, Order Manager, Shipment Manager, Receiving Manager, built in ERP system, website auditor, internal company communications, save/track any changes made to anything, tracks stagnant prices, orders without a shipping update, identify broken links/filters on the product and category pages, track payments from customers, to distributors, taxes, etc. Everything is uploadable and update-able via CSV, custom user authentication system built in Express. Designed middleware functions to reduce client resource load, and carefully planned out measures to use and pass data between the client and server."), __jsx("p", null)), __jsx("li", null, __jsx("strong", null, " URL and CSV loadable Content Spinner "), __jsx("em", null, "NextJS, React, ExpressJS, NodeJS, Bootstrap, Webpack "), __jsx("p", null, "Scrape a URL or load in a csv potentially containing thousands of products, pipe through all the fields and identify specific keywords to generate unique and SEO targetted descriptions, names, etc. Outputs a new csv with unique information for all products put into it, or allowing a queue of URLs to scrape with the express custom server, and provide the same result."), __jsx("p", null)), __jsx("li", null, __jsx("strong", null, " Click Scheduler Chrome Extension "), __jsx("em", null, "Javascript, CSS, HTML "), __jsx("p", null, "Injects a script to call the click() function on an element once a specific time is met or exceeded. Absolves the need for an expensive cron job product import for our magento website, published to the Chrome Web Store for free"), __jsx("p", null, "View this project", " ", __jsx("a", {
    href: "https://chrome.google.com/webstore/detail/click-scheduler-pro/cglnpjdjjinnbaioncegaiaifdpildne?hl=en"
  }, "here"), ".")), __jsx("li", null, __jsx("strong", null, " Bear Alert Chrome Extension "), __jsx("em", null, " Javascript, CSS, HTML, Regex "), __jsx("p", null, "Injects a script to every page you access, trying to find the occurrence of the word \"bear\", mostly a proof of concept for another extension/app combo that I am developing. Has a cool stats page to access to see how many \"bear\"s you've seen, and which pages had the most occurences of bears. Published to the Chrome Web Store for free and fun."), __jsx("p", null, "View this project", " ", __jsx("a", {
    href: "https://chrome.google.com/webstore/detail/bear-alert/idhligenifohdkgfnadnppainnoicmib?hl=en"
  }, "here"), ".")), __jsx("li", null, __jsx("strong", null, " ShopCSV Chrome Extension "), __jsx("em", null, "Javascript, CSS, HTML, Regex "), __jsx("p", null, "Injects a script on every page you access, you can choose to scrape that page, create a csv row, and append it to the total CSV file in the background page. Once you've made your selection, you can then goto the background page to download the CSV file, clearing it out from the extension, and allowing you to upload the CSV onto your Magento, Wordpress, Shopify, or other e-commerce website/platform, to absolve the tediousness of attempting to contact a manufacturer and hope that they have a quality dataset to provide you. Future implementations of this extension intend to function with a full stack application, allowing you to store all the previously created CSV's into a webserver, combine as many of them as you like, and connect to your stores api to upload the products in real time, without the need to generate any CSV files."), __jsx("p", null))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, __jsx("section", {
    id: "skills"
  }, __jsx("h3", null, "Skills"), __jsx("ul", null, __jsx("li", null, __jsx("strong", {
    className: "accent"
  }, "HTML "), " - ", __jsx("em", null, "(Started learning in 2010 Highschool, Projects, Work)")), __jsx("li", null, __jsx("strong", {
    className: "accent"
  }, "CSS "), " - ", __jsx("em", null, "(Started learning in 2010 Highschool, Projects, Work)")), __jsx("li", null, __jsx("strong", {
    className: "accent"
  }, "Javascript "), " - ", __jsx("em", null, "(Started learning in 2017 College, Projects, Work)")), __jsx("li", null, __jsx("strong", {
    className: "accent"
  }, "C++ "), " - ", __jsx("em", null, "(Started learning in 2018 College)")), __jsx("li", null, __jsx("strong", {
    className: "accent"
  }, "Python "), " - ", __jsx("em", null, "(Started learning 2018 College, Projects)")), __jsx("li", null, __jsx("strong", {
    className: "accent"
  }, "Bash "), " - ", __jsx("em", null, "(Started learning 2018 Work)")), __jsx("li", null, __jsx("strong", {
    className: "accent"
  }, "Git "), " - ", __jsx("em", null, "(Started learning 2017 College, Projects, Work)")), __jsx("li", null, __jsx("strong", {
    className: "accent"
  }, "React "), " - ", __jsx("em", null, "(Started learning 2018 Projects, Work)")), __jsx("li", null, __jsx("strong", {
    className: "accent"
  }, "Django "), " - ", __jsx("em", null, "(Started learning 2018 Projects)")), __jsx("li", null, __jsx("strong", {
    className: "accent"
  }, "Express "), " - ", __jsx("em", null, "(Started learning 2018 Projects, Work)")), __jsx("li", null, __jsx("strong", {
    className: "accent"
  }, "Node "), " - ", __jsx("em", null, "(Started learning 2018 Projects, Work)")), __jsx("li", null, __jsx("strong", {
    className: "accent"
  }, "MongoDB "), " - ", __jsx("em", null, "(Started learning 2018 Projects, Work)")), __jsx("li", null, __jsx("strong", {
    className: "accent"
  }, "Redux "), " - ", __jsx("em", null, "(Started learning 2018 Projects, Work)")), __jsx("li", null, __jsx("strong", {
    className: "accent"
  }, "Jquery "), " - ", __jsx("em", null, "(Started learning 2017 College)")), __jsx("li", null, __jsx("strong", {
    className: "accent"
  }, "REGEX "), " - ", __jsx("em", null, "(Started learning 2018 Projects, Work)")), __jsx("li", null, __jsx("strong", {
    className: "accent"
  }, "Linux Debian, APT "), " - ", __jsx("em", null, "(Started learning 2018 Work)")), __jsx("li", null, __jsx("strong", {
    className: "accent"
  }, "Sass "), " - ", __jsx("em", null, "(Started learning 2018 Projects, Work)")), __jsx("li", null, __jsx("strong", {
    className: "accent"
  }, "NextJS "), " - ", __jsx("em", null, "(Started learning 2019 Projects, Work)")), __jsx("li", null, __jsx("strong", {
    className: "accent"
  }, "Bootstrap "), " - ", __jsx("em", null, "(Started learning 2018 Projects, Work)")), __jsx("li", null, __jsx("strong", {
    className: "accent"
  }, "MySQL "), " - ", __jsx("em", null, "(Started learning 2018 Projects, Work)")), __jsx("li", null, __jsx("strong", {
    className: "accent"
  }, "Mobile App Development "), " - ", __jsx("em", null, "(Started learning 2017 College)")), __jsx("li", null, __jsx("strong", {
    className: "accent"
  }, "Chrome Web Extension Development"), " - ", __jsx("em", null, "(Started learning in 2018 Projects)")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx("section", {
    id: "work-experience"
  }, __jsx("h3", null, "Related Work Experience"), __jsx("div", {
    className: "job"
  }, __jsx("strong", null, "Kitchenall - Web Master / Technical SEO Specialist / Product Manager / Software Developer"), " - ", __jsx("em", null, "Nov 1 2018 -> Currently Working at this Company"), __jsx("ul", null, __jsx("li", null, "Used GREP commands to navigate through the magento/php file structure"), __jsx("li", null, "Used PHP to alter theme templates and page templates to implement product requirements from the Google Search Console"), __jsx("li", null, "Used PHP to modify server generated pdf templates to allow for more fields on GoodAhead PDF generated documents"), __jsx("li", null, "Used PHP to modify the catalog and search results to hide filterable attributes that only have one option available on the page"), __jsx("li", null, "Used HTML, CSS, and Javascript to create blogs and landing pages for the website from PSD's provided"), __jsx("li", null, "Used React, Express, Node, MongoDB, and Redux to create a streamlined app to manage customers, orders, shipments, products, prices, discounts, website auditting, and more."), __jsx("li", null, "Used NextJS, React, React Hooks, GIT, Express, and Node to build a URL scraper and CSV feedable content spinner application to allow for the generations of new and unique text content for SEO purposes."), __jsx("li", null, "Used SEO tools such as Semrush, Lighthouse, and the Google Search Console to identify issues and improve our ranking with Google searches."), __jsx("li", null, "Used Tarballs delivered through FTP to deploy changes to the website"), __jsx("li", null, "Used Tar and GZIP to archive my daily work onto my computer in the .archives directory to maintain a clean workspace on my computer, and still retrieve the work if/when needed"), __jsx("li", null, "Used REGEX and CSV files and Bulk actions to add, manage, and remove products from the Magento platform"), __jsx("li", null, "Used Adobe Illustrator to create logos, icons, and svg's as resources for the website"), __jsx("li", null, "Used Adobe Photoshop to create and edit mockups to describe changes to the website"), __jsx("li", null, "Used Adobe InDesign to create and edit documents and create a product catalog for our customers to browse through offline."), __jsx("li", null, "Used the browser to view changes in real time for front end web development purposes"), __jsx("li", null, "Worked with several remote developer teams in providing concepts, descriptions, and mock ups of changes and features to make/add to the website."), __jsx("li", null, "Used documentation for several different extensions/applications to identify and troubleshoot problems, with the software, and make necessary changes, whether on the front end, or in the PHP code itself to resolve the issues being experienced."), __jsx("li", null, "Identified performance issues in front end javascript from development practices."), __jsx("li", null, "Auditted Javascript, CSS, and PHP for issues impacting, design, performance, and/or user experience, and wrote documents to describe the problem, how to resolve it, and how to proceed in the future."), __jsx("li", null, "Identified problematic practices in our product upload process, resulting in illegal/broken characters appearing on the site, used regex to identify and remove them from the site entirely, identified the issue with excel opening UTF-8 files by converting them to ISO files before reading them, led the change to stop using excel all together in favor of alternatives such as google sheets and libre office (both of which support regex data manipulation)."), __jsx("li", null, "Led an innitiative to improve website performance and SEO search rank by adding optional fields, consolidating CSS and JS files, lazy loading offscreen images, making the switch from high file size jpg and pngs to JPEG2000 and webP's, and identifying extensions that dramatically increase the dom size beyond what they should be alotted."), __jsx("li", null, "Identified cross-site scripting hazards in our search bar, noticed bits of code inside the search query DB and used cross-site scripting techniques to create alerts, communicated the issue to the remote developers"))), __jsx("div", {
    className: "job"
  }, __jsx("strong", null, "CollinsHarper - Contract Software Developer / DevOps"), " - ", __jsx("em", null, "May 10th 2019 -> July 2019 Software Developer / DevOps "), __jsx("ul", null, __jsx("li", null, "Used Vim text editor to edit code"), __jsx("li", null, "Used find, grep, and pipes to generate tar and GZip backups of the websites"), __jsx("li", null, "Used PHP code sniffer to review and validate PHP files for deployment"), __jsx("li", null, "Used the PSR-2 PHP style guide to maintain accessible and readable code, keeping code up to the quality standard required"), __jsx("li", null, "Used SCP and SSH to migrate and deploy code to the server, documented the process, and communicated to the team that it is ready for smoke testing"), __jsx("li", null, "Worked in an entirely remote position with a team of developers from around the world"), __jsx("li", null, "Worked with the team to identify and correct problems in the code, format or otherwise"), __jsx("li", null, "Regularly studied Linux and Bash commands to get myself up to speed before and during my contract on the projects"), __jsx("li", null, "Used GSuite to operate all company related business, maintaining communications, schedules, alerts, etc..."), __jsx("li", null, "Assisted in identifying previously deployed code containing backdoors")))))));
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

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/resume.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ubuntu/blogTest/pages/resume.jsx */"./pages/resume.jsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

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
//# sourceMappingURL=resume.js.map