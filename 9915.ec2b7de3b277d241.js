"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[9915],{

/***/ 16146:
/*!***************************************************************!*\
  !*** ./src/app/update-ticket/update-ticket-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdateTicketPageRoutingModule: () => (/* binding */ UpdateTicketPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _update_ticket_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-ticket.page */ 16308);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _UpdateTicketPageRoutingModule;




const routes = [{
  path: '',
  component: _update_ticket_page__WEBPACK_IMPORTED_MODULE_0__.UpdateTicketPage
}];
class UpdateTicketPageRoutingModule {}
_UpdateTicketPageRoutingModule = UpdateTicketPageRoutingModule;
_UpdateTicketPageRoutingModule.ɵfac = function UpdateTicketPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UpdateTicketPageRoutingModule)();
};
_UpdateTicketPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _UpdateTicketPageRoutingModule
});
_UpdateTicketPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UpdateTicketPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 16308:
/*!*****************************************************!*\
  !*** ./src/app/update-ticket/update-ticket.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdateTicketPage: () => (/* binding */ UpdateTicketPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _cities_modal_cities_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cities-modal/cities-modal.page */ 85960);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 40605);
/* harmony import */ var _calendar_modal_calendar_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../calendar-modal/calendar-modal.page */ 70990);
/* harmony import */ var _services_validator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/validator-service */ 1863);
/* harmony import */ var _countries_countries_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../countries/countries.json */ 2660);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/theme-service */ 99692);
/* harmony import */ var _services_exception__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/exception */ 91502);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 87330);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _services_global_data_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/global-data.service */ 7516);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 45564);

var _UpdateTicketPage;






















function UpdateTicketPage_ng_container_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngSubmit", function UpdateTicketPage_ng_container_0_div_8_Template_form_ngSubmit_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "ion-card")(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5, "PNR Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "ion-row", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](7, "ion-input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "ion-row", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](11, "ion-input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13, "Journey date");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "ion-row", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_0_div_8_Template_ion_row_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.departureDateModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](16, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "ion-label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](20, "ion-input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](21, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "div", 18)(23, "ion-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx_r1.updateForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", ctx_r1.updateForm.value.displayDate == "" ? "" : ctx_r1.updateForm.value.displayDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.title);
  }
}
function UpdateTicketPage_ng_container_0_div_9_ion_select_11_ion_select_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-select-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const code_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("value", code_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", code_r4, " ");
  }
}
function UpdateTicketPage_ng_container_0_div_9_ion_select_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, UpdateTicketPage_ng_container_0_div_9_ion_select_11_ion_select_option_1_Template, 2, 2, "ion-select-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r1.AllowedCountryCodes);
  }
}
function UpdateTicketPage_ng_container_0_div_9_ion_input_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_0_div_9_ion_input_12_Template_ion_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.selectCountry_code());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function UpdateTicketPage_ng_container_0_div_9_ion_input_12_Template_ion_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r1.selected_Country_code, $event) || (ctx_r1.selected_Country_code = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selected_Country_code);
  }
}
function UpdateTicketPage_ng_container_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngSubmit", function UpdateTicketPage_ng_container_0_div_9_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.updateDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "ion-grid")(3, "ion-row", 20)(4, "ion-col", 21)(5, "ion-card")(6, "ion-row")(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8, "Change Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "ion-row", 22)(10, "ion-col", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](11, UpdateTicketPage_ng_container_0_div_9_ion_select_11_Template, 2, 1, "ion-select", 24)(12, UpdateTicketPage_ng_container_0_div_9_ion_input_12_Template, 1, 1, "ion-input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "ion-col", 26)(14, "ion-input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function UpdateTicketPage_ng_container_0_div_9_Template_ion_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r1.selected_mobilenum, $event) || (ctx_r1.selected_mobilenum = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "ion-col", 21)(16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](17, "Change Boarding/Pick Up Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "ion-row", 22)(19, "ion-item", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_0_div_9_Template_ion_item_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.selectBoardingStage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](20, "ion-input", 29)(21, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "ion-row", 31)(23, "ion-col", 32)(24, "ion-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](26, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](27, "ion-input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx_r1.updateDetailsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r1.commonStorage.getItem("metaData").show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.commonStorage.getItem("metaData").show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selected_mobilenum);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵattribute"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.title);
  }
}
function UpdateTicketPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 3)(3, "ion-buttons", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "ion-content", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, UpdateTicketPage_ng_container_0_div_8_Template, 25, 3, "div", 6)(9, UpdateTicketPage_ng_container_0_div_9_Template, 28, 6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.updateShow == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.updateShow == true);
  }
}
function UpdateTicketPage_ng_container_1_div_8_div_13_p_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_1_div_8_div_13_p_1_Template_p_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.getOtp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " Get OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function UpdateTicketPage_ng_container_1_div_8_div_13_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", ctx_r1.getFormattedTime(), " Resend OTP");
  }
}
function UpdateTicketPage_ng_container_1_div_8_div_13_div_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_1_div_8_div_13_div_2_ng_template_3_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.resendCode($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "Resend OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function UpdateTicketPage_ng_container_1_div_8_div_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, UpdateTicketPage_ng_container_1_div_8_div_13_div_2_ng_container_2_Template, 3, 1, "ng-container", 51)(3, UpdateTicketPage_ng_container_1_div_8_div_13_div_2_ng_template_3_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const resendButton_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.timerInSeconds > 0)("ngIfElse", resendButton_r9);
  }
}
function UpdateTicketPage_ng_container_1_div_8_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, UpdateTicketPage_ng_container_1_div_8_div_13_p_1_Template, 2, 0, "p", 48)(2, UpdateTicketPage_ng_container_1_div_8_div_13_div_2_Template, 5, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r1.enabled_otp);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.enabled_otp);
  }
}
function UpdateTicketPage_ng_container_1_div_8_ion_item_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-item")(1, "ion-input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("keyup", function UpdateTicketPage_ng_container_1_div_8_ion_item_14_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.onEnterKeyPressed($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function UpdateTicketPage_ng_container_1_div_8_ion_item_14_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r1.otp_value, $event) || (ctx_r1.otp_value = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.otp_value);
  }
}
function UpdateTicketPage_ng_container_1_div_8_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 18)(1, "ion-button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.title);
  }
}
function UpdateTicketPage_ng_container_1_div_8_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 18)(1, "ion-button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_1_div_8_div_16_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.submit_otpForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", ctx_r1.update_btn_disabled ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.title);
  }
}
function UpdateTicketPage_ng_container_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 7)(1, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngSubmit", function UpdateTicketPage_ng_container_1_div_8_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "ion-input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](5, "ion-input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "ion-item", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_1_div_8_Template_ion_item_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.departureDateModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](7, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "ion-label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](11, "ion-input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](12, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](13, UpdateTicketPage_ng_container_1_div_8_div_13_Template, 3, 2, "div", 2)(14, UpdateTicketPage_ng_container_1_div_8_ion_item_14_Template, 2, 1, "ion-item", 2)(15, UpdateTicketPage_ng_container_1_div_8_div_15_Template, 3, 1, "div", 47)(16, UpdateTicketPage_ng_container_1_div_8_div_16_Template, 3, 2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx_r1.updateForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("label", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket ? "Email/Phone number" : "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.updateForm.value.displayDate == "" ? "Journey Date" : ctx_r1.updateForm.value.displayDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket && ctx_r1.enabled_otp);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r1.from_otp_enabled || !ctx_r1.otp_based_authentication_to_modify_ticket);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket);
  }
}
function UpdateTicketPage_ng_container_1_div_9_ion_select_4_ion_select_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-select-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const code_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("value", code_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", code_r13, " ");
  }
}
function UpdateTicketPage_ng_container_1_div_9_ion_select_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-select", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, UpdateTicketPage_ng_container_1_div_9_ion_select_4_ion_select_option_1_Template, 2, 2, "ion-select-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r1.AllowedCountryCodes);
  }
}
function UpdateTicketPage_ng_container_1_div_9_ion_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_1_div_9_ion_input_5_Template_ion_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.selectCountry_code());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function UpdateTicketPage_ng_container_1_div_9_ion_input_5_Template_ion_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r1.selected_Country_code, $event) || (ctx_r1.selected_Country_code = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selected_Country_code);
  }
}
function UpdateTicketPage_ng_container_1_div_9_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "SMS shall not be sent to an international number");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function UpdateTicketPage_ng_container_1_div_9_ion_item_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-item", 66)(1, "ion-input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function UpdateTicketPage_ng_container_1_div_9_ion_item_9_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r1.email_value, $event) || (ctx_r1.email_value = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.email_value);
  }
}
function UpdateTicketPage_ng_container_1_div_9_ion_row_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-row")(1, "ion-col")(2, "ion-item")(3, "ion-input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_1_div_9_ion_row_15_Template_ion_input_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.selectDroppingStage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵattribute"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx_r1.updateData.droppingStage && ctx_r1.updateData.droppingStage.time ? ctx_r1.updateData.droppingStage.time + "-" : "", " ");
  }
}
function UpdateTicketPage_ng_container_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 7)(1, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngSubmit", function UpdateTicketPage_ng_container_1_div_9_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.updateDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "ion-row", 57)(3, "ion-col", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, UpdateTicketPage_ng_container_1_div_9_ion_select_4_Template, 2, 1, "ion-select", 59)(5, UpdateTicketPage_ng_container_1_div_9_ion_input_5_Template, 1, 1, "ion-input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "ion-col", 60)(7, "ion-input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function UpdateTicketPage_ng_container_1_div_9_Template_ion_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r1.selected_mobilenum, $event) || (ctx_r1.selected_mobilenum = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, UpdateTicketPage_ng_container_1_div_9_p_8_Template, 2, 0, "p", 61)(9, UpdateTicketPage_ng_container_1_div_9_ion_item_9_Template, 2, 1, "ion-item", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "ion-row")(11, "ion-col")(12, "ion-item")(13, "ion-input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_1_div_9_Template_ion_input_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.selectBoardingStage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](15, UpdateTicketPage_ng_container_1_div_9_ion_row_15_Template, 5, 2, "ion-row", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "div", 18)(17, "ion-button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx_r1.updateDetailsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r1.commonStorage.getItem("metaData").show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.commonStorage.getItem("metaData").show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selected_mobilenum);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.selected_Country_code != "+91");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵattribute"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx_r1.updateData.boardingStage && ctx_r1.updateData.boardingStage.time ? ctx_r1.updateData.boardingStage.time + "-" : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.title);
  }
}
function UpdateTicketPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 39)(3, "ion-buttons", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "ion-content", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, UpdateTicketPage_ng_container_1_div_8_Template, 17, 7, "div", 6)(9, UpdateTicketPage_ng_container_1_div_9_Template, 19, 10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r1.updateShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.updateShow);
  }
}
function UpdateTicketPage_ng_container_2_ion_row_13_ng_container_2_ion_col_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-col", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_2_ion_row_13_ng_container_2_ion_col_1_Template_ion_col_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r18);
      const option_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.updateValue(option_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "img", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("src", option_r19.img, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" \u00A0 ", option_r19.label, " ");
  }
}
function UpdateTicketPage_ng_container_2_ion_row_13_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, UpdateTicketPage_ng_container_2_ion_row_13_ng_container_2_ion_col_1_Template, 3, 2, "ion-col", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const option_r19 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", (option_r19.action !== "cancel_ticket" || !ctx_r1.metaData.cancelOption) && (option_r19.action !== "reschedule_ticket" || !ctx_r1.metaData.isPrePostPone));
  }
}
function UpdateTicketPage_ng_container_2_ion_row_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-row", 78)(1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, UpdateTicketPage_ng_container_2_ion_row_13_ng_container_2_Template, 2, 1, "ng-container", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r1.ticketOptions);
  }
}
function UpdateTicketPage_ng_container_2_div_14_div_22_p_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "p", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_2_div_14_div_22_p_1_Template_p_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.getOtp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "Get OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function UpdateTicketPage_ng_container_2_div_14_div_22_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", ctx_r1.getFormattedTime(), " Resend OTP");
  }
}
function UpdateTicketPage_ng_container_2_div_14_div_22_div_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_2_div_14_div_22_div_2_ng_template_3_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.resendCode($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "Resend OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function UpdateTicketPage_ng_container_2_div_14_div_22_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, UpdateTicketPage_ng_container_2_div_14_div_22_div_2_ng_container_2_Template, 3, 1, "ng-container", 51)(3, UpdateTicketPage_ng_container_2_div_14_div_22_div_2_ng_template_3_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const resendButton_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.timerInSeconds > 0)("ngIfElse", resendButton_r23);
  }
}
function UpdateTicketPage_ng_container_2_div_14_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, UpdateTicketPage_ng_container_2_div_14_div_22_p_1_Template, 2, 0, "p", 95)(2, UpdateTicketPage_ng_container_2_div_14_div_22_div_2_Template, 5, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r1.enabled_otp);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.enabled_otp);
  }
}
function UpdateTicketPage_ng_container_2_div_14_ion_item_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-item")(1, "ion-input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("keyup", function UpdateTicketPage_ng_container_2_div_14_ion_item_25_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.onEnterKeyPressed($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function UpdateTicketPage_ng_container_2_div_14_ion_item_25_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r1.otp_value, $event) || (ctx_r1.otp_value = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.otp_value);
  }
}
function UpdateTicketPage_ng_container_2_div_14_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 101)(1, "ion-button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_2_div_14_div_26_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.submitForm1());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.selected_name.label);
  }
}
function UpdateTicketPage_ng_container_2_div_14_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 101)(1, "ion-button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_2_div_14_div_27_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.submit_otpForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", ctx_r1.update_btn_disabled ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.selected_name.label);
  }
}
function UpdateTicketPage_ng_container_2_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "div", 84)(2, "form", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngSubmit", function UpdateTicketPage_ng_container_2_div_14_Template_form_ngSubmit_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.submitForm1());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "ion-row")(4, "ion-col", 86)(5, "ion-item", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "ion-input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "ion-row")(8, "ion-col", 86)(9, "ion-item", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](10, "ion-input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "ion-row")(12, "ion-item", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_2_div_14_Template_ion_item_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.departureDateModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "ion-col", 90)(14, "ion-label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](17, "ion-input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](18, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "ion-col", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](20, "ion-icon", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21, "\u00A0Select date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](22, UpdateTicketPage_ng_container_2_div_14_div_22_Template, 3, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "ion-row")(24, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](25, UpdateTicketPage_ng_container_2_div_14_ion_item_25_Template, 2, 1, "ion-item", 2)(26, UpdateTicketPage_ng_container_2_div_14_div_26_Template, 3, 1, "div", 94)(27, UpdateTicketPage_ng_container_2_div_14_div_27_Template, 3, 2, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx_r1.updateForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("label", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket ? "Email/Phone number" : "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.updateForm.value.displayDate == "" ? "Journey Date" : ctx_r1.updateForm.value.displayDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket && ctx_r1.enabled_otp);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r1.from_otp_enabled || !ctx_r1.otp_based_authentication_to_modify_ticket);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket);
  }
}
function UpdateTicketPage_ng_container_2_div_15_ion_select_7_ion_select_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-select-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const code_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("value", code_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", code_r28, " ");
  }
}
function UpdateTicketPage_ng_container_2_div_15_ion_select_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-select", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, UpdateTicketPage_ng_container_2_div_15_ion_select_7_ion_select_option_1_Template, 2, 2, "ion-select-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r1.AllowedCountryCodes);
  }
}
function UpdateTicketPage_ng_container_2_div_15_ion_input_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_2_div_15_ion_input_8_Template_ion_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.selectCountry_code());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function UpdateTicketPage_ng_container_2_div_15_ion_input_8_Template_ion_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r1.selected_Country_code, $event) || (ctx_r1.selected_Country_code = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selected_Country_code);
  }
}
function UpdateTicketPage_ng_container_2_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngSubmit", function UpdateTicketPage_ng_container_2_div_15_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.updateDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "ion-card", 104)(3, "ion-row")(4, "ion-col", 23)(5, "ion-label", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, "Mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](7, UpdateTicketPage_ng_container_2_div_15_ion_select_7_Template, 2, 1, "ion-select", 106)(8, UpdateTicketPage_ng_container_2_div_15_ion_input_8_Template, 1, 1, "ion-input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "ion-col", 26)(10, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11, "Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "ion-input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function UpdateTicketPage_ng_container_2_div_15_Template_ion_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r1.selected_mobilenum, $event) || (ctx_r1.selected_mobilenum = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "ion-row")(14, "ion-col", 21)(15, "ion-label", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](16, "Boarding Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "ion-item", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_2_div_15_Template_ion_item_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.selectBoardingStage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "ion-input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](21, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "ion-row")(23, "ion-col", 21)(24, "ion-button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](26, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](27, "ion-input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx_r1.updateDetailsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r1.commonStorage.getItem("metaData").show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.commonStorage.getItem("metaData").show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selected_mobilenum);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵattribute"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx_r1.updateData.boardingStage.name + " " + ctx_r1.updateData.boardingStage.time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.title);
  }
}
function UpdateTicketPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_2_Template_ion_toolbar_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.toggleOptions());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "ion-buttons", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](4, "ion-back-button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, "Modify Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "ion-content", 72)(8, "ion-row", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_2_Template_ion_row_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.toggleOptions());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "ion-col", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "ion-col", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](12, "ion-icon", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](13, UpdateTicketPage_ng_container_2_ion_row_13_Template, 3, 1, "ion-row", 77)(14, UpdateTicketPage_ng_container_2_div_14_Template, 28, 7, "div", 2)(15, UpdateTicketPage_ng_container_2_div_15_Template, 28, 7, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx_r1.selected_name.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("name", ctx_r1.optionsVisible ? "chevron-up-circle-outline" : "chevron-down-circle-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.optionsVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.updateShow == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.updateShow == true);
  }
}
function UpdateTicketPage_ng_container_3_div_8_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-datetime", 122, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ionChange", function UpdateTicketPage_ng_container_3_div_8_ng_template_10_Template_ion_datetime_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r31);
      const popoverDatetime_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.displayMybookings(popoverDatetime_r32 == null ? null : popoverDatetime_r32.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("max", ctx_r1.maxDate);
  }
}
function UpdateTicketPage_ng_container_3_div_8_div_11_p_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "p", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_3_div_8_div_11_p_1_Template_p_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r33);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.getOtp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " Get OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function UpdateTicketPage_ng_container_3_div_8_div_11_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "p", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", ctx_r1.getFormattedTime(), " Resend OTP");
  }
}
function UpdateTicketPage_ng_container_3_div_8_div_11_div_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_3_div_8_div_11_div_2_ng_template_3_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.resendCode($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "Resend OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function UpdateTicketPage_ng_container_3_div_8_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, UpdateTicketPage_ng_container_3_div_8_div_11_div_2_ng_container_2_Template, 3, 1, "ng-container", 51)(3, UpdateTicketPage_ng_container_3_div_8_div_11_div_2_ng_template_3_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const resendButton_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.timerInSeconds > 0)("ngIfElse", resendButton_r35);
  }
}
function UpdateTicketPage_ng_container_3_div_8_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, UpdateTicketPage_ng_container_3_div_8_div_11_p_1_Template, 2, 0, "p", 123)(2, UpdateTicketPage_ng_container_3_div_8_div_11_div_2_Template, 5, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r1.enabled_otp);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.enabled_otp);
  }
}
function UpdateTicketPage_ng_container_3_div_8_ion_item_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-item", 115)(1, "ion-input", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ionChange", function UpdateTicketPage_ng_container_3_div_8_ion_item_12_Template_ion_input_ionChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.enforceMaxLengthOtp($event));
    })("keyup", function UpdateTicketPage_ng_container_3_div_8_ion_item_12_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.onEnterKeyPressed($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function UpdateTicketPage_ng_container_3_div_8_ion_item_12_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r1.otp_value, $event) || (ctx_r1.otp_value = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.otp_value);
  }
}
function UpdateTicketPage_ng_container_3_div_8_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 18)(1, "ion-button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.title);
  }
}
function UpdateTicketPage_ng_container_3_div_8_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 18)(1, "ion-button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_3_div_8_div_14_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r37);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.submit_otpForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", ctx_r1.update_btn_disabled ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.title);
  }
}
function UpdateTicketPage_ng_container_3_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 7)(1, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngSubmit", function UpdateTicketPage_ng_container_3_div_8_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "ion-item", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "ion-input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "ion-item", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](5, "ion-input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "ion-item", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](7, "ion-input", 119)(8, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "ion-modal", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](10, UpdateTicketPage_ng_container_3_div_8_ng_template_10_Template, 2, 1, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](11, UpdateTicketPage_ng_container_3_div_8_div_11_Template, 3, 2, "div", 2)(12, UpdateTicketPage_ng_container_3_div_8_ion_item_12_Template, 2, 1, "ion-item", 121)(13, UpdateTicketPage_ng_container_3_div_8_div_13_Template, 3, 1, "div", 47)(14, UpdateTicketPage_ng_container_3_div_8_div_14_Template, 3, 2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx_r1.updateForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("label", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket ? "Email/Phone number" : "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket && ctx_r1.enabled_otp);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r1.from_otp_enabled || !ctx_r1.otp_based_authentication_to_modify_ticket);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket);
  }
}
function UpdateTicketPage_ng_container_3_div_9_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "ion-item", 140)(2, "ion-label", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "ion-input", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedCountry.flag, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.selectedCountry.dialCode);
  }
}
function UpdateTicketPage_ng_container_3_div_9_div_6_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-item", 140)(1, "ion-label", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "ion-input", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_3_div_9_div_6_ion_item_1_Template_ion_input_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r39);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.selectCountry_code());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedCountry.flag, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r1.selectedCountry.dialCode);
  }
}
function UpdateTicketPage_ng_container_3_div_9_div_6_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-item", 140)(1, "ion-label", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "ion-input", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_3_div_9_div_6_ion_item_2_Template_ion_input_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r40);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.selectCountry_code());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function UpdateTicketPage_ng_container_3_div_9_div_6_ion_item_2_Template_ion_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r40);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r1.dialCodeSelected, $event) || (ctx_r1.dialCodeSelected = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx_r1.flagSelected, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.dialCodeSelected);
  }
}
function UpdateTicketPage_ng_container_3_div_9_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, UpdateTicketPage_ng_container_3_div_9_div_6_ion_item_1_Template, 4, 2, "ion-item", 143)(2, UpdateTicketPage_ng_container_3_div_9_div_6_ion_item_2_Template, 4, 2, "ion-item", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.selectedCountry);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r1.selectedCountry);
  }
}
function UpdateTicketPage_ng_container_3_div_9_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "\"SMS shall not be sent to an international number\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function UpdateTicketPage_ng_container_3_div_9_ion_item_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-item", 132)(1, "ion-input", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function UpdateTicketPage_ng_container_3_div_9_ion_item_11_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r41);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r1.email_value, $event) || (ctx_r1.email_value = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.email_value);
  }
}
function UpdateTicketPage_ng_container_3_div_9_ion_row_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 21)(2, "ion-item", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_3_div_9_ion_row_18_Template_ion_item_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r42);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.selectDroppingStage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "ion-input", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](4, "ion-icon", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx_r1.updateData.droppingStage && ctx_r1.updateData.droppingStage.name ? ctx_r1.updateData.droppingStage.name : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵattribute"]("readonly", true);
  }
}
function UpdateTicketPage_ng_container_3_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 7)(1, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngSubmit", function UpdateTicketPage_ng_container_3_div_9_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r38);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.updateDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "ion-row", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "ion-col", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "ion-col", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](5, UpdateTicketPage_ng_container_3_div_9_div_5_Template, 6, 3, "div", 2)(6, UpdateTicketPage_ng_container_3_div_9_div_6_Template, 3, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "ion-col", 131)(8, "ion-item", 132)(9, "ion-input", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ionChange", function UpdateTicketPage_ng_container_3_div_9_Template_ion_input_ionChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r38);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.enforceMaxLength($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function UpdateTicketPage_ng_container_3_div_9_Template_ion_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r38);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r1.selected_mobilenum, $event) || (ctx_r1.selected_mobilenum = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](10, UpdateTicketPage_ng_container_3_div_9_p_10_Template, 2, 0, "p", 134)(11, UpdateTicketPage_ng_container_3_div_9_ion_item_11_Template, 2, 1, "ion-item", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "ion-row")(13, "ion-col", 21)(14, "ion-item", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function UpdateTicketPage_ng_container_3_div_9_Template_ion_item_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r38);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.selectBoardingStage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "ion-input", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](17, "ion-icon", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](18, UpdateTicketPage_ng_container_3_div_9_ion_row_18_Template, 5, 2, "ion-row", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "div", 18)(20, "ion-button", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx_r1.updateDetailsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selected_mobilenum);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.selected_Country_code != "+91");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵattribute"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx_r1.updateData.boardingStage && ctx_r1.updateData.boardingStage.time ? ctx_r1.updateData.boardingStage.time + "-" : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.from_otp_enabled && ctx_r1.otp_based_authentication_to_modify_ticket);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.title);
  }
}
function UpdateTicketPage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "ion-header", 112)(2, "ion-toolbar", 39)(3, "ion-buttons", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "ion-content", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, UpdateTicketPage_ng_container_3_div_8_Template, 15, 6, "div", 6)(9, UpdateTicketPage_ng_container_3_div_9_Template, 22, 10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r1.updateShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.updateShow);
  }
}
class UpdateTicketPage {
  constructor(loader, util, formBuilder, theme, ex, commonStorage, commonService, apiFactory, modalController, dateService, navCtrl, route, router, appData, globalData, modalCtrl) {
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
    this.appData = appData;
    this.globalData = globalData;
    this.modalCtrl = modalCtrl;
    this.pnrNumber = '';
    this.email = '';
    this.updateShow = false;
    this.stageDetails = [];
    this.reservationId = 0;
    this.updateData = {};
    this.ticketDetails = [];
    this.fromMybooking = false;
    this.travelDateMybooking = '';
    this.title = '';
    this.bookingDetails = {};
    this.update_btn_disabled = true;
    this.timer = 30;
    this.enabled_otp = false;
    this.timerInSeconds = 30;
    this.otp_value = '';
    this.authKey = '';
    this.from_otp_enabled = false;
    this.otp_based_authentication_to_modify_ticket = false;
    this.stageDetailsDrop = [];
    this.boardingPoints = [];
    this.isRoundTrip = false;
    this.departureDate = {};
    this.departureDateReturn = {};
    this.ticketOptions = [{
      label: 'View ticket',
      action: 'view_ticket',
      img: './assets/icon/viewTicket.svg'
    }, {
      label: 'Cancel ticket',
      action: 'cancel_ticket',
      img: './assets/icon/seabird_modify_cancelticket.svg'
    }, {
      label: 'Download ticket',
      action: 'download_ticket',
      img: './assets/icon/seabird_modify_downloadticket.svg'
    }, {
      label: 'Reschedule',
      action: 'reschedule_ticket',
      img: './assets/icon/prepostpone.svg'
    }, {
      label: 'Update ticket',
      action: 'update_ticket',
      img: './assets/icon/Refresh.svg'
    }];
    this.selected_name = {
      label: 'View ticket',
      action: 'view_ticket'
    };
    this.optionsVisible = false;
    this.selectedCountry = '';
    this.flagSelected = '';
    this.dialCodeSelected = '';
    this.maxDate = '';
    this.isIos = false;
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    this.appData.newTheme = this.util.getNewTheme();
    this.updateData = this.ticketDetails.boarding_details;
    this.updateData = {
      "boardingStage": '',
      "droppingStage": ''
    };
    this.route.queryParams.subscribe(params => {
      this.title = params["title"];
      this.from_otp_enabled = params["otp_enabled"] ? params["otp_enabled"] : false;
      this.newBooking = params["newBooking"];
      this.metaData = this.commonStorage.getItem('metaData');
      this.updateShow = params["from_book_page"];
      if (this.title === 'Download Ticket') {
        this.selected_name = {
          label: 'Download Ticket',
          action: 'download_ticket'
        };
      } else if (this.title === 'View Ticket') {
        this.selected_name = {
          label: 'View Ticket',
          action: 'view_ticket'
        };
      }
    });
    this.AllowedCountryCodes = this.commonStorage.getItem("metaData").AllowedCountryCodes;
    this.phoneNumCount = this.commonStorage.getItem('metaData').phoneNumCount;
  }
  ionViewWillEnter() {
    this.route.queryParams.subscribe(params => {
      this.updateShow = params["from_book_page"];
      if (this.updateShow) {
        this.updateData = params["user"] ? params["user"] : '';
        this.ticketDetails = this.updateData;
        this.getBoradingPoint();
        this.getDroppingPoint();
        this.email_value = this.ticketDetails.passenger_details[0].cus_email;
        this.AllowedCountryCodes = this.commonStorage.getItem('metaData').AllowedCountryCodes;
        if (this.ticketDetails.passenger_details[0].country_code != '') {
          if (this.ticketDetails.passenger_details[0].country_code.indexOf("+") > -1) {
            this.selected_Country_code = this.ticketDetails.passenger_details[0].country_code.trim();
          } else {
            this.selected_Country_code = '+' + this.ticketDetails.passenger_details[0].country_code.trim();
          }
        } else {
          if (this.commonStorage.getItem('metaData').show_countries_isd_codes_selection) {
            if (this.AllowedCountryCodes[0] == '91') {
              this.selected_Country_code = '+91';
            } else {
              this.selected_Country_code = '+' + this.AllowedCountryCodes[0];
            }
          }
        }
        if (this.ticketDetails.passenger_details[0].mobile != '') {
          const mobile = this.ticketDetails.passenger_details[0].mobile;
          if (mobile.includes('-')) {
            const parts = mobile.split('-');
            this.selected_mobilenum = parts[1];
          } else {
            this.selected_mobilenum = mobile;
          }
        }
        this.updateDetailsForm.value.country_code = this.selected_Country_code;
        this.commonStorage.setItem('cancelTicketDetails', this.ticketDetails);
        let numberPhone = this.ticketDetails.passenger_details[0].mobile.indexOf("-") > -1 ? this.ticketDetails.passenger_details[0].mobile.split("-")[1] : this.ticketDetails.passenger_details[0].mobile;
        let emailValidation;
        if (this.from_otp_enabled && this.otp_based_authentication_to_modify_ticket) {
          emailValidation = false;
        } else {
          emailValidation = this.email !== this.ticketDetails.passenger_details[0].email;
        }
      }
    });
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
  getDroppingPoint() {
    let path2 = "reservation_id=" + this.ticketDetails.reservation_id + "&city_id=" + this.ticketDetails.destination_id;
    this.apiFactory.getDroppingStages(path2).subscribe(droppingResult => {
      if (droppingResult.dropping_stages && droppingResult.dropping_stages.length) {
        this.stageDetailsDrop = droppingResult.dropping_stages;
        var x = this.stageDetailsDrop.find(elem => {
          return elem.name == this.ticketDetails.drop_off_details.address;
        });
        this.updateData.droppingStage = x;
      } else {
        this.util.showToast(droppingResult.message);
      }
    });
  }
  getBoradingPoint() {
    let path = "reservation_id=" + this.ticketDetails.reservation_id + "&city_id=" + this.ticketDetails.origin_id;
    this.apiFactory.getBoardingStages(path).subscribe(boardingResult => {
      console.log("boardingResult", boardingResult);
      this.loader.hideLoadingDefault();
      if (boardingResult.result && boardingResult.result.length) {
        this.stageDetails = [];
        for (let i = 1; i < boardingResult.result.length; i++) {
          this.stageDetails.push({
            id: boardingResult.result[i][1],
            name: boardingResult.result[i][0],
            time: boardingResult.result[i][2]
          });
        }
        var x = this.stageDetails.find(elem => {
          return elem.name == this.ticketDetails.boarding_details.address;
        });
        this.updateData.boardingStage = x;
        this.updateDetailsForm.controls['stage'].setValue(x.name + ' ' + x.time);
        this.pnrNumber = this.ticketDetails.ticket_number;
        if (!this.fromMybooking) {
          this.updateShow = true;
        }
      } else {
        this.util.showToast(boardingResult.message);
      }
    });
  }
  ngOnInit() {
    const today = new Date();
    // this.maxDate = today.toISOString().split('T')[0];
    this.countryData = _countries_countries_json__WEBPACK_IMPORTED_MODULE_4__;
    this.selectedCountry = this.countryData.find(country => country.dialCode === "+91");
    this.validations();
    this.otp_based_authentication_to_modify_ticket = this.commonStorage.getItem('metaData').otp_based_authentication_to_modify_ticket ? this.commonStorage.getItem('metaData').otp_based_authentication_to_modify_ticket : false;
    if (this.commonStorage.getItem('metaData').show_countries_isd_codes_selection) {
      this.util.getCountries().subscribe(data => {
        this.countries = data;
      });
    } else {
      this.countries = [];
    }
  }
  ionViewDidLoad() {}
  selectCountry_code() {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.metaData.msiteFolder == 'ourbustheme') {
        const reformattedCountries = _this.countryData.map(country => ({
          name: country.name,
          cca2: country.code,
          idd: country.dialCode,
          flags: country.flag
        }));
        const modal = yield _this.modalController.create({
          component: _cities_modal_cities_modal_page__WEBPACK_IMPORTED_MODULE_1__.CitiesModalPage,
          componentProps: {
            "list": 9,
            "destinationList": reformattedCountries,
            "isOurbus": 'true'
          }
        });
        yield modal.present();
        const {
          data
        } = yield modal.onDidDismiss();
        if (data != '') {
          _this.selectedCountry = null;
          _this.flagSelected = data.flags;
          _this.dialCodeSelected = data.idd;
        }
      } else {
        const modal = yield _this.modalController.create({
          component: _cities_modal_cities_modal_page__WEBPACK_IMPORTED_MODULE_1__.CitiesModalPage,
          componentProps: {
            "list": 9,
            "destinationList": _this.countries,
            "isOurbus": 'false'
          }
        });
        yield modal.present();
        const {
          data
        } = yield modal.onDidDismiss();
        if (data != '') {
          _this.selected_Country_code = data.idd;
        }
      }
    })();
  }
  departureDateModal() {
    var _this2 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let modal = yield _this2.modalController.create({
        component: _calendar_modal_calendar_modal_page__WEBPACK_IMPORTED_MODULE_2__.CalendarModalPage,
        componentProps: {
          departureDate: _this2.dateService.getToday(),
          showPastDate: false,
          title: "Select Booking Date"
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if (data) {
        _this2.travelDate = data;
        _this2.updateForm.controls['displayDate'].setValue(_this2.commonService.displayFormatDate(data));
      }
    })();
  }
  validations() {
    this.updateForm = this.formBuilder.group({
      pnrNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required])],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, _services_validator_service__WEBPACK_IMPORTED_MODULE_3__.ValidatorService.emailOrPhoneValidator])],
      displayDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required])],
      otp: ['']
    });
    if (this.commonStorage.getItem('metaData').show_countries_isd_codes_selection) {
      this.updateDetailsForm = this.formBuilder.group({
        mobile_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.maxLength(this.phoneNumCount), _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.minLength(this.phoneNumCount), _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required])],
        country_code: [this.selected_Country_code, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required])],
        stage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required])],
        staged: [''],
        email: ['']
      });
    } else {
      this.updateDetailsForm = this.formBuilder.group({
        mobile_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.maxLength(this.phoneNumCount), _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.minLength(this.phoneNumCount), _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required])],
        country_code: [this.AllowedCountryCodes[0], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required])],
        stage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required])],
        staged: [''],
        email: ['']
      });
    }
  }
  setDefaultFormData() {
    this.updateDetailsForm.controls['stage'].setValue(this.ticketDetails.boarding_details ? this.ticketDetails.boarding_details.address : '');
    this.updateDetailsForm.controls['staged'].setValue(this.ticketDetails.drop_off_details ? this.ticketDetails.drop_off_details.address : '');
    this.updateDetailsForm.controls['email'].setValue(this.ticketDetails.passenger_details[0].cus_email);
    this.updateDetailsForm.controls['mobile_number'].setValue(this.ticketDetails.passenger_details[0].mobile);
  }
  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
  getFormattedTime() {
    const minutes = Math.floor(this.timerInSeconds / 60);
    const seconds = this.timerInSeconds % 60;
    return `${this.padLeft(minutes)}:${this.padLeft(seconds)}`;
  }
  padLeft(value) {
    return value < 10 ? `0${value}` : `${value}`;
  }
  startTimer() {
    this.timerInSeconds = 59;
    this.timerSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.interval)(1000).subscribe(() => {
      this.timerInSeconds--;
      if (this.timerInSeconds === 0 && this.timerSubscription) {
        this.timerSubscription.unsubscribe();
      }
    });
  }
  onEnterKeyPressed(event) {
    let value = event.target.value;
    value = value.replace(/[^0-9]/g, '');
    this.updateForm.controls['otp'].setValue(value);
    if (this.isValid()) {
      if (this.updateForm.value.otp != '') {
        var dataCount = this.updateForm.value.otp.length;
        if (dataCount == 6) {
          this.update_btn_disabled = false;
        } else {
          this.update_btn_disabled = true;
        }
      }
    }
  }
  resendCode(event) {
    this.otp_value = '';
    this.updateForm.value.otp = '';
    event.preventDefault();
    this.getOtp();
    event.stopPropagation();
  }
  getOtp() {
    if (this.isValid()) {
      if (!this.util.checkConnection()) {
        return false;
      }
      this.loader.showLoadingDefault();
      this.apiFactory.getTicketDetails_otp(this.updateForm.value.pnrNumber, this.updateForm.value.email, this.updateForm.value.displayDate, true).subscribe(result => {
        this.loader.hideLoadingDefault();
        if (result.code == 200) {
          this.authKey = result.key;
          this.enabled_otp = true;
          this.util.showToast(result.message);
          this.startTimer();
        } else {
          this.util.showToast(result.message);
        }
      }, err => {
        this.loader.hideLoadingDefault();
        if (!this.util.isConnected()) {
          this.util.showAlert("Error Loading", "Internet is not connected. Please connect to Internet and try again !");
        } else {
          this.util.showAlert("Error Loading", "Something went wrong, please try again after sometime");
        }
      });
      return;
    }
  }
  submit_otpForm() {
    this.pnrNumber = this.updateForm.value.pnrNumber;
    this.email = this.updateForm.value.email;
    this.loader.showLoadingDefault();
    this.apiFactory.submit_otp(this.updateForm.value.pnrNumber, this.email, this.updateForm.value.displayDate, this.authKey, this.updateForm.value.otp).subscribe(result => {
      this.loader.hideLoadingDefault();
      if (result.code && result.code == 200) {
        this.ticketDetails = result.result;
        this.util.showToast("OTP verified successfully");
        this.email_value = this.ticketDetails.passenger_details[0].cus_email;
        this.AllowedCountryCodes = this.commonStorage.getItem('metaData').AllowedCountryCodes;
        if (this.ticketDetails.passenger_details[0].country_code != '') {
          if (this.ticketDetails.passenger_details[0].country_code.indexOf("+") > -1) {
            this.selected_Country_code = this.ticketDetails.passenger_details[0].country_code.trim();
          } else {
            this.selected_Country_code = '+' + this.ticketDetails.passenger_details[0].country_code.trim();
          }
        } else {
          if (this.commonStorage.getItem('metaData').show_countries_isd_codes_selection) {
            if (this.AllowedCountryCodes[0] == '91') {
              this.selected_Country_code = '+91';
            } else {
              this.selected_Country_code = '+' + this.AllowedCountryCodes[0];
            }
          }
        }
        if (this.ticketDetails.passenger_details[0].mobile != '') {
          const mobile = this.ticketDetails.passenger_details[0].mobile;
          if (mobile.includes('-')) {
            const parts = mobile.split('-');
            this.selected_mobilenum = parts[1];
          } else {
            this.selected_mobilenum = mobile;
          }
        }
        this.updateDetailsForm.value.country_code = this.selected_Country_code;
        this.setDefaultFormData();
        this.commonStorage.setItem('cancelTicketDetails', result.result);
        let emailValidation;
        if (this.from_otp_enabled && this.otp_based_authentication_to_modify_ticket) {
          emailValidation = false;
        } else {
          emailValidation = this.email !== result.result.passenger_details[0].email;
        }
        let dateValidation = this.dateService.cancelTicketDateFormat(this.travelDate.formattedDate, 'dd-mm-yyyy', this.commonService.checkDateFormat()) == result.result.travel_date;
        let cancelStatus = result.result.ticket_status == 'Cancelled';
        if (!emailValidation && !cancelStatus) {
          this.bookingDetails['origin'] = result.result.origin;
          this.bookingDetails['destination'] = result.result.destination;
          let d = new Date(result.result.travel_date);
          this.bookingDetails['travelDate'] = result.result.travel_date;
          this.bookingDetails['travelDay'] = d.getDate();
          this.bookingDetails['travelMonth'] = this.util.getMonthName(d.getMonth() + 1);
          this.bookingDetails['travelYear'] = d.getFullYear();
          this.bookingDetails['pnrNumber'] = this.updateForm.value.pnrNumber;
          localStorage.setItem('bookingDetails', JSON.stringify(this.bookingDetails));
          let navigationExtras = {
            queryParams: {
              redirectToHome: true
            }
          };
          if (this.title == "View ticket") {
            this.navCtrl.navigateRoot('booking-details', navigationExtras);
            return false;
          }
          let path = "reservation_id=" + result.result.reservation_id + "&city_id=" + result.result.origin_id;
          let path2 = "reservation_id=" + result.result.reservation_id + "&city_id=" + result.result.destination_id;
          this.apiFactory.getBoardingStages(path).subscribe(boardingResult => {
            this.loader.hideLoadingDefault();
            if (boardingResult.result && boardingResult.result.length) {
              this.stageDetails = [];
              for (let i = 1; i < boardingResult.result.length; i++) {
                this.stageDetails.push({
                  id: boardingResult.result[i][1],
                  name: boardingResult.result[i][0],
                  time: boardingResult.result[i][2]
                });
              }
              var x = this.stageDetails.find(elem => {
                return elem.name == this.ticketDetails.boarding_details.address;
              });
              this.updateData.boardingStage = x;
              this.pnrNumber = result.result.ticket_number;
              if (this.fromMybooking) {} else {
                this.updateShow = true;
              }
            } else {
              this.util.showToast(boardingResult.message);
            }
          });
          this.apiFactory.getDroppingStages(path2).subscribe(droppingResult => {
            this.loader.hideLoadingDefault();
            if (droppingResult.dropping_stages && droppingResult.dropping_stages.length) {
              this.stageDetailsDrop = droppingResult.dropping_stages;
              var x = this.stageDetailsDrop.find(elem => {
                return elem.name == this.ticketDetails.drop_off_details.address;
              });
              this.updateData.droppingStage = x;
            } else {
              this.util.showToast(droppingResult.message);
            }
          });
        } else {
          this.updateShow = false;
          this.loader.hideLoadingDefault();
          if (this.from_otp_enabled && this.otp_based_authentication_to_modify_ticket) {
            if (emailValidation && !dateValidation) {
              this.util.showAlert('', "Email and date you entered mismatching");
            } else if (!dateValidation) {
              this.util.showAlert('', 'Date you entered mismatching');
            } else if (cancelStatus) {
              this.util.showAlert('', "your ticket is already cancelled");
            }
          } else {
            if (emailValidation && !dateValidation) {
              this.util.showAlert('', "Email and date you entered mismatching");
            } else if (!dateValidation) {
              this.util.showAlert('', 'Date you entered mismatching');
            } else if (emailValidation) {
              this.util.showAlert('', "Email you entered mismatching");
            } else if (cancelStatus) {
              this.util.showAlert('', "your ticket is already cancelled");
            }
          }
        }
        return;
      } else {
        this.loader.hideLoadingDefault();
        setTimeout(() => {
          this.util.showAlert('', result.message);
        });
        return;
      }
    }, err => {
      this.loader.hideLoadingDefault();
      if (!this.util.isConnected()) {
        this.util.showAlert("Error Loading", "Internet is not connected. Please connect to Internet and try again !");
      } else {
        this.util.showAlert("Error Loading", "Something went wrong, please try again after sometime");
      }
    });
  }
  submitForm() {
    if (this.isValid()) {
      if (!this.util.checkConnection()) {
        return false;
      }
      this.loader.showLoadingDefault();
      this.pnrNumber = this.updateForm.value.pnr;
      this.email = this.updateForm.value.email;
      this.displayNewDate = this.updateForm.value.displayDate;
      if (this.appData.newTheme) {
        this.apiFactory.getTicketDetails_update(this.updateForm.value.pnrNumber, this.updateForm.value.email, this.displayNewDate, false).subscribe(result => {
          this.loader.hideLoadingDefault();
          // debugger;
          if (typeof result.code == "undefined") {
            this.ticketDetails = result;
            this.email_value = this.ticketDetails.passenger_details[0].cus_email;
            this.AllowedCountryCodes = this.commonStorage.getItem('metaData').AllowedCountryCodes;
            if (this.ticketDetails.passenger_details[0].country_code != '') {
              if (this.ticketDetails.passenger_details[0].country_code.indexOf("+") > -1) {
                this.selected_Country_code = this.ticketDetails.passenger_details[0].country_code.trim();
              } else {
                this.selected_Country_code = '+' + this.ticketDetails.passenger_details[0].country_code.trim();
              }
            } else {
              if (this.commonStorage.getItem('metaData').show_countries_isd_codes_selection) {
                if (this.AllowedCountryCodes[0] == '91') {
                  this.selected_Country_code = '+91';
                } else {
                  this.selected_Country_code = '+' + this.AllowedCountryCodes[0];
                }
              }
            }
            if (this.ticketDetails.passenger_details[0].mobile != '') {
              const mobile = this.ticketDetails.passenger_details[0].mobile;
              if (mobile.includes('-')) {
                const parts = mobile.split('-');
                this.selected_mobilenum = parts[1];
              } else {
                this.selected_mobilenum = mobile;
              }
            }
            this.updateDetailsForm.value.country_code = this.selected_Country_code;
            this.setDefaultFormData();
            this.commonStorage.setItem('cancelTicketDetails', result);
            let numberPhone = result.passenger_details[0].mobile.indexOf("-") > -1 ? result.passenger_details[0].mobile.split("-")[1] : result.passenger_details[0].mobile;
            let emailValidation;
            if (this.from_otp_enabled && this.otp_based_authentication_to_modify_ticket) {
              emailValidation = false;
            } else {
              emailValidation = this.email !== result.passenger_details[0].email;
            }
            let dateValidation = this.dateService.cancelTicketDateFormat(this.travelDate.formattedDate, 'dd-mm-yyyy', this.commonService.checkDateFormat()) == result.travel_date;
            let cancelStatus = result.ticket_status == 'Cancelled';
            if (!emailValidation && !cancelStatus) {
              this.bookingDetails['origin'] = result.origin;
              this.bookingDetails['destination'] = result.destination;
              let d = new Date(result.travel_date);
              this.bookingDetails['travelDate'] = result.travel_date;
              this.bookingDetails['travelDay'] = d.getDate();
              this.bookingDetails['travelMonth'] = this.util.getMonthName(d.getMonth() + 1);
              this.bookingDetails['travelYear'] = d.getFullYear();
              this.bookingDetails['pnrNumber'] = this.updateForm.value.pnrNumber;
              localStorage.setItem('bookingDetails', JSON.stringify(this.bookingDetails));
              if (this.metaData.msiteFolder == 'ourbustheme') {
                let navigationExtras = {
                  queryParams: {
                    redirectToHome: true,
                    new_booking: "false"
                  }
                };
                if (this.title == "View ticket") {
                  this.navCtrl.navigateRoot('booking-details', navigationExtras);
                  return false;
                }
              } else {
                let navigationExtras = {
                  queryParams: {
                    redirectToHome: true,
                    new_booking: "false" // need to ask from om sir
                  }
                };
                if (this.title == "View ticket") {
                  this.navCtrl.navigateRoot('booking-details', navigationExtras);
                  return false;
                }
              }
              let path = "reservation_id=" + result.reservation_id + "&city_id=" + result.origin_id;
              let path2 = "reservation_id=" + result.reservation_id + "&city_id=" + result.destination_id;
              this.apiFactory.getBoardingStages(path).subscribe(boardingResult => {
                this.loader.hideLoadingDefault();
                if (boardingResult.result && boardingResult.result.length) {
                  this.stageDetails = [];
                  for (let i = 1; i < boardingResult.result.length; i++) {
                    this.stageDetails.push({
                      id: boardingResult.result[i][1],
                      name: boardingResult.result[i][0],
                      time: boardingResult.result[i][2]
                    });
                  }
                  var x = this.stageDetails.find(elem => {
                    return elem.name == this.ticketDetails.boarding_details.address;
                  });
                  this.updateData.boardingStage = x;
                  this.pnrNumber = result.ticket_number;
                  if (!this.fromMybooking) {
                    this.updateShow = true;
                  }
                } else {
                  this.util.showToast(boardingResult.message);
                }
              });
              this.apiFactory.getDroppingStages(path2).subscribe(droppingResult => {
                this.loader.hideLoadingDefault();
                if (droppingResult.dropping_stages && droppingResult.dropping_stages.length) {
                  this.stageDetailsDrop = droppingResult.dropping_stages;
                  var x = this.stageDetailsDrop.find(elem => {
                    return elem.name == this.ticketDetails.drop_off_details.address;
                  });
                  this.updateData.droppingStage = x;
                } else {
                  this.util.showToast(droppingResult.message);
                }
              });
              return;
            } else {
              this.updateShow = false;
              this.loader.hideLoadingDefault();
              if (this.from_otp_enabled && this.otp_based_authentication_to_modify_ticket) {
                if (emailValidation && !dateValidation) {
                  this.util.showAlert('', "Email and date you entered mismatching");
                } else if (!dateValidation) {
                  this.util.showAlert('', 'Date you entered mismatching');
                } else if (cancelStatus) {
                  this.util.showAlert('', "your ticket is already cancelled");
                }
                return;
              } else {
                if (emailValidation && !dateValidation) {
                  this.util.showAlert('', "Email and date you entered mismatching");
                } else if (!dateValidation) {
                  this.util.showAlert('', 'Date you entered mismatching');
                } else if (emailValidation) {
                  this.util.showAlert('', "Email you entered mismatching");
                } else if (cancelStatus) {
                  this.util.showAlert('', "your ticket is already cancelled");
                }
                return;
              }
            }
            return;
          } else {
            this.loader.hideLoadingDefault();
            setTimeout(() => {
              this.util.showAlert('', result.message);
            });
            return;
          }
        }, err => {
          this.loader.hideLoadingDefault();
          if (!this.util.isConnected()) {
            this.util.showAlert("Error Loading", "Internet is not connected. Please connect to Internet and try again !");
            return;
          } else {
            this.util.showAlert("Error Loading", "Something went wrong, please try again after sometime");
            return;
          }
        });
      } else {
        this.apiFactory.getTicketDetails_update(this.updateForm.value.pnrNumber, this.updateForm.value.email, this.updateForm.value.displayDate, false).subscribe(result => {
          this.loader.hideLoadingDefault();
          if (typeof result.code == "undefined") {
            this.ticketDetails = result;
            this.email_value = this.ticketDetails.passenger_details[0].cus_email;
            this.AllowedCountryCodes = this.commonStorage.getItem('metaData').AllowedCountryCodes;
            if (this.ticketDetails.passenger_details[0].country_code != '') {
              if (this.ticketDetails.passenger_details[0].country_code.indexOf("+") > -1) {
                this.selected_Country_code = this.ticketDetails.passenger_details[0].country_code.trim();
              } else {
                this.selected_Country_code = '+' + this.ticketDetails.passenger_details[0].country_code.trim();
              }
            } else {
              if (this.commonStorage.getItem('metaData').show_countries_isd_codes_selection) {
                if (this.AllowedCountryCodes[0] == '91') {
                  this.selected_Country_code = '+91';
                } else {
                  this.selected_Country_code = '+' + this.AllowedCountryCodes[0];
                }
              }
            }
            if (this.ticketDetails.passenger_details[0].mobile != '') {
              const mobile = this.ticketDetails.passenger_details[0].mobile;
              if (mobile.includes('-')) {
                const parts = mobile.split('-');
                this.selected_mobilenum = parts[1];
              } else {
                this.selected_mobilenum = mobile;
              }
            }
            this.updateDetailsForm.value.country_code = this.selected_Country_code;
            this.setDefaultFormData();
            this.commonStorage.setItem('cancelTicketDetails', result);
            let numberPhone = result.passenger_details[0].mobile.indexOf("-") > -1 ? result.passenger_details[0].mobile.split("-")[1] : result.passenger_details[0].mobile;
            let emailValidation;
            if (this.from_otp_enabled && this.otp_based_authentication_to_modify_ticket) {
              emailValidation = false;
            } else {
              emailValidation = this.email !== result.passenger_details[0].email;
            }
            let dateValidation = this.dateService.cancelTicketDateFormat(this.travelDate.formattedDate, 'dd-mm-yyyy', this.commonService.checkDateFormat()) == result.travel_date;
            let cancelStatus = result.ticket_status == 'Cancelled';
            if (!emailValidation && !cancelStatus) {
              this.bookingDetails['origin'] = result.origin;
              this.bookingDetails['destination'] = result.destination;
              let d = new Date(result.travel_date);
              this.bookingDetails['travelDate'] = result.travel_date;
              this.bookingDetails['travelDay'] = d.getDate();
              this.bookingDetails['travelMonth'] = this.util.getMonthName(d.getMonth() + 1);
              this.bookingDetails['travelYear'] = d.getFullYear();
              this.bookingDetails['pnrNumber'] = this.updateForm.value.pnrNumber;
              localStorage.setItem('bookingDetails', JSON.stringify(this.bookingDetails));
              if (this.metaData.msiteFolder == 'ourbustheme') {
                let navigationExtras = {
                  queryParams: {
                    redirectToHome: true,
                    new_booking: "false"
                  }
                };
                if (this.title == "View ticket") {
                  this.router.navigate(['booking-details'], navigationExtras);
                  return false;
                }
              } else {
                let navigationExtras = {
                  queryParams: {
                    redirectToHome: true,
                    new_booking: "false" // need to ask from om sir
                  }
                };
                if (this.title == "View ticket") {
                  this.navCtrl.navigateRoot('booking-details', navigationExtras);
                  return false;
                }
              }
              let path = "reservation_id=" + result.reservation_id + "&city_id=" + result.origin_id;
              let path2 = "reservation_id=" + result.reservation_id + "&city_id=" + result.destination_id;
              this.apiFactory.getBoardingStages(path).subscribe(boardingResult => {
                this.loader.hideLoadingDefault();
                if (boardingResult.result && boardingResult.result.length) {
                  this.stageDetails = [];
                  for (let i = 1; i < boardingResult.result.length; i++) {
                    this.stageDetails.push({
                      id: boardingResult.result[i][1],
                      name: boardingResult.result[i][0],
                      time: boardingResult.result[i][2]
                    });
                  }
                  var x = this.stageDetails.find(elem => {
                    return elem.name == this.ticketDetails.boarding_details.address;
                  });
                  this.updateData.boardingStage = x;
                  this.pnrNumber = result.ticket_number;
                  if (this.fromMybooking) {} else {
                    this.updateShow = true;
                  }
                } else {
                  this.util.showToast(boardingResult.message);
                }
              });
              this.apiFactory.getDroppingStages(path2).subscribe(droppingResult => {
                this.loader.hideLoadingDefault();
                if (droppingResult.dropping_stages && droppingResult.dropping_stages.length) {
                  this.stageDetailsDrop = droppingResult.dropping_stages;
                  var x = this.stageDetailsDrop.find(elem => {
                    return elem.name == this.ticketDetails.drop_off_details.address;
                  });
                  this.updateData.droppingStage = x;
                } else {
                  this.util.showToast(droppingResult.message);
                }
              });
            } else {
              this.updateShow = false;
              this.loader.hideLoadingDefault();
              if (this.from_otp_enabled && this.otp_based_authentication_to_modify_ticket) {
                if (emailValidation && !dateValidation) {
                  this.util.showAlert('', "Email and date you entered mismatching");
                } else if (!dateValidation) {
                  this.util.showAlert('', 'Date you entered mismatching');
                } else if (cancelStatus) {
                  this.util.showAlert('', "your ticket is already cancelled");
                }
              } else {
                if (emailValidation && !dateValidation) {
                  this.util.showAlert('', "Email and date you entered mismatching");
                } else if (!dateValidation) {
                  this.util.showAlert('', 'Date you entered mismatching');
                } else if (emailValidation) {
                  this.util.showAlert('', "Email you entered mismatching");
                } else if (cancelStatus) {
                  this.util.showAlert('', "your ticket is already cancelled");
                }
              }
            }
            return;
          } else {
            this.loader.hideLoadingDefault();
            setTimeout(() => {
              this.util.showAlert('', result.message);
            });
            return;
          }
        }, err => {
          this.loader.hideLoadingDefault();
          if (!this.util.isConnected()) {
            this.util.showAlert("Error Loading", "Internet is not connected. Please connect to Internet and try again !");
          } else {
            this.util.showAlert("Error Loading", "Something went wrong, please try again after sometime");
          }
        });
      }
    }
  }
  submitForm1() {
    if (this.isValid()) {
      if (!this.util.checkConnection()) {
        return false;
      }
      if (this.selected_name.action == 'cancel_ticket') {
        this.continueToCancel();
      } else if (this.selected_name.action == 'update_ticket') {
        let navigationExtras = {
          queryParams: {
            title: "Update ticket",
            from_book_page: false,
            otp_enabled: true
          }
        };
        this.navCtrl.navigateForward('update-ticket', navigationExtras);
        this.submitForm();
      } else if (this.selected_name.action == 'view_ticket') {
        this.submitForm();
      } else if (this.selected_name.action == 'download_ticket') {
        this.downloadTicket();
      } else {
        this.pnrNumber = this.updateForm.value.pnr;
        this.email = this.updateForm.value.email;
      }
    }
  }
  selectBoardingStage() {
    var _this3 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3.modalController.create({
        component: _cities_modal_cities_modal_page__WEBPACK_IMPORTED_MODULE_1__.CitiesModalPage,
        componentProps: {
          "list": 8,
          "bpdpList": _this3.stageDetails,
          "title": 'Please select a boarding point'
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if (data) {
        _this3.updateDetailsForm.controls['stage'].setValue(data.name);
        _this3.updateData.boardingStage = data;
      }
      _this3.commonStorage.setItem('bpdpList', data);
    })();
  }
  selectDroppingStage() {
    var _this4 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this4.modalController.create({
        component: _cities_modal_cities_modal_page__WEBPACK_IMPORTED_MODULE_1__.CitiesModalPage,
        componentProps: {
          "list": 8,
          "bpdpList": _this4.stageDetailsDrop,
          "title": 'Please select a dropping point'
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if (data) {
        _this4.updateDetailsForm.controls['staged'].setValue(data.name);
        _this4.updateData.droppingStage = data;
      }
      _this4.commonStorage.setItem('bpdpListDropping', data);
    })();
  }
  isDataValid() {
    if (this.updateDetailsForm.valid) {
      return true;
    }
    this.errors = true;
    let elem = document.querySelector('ion-input.ng-invalid input');
    if (elem) {
      elem.focus();
    }
    return false;
  }
  removeplus(part) {
    return part.replace('+', '');
  }
  updateDetails() {
    if (this.updateData && this.updateData.boardingStage && this.updateData.boardingStage.id) {
      if (this.isDataValid()) {
        if (!this.util.checkConnection()) {
          return false;
        }
        let path;
        this.loader.showLoadingDefault();
        if (this.otp_based_authentication_to_modify_ticket && this.from_otp_enabled) {
          if (this.updateData && this.updateData.droppingStage && this.updateData.droppingStage.id) {
            path = "pnr_number=" + this.pnrNumber + "&phone_number=" + this.updateDetailsForm.value.mobile_number + "&boarding_at=" + this.updateData.boardingStage.id + "&country_code=" + this.removeplus(this.updateDetailsForm.value.country_code) + '&dropping_at=' + this.updateData.droppingStage.id + '&email_id=' + this.updateDetailsForm.value.email;
          }
        } else {
          path = "pnr_number=" + this.pnrNumber + "&phone_number=" + this.updateDetailsForm.value.mobile_number + "&boarding_at=" + this.updateData.boardingStage.id + "&country_code=" + this.removeplus(this.updateDetailsForm.value.country_code);
        }
        this.apiFactory.updateTicket(path).subscribe(result => {
          this.loader.hideLoadingDefault();
          if (result && result.code == 200) {
            this.util.showAlert('SUCCESS', result.message);
            this.isRoundTrip = this.commonStorage.localGet('isRoundTrip');
            if (this.isRoundTrip) {
              let navigationExtras = {
                queryParams: {
                  redirectToHome: true,
                  new_booking: false,
                  is_roundTrip: true
                }
              };
              this.navCtrl.navigateRoot('booking-details', navigationExtras);
              this.commonStorage.localRemove('isRoundTrip');
              this.isRoundTrip = false;
            } else {
              let navigationExtras = {
                queryParams: {
                  redirectToHome: true,
                  new_booking: false
                }
              };
              this.navCtrl.navigateRoot('booking-details', navigationExtras);
            }
          } else {
            this.util.showAlert('FAILURE', result.message);
          }
        }, err => {
          this.loader.hideLoadingDefault();
          if (!this.util.isConnected()) {
            this.util.showAlert("ERROR_LOADING", "INTERNET NOT CONNECTED PLEASE CONNECT INTERNET AND TRY AFTER AGAIN");
          } else {
            this.util.showAlert("ERROR_LOADING", "SOMETHING WENT WRONG PLEASE TRY AFTER SOMTIME");
          }
          this.ex.call('UpdateTicketPage', 'updateDetails() --> this.apiFactory.updateTicket(path)', err, '');
        });
      }
    } else {
      this.util.showToast('Please select a different boarding point');
    }
  }
  onInputChange(ev) {
    let mob = this.updateDetailsForm.value.mobile_number.toString();
    if (mob.length > this.phoneNumCount) {
      this.updateDetailsForm.controls['mobile_number'].setValue(mob.substr(0, this.phoneNumCount));
    }
  }
  isValid() {
    if (this.updateForm.valid || this.fromMybooking) {
      return true;
    }
    this.errors = true;
    let elem = document.querySelector('ion-input.ng-invalid input');
    if (elem) {
      elem.focus();
    }
    return false;
  }
  toggleOptions() {
    this.optionsVisible = !this.optionsVisible;
  }
  updateValue(action) {
    this.selected_name = action;
    this.optionsVisible = false;
    if (action.action == 'view_ticket') {
      this.updateShow = false;
    } else if (action.action == 'cancel_ticket') {} else if (action.action == 'update_ticket') {
      this.updateShow = false;
      this.from_otp_enabled = true;
    } else if (action.action == 'download_ticket') {
      this.downloadTicket();
    } else if (action.action == 'reschedule_ticket') {
      this.navCtrl.navigateForward('prepostone');
    }
  }
  downloadTicket() {
    if (this.isValid()) {
      if (!this.util.checkConnection()) {
        return false;
      }
      this.loader.showLoadingDefault();
      this.apiFactory.getTicketDetails(this.updateForm.value.pnrNumber).subscribe(result => {
        this.loader.hideLoadingDefault();
        if (typeof result.code == "undefined") {
          if (result.sharing_pdf_link != '') {
            let newText = result.sharing_pdf_link.replace('.jpsb-qa1.', '.');
            window.open(newText);
          } else {
            this.util.showToast("Invalid Pdf link");
          }
        } else {
          setTimeout(() => {
            this.util.showAlert('', result.message);
          });
        }
      }, err => {
        this.loader.hideLoadingDefault();
        if (!this.util.isConnected()) {} else {}
      });
    }
  }
  continueToCancel() {
    if (this.isValid()) {
      if (!this.util.checkConnection()) {
        return false;
      }
      this.loader.showLoadingDefault();
      this.pnrNumber = this.updateForm.value.pnrNumber;
      this.email = this.updateForm.value.email;
      this.apiFactory.getTicketDetails(this.updateForm.value.pnrNumber).subscribe(result => {
        this.loader.hideLoadingDefault();
        if (typeof result.code == "undefined") {
          this.commonStorage.setItem('cancelTicketDetails', result);
          let numberPhone = result.passenger_details[0].mobile.indexOf("-") > -1 ? result.passenger_details[0].mobile.split("-")[1] : result.passenger_details[0].mobile;
          let emailValidation = this.email !== result.passenger_details[0].email && this.email !== numberPhone;
          let dateValidation = this.dateService.cancelTicketDateFormat(this.travelDate.formattedDate, 'dd-mm-yyyy', this.commonService.checkDateFormat()) == result.travel_date;
          let cancelStatus = result.ticket_status == 'Cancelled';
          if (!emailValidation && !cancelStatus) {
            let navigationExtras = {
              state: {
                user: this.updateForm.value.email
              }
            };
            this.router.navigate(['cancel-confirmation-ticket'], navigationExtras);
          } else {
            if (emailValidation && !dateValidation) {
              this.util.showAlert('', "Email and date you entered mismatching");
            } else if (emailValidation) {
              this.util.showAlert('', "Email you entered mismatching");
            } else if (cancelStatus) {
              this.util.showAlert('', "your ticket is already cancelled");
            }
          }
        } else {
          setTimeout(() => {
            this.util.showAlert('', result.message);
          });
        }
      }, err => {
        this.loader.hideLoadingDefault();
        if (!this.util.isConnected()) {} else {}
      });
    }
  }
  onDateSelected(event) {
    let dateObj = new Date(event.detail.value);
    const result = this.dateService.formattedDateData(dateObj);
    this.travelDate = result;
    this.updateForm.controls['displayDate'].setValue(this.commonService.displayFormatDate(result));
  }
  displayMybookings(date) {
    var _date;
    date = (_date = date) === null || _date === void 0 ? void 0 : _date.substring(0, 10);
    var newDate = new Date(date);
    const result = this.dateService.formattedDateData(newDate);
    this.travelDate = result;
    this.updateForm.controls['displayDate'].setValue(this.commonService.displayFormatDate(result));
    return this.commonService.displayFormatDate(result);
  }
}
_UpdateTicketPage = UpdateTicketPage;
_UpdateTicketPage.ɵfac = function UpdateTicketPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UpdateTicketPage)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_6__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_7__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_17__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_8__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_exception__WEBPACK_IMPORTED_MODULE_9__.ExceptionProvider), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_10__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_11__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_12__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_19__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_13__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_20__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_14__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_global_data_service__WEBPACK_IMPORTED_MODULE_15__.GlobalDataService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_19__.ModalController));
};
_UpdateTicketPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
  type: _UpdateTicketPage,
  selectors: [["app-update-ticket"]],
  standalone: false,
  decls: 4,
  vars: 4,
  consts: [["resendButton", ""], ["popoverDatetime", ""], [4, "ngIf"], [2, "--background", "#191966"], ["mode", "md", "slot", "start"], [1, "themeone"], ["class", "center-div", 4, "ngIf"], [1, "center-div"], [1, "card-row"], [3, "ngSubmit", "formGroup"], [1, "box"], ["formControlName", "pnrNumber", 1, "themeone-input"], ["type", "email", "formControlName", "email", 1, "themeone-input"], ["tappable", "", 1, "box", 3, "click"], ["src", "./assets/icon/Calendar copy.svg", "alt", "", "slot", "end"], [1, "txt-lbl"], ["ion-button", "", 1, "txt-main"], ["type", "text", "readonly", "", "formControlName", "displayDate", 1, "themeone-input", 2, "display", "none"], ["padding", ""], ["mode", "md", "expand", "block", "type", "submit", 1, "themeone-login-btn"], [1, "card-row", 2, "margin-top", "0px"], ["size", "12"], [1, "box", "themeone-input"], ["size", "3"], ["interface", "popover", "formControlName", "country_code", "class", "custom-select", 4, "ngIf"], ["class", "txt-input", "formControlName", "country_code", "placeholder", "Code", 3, "ngModel", "click", "ngModelChange", 4, "ngIf"], ["size", "9"], ["formControlName", "mobile_number", "placeholder", "Enter mobile number", "type", "number", 1, "txt-input", 3, "ngModelChange", "ngModel"], [2, "font-size", "16px", 3, "click"], ["formControlName", "stage", "name", "text", 1, "txt-input"], ["name", "chevron-down-outline", "slot", "end", 2, "font-size", "18px"], [1, "ion-margin-top"], ["size", "12", 1, "ion-margin-top"], ["mode", "md", "expand", "block", "type", "submit", 1, "ticket", "ion-margin-top", 2, "margin", "0px"], ["type", "text", "readonly", "", 2, "display", "none"], ["interface", "popover", "formControlName", "country_code", 1, "custom-select"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["formControlName", "country_code", "placeholder", "Code", 1, "txt-input", 3, "click", "ngModelChange", "ngModel"], ["mode", "md", 1, "h50", "bg-cl"], ["slot", "start"], [1, "head"], ["formControlName", "pnrNumber", "label", "PNR Number", "labelPlacement", "floating", 1, "txt-lbl"], ["type", "email", "formControlName", "email", "labelPlacement", "floating", 1, "txt-lbl", 3, "label"], ["tappable", "", 2, "margin", "21px 0px", 3, "click"], ["src", "./assets/icon/Calendar.svg", "alt", "", "slot", "end"], ["type", "text", "readonly", "", "formControlName", "displayDate", 2, "display", "none"], ["padding", "", 4, "ngIf"], ["class", "getOtp", 3, "click", 4, "ngIf"], [1, "getOtp", 3, "click"], [1, "resendOtpDiv"], [4, "ngIf", "ngIfElse"], [1, "resendTimeText"], [1, "resendText", 3, "click"], ["type", "text", "label", "Enter Otp", "labelPlacement", "floating", "formControlName", "otp", "maxlength", "6", 1, "txt-lbl", 3, "keyup", "ngModelChange", "ngModel"], ["mode", "md", "expand", "block", "type", "submit", 1, "login-btn"], ["mode", "md", "expand", "block", 1, "login-btn", 3, "click", "disabled"], [1, "txt-input", 2, "margin-left", "24px"], ["size", "2.8", 2, "border-bottom", "1px solid #a2a2a2", "padding-left", "0px"], ["interface", "popover", "formControlName", "country_code", 4, "ngIf"], ["size", "9", "size", "9", "offset", "0.2", 2, "border-bottom", "1px solid #a2a2a2"], ["style", "font-size: 13px;\n          margin: 10px 0px 10px 22px;\n          color: var(--primary);", 4, "ngIf"], ["style", "padding: 5px;", 4, "ngIf"], ["label", "Select boarding stage", "labelPlacement", "floating", "formControlName", "stage", "name", "text", 1, "txt-lbl", 2, "margin", "7px 0", 3, "click"], ["interface", "popover", "formControlName", "country_code"], [2, "font-size", "13px", "margin", "10px 0px 10px 22px", "color", "var(--primary)"], [2, "padding", "5px"], ["type", "email", "label", "E-mail Address", "labelPlacement", "floating", "formControlName", "email", 1, "txt-lbl", 3, "ngModelChange", "ngModel"], ["label", "Select dropping stage", "labelPlacement", "floating", "formControlName", "staged", "name", "text", 1, "txt-lbl", 2, "margin", "7px 0", 3, "click"], ["mode", "md", 2, "--background", "#FFF", 3, "click"], ["defaultHref", "/tabs/more", 2, "color", "black"], [1, "head", 2, "margin", "0px"], [1, "seabirdTheme", 2, "--background", "#F1F7FA"], [1, "seabird_row", 3, "click"], ["size", "9", 1, "seabird_col"], ["size", "3", 1, "seabird_col", 2, "justify-content", "end"], [2, "font-size", "20px", 3, "name"], ["style", "box-shadow: 0px 0px 4px 0px #00000040; border: none;", "class", "seabird_row", 4, "ngIf"], [1, "seabird_row", 2, "box-shadow", "0px 0px 4px 0px #00000040", "border", "none"], [2, "width", "100%"], [4, "ngFor", "ngForOf"], ["class", "seabird_col_line", "size", "12", 3, "click", 4, "ngIf"], ["size", "12", 1, "seabird_col_line", 3, "click"], [2, "filter", "brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg)", 3, "src"], [1, "seabird_row", 2, "background", "white", "padding", "0px"], [1, "seabird_item", 3, "ngSubmit", "formGroup"], [1, "seabird_col_line1"], [1, "seabird_item", "seabird-border-bottom", 2, "border-top-left-radius", "15px", "border-top-right-radius", "15px"], [1, "seabird_item", "seabird-border-bottom"], ["tappable", "", 1, "seabird_item", "seabird-clickable", 3, "click"], ["size", "8", 1, "seabird_col_line1"], ["type", "text", "readonly", "", "formControlName", "displayDate", 1, "seabird-input-hidden"], ["size", "4", 1, "seabird_col_line1", "seabird-select-date"], ["name", "calendar-outline"], ["style", "padding: 10px;", "padding", "", 4, "ngIf"], ["class", "get-otp-text", 3, "click", 4, "ngIf"], [1, "get-otp-text", 3, "click"], [1, "resend-otp-text"], [1, "resend-otp-disabled"], [1, "resend-otp-enabled", 3, "click"], ["label", "Enter OTP", "labelPlacement", "floating", "type", "text", "formControlName", "otp", "maxlength", "6", 1, "txt-lbl", 3, "keyup", "ngModelChange", "ngModel"], ["padding", "", 2, "padding", "10px"], ["mode", "md", "expand", "block", "type", "submit", 1, "seabird-login-btn", 3, "click"], ["mode", "md", "expand", "block", 1, "seabird-login-btn", 3, "click", "disabled"], [1, "seabird_row", 2, "background-color", "#ffff", "margin", "12px", "border-radius", "10px"], [2, "color", "transparent"], ["style", "--background:#ffff;border-bottom: 1px solid #626262;", "interface", "popover", "formControlName", "country_code", "class", "custom-select", 4, "ngIf"], ["formControlName", "mobile_number", "placeholder", "Enter mobile number", "type", "number", 1, "txt-input", 2, "border-bottom", "1px solid #626262", 3, "ngModelChange", "ngModel"], [2, "margin-left", "16px"], ["lines", "none", 2, "font-size", "16px", "--background", "#fff", "border-bottom", "1px solid #626262", 3, "click"], ["mode", "md", "shape", "round", "expand", "block", "type", "submit", 1, "seabird-login-btn", "ion-margin-top"], ["interface", "popover", "formControlName", "country_code", 1, "custom-select", 2, "--background", "#ffff", "border-bottom", "1px solid #626262"], [1, "ourbustheme"], [1, "head", 2, "margin-left", "25%"], ["padding", "", 1, "ourbustheme"], ["lines", "none", "mode", "md", 1, "ourbus_custom_input", "input-spacing"], ["fill", "outline", "formControlName", "pnrNumber", "label", "PNR Number", "labelPlacement", "floating", 1, "ourbus_custom_input1", "txt-lbl"], ["fill", "outline", "type", "email", "formControlName", "email", "labelPlacement", "floating", 1, "ourbus_custom_input1", "txt-lbl", 3, "label"], ["lines", "none", "mode", "md", "tappable", "", "id", "open-date-input-3", 1, "ourbus_custom_input"], ["fill", "outline", "label", "Journey Date", "labelPlacement", "floating", "type", "text", "formControlName", "displayDate", 1, "ourbus_inputText", "txt-lbl"], ["id", "dob", "trigger", "open-date-input-3", 1, "ourbus-Modal"], ["lines", "none", "mode", "md", "class", "ourbus_custom_input input-spacing", 4, "ngIf"], ["mode", "md", "color", "success", "show-default-buttons", "true", "done-text", "Ok", "presentation", "date", "showDefaultTitle", "true", 3, "ionChange", "max"], ["style", "    text-align: center;\n\n          color:var(--iconsAndButtonsColor);\n          font-size: 14px;\n\n          padding-top: 10px;\n            margin-bottom: 14px;", 3, "click", 4, "ngIf"], [2, "text-align", "center", "color", "var(--iconsAndButtonsColor)", "font-size", "14px", "padding-top", "10px", "margin-bottom", "14px", 3, "click"], [2, "text-align", "center", "color", "var(--iconsAndButtonsColor)", "font-size", "14px", "padding-top", "10px", "background", "transparent", "margin-bottom", "14px"], [2, "font-size", "14px", "font-weight", "700", "color", "#9B9B9B"], [2, "font-size", "14px", "font-weight", "700", "margin-bottom", "0", "color", "var(--iconsAndButtonsColor)", 3, "click"], ["fill", "outline", "label", "Enter OTP", "labelPlacement", "floating", "formControlName", "otp", "maxlength", "6", "inputmode", "numeric", "type", "tel", 1, "ourbus_custom_input1", "txt-lbl", 3, "ionChange", "keyup", "ngModelChange", "ngModel"], [1, "txt-input"], ["size", "0.5"], ["size", "8.5"], ["lines", "none", "mode", "md", 1, "ourbus_custom_input"], ["fill", "outline", "type", "tel", "maxlength", "10", "label", "Mobile Number", "labelPlacement", "floating", "formControlName", "mobile_number", 1, "ourbus_custom_input1", "txt-input", "ourbus_labelSet", 3, "ionChange", "ngModelChange", "ngModel"], ["style", "font-size: 13px; margin: 10px 0px 10px 22px;color: var(--primary);", 4, "ngIf"], ["lines", "none", "mode", "md", "class", "ourbus_custom_input", 4, "ngIf"], ["lines", "none", "mode", "md", 1, "ourbus_custom_input", 3, "click"], ["fill", "outline", "formControlName", "stage", "name", "text", "label", "Select boarding stage", "labelPlacement", "floating", 1, "txt-lbl", 2, "margin", "7px 0"], ["slot", "end", "mode", "md", "src", "././assets/icon/arrow-drop-down-big.svg", 1, "modify-dropDown"], ["mode", "md", "expand", "block", "type", "submit", 1, "ourbus-login-btn"], ["lines", "none", "mode", "md", 1, "ourbus_custom_input", "ourbus_item_outline"], [2, "margin", "2px 4px 0px 0px", "font-size", "20px"], [1, "ourbus_inputText", 2, "height", "58px", 3, "readonly"], ["lines", "none", "mode", "md", "class", "ourbus_custom_input ourbus_item_outline", 4, "ngIf"], ["formControlName", "country_code", "placeholder", "Code", 2, "height", "58px", 3, "click", "ngModel"], ["formControlName", "country_code", "placeholder", "Code", 2, "height", "58px", 3, "click", "ngModelChange", "ngModel"], ["fill", "outline", "type", "email", "formControlName", "email", "label", "E-mail Address", "labelPlacement", "floating", 1, "txt-lbl", 3, "ngModelChange", "ngModel"], ["fill", "outline", "label", "Select dropping stage", "labelPlacement", "floating", "formControlName", "staged", "name", "text", 1, "txt-lbl", 2, "margin", "7px 0", 3, "value"]],
  template: function UpdateTicketPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, UpdateTicketPage_ng_container_0_Template, 10, 3, "ng-container", 2)(1, UpdateTicketPage_ng_container_1_Template, 10, 3, "ng-container", 2)(2, UpdateTicketPage_ng_container_2_Template, 16, 5, "ng-container", 2)(3, UpdateTicketPage_ng_container_3_Template, 10, 3, "ng-container", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.MaxLengthValidator, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonDatetime, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonRippleEffect, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonModal, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonBackButton, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControlName],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --ion-background-color: var(--viewBgColor);\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  position: fixed;\n  bottom: 10px;\n  height: 50px;\n  border-radius: 4px;\n}\n\n.ourbus-login-btn[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  bottom: 10px;\n  height: 50px;\n  border-radius: 4px;\n}\n\n.txt-lbl[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: normal;\n  color: #3e3e52 !important;\n}\n\n.center-div[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n\n.passenger-details[_ngcontent-%COMP%] {\n  \n\n  margin: 0px 0 5px;\n  background-color: #fff;\n}\n.passenger-details[_ngcontent-%COMP%]   .code.item-md[_ngcontent-%COMP%] {\n  margin-top: -1px;\n}\n.passenger-details[_ngcontent-%COMP%]   .code.item-ios[_ngcontent-%COMP%] {\n  margin-top: 1px;\n}\n.passenger-details[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  max-width: 100%;\n  text-align: center;\n}\n.passenger-details[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]   .select-text[_ngcontent-%COMP%] {\n  padding: 5px 0;\n}\n.passenger-details[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]   .select-icon[_ngcontent-%COMP%] {\n  left: -5px;\n}\n.passenger-details[_ngcontent-%COMP%]   .select-md[_ngcontent-%COMP%], \n.passenger-details[_ngcontent-%COMP%]   .select-ios[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.passenger-details[_ngcontent-%COMP%]   .item-ios.item-block[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%] {\n  border: 0;\n}\n.passenger-details[_ngcontent-%COMP%]   .item-md.code[_ngcontent-%COMP%], \n.passenger-details[_ngcontent-%COMP%]   .item-ios.code[_ngcontent-%COMP%] {\n  height: 35px;\n  min-height: 35px;\n  padding: 0;\n  position: absolute;\n}\n.passenger-details[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n  display: block;\n}\n.passenger-details[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], \n.passenger-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 1.6em;\n  color: #555;\n  position: absolute;\n  bottom: 11px;\n}\n.passenger-details[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  position: relative;\n}\n.passenger-details[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\nion-content[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  width: 100%;\n  background-color: #fff !important;\n  margin: 0px;\n  padding: 16px;\n  height: 90vh;\n}\nion-content[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]::part(native) {\n  background-color: #fff !important;\n}\nion-content[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ADADAD;\n  font-size: 12px;\n  font-weight: 500;\n  margin: 0;\n}\nion-content[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  border: 1px solid #DFDFDF;\n  width: 100%;\n  height: 50px;\n  --inner-border-width: 0px;\n}\nion-content[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]::part(placeholder) {\n  opacity: 1;\n}\nion-content[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  width: 100%;\n  margin-top: 6px;\n}\nion-content[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #191966;\n  font-size: 14px;\n  font-weight: 500;\n  margin: 0;\n}\nion-content[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-button.ticket[_ngcontent-%COMP%] {\n  width: 100%;\n}\nion-content[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-button.ticket[_ngcontent-%COMP%]::part(native) {\n  background-color: #F2C21A;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #191966;\n  font-weight: 600;\n  height: 45px;\n}\n\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\nion-select[_ngcontent-%COMP%] {\n  color: #000;\n}\n\nion-input[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.themeone-input[_ngcontent-%COMP%] {\n  color: #000;\n  height: 50px;\n  border-radius: 6px;\n  border: 1px solid #DFDFDF;\n}\n\n\n\n.custom-popover[_ngcontent-%COMP%]   .popover-content[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n}\n.custom-popover[_ngcontent-%COMP%]   .popover-list[_ngcontent-%COMP%]   ion-select-option[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 12px 16px;\n}\n\n.themeone-login-btn[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background: #F1C11A;\n  color: #191966;\n  font-family: NotoSans;\n  font-weight: bold;\n  font-size: 13px;\n  position: fixed;\n  bottom: 60px;\n  height: 50px;\n  border-radius: 4px;\n}\n\n.themeone[_ngcontent-%COMP%]   .sc-ion-input-ios-h[_ngcontent-%COMP%] {\n  --padding-start: 16px;\n}\n\n\n\n\n\n.custom-select[_ngcontent-%COMP%]   .select-icon[_ngcontent-%COMP%] {\n  color: red;\n}\n\n\n\n.custom-select[_ngcontent-%COMP%]   .select-interface[_ngcontent-%COMP%] {\n  background-color: lightgray;\n  border: 1px solid darkgray;\n}\n\n\n\n.custom-select[_ngcontent-%COMP%]   .select-popover[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  color: blue;\n}\n\n\n\n.custom-select[_ngcontent-%COMP%]   .select-popover[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  background-color: orange;\n  color: white;\n}\n\n.sc-ion-select-popover[_ngcontent-%COMP%]   sc-ion-label-ios-h[_ngcontent-%COMP%]   sc-ion-label-ios-s[_ngcontent-%COMP%]   ios[_ngcontent-%COMP%]   hydrated[_ngcontent-%COMP%] {\n  text-overflow: unset !important;\n  white-space: normal !important;\n  overflow: auto !important;\n}\n\n.seabird_row[_ngcontent-%COMP%] {\n  background: white;\n  padding: 12px;\n  margin: 15px;\n  border: 0.5px solid #626262;\n  border-radius: 15px;\n}\n\n.seabird_col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  font-size: 14px;\n}\n\n.seabird_col_line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  border-bottom: 0.5px dotted #999999;\n  padding: 5px;\n  font-size: 14px;\n}\n\n.seabird_col_line[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.seabird_col_line1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  padding: 0px;\n  font-size: 14px;\n}\n\n.seabird_item[_ngcontent-%COMP%] {\n  --background: #fff;\n  width: 100%;\n  --min-height: 34px;\n  --border-color: white;\n}\n\n.seabird-border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 0.5px solid #626262;\n}\n\n.seabird-clickable[_ngcontent-%COMP%] {\n  margin: 18px 0;\n}\n\n.seabird-input-hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.seabird-select-date[_ngcontent-%COMP%] {\n  color: #2B28CE;\n}\n\n.get-otp-text[_ngcontent-%COMP%] {\n  text-align: center;\n  text-decoration: underline;\n  color: var(--iconsAndButtonsColor);\n  font-size: 14px;\n  font-weight: 700;\n  padding-top: 20px;\n  margin-bottom: 0;\n}\n\n.resend-otp-disabled[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #9B9B9B;\n  text-decoration: underline;\n}\n\n.resend-otp-enabled[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  margin-bottom: 0;\n  text-decoration: underline;\n  color: var(--iconsAndButtonsColor);\n}\n\n.seabird-login-btn[_ngcontent-%COMP%] {\n  --background: var(--iconsAndButtonsColor);\n  color: var(--primaryText) !important;\n  text-transform: initial;\n  color: #191966;\n  font-family: NotoSans;\n  font-weight: bold;\n  font-size: 14px;\n  height: 50px;\n  --border-radius: 20px;\n}\n\n.input-spacing[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.seabirdTheme[_ngcontent-%COMP%]   .ion-invalid[_ngcontent-%COMP%] {\n  --highlight-background: transparent !important;\n  background-color: transparent !important;\n}\n.seabirdTheme[_ngcontent-%COMP%]   .item-interactive.ion-valid[_ngcontent-%COMP%] {\n  --highlight-background: transparent;\n}\n\nion-modal#dob[_ngcontent-%COMP%] {\n  --width: 311px !important;\n  --height: 543px !important;\n  --border-radius: 8px !important;\n}\n\n.modify-dropDown[_ngcontent-%COMP%] {\n  width: 18px;\n}\n\n.getOtp[_ngcontent-%COMP%] {\n  text-align: center;\n  text-decoration: underline;\n  color: var(--iconsAndButtonsColor);\n  font-size: 14px;\n  font-weight: 700;\n  padding-top: 20px;\n  margin-bottom: 0;\n}\n\n.resendOtpDiv[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--iconsAndButtonsColor);\n  font-size: 14px;\n  font-weight: 700;\n  padding-top: 20px;\n  margin-bottom: 0;\n}\n\n.resendText[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  margin-bottom: 0;\n  text-decoration: underline;\n  color: var(--iconsAndButtonsColor);\n}\n\n.resendTimeText[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #9B9B9B;\n  text-decoration: underline;\n}\n\n.ourbus_item_outline[_ngcontent-%COMP%] {\n  outline: 1px solid #D9D9D9 !important;\n  margin-top: 6px !important;\n  padding-top: 0px !important;\n  border-radius: 3px !important;\n  height: 55px !important;\n}\n\n.ourbus_custom_input1[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  --highlight-color-focused:#D9D9D9 !important;\n  --placeholder-color:#000 !important;\n}"]
});

/***/ }),

/***/ 29915:
/*!*******************************************************!*\
  !*** ./src/app/update-ticket/update-ticket.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdateTicketPageModule: () => (/* binding */ UpdateTicketPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _update_ticket_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-ticket-routing.module */ 16146);
/* harmony import */ var _update_ticket_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-ticket.page */ 16308);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _UpdateTicketPageModule;






class UpdateTicketPageModule {}
_UpdateTicketPageModule = UpdateTicketPageModule;
_UpdateTicketPageModule.ɵfac = function UpdateTicketPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UpdateTicketPageModule)();
};
_UpdateTicketPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _UpdateTicketPageModule
});
_UpdateTicketPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _update_ticket_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateTicketPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UpdateTicketPageModule, {
    declarations: [_update_ticket_page__WEBPACK_IMPORTED_MODULE_1__.UpdateTicketPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _update_ticket_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateTicketPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
  });
})();

/***/ })

}]);