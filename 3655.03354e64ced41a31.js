"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[3655],{

/***/ 9632:
/*!***************************************************************!*\
  !*** ./src/app/points-success-msg/points-success-msg.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PointsSuccessMsgPage: () => (/* binding */ PointsSuccessMsgPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 74474);
var _PointsSuccessMsgPage;


class PointsSuccessMsgPage {
  constructor(navCtrl) {
    this.navCtrl = navCtrl;
    this.transferMobileNo = localStorage.getItem('transferMobNo');
    this.pointsGet = localStorage.getItem('totalPoints');
  }
  ngOnInit() {}
  goToHome() {
    this.navCtrl.navigateForward('point-transfer');
  }
}
_PointsSuccessMsgPage = PointsSuccessMsgPage;
_PointsSuccessMsgPage.ɵfac = function PointsSuccessMsgPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PointsSuccessMsgPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.NavController));
};
_PointsSuccessMsgPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _PointsSuccessMsgPage,
  selectors: [["app-points-success-msg"]],
  standalone: false,
  decls: 27,
  vars: 2,
  consts: [["mode", "md", 1, "h50", "bg-cl"], ["slot", "start"], [1, "head"], [1, "firDiv", "ion-text-center"], [2, "margin-top", "150px"], ["src", "./assets/icon/Amenities.png", 1, "image-set"], [2, "color", "white"], [1, "secDiv", "ion-margin-bottom"], [1, ""], [1, "ion-text-center", 2, "margin-top", "10px"], [1, "firstPara"], [1, "secPara"], [1, "btn-style"], [1, "first-btn", 3, "click"]],
  template: function PointsSuccessMsgPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Points Success Message");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content")(7, "div", 3)(8, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ion-img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Success!!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7)(13, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ion-img");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9)(16, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Points Transfer Done");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10)(19, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11)(22, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "For more details please check your wallet statement");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12)(25, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PointsSuccessMsgPage_Template_span_click_25_listener() {
        return ctx.goToHome();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Back to Home Page");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("You have successfully transferred ", ctx.pointsGet, " points to ", ctx.transferMobileNo, ".");
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonBackButton],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: rgba(128, 128, 128, 0.733);\n  height: 100vh;\n}\n\n.firDiv[_ngcontent-%COMP%] {\n  --background: rgba(128, 128, 128, 0.733);\n  height: 40vh;\n  padding: 4px 10px 20px 10px;\n}\n\n.image-set[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  margin: 0 auto;\n}\n\n.secDiv[_ngcontent-%COMP%] {\n  background: #f1f5f8;\n  min-height: 60vh;\n  padding: 4px 10px 20px 10px;\n  border-radius: 28px 28px 0 0;\n}\n\n.firstPara[_ngcontent-%COMP%] {\n  padding-top: 70px;\n  margin-left: 5px;\n}\n\n.secPara[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.btn-style[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 30px;\n}\n\n.first-btn[_ngcontent-%COMP%] {\n  background: rgb(93, 194, 228);\n  margin-right: 10px;\n  padding: 10px 15px 10px 15px;\n  border-radius: 10px;\n}"]
});

/***/ }),

/***/ 23655:
/*!*****************************************************************!*\
  !*** ./src/app/points-success-msg/points-success-msg.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PointsSuccessMsgPageModule: () => (/* binding */ PointsSuccessMsgPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _points_success_msg_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./points-success-msg-routing.module */ 97502);
/* harmony import */ var _points_success_msg_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./points-success-msg.page */ 9632);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _PointsSuccessMsgPageModule;






class PointsSuccessMsgPageModule {}
_PointsSuccessMsgPageModule = PointsSuccessMsgPageModule;
_PointsSuccessMsgPageModule.ɵfac = function PointsSuccessMsgPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PointsSuccessMsgPageModule)();
};
_PointsSuccessMsgPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _PointsSuccessMsgPageModule
});
_PointsSuccessMsgPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _points_success_msg_routing_module__WEBPACK_IMPORTED_MODULE_0__.PointsSuccessMsgPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PointsSuccessMsgPageModule, {
    declarations: [_points_success_msg_page__WEBPACK_IMPORTED_MODULE_1__.PointsSuccessMsgPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _points_success_msg_routing_module__WEBPACK_IMPORTED_MODULE_0__.PointsSuccessMsgPageRoutingModule]
  });
})();

/***/ }),

/***/ 97502:
/*!*************************************************************************!*\
  !*** ./src/app/points-success-msg/points-success-msg-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PointsSuccessMsgPageRoutingModule: () => (/* binding */ PointsSuccessMsgPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _points_success_msg_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./points-success-msg.page */ 9632);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _PointsSuccessMsgPageRoutingModule;




const routes = [{
  path: '',
  component: _points_success_msg_page__WEBPACK_IMPORTED_MODULE_0__.PointsSuccessMsgPage
}];
class PointsSuccessMsgPageRoutingModule {}
_PointsSuccessMsgPageRoutingModule = PointsSuccessMsgPageRoutingModule;
_PointsSuccessMsgPageRoutingModule.ɵfac = function PointsSuccessMsgPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PointsSuccessMsgPageRoutingModule)();
};
_PointsSuccessMsgPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _PointsSuccessMsgPageRoutingModule
});
_PointsSuccessMsgPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PointsSuccessMsgPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ })

}]);