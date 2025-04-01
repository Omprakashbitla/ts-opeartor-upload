(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_smart-miles-point_smart-miles-point_module_ts"],{

/***/ 27807:
/*!***********************************************************************!*\
  !*** ./src/app/smart-miles-point/smart-miles-point-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SmartMilesPointPageRoutingModule: () => (/* binding */ SmartMilesPointPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _smart_miles_point_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smart-miles-point.page */ 30919);




const routes = [{
  path: '',
  component: _smart_miles_point_page__WEBPACK_IMPORTED_MODULE_0__.SmartMilesPointPage
}];
let SmartMilesPointPageRoutingModule = class SmartMilesPointPageRoutingModule {};
SmartMilesPointPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], SmartMilesPointPageRoutingModule);


/***/ }),

/***/ 19397:
/*!***************************************************************!*\
  !*** ./src/app/smart-miles-point/smart-miles-point.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SmartMilesPointPageModule: () => (/* binding */ SmartMilesPointPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _smart_miles_point_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smart-miles-point-routing.module */ 27807);
/* harmony import */ var _smart_miles_point_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smart-miles-point.page */ 30919);







let SmartMilesPointPageModule = class SmartMilesPointPageModule {};
SmartMilesPointPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _smart_miles_point_routing_module__WEBPACK_IMPORTED_MODULE_0__.SmartMilesPointPageRoutingModule],
  declarations: [_smart_miles_point_page__WEBPACK_IMPORTED_MODULE_1__.SmartMilesPointPage]
})], SmartMilesPointPageModule);


/***/ }),

/***/ 30919:
/*!*************************************************************!*\
  !*** ./src/app/smart-miles-point/smart-miles-point.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SmartMilesPointPage: () => (/* binding */ SmartMilesPointPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _smart_miles_point_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smart-miles-point.page.html?ngResource */ 747);
/* harmony import */ var _smart_miles_point_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smart-miles-point.page.scss?ngResource */ 6752);
/* harmony import */ var _smart_miles_point_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_miles_point_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 2288);





let SmartMilesPointPage = class SmartMilesPointPage {
  constructor(navCtrl) {
    this.navCtrl = navCtrl;
  }
  ngOnInit() {
    this.width = 100;
  }
  goToBack() {
    this.navCtrl.navigateForward('more');
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController
  }];
};
SmartMilesPointPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-smart-miles-point',
  template: _smart_miles_point_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_smart_miles_point_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController])], SmartMilesPointPage);


/***/ }),

/***/ 6752:
/*!**************************************************************************!*\
  !*** ./src/app/smart-miles-point/smart-miles-point.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 92487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 31386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-button {
  z-index: 100;
}

ion-title {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
}

.firstImg-set {
  background-color: rgb(148, 165, 214);
  margin-top: 10px;
  border-radius: 20px;
  margin-left: 10px;
  margin-right: 10px;
}

.image-set {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
  height: 100px;
}

.secDiv {
  border-bottom: 0.5px solid rgb(61, 57, 57);
  margin-left: 5px;
  margin-right: 5px;
}

.thrDiv {
  margin-top: 20px;
  height: 20px;
  margin-right: -50px !important;
  margin-left: 15px;
  padding-right: 10px;
  width: 100%;
  background: #ddd;
  text-align: center;
}

.progress-line {
  height: 20px;
  border-radius: 20px;
  background: #152caf;
}

.image-sett {
  width: 30px;
  height: 30px;
  text-align: center;
}

.container {
  position: relative;
  margin-top: 20px;
}

.smallProgress {
  display: block;
  width: 230px;
  height: 30px;
  background: #152caf;
  position: absolute;
}

.tierShow {
  background: chocolate;
  width: 400px;
  height: 60px;
  z-index: 9;
}`, "",{"version":3,"sources":["webpack://./src/app/smart-miles-point/smart-miles-point.page.scss"],"names":[],"mappings":"AAAA;EACC,YAAA;AACD;;AAEA;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;AACF;;AAKA;EACI,oCAAA;EACA,gBAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;AAFJ;;AAMA;EACI,cAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,aAAA;AAHJ;;AAMA;EACI,0CAAA;EACA,gBAAA;EACA,iBAAA;AAHJ;;AAMA;EACI,gBAAA;EACA,YAAA;EACA,8BAAA;EACA,iBAAA;EACA,mBAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;AAHJ;;AAOA;EAEG,YAAA;EACA,mBAAA;EACA,mBAAA;AALH;;AAOA;EACG,WAAA;EACA,YAAA;EACC,kBAAA;AAJJ;;AAMA;EACI,kBAAA;EACA,gBAAA;AAHJ;;AAKA;EACI,cAAA;EAGA,YAAA;EACA,YAAA;EAEA,mBAAA;EAIA,kBAAA;AARJ;;AAUA;EACI,qBAAA;EAIA,YAAA;EACA,YAAA;EAKA,UAAA;AAdJ","sourcesContent":["ion-button {\n\tz-index: 100;\n}\n\nion-title {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n// ion-content{\n//     background-color: white;\n    \n// }\n.firstImg-set{\n    background-color: rgb(148, 165, 214);\n    margin-top: 10px;\n    border-radius: 20px;\n    margin-left: 10px;\n    margin-right: 10px;\n    \n   \n}    \n.image-set{\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 100px;\n    height: 100px;\n   \n}\n.secDiv{\n    border-bottom: 0.5px solid rgb(61, 57, 57);\n    margin-left: 5px;\n    margin-right: 5px;\n}\n\n.thrDiv{\n    margin-top: 20px;\n    height: 20px;\n    margin-right: -50px !important;\n    margin-left: 15px;\n    padding-right: 10px;\n    width: 100%;\n    background: #ddd;\n    text-align: center;\n    \n}\n\n.progress-line{\n    \n   height: 20px;\n   border-radius: 20px;\n   background: #152caf;\n}\n.image-sett{\n   width: 30px;\n   height: 30px;\n    text-align: center;\n}\n.container{\n    position: relative;\n    margin-top: 20px;\n}\n.smallProgress{\n    display: block;\n    // margin-left: auto;\n    // margin-right: auto;\n    width: 230px;\n    height: 30px;\n    // border-radius: 20px;\n    background: #152caf;\n    // text-align: center;\n    // padding-top: 5px;\n    // padding-bottom: 5px;\n    position: absolute;\n}\n.tierShow{\n    background: chocolate;\n    // display: block;\n    // margin-left: auto;\n    // margin-right: auto;\n    width: 400px;\n    height: 60px;\n    // border-radius: 20px;\n    // text-align: center;\n    // padding-top: 5px;\n    // padding-bottom: 5px;\n    z-index: 9;\n \n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 747:
/*!**************************************************************************!*\
  !*** ./src/app/smart-miles-point/smart-miles-point.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar  >\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goToBack()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n      <!-- <ion-back-button (click)=\"goToBack()\" >\n      </ion-back-button> -->\n    </ion-buttons>\n      <!-- <ion-title>Smart Miles Point</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"firstImg-set\" >\n    <ion-img class=\"image-set\" src=\"../../assets/icon/Amenities.png\"></ion-img>\n    <p class=\"ion-text-center\" style=\"padding-bottom: 10px; color: white;\">Samarpit, You are <br> Silver,Custome</p>\n  </div>\n\n  <div class=\"secDiv\"></div>\n  <div>\n    <div class=\"thrDiv\">\n      <div [ngStyle]=\"{'width.%':width}\" class=\"progress-line\">\n        <span>\n  \n        </span>\n    </div>\n  </div>\n  <div>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"3\">\n          <!-- <ion-icon name=\"disc\"></ion-icon> -->\n          <ion-img class=\"image-sett\" src=\"../../assets/icon/Amenities.png\"></ion-img>\n        </ion-col> \n        <ion-col size=\"3\">\n          <!-- <ion-icon name=\"disc\"></ion-icon> -->\n          <ion-img class=\"image-sett\" src=\"../../assets/icon/Amenities.png\"></ion-img>\n        </ion-col>\n        <ion-col size=\"3\">\n          <!-- <ion-icon name=\"disc\"></ion-icon> -->\n          <ion-img class=\"image-sett\" src=\"../../assets/icon/Amenities.png\"></ion-img>\n        </ion-col>\n        <ion-col size=\"3\">\n          <!-- <ion-icon name=\"disc\"></ion-icon> -->\n          <ion-img class=\"image-sett\" src=\"../../assets/icon/Amenities.png\"></ion-img>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  </div>\n  <div class=\"ion-text-center\">\n    <p>Your Live Point Balance <br> <span style=\"font-size: 1.5rem;\">4500</span></p>\n  </div>\n  <div class=\"container\">\n    <div class=\"smallProgress\">\n      <span style=\"color: white;\">Your Next Destination</span>\n    </div>\n    <div class=\"tierShow\">\n\n    </div>\n  </div>\n \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_smart-miles-point_smart-miles-point_module_ts.js.map