"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[6111],{

/***/ 25336:
/*!*******************************************************************!*\
  !*** ./src/app/voucher-page-failure/voucher-page-failure.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VoucherPageFailurePage: () => (/* binding */ VoucherPageFailurePage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 87330);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/common-storage */ 96970);
var _VoucherPageFailurePage;




class VoucherPageFailurePage {
  constructor(navCtrl, router, commonStorage) {
    this.navCtrl = navCtrl;
    this.router = router;
    this.commonStorage = commonStorage;
  }
  ngOnInit() {
    this.failureMsg = this.commonStorage.localGet('failuremsg');
  }
  gotoHome() {
    this.navCtrl.navigateRoot('tabs/home');
  }
}
_VoucherPageFailurePage = VoucherPageFailurePage;
_VoucherPageFailurePage.ɵfac = function VoucherPageFailurePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VoucherPageFailurePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_0__.CommonStorage));
};
_VoucherPageFailurePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _VoucherPageFailurePage,
  selectors: [["app-voucher-page-failure"]],
  standalone: false,
  decls: 11,
  vars: 1,
  consts: [[2, "text-align", "center"], [2, "display", "flex", "justify-content", "center"], ["expand", "block", 3, "click"]],
  template: function VoucherPageFailurePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "voucher-page-failure");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-content")(5, "div")(6, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 1)(9, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VoucherPageFailurePage_Template_ion_button_click_9_listener() {
        return ctx.gotoHome();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Back TO Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.failureMsg);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar],
  encapsulation: 2
});

/***/ }),

/***/ 64454:
/*!*****************************************************************************!*\
  !*** ./src/app/voucher-page-failure/voucher-page-failure-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VoucherPageFailurePageRoutingModule: () => (/* binding */ VoucherPageFailurePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _voucher_page_failure_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voucher-page-failure.page */ 25336);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _VoucherPageFailurePageRoutingModule;




const routes = [{
  path: '',
  component: _voucher_page_failure_page__WEBPACK_IMPORTED_MODULE_0__.VoucherPageFailurePage
}];
class VoucherPageFailurePageRoutingModule {}
_VoucherPageFailurePageRoutingModule = VoucherPageFailurePageRoutingModule;
_VoucherPageFailurePageRoutingModule.ɵfac = function VoucherPageFailurePageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VoucherPageFailurePageRoutingModule)();
};
_VoucherPageFailurePageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _VoucherPageFailurePageRoutingModule
});
_VoucherPageFailurePageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VoucherPageFailurePageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 76111:
/*!*********************************************************************!*\
  !*** ./src/app/voucher-page-failure/voucher-page-failure.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VoucherPageFailurePageModule: () => (/* binding */ VoucherPageFailurePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _voucher_page_failure_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voucher-page-failure-routing.module */ 64454);
/* harmony import */ var _voucher_page_failure_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voucher-page-failure.page */ 25336);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _VoucherPageFailurePageModule;






class VoucherPageFailurePageModule {}
_VoucherPageFailurePageModule = VoucherPageFailurePageModule;
_VoucherPageFailurePageModule.ɵfac = function VoucherPageFailurePageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VoucherPageFailurePageModule)();
};
_VoucherPageFailurePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _VoucherPageFailurePageModule
});
_VoucherPageFailurePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _voucher_page_failure_routing_module__WEBPACK_IMPORTED_MODULE_0__.VoucherPageFailurePageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](VoucherPageFailurePageModule, {
    declarations: [_voucher_page_failure_page__WEBPACK_IMPORTED_MODULE_1__.VoucherPageFailurePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _voucher_page_failure_routing_module__WEBPACK_IMPORTED_MODULE_0__.VoucherPageFailurePageRoutingModule]
  });
})();

/***/ })

}]);