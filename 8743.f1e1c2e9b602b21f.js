"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[8743],{

/***/ 10142
/*!*******************************************************************************!*\
  !*** ./src/app/forced-login-with-otp/forced-login-with-otp-routing.module.ts ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForcedLoginWithOtpPageRoutingModule: () => (/* binding */ ForcedLoginWithOtpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 49870);
/* harmony import */ var _forced_login_with_otp_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forced-login-with-otp.page */ 89824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _ForcedLoginWithOtpPageRoutingModule;




const routes = [{
  path: '',
  component: _forced_login_with_otp_page__WEBPACK_IMPORTED_MODULE_1__.ForcedLoginWithOtpPage
}];
class ForcedLoginWithOtpPageRoutingModule {}
_ForcedLoginWithOtpPageRoutingModule = ForcedLoginWithOtpPageRoutingModule;
_ForcedLoginWithOtpPageRoutingModule.ɵfac = function ForcedLoginWithOtpPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ForcedLoginWithOtpPageRoutingModule)();
};
_ForcedLoginWithOtpPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _ForcedLoginWithOtpPageRoutingModule
});
_ForcedLoginWithOtpPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ForcedLoginWithOtpPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 68743
/*!***********************************************************************!*\
  !*** ./src/app/forced-login-with-otp/forced-login-with-otp.module.ts ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForcedLoginWithOtpPageModule: () => (/* binding */ ForcedLoginWithOtpPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _forced_login_with_otp_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forced-login-with-otp-routing.module */ 10142);
/* harmony import */ var _forced_login_with_otp_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forced-login-with-otp.page */ 89824);
/* harmony import */ var _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common-header/common-header.component */ 49028);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 17705);
var _ForcedLoginWithOtpPageModule;







class ForcedLoginWithOtpPageModule {}
_ForcedLoginWithOtpPageModule = ForcedLoginWithOtpPageModule;
_ForcedLoginWithOtpPageModule.ɵfac = function ForcedLoginWithOtpPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ForcedLoginWithOtpPageModule)();
};
_ForcedLoginWithOtpPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _ForcedLoginWithOtpPageModule
});
_ForcedLoginWithOtpPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _forced_login_with_otp_routing_module__WEBPACK_IMPORTED_MODULE_3__.ForcedLoginWithOtpPageRoutingModule, _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_5__.CommonHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ForcedLoginWithOtpPageModule, {
    declarations: [_forced_login_with_otp_page__WEBPACK_IMPORTED_MODULE_4__.ForcedLoginWithOtpPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _forced_login_with_otp_routing_module__WEBPACK_IMPORTED_MODULE_3__.ForcedLoginWithOtpPageRoutingModule, _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_5__.CommonHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule]
  });
})();

/***/ },

/***/ 89824
/*!*********************************************************************!*\
  !*** ./src/app/forced-login-with-otp/forced-login-with-otp.page.ts ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForcedLoginWithOtpPage: () => (/* binding */ ForcedLoginWithOtpPage)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _countries_countries_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../countries/countries.json */ 2660);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 83087);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/authentication */ 82491);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common-header/common-header.component */ 49028);
var _ForcedLoginWithOtpPage;
















const _c0 = () => ({
  "top": "130px"
});
const _c1 = () => ({});
const _c2 = () => ({
  "padding-top": "50px"
});
function ForcedLoginWithOtpPage_ng_container_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 13);
  }
}
function ForcedLoginWithOtpPage_ng_container_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 14);
  }
}
function ForcedLoginWithOtpPage_ng_container_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "form", 16)(2, "ion-item", 17)(3, "ion-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function ForcedLoginWithOtpPage_ng_container_0_div_15_Template_ion_input_keyup_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedLoginWithOtpPage_ng_container_0_div_15_Template_ion_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.generateOTP("send"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Login with OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 21)(8, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Don't have an account? please ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedLoginWithOtpPage_ng_container_0_div_15_Template_span_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.gotoSignup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.otpForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("autofocus", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "themeone-login-btn" : "themeone-login-btn2");
  }
}
function ForcedLoginWithOtpPage_ng_container_0_div_16_ion_item_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-input", 29)(2, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ForcedLoginWithOtpPage_ng_container_0_div_16_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("(", ctx_r1.time, " Sec)");
  }
}
function ForcedLoginWithOtpPage_ng_container_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "form", 16)(2, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-input", 24)(4, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ForcedLoginWithOtpPage_ng_container_0_div_16_ion_item_5_Template, 3, 0, "ion-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedLoginWithOtpPage_ng_container_0_div_16_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.validateOTP());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Submit OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedLoginWithOtpPage_ng_container_0_div_16_Template_ion_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.generateOTP("resend"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Resend OTP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ForcedLoginWithOtpPage_ng_container_0_div_16_span_10_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.validateOtpForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.referralCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "themeone-login-btn" : "themeone-login-btn2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.time != "00:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.time != "00:00");
  }
}
function ForcedLoginWithOtpPage_ng_container_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedLoginWithOtpPage_ng_container_0_div_17_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.activateNoteModal = !ctx_r1.activateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 32)(2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Deactivated! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Your account is deactivated! Do you want to activate it?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ion-col", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-col", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedLoginWithOtpPage_ng_container_0_div_17_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.activateNoteModal = !ctx_r1.activateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-col", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedLoginWithOtpPage_ng_container_0_div_17_Template_ion_col_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.activateConsumerStatus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
}
function ForcedLoginWithOtpPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-common-header", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ForcedLoginWithOtpPage_ng_container_0_div_3_Template, 1, 0, "div", 2)(4, ForcedLoginWithOtpPage_ng_container_0_div_4_Template, 1, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-content", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "ion-grid", 8)(10, "ion-row")(11, "ion-col", 9)(12, "div")(13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ForcedLoginWithOtpPage_ng_container_0_div_15_Template, 12, 3, "div", 11)(16, ForcedLoginWithOtpPage_ng_container_0_div_16_Template, 11, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ForcedLoginWithOtpPage_ng_container_0_div_17_Template, 12, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx_r1.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "themeone-sub-hd-txt" : "themeone-sub-hd-txt2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.showForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.showForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.activateNoteModal);
  }
}
function ForcedLoginWithOtpPage_ng_container_1_ion_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedLoginWithOtpPage_ng_container_1_ion_button_8_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.generateOTP("send"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Login with OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ForcedLoginWithOtpPage_ng_container_1_div_9_ion_item_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ForcedLoginWithOtpPage_ng_container_1_div_9_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("(", ctx_r1.time, " Sec)");
  }
}
function ForcedLoginWithOtpPage_ng_container_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "form", 16)(2, "ion-item", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ForcedLoginWithOtpPage_ng_container_1_div_9_ion_item_4_Template, 2, 0, "ion-item", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedLoginWithOtpPage_ng_container_1_div_9_Template_ion_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.validateOTP());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Submit OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedLoginWithOtpPage_ng_container_1_div_9_Template_ion_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.generateOTP("resend"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Resend OTP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ForcedLoginWithOtpPage_ng_container_1_div_9_span_9_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.validateOtpForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.referralCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.time != "00:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.time != "00:00");
  }
}
function ForcedLoginWithOtpPage_ng_container_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedLoginWithOtpPage_ng_container_1_div_10_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.activateNoteModal = !ctx_r1.activateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 32)(2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Deactivated! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Your account is deactivated! Do you want to activate it?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ion-col", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-col", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedLoginWithOtpPage_ng_container_1_div_10_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.activateNoteModal = !ctx_r1.activateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-col", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedLoginWithOtpPage_ng_container_1_div_10_Template_ion_col_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.activateConsumerStatus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
}
function ForcedLoginWithOtpPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-content", 38)(2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 15)(5, "form", 16)(6, "ion-item")(7, "ion-input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function ForcedLoginWithOtpPage_ng_container_1_Template_ion_input_keyup_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ForcedLoginWithOtpPage_ng_container_1_ion_button_8_Template, 2, 0, "ion-button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ForcedLoginWithOtpPage_ng_container_1_div_9_Template, 10, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ForcedLoginWithOtpPage_ng_container_1_div_10_Template, 12, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r1.logo ? ctx_r1.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.otpForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("autofocus", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.showForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.showForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.activateNoteModal);
  }
}
function ForcedLoginWithOtpPage_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 54)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Login / Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx_r1.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c2) : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c1));
  }
}
function ForcedLoginWithOtpPage_ng_container_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 55)(1, "div", 56)(2, "ion-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedLoginWithOtpPage_ng_container_2_div_2_Template_ion_icon_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.backtologin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Verify OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx_r1.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c2) : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c1));
  }
}
function ForcedLoginWithOtpPage_ng_container_2_div_5_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-col", 66)(2, "ion-item", 67)(3, "ion-label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const country_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", country_r11.flag, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", true)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](country_r11.dialCode);
  }
}
function ForcedLoginWithOtpPage_ng_container_2_div_5_ion_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedLoginWithOtpPage_ng_container_2_div_5_ion_button_12_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.generateOTP("send"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Login with OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.isButtonDisabled);
  }
}
function ForcedLoginWithOtpPage_ng_container_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "form", 16)(2, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ForcedLoginWithOtpPage_ng_container_2_div_5_ng_container_3_Template, 7, 4, "ng-container", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-col", 60)(5, "ion-item", 61)(6, "ion-input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function ForcedLoginWithOtpPage_ng_container_2_div_5_Template_ion_input_keyup_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onInputChange($event));
    })("ionChange", function ForcedLoginWithOtpPage_ng_container_2_div_5_Template_ion_input_ionChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.enforceMaxLength($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 63)(8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "By proceeding, you agree to our ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedLoginWithOtpPage_ng_container_2_div_5_Template_span_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.gototermsCondition());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Terms and Conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ForcedLoginWithOtpPage_ng_container_2_div_5_ion_button_12_Template, 2, 1, "ion-button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.otpForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.countryData);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.showForm);
  }
}
function ForcedLoginWithOtpPage_ng_container_2_div_6_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("(", ctx_r1.time, " Sec)");
  }
}
function ForcedLoginWithOtpPage_ng_container_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "form", 16)(2, "div", 9)(3, "ion-label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Enter the One-Time Password sent to:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 73)(9, "ion-input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function ForcedLoginWithOtpPage_ng_container_2_div_6_Template_ion_input_keyup_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onInputOtpChange($event));
    })("ionChange", function ForcedLoginWithOtpPage_ng_container_2_div_6_Template_ion_input_ionChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.enforceMaxLengthOtp($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Didn\u2019t receive the OTP? Try again in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ForcedLoginWithOtpPage_ng_container_2_div_6_span_12_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedLoginWithOtpPage_ng_container_2_div_6_Template_ion_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.validateOtpForm.value.otp && ctx_r1.validateOtpForm.value.referal_code ? ctx_r1.validateReferal() : ctx_r1.validateOTP());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Submit OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ion-button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedLoginWithOtpPage_ng_container_2_div_6_Template_ion_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.generateOTP("resend"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Resend OTP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.validateOtpForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.otpForm.value.mobile_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.time != "00:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.time != "00:00");
  }
}
function ForcedLoginWithOtpPage_ng_container_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedLoginWithOtpPage_ng_container_2_div_7_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.activateNoteModal = !ctx_r1.activateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 32)(2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Deactivated! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Your account is deactivated! Do you want to activate it?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ion-col", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-col", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedLoginWithOtpPage_ng_container_2_div_7_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.activateNoteModal = !ctx_r1.activateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-col", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedLoginWithOtpPage_ng_container_2_div_7_Template_ion_col_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.activateConsumerStatus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
}
function ForcedLoginWithOtpPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ForcedLoginWithOtpPage_ng_container_2_div_1_Template, 3, 3, "div", 50)(2, ForcedLoginWithOtpPage_ng_container_2_div_2_Template, 5, 3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-content", 52)(4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ForcedLoginWithOtpPage_ng_container_2_div_5_Template, 13, 3, "div", 11)(6, ForcedLoginWithOtpPage_ng_container_2_div_6_Template, 17, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ForcedLoginWithOtpPage_ng_container_2_div_7_Template, 12, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.showForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.showForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.showForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.showForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.activateNoteModal);
  }
}
function ForcedLoginWithOtpPage_ng_container_3_ion_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedLoginWithOtpPage_ng_container_3_ion_button_11_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.generateOTP("send"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Login with OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ForcedLoginWithOtpPage_ng_container_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 86);
  }
}
function ForcedLoginWithOtpPage_ng_container_3_div_13_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const digit_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", digit_r17, " ");
  }
}
function ForcedLoginWithOtpPage_ng_container_3_div_13_ion_label_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Referral code (Optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ForcedLoginWithOtpPage_ng_container_3_div_13_ion_item_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ForcedLoginWithOtpPage_ng_container_3_div_13_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("(", ctx_r1.time, " Sec)");
  }
}
function ForcedLoginWithOtpPage_ng_container_3_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "form", 16)(2, "ion-label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Enter the OTP sent to your Mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-item", 87)(5, "div", 88)(6, "ion-input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionInput", function ForcedLoginWithOtpPage_ng_container_3_div_13_Template_ion_input_ionInput_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.updateOtpBoxes($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ForcedLoginWithOtpPage_ng_container_3_div_13_div_8_Template, 2, 1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ForcedLoginWithOtpPage_ng_container_3_div_13_ion_label_9_Template, 2, 0, "ion-label", 92)(10, ForcedLoginWithOtpPage_ng_container_3_div_13_ion_item_10_Template, 2, 0, "ion-item", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ion-button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedLoginWithOtpPage_ng_container_3_div_13_Template_ion_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.validateOTP());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Submit OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedLoginWithOtpPage_ng_container_3_div_13_Template_ion_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.generateOTP("resend"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Resend OTP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ForcedLoginWithOtpPage_ng_container_3_div_13_span_15_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.validateOtpForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.otpBoxArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.referralCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.referralCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.time != "00:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.time != "00:00");
  }
}
function ForcedLoginWithOtpPage_ng_container_3_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedLoginWithOtpPage_ng_container_3_div_14_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.activateNoteModal = !ctx_r1.activateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 32)(2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Deactivated! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Your account is deactivated! Do you want to activate it?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ion-col", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-col", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedLoginWithOtpPage_ng_container_3_div_14_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.activateNoteModal = !ctx_r1.activateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-col", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedLoginWithOtpPage_ng_container_3_div_14_Template_ion_col_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.activateConsumerStatus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
}
function ForcedLoginWithOtpPage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-content", 38)(2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 78)(5, "form", 16)(6, "ion-label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-item", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "ion-icon", 81)(10, "ion-input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ForcedLoginWithOtpPage_ng_container_3_ion_button_11_Template, 2, 0, "ion-button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ForcedLoginWithOtpPage_ng_container_3_div_12_Template, 1, 0, "div", 84)(13, ForcedLoginWithOtpPage_ng_container_3_div_13_Template, 16, 6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ForcedLoginWithOtpPage_ng_container_3_div_14_Template, 12, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r1.logo ? ctx_r1.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.otpForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.showForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.showForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.showForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.activateNoteModal);
  }
}
function ForcedLoginWithOtpPage_ng_container_4_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 109);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function ForcedLoginWithOtpPage_ng_container_4_button_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Login with OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ForcedLoginWithOtpPage_ng_container_4_form_13_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 103)(1, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Referral code (optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ForcedLoginWithOtpPage_ng_container_4_form_13_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", ctx_r1.time, " Sec)");
  }
}
function ForcedLoginWithOtpPage_ng_container_4_form_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ForcedLoginWithOtpPage_ng_container_4_form_13_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](!ctx_r1.loader.isLoading && ctx_r1.validateOTP());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 111)(2, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ForcedLoginWithOtpPage_ng_container_4_form_13_div_5_Template, 4, 0, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Submit OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedLoginWithOtpPage_ng_container_4_form_13_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.generateOTP("resend"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Resend OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ForcedLoginWithOtpPage_ng_container_4_form_13_span_10_Template, 2, 1, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.validateOtpForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.referralCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.time != "00:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.time != "00:00");
  }
}
function ForcedLoginWithOtpPage_ng_container_4_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedLoginWithOtpPage_ng_container_4_div_14_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.activateNoteModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedLoginWithOtpPage_ng_container_4_div_14_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 120)(3, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedLoginWithOtpPage_ng_container_4_div_14_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.activateNoteModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-icon", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "ion-icon", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h2", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Account deactivated");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Your account is deactivated. Do you want to activate it?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 127)(12, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedLoginWithOtpPage_ng_container_4_div_14_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.activateNoteModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForcedLoginWithOtpPage_ng_container_4_div_14_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      ctx_r1.activateNoteModal = false;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.activateConsumerStatus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Yes, activate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
}
function ForcedLoginWithOtpPage_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-content", 97)(2, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ForcedLoginWithOtpPage_ng_container_4_img_3_Template, 1, 1, "img", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 100)(5, "h2", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "form", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ForcedLoginWithOtpPage_ng_container_4_Template_form_ngSubmit_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](!ctx_r1.showForm && !ctx_r1.loader.isLoading && ctx_r1.generateOTP("send"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 103)(9, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Mobile number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ion-input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function ForcedLoginWithOtpPage_ng_container_4_Template_ion_input_keyup_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ForcedLoginWithOtpPage_ng_container_4_button_12_Template, 2, 0, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ForcedLoginWithOtpPage_ng_container_4_form_13_Template, 11, 4, "form", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ForcedLoginWithOtpPage_ng_container_4_div_14_Template, 16, 0, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.logo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.otpForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("autofocus", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.showForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.showForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.activateNoteModal);
  }
}
class ForcedLoginWithOtpPage {
  constructor(commonStorage, formBuilder, apiFactory, loader, util, router, commonService, authenticationService, appData, modalctrl, navCtrl) {
    this.commonStorage = commonStorage;
    this.formBuilder = formBuilder;
    this.apiFactory = apiFactory;
    this.loader = loader;
    this.util = util;
    this.router = router;
    this.commonService = commonService;
    this.authenticationService = authenticationService;
    this.appData = appData;
    this.modalctrl = modalctrl;
    this.navCtrl = navCtrl;
    this.phoneNumCount = '';
    this.remainingTime = 60;
    this.activateNoteModal = false;
    this.isButtonDisabled = true;
    this.otpBoxArray = ['', '', '', '', '', ''];
    this.isIos = false;
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    this.appData.newTheme = this.util.getNewTheme();
    this.logo = this.commonStorage.getItem("metaData").mobileLoginPageLogo ? this.commonStorage.getItem("metaData").mobileLoginPageLogo : this.commonStorage.getItem("metaData").headerLogo;
    this.defaultCall();
  }
  ngOnInit() {
    this.countryData = _countries_countries_json__WEBPACK_IMPORTED_MODULE_1__;
    this.countryData = this.countryData.filter(country => country.dialCode === '+91');
    this.metaData = this.commonStorage.getItem('metaData');
    this.phoneNumCount = this.commonStorage.getItem('metaData').phoneNumCount ? this.commonStorage.getItem('metaData').phoneNumCount : 10;
  }
  OtpFormValidation() {
    let minPhoneCount;
    let maxPhoneCount;
    if (this.phoneNumCount === "") {
      minPhoneCount = 10;
      maxPhoneCount = 14;
    } else {
      minPhoneCount = this.phoneNumCount;
      maxPhoneCount = this.phoneNumCount;
    }
    this.otpForm = this.formBuilder.group({
      mobile_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(maxPhoneCount), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(minPhoneCount)])]
    });
    this.validateOtpForm = this.formBuilder.group({
      otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required])],
      referal_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required])]
    });
  }
  defaultCall() {
    this.OtpFormValidation();
  }
  backtologin() {
    this.showForm = false;
    this.validateOtpForm.reset();
  }
  gototermsCondition() {
    this.modalctrl.dismiss();
    this.router.navigate(['term-conditions']);
  }
  generateOTP(type) {
    if (type == 'resend') {
      this.validateOtpForm.reset();
    }
    this.remainingTime = 59;
    if (!this.otpForm.value.mobile_number) {
      this.util.showToast("Please enter valid mobile number");
      return;
    }
    let mob = this.otpForm.value.mobile_number.toString();
    if (this.phoneNumCount === "") {
      if (mob.length < 10) {
        this.util.showToast("Phone number digits should be longer than 10 and shorter than 14");
        return;
      } else if (mob.length > 14) {
        this.util.showToast("Phone number digits should be longer than 10 and shorter than 14");
        return;
      }
    } else {
      if (mob.length != this.phoneNumCount) {
        this.util.showToast("Phone number should be " + this.phoneNumCount + " digit only");
        return;
      }
    }
    this.loader.showLoadingDefault();
    this.apiFactory.forcedLoginWithOtp(this.otpForm.value.mobile_number).subscribe(res => {
      this.loader.hideLoadingDefault();
      if (res.code == 200) {
        this.showForm = true;
        this.referralCode = true;
        this.startTimer();
        this.otpKey = res.body.otp_key;
        this.code = res.code;
      } else if (res.code == 422) {
        this.apiFactory.loginwithOTP(this.otpForm.value.mobile_number).subscribe(result => {
          this.loader.hideLoadingDefault();
          try {
            if (result.code == 200) {
              this.util.showToast("OTP sent successfully", "");
              this.showForm = true;
              this.referralCode = false;
              this.startTimer();
              this.key = result.body.key;
            } else if (result.code == 491) {
              this.activateNoteModal = true;
              this.activateToken = result.body.auth_token;
            } else {
              if (result.error) this.util.showAlert('', result.error.message);
              this.util.showAlert('', result.message);
            }
          } catch (e) {}
        }, error => {
          this.loader.hideLoadingDefault();
          this.util.showAlert('Failed', 'Cannot get OTP , try again later');
        });
      } else {
        this.util.showToast(res.body.message);
      }
    }, err => {});
  }
  onInputOtpChange(ev) {
    const input = ev.target;
    let value = input.value;
    value = value.replace(/[^0-9]/g, '');
    input.value = value;
    this.validateOtpForm.controls['otp'].setValue(value);
  }
  enforceMaxLength(event) {
    const input = event.target;
    let sanitizedValue = input.value.replace(/[^0-9]/g, '');
    sanitizedValue = sanitizedValue.slice(0, 10);
    input.value = sanitizedValue;
  }
  enforceMaxLengthOtp(event) {
    const input = event.target;
    let sanitizedValue = input.value.replace(/[^0-9]/g, '');
    sanitizedValue = sanitizedValue.slice(0, 6);
    input.value = sanitizedValue;
  }
  validateReferal() {
    this.apiFactory.validateReferalCode(this.validateOtpForm.value.referal_code).subscribe(res => {
      if (res.code == 200) {
        this.validateOTP();
      } else {
        this.util.showToast(res.message);
      }
    });
  }
  onInputChange(ev) {
    const input = ev.target;
    let value = input.value;
    value = value.replace(/[^0-9]/g, '');
    const trimmedValue = parseInt(value, 10).toString();
    if (trimmedValue == '0') {
      input.value = '';
      this.otpForm.controls['mobile_number'].setValue(input.value);
      return;
    }
    if (value.length > 10) {
      value = value.substring(0, 10);
    }
    this.otpForm.controls['mobile_number'].setValue(value);
    let mob = value;
    if (this.otpForm.value.mobile_number) {
      mob = this.otpForm.value.mobile_number.toString();
    }
    let minPhoneCount = this.phoneNumCount === "" ? 0 : this.phoneNumCount;
    let maxPhoneCount = this.phoneNumCount === "" ? 18 : this.phoneNumCount;
    if (mob.length > this.phoneNumCount) {
      this.otpForm.controls['mobile_number'].setValue(mob.substr(0, maxPhoneCount));
    }
    this.isButtonDisabled = value.length !== 10;
    this.showForm = false;
    this.validateOtpForm.reset();
  }
  getTimerClock(inputSeconds) {
    var sec_num = parseInt(inputSeconds.toString(), 10);
    this.remainingTime = sec_num; //Define variable
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - hours * 3600) / 60);
    var seconds = sec_num - hours * 3600 - minutes * 60;
    var hoursString = '';
    var minutesString = '';
    var secondsString = '';
    hoursString = hours < 10 ? "0" + hours : hours.toString();
    minutesString = minutes < 10 ? "0" + minutes : minutes.toString();
    secondsString = seconds < 10 ? "0" + seconds : seconds.toString();
    return minutesString + ':' + secondsString;
  }
  startTimer() {
    var counter = setTimeout(() => {
      this.time = this.getTimerClock(this.remainingTime);
      if (this.remainingTime > 0) {
        this.startTimer();
        this.remainingTime--;
      } else {
        clearInterval(counter);
      }
    }, 1000);
  }
  validateOTP() {
    let obj = {
      "otpKey": this.otpKey,
      "MobileNumber": this.otpForm.value.mobile_number,
      "otp": this.validateOtpForm.value.otp,
      "referalCode": this.validateOtpForm.value.referal_code
    };
    if (this.otpKey) {
      this.commonStorage.localSet("sign-otp", obj);
      if (!this.otpForm.value.mobile_number && this.otpForm.value.mobile_number == null) {
        this.util.showToast('Please enter the mobile number');
      } else if (!this.validateOtpForm.value.otp && this.validateOtpForm.value.otp == null) {
        this.util.showToast('Please enter the otp');
      } else {
        this.loader.showLoadingDefault();
        this.apiFactory.forcedValidateOtp(this.otpKey, this.validateOtpForm.value.otp).subscribe(result => {
          if (result.valid == true) {
            this.loader.hideLoadingDefault();
            this.modalctrl.dismiss();
            this.router.navigate(['sign-up']);
            this.validateOtpForm.reset();
            this.otpForm.reset();
          } else {
            this.util.showToast('Invalid OTP');
            this.loader.hideLoadingDefault();
          }
        }, error => {
          // this.commonService.gTrack('login', 'Login with OTP failed');
          this.loader.hideLoadingDefault();
        });
      }
    } else {
      this.loader.showLoadingDefault();
      if (this.validateOtpForm.value.otp != null && this.key != null && this.otpForm.value.mobile_number != null) {
        this.apiFactory.validateOtpLogin(this.validateOtpForm.value.otp, this.key, this.otpForm.value.mobile_number).subscribe(result => {
          this.loader.hideLoadingDefault();
          try {
            if (result.code == 200) {
              let body = result.body;
              let token = body.authentication_token || body.customer.authentication_token;
              localStorage.setItem('currentUser', JSON.stringify({
                email: body.email,
                token: token,
                userFull: body,
                user: this.authenticationService.setUser(body)
              }));
              this.authenticationService.token = token;
              this.util.showToast("Login successful");
              // this.commonService.gTrack('login', 'Login with OTP successful');
              if (this.metaData.msiteFolder == 'ourbustheme') {
                this.onUserLogin(body.first_name, body.last_name, body.email, body.mobile_number);
                this.modalctrl.dismiss();
                this.router.navigate(['home']).then(() => {
                  window.location.reload();
                });
                this.validateOtpForm.reset();
                this.otpForm.reset();
              } else {
                this.router.navigate(['tabs/home']);
                this.validateOtpForm.reset();
                this.otpForm.reset();
              }
            } else {
              // this.commonService.gTrack('login', 'Login with OTP failed');
              if (result.error) this.util.showAlert('', result.error.message);else this.util.showAlert('', result.body.message);
            }
          } catch (e) {}
        }, error => {
          this.loader.hideLoadingDefault();
          // this.commonService.gTrack('login', 'Login with OTP failed');
          this.loader.hideLoadingDefault();
        });
      }
    }
  }
  activateConsumerStatus() {
    this.apiFactory.deactivateConsumerStatus(this.activateToken, '1').subscribe(res => {
      if (res.code == 200) {
        this.util.showToast(res.message);
      } else {
        this.util.showToast(res.message);
      }
    }, err => {});
  }
  gotoSignup() {
    this.navCtrl.navigateForward('sign-up');
  }
  onUserLogin(fname, lname, email, mobile_number) {
    // if(this.appData.isIOS){
    const profile = {
      First_Name: fname,
      Last_Name: lname,
      Email: email,
      Phone: "+91" + mobile_number,
      lifetime_trip_count: "",
      supersaver_active: "",
      supersaver_type: "",
      supersaver_expiry_date: "",
      ota_converted: "" // Custom Key-Value Data
    };
    this.util.cleverTapEvent("", profile, true);
    // }
  }
  updateOtpBoxes(event) {
    const inputValue = event.target.value.toString();
    this.otpBoxArray = inputValue.split('').concat(Array(6).fill('')).slice(0, 6);
  }
}
_ForcedLoginWithOtpPage = ForcedLoginWithOtpPage;
_ForcedLoginWithOtpPage.ɵfac = function ForcedLoginWithOtpPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ForcedLoginWithOtpPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_4__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_5__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_6__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_7__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_9__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_authentication__WEBPACK_IMPORTED_MODULE_10__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_11__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.NavController));
};
_ForcedLoginWithOtpPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _ForcedLoginWithOtpPage,
  selectors: [["app-forced-login-with-otp"]],
  standalone: false,
  decls: 5,
  vars: 5,
  consts: [[4, "ngIf"], ["title", "Customer Login", "subtitle", "", "showsubTxt", "false", "showsubtitle", "false"], ["style", "height: 100px;background-color: #191966; color: #ffffff;", 4, "ngIf"], ["style", "height: 100px;background-color: var(--primary); color: #ffffff;", 4, "ngIf"], [1, "themeone-content-block", "theme", 2, "position", "absolute", "z-index", "8888", "top", "86px", "--background", "transparent", 3, "ngStyle"], [2, "padding-bottom", "70px", "height", "100%"], [2, "background", "#fff", "border-top", "1px solid #0000", "height", "100%", "overflow", "scroll", "border-top-left-radius", "30px", "border-top-right-radius", "30px", "padding", "10px"], ["text-center", "", 1, "vertical-align-content"], [2, "padding-bottom", "50px"], [2, "text-align", "center"], [3, "ngClass"], ["style", "width: 100%;", 4, "ngIf"], ["class", "whole center", "style", "z-index: 9999;", 3, "click", 4, "ngIf"], [2, "height", "100px", "background-color", "#191966", "color", "#ffffff"], [2, "height", "100px", "background-color", "var(--primary)", "color", "#ffffff"], [2, "width", "100%"], [3, "formGroup"], [1, "themeone-ion-item"], ["type", "tel", "placeholder", "Mobile Number", "formControlName", "mobile_number", 3, "keyup", "autofocus"], ["slot", "start", "src", "./assets/icon/phone-fill.svg", 2, "height", "24px", "width", "24px", "position", "absolute", "z-index", "11", "left", "10px"], ["mode", "md", "expand", "block", 3, "click", "ngClass"], [1, "txt-ln2"], [1, "themeone-frgt-pw"], [1, "themeone-click-btn", 3, "click"], ["type", "text", "placeholder", "Enter OTP", "formControlName", "otp"], ["slot", "start", "src", "./assets/icon/lock-fill.svg", 2, "height", "24px", "width", "24px", "position", "absolute", "z-index", "11", "left", "10px"], ["class", "themeone-ion-item", 4, "ngIf"], ["mode", "md", "expand", "block", "fill", "outline", 1, "themeone-otp-btn", 3, "click", "disabled"], ["style", "margin-left: 8px;", 4, "ngIf"], ["type", "text", "placeholder", "Referral code (Optional)", "formControlName", "referal_code"], [2, "margin-left", "8px"], [1, "whole", "center", 2, "z-index", "9999", 3, "click"], [1, "legend-box"], [1, "txt-msg-hd"], [1, "txt-msg"], ["size", "4"], ["size", "4", 1, "brws-txt", 3, "click"], ["size", "4", 1, "dwn-txt", 3, "click"], [1, "theme"], [1, "center"], ["alt", "", 1, "img-icn", 3, "src"], ["label", "Mobile Number", "labelPlacement", "floating", "type", "tel", "formControlName", "mobile_number", 1, "txt-lbl", 3, "keyup", "autofocus"], ["mode", "md", "class", "login-btn", "expand", "block", 3, "click", 4, "ngIf"], ["class", "whole center", 3, "click", 4, "ngIf"], ["mode", "md", "expand", "block", 1, "login-btn", 3, "click"], [1, "otp_number"], ["label", "Enter OTP", "labelPlacement", "floating", "type", "text", "formControlName", "otp", 1, "txt-lbl"], ["mode", "md", "expand", "block", "fill", "outline", 1, "otp-btn", 3, "click", "disabled"], ["label", "Referral code (Optional)", "labelPlacement", "floating", "type", "text", "formControlName", "referal_code", 1, "txt-lbl"], [1, "whole", "center", 3, "click"], ["class", "ourbus_header_div", 3, "ngStyle", 4, "ngIf"], ["class", "ourbus_header_div1", 3, "ngStyle", 4, "ngIf"], [1, "theme2"], ["class", "whole center theme2", 3, "click", 4, "ngIf"], [1, "ourbus_header_div", 3, "ngStyle"], [1, "ourbus_header_div1", 3, "ngStyle"], [1, "ourbus-header-container"], ["name", "arrow-back-outline", 1, "ourbus-back-icon", 3, "click"], [1, "ourbus-header-text"], [4, "ngFor", "ngForOf"], ["size", "8.5"], ["lines", "none", "mode", "md", 1, "ourbus_custom_input", 2, "margin", "8px 0px"], ["label", "Enter Phone Number", "labelPlacement", "floating", "fill", "outline", "formControlName", "mobile_number", "inputmode", "numeric", "type", "tel", "maxlength", "10", 1, "ourbus_inputText", "ourbus_labelSet", 2, "min-height", "64px", 3, "keyup", "ionChange"], [2, "font-size", "12px", "color", "#747474", "text-align", "start"], [2, "color", "#0972EB", "text-decoration", "underline", 3, "click"], ["mode", "md", "class", "ourbus-login-btn", "expand", "block", 3, "disabled", "click", 4, "ngIf"], ["size", "3.5"], ["lines", "none", "mode", "md", 1, "ourbus_custom_input", "ourbus_item_outline"], [2, "margin", "-34px 0px 0px 0px", "font-size", "20px"], [1, "ourbus_inputText", "ourbus_dialcode", 3, "readonly", "disabled"], ["mode", "md", "expand", "block", 1, "ourbus-login-btn", 3, "click", "disabled"], [2, "color", "#2D2D2D", "font-size", "16px"], [2, "font-weight", "700"], [1, "otp_number", "ourbus_custom_input", 2, "margin", "8px 0px"], ["mode", "md", "label", "Enter OTP", "labelPlacement", "floating", "fill", "outline", "formControlName", "otp", "inputmode", "numeric", "type", "tel", "pattern", "[0-9]*", "maxlength", "6", 1, "ourbus_inputText", "ourbus_labelSet", 3, "keyup", "ionChange"], ["mode", "md", "expand", "block", 1, "ourbus-login-btn", 3, "click"], ["mode", "md", "expand", "block", "fill", "outline", 1, "ourbus-otp-btn", 3, "click", "disabled"], [1, "whole", "center", "theme2", 3, "click"], [2, "width", "100%", "margin-top", "15px"], [1, "shyamoli-label"], ["lines", "none", 1, "shyamoli-input-item", 2, "margin-top", "10px"], ["slot", "start", "src", "./assets/icon/shyamoli-mobile.svg", 1, "input-icon"], ["placeholder", "Enter Mobile Number", "type", "tel", "inputmode", "numeric", "pattern", "[0-9]*", "formControlName", "mobile_number", "maxlength", "10", "oninput", "this.value = this.value.replace(/[^0-9]/g, '')", 1, "custom-input", 2, "margin-left", "-8px"], ["mode", "md", "class", "login-btn", "expand", "block", "style", "font-size: 16px;height: 40px;", 3, "click", 4, "ngIf"], ["class", "shyamoli-line", 4, "ngIf"], ["mode", "md", "expand", "block", 1, "login-btn", 2, "font-size", "16px", "height", "40px", 3, "click"], [1, "shyamoli-line"], ["lines", "none", 1, "shyamoli-input", 2, "margin-top", "10px", "margin-bottom", "15px"], [1, "otp-wrapper"], ["type", "text", "maxlength", "6", "formControlName", "otp", "placeholder", "Enter OTP", 1, "otp-hidden-input", 3, "ionInput"], [1, "otp-box-container"], ["class", "otp-box", 4, "ngFor", "ngForOf"], ["class", "shyamoli-label", 4, "ngIf"], ["lines", "none", "class", "shyamoli-input-item", "style", "margin-top: 10px;", 4, "ngIf"], ["mode", "md", "expand", "block", "fill", "outline", 1, "otp-btn", 2, "font-size", "16px", "height", "40px", 3, "click", "disabled"], [1, "otp-box"], ["placeholder", "Referral code", "type", "text", "formControlName", "referal_code", 1, "custom-input"], [1, "sb-auth", "sb-auth--noheader"], [1, "sb-auth__body"], ["class", "sb-auth__logo", "alt", "", 3, "src", 4, "ngIf"], [1, "sb-pax-card", "sb-auth__card"], [1, "sb-pax-card__title"], [1, "sb-auth__stack", 3, "ngSubmit", "formGroup"], [1, "sb-pfield"], [1, "sb-pfield__label"], ["placeholder", "Enter mobile number", "type", "tel", "formControlName", "mobile_number", "aria-label", "Mobile number", 1, "sb-pfield__input", 3, "keyup", "autofocus"], ["type", "submit", "class", "sb-btn-solid sb-auth__btn", 4, "ngIf"], ["class", "sb-auth__stack", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "sb-dialog-backdrop", 3, "click", 4, "ngIf"], ["alt", "", 1, "sb-auth__logo", 3, "src"], ["type", "submit", 1, "sb-btn-solid", "sb-auth__btn"], [1, "sb-pfield", "otp_number"], ["placeholder", "Enter OTP", "type", "text", "formControlName", "otp", "aria-label", "OTP", 1, "sb-pfield__input"], ["class", "sb-pfield", 4, "ngIf"], ["type", "button", 1, "sb-btn-outline", "sb-auth__btn", 3, "click", "disabled"], ["class", "sb-auth__timer", 4, "ngIf"], ["placeholder", "Enter referral code", "type", "text", "formControlName", "referal_code", "aria-label", "Referral code (optional)", 1, "sb-pfield__input"], [1, "sb-auth__timer"], [1, "sb-dialog-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "sbDeactivatedTitle", 1, "sb-dialog", "sb-confirm", 3, "click"], [1, "sb-dialog__head", "sb-confirm__head"], ["type", "button", "aria-label", "Close", 1, "sb-icon-btn", "sb-dialog__close", 3, "click"], ["name", "close-outline", "aria-hidden", "true"], [1, "sb-confirm__icon"], ["name", "person-circle-outline", "aria-hidden", "true"], ["id", "sbDeactivatedTitle", 1, "sb-confirm__title"], [1, "sb-confirm__text"], [1, "sb-confirm__actions"], ["type", "button", 1, "sb-btn-secondary", 3, "click"], ["type", "button", 1, "sb-btn-primary", 3, "click"]],
  template: function ForcedLoginWithOtpPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ForcedLoginWithOtpPage_ng_container_0_Template, 18, 9, "ng-container", 0)(1, ForcedLoginWithOtpPage_ng_container_1_Template, 11, 6, "ng-container", 0)(2, ForcedLoginWithOtpPage_ng_container_2_Template, 8, 5, "ng-container", 0)(3, ForcedLoginWithOtpPage_ng_container_3_Template, 15, 6, "ng-container", 0)(4, ForcedLoginWithOtpPage_ng_container_4_Template, 15, 6, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme" || ctx.metaData.msiteFolder == "networktheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "" || ctx.metaData.msiteFolder == "seabirdTheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "shyamolitheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder === "seabirdThemeNew");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.PatternValidator, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.TextValueAccessor, _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_15__.CommonHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName],
  styles: [".img-icn[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 80px;\n  display: block;\n  margin: 10%;\n}\n\n.center[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.txt-lbl[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: normal;\n  color: #3e3e52;\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  margin: 32px 0 12px;\n  text-transform: initial;\n  color: var(--primaryText);\n  --background: var(--iconsAndButtonsColor);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n}\n\n.otp-btn[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  text-transform: initial;\n  font-family: NotoSans;\n  color: var(--iconsAndButtonsColor);\n  --border-color:var(--iconsAndButtonsColor);\n  --border-width: 1px;\n  font-weight: bolder;\n  font-size: 13px;\n}\n\n.txt-ln2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: NotoSans;\n  width: 100%;\n}\n\n.frgt-pw[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n  color: #3e3e52;\n}\n\n.click-btn[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: bold;\n  line-height: 1.54;\n  text-align: center;\n  color: var(--iconsAndButtonsColor);\n  padding-left: 2%;\n}\n\n.txt-ln3[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  width: 100%;\n  position: absolute;\n  bottom: 4%;\n  left: 3%;\n}\n\nion-input[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n}\n\n.sub-hd-txt[_ngcontent-%COMP%] {\n  margin: 8px 0 10%;\n  font-weight: bolder;\n  color: #3e3e52;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: #ffffff;\n}\n\n.theme[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.whole[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.6);\n}\n\n.legend-box[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 280px;\n  height: auto;\n}\n\n.txt-msg[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n  text-align: justify;\n  letter-spacing: 0.25px;\n  color: rgba(0, 0, 0, 0.6);\n  margin-top: 10px;\n  width: 100%;\n}\n\n.dwn-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #ed3237;\n  margin-top: 28px;\n  width: 100%;\n  text-align: right;\n}\n\n.brws-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #4a4a4a;\n  margin-top: 28px;\n  width: 100%;\n  text-align: right;\n}\n\n.txt-msg-hd[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bolder;\n  font-family: NotoSans;\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.themeone-bg-page[_ngcontent-%COMP%] {\n  background: #191966;\n  height: -webkit-fill-available;\n}\n\n.themeone-center[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  padding: 16px;\n  height: -webkit-fill-available;\n}\n\n.themeone-sub-hd-txt[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #191966;\n  margin: 5% 0 5%;\n  text-align: center;\n}\n\n.themeone-sub-hd-txt2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--primaryText);\n  margin: 5% 0 5%;\n  text-align: center;\n}\n\n.themeone-ion-item[_ngcontent-%COMP%] {\n  --inner-border-width: 0;\n  border-radius: 5px;\n  --border-radius: 5px;\n  --border-width: 0px;\n  margin: 10px 0px;\n  font-size: 14px;\n  color: #333333;\n}\n\n.themeone-ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  border: 1px solid #F1F2F4;\n  --padding-start: 42px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  --border-radius: 10px;\n}\n\n.themeone-login-btn[_ngcontent-%COMP%] {\n  --background: #F2C21A;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 26px;\n  letter-spacing: -0.01em;\n  text-align: center;\n  --border-radius: 010px;\n  height: 50px;\n  color: #191966;\n  margin-top: 15px;\n}\n\n.themeone-login-btn2[_ngcontent-%COMP%] {\n  --background: var(--iconsAndButtonsColor);\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 26px;\n  letter-spacing: -0.01em;\n  text-align: center;\n  --border-radius: 010px;\n  height: 50px;\n  color: var(--primaryText);\n  margin-top: 15px;\n}\n\n.themeone-middle[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  padding-top: 0px;\n}\n\n.themeone-otp-btn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 26px;\n  letter-spacing: -0.01em;\n  text-align: center;\n  --border-radius: 010px;\n  height: 50px;\n  color: #191966;\n  margin-top: 15px;\n  --border-color: #F2C21A;\n}\n\n.themeone-frgt-pw[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  text-align: center;\n  color: #1F1F1F;\n}\n\n.themeone-click-btn[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  text-align: center;\n  color: #F2C21A;\n}\n\n.vertical-align-content[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-content: center !important;\n  align-items: center !important;\n  height: 100%;\n}\n\n.ourbus_header_div[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 15px;\n  border-bottom: 1px solid #EFEFEF;\n}\n.ourbus_header_div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.ourbus_header_div1[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 20px;\n  border-bottom: 1px solid #EFEFEF;\n  padding-bottom: 15px;\n}\n\n.ourbus-header-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  width: 100%;\n}\n\n.ourbus-back-icon[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  margin-left: 20px;\n}\n\n.ourbus-header-text[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 18px;\n}\n\n.ourbus-login-btn[_ngcontent-%COMP%] {\n  margin: 10px 0 12px;\n  text-transform: initial;\n  color: var(--primaryText);\n  --background: var(--iconsAndButtonsColor);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 16px;\n  height: 48px;\n}\n\n.ourbus-otp-btn[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  text-transform: initial;\n  font-family: NotoSans;\n  color: var(--iconsAndButtonsColor);\n  --border-color:var(--iconsAndButtonsColor);\n  --border-width: 1px;\n  font-weight: bolder;\n  font-size: 16px;\n  height: 48px;\n}\n\n.ourbus_item_outline[_ngcontent-%COMP%] {\n  outline: 1px solid #D9D9D9 !important;\n  margin-top: 15px !important;\n  padding-top: 16px !important;\n  border-radius: 3px !important;\n  height: 60px !important;\n}\n\n.ourbus_dialcode[_ngcontent-%COMP%] {\n  height: 58px;\n  margin-left: 8px;\n  opacity: 2.5;\n  color: #747474;\n}\n\n.shyamoli-input-item[_ngcontent-%COMP%] {\n  border: 1px solid #d5d9de;\n  border-radius: 12px;\n  padding-left: 10px;\n  margin-bottom: 18px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n}\n\n.custom-input[_ngcontent-%COMP%] {\n  font-size: 15px;\n  --padding-start: 10px;\n}\n\n.input-icon[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  color: #8a8a8a;\n  margin-right: 8px;\n}\n\nion-item.shyamoli-input-item[_ngcontent-%COMP%]::part(native) {\n  padding-inline-start: 8px;\n  padding-inline-end: 8px;\n}\n\nion-item.shyamoli-input-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\nion-item.shyamoli-input-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --highlight-color-focused: transparent !important;\n}\n\n.otp-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n\n.otp-hidden-input[_ngcontent-%COMP%] {\n  opacity: 0; \n\n  position: absolute;\n  z-index: 2;\n  letter-spacing: 40px;\n}\n\n.otp-box-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 4px;\n  width: 100%;\n}\n\n.otp-box[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 48px;\n  border: 1px solid #CFCFCF;\n  border-radius: 10px;\n  font-size: 22px;\n  font-weight: 400;\n  text-align: center;\n  line-height: 48px;\n}\n\n.shyamoli-line[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n  background: #c8c5c5;\n  margin: 25px 0;\n}"]
});

/***/ }

}]);