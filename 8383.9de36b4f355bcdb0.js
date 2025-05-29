"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[8383],{

/***/ 9080:
/*!***************************************************************************!*\
  !*** ./src/app/add-money-wallet-confirm/add-money-wallet-confirm.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddMoneyWalletConfirmPage: () => (/* binding */ AddMoneyWalletConfirmPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 87330);
var _AddMoneyWalletConfirmPage;



class AddMoneyWalletConfirmPage {
  constructor(util, router) {
    this.util = util;
    this.router = router;
  }
  ngOnInit() {
    this.util.showToast('Money added to wallet successfully', 'bottom');
    setTimeout(() => {
      this.router.navigate(['/wallet']);
    }, 2000);
  }
}
_AddMoneyWalletConfirmPage = AddMoneyWalletConfirmPage;
_AddMoneyWalletConfirmPage.ɵfac = function AddMoneyWalletConfirmPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AddMoneyWalletConfirmPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_0__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
_AddMoneyWalletConfirmPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _AddMoneyWalletConfirmPage,
  selectors: [["app-add-money-wallet-confirm"]],
  standalone: false,
  decls: 0,
  vars: 0,
  template: function AddMoneyWalletConfirmPage_Template(rf, ctx) {},
  encapsulation: 2
});

/***/ }),

/***/ 54694:
/*!*************************************************************************************!*\
  !*** ./src/app/add-money-wallet-confirm/add-money-wallet-confirm-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddMoneyWalletConfirmPageRoutingModule: () => (/* binding */ AddMoneyWalletConfirmPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _add_money_wallet_confirm_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-money-wallet-confirm.page */ 9080);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _AddMoneyWalletConfirmPageRoutingModule;




const routes = [{
  path: '',
  component: _add_money_wallet_confirm_page__WEBPACK_IMPORTED_MODULE_0__.AddMoneyWalletConfirmPage
}];
class AddMoneyWalletConfirmPageRoutingModule {}
_AddMoneyWalletConfirmPageRoutingModule = AddMoneyWalletConfirmPageRoutingModule;
_AddMoneyWalletConfirmPageRoutingModule.ɵfac = function AddMoneyWalletConfirmPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AddMoneyWalletConfirmPageRoutingModule)();
};
_AddMoneyWalletConfirmPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _AddMoneyWalletConfirmPageRoutingModule
});
_AddMoneyWalletConfirmPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AddMoneyWalletConfirmPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 98383:
/*!*****************************************************************************!*\
  !*** ./src/app/add-money-wallet-confirm/add-money-wallet-confirm.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddMoneyWalletConfirmPageModule: () => (/* binding */ AddMoneyWalletConfirmPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _add_money_wallet_confirm_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-money-wallet-confirm-routing.module */ 54694);
/* harmony import */ var _add_money_wallet_confirm_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-money-wallet-confirm.page */ 9080);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _AddMoneyWalletConfirmPageModule;






class AddMoneyWalletConfirmPageModule {}
_AddMoneyWalletConfirmPageModule = AddMoneyWalletConfirmPageModule;
_AddMoneyWalletConfirmPageModule.ɵfac = function AddMoneyWalletConfirmPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AddMoneyWalletConfirmPageModule)();
};
_AddMoneyWalletConfirmPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _AddMoneyWalletConfirmPageModule
});
_AddMoneyWalletConfirmPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _add_money_wallet_confirm_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddMoneyWalletConfirmPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AddMoneyWalletConfirmPageModule, {
    declarations: [_add_money_wallet_confirm_page__WEBPACK_IMPORTED_MODULE_1__.AddMoneyWalletConfirmPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _add_money_wallet_confirm_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddMoneyWalletConfirmPageRoutingModule]
  });
})();

/***/ })

}]);