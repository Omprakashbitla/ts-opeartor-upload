(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_ticket-cancel_ticket-cancel_module_ts"],{

/***/ 53449:
/*!***************************************************************!*\
  !*** ./src/app/ticket-cancel/ticket-cancel-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TicketCancelPageRoutingModule: () => (/* binding */ TicketCancelPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ticket_cancel_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticket-cancel.page */ 40195);




const routes = [{
  path: '',
  component: _ticket_cancel_page__WEBPACK_IMPORTED_MODULE_0__.TicketCancelPage
}];
let TicketCancelPageRoutingModule = class TicketCancelPageRoutingModule {};
TicketCancelPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], TicketCancelPageRoutingModule);


/***/ }),

/***/ 47896:
/*!*******************************************************!*\
  !*** ./src/app/ticket-cancel/ticket-cancel.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TicketCancelPageModule: () => (/* binding */ TicketCancelPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _ticket_cancel_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticket-cancel-routing.module */ 53449);
/* harmony import */ var _ticket_cancel_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ticket-cancel.page */ 40195);







let TicketCancelPageModule = class TicketCancelPageModule {};
TicketCancelPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _ticket_cancel_routing_module__WEBPACK_IMPORTED_MODULE_0__.TicketCancelPageRoutingModule],
  declarations: [_ticket_cancel_page__WEBPACK_IMPORTED_MODULE_1__.TicketCancelPage]
})], TicketCancelPageModule);


/***/ }),

/***/ 40195:
/*!*****************************************************!*\
  !*** ./src/app/ticket-cancel/ticket-cancel.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TicketCancelPage: () => (/* binding */ TicketCancelPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _ticket_cancel_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticket-cancel.page.html?ngResource */ 33395);
/* harmony import */ var _ticket_cancel_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ticket-cancel.page.scss?ngResource */ 37764);
/* harmony import */ var _ticket_cancel_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ticket_cancel_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ 88794);






let TicketCancelPage = class TicketCancelPage {
  constructor(navCtrl, commonStorage) {
    this.navCtrl = navCtrl;
    this.commonStorage = commonStorage;
  }
  ngOnInit() {
    this.logo = this.commonStorage.localGet("metaData").mobileLoginPageLogo ? this.commonStorage.localGet("metaData").mobileLoginPageLogo : this.commonStorage.getItem("metaData").headerLogo;
  }
  goToHome() {
    this.navCtrl.navigateRoot('tabs/home');
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController
  }, {
    type: _services__WEBPACK_IMPORTED_MODULE_2__.CommonStorage
  }];
};
TicketCancelPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-ticket-cancel',
  template: _ticket_cancel_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_ticket_cancel_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController, _services__WEBPACK_IMPORTED_MODULE_2__.CommonStorage])], TicketCancelPage);


/***/ }),

/***/ 37764:
/*!******************************************************************!*\
  !*** ./src/app/ticket-cancel/ticket-cancel.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 92487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 31386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.centerDiv {
  margin-top: 100%;
  font-size: 14px;
  text-align: center;
}

.search-txt {
  font-size: 14px;
  font-weight: bold;
  width: 61px;
  text-transform: capitalize;
}`, "",{"version":3,"sources":["webpack://./src/app/ticket-cancel/ticket-cancel.page.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;EACA,eAAA;EACA,kBAAA;AACJ;;AACA;EACI,eAAA;EACA,iBAAA;EACA,WAAA;EACA,0BAAA;AAEJ","sourcesContent":[".centerDiv{\n    margin-top: 100%;\n    font-size: 14px;\n    text-align: center;\n}\n.search-txt {\n    font-size: 14px;\n    font-weight: bold;\n    width: 61px;\n    text-transform: capitalize;\n  }\n  "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 33395:
/*!******************************************************************!*\
  !*** ./src/app/ticket-cancel/ticket-cancel.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>ticket_cancel</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <!-- <div>\n    <img class=\"img-icn\" src=\"{{logo?logo:''}}\" alt=\"\">\n  </div> -->\n  <div class=\"centerDiv\">\n    Your Transaction is not done.Please try again!!!\n    <ion-button mode=\"md\" (click)=\"goToHome()\" class=\"search-btn\" style='--background:var(--iconsAndButtonsColor);--color:var(--primaryText)' >\n      <p class=\"search-txt\">Okay\n          <p>\n  </ion-button>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_ticket-cancel_ticket-cancel_module_ts.js.map