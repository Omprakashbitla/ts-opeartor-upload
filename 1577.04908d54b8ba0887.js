"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[1577],{

/***/ 41577:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-text.entry.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_text: () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var _index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-527b9e34.js */ 96317);
/* harmony import */ var _theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme-01f3f29c.js */ 80333);
/* harmony import */ var _ionic_global_b26f573e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-b26f573e.js */ 12508);
/* harmony import */ var _index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-cfd9c1f2.js */ 8736);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




const textCss = ":host(.ion-color){color:var(--ion-color-base)}";
const IonTextStyle0 = textCss;
const Text = class {
  constructor(hostRef) {
    (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.color = undefined;
  }
  render() {
    const mode = (0,_ionic_global_b26f573e_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.e, {
      key: '0c2546ea3f24b0a6bfd606199441d0a4edfa4ca1',
      class: (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_1__.c)(this.color, {
        [mode]: true
      })
    }, (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      key: 'b7623ccb06f9461090a1f33e9f85886c7a4d5eff'
    }));
  }
};
Text.style = IonTextStyle0;


/***/ })

}]);