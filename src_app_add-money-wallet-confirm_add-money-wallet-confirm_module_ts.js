(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_add-money-wallet-confirm_add-money-wallet-confirm_module_ts"],{

/***/ 4999:
/*!*************************************************************************************!*\
  !*** ./src/app/add-money-wallet-confirm/add-money-wallet-confirm-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddMoneyWalletConfirmPageRoutingModule: () => (/* binding */ AddMoneyWalletConfirmPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _add_money_wallet_confirm_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-money-wallet-confirm.page */ 15472);




const routes = [{
  path: '',
  component: _add_money_wallet_confirm_page__WEBPACK_IMPORTED_MODULE_0__.AddMoneyWalletConfirmPage
}];
let AddMoneyWalletConfirmPageRoutingModule = class AddMoneyWalletConfirmPageRoutingModule {};
AddMoneyWalletConfirmPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], AddMoneyWalletConfirmPageRoutingModule);


/***/ }),

/***/ 19415:
/*!*****************************************************************************!*\
  !*** ./src/app/add-money-wallet-confirm/add-money-wallet-confirm.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddMoneyWalletConfirmPageModule: () => (/* binding */ AddMoneyWalletConfirmPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _add_money_wallet_confirm_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-money-wallet-confirm-routing.module */ 4999);
/* harmony import */ var _add_money_wallet_confirm_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-money-wallet-confirm.page */ 15472);







let AddMoneyWalletConfirmPageModule = class AddMoneyWalletConfirmPageModule {};
AddMoneyWalletConfirmPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _add_money_wallet_confirm_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddMoneyWalletConfirmPageRoutingModule],
  declarations: [_add_money_wallet_confirm_page__WEBPACK_IMPORTED_MODULE_1__.AddMoneyWalletConfirmPage]
})], AddMoneyWalletConfirmPageModule);


/***/ }),

/***/ 15472:
/*!***************************************************************************!*\
  !*** ./src/app/add-money-wallet-confirm/add-money-wallet-confirm.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddMoneyWalletConfirmPage: () => (/* binding */ AddMoneyWalletConfirmPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _add_money_wallet_confirm_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-money-wallet-confirm.page.html?ngResource */ 15507);
/* harmony import */ var _add_money_wallet_confirm_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-money-wallet-confirm.page.scss?ngResource */ 3515);
/* harmony import */ var _add_money_wallet_confirm_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_add_money_wallet_confirm_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/util-provider */ 98877);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ 88794);







let AddMoneyWalletConfirmPage = class AddMoneyWalletConfirmPage {
  constructor(util, router, appData) {
    this.util = util;
    this.router = router;
    this.appData = appData;
    this.appData.newTheme = this.util.getNewTheme();
  }
  ngOnInit() {
    this.util.showToast('Money added to wallet successfully', 'bottom');
    setTimeout(() => {
      this.router.navigate(['/wallet']);
    }, 2000);
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_util_provider__WEBPACK_IMPORTED_MODULE_2__.UtilProvider
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }, {
    type: _services__WEBPACK_IMPORTED_MODULE_3__.AppData
  }];
};
AddMoneyWalletConfirmPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-add-money-wallet-confirm',
  template: _add_money_wallet_confirm_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_add_money_wallet_confirm_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_services_util_provider__WEBPACK_IMPORTED_MODULE_2__.UtilProvider, _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router, _services__WEBPACK_IMPORTED_MODULE_3__.AppData])], AddMoneyWalletConfirmPage);


/***/ }),

/***/ 3515:
/*!****************************************************************************************!*\
  !*** ./src/app/add-money-wallet-confirm/add-money-wallet-confirm.page.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 92487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 31386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 15507:
/*!****************************************************************************************!*\
  !*** ./src/app/add-money-wallet-confirm/add-money-wallet-confirm.page.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>add-money-wallet-confirm</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content> -->\n";

/***/ })

}]);
//# sourceMappingURL=src_app_add-money-wallet-confirm_add-money-wallet-confirm_module_ts.js.map