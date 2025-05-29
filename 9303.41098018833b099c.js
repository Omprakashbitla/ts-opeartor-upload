"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[9303],{

/***/ 39303:
/*!*****************************************************!*\
  !*** ./node_modules/@capacitor/app/dist/esm/web.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppWeb: () => (/* binding */ AppWeb)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 15083);


class AppWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.WebPlugin {
  constructor() {
    super();
    this.handleVisibilityChange = () => {
      const data = {
        isActive: document.hidden !== true
      };
      this.notifyListeners('appStateChange', data);
      if (document.hidden) {
        this.notifyListeners('pause', null);
      } else {
        this.notifyListeners('resume', null);
      }
    };
    document.addEventListener('visibilitychange', this.handleVisibilityChange, false);
  }
  exitApp() {
    throw this.unimplemented('Not implemented on web.');
  }
  getInfo() {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      throw _this.unimplemented('Not implemented on web.');
    })();
  }
  getLaunchUrl() {
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return {
        url: ''
      };
    })();
  }
  getState() {
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return {
        isActive: document.hidden !== true
      };
    })();
  }
  minimizeApp() {
    var _this2 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      throw _this2.unimplemented('Not implemented on web.');
    })();
  }
}
//# sourceMappingURL=web.js.map

/***/ })

}]);