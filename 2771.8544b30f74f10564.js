"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[2771],{

/***/ 22771:
/*!*******************************************************!*\
  !*** ./node_modules/@capacitor/toast/dist/esm/web.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastWeb: () => (/* binding */ ToastWeb)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 15083);


class ToastWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.WebPlugin {
  show(options) {
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (typeof document !== 'undefined') {
        let duration = 2000;
        if (options.duration) {
          duration = options.duration === 'long' ? 3500 : 2000;
        }
        const toast = document.createElement('pwa-toast');
        toast.duration = duration;
        toast.message = options.text;
        document.body.appendChild(toast);
      }
    })();
  }
}
//# sourceMappingURL=web.js.map

/***/ })

}]);