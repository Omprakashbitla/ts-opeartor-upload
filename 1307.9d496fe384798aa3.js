"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[1307],{

/***/ 41122:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPageRoutingModule: () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 49444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _LoginPageRoutingModule;




const routes = [{
  path: '',
  component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
}];
class LoginPageRoutingModule {}
_LoginPageRoutingModule = LoginPageRoutingModule;
_LoginPageRoutingModule.ɵfac = function LoginPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoginPageRoutingModule)();
};
_LoginPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _LoginPageRoutingModule
});
_LoginPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 49444:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPage: () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _services_validator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/validator-service */ 1863);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication */ 82491);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/theme-service */ 99692);
/* harmony import */ var _services_exception__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/exception */ 91502);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_global_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/global-data.service */ 7516);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common-header/common-header.component */ 49028);

var _LoginPage;


















const _c0 = () => ({
  "padding-top": "50px"
});
const _c1 = () => ({});
const _c2 = () => ({
  "top": "130px"
});
const _c3 = a0 => ({
  "--background": a0
});
function LoginPage_ng_container_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 12)(1, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function LoginPage_ng_container_0_div_8_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.login());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "ion-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "ion-input", 15)(4, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "ion-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "ion-input", 17)(7, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_0_div_8_Template_ion_icon_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.showPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 20)(10, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_0_div_8_Template_span_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.gotoForgotPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11, " Forgot Password? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "ion-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "ion-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_0_div_8_Template_ion_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.gotoOtpLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15, "Login with OTP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r2.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("type", ctx_r2.passwordFieldType);
  }
}
function LoginPage_ng_container_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 12)(1, "form", 24)(2, "ion-item")(3, "ion-input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function LoginPage_ng_container_0_div_9_Template_ion_input_keyup_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_0_div_9_Template_ion_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.generateOTP());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Send OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "ion-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_0_div_9_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.otp_login = !ctx_r2.otp_login);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "Login with Username ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r2.otpForm);
  }
}
function LoginPage_ng_container_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 12)(1, "form", 24)(2, "ion-item", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "ion-input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_0_div_10_Template_ion_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.validateOTP());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "ion-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_0_div_10_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.generateOTP());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "Resend OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "ion-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_0_div_10_Template_ion_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.otp_login = !ctx_r2.otp_login);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "Login with email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r2.validateOtpForm);
  }
}
function LoginPage_ng_container_0_div_11_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 37)(1, "form", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function LoginPage_ng_container_0_div_11_div_10_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.changePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 32)(3, "ion-item", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "ion-input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 32)(6, "ion-item", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "ion-input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 32)(9, "ion-item", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "ion-input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 34)(12, "ion-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, " Change Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r2.changePasswordForm);
  }
}
function LoginPage_ng_container_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 12)(1, "div", 30)(2, "form", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function LoginPage_ng_container_0_div_11_Template_form_ngSubmit_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.forgotPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 32)(4, "ion-item")(5, "ion-input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function LoginPage_ng_container_0_div_11_Template_ion_input_keyup_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.onInputChange1($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 34)(8, "ion-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "SUBMIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, LoginPage_ng_container_0_div_11_div_10_Template, 14, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "ion-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_0_div_11_Template_ion_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      ctx_r2.otp_login = !ctx_r2.otp_login;
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.forgotPwdModal = !ctx_r2.forgotPwdModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12, "Login with OTP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx_r2.errors ? "errors" : "")("formGroup", ctx_r2.forgotForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.isphone);
  }
}
function LoginPage_ng_container_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_0_div_17_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.activateNoteModal = !ctx_r2.activateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 45)(2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, " Deactivated! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Your account is deactivated! Do you want to activate it?");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "ion-col", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "ion-col", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_0_div_17_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.activateNoteModal = !ctx_r2.activateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "ion-col", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_0_div_17_Template_ion_col_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.activateConsumerStatus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
}
function LoginPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ion-header", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "app-common-header", 2)(3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-content", 4)(5, "div", 5)(6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, LoginPage_ng_container_0_div_8_Template, 16, 2, "div", 7)(9, LoginPage_ng_container_0_div_9_Template, 8, 1, "div", 7)(10, LoginPage_ng_container_0_div_10_Template, 10, 1, "div", 7)(11, LoginPage_ng_container_0_div_11_Template, 13, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "div", 8)(13, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, "Don't have an account? please ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_0_Template_span_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.gotoSignup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16, "Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](17, LoginPage_ng_container_0_div_17_Template, 12, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngStyle", ctx_r2.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](7, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](8, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngStyle", ctx_r2.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](9, _c2) : _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](10, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r2.otp_login && !ctx_r2.forgotPwdModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.otp_login && !ctx_r2.showForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.otp_login && ctx_r2.showForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.forgotPwdModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.activateNoteModal);
  }
}
function LoginPage_ng_container_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 12)(1, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function LoginPage_ng_container_1_div_10_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.login());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "ion-input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "ion-input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "ion-button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "ion-button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_1_div_10_Template_ion_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.gotoOtpLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "Login with OTP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r2.loginForm);
  }
}
function LoginPage_ng_container_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 12)(1, "form", 24)(2, "ion-item")(3, "ion-input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function LoginPage_ng_container_1_div_11_Template_ion_input_keyup_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_1_div_11_Template_ion_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.generateOTP());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Send OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "ion-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_1_div_11_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.otp_login = !ctx_r2.otp_login);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "Login with Username ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r2.otpForm);
  }
}
function LoginPage_ng_container_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 12)(1, "form", 24)(2, "ion-item", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "ion-input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_1_div_12_Template_ion_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.validateOTP());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "ion-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_1_div_12_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.generateOTP());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "Resend OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "ion-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_1_div_12_Template_ion_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.otp_login = !ctx_r2.otp_login);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "Login with email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r2.validateOtpForm);
  }
}
function LoginPage_ng_container_1_div_13_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 37)(1, "form", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function LoginPage_ng_container_1_div_13_div_10_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.changePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 32)(3, "ion-item", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "ion-input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 32)(6, "ion-item", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "ion-input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 32)(9, "ion-item", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "ion-input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 34)(12, "ion-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, " Change Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r2.changePasswordForm);
  }
}
function LoginPage_ng_container_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 12)(1, "div", 30)(2, "form", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function LoginPage_ng_container_1_div_13_Template_form_ngSubmit_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.forgotPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 32)(4, "ion-item")(5, "ion-input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function LoginPage_ng_container_1_div_13_Template_ion_input_keyup_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.onInputChange1($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 34)(8, "ion-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "SUBMIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, LoginPage_ng_container_1_div_13_div_10_Template, 14, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "ion-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_1_div_13_Template_ion_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      ctx_r2.otp_login = !ctx_r2.otp_login;
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.forgotPwdModal = !ctx_r2.forgotPwdModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12, "Login with OTP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx_r2.errors ? "errors" : "")("formGroup", ctx_r2.forgotForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.isphone);
  }
}
function LoginPage_ng_container_1_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_1_div_24_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r15);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.activateNoteModal = !ctx_r2.activateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 45)(2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, " Deactivated! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Your account is deactivated! Do you want to activate it?");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "ion-col", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "ion-col", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_1_div_24_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r15);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.activateNoteModal = !ctx_r2.activateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "ion-col", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_1_div_24_Template_ion_col_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r15);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.activateConsumerStatus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
}
function LoginPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 51)(3, "ion-buttons", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Customer Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "ion-content")(8, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, LoginPage_ng_container_1_div_10_Template, 10, 1, "div", 7)(11, LoginPage_ng_container_1_div_11_Template, 8, 1, "div", 7)(12, LoginPage_ng_container_1_div_12_Template, 10, 1, "div", 7)(13, LoginPage_ng_container_1_div_13_Template, 13, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 56)(15, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16, "Forgot password ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_1_Template_span_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.gotoForgotPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18, "Click here");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "div", 59)(20, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21, "Don\u2019t have an account ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_1_Template_span_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.gotoSignup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23, "Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](24, LoginPage_ng_container_1_div_24_Template, 12, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("src", ctx_r2.logo ? ctx_r2.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r2.otp_login && !ctx_r2.forgotPwdModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.otp_login && !ctx_r2.showForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.otp_login && ctx_r2.showForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.forgotPwdModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.activateNoteModal);
  }
}
function LoginPage_ng_container_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 12)(1, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function LoginPage_ng_container_2_div_10_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.login());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "ion-item", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "ion-input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-item", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "ion-input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "ion-icon", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_2_div_10_Template_ion_icon_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.showPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "ion-button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "ion-button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_2_div_10_Template_ion_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.gotoOtpLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, "Login with OTP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r2.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("type", ctx_r2.passwordFieldType);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("name", !ctx_r2.showPass ? "eye-off-outline" : "eye-outline");
  }
}
function LoginPage_ng_container_2_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 12)(1, "form", 24)(2, "ion-item")(3, "ion-input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function LoginPage_ng_container_2_div_11_Template_ion_input_keyup_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r18);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_2_div_11_Template_ion_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r18);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.generateOTP());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Send OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "ion-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_2_div_11_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r18);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.otp_login = !ctx_r2.otp_login);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "Login with Username ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r2.otpForm);
  }
}
function LoginPage_ng_container_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 12)(1, "form", 24)(2, "ion-item", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "ion-input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_2_div_12_Template_ion_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r19);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.validateOTP());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "ion-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_2_div_12_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r19);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.generateOTP());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "Resend OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "ion-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_2_div_12_Template_ion_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r19);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.otp_login = !ctx_r2.otp_login);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "Login with email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r2.validateOtpForm);
  }
}
function LoginPage_ng_container_2_div_13_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 37)(1, "form", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function LoginPage_ng_container_2_div_13_div_10_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r21);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.changePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 32)(3, "ion-item", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "ion-input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 32)(6, "ion-item", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "ion-input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 32)(9, "ion-item", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "ion-input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 34)(12, "ion-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, " Change Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r2.changePasswordForm);
  }
}
function LoginPage_ng_container_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 12)(1, "div", 30)(2, "form", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function LoginPage_ng_container_2_div_13_Template_form_ngSubmit_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r20);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.forgotPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 32)(4, "ion-item")(5, "ion-input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function LoginPage_ng_container_2_div_13_Template_ion_input_keyup_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r20);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.onInputChange1($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 34)(8, "ion-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "SUBMIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, LoginPage_ng_container_2_div_13_div_10_Template, 14, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "ion-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_2_div_13_Template_ion_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r20);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      ctx_r2.otp_login = !ctx_r2.otp_login;
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.forgotPwdModal = !ctx_r2.forgotPwdModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12, "Login with OTP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx_r2.errors ? "errors" : "")("formGroup", ctx_r2.forgotForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.isphone);
  }
}
function LoginPage_ng_container_2_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_2_div_24_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r22);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.activateNoteModal = !ctx_r2.activateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 45)(2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, " Deactivated! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Your account is deactivated! Do you want to activate it?");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "ion-col", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "ion-col", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_2_div_24_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r22);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.activateNoteModal = !ctx_r2.activateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "ion-col", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_2_div_24_Template_ion_col_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r22);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.activateConsumerStatus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
}
function LoginPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 66)(3, "ion-buttons", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "ion-content", 68)(8, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, LoginPage_ng_container_2_div_10_Template, 11, 3, "div", 7)(11, LoginPage_ng_container_2_div_11_Template, 8, 1, "div", 7)(12, LoginPage_ng_container_2_div_12_Template, 10, 1, "div", 7)(13, LoginPage_ng_container_2_div_13_Template, 13, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 56)(15, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16, "Forgot password ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_2_Template_span_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.gotoForgotPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18, "Click here");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "div", 69)(20, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21, "Don\u2019t have an account ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LoginPage_ng_container_2_Template_span_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.gotoSignup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23, "Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](24, LoginPage_ng_container_2_div_24_Template, 12, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](7, _c3, "url(" + ctx_r2.backgroundImage + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("src", ctx_r2.logo ? ctx_r2.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r2.otp_login && !ctx_r2.forgotPwdModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.otp_login && !ctx_r2.showForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.otp_login && ctx_r2.showForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.forgotPwdModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.activateNoteModal);
  }
}
class LoginPage {
  constructor(navCtrl, authenticationService, alertController, loader, util, formBuilder, theme, ex, commonStorage, commonService, apiFactory, alertCtrl, globalData, appData) {
    this.navCtrl = navCtrl;
    this.authenticationService = authenticationService;
    this.alertController = alertController;
    this.loader = loader;
    this.util = util;
    this.formBuilder = formBuilder;
    this.theme = theme;
    this.ex = ex;
    this.commonStorage = commonStorage;
    this.commonService = commonService;
    this.apiFactory = apiFactory;
    this.alertCtrl = alertCtrl;
    this.globalData = globalData;
    this.appData = appData;
    this.forgotFailed = false;
    this.isphone = false;
    this.errors = false;
    this.showForgotError = false;
    this.forgotErrorMessage = '';
    this.loginFailed = false;
    this.showLoginError = false;
    this.loginErrorMessage = '';
    this.enableOtp = false;
    this.otp_login = false;
    this.token = '';
    this.phoneNumCount = 0;
    this.showForm = false;
    this.getOTPForm = false;
    this.isEnableOtp = false;
    this.forgotPwdModal = false;
    this.activateNoteModal = false;
    this.passwordFieldType = 'password';
    this.showPass = false;
    this.isIos = false;
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    // this.commonService.gTrack('login', 'Login page is displayed');
    this.metaData = this.commonStorage.getItem("metaData");
    this.backgroundImage = this.commonStorage.getItem('metaData').backgroundImage;
    // this.logo = this.commonStorage.getItem("metaData").headerLogo;
    this.logo = this.commonStorage.localGet("metaData").mobileLoginPageLogo ? this.commonStorage.localGet("metaData").mobileLoginPageLogo : this.commonStorage.getItem("metaData").headerLogo;
    this.defaultCall();
    this.validations1(1);
    this.appData.newTheme = this.util.getNewTheme();
  }
  ngOnInit() {}
  gotoForgotPassword() {
    this.navCtrl.navigateForward('forgot-password');
  }
  gotoOtpLogin() {
    this.navCtrl.navigateForward('otp-login');
  }
  gotoSignUp() {
    this.navCtrl.navigateForward('sign-up');
  }
  goBack() {
    this.navCtrl.pop();
  }
  defaultCall() {
    this.loginFailed = false;
    this.errors = false;
    this.showLoginError = false;
    this.loginErrorMessage = null;
    // this.enableOtp = this.globalData.META_APP.isEnableOtp;
    this.validations();
    this.OtpFormValidation();
  }
  validations() {
    this.loginForm = this.formBuilder.group({
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _services_validator_service__WEBPACK_IMPORTED_MODULE_1__.ValidatorService.emailOrPhoneValidator])],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required])]
    });
  }
  accountDeRegisterAlert(title, msg) {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: title,
        message: msg,
        backdropDismiss: false,
        buttons: [{
          text: 'Ok',
          handler: () => {
            _this.authenticationService.logout();
            window.location.reload();
          }
        }]
      });
      yield alert.present();
    })();
  }
  login() {
    if (!this.util.checkConnection()) {
      return false; // Return explicitly
    }
    this.showLoginError = false;
    this.loginErrorMessage = null;
    if (this.isValid()) {
      this.loader.showLoadingDefault();
      this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(result => {
        this.globalData.IS_GST = false;
        this.loader.hideLoadingDefault();
        if (result.success === true) {
          this.util.showToast('Login Success', 'center');
          // Start autofill form data removal
          this.commonStorage.localRemove('origin');
          this.commonStorage.localRemove('destination');
          this.commonStorage.localRemove('passenger_personal_contact');
          this.commonStorage.localRemove('passenger_personal_data');
          // End
          this.apiFactory.getMetaAppData().subscribe(loginResponse => {
            if (!loginResponse.code) {
              let localData = loginResponse[0];
              this.commonService.setMetaApp(localData);
            }
          });
          this.navCtrl.navigateRoot('tabs/home');
        } else if (result.code === 491) {
          this.activateNoteModal = true;
          this.activateToken = result.body.auth_token;
        } else if (result.code === 422) {
          this.accountDeRegisterAlert("", result.body.message);
        } else {
          this.util.showAlert('', result.body.message);
          this.showError(result.body.message);
        }
      }, error => {
        this.loader.hideLoadingDefault();
        this.util.showAlert("Failed", "Login failed. Try again later.");
        this.ex.call('LoginPage', 'Login()', error);
      });
    }
    return;
  }
  isValid() {
    if (this.loginForm.valid) {
      return true;
    }
    if (this.loginForm.controls.password.valid) {
      this.util.showAlert('', 'Please enter valid email/phone');
    } else {
      this.util.showAlert('', 'Please enter login credentials');
    }
    // this.util.showToast('Please enter login credentials.');
    this.errors = true;
    let elem = document.querySelector('ion-input.ng-invalid input');
    if (elem) {
      elem.focus();
    }
    return false;
  }
  showError(msg) {
    this.errors = true;
    this.showLoginError = true;
    this.loginFailed = true;
    this.loginErrorMessage = msg;
  }
  onInputChange(ev) {
    this.showLoginError = false;
    this.loginErrorMessage = null;
  }
  gotoSignup() {
    this.navCtrl.navigateForward('sign-up');
  }
  goback() {
    this.navCtrl.pop();
  }
  OtpFormValidation() {
    this.otpForm = this.formBuilder.group({
      mobile_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.maxLength(this.phoneNumCount), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.minLength(this.phoneNumCount)])]
    });
    this.validateOtpForm = this.formBuilder.group({
      otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required])]
    });
  }
  generateOTP() {
    if (!this.otpForm.value.mobile_number) {
      this.util.showToast("Please enter valid mobile number");
      return;
    }
    if (this.otpForm.value.mobile_number.length < 10) {
      this.util.showToast("Enter mobile number");
      return;
    }
    this.loader.showLoadingDefault();
    this.apiFactory.loginwithOTP(this.otpForm.value.mobile_number).subscribe(result => {
      this.loader.hideLoadingDefault();
      try {
        this.globalData.IS_GST = false;
        if (result.code == 200) {
          //start autofill form data remove
          this.commonStorage.localRemove('origin');
          this.commonStorage.localRemove('destination');
          this.commonStorage.localRemove('passenger_personal_contact');
          this.commonStorage.localRemove('passenger_personal_data');
          //end
          this.commonStorage.setItem('otpKey', result.body.otp);
          this.commonStorage.setItem('api_key', result.body.key);
          this.util.showToast("Success", "Validate OTP by entering OTP");
          this.getOTPForm = false;
          if (this.commonStorage.getItem('otpKey')) {
            this.showForm = true;
          }
          // this.navCtrl.setRoot(HomePage);
        } else {
          // this.showError(result.body.message);
          this.util.showAlert('', result.error.message);
        }
      } catch (e) {}
    }, error => {
      this.loader.hideLoadingDefault();
      this.util.showAlert('Failed', 'Cannot get OTP , try again later');
    });
  }
  isOtpValid() {
    if (this.validateOtpForm.controls.otp.invalid) {
      this.showError("Please enter OTP");
      let elem = document.querySelector('.signup-name ion-input.ng-invalid input');
      if (elem) {
        elem.focus();
      }
    }
  }
  validateOTP() {
    this.loader.showLoadingDefault();
    this.apiFactory.validateOtpLogin(this.validateOtpForm.value.otp, this.commonStorage.getItem('api_key'), this.otpForm.value.mobile_number).subscribe(result => {
      this.loader.hideLoadingDefault();
      try {
        if (result.code == 200) {
          //start autofill form data remove
          this.commonStorage.localRemove('origin');
          this.commonStorage.localRemove('destination');
          this.commonStorage.localRemove('passenger_personal_contact');
          this.commonStorage.localRemove('passenger_personal_data');
          //end
          let body = result.body;
          let token = body.authentication_token;
          // localStorage.setItem('tokenNum',token);
          localStorage.setItem('currentUser', JSON.stringify({
            email: body.email,
            token: token,
            userFull: body,
            user: this.authenticationService.setUser(body)
          }));
          this.authenticationService.token = token;
          this.util.showToast("Login successful");
          this.navCtrl.navigateRoot('tabs/home');
        } else {
          if (result.error) this.util.showAlert('', result.error.message);else this.util.showAlert('', result.body.message);
        }
      } catch (e) {}
    }, error => {
      this.loader.hideLoadingDefault();
      //      this.util.showAlert(this.util.tranlateInstant('FAILED'), this.util.tranlateInstant('CANNOT_GET_OTP_TRY_LATER'))
    });
  }
  validations1(type) {
    if (type == 1) {
      this.forgotForm = this.formBuilder.group({
        email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])]
      });
      this.changePasswordForm = this.formBuilder.group({
        otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required])],
        newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required])],
        confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required])]
      });
    } else if (type == 2) {
      this.changePasswordForm = this.formBuilder.group({
        otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required])],
        newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required])],
        confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required])]
      });
    }
  }
  forgotPassword() {
    var _this2 = this;
    this.showForgotError = false;
    this.forgotErrorMessage = null;
    if (this.isValid1()) {
      if (this.data == '') {
        this.data = this.forgotForm.value;
      }
      this.loader.showLoadingDefault();
      this.authenticationService.forgotPassword(this.data).subscribe(/*#__PURE__*/function () {
        var _ref = (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
          _this2.loader.hideLoadingDefault();
          if (result.success === true) {
            const alert = yield _this2.alertCtrl.create({
              header: "SUCCESS",
              message: result.body,
              buttons: [{
                text: 'OK',
                handler: data => {
                  _this2.navCtrl.pop();
                }
              }]
            });
            yield alert.present();
          } else if (result.body && result.body.otp) {
            _this2.isphone = true;
            _this2.validations1(2);
            _this2.response = result.body;
          } else {
            // forgot failed
            if (result.body) _this2.showError1(result.body.message);else if (result.error) _this2.showError1(result.error.message);
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), err => {
        this.loader.hideLoadingDefault();
        if (!this.util.isConnected()) {
          this.util.showAlert("Error Loading", "Internet not connected please connect the internect and try after again");
        } else {
          this.util.showAlert("Error Loading", "Something went wrong please try after some time");
        }
        this.ex.call('ForgotPasswordPage', 'forgotPassword() --> this.authenticationService.forgotPassword(this.forgotForm.value)', err, '');
      });
    }
  }
  changePassword() {
    var _this3 = this;
    if (this.response != undefined) {
      let resetData = {
        otp: this.changePasswordForm.value.otp,
        key: this.response.key,
        newPassword: this.changePasswordForm.value.newPassword,
        confirmPassword: this.changePasswordForm.value.confirmPassword,
        mobileNumber: this.forgotForm.value.email
      };
      this.loader.showLoadingDefault();
      this.authenticationService.changePassword(resetData).subscribe(/*#__PURE__*/function () {
        var _ref2 = (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
          _this3.loader.hideLoadingDefault();
          if (result.success === 'success') {
            const alert = yield _this3.alertCtrl.create({
              header: "SUCCESS",
              message: result.body,
              buttons: [{
                text: 'OK',
                handler: data => {
                  _this3.navCtrl.pop();
                }
              }]
            });
            yield alert.present();
          } else {
            if (result.body) _this3.showError1(result.body.message);else if (result.error) _this3.showError1(result.error.message);
          }
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }(), err => {
        this.loader.hideLoadingDefault();
        if (!this.util.isConnected()) {
          this.util.showAlert("Error Loading", "Internet not connected please connect the internect and try after again");
        } else {
          this.util.showAlert("Error Loading", "Something went wrong please try after some time");
        }
        this.ex.call('ForgotPasswordPage', 'forgotPassword() --> this.authenticationService.forgotPassword(this.forgotForm.value)', err, '');
      });
    }
    //this.authenticationService.resetPassword(this.data)
  }
  isValid1() {
    var phoneno = /^\d{10}$/;
    if (this.forgotForm.valid) {
      this.data = {
        "email": "" + this.forgotForm.value.email + ""
      };
      return true;
    } else if (this.forgotForm.value.email.match(phoneno)) {
      this.data = {
        "mobile_number": "" + this.forgotForm.value.email + ""
      };
      return true;
    } else {
      this.data = '';
    }
    this.showError1('Please enter your registered email/phone number');
    this.errors = true;
    let elem = document.querySelector('ion-input.ng-invalid input');
    if (elem) {
      elem.focus();
    }
    return false;
  }
  showError1(msg) {
    this.errors = true;
    this.showForgotError = true;
    this.forgotFailed = true;
    this.forgotErrorMessage = msg;
  }
  onInputChange1(ev) {
    this.isphone = false;
    this.showForgotError = false;
    this.forgotErrorMessage = null;
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
  showPassword() {
    this.showPass = !this.showPass;
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}
_LoginPage = LoginPage;
_LoginPage.ɵfac = function LoginPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_authentication__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_17__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_4__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_5__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_6__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_exception__WEBPACK_IMPORTED_MODULE_7__.ExceptionProvider), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_8__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_9__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_10__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_17__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_global_data_service__WEBPACK_IMPORTED_MODULE_11__.GlobalDataService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_12__.AppData));
};
_LoginPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: _LoginPage,
  selectors: [["app-login"]],
  standalone: false,
  decls: 3,
  vars: 3,
  consts: [[4, "ngIf"], [3, "ngStyle"], ["title", "Customer Login", "subtitle", "", "showsubTxt", "false", "showsubtitle", "false"], [2, "height", "100px", "background-color", "#191966", "color", "#ffffff"], [1, "theme1", 2, "position", "absolute", "z-index", "8888", "top", "86px", "--background", "transparent", 3, "ngStyle"], [1, "themeone-center"], [1, "themeone-sub-hd-txt"], ["style", "width: 100%;", 4, "ngIf"], [1, "txt-ln2", 2, "margin-top", "15px"], [1, "themeone-frgt-pw"], [1, "themeone-click-btn", 3, "click"], ["class", "whole center", "style", "z-index: 9999;", 3, "click", 4, "ngIf"], [2, "width", "100%"], [3, "ngSubmit", "formGroup"], [1, "themeone-ion-item"], ["placeholder", "Email", "formControlName", "email"], ["slot", "start", "src", "./assets/icon/mail-fill.svg", 2, "height", "24px", "width", "24px", "position", "absolute", "z-index", "11", "left", "10px"], ["placeholder", "Password", "formControlName", "password", "id", "passwordInput", 3, "type"], ["slot", "start", "src", "./assets/icon/lock-fill.svg", 2, "height", "24px", "width", "24px", "position", "absolute", "z-index", "11", "left", "10px"], ["slot", "end", "src", "./assets/icon/eye-off-line.svg", 2, "height", "24px", "width", "24px", "position", "absolute", "z-index", "11", "right", "10px", 3, "click"], [2, "text-align", "end", "padding-bottom", "40px"], [1, "themeone-forget-pass", 3, "click"], ["mode", "md", "expand", "block", "type", "submit", 1, "themeone-login-btn"], ["mode", "md", "type", "button", "expand", "block", "fill", "outline", 1, "themeone-otp-btn", 3, "click"], [3, "formGroup"], ["label", "Mobile Number", "labelPlacement", "floating", "type", "number", "formControlName", "mobile_number", 1, "txt-lbl", 3, "keyup"], ["mode", "md", "expand", "block", 1, "login-btn", 3, "click"], ["mode", "md", "expand", "block", "fill", "outline", 1, "otp-btn", 3, "click"], [1, "otp_number"], ["label", "Enter OTP", "labelPlacement", "floating", "type", "number", "formControlName", "otp", 1, "txt-lbl"], [1, "forgot-form"], ["novalidate", "", 3, "ngSubmit", "ngClass", "formGroup"], [1, "forgot-inputs"], ["label", "E-mail/Phone", "labelPlacement", "floating", "type", "email", "formControlName", "email", 1, "txt-lbl", 3, "keyup"], ["padding", ""], ["mode", "md", "color", "red", "type", "submit", "block", "", "expand", "block", 1, "search-box"], ["class", "forgot-form", "style", "width: 90%;", 4, "ngIf"], [1, "forgot-form", 2, "width", "90%"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "forgot-email"], ["label", "Enter OTP", "labelPlacement", "floating", "type", "text", "formControlName", "otp", 1, "txt-lbl"], ["label", "New Password", "labelPlacement", "floating", "type", "password", "formControlName", "newPassword", 1, "txt-lbl"], ["label", "Confirm Password", "labelPlacement", "floating", "type", "password", "formControlName", "confirmPassword", 1, "txt-lbl"], ["mode", "md", "type", "submit", "color", "red", "expand", "block", 1, "search-box"], [1, "whole", "center", 2, "z-index", "9999", 3, "click"], [1, "legend-box"], [1, "txt-msg-hd"], [1, "txt-msg"], ["size", "4"], ["size", "4", 1, "brws-txt", 3, "click"], ["size", "4", 1, "dwn-txt", 3, "click"], ["mode", "md", 1, "h50"], ["slot", "start"], [1, "head", 2, "margin-left", "27%"], [1, "center"], ["alt", "", 1, "img-icn", 3, "src"], [1, "txt-ln2"], [1, "frgt-pw"], [1, "click-btn", 3, "click"], [1, "txt-ln3"], ["class", "whole center", 3, "click", 4, "ngIf"], ["label", "Email", "labelPlacement", "floating", "formControlName", "email", 1, "txt-lbl"], ["label", "Password", "labelPlacement", "floating", "type", "password", "formControlName", "password", 1, "txt-lbl"], ["mode", "md", "expand", "block", "type", "submit", 1, "login-btn"], ["mode", "md", "type", "button", "expand", "block", "fill", "outline", 1, "otp-btn", 3, "click"], [1, "whole", "center", 3, "click"], ["mode", "md"], [1, "head", 2, "margin-left", "35%"], [1, "back-ground", 3, "ngStyle"], [1, "seabirstxt-ln3"], [1, "seabirdclick-btn", 3, "click"], ["lines", "none", 2, "border-radius", "10px", "margin", "10px 0px", "font-size", "14px"], ["placeholder", "Email", "formControlName", "email", 1, "seabirdLoginInput", 2, "border", "1px solid #626262", "border-radius", "10px"], ["placeholder", "Password", "formControlName", "password", 1, "seabirdLoginInput", 2, "border", "1px solid #626262", "border-radius", "10px", 3, "type"], ["slot", "end", 2, "height", "24px", "width", "24px", "position", "absolute", "z-index", "11", "right", "10px", 3, "click", "name"], ["mode", "md", "expand", "block", "type", "submit", 1, "login-btn", 2, "--border-radius", "20px", "height", "45px"], ["mode", "md", "type", "button", "expand", "block", "fill", "outline", 1, "otp-btn", 2, "--border-radius", "20px", "height", "45px", 3, "click"]],
  template: function LoginPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, LoginPage_ng_container_0_Template, 18, 11, "ng-container", 0)(1, LoginPage_ng_container_1_Template, 25, 6, "ng-container", 0)(2, LoginPage_ng_container_2_Template, 25, 9, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonBackButton, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_13__.CommonHeaderComponent],
  styles: [".img-icn[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 80px;\n  display: block;\n  margin: 10%;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.center[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.txt-lbl[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: normal;\n  color: #3e3e52;\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  margin: 32px 0 12px;\n  text-transform: initial;\n  --background: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n}\n\n.otp-btn[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  text-transform: initial;\n  font-family: NotoSans;\n  color: var(--iconsAndButtonsColor);\n  --border-color: var(--iconsAndButtonsColor);\n  --border-width: 1px;\n  font-weight: bolder;\n  font-size: 13px;\n}\n\n.txt-ln2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: NotoSans;\n  width: 100%;\n}\n\n.frgt-pw[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n  color: #3e3e52;\n}\n\n.click-btn[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: bold;\n  line-height: 1.54;\n  text-align: center;\n  color: var(--iconsAndButtonsColor);\n  padding-left: 2%;\n}\n\n.seabirdclick-btn[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: bold;\n  line-height: 1.54;\n  text-align: center;\n  color: var(--iconsAndButtonsColor);\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: #ffffff;\n}\n\n.txt-ln3[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  width: 100%;\n  position: absolute;\n  bottom: 4%;\n  left: 3%;\n}\n\n.seabirstxt-ln3[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  width: 100%;\n  text-align: center;\n  margin-top: 10%;\n}\n\nion-input[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n}\n\n.sub-hd-txt[_ngcontent-%COMP%] {\n  margin: 8px 0 10%;\n  font-weight: bolder;\n  color: #3e3e52;\n}\n\n.whole[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.6);\n}\n\n.legend-box[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 280px;\n  height: auto;\n}\n\n.txt-msg[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n  text-align: justify;\n  letter-spacing: 0.25px;\n  color: rgba(0, 0, 0, 0.6);\n  margin-top: 10px;\n  width: 100%;\n}\n\n.dwn-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #ed3237;\n  margin-top: 28px;\n  width: 100%;\n  text-align: right;\n}\n\n.brws-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #4a4a4a;\n  margin-top: 28px;\n  width: 100%;\n  text-align: right;\n}\n\n.txt-msg-hd[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bolder;\n  font-family: NotoSans;\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.themeone-ion-item[_ngcontent-%COMP%] {\n  border: 1px solid #ADB4C0;\n  border-radius: 9px;\n  --border-radius: 9px;\n  --inner-border-width: 0;\n  margin: 10px 0px;\n  font-size: 14px;\n  color: #333333;\n}\n\n.themeone-ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --padding-start: 42px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  --border-radius: 10px ;\n}\n\n.themeone-ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]:-webkit-autofill {\n  --background: #fff !important; \n\n}\n\n.themeone-sub-hd-txt[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #191966;\n  margin: 5% 0 5%;\n  text-align: center;\n}\n\n.themeone-forget-pass[_ngcontent-%COMP%] {\n  color: #191966;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 24px;\n  text-align: left;\n}\n\n.themeone-login-btn[_ngcontent-%COMP%] {\n  --background: #F2C21A;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 26px;\n  text-align: center;\n  --border-radius: 010px;\n  height: 50px;\n  color: #191966;\n  margin-top: 25px;\n  --box-shadow: none;\n}\n\n.themeone-otp-btn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 26px;\n  letter-spacing: -0.01em;\n  text-align: center;\n  --border-radius: 010px;\n  height: 50px;\n  color: #191966;\n  \n\n  \n\n  margin-top: 15px;\n  --border-color: #F2C21A;\n}\n\n.themeone-click-btn[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  text-align: center;\n  color: #F2C21A;\n}\n\n.themeone-frgt-pw[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 18px;\n  text-align: center;\n  color: #1F1F1F;\n}\n\n.themeone-bg-page[_ngcontent-%COMP%] {\n  background: #191966;\n  height: -webkit-fill-available;\n}\n\n.themeone-center[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  padding: 16px;\n  height: -webkit-fill-available;\n}\n\n.seabirdLoginInput[_ngcontent-%COMP%] {\n  padding-left: 20px !important;\n}\n\n.back-ground[_ngcontent-%COMP%] {\n  --background: none;\n  background-size: cover;\n  background-position: center center;\n}\n\nion-back-button[_ngcontent-%COMP%] {\n  color: black;\n}"]
});

/***/ }),

/***/ 91307:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPageModule: () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 41122);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 49444);
/* harmony import */ var _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-header/common-header.component */ 49028);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
var _LoginPageModule;







class LoginPageModule {}
_LoginPageModule = LoginPageModule;
_LoginPageModule.ɵfac = function LoginPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoginPageModule)();
};
_LoginPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _LoginPageModule
});
_LoginPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_2__.CommonHeaderComponent]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LoginPageModule, {
    declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_2__.CommonHeaderComponent]
  });
})();

/***/ })

}]);