webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./store/useGlobalState.js":
/*!*********************************!*\
  !*** ./store/useGlobalState.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

// -----------------------------------------React-----------------------------------------


var useGlobalState = function useGlobalState() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    search: '',
    code: []
  }),
      state = _useState[0],
      setState = _useState[1];

  var actions = function actions(action) {
    var type = action.type,
        payload = action.payload;

    switch (type) {
      case 'setState':
        return setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, payload));

      default:
        return state;
    }
  };

  return {
    state: state,
    actions: actions
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useGlobalState);

/***/ })

})
//# sourceMappingURL=_app.js.39f54187454b6e5939e1.hot-update.js.map