(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_points-success-msg_points-success-msg_module_ts"],{

/***/ 28162:
/*!*************************************************************************!*\
  !*** ./src/app/points-success-msg/points-success-msg-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PointsSuccessMsgPageRoutingModule: () => (/* binding */ PointsSuccessMsgPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _points_success_msg_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./points-success-msg.page */ 42326);




const routes = [{
  path: '',
  component: _points_success_msg_page__WEBPACK_IMPORTED_MODULE_0__.PointsSuccessMsgPage
}];
let PointsSuccessMsgPageRoutingModule = class PointsSuccessMsgPageRoutingModule {};
PointsSuccessMsgPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], PointsSuccessMsgPageRoutingModule);


/***/ }),

/***/ 52969:
/*!*****************************************************************!*\
  !*** ./src/app/points-success-msg/points-success-msg.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PointsSuccessMsgPageModule: () => (/* binding */ PointsSuccessMsgPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _points_success_msg_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./points-success-msg-routing.module */ 28162);
/* harmony import */ var _points_success_msg_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./points-success-msg.page */ 42326);







let PointsSuccessMsgPageModule = class PointsSuccessMsgPageModule {};
PointsSuccessMsgPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _points_success_msg_routing_module__WEBPACK_IMPORTED_MODULE_0__.PointsSuccessMsgPageRoutingModule],
  declarations: [_points_success_msg_page__WEBPACK_IMPORTED_MODULE_1__.PointsSuccessMsgPage]
})], PointsSuccessMsgPageModule);


/***/ }),

/***/ 42326:
/*!***************************************************************!*\
  !*** ./src/app/points-success-msg/points-success-msg.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PointsSuccessMsgPage: () => (/* binding */ PointsSuccessMsgPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _points_success_msg_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./points-success-msg.page.html?ngResource */ 39991);
/* harmony import */ var _points_success_msg_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./points-success-msg.page.scss?ngResource */ 35110);
/* harmony import */ var _points_success_msg_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_points_success_msg_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 2288);





let PointsSuccessMsgPage = class PointsSuccessMsgPage {
  constructor(navCtrl) {
    this.navCtrl = navCtrl;
    this.transferMobileNo = localStorage.getItem('transferMobNo');
    this.pointsGet = localStorage.getItem('totalPoints');
  }
  ngOnInit() {}
  goToHome() {
    this.navCtrl.navigateForward('point-transfer');
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController
  }];
};
PointsSuccessMsgPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-points-success-msg',
  template: _points_success_msg_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_points_success_msg_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController])], PointsSuccessMsgPage);


/***/ }),

/***/ 35110:
/*!****************************************************************************!*\
  !*** ./src/app/points-success-msg/points-success-msg.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 92487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 31386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-content {
  --background: rgba(128, 128, 128, 0.733);
  height: 100vh;
}

.firDiv {
  --background: rgba(128, 128, 128, 0.733);
  height: 40vh;
  padding: 4px 10px 20px 10px;
}

.image-set {
  width: 100px;
  height: 100px;
  margin: 0 auto;
}

.secDiv {
  background: #f1f5f8;
  min-height: 60vh;
  padding: 4px 10px 20px 10px;
  border-radius: 28px 28px 0 0;
}

.firstPara {
  padding-top: 70px;
  margin-left: 5px;
}

.secPara {
  margin-left: 5px;
}

.btn-style {
  text-align: center;
  padding-top: 30px;
}

.first-btn {
  background: rgb(93, 194, 228);
  margin-right: 10px;
  padding: 10px 15px 10px 15px;
  border-radius: 10px;
}`, "",{"version":3,"sources":["webpack://./src/app/points-success-msg/points-success-msg.page.scss"],"names":[],"mappings":"AAEA;EACI,wCAAA;EACA,aAAA;AADJ;;AAGA;EACI,wCAAA;EACA,YAAA;EACA,2BAAA;AAAJ;;AAGA;EACI,YAAA;EACA,aAAA;EACA,cAAA;AAAJ;;AAEA;EACI,mBAAA;EACA,gBAAA;EACA,2BAAA;EACA,4BAAA;AACJ;;AACA;EACI,iBAAA;EACA,gBAAA;AAEJ;;AAAA;EACI,gBAAA;AAGJ;;AAAA;EACI,kBAAA;EACA,iBAAA;AAGJ;;AADA;EACI,6BAAA;EACA,kBAAA;EAGA,4BAAA;EACA,mBAAA;AAEJ","sourcesContent":["\n\nion-content{\n    --background: rgba(128, 128, 128, 0.733);    \n    height: 100vh;\n}\n.firDiv{\n    --background: rgba(128, 128, 128, 0.733);    \n    height: 40vh;\n    padding: 4px 10px 20px 10px;\n    // border-radius: 0 0 28px 28px;\n}\n.image-set{\n    width: 100px;\n    height: 100px;\n    margin: 0 auto;\n }\n.secDiv{\n    background: #f1f5f8;\n    min-height: 60vh;\n    padding: 4px 10px 20px 10px;\n    border-radius: 28px 28px 0 0;\n}\n.firstPara{\n    padding-top: 70px;\n    margin-left: 5px;\n}\n.secPara{\n    margin-left: 5px;\n}\n\n.btn-style{\n    text-align: center;\n    padding-top: 30px;\n}\n.first-btn{\n    background: rgb(93, 194, 228);\n    margin-right: 10px;\n    // width: 100px;\n    // height: 100px;\n    padding: 10px 15px 10px 15px;\n    border-radius: 10px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 39991:
/*!****************************************************************************!*\
  !*** ./src/app/points-success-msg/points-success-msg.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"h50 bg-cl\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button>\n      </ion-back-button>\n    </ion-buttons>\n    <div class=\"head\">Points Success Message</div>  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"firDiv  ion-text-center\">\n    <div style=\"margin-top: 150px;\">\n      <ion-img class=\"image-set\" src=\"./assets/icon/Amenities.png\"></ion-img>\n      <span style=\"color: white;\">Success!!</span>\n    </div>\n  </div>\n\n\n  <div class=\"secDiv ion-margin-bottom\">\n    <div class=\"\">\n      <ion-img></ion-img>\n    </div>\n   <div class=\"ion-text-center\" style=\"margin-top: 10px;\">\n     <h5>Points Transfer Done</h5>\n   </div>\n\n    <div class=\"firstPara\">\n      <p>You have successfully transferred {{pointsGet}} points to {{transferMobileNo}}.</p>\n    </div>\n    <div class=\"secPara\">\n      <p>For more details please check your wallet statement</p>\n    </div>\n    <div class=\"btn-style\">\n      <span (click)=\"goToHome()\" class=\"first-btn\">Back to Home Page</span>\n    </div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_points-success-msg_points-success-msg_module_ts.js.map