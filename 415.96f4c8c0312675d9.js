"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[415],{

/***/ 7654
/*!*******************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password-routing.module.ts ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordPageRoutingModule: () => (/* binding */ ForgotPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 49870);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page */ 70904);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _ForgotPasswordPageRoutingModule;




const routes = [{
  path: '',
  component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordPage
}];
class ForgotPasswordPageRoutingModule {}
_ForgotPasswordPageRoutingModule = ForgotPasswordPageRoutingModule;
_ForgotPasswordPageRoutingModule.ɵfac = function ForgotPasswordPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ForgotPasswordPageRoutingModule)();
};
_ForgotPasswordPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _ForgotPasswordPageRoutingModule
});
_ForgotPasswordPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ForgotPasswordPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 30415
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.module.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordPageModule: () => (/* binding */ ForgotPasswordPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password-routing.module */ 7654);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgot-password.page */ 70904);
/* harmony import */ var _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common-header/common-header.component */ 49028);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 17705);
var _ForgotPasswordPageModule;







class ForgotPasswordPageModule {}
_ForgotPasswordPageModule = ForgotPasswordPageModule;
_ForgotPasswordPageModule.ɵfac = function ForgotPasswordPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ForgotPasswordPageModule)();
};
_ForgotPasswordPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _ForgotPasswordPageModule
});
_ForgotPasswordPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_3__.ForgotPasswordPageRoutingModule, _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_5__.CommonHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ForgotPasswordPageModule, {
    declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_4__.ForgotPasswordPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_3__.ForgotPasswordPageRoutingModule, _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_5__.CommonHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule]
  });
})();

/***/ },

/***/ 70904
/*!*********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordPage: () => (/* binding */ ForgotPasswordPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/authentication */ 82491);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/theme-service */ 99692);
/* harmony import */ var _services_exception__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/exception */ 91502);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common-header/common-header.component */ 49028);

var _ForgotPasswordPage;















const _c0 = () => ({
  "top": "130px"
});
const _c1 = () => ({});
function ForgotPasswordPage_ng_container_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Forgot Password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r0.metaData.msiteFolder == "cbustheme" ? "themeone-sub-hd-txt" : "themeone-sub-hd-txt-2");
  }
}
function ForgotPasswordPage_ng_container_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Don\u2019t worry! it occurs please enter the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "mobile number linked with your account.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ForgotPasswordPage_ng_container_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Create a new password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r0.metaData.msiteFolder == "cbustheme" ? "themeone-sub-hd-txt" : "themeone-sub-hd-txt-2");
  }
}
function ForgotPasswordPage_ng_container_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Your new password must be unique ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " from those previously used.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ForgotPasswordPage_ng_container_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ForgotPasswordPage_ng_container_0_div_16_Template_form_ngSubmit_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.forgotPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 16)(4, "ion-item", 17)(5, "ion-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function ForgotPasswordPage_ng_container_0_div_16_Template_ion_input_keyup_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 20)(9, "ion-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r0.errors ? "errors" : "")("formGroup", ctx_r0.forgotForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r0.metaData.msiteFolder == "cbustheme" ? "themeone-login-btn" : "themeone-login-btn-2");
  }
}
function ForgotPasswordPage_ng_container_0_div_17_ion_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForgotPasswordPage_ng_container_0_div_17_ion_icon_9_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.showPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ForgotPasswordPage_ng_container_0_div_17_ion_icon_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForgotPasswordPage_ng_container_0_div_17_ion_icon_10_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.showPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ForgotPasswordPage_ng_container_0_div_17_ion_icon_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForgotPasswordPage_ng_container_0_div_17_ion_icon_14_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.cfmshowPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ForgotPasswordPage_ng_container_0_div_17_ion_icon_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForgotPasswordPage_ng_container_0_div_17_ion_icon_15_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.cfmshowPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ForgotPasswordPage_ng_container_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13)(1, "div", 22)(2, "form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ForgotPasswordPage_ng_container_0_div_17_Template_form_ngSubmit_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.changePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-input", 24)(5, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ion-input", 26)(8, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ForgotPasswordPage_ng_container_0_div_17_ion_icon_9_Template, 1, 0, "ion-icon", 27)(10, ForgotPasswordPage_ng_container_0_div_17_ion_icon_10_Template, 1, 0, "ion-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "ion-input", 28)(13, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ForgotPasswordPage_ng_container_0_div_17_ion_icon_14_Template, 1, 0, "ion-icon", 27)(15, ForgotPasswordPage_ng_container_0_div_17_ion_icon_15_Template, 1, 0, "ion-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 20)(17, "ion-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Reset Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.changePasswordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx_r0.passwordFieldType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.showpass);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.showpass);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx_r0.cfmpasswordFieldType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.cfmshowpass);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.cfmshowpass);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r0.metaData.msiteFolder == "cbustheme" ? "themeone-login-btn" : "themeone-login-btn-2");
  }
}
function ForgotPasswordPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-common-header", 1)(3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-content", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "ion-grid", 7)(9, "ion-row")(10, "ion-col", 8)(11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ForgotPasswordPage_ng_container_0_div_12_Template, 2, 1, "div", 9)(13, ForgotPasswordPage_ng_container_0_div_13_Template, 4, 0, "div", 10)(14, ForgotPasswordPage_ng_container_0_div_14_Template, 2, 1, "div", 9)(15, ForgotPasswordPage_ng_container_0_div_15_Template, 4, 0, "div", 10)(16, ForgotPasswordPage_ng_container_0_div_16_Template, 11, 3, "div", 11)(17, ForgotPasswordPage_ng_container_0_div_17_Template, 19, 8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r0.metaData.msiteFolder == "cbustheme" ? "cbus_bg_curved" : "theme1_bg_curved");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx_r0.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isphone);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isphone);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isphone);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isphone);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isphone);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isphone);
  }
}
function ForgotPasswordPage_ng_container_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22)(1, "form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ForgotPasswordPage_ng_container_1_div_20_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.changePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 16)(3, "ion-item", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 16)(6, "ion-item", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ion-input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 16)(9, "ion-item", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "ion-input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div")(12, "ion-button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Change Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.changePasswordForm);
  }
}
function ForgotPasswordPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 31)(3, "ion-buttons", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Forgot Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-content")(8, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 36)(11, "div", 14)(12, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ForgotPasswordPage_ng_container_1_Template_form_ngSubmit_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.forgotPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 16)(14, "ion-item", 37)(15, "ion-input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function ForgotPasswordPage_ng_container_1_Template_ion_input_keyup_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 20)(18, "ion-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, ForgotPasswordPage_ng_container_1_div_20_Template, 14, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r0.logo ? ctx_r0.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r0.errors ? "errors" : "")("formGroup", ctx_r0.forgotForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isphone);
  }
}
function ForgotPasswordPage_ng_container_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r0.logo ? ctx_r0.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function ForgotPasswordPage_ng_container_2_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14)(1, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ForgotPasswordPage_ng_container_2_div_11_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.forgotPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 55)(3, "ion-item", 56)(4, "ion-input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function ForgotPasswordPage_ng_container_2_div_11_Template_ion_input_keyup_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 58)(7, "ion-button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r0.errors ? "errors" : "")("formGroup", ctx_r0.forgotForm);
  }
}
function ForgotPasswordPage_ng_container_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 60)(1, "form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ForgotPasswordPage_ng_container_2_div_12_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.changePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 16)(3, "ion-item", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 16)(6, "ion-item", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ion-input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 16)(9, "ion-item", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "ion-input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 65)(12, "ion-button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Change Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.changePasswordForm);
  }
}
function ForgotPasswordPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 46)(3, "ion-buttons", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-back-button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Forgot Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-content", 49)(8, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ForgotPasswordPage_ng_container_2_div_9_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ForgotPasswordPage_ng_container_2_div_11_Template, 9, 2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ForgotPasswordPage_ng_container_2_div_12_Template, 14, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isphone);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isphone);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isphone);
  }
}
function ForgotPasswordPage_ng_container_3_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.forgotErrorMessage);
  }
}
function ForgotPasswordPage_ng_container_3_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ForgotPasswordPage_ng_container_3_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Processing...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ForgotPasswordPage_ng_container_3_ion_spinner_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-spinner", 86);
  }
}
function ForgotPasswordPage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-header", 67)(2, "ion-toolbar", 68)(3, "ion-buttons", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-back-button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-content", 73)(8, "div", 74)(9, "h2", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Forgot Password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Don't worry! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Enter your email ID linked with this account.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 77)(16, "form", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ForgotPasswordPage_ng_container_3_Template_form_ngSubmit_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.forgotPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ion-item", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "ion-icon", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "ion-input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function ForgotPasswordPage_ng_container_3_Template_ion_input_keyup_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, ForgotPasswordPage_ng_container_3_div_20_Template, 2, 1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "ion-button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ForgotPasswordPage_ng_container_3_span_22_Template, 2, 0, "span", 0)(23, ForgotPasswordPage_ng_container_3_span_23_Template, 2, 0, "span", 0)(24, ForgotPasswordPage_ng_container_3_ion_spinner_24_Template, 1, 0, "ion-spinner", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r0.logo ? ctx_r0.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.forgotForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("syamoli-input-error", ctx_r0.showForgotError)("syamoli-input-focus", ctx_r0.forgotForm.controls.email.dirty && !ctx_r0.showForgotError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-invalid", ctx_r0.forgotForm.controls.email.invalid ? "true" : "false");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.showForgotError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-loading", ctx_r0.isSubmitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r0.isSubmitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isSubmitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isSubmitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isSubmitting);
  }
}
function ForgotPasswordPage_ng_container_4_img_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 96);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r0.logo, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function ForgotPasswordPage_ng_container_4_form_10_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.forgotErrorMessage);
  }
}
function ForgotPasswordPage_ng_container_4_form_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ForgotPasswordPage_ng_container_4_form_10_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.forgotPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ForgotPasswordPage_ng_container_4_form_10_p_1_Template, 2, 1, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 99)(3, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Email or phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionInput", function ForgotPasswordPage_ng_container_4_form_10_Template_ion_input_ionInput_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r0.errors ? "errors" : "")("formGroup", ctx_r0.forgotForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.showForgotError);
  }
}
function ForgotPasswordPage_ng_container_4_form_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ForgotPasswordPage_ng_container_4_form_11_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.changePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Create a new password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 99)(4, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "ion-input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 99)(8, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "New password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "ion-input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 99)(12, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Confirm password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "ion-input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.changePasswordForm);
  }
}
function ForgotPasswordPage_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-header", 87)(2, "ion-toolbar", 88)(3, "ion-buttons", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-back-button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h1", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Forgot Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-content", 91)(8, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ForgotPasswordPage_ng_container_4_img_9_Template, 1, 1, "img", 93)(10, ForgotPasswordPage_ng_container_4_form_10_Template, 8, 3, "form", 94)(11, ForgotPasswordPage_ng_container_4_form_11_Template, 17, 1, "form", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isphone && ctx_r0.logo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isphone);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isphone);
  }
}
class ForgotPasswordPage {
  constructor(navCtrl, authenticationService, loader, util, formBuilder, alertCtrl, theme, ex, commonService, commonStorage, appData) {
    this.navCtrl = navCtrl;
    this.authenticationService = authenticationService;
    this.loader = loader;
    this.util = util;
    this.formBuilder = formBuilder;
    this.alertCtrl = alertCtrl;
    this.theme = theme;
    this.ex = ex;
    this.commonService = commonService;
    this.commonStorage = commonStorage;
    this.appData = appData;
    this.isphone = false;
    this.showHideImg = true;
    this.passwordFieldType = 'password';
    this.cfmpasswordFieldType = 'password';
    this.cfmshowpass = false;
    this.showpass = false;
    this.isIos = false;
    this.isSubmitting = false; // loading state for continue/submit button
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    this.defaultCall();
    this.appData.newTheme = this.util.getNewTheme();
    this.metaData = this.commonStorage.getItem("metaData");
    // this.logo = this.commonStorage.getItem("metaData").headerLogo;
    this.logo = this.commonStorage.localGet("metaData").mobileLoginPageLogo ? this.commonStorage.localGet("metaData").mobileLoginPageLogo : this.commonStorage.localGet("metaData").headerLogo;
  }
  ngOnInit() {}
  defaultCall() {
    this.forgotFailed = false;
    this.errors = false;
    this.showForgotError = false;
    this.forgotErrorMessage = null;
    this.validations(1);
  }
  /**
  * create validation rules for forgot details
  */
  validations(type) {
    if (type == 1) {
      this.forgotForm = this.formBuilder.group({
        email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])]
      });
      this.changePasswordForm = this.formBuilder.group({
        otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])],
        newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])],
        confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])]
      });
    } else if (type == 2) {
      this.changePasswordForm = this.formBuilder.group({
        otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])],
        newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])],
        confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])]
      });
    }
  }
  goBack() {
    this.navCtrl.pop();
  }
  forgotPassword() {
    var _this = this;
    this.showForgotError = false;
    this.forgotErrorMessage = null;
    if (this.isValid()) {
      if (this.data == '') {
        this.data = this.forgotForm.value;
      }
      this.isSubmitting = true;
      this.loader.showLoadingDefault();
      this.authenticationService.forgotPassword(this.data).subscribe(/*#__PURE__*/function () {
        var _ref = (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
          var _this$metaData, _this$metaData2, _this$metaData3, _this$metaData4, _this$metaData5;
          _this.loader.hideLoadingDefault();
          _this.isSubmitting = false;
          // ONLY FOR CBUS/NETWORKTHEME: Handle code "200" or success "success" with body.key
          if (((_this$metaData = _this.metaData) === null || _this$metaData === void 0 ? void 0 : _this$metaData.msiteFolder) === 'cbustheme' || ((_this$metaData2 = _this.metaData) === null || _this$metaData2 === void 0 ? void 0 : _this$metaData2.msiteFolder) === 'networktheme' || ((_this$metaData3 = _this.metaData) === null || _this$metaData3 === void 0 ? void 0 : _this$metaData3.msiteFolder) === 'seabirdTheme' || ((_this$metaData4 = _this.metaData) === null || _this$metaData4 === void 0 ? void 0 : _this$metaData4.msiteFolder) === '' || ((_this$metaData5 = _this.metaData) === null || _this$metaData5 === void 0 ? void 0 : _this$metaData5.msiteFolder) === null) {
            const ok = result && (result.success === 'success' || result.code === '200' || result.code === 200);
            const body = result && result.body ? result.body : {};
            if (ok && (body.key || body.otp)) {
              // Show OTP form on same page
              _this.isphone = true;
              _this.showHideImg = false;
              _this.validations(2);
              _this.response = body;
              return;
            } else if (ok) {
              // Generic success message
              const msg = body.message || result.message || 'Please check your email/mobile for next steps';
              const alert = yield _this.alertCtrl.create({
                header: "SUCCESS",
                message: msg,
                buttons: [{
                  text: 'OK',
                  handler: () => {
                    _this.navCtrl.pop();
                  }
                }]
              });
              yield alert.present();
              return;
            } else {
              // Failure
              if (body && body.message) {
                _this.util.showAlert('', body.message);
              } else if (result && result.error && result.error.message) {
                _this.util.showAlert('', result.error.message);
              } else {
                _this.util.showAlert('', 'Something went wrong. Please try again.');
              }
              return;
            }
          }
          // ALL OTHER THEMES: Keep existing logic unchanged
          if (result.success === true) {
            const alert = yield _this.alertCtrl.create({
              header: "SUCCESS",
              message: result.body.message,
              buttons: [{
                text: 'OK',
                handler: data => {
                  _this.navCtrl.pop();
                }
              }]
            });
            const alertElement = document.querySelector('.alert-message');
            if (alertElement && alert.message) {
              alertElement.innerHTML = alert.message.toString();
            }
            yield alert.present();
          } else if (result.body && result.body.otp) {
            var _this$metaData6;
            // For Shyamoli theme, navigate to reset-password page
            if (((_this$metaData6 = _this.metaData) === null || _this$metaData6 === void 0 ? void 0 : _this$metaData6.msiteFolder) === 'shyamolitheme') {
              console.log('Redirecting to reset-password for Shyamoli theme');
              // Store the response data for the reset password page
              _this.commonStorage.setItem('forgotPasswordResponse', result.body);
              _this.commonStorage.setItem('forgotPasswordEmail', _this.data);
              _this.navCtrl.navigateForward('/reset-password');
            } else {
              // For other themes, show form on same page
              _this.isphone = true;
              _this.showHideImg = false;
              _this.validations(2);
              _this.response = result.body;
            }
          } else {
            var _this$metaData7;
            // For Shyamoli theme, redirect even if no OTP in response (for testing)
            if (((_this$metaData7 = _this.metaData) === null || _this$metaData7 === void 0 ? void 0 : _this$metaData7.msiteFolder) === 'shyamolitheme') {
              console.log('Redirecting to reset-password for Shyamoli theme (fallback)');
              // Create mock response for testing
              const mockResponse = {
                otp: true,
                key: 'test-key'
              };
              _this.commonStorage.setItem('forgotPasswordResponse', mockResponse);
              _this.commonStorage.setItem('forgotPasswordEmail', _this.data);
              _this.navCtrl.navigateForward('/reset-password');
            } else {
              // forgot failed - for other themes
              if (result.body) _this.util.showAlert('', result.body.message);else if (result.error) _this.util.showAlert('', result.error.message);
            }
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), err => {
        this.loader.hideLoadingDefault();
        this.isSubmitting = false;
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
    var _this2 = this;
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
        var _ref2 = (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
          _this2.loader.hideLoadingDefault();
          if (result.success === 'success') {
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
            const alertElement = document.querySelector('.alert-message');
            if (alertElement && alert.message) {
              alertElement.innerHTML = alert.message.toString();
            }
            yield alert.present();
          } else {
            var _this2$metaData;
            if (((_this2$metaData = _this2.metaData) === null || _this2$metaData === void 0 ? void 0 : _this2$metaData.msiteFolder) === 'shyamolitheme') {
              if (result.body) _this2.showError(result.body.message);else if (result.message) _this2.showError(result.message);else if (result.error) _this2.showError(result.error.message);
            } else {
              if (result.body) _this2.util.showAlert('', result.body.message);else if (result.message) _this2.util.showAlert('', result.message);else if (result.error) _this2.util.showAlert('', result.error.message);
            }
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
  isValid() {
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
    this.showError('Please enter your registered email/phone number');
    this.errors = true;
    let elem = document.querySelector('ion-input.ng-invalid input');
    if (elem) {
      elem.focus();
    }
    return false;
  }
  showError(msg) {
    this.errors = true;
    this.showForgotError = true;
    this.forgotFailed = true;
    this.forgotErrorMessage = msg;
  }
  onInputChange(ev) {
    this.isphone = false;
    // this.showHideImg = true
    this.showForgotError = false;
    this.forgotErrorMessage = null;
  }
  ionViewDidEnter() {
    // this.commonService.gTrack("ForgotPasswordPage");
  }
  showPassword() {
    this.showpass = !this.showpass;
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
  cfmshowPassword() {
    this.cfmpasswordFieldType = this.cfmpasswordFieldType === 'password' ? 'text' : 'password';
    this.cfmshowpass = !this.cfmshowpass;
  }
}
_ForgotPasswordPage = ForgotPasswordPage;
_ForgotPasswordPage.ɵfac = function ForgotPasswordPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ForgotPasswordPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_authentication__WEBPACK_IMPORTED_MODULE_6__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_7__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_8__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_9__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_exception__WEBPACK_IMPORTED_MODULE_10__.ExceptionProvider), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_11__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_12__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_13__.AppData));
};
_ForgotPasswordPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _ForgotPasswordPage,
  selectors: [["app-forgot-password"]],
  standalone: false,
  decls: 5,
  vars: 5,
  consts: [[4, "ngIf"], ["title", "Customer Login", "subtitle", "", "showsubTxt", "false", "showsubtitle", "false"], [3, "ngClass"], [1, "themeone-content-block", "theme1", 2, "box-shadow", "none", "--background", "var(--primary)", 3, "ngStyle"], [2, "height", "100%"], [2, "background", "#fff", "border-top", "1px solid #0000", "height", "100%", "overflow", "scroll", "border-top-left-radius", "30px", "border-top-right-radius", "30px", "padding", "10px"], ["text-center", "", 1, "vertical-align-content"], [2, "padding-bottom", "50px"], [2, "text-align", "center"], [3, "ngClass", 4, "ngIf"], ["class", "themeone-sub-small-txt", 4, "ngIf"], ["style", "width: 100%;", 4, "ngIf"], [1, "themeone-sub-small-txt"], [2, "width", "100%"], [1, "forgot-form"], ["novalidate", "", 3, "ngSubmit", "ngClass", "formGroup"], [1, "forgot-inputs"], [1, "themeone-ion-item"], ["type", "email", "placeholder", "Mobile Number", "formControlName", "email", 3, "keyup"], ["slot", "start", "src", "./assets/icon/lock-fill.svg", 1, "forgot-pass-icon-cbus"], ["padding", ""], ["mode", "md", "type", "submit", "expand", "block", 2, "--background", "var(--iconsAndButtonsColor)", 3, "ngClass"], [1, "forgot-form", 2, "width", "100%"], ["novalidate", "", 3, "ngSubmit", "formGroup"], ["type", "text", "placeholder", "OTP", "formControlName", "otp", 2, "--padding-start", "30px"], ["slot", "start", "src", "./assets/icon/lock-fill.svg", 2, "height", "24px", "width", "24px", "position", "absolute", "z-index", "11", "left", "10px"], ["placeholder", "New password", "formControlName", "newPassword", 2, "--padding-start", "30px", 3, "type"], ["slot", "end", "style", "height: 24px;width: 24px;position: absolute;\n                        z-index: 11;right: 10px;", "src", "./assets/icon/eye-off-line.svg", 3, "click", 4, "ngIf"], ["placeholder", "Confirm new password", "formControlName", "confirmPassword", 2, "--padding-start", "30px", 3, "type"], ["mode", "md", "type", "submit", "expand", "block", 2, "margin-top", "27px", "--background", "var(--iconsAndButtonsColor)", 3, "ngClass"], ["slot", "end", "src", "./assets/icon/eye-off-line.svg", 2, "height", "24px", "width", "24px", "position", "absolute", "z-index", "11", "right", "10px", 3, "click"], ["mode", "md", 1, "h50", 2, "--background", "var(--primaryText)"], ["slot", "start"], [1, "head", 2, "margin-left", "28%", "color", "#fff"], [1, "center"], ["alt", "", 1, "img-icn", 2, "margin-left", "20px", 3, "src"], [2, "width", "100%", "margin-top", "20%"], [1, "forgot-password-default-item"], ["label", "E-mail/Phone", "labelPlacement", "floating", "type", "email", "formControlName", "email", 1, "txt-lbl", 3, "keyup"], ["mode", "md", "type", "submit", "expand", "block", 1, "forget-btn-default"], ["class", "forgot-form", "style", "width: 100%;", 4, "ngIf"], [1, "forgot-email", "forgot-password-default-item"], ["label", "Enter OTP", "labelPlacement", "floating", "type", "text", "formControlName", "otp", 1, "txt-lbl"], ["label", "New Password", "labelPlacement", "floating", "type", "password", "formControlName", "newPassword", 1, "txt-lbl"], ["label", "Confirm Password", "labelPlacement", "floating", "type", "password", "formControlName", "confirmPassword", 1, "txt-lbl"], ["mode", "md", "type", "submit", "color", "red", "expand", "block", 1, "forget-btn-default"], ["mode", "md", 1, "h50", 2, "color", "#191966"], [2, "color", "var(--viewBgColor)"], [1, "head", 2, "margin-left", "25%"], [2, "--background", "#F1F7FA"], [1, "center", 2, "padding", "16px", "position", "relative", "top", "10%"], [2, "width", "100%", "position", "absolute", "top", "200%"], ["class", "forgot-form", 4, "ngIf"], ["class", "forgot-form", "style", "    top: 27%;\n      position: absolute;\n      width: 100%;padding: 16px;", 4, "ngIf"], ["alt", "", 1, "img-icn", 3, "src"], [1, "forgot-inputs", 2, "padding", "16px"], ["lines", "none", 1, "seabirdLoginInput"], ["placeholder", "E-mail/Phone", "type", "email", "formControlName", "email", 3, "keyup"], ["padding", "", 2, "padding", "0px 16px"], ["mode", "md", "type", "submit", "block", "", "expand", "block", 1, "seabird-login-btn"], [1, "forgot-form", 2, "top", "27%", "position", "absolute", "width", "100%", "padding", "16px"], ["lines", "none", 1, "forgot-email", "seabirdLoginInput"], ["placeholder", "Enter OTP", "type", "text", "formControlName", "otp"], ["placeholder", "New Password", "type", "password", "formControlName", "newPassword"], ["placeholder", "Confirm Password", "type", "password", "formControlName", "confirmPassword"], ["padding", "", 2, "margin-top", "24px"], ["mode", "md", "type", "submit", "expand", "block", 1, "seabird-login-btn"], [1, "syamolitheme", 2, "box-shadow", "none"], ["mode", "md", 2, "--background", "#FFFFFF !important", "--color", "#333333", "display", "flex", "align-items", "center", "justify-content", "center", "position", "relative", "--border-width", "0 0 0"], ["slot", "start", 2, "position", "absolute", "left", "0", "z-index", "10"], [2, "color", "var(--syamoli-text-primary)"], [2, "display", "flex", "align-items", "center", "justify-content", "center", "height", "100%"], ["alt", "Logo", 1, "shyamoli-logo", 3, "src"], [1, "syamolitheme"], [1, "syamoli-center1", 2, "margin-top", "15%"], [2, "font-family", "'Glory-Bold', sans-serif", "font-size", "24px", "font-weight", "bold", "color", "var(--syamoli-text-primary)", "margin-bottom", "10px", "text-align", "center"], [1, "syamoli-text-secondary", 2, "text-align", "center", "margin-bottom", "12px"], [2, "margin", "15px 15px"], ["novalidate", "", "aria-label", "Forgot password form", 3, "ngSubmit", "formGroup"], ["lines", "none", 1, "syamoli-input", 2, "border", "1px solid #ADB4C0"], ["src", "./assets/icon/shyamoli-mail.svg", 2, "color", "#888888"], ["placeholder", "Enter Email", "type", "email", "formControlName", "email", "aria-label", "Email address", 3, "keyup"], ["class", "syamoli-error-text", "role", "alert", 4, "ngIf"], ["mode", "md", "type", "submit", "expand", "block", 1, "syamoli-btn-primary", 2, "margin-top", "24px", 3, "disabled"], ["name", "crescent", 4, "ngIf"], ["role", "alert", 1, "syamoli-error-text"], ["name", "crescent"], [1, "sb-page-header"], [1, "sb-toolbar", "sb-auth-toolbar"], ["text", "", "icon", "./assets/seabird-new/back-arrow-navy.svg", "defaultHref", "/login", 1, "sb-auth-back"], [1, "sb-auth-title"], [1, "sb-auth"], [1, "sb-auth__body"], ["class", "sb-auth__logo", "alt", "", 3, "src", 4, "ngIf"], ["class", "sb-pax-card sb-auth__card", "novalidate", "", 3, "ngClass", "formGroup", "ngSubmit", 4, "ngIf"], ["class", "sb-pax-card sb-auth__card", "novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["alt", "", 1, "sb-auth__logo", 3, "src"], ["novalidate", "", 1, "sb-pax-card", "sb-auth__card", 3, "ngSubmit", "ngClass", "formGroup"], ["class", "sb-auth__error", "role", "alert", 4, "ngIf"], [1, "sb-pfield"], [1, "sb-pfield__label"], ["placeholder", "Enter email or phone", "type", "email", "formControlName", "email", "aria-label", "Email or phone", 1, "sb-pfield__input", 3, "ionInput"], ["type", "submit", 1, "sb-btn-solid", "sb-auth__btn"], ["role", "alert", 1, "sb-auth__error"], ["novalidate", "", 1, "sb-pax-card", "sb-auth__card", 3, "ngSubmit", "formGroup"], [1, "sb-pax-card__title"], ["placeholder", "Enter OTP", "type", "text", "formControlName", "otp", "aria-label", "OTP", 1, "sb-pfield__input"], ["placeholder", "Enter new password", "type", "password", "formControlName", "newPassword", "aria-label", "New password", 1, "sb-pfield__input"], ["placeholder", "Re-enter new password", "type", "password", "formControlName", "confirmPassword", "aria-label", "Confirm password", 1, "sb-pfield__input"]],
  template: function ForgotPasswordPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ForgotPasswordPage_ng_container_0_Template, 18, 10, "ng-container", 0)(1, ForgotPasswordPage_ng_container_1_Template, 21, 4, "ng-container", 0)(2, ForgotPasswordPage_ng_container_2_Template, 13, 3, "ng-container", 0)(3, ForgotPasswordPage_ng_container_3_Template, 25, 14, "ng-container", 0)(4, ForgotPasswordPage_ng_container_4_Template, 12, 3, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme" || ctx.metaData.msiteFolder == "networktheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "" || ctx.metaData.msiteFolder == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "shyamolitheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder === "seabirdThemeNew");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButton, _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_15__.CommonHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
  styles: [".content-block[_ngcontent-%COMP%]   .img-icn[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 80px;\n  display: block;\n  margin: 10%;\n}\n.content-block[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.content-block[_ngcontent-%COMP%]   .txt-lbl[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: normal;\n  color: #3e3e52;\n}\n.content-block[_ngcontent-%COMP%]   .forget-btn[_ngcontent-%COMP%] {\n  margin: 32px 0 12px;\n  text-transform: initial;\n  --background: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n}\n.content-block[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%], .content-block[_ngcontent-%COMP%]   .forgetbtn[_ngcontent-%COMP%] {\n  margin: 32px 0 12px;\n  text-transform: initial;\n  --background:var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n}\n.content-block[_ngcontent-%COMP%]   .otp-btn[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  text-transform: initial;\n  font-family: NotoSans;\n  color: var(--iconsAndButtonsColor);\n  --border-color: var(--iconsAndButtonsColor);\n  --border-width: 1px;\n  font-weight: bolder;\n  font-size: 13px;\n}\n.content-block[_ngcontent-%COMP%]   .txt-ln2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: NotoSans;\n}\n.content-block[_ngcontent-%COMP%]   .frgt-pw[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n  color: #3e3e52;\n}\n.content-block[_ngcontent-%COMP%]   .click-btn[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: bold;\n  line-height: 1.54;\n  text-align: center;\n  color: var(--primaryText);\n  --background: var(--iconsAndButtonsColor) ;\n}\n.content-block[_ngcontent-%COMP%]   .txt-ln3[_ngcontent-%COMP%] {\n  text-align: Left;\n  font-family: NotoSans;\n  margin: 90px 0 0;\n}\n.content-block[_ngcontent-%COMP%]   .txt-ln3[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n}\n.content-block[_ngcontent-%COMP%]   .txt-ln3[_ngcontent-%COMP%]   .sub-hd-txt[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  font-weight: bolder;\n  color: #3e3e52;\n}\n.content-block[_ngcontent-%COMP%]   .txt-ln3[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --background: #ffffff;\n}\n.content-block[_ngcontent-%COMP%]   .txt-ln3[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n.content-block[_ngcontent-%COMP%]   .vertical-align-content[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-content: center !important;\n  align-items: center !important;\n  height: 60%;\n}\n.content-block[_ngcontent-%COMP%]   .seabirdLoginInput[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #626262;\n  border-radius: 0px;\n  font-size: 14px;\n  margin-bottom: 10px;\n  --background:#F1F7FA;\n}\n.content-block[_ngcontent-%COMP%]   .seabird-login-btn[_ngcontent-%COMP%] {\n  text-transform: initial;\n  --background:var(--iconsAndButtonsColor);\n  --color: var(--primaryText);\n  font-weight: bolder;\n  font-size: 13px;\n  height: 50px;\n  --border-radius: 25px;\n}\n.content-block[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%] {\n  color: black;\n}\n.content-block[_ngcontent-%COMP%]   .theme1_bg_curved[_ngcontent-%COMP%] {\n  height: 100px;\n  background-color: var(--primary);\n  color: #ffffff;\n}\n.content-block[_ngcontent-%COMP%]   .cbus_bg_curved[_ngcontent-%COMP%] {\n  height: 100px;\n  background-color: #191966;\n  color: #ffffff;\n}\n.content-block[_ngcontent-%COMP%]   .forget-btn-default[_ngcontent-%COMP%] {\n  margin: 10px 16px 12px !important;\n  text-transform: initial !important;\n  --background: var(--iconsAndButtonsColor) !important;\n  color: var(--primaryText) !important;\n  font-family: NotoSans !important;\n  font-weight: bolder !important;\n  font-size: 13px !important;\n}\n.content-block[_ngcontent-%COMP%]   .syamolitheme[_ngcontent-%COMP%] {\n  --syamoli-primary: var(--iconsAndButtonsColor);\n  --syamoli-primary-light: #fff4f0;\n  --syamoli-text-primary: #1F2937;\n  --syamoli-text-secondary: #111111;\n  --syamoli-border: #E5E7EB;\n  --syamoli-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  --syamoli-error: #DC2626;\n  --syamoli-success: #059669;\n  --syamoli-focus-ring: 0 0 0 3px rgba(255,145,0,0.35);\n  background: var(--syamoli-background);\n}\n.content-block[_ngcontent-%COMP%]   .syamolitheme[_ngcontent-%COMP%]   .syamoli-center[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  margin: 0 auto;\n  padding: 40px 16px 24px 16px;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n.content-block[_ngcontent-%COMP%]   .syamolitheme[_ngcontent-%COMP%]   .syamoli-input[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid #ADB4C0;\n  margin: 4px 0;\n  width: 100%;\n  min-width: 380px;\n  --inner-border-width: 0;\n  position: relative;\n  display: flex;\n  align-items: center;\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.content-block[_ngcontent-%COMP%]   .syamolitheme[_ngcontent-%COMP%]   .syamoli-input[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --padding-start: 20px;\n  --padding-end: 45px;\n  --padding-top: 14px;\n  --padding-bottom: 14px;\n  font-size: 15px;\n  --placeholder-color: var(--syamoli-text-secondary);\n  --color: var(--syamoli-text-primary);\n  flex: 1;\n}\n.content-block[_ngcontent-%COMP%]   .syamolitheme[_ngcontent-%COMP%]   .syamoli-input[_ngcontent-%COMP%]   ion-icon[slot=start][_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 10;\n  font-size: 18px;\n  color: #888888;\n  margin: 0;\n  width: 18px;\n  height: 18px;\n}\n.content-block[_ngcontent-%COMP%]   .syamolitheme[_ngcontent-%COMP%]   .syamoli-input[_ngcontent-%COMP%]   ion-icon[slot=end][_ngcontent-%COMP%] {\n  position: absolute;\n  right: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 10;\n  font-size: 18px;\n  color: #888888;\n  margin: 0;\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n}\n.content-block[_ngcontent-%COMP%]   .syamolitheme[_ngcontent-%COMP%]   .syamoli-input.syamoli-input-error[_ngcontent-%COMP%] {\n  border-color: var(--syamoli-error) !important;\n}\n.content-block[_ngcontent-%COMP%]   .syamolitheme[_ngcontent-%COMP%]   .syamoli-input.syamoli-input-focus[_ngcontent-%COMP%] {\n  border-color: #C1C7CD;\n  box-shadow: none;\n}\n.content-block[_ngcontent-%COMP%]   .syamolitheme[_ngcontent-%COMP%]   .syamoli-btn-primary[_ngcontent-%COMP%] {\n  --background: var(--iconsAndButtonsColor);\n  --color: #FFFFFF;\n  --border-radius: 8px;\n  height: 44px;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: none;\n  margin: 0;\n  --box-shadow: none;\n  position: relative;\n}\n.content-block[_ngcontent-%COMP%]   .syamolitheme[_ngcontent-%COMP%]   .syamoli-btn-primary.is-loading[_ngcontent-%COMP%] {\n  opacity: 0.85;\n}\n.content-block[_ngcontent-%COMP%]   .syamolitheme[_ngcontent-%COMP%]   .syamoli-btn-primary[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 18px;\n  height: 18px;\n  color: #fff;\n}\n.content-block[_ngcontent-%COMP%]   .syamolitheme[_ngcontent-%COMP%]   .syamoli-btn-secondary[_ngcontent-%COMP%] {\n  --background: #000000;\n  --color: #FFFFFF;\n  --border-color: #000000;\n  --border-width: 1px;\n  --border-radius: 6px;\n  height: 44px;\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: none;\n  margin: 0;\n}\n.content-block[_ngcontent-%COMP%]   .syamolitheme[_ngcontent-%COMP%]   .syamoli-link[_ngcontent-%COMP%] {\n  color: var(--syamoli-primary);\n  font-weight: 500;\n  text-decoration: none;\n  cursor: pointer;\n}\n.content-block[_ngcontent-%COMP%]   .syamolitheme[_ngcontent-%COMP%]   .syamoli-link[_ngcontent-%COMP%]:hover {\n  color: var(--syamoli-primary-dark);\n}\n.content-block[_ngcontent-%COMP%]   .syamolitheme[_ngcontent-%COMP%]   .syamoli-text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.content-block[_ngcontent-%COMP%]   .syamolitheme[_ngcontent-%COMP%]   .syamoli-text-secondary[_ngcontent-%COMP%] {\n  color: var(--syamoli-text-secondary);\n  font-size: 14px;\n}\n.content-block[_ngcontent-%COMP%]   .syamolitheme[_ngcontent-%COMP%]   .syamoli-mt-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.content-block[_ngcontent-%COMP%]   .syamolitheme[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  color: var(--syamoli-text-primary);\n  font-size: 18px;\n  font-weight: 600;\n  text-align: center;\n  flex: 1;\n}\n.content-block[_ngcontent-%COMP%]   .syamolitheme[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: #FFFFFF;\n  --color: var(--syamoli-text-primary);\n  border-bottom: none !important;\n  border: none !important;\n  box-shadow: none !important;\n  --border-width: 0 !important;\n}\n.content-block[_ngcontent-%COMP%]   .syamolitheme[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%] {\n  --color: var(--syamoli-text-primary);\n}\n.content-block[_ngcontent-%COMP%]   .syamolitheme[_ngcontent-%COMP%]   .syamoli-error-text[_ngcontent-%COMP%] {\n  color: var(--syamoli-error);\n  font-size: 13px;\n  margin-top: 4px;\n  text-align: left;\n  width: 100%;\n}\n.content-block[_ngcontent-%COMP%]   .syamolitheme[_ngcontent-%COMP%]   .syamoli-form-block[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #FFFFFF;\n  border: 1px solid #EFEFF0;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  border-radius: 12px;\n  padding: 24px 20px 28px 20px;\n  box-sizing: border-box;\n}\n.content-block[_ngcontent-%COMP%]   .syamolitheme[_ngcontent-%COMP%]   .syamoli-helper[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #555;\n  margin-top: -4px;\n  margin-bottom: 12px;\n  text-align: left;\n  width: 100%;\n}\n.content-block[_ngcontent-%COMP%]   .syamolitheme[_ngcontent-%COMP%]   .syamoli-link-inline[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  font-size: 13px;\n  color: var(--syamoli-primary);\n  font-weight: 500;\n  cursor: pointer;\n  text-decoration: underline;\n}\n@media (max-width: 420px) {\n  .content-block[_ngcontent-%COMP%]   .syamolitheme[_ngcontent-%COMP%]   .syamoli-center[_ngcontent-%COMP%] {\n    padding: 32px 12px 12px 12px;\n  }\n  .content-block[_ngcontent-%COMP%]   .syamolitheme[_ngcontent-%COMP%]   .syamoli-input[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n}\n\n.forget-btn-default[_ngcontent-%COMP%] {\n  --background: var(--iconsAndButtonsColor);\n  padding: 0px 12px 0px 12px;\n}\n\n.themeone-content-block[_ngcontent-%COMP%]   .themeone-login-btn[_ngcontent-%COMP%] {\n  --background: var(--iconsAndButtonsColor);\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 26px;\n  letter-spacing: -0.01em;\n  text-align: center;\n  --border-radius: 14px;\n  height: 50px;\n  color: #191966;\n  margin-top: 15px;\n  --box-shadow: none;\n  margin-left: 0px;\n  margin-right: 0px;\n}\n.themeone-content-block[_ngcontent-%COMP%]   .themeone-ion-item[_ngcontent-%COMP%] {\n  border: 1px solid #d2d2d2;\n  --inner-border-width: 0;\n  border-radius: 14px;\n  --border-radius: 10px;\n  --border-width: 0px;\n  margin: 10px 0px;\n  font-size: 14px;\n  color: #333333;\n}\n.themeone-content-block[_ngcontent-%COMP%]   .vertical-align-content[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-content: center !important;\n  align-items: center !important;\n  height: 100%;\n}\n.themeone-content-block[_ngcontent-%COMP%]   .themeone-sub-hd-txt[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n  color: #191966;\n  margin: 0% 0 2%;\n  text-align: center;\n}\n.themeone-content-block[_ngcontent-%COMP%]   .themeone-sub-small-txt[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #363636;\n  margin: 0px 0px 12px 0px;\n  text-align: center;\n}\n.themeone-content-block[_ngcontent-%COMP%]   .img-icn[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 80px;\n  display: block;\n  margin: 10%;\n}\n.themeone-content-block[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.themeone-content-block[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n}\n.themeone-content-block[_ngcontent-%COMP%]   .forgot-pass-icon-cbus[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\n.forgot-password-default-item[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  padding: 8px 16px 8px 16px;\n}"]
});

/***/ }

}]);