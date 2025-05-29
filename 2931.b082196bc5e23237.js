"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[2931],{

/***/ 39274:
/*!*******************************************************************************!*\
  !*** ./src/app/term-conditions-refer/term-conditions-refer-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TermConditionsReferPageRoutingModule: () => (/* binding */ TermConditionsReferPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _term_conditions_refer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./term-conditions-refer.page */ 56476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _TermConditionsReferPageRoutingModule;




const routes = [{
  path: '',
  component: _term_conditions_refer_page__WEBPACK_IMPORTED_MODULE_0__.TermConditionsReferPage
}];
class TermConditionsReferPageRoutingModule {}
_TermConditionsReferPageRoutingModule = TermConditionsReferPageRoutingModule;
_TermConditionsReferPageRoutingModule.ɵfac = function TermConditionsReferPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TermConditionsReferPageRoutingModule)();
};
_TermConditionsReferPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _TermConditionsReferPageRoutingModule
});
_TermConditionsReferPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TermConditionsReferPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 42931:
/*!***********************************************************************!*\
  !*** ./src/app/term-conditions-refer/term-conditions-refer.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TermConditionsReferPageModule: () => (/* binding */ TermConditionsReferPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _term_conditions_refer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./term-conditions-refer-routing.module */ 39274);
/* harmony import */ var _term_conditions_refer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./term-conditions-refer.page */ 56476);
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../safe-html.pipe */ 41353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
var _TermConditionsReferPageModule;







class TermConditionsReferPageModule {}
_TermConditionsReferPageModule = TermConditionsReferPageModule;
_TermConditionsReferPageModule.ɵfac = function TermConditionsReferPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TermConditionsReferPageModule)();
};
_TermConditionsReferPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _TermConditionsReferPageModule
});
_TermConditionsReferPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _term_conditions_refer_routing_module__WEBPACK_IMPORTED_MODULE_0__.TermConditionsReferPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TermConditionsReferPageModule, {
    declarations: [_term_conditions_refer_page__WEBPACK_IMPORTED_MODULE_1__.TermConditionsReferPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _term_conditions_refer_routing_module__WEBPACK_IMPORTED_MODULE_0__.TermConditionsReferPageRoutingModule, _safe_html_pipe__WEBPACK_IMPORTED_MODULE_2__.SafeHtmlPipe]
  });
})();

/***/ }),

/***/ 56476:
/*!*********************************************************************!*\
  !*** ./src/app/term-conditions-refer/term-conditions-refer.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TermConditionsReferPage: () => (/* binding */ TermConditionsReferPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 74474);
var _TermConditionsReferPage;



class TermConditionsReferPage {
  constructor(commonStorage) {
    this.commonStorage = commonStorage;
  }
  ionViewDidEnter() {
    this.htmlData = this.commonStorage.getItem("refer_TC");
  }
  ngOnInit() {}
}
_TermConditionsReferPage = TermConditionsReferPage;
_TermConditionsReferPage.ɵfac = function TermConditionsReferPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TermConditionsReferPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_0__.CommonStorage));
};
_TermConditionsReferPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _TermConditionsReferPage,
  selectors: [["app-term-conditions-refer"]],
  standalone: false,
  decls: 8,
  vars: 1,
  consts: [["mode", "md", 1, "h50", "bg-cl"], ["slot", "start"], [1, "head"], ["padding", ""], [1, "mt20", "termsClass", 3, "innerHTML"]],
  template: function TermConditionsReferPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Read T&C Referal");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.htmlData, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonBackButton],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --ion-background-color:#f7f9fb;\n}\n\n.termsClass[_ngcontent-%COMP%] {\n  padding: 14px;\n}"]
});

/***/ })

}]);