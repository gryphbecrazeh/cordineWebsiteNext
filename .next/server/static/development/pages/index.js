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

/***/ "./actions/AuthActions.js":
/*!********************************!*\
  !*** ./actions/AuthActions.js ***!
  \********************************/
/*! exports provided: login, handleConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleConnection", function() { return handleConnection; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
// -----------------------------------------Axios-----------------------------------------

const login = async user => {
  console.log("logging in");
  return await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/auth", user).then(res => {
    console.log(res);
    localStorage.setItem("token", res.data.user.token);
    return res.data.user;
  }).catch(err => console.log(err));
};
const handleConnection = () => {
  let token = localStorage.getItem("token");
};

/***/ }),

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

const getFrontEndItems = async () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/frontEnd").then(res => {
    let response = [];
    if (res.data.length > 0) response = [...res.data];
    return [...response];
  }).catch(err => console.log("err"));
};
const addFrontEndItem = async item => {
  return await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/frontEnd/${item._id}`, item).then(res => res).catch(err => console.log(err));
};

/***/ }),

/***/ "./components/AddPostModal.jsx":
/*!*************************************!*\
  !*** ./components/AddPostModal.jsx ***!
  \*************************************/
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
/* harmony import */ var _actions_FrontEndActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/FrontEndActions */ "./actions/FrontEndActions.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// -----------------------------------------React-----------------------------------------
 // -----------------------------------------Reactstrap-----------------------------------------

 // -----------------------------------------React Hooks-----------------------------------------

 // -----------------------------------------Actions-----------------------------------------



const AddPostModal = ({
  isOpen,
  toggle
}) => {
  // Innitializes the post object
  let {
    0: post,
    1: updatePost
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    title: '',
    technologies: [],
    description: '',
    images: [],
    repo: '',
    codePen: '',
    technology: ''
  }); // Updates the post state based on the item name and value

  let handleUpdatePost = e => {
    updatePost(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, post, {
      [e.target.name]: e.target.value
    }));
  }; // Updates technologies with an appended iteration of the technologies array


  let handleAddTechnology = () => {
    let {
      technology,
      technologies
    } = post;
    if (technology === '') return 0;
    let updatedTechnologies = [...technologies, technology];
    updatePost(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, post, {
      technologies: updatedTechnologies,
      technology: ''
    }));
  }; // Updates the technologies with a filtered iteration of the technologies array


  let handleRemoveTechnology = e => {
    let target = e.target.getAttribute('name');
    let updatedTechnologies = post.technologies.filter(item => item !== target);
    updatePost(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, post, {
      technologies: updatedTechnologies,
      technology: ''
    }));
  };

  let handleAddPost = () => {
    Object(_actions_FrontEndActions__WEBPACK_IMPORTED_MODULE_4__["addFrontEndItem"])(post).then(res => toggle()).catch(err => alert('Adding Post Failed'));
  };

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    isOpen: isOpen,
    toggle: toggle
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalHeader"], {
    toggle: toggle
  }, "Add a featured post"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], {
    className: "w-100"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    disabled: true
  }, "Create Front End Post"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    disabled: true
  }, "Create Project Post")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], null, "Title"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "text",
    name: "title",
    placeholder: "Post Title",
    onChange: handleUpdatePost
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], null, "Description"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "textarea",
    name: "description",
    placeholder: "Post Description",
    onChange: handleUpdatePost
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], null, "Repo"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "text",
    name: "repo",
    placeholder: "Repository URL",
    onChange: handleUpdatePost
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], null, "CodePen"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "text",
    name: "codePen",
    placeholder: "CodePen URL",
    onChange: handleUpdatePost
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], null, "Technologies"), __jsx("div", {
    id: "technology-output"
  }, post.technologies.map(item => {
    return __jsx("div", {
      className: "technology",
      name: item
    }, item, __jsx("span", {
      className: "close",
      name: item,
      onClick: handleRemoveTechnology
    }, "x"));
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], {
    className: "mt-2"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "text",
    name: "technology",
    placeholder: "React, Bootstrap, Css, Javascript...",
    value: post.technology,
    onChange: handleUpdatePost
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroupAddon"], {
    addonType: "append"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: handleAddTechnology
  }, "Add Technology"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], null, "Add Images"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "file",
    name: "images",
    disabled: true
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "mt-5"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "success",
    onClick: handleAddPost,
    block: true
  }, "Add Post"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (AddPostModal);

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

/***/ "./components/FeatureCard.jsx":
/*!************************************!*\
  !*** ./components/FeatureCard.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const FeatureCard = ({
  post
}) => {
  let {
    title,
    technologies
  } = post;
  return __jsx("div", {
    className: "card relative"
  }, __jsx("div", {
    className: "row"
  }, __jsx("h2", {
    className: "card-title"
  }, title)), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "technologies"
  }, technologies.map(item => __jsx("div", null, item))), __jsx("div", {
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

/***/ }),

/***/ "./components/FeaturedCards.jsx":
/*!**************************************!*\
  !*** ./components/FeaturedCards.jsx ***!
  \**************************************/
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
/* harmony import */ var _AddPostModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddPostModal */ "./components/AddPostModal.jsx");
/* harmony import */ var _FeatureCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FeatureCard */ "./components/FeatureCard.jsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// -----------------------------------------React-----------------------------------------
 // -----------------------------------------Reactstrap-----------------------------------------

 // -----------------------------------------React Hooks-----------------------------------------

 // -----------------------------------------Components-----------------------------------------


 // -----------------------------------------Resources-----------------------------------------

const FeaturedCards = ({
  id,
  children
}) => {
  const {
    state,
    actions
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store_context__WEBPACK_IMPORTED_MODULE_3__["default"]);
  let {
    0: modal,
    1: toggleModalOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    isOpen: false
  });

  let toggleModal = () => {
    toggleModalOpen(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, modal, {
      isOpen: !modal.isOpen
    }));
  };

  let addPost = __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "addPost",
    onClick: toggleModal
  }, "+")); // console.log(state);


  return __jsx("section", {
    id: id,
    className: "featured-cards"
  }, state.auth.role === "admin" ? addPost : "", __jsx(_AddPostModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isOpen: modal.isOpen,
    toggle: toggleModal
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, children)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx("div", {
    className: "feature-card-output"
  }, [...state.frontEndPosts].map(item => __jsx(_FeatureCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    post: item
  }))))));
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
        searchQuery: e.target.value
      }
    });
  };

  if (!state.frontEndPosts.length > 0) Object(_actions_FrontEndActions__WEBPACK_IMPORTED_MODULE_8__["getFrontEndItems"])().then((res = []) => {
    actions({
      type: "setState",
      payload: {
        frontEndPosts: [...res]
      }
    });
  }).catch(err => console.log(err));
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
    onChange: onChange
  }), __jsx("p", {
    className: "subsearch"
  }, "Use the search bar above to immediately find", " ", __jsx("a", {
    href: "#"
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
  }, "View Virtual Resume Now")))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(_components_FeaturedCards__WEBPACK_IMPORTED_MODULE_5__["default"], {
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

module.exports = __webpack_require__(/*! /home/ubuntu/blogTest/pages/index.js */"./pages/index.js");


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
//# sourceMappingURL=index.js.map