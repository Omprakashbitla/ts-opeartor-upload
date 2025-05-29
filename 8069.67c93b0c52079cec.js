"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[8069],{

/***/ 46932:
/*!*********************************************************************!*\
  !*** ./src/app/add-money-wallet/add-money-wallet-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddMoneyWalletPageRoutingModule: () => (/* binding */ AddMoneyWalletPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _add_money_wallet_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-money-wallet.page */ 91598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _AddMoneyWalletPageRoutingModule;




const routes = [{
  path: '',
  component: _add_money_wallet_page__WEBPACK_IMPORTED_MODULE_0__.AddMoneyWalletPage
}];
class AddMoneyWalletPageRoutingModule {}
_AddMoneyWalletPageRoutingModule = AddMoneyWalletPageRoutingModule;
_AddMoneyWalletPageRoutingModule.ɵfac = function AddMoneyWalletPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AddMoneyWalletPageRoutingModule)();
};
_AddMoneyWalletPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _AddMoneyWalletPageRoutingModule
});
_AddMoneyWalletPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AddMoneyWalletPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 78069:
/*!*************************************************************!*\
  !*** ./src/app/add-money-wallet/add-money-wallet.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddMoneyWalletPageModule: () => (/* binding */ AddMoneyWalletPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _add_money_wallet_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-money-wallet-routing.module */ 46932);
/* harmony import */ var _add_money_wallet_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-money-wallet.page */ 91598);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 51670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
var _AddMoneyWalletPageModule;







class AddMoneyWalletPageModule {}
_AddMoneyWalletPageModule = AddMoneyWalletPageModule;
_AddMoneyWalletPageModule.ɵfac = function AddMoneyWalletPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AddMoneyWalletPageModule)();
};
_AddMoneyWalletPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _AddMoneyWalletPageModule
});
_AddMoneyWalletPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  providers: [_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _add_money_wallet_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddMoneyWalletPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AddMoneyWalletPageModule, {
    declarations: [_add_money_wallet_page__WEBPACK_IMPORTED_MODULE_1__.AddMoneyWalletPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _add_money_wallet_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddMoneyWalletPageRoutingModule]
  });
})();

/***/ })

}]);