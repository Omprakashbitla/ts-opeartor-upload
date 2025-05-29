"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[5951],{

/***/ 39798:
/*!*********************************************************!*\
  !*** ./src/app/prepostone/prepostone-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrepostonePageRoutingModule: () => (/* binding */ PrepostonePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _prepostone_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prepostone.page */ 66664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _PrepostonePageRoutingModule;




const routes = [{
  path: '',
  component: _prepostone_page__WEBPACK_IMPORTED_MODULE_0__.PrepostonePage
}];
class PrepostonePageRoutingModule {}
_PrepostonePageRoutingModule = PrepostonePageRoutingModule;
_PrepostonePageRoutingModule.ɵfac = function PrepostonePageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PrepostonePageRoutingModule)();
};
_PrepostonePageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _PrepostonePageRoutingModule
});
_PrepostonePageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PrepostonePageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 66664:
/*!***********************************************!*\
  !*** ./src/app/prepostone/prepostone.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrepostonePage: () => (/* binding */ PrepostonePage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _cities_modal_cities_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cities-modal/cities-modal.page */ 85960);
/* harmony import */ var _calendar_modal_calendar_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../calendar-modal/calendar-modal.page */ 70990);
/* harmony import */ var _services_validator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/validator-service */ 1863);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/theme-service */ 99692);
/* harmony import */ var _services_exception__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/exception */ 91502);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 87330);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _services_global_data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/global-data.service */ 7516);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 45564);

var _PrepostonePage;




















function PrepostonePage_ng_container_0_ion_card_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-card", 7)(1, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngSubmit", function PrepostonePage_ng_container_0_ion_card_10_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "PNR Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-row", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "ion-input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-row", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "ion-input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11, "Journey Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "ion-row", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PrepostonePage_ng_container_0_ion_card_10_Template_ion_row_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.departureDateModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](14, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](18, "ion-input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](19, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "div", 21)(21, "ion-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](22, "Pre/Post Pone Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx_r1.updateForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", ctx_r1.updateForm.value.displayDate == "" ? "" : ctx_r1.updateForm.value.displayDate, " ");
  }
}
function PrepostonePage_ng_container_0_ion_card_11_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "div", 31);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("innerHTML", ctx_r1.prepostTnC, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeHtml"]);
  }
}
function PrepostonePage_ng_container_0_ion_card_11_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "div", 31);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("innerHTML", ctx_r1.openTktTnC, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeHtml"]);
  }
}
function PrepostonePage_ng_container_0_ion_card_11_ion_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PrepostonePage_ng_container_0_ion_card_11_ion_button_16_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.prePost());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Pre/Post pone ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PrepostonePage_ng_container_0_ion_card_11_ion_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PrepostonePage_ng_container_0_ion_card_11_ion_button_17_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.prePost());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Open ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PrepostonePage_ng_container_0_ion_card_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-card", 23)(1, "ion-radio-group", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PrepostonePage_ng_container_0_ion_card_11_Template_ion_radio_group_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.actionType, $event) || (ctx_r1.actionType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "ion-row")(3, "ion-col", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "ion-radio", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "Pre/Postpone");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-col", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "ion-radio", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12, "Open Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](13, PrepostonePage_ng_container_0_ion_card_11_div_13_Template, 1, 1, "div", 28)(14, PrepostonePage_ng_container_0_ion_card_11_div_14_Template, 1, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](16, PrepostonePage_ng_container_0_ion_card_11_ion_button_16_Template, 2, 0, "ion-button", 30)(17, PrepostonePage_ng_container_0_ion_card_11_ion_button_17_Template, 2, 0, "ion-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.actionType);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.actionType == "pre_post");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.actionType == "open_ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.actionType == "pre_post");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.actionType == "open_ticket");
  }
}
function PrepostonePage_ng_container_0_ion_card_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-card", 33)(1, "div", 34)(2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Refund Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-row", 36)(5, "ion-col", 37)(6, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "Ticket number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-col", 37)(9, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "ion-row", 36)(12, "ion-col", 37)(13, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14, "Seat numbers");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "ion-col", 37)(16, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "ion-row", 36)(19, "ion-col", 37)(20, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](21, "Refund amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "ion-col", 37)(23, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "ion-row", 36)(26, "ion-col", 37)(27, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28, "Cancellation charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "ion-col", 37)(30, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketSuccessDetails.pnr_number ? ctx_r1.ticketSuccessDetails.pnr_number : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketSuccessDetails.seat_number ? ctx_r1.ticketSuccessDetails.seat_number : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketSuccessDetails.net_amount ? ctx_r1.currencySym + " " + ctx_r1.ticketSuccessDetails.net_amount : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketSuccessDetails.cancelled_fare ? ctx_r1.currencySym + " " + ctx_r1.ticketSuccessDetails.cancelled_fare : "-", "");
  }
}
function PrepostonePage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-header", 2)(2, "ion-toolbar", 3)(3, "ion-buttons", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "ion-title", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "Pre/Post Pone Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "ion-content", 6)(8, "div", 7)(9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, PrepostonePage_ng_container_0_ion_card_10_Template, 23, 2, "ion-card", 9)(11, PrepostonePage_ng_container_0_ion_card_11_Template, 18, 5, "ion-card", 10)(12, PrepostonePage_ng_container_0_ion_card_12_Template, 32, 4, "ion-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.prepostShow && !ctx_r1.prepostSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.prepostShow && !ctx_r1.prepostSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.prepostSuccess);
  }
}
function PrepostonePage_ng_container_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 7)(1, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngSubmit", function PrepostonePage_ng_container_1_div_8_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "ion-input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "ion-input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "ion-item", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PrepostonePage_ng_container_1_div_8_Template_ion_item_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.departureDateModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](7, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "ion-input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "div", 29)(14, "ion-button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](15, "Pre/Postone Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx_r1.updateForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", ctx_r1.updateForm.value.displayDate == "" ? "Journey Date" : ctx_r1.updateForm.value.displayDate, " ");
  }
}
function PrepostonePage_ng_container_1_ion_card_9_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "div", 31);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("innerHTML", ctx_r1.prepostTnC, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeHtml"]);
  }
}
function PrepostonePage_ng_container_1_ion_card_9_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "div", 31);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("innerHTML", ctx_r1.openTktTnC, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeHtml"]);
  }
}
function PrepostonePage_ng_container_1_ion_card_9_ion_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PrepostonePage_ng_container_1_ion_card_9_ion_button_16_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.prePost());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Pre/Postone ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PrepostonePage_ng_container_1_ion_card_9_ion_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PrepostonePage_ng_container_1_ion_card_9_ion_button_17_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.prePost());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Open ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PrepostonePage_ng_container_1_ion_card_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-card", 23)(1, "ion-radio-group", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PrepostonePage_ng_container_1_ion_card_9_Template_ion_radio_group_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.actionType, $event) || (ctx_r1.actionType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "ion-row")(3, "ion-col", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "ion-radio", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "Pre/Postpone");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-col", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "ion-radio", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12, "Open Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](13, PrepostonePage_ng_container_1_ion_card_9_div_13_Template, 1, 1, "div", 28)(14, PrepostonePage_ng_container_1_ion_card_9_div_14_Template, 1, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](16, PrepostonePage_ng_container_1_ion_card_9_ion_button_16_Template, 2, 0, "ion-button", 43)(17, PrepostonePage_ng_container_1_ion_card_9_ion_button_17_Template, 2, 0, "ion-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.actionType);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.actionType == "pre_post");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.actionType == "open_ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.actionType == "pre_post");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.actionType == "open_ticket");
  }
}
function PrepostonePage_ng_container_1_ion_card_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-card", 33)(1, "div", 34)(2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Refund Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-row", 36)(5, "ion-col", 37)(6, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "Ticket number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-col", 37)(9, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "ion-row", 36)(12, "ion-col", 37)(13, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14, "Seat numbers");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "ion-col", 37)(16, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "ion-row", 36)(19, "ion-col", 37)(20, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](21, "Refund amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "ion-col", 37)(23, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "ion-row", 36)(26, "ion-col", 37)(27, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28, "Cancellation charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "ion-col", 37)(30, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketSuccessDetails.pnr_number ? ctx_r1.ticketSuccessDetails.pnr_number : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketSuccessDetails.seat_number ? ctx_r1.ticketSuccessDetails.seat_number : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketSuccessDetails.net_amount ? ctx_r1.currencySym + " " + ctx_r1.ticketSuccessDetails.net_amount : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketSuccessDetails.cancelled_fare ? ctx_r1.currencySym + " " + ctx_r1.ticketSuccessDetails.cancelled_fare : "-", "");
  }
}
function PrepostonePage_ng_container_1_ion_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PrepostonePage_ng_container_1_ion_button_11_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.prepostSuccess = !ctx_r1.prepostSuccess);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, " Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PrepostonePage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 40)(3, "ion-buttons", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "Pre/Postone ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "ion-content", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, PrepostonePage_ng_container_1_div_8_Template, 16, 2, "div", 9)(9, PrepostonePage_ng_container_1_ion_card_9_Template, 18, 5, "ion-card", 10)(10, PrepostonePage_ng_container_1_ion_card_10_Template, 32, 4, "ion-card", 11)(11, PrepostonePage_ng_container_1_ion_button_11_Template, 2, 0, "ion-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.prepostShow && !ctx_r1.prepostSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.prepostShow && !ctx_r1.prepostSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.prepostSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.prepostSuccess);
  }
}
function PrepostonePage_ng_container_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Modify Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PrepostonePage_ng_container_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Pre/Post Pone ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PrepostonePage_ng_container_2_ion_row_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PrepostonePage_ng_container_2_ion_row_7_Template_ion_row_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.toggleOptions());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-col", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "ion-col", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "ion-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.selected_name.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("name", ctx_r1.optionsVisible ? "chevron-up-circle-outline" : "chevron-down-circle-outline");
  }
}
function PrepostonePage_ng_container_2_div_8_ion_row_1_ng_container_2_ion_col_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PrepostonePage_ng_container_2_div_8_ion_row_1_ng_container_2_ion_col_1_Template_ion_col_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r13);
      const option_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.updateValue(option_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", option_r14.label, " ");
  }
}
function PrepostonePage_ng_container_2_div_8_ion_row_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, PrepostonePage_ng_container_2_div_8_ion_row_1_ng_container_2_ion_col_1_Template, 2, 1, "ion-col", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const option_r14 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", (option_r14.action !== "cancel_ticket" || !ctx_r1.metaData.cancelOption) && (option_r14.action !== "reschedule_ticket" || !ctx_r1.metaData.isPrePostPone));
  }
}
function PrepostonePage_ng_container_2_div_8_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 66)(1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, PrepostonePage_ng_container_2_div_8_ion_row_1_ng_container_2_Template, 2, 1, "ng-container", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.ticketOptions);
  }
}
function PrepostonePage_ng_container_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, PrepostonePage_ng_container_2_div_8_ion_row_1_Template, 3, 1, "ion-row", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.optionsVisible);
  }
}
function PrepostonePage_ng_container_2_div_11_ion_label_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", ctx_r1.updateForm.value.displayDate == "" ? "Journey Date" : ctx_r1.updateForm.value.displayDate, " ");
  }
}
function PrepostonePage_ng_container_2_div_11_ion_label_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", ctx_r1.updateForm.value.displayDate == "" ? "Journey Date" : ctx_r1.updateForm.value.displayDate, " ");
  }
}
function PrepostonePage_ng_container_2_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 71)(1, "ion-item", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "ion-input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "ion-item", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "ion-input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "ion-row")(6, "ion-item", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PrepostonePage_ng_container_2_div_11_Template_ion_item_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.departureDateModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "ion-col", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, PrepostonePage_ng_container_2_div_11_ion_label_8_Template, 2, 1, "ion-label", 76)(9, PrepostonePage_ng_container_2_div_11_ion_label_9_Template, 2, 1, "ion-label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "ion-input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "ion-col", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](14, "ion-icon", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](15, "\u00A0Select date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.updateForm.value.displayDate == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.updateForm.value.displayDate != "");
  }
}
function PrepostonePage_ng_container_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 82)(1, "ion-button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PrepostonePage_ng_container_2_div_12_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Reschedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function PrepostonePage_ng_container_2_ion_card_13_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "div", 31);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("innerHTML", ctx_r1.prepostTnC, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeHtml"]);
  }
}
function PrepostonePage_ng_container_2_ion_card_13_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "div", 31);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("innerHTML", ctx_r1.openTktTnC, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeHtml"]);
  }
}
function PrepostonePage_ng_container_2_ion_card_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-card", 84)(1, "ion-radio-group", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PrepostonePage_ng_container_2_ion_card_13_Template_ion_radio_group_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.actionType, $event) || (ctx_r1.actionType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "ion-row")(3, "ion-col", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "ion-radio", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "Pre/Postpone");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-col", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "ion-radio", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12, "Open Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](13, PrepostonePage_ng_container_2_ion_card_13_div_13_Template, 1, 1, "div", 28)(14, PrepostonePage_ng_container_2_ion_card_13_div_14_Template, 1, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.actionType);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.actionType == "pre_post");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.actionType == "open_ticket");
  }
}
function PrepostonePage_ng_container_2_div_14_ion_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PrepostonePage_ng_container_2_div_14_ion_button_1_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.prePost());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Pre/Postpone ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PrepostonePage_ng_container_2_div_14_ion_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PrepostonePage_ng_container_2_div_14_ion_button_2_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.prePost());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Open ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PrepostonePage_ng_container_2_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, PrepostonePage_ng_container_2_div_14_ion_button_1_Template, 2, 0, "ion-button", 89)(2, PrepostonePage_ng_container_2_div_14_ion_button_2_Template, 2, 0, "ion-button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.actionType == "pre_post");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.actionType == "open_ticket");
  }
}
function PrepostonePage_ng_container_2_ion_card_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-card", 33)(1, "div", 34)(2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Refund Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-row", 36)(5, "ion-col", 37)(6, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "Ticket number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-col", 37)(9, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "ion-row", 36)(12, "ion-col", 37)(13, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14, "Seat numbers");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "ion-col", 37)(16, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "ion-row", 36)(19, "ion-col", 37)(20, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](21, "Refund amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "ion-col", 37)(23, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "ion-row", 36)(26, "ion-col", 37)(27, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28, "Cancellation charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "ion-col", 37)(30, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketSuccessDetails.pnr_number ? ctx_r1.ticketSuccessDetails.pnr_number : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketSuccessDetails.seat_number ? ctx_r1.ticketSuccessDetails.seat_number : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketSuccessDetails.net_amount ? ctx_r1.currencySym + " " + ctx_r1.ticketSuccessDetails.net_amount : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketSuccessDetails.cancelled_fare ? ctx_r1.currencySym + " " + ctx_r1.ticketSuccessDetails.cancelled_fare : "-", "");
  }
}
function PrepostonePage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-content", 51)(2, "ion-toolbar", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PrepostonePage_ng_container_2_Template_ion_toolbar_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.toggleOptions());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "ion-buttons", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "ion-back-button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, PrepostonePage_ng_container_2_div_5_Template, 2, 0, "div", 54)(6, PrepostonePage_ng_container_2_div_6_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, PrepostonePage_ng_container_2_ion_row_7_Template, 5, 2, "ion-row", 55)(8, PrepostonePage_ng_container_2_div_8_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "div")(10, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngSubmit", function PrepostonePage_ng_container_2_Template_form_ngSubmit_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](11, PrepostonePage_ng_container_2_div_11_Template, 16, 2, "div", 56)(12, PrepostonePage_ng_container_2_div_12_Template, 3, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](13, PrepostonePage_ng_container_2_ion_card_13_Template, 15, 3, "ion-card", 58)(14, PrepostonePage_ng_container_2_div_14_Template, 3, 2, "div", 59)(15, PrepostonePage_ng_container_2_ion_card_15_Template, 32, 4, "ion-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.prepostShow && !ctx_r1.prepostSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.prepostShow && !ctx_r1.prepostSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.prepostShow && !ctx_r1.prepostSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.prepostShow && !ctx_r1.prepostSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx_r1.updateForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.prepostShow && !ctx_r1.prepostSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.prepostShow && !ctx_r1.prepostSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.prepostShow && !ctx_r1.prepostSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.prepostShow && !ctx_r1.prepostSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.prepostSuccess);
  }
}
function PrepostonePage_ng_container_3_ion_header_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 94)(2, "ion-buttons", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "Reschedule ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}
function PrepostonePage_ng_container_3_ion_content_2_div_1_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-datetime", 100, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ionChange", function PrepostonePage_ng_container_3_ion_content_2_div_1_ng_template_10_Template_ion_datetime_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r21);
      const popoverDatetime_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.displayMybookings(popoverDatetime_r22 == null ? null : popoverDatetime_r22.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("max", ctx_r1.maxDate);
  }
}
function PrepostonePage_ng_container_3_ion_content_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 7)(1, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngSubmit", function PrepostonePage_ng_container_3_ion_content_2_div_1_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "ion-item", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "ion-input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-item", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "ion-input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "ion-item", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](7, "ion-input", 98)(8, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "ion-modal", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, PrepostonePage_ng_container_3_ion_content_2_div_1_ng_template_10_Template, 2, 1, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "div", 29)(12, "ion-button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13, "Reschedule Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx_r1.updateForm);
  }
}
function PrepostonePage_ng_container_3_ion_content_2_ion_card_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "div", 31);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("innerHTML", ctx_r1.prepostTnC, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeHtml"]);
  }
}
function PrepostonePage_ng_container_3_ion_content_2_ion_card_2_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "div", 31);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("innerHTML", ctx_r1.openTktTnC, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeHtml"]);
  }
}
function PrepostonePage_ng_container_3_ion_content_2_ion_card_2_ion_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PrepostonePage_ng_container_3_ion_content_2_ion_card_2_ion_button_16_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.prePost());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Reschedule ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PrepostonePage_ng_container_3_ion_content_2_ion_card_2_ion_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PrepostonePage_ng_container_3_ion_content_2_ion_card_2_ion_button_17_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.prePost());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Open ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PrepostonePage_ng_container_3_ion_content_2_ion_card_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-card", 23)(1, "ion-radio-group", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PrepostonePage_ng_container_3_ion_content_2_ion_card_2_Template_ion_radio_group_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.actionType, $event) || (ctx_r1.actionType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "ion-row")(3, "ion-col", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "ion-radio", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "Reschedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-col", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "ion-radio", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12, "Open Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](13, PrepostonePage_ng_container_3_ion_content_2_ion_card_2_div_13_Template, 1, 1, "div", 28)(14, PrepostonePage_ng_container_3_ion_content_2_ion_card_2_div_14_Template, 1, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](16, PrepostonePage_ng_container_3_ion_content_2_ion_card_2_ion_button_16_Template, 2, 0, "ion-button", 43)(17, PrepostonePage_ng_container_3_ion_content_2_ion_card_2_ion_button_17_Template, 2, 0, "ion-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.actionType);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.actionType == "pre_post");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.actionType == "open_ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.actionType == "pre_post");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.actionType == "open_ticket");
  }
}
function PrepostonePage_ng_container_3_ion_content_2_ion_card_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-card", 33)(1, "div", 34)(2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Refund Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-row", 36)(5, "ion-col", 37)(6, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "Ticket number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-col", 37)(9, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "ion-row", 36)(12, "ion-col", 37)(13, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14, "Seat numbers");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "ion-col", 37)(16, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "ion-row", 36)(19, "ion-col", 37)(20, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](21, "Refund amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "ion-col", 37)(23, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "ion-row", 36)(26, "ion-col", 37)(27, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28, "Cancellation charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "ion-col", 37)(30, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketSuccessDetails.pnr_number ? ctx_r1.ticketSuccessDetails.pnr_number : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketSuccessDetails.seat_number ? ctx_r1.ticketSuccessDetails.seat_number : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketSuccessDetails.net_amount ? ctx_r1.currencySym + " " + ctx_r1.ticketSuccessDetails.net_amount : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketSuccessDetails.cancelled_fare ? ctx_r1.currencySym + " " + ctx_r1.ticketSuccessDetails.cancelled_fare : "-", "");
  }
}
function PrepostonePage_ng_container_3_ion_content_2_ion_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PrepostonePage_ng_container_3_ion_content_2_ion_button_4_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.prepostSuccess = !ctx_r1.prepostSuccess);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, " Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PrepostonePage_ng_container_3_ion_content_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-content", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, PrepostonePage_ng_container_3_ion_content_2_div_1_Template, 14, 1, "div", 9)(2, PrepostonePage_ng_container_3_ion_content_2_ion_card_2_Template, 18, 5, "ion-card", 10)(3, PrepostonePage_ng_container_3_ion_content_2_ion_card_3_Template, 32, 4, "ion-card", 11)(4, PrepostonePage_ng_container_3_ion_content_2_ion_button_4_Template, 2, 0, "ion-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.prepostShow && !ctx_r1.prepostSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.prepostShow && !ctx_r1.prepostSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.prepostSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.prepostSuccess);
  }
}
function PrepostonePage_ng_container_3_ion_header_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-header", 101)(1, "ion-toolbar", 94)(2, "ion-buttons", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "Rescheduling Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}
function PrepostonePage_ng_container_3_ion_content_4_div_1_ion_button_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PrepostonePage_ng_container_3_ion_content_4_div_1_ion_button_51_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.prePost());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PrepostonePage_ng_container_3_ion_content_4_div_1_ion_button_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PrepostonePage_ng_container_3_ion_content_4_div_1_ion_button_52_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.prePost());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Open ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PrepostonePage_ng_container_3_ion_content_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "div", 105)(2, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "ion-icon", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "Ticket Reschedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 109)(7, "ion-radio-group", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PrepostonePage_ng_container_3_ion_content_4_div_1_Template_ion_radio_group_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.actionType, $event) || (ctx_r1.actionType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-row")(9, "ion-col", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](10, "ion-radio", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13, "Reschedule Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "ion-col", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](15, "ion-radio", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18, "Open Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "div")(20, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](21, "Here is a step by step to help you reschedule!");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "ion-card")(23, "ion-row")(24, "ion-col", 113)(25, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](26, " 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "ion-col", 115)(28, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](29, " Confirm your current ticket cancellation and trasnfer your ticket amount to the OurBus Wallet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](31, " We do not refund booking fee and facility fee on cancelation. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "ion-card")(33, "ion-row")(34, "ion-col", 113)(35, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](36, " 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](37, "ion-col", 115)(38, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](39, " Book another ticket using the same email adress in reschedule process. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "ion-card")(41, "ion-row")(42, "ion-col", 113)(43, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](44, " 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](45, "ion-col", 115)(46, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](47, " Complete your booking using your OurBus wallet credits. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](48, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](49, " If the transaction amount is higher than your available Wallet credits, then you can pay the difference via the available payments methods. In cases where the transaction amount is leser, the balance will be stored in your Wallet for future use. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](50, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](51, PrepostonePage_ng_container_3_ion_content_4_div_1_ion_button_51_Template, 2, 0, "ion-button", 118)(52, PrepostonePage_ng_container_3_ion_content_4_div_1_ion_button_52_Template, 2, 0, "ion-button", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.actionType);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.actionType == "pre_post");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.actionType == "open_ticket");
  }
}
function PrepostonePage_ng_container_3_ion_content_4_ion_card_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-card", 120)(1, "div", 105)(2, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "ion-icon", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "Ticket Rescheduled");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 109)(7, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, "Refund Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "ion-row")(10, "ion-col", 122)(11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12, "Ticket Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "ion-row")(16, "ion-col", 122)(17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18, "Seat Numbers");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "ion-row")(22, "ion-col", 122)(23, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24, "Total Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "ion-row")(28, "ion-col", 122)(29, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30, "Refund Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "ion-row")(34, "ion-col", 122)(35, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](36, "Cancellation Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](37, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](39, "ion-button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PrepostonePage_ng_container_3_ion_content_4_ion_card_3_Template_ion_button_click_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.bookAnotherTicket());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](40, "Book Another Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketSuccessDetails.pnr_number ? ctx_r1.ticketSuccessDetails.pnr_number : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketSuccessDetails.seat_number ? ctx_r1.ticketSuccessDetails.seat_number : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketSuccessDetails.net_amount ? ctx_r1.currencySym + "" + ctx_r1.ticketSuccessDetails.net_amount : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketSuccessDetails.net_amount ? ctx_r1.currencySym + "" + ctx_r1.ticketSuccessDetails.net_amount : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketSuccessDetails.cancelled_fare ? ctx_r1.currencySym + "" + ctx_r1.ticketSuccessDetails.cancelled_fare : "-");
  }
}
function PrepostonePage_ng_container_3_ion_content_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-content", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, PrepostonePage_ng_container_3_ion_content_4_div_1_Template, 53, 3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, PrepostonePage_ng_container_3_ion_content_4_ion_card_3_Template, 41, 5, "ion-card", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.prepostSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.prepostSuccess);
  }
}
function PrepostonePage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, PrepostonePage_ng_container_3_ion_header_1_Template, 6, 0, "ion-header", 1)(2, PrepostonePage_ng_container_3_ion_content_2_Template, 5, 4, "ion-content", 91)(3, PrepostonePage_ng_container_3_ion_header_3_Template, 6, 0, "ion-header", 92)(4, PrepostonePage_ng_container_3_ion_content_4_Template, 4, 2, "ion-content", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.is_from_ticketdetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.is_from_ticketdetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.is_from_ticketdetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.is_from_ticketdetails);
  }
}
class PrepostonePage {
  constructor(loader, util, formBuilder, theme, ex, commonStorage, commonService, apiFactory, modalController, dateService, navCtrl, route, loaderService, router, appData, globalData, modalCtrl) {
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
    this.loaderService = loaderService;
    this.router = router;
    this.appData = appData;
    this.globalData = globalData;
    this.modalCtrl = modalCtrl;
    this.actionType = "pre_post";
    this.pnrNumber = '';
    this.email = '';
    this.prepostShow = false;
    this.stageDetails = [];
    this.prepostSuccess = false;
    this.reservationId = 0;
    this.updateData = {};
    this.ticketDetails = [];
    this.fromMybooking = false;
    this.travelDateMybooking = '';
    this.title = '';
    this.currencySym = '₹';
    this.departureDate = {};
    this.departureDateReturn = {};
    this.ticketOptions = [{
      label: 'View Ticket',
      action: 'view_ticket'
    }, {
      label: 'Update Ticket',
      action: 'update_ticket'
    }, {
      label: 'Cancel Ticket',
      action: 'cancel_ticket'
    }, {
      label: 'Download Ticket',
      action: 'download_ticket'
    }, {
      label: 'Reschedule',
      action: 'reschedule_ticket'
    }];
    this.optionsVisible = false;
    this.selected_name = {
      label: 'Reschedule',
      action: 'reschedule_ticket'
    };
    this.is_from_ticketdetails = false;
    this.maxDate = '';
    this.isIos = false;
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    // this.commonService.gTrack("prepostponeticket");
    this.appData.newTheme = this.util.getNewTheme();
    this.route.queryParams.subscribe(params => {
      this.title = params["title"];
    });
    this.AllowedCountryCodes = this.commonStorage.getItem('metaData').AllowedCountryCodes;
    this.phoneNumCount = this.commonStorage.getItem('metaData').phoneNumCount;
    this.phoneNumCount = this.commonStorage.getItem('metaData').phoneNumCount;
    this.currencySym = this.commonStorage.getItem('metaData').currencySym ? this.commonStorage.getItem('metaData').currencySym : '₹';
    this.metaData = this.commonStorage.getItem('metaData');
    this.default();
  }
  ngOnInit() {
    const today = new Date();
    this.maxDate = today.toISOString().split('T')[0];
    this.validations();
    if (this.metaData.msiteFolder == 'ourbustheme') {
      this.route.queryParams.subscribe(params => {
        this.is_from_ticketdetails = params["is_from_ticketdetails"];
        this.ticketGetFromBookingPage = params["pnr_number"];
        ;
      });
    }
  }
  departureDateModal() {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let modal = yield _this.modalController.create({
        component: _calendar_modal_calendar_modal_page__WEBPACK_IMPORTED_MODULE_2__.CalendarModalPage,
        componentProps: {
          departureDate: _this.dateService.getToday(),
          showPastDate: false,
          title: "Select Booking Date"
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if (data) {
        _this.travelDate = data;
        _this.updateForm.controls['displayDate'].setValue(_this.commonService.displayFormatDate(data));
      }
    })();
  }
  validations() {
    this.updateForm = this.formBuilder.group({
      pnrNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _services_validator_service__WEBPACK_IMPORTED_MODULE_3__.ValidatorService.emailOrPhoneValidator])],
      displayDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])]
    });
    this.updateDetailsForm = this.formBuilder.group({
      mobile_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(this.phoneNumCount), _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(this.phoneNumCount), _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
      country_code: [this.AllowedCountryCodes[0], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])],
      stage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required])]
    });
  }
  setDefaultFormData() {
    this.updateDetailsForm.controls['mobile_number'].setValue(this.ticketDetails.boarding_details.address);
    this.updateDetailsForm.controls['stage'].setValue(this.ticketDetails.passenger_details[0].mobile);
  }
  ionViewDidLoad() {
    // this.commonService.gTrack('prepostPoneTicket', '“Pre/Post Pone ticket” button is clicked in Pre/Post Pone Ticket page')
  }
  default() {
    this.apiFactory.getMetaAppData().subscribe(loginResponse => {
      this.openTktTnC = loginResponse[0].open_tic_tnc;
      this.prepostTnC = loginResponse[0].pre_post_tnc;
    }, err => {});
  }
  selectBoardingStage() {
    var _this2 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalController.create({
        component: _cities_modal_cities_modal_page__WEBPACK_IMPORTED_MODULE_1__.CitiesModalPage
        // componentProps: { "list": 8, "bpdpList": this.stageDetails,"title":'Please select a boarding point' }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if (data) {
        _this2.updateDetailsForm.controls['stage'].setValue(data.name);
        _this2.updateData.boardingStage = data;
      }
      _this2.commonStorage.setItem('bpdpList', data);
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
  bookAnotherTicket() {
    this.navCtrl.navigateForward('tabs/home');
  }
  submitForm() {
    if (this.isValid()) {
      if (!this.util.checkConnection()) {
        return false;
      }
      this.pnrNumber = this.updateForm.value.pnr;
      this.email = this.updateForm.value.email;
      this.apiFactory.getTicketDetails(this.updateForm.value.pnrNumber).subscribe(result => {
        if (typeof result.code === 'undefined') {
          this.ticketDetails = result;
          this.setDefaultFormData();
          this.commonStorage.setItem('cancelTicketDetails', result);
          let numberPhone = result.passenger_details[0].mobile.indexOf('-') > -1 ? result.passenger_details[0].mobile.split('-')[1] : result.passenger_details[0].mobile;
          let emailValidation = this.email !== result.passenger_details[0].email;
          let dateValidation = this.dateService.cancelTicketDateFormat(this.travelDate.formattedDate, 'dd-mm-yyyy', this.commonService.checkDateFormat()) === result.travel_date;
          let cancelStatus = result.ticket_status === 'Cancelled';
          if (!emailValidation && !cancelStatus) {
            this.bookingDetails['origin'] = {
              name: result.origin,
              id: result.origin_id
            };
            this.bookingDetails['destination'] = {
              name: result.destination,
              id: result.destination_id
            };
            let d = new Date(this.dateService.changeDateFormat(result.travel_date, 'dd/mm/yyyy', 'yyyy-mm-dd'));
            this.bookingDetails['travelDay'] = d.getDate();
            this.bookingDetails['travelMonth'] = this.util.getMonthName(d.getMonth() + 1);
            this.bookingDetails['travelYear'] = d.getFullYear();
            this.bookingDetails['pnrNumber'] = this.updateForm.value.pnrNumber;
            this.pnrNumber = this.updateForm.value.pnrNumber;
            localStorage.setItem('bookingDetails', JSON.stringify(this.bookingDetails));
            this.prepostShow = true;
            return true;
          } else {
            this.prepostShow = false;
            this.loader.hideLoadingDefault();
            if (emailValidation && !dateValidation) {
              this.util.showAlert('', 'Email and date you entered mismatching');
            } else if (emailValidation) {
              this.util.showAlert('', 'Email you entered mismatching');
            } else if (cancelStatus) {
              this.util.showAlert('', 'Your ticket is already cancelled');
            }
            return false;
          }
        } else {
          this.loader.hideLoadingDefault();
          setTimeout(() => {
            this.util.showAlert('', result.message);
          });
          return false;
        }
      }, err => {
        if (!this.util.isConnected()) {
          this.util.showAlert('Error Loading', 'Internet is not connected. Please connect internet and try again!');
        } else {
          this.util.showAlert('Error Loading', 'Something went wrong, please try after sometime');
        }
        return false;
      });
      return true;
    }
    return false;
  }
  prePost() {
    // Check connection
    if (!this.util.checkConnection()) {
      return false;
    }
    let path;
    if (this.metaData.msiteFolder === 'ourbustheme') {
      if (this.is_from_ticketdetails) {
        path = "ticket_number=" + this.ticketGetFromBookingPage + "&pre_post_open_type=" + this.actionType;
      } else {
        return false;
      }
    } else {
      path = "ticket_number=" + this.pnrNumber + "&pre_post_open_type=" + this.actionType;
    }
    this.loaderService.showLoadingDefault();
    // API call
    this.apiFactory.prePostPone(path).subscribe(result => {
      this.loaderService.hideLoadingDefault();
      if (result && !result.code) {
        let msg = this.actionType === 'pre_post' ? 'Pre/Post Pone Success' : 'Open Ticket Success';
        this.util.showAlert('SUCCESS', result.message || msg);
        // this.commonService.gTrack('prepostponeticket', 'pre/postpone ticket successful');
        this.ticketSuccessDetails = result;
        this.prepostShow = false;
        this.prepostSuccess = true;
        return true;
      } else {
        // this.commonService.gTrack('prepostponeticket', 'pre/postpone ticket failed');
        this.util.showAlert('FAILURE', result.message);
        return false;
      }
    }, err => {
      // this.commonService.gTrack('prepostponeticket', 'pre/postpone ticket failed');
      this.loaderService.hideLoadingDefault();
      if (!this.util.isConnected()) {
        this.util.showAlert("Error Loading", "Internet is not connected. Please connect internet and try again!");
      } else {
        this.util.showAlert("Error Loading", "Something went wrong, please try after sometime");
      }
      this.ex.call('PrePostPage', 'prePost() --> this.apiFactory.prePostPone(path)', err, '');
      return false;
    });
    return true;
  }
  updateDetails() {
    if (this.isDataValid()) {
      if (!this.util.checkConnection()) {
        return false;
      }
      this.loader.showLoadingDefault();
      const path = "pnr_number=" + this.pnrNumber + "&phone_number=" + this.updateDetailsForm.value.mobile_number + "&boarding_at=" + this.updateData.boardingStage.id + "&country_code=" + this.updateDetailsForm.value.country_code;
      this.apiFactory.updateTicket(path).subscribe(result => {
        this.loader.hideLoadingDefault();
        if (result && result.code === 200) {
          this.util.showAlert('SUCCESS', result.message);
          this.navCtrl.navigateForward('booking-details');
          return true;
        } else {
          this.util.showAlert('FAILURE', result.message);
          return false;
        }
      }, err => {
        this.loader.hideLoadingDefault();
        if (!this.util.isConnected()) {
          this.util.showAlert("Error Loading", "Internet is not connected. Please connect internet and try again!");
        } else {
          this.util.showAlert("Error Loading", "Something went wrong, please try after sometime");
        }
        this.ex.call('UpdateTicketPage', 'updateDetails() --> this.apiFactory.updateTicket(path)', err, '');
        return false;
      });
      return true;
    }
    return false;
  }
  updateValue(action) {
    this.selected_name = action;
    this.optionsVisible = false;
    if (action.action == 'view_ticket') {
      let navigationExtras = {
        queryParams: {
          title: "View ticket",
          from_book_page: false
          // otp_enabled:false
        }
      };
      this.navCtrl.navigateForward('update-ticket', navigationExtras);
    } else if (action.action == 'cancel_ticket') {} else if (action.action == 'update_ticket') {
      let navigationExtras = {
        queryParams: {
          title: "Update ticket",
          from_book_page: false,
          otp_enabled: true
          // newbooking: true
        }
      };
      this.navCtrl.navigateForward('update-ticket', navigationExtras);
    } else if (action.action == 'download_ticket') {} else if (action.action == 'reschedule_ticket') {
      this.navCtrl.navigateForward('prepostone');
    }
  }
}
_PrepostonePage = PrepostonePage;
_PrepostonePage.ɵfac = function PrepostonePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PrepostonePage)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_5__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_6__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_16__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_7__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_exception__WEBPACK_IMPORTED_MODULE_8__.ExceptionProvider), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_9__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_10__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_11__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_17__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_12__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_18__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_5__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_13__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_global_data_service__WEBPACK_IMPORTED_MODULE_14__.GlobalDataService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_17__.ModalController));
};
_PrepostonePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: _PrepostonePage,
  selectors: [["app-prepostone"]],
  standalone: false,
  decls: 4,
  vars: 4,
  consts: [["popoverDatetime", ""], [4, "ngIf"], [2, "font-family", "'Roboto', sans-serif !important"], [2, "--background", "#191966"], ["mode", "md", "slot", "start", 2, "color", "#fff"], [1, "theme1title"], [1, "theme1"], [1, "center-div"], [1, "card-row"], ["class", "center-div", 4, "ngIf"], ["class", "card1 center-div", 4, "ngIf"], ["class", "card-1", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "box"], ["formControlName", "pnrNumber", 1, "themeone-input"], ["type", "email", "formControlName", "email", 1, "themeone-input"], ["tappable", "", 1, "box", 3, "click"], ["src", "./assets/icon/Calendar copy.svg", "alt", "", "slot", "end"], [1, "txt-lbl"], ["ion-button", "", 1, "txt-main"], ["type", "text", "readonly", "", "formControlName", "displayDate", 1, "themeone-input", 2, "display", "none"], ["padding", "", 2, "margin", "15px"], ["mode", "md", "expand", "block", "type", "submit", 1, "themeone-login-btn"], [1, "card1", "center-div"], ["mode", "md", 3, "ngModelChange", "ngModel"], [1, "center-hr"], ["color", "red", "value", "pre_post"], ["color", "red", "value", "open_ticket"], ["class", "context", 3, "innerHTML", 4, "ngIf"], ["padding", ""], ["mode", "md", "class", "themeone-login-btn", "expand", "block", 3, "click", 4, "ngIf"], [1, "context", 3, "innerHTML"], ["mode", "md", "expand", "block", 1, "themeone-login-btn", 3, "click"], [1, "card-1"], [1, "grey-box"], [1, "Contact-details"], [2, "margin-bottom", "-8px"], ["width-50", ""], [1, "small"], [1, "small", "bold"], ["mode", "md", 1, "h50", "bg-cl"], ["slot", "start"], [1, "head"], ["mode", "md", "class", "login-btn", "expand", "block", 3, "click", 4, "ngIf"], ["formControlName", "pnrNumber", "label", "PNR Number", "labelPlacement", "floating", 1, "txt-lbl"], ["type", "email", "formControlName", "email", "label", "Email", "labelPlacement", "floating", 1, "txt-lbl"], ["tappable", "", 3, "click"], ["src", "./assets/icon/Calendar.svg", "alt", "", "slot", "end"], ["type", "text", "readonly", "", "formControlName", "displayDate", 2, "display", "none"], ["mode", "md", "expand", "block", "type", "submit", 1, "login-btn"], ["mode", "md", "expand", "block", 1, "login-btn", 3, "click"], [1, "seabirdTheme", 2, "--background", "#F1F7FA"], ["mode", "md", 2, "--background", "#F1F7FA", 3, "click"], ["defaultHref", "/tabs/more"], ["style", "margin:0px", "class", "head", 4, "ngIf"], ["class", "seabird_row", 3, "click", 4, "ngIf"], ["style", "padding: 0px;", "class", "center-div seabird_row", 4, "ngIf"], ["style", "padding: 12px;", "padding", "", 4, "ngIf"], ["style", "border: 1px solid;", "class", "card1 center-div", 4, "ngIf"], ["padding", "", "style", "margin: 0px 14px;", 4, "ngIf"], [1, "head", 2, "margin", "0px"], [1, "seabird_row", 3, "click"], ["size", "9", 1, "seabird_col"], ["size", "3", 1, "seabird_col", 2, "justify-content", "end"], [2, "font-size", "20px", 3, "name"], ["style", "box-shadow: 0px 0px 4px 0px #00000040; border: none;", "class", "seabird_row", 4, "ngIf"], [1, "seabird_row", 2, "box-shadow", "0px 0px 4px 0px #00000040", "border", "none"], [2, "width", "100%"], [4, "ngFor", "ngForOf"], ["class", "seabird_col_line", "size", "12", 3, "click", 4, "ngIf"], ["size", "12", 1, "seabird_col_line", 3, "click"], [1, "center-div", "seabird_row", 2, "padding", "0px"], [1, "seabird_item", "seabird-border-bottom", 2, "border-top-left-radius", "15px", "border-top-right-radius", "15px"], [1, "seabird_item", "seabird-border-bottom"], ["tappable", "", 1, "seabird_item", "seabird-clickable", 3, "click"], ["size", "8", 1, "seabird_col_line1"], ["style", "color:#434545;", "class", "seabird-txt-lbl", 4, "ngIf"], ["style", " margin-left: 11px;", "class", "seabird-txt-lbl", 4, "ngIf"], ["size", "4", 1, "seabird_col_line1", "seabird-select-date"], ["name", "calendar-outline"], [1, "seabird-txt-lbl", 2, "color", "#434545"], [1, "seabird-txt-lbl", 2, "margin-left", "11px"], ["padding", "", 2, "padding", "12px"], ["mode", "md", "expand", "block", "type", "submit", 1, "seabird-login-btn", 3, "click"], [1, "card1", "center-div", 2, "border", "1px solid"], [1, "center-hr", "custom-radio"], ["value", "pre_post", 2, "--color-checked", "#2B28CE"], ["value", "open_ticket", 2, "--color-checked", "#2B28CE"], ["padding", "", 2, "margin", "0px 14px"], ["mode", "md", "class", "seabird-login-btn", "expand", "block", 3, "click", 4, "ngIf"], ["mode", "md", "expand", "block", 1, "seabird-login-btn", 3, "click"], ["padding", "", 4, "ngIf"], ["class", "ourbustheme", 4, "ngIf"], ["class", "ourbustheme", "style", "--background: #FCFCFC;", 4, "ngIf"], ["mode", "md", 1, "h50"], ["fill", "outline", "mode", "md", 1, "ourbus_custom_input", "input-spacing"], ["type", "email", "formControlName", "email", "label", "PNR Number", "labelPlacement", "floating", 1, "txt-lbl"], ["fill", "outline", "mode", "md", "tappable", "", "id", "open-date-input-3", 1, "ourbus_custom_input"], ["type", "text", "formControlName", "displayDate", "label", "Journey Date", "labelPlacement", "floating", 1, "ourbus_inputText", "txt-lbl"], ["id", "dob", "trigger", "open-date-input-3", 1, "ourbus-Modal"], ["mode", "md", "color", "success", "show-default-buttons", "true", "done-text", "Ok", "presentation", "date", "showDefaultTitle", "true", 3, "ionChange", "max"], [1, "ourbustheme"], [1, "ourbus_head"], [1, "ourbustheme", 2, "--background", "#FCFCFC"], ["class", "cardSec", 4, "ngIf"], [2, "display", "flex", "justify-content", "center"], [1, "roundedDiv"], ["src", "././assets/icon/ourbus_ticket.svg", 2, "width", "32px", "height", "32px"], [1, "big_head"], [2, "margin", "16px"], ["value", "pre_post"], ["value", "open_ticket"], [1, "step_text"], ["size", "2"], [1, "small_roundedDiv"], ["size", "10"], [1, "msg_1"], [1, "msg_2"], ["mode", "md", "class", "ourbus-login-btn", "expand", "block", 3, "click", 4, "ngIf"], ["mode", "md", "expand", "block", 1, "ourbus-login-btn", 3, "click"], [1, "cardSec"], [1, "rfDetails"], ["size", "12"], [1, "secText"], ["mode", "md", "expand", "block", 1, "ourbus-login-btn", 2, "font-size", "20px", 3, "click"]],
  template: function PrepostonePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](0, PrepostonePage_ng_container_0_Template, 13, 3, "ng-container", 1)(1, PrepostonePage_ng_container_1_Template, 12, 4, "ng-container", 1)(2, PrepostonePage_ng_container_2_Template, 16, 10, "ng-container", 1)(3, PrepostonePage_ng_container_3_Template, 5, 4, "ng-container", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonDatetime, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonRadio, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonRadioGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonRippleEffect, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonModal, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonBackButton, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlName],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --ion-background-color:var(--viewBgColor);\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background:var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  position: fixed;\n  bottom: 10px;\n  height: 50px;\n  border-radius: 4px;\n}\n\n.context[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 13px;\n}\n\n.txt-lbl[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: normal;\n  color: #3e3e52 !important;\n}\n\n.card-1[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  margin: 0;\n  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0px, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0;\n  border-radius: 0;\n}\n\n.grey-box[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  background-color: #fdfdfd;\n  padding: 10px;\n  overflow: hidden;\n}\n\n.Contact-details[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: var(--sectionHeaderTextColor);\n}\n\n.small[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n\n.bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.center-div[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n\n.card1[_ngcontent-%COMP%] {\n  background-color: #fdfdfd;\n  padding: 10px;\n  overflow: hidden;\n}\n\n.passenger-details[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n  background-color: #fff;\n}\n.passenger-details[_ngcontent-%COMP%]   .code.item-md[_ngcontent-%COMP%] {\n  margin-top: -1px;\n}\n.passenger-details[_ngcontent-%COMP%]   .code.item-ios[_ngcontent-%COMP%] {\n  margin-top: 1px;\n}\n.passenger-details[_ngcontent-%COMP%]   .grey-box[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  margin-bottom: -8px;\n}\n.passenger-details[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  max-width: 100%;\n  text-align: center;\n}\n.passenger-details[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]   .select-text[_ngcontent-%COMP%] {\n  padding: 5px 0;\n}\n.passenger-details[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]   .select-icon[_ngcontent-%COMP%] {\n  left: -5px;\n}\n.passenger-details[_ngcontent-%COMP%]   .select-ios[_ngcontent-%COMP%], \n.passenger-details[_ngcontent-%COMP%]   .select-md[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.passenger-details[_ngcontent-%COMP%]   .item-ios.item-block[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%] {\n  border: 0;\n}\n.passenger-details[_ngcontent-%COMP%]   .item-ios.code[_ngcontent-%COMP%], \n.passenger-details[_ngcontent-%COMP%]   .item-md.code[_ngcontent-%COMP%] {\n  height: 35px;\n  min-height: 35px;\n  padding: 0;\n  position: absolute;\n}\n.passenger-details[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n  display: block;\n}\n.passenger-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.passenger-details[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 1.6em;\n  color: #555;\n  position: absolute;\n  bottom: 11px;\n}\n.passenger-details[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  position: relative;\n}\n.passenger-details[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.hd-refund[_ngcontent-%COMP%] {\n  margin: 44px 16px 50px;\n  font-family: NotoSans;\n  font-size: 20px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1;\n  letter-spacing: normal;\n  color: #4a4a4a;\n}\n\n.theme1[_ngcontent-%COMP%] {\n  color: #fff !important;\n  --color: #fff !important;\n}\n.theme1[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  width: 100%;\n  background-color: #fff !important;\n  margin: 0px;\n  padding: 16px;\n  height: 90vh;\n}\n.theme1[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]::part(native) {\n  background-color: #fff !important;\n}\n.theme1[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ADADAD;\n  font-size: 12px;\n  font-weight: 500;\n  margin: 0;\n}\n.theme1[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  border: 1px solid #DFDFDF;\n  width: 100%;\n  height: 50px;\n  --inner-border-width: 0px;\n}\n.theme1[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]::part(placeholder) {\n  opacity: 1;\n}\n.theme1[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  width: 100%;\n  margin-top: 6px;\n}\n.theme1[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #191966;\n  font-size: 14px;\n  font-weight: 500;\n  margin: 0;\n}\n.theme1[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-button.ticket[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.theme1[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-button.ticket[_ngcontent-%COMP%]::part(native) {\n  background-color: #F2C21A;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #191966;\n  font-weight: 600;\n  height: 45px;\n}\n\n.themeone-input[_ngcontent-%COMP%] {\n  color: #000;\n  height: 50px;\n  border-radius: 6px;\n  border: 1px solid #DFDFDF;\n}\n\n.themeone-login-btn[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background: #F1C11A;\n  color: #191966;\n  font-family: NotoSans;\n  font-weight: bold;\n  font-size: 13px;\n  position: fixed;\n  bottom: 60px;\n  height: 50px;\n  border-radius: 4px;\n}\n\n.theme1title[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.sc-ion-input-ios-h[_ngcontent-%COMP%] {\n  --padding-start: 16px;\n}\n\n.seabird_row[_ngcontent-%COMP%] {\n  background: white;\n  padding: 12px;\n  margin: 15px;\n  border: 0.5px solid #626262;\n  border-radius: 15px;\n}\n\n.seabird_col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  font-size: 14px;\n}\n\n.seabird_col_line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  border-bottom: 0.5px dotted #999999;\n  padding: 5px;\n  font-size: 14px;\n}\n\n.seabird_col_line[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.seabird_col_line1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  padding: 0px;\n  font-size: 14px;\n}\n\n.seabird_item[_ngcontent-%COMP%] {\n  --background: #fff;\n  width: 100%;\n  --min-height: 34px;\n  --border-color: white;\n  font-size: 14px;\n}\n.seabird_item[_ngcontent-%COMP%]   .sc-ion-input-ios-h[_ngcontent-%COMP%] {\n  --padding-start: 10px;\n}\n\n.seabird-border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 0.5px solid #626262;\n}\n\n.seabird-clickable[_ngcontent-%COMP%] {\n  margin: 18px 0;\n}\n\n.seabird-txt-lbl[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 15px;\n  font-weight: normal;\n  color: black;\n}\n\n.seabird-select-date[_ngcontent-%COMP%] {\n  color: #2B28CE;\n}\n\n.seabird-login-btn[_ngcontent-%COMP%] {\n  text-transform: initial;\n  --background:var(--iconsAndButtonsColor);\n  --color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  height: 50px;\n  --border-radius: 12px;\n}\n\n.custom-radio[_ngcontent-%COMP%] {\n  --color-checked: #2b28cd;\n  --border-color: #2b28cd;\n}\n\n.input-spacing[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.seabirdTheme[_ngcontent-%COMP%]   .ion-invalid[_ngcontent-%COMP%] {\n  --highlight-background: transparent !important;\n  background-color: transparent !important;\n}\n.seabirdTheme[_ngcontent-%COMP%]   .item-interactive.ion-valid[_ngcontent-%COMP%] {\n  --highlight-background: transparent;\n}\n\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_head[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #2D2D2D;\n  text-align: center;\n}\n.ourbustheme[_ngcontent-%COMP%]   .roundedDiv[_ngcontent-%COMP%] {\n  margin: 16px 0px;\n  width: 80px;\n  height: 80px;\n  background: #DBEFDC;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 40px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .big_head[_ngcontent-%COMP%] {\n  color: #4CAF50;\n  font-size: 24px;\n  font-weight: 700;\n  text-align: center;\n}\n.ourbustheme[_ngcontent-%COMP%]   .center-hr[_ngcontent-%COMP%] {\n  justify-content: start !important;\n}\n.ourbustheme[_ngcontent-%COMP%]   .step_text[_ngcontent-%COMP%] {\n  color: #747474;\n  font-size: 14px;\n  font-weight: 700;\n  text-align: center;\n  margin: 16px;\n}\n.ourbustheme[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  margin: 16px 0px;\n  padding: 8px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .small_roundedDiv[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: #DBEFDC;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 40px;\n  color: #397D32;\n  font-size: 18px;\n  font-weight: 700;\n}\n.ourbustheme[_ngcontent-%COMP%]   .msg_1[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #2D2D2D;\n  font-weight: 500;\n  margin-bottom: 8px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .msg_2[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #2D2D2D;\n  font-weight: 500;\n}\n.ourbustheme[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%] {\n  --color: var(--iconsAndButtonsColor);\n  --color-checked: var(--iconsAndButtonsColor);\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus-login-btn[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background:var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 24px;\n  height: 50px;\n  border-radius: 4px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .cardSec[_ngcontent-%COMP%] {\n  margin: 16px;\n  padding: 8px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .secText[_ngcontent-%COMP%] {\n  color: #2d2d2d;\n  font-size: 14px;\n  font-weight: 700;\n}\n.ourbustheme[_ngcontent-%COMP%]   .rfDetails[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #4CAF50;\n  margin: 8px 0px;\n}\n\nion-modal#dob[_ngcontent-%COMP%] {\n  --width: 311px !important;\n  --height: 543px !important;\n  --border-radius: 8px !important;\n}"]
});

/***/ }),

/***/ 85951:
/*!*************************************************!*\
  !*** ./src/app/prepostone/prepostone.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrepostonePageModule: () => (/* binding */ PrepostonePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _prepostone_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prepostone-routing.module */ 39798);
/* harmony import */ var _prepostone_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prepostone.page */ 66664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _PrepostonePageModule;






class PrepostonePageModule {}
_PrepostonePageModule = PrepostonePageModule;
_PrepostonePageModule.ɵfac = function PrepostonePageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PrepostonePageModule)();
};
_PrepostonePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _PrepostonePageModule
});
_PrepostonePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _prepostone_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrepostonePageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PrepostonePageModule, {
    declarations: [_prepostone_page__WEBPACK_IMPORTED_MODULE_1__.PrepostonePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _prepostone_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrepostonePageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
  });
})();

/***/ })

}]);