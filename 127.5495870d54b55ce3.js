"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[127],{

/***/ 22966
/*!*****************************************************************!*\
  !*** ./src/app/reset-password/reset-password-routing.module.ts ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResetPasswordPageRoutingModule: () => (/* binding */ ResetPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 49870);
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password.page */ 48219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _ResetPasswordPageRoutingModule;




const routes = [{
  path: '',
  component: _reset_password_page__WEBPACK_IMPORTED_MODULE_1__.ResetPasswordPage
}];
class ResetPasswordPageRoutingModule {}
_ResetPasswordPageRoutingModule = ResetPasswordPageRoutingModule;
_ResetPasswordPageRoutingModule.ɵfac = function ResetPasswordPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ResetPasswordPageRoutingModule)();
};
_ResetPasswordPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _ResetPasswordPageRoutingModule
});
_ResetPasswordPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ResetPasswordPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 60127
/*!*********************************************************!*\
  !*** ./src/app/reset-password/reset-password.module.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResetPasswordPageModule: () => (/* binding */ ResetPasswordPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-password-routing.module */ 22966);
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reset-password.page */ 48219);
/* harmony import */ var _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../white-common-header/white-common-header.component */ 16688);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 17705);
var _ResetPasswordPageModule;







class ResetPasswordPageModule {}
_ResetPasswordPageModule = ResetPasswordPageModule;
_ResetPasswordPageModule.ɵfac = function ResetPasswordPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ResetPasswordPageModule)();
};
_ResetPasswordPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _ResetPasswordPageModule
});
_ResetPasswordPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_3__.ResetPasswordPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_5__.WhiteCommonHeaderComponent]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ResetPasswordPageModule, {
    declarations: [_reset_password_page__WEBPACK_IMPORTED_MODULE_4__.ResetPasswordPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_3__.ResetPasswordPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_5__.WhiteCommonHeaderComponent]
  });
})();

/***/ },

/***/ 48219
/*!*******************************************************!*\
  !*** ./src/app/reset-password/reset-password.page.ts ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResetPasswordPage: () => (/* binding */ ResetPasswordPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/authentication */ 82491);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/theme-service */ 99692);
/* harmony import */ var _services_exception__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/exception */ 91502);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../white-common-header/white-common-header.component */ 16688);

var _ResetPasswordPage;
















const _c0 = () => ({
  "padding-top": "0px"
});
const _c1 = () => ({});
function ResetPasswordPage_ng_container_0_div_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.changeErrorMessage);
  }
}
function ResetPasswordPage_ng_container_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ResetPasswordPage_ng_container_0_div_4_span_1_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.showChangeError);
  }
}
function ResetPasswordPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-header", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-white-common-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-content", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ResetPasswordPage_ng_container_0_div_4_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5)(6, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ResetPasswordPage_ng_container_0_Template_form_ngSubmit_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.changePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-item", 7)(8, "ion-input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function ResetPasswordPage_ng_container_0_Template_ion_input_keypress_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onInputChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ResetPasswordPage_ng_container_0_Template_div_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onPasswordToggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ion-item", 11)(12, "ion-input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function ResetPasswordPage_ng_container_0_Template_ion_input_keypress_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onInputChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ResetPasswordPage_ng_container_0_Template_div_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onPasswordToggle1());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ion-item", 13)(16, "ion-input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function ResetPasswordPage_ng_container_0_Template_ion_input_keypress_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onInputChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ResetPasswordPage_ng_container_0_Template_div_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onPasswordToggle2());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 15)(20, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Change Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx_r1.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.showChangeError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.errors ? "errors" : "")("formGroup", ctx_r1.changeForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx_r1.showPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", ctx_r1.showPassword ? "eye-off" : "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx_r1.showPassword1 ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", ctx_r1.showPassword1 ? "eye-off" : "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx_r1.showPassword2 ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", ctx_r1.showPassword2 ? "eye-off" : "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "themeone-login-btn" : "themeone-login-btn-2");
  }
}
function ResetPasswordPage_ng_container_1_div_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.changeErrorMessage);
  }
}
function ResetPasswordPage_ng_container_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ResetPasswordPage_ng_container_1_div_8_span_1_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.showChangeError);
  }
}
function ResetPasswordPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-header", 1)(2, "ion-toolbar", 20)(3, "ion-buttons", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Change password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-content", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ResetPasswordPage_ng_container_1_div_8_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 23)(10, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ResetPasswordPage_ng_container_1_Template_form_ngSubmit_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.changePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ion-item", 7)(12, "ion-input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function ResetPasswordPage_ng_container_1_Template_ion_input_keypress_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onInputChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ResetPasswordPage_ng_container_1_Template_ion_icon_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.togglePassword("old"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ion-item", 11)(15, "ion-input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function ResetPasswordPage_ng_container_1_Template_ion_input_keypress_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onInputChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ResetPasswordPage_ng_container_1_Template_ion_icon_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.togglePassword("new"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ion-item", 13)(18, "ion-input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function ResetPasswordPage_ng_container_1_Template_ion_input_keypress_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onInputChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ResetPasswordPage_ng_container_1_Template_ion_icon_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.togglePassword("confirm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 15)(21, "ion-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Change password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx_r1.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.showChangeError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.errors ? "errors" : "")("formGroup", ctx_r1.changeForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx_r1.showOldPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", ctx_r1.showOldPassword ? "eye-off-outline" : "eye-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx_r1.showPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", ctx_r1.showPassword ? "eye-off-outline" : "eye-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx_r1.showConfirmPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", ctx_r1.showConfirmPassword ? "eye-off-outline" : "eye-outline");
  }
}
function ResetPasswordPage_ng_container_2_div_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.changeErrorMessage);
  }
}
function ResetPasswordPage_ng_container_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ResetPasswordPage_ng_container_2_div_8_span_1_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.showChangeError);
  }
}
function ResetPasswordPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-header", 26)(2, "ion-toolbar", 20)(3, "ion-buttons", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-content", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ResetPasswordPage_ng_container_2_div_8_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 31)(10, "h2", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "form", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ResetPasswordPage_ng_container_2_Template_form_ngSubmit_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.changePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-item", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "ion-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ion-input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function ResetPasswordPage_ng_container_2_Template_ion_input_keypress_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onInputChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ResetPasswordPage_ng_container_2_Template_ion_icon_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.togglePassword("old"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "New Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "ion-item", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "ion-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "ion-input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function ResetPasswordPage_ng_container_2_Template_ion_input_keypress_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onInputChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "ion-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ResetPasswordPage_ng_container_2_Template_ion_icon_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.togglePassword("new"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "ion-item", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "ion-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "ion-input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function ResetPasswordPage_ng_container_2_Template_ion_input_keypress_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onInputChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "ion-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ResetPasswordPage_ng_container_2_Template_ion_icon_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.togglePassword("confirm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div")(28, "ion-button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Change password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx_r1.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r1.logo ? ctx_r1.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.showChangeError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.errors ? "errors" : "")("formGroup", ctx_r1.changeForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx_r1.showOldPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", ctx_r1.showOldPassword ? "eye-off-outline" : "eye-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx_r1.showPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", ctx_r1.showPassword ? "eye-off-outline" : "eye-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx_r1.showConfirmPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", ctx_r1.showConfirmPassword ? "eye-off-outline" : "eye-outline");
  }
}
function ResetPasswordPage_ng_container_3_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.changeErrorMessage);
  }
}
function ResetPasswordPage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-header", 42)(2, "ion-toolbar", 43)(3, "ion-buttons", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-back-button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h1", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-content", 46)(8, "div", 47)(9, "form", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ResetPasswordPage_ng_container_3_Template_form_ngSubmit_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.changePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ResetPasswordPage_ng_container_3_p_10_Template, 2, 1, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 50)(12, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Old password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 52)(15, "ion-input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function ResetPasswordPage_ng_container_3_Template_ion_input_keypress_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onInputChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ResetPasswordPage_ng_container_3_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.togglePassword("old"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "ion-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 56)(19, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 52)(22, "ion-input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function ResetPasswordPage_ng_container_3_Template_ion_input_keypress_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onInputChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ResetPasswordPage_ng_container_3_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.togglePassword("new"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "ion-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 58)(26, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Confirm password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 52)(29, "ion-input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function ResetPasswordPage_ng_container_3_Template_ion_input_keypress_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onInputChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ResetPasswordPage_ng_container_3_Template_button_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.togglePassword("confirm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "ion-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx_r1.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](14, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.errors ? "errors" : "")("formGroup", ctx_r1.changeForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.showChangeError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx_r1.showOldPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", ctx_r1.showOldPassword ? "Hide password" : "Show password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", ctx_r1.showOldPassword ? "eye-off-outline" : "eye-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx_r1.showPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", ctx_r1.showPassword ? "Hide password" : "Show password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", ctx_r1.showPassword ? "eye-off-outline" : "eye-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx_r1.showConfirmPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", ctx_r1.showConfirmPassword ? "Hide password" : "Show password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", ctx_r1.showConfirmPassword ? "eye-off-outline" : "eye-outline");
  }
}
class ResetPasswordPage {
  constructor(navCtrl, modalCtrl, apiFactory, authenticate, util, formBuilder, commonStorage, loader, theme, ex, commonService, appData) {
    this.navCtrl = navCtrl;
    this.modalCtrl = modalCtrl;
    this.apiFactory = apiFactory;
    this.authenticate = authenticate;
    this.util = util;
    this.formBuilder = formBuilder;
    this.commonStorage = commonStorage;
    this.loader = loader;
    this.theme = theme;
    this.ex = ex;
    this.commonService = commonService;
    this.appData = appData;
    this.showPassword = false;
    this.showPassword1 = false;
    this.showPassword2 = false;
    this.isIos = false;
    this.showOldPassword = false;
    this.showConfirmPassword = false;
    // For forgot password flow
    this.isForgotPasswordFlow = false;
    this.otpValid = false; // track OTP validity for tick icon
    this.otpBoxes = ['', '', '', '', '', ''];
    this.activeOtpIndex = 0;
    this.shyamoliPasswordTick = false; // green tick when password length >=6 (shyamoli theme forgot flow)
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    this.changeFailed = false;
    this.errors = false;
    this.showChangeError = false;
    this.changeErrorMessage = null;
    this.validations();
    this.appData.newTheme = this.util.getNewTheme();
    this.logo = this.commonStorage.localGet("metaData").mobileLoginPageLogo ? this.commonStorage.localGet("metaData").mobileLoginPageLogo : this.commonStorage.getItem("metaData").headerLogo;
  }
  ngOnInit() {
    var _this$metaData;
    this.metaData = this.commonStorage.getItem('metaData');
    // Check if coming from forgot password flow
    this.forgotPasswordResponse = this.commonStorage.getItem('forgotPasswordResponse');
    this.forgotPasswordEmail = this.commonStorage.getItem('forgotPasswordEmail');
    if (this.forgotPasswordResponse && ((_this$metaData = this.metaData) === null || _this$metaData === void 0 ? void 0 : _this$metaData.msiteFolder) === 'shyamolitheme') {
      var _this$changeForm;
      this.isForgotPasswordFlow = true;
      this.setupForgotPasswordForm();
      // subscribe for tick icon on password length >= 6 (visual feedback earlier than minLength 8 backend requirement)
      const pwdCtrl = (_this$changeForm = this.changeForm) === null || _this$changeForm === void 0 ? void 0 : _this$changeForm.get('password');
      if (pwdCtrl) {
        pwdCtrl.valueChanges.subscribe(val => {
          this.shyamoliPasswordTick = !!val && val.length >= 6;
        });
      }
    }
  }
  ionViewDidLoad() {
    // this.commonService.gTrack('changePassword','“Change Password” option is selected from menu')
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }
  changePassword() {
    var _this = this;
    this.showChangeError = false;
    this.changeErrorMessage = null;
    if (this.isForgotPasswordFlow) {
      var _this$changeForm$get;
      // Handle forgot password reset
      // update tick state in case value pasted just before submit
      const pwdVal = (_this$changeForm$get = this.changeForm.get('password')) === null || _this$changeForm$get === void 0 ? void 0 : _this$changeForm$get.value;
      this.shyamoliPasswordTick = !!pwdVal && pwdVal.length >= 6;
      if (this.isValidForgotPassword()) {
        let resetData = {
          otp: this.changeForm.value.otp,
          key: this.forgotPasswordResponse.key,
          newPassword: this.changeForm.value.password,
          confirmPassword: this.changeForm.value.password_confirmation,
          mobileNumber: this.forgotPasswordEmail.email || this.forgotPasswordEmail.mobile_number
        };
        this.loader.showLoadingDefault();
        this.authenticate.changePassword(resetData).subscribe(/*#__PURE__*/function () {
          var _ref = (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
            _this.loader.hideLoadingDefault();
            if (result.success === 'success') {
              // Clear stored data
              _this.commonStorage.setItem('forgotPasswordResponse', null);
              _this.commonStorage.setItem('forgotPasswordEmail', null);
              _this.util.showToast(result.body || 'Password changed successfully');
              _this.navCtrl.navigateRoot('/login');
            } else {
              if (result.body) _this.showError(result.body.message);else if (result.error) _this.showError(result.error.message);
            }
          });
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }(), err => {
          this.loader.hideLoadingDefault();
          if (!this.util.isConnected()) {
            this.util.showAlert("Error Loading", "Internet not connected please connect the internet and try again");
          } else {
            this.util.showAlert("Error Loading", "Something went wrong please try after some time");
          }
        });
      }
    } else {
      // Handle regular password change
      if (this.isOldPasswordValid()) {
        if (this.isValid()) {
          this.loader.showLoadingDefault();
          this.apiFactory.changePassword(this.changeForm.value).subscribe(result => {
            this.loader.hideLoadingDefault();
            if (result) {
              if (result.success) {
                this.util.showToast(result.body.message);
                this.authenticate.updateUserAuth(result);
                this.navCtrl.pop();
              } else {
                this.showError(result.body.message);
              }
            } else {
              this.showError("Change password failed");
            }
          }, err => {
            this.loader.hideLoadingDefault();
            if (!this.util.isConnected()) {
              this.util.showAlert("Error Loading", "Internet not connected please connect the internet and try again");
            } else {
              this.util.showAlert("Error Loading", "Something went wrong please try after some time");
            }
            this.ex.call('ChangePasswordPage', 'changePassword() --> this.apiFactory.changePassword(this.changeForm.value)', err, '');
          });
        }
      }
    }
  }
  validations() {
    this.changeForm = this.formBuilder.group({
      old_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(8)])],
      password_confirmation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])]
    });
  }
  setupForgotPasswordForm() {
    this.changeForm = this.formBuilder.group({
      otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])],
      // hidden aggregate value
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(8)])],
      password_confirmation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])]
    });
    // subscribe to otp changes to update validity (assuming 6-digit numeric)
    this.changeForm.get('otp').valueChanges.subscribe(val => {
      const pattern = /^\d{6}$/; // adjust if server expects different
      this.otpValid = pattern.test(val);
    });
  }
  onOtpInput(ev, index) {
    const el = ev.target;
    // keep only digits and take the FIRST digit to avoid confusion
    let val = el.value.replace(/\D/g, '');
    if (val.length > 1) {
      val = val.charAt(0);
    }
    this.otpBoxes[index] = val;
    el.value = val;
    // move to next box if a digit was entered
    if (val && index < this.otpBoxes.length - 1) {
      const nextEl = document.getElementById('otp-box-' + (index + 1));
      if (nextEl) nextEl.focus();
      this.activeOtpIndex = index + 1;
    }
    this.updateOtpAggregateAndValidity();
  }
  onOtpPaste(ev, index) {
    var _ev$clipboardData;
    // Allow only first digit of paste; ignore rest to enforce one-by-one entry
    ev.preventDefault();
    const data = ((_ev$clipboardData = ev.clipboardData) === null || _ev$clipboardData === void 0 ? void 0 : _ev$clipboardData.getData('text')) || '';
    const digit = (data.match(/\d/) || [''])[0];
    if (!digit) return;
    this.otpBoxes[index] = digit;
    const inputEl = document.getElementById('otp-box-' + index);
    if (inputEl) inputEl.value = digit;
    if (index < this.otpBoxes.length - 1) {
      const nextEl = document.getElementById('otp-box-' + (index + 1));
      if (nextEl) nextEl.focus();
      this.activeOtpIndex = index + 1;
    }
    this.updateOtpAggregateAndValidity();
  }
  onOtpKeyDown(ev, index) {
    const key = ev.key;
    if (key === 'Backspace') {
      ev.preventDefault();
      // clear current; if already empty move back
      const inputEl = document.getElementById('otp-box-' + index);
      if (this.otpBoxes[index]) {
        this.otpBoxes[index] = '';
        if (inputEl) inputEl.value = '';
      } else if (index > 0) {
        const prevEl = document.getElementById('otp-box-' + (index - 1));
        if (prevEl) prevEl.focus();
        this.activeOtpIndex = index - 1;
        this.otpBoxes[index - 1] = '';
        const prevInput = document.getElementById('otp-box-' + (index - 1));
        if (prevInput) prevInput.value = '';
      }
      this.updateOtpAggregateAndValidity();
      return;
    }
    if (key === 'ArrowLeft' && index > 0) {
      ev.preventDefault();
      const prevEl = document.getElementById('otp-box-' + (index - 1));
      if (prevEl) prevEl.focus();
      this.activeOtpIndex = index - 1;
      return;
    }
    if (key === 'ArrowRight' && index < this.otpBoxes.length - 1) {
      ev.preventDefault();
      const nextEl = document.getElementById('otp-box-' + (index + 1));
      if (nextEl) nextEl.focus();
      this.activeOtpIndex = index + 1;
      return;
    }
  }
  focusOtpBox(index) {
    const el = document.getElementById('otp-box-' + index);
    if (el) el.focus();
    this.activeOtpIndex = index;
  }
  isValid() {
    if (this.changeForm.valid) {
      return true;
    }
    this.errors = true;
    this.isConfirmPasswordValid();
    this.isPasswordValid();
    return false;
  }
  isOldPasswordValid() {
    if (!this.changeForm.value.old_password) {
      this.showError('Please enter old password');
      let elem = document.querySelector('.change-old_password ion-input.ng-invalid input');
      if (elem) {
        elem.focus();
      }
      return false;
    }
    return true;
  }
  isConfirmPasswordValid() {
    if (this.changeForm.value.password != this.changeForm.value.password_confirmation) {
      this.showError("Password and confirm password are not matching");
      let elem = document.querySelector('.change-password_confirmation ion-input.ng-invalid input');
      if (elem) {
        elem.focus();
      }
      return false;
    }
    return true;
  }
  isPasswordValid() {
    if (this.changeForm.value.password.length < 8) {
      this.showError("Password should be of minimum 8 characters");
      let elem = document.querySelector('.change-password ion-input.ng-invalid input');
      if (elem) {
        elem.focus();
      }
      return false;
    }
    return true;
  }
  isValidForgotPassword() {
    if (!this.changeForm.value.otp) {
      this.showError('Please enter OTP');
      return false;
    }
    if (!this.changeForm.value.password) {
      this.showError('Please enter new password');
      return false;
    }
    if (this.changeForm.value.password.length < 8) {
      this.showError('Password should be of minimum 8 characters');
      return false;
    }
    if (this.changeForm.value.password !== this.changeForm.value.password_confirmation) {
      this.showError('Password and confirm password are not matching');
      return false;
    }
    return true;
  }
  showError(msg) {
    this.errors = true;
    this.showChangeError = true;
    this.changeFailed = false;
    this.changeErrorMessage = msg;
  }
  onInputChange() {
    this.showChangeError = false;
    this.changeErrorMessage = null;
  }
  ionViewDidEnter() {
    //   this.commonService.gTrack("ChangePasswordPage");
  }
  onPasswordToggle() {
    this.showPassword = !this.showPassword;
  }
  onPasswordToggle1() {
    this.showPassword1 = !this.showPassword1;
  }
  onPasswordToggle2() {
    this.showPassword2 = !this.showPassword2;
  }
  togglePassword(field) {
    switch (field) {
      case 'old':
        this.showOldPassword = !this.showOldPassword;
        break;
      case 'new':
        this.showPassword = !this.showPassword;
        break;
      case 'confirm':
        this.showConfirmPassword = !this.showConfirmPassword;
        break;
    }
  }
  // Auto-submit logic for shyamoli forgot password flow
  maybeSubmitOnOtp() {
    var _this$metaData2, _this$changeForm$get2, _this$changeForm$get3;
    if (!this.isForgotPasswordFlow) return;
    if (!((_this$metaData2 = this.metaData) !== null && _this$metaData2 !== void 0 && _this$metaData2.msiteFolder) || this.metaData.msiteFolder !== 'shyamolitheme') return;
    // need valid OTP, password and confirmation matching and length >=8 (backend constraint)
    const pwd = (_this$changeForm$get2 = this.changeForm.get('password')) === null || _this$changeForm$get2 === void 0 ? void 0 : _this$changeForm$get2.value;
    const cfm = (_this$changeForm$get3 = this.changeForm.get('password_confirmation')) === null || _this$changeForm$get3 === void 0 ? void 0 : _this$changeForm$get3.value;
    if (this.otpValid && pwd && cfm && pwd === cfm && pwd.length >= 8) {
      // attempt auto-submit; rely on internal guarding in changePassword
      this.changePassword();
    }
  }
  updateOtpAggregateAndValidity() {
    const full = this.otpBoxes.join('');
    this.changeForm.patchValue({
      otp: full
    });
    if (full.length === this.otpBoxes.length) {
      this.otpValid = /^\d{6}$/.test(full);
      this.maybeSubmitOnOtp();
    } else {
      this.otpValid = false;
    }
  }
}
_ResetPasswordPage = ResetPasswordPage;
_ResetPasswordPage.ɵfac = function ResetPasswordPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ResetPasswordPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_6__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_authentication__WEBPACK_IMPORTED_MODULE_7__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_8__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_9__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_10__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_11__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_exception__WEBPACK_IMPORTED_MODULE_12__.ExceptionProvider), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_13__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_14__.AppData));
};
_ResetPasswordPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _ResetPasswordPage,
  selectors: [["app-reset-password"]],
  standalone: false,
  decls: 4,
  vars: 4,
  consts: [[4, "ngIf"], [3, "ngStyle"], ["title", "Change Password", "subtitle", "", "showsubTxt", "true", "showsubtitle", "false"], ["padding", "", 1, "theme1", 2, "--background", "white"], ["class", "change-error ", 4, "ngIf"], [1, "themeone-change-form"], ["novalidate", "", 3, "ngSubmit", "ngClass", "formGroup"], [1, "change-old_password"], ["label", "Old Password", "labelPlacement", "floating", "formControlName", "old_password", 1, "txt-lbl", 3, "keypress", "type"], [1, "icondiv1", 3, "click"], [1, "iconeye12", 3, "name"], [1, "change-password"], ["label", "Password", "labelPlacement", "floating", "formControlName", "password", 1, "txt-lbl", 3, "keypress", "type"], [1, "change-password_confirmation"], ["label", "Confirm Password", "labelPlacement", "floating", "formControlName", "password_confirmation", 1, "txt-lbl", 3, "keypress", "type"], ["padding", ""], ["mode", "md", "type", "submit", "expand", "block", 3, "ngClass"], [1, "change-error"], ["class", "my-animation", 4, "ngIf"], [1, "my-animation"], ["mode", "md", 1, "h50"], ["slot", "start"], [1, "head"], [1, "change-form"], ["slot", "end", 3, "click", "name"], ["mode", "md", "type", "submit", "expand", "block", 1, "login-btn"], [2, "box-shadow", "none", 3, "ngStyle"], ["slot", "start", 2, "position", "absolute"], [2, "display", "flex", "align-items", "center", "justify-content", "center", "height", "100%"], ["alt", "Logo", 1, "shyamoli-logo", 3, "src"], [1, "syamolitheme"], ["div", "", 1, "syamoli-center"], [2, "font-family", "'Glory-Bold', sans-serif", "font-size", "24px", "font-weight", "bold", "color", "var(--syamoli-text-primary)", "margin-bottom", "20px", "text-align", "center"], ["novalidate", "", 2, "width", "100%", "padding", "0px 12px", 3, "ngSubmit", "ngClass", "formGroup"], ["lines", "none", 1, "syamoli-input"], ["src", "./assets/icon/shyamoli-password.svg", "slot", "start", 2, "height", "24px", "width", "24px"], ["placeholder", "Enter your current password", "formControlName", "old_password", 3, "keypress", "type"], ["slot", "end", 2, "height", "20px", "width", "20px", 3, "click", "name"], [1, "syamoli-section-title"], ["placeholder", "Enter new password", "formControlName", "password", 3, "keypress", "type"], ["placeholder", "Confirm new password", "formControlName", "password_confirmation", 3, "keypress", "type"], ["mode", "md", "type", "submit", "expand", "block", 1, "login-btn", "shyamoli-button", 2, "font-size", "18px"], [1, "sb-page-header", 3, "ngStyle"], [1, "sb-toolbar", "sb-auth-toolbar"], ["text", "", "icon", "./assets/seabird-new/back-arrow-navy.svg", 1, "sb-auth-back"], [1, "sb-auth-title"], [1, "sb-auth"], [1, "sb-auth__body"], ["novalidate", "", 1, "sb-pax-card", "sb-auth__card", 3, "ngSubmit", "ngClass", "formGroup"], ["class", "sb-auth__error", "role", "alert", 4, "ngIf"], [1, "sb-pfield", "change-old_password"], [1, "sb-pfield__label"], [1, "sb-pfield__row"], ["placeholder", "Enter old password", "formControlName", "old_password", "aria-label", "Old password", 1, "sb-pfield__input", 3, "keypress", "type"], ["type", "button", 1, "sb-auth__icon", 3, "click"], ["aria-hidden", "true", 3, "name"], [1, "sb-pfield", "change-password"], ["placeholder", "Enter new password", "formControlName", "password", "aria-label", "Password", 1, "sb-pfield__input", 3, "keypress", "type"], [1, "sb-pfield", "change-password_confirmation"], ["placeholder", "Re-enter new password", "formControlName", "password_confirmation", "aria-label", "Confirm password", 1, "sb-pfield__input", 3, "keypress", "type"], ["type", "submit", 1, "sb-btn-solid", "sb-auth__btn"], ["role", "alert", 1, "sb-auth__error"]],
  template: function ResetPasswordPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ResetPasswordPage_ng_container_0_Template, 22, 13, "ng-container", 0)(1, ResetPasswordPage_ng_container_1_Template, 23, 12, "ng-container", 0)(2, ResetPasswordPage_ng_container_2_Template, 30, 13, "ng-container", 0)(3, ResetPasswordPage_ng_container_3_Template, 34, 15, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme" || ctx.metaData.msiteFolder == "networktheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme" || ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "" || ctx.metaData.msiteFolder == "seabirdTheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "shyamolitheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder === "seabirdThemeNew");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButton, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_16__.WhiteCommonHeaderComponent],
  styles: [".change-error[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n  margin: 5px 0 15px;\n  color: #f00;\n  border: 0.3px solid;\n  overflow: hidden;\n  position: relative;\n}\n\n.change-form[_ngcontent-%COMP%] {\n  background-color: #fdfdfd;\n  border: 1px solid #f5f5f5;\n  padding: 16px;\n}\n.change-form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  background-color: transparent;\n  margin: 5px 0;\n}\n\n.search-box[_ngcontent-%COMP%] {\n  margin: 0 16px 16px;\n  border-radius: 4px;\n  text-transform: none;\n}\n\n.txt-lbl[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: normal;\n  color: #3e3e52;\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background: var(--iconsAndButtonsColor) !important;\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  position: fixed;\n  height: 50px;\n  border-radius: 4px;\n}\n\n.themeone-login-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background: #F2C21A;\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  color: #191966;\n  height: 50px;\n  border-radius: 4px;\n}\n\n.themeone-login-btn-2[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background: var(--iconsAndButtonsColor);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  color: var(--primaryText);\n  height: 50px;\n  border-radius: 4px;\n}\n\n.iconeye12[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: -15px;\n  z-index: 99999999;\n  color: #696768;\n  font-size: 21px;\n  height: 25px;\n  width: 25px;\n  right: 12px;\n}\n\n.themeone-change-form[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.themeone-change-form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  background-color: transparent;\n  margin: 5px 0;\n}\n\n.syamolitheme[_ngcontent-%COMP%] {\n  --syamoli-primary: var(--iconsAndButtonsColor);\n  --syamoli-primary-dark: var(--iconsAndButtonsColor);\n  --syamoli-secondary: #6C757D;\n  --syamoli-background: #FFFFFF;\n  --syamoli-surface: #F8F9FA;\n  --syamoli-text-primary: #1A202C;\n  --syamoli-text-secondary: #111111;\n  --syamoli-border: #E5E7EB;\n  --syamoli-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  background: var(--syamoli-background);\n}\n.syamolitheme[_ngcontent-%COMP%]   .syamoli-center[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  margin: 0 auto;\n  padding: 40px 16px 16px 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.syamolitheme[_ngcontent-%COMP%]   .syamoli-input[_ngcontent-%COMP%] {\n  background: var(--syamoli-surface);\n  border: 1px solid #ADB4C0;\n  border-radius: 8px;\n  margin: 12px 0;\n  width: 100%;\n  --inner-border-width: 0;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.syamolitheme[_ngcontent-%COMP%]   .syamoli-input[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --padding-start: 28px;\n  --padding-end: 45px;\n  --padding-top: 14px;\n  --padding-bottom: 14px;\n  font-size: 15px;\n  --placeholder-color: var(--syamoli-text-secondary);\n  --color: var(--syamoli-text-primary);\n  flex: 1;\n}\n.syamolitheme[_ngcontent-%COMP%]   .syamoli-input[_ngcontent-%COMP%]   ion-icon[slot=start][_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 10;\n  font-size: 18px;\n  color: #888888;\n  margin: 0;\n  width: 18px;\n  height: 18px;\n}\n.syamolitheme[_ngcontent-%COMP%]   .syamoli-input[_ngcontent-%COMP%]   ion-icon[slot=end][_ngcontent-%COMP%] {\n  position: absolute;\n  right: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 10;\n  font-size: 18px;\n  color: #888888;\n  margin: 0;\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n}\n.syamolitheme[_ngcontent-%COMP%]   .syamoli-btn-primary[_ngcontent-%COMP%] {\n  --background: var(--syamoli-primary);\n  --color: #FFFFFF;\n  --border-radius: 6px;\n  height: 44px;\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: none;\n  margin: 0;\n  --box-shadow: none;\n}\n.syamolitheme[_ngcontent-%COMP%]   .syamoli-btn-secondary[_ngcontent-%COMP%] {\n  --background: #000000;\n  --color: #FFFFFF;\n  --border-color: #000000;\n  --border-width: 1px;\n  --border-radius: 6px;\n  height: 44px;\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: none;\n  margin: 0;\n}\n.syamolitheme[_ngcontent-%COMP%]   .syamoli-link[_ngcontent-%COMP%] {\n  color: var(--syamoli-primary);\n  font-weight: 500;\n  text-decoration: none;\n  cursor: pointer;\n}\n.syamolitheme[_ngcontent-%COMP%]   .syamoli-link[_ngcontent-%COMP%]:hover {\n  color: var(--syamoli-primary-dark);\n}\n.syamolitheme[_ngcontent-%COMP%]   .shyamoli-logo[_ngcontent-%COMP%] {\n  height: 28px;\n  width: auto;\n  object-fit: contain;\n}\n.syamolitheme[_ngcontent-%COMP%]   .syamoli-forgot-password[_ngcontent-%COMP%] {\n  color: #888888;\n  font-weight: 400;\n  text-decoration: none;\n  cursor: pointer;\n  font-size: 14px;\n}\n.syamolitheme[_ngcontent-%COMP%]   .syamoli-forgot-password[_ngcontent-%COMP%]:hover {\n  color: #666666;\n}\n.syamolitheme[_ngcontent-%COMP%]   .syamoli-text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.syamolitheme[_ngcontent-%COMP%]   .syamoli-text-secondary[_ngcontent-%COMP%] {\n  color: var(--syamoli-text-secondary);\n  font-size: 14px;\n}\n.syamolitheme[_ngcontent-%COMP%]   .syamoli-mt-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.syamolitheme[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  color: var(--syamoli-text-primary);\n  font-size: 18px;\n  font-weight: 600;\n  text-align: center;\n  flex: 1;\n}\n.syamolitheme[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: #FFFFFF;\n  --color: var(--syamoli-text-primary);\n}\n.syamolitheme[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%] {\n  --color: var(--syamoli-text-primary);\n}\n\n.syamoli-section-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-top: 30px;\n  margin-bottom: 10px;\n  text-align: left;\n  font-family: \"Gilroy-Bold\", \"Gilroy-Medium\", sans-serif;\n  letter-spacing: 0.5px;\n}\n\n.shyamoli-button[_ngcontent-%COMP%] {\n  right: 24px;\n  left: 24px;\n  margin-top: 14px;\n  --border-radius: 8px;\n}"]
});

/***/ }

}]);