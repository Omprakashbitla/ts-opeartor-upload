(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_ourbus-contactus_ourbus-contactus_module_ts"],{

/***/ 34106:
/*!*********************************************************************!*\
  !*** ./src/app/ourbus-contactus/ourbus-contactus-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OurbusContactusPageRoutingModule: () => (/* binding */ OurbusContactusPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ourbus_contactus_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ourbus-contactus.page */ 30546);




const routes = [{
  path: '',
  component: _ourbus_contactus_page__WEBPACK_IMPORTED_MODULE_0__.OurbusContactusPage
}];
let OurbusContactusPageRoutingModule = class OurbusContactusPageRoutingModule {};
OurbusContactusPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], OurbusContactusPageRoutingModule);


/***/ }),

/***/ 25306:
/*!*************************************************************!*\
  !*** ./src/app/ourbus-contactus/ourbus-contactus.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OurbusContactusPageModule: () => (/* binding */ OurbusContactusPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _ourbus_contactus_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ourbus-contactus-routing.module */ 34106);
/* harmony import */ var _ourbus_contactus_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ourbus-contactus.page */ 30546);







let OurbusContactusPageModule = class OurbusContactusPageModule {};
OurbusContactusPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _ourbus_contactus_routing_module__WEBPACK_IMPORTED_MODULE_0__.OurbusContactusPageRoutingModule],
  declarations: [_ourbus_contactus_page__WEBPACK_IMPORTED_MODULE_1__.OurbusContactusPage]
})], OurbusContactusPageModule);


/***/ }),

/***/ 30546:
/*!***********************************************************!*\
  !*** ./src/app/ourbus-contactus/ourbus-contactus.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OurbusContactusPage: () => (/* binding */ OurbusContactusPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _ourbus_contactus_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ourbus-contactus.page.html?ngResource */ 62444);
/* harmony import */ var _ourbus_contactus_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ourbus-contactus.page.scss?ngResource */ 56118);
/* harmony import */ var _ourbus_contactus_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ourbus_contactus_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ 88794);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);







let OurbusContactusPage = class OurbusContactusPage {
  constructor(navCtrl, commonStorage, location) {
    this.navCtrl = navCtrl;
    this.commonStorage = commonStorage;
    this.location = location;
  }
  ngOnInit() {
    this.helpLineNumber = this.commonStorage.getItem('metaData').helpLineNumber.split(',');
    this.operatorEmail = this.commonStorage.getItem('metaData').operatorEmail;
  }
  goToContactSupport() {
    this.navCtrl.navigateForward('contact-us');
  }
  handleBackButton() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.navCtrl.navigateRoot('tabs/home');
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController
  }, {
    type: _services__WEBPACK_IMPORTED_MODULE_2__.CommonStorage
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location
  }];
};
OurbusContactusPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-ourbus-contactus',
  template: _ourbus_contactus_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_ourbus_contactus_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController, _services__WEBPACK_IMPORTED_MODULE_2__.CommonStorage, _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location])], OurbusContactusPage);


/***/ }),

/***/ 56118:
/*!************************************************************************!*\
  !*** ./src/app/ourbus-contactus/ourbus-contactus.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 92487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 31386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.contactUs {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  color: #2d2d2d;
}

.bigTextHeading {
  font-size: 24px;
  font-weight: 600;
  color: #2d2d2d;
  margin: 16px;
}

.iconSet {
  width: 32px;
  height: 32px;
}

.cardSet {
  text-align: center;
  margin: 16px;
  padding: 16px;
}

.NormalText {
  font-size: 16px;
  font-weight: 300;
  color: #2D2D2D;
  margin: 8px;
}

.subText {
  font-size: 18px;
  font-weight: 700;
  color: #2D2D2D;
}`, "",{"version":3,"sources":["webpack://./src/app/ourbus-contactus/ourbus-contactus.page.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,gBAAA;EACA,cAAA;AACJ;;AACA;EACI,eAAA;EACA,gBAAA;EACA,cAAA;EACA,YAAA;AAEJ;;AAAA;EACI,WAAA;EACA,YAAA;AAGJ;;AADA;EACI,kBAAA;EACA,YAAA;EACA,aAAA;AAIJ;;AAFA;EACI,eAAA;EACA,gBAAA;EACA,cAAA;EACA,WAAA;AAKJ;;AAHA;EACI,eAAA;EACA,gBAAA;EACA,cAAA;AAMJ","sourcesContent":[".contactUs{\n    display: flex;\n    align-items: center; \n    justify-content: center;\n    font-size: 18px;\n    font-weight: 500;\n    color: #2d2d2d;\n}\n.bigTextHeading{\n    font-size: 24px;\n    font-weight: 600;\n    color: #2d2d2d;\n    margin: 16px;\n}\n.iconSet{\n    width: 32px;\n    height: 32px;\n}\n.cardSet{\n    text-align: center;\n    margin: 16px;\n    padding: 16px;\n}\n.NormalText{\n    font-size: 16px;\n    font-weight: 300;\n    color: #2D2D2D;\n    margin: 8px;\n}\n.subText{\n    font-size: 18px;\n    font-weight: 700;\n    color: #2D2D2D;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 62444:
/*!************************************************************************!*\
  !*** ./src/app/ourbus-contactus/ourbus-contactus.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header mode=\"md\" class=\"ourbustheme\">\n  <ion-toolbar>\n     <ion-row>\n      <ion-col size=\"1\">\n      <ion-buttons>\n        <ion-back-button (click)=\"handleBackButton()\">\n        </ion-back-button>\n      </ion-buttons>\n      </ion-col>\n      <ion-col size=\"10\" class=\"contactUs\">\n        <span>Contact Us</span>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n     </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ourbustheme\">\n  <div>\n    <p class=\"bigTextHeading\">Welcome to OurBus</p>\n    <!-- <ion-card class=\"cardSet\" (click)=\"goToContactSupport()\">\n      <div style=\"margin: 8px;\">\n        <ion-icon src=\"././assets/icon/ourbusQuestion.svg\" class=\"iconSet\"></ion-icon>\n      </div>\n      <div class=\"subText\">\n        <span>Help Center</span>\n      </div>\n      <div class=\"NormalText\">\n        Search to resolve your problem in just a few seconds\n      </div>\n    </ion-card> -->\n\n    <ion-card class=\"cardSet\" >\n      <a style=\"text-decoration: none;\" href=\"https://api.whatsapp.com/send/?phone=918062750000&text&type=phone_number&app_absent=0\">\n        <div style=\"margin: 8px;\">\n          <a ><ion-icon src=\"././assets/icon/WhatsappLogo.svg\" class=\"iconSet\"></ion-icon></a>\n        </div>\n        <div class=\"subText\">\n          <span><a style=\"color: #2D2D2D;text-decoration: none;\" >WhatsApp Chat</a></span>\n        </div>\n        <div class=\"NormalText\" >\n        <a style=\"color:#2D2D2D;text-decoration: none;\" > Speak with our next available <br>  WhatsApp Chat Agent</a>\n        </div>\n      </a>\n    </ion-card>\n\n    <ion-card class=\"cardSet\">\n      <a href=\"mailto:{{operatorEmail}}\" style=\"text-decoration: none;\">\n        <div style=\"margin: 8px;\">\n          <ion-icon src=\"././assets/icon/ourbusEnvelope.svg\" class=\"iconSet\"></ion-icon>\n        </div>\n        <div class=\"subText\">\n          <span>E-mail</span>\n        </div>\n        <div class=\"NormalText\">\n          Can’t find your answer? Write to us <a  style=\"color: #4CAF50;text-decoration: none;\"> {{operatorEmail}}</a>\n        </div>\n      </a>\n    </ion-card>\n    <ion-card class=\"cardSet\">\n      <div style=\"margin: 8px;\">\n        <ion-icon src=\"././assets/icon/ourBusPhoneCall.svg\" class=\"iconSet\"></ion-icon>\n      </div>\n      <div class=\"subText\">\n        <span>Phone call</span>\n      </div>\n      <div class=\"NormalText\">\n        Reach out to one of our support agents: <div style=\"display: inline;\" *ngFor=\"let number of helpLineNumber ; let i = index\">\n          <a href=\"tel:+91&nbsp;{{number}}\" style=\"color: #4CAF50; text-decoration: none;\"><br>\n            +91 {{ number}} <span *ngIf=\"i&lt;helpLineNumber.length-1\">{{\", \"}}</span>\n          </a>\n        </div>\n      </div>\n    </ion-card>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_ourbus-contactus_ourbus-contactus_module_ts.js.map