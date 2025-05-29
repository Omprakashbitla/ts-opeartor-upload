"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[3757],{

/***/ 33750:
/*!*******************************************************************!*\
  !*** ./src/app/voucher-page-success/voucher-page-success.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VoucherPageSuccessPage: () => (/* binding */ VoucherPageSuccessPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 45564);
var _VoucherPageSuccessPage;






function VoucherPageSuccessPage_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "please wait we are redirecting to the voucher page....");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class VoucherPageSuccessPage {
  constructor(commonStorage, navCtrl, apiFactory, loader) {
    this.commonStorage = commonStorage;
    this.navCtrl = navCtrl;
    this.apiFactory = apiFactory;
    this.loader = loader;
    this.getData = [];
    this.urlGet = window.location.href;
    this.pnrNum = this.urlGet.split('?')[1];
    this.getData = this.pnrNum.split('&');
    this.commonStorage.localSet('dataFetch', this.getData);
    let obj = [];
    for (let i = 0; i < this.getData.length; i++) {
      let [firname, secname] = this.getData[i].split('=');
      obj[firname] = secname;
    }
    this.pnrNumber = obj.pnr_number.split('_');
    if (!this.pnrNumber[1]) {
      this.splitPnr = this.pnrNumber[0];
    } else {
      this.splitPnr = this.pnrNumber[1];
    }
    this.apiFactory.getTicketDetails(this.splitPnr).subscribe(result => {
      this.commonStorage.localSet('ticketDetails', result);
      this.failureCode = result.code;
      if (result.ticket_number && obj.voucher_number && obj.bank_code) {
        this.navCtrl.navigateForward('pass-voucher');
      } else {
        setTimeout(() => {
          // if(this.getData != ''){
          this.commonStorage.localSet('failuremsg', result.message);
          this.navCtrl.navigateForward('voucher-page-failure');
          // }
        }, 1000);
      }
    });
    // err => {
    //   this.loader.hideLoadingDefault();
    // }
  }
  ngOnInit() {}
}
_VoucherPageSuccessPage = VoucherPageSuccessPage;
_VoucherPageSuccessPage.ɵfac = function VoucherPageSuccessPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VoucherPageSuccessPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_0__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_1__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService));
};
_VoucherPageSuccessPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _VoucherPageSuccessPage,
  selectors: [["app-voucher-page-success"]],
  standalone: false,
  decls: 2,
  vars: 1,
  consts: [["class", "redirectPage", 4, "ngIf"], [1, "redirectPage"]],
  template: function VoucherPageSuccessPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, VoucherPageSuccessPage_p_1_Template, 2, 0, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.failureCode != 419);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent],
  styles: [".redirectPage[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  text-align: center;\n}"]
});

/***/ }),

/***/ 48044:
/*!*****************************************************************************!*\
  !*** ./src/app/voucher-page-success/voucher-page-success-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VoucherPageSuccessPageRoutingModule: () => (/* binding */ VoucherPageSuccessPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _voucher_page_success_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voucher-page-success.page */ 33750);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _VoucherPageSuccessPageRoutingModule;




const routes = [{
  path: '',
  component: _voucher_page_success_page__WEBPACK_IMPORTED_MODULE_0__.VoucherPageSuccessPage
}];
class VoucherPageSuccessPageRoutingModule {}
_VoucherPageSuccessPageRoutingModule = VoucherPageSuccessPageRoutingModule;
_VoucherPageSuccessPageRoutingModule.ɵfac = function VoucherPageSuccessPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VoucherPageSuccessPageRoutingModule)();
};
_VoucherPageSuccessPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _VoucherPageSuccessPageRoutingModule
});
_VoucherPageSuccessPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VoucherPageSuccessPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 63757:
/*!*********************************************************************!*\
  !*** ./src/app/voucher-page-success/voucher-page-success.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VoucherPageSuccessPageModule: () => (/* binding */ VoucherPageSuccessPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _voucher_page_success_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voucher-page-success-routing.module */ 48044);
/* harmony import */ var _voucher_page_success_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voucher-page-success.page */ 33750);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _VoucherPageSuccessPageModule;






class VoucherPageSuccessPageModule {}
_VoucherPageSuccessPageModule = VoucherPageSuccessPageModule;
_VoucherPageSuccessPageModule.ɵfac = function VoucherPageSuccessPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VoucherPageSuccessPageModule)();
};
_VoucherPageSuccessPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _VoucherPageSuccessPageModule
});
_VoucherPageSuccessPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _voucher_page_success_routing_module__WEBPACK_IMPORTED_MODULE_0__.VoucherPageSuccessPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](VoucherPageSuccessPageModule, {
    declarations: [_voucher_page_success_page__WEBPACK_IMPORTED_MODULE_1__.VoucherPageSuccessPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _voucher_page_success_routing_module__WEBPACK_IMPORTED_MODULE_0__.VoucherPageSuccessPageRoutingModule]
  });
})();

/***/ })

}]);