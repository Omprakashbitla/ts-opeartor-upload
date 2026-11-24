"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[2667],{

/***/ 35794
/*!***************************************************!*\
  !*** ./src/app/sign-up/sign-up-routing.module.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignUpPageRoutingModule: () => (/* binding */ SignUpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 49870);
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up.page */ 96500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _SignUpPageRoutingModule;




const routes = [{
  path: '',
  component: _sign_up_page__WEBPACK_IMPORTED_MODULE_1__.SignUpPage
}];
class SignUpPageRoutingModule {}
_SignUpPageRoutingModule = SignUpPageRoutingModule;
_SignUpPageRoutingModule.ɵfac = function SignUpPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignUpPageRoutingModule)();
};
_SignUpPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _SignUpPageRoutingModule
});
_SignUpPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SignUpPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 32667
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.module.ts ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignUpPageModule: () => (/* binding */ SignUpPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up-routing.module */ 35794);
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-up.page */ 96500);
/* harmony import */ var _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common-header/common-header.component */ 49028);
/* harmony import */ var _components_date_picker_modal_date_picker_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/date-picker-modal/date-picker-modal.component */ 51281);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
var _SignUpPageModule;








class SignUpPageModule {}
_SignUpPageModule = SignUpPageModule;
_SignUpPageModule.ɵfac = function SignUpPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignUpPageModule)();
};
_SignUpPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: _SignUpPageModule
});
_SignUpPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_3__.SignUpPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_5__.CommonHeaderComponent, _components_date_picker_modal_date_picker_modal_component__WEBPACK_IMPORTED_MODULE_6__.DatePickerModalComponent]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SignUpPageModule, {
    declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_4__.SignUpPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_3__.SignUpPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_5__.CommonHeaderComponent, _components_date_picker_modal_date_picker_modal_component__WEBPACK_IMPORTED_MODULE_6__.DatePickerModalComponent]
  });
})();

/***/ },

/***/ 96500
/*!*****************************************!*\
  !*** ./src/app/sign-up/sign-up.page.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignUpPage: () => (/* binding */ SignUpPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _calendar_modal_calendar_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../calendar-modal/calendar-modal.page */ 70990);
/* harmony import */ var _services_validator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/validator-service */ 1863);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 84692);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/theme-service */ 99692);
/* harmony import */ var _services_exception__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/exception */ 91502);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 83087);
/* harmony import */ var _services_global_data_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/global-data.service */ 7516);
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/authentication */ 82491);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../common-header/common-header.component */ 49028);
/* harmony import */ var _components_date_picker_modal_date_picker_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/date-picker-modal/date-picker-modal.component */ 51281);

var _SignUpPage;























function SignUpPage_ng_container_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_0_div_10_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.signup("skip"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Skip");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function SignUpPage_ng_container_0_ion_item_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 7)(1, "ion-input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_0_ion_item_24_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("inputmode", ctx_r1.metaData.msiteFolder == "cbustheme" ? "numeric" : null);
  }
}
function SignUpPage_ng_container_0_ion_item_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 7)(1, "ion-input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_0_ion_item_25_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("inputmode", ctx_r1.metaData.msiteFolder == "cbustheme" ? "numeric" : null);
  }
}
function SignUpPage_ng_container_0_ion_icon_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_0_ion_icon_31_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.showPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_0_ion_icon_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_0_ion_icon_32_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.showPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_0_ion_icon_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_0_ion_icon_38_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.cfmshowPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_0_ion_icon_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_0_ion_icon_39_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.cfmshowPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_0_ion_item_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-input", 38)(2, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_0_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 39)(1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Already have an account? please ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_0_div_58_Template_span_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.gotoLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "themeone-click-btn" : "themeone-click-btn-2");
  }
}
function SignUpPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-common-header", 1)(3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-content", 3)(5, "div", 4)(6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div")(9, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function SignUpPage_ng_container_0_Template_form_ngSubmit_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.signup("buttonType"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, SignUpPage_ng_container_0_div_10_Template, 3, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "ion-row")(12, "ion-col")(13, "ion-item", 7)(14, "ion-input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_0_Template_ion_input_keyup_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "ion-row")(17, "ion-col")(18, "ion-item", 10)(19, "ion-input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_0_Template_ion_input_keyup_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "ion-item", 12)(22, "ion-input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_0_Template_ion_input_keyup_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, SignUpPage_ng_container_0_ion_item_24_Template, 3, 1, "ion-item", 15)(25, SignUpPage_ng_container_0_ion_item_25_Template, 3, 1, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "ion-row")(27, "ion-col")(28, "ion-item", 16)(29, "ion-input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_0_Template_ion_input_keyup_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, SignUpPage_ng_container_0_ion_icon_31_Template, 1, 0, "ion-icon", 19)(32, SignUpPage_ng_container_0_ion_icon_32_Template, 1, 0, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "ion-row")(34, "ion-col")(35, "ion-item", 10)(36, "ion-input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_0_Template_ion_input_keyup_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, SignUpPage_ng_container_0_ion_icon_38_Template, 1, 0, "ion-icon", 21)(39, SignUpPage_ng_container_0_ion_icon_39_Template, 1, 0, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "ion-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_0_Template_ion_item_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openCalendar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "app-date-picker-modal", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dateSelected", function SignUpPage_ng_container_0_Template_app_date_picker_modal_dateSelected_44_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.displayMybookings($event, 1));
    })("isOpenChange", function SignUpPage_ng_container_0_Template_app_date_picker_modal_isOpenChange_44_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.isCalenderOpen = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, " Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 27)(48, "div", 2)(49, "ion-segment", 28)(50, "ion-segment-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "ion-segment-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](54, SignUpPage_ng_container_0_ion_item_54_Template, 3, 0, "ion-item", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div")(56, "ion-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_0_Template_ion_button_click_56_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.signup("sign-up"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, SignUpPage_ng_container_0_div_58_Template, 5, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "cbus_bg_curved" : "theme1_bg_curved");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "themeone-sub-hd-txt" : "themeone-sub-hd-txt-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r1.signupForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx_r1.passwordFieldType);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.showpass);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.showpass);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx_r1.cfmpasswordFieldType);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.cfmshowpass);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.cfmshowpass);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.showDate || "Date Of Birth", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r1.pageDate)("max", ctx_r1.todayDate)("isOpen", ctx_r1.isCalenderOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "seg-btn" : "themeone-seg-btn");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "segone" : "themeone_segone");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", "Male", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", "Female", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "themeone-login-btn" : "themeone-login-btn-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login");
  }
}
function SignUpPage_ng_container_1_ion_title_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-title", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_1_ion_title_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-title", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_1_ion_title_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-title", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Personal details");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_1_ion_card_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-card", 61)(1, "div", 62)(2, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Already have an account ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_1_ion_card_10_Template_span_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.gotoLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function SignUpPage_ng_container_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_1_div_15_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.signup("skip"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Skip");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function SignUpPage_ng_container_1_ion_item_16_ion_text_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-text", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_1_ion_item_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 54)(1, "ion-input", 65)(2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "First Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SignUpPage_ng_container_1_ion_item_16_ion_text_4_Template, 2, 0, "ion-text", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.signUpConfig["First_Name"] && ctx_r1.signUpConfig["First_Name"] === "Mandatory");
  }
}
function SignUpPage_ng_container_1_ion_item_17_ion_text_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-text", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_1_ion_item_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 54)(1, "ion-input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_1_ion_item_17_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SignUpPage_ng_container_1_ion_item_17_ion_text_4_Template, 2, 0, "ion-text", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.signUpConfig["Last_Name"] && ctx_r1.signUpConfig["Last_Name"] === "Mandatory");
  }
}
function SignUpPage_ng_container_1_ion_item_18_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_1_ion_item_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 54)(1, "ion-input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_1_ion_item_18_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SignUpPage_ng_container_1_ion_item_18_span_4_Template, 2, 0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.signUpConfig["Email_ID"] && ctx_r1.signUpConfig["Email_ID"] === "Mandatory");
  }
}
function SignUpPage_ng_container_1_ion_item_19_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_1_ion_item_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 54)(1, "ion-input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_1_ion_item_19_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Mobile number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SignUpPage_ng_container_1_ion_item_19_span_4_Template, 2, 0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.signUpConfig["Phone_Number"] && ctx_r1.signUpConfig["Phone_Number"] === "Mandatory");
  }
}
function SignUpPage_ng_container_1_ion_item_20_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_1_ion_item_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 54)(1, "ion-input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_1_ion_item_20_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Mobile number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SignUpPage_ng_container_1_ion_item_20_span_4_Template, 2, 0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.signUpConfig["Phone_Number"] && ctx_r1.signUpConfig["Phone_Number"] === "Mandatory");
  }
}
function SignUpPage_ng_container_1_ion_item_21_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_1_ion_item_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 54)(1, "ion-input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_1_ion_item_21_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SignUpPage_ng_container_1_ion_item_21_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.forcedMobNUm, $event) || (ctx_r1.forcedMobNUm = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Mobile number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SignUpPage_ng_container_1_ion_item_21_span_4_Template, 2, 0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.forcedMobNUm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.signUpConfig["Phone_Number"] && ctx_r1.signUpConfig["Phone_Number"] === "Mandatory");
  }
}
function SignUpPage_ng_container_1_ion_item_22_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_1_ion_item_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 54)(1, "ion-input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_1_ion_item_22_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Mobile number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SignUpPage_ng_container_1_ion_item_22_span_4_Template, 2, 0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.signUpConfig["Phone_Number"] && ctx_r1.signUpConfig["Phone_Number"] === "Mandatory");
  }
}
function SignUpPage_ng_container_1_ion_item_29_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_1_ion_item_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_1_ion_item_29_Template_ion_item_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openCalendar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 77)(3, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Date of birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, SignUpPage_ng_container_1_ion_item_29_span_7_Template, 2, 0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.showDate || "Date Of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.signUpConfig["DOB"] === "Mandatory");
  }
}
function SignUpPage_ng_container_1_ion_item_31_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]("*");
  }
}
function SignUpPage_ng_container_1_ion_item_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 54)(1, "ion-label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, SignUpPage_ng_container_1_ion_item_31_span_3_Template, 2, 1, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 81)(5, "ion-segment", 82)(6, "ion-segment-button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "ion-segment-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.signUpConfig["Title"] && ctx_r1.signUpConfig["Title"] === "Mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", "Male", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", "Female", " ");
  }
}
function SignUpPage_ng_container_1_ion_item_32_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_1_ion_item_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 54)(1, "ion-input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_1_ion_item_32_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SignUpPage_ng_container_1_ion_item_32_span_4_Template, 2, 0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.signUpConfig["Address"] && ctx_r1.signUpConfig["Address"] === "Mandatory");
  }
}
function SignUpPage_ng_container_1_ion_item_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_1_span_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_1_span_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-header", 42)(2, "ion-toolbar", 43)(3, "ion-buttons", 44)(4, "ion-back-button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_1_Template_ion_back_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, SignUpPage_ng_container_1_ion_title_5_Template, 2, 0, "ion-title", 46)(6, SignUpPage_ng_container_1_ion_title_6_Template, 2, 0, "ion-title", 46)(7, SignUpPage_ng_container_1_ion_title_7_Template, 2, 0, "ion-title", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-content", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, SignUpPage_ng_container_1_ion_card_10_Template, 6, 0, "ion-card", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 50)(12, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "form", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function SignUpPage_ng_container_1_Template_form_ngSubmit_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.signup("buttonType"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, SignUpPage_ng_container_1_div_15_Template, 3, 0, "div", 6)(16, SignUpPage_ng_container_1_ion_item_16_Template, 5, 1, "ion-item", 53)(17, SignUpPage_ng_container_1_ion_item_17_Template, 5, 1, "ion-item", 53)(18, SignUpPage_ng_container_1_ion_item_18_Template, 5, 1, "ion-item", 53)(19, SignUpPage_ng_container_1_ion_item_19_Template, 5, 1, "ion-item", 53)(20, SignUpPage_ng_container_1_ion_item_20_Template, 5, 1, "ion-item", 53)(21, SignUpPage_ng_container_1_ion_item_21_Template, 5, 2, "ion-item", 53)(22, SignUpPage_ng_container_1_ion_item_22_Template, 5, 1, "ion-item", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "ion-item", 54)(24, "ion-input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_1_Template_ion_input_keyup_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "ion-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_1_Template_ion_icon_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.togglePasswordVisibility1());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "ion-item", 54)(27, "ion-input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_1_Template_ion_input_keyup_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "ion-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_1_Template_ion_icon_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.toggleCnfPasswordVisibility());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, SignUpPage_ng_container_1_ion_item_29_Template, 8, 2, "ion-item", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "app-date-picker-modal", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dateSelected", function SignUpPage_ng_container_1_Template_app_date_picker_modal_dateSelected_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.displayMybookings($event, 1));
    })("isOpenChange", function SignUpPage_ng_container_1_Template_app_date_picker_modal_isOpenChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.isCalenderOpen = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, SignUpPage_ng_container_1_ion_item_31_Template, 10, 3, "ion-item", 53)(32, SignUpPage_ng_container_1_ion_item_32_Template, 5, 1, "ion-item", 53)(33, SignUpPage_ng_container_1_ion_item_33_Template, 2, 0, "ion-item", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div")(35, "ion-button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_1_Template_ion_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.signup("sign-up"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, SignUpPage_ng_container_1_span_36_Template, 2, 0, "span", 0)(37, SignUpPage_ng_container_1_span_37_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", ctx_r1.logo ? ctx_r1.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r1.signupForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.signUpConfig["First_Name"] && ctx_r1.signUpConfig["First_Name"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.signUpConfig["Last_Name"] && ctx_r1.signUpConfig["Last_Name"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.signUpConfig["Email_ID"] && ctx_r1.signUpConfig["Email_ID"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == false && ctx_r1.signUpConfig["Phone_Number"] && ctx_r1.signUpConfig["Phone_Number"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == false && ctx_r1.signUpConfig["Phone_Number"] && ctx_r1.signUpConfig["Phone_Number"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == true && ctx_r1.signUpConfig["Phone_Number"] && ctx_r1.signUpConfig["Phone_Number"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == true && ctx_r1.signUpConfig["Phone_Number"] && ctx_r1.signUpConfig["Phone_Number"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx_r1.showpass ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("name", ctx_r1.showpass ? "eye-off" : "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx_r1.cfmshowpass ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("name", ctx_r1.cfmshowpass ? "eye-off" : "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.signUpConfig["DOB"] && ctx_r1.signUpConfig["DOB"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r1.pageDate)("max", ctx_r1.todayDate)("isOpen", ctx_r1.isCalenderOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.signUpConfig["Title"] && ctx_r1.signUpConfig["Title"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.signUpConfig["Address"] && ctx_r1.signUpConfig["Address"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login");
  }
}
function SignUpPage_ng_container_2_ion_buttons_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-buttons");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_2_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_2_div_15_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.signup("skip"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Skip");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function SignUpPage_ng_container_2_ion_row_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 94)(2, "ion-item", 95)(3, "ion-input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_2_ion_row_28_Template_ion_input_keyup_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    })("ionChange", function SignUpPage_ng_container_2_ion_row_28_Template_ion_input_ionChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.enforceMaxLength($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}
function SignUpPage_ng_container_2_ion_row_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 94)(2, "ion-item", 95)(3, "ion-input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_2_ion_row_29_Template_ion_input_keyup_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    })("ionChange", function SignUpPage_ng_container_2_ion_row_29_Template_ion_input_ionChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.enforceMaxLength($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}
function SignUpPage_ng_container_2_ion_row_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 94)(2, "ion-item", 95)(3, "ion-input", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_2_ion_row_30_Template_ion_input_keyup_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    })("ionChange", function SignUpPage_ng_container_2_ion_row_30_Template_ion_input_ionChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.enforceMaxLength($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SignUpPage_ng_container_2_ion_row_30_Template_ion_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.forcedMobNUm, $event) || (ctx_r1.forcedMobNUm = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.forcedMobNUm);
  }
}
function SignUpPage_ng_container_2_ion_row_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 94)(2, "ion-item", 95)(3, "ion-input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_2_ion_row_31_Template_ion_input_keyup_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    })("ionChange", function SignUpPage_ng_container_2_ion_row_31_Template_ion_input_ionChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.enforceMaxLength($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}
function SignUpPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-header", 86)(2, "ion-toolbar", 87)(3, "ion-row")(4, "ion-col", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, SignUpPage_ng_container_2_ion_buttons_5_Template, 2, 0, "ion-buttons", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-col", 89)(7, "ion-title", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Personal Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "ion-col", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "ion-content", 91)(11, "div", 50)(12, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "form", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function SignUpPage_ng_container_2_Template_form_ngSubmit_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.signup("buttonType"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, SignUpPage_ng_container_2_div_15_Template, 3, 0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "ion-row", 93)(17, "ion-col", 94)(18, "ion-item", 95)(19, "ion-input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_2_Template_ion_input_keyup_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "ion-row")(21, "ion-col", 94)(22, "ion-item", 95)(23, "ion-input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_2_Template_ion_input_keyup_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "ion-row")(25, "ion-col", 98)(26, "ion-item", 99)(27, "ion-input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_2_Template_ion_input_keyup_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, SignUpPage_ng_container_2_ion_row_28_Template, 4, 0, "ion-row", 0)(29, SignUpPage_ng_container_2_ion_row_29_Template, 4, 0, "ion-row", 0)(30, SignUpPage_ng_container_2_ion_row_30_Template, 4, 1, "ion-row", 0)(31, SignUpPage_ng_container_2_ion_row_31_Template, 4, 0, "ion-row", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "ion-row")(33, "ion-col", 94)(34, "ion-item", 95)(35, "ion-input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_2_Template_ion_input_keyup_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_2_Template_div_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onPasswordToggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "ion-icon", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "ion-row")(39, "ion-col", 94)(40, "ion-item", 95)(41, "ion-input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_2_Template_ion_input_keyup_41_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_2_Template_div_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onPasswordToggle1());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](43, "ion-icon", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "ion-row")(45, "ion-col", 105)(46, "ion-item", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](47, "img", 107)(48, "ion-input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "app-date-picker-modal", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dateSelected", function SignUpPage_ng_container_2_Template_app_date_picker_modal_dateSelected_49_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.displayMybookings($event, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "ion-col", 105)(51, "ion-segment", 110)(52, "ion-segment-button", 111)(53, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "ion-segment-button", 30)(56, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div")(59, "ion-button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_2_Template_ion_button_click_59_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.signup("sign-up"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.forced_signup_with_otp_login_for_m_site);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r1.signupForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx_r1.showPassword1 ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", ctx_r1.showPassword1 ? "eye-off" : "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx_r1.showconfirmPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", ctx_r1.showconfirmPassword ? "eye-off" : "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r1.showDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r1.pageDate)("max", ctx_r1.maxDate);
  }
}
function SignUpPage_ng_container_3_ion_title_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-title", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_3_ion_title_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-title", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_3_ion_title_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-title", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Personal details");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_3_div_12_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.signup("skip"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Skip");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function SignUpPage_ng_container_3_ion_item_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 119)(1, "ion-input", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_3_ion_item_19_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function SignUpPage_ng_container_3_ion_item_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 79)(1, "ion-input", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_3_ion_item_20_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function SignUpPage_ng_container_3_ion_item_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 119)(1, "ion-input", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_3_ion_item_21_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r32);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SignUpPage_ng_container_3_ion_item_21_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r32);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.forcedMobNUm, $event) || (ctx_r1.forcedMobNUm = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.forcedMobNUm);
  }
}
function SignUpPage_ng_container_3_ion_item_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 119)(1, "ion-input", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_3_ion_item_22_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function SignUpPage_ng_container_3_ion_item_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-input", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_3_span_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_3_span_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_3_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 146)(1, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Already have an account ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_3_div_55_Template_span_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.gotoLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function SignUpPage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 87)(3, "ion-buttons", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, SignUpPage_ng_container_3_ion_title_5_Template, 2, 0, "ion-title", 46)(6, SignUpPage_ng_container_3_ion_title_6_Template, 2, 0, "ion-title", 46)(7, SignUpPage_ng_container_3_ion_title_7_Template, 2, 0, "ion-title", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-content", 116)(10, "ion-card", 117)(11, "form", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function SignUpPage_ng_container_3_Template_form_ngSubmit_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.signup("buttonType"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, SignUpPage_ng_container_3_div_12_Template, 3, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "ion-item", 119)(14, "ion-input", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_3_Template_ion_input_keyup_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "ion-item", 119)(16, "ion-input", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_3_Template_ion_input_keyup_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "ion-item", 119)(18, "ion-input", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_3_Template_ion_input_keyup_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, SignUpPage_ng_container_3_ion_item_19_Template, 2, 0, "ion-item", 123)(20, SignUpPage_ng_container_3_ion_item_20_Template, 2, 0, "ion-item", 124)(21, SignUpPage_ng_container_3_ion_item_21_Template, 2, 1, "ion-item", 123)(22, SignUpPage_ng_container_3_ion_item_22_Template, 2, 0, "ion-item", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "ion-item", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "ion-input", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "ion-icon", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_3_Template_ion_icon_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.togglePasswordVisibility("password"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "ion-item", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "ion-input", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "ion-icon", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_3_Template_ion_icon_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.togglePasswordVisibility("confirmPassword"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "ion-item", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "ion-input", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "ion-icon", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Select date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "app-date-picker-modal", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dateSelected", function SignUpPage_ng_container_3_Template_app_date_picker_modal_dateSelected_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.displayMybookings($event, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "ion-item", 119)(37, "ion-label", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, " Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div")(40, "ion-radio-group", 134)(41, "ion-list", 135)(42, "ion-item", 136)(43, "ion-label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](45, "ion-radio", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "ion-item", 136)(47, "ion-label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](49, "ion-radio", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, SignUpPage_ng_container_3_ion_item_50_Template, 2, 0, "ion-item", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div")(52, "ion-button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_3_Template_ion_button_click_52_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.signup("sign-up"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](53, SignUpPage_ng_container_3_span_53_Template, 2, 0, "span", 0)(54, SignUpPage_ng_container_3_span_54_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](55, SignUpPage_ng_container_3_div_55_Template, 5, 0, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", ctx_r1.logo ? ctx_r1.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r1.signupForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx_r1.isPasswordVisible ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", ctx_r1.isPasswordVisible ? "eye-outline" : "eye-off-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx_r1.isConfirmPasswordVisible ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", ctx_r1.isConfirmPasswordVisible ? "eye-outline" : "eye-off-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r1.showDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r1.pageDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login");
  }
}
function SignUpPage_ng_container_4_ion_item_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-icon", 185)(2, "ion-input", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_4_div_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.signupErrorMessage);
  }
}
function SignUpPage_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-header", 148)(2, "ion-toolbar", 149)(3, "ion-buttons", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "ion-back-button", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "img", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-content", 154)(8, "div", 155)(9, "h2", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 157)(12, "form", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function SignUpPage_ng_container_4_Template_form_ngSubmit_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.signup("sign-up"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "ion-grid")(14, "ion-row")(15, "ion-col", 94)(16, "ion-item", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "ion-icon", 160)(18, "ion-input", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "ion-row")(20, "ion-col", 105)(21, "ion-item", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "ion-icon", 162)(23, "ion-input", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "ion-col", 105)(25, "ion-item", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "ion-icon", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "ion-input", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_4_Template_ion_input_keyup_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "ion-row")(29, "ion-col", 105)(30, "ion-item", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "ion-icon", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "ion-input", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_4_Template_ion_input_keyup_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "ion-icon", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_4_Template_ion_icon_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.togglePasswordVisibility1());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "ion-col", 105)(35, "ion-item", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "ion-icon", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "ion-input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_4_Template_ion_input_keyup_37_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "ion-icon", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_4_Template_ion_icon_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.toggleCnfPasswordVisibility());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "ion-row")(40, "ion-col", 170)(41, "ion-item", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "ion-icon", 172)(43, "ion-input", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "app-date-picker-modal", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dateSelected", function SignUpPage_ng_container_4_Template_app_date_picker_modal_dateSelected_44_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.displayMybookings($event, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "ion-col", 170)(46, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "ion-radio-group", 175)(49, "div", 176)(50, "ion-item", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](51, "ion-radio", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "ion-item", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](55, "ion-radio", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "ion-row")(59, "ion-col", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](60, SignUpPage_ng_container_4_ion_item_60_Template, 3, 0, "ion-item", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "ion-row")(62, "ion-col", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](63, SignUpPage_ng_container_4_div_63_Template, 2, 1, "div", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "ion-row")(65, "ion-col")(66, "ion-button", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_4_Template_ion_button_click_66_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.signup("sign-up"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "ion-row")(69, "ion-col", 94)(70, "div", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, "Already have an account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](72, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_4_Template_span_click_73_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.gotoLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", ctx_r1.logo ? ctx_r1.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r1.signupForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("syamoli-input-error", ctx_r1.showSignupError && (ctx_r1.signupForm.controls.full_name == null ? null : ctx_r1.signupForm.controls.full_name.invalid))("syamoli-input-focus", (ctx_r1.signupForm.controls.full_name == null ? null : ctx_r1.signupForm.controls.full_name.dirty) && !(ctx_r1.signupForm.controls.full_name == null ? null : ctx_r1.signupForm.controls.full_name.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("syamoli-input-error", ctx_r1.showSignupError && (ctx_r1.signupForm.controls.email == null ? null : ctx_r1.signupForm.controls.email.invalid))("syamoli-input-focus", (ctx_r1.signupForm.controls.email == null ? null : ctx_r1.signupForm.controls.email.dirty) && !(ctx_r1.signupForm.controls.email == null ? null : ctx_r1.signupForm.controls.email.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("syamoli-input-error", ctx_r1.showSignupError && (ctx_r1.signupForm.controls.mobile_number == null ? null : ctx_r1.signupForm.controls.mobile_number.invalid))("syamoli-input-focus", (ctx_r1.signupForm.controls.mobile_number == null ? null : ctx_r1.signupForm.controls.mobile_number.dirty) && !(ctx_r1.signupForm.controls.mobile_number == null ? null : ctx_r1.signupForm.controls.mobile_number.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("syamoli-input-error", ctx_r1.showSignupError && (ctx_r1.signupForm.controls.password == null ? null : ctx_r1.signupForm.controls.password.invalid))("syamoli-input-focus", (ctx_r1.signupForm.controls.password == null ? null : ctx_r1.signupForm.controls.password.dirty) && !(ctx_r1.signupForm.controls.password == null ? null : ctx_r1.signupForm.controls.password.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx_r1.showpass ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("name", ctx_r1.showpass ? "eye-off" : "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("syamoli-input-error", ctx_r1.showSignupError && (ctx_r1.signupForm.controls.password_confirmation == null ? null : ctx_r1.signupForm.controls.password_confirmation.invalid))("syamoli-input-focus", (ctx_r1.signupForm.controls.password_confirmation == null ? null : ctx_r1.signupForm.controls.password_confirmation.dirty) && !(ctx_r1.signupForm.controls.password_confirmation == null ? null : ctx_r1.signupForm.controls.password_confirmation.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx_r1.cfmshowpass ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("name", ctx_r1.cfmshowpass ? "eye-off" : "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("syamoli-input-error", ctx_r1.showSignupError && (ctx_r1.signupForm.controls.dob == null ? null : ctx_r1.signupForm.controls.dob.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r1.showDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r1.pageDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.showSignupError);
  }
}
function SignUpPage_ng_container_5_h1_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_5_h1_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_5_h1_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Personal details");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_5_img_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 220);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function SignUpPage_ng_container_5_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_5_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.signup("skip"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Skip");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_5_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 197)(1, "span", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Mobile number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-input", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_5_div_25_Template_ion_input_keyup_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r38);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function SignUpPage_ng_container_5_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 197)(1, "span", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Mobile number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-input", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_5_div_26_Template_ion_input_keyup_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r39);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function SignUpPage_ng_container_5_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 223)(1, "span", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Mobile number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-input", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_5_div_27_Template_ion_input_keyup_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r40);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SignUpPage_ng_container_5_div_27_Template_ion_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r40);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.forcedMobNUm, $event) || (ctx_r1.forcedMobNUm = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.forcedMobNUm);
  }
}
function SignUpPage_ng_container_5_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 197)(1, "span", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Mobile number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-input", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_5_div_28_Template_ion_input_keyup_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r41);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function SignUpPage_ng_container_5_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 197)(1, "span", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Referral code (optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-input", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_5_span_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_5_span_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpPage_ng_container_5_p_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Already have an account? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_5_p_64_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r42);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.gotoLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function SignUpPage_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-header", 188)(2, "ion-toolbar", 189)(3, "ion-buttons", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "ion-back-button", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, SignUpPage_ng_container_5_h1_5_Template, 2, 0, "h1", 191)(6, SignUpPage_ng_container_5_h1_6_Template, 2, 0, "h1", 191)(7, SignUpPage_ng_container_5_h1_7_Template, 2, 0, "h1", 191)(8, SignUpPage_ng_container_5_img_8_Template, 1, 1, "img", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-content", 193)(10, "div", 194)(11, "form", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function SignUpPage_ng_container_5_Template_form_ngSubmit_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](!ctx_r1.isSubmitting && ctx_r1.signup("sign-up"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, SignUpPage_ng_container_5_button_12_Template, 2, 0, "button", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 197)(14, "span", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "First name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "ion-input", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_5_Template_ion_input_keyup_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 197)(18, "span", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Last name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "ion-input", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_5_Template_ion_input_keyup_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 197)(22, "span", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "ion-input", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SignUpPage_ng_container_5_Template_ion_input_keyup_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, SignUpPage_ng_container_5_div_25_Template, 4, 0, "div", 202)(26, SignUpPage_ng_container_5_div_26_Template, 4, 0, "div", 202)(27, SignUpPage_ng_container_5_div_27_Template, 4, 1, "div", 203)(28, SignUpPage_ng_container_5_div_28_Template, 4, 0, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 197)(30, "span", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "ion-input", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "button", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_5_Template_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.togglePasswordVisibility("password"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "ion-icon", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 197)(37, "span", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Confirm password");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "ion-input", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "button", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_5_Template_button_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.togglePasswordVisibility("confirmPassword"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "ion-icon", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_5_Template_div_click_43_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openCalendar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "span", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Date of birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 204)(47, "div", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpPage_ng_container_5_Template_div_click_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openCalendar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "span", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "ion-icon", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "app-date-picker-modal", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dateSelected", function SignUpPage_ng_container_5_Template_app_date_picker_modal_dateSelected_51_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.displayMybookings($event, 1));
    })("isOpenChange", function SignUpPage_ng_container_5_Template_app_date_picker_modal_isOpenChange_51_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.isCalenderOpen = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 213)(53, "span", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "ion-radio-group", 214)(56, "ion-radio", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "ion-radio", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](60, SignUpPage_ng_container_5_div_60_Template, 4, 0, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "button", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](62, SignUpPage_ng_container_5_span_62_Template, 2, 0, "span", 0)(63, SignUpPage_ng_container_5_span_63_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](64, SignUpPage_ng_container_5_p_64_Template, 4, 0, "p", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.logo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r1.signupForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login" && ctx_r1.forced_signup_with_otp_login_for_m_site == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx_r1.isPasswordVisible ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-label", ctx_r1.isPasswordVisible ? "Hide password" : "Show password");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", ctx_r1.isPasswordVisible ? "eye-outline" : "eye-off-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx_r1.isConfirmPasswordVisible ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-label", ctx_r1.isConfirmPasswordVisible ? "Hide password" : "Show password");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", ctx_r1.isConfirmPasswordVisible ? "eye-outline" : "eye-off-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx_r1.showDate ? "var(--sb-color-navy)" : "var(--sb-color-muted)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.showDate || "Select date", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r1.pageDate)("max", ctx_r1.todayDate)("isOpen", ctx_r1.isCalenderOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType == "Forced Signup with OTP Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loginType != "Forced Signup with OTP Login");
  }
}
class SignUpPage {
  constructor(loader, util, formBuilder, theme, ex, commonStorage, commonService, apiFactory, modalController, dateService, navCtrl, route, router, globalData, authenticationService, alertCtrl, modalCtrl, appData, toastController) {
    this.loader = loader;
    this.util = util;
    this.formBuilder = formBuilder;
    this.theme = theme;
    this.ex = ex;
    this.commonStorage = commonStorage;
    this.commonService = commonService;
    this.apiFactory = apiFactory;
    this.modalController = modalController;
    this.dateService = dateService;
    this.navCtrl = navCtrl;
    this.route = route;
    this.router = router;
    this.globalData = globalData;
    this.authenticationService = authenticationService;
    this.alertCtrl = alertCtrl;
    this.modalCtrl = modalCtrl;
    this.appData = appData;
    this.toastController = toastController;
    this.errors = false;
    this.showSignupError = false;
    this.signupErrorMessage = '';
    this.phoneNumCount = 0;
    this.forcedMobNUm = '';
    this.password = '';
    this.forced_signup_with_otp_login_for_m_site = false;
    this.showDate = '';
    this.pageDate = '';
    this.passwordFieldType = 'password';
    this.cfmpasswordFieldType = 'password';
    this.cfmshowpass = false;
    this.showpass = false;
    this.mineDisplaydate = [];
    this.isPasswordVisible = false;
    this.isConfirmPasswordVisible = false;
    this.showPassword1 = false;
    this.showconfirmPassword = false;
    this.isIos = false;
    // Shyamoli theme helpers
    this.shyamoliPasswordTick = false; // green tick when password length >=8
    this.shyamoliPasswordsMatch = true; // confirm password match state
    this.isCalenderOpen = false;
    this.isSubmitting = false;
    this.signUpConfig = this.commonStorage.getItem("metaData").signUpConfig;
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    this.validations();
    this.default();
    this.metaData = this.commonStorage.getItem("metaData");
    this.logo = this.commonStorage.getItem("metaData").mobileNavigationLogo ? this.commonStorage.getItem("metaData").mobileNavigationLogo : this.commonStorage.getItem("metaData").headerLogo;
    this.loginType = this.commonStorage.getItem("metaData").loginType;
    this.forced_signup_with_otp_login_for_m_site = this.commonStorage.getItem("metaData").forced_signup_with_otp_login_for_m_site;
    this.appData.newTheme = this.util.getNewTheme();
    this.today = new Date();
    this.todayDate = this.today.toISOString().split('T')[0];
    this.pageDate = this.todayDate;
    const threeYearsAgo = new Date(this.today.getFullYear() - 3, this.today.getMonth(), this.today.getDate());
    this.maxDate = threeYearsAgo.toISOString().split('T')[0];
  }
  ngOnInit() {
    var _this$metaData;
    this.metaData = this.commonStorage.getItem("metaData");
    console.log('DOB config:', this.signUpConfig['DOB']);
    this.setupShyamoliSubscriptions();
    // Rebuild minimal form for Shyamoli theme (email, mobile, password, confirm password, gender)
    if (((_this$metaData = this.metaData) === null || _this$metaData === void 0 ? void 0 : _this$metaData.msiteFolder) === 'shyamolitheme') {
      this.buildShyamoliForm();
    }
  }
  goBack() {
    this.navCtrl.pop();
  }
  default() {
    this.logo = this.commonStorage.getItem("metaData").headerLogo;
    if (this.commonStorage.localGet('sign-otp')) {
      this.forcedLoginOtp = this.commonStorage.localGet('sign-otp');
      this.forcedMobNUm = this.forcedLoginOtp.MobileNumber;
    }
    // this.commonService.gTrack('signup', 'Sign Up page is displayed');
    this.signupFailed = false;
    this.showForm = false;
    this.errors = false;
    this.showSignupError = false;
    this.signupErrorMessage = null;
    this.phoneNumCount = this.commonStorage.getItem('metaData').phoneNumCount ? this.commonStorage.getItem('metaData').phoneNumCount : 10;
    this.enableOtp = this.commonStorage.getItem('metaData').isEnableOtp;
    if (!this.enableOtp) {
      this.showForm = true;
      this.validations();
    } else {
      this.OtpFormValidation();
      this.showForm = false;
    }
  }
  OtpFormValidation() {
    this.otpForm = this.formBuilder.group({
      mobile_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(this.phoneNumCount), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(this.phoneNumCount)])]
    });
  }
  departureDateModal() {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let modal = yield _this.modalController.create({
        component: _calendar_modal_calendar_modal_page__WEBPACK_IMPORTED_MODULE_2__.CalendarModalPage,
        componentProps: {
          showPastDate: false,
          title: "Select Booking Date"
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if (data) {
        _this.signupForm.controls['dob'].setValue(_this.commonService.displayFormatDate(data));
      }
    })();
  }
  validations() {
    this.signupForm = this.formBuilder.group({
      email: ['', this.signUpConfig['Email_ID'] === 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _services_validator_service__WEBPACK_IMPORTED_MODULE_3__.ValidatorService.emailValidator]) : this.signUpConfig['Email_ID'] === 'Optional' ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_services_validator_service__WEBPACK_IMPORTED_MODULE_3__.ValidatorService.emailValidator]) : []],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(8)])],
      password_confirmation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])],
      first_name: ['', this.signUpConfig['First_Name'] === 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]) : []],
      last_name: ['', this.signUpConfig['Last_Name'] === 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]) : []],
      mobile_number: ['', this.signUpConfig['Phone_Number'] === 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(this.phoneNumCount), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(this.phoneNumCount)]) : this.signUpConfig['mobile_number'] === 'Optional' ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(this.phoneNumCount), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(this.phoneNumCount)]) : []],
      // emergency_mobile_number: ['', this.signUpConfig['Emergency_Phone_Number'] === 'Mandatory' ? Validators.compose([Validators.required, Validators.maxLength(this.phoneNumCount), Validators.minLength(this.phoneNumCount)]) :this.signUpConfig['Emergency_Phone_Number'] === 'Optional' ? Validators.compose([Validators.maxLength(this.phoneNumCount), Validators.minLength(this.phoneNumCount)]) :[]],
      // id_type:['',this.signUpConfig['ID_Card'] === 'Mandatory' ? Validators.compose([Validators.required]) : []],
      // nationality:['',this.signUpConfig['Nationality'] === 'Mandatory' ? Validators.compose([Validators.required]) : []],
      // state:['',this.signUpConfig['State'] === 'Mandatory' ? Validators.compose([Validators.required]) : []],
      // city:['',this.signUpConfig['City'] === 'Mandatory' ? Validators.compose([Validators.required]) : []],
      address: ['', this.signUpConfig['Address'] === 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]) : []],
      dob: ['', this.signUpConfig['DOB'] === 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]) : []],
      sex: ['Mr', this.signUpConfig['Title'] === 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]) : []],
      referal_code: ['']
    });
    this.setupShyamoliSubscriptions();
  }
  buildShyamoliForm() {
    // Create form for Shyamoli UI with DOB and referral code included
    this.signupForm = this.formBuilder.group({
      full_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])],
      email: ['', this.signUpConfig['Email_ID'] === 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _services_validator_service__WEBPACK_IMPORTED_MODULE_3__.ValidatorService.emailValidator]) : _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_services_validator_service__WEBPACK_IMPORTED_MODULE_3__.ValidatorService.emailValidator])],
      mobile_number: ['', this.signUpConfig['Phone_Number'] === 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(this.phoneNumCount), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(this.phoneNumCount)]) : _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(this.phoneNumCount), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(this.phoneNumCount)])],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(8)])],
      password_confirmation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])],
      dob: ['', this.signUpConfig['DOB'] === 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]) : []],
      sex: ['Mr', this.signUpConfig['Title'] === 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]) : []],
      referal_code: ['']
    });
    this.setupShyamoliSubscriptions();
  }
  signup(buttonType) {
    if (buttonType == 'sign-up') {
      if (this.loginType == 'Forced Signup with OTP Login' && this.forced_signup_with_otp_login_for_m_site == true || this.metaData.msiteFolder == 'ourbustheme') {
        this.showSignupError = false;
        this.signupErrorMessage = null;
        if (this.isValid()) {
          if (this.isConfirmPasswordValid()) {
            this.isSubmitting = true;
            this.loader.showLoadingDefault();
            // this.commonService.gTrack("signup")
            let user = {};
            user = {
              "email": this.signupForm.value.email,
              "password": this.signupForm.value.password,
              "password_confirmation": this.signupForm.value.password_confirmation,
              "first_name": this.signupForm.value.full_name,
              "title": this.signupForm.value.sex,
              "last_name": this.signupForm.value.last_name,
              "mobile_number": this.signupForm.value.mobile_number ? this.signupForm.value.mobile_number : this.forcedLoginOtp.MobileNumber,
              "dob": this.signupForm.value.dob,
              "otp_key": this.forcedLoginOtp.otpKey,
              "otp": this.forcedLoginOtp.otp,
              "address": this.signupForm.value.address,
              "emergency_phone": "",
              "nationality_id": "",
              "state_code": "",
              "city_id": "",
              "id_card_details": {
                "id_card_id": 0,
                "id_card_number": "",
                "id_card_type": ""
              }
            };
            let signUpdata = {};
            signUpdata = {
              "user": user,
              "is_mobile": true
            };
            let referalCode;
            if (this.forcedLoginOtp.referalCode && this.forcedLoginOtp.referalCode != null) {
              referalCode = this.forcedLoginOtp.referalCode;
            } else {
              referalCode = this.signupForm.value.referal_code ? this.signupForm.value.referal_code : '';
            }
            this.authenticationService.signup(signUpdata, referalCode).subscribe(result => {
              this.loader.hideLoadingDefault();
              try {
                if (result.success === true) {
                  this.authenticationService.login(this.signupForm.value.email, this.signupForm.value.password).subscribe(result => {
                    this.isSubmitting = false;
                    if (this.metaData.msiteFolder == 'ourbustheme') {
                      this.onUserLogin(result.body.customer.first_name, result.body.customer.last_name, result.body.customer.email, result.body.customer.mobile_number);
                    }
                    this.globalData.IS_GST = false;
                    this.loader.hideLoadingDefault();
                    if (result.success === true) {
                      // this.commonService.gTrack('login', 'Login successful');
                      this.util.showToast('Login Success', 'center');
                      this.apiFactory.getMetaAppData().subscribe(loginResponse => {
                        if (!loginResponse.code) {
                          let localData = this.appData.isANDROID ? loginResponse === null || loginResponse === void 0 ? void 0 : loginResponse.result[0] : loginResponse[0];
                          this.commonService.setMetaApp(localData);
                        }
                      });
                      if (this.metaData.msiteFolder == 'ourbustheme') {
                        this.router.navigate(['home']).then(() => {
                          window.location.reload();
                        });
                      } else {
                        this.navCtrl.navigateRoot('tabs/home');
                      }
                    } else {
                      // this.commonService.gTrack('login', 'Login failed');
                      this.util.showAlertMessage('', result.body.message);
                      this.showError(result.body.message);
                    }
                  }, error => {
                    this.isSubmitting = false;
                    // this.commonService.gTrack('login', 'Login failed');
                    this.loader.hideLoadingDefault();
                    this.util.showAlertMessage("Failed", "Login failed try again later");
                    this.ex.call('LoginPage', 'Login()', error);
                  });
                } else {
                  this.isSubmitting = false;
                  this.util.showAlertMessage('FAILED', result.body.message);
                }
              } catch (e) {
                this.isSubmitting = false;
              }
            }, error => {
              this.isSubmitting = false;
              this.loader.hideLoadingDefault();
              this.util.showAlertMessage('FAILED', 'CANNOT_SIGNUP_TRY_LATER');
              this.ex.call('LoginPage', 'Login()', error);
            });
          }
        }
      } else {
        var _this$signupForm;
        this.showSignupError = false;
        this.signupErrorMessage = null;
        const fullName = ((_this$signupForm = this.signupForm) === null || _this$signupForm === void 0 || (_this$signupForm = _this$signupForm.value) === null || _this$signupForm === void 0 || (_this$signupForm = _this$signupForm.full_name) === null || _this$signupForm === void 0 ? void 0 : _this$signupForm.trim()) || '';
        const nameParts = fullName.split(/\s+/);
        if (this.isValid()) {
          if (this.isConfirmPasswordValid()) {
            var _this$signupForm2, _this$signupForm3;
            this.isSubmitting = true;
            this.loader.showLoadingDefault();
            // this.commonService.gTrack("signup")
            let user = {};
            user = {
              "email": this.signupForm.value.email,
              "password": this.signupForm.value.password,
              "password_confirmation": this.signupForm.value.password_confirmation,
              "first_name": ((_this$signupForm2 = this.signupForm) === null || _this$signupForm2 === void 0 || (_this$signupForm2 = _this$signupForm2.value) === null || _this$signupForm2 === void 0 ? void 0 : _this$signupForm2.first_name) || nameParts[0] || '',
              "title": this.signupForm.value.sex,
              "last_name": ((_this$signupForm3 = this.signupForm) === null || _this$signupForm3 === void 0 || (_this$signupForm3 = _this$signupForm3.value) === null || _this$signupForm3 === void 0 ? void 0 : _this$signupForm3.last_name) || nameParts.slice(1).join(' ') || '',
              "mobile_number": this.signupForm.value.mobile_number ? this.signupForm.value.mobile_number : this.forcedLoginOtp.MobileNumber,
              "dob": this.signupForm.value.dob,
              "address": this.signupForm.value.address
            };
            let signUpdata = {};
            signUpdata = {
              "user": user
            };
            let referalCodee;
            if (this.commonStorage.localGet('sign-otp')) {
              if (this.forcedLoginOtp.referalCode && this.forcedLoginOtp.referalCode != null) {
                referalCodee = this.forcedLoginOtp.referalCode;
                referalCodee = this.forcedLoginOtp.referalCode ? this.forcedLoginOtp.referalCode : '';
              } else {
                referalCodee = this.signupForm.value.referal_code ? this.signupForm.value.referal_code : '';
              }
            } else {
              referalCodee = this.signupForm.value.referal_code ? this.signupForm.value.referal_code : '';
            }
            this.authenticationService.signup(signUpdata, referalCodee).subscribe(result => {
              this.isSubmitting = false;
              this.loader.hideLoadingDefault();
              try {
                if (result.success === true) {
                  if (this.metaData.msiteFolder == 'ourbustheme') {
                    this.onUserLogin(result.body.customer.first_name, result.body.customer.last_name, result.body.customer.email, result.body.customer.mobile_number);
                  }
                  this.showAlert('SIGNUP SUCCESS', result.body.message);
                } else {
                  this.util.showAlertMessage('FAILED', result.body.message);
                }
              } catch (e) {}
            }, error => {
              this.isSubmitting = false;
              this.loader.hideLoadingDefault();
              this.util.showAlertMessage('FAILED', 'CANNOT_SIGNUP_TRY_LATER');
              this.ex.call('LoginPage', 'Login()', error);
            });
          }
        }
      }
    }
    if (buttonType == 'skip') {
      this.showSignupError = false;
      this.signupErrorMessage = null;
      this.password = this.makeid(8);
      if (this.metaData.msiteFolder == 'ourbustheme') {
        this.email = 'test' + this.password + '@ourbus-tmp.in';
      } else {
        this.email = 'test' + this.password + '@ticketsimply-tmp.com';
      }
      this.loader.showLoadingDefault();
      // this.commonService.gTrack("signup")
      let user = {};
      user = {
        "email": this.email,
        "password": this.password,
        "password_confirmation": this.password,
        "first_name": 'xxx',
        "title": this.signupForm.value.sex,
        "last_name": '',
        "mobile_number": this.signupForm.value.mobile_number ? this.signupForm.value.mobile_number : this.forcedLoginOtp.MobileNumber,
        "dob": '',
        "otp_key": this.forcedLoginOtp.otpKey,
        "otp": this.forcedLoginOtp.otp,
        "emergency_phone": "",
        "nationality_id": "",
        "state_code": "",
        "city_id": "",
        "id_card_details": {
          "id_card_id": 0,
          "id_card_number": "",
          "id_card_type": ""
        }
      };
      let signUpdata = {};
      signUpdata = {
        "user": user,
        "is_mobile": true
      };
      let referalCode;
      if (this.forcedLoginOtp.referalCode && this.forcedLoginOtp.referalCode != null) {
        referalCode = this.forcedLoginOtp.referalCode;
      } else {
        referalCode = this.signupForm.value.referal_code;
      }
      this.authenticationService.signup(signUpdata, referalCode).subscribe(result => {
        this.loader.hideLoadingDefault();
        try {
          if (result.success === true) {
            if (this.metaData.msiteFolder == 'ourbustheme') {
              this.onUserLogin(result.body.customer.first_name, result.body.customer.last_name, '', result.body.customer.mobile_number);
            }
            this.authenticationService.login(this.email, this.password).subscribe(result => {
              this.globalData.IS_GST = false;
              this.loader.hideLoadingDefault();
              if (result.success === true) {
                // this.commonService.gTrack('login', 'Login successful');
                this.util.showToast('Login Success', 'center');
                this.apiFactory.getMetaAppData().subscribe(loginResponse => {
                  if (!loginResponse.code) {
                    let localData = this.appData.isANDROID ? loginResponse === null || loginResponse === void 0 ? void 0 : loginResponse.result[0] : loginResponse[0];
                    this.commonService.setMetaApp(localData);
                  }
                });
                if (this.metaData.msiteFolder == 'ourbustheme') {
                  this.router.navigate(['home']).then(() => {
                    window.location.reload();
                  });
                } else {
                  this.navCtrl.navigateRoot('tabs/home');
                }
              } else {
                this.util.showAlertMessage('', result.body.message);
                this.showError(result.body.message);
              }
            }, error => {
              // this.commonService.gTrack('login', 'Login failed');
              this.loader.hideLoadingDefault();
              this.util.showAlertMessage("Failed", "Login failed try again later");
              this.ex.call('LoginPage', 'Login()', error);
            });
          } else {
            this.util.showAlertMessage('FAILED', result.body.message);
          }
        } catch (e) {}
      }, error => {
        this.loader.hideLoadingDefault();
        this.util.showAlertMessage('FAILED', 'CANNOT_SIGNUP_TRY_LATER');
        this.ex.call('LoginPage', 'Login()', error);
      });
      // }
      // }
    }
  }
  makeid(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }
  showAlert(title, msg) {
    var _this2 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertCtrl.create({
        header: title,
        message: msg,
        buttons: [{
          text: 'OK',
          handler: data => {
            if (_this2.loginType != 'Forced Signup with OTP Login') {
              _this2.navCtrl.navigateForward('login');
            } else {
              _this2.authenticationService.login(_this2.signupForm.value.email, _this2.signupForm.value.password).subscribe(result => {
                _this2.globalData.IS_GST = false;
                _this2.loader.hideLoadingDefault();
                if (result.success === true) {
                  // this.commonService.gTrack('login', 'Login successful');
                  _this2.util.showToast('Login Success', 'center');
                  _this2.apiFactory.getMetaAppData().subscribe(loginResponse => {
                    if (!loginResponse.code) {
                      let localData = _this2.appData.isANDROID ? loginResponse === null || loginResponse === void 0 ? void 0 : loginResponse.result[0] : loginResponse[0];
                      _this2.commonService.setMetaApp(localData);
                    }
                  });
                  _this2.navCtrl.navigateRoot('tabs/home');
                } else {
                  // this.commonService.gTrack('login', 'Login failed');
                  _this2.util.showAlertMessage('', result.body.message);
                  // login failed
                  _this2.showError(result.body.message);
                }
              }, error => {
                // this.commonService.gTrack('login', 'Login failed');
                _this2.loader.hideLoadingDefault();
                _this2.util.showAlertMessage("Failed", "Login failed try again later");
                _this2.ex.call('LoginPage', 'Login()', error);
              });
            }
          }
        }]
      });
      const alertElement = document.querySelector('.alert-message');
      if (alertElement && alert.message) {
        alertElement.innerHTML = alert.message.toString();
      }
      yield alert.present();
    })();
  }
  isValid() {
    var _this$signupForm$cont, _this$signupForm$cont2, _this$signupForm$cont3;
    if (this.signupForm.valid) {
      return true;
    }
    this.errors = true;
    if (!this.signupForm.value.otp) {
      // this.util.showToast('Please enter OTP')
    }
    // Skip first/last name checks for Shyamoli minimal form (controls removed)
    if (this.signupForm.get('first_name') && this.isNameValid()) {
      return false;
    }
    if (this.signupForm.get('last_name') && this.signupForm.controls.last_name.invalid) {
      this.showError("Please enter last name");
      return false;
    }
    if (this.isEmailValid()) {
      return false;
    }
    if (this.isPhoneValid()) {
      return false;
    }
    if (!this.isPasswordValid()) {
      return false;
    }
    if (!this.isConfirmPasswordValid()) {
      return false;
    }
    if (this.signupForm.get('dob') && (_this$signupForm$cont = this.signupForm.controls) !== null && _this$signupForm$cont !== void 0 && (_this$signupForm$cont = _this$signupForm$cont.dob) !== null && _this$signupForm$cont !== void 0 && _this$signupForm$cont.invalid) {
      this.showError("Please select date of birth");
      return false;
    }
    if ((_this$signupForm$cont2 = this.signupForm.controls) !== null && _this$signupForm$cont2 !== void 0 && (_this$signupForm$cont2 = _this$signupForm$cont2.sex) !== null && _this$signupForm$cont2 !== void 0 && _this$signupForm$cont2.invalid) {
      this.showError("Please select gender");
      return false;
    }
    if (this.signupForm.get('address') && (_this$signupForm$cont3 = this.signupForm.controls) !== null && _this$signupForm$cont3 !== void 0 && (_this$signupForm$cont3 = _this$signupForm$cont3.address) !== null && _this$signupForm$cont3 !== void 0 && _this$signupForm$cont3.invalid) {
      this.showError("Please enter address");
      return false;
    }
    return true;
  }
  isConfirmPasswordValid() {
    if (this.signupForm.value.password != this.signupForm.value.password_confirmation) {
      this.showError("Password and confirm password not matching");
      let elem = document.querySelector('.signup-confirm ion-input.ng-invalid input');
      if (elem) {
        elem.focus();
      }
      return false;
    }
    return true;
  }
  /**
   * method to check is email valid
   */
  enforceMaxLength(event) {
    const input = event.target;
    let sanitizedValue = input.value.replace(/[^0-9]/g, '');
    sanitizedValue = sanitizedValue.slice(0, 10);
    input.value = sanitizedValue;
  }
  isEmailValid() {
    if (this.signupForm.controls.email.invalid) {
      this.showError("Please enter valid Email.");
      let elem = document.querySelector('.signup-email ion-input.ng-invalid input');
      if (elem) {
        elem.focus();
      }
      return true;
    }
    return;
  }
  isPasswordValid() {
    if (this.signupForm.value.password.length < 8) {
      this.showError("Password should be min 8 characters");
      let elem = document.querySelector('.signup-password ion-input.ng-invalid input');
      if (elem) {
        elem.focus();
      }
      return false;
    }
    return true;
  }
  isNameValid() {
    if (this.signupForm.controls.first_name.invalid) {
      this.showError('Please enter your Name');
      let elem = document.querySelector('.signup-name ion-input.ng-invalid input');
      if (elem) {
        elem.focus();
      }
      return true;
    }
    return;
  }
  isOtpValid() {
    if (this.signupForm.controls.otp.invalid) {
      this.showError("Please enter the OTP");
      let elem = document.querySelector('.signup-name ion-input.ng-invalid input');
      if (elem) {
        elem.focus();
      }
      return true;
    }
    return;
  }
  isPhoneValid() {
    if (!this.signupForm.value.mobile_number || this.signupForm.value.mobile_number.toString().length != this.phoneNumCount || !this.signupForm.value.mobile_number) {
      this.showError("Please enter your " + this.phoneNumCount + " digit mobile number");
      let elem = document.querySelector('.signup-mobile_number ion-input.ng-invalid input');
      if (elem) {
        elem.focus();
      }
      return true;
    }
    return;
  }
  showError(msg) {
    this.errors = true;
    this.showSignupError = true;
    this.signupErrorMessage = msg;
    this.util.showToast(msg);
  }
  // onInputChange(ev : any) {
  //   this.showSignupError = false;
  //   this.signupErrorMessage = null;
  // let mob: string = this.signupForm.value.mobile_number && this.signupForm.value.mobile_number.toString() !== '' ? this.signupForm.value.mobile_number.toString() :
  //               (this.forcedLoginOtp && this.forcedLoginOtp.MobileNumber && this.forcedLoginOtp.MobileNumber !== '') ? this.forcedLoginOtp.MobileNumber : "";
  //   if (mob.length > this.phoneNumCount) {
  //     this.signupForm.controls['mobile_number'].setValue(mob.substr(0, this.phoneNumCount));
  //   }
  //   const trimmedValue = parseInt(mob, 10).toString();
  //   if (trimmedValue =='0') {
  //     this.signupForm.value = '';
  //     this.signupForm.controls['mobile_number'].setValue(this.signupForm.value);
  //     return;
  //   }
  // }
  onInputChange(ev) {
    var _this$metaData2;
    this.showSignupError = false;
    this.signupErrorMessage = null;
    let mob = this.signupForm.value.mobile_number && this.signupForm.value.mobile_number.toString() !== '' ? this.signupForm.value.mobile_number.toString() : this.forcedLoginOtp && this.forcedLoginOtp.MobileNumber && this.forcedLoginOtp.MobileNumber !== '' ? this.forcedLoginOtp.MobileNumber : "";
    if (((_this$metaData2 = this.metaData) === null || _this$metaData2 === void 0 ? void 0 : _this$metaData2.msiteFolder) === 'cbustheme') {
      mob = mob.replace(/[^0-9]/g, '');
    }
    if (mob.length > this.phoneNumCount) {
      mob = mob.substr(0, this.phoneNumCount);
    }
    this.signupForm.controls['mobile_number'].setValue(mob);
    if (mob === '' || mob === '0') {
      this.signupForm.controls['mobile_number'].setValue('');
      return;
    }
  }
  onInputNumber(ev) {
    this.showSignupError = false;
    this.signupErrorMessage = null;
    let mob = this.otpForm.value.mobile_number.toString();
    if (mob.length > this.phoneNumCount) {
      this.otpForm.controls['mobile_number'].setValue(mob.substr(0, this.phoneNumCount));
    }
  }
  gotoLogin() {
    this.navCtrl.navigateForward('login');
  }
  MonthAsString(monthIndex) {
    var d = new Date();
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    return month[monthIndex];
  }
  dateDisplayData(aryDates) {
    this.mineDisplaydate.splice(0, this.mineDisplaydate.length);
    for (let i = 0; i < aryDates.length; ++i) {
      const date = aryDates[i].split('+$+');
      const displaydt = {
        "date": date[0],
        "year": date[1],
        "month": date[2],
        "day": date[3]
      };
      this.mineDisplaydate.push(displaydt);
    }
    this.mineDisplaydate;
  }
  displayMybookings(date, type) {
    if (Array.isArray(date)) {
      date = date[0];
    }
    if (!date) {
      return;
    }
    date = String(date).substring(0, 10);
    var newDate = new Date(date);
    if (isNaN(newDate.getTime())) {
      return;
    }
    if (type == 1 || type == 2) {
      this.pageDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(newDate, 'yyyy-MM-dd');
      if (this.metaData.msiteFolder == 'ourbustheme') {
        this.showDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(newDate, 'dd/MM/yyyy');
      } else {
        this.showDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(newDate, 'dd-MM-yyyy');
      }
      var aryDates = this.GetDatesPro(newDate, 6);
      this.signupForm.controls['dob'].setValue(this.showDate);
      this.dateDisplayData(aryDates);
    }
  }
  GetDatesPro(startDate, daysToAdd) {
    var aryDates = [];
    for (var i = 0; i <= daysToAdd; i++) {
      var currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      aryDates.push(this.MonthAsString(currentDate.getMonth()) + " " + currentDate.getDate() + " " + this.DayAsString(currentDate.getDay()) + "+$+" + currentDate.getFullYear() + "+$+" + ('0' + (currentDate.getMonth() + 1)).slice(-2) + "+$+" + ('0' + currentDate.getDate()).slice(-2));
    }
    return aryDates;
  }
  DayAsString(dayIndex) {
    var weekdays = new Array(7);
    weekdays[0] = "Sun";
    weekdays[1] = "Mon";
    weekdays[2] = "Tue";
    weekdays[3] = "Wed";
    weekdays[4] = "Thu";
    weekdays[5] = "Fri";
    weekdays[6] = "Sat";
    return weekdays[dayIndex];
  }
  showPassword() {
    this.showpass = !this.showpass;
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
  cfmshowPassword() {
    this.cfmpasswordFieldType = this.cfmpasswordFieldType === 'password' ? 'text' : 'password';
    this.cfmshowpass = !this.cfmshowpass;
  }
  togglePasswordVisibility1() {
    this.showpass = !this.showpass;
  }
  toggleCnfPasswordVisibility() {
    this.cfmshowpass = !this.cfmshowpass;
  }
  setupShyamoliSubscriptions() {
    // Only apply for shyamoli theme (avoid overhead on other themes)
    if (!this.metaData || this.metaData.msiteFolder !== 'shyamolitheme' || !this.signupForm) return;
    const pwdCtrl = this.signupForm.get('password');
    const cfmCtrl = this.signupForm.get('password_confirmation');
    if (pwdCtrl) {
      pwdCtrl.valueChanges.subscribe(val => {
        this.shyamoliPasswordTick = !!val && val.length >= 8; // requirement: min 8 chars
        this.updatePasswordMatch();
      });
    }
    if (cfmCtrl) {
      cfmCtrl.valueChanges.subscribe(() => {
        this.updatePasswordMatch();
      });
    }
  }
  updatePasswordMatch() {
    var _this$signupForm4, _this$signupForm5;
    const pwd = (_this$signupForm4 = this.signupForm) === null || _this$signupForm4 === void 0 || (_this$signupForm4 = _this$signupForm4.value) === null || _this$signupForm4 === void 0 ? void 0 : _this$signupForm4.password;
    const cfm = (_this$signupForm5 = this.signupForm) === null || _this$signupForm5 === void 0 || (_this$signupForm5 = _this$signupForm5.value) === null || _this$signupForm5 === void 0 ? void 0 : _this$signupForm5.password_confirmation;
    this.shyamoliPasswordsMatch = pwd && cfm ? pwd === cfm : true;
  }
  togglePasswordVisibility(field) {
    if (field === 'password') {
      this.isPasswordVisible = !this.isPasswordVisible; // Toggle password visibility
    } else if (field === 'confirmPassword') {
      this.isConfirmPasswordVisible = !this.isConfirmPasswordVisible; // Toggle confirm password visibility
    }
  }
  onDateSelected(event) {
    let dateObj = new Date(event.detail.value);
    const result = this.dateService.formattedDateData(dateObj);
    this.showDate = result.formattedBirthDate;
  }
  onPasswordToggle() {
    this.showPassword1 = !this.showPassword1;
  }
  onPasswordToggle1() {
    this.showconfirmPassword = !this.showconfirmPassword;
  }
  validateDateOfBirth(event) {
    var _this3 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let dateObj = new Date(event.detail.value);
      const result = _this3.dateService.formattedDateData(dateObj);
      _this3.showDate = result.formattedBirthDate;
      const minAge = 12;
      const maxAge = 120;
      const isValidAge = _this3.dateService.isAgeWithinRange(_this3.showDate, minAge, maxAge);
      if (!isValidAge) {
        const toast = yield _this3.toastController.create({
          message: `Age must be between ${minAge} and ${maxAge} years.`,
          duration: 3000,
          position: 'bottom',
          color: 'danger'
        });
        yield toast.present();
      }
    })();
  }
  onUserLogin(fname, lname, email, mobile_number) {
    if (this.appData.isIOS) {
      const profile = {
        First_Name: fname,
        Last_Name: lname,
        Email: email,
        Phone: "+91" + mobile_number,
        lifetime_trip_count: "",
        supersaver_active: "",
        supersaver_type: "",
        supersaver_expiry_date: "",
        ota_converted: ""
      };
      this.util.cleverTapEvent("", profile, true);
    }
  }
  openCalendar() {
    if (this.isCalenderOpen) {
      return;
    }
    this.isCalenderOpen = true;
  }
}
_SignUpPage = SignUpPage;
_SignUpPage.ɵfac = function SignUpPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignUpPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_7__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_8__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_9__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_exception__WEBPACK_IMPORTED_MODULE_10__.ExceptionProvider), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_11__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_12__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_13__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_16__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_global_data_service__WEBPACK_IMPORTED_MODULE_18__.GlobalDataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_authentication__WEBPACK_IMPORTED_MODULE_19__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_20__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ToastController));
};
_SignUpPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _SignUpPage,
  selectors: [["app-sign-up"]],
  standalone: false,
  decls: 6,
  vars: 6,
  consts: [[4, "ngIf"], ["title", "Customer Login", "subtitle", "", "showsubTxt", "false", "showsubtitle", "false"], [3, "ngClass"], [1, "themeone-bg-content", "theme1", 2, "position", "absolute", "z-index", "8888", "top", "86px", "--background", "transparent"], [1, "themeone-center", "themeone-middle", 2, "padding-bottom", "89px"], ["novalidate", "", 2, "padding-bottom", "0px", "overflow-y", "scroll", 3, "ngSubmit", "formGroup"], ["class", "login-btn1", 3, "click", 4, "ngIf"], [1, "themeone-ion-item", 2, "margin-bottom", "0px"], ["type", "text", "placeholder", "First Name", "formControlName", "first_name", "autocomplete", "off", 3, "keyup"], ["slot", "start", "src", "./assets/icon/user-3-line.svg", 2, "height", "24px", "width", "24px", "position", "absolute", "z-index", "11", "left", "10px"], [1, "themeone-ion-item"], ["type", "text", "placeholder", "Last Name", "formControlName", "last_name", "autocomplete", "off", 3, "keyup"], [1, "themeone-ion-item-autofill", 2, "margin-top", "0px"], ["type", "email", "placeholder", "Email address", "formControlName", "email", "autocomplete", "off", 3, "keyup"], ["slot", "start", "src", "./assets/icon/Contact.svg", 2, "height", "24px", "width", "24px", "position", "absolute", "z-index", "11", "left", "10px"], ["class", "themeone-ion-item", "style", "margin-bottom: 0px;", 4, "ngIf"], [1, "themeone-ion-item-autofill", 2, "margin-bottom", "0"], ["placeholder", "Password", "formControlName", "password", "autocomplete", "off", 3, "keyup", "type"], ["slot", "start", "src", "./assets/icon/lock-fill.svg", 2, "height", "24px", "width", "24px", "position", "absolute", "z-index", "11", "left", "10px"], ["slot", "end", "style", "height: 24px;width: 24px;position: absolute;\n                        z-index: 11;right: 10px;", "src", "./assets/icon/eye-off-line.svg", 3, "click", 4, "ngIf"], ["placeholder", "Confirm Password", "formControlName", "password_confirmation", "autocomplete", "off", 3, "keyup", "type"], ["slot", "end", "style", "height: 24px;width: 24px;position: absolute;\n                            z-index: 11;right: 10px;", "src", "./assets/icon/eye-off-line.svg", 3, "click", 4, "ngIf"], [1, "themeone-ion-item", 3, "click"], ["src", "./assets/icon/Calendar.svg", "alt", "", "slot", "start", 2, "height", "28px", "width", "28px", "position", "absolute", "z-index", "11", "left", "10px"], [2, "width", "100%", "padding-left", "10%"], [3, "dateSelected", "isOpenChange", "value", "max", "isOpen"], [2, "font-size", "14px", "color", "#999999", "padding-bottom", "10px"], [2, "padding-bottom", "5px"], ["formControlName", "sex", "mode", "md", 1, "tabs"], ["value", "Mr", 3, "ngClass"], ["value", "Ms"], ["class", "themeone-ion-item", 4, "ngIf"], ["mode", "md", "expand", "block", 3, "click", "ngClass"], ["style", "margin-top: 15px;", "class", "txt-ln2", 4, "ngIf"], [1, "login-btn1", 3, "click"], ["type", "tel", "placeholder", "Mobile Number", "formControlName", "mobile_number", 3, "keyup"], ["slot", "start", "src", "./assets/icon/phone-fill.svg", 2, "height", "24px", "width", "24px", "position", "absolute", "z-index", "11", "left", "10px"], ["slot", "end", "src", "./assets/icon/eye-off-line.svg", 2, "height", "24px", "width", "24px", "position", "absolute", "z-index", "11", "right", "10px", 3, "click"], ["type", "text", "placeholder", "Referral Code (Optional)", "formControlName", "referal_code"], [1, "txt-ln2", 2, "margin-top", "15px"], [1, "themeone-frgt-pw"], [3, "click", "ngClass"], [1, "background-cl"], ["mode", "md", 1, "background-cl"], ["slot", "start"], [2, "color", "var(--viewBgColor)", 3, "click"], ["class", "title-main-wthlogin", 4, "ngIf"], ["alt", "", 1, "icn-main-wthtlogin", 3, "src"], [1, "bg-content"], ["class", "card-1", 4, "ngIf"], [1, "center-div"], [1, "no-service"], ["novalidate", "", 2, "padding-bottom", "50px", "overflow-y", "scroll", 3, "ngSubmit", "formGroup"], ["style", "min-height: 0px; margin-bottom: 10px;", 4, "ngIf"], [2, "min-height", "0px", "margin-bottom", "10px"], ["label", "Password", "labelPlacement", "floating", "formControlName", "password", "autocomplete", "off", 1, "txt-lbl", 2, "background", "transparent", "min-height", "48px", 3, "keyup", "type"], ["slot", "end", 1, "eye_icon", 3, "click", "name"], ["label", "Confirm Password", "labelPlacement", "floating", "formControlName", "password_confirmation", "autocomplete", "off", 1, "txt-lbl", 2, "min-height", "48px", 3, "keyup", "type"], ["style", "min-height: 0px; margin-bottom: 10px;", 3, "click", 4, "ngIf"], ["expand", "block", 1, "login-btn", 2, "margin-top", "30px", 3, "click"], [1, "title-main-wthlogin"], [1, "card-1"], [1, "txt-ln2"], [1, "frgt-pw", 2, "margin", "10px"], [1, "click-btn", 3, "click"], ["labelPlacement", "floating", "type", "text", "formControlName", "first_name", "autocomplete", "off", 1, "txt-lbl", 2, "min-height", "48px"], ["slot", "label"], ["color", "danger", 4, "ngIf"], ["color", "danger"], ["labelPlacement", "floating", "type", "text", "formControlName", "last_name", "autocomplete", "off", 1, "txt-lbl", 2, "min-height", "48px", 3, "keyup"], ["labelPlacement", "floating", "type", "email", "formControlName", "email", "autocomplete", "off", 1, "txt-lbl", 2, "min-height", "48px", 3, "keyup"], ["class", "mandatory_star", 4, "ngIf"], [1, "mandatory_star"], ["labelPlacement", "floating", "type", "number", "formControlName", "mobile_number", 1, "txt-lbl", 2, "min-height", "48px", 3, "keyup"], ["labelPlacement", "floating", "type", "number", "formControlName", "mobile_number", "readonly", "", 1, "txt-lbl", 2, "min-height", "48px", 3, "keyup", "ngModelChange", "ngModel"], [2, "min-height", "0px", "margin-bottom", "10px", 3, "click"], ["src", "./assets/icon/Calendar.svg", "alt", "", "slot", "end"], [1, "txt-lbl", 2, "width", "100%", "min-height", "48px"], [2, "font-size", "12px"], [2, "font-size", "14px"], [1, "txt-lbl"], [1, "seg-btn"], ["formControlName", "sex", 1, "tabs"], ["value", "Mr"], ["labelPlacement", "floating", "type", "text", "formControlName", "address", "autocomplete", "off", 1, "txt-lbl", 2, "min-height", "48px", 3, "keyup"], ["label", "Referral Code (Optional)", "labelPlacement", "floating", "type", "text", "formControlName", "referal_code", 1, "txt-lbl", 2, "min-height", "48px"], [1, "ourbustheme"], ["mode", "md", 1, "high-1"], ["size", "2"], ["size", "8", 2, "display", "flex", "align-items", "center"], [2, "text-align", "center", "font-size", "19px"], [1, "ourbustheme", 2, "--background", "white"], ["style", "font-size: 14px; top: 73px; right: 18px;color: var(--iconsAndButtonsColor);text-align: end;\n    margin-right: 8px;", 3, "click", 4, "ngIf"], [2, "margin-top", "24px"], ["size", "12"], ["lines", "none", "mode", "md", 1, "ourbus_custom_input"], ["label", "First Name", "labelPlacement", "floating", "fill", "outline", "type", "text", "maxlength", "25", "formControlName", "first_name", "autocomplete", "off", 1, "ourbus_inputText", "ourbus_labelSet", 3, "keyup"], ["label", "Last Name", "labelPlacement", "floating", "fill", "outline", "type", "text", "maxlength", "25", "formControlName", "last_name", "autocomplete", "off", 1, "ourbus_inputText", "ourbus_labelSet", 3, "keyup"], ["lines", "none", "size", "12"], ["mode", "md", 1, "ourbus_custom_input"], ["label", "Email Address", "labelPlacement", "floating", "fill", "outline", "type", "email", "maxlength", "50", "formControlName", "email", "autocomplete", "off", 1, "ourbus_inputText", "ourbus_labelSet", 3, "keyup"], ["label", "Password", "labelPlacement", "floating", "fill", "outline", "formControlName", "password", "autocomplete", "off", 1, "ourbus_inputText", "ourbus_labelSet", 3, "keyup", "type"], [1, "icondiv1", 3, "click"], [1, "iconeye12", 3, "name"], ["label", "Confirm Password", "labelPlacement", "floating", "fill", "outline", "type", "password", "formControlName", "password_confirmation", "autocomplete", "off", 1, "ourbus_inputText", "ourbus_labelSet", 3, "keyup", "type"], ["size", "6"], ["lines", "none", "mode", "md", "tappable", "", "id", "open-date-input-3", 1, "ourbus_custom_input"], ["src", "./assets/icon/Calendar copy.svg", "alt", "", "slot", "end"], ["label", "Date of birth", "labelPlacement", "floating", "fill", "outline", "type", "text", "formControlName", "dob", 1, "ourbus_inputText", "ourbus_labelSet", 3, "value"], ["trigger", "open-date-input-3", "modalClass", "ourbus-Modal", 3, "dateSelected", "value", "max"], ["mode", "ios", "formControlName", "sex", 2, "height", "60px"], ["value", "Mr", 1, "ourbus_segment"], ["expand", "block", 1, "login-btn", "ourbus_btn", 3, "click"], [2, "font-size", "14px", "top", "73px", "right", "18px", "color", "var(--iconsAndButtonsColor)", "text-align", "end", "margin-right", "8px", 3, "click"], ["label", "Mobile Number", "labelPlacement", "floating", "fill", "outline", "type", "tel", "maxlength", "10", "formControlName", "mobile_number", 1, "ourbus_inputText", "ourbus_labelSet", 3, "keyup", "ionChange"], ["label", "Mobile Number", "labelPlacement", "floating", "fill", "outline", "type", "tel", "maxlength", "10", "formControlName", "mobile_number", "readonly", "", 1, "ourbus_inputText", "ourbus_labelSet", 3, "keyup", "ionChange", "ngModelChange", "ngModel"], [1, "", 2, "--background", "#F1F7FA"], [1, "seabird_card_2"], ["novalidate", "", 2, "overflow-y", "scroll", 3, "ngSubmit", "formGroup"], ["lines", "none", 2, "font-size", "14px"], ["placeholder", "First name", "type", "text", "formControlName", "first_name", "autocomplete", "off", 3, "keyup"], ["placeholder", "Last name", "type", "text", "formControlName", "last_name", "autocomplete", "off", 3, "keyup"], ["placeholder", "Email address", "type", "email", "formControlName", "email", "autocomplete", "off", 3, "keyup"], ["lines", "none", "style", "font-size: 14px;", 4, "ngIf"], ["style", "font-size: 14px;", 4, "ngIf"], ["placeholder", "Password", "formControlName", "password", "autocomplete", "off", 3, "type"], ["slot", "end", 2, "cursor", "pointer", "color", "#999999", 3, "click", "name"], ["placeholder", "Confirm Password", "formControlName", "password_confirmation", "autocomplete", "off", 3, "type"], ["lines", "none", "tappable", "", "id", "open-date-input-5", 2, "font-size", "14px"], ["placeholder", "Date of birth", "type", "text", "formControlName", "dob", 3, "value"], ["slot", "end", 2, "display", "flex", "align-items", "center", "color", "#2B28CE"], ["name", "calendar-outline", 2, "margin-right", "4px"], ["trigger", "open-date-input-5", 3, "dateSelected", "value"], [1, "txt-lbl", 2, "color", "#7c7878"], ["mode", "md", "formControlName", "sex"], [1, "seabird_list"], ["lines", "none", 2, "--background", "#ffffff"], ["slot", "start", "value", "Mr", 1, "seabird_Radio_color"], ["slot", "start", "value", "Ms", 1, "seabird_Radio_color"], ["lines", "none", "style", "font-size: 14px;border-bottom: 0px;", 4, "ngIf"], ["expand", "block", 1, "seabird_login_btn", 3, "click"], ["class", "seabird_bottom_div", 4, "ngIf"], ["placeholder", "Mobile number", "type", "number", "formControlName", "mobile_number", 3, "keyup"], ["placeholder", "Mobile number", "type", "number", "formControlName", "mobile_number", "readonly", "", 3, "keyup", "ngModelChange", "ngModel"], ["lines", "none", 2, "font-size", "14px", "border-bottom", "0px"], ["placeholder", "Referral code (Optional)", "type", "text", "formControlName", "referal_code"], [1, "seabird_bottom_div"], [1, "click-btn", 2, "line-height", "0.54", 3, "click"], [1, "syamolitheme", "ion-no-border"], ["mode", "md", 1, "syamolitheme", "ion-no-border", 2, "--background", "white !important"], ["slot", "start", 2, "position", "absolute", "left", "0", "z-index", "10"], ["defaultHref", "login"], [2, "display", "flex", "align-items", "center", "justify-content", "center", "height", "100%"], ["alt", "Logo", 2, "height", "35px", "width", "auto", "object-fit", "contain", "image-rendering", "-webkit-optimize-contrast", 3, "src"], [1, "syamolitheme"], [1, "syamoli-center", 2, "font-family", "'Gilroy-Bold'"], [1, "syamoli-heading"], [1, "syamoli-form-block"], ["novalidate", "", 3, "ngSubmit", "formGroup"], ["lines", "none", 1, "syamoli-input"], ["slot", "start", "src", "./assets/icon/shyamoli-person.svg"], ["type", "text", "formControlName", "full_name", "autocomplete", "off", "placeholder", "Enter Full Name"], ["slot", "start", "src", "./assets/icon/shyamoli-mail.svg"], ["type", "email", "formControlName", "email", "autocomplete", "off", "placeholder", "Email"], ["slot", "start", "src", "./assets/icon/mobile-shyamoli.svg"], ["type", "tel", "formControlName", "mobile_number", "maxlength", "10", "placeholder", "Mobile Number", 3, "keyup"], ["slot", "start", "src", "./assets/icon/password-shyamoli.svg"], ["formControlName", "password", "placeholder", "Password", "autocomplete", "off", 3, "keyup", "type"], ["slot", "end", 2, "color", "#888888", 3, "click", "name"], ["formControlName", "password_confirmation", "placeholder", "Confirm Password", "autocomplete", "off", 2, "font-size", "13px", 3, "keyup", "type"], ["size", "12", "size-md", "6"], ["lines", "none", "tappable", "", "id", "open-date-input-5", 1, "syamoli-input"], ["slot", "start", "src", "./assets/icon/calendar-shyamoli.svg", 2, "color", "var(--syamoli-primary)"], ["type", "text", "formControlName", "dob", "placeholder", "Date of Birth", "readonly", "", 3, "value"], [1, "syamoli-gender-label"], ["formControlName", "sex", 1, "syamoli-radio-group"], [1, "syamoli-radio-container"], ["lines", "none", 1, "syamoli-radio-item"], ["mode", "md", "value", "Mr", "slot", "start", 1, "syamoli-radio"], ["mode", "md", "value", "Ms", "slot", "start", 1, "syamoli-radio"], ["class", "syamoli-input", "lines", "none", 4, "ngIf"], ["class", "syamoli-error-text", "role", "alert", "style", "margin-top:4px;", 4, "ngIf"], ["mode", "md", "expand", "block", 1, "syamoli-btn-primary", 2, "margin-top", "12px", 3, "click"], [1, "syamoli-text-secondary", 2, "margin-top", "60px", "font-size", "13px", "text-align", "center", "font-family", "'Gilroy-Bold',sans-serif"], [1, "syamoli-link", 2, "cursor", "pointer", 3, "click"], ["slot", "start", "src", "./assets/icon/refferal-shyamoli.svg", 2, "color", "var(--syamoli-primary)"], ["type", "text", "formControlName", "referal_code", "placeholder", "Referral Code (Optional)"], ["role", "alert", 1, "syamoli-error-text", 2, "margin-top", "4px"], [1, "sb-page-header"], [1, "sb-toolbar", "sb-auth-toolbar"], ["text", "", "icon", "./assets/seabird-new/back-arrow-navy.svg", "defaultHref", "/login", 1, "sb-auth-back"], ["class", "sb-auth-title", 4, "ngIf"], ["class", "sb-auth-header-logo", "slot", "end", "alt", "", 3, "src", 4, "ngIf"], [1, "sb-auth", "sb-auth--plain"], [1, "sb-auth__body"], ["novalidate", "", 1, "sb-pax-card", "sb-auth__card", 3, "ngSubmit", "formGroup"], ["type", "button", "class", "sb-auth__skip", 3, "click", 4, "ngIf"], [1, "sb-pfield"], [1, "sb-pfield__label"], ["placeholder", "Enter first name", "type", "text", "formControlName", "first_name", "autocomplete", "off", "aria-label", "First name", 1, "sb-pfield__input", 3, "keyup"], ["placeholder", "Enter last name", "type", "text", "formControlName", "last_name", "autocomplete", "off", "aria-label", "Last name", 1, "sb-pfield__input", 3, "keyup"], ["placeholder", "Enter email address", "type", "email", "formControlName", "email", "autocomplete", "off", "aria-label", "Email address", 1, "sb-pfield__input", 3, "keyup"], ["class", "sb-pfield", 4, "ngIf"], ["class", "sb-pfield sb-pfield--readonly", 4, "ngIf"], [1, "sb-pfield__row"], ["placeholder", "Enter password", "formControlName", "password", "autocomplete", "off", "aria-label", "Password", 1, "sb-pfield__input", 3, "type"], ["type", "button", 1, "sb-auth__icon", 3, "click"], ["aria-hidden", "true", 3, "name"], ["placeholder", "Re-enter password", "formControlName", "password_confirmation", "autocomplete", "off", "aria-label", "Confirm password", 1, "sb-pfield__input", 3, "type"], ["tappable", "", 1, "sb-pfield", "sb-auth__date", 3, "click"], ["role", "button", "tabindex", "0", "aria-label", "Date of birth", 1, "sb-pfield__input", 3, "click"], ["aria-hidden", "true", 1, "sb-auth__icon"], ["name", "calendar-outline"], [1, "sb-auth__gender"], ["formControlName", "sex", "aria-label", "Gender", 1, "sb-segment"], ["mode", "md", "value", "Mr", "labelPlacement", "end"], ["mode", "md", "value", "Ms", "labelPlacement", "end"], ["type", "submit", 1, "sb-btn-solid", "sb-auth__btn"], ["class", "sb-auth__link", 4, "ngIf"], [1, "sb-auth-title"], ["slot", "end", "alt", "", 1, "sb-auth-header-logo", 3, "src"], ["type", "button", 1, "sb-auth__skip", 3, "click"], ["placeholder", "Enter mobile number", "type", "number", "formControlName", "mobile_number", "aria-label", "Mobile number", 1, "sb-pfield__input", 3, "keyup"], [1, "sb-pfield", "sb-pfield--readonly"], ["placeholder", "Mobile number", "type", "number", "formControlName", "mobile_number", "readonly", "", "aria-label", "Mobile number", 1, "sb-pfield__input", 3, "keyup", "ngModelChange", "ngModel"], ["placeholder", "Enter referral code", "type", "text", "formControlName", "referal_code", "aria-label", "Referral code (optional)", 1, "sb-pfield__input"], [1, "sb-auth__link"], ["type", "button", 1, "sb-auth__link-btn", 3, "click"]],
  template: function SignUpPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, SignUpPage_ng_container_0_Template, 59, 23, "ng-container", 0)(1, SignUpPage_ng_container_1_Template, 38, 27, "ng-container", 0)(2, SignUpPage_ng_container_2_Template, 62, 14, "ng-container", 0)(3, SignUpPage_ng_container_3_Template, 56, 20, "ng-container", 0)(4, SignUpPage_ng_container_4_Template, 75, 32, "ng-container", 0)(5, SignUpPage_ng_container_5_Template, 65, 26, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme" || ctx.metaData.msiteFolder == "networktheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "shyamolitheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder === "seabirdThemeNew");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MaxLengthValidator, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonRadio, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonRadioGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonBackButton, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_22__.CommonHeaderComponent, _components_date_picker_modal_date_picker_modal_component__WEBPACK_IMPORTED_MODULE_23__.DatePickerModalComponent],
  styles: [".head[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  margin: 16px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #4a4a4a;\n}\n\nion-content[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  --ion-background-color: var(--viewBgColor);\n}\n\n.scroll-y[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\n\n.card-1[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  margin: 0;\n  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0px, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0;\n  border-radius: 0;\n  height: 44px;\n}\n\n.h50[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\n.bg-content[_ngcontent-%COMP%] {\n  --background: #f7f9fb;\n}\n.bg-content[_ngcontent-%COMP%]   .txt-ln2[_ngcontent-%COMP%] {\n  height: 44px;\n  width: 100%;\n  z-index: 5;\n  --background: white;\n  font-family: NotoSans;\n}\n\n.icn-main-wthtlogin[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  position: initial;\n  right: 0;\n  padding: 0;\n  width: 140px;\n  height: 40px;\n  top: 0;\n  float: right;\n  margin-right: 10px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\n.title-main-wthlogin[_ngcontent-%COMP%] {\n  margin: 9px 16px 0px -25px;\n  font-family: NotoSans;\n  font-size: 15px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  letter-spacing: normal;\n  display: inline-block;\n  color: var(--viewBgColor) !important;\n}\n\n.frgt-pw[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n  color: #3e3e52;\n}\n\n.click-btn[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: bold;\n  line-height: 1.54;\n  text-align: center;\n  color: var(--iconsAndButtonsColor);\n}\n\n.txt-lbl[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  color: #3e3e52;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --background: #f7f9fb;\n}\n\n.center-div[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  text-transform: initial;\n  --background:var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  bottom: 10px;\n  height: 50px;\n  border-radius: 4px;\n}\n\n.login-btn1[_ngcontent-%COMP%] {\n  text-transform: initial;\n  color: var(--iconsAndButtonsColor);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  position: fixed;\n  top: 62px;\n  right: 14px;\n  z-index: 200;\n}\n\n.seg-btn[_ngcontent-%COMP%] {\n  width: 196px;\n  margin: 0;\n  border-radius: 4px;\n  background-color: #eaeaea;\n}\n.seg-btn[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%] {\n  height: 24px;\n  border: 1px solid #eaeaea;\n  border-radius: 4px;\n}\n.seg-btn[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n  color: #9b9b9b;\n  min-height: 0px;\n  text-transform: capitalize;\n}\n.seg-btn[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%] {\n  color: var(--viewBgColor);\n  background-color: var(--iconsAndButtonsColor);\n  font-weight: bolder;\n}\n\n.img-icn[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 37px;\n  display: block;\n  \n\n  margin-right: 10px;\n  margin-bottom: 5px;\n}\n\nion-modal[_ngcontent-%COMP%] {\n  --width: 290px;\n  --height: 520px;\n  --border-radius: 8px;\n}\n\nion-modal[_ngcontent-%COMP%]   ion-datetime[_ngcontent-%COMP%] {\n  height: 520px;\n}\n\n.themeone-bg-content[_ngcontent-%COMP%] {\n  --background: #FFFFFF;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .seg-btn[_ngcontent-%COMP%] {\n  width: 196px;\n  margin: 0;\n  border-radius: 4px;\n  background-color: #eaeaea;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .seg-btn[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%] {\n  height: 34px;\n  border: 1px solid #19196E;\n  border-radius: 5px;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .seg-btn[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n  min-height: 0px;\n  text-transform: capitalize;\n  background-color: #FFFFFF;\n  color: #19196E;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .seg-btn[_ngcontent-%COMP%]   .segone[_ngcontent-%COMP%] {\n  border-right: 1px solid #19196E;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .seg-btn[_ngcontent-%COMP%]   .themeone_segone[_ngcontent-%COMP%] {\n  border-right: 1px solid #000;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .seg-btn[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%] {\n  color: #19196E;\n  background-color: #F2C21A;\n  font-weight: bolder;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-seg-btn[_ngcontent-%COMP%] {\n  width: 196px;\n  margin: 0;\n  border-radius: 4px;\n  background-color: #eaeaea;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-seg-btn[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%] {\n  height: 34px;\n  border: 1px solid #000;\n  border-radius: 5px;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-seg-btn[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n  min-height: 0px;\n  text-transform: capitalize;\n  background-color: #FFFFFF;\n  color: #000;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-seg-btn[_ngcontent-%COMP%]   .segone[_ngcontent-%COMP%] {\n  border-right: 1px solid #19196E;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-seg-btn[_ngcontent-%COMP%]   .themeone_segone[_ngcontent-%COMP%] {\n  border-right: 1px solid #000;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-seg-btn[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%] {\n  color: var(--viewBgColor);\n  background-color: var(--iconsAndButtonsColor);\n  font-weight: bolder;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-bg-page[_ngcontent-%COMP%] {\n  background: #191966;\n  height: -webkit-fill-available;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-center[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  padding: 1px 16px 16px 16px;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-sub-hd-txt[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #191966;\n  margin: 5% 0 5%;\n  text-align: center;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-sub-hd-txt-2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--primaryText);\n  margin: 5% 0 5%;\n  text-align: center;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-ion-item[_ngcontent-%COMP%] {\n  border: 1px #D9D9D9 solid;\n  --inner-border-width: 0;\n  border-radius: 10px;\n  --border-radius: 10px;\n  --border-width: 0px;\n  margin: 10px 0px;\n  color: #333333;\n  font-size: 14px;\n  --inner-padding-end: 0;\n  --padding-start: 0px;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --padding-start: 42px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  --border-radius: 10px;\n  font-family: \"roboto\";\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-ion-item[_ngcontent-%COMP%]   ion-datetime[_ngcontent-%COMP%] {\n  --padding-start: 42px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  --border-radius: 10px;\n  width: 100%;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-login-btn[_ngcontent-%COMP%] {\n  --background: #F2C21A;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 26px;\n  letter-spacing: -0.01em;\n  text-align: center;\n  --border-radius: 010px;\n  height: 50px;\n  color: #191966;\n  margin-top: 15px;\n  --box-shadow: none;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-login-btn-2[_ngcontent-%COMP%] {\n  --background: var(--iconsAndButtonsColor);\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 26px;\n  letter-spacing: -0.01em;\n  text-align: center;\n  --border-radius: 010px;\n  height: 50px;\n  color: var(--primaryText);\n  margin-top: 15px;\n  --box-shadow: none;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-otp-btn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 26px;\n  letter-spacing: -0.01em;\n  text-align: center;\n  --border-radius: 010px;\n  height: 50px;\n  color: #191966;\n  \n\n  \n\n  margin-top: 15px;\n  --border-color: #F2C21A;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-forget-pass[_ngcontent-%COMP%] {\n  color: #191966;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: -0.01em;\n  text-align: left;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-click-btn[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  text-align: center;\n  color: #F2C21A;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-click-btn-2[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  text-align: center;\n  color: var(--materialUiColor);\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-frgt-pw[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  text-align: center;\n  color: #1F1F1F;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .txt-ln2[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-ion-item-autofill[_ngcontent-%COMP%] {\n  --inner-border-width: 0;\n  border-radius: 10px;\n  --border-radius: 10px;\n  --border-width: 0px;\n  margin: 10px 0px;\n  color: #333333;\n  --inner-padding-end: 0;\n  --padding-start: 0px;\n  font-size: 14px;\n  border: 1px #D9D9D9 solid;\n}\n.themeone-bg-content[_ngcontent-%COMP%]   .themeone-ion-item-autofill[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --padding-start: 42px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  --border-radius: 10px;\n}\n\n.seabird_card_1[_ngcontent-%COMP%] {\n  border: 1px solid #626262;\n  --background: white;\n  margin: 16px;\n  border-radius: 10px;\n  padding: 12px;\n}\n\n.seabird_card_2[_ngcontent-%COMP%] {\n  margin: 16px;\n  border: 1px solid #626262;\n  --background:white;\n}\n\n.seabird_card_2[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > ion-item[_ngcontent-%COMP%] {\n  --background:transparent;\n  border-bottom: 1px solid #626262;\n}\n\n.seabird_login_btn[_ngcontent-%COMP%] {\n  text-transform: initial;\n  --background:var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  height: 44px;\n  border-radius: 4px;\n  width: 92%;\n  margin-left: 16px;\n  margin-top: 55px;\n  --border-radius:40px;\n}\n\n.seabird_list[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 0px;\n}\n\n.seabird_Radio_color[_ngcontent-%COMP%] {\n  margin: 2px !important;\n  --color-checked:var(--iconsAndButtonsColor) !important ;\n}\n\n.seabird_bottom_div[_ngcontent-%COMP%] {\n  text-align: center;\n  display: grid;\n  margin-top: 50px;\n}\n\n.ourbus_custom_input[_ngcontent-%COMP%] {\n  --highlight-color-focused: #D9D9D9;\n  --highlight-height: 1px;\n  --border-color: #D9D9D9;\n  --highlight-background: #D9D9D9;\n}\n.ourbus_custom_input[_ngcontent-%COMP%]   .ourbus_label_select[_ngcontent-%COMP%] {\n  position: absolute !important;\n}\n.ourbus_custom_input[_ngcontent-%COMP%]   .ourbus_ionselect_center[_ngcontent-%COMP%] {\n  margin-top: 17px !important;\n  padding-top: 0px !important;\n}\n\n.ourbus_labelSet[_ngcontent-%COMP%] {\n  color: #4e4e4e !important;\n}\n\n.ourbus_inputText[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #2D2D2D;\n}\n\n.ourbus_inputText_disable[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #747474;\n}\n\n.ourbus_custom_input_disable[_ngcontent-%COMP%] {\n  --highlight-color-focused: #747474;\n  --highlight-height: 1px;\n  --border-color: #747474;\n  --highlight-background: #efefef;\n  --background: #efefef;\n}\n\n.ourbustheme[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: #fff;\n}\n.ourbustheme[_ngcontent-%COMP%]   .dob_calender[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_segment[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .segment-button-checked[_ngcontent-%COMP%] {\n  --indicator-color: var(--iconsAndButtonsColor) !important;\n  --indicator-color-checked: transparent !important;\n  color: var(--primaryText);\n  margin: 8px !important;\n}\n\nion-modal#dob[_ngcontent-%COMP%] {\n  --width: 311px !important;\n  --height: 543px !important;\n  --border-radius: 8px !important;\n}\n\n.ourbus_btn[_ngcontent-%COMP%] {\n  font-size: 15px;\n  height: 55px;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n\n.iconeye12[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: -8px;\n  z-index: 99999999;\n  color: #696768;\n  font-size: 21px;\n  height: 25px;\n  width: 25px;\n  right: 12px;\n}\n\n.icondiv1[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-right: 41px;\n  z-index: 999999999;\n}\n\n[_nghost-%COMP%]     ion-datetime {\n  background: green;\n}\n\nion-modal[_ngcontent-%COMP%] {\n  --width: 350px;\n  --height: 580px;\n  --border-radius: 8px;\n}\n\nion-modal[_ngcontent-%COMP%]   ion-datetime[_ngcontent-%COMP%] {\n  height: 580px;\n}\n\nion-back-button[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.mandatory_star[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.eye_icon[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  position: absolute;\n  z-index: 11;\n  right: 10px;\n  bottom: 0px;\n}\n\n.custom-item[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.mandatory-star[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n  position: absolute;\n  top: 14px; \n\n  left: 85px; \n\n  font-size: 18px;\n}\n\n.theme1_bg_curved[_ngcontent-%COMP%] {\n  height: 100px;\n  background-color: var(--homeBgColor) !important;\n  color: #ffffff;\n}\n\n.cbus_bg_curved[_ngcontent-%COMP%] {\n  height: 100px;\n  background-color: #191966;\n  color: #ffffff;\n}\n\n.theme1[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  padding: 0 constant(safe-area-inset-right) constant(safe-area-inset-bottom) constant(safe-area-inset-left);\n  padding: 0 env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);\n}\n\n.background-cl[_ngcontent-%COMP%] {\n  color: var(--primary) !important;\n  --background: var(--primary) !important;\n}\n\n.syamolitheme[_ngcontent-%COMP%] {\n  --syamoli-primary: var(--iconsAndButtonsColor);\n  --syamoli-primary-light: #fff4f0;\n  --syamoli-text-primary: #1F2937;\n  --syamoli-text-secondary: #111111;\n  --syamoli-border: #a4a5a7;\n  --syamoli-error: #DC2626;\n  --syamoli-success: #059669;\n  --syamoli-focus-ring: 0 0 0 3px rgba(255,145,0,0.35);\n  background: #FFFFFF;\n}\n.syamolitheme[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --border-width: 0 !important;\n  border: none !important;\n  box-shadow: none !important;\n  border-bottom: none !important;\n}\n.syamolitheme[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border: none !important;\n  outline: none !important;\n  box-shadow: none !important;\n  display: block;\n}\n\n.syamoli-center[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 430px;\n  margin: 0 auto;\n  padding: 16px 12px 60px;\n}\n\n.syamoli-form-block[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  box-shadow: none;\n  padding: 8px 12px 28px;\n  border-radius: 0;\n}\n\n.syamoli-heading[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--syamoli-text-primary);\n  text-align: center;\n  margin-bottom: 0px;\n  margin-top: 8px;\n}\n\n@keyframes _ngcontent-%COMP%_syamoliCardFade {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.syamoli-input[_ngcontent-%COMP%] {\n  --inner-padding-end: 4px;\n  --inner-padding-start: 2px;\n  --padding-start: 4px;\n  --background: transparent;\n  margin-bottom: 4px;\n  border: 1px solid #D9D9D9;\n  border-radius: 10px;\n  font-size: 14px;\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.syamoli-input[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  --padding-end: -7px;\n}\n.syamoli-input[_ngcontent-%COMP%]   ion-icon[slot=start][_ngcontent-%COMP%] {\n  margin-left: 4px;\n  margin-right: 4px;\n  height: 18px;\n  width: 18px;\n}\n.syamoli-input[_ngcontent-%COMP%]   ion-icon[slot=end][_ngcontent-%COMP%] {\n  margin-right: 4px;\n  margin-left: 4px;\n  height: 18px;\n  width: 18px;\n}\n\nion-row[_ngcontent-%COMP%]:last-child   .syamoli-input[_ngcontent-%COMP%] {\n  margin-top: -4px;\n}\n\n.syamoli-input-focus[_ngcontent-%COMP%] {\n  border-color: var(--syamoli-primary);\n  box-shadow: var(--syamoli-focus-ring);\n}\n\n.syamoli-input-error[_ngcontent-%COMP%] {\n  border-color: var(--syamoli-error) !important;\n}\n\n.syamoli-helper[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6B7280;\n  margin-top: -8px;\n  margin-bottom: 10px;\n}\n\n.syamoli-error-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--syamoli-error);\n  font-weight: 600;\n}\n\n.syamoli-link[_ngcontent-%COMP%] {\n  color: var(--syamoli-primary);\n  font-weight: 600;\n}\n\n.syamoli-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.syamoli-text-secondary[_ngcontent-%COMP%] {\n  color: var(--syamoli-text-secondary);\n}\n\n.syamoli-btn-primary[_ngcontent-%COMP%] {\n  --background: var(--syamoli-primary);\n  --border-radius: 10px;\n  height: 50px;\n  font-weight: 600;\n  font-size: 15px;\n  text-transform: none;\n  margin-right: 4px;\n}\n\n.syamoli-btn-primary.is-loading[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\n.syamoli-btn-secondary[_ngcontent-%COMP%] {\n  --background: #000000;\n  --color: #ffffff;\n  --border-radius: 10px;\n  height: 50px;\n  font-weight: 600;\n  font-size: 15px;\n  text-transform: none;\n  margin-left: 4px;\n}\n\n.syamoli-btn-secondary.is-loading[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\n.syamoli-gender-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--syamoli-text-primary);\n  margin: -4px 0 6px 0;\n  text-align: left;\n}\n\n.syamoli-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.syamoli-radio-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  align-items: flex-start;\n  justify-content: flex-start;\n  margin-top: 2px;\n  margin-left: 0px;\n  padding-left: 0px;\n  width: 100%;\n}\n\n.syamoli-radio-item[_ngcontent-%COMP%] {\n  --background: transparent;\n  --padding-start: 0px;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  font-size: 14px;\n  --min-height: 32px;\n  margin: 0;\n  cursor: pointer;\n  flex: 0 0 auto;\n  padding-left: 0 !important;\n  margin-left: 0 !important;\n}\n\n.syamoli-radio-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--syamoli-text-primary);\n  margin-left: 8px;\n  padding-left: 0;\n}\n\n.syamoli-radio[_ngcontent-%COMP%] {\n  --color: #E5E7EB;\n  --color-checked: #FF8C00;\n  --border-radius: 50%;\n  --inner-border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-right: 4px;\n}\n\nion-segment.syamoli-segment[_ngcontent-%COMP%] {\n  --indicator-color: var(--syamoli-primary);\n}\n\n.syamoli-segment-buttons[_ngcontent-%COMP%] {\n  --indicator-color: transparent;\n  --background: transparent;\n  border: none;\n  padding: 0;\n  margin-top: 8px;\n}\n\n.syamoli-segment-btn[_ngcontent-%COMP%] {\n  --background: transparent;\n  --background-checked: var(--syamoli-primary);\n  --color: var(--syamoli-text-primary);\n  --color-checked: white;\n  --border-radius: 8px;\n  --border-width: 2px;\n  --border-color: var(--syamoli-border);\n  --border-style: solid;\n  font-size: 14px;\n  font-weight: 500;\n  height: 42px;\n  margin: 0 4px;\n  transition: all 0.2s ease;\n}\n\n.syamoli-segment-btn.segment-button-checked[_ngcontent-%COMP%] {\n  --border-color: var(--syamoli-primary);\n  --background: var(--syamoli-primary);\n  --color: white;\n  font-weight: 600;\n}\n\nion-segment-button[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\nion-segment-button.segment-button-checked[_ngcontent-%COMP%] {\n  color: var(--syamoli-primary);\n  font-weight: 600;\n}\n\n.eye_icon[_ngcontent-%COMP%] {\n  position: static;\n  margin-right: 4px;\n}\n\n@media (max-width: 480px) {\n  .syamoli-center[_ngcontent-%COMP%] {\n    padding: 24px 8px 48px;\n  }\n  .syamoli-form-block[_ngcontent-%COMP%] {\n    padding: 18px 8px 24px;\n  }\n}\n.custom-datetime[_ngcontent-%COMP%] {\n  --ion-color-base: var(--iconsAndButtonsColor) !important;\n}"]
});

/***/ }

}]);