"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[415],{

/***/ 7654:
/*!*******************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordPageRoutingModule: () => (/* binding */ ForgotPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.page */ 70904);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _ForgotPasswordPageRoutingModule;




const routes = [{
  path: '',
  component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPage
}];
class ForgotPasswordPageRoutingModule {}
_ForgotPasswordPageRoutingModule = ForgotPasswordPageRoutingModule;
_ForgotPasswordPageRoutingModule.ɵfac = function ForgotPasswordPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ForgotPasswordPageRoutingModule)();
};
_ForgotPasswordPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _ForgotPasswordPageRoutingModule
});
_ForgotPasswordPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ForgotPasswordPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 30415:
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordPageModule: () => (/* binding */ ForgotPasswordPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password-routing.module */ 7654);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page */ 70904);
/* harmony import */ var _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-header/common-header.component */ 49028);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
var _ForgotPasswordPageModule;







class ForgotPasswordPageModule {}
_ForgotPasswordPageModule = ForgotPasswordPageModule;
_ForgotPasswordPageModule.ɵfac = function ForgotPasswordPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ForgotPasswordPageModule)();
};
_ForgotPasswordPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _ForgotPasswordPageModule
});
_ForgotPasswordPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPageRoutingModule, _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_2__.CommonHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ForgotPasswordPageModule, {
    declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPageRoutingModule, _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_2__.CommonHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 70904:
/*!*********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordPage: () => (/* binding */ ForgotPasswordPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication */ 82491);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/theme-service */ 99692);
/* harmony import */ var _services_exception__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/exception */ 91502);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common-header/common-header.component */ 49028);

var _ForgotPasswordPage;















const _c0 = () => ({
  "padding-top": "50px"
});
const _c1 = () => ({});
const _c2 = () => ({
  "top": "130px"
});
function ForgotPasswordPage_ng_container_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Forgot Password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ForgotPasswordPage_ng_container_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Don\u2019t worry! it occurs please enter the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "mobile number linked with your account.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ForgotPasswordPage_ng_container_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Create a new password");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ForgotPasswordPage_ng_container_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Your new password must be unique ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " from those previously used.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ForgotPasswordPage_ng_container_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function ForgotPasswordPage_ng_container_0_div_16_Template_form_ngSubmit_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.forgotPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 18)(4, "ion-item", 19)(5, "ion-input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function ForgotPasswordPage_ng_container_0_div_16_Template_ion_input_keyup_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 22)(9, "ion-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r1.errors ? "errors" : "")("formGroup", ctx_r1.forgotForm);
  }
}
function ForgotPasswordPage_ng_container_0_div_17_ion_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ForgotPasswordPage_ng_container_0_div_17_ion_icon_9_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.showPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ForgotPasswordPage_ng_container_0_div_17_ion_icon_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ForgotPasswordPage_ng_container_0_div_17_ion_icon_10_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.showPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ForgotPasswordPage_ng_container_0_div_17_ion_icon_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ForgotPasswordPage_ng_container_0_div_17_ion_icon_14_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.cfmshowPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ForgotPasswordPage_ng_container_0_div_17_ion_icon_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ForgotPasswordPage_ng_container_0_div_17_ion_icon_15_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.cfmshowPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ForgotPasswordPage_ng_container_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 15)(1, "div", 24)(2, "form", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function ForgotPasswordPage_ng_container_0_div_17_Template_form_ngSubmit_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.changePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ion-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "ion-input", 26)(5, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "ion-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "ion-input", 27)(8, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, ForgotPasswordPage_ng_container_0_div_17_ion_icon_9_Template, 1, 0, "ion-icon", 28)(10, ForgotPasswordPage_ng_container_0_div_17_ion_icon_10_Template, 1, 0, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "ion-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "ion-input", 29)(13, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](14, ForgotPasswordPage_ng_container_0_div_17_ion_icon_14_Template, 1, 0, "ion-icon", 28)(15, ForgotPasswordPage_ng_container_0_div_17_ion_icon_15_Template, 1, 0, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "div", 22)(17, "ion-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, " Reset Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r1.changePasswordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("type", ctx_r1.passwordFieldType);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.showpass);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.showpass);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("type", ctx_r1.cfmpasswordFieldType);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.cfmshowpass);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.cfmshowpass);
  }
}
function ForgotPasswordPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-header", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "app-common-header", 2)(3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "ion-content", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "ion-grid", 8)(9, "ion-row")(10, "ion-col", 9)(11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, ForgotPasswordPage_ng_container_0_div_12_Template, 2, 0, "div", 10)(13, ForgotPasswordPage_ng_container_0_div_13_Template, 4, 0, "div", 11)(14, ForgotPasswordPage_ng_container_0_div_14_Template, 2, 0, "div", 10)(15, ForgotPasswordPage_ng_container_0_div_15_Template, 4, 0, "div", 11)(16, ForgotPasswordPage_ng_container_0_div_16_Template, 11, 2, "div", 12)(17, ForgotPasswordPage_ng_container_0_div_17_Template, 19, 7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", ctx_r1.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](8, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](9, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", ctx_r1.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](10, _c2) : _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](11, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.isphone);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.isphone);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.isphone);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.isphone);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.isphone);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.isphone);
  }
}
function ForgotPasswordPage_ng_container_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 24)(1, "form", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function ForgotPasswordPage_ng_container_1_div_20_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.changePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 18)(3, "ion-item", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "ion-input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 18)(6, "ion-item", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "ion-input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 18)(9, "ion-item", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "ion-input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div")(12, "ion-button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, " Change Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r1.changePasswordForm);
  }
}
function ForgotPasswordPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 32)(3, "ion-buttons", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Forgot Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ion-content")(8, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 15)(11, "div", 16)(12, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function ForgotPasswordPage_ng_container_1_Template_form_ngSubmit_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.forgotPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 18)(14, "ion-item")(15, "ion-input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function ForgotPasswordPage_ng_container_1_Template_ion_input_keyup_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "div", 22)(18, "ion-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19, "SUBMIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, ForgotPasswordPage_ng_container_1_div_20_Template, 14, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("src", ctx_r1.logo ? ctx_r1.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r1.errors ? "errors" : "")("formGroup", ctx_r1.forgotForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.isphone);
  }
}
function ForgotPasswordPage_ng_container_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("src", ctx_r1.logo ? ctx_r1.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
  }
}
function ForgotPasswordPage_ng_container_2_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 16)(1, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function ForgotPasswordPage_ng_container_2_div_11_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.forgotPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 50)(3, "ion-item", 51)(4, "ion-input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function ForgotPasswordPage_ng_container_2_div_11_Template_ion_input_keyup_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 53)(7, "ion-button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r1.errors ? "errors" : "")("formGroup", ctx_r1.forgotForm);
  }
}
function ForgotPasswordPage_ng_container_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 55)(1, "form", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function ForgotPasswordPage_ng_container_2_div_12_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.changePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 18)(3, "ion-item", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "ion-input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 18)(6, "ion-item", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "ion-input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 18)(9, "ion-item", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "ion-input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 60)(12, "ion-button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, " Change Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r1.changePasswordForm);
  }
}
function ForgotPasswordPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 32)(3, "ion-buttons", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Forgot Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ion-content", 45)(8, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, ForgotPasswordPage_ng_container_2_div_9_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, ForgotPasswordPage_ng_container_2_div_11_Template, 9, 2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, ForgotPasswordPage_ng_container_2_div_12_Template, 14, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.isphone);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.isphone);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.isphone);
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
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform();
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
        email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])]
      });
      this.changePasswordForm = this.formBuilder.group({
        otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required])],
        newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required])],
        confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required])]
      });
    } else if (type == 2) {
      this.changePasswordForm = this.formBuilder.group({
        otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required])],
        newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required])],
        confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required])]
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
      // this.commonService.gTrack("forgetpassword");
      this.loader.showLoadingDefault();
      this.authenticationService.forgotPassword(this.data).subscribe(/*#__PURE__*/function () {
        var _ref = (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
          _this.loader.hideLoadingDefault();
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
            yield alert.present();
          } else if (result.body && result.body.otp) {
            _this.isphone = true;
            _this.showHideImg = false;
            _this.validations(2);
            _this.response = result.body;
          } else {
            // forgot failed
            if (result.body) _this.util.showAlert('', result.body.message);else if (result.error) _this.util.showAlert('', result.error.message);
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
        var _ref2 = (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
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
            yield alert.present();
          } else {
            if (result.body) _this2.showError(result.body.message);else if (result.error) _this2.showError(result.error.message);
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
  return new (__ngFactoryType__ || _ForgotPasswordPage)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_authentication__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_4__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_5__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_exception__WEBPACK_IMPORTED_MODULE_6__.ExceptionProvider), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_7__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_8__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_9__.AppData));
};
_ForgotPasswordPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: _ForgotPasswordPage,
  selectors: [["app-forgot-password"]],
  standalone: false,
  decls: 3,
  vars: 3,
  consts: [[4, "ngIf"], [3, "ngStyle"], ["title", "Customer Login", "subtitle", "", "showsubTxt", "false", "showsubtitle", "false"], [2, "height", "100px", "background-color", "#191966", "color", "#ffffff"], [1, "themeone-content-block", "theme1", 2, "position", "absolute", "z-index", "9999", "top", "86px", "--background", "transparent", 3, "ngStyle"], [2, "padding-bottom", "70px", "height", "100%"], [2, "background", "#fff", "border-top", "1px solid #0000", "height", "100%", "overflow", "scroll", "border-top-left-radius", "30px", "border-top-right-radius", "30px", "padding", "10px"], ["text-center", "", 1, "vertical-align-content"], [2, "padding-bottom", "50px"], [2, "text-align", "center"], ["class", "themeone-sub-hd-txt", 4, "ngIf"], ["class", "themeone-sub-small-txt", 4, "ngIf"], ["style", "width: 100%;", 4, "ngIf"], [1, "themeone-sub-hd-txt"], [1, "themeone-sub-small-txt"], [2, "width", "100%"], [1, "forgot-form"], ["novalidate", "", 3, "ngSubmit", "ngClass", "formGroup"], [1, "forgot-inputs"], [1, "themeone-ion-item"], ["type", "email", "placeholder", "Mobile Number", "formControlName", "email", 3, "keyup"], ["slot", "start", "src", "./assets/icon/lock-fill.svg", 2, "height", "24px", "width", "24px", "position", "absolute", "z-index", "11", "left", "10px"], ["padding", ""], ["mode", "md", "type", "submit", "expand", "block", 1, "themeone-login-btn"], [1, "forgot-form", 2, "width", "100%"], ["novalidate", "", 3, "ngSubmit", "formGroup"], ["type", "text", "placeholder", "OTP", "formControlName", "otp"], ["placeholder", "New password", "formControlName", "newPassword", 3, "type"], ["slot", "end", "style", "height: 24px;width: 24px;position: absolute;\n                        z-index: 11;right: 10px;", "src", "./assets/icon/eye-off-line.svg", 3, "click", 4, "ngIf"], ["placeholder", "Confirm new password", "formControlName", "confirmPassword", 3, "type"], ["mode", "md", "type", "submit", "expand", "block", 1, "themeone-login-btn", 2, "margin-top", "27px"], ["slot", "end", "src", "./assets/icon/eye-off-line.svg", 2, "height", "24px", "width", "24px", "position", "absolute", "z-index", "11", "right", "10px", 3, "click"], ["mode", "md", 1, "h50", 2, "color", "#191966"], ["slot", "start"], [1, "head", 2, "margin-left", "25%"], [1, "center"], ["alt", "", 1, "img-icn", 3, "src"], ["label", "E-mail/Phone", "labelPlacement", "floating", "type", "email", "formControlName", "email", 1, "txt-lbl", 3, "keyup"], ["mode", "md", "type", "submit", "block", "", "expand", "block", 1, "search-box", "forgetbtn"], ["class", "forgot-form", "style", "width: 100%;", 4, "ngIf"], [1, "forgot-email"], ["label", "Enter OTP", "labelPlacement", "floating", "type", "text", "formControlName", "otp", 1, "txt-lbl"], ["label", "New Password", "labelPlacement", "floating", "type", "password", "formControlName", "newPassword", 1, "txt-lbl"], ["label", "Confirm Password", "labelPlacement", "floating", "type", "password", "formControlName", "confirmPassword", 1, "txt-lbl"], ["mode", "md", "type", "submit", "color", "red", "expand", "block", 1, "search-box", "forgetbtn"], [2, "--background", "#F1F7FA"], [1, "center", 2, "padding", "16px", "position", "absolute", "top", "10%"], [2, "width", "100%", "position", "absolute", "top", "200%"], ["class", "forgot-form", 4, "ngIf"], ["class", "forgot-form", "style", "    top: 27%;\n      position: absolute;\n      width: 100%;padding: 16px;", 4, "ngIf"], [1, "forgot-inputs", 2, "padding", "16px"], ["lines", "none", 1, "seabirdLoginInput"], ["placeholder", "E-mail/Phone", "type", "email", "formControlName", "email", 3, "keyup"], ["padding", "", 2, "padding", "0px 16px"], ["mode", "md", "type", "submit", "block", "", "expand", "block", 1, "seabird-login-btn"], [1, "forgot-form", 2, "top", "27%", "position", "absolute", "width", "100%", "padding", "16px"], ["lines", "none", 1, "forgot-email", "seabirdLoginInput"], ["placeholder", "Enter OTP", "type", "text", "formControlName", "otp"], ["placeholder", "New Password", "type", "password", "formControlName", "newPassword"], ["placeholder", "Confirm Password", "type", "password", "formControlName", "confirmPassword"], ["padding", "", 2, "margin-top", "24px"], ["mode", "md", "type", "submit", "expand", "block", 1, "seabird-login-btn"]],
  template: function ForgotPasswordPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, ForgotPasswordPage_ng_container_0_Template, 18, 12, "ng-container", 0)(1, ForgotPasswordPage_ng_container_1_Template, 21, 4, "ng-container", 0)(2, ForgotPasswordPage_ng_container_2_Template, 13, 3, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "" || ctx.metaData.msiteFolder == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonBackButton, _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_10__.CommonHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName],
  styles: [".content-block[_ngcontent-%COMP%]   .img-icn[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 80px;\n  display: block;\n  margin: 10%;\n}\n.content-block[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.content-block[_ngcontent-%COMP%]   .txt-lbl[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: normal;\n  color: #3e3e52;\n}\n.content-block[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%], .content-block[_ngcontent-%COMP%]   .forgetbtn[_ngcontent-%COMP%] {\n  margin: 32px 0 12px;\n  text-transform: initial;\n  --background:var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n}\n.content-block[_ngcontent-%COMP%]   .otp-btn[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  text-transform: initial;\n  font-family: NotoSans;\n  color: var(--iconsAndButtonsColor);\n  --border-color: var(--iconsAndButtonsColor);\n  --border-width: 1px;\n  font-weight: bolder;\n  font-size: 13px;\n}\n.content-block[_ngcontent-%COMP%]   .txt-ln2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: NotoSans;\n}\n.content-block[_ngcontent-%COMP%]   .frgt-pw[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n  color: #3e3e52;\n}\n.content-block[_ngcontent-%COMP%]   .click-btn[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: bold;\n  line-height: 1.54;\n  text-align: center;\n  color: var(--primaryText);\n  --background: var(--iconsAndButtonsColor) ;\n}\n.content-block[_ngcontent-%COMP%]   .txt-ln3[_ngcontent-%COMP%] {\n  text-align: Left;\n  font-family: NotoSans;\n  margin: 90px 0 0;\n}\n.content-block[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n}\n.content-block[_ngcontent-%COMP%]   .sub-hd-txt[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  font-weight: bolder;\n  color: #3e3e52;\n}\n.content-block[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --background: #ffffff;\n}\n.content-block[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.themeone-content-block[_ngcontent-%COMP%]   .img-icn[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 80px;\n  display: block;\n  margin: 10%;\n}\n.themeone-content-block[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.themeone-content-block[_ngcontent-%COMP%]   .txt-lbl[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: normal;\n  color: #3e3e52;\n}\n.themeone-content-block[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%], .themeone-content-block[_ngcontent-%COMP%]   .forgetbtn[_ngcontent-%COMP%] {\n  margin: 32px 0 12px;\n  text-transform: initial;\n  --background:var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n}\n.themeone-content-block[_ngcontent-%COMP%]   .otp-btn[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  text-transform: initial;\n  font-family: NotoSans;\n  color: var(--iconsAndButtonsColor);\n  --border-color: var(--iconsAndButtonsColor);\n  --border-width: 1px;\n  font-weight: bolder;\n  font-size: 13px;\n}\n.themeone-content-block[_ngcontent-%COMP%]   .txt-ln2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: NotoSans;\n}\n.themeone-content-block[_ngcontent-%COMP%]   .frgt-pw[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n  color: #3e3e52;\n}\n.themeone-content-block[_ngcontent-%COMP%]   .click-btn[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: bold;\n  line-height: 1.54;\n  text-align: center;\n  color: var(--primaryText);\n  --background: var(--iconsAndButtonsColor) ;\n}\n.themeone-content-block[_ngcontent-%COMP%]   .txt-ln3[_ngcontent-%COMP%] {\n  text-align: Left;\n  font-family: NotoSans;\n  margin: 90px 0 0;\n}\n.themeone-content-block[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n}\n.themeone-content-block[_ngcontent-%COMP%]   .themeone-bg-page[_ngcontent-%COMP%] {\n  background: #191966;\n  height: -webkit-fill-available;\n}\n.themeone-content-block[_ngcontent-%COMP%]   .themeone-center[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  padding: 16px;\n  height: -webkit-fill-available;\n}\n.themeone-content-block[_ngcontent-%COMP%]   .themeone-sub-hd-txt[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #191966;\n  margin: 0% 0 2%;\n  text-align: center;\n}\n.themeone-content-block[_ngcontent-%COMP%]   .themeone-sub-small-txt[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #363636;\n  margin: 0px 0px 12px 0px;\n  text-align: center;\n}\n.themeone-content-block[_ngcontent-%COMP%]   .themeone-ion-item[_ngcontent-%COMP%] {\n  border: 1px solid #d2d2d2;\n  --inner-border-width: 0;\n  border-radius: 10px;\n  --border-radius: 10px;\n  --border-width: 0px;\n  margin: 10px 0px;\n  font-size: 14px;\n  color: #333333;\n}\n.themeone-content-block[_ngcontent-%COMP%]   .themeone-ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --padding-start: 42px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  --border-radius: 10px;\n}\n.themeone-content-block[_ngcontent-%COMP%]   .themeone-middle[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  padding-top: 0px;\n}\n.themeone-content-block[_ngcontent-%COMP%]   .themeone-login-btn[_ngcontent-%COMP%] {\n  --background: #F2C21A;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 26px;\n  letter-spacing: -0.01em;\n  text-align: center;\n  --border-radius: 010px;\n  height: 50px;\n  color: #191966;\n  margin-top: 15px;\n  --box-shadow: none;\n}\n.themeone-content-block[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --background: #ffffff;\n}\n.themeone-content-block[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.vertical-align-content[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-content: center !important;\n  align-items: center !important;\n  height: 100%;\n}\n\n.seabirdLoginInput[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #626262;\n  border-radius: 0px;\n  font-size: 14px;\n  margin-bottom: 10px;\n  --background:#F1F7FA;\n}\n\n.seabird-login-btn[_ngcontent-%COMP%] {\n  text-transform: initial;\n  --background:var(--iconsAndButtonsColor);\n  --color: var(--primaryText);\n  font-weight: bolder;\n  font-size: 13px;\n  height: 50px;\n  --border-radius: 25px;\n}\n\nion-back-button[_ngcontent-%COMP%] {\n  color: black;\n}"]
});

/***/ })

}]);