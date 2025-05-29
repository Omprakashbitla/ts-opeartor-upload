"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[8987],{

/***/ 8987:
/*!***********************************************************************!*\
  !*** ./src/app/cancellation-policies/cancellation-policies.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CancellationPoliciesPageModule: () => (/* binding */ CancellationPoliciesPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _cancellation_policies_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cancellation-policies-routing.module */ 77906);
/* harmony import */ var _cancellation_policies_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cancellation-policies.page */ 72852);
/* harmony import */ var _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../white-common-header/white-common-header.component */ 16688);
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../safe-html.pipe */ 41353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17705);
var _CancellationPoliciesPageModule;








class CancellationPoliciesPageModule {}
_CancellationPoliciesPageModule = CancellationPoliciesPageModule;
_CancellationPoliciesPageModule.ɵfac = function CancellationPoliciesPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CancellationPoliciesPageModule)();
};
_CancellationPoliciesPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: _CancellationPoliciesPageModule
});
_CancellationPoliciesPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _cancellation_policies_routing_module__WEBPACK_IMPORTED_MODULE_0__.CancellationPoliciesPageRoutingModule, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_2__.WhiteCommonHeaderComponent]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CancellationPoliciesPageModule, {
    declarations: [_cancellation_policies_page__WEBPACK_IMPORTED_MODULE_1__.CancellationPoliciesPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _cancellation_policies_routing_module__WEBPACK_IMPORTED_MODULE_0__.CancellationPoliciesPageRoutingModule, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_2__.WhiteCommonHeaderComponent, _safe_html_pipe__WEBPACK_IMPORTED_MODULE_3__.SafeHtmlPipe]
  });
})();

/***/ }),

/***/ 72852:
/*!*********************************************************************!*\
  !*** ./src/app/cancellation-policies/cancellation-policies.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CancellationPoliciesPage: () => (/* binding */ CancellationPoliciesPage)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../white-common-header/white-common-header.component */ 16688);
var _CancellationPoliciesPage;








const _c0 = () => ({
  "padding-top": "50px"
});
const _c1 = () => ({});
function CancellationPoliciesPage_ng_container_0_ion_content_3_ion_row_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](" Between ", p_r1.time_limit_from, " to ", p_r1.time_limit_to, " from the station departure time: ", p_r1.percent, "% ");
  }
}
function CancellationPoliciesPage_ng_container_0_ion_content_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content", 5)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Cancellation Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CancellationPoliciesPage_ng_container_0_ion_content_3_ion_row_4_Template, 2, 3, "ion-row", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.cancellationPolices);
  }
}
function CancellationPoliciesPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-white-common-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CancellationPoliciesPage_ng_container_0_ion_content_3_Template, 5, 1, "ion-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", ctx_r1.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](2, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.cancellationPolices);
  }
}
function CancellationPoliciesPage_ng_template_1_ion_row_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](" Between ", p_r3.time_limit_from, " to ", p_r3.time_limit_to, " from the station departure time: ", p_r3.percent, "% ");
  }
}
function CancellationPoliciesPage_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 2)(1, "ion-toolbar", 9)(2, "ion-buttons", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Cancellation policies");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-content", 12)(7, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Cancellation Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, CancellationPoliciesPage_ng_template_1_ion_row_10_Template, 2, 3, "ion-row", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", ctx_r1.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](2, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.cancellationPolices);
  }
}
class CancellationPoliciesPage {
  constructor(apiFactory, appData, util) {
    this.apiFactory = apiFactory;
    this.appData = appData;
    this.util = util;
    this.isIos = false;
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    this.defaultCall();
    this.appData.newTheme = this.util.getNewTheme();
  }
  ngOnInit() {}
  defaultCall() {
    this.apiFactory.getTermsAndConditionsWithCancellationPolicies().subscribe(htmlData => {
      this.htmlData = htmlData;
      this.cancellationPolices = htmlData;
    }, error => {});
  }
}
_CancellationPoliciesPage = CancellationPoliciesPage;
_CancellationPoliciesPage.ɵfac = function CancellationPoliciesPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CancellationPoliciesPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_1__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_2__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_3__.UtilProvider));
};
_CancellationPoliciesPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _CancellationPoliciesPage,
  selectors: [["app-cancellation-policies"]],
  standalone: false,
  decls: 3,
  vars: 2,
  consts: [["showOldTheme", ""], [4, "ngIf", "ngIfElse"], [3, "ngStyle"], ["title", "Cancellation policy", "subtitle", "", "showsubTxt", "true", "showsubtitle", "false"], ["class", "theme1", "padding", "", "style", "--background:#fff;", 4, "ngIf"], ["padding", "", 1, "theme1", 2, "--background", "#fff"], [1, "theme_one_mr-tp-plcy"], ["class", "theme_one_txt-policy", 4, "ngFor", "ngForOf"], [1, "theme_one_txt-policy"], ["mode", "md", 1, "h50", "bg-cl"], ["slot", "start"], [1, "head"], ["padding", ""], [2, "margin-left", "16px"], [1, "mr-tp-plcy", 2, "margin-top", "5%"], ["class", "txt-policy", 4, "ngFor", "ngForOf"], [1, "txt-policy"]],
  template: function CancellationPoliciesPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CancellationPoliciesPage_ng_container_0_Template, 4, 4, "ng-container", 1)(1, CancellationPoliciesPage_ng_template_1_Template, 11, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const showOldTheme_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.appData.newTheme)("ngIfElse", showOldTheme_r4);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonBackButton, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_4__.WhiteCommonHeaderComponent],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --ion-background-color: var(--viewBgColor);\n}\n\n.context[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.43;\n  letter-spacing: normal;\n  color: #3e3e52;\n}\n\n.txt-policy[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #3e3e52;\n  margin: 16px;\n  font-weight: 300;\n}\n\n.mr-tp-plcy[_ngcontent-%COMP%] {\n  height: 100%;\n  margin-top: 10%;\n}\n\n.theme_one_txt-policy[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #3e3e52;\n  margin-top: 10px;\n}\n\n.theme_one_mr-tp-plcy[_ngcontent-%COMP%] {\n  background: #F3F3F7;\n  margin: 10px;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-left: 10px;\n  color: #3e3e52 !important;\n  font-weight: 500;\n}"]
});

/***/ }),

/***/ 77906:
/*!*******************************************************************************!*\
  !*** ./src/app/cancellation-policies/cancellation-policies-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CancellationPoliciesPageRoutingModule: () => (/* binding */ CancellationPoliciesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _cancellation_policies_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cancellation-policies.page */ 72852);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _CancellationPoliciesPageRoutingModule;




const routes = [{
  path: '',
  component: _cancellation_policies_page__WEBPACK_IMPORTED_MODULE_0__.CancellationPoliciesPage
}];
class CancellationPoliciesPageRoutingModule {}
_CancellationPoliciesPageRoutingModule = CancellationPoliciesPageRoutingModule;
_CancellationPoliciesPageRoutingModule.ɵfac = function CancellationPoliciesPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CancellationPoliciesPageRoutingModule)();
};
_CancellationPoliciesPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _CancellationPoliciesPageRoutingModule
});
_CancellationPoliciesPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CancellationPoliciesPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ })

}]);