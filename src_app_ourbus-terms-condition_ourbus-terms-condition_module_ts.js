(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_ourbus-terms-condition_ourbus-terms-condition_module_ts"],{

/***/ 93912:
/*!*********************************************************************************!*\
  !*** ./src/app/ourbus-terms-condition/ourbus-terms-condition-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OurbusTermsConditionPageRoutingModule: () => (/* binding */ OurbusTermsConditionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ourbus_terms_condition_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ourbus-terms-condition.page */ 11100);




const routes = [{
  path: '',
  component: _ourbus_terms_condition_page__WEBPACK_IMPORTED_MODULE_0__.OurbusTermsConditionPage
}];
let OurbusTermsConditionPageRoutingModule = class OurbusTermsConditionPageRoutingModule {};
OurbusTermsConditionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], OurbusTermsConditionPageRoutingModule);


/***/ }),

/***/ 8333:
/*!*************************************************************************!*\
  !*** ./src/app/ourbus-terms-condition/ourbus-terms-condition.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OurbusTermsConditionPageModule: () => (/* binding */ OurbusTermsConditionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _ourbus_terms_condition_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ourbus-terms-condition-routing.module */ 93912);
/* harmony import */ var _ourbus_terms_condition_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ourbus-terms-condition.page */ 11100);







let OurbusTermsConditionPageModule = class OurbusTermsConditionPageModule {};
OurbusTermsConditionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _ourbus_terms_condition_routing_module__WEBPACK_IMPORTED_MODULE_0__.OurbusTermsConditionPageRoutingModule],
  declarations: [_ourbus_terms_condition_page__WEBPACK_IMPORTED_MODULE_1__.OurbusTermsConditionPage]
})], OurbusTermsConditionPageModule);


/***/ }),

/***/ 11100:
/*!***********************************************************************!*\
  !*** ./src/app/ourbus-terms-condition/ourbus-terms-condition.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OurbusTermsConditionPage: () => (/* binding */ OurbusTermsConditionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _ourbus_terms_condition_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ourbus-terms-condition.page.html?ngResource */ 12113);
/* harmony import */ var _ourbus_terms_condition_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ourbus-terms-condition.page.scss?ngResource */ 13888);
/* harmony import */ var _ourbus_terms_condition_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ourbus_terms_condition_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);







let OurbusTermsConditionPage = class OurbusTermsConditionPage {
  constructor(navCtrl, location, router) {
    this.navCtrl = navCtrl;
    this.location = location;
    this.router = router;
  }
  ngOnInit() {}
  termsCondition() {
    this.navCtrl.navigateForward('term-conditions');
  }
  privacyPolicy() {
    this.navCtrl.navigateForward('privacy-policy');
  }
  handleBackButton() {
    // if (this.location.isCurrentPathEqualTo('/home')) {
    //   // Prevent navigating back to itself
    //   return;
    // }
    if (window.history.length > 1) {
      // If history is present, go back
      this.location.back();
    } else {
      // If no history, navigate to the home page
      this.router.navigate(['tabs/home']);
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }];
};
OurbusTermsConditionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-ourbus-terms-condition',
  template: _ourbus_terms_condition_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_ourbus_terms_condition_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController, _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location, _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router])], OurbusTermsConditionPage);


/***/ }),

/***/ 13888:
/*!************************************************************************************!*\
  !*** ./src/app/ourbus-terms-condition/ourbus-terms-condition.page.scss?ngResource ***!
  \************************************************************************************/
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
  font-weight: 500;
  color: #2D2D2D;
}`, "",{"version":3,"sources":["webpack://./src/app/ourbus-terms-condition/ourbus-terms-condition.page.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,gBAAA;EACA,cAAA;AACJ;;AACA;EACI,eAAA;EACA,gBAAA;EACA,cAAA;EACA,YAAA;AAEJ;;AAAA;EACI,WAAA;EACA,YAAA;AAGJ;;AADA;EACI,kBAAA;EACA,YAAA;EACA,aAAA;AAIJ;;AAFA;EACI,eAAA;EACA,gBAAA;EACA,cAAA;EACA,WAAA;AAKJ;;AAHA;EACI,eAAA;EACA,gBAAA;EACA,cAAA;AAMJ","sourcesContent":[".contactUs{\n    display: flex;\n    align-items: center; \n    justify-content: center;\n    font-size: 18px;\n    font-weight: 500;\n    color: #2d2d2d;\n}\n.bigTextHeading{\n    font-size: 24px;\n    font-weight: 600;\n    color: #2d2d2d;\n    margin: 16px;\n}\n.iconSet{\n    width: 32px;\n    height: 32px;\n}\n.cardSet{\n    text-align: center;\n    margin: 16px;\n    padding: 16px;\n}\n.NormalText{\n    font-size: 16px;\n    font-weight: 300;\n    color: #2D2D2D;\n    margin: 8px;\n}\n.subText{\n    font-size: 18px;\n    font-weight: 500;\n    color: #2D2D2D;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 12113:
/*!************************************************************************************!*\
  !*** ./src/app/ourbus-terms-condition/ourbus-terms-condition.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header mode=\"md\" class=\"theme2\">\n  <ion-toolbar>\n     <ion-row>\n      <ion-col size=\"1\">\n      <ion-buttons>\n        <ion-back-button (click)=\"handleBackButton()\"></ion-back-button>\n      </ion-buttons>\n      </ion-col>\n      <ion-col size=\"11\" class=\"contactUs\">\n        <span>Official Documents</span>\n      </ion-col>\n     </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"theme2\">\n  <div>\n    <p class=\"bigTextHeading\">Terms & Conditions</p>\n    <ion-card class=\"cardSet\" (click)=\"termsCondition()\">\n      <div style=\"margin: 8px;\">\n        <ion-icon src=\"././assets/icon/ourbusDevice.svg\" class=\"iconSet\"></ion-icon>\n      </div>\n      <div class=\"subText\">\n        <span>App Terms & Conditions</span>\n      </div>\n      <div class=\"NormalText\">\n        Rules, specifications, and requirements of the contract with the app.\n      </div>\n    </ion-card>\n    <ion-card class=\"cardSet\" (click)=\"privacyPolicy()\">\n      <div style=\"margin: 8px;\">\n        <ion-icon src=\"././assets/icon/ourbusPolicy.svg\" class=\"iconSet\"></ion-icon>\n      </div>\n      <div class=\"subText\">\n        <span>Privacy Policy</span>\n      </div>\n      <div class=\"NormalText\">\n        Explains how any information gathered in the app is handled.\n      </div>\n    </ion-card>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_ourbus-terms-condition_ourbus-terms-condition_module_ts.js.map