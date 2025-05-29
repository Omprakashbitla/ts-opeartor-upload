"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[127],{

/***/ 22966:
/*!*****************************************************************!*\
  !*** ./src/app/reset-password/reset-password-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResetPasswordPageRoutingModule: () => (/* binding */ ResetPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password.page */ 48219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _ResetPasswordPageRoutingModule;




const routes = [{
  path: '',
  component: _reset_password_page__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordPage
}];
class ResetPasswordPageRoutingModule {}
_ResetPasswordPageRoutingModule = ResetPasswordPageRoutingModule;
_ResetPasswordPageRoutingModule.ɵfac = function ResetPasswordPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ResetPasswordPageRoutingModule)();
};
_ResetPasswordPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _ResetPasswordPageRoutingModule
});
_ResetPasswordPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ResetPasswordPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 48219:
/*!*******************************************************!*\
  !*** ./src/app/reset-password/reset-password.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResetPasswordPage: () => (/* binding */ ResetPasswordPage)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication */ 82491);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/theme-service */ 99692);
/* harmony import */ var _services_exception__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/exception */ 91502);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../white-common-header/white-common-header.component */ 16688);
var _ResetPasswordPage;
















const _c0 = () => ({
  "padding-top": "50px"
});
const _c1 = () => ({});
function ResetPasswordPage_ng_container_0_div_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.changeErrorMessage);
  }
}
function ResetPasswordPage_ng_container_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ResetPasswordPage_ng_container_0_div_4_span_1_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.showChangeError);
  }
}
function ResetPasswordPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "app-white-common-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ion-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, ResetPasswordPage_ng_container_0_div_4_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 6)(6, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function ResetPasswordPage_ng_container_0_Template_form_ngSubmit_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.changePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ion-item", 8)(8, "ion-input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keypress", function ResetPasswordPage_ng_container_0_Template_ion_input_keypress_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.onInputChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ResetPasswordPage_ng_container_0_Template_div_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.onPasswordToggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "ion-item", 12)(12, "ion-input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keypress", function ResetPasswordPage_ng_container_0_Template_ion_input_keypress_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.onInputChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ResetPasswordPage_ng_container_0_Template_div_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.onPasswordToggle1());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "ion-item", 14)(16, "ion-input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keypress", function ResetPasswordPage_ng_container_0_Template_ion_input_keypress_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.onInputChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ResetPasswordPage_ng_container_0_Template_div_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.onPasswordToggle2());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "div", 16)(20, "ion-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, "Change Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", ctx_r1.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](10, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](11, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.showChangeError);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r1.errors ? "errors" : "")("formGroup", ctx_r1.changeForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("type", ctx_r1.showPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("name", ctx_r1.showPassword ? "eye-off" : "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("type", ctx_r1.showPassword1 ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("name", ctx_r1.showPassword1 ? "eye-off" : "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("type", ctx_r1.showPassword2 ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("name", ctx_r1.showPassword2 ? "eye-off" : "eye");
  }
}
function ResetPasswordPage_ng_template_1_div_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.changeErrorMessage);
  }
}
function ResetPasswordPage_ng_template_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ResetPasswordPage_ng_template_1_div_7_span_1_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.showChangeError);
  }
}
function ResetPasswordPage_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-header", 2)(1, "ion-toolbar", 21)(2, "ion-buttons", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Change password");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "ion-content", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, ResetPasswordPage_ng_template_1_div_7_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 24)(9, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function ResetPasswordPage_ng_template_1_Template_form_ngSubmit_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.changePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "ion-item", 8)(11, "ion-input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keypress", function ResetPasswordPage_ng_template_1_Template_ion_input_keypress_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.onInputChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "ion-item", 12)(13, "ion-input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keypress", function ResetPasswordPage_ng_template_1_Template_ion_input_keypress_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.onInputChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "ion-item", 14)(15, "ion-input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keypress", function ResetPasswordPage_ng_template_1_Template_ion_input_keypress_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.onInputChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "div", 16)(17, "ion-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, "Change password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", ctx_r1.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](4, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.showChangeError);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r1.errors ? "errors" : "")("formGroup", ctx_r1.changeForm);
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
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    this.changeFailed = false;
    this.errors = false;
    this.showChangeError = false;
    this.changeErrorMessage = null;
    this.validations();
    this.appData.newTheme = this.util.getNewTheme();
  }
  ngOnInit() {}
  ionViewDidLoad() {
    // this.commonService.gTrack('changePassword','“Change Password” option is selected from menu')
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }
  changePassword() {
    this.showChangeError = false;
    this.changeErrorMessage = null;
    if (this.isOldPasswordValid()) {
      if (this.isValid()) {
        this.loader.showLoadingDefault();
        this.apiFactory.changePassword(this.changeForm.value).subscribe(result => {
          this.loader.hideLoadingDefault();
          if (result) {
            if (result.success) {
              // this.commonService.gTrack('changePassword','password change successful')
              this.util.showToast(result.body.message);
              this.authenticate.updateUserAuth(result);
              this.navCtrl.pop();
            } else {
              // this.commonService.gTrack('changePassword','password change failed')
              this.showError(result.body.message);
            }
          } else {
            // this.commonService.gTrack('changePassword','password change failed')
            this.showError("Change password failed");
          }
        }, err => {
          // this.commonService.gTrack('changePassword','password change failed')
          this.loader.hideLoadingDefault();
          if (!this.util.isConnected()) {
            this.util.showAlert("Error Loading", "Internet not connected please connect the internect and try after again");
          } else {
            this.util.showAlert("Error Loading", "Something went wrong please try after some time");
          }
          this.ex.call('ChangePasswordPage', 'changePassword() --> this.apiFactory.changePassword(this.changeForm.value)', err, '');
        });
      }
    }
  }
  validations() {
    this.changeForm = this.formBuilder.group({
      old_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required])],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.minLength(8)])],
      password_confirmation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required])]
    });
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
}
_ResetPasswordPage = ResetPasswordPage;
_ResetPasswordPage.ɵfac = function ResetPasswordPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ResetPasswordPage)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_1__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_authentication__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_3__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_4__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_5__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_6__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_exception__WEBPACK_IMPORTED_MODULE_7__.ExceptionProvider), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_8__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_9__.AppData));
};
_ResetPasswordPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: _ResetPasswordPage,
  selectors: [["app-reset-password"]],
  standalone: false,
  decls: 3,
  vars: 2,
  consts: [["showOldTheme", ""], [4, "ngIf", "ngIfElse"], [3, "ngStyle"], ["title", "Change Password", "subtitle", "", "showsubTxt", "true", "showsubtitle", "false"], ["padding", "", 1, "theme1", 2, "--background", "white"], ["class", "change-error ", 4, "ngIf"], [1, "themeone-change-form"], ["novalidate", "", 3, "ngSubmit", "ngClass", "formGroup"], [1, "change-old_password"], ["label", "Old Password", "labelPlacement", "floating", "formControlName", "old_password", 1, "txt-lbl", 3, "keypress", "type"], [1, "icondiv1", 3, "click"], [1, "iconeye12", 3, "name"], [1, "change-password"], ["label", "Password", "labelPlacement", "floating", "formControlName", "password", 1, "txt-lbl", 3, "keypress", "type"], [1, "change-password_confirmation"], ["label", "Confirm Password", "labelPlacement", "floating", "formControlName", "password_confirmation", 1, "txt-lbl", 3, "keypress", "type"], ["padding", ""], ["mode", "md", "type", "submit", "expand", "block", 1, "themeone-login-btn"], [1, "change-error"], ["class", "my-animation", 4, "ngIf"], [1, "my-animation"], ["mode", "md", 1, "h50"], ["slot", "start"], [1, "head"], [1, "change-form"], ["label", "Old Password", "labelPlacement", "floating", "type", "password", "formControlName", "old_password", 1, "txt-lbl", 3, "keypress"], ["label", "Password", "labelPlacement", "floating", "type", "password", "formControlName", "password", 1, "txt-lbl", 3, "keypress"], ["label", "Confirm Password", "labelPlacement", "floating", "type", "password", "formControlName", "password_confirmation", 1, "txt-lbl", 3, "keypress"], ["mode", "md", "type", "submit", "expand", "block", 1, "login-btn"]],
  template: function ResetPasswordPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, ResetPasswordPage_ng_container_0_Template, 22, 12, "ng-container", 1)(1, ResetPasswordPage_ng_template_1_Template, 19, 6, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const showOldTheme_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.appData.newTheme)("ngIfElse", showOldTheme_r4);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonBackButton, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_10__.WhiteCommonHeaderComponent],
  styles: [".change-error[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n  margin: 5px 0 15px;\n  color: #f00;\n  border: 0.3px solid;\n  overflow: hidden;\n  position: relative;\n}\n\n.change-form[_ngcontent-%COMP%] {\n  background-color: #fdfdfd;\n  border: 1px solid #f5f5f5;\n  padding: 16px;\n}\n.change-form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  background-color: transparent;\n  margin: 5px 0;\n}\n\n.search-box[_ngcontent-%COMP%] {\n  margin: 0 16px 16px;\n  border-radius: 4px;\n  text-transform: none;\n}\n\n.txt-lbl[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: normal;\n  color: #3e3e52;\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background: var(--iconsAndButtonsColor) !important;\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  position: fixed;\n  bottom: 10px;\n  height: 50px;\n  border-radius: 4px;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: #ffffff;\n}\n\n.themeone-login-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background: #F2C21A;\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  color: #191966;\n  height: 50px;\n  border-radius: 4px;\n}\n\n.iconeye12[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: -15px;\n  z-index: 99999999;\n  color: #696768;\n  font-size: 21px;\n  height: 25px;\n  width: 25px;\n  right: 12px;\n}\n\n.themeone-change-form[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.themeone-change-form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  background-color: transparent;\n  margin: 5px 0;\n}"]
});

/***/ }),

/***/ 60127:
/*!*********************************************************!*\
  !*** ./src/app/reset-password/reset-password.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResetPasswordPageModule: () => (/* binding */ ResetPasswordPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password-routing.module */ 22966);
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password.page */ 48219);
/* harmony import */ var _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../white-common-header/white-common-header.component */ 16688);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
var _ResetPasswordPageModule;







class ResetPasswordPageModule {}
_ResetPasswordPageModule = ResetPasswordPageModule;
_ResetPasswordPageModule.ɵfac = function ResetPasswordPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ResetPasswordPageModule)();
};
_ResetPasswordPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _ResetPasswordPageModule
});
_ResetPasswordPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_2__.WhiteCommonHeaderComponent]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ResetPasswordPageModule, {
    declarations: [_reset_password_page__WEBPACK_IMPORTED_MODULE_1__.ResetPasswordPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_2__.WhiteCommonHeaderComponent]
  });
})();

/***/ })

}]);