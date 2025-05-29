"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[8859],{

/***/ 16386:
/*!*****************************************************!*\
  !*** ./src/app/feedback/feedback-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedbackPageRoutingModule: () => (/* binding */ FeedbackPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _feedback_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback.page */ 30052);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _FeedbackPageRoutingModule;




const routes = [{
  path: '',
  component: _feedback_page__WEBPACK_IMPORTED_MODULE_0__.FeedbackPage
}];
class FeedbackPageRoutingModule {}
_FeedbackPageRoutingModule = FeedbackPageRoutingModule;
_FeedbackPageRoutingModule.ɵfac = function FeedbackPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FeedbackPageRoutingModule)();
};
_FeedbackPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _FeedbackPageRoutingModule
});
_FeedbackPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FeedbackPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 30052:
/*!*******************************************!*\
  !*** ./src/app/feedback/feedback.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedbackPage: () => (/* binding */ FeedbackPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _services_validator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/validator-service */ 1863);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../white-common-header/white-common-header.component */ 16688);

var _FeedbackPage;












const _c0 = () => ({
  "padding-top": "50px"
});
const _c1 = () => ({});
function FeedbackPage_ng_container_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Something went wrong! Unable to record Feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FeedbackPage_ng_container_0_div_3_Template_div_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.showModalError = !ctx_r2.showModalError);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "TRY AGAIN LATER");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
}
function FeedbackPage_ng_container_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FeedbackPage_ng_container_0_div_4_Template_div_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.feedbackOkay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "OKAY");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.feedbackMsg);
  }
}
function FeedbackPage_ng_container_0_ion_select_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-select-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const val_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", val_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](val_r5.name);
  }
}
function FeedbackPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-heade", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "app-white-common-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, FeedbackPage_ng_container_0_div_3_Template, 7, 0, "div", 4)(4, FeedbackPage_ng_container_0_div_4_Template, 7, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "ion-content", 5)(6, "div", 6)(7, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function FeedbackPage_ng_container_0_Template_form_ngSubmit_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.submitFeedback());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ion-item", 8)(9, "ion-input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup", function FeedbackPage_ng_container_0_Template_ion_input_keyup_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "ion-item", 8)(11, "ion-input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup", function FeedbackPage_ng_container_0_Template_ion_input_keyup_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "ion-item", 8)(13, "ion-input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup", function FeedbackPage_ng_container_0_Template_ion_input_keyup_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "ion-item", 8)(15, "ion-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, FeedbackPage_ng_container_0_ion_select_option_16_Template, 2, 2, "ion-select-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "ion-item", 8)(18, "ion-input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup", function FeedbackPage_ng_container_0_Template_ion_input_keyup_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 15)(20, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FeedbackPage_ng_container_0_Template_ion_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.submitFeedback());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", ctx_r2.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.showModalError);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.showModalSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r2.feedbackForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.feedback_type);
  }
}
function FeedbackPage_ng_template_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Something went wrong! Unable to record Feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FeedbackPage_ng_template_1_div_6_Template_div_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.showModalError = !ctx_r2.showModalError);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "TRY AGAIN LATER");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
}
function FeedbackPage_ng_template_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FeedbackPage_ng_template_1_div_7_Template_div_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.feedbackOkay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "OKAY");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.feedbackMsg);
  }
}
function FeedbackPage_ng_template_1_ion_select_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-select-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const val_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", val_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](val_r9.name);
  }
}
function FeedbackPage_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-heade", 2)(1, "ion-toolbar", 24)(2, "ion-buttons", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Write Feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, FeedbackPage_ng_template_1_div_6_Template, 7, 0, "div", 4)(7, FeedbackPage_ng_template_1_div_7_Template, 7, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ion-content", 27)(9, "div", 6)(10, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function FeedbackPage_ng_template_1_Template_form_ngSubmit_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.submitFeedback());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "ion-item")(12, "ion-input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup", function FeedbackPage_ng_template_1_Template_ion_input_keyup_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "ion-item")(14, "ion-input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup", function FeedbackPage_ng_template_1_Template_ion_input_keyup_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "ion-item")(16, "ion-input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup", function FeedbackPage_ng_template_1_Template_ion_input_keyup_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "ion-item")(18, "ion-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, FeedbackPage_ng_template_1_ion_select_option_19_Template, 2, 2, "ion-select-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "ion-item")(21, "ion-input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup", function FeedbackPage_ng_template_1_Template_ion_input_keyup_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 15)(23, "ion-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FeedbackPage_ng_template_1_Template_ion_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.submitFeedback());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", ctx_r2.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.showModalError);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.showModalSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r2.feedbackForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.feedback_type);
  }
}
class FeedbackPage {
  constructor(formBuilder, api, util, alertController, commonService, appData) {
    this.formBuilder = formBuilder;
    this.api = api;
    this.util = util;
    this.alertController = alertController;
    this.commonService = commonService;
    this.appData = appData;
    this.phoneNumCount = 0;
    this.showModal = false;
    this.showModalError = false;
    this.showModalSuccess = false;
    this.feedback_type = [{
      "id": 2,
      "name": "Suggestions"
    }, {
      "id": 4,
      "name": "Complaints"
    }, {
      "id": 5,
      "name": "Enquiry"
    }, {
      "id": 6,
      "name": "Compliments"
    }, {
      "id": 7,
      "name": "Payments/Refunds"
    }];
    this.isIos = false;
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    this.appData.newTheme = this.util.getNewTheme();
    // this.commonService.gTrack('feedback');
    this.validations();
  }
  ngOnInit() {
    this.appData.newTheme = this.util.getNewTheme();
  }
  validations() {
    // let userid=(Math.random()*1000000).toFixed(0);
    this.feedbackForm = this.formBuilder.group({
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _services_validator_service__WEBPACK_IMPORTED_MODULE_1__.ValidatorService.emailValidator])],
      suggestions: ['2', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required])],
      feedback: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required])],
      username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required])],
      mobile_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(this.phoneNumCount), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(this.phoneNumCount)])]
    });
  }
  onInputChange(ev) {
    // this.showSignupError = false;
    // this.signupErrorMessage = null;
    // let mob: string = this.signupForm.value.mobile_number.toString();
    // if (mob.length > this.phoneNumCount) {
    //   this.signupForm.controls['mobile_number'].setValue(mob.substr(0, this.phoneNumCount));
    // }
  }
  submitFeedback() {
    var _this = this;
    // this.commonService.gTrack('feedback','“Submit” button is clicked in Feedback page')
    let data = {
      "mobile_number": this.feedbackForm.value.mobile_number,
      "name": this.feedbackForm.value.username,
      "email": this.feedbackForm.value.email,
      "dept_id": this.feedbackForm.value.suggestions,
      "message": this.feedbackForm.value.feedback
    };
    this.api.feedback_message_from_app(data).subscribe(/*#__PURE__*/function () {
      var _ref = (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this.feedbackMsg = res.message;
        _this.showModalSuccess = true;
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), err => {
      this.showModalError = true;
    });
  }
  feedbackOkay() {
    this.showModalSuccess = !this.showModalSuccess;
    this.feedbackForm.reset();
  }
}
_FeedbackPage = FeedbackPage;
_FeedbackPage.ɵfac = function FeedbackPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FeedbackPage)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_3__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_4__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_6__.AppData));
};
_FeedbackPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: _FeedbackPage,
  selectors: [["app-feedback"]],
  standalone: false,
  decls: 3,
  vars: 2,
  consts: [["showOldTheme", ""], [4, "ngIf", "ngIfElse"], [3, "ngStyle"], ["title", "Write feedback", "subtitle", "", "showsubTxt", "true", "showsubtitle", "false"], ["class", "whole center", 4, "ngIf"], [1, "themeone-bg-content", "theme1"], [1, "center-div"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "themeone-ion-item"], ["type", "text", "formControlName", "username", "label", "Username", "labelPlacement", "floating", 1, "txt-lbl", 3, "keyup"], ["type", "email", "formControlName", "email", "label", "Email", "labelPlacement", "floating", 1, "txt-lbl", 3, "keyup"], ["type", "tel", "formControlName", "mobile_number", "label", "Mobile number", "labelPlacement", "floating", 1, "txt-lbl", 3, "keyup"], ["color", "red", "interface", "popover", "formControlName", "suggestions", "placeholder", "Suggestions", 1, "feedback_popup", "txt-lbl", 2, "margin-top", "35px", "margin-bottom", "15px", "font-size", "16px", "font-weight", "700", "color", "#333"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "feedback", "label", "Message", "labelPlacement", "floating", 1, "txt-lbl", 3, "keyup"], ["padding", ""], ["mode", "md", "expand", "block", 1, "themeone-login-btn", 3, "click"], [1, "whole", "center"], [1, "legend-box"], ["src", "./assets/icon/close.svg", "alt", "", 1, "img-right"], [1, "txt-msg"], [1, "ok-txt", 3, "click"], ["src", "./assets/icon/correct.svg", "alt", "", 1, "img-right"], [3, "value"], ["mode", "md", 1, "h50", "bg-cl"], ["slot", "start"], [1, "head"], [1, "bg-content"], ["type", "number", "formControlName", "mobile_number", "label", "Mobile number", "labelPlacement", "floating", 1, "txt-lbl", 3, "keyup"], ["color", "red", "interface", "popover", "formControlName", "suggestions", "placeholder", "Suggestions", "mode", "md", 1, "select-lbl", "txt-lbl"], ["mode", "md", "expand", "block", 1, "login-btn", 3, "click"]],
  template: function FeedbackPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, FeedbackPage_ng_container_0_Template, 22, 7, "ng-container", 1)(1, FeedbackPage_ng_template_1_Template, 25, 7, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const showOldTheme_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.appData.newTheme)("ngIfElse", showOldTheme_r10);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonBackButton, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_7__.WhiteCommonHeaderComponent],
  styles: [".head[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  margin: 16px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #4a4a4a;\n}\n\n.card-1[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  margin: 0;\n  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0px, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0;\n  border-radius: 0;\n  height: 44px;\n}\n\n.h50[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\n.bg-content[_ngcontent-%COMP%] {\n  --background: var(--viewBgColor);\n}\n.bg-content[_ngcontent-%COMP%]   .txt-ln2[_ngcontent-%COMP%] {\n  height: 44px;\n  width: 100%;\n  z-index: 5;\n  --background: white;\n  font-family: NotoSans;\n}\n\n.frgt-pw[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n  color: #3e3e52;\n}\n\n.click-btn[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: bold;\n  line-height: 1.54;\n  text-align: center;\n  color: #ff002a;\n}\n\n.txt-lbl[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  color: #3e3e52;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --background: #f7f9fb;\n}\n\n.center-div[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background:var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  position: fixed;\n  bottom: 0;\n  height: 50px;\n  border-radius: 4px;\n}\n\n.whole[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.6);\n}\n\n.legend-box[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 280px;\n  height: 152px;\n}\n\n.img-right[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n}\n\nion-select-option[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n}\n\nbutton[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n}\n\n.sc-ion-label-md-h[_ngcontent-%COMP%] {\n  font-family: NotoSans !important;\n}\n\n.ok-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: var(--iconsAndButtonsColor);\n  margin-top: 28px;\n  width: 100%;\n  text-align: right;\n}\n\n.txt-msg[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n  letter-spacing: 0.25px;\n  color: rgba(0, 0, 0, 0.6);\n  margin-top: 10px;\n  width: 100%;\n}\n\n.select-lbl[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n  max-width: none;\n}\n\n.themeone-bg-content[_ngcontent-%COMP%] {\n  --background: #fff;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .txt-ln2[_ngcontent-%COMP%] {\n  height: 44px;\n  width: 100%;\n  z-index: 5;\n  --background: white;\n  font-family: NotoSans;\n}\n\n.themeone-ion-item[_ngcontent-%COMP%] {\n  --background: #fff;\n}\n\n.themeone-login-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 16px;\n  left: 16px;\n  right: 16px;\n  text-transform: initial;\n  --background: #F2C21A;\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 16px;\n  color: #191966;\n  height: 50px;\n  border-radius: 4px;\n  --box-shadow: none;\n}\n\n.feedback_popup[_ngcontent-%COMP%] {\n  padding-top: 0;\n  padding-bottom: 0px;\n  width: 100%;\n  max-width: none;\n}"]
});

/***/ }),

/***/ 58859:
/*!*********************************************!*\
  !*** ./src/app/feedback/feedback.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedbackPageModule: () => (/* binding */ FeedbackPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _feedback_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback-routing.module */ 16386);
/* harmony import */ var _feedback_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedback.page */ 30052);
/* harmony import */ var _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../white-common-header/white-common-header.component */ 16688);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
var _FeedbackPageModule;







class FeedbackPageModule {}
_FeedbackPageModule = FeedbackPageModule;
_FeedbackPageModule.ɵfac = function FeedbackPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FeedbackPageModule)();
};
_FeedbackPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _FeedbackPageModule
});
_FeedbackPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _feedback_routing_module__WEBPACK_IMPORTED_MODULE_0__.FeedbackPageRoutingModule, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_2__.WhiteCommonHeaderComponent]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](FeedbackPageModule, {
    declarations: [_feedback_page__WEBPACK_IMPORTED_MODULE_1__.FeedbackPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _feedback_routing_module__WEBPACK_IMPORTED_MODULE_0__.FeedbackPageRoutingModule, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_2__.WhiteCommonHeaderComponent]
  });
})();

/***/ })

}]);