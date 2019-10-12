webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./store/globalState.js":
/*!******************************!*\
  !*** ./store/globalState.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var state = {
  auth: {},
  searchQuery: ''
};

var actions = function actions(_ref) {
  var action = _ref.action,
      payload = _ref.payload;

  switch (action) {
    case 'search':
      state.searchQuery = payload;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (state);

/***/ })

})
//# sourceMappingURL=_app.js.2a4ad89b4ee4e39b6207.hot-update.js.map