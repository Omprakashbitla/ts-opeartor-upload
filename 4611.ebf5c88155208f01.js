"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[4611],{

/***/ 43738
/*!*******************************************!*\
  !*** ./src/app/faq/faq-routing.module.ts ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqPageRoutingModule: () => (/* binding */ FaqPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 49870);
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faq.page */ 19628);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _FaqPageRoutingModule;




const routes = [{
  path: '',
  component: _faq_page__WEBPACK_IMPORTED_MODULE_1__.FaqPage
}];
class FaqPageRoutingModule {}
_FaqPageRoutingModule = FaqPageRoutingModule;
_FaqPageRoutingModule.ɵfac = function FaqPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FaqPageRoutingModule)();
};
_FaqPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _FaqPageRoutingModule
});
_FaqPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FaqPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 44611
/*!***********************************!*\
  !*** ./src/app/faq/faq.module.ts ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqPageModule: () => (/* binding */ FaqPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _faq_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faq-routing.module */ 43738);
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./faq.page */ 19628);
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../safe-html.pipe */ 41353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 17705);
var _FaqPageModule;







class FaqPageModule {}
_FaqPageModule = FaqPageModule;
_FaqPageModule.ɵfac = function FaqPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FaqPageModule)();
};
_FaqPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _FaqPageModule
});
_FaqPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _faq_routing_module__WEBPACK_IMPORTED_MODULE_3__.FaqPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](FaqPageModule, {
    declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_4__.FaqPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _faq_routing_module__WEBPACK_IMPORTED_MODULE_3__.FaqPageRoutingModule, _safe_html_pipe__WEBPACK_IMPORTED_MODULE_5__.SafeHtmlPipe]
  });
})();

/***/ },

/***/ 19628
/*!*********************************!*\
  !*** ./src/app/faq/faq.page.ts ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqPage: () => (/* binding */ FaqPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _faq_popover_faq_popover_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../faq-popover/faq-popover.page */ 70180);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 83087);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../safe-html.pipe */ 41353);

var _FaqPage;










const _c0 = () => ({
  "padding-top": "0px"
});
const _c1 = () => ({});
const _c2 = () => ({
  "margin-top": "0px"
});
function FaqPage_ion_header_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " FAQs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function FaqPage_ion_header_0_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " FAQs ");
  }
}
function FaqPage_ion_header_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 4)(1, "ion-toolbar", 5)(2, "ion-buttons", 6)(3, "ion-back-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " defaultHref=\"/more\"> ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-title", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, FaqPage_ion_header_0_ng_container_6_Template, 2, 0, "ng-container", 9)(7, FaqPage_ion_header_0_ng_template_7_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const defaultFaq_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx_r1.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder === "shyamolitheme" ? "shyamoli-faq-title" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder === "networktheme")("ngIfElse", defaultFaq_r1);
  }
}
function FaqPage_ng_container_2_div_14_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-card", 20)(1, "ion-accordion-group", 21, 1)(3, "ion-accordion", 21)(4, "ion-item", 22)(5, "ion-label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 25)(9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const catagories_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", i_r5 + 1, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", catagories_r4.sanitizedQuestion ? catagories_r4.sanitizedQuestion : catagories_r4.question, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", catagories_r4.sanitizedAnswer ? catagories_r4.sanitizedAnswer : catagories_r4.answer, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
function FaqPage_ng_container_2_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FaqPage_ng_container_2_div_14_ion_card_1_Template, 11, 3, "ion-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.selectedQuesions);
  }
}
function FaqPage_ng_container_2_div_15_ion_item_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FaqPage_ng_container_2_div_15_ion_item_5_Template_ion_item_click_0_listener() {
      const cat_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.openQuestion(cat_r7.questions));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cat_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", cat_r7.category, " ");
  }
}
function FaqPage_ng_container_2_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "ion-item", 27)(2, "ion-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Select Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, FaqPage_ng_container_2_div_15_ion_item_5_Template, 2, 1, "ion-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.faqResults);
  }
}
function FaqPage_ng_container_2_div_16_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-card", 20)(1, "ion-accordion-group", 21, 1)(3, "ion-accordion", 21)(4, "ion-item", 22)(5, "ion-label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 25)(9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const catQue_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", i_r9 + 1, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", catQue_r8.question, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 3, catQue_r8.answer), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
function FaqPage_ng_container_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FaqPage_ng_container_2_div_16_ion_card_1_Template, 12, 5, "ion-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.categoryQuestions);
  }
}
function FaqPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 10)(2, "ion-row", 11)(3, "ion-col", 12)(4, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FaqPage_ng_container_2_Template_ion_icon_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.isCatagory == true ? ctx_r1.backHome() : ctx_r1.openCat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-col", 14)(6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "FAQs");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FaqPage_ng_container_2_Template_ion_col_click_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.ClickFocus($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h1", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Frequently Asked Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Search below for any questions you may have and get to know our services better ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, FaqPage_ng_container_2_div_14_Template, 2, 1, "div", 3)(15, FaqPage_ng_container_2_div_15_Template, 6, 1, "div", 3)(16, FaqPage_ng_container_2_div_16_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx_r1.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c2) : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.fromSearch == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.isCatagory == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.showQuestion == true);
  }
}
function FaqPage_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r1.faq), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
function FaqPage_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 32)(2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]("Not available");
  }
}
class FaqPage {
  constructor(commonStorage, popoverCtrl, modalctrl, apiFactory, router, util) {
    this.commonStorage = commonStorage;
    this.popoverCtrl = popoverCtrl;
    this.modalctrl = modalctrl;
    this.apiFactory = apiFactory;
    this.router = router;
    this.util = util;
    this.isFaqEmpty = true;
    this.isCatagory = true;
    this.showQuestion = false;
    this.fromSearch = false;
    this.isIos = false;
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    this.metaData = this.commonStorage.getItem("metaData");
    this.allowFaq = this.metaData.isFaq;
  }
  ngOnInit() {
    this.apiFactory.getFaq().subscribe(res => {
      if (res.code == 200) {
        if (res.faq_results && res.faq_results.length != 0) {
          this.faqResults = res.faq_results;
          this.faqResults.forEach(faq => {
            faq.questions.forEach(question => {
              question.answer = this.cleanHTML(question.answer);
            });
          });
          this.selectedOption = res.faq_results[0].category;
          this.selectedQuesions = res.faq_results.reduce((acc, faq) => acc.concat(faq.questions), []);
          this.allQuestions = this.selectedQuesions;
          this.isFaqEmpty = false;
        }
        if (res.faq && res.faq != '') {
          this.faq = res.faq;
          this.isFaqEmpty = false;
        }
      } else {
        this.util.showToast(res.message);
      }
    });
  }
  backHome() {
    if (this.metaData.msiteFolder == 'ourbustheme') {
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['tabs/more']);
    }
  }
  cleanHTML(htmlString) {
    const parser = new DOMParser();
    const parsedHtml = parser.parseFromString(htmlString, 'text/html');
    return parsedHtml.body.textContent || "";
  }
  GetCatagory(data) {
    if (data == 'none') {
      this.selectedQuesions = this.allQuestions;
    } else {
      this.fromSearch = true;
      this.isCatagory = false;
      this.showQuestion = false;
      if (data.length == undefined) this.selectedQuesions = [data];else {
        this.selectedQuesions = data;
      }
    }
  }
  ClickFocus(event) {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popup = yield _this.modalctrl.create({
        component: _faq_popover_faq_popover_page__WEBPACK_IMPORTED_MODULE_1__.FaqPopoverPage,
        componentProps: {
          'faqResults': _this.faqResults
        }
      });
      yield popup.present();
      const val = yield popup.onDidDismiss();
      _this.GetCatagory(val.data);
    })();
  }
  ClickDismiss(data) {
    this.popoverCtrl.dismiss();
  }
  openQuestion(questions) {
    this.isCatagory = false;
    this.showQuestion = true;
    this.categoryQuestions = questions;
  }
  openCat() {
    this.isCatagory = true;
    this.showQuestion = false;
    this.fromSearch = false;
  }
}
_FaqPage = FaqPage;
_FaqPage.ɵfac = function FaqPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FaqPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_4__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.PopoverController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_6__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_8__.UtilProvider));
};
_FaqPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _FaqPage,
  selectors: [["app-faq"]],
  standalone: false,
  decls: 5,
  vars: 4,
  consts: [["defaultFaq", ""], ["accordionGroup", ""], ["style", "box-shadow: none;", 3, "ngStyle", 4, "ngIf"], [4, "ngIf"], [2, "box-shadow", "none", 3, "ngStyle"], ["mode", "md", 2, "--border-width", "0px"], ["mode", "md", "slot", "start", 2, "position", "absolute"], [2, "font-weight", "bold"], [1, "head", "shyamoli-head", 2, "font-weight", "bold", "font-size", "18px", 3, "ngClass"], [4, "ngIf", "ngIfElse"], [1, "FaqBg"], [1, "header-row", 3, "ngStyle"], ["size", "auto", 1, "back"], ["name", "arrow-back", 1, "icon-size", 3, "click"], ["size", "auto", 1, "faq"], ["size", "auto", 1, "search", 3, "click"], ["name", "search", 1, "icon-size"], [2, "font-size", "24px", "margin", "0px", "font-weight", "bold"], [2, "margin", "8px auto"], ["style", "margin: 12px;border: 1px solid #fff;box-shadow: none;", 4, "ngFor", "ngForOf"], [2, "margin", "12px", "border", "1px solid #fff", "box-shadow", "none"], [2, "border-radius", "8px"], ["lines", "none", "slot", "header", 1, "accordion-header"], [1, "txt-lbl"], [3, "innerHTML"], ["slot", "content", 1, "accordion-content"], [1, "answer-content", 3, "innerHTML"], ["lines", "none", 2, "color", "grey", "font-size", "14px", "height", "5%"], [2, "margin", "0px"], ["style", "margin-right: 5%;text-transform: capitalize;", 3, "click", 4, "ngFor", "ngForOf"], [2, "margin-right", "5%", "text-transform", "capitalize", 3, "click"], [1, "p5", 3, "innerHTML"], [2, "display", "inline-block", "position", "absolute", "top", "50%", "left", "40%"], [2, "display", "flex", "justify-content", "center"], ["src", "../../assets/icon/noFaq.svg", "alt", "", 2, "width", "30px", "height", "30px"]],
  template: function FaqPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, FaqPage_ion_header_0_Template, 9, 6, "ion-header", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FaqPage_ng_container_2_Template, 17, 6, "ng-container", 3)(3, FaqPage_div_3_Template, 3, 3, "div", 3)(4, FaqPage_div_4_Template, 6, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.allowFaq !== true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.allowFaq == true && ctx.faqResults);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.allowFaq == false && ctx.faq);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isFaqEmpty == true && ctx.allowFaq == "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonAccordion, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonAccordionGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButton, _safe_html_pipe__WEBPACK_IMPORTED_MODULE_10__.SafeHtmlPipe],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --ion-background-color: var(--viewBgColor);\n}\n\n.FaqBg[_ngcontent-%COMP%] {\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('faqBg.81a807dd33522fe7.jpeg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 250px;\n  font-weight: 600;\n  padding: 110px 12px 0px;\n  color: white;\n  -webkit-backface-visibility: 0.3;\n          backface-visibility: 0.3;\n}\n\n.catagoriesSelect[_ngcontent-%COMP%] {\n  height: 50px;\n  padding: 10px 16px;\n  margin: 10px;\n  box-shadow: 1px 2px 10px #efefef;\n  width: 95%;\n  border-radius: 10px;\n}\n\n.header-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin-top: 2%;\n  position: absolute;\n  top: 0%;\n  left: 0%;\n}\n\n.back[_ngcontent-%COMP%], .faq[_ngcontent-%COMP%], .search[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.back[_ngcontent-%COMP%] {\n  margin-left: 2%;\n}\n\n.search[_ngcontent-%COMP%] {\n  margin-right: 2%;\n}\n\n.faq[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.icon-size[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.accordion-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #EFEFEF;\n}\n\n.accordion-content[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n}\n\n.answer-content[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.txt-lbl[_ngcontent-%COMP%] {\n  white-space: normal;\n}\n\n.head[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  margin: 16px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  -webkit-text-fill-color: var(--sectionHeaderTextColor);\n}\n\n.shyamoli-faq-header[_ngcontent-%COMP%] {\n  background: #fff !important;\n  min-height: 56px;\n  box-shadow: none;\n  border-bottom: 1px solid #e0e0e0;\n}\n\n.shyamoli-faq-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 18px;\n  text-align: left;\n}\n\n.shyamoli-head[_ngcontent-%COMP%] {\n  font-size: 16px;\n  text-align: center;\n}"]
});

/***/ }

}]);