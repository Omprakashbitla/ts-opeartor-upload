"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[1463],{

/***/ 1463:
/*!***************************************************************************!*\
  !*** ./src/app/add-money-wallet-cancel/add-money-wallet-cancel.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddMoneyWalletCancelPageModule: () => (/* binding */ AddMoneyWalletCancelPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _add_money_wallet_cancel_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-money-wallet-cancel-routing.module */ 84398);
/* harmony import */ var _add_money_wallet_cancel_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-money-wallet-cancel.page */ 62640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _AddMoneyWalletCancelPageModule;






class AddMoneyWalletCancelPageModule {}
_AddMoneyWalletCancelPageModule = AddMoneyWalletCancelPageModule;
_AddMoneyWalletCancelPageModule.ɵfac = function AddMoneyWalletCancelPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AddMoneyWalletCancelPageModule)();
};
_AddMoneyWalletCancelPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _AddMoneyWalletCancelPageModule
});
_AddMoneyWalletCancelPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _add_money_wallet_cancel_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddMoneyWalletCancelPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AddMoneyWalletCancelPageModule, {
    declarations: [_add_money_wallet_cancel_page__WEBPACK_IMPORTED_MODULE_1__.AddMoneyWalletCancelPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _add_money_wallet_cancel_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddMoneyWalletCancelPageRoutingModule]
  });
})();

/***/ }),

/***/ 62640:
/*!*************************************************************************!*\
  !*** ./src/app/add-money-wallet-cancel/add-money-wallet-cancel.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddMoneyWalletCancelPage: () => (/* binding */ AddMoneyWalletCancelPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 87330);
var _AddMoneyWalletCancelPage;



class AddMoneyWalletCancelPage {
  constructor(util, router) {
    this.util = util;
    this.router = router;
  }
  ngOnInit() {
    this.util.showToast('Payment failed', 'bottom');
    setTimeout(() => {
      this.router.navigate(['/wallet']);
    }, 2000);
  }
}
_AddMoneyWalletCancelPage = AddMoneyWalletCancelPage;
_AddMoneyWalletCancelPage.ɵfac = function AddMoneyWalletCancelPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AddMoneyWalletCancelPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_0__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
_AddMoneyWalletCancelPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _AddMoneyWalletCancelPage,
  selectors: [["app-add-money-wallet-cancel"]],
  standalone: false,
  decls: 0,
  vars: 0,
  template: function AddMoneyWalletCancelPage_Template(rf, ctx) {},
  encapsulation: 2
});

/***/ }),

/***/ 84398:
/*!***********************************************************************************!*\
  !*** ./src/app/add-money-wallet-cancel/add-money-wallet-cancel-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddMoneyWalletCancelPageRoutingModule: () => (/* binding */ AddMoneyWalletCancelPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _add_money_wallet_cancel_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-money-wallet-cancel.page */ 62640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _AddMoneyWalletCancelPageRoutingModule;




const routes = [{
  path: '',
  component: _add_money_wallet_cancel_page__WEBPACK_IMPORTED_MODULE_0__.AddMoneyWalletCancelPage
}];
class AddMoneyWalletCancelPageRoutingModule {}
_AddMoneyWalletCancelPageRoutingModule = AddMoneyWalletCancelPageRoutingModule;
_AddMoneyWalletCancelPageRoutingModule.ɵfac = function AddMoneyWalletCancelPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AddMoneyWalletCancelPageRoutingModule)();
};
_AddMoneyWalletCancelPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _AddMoneyWalletCancelPageRoutingModule
});
_AddMoneyWalletCancelPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AddMoneyWalletCancelPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ })

}]);