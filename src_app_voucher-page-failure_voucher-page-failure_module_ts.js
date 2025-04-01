(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_voucher-page-failure_voucher-page-failure_module_ts"],{

/***/ 18389:
/*!*****************************************************************************!*\
  !*** ./src/app/voucher-page-failure/voucher-page-failure-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VoucherPageFailurePageRoutingModule: () => (/* binding */ VoucherPageFailurePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _voucher_page_failure_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voucher-page-failure.page */ 25927);




const routes = [{
  path: '',
  component: _voucher_page_failure_page__WEBPACK_IMPORTED_MODULE_0__.VoucherPageFailurePage
}];
let VoucherPageFailurePageRoutingModule = class VoucherPageFailurePageRoutingModule {};
VoucherPageFailurePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], VoucherPageFailurePageRoutingModule);


/***/ }),

/***/ 73946:
/*!*********************************************************************!*\
  !*** ./src/app/voucher-page-failure/voucher-page-failure.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VoucherPageFailurePageModule: () => (/* binding */ VoucherPageFailurePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _voucher_page_failure_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voucher-page-failure-routing.module */ 18389);
/* harmony import */ var _voucher_page_failure_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voucher-page-failure.page */ 25927);







let VoucherPageFailurePageModule = class VoucherPageFailurePageModule {};
VoucherPageFailurePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _voucher_page_failure_routing_module__WEBPACK_IMPORTED_MODULE_0__.VoucherPageFailurePageRoutingModule],
  declarations: [_voucher_page_failure_page__WEBPACK_IMPORTED_MODULE_1__.VoucherPageFailurePage]
})], VoucherPageFailurePageModule);


/***/ }),

/***/ 25927:
/*!*******************************************************************!*\
  !*** ./src/app/voucher-page-failure/voucher-page-failure.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VoucherPageFailurePage: () => (/* binding */ VoucherPageFailurePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _voucher_page_failure_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voucher-page-failure.page.html?ngResource */ 14347);
/* harmony import */ var _voucher_page_failure_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voucher-page-failure.page.scss?ngResource */ 53874);
/* harmony import */ var _voucher_page_failure_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_voucher_page_failure_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ 88794);







let VoucherPageFailurePage = class VoucherPageFailurePage {
  constructor(navCtrl, router, commonStorage) {
    this.navCtrl = navCtrl;
    this.router = router;
    this.commonStorage = commonStorage;
  }
  ngOnInit() {
    this.failureMsg = this.commonStorage.localGet('failuremsg');
    // this.urlGet = 'http://www.idn-stg.ticketsimply.id/api2/virtual_pay_vurl.json?pnr_number=18655&amount=1500.0&voucherId=889089999085926&isVoucherGenerated=True&paymentMethod=XENDITVA&BankCode=MANDIRI&DisplayType=REDIRECT&PgTypeId=0&PaymentToken=e4d99b687f1018b4a2eef87f450a79e8';
    // this.pnrNum = this.urlGet.split('?')[1]
    // this.pnrFInal = this.pnrNum.split('=')[1]
    // console.log(this.pnrNum.split('&'),"pnrNum");
    // let getData = [] = this.pnrNum.split('&');
    // let obj:any = [];
    // for(let i=0;i<getData.length;i++){
    //   // console.log(getData.split('=')[1]);
    //   let[firname,secname] = getData[i].split('=');
    //   obj[firname]=secname;
    // }
    // console.log(obj.amount,"success")
  }
  //   getURL() {
  //     alert("The URL of this page is: " + window.location.href);
  // }
  gotoHome() {
    // this.navCtrl.navigateBack('tabs/home');
    // this.router.navigate(['tabs/home']);
    this.navCtrl.navigateRoot('tabs/home');
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }, {
    type: _services__WEBPACK_IMPORTED_MODULE_2__.CommonStorage
  }];
};
VoucherPageFailurePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-voucher-page-failure',
  template: _voucher_page_failure_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_voucher_page_failure_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController, _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router, _services__WEBPACK_IMPORTED_MODULE_2__.CommonStorage])], VoucherPageFailurePage);


/***/ }),

/***/ 53874:
/*!********************************************************************************!*\
  !*** ./src/app/voucher-page-failure/voucher-page-failure.page.scss?ngResource ***!
  \********************************************************************************/
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

/***/ 14347:
/*!********************************************************************************!*\
  !*** ./src/app/voucher-page-failure/voucher-page-failure.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>voucher-page-failure</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <p>PNR Num - {{pnrFInal}}</p>\n\n  <button type=\"button\" (click)=\"getURL();\">Get Page URL</button> -->\n  <div>\n    <p style=\"text-align: center;\">{{failureMsg}}</p>\n  </div>\n  <div style=\"display: flex;justify-content: center;\">\n    <ion-button (click)=\"gotoHome()\" expand=\"block\">Back TO Home</ion-button>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_voucher-page-failure_voucher-page-failure_module_ts.js.map