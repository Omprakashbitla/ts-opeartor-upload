"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[952],{

/***/ 60952
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/status-tap-HhO5eQI9.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startStatusTap: () => (/* binding */ startStatusTap)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _index_tcQvqkiX_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-tcQvqkiX.js */ 48225);
/* harmony import */ var _index_B_8X7INq_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-B_8X7INq.js */ 18620);
/* harmony import */ var _helpers_DkCLSLI9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-DkCLSLI9.js */ 3418);
/* harmony import */ var _dir_o8OKV5aD_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dir-o8OKV5aD.js */ 4594);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




const startStatusTap = () => {
  const win = window;
  win.addEventListener('statusTap', () => {
    (0,_index_tcQvqkiX_js__WEBPACK_IMPORTED_MODULE_1__.a)(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = (0,_index_B_8X7INq_js__WEBPACK_IMPORTED_MODULE_2__.a)(el);
      if (contentEl) {
        new Promise(resolve => (0,_helpers_DkCLSLI9_js__WEBPACK_IMPORTED_MODULE_3__.c)(contentEl, resolve)).then(() => {
          (0,_index_tcQvqkiX_js__WEBPACK_IMPORTED_MODULE_1__.w)(/*#__PURE__*/(0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            /**
             * If scrolling and user taps status bar,
             * only calling scrollToTop is not enough
             * as engines like WebKit will jump the
             * scroll position back down and complete
             * any in-progress momentum scrolling.
             */
            contentEl.style.setProperty('--overflow', 'hidden');
            yield (0,_index_B_8X7INq_js__WEBPACK_IMPORTED_MODULE_2__.s)(contentEl, 300);
            contentEl.style.removeProperty('--overflow');
          }));
        });
      }
    });
  });
};


/***/ }

}]);