"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[7603],{

/***/ 74570
/*!*******************************************************************!*\
  !*** ./src/app/personal-detail/personal-detail-routing.module.ts ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalDetailPageRoutingModule: () => (/* binding */ PersonalDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 49870);
/* harmony import */ var _personal_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personal-detail.page */ 68988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _PersonalDetailPageRoutingModule;




const routes = [{
  path: '',
  component: _personal_detail_page__WEBPACK_IMPORTED_MODULE_1__.PersonalDetailPage
}];
class PersonalDetailPageRoutingModule {}
_PersonalDetailPageRoutingModule = PersonalDetailPageRoutingModule;
_PersonalDetailPageRoutingModule.ɵfac = function PersonalDetailPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PersonalDetailPageRoutingModule)();
};
_PersonalDetailPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _PersonalDetailPageRoutingModule
});
_PersonalDetailPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PersonalDetailPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 67603
/*!***********************************************************!*\
  !*** ./src/app/personal-detail/personal-detail.module.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalDetailPageModule: () => (/* binding */ PersonalDetailPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _personal_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./personal-detail-routing.module */ 74570);
/* harmony import */ var _personal_detail_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./personal-detail.page */ 68988);
/* harmony import */ var _components_date_picker_modal_date_picker_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/date-picker-modal/date-picker-modal.component */ 51281);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 17705);
var _PersonalDetailPageModule;







class PersonalDetailPageModule {}
_PersonalDetailPageModule = PersonalDetailPageModule;
_PersonalDetailPageModule.ɵfac = function PersonalDetailPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PersonalDetailPageModule)();
};
_PersonalDetailPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _PersonalDetailPageModule
});
_PersonalDetailPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _personal_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__.PersonalDetailPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _components_date_picker_modal_date_picker_modal_component__WEBPACK_IMPORTED_MODULE_5__.DatePickerModalComponent]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PersonalDetailPageModule, {
    declarations: [_personal_detail_page__WEBPACK_IMPORTED_MODULE_4__.PersonalDetailPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _personal_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__.PersonalDetailPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _components_date_picker_modal_date_picker_modal_component__WEBPACK_IMPORTED_MODULE_5__.DatePickerModalComponent]
  });
})();

/***/ },

/***/ 68988
/*!*********************************************************!*\
  !*** ./src/app/personal-detail/personal-detail.page.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalDetailPage: () => (/* binding */ PersonalDetailPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 84692);
/* harmony import */ var _countries_countries_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../countries/countries.json */ 2660);
/* harmony import */ var _services_validator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/validator-service */ 1863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/authentication */ 82491);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 345);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 83087);
/* harmony import */ var _services_global_data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/global-data.service */ 7516);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 96048);
/* harmony import */ var _components_date_picker_modal_date_picker_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/date-picker-modal/date-picker-modal.component */ 51281);

var _PersonalDetailPage;




















const _c0 = () => ({
  "color": "#191966"
});
const _c1 = () => ({
  "color": "var(--iconsAndButtonsColor)"
});
const _c2 = () => ({
  reference: "trigger",
  side: "bottom",
  alignment: "center"
});
function PersonalDetailPage_ng_container_0_img_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 57);
  }
}
function PersonalDetailPage_ng_container_0_img_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 58);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.photo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function PersonalDetailPage_ng_container_0_img_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 59);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function PersonalDetailPage_ng_container_0_ion_item_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.emailfield);
  }
}
function PersonalDetailPage_ng_container_0_ion_item_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 26)(1, "ion-label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.emailfield);
  }
}
function PersonalDetailPage_ng_container_0_div_48_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_0_div_48_ion_select_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", title_r4.card_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", title_r4.card_type, " ");
  }
}
function PersonalDetailPage_ng_container_0_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 63)(1, "ion-label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " ID Card ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PersonalDetailPage_ng_container_0_div_48_span_3_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-row")(5, "ion-col", 66)(6, "ion-item")(7, "ion-select", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_0_div_48_Template_ion_select_ionChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.cardChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, PersonalDetailPage_ng_container_0_div_48_ion_select_option_8_Template, 2, 2, "ion-select-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-col", 66)(10, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "ion-input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.idcardDetail["ID_Card"] === "Mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.idCardTypes);
  }
}
function PersonalDetailPage_ng_container_0_ion_select_option_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", title_r5.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](title_r5.country);
  }
}
function PersonalDetailPage_ng_container_0_ion_select_option_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", title_r6.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](title_r6.name);
  }
}
function PersonalDetailPage_ng_container_0_ion_select_option_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", title_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](title_r7.name);
  }
}
function PersonalDetailPage_ng_container_0_div_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_0_div_71_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.checkclick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_0_div_71_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.stopClose($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div")(3, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Enter New Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 74)(6, "ion-item")(7, "ion-input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_0_div_71_Template_ion_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.phoneNumber, $event) || (ctx_r1.phoneNumber = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "ion-col", 76)(10, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-col", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_0_div_71_Template_ion_col_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.otpnumberPopup(ctx_r1.phoneNumber));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "SEND OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", ctx_r1.metaData.msiteFolder == "cbustheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](2, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c1));
  }
}
function PersonalDetailPage_ng_container_0_div_72_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.timerString, " ");
  }
}
function PersonalDetailPage_ng_container_0_div_72_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_0_div_72_div_11_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.resendOtp(ctx_r1.phoneNumber));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Resend OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_0_div_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_0_div_72_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.checkclick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_0_div_72_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.stopClose($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div")(3, "ion-label")(4, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Verify OTP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-row", 74)(7, "ion-col", 79)(8, "ion-input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_0_div_72_Template_ion_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.numberOTP, $event) || (ctx_r1.numberOTP = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, PersonalDetailPage_ng_container_0_div_72_span_10_Template, 2, 1, "span", 82)(11, PersonalDetailPage_ng_container_0_div_72_div_11_Template, 2, 0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "ion-col", 38)(14, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "ion-col", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_0_div_72_Template_ion_col_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.verifyotpnumber(ctx_r1.numberOTP));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "VERIFY OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.numberOTP);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.timerHideShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.resendbutton);
  }
}
function PersonalDetailPage_ng_container_0_div_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_0_div_73_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.deactivateNoteModal = !ctx_r1.deactivateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 87)(2, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Deactivate Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Are you sure, Do you want deactivate your account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "ion-col", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-col", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_0_div_73_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.deactivateNoteModal = !ctx_r1.deactivateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-col", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_0_div_73_Template_ion_col_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.deactivateAccConfirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "dwn-txt" : "dwn-txt-2");
  }
}
function PersonalDetailPage_ng_container_0_div_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_0_div_74_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.deleteNoteModal = !ctx_r1.deleteNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 87)(2, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Delete Request: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Deleting your account will result in the permanent loss of all your account data, including profile information, settings, and any content associated with your account. Once your account is deleted, recovery may not be possible. Be certain of your decision before proceeding. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "br")(7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Are you sure, Do you want delete your account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "ion-col", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-col", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_0_div_74_Template_ion_col_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.deleteNoteModal = !ctx_r1.deleteNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ion-col", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_0_div_74_Template_ion_col_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.deleteAccConfirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "dwn-txt" : "dwn-txt-2");
  }
}
function PersonalDetailPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-header", 5)(2, "ion-toolbar", 6)(3, "ion-title", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "My Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-buttons", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ion-back-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-content", 10)(8, "div", 11)(9, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function PersonalDetailPage_ng_container_0_Template_form_ngSubmit_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onsubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 13)(11, "ion-item", 14)(12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, PersonalDetailPage_ng_container_0_img_13_Template, 1, 0, "img", 16)(14, PersonalDetailPage_ng_container_0_img_14_Template, 1, 1, "img", 17)(15, PersonalDetailPage_ng_container_0_img_15_Template, 1, 1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 19)(17, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_0_Template_ion_icon_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.triggerFileInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 21)(19, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function PersonalDetailPage_ng_container_0_Template_input_change_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 23)(21, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "ion-label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "ion-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "ion-input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "ion-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "ion-input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "ion-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_0_Template_ion_item_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.openCalendar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 31)(32, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Date of birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "app-date-picker-modal", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dateSelected", function PersonalDetailPage_ng_container_0_Template_app_date_picker_modal_dateSelected_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.displayMybookings($event, 1));
    })("isOpenChange", function PersonalDetailPage_ng_container_0_Template_app_date_picker_modal_isOpenChange_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.isCalenderOpen = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "ion-row", 35)(38, "ion-col", 36)(39, "ion-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "ion-input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "ion-col", 38)(42, "ion-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_0_Template_ion_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.showmobilePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "ion-item", 26)(45, "ion-input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionInput", function PersonalDetailPage_ng_container_0_Template_ion_input_ionInput_45_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.restrictToTenDigits($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, PersonalDetailPage_ng_container_0_ion_item_46_Template, 2, 1, "ion-item", 41)(47, PersonalDetailPage_ng_container_0_ion_item_47_Template, 4, 1, "ion-item", 41)(48, PersonalDetailPage_ng_container_0_div_48_Template, 12, 2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, " Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 44)(52, "div", 45)(53, "ion-segment", 46)(54, "ion-segment-button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "ion-segment-button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "ion-item", 26)(59, "ion-select", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_0_Template_ion_select_ngModelChange_59_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.nationCode1, $event) || (ctx_r1.nationCode1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_0_Template_ion_select_ionChange_59_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.nationChange(ctx_r1.nationCode1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](60, PersonalDetailPage_ng_container_0_ion_select_option_60_Template, 2, 2, "ion-select-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "ion-item", 26)(62, "ion-select", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_0_Template_ion_select_ngModelChange_62_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.stateCode1, $event) || (ctx_r1.stateCode1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_0_Template_ion_select_ionChange_62_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.stateChange(ctx_r1.stateCode1, ctx_r1.nationCode1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, PersonalDetailPage_ng_container_0_ion_select_option_63_Template, 2, 2, "ion-select-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "ion-item", 26)(65, "ion-select", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_0_Template_ion_select_ngModelChange_65_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.cityCode1, $event) || (ctx_r1.cityCode1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_0_Template_ion_select_ionChange_65_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.cityChange(ctx_r1.cityCode1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](66, PersonalDetailPage_ng_container_0_ion_select_option_66_Template, 2, 2, "ion-select-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "ion-item", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](68, "ion-textarea", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "ion-button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](71, PersonalDetailPage_ng_container_0_div_71_Template, 13, 4, "div", 56)(72, PersonalDetailPage_ng_container_0_div_72_Template, 17, 3, "div", 56)(73, PersonalDetailPage_ng_container_0_div_73_Template, 12, 1, "div", 56)(74, PersonalDetailPage_ng_container_0_div_74_Template, 15, 1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "themeone-bg-cl" : "themeone-bg-cl_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r1.formData);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.photo && !ctx_r1.profileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.photo && !ctx_r1.profileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.profileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.firstnameField);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.savedphoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.firstnameField);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.lastnameField);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.dobField || "Date of birth", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r1.pageDate)("max", ctx_r1.todayDate)("isOpen", ctx_r1.isCalenderOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.savedphoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "cbus_change_btn" : "theme1_change_btn");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.emergencynoField);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.splitData != "ticketsimply-tmp.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.splitData == "ticketsimply-tmp.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.idcardDetail != null && ctx_r1.idcardDetail != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "themeone-seg-btn" : "themeone-seg-btn-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.titleField);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", "Male", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", "Female", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.nationCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.nationCode1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.nationalityData.nationality);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.stateCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateCode1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.stateList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.cityCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.cityCode1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.CityList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.addressField);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "themeone-login-btn" : "themeone-login-btn-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.mobileNumberPopup);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.otpNumberPopup);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.deactivateNoteModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.deleteNoteModal);
  }
}
function PersonalDetailPage_ng_container_1_img_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 141);
  }
}
function PersonalDetailPage_ng_container_1_img_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 142);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r1.photo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function PersonalDetailPage_ng_container_1_img_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 143);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function PersonalDetailPage_ng_container_1_ion_item_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-input", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.emailfield);
  }
}
function PersonalDetailPage_ng_container_1_ion_item_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-input", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.emailfield);
  }
}
function PersonalDetailPage_ng_container_1_div_37_ion_row_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 66)(2, "ion-item", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-input", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-col", 66)(5, "ion-item", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ion-input", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", item_r14.id_card_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", item_r14.id_card_no);
  }
}
function PersonalDetailPage_ng_container_1_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "ion-label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "ID Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PersonalDetailPage_ng_container_1_div_37_ion_row_3_Template, 7, 2, "ion-row", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.idcardDetail);
  }
}
function PersonalDetailPage_ng_container_1_ion_item_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 152)(1, "ion-label", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-input", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", country_r15.flag, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](country_r15.dialCode);
  }
}
function PersonalDetailPage_ng_container_1_ion_item_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 152)(1, "ion-label", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-input", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", country_r16.flag, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("label", country_r16.flag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](country_r16.dialCode);
  }
}
function PersonalDetailPage_ng_container_1_ion_select_option_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", title_r17.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](title_r17.country);
  }
}
function PersonalDetailPage_ng_container_1_ion_select_option_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", title_r18.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](title_r18.name);
  }
}
function PersonalDetailPage_ng_container_1_ion_select_option_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", title_r19.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](title_r19.name);
  }
}
function PersonalDetailPage_ng_container_1_div_95_ion_item_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 165)(1, "ion-label", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-input", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", country_r21.flag, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](country_r21.dialCode);
  }
}
function PersonalDetailPage_ng_container_1_div_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_1_div_95_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.checkclick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_1_div_95_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.stopClose($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div")(3, "ion-row")(4, "ion-col", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, PersonalDetailPage_ng_container_1_div_95_ion_item_5_Template, 5, 3, "ion-item", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-col", 160)(7, "ion-item", 161)(8, "ion-label", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-input", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_1_div_95_Template_ion_input_ionChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.enforceMaxLength($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_1_div_95_Template_ion_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.phoneNumber, $event) || (ctx_r1.phoneNumber = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "ion-col", 76)(13, "ion-col", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-col", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_1_div_95_Template_ion_col_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.otpnumberPopup(ctx_r1.phoneNumber));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "SEND OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.countryData);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.phoneNumber);
  }
}
function PersonalDetailPage_ng_container_1_div_96_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.timerString, " ");
  }
}
function PersonalDetailPage_ng_container_1_div_96_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_1_div_96_div_12_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.resendOtp(ctx_r1.phoneNumber));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Resend OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_1_div_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_1_div_96_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.checkclick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_1_div_96_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.stopClose($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div")(3, "ion-label")(4, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Verify OTP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-row", 74)(7, "ion-col", 166)(8, "ion-item", 161)(9, "ion-input", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_1_div_96_Template_ion_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.numberOTP, $event) || (ctx_r1.numberOTP = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_1_div_96_Template_ion_input_ionChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.enforceMaxLengthOtp($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-col", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, PersonalDetailPage_ng_container_1_div_96_span_11_Template, 2, 1, "span", 169)(12, PersonalDetailPage_ng_container_1_div_96_div_12_Template, 2, 0, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "ion-col", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "ion-col", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_1_div_96_Template_ion_col_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.verifyotpnumber(ctx_r1.numberOTP));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "VERIFY OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.numberOTP);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.timerHideShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.resendbutton);
  }
}
function PersonalDetailPage_ng_container_1_div_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_1_div_97_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.deactivateNoteModal = !ctx_r1.deactivateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 87)(2, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Deactivate Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Are you sure, Do you want deactivate your account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "ion-col", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-col", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_1_div_97_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.deactivateNoteModal = !ctx_r1.deactivateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-col", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_1_div_97_Template_ion_col_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.deactivateAccConfirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function PersonalDetailPage_ng_container_1_div_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_1_div_98_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.deleteNoteModal = !ctx_r1.deleteNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 87)(2, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Delete Request: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Deleting your account will result in the permanent loss of all your account data, including profile information, settings, and any content associated with your account. Once your account is deleted, recovery may not be possible. Be certain of your decision before proceeding. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "br")(7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Are you sure, Do you want delete your account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "ion-col", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-col", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_1_div_98_Template_ion_col_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.deleteNoteModal = !ctx_r1.deleteNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ion-col", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_1_div_98_Template_ion_col_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.deleteAccConfirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function PersonalDetailPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-header", 92)(2, "ion-toolbar", 93)(3, "ion-row")(4, "ion-col", 94)(5, "ion-buttons")(6, "ion-back-button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_1_Template_ion_back_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.handleBackButton());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-col", 96)(8, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Edit Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-content", 98)(11, "div", 99)(12, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function PersonalDetailPage_ng_container_1_Template_form_ngSubmit_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onsubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "ion-col", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "ion-col", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, PersonalDetailPage_ng_container_1_img_16_Template, 1, 0, "img", 102)(17, PersonalDetailPage_ng_container_1_img_17_Template, 1, 1, "img", 103)(18, PersonalDetailPage_ng_container_1_img_18_Template, 1, 1, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "ion-icon", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_1_Template_ion_icon_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.triggerFileInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 21)(21, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function PersonalDetailPage_ng_container_1_Template_input_change_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "ion-col", 106)(23, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "User Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "ion-row")(26, "ion-col", 108)(27, "ion-item", 109)(28, "ion-input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function PersonalDetailPage_ng_container_1_Template_ion_input_input_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "ion-row")(30, "ion-col", 108)(31, "ion-item", 109)(32, "ion-input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function PersonalDetailPage_ng_container_1_Template_ion_input_input_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onInputChange_lastname($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "ion-row")(34, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, PersonalDetailPage_ng_container_1_ion_item_35_Template, 2, 1, "ion-item", 112)(36, PersonalDetailPage_ng_container_1_ion_item_36_Template, 2, 1, "ion-item", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, PersonalDetailPage_ng_container_1_div_37_Template, 4, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "ion-row")(39, "ion-col", 114)(40, "ion-item", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "ion-input", 116)(42, "img", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "app-date-picker-modal", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dateSelected", function PersonalDetailPage_ng_container_1_Template_app_date_picker_modal_dateSelected_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.displayMybookings($event, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "ion-col", 66)(45, "ion-segment", 119)(46, "ion-segment-button", 120)(47, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "ion-segment-button", 121)(50, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "ion-row", 122)(53, "ion-col", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](54, "img", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "ion-col", 125)(56, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "Contact Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "ion-row")(59, "ion-col", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](60, PersonalDetailPage_ng_container_1_ion_item_60_Template, 5, 3, "ion-item", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "ion-col", 128)(62, "ion-item", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "ion-input", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "ion-button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_1_Template_ion_button_click_64_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.showmobilePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "ion-row")(67, "ion-col", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, PersonalDetailPage_ng_container_1_ion_item_68_Template, 5, 4, "ion-item", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "ion-col", 128)(70, "ion-item", 129)(71, "ion-input", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_1_Template_ion_input_ionChange_71_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.enforceMaxLength($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "ion-row")(73, "ion-col")(74, "ion-item", 129)(75, "ion-select", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_1_Template_ion_select_ngModelChange_75_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.nationCode1, $event) || (ctx_r1.nationCode1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_1_Template_ion_select_ionChange_75_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.nationChange(ctx_r1.nationCode1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](76, PersonalDetailPage_ng_container_1_ion_select_option_76_Template, 2, 2, "ion-select-option", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "ion-row")(78, "ion-col")(79, "ion-item", 129)(80, "ion-select", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_1_Template_ion_select_ngModelChange_80_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.stateCode1, $event) || (ctx_r1.stateCode1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_1_Template_ion_select_ionChange_80_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.stateChange(ctx_r1.stateCode1, ctx_r1.nationCode1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](81, PersonalDetailPage_ng_container_1_ion_select_option_81_Template, 2, 2, "ion-select-option", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "ion-row")(83, "ion-col")(84, "ion-item", 129)(85, "ion-select", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_1_Template_ion_select_ngModelChange_85_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.cityCode1, $event) || (ctx_r1.cityCode1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_1_Template_ion_select_ionChange_85_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.cityChange(ctx_r1.cityCode1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](86, PersonalDetailPage_ng_container_1_ion_select_option_86_Template, 2, 2, "ion-select-option", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "ion-row")(88, "ion-col")(89, "ion-item", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](90, "ion-textarea", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "ion-row")(92, "ion-col")(93, "ion-button", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](95, PersonalDetailPage_ng_container_1_div_95_Template, 16, 2, "div", 56)(96, PersonalDetailPage_ng_container_1_div_96_Template, 17, 3, "div", 56)(97, PersonalDetailPage_ng_container_1_div_97_Template, 12, 0, "div", 140)(98, PersonalDetailPage_ng_container_1_div_98_Template, 15, 0, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r1.formData);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.photo == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.photo != "" && !ctx_r1.profileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.profileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.firstnameField);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.lastnameField);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.splitData != "ticketsimply-tmp.com" && ctx_r1.splitData != "ourbus-tmp.in");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.splitData == "ticketsimply-tmp.com" || ctx_r1.splitData == "ourbus-tmp.in");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.idcardDetail != null && ctx_r1.idcardDetail != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.dobField);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r1.pageDate)("max", ctx_r1.maxDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.titleField);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.countryData);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.savedphoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.countryData);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.emergencynoField);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.nationCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.nationCode1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.nationalityData.nationality);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.stateCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateCode1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.stateList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.cityCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.cityCode1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.CityList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.addressField);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.mobileNumberPopup);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.otpNumberPopup);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.deactivateNoteModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.deleteNoteModal);
  }
}
function PersonalDetailPage_ng_container_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 186)(1, "div", 87)(2, "div")(3, "ion-label")(4, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Enter New Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-input", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_2_div_7_Template_ion_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.phoneNumber, $event) || (ctx_r1.phoneNumber = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ion-col", 76)(9, "ion-col", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-col", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_2_div_7_Template_ion_col_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.otpnumberPopup(ctx_r1.phoneNumber));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Send OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.phoneNumber);
  }
}
function PersonalDetailPage_ng_container_2_div_8_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.timerString, " ");
  }
}
function PersonalDetailPage_ng_container_2_div_8_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_2_div_8_div_13_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.resendOtp(ctx_r1.phoneNumber));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Resend OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 186)(1, "div", 87)(2, "div")(3, "ion-label")(4, "div", 187)(5, "span", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Verify OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-row")(9, "ion-col", 36)(10, "ion-input", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_2_div_8_Template_ion_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.numberOTP, $event) || (ctx_r1.numberOTP = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-col", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, PersonalDetailPage_ng_container_2_div_8_span_12_Template, 2, 1, "span", 192)(13, PersonalDetailPage_ng_container_2_div_8_div_13_Template, 2, 0, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-row")(15, "ion-col", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_2_div_8_Template_ion_col_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.cancelAllPopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "CANCEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "ion-col", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_2_div_8_Template_ion_col_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.verifyotpnumber(ctx_r1.numberOTP));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "VERIFY OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "ion-col", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.numberOTP);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.timerHideShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.resendbutton);
  }
}
function PersonalDetailPage_ng_container_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_2_div_9_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.deactivateNoteModal = !ctx_r1.deactivateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 87)(2, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Deactivate Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Are you sure, Do you want deactivate your account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "ion-col", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-col", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_2_div_9_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.deactivateNoteModal = !ctx_r1.deactivateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-col", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_2_div_9_Template_ion_col_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.deactivateAccConfirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function PersonalDetailPage_ng_container_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_2_div_10_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.deleteNoteModal = !ctx_r1.deleteNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 87)(2, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Delete Request: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Deleting your account will result in the permanent loss of all your account data, including profile information, settings, and any content associated with your account. Once your account is deleted, recovery may not be possible. Be certain of your decision before proceeding. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "br")(7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Are you sure, Do you want delete your account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "ion-col", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-col", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_2_div_10_Template_ion_col_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.deleteNoteModal = !ctx_r1.deleteNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ion-col", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_2_div_10_Template_ion_col_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.deleteAccConfirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function PersonalDetailPage_ng_container_2_img_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 57);
  }
}
function PersonalDetailPage_ng_container_2_img_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 58);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.photo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function PersonalDetailPage_ng_container_2_img_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 59);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function PersonalDetailPage_ng_container_2_ion_radio_group_26_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]("*");
  }
}
function PersonalDetailPage_ng_container_2_ion_radio_group_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-radio-group", 198)(1, "ion-row", 199)(2, "ion-col", 76)(3, "ion-item", 200)(4, "div", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, PersonalDetailPage_ng_container_2_ion_radio_group_26_span_6_Template, 2, 1, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-col", 202)(8, "ion-item", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "ion-radio", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-col", 76)(13, "ion-item", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "ion-radio", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.titleField);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Title"] && ctx_r1.personalConfig["Title"] === "Mandatory");
  }
}
function PersonalDetailPage_ng_container_2_ion_item_27_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_2_ion_item_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item")(1, "ion-input", 207)(2, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, PersonalDetailPage_ng_container_2_ion_item_27_span_4_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r1.firstnameField);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["First_Name"] === "Mandatory");
  }
}
function PersonalDetailPage_ng_container_2_ion_item_28_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_2_ion_item_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item")(1, "ion-input", 209)(2, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, PersonalDetailPage_ng_container_2_ion_item_28_span_4_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r1.lastnameField);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Last_Name"] === "Mandatory");
  }
}
function PersonalDetailPage_ng_container_2_ion_item_29_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_2_ion_item_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_2_ion_item_29_Template_ion_item_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.openCalendar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 211)(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " DOB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, PersonalDetailPage_ng_container_2_ion_item_29_span_5_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["DOB"] === "Mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.dobField || "Date of Birth", " ");
  }
}
function PersonalDetailPage_ng_container_2_ion_item_31_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_2_ion_item_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 213)(1, "ion-row", 108)(2, "ion-col", 214)(3, "ion-input", 215)(4, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Phone Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, PersonalDetailPage_ng_container_2_ion_item_31_span_6_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-col", 216)(8, "ion-button", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_2_ion_item_31_Template_ion_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.showmobilePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r1.savedphoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Phone_Number"] && ctx_r1.personalConfig["Phone_Number"] === "Mandatory");
  }
}
function PersonalDetailPage_ng_container_2_ion_item_32_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_2_ion_item_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item")(1, "ion-input", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_2_ion_item_32_Template_ion_input_ionChange_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.OnInputChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Emergency Phone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, PersonalDetailPage_ng_container_2_ion_item_32_span_4_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r1.emergencynoField);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Emergency_Phone_Number"] === "Mandatory");
  }
}
function PersonalDetailPage_ng_container_2_ion_item_33_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_2_ion_item_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item")(1, "ion-input", 219)(2, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, PersonalDetailPage_ng_container_2_ion_item_33_span_4_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r1.emailfield);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Email_ID"] === "Mandatory");
  }
}
function PersonalDetailPage_ng_container_2_ion_item_34_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_2_ion_item_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item")(1, "ion-input", 220)(2, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, PersonalDetailPage_ng_container_2_ion_item_34_span_4_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r1.emailfield);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Email_ID"] === "Mandatory");
  }
}
function PersonalDetailPage_ng_container_2_div_35_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]("*");
  }
}
function PersonalDetailPage_ng_container_2_div_35_ion_row_4_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_2_div_35_ion_row_4_ion_select_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", title_r36.card_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](title_r36.card_type);
  }
}
function PersonalDetailPage_ng_container_2_div_35_ion_row_4_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_2_div_35_ion_row_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 66)(2, "ion-item")(3, "ion-select", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_2_div_35_ion_row_4_Template_ion_select_ionChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.cardChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "ID Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, PersonalDetailPage_ng_container_2_div_35_ion_row_4_span_6_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, PersonalDetailPage_ng_container_2_div_35_ion_row_4_ion_select_option_7_Template, 2, 2, "ion-select-option", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-col", 66)(9, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "ion-input", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, PersonalDetailPage_ng_container_2_div_35_ion_row_4_span_11_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r37 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r1.cityCode)("interfaceOptions", ctx_r1.cardOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["ID_Card"] === "Mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.idCardTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r37.id_card_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["ID_Card"] && ctx_r1.personalConfig["ID_Card"] === "Mandatory");
  }
}
function PersonalDetailPage_ng_container_2_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "ion-label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "ID Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PersonalDetailPage_ng_container_2_div_35_span_3_Template, 2, 1, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, PersonalDetailPage_ng_container_2_div_35_ion_row_4_Template, 12, 6, "ion-row", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-row")(6, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "This is a one-time entry for your ID card details. Once submitted, changes cannot be made.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["ID_Card"] && ctx_r1.personalConfig["ID_Card"] === "Mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.idcardDetail);
  }
}
function PersonalDetailPage_ng_container_2_ion_item_36_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]("*");
  }
}
function PersonalDetailPage_ng_container_2_ion_item_36_ion_select_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", title_r39.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](title_r39.country);
  }
}
function PersonalDetailPage_ng_container_2_ion_item_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item")(1, "ion-label", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Nationality");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PersonalDetailPage_ng_container_2_ion_item_36_span_3_Template, 2, 1, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-select", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_2_ion_item_36_Template_ion_select_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r38);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.nationCode1, $event) || (ctx_r1.nationCode1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_2_ion_item_36_Template_ion_select_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r38);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.nationChange(ctx_r1.nationCode1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, PersonalDetailPage_ng_container_2_ion_item_36_ion_select_option_5_Template, 2, 2, "ion-select-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Nationality"] && ctx_r1.personalConfig["Nationality"] === "Mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.nationCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.nationCode1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("interfaceOptions", ctx_r1.nationalityOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.nationalityData.nationality);
  }
}
function PersonalDetailPage_ng_container_2_ion_item_37_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]("*");
  }
}
function PersonalDetailPage_ng_container_2_ion_item_37_ion_select_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", title_r41.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](title_r41.name);
  }
}
function PersonalDetailPage_ng_container_2_ion_item_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item")(1, "ion-label", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PersonalDetailPage_ng_container_2_ion_item_37_span_3_Template, 2, 1, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-select", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_2_ion_item_37_Template_ion_select_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.stateCode1, $event) || (ctx_r1.stateCode1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_2_ion_item_37_Template_ion_select_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.stateChange(ctx_r1.stateCode1, ctx_r1.nationCode1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, PersonalDetailPage_ng_container_2_ion_item_37_ion_select_option_5_Template, 2, 2, "ion-select-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["State"] && ctx_r1.personalConfig["State"] === "Mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.stateCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("interfaceOptions", ctx_r1.stateOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateCode1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.stateList);
  }
}
function PersonalDetailPage_ng_container_2_ion_item_38_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]("*");
  }
}
function PersonalDetailPage_ng_container_2_ion_item_38_ion_select_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", title_r43.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](title_r43.name);
  }
}
function PersonalDetailPage_ng_container_2_ion_item_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item")(1, "ion-label", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "City ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PersonalDetailPage_ng_container_2_ion_item_38_span_3_Template, 2, 1, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-select", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_2_ion_item_38_Template_ion_select_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r42);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.cityCode1, $event) || (ctx_r1.cityCode1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_2_ion_item_38_Template_ion_select_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r42);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.cityChange(ctx_r1.cityCode1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, PersonalDetailPage_ng_container_2_ion_item_38_ion_select_option_5_Template, 2, 2, "ion-select-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["City"] && ctx_r1.personalConfig["City"] === "Mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.cityCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.cityCode1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("interfaceOptions", ctx_r1.cityOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.CityList);
  }
}
function PersonalDetailPage_ng_container_2_ion_item_39_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]("*");
  }
}
function PersonalDetailPage_ng_container_2_ion_item_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item")(1, "ion-label", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PersonalDetailPage_ng_container_2_ion_item_39_span_3_Template, 2, 1, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-textarea", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Address"] && ctx_r1.personalConfig["Address"] === "Mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.addressField);
  }
}
function PersonalDetailPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 175)(3, "ion-buttons", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_2_Template_ion_buttons_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToMore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Personal Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, PersonalDetailPage_ng_container_2_div_7_Template, 12, 1, "div", 178)(8, PersonalDetailPage_ng_container_2_div_8_Template, 20, 3, "div", 178)(9, PersonalDetailPage_ng_container_2_div_9_Template, 12, 0, "div", 56)(10, PersonalDetailPage_ng_container_2_div_10_Template, 15, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-content", 179)(12, "ion-card", 180)(13, "ion-card-content", 181)(14, "div", 11)(15, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function PersonalDetailPage_ng_container_2_Template_form_ngSubmit_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onsubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 13)(17, "ion-item", 14)(18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, PersonalDetailPage_ng_container_2_img_19_Template, 1, 0, "img", 16)(20, PersonalDetailPage_ng_container_2_img_20_Template, 1, 1, "img", 17)(21, PersonalDetailPage_ng_container_2_img_21_Template, 1, 1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 19)(23, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_2_Template_ion_icon_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.triggerFileInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 21)(25, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function PersonalDetailPage_ng_container_2_Template_input_change_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, PersonalDetailPage_ng_container_2_ion_radio_group_26_Template, 17, 2, "ion-radio-group", 182)(27, PersonalDetailPage_ng_container_2_ion_item_27_Template, 5, 2, "ion-item", 4)(28, PersonalDetailPage_ng_container_2_ion_item_28_Template, 5, 2, "ion-item", 4)(29, PersonalDetailPage_ng_container_2_ion_item_29_Template, 8, 2, "ion-item", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "app-date-picker-modal", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dateSelected", function PersonalDetailPage_ng_container_2_Template_app_date_picker_modal_dateSelected_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.displayMybookings($event, 1));
    })("isOpenChange", function PersonalDetailPage_ng_container_2_Template_app_date_picker_modal_isOpenChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.isCalenderOpen = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, PersonalDetailPage_ng_container_2_ion_item_31_Template, 10, 2, "ion-item", 184)(32, PersonalDetailPage_ng_container_2_ion_item_32_Template, 5, 2, "ion-item", 4)(33, PersonalDetailPage_ng_container_2_ion_item_33_Template, 5, 2, "ion-item", 4)(34, PersonalDetailPage_ng_container_2_ion_item_34_Template, 5, 2, "ion-item", 4)(35, PersonalDetailPage_ng_container_2_div_35_Template, 8, 2, "div", 4)(36, PersonalDetailPage_ng_container_2_ion_item_36_Template, 6, 5, "ion-item", 4)(37, PersonalDetailPage_ng_container_2_ion_item_37_Template, 6, 5, "ion-item", 4)(38, PersonalDetailPage_ng_container_2_ion_item_38_Template, 6, 5, "ion-item", 4)(39, PersonalDetailPage_ng_container_2_ion_item_39_Template, 5, 2, "ion-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "ion-button", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.mobileNumberPopup);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.otpNumberPopup);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.deactivateNoteModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.deleteNoteModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r1.formData);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.photo && !ctx_r1.profileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.photo && !ctx_r1.profileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.profileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Title"] && ctx_r1.personalConfig["Title"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["First_Name"] && ctx_r1.personalConfig["First_Name"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Last_Name"] && ctx_r1.personalConfig["Last_Name"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["DOB"] && ctx_r1.personalConfig["DOB"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r1.pageDate)("max", ctx_r1.todayDate)("isOpen", ctx_r1.isCalenderOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Phone_Number"] && ctx_r1.personalConfig["Phone_Number"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Emergency_Phone_Number"] && ctx_r1.personalConfig["Emergency_Phone_Number"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.splitData != "ticketsimply-tmp.com" && ctx_r1.personalConfig["Email_ID"] && ctx_r1.personalConfig["Email_ID"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.splitData == "ticketsimply-tmp.com" && ctx_r1.personalConfig["Email_ID"] && ctx_r1.personalConfig["Email_ID"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.idcardDetail != null && ctx_r1.idcardDetail != "" && ctx_r1.personalConfig["ID_Card"] && ctx_r1.personalConfig["ID_Card"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Nationality"] && ctx_r1.personalConfig["Nationality"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["State"] && ctx_r1.personalConfig["State"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["City"] && ctx_r1.personalConfig["City"] !== "Hide" && ctx_r1.personalConfig["State"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Address"] && ctx_r1.personalConfig["Address"] !== "Hide");
  }
}
function PersonalDetailPage_ng_container_3_img_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 57);
  }
}
function PersonalDetailPage_ng_container_3_img_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 58);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.photo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function PersonalDetailPage_ng_container_3_img_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 59);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function PersonalDetailPage_ng_container_3_ion_row_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 240)(1, "ion-col", 241)(2, "ion-label", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-col", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "ion-input", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.emailfield);
  }
}
function PersonalDetailPage_ng_container_3_ion_row_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 240)(1, "ion-col", 241)(2, "ion-label", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-col", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "ion-input", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.emailfield);
  }
}
function PersonalDetailPage_ng_container_3_ion_select_option_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", title_r45.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](title_r45.country);
  }
}
function PersonalDetailPage_ng_container_3_ion_select_option_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", title_r46.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](title_r46.name);
  }
}
function PersonalDetailPage_ng_container_3_ion_select_option_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", title_r47.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](title_r47.name);
  }
}
function PersonalDetailPage_ng_container_3_div_116_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 186)(1, "div", 87)(2, "div")(3, "ion-label")(4, "div", 187)(5, "span", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Enter New Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-input", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_3_div_116_Template_ion_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r48);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.phoneNumber, $event) || (ctx_r1.phoneNumber = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-row")(10, "ion-col", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_3_div_116_Template_ion_col_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r48);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.cancelAllPopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "CANCEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-col", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_3_div_116_Template_ion_col_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r48);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.otpnumberPopup(ctx_r1.phoneNumber));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Send OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "ion-col", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.phoneNumber);
  }
}
function PersonalDetailPage_ng_container_3_div_117_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.timerString, " ");
  }
}
function PersonalDetailPage_ng_container_3_div_117_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_3_div_117_div_13_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r50);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.resendOtp(ctx_r1.phoneNumber));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Resend OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_3_div_117_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 186)(1, "div", 87)(2, "div")(3, "ion-label")(4, "div", 187)(5, "span", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Verify OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-row")(9, "ion-col", 36)(10, "ion-input", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_3_div_117_Template_ion_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r49);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.numberOTP, $event) || (ctx_r1.numberOTP = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-col", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, PersonalDetailPage_ng_container_3_div_117_span_12_Template, 2, 1, "span", 192)(13, PersonalDetailPage_ng_container_3_div_117_div_13_Template, 2, 0, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-row")(15, "ion-col", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_3_div_117_Template_ion_col_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r49);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.cancelAllPopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "CANCEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "ion-col", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_3_div_117_Template_ion_col_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r49);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.verifyotpnumber(ctx_r1.numberOTP));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "VERIFY OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "ion-col", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.numberOTP);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.timerHideShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.resendbutton);
  }
}
function PersonalDetailPage_ng_container_3_div_118_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_3_div_118_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r51);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.deactivateNoteModal = !ctx_r1.deactivateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 87)(2, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Deactivate Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Are you sure, Do you want deactivate your account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "ion-col", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-col", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_3_div_118_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r51);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.deactivateNoteModal = !ctx_r1.deactivateNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-col", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_3_div_118_Template_ion_col_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r51);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.deactivateAccConfirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function PersonalDetailPage_ng_container_3_div_119_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_3_div_119_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.deleteNoteModal = !ctx_r1.deleteNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 87)(2, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Delete Request: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Deleting your account will result in the permanent loss of all your account data, including profile information, settings, and any content associated with your account. Once your account is deleted, recovery may not be possible. Be certain of your decision before proceeding. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "br")(7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Are you sure, Do you want delete your account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "ion-col", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-col", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_3_div_119_Template_ion_col_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.deleteNoteModal = !ctx_r1.deleteNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ion-col", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_3_div_119_Template_ion_col_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.deleteAccConfirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function PersonalDetailPage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-header", 233)(2, "ion-toolbar", 180)(3, "ion-row")(4, "ion-col", 94)(5, "ion-buttons");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-col", 234)(8, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-content", 235)(11, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function PersonalDetailPage_ng_container_3_Template_form_ngSubmit_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r44);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onsubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 236)(13, "ion-row", 237)(14, "div", 13)(15, "ion-item", 14)(16, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, PersonalDetailPage_ng_container_3_img_17_Template, 1, 0, "img", 16)(18, PersonalDetailPage_ng_container_3_img_18_Template, 1, 1, "img", 17)(19, PersonalDetailPage_ng_container_3_img_19_Template, 1, 1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 19)(21, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_3_Template_ion_icon_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r44);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.triggerFileInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 21)(23, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function PersonalDetailPage_ng_container_3_Template_input_change_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r44);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "ion-row")(25, "ion-col", 238)(26, "div", 237)(27, "ion-label", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "ion-row", 240)(33, "ion-col", 241)(34, "ion-label", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "First name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "ion-col", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "ion-input", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "ion-row", 240)(39, "ion-col", 241)(40, "ion-label", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Last name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "ion-col", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "ion-input", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, PersonalDetailPage_ng_container_3_ion_row_44_Template, 6, 1, "ion-row", 246)(45, PersonalDetailPage_ng_container_3_ion_row_45_Template, 6, 1, "ion-row", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "ion-row", 240)(47, "ion-col", 241)(48, "ion-label", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "ion-col", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "ion-input", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "ion-row", 240)(53, "ion-col", 241)(54, "ion-label", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Emergency Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "ion-col", 243)(57, "ion-input", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionInput", function PersonalDetailPage_ng_container_3_Template_ion_input_ionInput_57_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r44);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.restrictToTenDigits($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "ion-row", 249)(59, "ion-col", 241)(60, "ion-label", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "Date of birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "ion-col", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "ion-input", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "ion-col", 251)(65, "span", 252)(66, "ion-label", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](67, "ion-icon", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "\u00A0Select date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "app-date-picker-modal", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dateSelected", function PersonalDetailPage_ng_container_3_Template_app_date_picker_modal_dateSelected_69_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r44);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.displayMybookings($event, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "ion-row", 240)(71, "ion-col", 241)(72, "ion-label", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "ion-col", 243)(75, "ion-radio-group", 256)(76, "ion-list", 257)(77, "ion-item", 258)(78, "ion-label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](80, "ion-radio", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "ion-item", 258)(82, "ion-label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](84, "ion-radio", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "ion-row", 240)(86, "ion-col", 241)(87, "ion-label", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "Nationality");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "ion-col", 243)(90, "ion-select", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_3_Template_ion_select_ngModelChange_90_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r44);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.nationCode1, $event) || (ctx_r1.nationCode1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_3_Template_ion_select_ionChange_90_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r44);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.nationChange(ctx_r1.nationCode1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](91, PersonalDetailPage_ng_container_3_ion_select_option_91_Template, 2, 2, "ion-select-option", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "ion-row", 240)(93, "ion-col", 241)(94, "ion-label", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "ion-col", 243)(97, "ion-select", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_3_Template_ion_select_ngModelChange_97_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r44);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.stateCode1, $event) || (ctx_r1.stateCode1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_3_Template_ion_select_ionChange_97_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r44);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.stateChange(ctx_r1.stateCode1, ctx_r1.nationCode1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](98, PersonalDetailPage_ng_container_3_ion_select_option_98_Template, 2, 2, "ion-select-option", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "ion-row", 240)(100, "ion-col", 241)(101, "ion-label", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "ion-col", 243)(104, "ion-select", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_3_Template_ion_select_ngModelChange_104_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r44);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.cityCode1, $event) || (ctx_r1.cityCode1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_3_Template_ion_select_ionChange_104_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r44);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.cityChange(ctx_r1.cityCode1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](105, PersonalDetailPage_ng_container_3_ion_select_option_105_Template, 2, 2, "ion-select-option", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "ion-row", 265)(107, "ion-col", 241)(108, "ion-label", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](109, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "ion-col", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](111, "ion-textarea", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "ion-row")(113, "ion-col")(114, "ion-button", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](115, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](116, PersonalDetailPage_ng_container_3_div_116_Template, 15, 1, "div", 178)(117, PersonalDetailPage_ng_container_3_div_117_Template, 20, 3, "div", 178)(118, PersonalDetailPage_ng_container_3_div_118_Template, 12, 0, "div", 56)(119, PersonalDetailPage_ng_container_3_div_119_Template, 15, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r1.formData);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.photo && !ctx_r1.profileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.photo && !ctx_r1.profileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.profileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.firstnameField);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.savedphoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.firstnameField);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.lastnameField);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.splitData != "ticketsimply-tmp.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.splitData == "ticketsimply-tmp.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.savedphoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.emergencynoField);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.dobField);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r1.pageDate)("max", ctx_r1.todayDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.titleField);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.nationCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.nationCode1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.nationalityData.nationality);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.stateCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateCode1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.stateList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.cityCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.cityCode1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.CityList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.addressField);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.mobileNumberPopup);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.otpNumberPopup);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.deactivateNoteModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.deleteNoteModal);
  }
}
function PersonalDetailPage_ng_container_4_img_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 313);
  }
}
function PersonalDetailPage_ng_container_4_img_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 314);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.photo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function PersonalDetailPage_ng_container_4_img_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 315);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function PersonalDetailPage_ng_container_4_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 296)(1, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-input", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.emailfield);
  }
}
function PersonalDetailPage_ng_container_4_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 290)(1, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-input", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.emailfield);
  }
}
function PersonalDetailPage_ng_container_4_ng_container_32_ion_select_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", title_r55.card_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](title_r55.card_type);
  }
}
function PersonalDetailPage_ng_container_4_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 290)(2, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "ID Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-select", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_4_ng_container_32_Template_ion_select_ionChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r54);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.cardChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, PersonalDetailPage_ng_container_4_ng_container_32_ion_select_option_5_Template, 2, 2, "ion-select-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 290)(7, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "ID No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "ion-input", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.idCardTypes);
  }
}
function PersonalDetailPage_ng_container_4_ion_select_option_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", title_r56.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](title_r56.country);
  }
}
function PersonalDetailPage_ng_container_4_ion_select_option_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", title_r57.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](title_r57.name);
  }
}
function PersonalDetailPage_ng_container_4_ion_select_option_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", title_r58.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](title_r58.name);
  }
}
function PersonalDetailPage_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-header", 273)(2, "ion-toolbar", 274)(3, "div", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-back-button", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h1", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-content", 278)(8, "form", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function PersonalDetailPage_ng_container_4_Template_form_ngSubmit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r53);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onsubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "section", 280)(10, "div", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, PersonalDetailPage_ng_container_4_img_11_Template, 1, 0, "img", 282)(12, PersonalDetailPage_ng_container_4_img_12_Template, 1, 1, "img", 283)(13, PersonalDetailPage_ng_container_4_img_13_Template, 1, 1, "img", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_4_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r53);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.triggerFileInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "ion-icon", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function PersonalDetailPage_ng_container_4_Template_input_change_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r53);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "p", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "p", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "section", 289)(22, "div", 290)(23, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "First name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "ion-input", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 290)(27, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Last name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "ion-input", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, PersonalDetailPage_ng_container_4_div_30_Template, 4, 1, "div", 294)(31, PersonalDetailPage_ng_container_4_div_31_Template, 4, 1, "div", 295)(32, PersonalDetailPage_ng_container_4_ng_container_32_Template, 10, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 296)(34, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "ion-input", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 290)(38, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Emergency Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "ion-input", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionInput", function PersonalDetailPage_ng_container_4_Template_ion_input_ionInput_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r53);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.restrictToTenDigits($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_4_Template_div_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r53);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.openCalendar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Date of birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "ion-input", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "button", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "ion-icon", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "app-date-picker-modal", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dateSelected", function PersonalDetailPage_ng_container_4_Template_app_date_picker_modal_dateSelected_48_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r53);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.displayMybookings($event, 1));
    })("isOpenChange", function PersonalDetailPage_ng_container_4_Template_app_date_picker_modal_isOpenChange_48_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r53);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.isCalenderOpen = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 304)(50, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "ion-radio-group", 305)(53, "ion-radio", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "ion-radio", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 290)(58, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "Nationality");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "ion-select", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_4_Template_ion_select_ngModelChange_60_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r53);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.nationCode1, $event) || (ctx_r1.nationCode1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_4_Template_ion_select_ionChange_60_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r53);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.nationChange(ctx_r1.nationCode1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](61, PersonalDetailPage_ng_container_4_ion_select_option_61_Template, 2, 2, "ion-select-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 290)(63, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "ion-select", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_4_Template_ion_select_ngModelChange_65_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r53);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.stateCode1, $event) || (ctx_r1.stateCode1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_4_Template_ion_select_ionChange_65_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r53);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.stateChange(ctx_r1.stateCode1, ctx_r1.nationCode1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](66, PersonalDetailPage_ng_container_4_ion_select_option_66_Template, 2, 2, "ion-select-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 290)(68, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "ion-select", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_4_Template_ion_select_ngModelChange_70_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r53);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.cityCode1, $event) || (ctx_r1.cityCode1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_4_Template_ion_select_ionChange_70_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r53);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.cityChange(ctx_r1.cityCode1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](71, PersonalDetailPage_ng_container_4_ion_select_option_71_Template, 2, 2, "ion-select-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 290)(73, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](75, "ion-textarea", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "button", 312);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r1.formData);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.photo && !ctx_r1.profileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.photo && !ctx_r1.profileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.profileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.firstnameField);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.savedphoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.firstnameField);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.lastnameField);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.splitData != "ticketsimply-tmp.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.splitData == "ticketsimply-tmp.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.idcardDetail != null && ctx_r1.idcardDetail != "" && ctx_r1.personalConfig["ID_Card"] && ctx_r1.personalConfig["ID_Card"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.savedphoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.emergencynoField);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.dobField);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r1.pageDate)("max", ctx_r1.todayDate)("isOpen", ctx_r1.isCalenderOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.titleField);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.nationCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.nationCode1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.nationalityData.nationality);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.stateCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateCode1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.stateList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.cityCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.cityCode1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.CityList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.addressField);
  }
}
function PersonalDetailPage_ng_container_5_img_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 349);
  }
}
function PersonalDetailPage_ng_container_5_img_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 350);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.photo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function PersonalDetailPage_ng_container_5_img_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 350);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function PersonalDetailPage_ng_container_5_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 351);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Add profile photo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_5_label_26_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_5_label_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 352);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Full Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PersonalDetailPage_ng_container_5_label_26_span_2_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["First_Name"] === "Mandatory");
  }
}
function PersonalDetailPage_ng_container_5_ion_item_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-input", 354);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_5_label_28_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_5_label_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 352);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PersonalDetailPage_ng_container_5_label_28_span_2_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Last_Name"] === "Mandatory");
  }
}
function PersonalDetailPage_ng_container_5_ion_item_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-input", 355);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_5_label_30_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_5_label_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 356);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Date of Birth ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PersonalDetailPage_ng_container_5_label_30_span_2_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["DOB"] === "Mandatory");
  }
}
function PersonalDetailPage_ng_container_5_ion_item_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 357);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 358)(2, "ion-input", 359);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_5_label_33_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_5_label_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 356);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Phone Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PersonalDetailPage_ng_container_5_label_33_span_2_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Phone_Number"] === "Mandatory");
  }
}
function PersonalDetailPage_ng_container_5_ion_item_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 353)(1, "ion-input", 360);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_5_ion_item_34_Template_ion_input_ionChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r60);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.enforceMaxLength($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_5_ion_item_34_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r60);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.phoneNumber, $event) || (ctx_r1.phoneNumber = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.phoneNumber);
  }
}
function PersonalDetailPage_ng_container_5_label_35_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_5_label_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 356);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Emergency Phone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PersonalDetailPage_ng_container_5_label_35_span_2_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Emergency_Phone_Number"] === "Mandatory");
  }
}
function PersonalDetailPage_ng_container_5_ion_item_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 353)(1, "ion-icon", 361);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_5_ion_item_36_Template_ion_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r61);
      const emergencyInput_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](emergencyInput_r62.setFocus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-input", 362, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_5_ion_item_36_Template_ion_input_ionChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r61);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.enforceMaxLength($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PersonalDetailPage_ng_container_5_label_37_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_5_label_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 356);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PersonalDetailPage_ng_container_5_label_37_span_2_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Email_ID"] === "Mandatory");
  }
}
function PersonalDetailPage_ng_container_5_ion_item_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-input", 363);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_5_div_39_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_5_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 364)(1, "label", 365);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PersonalDetailPage_ng_container_5_div_39_span_3_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-radio-group", 366)(5, "div", 367)(6, "label", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "ion-radio", 369);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 370);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "label", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "ion-radio", 371);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span", 370);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Title"] === "Mandatory");
  }
}
function PersonalDetailPage_ng_container_5_label_42_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_5_label_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 372);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Nationality ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PersonalDetailPage_ng_container_5_label_42_span_2_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Nationality"] === "Mandatory");
  }
}
function PersonalDetailPage_ng_container_5_ion_item_43_ion_select_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", title_r64.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", title_r64.country, " ");
  }
}
function PersonalDetailPage_ng_container_5_ion_item_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 373)(1, "ion-select", 374, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_5_ion_item_43_Template_ion_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r63);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.nationCode1, $event) || (ctx_r1.nationCode1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_5_ion_item_43_Template_ion_select_ionChange_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r63);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.nationChange(ctx_r1.nationCode1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PersonalDetailPage_ng_container_5_ion_item_43_ion_select_option_3_Template, 2, 2, "ion-select-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-icon", 375);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_5_ion_item_43_Template_ion_icon_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r63);
      const countrySelect_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](countrySelect_r65.open($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.nationCode1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.nationalityData.nationality);
  }
}
function PersonalDetailPage_ng_container_5_label_44_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_5_label_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 356);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "State ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PersonalDetailPage_ng_container_5_label_44_span_2_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["State"] === "Mandatory");
  }
}
function PersonalDetailPage_ng_container_5_ion_item_45_ion_select_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", title_r67.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", title_r67.name, " ");
  }
}
function PersonalDetailPage_ng_container_5_ion_item_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 353)(1, "ion-select", 376, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_5_ion_item_45_Template_ion_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r66);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.stateCode1, $event) || (ctx_r1.stateCode1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_5_ion_item_45_Template_ion_select_ionChange_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r66);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.stateChange(ctx_r1.stateCode1, ctx_r1.nationCode1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PersonalDetailPage_ng_container_5_ion_item_45_ion_select_option_3_Template, 2, 2, "ion-select-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-icon", 375);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_5_ion_item_45_Template_ion_icon_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r66);
      const stateSelect_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](stateSelect_r68.open($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateCode1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.stateList);
  }
}
function PersonalDetailPage_ng_container_5_label_46_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_5_label_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 356);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "City ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PersonalDetailPage_ng_container_5_label_46_span_2_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["City"] === "Mandatory");
  }
}
function PersonalDetailPage_ng_container_5_ion_item_47_ion_select_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", title_r70.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", title_r70.name, " ");
  }
}
function PersonalDetailPage_ng_container_5_ion_item_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 353)(1, "ion-select", 377, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PersonalDetailPage_ng_container_5_ion_item_47_Template_ion_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r69);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.cityCode1, $event) || (ctx_r1.cityCode1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function PersonalDetailPage_ng_container_5_ion_item_47_Template_ion_select_ionChange_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r69);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.cityChange(ctx_r1.cityCode1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PersonalDetailPage_ng_container_5_ion_item_47_ion_select_option_3_Template, 2, 2, "ion-select-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-icon", 375);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_5_ion_item_47_Template_ion_icon_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r69);
      const citySelect_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](citySelect_r71.open($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.cityCode1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.CityList);
  }
}
function PersonalDetailPage_ng_container_5_label_48_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_5_label_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 356);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PersonalDetailPage_ng_container_5_label_48_span_2_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Address"] === "Mandatory");
  }
}
function PersonalDetailPage_ng_container_5_ion_item_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 378);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-textarea", 379);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PersonalDetailPage_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-header", 320)(2, "ion-toolbar", 180)(3, "ion-buttons", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_5_Template_ion_buttons_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r59);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToMore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-back-button", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-title", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "My Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-content", 324)(8, "div", 325)(9, "form", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function PersonalDetailPage_ng_container_5_Template_form_ngSubmit_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r59);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onsubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "input", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function PersonalDetailPage_ng_container_5_Template_input_change_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r59);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 328)(12, "div", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PersonalDetailPage_ng_container_5_Template_div_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r59);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.triggerFileInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, PersonalDetailPage_ng_container_5_img_13_Template, 1, 0, "img", 330)(14, PersonalDetailPage_ng_container_5_img_14_Template, 1, 1, "img", 331)(15, PersonalDetailPage_ng_container_5_img_15_Template, 1, 1, "img", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 21)(17, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function PersonalDetailPage_ng_container_5_Template_input_change_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r59);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, PersonalDetailPage_ng_container_5_div_18_Template, 2, 0, "div", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "ion-label", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "ion-label", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "hr", 335);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, " PERSONAL INFORMATION ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, PersonalDetailPage_ng_container_5_label_26_Template, 3, 1, "label", 337)(27, PersonalDetailPage_ng_container_5_ion_item_27_Template, 2, 0, "ion-item", 338)(28, PersonalDetailPage_ng_container_5_label_28_Template, 3, 1, "label", 337)(29, PersonalDetailPage_ng_container_5_ion_item_29_Template, 2, 0, "ion-item", 338)(30, PersonalDetailPage_ng_container_5_label_30_Template, 3, 1, "label", 339)(31, PersonalDetailPage_ng_container_5_ion_item_31_Template, 3, 0, "ion-item", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "app-date-picker-modal", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dateSelected", function PersonalDetailPage_ng_container_5_Template_app_date_picker_modal_dateSelected_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r59);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.displayMybookings($event, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, PersonalDetailPage_ng_container_5_label_33_Template, 3, 1, "label", 339)(34, PersonalDetailPage_ng_container_5_ion_item_34_Template, 2, 1, "ion-item", 338)(35, PersonalDetailPage_ng_container_5_label_35_Template, 3, 1, "label", 339)(36, PersonalDetailPage_ng_container_5_ion_item_36_Template, 4, 0, "ion-item", 338)(37, PersonalDetailPage_ng_container_5_label_37_Template, 3, 1, "label", 339)(38, PersonalDetailPage_ng_container_5_ion_item_38_Template, 2, 0, "ion-item", 338)(39, PersonalDetailPage_ng_container_5_div_39_Template, 14, 1, "div", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, PersonalDetailPage_ng_container_5_label_42_Template, 3, 1, "label", 344)(43, PersonalDetailPage_ng_container_5_ion_item_43_Template, 5, 4, "ion-item", 345)(44, PersonalDetailPage_ng_container_5_label_44_Template, 3, 1, "label", 339)(45, PersonalDetailPage_ng_container_5_ion_item_45_Template, 5, 4, "ion-item", 338)(46, PersonalDetailPage_ng_container_5_label_46_Template, 3, 1, "label", 339)(47, PersonalDetailPage_ng_container_5_ion_item_47_Template, 5, 4, "ion-item", 338)(48, PersonalDetailPage_ng_container_5_label_48_Template, 3, 1, "label", 339)(49, PersonalDetailPage_ng_container_5_ion_item_49_Template, 2, 0, "ion-item", 346);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 347)(51, "ion-button", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r1.formData);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.photo && !ctx_r1.profileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.photo && !ctx_r1.profileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.profileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.photo && !ctx_r1.profileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.firstnameField, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" +91 ", ctx_r1.savedphoneNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["First_Name"] && ctx_r1.personalConfig["First_Name"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["First_Name"] && ctx_r1.personalConfig["First_Name"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Last_Name"] && ctx_r1.personalConfig["Last_Name"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Last_Name"] && ctx_r1.personalConfig["Last_Name"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["DOB"] && ctx_r1.personalConfig["DOB"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["DOB"] && ctx_r1.personalConfig["DOB"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r1.pageDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Phone_Number"] && ctx_r1.personalConfig["Phone_Number"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Phone_Number"] && ctx_r1.personalConfig["Phone_Number"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Emergency_Phone_Number"] && ctx_r1.personalConfig["Emergency_Phone_Number"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Emergency_Phone_Number"] && ctx_r1.personalConfig["Emergency_Phone_Number"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Email_ID"] && ctx_r1.personalConfig["Email_ID"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Email_ID"] && ctx_r1.personalConfig["Email_ID"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Title"] && ctx_r1.personalConfig["Title"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Nationality"] && ctx_r1.personalConfig["Nationality"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Nationality"] && ctx_r1.personalConfig["Nationality"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["State"] && ctx_r1.personalConfig["State"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["State"] && ctx_r1.personalConfig["State"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["City"] && ctx_r1.personalConfig["City"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["City"] && ctx_r1.personalConfig["City"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Address"] && ctx_r1.personalConfig["Address"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.personalConfig["Address"] && ctx_r1.personalConfig["Address"] !== "Hide");
  }
}
class PersonalDetailPage {
  constructor(platform, authenticate, navCtrl, commonStorage, apiFactory, dateService, formBuilder, sanitizer, util, commonService, alertController, router, route, globalData, modalController, appData,
  // private iab: InAppBrowser,
  loader, modalCtrl, location) {
    var _this$metaData;
    this.platform = platform;
    this.authenticate = authenticate;
    this.navCtrl = navCtrl;
    this.commonStorage = commonStorage;
    this.apiFactory = apiFactory;
    this.dateService = dateService;
    this.formBuilder = formBuilder;
    this.sanitizer = sanitizer;
    this.util = util;
    this.commonService = commonService;
    this.alertController = alertController;
    this.router = router;
    this.route = route;
    this.globalData = globalData;
    this.modalController = modalController;
    this.appData = appData;
    this.loader = loader;
    this.modalCtrl = modalCtrl;
    this.location = location;
    this.metaData = {};
    this.appUrl = '';
    this.read = "readonly";
    this.mobileNumberPopup = false;
    this.otpNumberPopup = false;
    this.otpNotification = false;
    this.photo = '';
    this.deactivateNoteModal = false;
    this.deleteNoteModal = false;
    this.isLogin = false;
    this.object = Object;
    this.nationalityOptions = {
      header: "Select Country"
    };
    this.stateOptions = {
      header: "Select State"
    };
    this.cityOptions = {
      header: "Select City"
    };
    this.cardOptions = {
      header: "Select Card Type"
    };
    this.submit_data = {
      auth_token: '',
      phone_no: null
    };
    this.profileDataGet = {};
    this.resendbutton = false;
    this.verifyotpdata = {
      auth_token: '',
      phone_no: '',
      otp: '',
      key: ''
    };
    this.editmodeActive = false;
    this.whatsAppPopup = false;
    this.timerString = "";
    this.m = '';
    this.s = '';
    this.timerHideShow = false;
    this.saveFormdata = {
      auth_token: '',
      title: null,
      name: null,
      last_name: null,
      dob: null,
      emergency_phone: null,
      id_card_id: null,
      nationality_id: null,
      state_code: null,
      city_id: null,
      address: null
    };
    this.images = {
      name: '',
      path: '',
      filePath: ''
    };
    this.editPic = false;
    this.is_delete_request = false;
    this.pageDate = '';
    this.mineDisplaydate = [];
    this.selectedDate = '';
    this.profileImage = null; // Preview image
    this.selectedFile = null; // Selected file
    this.isCalenderOpen = false;
    this.today = new Date();
    this.todayDate = this.today.toISOString().split('T')[0];
    this.pageDate = this.todayDate;
    const yyyy = this.today.getFullYear();
    const threeYearsAgo = new Date(this.today.getFullYear() - 3, this.today.getMonth(), this.today.getDate());
    this.maxDate = threeYearsAgo.toISOString().split('T')[0];
    let mm = this.today.getMonth() + 1; // Months start at 0!
    let dd = this.today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    this.today = yyyy + '-' + mm + '-' + dd;
    this.metaData = this.commonStorage.getItem('metaData');
    this.idCardTypes = this.metaData.idCardTypes;
    const rawIdCardTypes = (_this$metaData = this.metaData) === null || _this$metaData === void 0 ? void 0 : _this$metaData.idCardTypes;
    if (Array.isArray(rawIdCardTypes)) {
      this.idCardTypes = rawIdCardTypes.map(item => {
        var _item$card_id, _item$card_type;
        return {
          card_id: (_item$card_id = item === null || item === void 0 ? void 0 : item.card_id) !== null && _item$card_id !== void 0 ? _item$card_id : '',
          card_type: String((_item$card_type = item === null || item === void 0 ? void 0 : item.card_type) !== null && _item$card_type !== void 0 ? _item$card_type : '')
        };
      });
    } else {
      this.idCardTypes = Object.entries(rawIdCardTypes || {}).map(([key, value]) => {
        return {
          card_id: value,
          card_type: String(key)
        };
      });
    }
    this.logo = this.commonStorage.getItem("metaData").headerLogo;
    this.nationalityData = this.commonStorage.getItem('locale');
    this.personalConfig = this.metaData.personalConfig;
    this.validations();
    this.phoneNumCount = this.commonStorage.localGet('metaData').phoneNumCount;
    //  this.nationChange(this.commonStorage.localGet("statedata"));
    if (this.metaData.personalConfig.Nationality == "Hide" && this.metaData.personalConfig.State && this.metaData.personalConfig.State !== "Hide") this.nationChange(':IN');else this.nationChange(this.commonStorage.localGet("statedata"));
  }
  formdetailsSet(profileDataGet) {
    setTimeout(() => {
      this.titleField = profileDataGet ? profileDataGet ? profileDataGet.title : "" : "";
      this.firstnameField = profileDataGet ? profileDataGet.first_name : "";
      this.lastnameField = profileDataGet ? profileDataGet.last_name : "";
      this.dobField = profileDataGet ? profileDataGet.dob : "";
      this.savedphoneNumber = profileDataGet ? profileDataGet.mobile_number : "";
      this.emergencynoField = profileDataGet ? profileDataGet.emergency_phone : "";
      this.emailfield = profileDataGet ? profileDataGet.email : "";
      this.idcardDetail = profileDataGet ? profileDataGet.id_card_details : "";
      this.addressField = profileDataGet ? profileDataGet.address : "";
      this.photo = profileDataGet ? profileDataGet.profile_pic : "";
      if (this.photo == '') {
        this.editPic = true;
      }
      this.cityName = profileDataGet ? profileDataGet.city : "";
      this.stateName = profileDataGet ? profileDataGet.state : "";
      this.countryName = profileDataGet ? profileDataGet.nationality : "";
      this.updateFormWithExistingData(profileDataGet);
      this.nationCode1 = this.nationCode;
      this.stateCode1 = this.stateCode;
      this.cityCode1 = this.cityCode;
      this.splitData = this.emailfield.split('@')[1];
      this.firstData = this.emailfield.slice(0, 4);
      if (this.splitData == 'ticketsimply-tmp.com' || this.splitData == 'ourbus-tmp.in') {
        this.emailfield = this.formData.value.email;
      }
    }, 100);
  }
  updateFormWithExistingData(profileDataGet) {
    var _profileDataGet$id_ca, _profileDataGet$id_ca2;
    if (!profileDataGet) return;
    this.formData.patchValue({
      titlesex: profileDataGet.title || '',
      name: profileDataGet.first_name || '',
      lastName: profileDataGet.last_name || '',
      dateofbirth: profileDataGet.dob || '',
      phoneNumber: profileDataGet.mobile_number || '',
      emergencyPhoneNumber: profileDataGet.emergency_phone || '',
      email: profileDataGet.email || '',
      id_card_type: ((_profileDataGet$id_ca = profileDataGet.id_card_details) === null || _profileDataGet$id_ca === void 0 || (_profileDataGet$id_ca = _profileDataGet$id_ca[0]) === null || _profileDataGet$id_ca === void 0 ? void 0 : _profileDataGet$id_ca.id_card_id) || '',
      id_card_number: ((_profileDataGet$id_ca2 = profileDataGet.id_card_details) === null || _profileDataGet$id_ca2 === void 0 || (_profileDataGet$id_ca2 = _profileDataGet$id_ca2[0]) === null || _profileDataGet$id_ca2 === void 0 ? void 0 : _profileDataGet$id_ca2.id_card_no) || '',
      country: profileDataGet.nationality_id || this.nationCode || '',
      state: profileDataGet.state_code || this.stateCode || '',
      city: profileDataGet.city_id || this.cityCode || '',
      address: profileDataGet.address || ''
    });
  }
  ionViewDidEnter() {
    this.loader.showLoadingDefault();
    this.apiFactory.getprofileData().subscribe(resultData => {
      this.profileDataGet = resultData;
      this.nationCode = this.profileDataGet ? this.profileDataGet.nationality_id : "";
      this.stateCode = this.profileDataGet ? this.profileDataGet.state_code : "";
      this.cityCode = this.profileDataGet ? this.profileDataGet.city_id : "";
      this.commonStorage.localSet("forcitydata", this.stateCode);
      this.is_delete_request = this.profileDataGet.is_delete_request;
      this.loader.hideLoadingDefault();
      this.formdetailsSet(this.profileDataGet);
    }, err => {
      this.loader.hideLoadingDefault();
    });
  }
  ngOnInit() {
    this.appData.newTheme = this.util.getNewTheme();
    this.countryData = _countries_countries_json__WEBPACK_IMPORTED_MODULE_3__;
    this.countryData = this.countryData.filter(country => country.dialCode === '+91');
    this.personalConfig = this.metaData.personalConfig;
  }
  cardChange(ev) {
    var _cards$filter$;
    let cards = this.idCardTypes;
    this.cardType = (_cards$filter$ = cards.filter(data => {
      return data.card_id == ev.detail.value;
    })[0]) === null || _cards$filter$ === void 0 ? void 0 : _cards$filter$.card_type;
    this.formData.controls['id_card_number'].setValue('');
    setTimeout(() => {
      let ele = document.getElementById('id_num');
      if (ele) ele.setFocus();
    }, 800);
  }
  validations() {
    this.formData = this.formBuilder.group({
      titlesex: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl('', this.personalConfig.Title === 'Mandatory' ? [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required] : []),
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl('', this.personalConfig.First_Name === 'Mandatory' ? [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required] : []),
      lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl('', this.personalConfig.Last_Name === 'Mandatory' ? [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required] : []),
      dateofbirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl('', this.personalConfig.DOB === 'Mandatory' ? [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required] : []),
      emergencyPhoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl('', this.personalConfig.Emergency_Phone_Number === 'Mandatory' ? [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(10)] : []),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl('', this.personalConfig.Email_ID === 'Mandatory' ? [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _services_validator_service__WEBPACK_IMPORTED_MODULE_4__.ValidatorService.emailValidator] : []),
      id_card_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl('', this.personalConfig.ID_Card === 'Mandatory' ? [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required] : []),
      id_card_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl('', this.personalConfig.ID_Card === 'Mandatory' ? [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern('[A-Za-z0-9]*')] : []),
      country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl('', this.personalConfig.Nationality === 'Mandatory' ? [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required] : []),
      state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl('', this.personalConfig.State === 'Mandatory' ? [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required] : []),
      city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl('', this.personalConfig.City === 'Mandatory' ? [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required] : []),
      address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl('', this.personalConfig.Address === 'Mandatory' ? [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required] : []),
      phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl('', this.personalConfig.Phone_Number === 'Mandatory' ? [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(10)] : [])
    });
  }
  validFields() {
    if (this.formData.controls['titlesex'].invalid) {
      this.util.showToast('please select gender', 'bottom');
      return false;
    }
    if (this.formData.controls['name'].invalid) {
      this.util.showToast('please enter name', 'bottom');
      return false;
    }
    if (this.formData.controls['lastName'].invalid) {
      this.util.showToast('please enter last name ', 'bottom');
      return false;
    }
    if (this.formData.controls['dateofbirth'].invalid) {
      this.util.showToast('please select Date of Birth ', 'bottom');
      return false;
    }
    if (this.formData.controls['emergencyPhoneNumber'].invalid) {
      this.util.showToast('please enter Emergency Phone Number', 'bottom');
      return false;
    }
    if (this.formData.controls['email'].invalid) {
      this.util.showToast('please enter email id', 'bottom');
      return false;
    }
    if (this.idcardDetail.length > 0 && this.idcardDetail[0].id_card_type == "" && this.formData.controls['id_card_type'].invalid && this.metaData.msiteFolder != 'shyamolitheme') {
      this.util.showToast('please select ID Card Type', 'bottom');
      return false;
    }
    if (this.idcardDetail.length > 0 && this.idcardDetail[0].id_card_no == "" && this.formData.controls['id_card_number'].invalid && this.metaData.msiteFolder != 'shyamolitheme') {
      this.util.showToast('please enter ID Card Number', 'bottom');
      return false;
    }
    if (this.formData.controls['country'].invalid) {
      this.util.showToast('please select Country', 'bottom');
      return false;
    }
    if (this.formData.controls['state'].invalid) {
      this.util.showToast('please select State', 'bottom');
      return false;
    }
    if (this.formData.controls['city'].invalid) {
      this.util.showToast('please select City', 'bottom');
      return false;
    }
    if (this.formData.controls['address'].invalid) {
      this.util.showToast('please enter Address', 'bottom');
      return false;
    }
    return true;
  }
  onsubmit() {
    if (this.validFields()) {
      this.updateFormData = {
        "auth_token": this.authenticate.token,
        "title": this.formData.value.titlesex ? this.formData.value.titlesex : this.titleField,
        "name": this.formData.value.name ? this.formData.value.name : this.firstnameField,
        "last_name": this.formData.value.lastName ? this.formData.value.lastName : this.firstnameField,
        "dob": this.formData.value.dateofbirth ? this.formData.value.dateofbirth : this.dobField,
        "emergency_phone": this.formData.value.emergencyPhoneNumber ? this.formData.value.emergencyPhoneNumber : this.emergencynoField,
        "id_card_details": {
          "id_card_id": this.formData.value.id_card_type ? Number(this.formData.value.id_card_type) : this.idcardDetail.length > 0 && this.idcardDetail[0].id_card_id ? Number(this.idcardDetail[0].id_card_id) : 0,
          "id_card_number": this.formData.value.id_card_number ? this.formData.value.id_card_number : this.idcardDetail.length > 0 && this.idcardDetail[0].id_card_no ? this.idcardDetail[0].id_card_no : "",
          "id_card_type": this.cardType ? this.cardType : this.idcardDetail.length > 0 && this.idcardDetail[0].id_card_type ? this.idcardDetail.length > 0 && this.idcardDetail[0].id_card_type : ""
        },
        "nationality_id": this.formData.value.country && this.personalConfig['Nationality'] && this.personalConfig['Nationality'] !== 'Hide' ? this.formData.value.country : this.personalConfig['Nationality'] && this.personalConfig['Nationality'] === 'Hide' ? ':IN' : '',
        "state_code": this.formData.value.state ? this.formData.value.state : this.profileDataGet.state_code,
        "city_id": this.formData.value.city ? this.formData.value.city : this.profileDataGet.city_id,
        "address": this.formData.value.address ? this.formData.value.address : this.profileDataGet.address,
        "email": this.formData.value.email ? this.formData.value.email : this.profileDataGet.email
      };
      this.apiFactory.updateAllData(this.updateFormData).subscribe(data => {
        if (data.code == 200) {
          if (this.metaData.msiteFolder == 'ourbustheme') {
            if (this.firstnameField != this.formData.value.name || this.lastnameField != this.formData.value.lastName || this.emailfield != this.formData.value.email || this.savedphoneNumber == this.phoneNumber) {
              this.onUserLogin(this.formData.value.name, this.formData.value.lastName == null ? this.firstnameField : this.formData.value.lastName, this.formData.value.email, this.savedphoneNumber);
            }
          }
          this.util.showToast(data.message, 'bottom');
          const background = Array.from(document.getElementsByClassName('rectangle-box'));
          background.forEach(element => {
            element.style.background = '#f3f3f3';
          });
          localStorage.setItem('savedformData', JSON.stringify(this.updateFormData));
          this.navCtrl.navigateForward('/tabs/more');
        } else {
          this.util.showToast(data.message, 'bottom');
        }
      }, error => {
        this.util.showToast(error, 'bottom');
      });
    } else {
      // this.util.showToast('something went wrong', 'bottom');
    }
  }
  updateShyamoliProfile() {
    if (this.formData.invalid) {
      this.util.showToast('Please fill all required fields', 'bottom');
      return;
    }
    const updateData = {
      auth_token: this.authenticate.token,
      name: this.formData.value.name,
      dob: this.formData.value.dateofbirth,
      phone_number: this.formData.value.phoneNumber,
      emergency_phone: this.formData.value.emergencyPhoneNumber,
      email: this.formData.value.email,
      title: this.formData.value.titlesex,
      nationality_id: this.formData.value.country,
      state_code: this.formData.value.state,
      city_id: this.formData.value.city,
      address: this.formData.value.address
    };
    this.apiFactory.updateAllData(updateData).subscribe(data => {
      if (data.code === 200) {
        this.util.showToast('Profile updated successfully', 'bottom');
        // Optionally update local variables if needed
        this.firstnameField = this.formData.value.name;
        this.dobField = this.formData.value.dateofbirth;
        this.savedphoneNumber = this.formData.value.phoneNumber;
        this.emergencynoField = this.formData.value.emergencyPhoneNumber;
        this.emailfield = this.formData.value.email;
        this.addressField = this.formData.value.address;
        localStorage.setItem('savedformData', JSON.stringify(this.updateFormData));
        this.navCtrl.navigateForward('/tabs/more');
      } else {
        this.util.showToast(data.message, 'bottom');
      }
    }, error => {
      this.util.showToast('Update failed', 'bottom');
    });
  }
  onInputChange(ev) {
    const input = ev.target;
    let value = input.value;
    let name = '';
    name = value;
    name = name.replace(/[^A-Za-z\s]/g, '');
    this.formData.controls['name'].setValue(name);
  }
  onInputChange_lastname(ev) {
    const input = ev.target;
    let value = input.value;
    let name = '';
    name = value;
    name = name.replace(/[^A-Za-z\s]/g, '');
    this.formData.controls['lastName'].setValue(name);
  }
  OnInputChange() {
    let mob = this.formData.value.emergencyPhoneNumber && this.formData.value.emergencyPhoneNumber.toString() !== '' ? this.formData.value.emergencyPhoneNumber.toString() : '';
    if (mob.length > 10) {
      this.formData.controls['emergencyPhoneNumber'].setValue(Number(mob.substr(0, 10)));
    }
  }
  showmobilePopup() {
    if (this.metaData.msiteFolder == 'ourbustheme') {
      this.numberOTP = '';
    }
    this.mobileNumberPopup = !this.mobileNumberPopup;
    if (this.mobileNumberPopup == true) {
      const background = Array.from(document.getElementsByClassName('rectangle-box'));
      background.forEach(element => {
        element.style.background = '#9b9b9b8c';
      });
      const formcontrol = Array.from(document.getElementsByClassName('myformControls'));
      formcontrol.forEach(element => {
        element.setAttribute("style", "--background: '#9b9b9b8c';");
      });
    } else if (this.mobileNumberPopup == false && this.editmodeActive == false) {
      const background = Array.from(document.getElementsByClassName('rectangle-box'));
      background.forEach(element => {
        element.style.background = '#f3f3f3';
      });
    } else if (this.mobileNumberPopup == false && this.editmodeActive == true) {
      const test = Array.from(document.getElementsByClassName('ionInputText'));
      test.forEach(element => {
        element.setAttribute("readonly", "false");
      });
      const backgroundc = Array.from(document.getElementsByClassName('rectangle-box'));
      backgroundc.forEach(element => {
        element.style.background = 'white';
      });
      const formcontrol = Array.from(document.getElementsByClassName('myformControls'));
      formcontrol.forEach(element => {
        element.setAttribute("style", "--background: 'white';");
      });
    }
  }
  cancelAllPopup() {
    this.mobileNumberPopup = false;
    this.resendbutton = false;
    this.otpNumberPopup = false;
    if (this.mobileNumberPopup == false && this.editmodeActive == false) {
      const background = Array.from(document.getElementsByClassName('rectangle-box'));
      background.forEach(element => {
        element.style.background = '#f3f3f3';
      });
    } else if (this.mobileNumberPopup == false && this.editmodeActive == true) {
      const test = Array.from(document.getElementsByClassName('ionInputText'));
      test.forEach(element => {
        element.setAttribute("readonly", "false");
      });
      const backgroundc = Array.from(document.getElementsByClassName('rectangle-box'));
      backgroundc.forEach(element => {
        element.style.background = 'white';
      });
      const formcontrol = Array.from(document.getElementsByClassName('myformControls'));
      formcontrol.forEach(element => {
        element.setAttribute("style", "--background: 'white';");
      });
    }
  }
  resendOtp(phoneNumber) {
    this.submit_data = {
      "auth_token": this.authenticate.token,
      "phone_no": phoneNumber
    };
    this.apiFactory.updatePhoneNumber(this.submit_data).subscribe(data => {
      this.otpInformation = data;
      if ('otp' in this.otpInformation) {
        this.mobileNumberPopup = false;
        this.otpNumberPopup = true;
        this.otpNotification = true;
        this.resendbutton = false;
        this.timerHideShow = true;
        this.timer(59);
      } else {
        this.util.showToast(data.message, 'bottom');
      }
    }, error => {
      this.util.showToast(error, 'bottom');
    });
  }
  timer(remaining) {
    let m = Math.floor(remaining / 60);
    let s = remaining % 60;
    if (this.metaData.msiteFolder == 'ourbustheme') {
      const mFormatted = m < 10 ? '0' + m : m;
      const sFormatted = s < 10 ? '0' + s : s;
      this.timerString = `${mFormatted}:${sFormatted}`;
    } else {
      this.m = m < 10 ? '0' + m : m;
      this.s = s < 10 ? '0' + s : s;
      this.timerString = m + ':' + s;
    }
    remaining -= 1;
    if (remaining >= 0) {
      this.timeoutId = setTimeout(() => {
        this.timer(remaining);
      }, 1000);
      return;
    } else {
      this.timerHideShow = false;
      this.resendbutton = true;
    }
  }
  otpnumberPopup(number) {
    this.submit_data = {
      "auth_token": this.authenticate.token,
      "phone_no": number
    };
    this.apiFactory.updatePhoneNumber(this.submit_data).subscribe(data => {
      this.otpInformation = data;
      if ('otp' in this.otpInformation) {
        this.timerHideShow = true;
        this.timer(59);
        this.mobileNumberPopup = false;
        this.otpNumberPopup = !this.otpNumberPopup;
        const formcontrol = Array.from(document.getElementsByClassName('phone-block-popup'));
        formcontrol.forEach(element => {
          element.setAttribute("style", "height: 70%;");
        });
        this.util.showToast('Please enter the OTP which has been sent to the Mobile Number!', 'bottom');
      } else {
        this.util.showToast(data.message, 'bottom');
      }
    }, error => {
      this.util.showToast(error, 'bottom');
    });
  }
  topTimer() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId); // Cancel the timeout
      this.timeoutId = null; // Reset the timeout ID
    }
  }
  verifyotpnumber(otp) {
    this.verifyotpdata = {
      "auth_token": this.authenticate.token,
      "phone_no": this.phoneNumber,
      "otp": otp,
      "key": this.otpInformation.key
    };
    this.apiFactory.verifyOTP(this.verifyotpdata).subscribe(data => {
      this.topTimer();
      if (data.code != 200) {
        this.util.showToast(data.message, 'bottom');
      } else if (data.code == 200) {
        this.cancelAllPopup();
        this.savedphoneNumber = this.phoneNumber;
        localStorage.setItem('savedphone', this.savedphoneNumber);
        this.util.showToast(data.message, 'bottom');
      }
    }, error => {
      this.util.showToast(error, 'bottom');
    });
  }
  nationChange(nation) {
    this.apiFactory.getStateList(nation).subscribe(result => {
      this.stateList = result.states;
      if (result.code == 200) {
        this.stateChange(this.commonStorage.localGet("forcitydata"), nation);
      }
    }, err => {});
  }
  stateChange(state, nation) {
    this.apiFactory.getCityList(state, nation).subscribe(result => {
      this.CityList = result.city;
      if (result.code == 200) {
        this.cityChange(this.cityCode);
      }
    }, err => {});
  }
  cityChange(city) {}
  deactivateAcc() {
    if (!this.is_delete_request) {
      this.deactivateNoteModal = true;
    }
  }
  deactivateAccConfirm() {
    this.apiFactory.deactivateConsumerStatus(this.authenticate.token, '2').subscribe(res => {
      if (res.code == 200) {
        this.authenticate.logout();
        this.util.showToast(res.message);
        this.navCtrl.navigateForward('tabs/home');
      } else {
        this.util.showToast(res.message);
      }
    }, err => {});
  }
  deleteAcc() {
    if (!this.is_delete_request) {
      this.deleteNoteModal = true;
    }
  }
  deleteAccConfirm() {
    let path = '?authentication_token=' + this.authenticate.token;
    this.apiFactory.deleteConsumerStatus(path).subscribe(res => {
      if (res.code == 200) {
        this.presentAlert('', res.message);
      } else {
        this.util.showToast(res.message);
      }
    }, err => {});
  }
  presentAlert(title, msg) {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: title,
        message: msg,
        backdropDismiss: false,
        buttons: [{
          text: 'Ok',
          handler: () => {
            window.location.reload();
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
  enforceMaxLength(event) {
    const input = event.target;
    let sanitizedValue = input.value.replace(/[^0-9]/g, '');
    sanitizedValue = sanitizedValue.slice(0, 10);
    input.value = sanitizedValue;
    const trimmedValue = parseInt(input.value, 10).toString();
    if (trimmedValue == '0') {
      input.value = '';
      return;
    }
  }
  enforceMaxLengthOtp(event) {
    const input = event.target;
    let sanitizedValue = input.value.replace(/[^0-9]/g, '');
    sanitizedValue = sanitizedValue.slice(0, 6);
    input.value = sanitizedValue;
  }
  goToMore() {
    this.navCtrl.navigateForward('tabs/more');
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
      this.pageDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(newDate, 'yyyy-MM-dd');
      if (this.metaData.msiteFolder == 'ourbustheme') {
        this.dobField = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(newDate, 'dd/MM/yyyy');
        this.formData.controls['dateofbirth'].setValue(this.dobField);
      } else {
        this.dobField = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(newDate, 'dd-MM-yyyy');
        this.formData.controls['dateofbirth'].setValue(this.dobField);
      }
      var aryDates = this.GetDatesPro(newDate, 6);
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
  checkclick() {
    this.cancelAllPopup();
  }
  stopClose(event) {
    event.stopPropagation();
  }
  onDateSelected(event) {
    let dateObj = new Date(event.detail.value);
    const result = this.dateService.formattedDateData(dateObj);
    this.dobField = result.formattedBirthDate;
  }
  handleBackButton() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['tabs/home']);
    }
  }
  restrictToTenDigits(event) {
    const input = event.target.value;
    if (input.length > 10) {
      var _this$formData$get;
      event.target.value = input.slice(0, 10);
      (_this$formData$get = this.formData.get('emergencyPhoneNumber')) === null || _this$formData$get === void 0 || _this$formData$get.setValue(input.slice(0, 10));
    }
  }
  onFileSelected(event) {
    const fileInput = event.target;
    if (fileInput.files && fileInput.files[0]) {
      this.selectedFile = fileInput.files[0];
      const reader = new FileReader();
      reader.onload = e => {
        var _e$target$result, _e$target;
        this.profileImage = (_e$target$result = (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.result) !== null && _e$target$result !== void 0 ? _e$target$result : null;
      };
      reader.readAsDataURL(this.selectedFile);
      this.uploadProfileImage();
    }
  }
  triggerFileInput() {
    const fileInput = document.getElementById('fileInput');
    fileInput.click();
  }
  uploadProfileImage() {
    if (!this.selectedFile) {
      return;
    }
    this.loader.showLoadingDefault();
    this.apiFactory.updateProfileImage(this.selectedFile).subscribe(res => {
      if (res.code == '200') {
        this.util.showToast(res.message);
        this.loader.hideLoadingDefault();
      } else {
        this.loader.hideLoadingDefault();
        this.photo = this.photo;
        this.profileImage = '';
        this.util.showToast(res.message);
      }
    }, err => {
      this.loader.hideLoadingDefault();
    });
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
      // CleverTap.onUserLogin(profile);
      this.util.cleverTapEvent("", profile, false, true);
    }
  }
  openCalendar() {
    if (this.isCalenderOpen) {
      return;
    }
    this.isCalenderOpen = true;
  }
}
_PersonalDetailPage = PersonalDetailPage;
_PersonalDetailPage.ɵfac = function PersonalDetailPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PersonalDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_authentication__WEBPACK_IMPORTED_MODULE_8__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_9__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_10__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_11__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_13__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_14__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_global_data_service__WEBPACK_IMPORTED_MODULE_16__.GlobalDataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_17__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_18__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.Location));
};
_PersonalDetailPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _PersonalDetailPage,
  selectors: [["app-personal-detail"]],
  standalone: false,
  decls: 6,
  vars: 6,
  consts: [["emergencyInput", ""], ["countrySelect", ""], ["stateSelect", ""], ["citySelect", ""], [4, "ngIf"], ["mode", "ios", 1, "ion-no-border", "theme1"], ["mode", "ios", "mode", "md", 2, "--border-width", "0px", 3, "ngClass"], [1, "themeone-head", 2, "margin-right", "40px"], ["slot", "start"], [2, "color", "#333333"], ["fullscreen", "true", 1, "themeone-bg-content", "theme1", 2, "--offset-top", "1px !important", "z-index", "inherit"], [1, "center-div"], [1, "profileForm", 3, "ngSubmit", "formGroup"], [2, "width", "-webkit-fill-available", "display", "flex", "justify-content", "center", "align-items", "center"], ["lines", "none", 1, "themeone-ion-item", 2, "--padding-start", "8px"], [1, "photoButton", 2, "text-align", "center", "height", "124px", "width", "124px"], ["src", "./assets/icon/themeone-profileimg.svg", "class", "icon-img", "style", "height: 124px;width: 124px; border-radius: 50%;", "item-start", "", "alt", "Default Profile Image", 4, "ngIf"], ["class", "icon-img", "style", "height: 124px;width: 124px; border-radius: 50%;", "item-start", "", "alt", "User Photo", 3, "src", 4, "ngIf"], ["class", "icon-img", "style", "height: 124px;width: 124px; border-radius: 50%;", "item-start", "", "alt", "Profile Image", 3, "src", 4, "ngIf"], [1, "upload-icon", 2, "background-color", "var(--homaPageHeadingTextColor)"], ["src", "./assets/icon/ourbus_edit_pencil.svg", "size", "large", 2, "height", "20px", "margin-top", "4px", "filter", "invert(1) brightness(2)", 3, "click"], [1, "profile-container"], ["type", "file", "accept", "image/*", "id", "fileInput", "hidden", "", 3, "change"], [2, "width", "-webkit-fill-available", "display", "grid", "justify-content", "center", "text-align", "center"], [1, "themeone_namelbl", 2, "padding", "5px 0px 8px 0px"], [1, "themeone_mobilelbl"], [1, "themeone-ion-item"], ["label", "Name", "labelPlacement", "floating", "type", "text", "formControlName", "name", 1, "themeone-input-text", "themeone-txt-lbl", "input-txt", 2, "margin-bottom", "4px", "min-height", "50px", 3, "value"], ["label", "Last Name", "labelPlacement", "floating", "type", "text", "formControlName", "lastName", 1, "themeone-input-text", "themeone-txt-lbl", 2, "margin-bottom", "4px", "min-height", "50px", 3, "value"], [1, "themeone-ion-item", 3, "click"], ["src", "./assets/icon/calendar-2-line.svg", "alt", "", "slot", "end", 2, "align-self", "end", "margin-bottom", "10px"], [1, "themeone-txt-lbl", "txt-lbl", 2, "font-size", "15px", "margin-bottom", "4px", "min-height", "50px", "width", "100%"], [2, "font-size", "12px"], [2, "font-size", "15px", "margin-top", "4px"], [3, "dateSelected", "isOpenChange", "value", "max", "isOpen"], [2, "width", "100%"], ["size", "9"], ["label", "Phone Number", "labelPlacement", "floating", "type", "tel", "readonly", "", 1, "themeone-input-text", "themeone-txt-lbl", 2, "margin-bottom", "4px", "min-height", "50px", 3, "value"], ["size", "3"], ["expand", "block", 1, "themeone-btnEdit", 3, "click", "ngClass"], ["label", "Emergency Phone", "labelPlacement", "floating", "type", "tel", "formControlName", "emergencyPhoneNumber", "oninput", "value = value.replace(/[^0-9.]/g, '').replace(/(\\..*?)\\..*/g, '$1');", 1, "themeone-input-text", "themeone-txt-lbl", 2, "margin-bottom", "4px", "min-height", "50px", 3, "ionInput", "value"], ["class", "themeone-ion-item", 4, "ngIf"], ["style", "background-color: #f1f1f1;", 4, "ngIf"], [2, "font-size", "12px", "color", "#5F5F5F", "padding-bottom", "10px", "margin-left", "12px", "margin-top", "19px", "font-weight", "bold"], [2, "padding-bottom", "5px", "margin-left", "12px"], [3, "ngClass"], ["formControlName", "titlesex", "mode", "md", 1, "tabs", 3, "value"], ["value", "Mr", 1, "segone"], ["value", "Ms", 1, "segtwo"], ["label", "Nationality", "label-placement", "floating", "color", "red", "interface", "popover eeee", "placeholder", "Select Country", "formControlName", "country", 1, "themeone-input-text", "themeone-inputselect", 3, "ngModelChange", "ionChange", "value", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["label", "State", "label-placement", "floating", "id", "stateSelection", "color", "red", "interface", "popover eeee", "placeholder", "Select State", "formControlName", "state", 1, "themeone-input-text", "themeone-inputselect", 3, "ngModelChange", "ionChange", "value", "ngModel"], ["label", "City", "label-placement", "floating", "id", "citySelection", "color", "red", "interface", "popover eeee", "placeholder", "Select City", "formControlName", "city", "label", "City", "label-placement", "floating", 1, "themeone-input-text", "themeone-inputselect", 3, "ngModelChange", "ionChange", "value", "ngModel"], ["lines", "none", 1, "themeone-ion-item"], ["label", "Address", "labelPlacement", "floating", "formControlName", "address", 1, "themeone-input-text", 2, "border-bottom", "1px solid #ccc", 3, "value"], ["mode", "md", "expand", "block", "type", "submit", 3, "ngClass"], ["class", "whole center", 3, "click", 4, "ngIf"], ["src", "./assets/icon/themeone-profileimg.svg", "item-start", "", "alt", "Default Profile Image", 1, "icon-img", 2, "height", "124px", "width", "124px", "border-radius", "50%"], ["item-start", "", "alt", "User Photo", 1, "icon-img", 2, "height", "124px", "width", "124px", "border-radius", "50%", 3, "src"], ["item-start", "", "alt", "Profile Image", 1, "icon-img", 2, "height", "124px", "width", "124px", "border-radius", "50%", 3, "src"], ["label", "Email", "labelPlacement", "floating", "type", "email", "formControlName", "email", "readonly", "", 1, "themeone-input-text", "themeone-txt-lbl", 2, "margin-bottom", "4px", "min-height", "50px", 3, "value"], ["position", "floating", 1, "themeone-txt-lbl"], ["label", "Email", "labelPlacement", "floating", "type", "email", "formControlName", "email", 1, "themeone-input-text", "themeone-txt-lbl", 3, "value"], [2, "background-color", "#f1f1f1"], ["position", "floating", 1, "themeone-txt-lbl", 2, "margin-left", "17px", "font-size", "10px"], ["class", "mandatory_star", 4, "ngIf"], ["size", "6"], ["label", "ID Type", "labelPlacement", "floating", "formControlName", "id_card_type", "interface", "popover", "placeholder", "Select Card", 1, "themeone-input-text", "themeone-txt-lbl", 3, "ionChange"], ["id", "id_num", "label", "ID No.", "labelPlacement", "floating", "type", "text", "formControlName", "id_card_number", 1, "themeone-input-text", "themeone-txt-lbl", 2, "min-height", "53px"], [1, "mandatory_star"], [3, "value"], [1, "whole", "center", 3, "click"], [1, "themeone-legend-box", 3, "click"], [1, "themepersonal-text", 2, "font-weight", "bolder"], [2, "padding", "15px 0px"], ["label", "Mobile Number", "labelPlacement", "floating", "required", "", "type", "text", "size", "10", "maxlength", "10", "oninput", "this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*?)\\..*/g, '$1');", "value", "Samarpit", 3, "ngModelChange", "ngModel"], ["size", "4"], ["size", "4", 1, "brws-txt", 2, "font-size", "14px", "color", "#333", "text-align", "right"], ["size", "4", 1, "dwn-txt", 2, "font-size", "14px", 3, "click", "ngStyle"], ["size", "9", 2, "padding", "0"], ["required", "", "type", "text", "size", "6", "maxlength", "6", "oninput", "this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*?)\\..*/g, '$1');", "placeholder", "Enter OTP", 2, "border-bottom", "1px solid #bbbaba", "border-radius", "3px", 3, "ngModelChange", "ngModel"], ["size", "3", 2, "padding", "0", "text-align", "center"], ["id", "timer", "style", "    vertical-align: -webkit-baseline-middle;", 4, "ngIf"], ["size", "2", "class", "dwn-txt", "style", "    text-align: center;\n            font-size: 14px;", 3, "click", 4, "ngIf"], ["size", "5", 1, "dwn-txt", 2, "font-size", "14px", "color", "#191966", 3, "click"], ["id", "timer", 2, "vertical-align", "-webkit-baseline-middle"], ["size", "2", 1, "dwn-txt", 2, "text-align", "center", "font-size", "14px", 3, "click"], [1, "legend-box"], [1, "txt-msg-hd"], [1, "txt-msg1"], ["size", "4", 1, "brws-txt1", 3, "click"], ["size", "4", 3, "click", "ngClass"], [1, "ourbustheme"], ["mode", "md", 2, "padding", "8px"], ["size", "2", 2, "display", "flex"], [3, "click"], ["size", "7", 2, "display", "flex", "align-items", "center", "justify-content", "center"], [1, "editProfile"], [1, "ourbustheme", 2, "--background", "white"], [2, "padding", "16px 10px 8px 3px"], ["size", "0.3"], ["size", "2"], ["src", "./assets/icon/ourbus_profile.svg", "class", "icon-img", "style", "width: 50px;height: 50px;border-radius: 100px;", "item-start", "", 4, "ngIf"], ["class", "icon-img", "style", "width: 50px;height: 50px;border-radius: 100px;", "item-start", "", 3, "src", 4, "ngIf"], ["class", "icon-img", "style", "height: 50px;width: 50px; border-radius: 50%;", "item-start", "", "alt", "Profile Image", 3, "src", 4, "ngIf"], ["src", "./assets/icon/ourbus_edit_pencil.svg", "size", "large", 2, "height", "20px", "width", "20px", "position", "absolute", "bottom", "6px", "right", "-2px", 3, "click"], ["size", "8", 2, "margin-top", "auto", "margin-bottom", "auto"], [1, "textSet"], ["size", "12"], ["lines", "none", "mode", "md", 1, "ourbus_custom_input", 2, "--inner-padding-end", "0", "--padding-start", "0px"], ["label", "First Name", "labelPlacement", "floating", "type", "text", "fill", "outline", "formControlName", "name", "maxlength", "25", "placeholder", "Enter first name", 1, "ourbus_inputText", "ourbus_labelSet", 3, "input", "value"], ["label", "Last Name", "labelPlacement", "floating", "type", "text", "fill", "outline", "formControlName", "lastName", "maxlength", "25", "placeholder", "Enter last name", 1, "ourbus_inputText", "ourbus_labelSet", 3, "input", "value"], ["lines", "none", "mode", "md", "style", "--inner-padding-end: 0; --padding-start: 0px;", 4, "ngIf"], ["lines", "none", "mode", "md", "class", "ourbus_custom_input", "style", "--inner-padding-end: 0; --padding-start: 0px;", 4, "ngIf"], ["size", "6", 2, "padding", "0px"], ["lines", "none", "mode", "md", "id", "open-date-input-3", 1, "ourbus_custom_input"], ["fill", "outline", "label", "DOB", "labelPlacement", "floating", "type", "text", "formControlName", "dateofbirth", 1, "ourbus_inputText", "ourbus_labelSet", 2, "margin-top", "8px", "--padding-end", "60px", 3, "value"], ["src", "./assets/icon/Calendar copy.svg", "alt", "", "slot", "end", 2, "margin", "0px", "position", "absolute", "right", "30px", "top", "25px"], ["trigger", "open-date-input-3", 3, "dateSelected", "value", "max"], ["mode", "ios", "formControlName", "titlesex", 2, "height", "60px", 3, "value"], ["value", "Mr", 1, "ourbus_segment"], ["value", "Ms"], [2, "margin", "8px", "display", "flex", "align-items", "center"], ["size", "1", 2, "padding-top", "10px"], ["src", "././assets/icon/ourbusPhone.svg", "alt", "", 2, "margin", "0px"], ["size", "11"], ["size", "3.5"], ["lines", "none", "mode", "md", "class", "ourbus_custom_input ourbus_item_outline", "style", "margin-top: 7px !important;margin-left: 10px;", 4, "ngFor", "ngForOf"], ["size", "8.5"], ["lines", "none", "mode", "md", 1, "ourbus_custom_input"], ["fill", "outline", "label", "Phone Number", "labelPlacement", "floating", "placeholder", "Enter phone number", "type", "number", "readonly", "", 1, "ourbus_inputText", "ourbus_labelSet", 2, "--padding-end", "60px", 3, "value"], ["slot", "end", 1, "btnEdit", 2, "--background", "var(--iconsAndButtonsColor)", "--color", "var(--primaryText)", "margin-top", "auto", "margin-bottom", "auto", "position", "absolute", "right", "30px", "top", "16px", 3, "click"], ["fill", "outline", "label", "Emergency Phone", "labelPlacement", "floating", "type", "tel", "maxlength", "10", "formControlName", "emergencyPhoneNumber", "placeholder", "Enter emergency phone", 1, "ourbus_inputText", "ourbus_labelSet", 2, "margin-left", "0px !important", 3, "ionChange", "value"], ["fill", "outline", "label", "Nationality", "mode", "md", "label-placement", "floating", "color", "red", "placeholder", "Select Country", "formControlName", "country", "interface", "popover", 1, "ourbus_ionselect_center", "ourbus_custom_input", "ourbus_inputText", 3, "ngModelChange", "ionChange", "value", "ngModel"], ["class", "ourbus_inputText ourbus_labelSet", 3, "value", 4, "ngFor", "ngForOf"], ["fill", "outline", "label", "State", "mode", "md", "label-placement", "floating", "id", "stateSelection", "color", "red", "placeholder", "Select State", "formControlName", "state", "interface", "popover", 1, "ourbus_ionselect_center", "always-flip", "ourbus_custom_input", "ourbus_inputText", 3, "ngModelChange", "ionChange", "value", "ngModel"], ["class", "ourbus_inputText ourbus_labelSet", "style", "--width: 90%;--max-width:90%;", 3, "value", 4, "ngFor", "ngForOf"], ["fill", "outline", "label", "City", "mode", "md", "label-placement", "floating", "id", "citySelection", "color", "red", "interface", "popover", "placeholder", "Select City", "formControlName", "city", 1, "ourbus_ionselect_center", "always-flip", "ourbus_custom_input", "ourbus_inputText", 3, "ngModelChange", "ionChange", "value", "ngModel"], ["fill", "outline", "label", "Address", "labelPlacement", "floating", "formControlName", "address", 1, "ourbus_inputText", "ourbus_labelSet", 3, "value"], ["mode", "md", "expand", "block", "type", "submit", 1, "login-btn1"], ["class", "whole center ourbustheme", 3, "click", 4, "ngIf"], ["src", "./assets/icon/ourbus_profile.svg", "item-start", "", 1, "icon-img", 2, "width", "50px", "height", "50px", "border-radius", "100px"], ["item-start", "", 1, "icon-img", 2, "width", "50px", "height", "50px", "border-radius", "100px", 3, "src"], ["item-start", "", "alt", "Profile Image", 1, "icon-img", 2, "height", "50px", "width", "50px", "border-radius", "50%", 3, "src"], ["lines", "none", "mode", "md", 2, "--inner-padding-end", "0", "--padding-start", "0px"], ["fill", "outline", "label", "Email", "labelPlacement", "floating", "type", "email", "maxlength", "50", "placeholder", "Enter email id", "formControlName", "email", "readonly", "", 1, "ourbus_inputText_disable", "ourbus_labelSet", 3, "value"], ["fill", "outline", "label", "Email", "labelPlacement", "floating", "type", "email", "placeholder", "Enter email id", "maxlength", "50", "formControlName", "email", 1, "ourbus_inputText", "ourbus_labelSet", 3, "value"], ["position", "floating", 1, "txt-lbl", 2, "margin-left", "17px", "font-size", "10px"], [4, "ngFor", "ngForOf"], ["lines", "none", "mode", "md", 1, "ourbus_custom_input", 2, "--inner-padding-end", "0", "--padding-start", "9px"], ["label", "ID Type", "labelPlacement", "floating", "fill", "outline", "type", "text", "readonly", "", 1, "ourbus_inputText", "ourbus_labelSet", 3, "value"], ["fill", "outline", "label", "ID No.", "labelPlacement", "floating", "type", "text", "readonly", "", 1, "ourbus_inputText", "ourbus_labelSet", 3, "value"], ["lines", "none", "mode", "md", 1, "ourbus_custom_input", "ourbus_item_outline", 2, "margin-top", "7px !important", "margin-left", "10px"], [2, "margin", "-34px 0px 0px 0px", "font-size", "20px"], [1, "ourbus_inputText", 2, "height", "58px", "margin-left", "8px", 3, "readonly"], ["labelPlacement", "floating", 1, "ourbus_inputText", "ourbus_labelSet", 2, "height", "58px", "margin-left", "8px", 3, "readonly", "label"], [1, "ourbus_inputText", "ourbus_labelSet", 3, "value"], [1, "ourbus_inputText", "ourbus_labelSet", 2, "--width", "90%", "--max-width", "90%", 3, "value"], ["size", "4.5"], ["mode", "md", "class", "ourbus_custom_input ourbus_item_outline", 4, "ngFor", "ngForOf"], ["size", "7.5"], ["mode", "md", 1, "ourbus_custom_input"], ["position", "floating", 1, "ourbus_labelSet"], ["fill", "outline", "required", "", "type", "text", "size", "10", "maxlength", "10", "type", "tel", "label", "Mobile Number", "labelPlacement", "floating", "oninput", "this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*?)\\..*/g, '$1');", "value", "Samarpit", 1, "ourbus_inputText", "ourbus_labelSet", 3, "ionChange", "ngModelChange", "ngModel"], ["size", "4", 1, "dwn-txt", 2, "font-size", "14px", "color", "var(--iconsAndButtonsColor)", 3, "click"], ["mode", "md", 1, "ourbus_custom_input", "ourbus_item_outline"], ["size", "8", 2, "padding", "0"], ["fill", "outline", "required", "", "type", "tel", "size", "6", "maxlength", "6", "oninput", "this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*?)\\..*/g, '$1');", "placeholder", "OTP", 1, "ourbus_inputText", 3, "ngModelChange", "ionChange", "ngModel"], ["size", "4", 2, "padding", "0", "display", "flex", "justify-content", "center", "align-items", "center"], ["id", "timer", "style", " vertical-align: -webkit-baseline-middle;", 4, "ngIf"], ["size", "2", "class", "dwn-txt resend_OTP", 3, "click", 4, "ngIf"], ["size", "5", 1, "dwn-txt", 2, "font-size", "14px", "color", "var(--iconsAndButtonsColor)", 3, "click"], ["size", "2", 1, "dwn-txt", "resend_OTP", 3, "click"], [1, "whole", "center", "ourbustheme", 3, "click"], ["size", "4", 1, "dwn-txt", 3, "click"], ["mode", "md", 1, "h50"], ["slot", "start", 3, "click"], [1, "head", 2, "opacity", "0.7"], ["class", "whole center", 4, "ngIf"], [1, "bg-content"], ["mode", "md"], [2, "padding", "0"], ["formControlName", "titlesex", 3, "value", 4, "ngIf"], [3, "click", 4, "ngIf"], ["tappable", "", 4, "ngIf"], ["mode", "md", "expand", "block", "type", "submit", 1, "login-btn"], [1, "whole", "center"], [1, "personal-text", "subTitle", 2, "font-weight", "bolder"], ["required", "", "type", "text", "size", "10", "maxlength", "10", "oninput", "this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*?)\\..*/g, '$1');", "value", "Samarpit", "label", "Mobile Number", "labelPlacement", "floating", 1, "otpNumber", 2, "height", "26px", "min-height", "44px", "font-size", "10px", "border", "none", "border-bottom", "1px solid #bbbaba", 3, "ngModelChange", "ngModel"], ["size", "4", 1, "dwn-txt", 2, "letter-spacing", "normal", "font-family", "'Roboto', sans-serif", "color", "var(--iconsAndButtonsColor)", "text-transform", "uppercase", "text-align", "right", 3, "click"], [2, "color", "red"], ["required", "", "type", "text", "size", "6", "maxlength", "6", "oninput", "this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*?)\\..*/g, '$1');", "placeholder", "Enter OTP", 1, "otpNumber", 3, "ngModelChange", "ngModel"], ["id", "timer", 4, "ngIf"], ["size", "2", "class", "dwn-txt", "style", "text-align: center; font-size: 9px;", 3, "click", 4, "ngIf"], ["size", "4", 1, "brws-txt", 3, "click"], ["size", "5", 1, "dwn-txt", 2, "text-align", "left", 3, "click"], ["id", "timer"], ["size", "2", 1, "dwn-txt", 2, "text-align", "center", "font-size", "9px", 3, "click"], ["formControlName", "titlesex", 3, "value"], [2, "border-bottom", "1px solid lightgrey"], ["lines", "none", 1, "radio-gender-default", 2, "--padding-start", "14px"], [2, "--padding-start", "0px", "font-size", "14px"], ["size", "4", 2, "padding-right", "10px"], ["lines", "none", 1, "radio-gender-default", 2, "--padding-start", "0px"], ["mode", "md", "item-left", "", "value", "Mr", 2, "--color-checked", "var(--iconsAndButtonsColor)", "--color", "var(--iconsAndButtonsColor)", "flex", "0"], [2, "padding-left", "10px", "font-size", "14px"], ["mode", "md", "item-left", "", "value", "Ms", 2, "--color-checked", "var(--iconsAndButtonsColor)", "--color", "var(--iconsAndButtonsColor)", "flex", "0"], ["labelPlacement", "floating", "type", "text", "formControlName", "name", 1, "input-text", "txt-lbl", 3, "value"], ["slot", "label"], ["labelPlacement", "floating", "type", "text", "formControlName", "lastName", 1, "input-text", "txt-lbl", 3, "value"], ["src", "./assets/icon/Calendar.svg", "alt", "", "slot", "end", 2, "margin", "0px"], [1, "txt-lbl", 2, "width", "100%", "font-size", "12px"], [2, "font-size", "16px", "margin-top", "4px"], ["tappable", ""], ["size", "10", 2, "padding-left", "0px"], ["labelPlacement", "floating", "type", "number", "readonly", "", 1, "input-text", "txt-lbl", 3, "value"], ["size", "2", 2, "position", "absolute", "right", "10px"], [1, "btnEdit", 2, "--background", "var(--iconsAndButtonsColor)", "--color", "var(--primaryText)", "margin", "0px", "position", "relative", "bottom", "-5px", "height", "30px", 3, "click"], ["labelPlacement", "floating", "type", "number", "formControlName", "emergencyPhoneNumber", 1, "input-text", "txt-lbl", 3, "ionChange", "value"], ["labelPlacement", "floating", "type", "email", "formControlName", "email", "readonly", "", 1, "input-text", "txt-lbl", 3, "value"], ["labelPlacement", "floating", "type", "email", "formControlName", "email", 1, "input-text", "txt-lbl", 3, "value"], [2, "font-size", "11px", "margin-left", "24px", "color", "red"], ["mode", "md", "id", "citySelection", "color", "red", "interface", "popover", "placeholder", "Select Card", "formControlName", "id_card_type", 1, "input-text", "select-card", 3, "ionChange", "value", "interfaceOptions"], ["slot", "label", 2, "margin-top", "0px"], ["style", "margin-top: 19px;", 3, "value", 4, "ngFor", "ngForOf"], ["label", "ID No.", "labelPlacement", "floating", "type", "text", "readonly", "", 1, "input-text", "txt-lbl", 3, "value"], [2, "margin-top", "19px", 3, "value"], [1, "txt-lbl", 2, "font-size", "12px"], ["color", "red", "interface", "popover eeee", "placeholder", "Select Country", "formControlName", "country", 1, "input-text", "inputselect", 3, "ngModelChange", "ionChange", "value", "ngModel", "interfaceOptions"], ["id", "stateSelection", "color", "red", "interface", "popover eeee", "placeholder", "Select State", "formControlName", "state", 1, "input-text", "inputselect", 3, "ngModelChange", "ionChange", "value", "interfaceOptions", "ngModel"], ["id", "citySelection", "color", "red", "interface", "popover eeee", "placeholder", "Select City", "formControlName", "city", 1, "input-text", "inputselect", 3, "ngModelChange", "ionChange", "value", "ngModel", "interfaceOptions"], ["position", "floating", 1, "txt-lbl"], ["formControlName", "address", 1, "input-text", 3, "value"], ["mode", "md", 1, "ion-no-border"], ["size", "7", 1, "seabird_heading"], [1, "seabird_content"], [1, "seabird_margin"], [1, "seabird_row_center"], ["size", "12", 2, "padding-top", "0px"], [2, "font-weight", "bold", "color", "#000"], [1, "seabird_row_border"], ["size", "4.5", 1, "seabird_col"], [1, "seabird_labelSet"], ["size", "7.5", 1, "seabird_col"], ["type", "text", "formControlName", "name", 1, "ourbus_inputText", 3, "value"], ["type", "text", "formControlName", "lastName", 1, "ourbus_inputText", 3, "value"], ["class", "seabird_row_border", 4, "ngIf"], ["type", "number", "readonly", "", 1, "ourbus_inputText", 3, "value"], ["type", "number", "formControlName", "emergencyPhoneNumber", 1, "ourbus_inputText", 3, "ionInput", "value"], ["tappable", "", "id", "open-date-input-6", 1, "seabird_row_border"], ["type", "text", "formControlName", "dateofbirth", 1, "ourbus_inputText", 3, "value"], ["size", "3.5", 1, "seabird_col"], [1, "seabird_span_date"], [1, "seabird_lbl_date"], ["name", "calendar-outline"], ["trigger", "open-date-input-6", 3, "dateSelected", "value", "max"], ["mode", "md", "formControlName", "titlesex", 3, "value"], [1, "seabird_list"], ["lines", "none"], ["slot", "start", "value", "Mr", 1, "seabird_Radio_color"], ["slot", "start", "value", "Ms", 1, "seabird_Radio_color"], ["color", "red", "placeholder", "Select Country", "formControlName", "country", 1, "seabird_input_text", 2, "--padding-start", "0px", 3, "ngModelChange", "ionChange", "value", "ngModel"], ["class", "ourbus_inputText", 3, "value", 4, "ngFor", "ngForOf"], ["id", "stateSelection", "color", "red", "placeholder", "Select State", "formControlName", "state", 1, "seabird_input_text", 2, "--padding-start", "0px", 3, "ngModelChange", "ionChange", "value", "ngModel"], ["id", "citySelection", "color", "red", "interface", "popover eeee", "placeholder", "Select City", "formControlName", "city", 1, "seabird_input_text", 2, "--padding-start", "0px", 3, "ngModelChange", "ionChange", "value", "ngModel"], [2, "font-size", "14px"], ["formControlName", "address", 1, "ourbus_inputText", 2, "--padding-start", "0px", 3, "value"], ["mode", "md", "shape", "round", "expand", "block", "type", "submit", 1, "login-btn1", 2, "height", "45px", "margin", "7px"], ["type", "email", "formControlName", "email", "readonly", "", 1, "ourbus_inputText_disable", 3, "value"], ["type", "email", "formControlName", "email", 1, "ourbus_inputText", 3, "value"], [1, "ourbus_inputText", 3, "value"], ["required", "", "type", "text", "size", "10", "maxlength", "10", "oninput", "this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*?)\\..*/g, '$1');", "value", "Samarpit", "placeholder", "Mobile Number", 1, "otpNumber", 2, "border", "1px solid #bbbaba", "border-radius", "3px", "width", "86%", "margin", "5px", "height", "26px", "font-size", "10px", 3, "ngModelChange", "ngModel"], ["size", "4", 1, "dwn-txt", 2, "text-align", "left", 3, "click"], [1, "sb-page-header"], [1, "sb-toolbar", "sb-toolbar--50"], [1, "sb-offers-appbar"], ["text", "", "icon", "./assets/seabird-new/back-arrow-navy.svg", "defaultHref", "/tabs/more", 1, "sb-auth-back"], [1, "sb-trips-title", "sb-info-title"], [1, "sb-pax"], [1, "sb-pax__form", 3, "ngSubmit", "formGroup"], [1, "sb-pax-card", "sb-pd-photo"], [1, "sb-pd-avatar"], ["src", "./assets/icon/themeone-profileimg.svg", "alt", "Default Profile Image", 4, "ngIf"], ["alt", "User Photo", 3, "src", 4, "ngIf"], ["alt", "Profile Image", 3, "src", 4, "ngIf"], ["type", "button", "aria-label", "Change photo", 1, "sb-pd-avatar__edit", 3, "click"], ["name", "pencil", "aria-hidden", "true"], [1, "sb-pd-name"], [1, "sb-pd-phone"], [1, "sb-pax-card"], [1, "sb-pfield"], [1, "sb-pfield__label"], ["type", "text", "formControlName", "name", "aria-label", "First name", 1, "sb-pfield__input", 3, "value"], ["type", "text", "formControlName", "lastName", "aria-label", "Last name", 1, "sb-pfield__input", 3, "value"], ["class", "sb-pfield sb-pfield--readonly", 4, "ngIf"], ["class", "sb-pfield", 4, "ngIf"], [1, "sb-pfield", "sb-pfield--readonly"], ["type", "number", "readonly", "", "aria-label", "Mobile Number", 1, "sb-pfield__input", 3, "value"], ["type", "number", "formControlName", "emergencyPhoneNumber", "aria-label", "Emergency Phone", 1, "sb-pfield__input", 3, "ionInput", "value"], [1, "sb-pfield", "sb-auth__date", 3, "click"], [1, "sb-pfield__row"], ["type", "text", "formControlName", "dateofbirth", "aria-label", "Date of birth", 1, "sb-pfield__input", 3, "value"], ["type", "button", "aria-label", "Select date", 1, "sb-auth__icon"], ["name", "calendar-outline", "aria-hidden", "true"], [1, "sb-pd-gender"], ["formControlName", "titlesex", "aria-label", "Gender", 1, "sb-segment", 3, "value"], ["mode", "md", "value", "Mr", "labelPlacement", "end"], ["mode", "md", "value", "Ms", "labelPlacement", "end"], ["placeholder", "Select Country", "formControlName", "country", "aria-label", "Nationality", 1, "sb-pfield__select", 3, "ngModelChange", "ionChange", "value", "ngModel"], ["id", "stateSelection", "placeholder", "Select State", "formControlName", "state", "aria-label", "State", 1, "sb-pfield__select", 3, "ngModelChange", "ionChange", "value", "ngModel"], ["id", "citySelection", "placeholder", "Select City", "formControlName", "city", "interface", "popover", "aria-label", "City", 1, "sb-pfield__select", 3, "ngModelChange", "ionChange", "value", "ngModel"], ["formControlName", "address", "aria-label", "Address", 1, "sb-pfield__input", 3, "value"], ["type", "submit", 1, "sb-btn-primary", "sb-pd-submit"], ["src", "./assets/icon/themeone-profileimg.svg", "alt", "Default Profile Image"], ["alt", "User Photo", 3, "src"], ["alt", "Profile Image", 3, "src"], ["type", "email", "formControlName", "email", "readonly", "", "aria-label", "Email address", 1, "sb-pfield__input", 3, "value"], ["type", "email", "formControlName", "email", "aria-label", "Email address", 1, "sb-pfield__input", 3, "value"], ["formControlName", "id_card_type", "interface", "popover", "placeholder", "Select Card", "aria-label", "ID Type", 1, "sb-pfield__select", 3, "ionChange"], ["id", "id_num", "type", "text", "formControlName", "id_card_number", "aria-label", "ID No.", 1, "sb-pfield__input"], [1, "syamolitheme", 2, "box-shadow", "none"], ["slot", "start", 2, "position", "absolute", 3, "click"], ["defaultHref", "/tabs/more"], [1, "syamoli-title-center"], ["fullscreen", "true", "scroll-y", "true", 1, "syamolitheme"], [1, "scroll-container", 2, "margin", "0 auto", "font-family", "'Gilroy-Medium',sans-serif", "margin", "10px 16px"], [3, "ngSubmit", "formGroup"], ["type", "file", "id", "syamoliFileInput", "hidden", "", "accept", "image/*", 3, "change"], [1, "syamoli-profile-block", 2, "text-align", "center", "margin-top", "20px"], [1, "syamoli-avatar-wrapper", 2, "display", "flex", "justify-content", "center", 3, "click"], ["src", "./assets/icon/shyamoli-name.svg", "alt", "Add Photo", "class", "syamoli-avatar-placeholder", "style", "width:80px; height:80px; border-radius:50%; border:1px solid #ddd;", 4, "ngIf"], ["alt", "Profile Photo", "class", "syamoli-avatar", "style", "width:80px; height:80px; border-radius:50%;", 3, "src", 4, "ngIf"], ["class", "syamoli-add-photo-text", "style", "margin-top:6px; font-size:13px; color:#777;", 4, "ngIf"], [1, "syamoli-profile-name", 2, "display", "block", "font-weight", "600", "font-size", "16px", "margin-top", "6px", "color", "#222"], [1, "syamoli-profile-mobile", 2, "display", "block", "font-size", "14px", "color", "#666"], [2, "border", "none", "border-top", "1px solid #EAEAEA", "margin", "16px 0"], [1, "syamoli-section-title", 2, "font-weight", "600", "margin-bottom", "10px", "text-align", "left", "font-family", "'Gilroy-Bold','Gilroy-Medium',sans-serif", "letter-spacing", "0.5px"], ["class", "syamoli-label", "style", "font-weight:400; margin-bottom:4px; display:block;text-align:left; font-family: 'Gilroy-Medium', sans-serif;", 4, "ngIf"], ["class", "syamoli-input", "lines", "none", 4, "ngIf"], ["class", "syamoli-label", "style", "font-weight:400; margin-bottom:4px; display:block; text-align:left;", 4, "ngIf"], ["class", "syamoli-input", "lines", "none", "tappable", "", "id", "open-date-input-6", 4, "ngIf"], ["trigger", "open-date-input-6", 3, "dateSelected", "value"], ["style", "margin-top:14px;", 4, "ngIf"], [2, "font-weight", "600", "margin", "18px 0 2px", "text-align", "left", "font-family", "'Gilroy-Bold'"], ["class", "syamoli-label", "style", "font-weight:400; margin-top:6px; margin-bottom:4px; display:block; text-align:left;font-family:'Gilroy-Medium',sans-serif;", 4, "ngIf"], ["class", "syamoli-input", "lines", "none", "style", "width: 100%;", 4, "ngIf"], ["class", "syamoli-input-address", "style", "--padding-start: 0px;", "lines", "none", 4, "ngIf"], [2, "margin-top", "24px"], ["mode", "md", "expand", "block", "type", "submit", 1, "syamoli-btn-primary"], ["src", "./assets/icon/shyamoli-name.svg", "alt", "Add Photo", 1, "syamoli-avatar-placeholder", 2, "width", "80px", "height", "80px", "border-radius", "50%", "border", "1px solid #ddd"], ["alt", "Profile Photo", 1, "syamoli-avatar", 2, "width", "80px", "height", "80px", "border-radius", "50%", 3, "src"], [1, "syamoli-add-photo-text", 2, "margin-top", "6px", "font-size", "13px", "color", "#777"], [1, "syamoli-label", 2, "font-weight", "400", "margin-bottom", "4px", "display", "block", "text-align", "left", "font-family", "'Gilroy-Medium', sans-serif"], ["lines", "none", 1, "syamoli-input"], ["type", "text", "formControlName", "name", "autocomplete", "off"], ["type", "text", "formControlName", "lastName", "autocomplete", "off"], [1, "syamoli-label", 2, "font-weight", "400", "margin-bottom", "4px", "display", "block", "text-align", "left"], ["lines", "none", "tappable", "", "id", "open-date-input-6", 1, "syamoli-input"], ["slot", "start", "src", "./assets/icon/calendar-shyamoli.svg", 2, "margin-top", "2px", "margin-right", "8px"], ["type", "text", "formControlName", "dateofbirth", "autocomplete", "off"], ["size", "10", "maxlength", "10", "type", "tel", "formControlName", "phoneNumber", "oninput", "this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*?)\\..*/g, '$1');", 3, "ionChange", "ngModelChange", "ngModel"], ["slot", "start", "src", "./assets/icon/emergency-shyamoli.svg", 2, "margin-top", "2px", "margin-right", "8px", 3, "click"], ["size", "10", "maxlength", "10", "type", "tel", "formControlName", "emergencyPhoneNumber", "oninput", "this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*?)\\..*/g, '$1');", "autocomplete", "off", 3, "ionChange"], ["type", "email", "formControlName", "email", "autocomplete", "off", "readonly", ""], [2, "margin-top", "14px"], [1, "syamoli-label", 2, "font-weight", "400", "display", "block", "text-align", "left", "margin-bottom", "6px", "font-family", "'Gilroy-Medium',sans-serif"], ["formControlName", "titlesex"], [2, "display", "flex", "flex-direction", "row", "gap", "24px"], [2, "display", "flex", "align-items", "center", "cursor", "pointer"], ["mode", "md", "value", "Mr", 2, "--color-checked", "#FF8C00", "margin-right", "6px"], [2, "font-family", "'Gilroy-Medium',sans-serif"], ["mode", "md", "value", "Ms", 2, "--color-checked", "#FF8C00", "margin-right", "6px"], [1, "syamoli-label", 2, "font-weight", "400", "margin-top", "6px", "margin-bottom", "4px", "display", "block", "text-align", "left", "font-family", "'Gilroy-Medium',sans-serif"], ["lines", "none", 1, "syamoli-input", 2, "width", "100%"], ["mode", "md", "formControlName", "country", "interface", "popover", 2, "flex", "1", "width", "100%", 3, "ngModelChange", "ionChange", "ngModel", "interfaceOptions"], ["slot", "end", "src", "./assets/icon/dropdown1.svg", 3, "click"], ["mode", "md", "formControlName", "state", "interface", "popover", 3, "ngModelChange", "ionChange", "ngModel", "interfaceOptions"], ["mode", "md", "formControlName", "city", "interface", "popover", 3, "ngModelChange", "ionChange", "ngModel", "interfaceOptions"], ["lines", "none", 1, "syamoli-input-address", 2, "--padding-start", "0px"], ["formControlName", "address", "autocomplete", "off", "placeholder", "Enter your address", 1, "syamoli-address-textarea", 2, "text-align", "left"]],
  template: function PersonalDetailPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, PersonalDetailPage_ng_container_0_Template, 75, 38, "ng-container", 4)(1, PersonalDetailPage_ng_container_1_Template, 99, 31, "ng-container", 4)(2, PersonalDetailPage_ng_container_2_Template, 42, 24, "ng-container", 4)(3, PersonalDetailPage_ng_container_3_Template, 120, 30, "ng-container", 4)(4, PersonalDetailPage_ng_container_4_Template, 78, 28, "ng-container", 4)(5, PersonalDetailPage_ng_container_5_Template, 53, 29, "ng-container", 4);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme" || ctx.metaData.msiteFolder == "networktheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder === "seabirdThemeNew");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "shyamolitheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRadio, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRadioGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTextarea, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonBackButton, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _components_date_picker_modal_date_picker_modal_component__WEBPACK_IMPORTED_MODULE_21__.DatePickerModalComponent],
  styles: ["@charset \"UTF-8\";\n\n\n.syamolitheme[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\n.syamoli-center[_ngcontent-%COMP%] {\n  max-width: 420px;\n  margin: 0 auto;\n  padding: 24px 12px;\n}\n\n.syamoli-input[_ngcontent-%COMP%] {\n  background: #F8F9FA;\n  border: 1px solid #ADB4C0;\n  border-radius: 6px;\n  --inner-border-width: 0;\n  position: relative;\n  color: #333 !important;\n  filter: none !important;\n}\n\n.syamoli-profile-block[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n  font-family: \"Gilroy-Medium\", sans-serif;\n}\n\n.syamoli-avatar-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 1px solid #ccc;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #fafafa;\n  cursor: pointer;\n}\n\n.syamoli-avatar-placeholder[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n.syamoli-avatar[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n.syamoli-avatar-edit[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 4px;\n  right: 4px;\n  background: var(--iconsAndButtonsColor);\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);\n}\n\n.syamoli-avatar-edit[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  filter: invert(1) brightness(2);\n}\n\n.syamoli-add-photo-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n  margin-top: 6px;\n}\n\n.syamoli-profile-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin-top: 6px;\n  font-family: \"Gilroy-Medium\", sans-serif;\n  color: #222;\n}\n\n.syamoli-profile-mobile[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #666;\n  font-family: \"Gilroy-Medium\", sans-serif;\n}\n\n.syamoli-entered-mobile[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n\n.syamoli-address-textarea[_ngcontent-%COMP%]::placeholder {\n  text-align: left;\n  padding-left: 6px;\n}\n\nitem.syamoli-input-address[_ngcontent-%COMP%]::after {\n  padding-right: 0px !important;\n}\n\n.syamoli-input-address[_ngcontent-%COMP%]   .syamoli-address-textarea[_ngcontent-%COMP%] {\n  min-height: 56px !important;\n  height: 32px !important;\n  line-height: 1.2 !important;\n  padding-left: 8px !important;\n  font-size: 14px;\n  border: 1px solid #C2C2C2;\n  border-radius: 4px;\n  resize: none;\n}\n\n.syamoli-input-address[_ngcontent-%COMP%]   .syamoli-address-textarea[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding-right: 12px !important;\n}\n\n.syamoli-input[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 100%;\n  min-width: 0;\n  --background: #fff;\n  --color: #333;\n  --placeholder-color: #888;\n}\n\n.syamoli-input[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], \n.syamoli-input[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%] {\n  --padding-start: 8px;\n  --padding-end: 12px;\n  --padding-top: 16px;\n  --padding-bottom: 12px;\n  font-size: 15px;\n  --placeholder-color: #888;\n  --color: #191966;\n  flex: 1;\n}\n\n.syamoli-input[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n.syamoli-input[_ngcontent-%COMP%]   ion-icon[slot=end][_ngcontent-%COMP%], \n.syamoli-input[_ngcontent-%COMP%]   ion-icon[slot=start][_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 10;\n  width: 22px;\n  height: 22px;\n  right: 14px;\n  cursor: pointer;\n  margin-top: 0px;\n}\n\n.syamoli-btn-primary[_ngcontent-%COMP%] {\n  --background: var(--iconsAndButtonsColor);\n  --color: #fff;\n  font-weight: 600;\n  font-size: 16px;\n  border-radius: 6px;\n  height: 44px;\n  margin-top: 12px;\n}\n\n.syamoli-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #0d0d0e;\n  font-size: 14px;\n  margin-bottom: 4px;\n  display: block;\n  font-family: \"Gilroy-Medium\", sans-serif;\n}\n\n\n\n.syamoli-title-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n  font-weight: 600;\n  height: 100%;\n  text-align: center;\n}\n\n.scroll-container[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 56px); \n\n  overflow-y: auto;\n}\n\nion-radio[_ngcontent-%COMP%] {\n  --color-checked: var(--iconsAndButtonsColor);\n}\n\n.syamoli-address-textarea[_ngcontent-%COMP%]::placeholder {\n  text-align: left;\n  padding-left: 4px;\n}\n\n.syamoli-input[_ngcontent-%COMP%]   ion-icon[slot=end][_ngcontent-%COMP%] {\n  margin-left: 8px;\n  font-size: 22px;\n  align-self: center;\n  color: #333;\n  vertical-align: middle;\n}\n\nion-label[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #000;\n}\n\n.icn-main[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  position: initial;\n  right: 0;\n  padding: 0;\n  width: 140px;\n  height: 40px;\n  top: 0;\n  float: right;\n  margin-right: 10px;\n  margin-top: 4px;\n}\n\n.rectangle-box[_ngcontent-%COMP%] {\n  height: 51px;\n  padding: 12px;\n  font-family: NotoSans;\n  border: solid 0.5px #b7b0b0;\n  background-color: #f3f3f3;\n  height: auto;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  margin-left: 7px;\n  margin-right: 10px;\n  border-radius: 2px;\n}\n\nion-button.btnEdit.md.button.button-solid.ion-activatable.ion-focusable.hydrated[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-top: -30px;\n  font-size: 10px;\n  height: 30px;\n}\n\n.personal-text[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 2px;\n  margin-bottom: 2px;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: normal;\n}\n\n.subTitle[_ngcontent-%COMP%] {\n  font-size: 10px !important;\n}\n\nion-select.mrandmiss.md.hydrated[_ngcontent-%COMP%] {\n  padding: 0px;\n  font-size: 12px;\n}\n\n.ionInputText[_ngcontent-%COMP%] {\n  border-bottom: solid 0.5px #b7b0b0;\n  font-size: 11px;\n}\n\n.ionInputTextPhone[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n\n.profileIonItem[_ngcontent-%COMP%] {\n  --background: #f3f3f3;\n}\n\n.dobField[_ngcontent-%COMP%] {\n  border-bottom: solid 0.5px #b7b0b0;\n  width: -webkit-fill-available;\n  display: flex;\n}\n\nion-button.btnSave.md.button.button-solid.ion-activatable.ion-focusable.hydrated[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-top: -30px;\n  font-size: 10px;\n  height: 20px;\n}\n\n.btnSave[_ngcontent-%COMP%] {\n  display: none;\n  font-weight: bold;\n  font-size: 10px;\n  width: 52px;\n}\n\n.btnEdit[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: bold;\n  font-size: 10px;\n  width: 52px;\n}\n\n.datetimeField[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin-right: 41px;\n  margin-top: 2px;\n  font-weight: bolder;\n}\n\n.phone-block-popup[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 80px;\n  top: 97px;\n  left: 0;\n  right: 0;\n  z-index: 999;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  overflow-y: scroll;\n}\n.phone-block-popup[_ngcontent-%COMP%]   .backdrop[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0px;\n  background-color: rgba(0, 0, 0, 0.31);\n}\n.phone-block-popup[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 100px;\n  background-color: #fff;\n  position: relative;\n  padding: 10px;\n  border-radius: 3px;\n}\n.phone-block-popup[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.phone-block-popup[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .label-txt[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  text-align: center;\n}\n\n.myformControls[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --background: #f3f3f3;\n  border-bottom: 0.3px solid darkgrey;\n}\n\nion-input.ng-untouched.ng-pristine.ng-invalid.ion-untouched.ion-pristine.ion-invalid.sc-ion-input-md-h.sc-ion-input-md-s.md.has-value.hydrated[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\nion-input.ng-untouched.ng-pristine.ng-valid.ion-untouched.ion-pristine.ion-valid.sc-ion-input-md-h.sc-ion-input-md-s.md.has-value.hydrated[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.txt-lbl[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  margin-top: 2px;\n}\n\n.input-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n\n\n.select-card[_ngcontent-%COMP%]::part(placeholder) {\n  margin-top: 17px;\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  margin: 32px 0 12px;\n  text-transform: initial;\n  --background: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n}\n\n.login-btn1[_ngcontent-%COMP%] {\n  text-transform: initial;\n  --background: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  height: 50px;\n}\n\n.otp-btn[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  text-transform: initial;\n  font-family: NotoSans;\n  color: var(--iconsAndButtonsColor);\n  --border-color: var(--iconsAndButtonsColor);\n  --border-width: 1px;\n  font-weight: bolder;\n  font-size: 13px;\n}\n\n.selectbox[_ngcontent-%COMP%] {\n  border-bottom: none;\n  --border-style: none;\n}\n\n.inputselect[_ngcontent-%COMP%] {\n  display: contents;\n}\n\n.addressField[_ngcontent-%COMP%] {\n  border-bottom: none;\n  --border-style: none;\n}\n\n.otpNumber[_ngcontent-%COMP%] {\n  border: 1px solid #bbbaba;\n  border-radius: 3px;\n  width: 100%;\n  height: 26px;\n  font-size: 10px;\n}\n\n.seg-btn[_ngcontent-%COMP%] {\n  width: 196px;\n  margin: 0;\n  border-radius: 4px;\n  background-color: #eaeaea;\n}\n.seg-btn[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%] {\n  height: 24px;\n  border: 1px solid #eaeaea;\n  border-radius: 4px;\n}\n.seg-btn[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n  color: #9b9b9b;\n  min-height: 0px;\n  text-transform: capitalize;\n}\n.seg-btn[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%] {\n  color: var(--primaryText);\n  background-color: var(--iconsAndButtonsColor);\n  font-weight: bolder;\n}\n\n.center-div[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n\n.whole[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.4);\n}\n\n.legend-box[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 280px;\n  height: auto;\n}\n\n.themeone-legend-box[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 86%;\n  height: auto;\n}\n\n.txt-msg[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n  text-align: justify;\n  letter-spacing: 0.25px;\n  color: rgba(0, 0, 0, 0.6);\n  margin-top: 10px;\n  width: 100%;\n}\n\n.dwn-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #ed3237;\n  margin-top: 20px;\n  width: 100%;\n  text-align: right;\n}\n\n.dwn-txt-2[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: var(--iconsAndButtonsColor);\n  margin-top: 20px;\n  width: 100%;\n  text-align: right;\n}\n\n.brws-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #4a4a4a;\n  width: 100%;\n  text-align: left;\n}\n\n.themeone_namelbl[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-family: NotoSans;\n  color: #000000;\n}\n\n.themeone_mobilelbl[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: NotoSans;\n  color: #000000;\n}\n\n.themeone-txt-lbl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n  color: #5F5F5F;\n  font-family: NotoSans;\n}\n\n.themeone-input-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: NotoSans;\n  color: #333;\n  font-weight: bold;\n  --padding-top: 0px;\n}\n.themeone-input-text[_ngcontent-%COMP%]   .select-icon[_ngcontent-%COMP%] {\n  width: 24px;\n}\n\n.themeone-btnEdit[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #FFF;\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 142.5%;\n  --color: #fff;\n  margin-top: 25px;\n  margin-bottom: 0px;\n  --border-radius: 4px !important;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  --background: #191966;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.themeone-selected[_ngcontent-%COMP%] {\n  background: #FFBD5A;\n}\n\n.themeone-unselected[_ngcontent-%COMP%] {\n  background: #ffffff;\n}\n\n.themeone-seg-btn[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: 0;\n  border-radius: 4px;\n}\n.themeone-seg-btn[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%] {\n  height: 31px;\n  border: 1px solid #19196E;\n  border-radius: 5px;\n}\n.themeone-seg-btn[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n  min-height: 0px;\n  text-transform: capitalize;\n  background-color: #FFFFFF;\n  color: #191966 !important;\n}\n.themeone-seg-btn[_ngcontent-%COMP%]   .segone[_ngcontent-%COMP%] {\n  border-right: 1px solid #19196E;\n  width: 77px;\n}\n.themeone-seg-btn[_ngcontent-%COMP%]   .segtwo[_ngcontent-%COMP%] {\n  width: 97px;\n}\n.themeone-seg-btn[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%] {\n  color: #191966 !important;\n  background-color: var(--iconsAndButtonsColor) !important;\n  font-weight: bolder;\n}\n\n.themeone-seg-btn-2[_ngcontent-%COMP%] {\n  width: 196px;\n  margin: 0;\n  border-radius: 4px;\n  background-color: #eaeaea;\n}\n.themeone-seg-btn-2[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%] {\n  height: 31px;\n  border: 1px solid #000;\n  border-radius: 5px;\n}\n.themeone-seg-btn-2[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n  min-height: 0px;\n  text-transform: capitalize;\n  background-color: #FFFFFF;\n  color: var(--primaryText);\n}\n.themeone-seg-btn-2[_ngcontent-%COMP%]   .segone[_ngcontent-%COMP%] {\n  border-right: 1px solid var(--primaryText);\n  width: 77px;\n}\n.themeone-seg-btn-2[_ngcontent-%COMP%]   .segtwo[_ngcontent-%COMP%] {\n  width: 103px;\n}\n.themeone-seg-btn-2[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%] {\n  color: var(--primaryText);\n  background-color: var(--iconsAndButtonsColor);\n  font-weight: bolder;\n}\n\n.item-label-floating[_ngcontent-%COMP%], .item-label-stacked[_ngcontent-%COMP%] {\n  --min-height: 67px !important;\n}\n\n.themeone-inputselect[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.themeone-bg-content[_ngcontent-%COMP%] {\n  --background: #fff;\n  --offset-top: 1px !important;\n}\n\n.themeone-ion-item[_ngcontent-%COMP%] {\n  --background: #fff;\n  --min-height: 45px;\n  padding-top: 10px;\n  --padding-start: 0px;\n  margin-left: 12px;\n  margin-right: 12px;\n}\n\n.themeone-login-btn[_ngcontent-%COMP%] {\n  margin: 20px 12px;\n  text-transform: initial;\n  --background: #F2C21A;\n  color: #191966;\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 16px;\n  height: 45px;\n}\n\n.themeone-login-btn-2[_ngcontent-%COMP%] {\n  margin: 20px 12px;\n  text-transform: initial;\n  --background: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 16px;\n  height: 45px;\n}\n\n.themeone-input-text[_ngcontent-%COMP%]::part(icon) {\n  width: 24px;\n  --padding-top: 0px;\n  --padding-bottom: 5px;\n}\n\n.themeone-head[_ngcontent-%COMP%] {\n  color: #333333;\n  padding: 0;\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 26px;\n  letter-spacing: 0em;\n  text-align: center;\n}\n\n.themeone-bg-cl[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  --background: white;\n  -webkit-text-fill-color: #333333 !important;\n}\n\n.themeone-bg-cl_2[_ngcontent-%COMP%] {\n  color: var(--primaryText) !important;\n  --background: var(--homeBgColor) !important;\n  -webkit-text-fill-color: var(--primaryText) !important;\n}\n\n.theme1-bg-content[_ngcontent-%COMP%] {\n  --background: #ffffff;\n}\n\n.custom-icon[_ngcontent-%COMP%] {\n  color: #FF0000;\n}\n\n.brws-txt1[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #4a4a4a;\n  margin-top: 20px;\n  width: 100%;\n  text-align: right;\n}\n\n.txt-msg-hd[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bolder;\n  font-family: NotoSans;\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.txt-msg1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: justify;\n}\n\n.disableionitem[_ngcontent-%COMP%] {\n  --ion-item-background:#e1e1e1;\n}\n\nion-modal[_ngcontent-%COMP%] {\n  --width: 311px;\n  --height: 543px;\n  --border-radius: 8px;\n}\n\nion-modal[_ngcontent-%COMP%]   ion-datetime[_ngcontent-%COMP%] {\n  height: 580px;\n}\n\n.editProfile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #2D2D2D;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.icon-set[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  color: #2D2D2D;\n  margin-right: 8px;\n}\n\n.textSet[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #2D2D2D;\n  font-weight: 700;\n}\n\n.ourbus_segment[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n\n.dob_calender[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.segment-button-checked[_ngcontent-%COMP%] {\n  --indicator-color: var(--iconsAndButtonsColor) !important;\n  --indicator-color-checked: transparent !important;\n  color: var(--primaryText);\n  margin: 8px !important;\n}\n\n.theme1[_ngcontent-%COMP%]   .segment-button-checked[_ngcontent-%COMP%] {\n  margin: 0px !important;\n}\n\n.ourbustheme[_ngcontent-%COMP%]   .native-input.sc-ion-input-md[_ngcontent-%COMP%] {\n  font-family: \"Test S\u00F6hne\" !important;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_custom_input[_ngcontent-%COMP%] {\n  --highlight-color-focused: #D9D9D9;\n  --highlight-height: 1px;\n  --border-color: #D9D9D9;\n  --highlight-background: #D9D9D9;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_labelSet[_ngcontent-%COMP%] {\n  color: #747474 !important;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_inputText[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #2D2D2D;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_inputText_disable[_ngcontent-%COMP%] {\n  --highlight-color-focused: #747474;\n  --highlight-height: 1px;\n  --border-color: #747474;\n  --highlight-background: #efefef;\n  --background: #efefef;\n  font-size: 16px;\n  font-weight: 700;\n  color: #747474;\n  margin-top: 4px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_custom_input_disable[_ngcontent-%COMP%] {\n  --highlight-color-focused: #747474;\n  --highlight-height: 1px;\n  --border-color: #747474;\n  --highlight-background: #efefef;\n  --background: #efefef;\n}\n\n.seabird_content[_ngcontent-%COMP%] {\n  --background: #f1f7fa;\n}\n\n.seabird_margin[_ngcontent-%COMP%] {\n  border: 1px solid #626262;\n  border-radius: 20px;\n  margin: 12px;\n  background: white;\n}\n\n.seabird_Radio_color[_ngcontent-%COMP%] {\n  margin: 2px !important;\n  --color-checked:#2B28CE!important;\n}\n\n.seabird_heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: left;\n}\n\n.seabird_row_center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.seabird_row_border[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #626262;\n}\n.seabird_row_border[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.seabird_list[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 0px;\n}\n\n.seabird_labelSet[_ngcontent-%COMP%] {\n  color: #000000 !important;\n}\n\n.seabird_input_text[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\nion-select[_ngcontent-%COMP%]::part(placeholder), \nion-select[_ngcontent-%COMP%]::part(text) {\n  white-space: normal !important;\n}\n\n.seabird_lbl_date[_ngcontent-%COMP%] {\n  color: var(--iconsAndButtonsColor);\n  font-size: 14px;\n  margin-left: 8px;\n}\n\n.seabird_span_date[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n}\n\n.seabird_btn_mobile[_ngcontent-%COMP%] {\n  --background:var(--iconsAndButtonsColor);\n  --color:var(--primaryText);\n  margin-top: auto !important;\n  margin-bottom: auto !important;\n}\n\n.seabird_col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  padding-left: 10px;\n  font-size: 12px;\n}\n\n.item-label-stacked[_nghost-%COMP%]   [_ngcontent-%COMP%]::slotted(ion-select), \n.item-label-floating[_nghost-%COMP%]   [_ngcontent-%COMP%]::slotted(ion-select) {\n  --padding-top: 3px;\n}\n\n.resend_OTP[_ngcontent-%COMP%] {\n  padding-left: 6px;\n  text-align: center;\n  margin-top: 0px;\n  color: var(--iconsAndButtonsColor);\n  font-size: 14px;\n}\n\n.upload-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -10px;\n  left: 76%;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n  height: 27px;\n  width: 31px;\n}\n\n.ourbus_profile_image[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 100px;\n}\n\n.ourbus_item_outline[_ngcontent-%COMP%] {\n  outline: 1px solid #D9D9D9 !important;\n  margin-top: 15px !important;\n  padding-top: 12px !important;\n  border-radius: 3px !important;\n  height: 51px !important;\n}\n\n.mandatory_star[_ngcontent-%COMP%] {\n  color: red;\n  padding-left: 5px;\n}\n\n.cbus_change_btn[_ngcontent-%COMP%] {\n  --background:#191966;\n  --color:#fff;\n  margin-top: 32px;\n  width: 100%;\n  margin-bottom: 0px;\n}\n\n.theme1_change_btn[_ngcontent-%COMP%] {\n  --background:var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  margin-top: 22px;\n  margin-bottom: 0px;\n}\n\nion-item[_ngcontent-%COMP%] {\n  min-height: 0px;\n}\nion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  min-height: 0px;\n}\n\nion-textarea[_ngcontent-%COMP%] {\n  min-height: 0px;\n}\n\nion-select[_ngcontent-%COMP%]::part(label-text) {\n  min-height: 0px;\n}"]
});

/***/ }

}]);