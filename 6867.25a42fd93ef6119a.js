"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[6867],{

/***/ 7642:
/*!***************************************************************!*\
  !*** ./src/app/cancel-ticket/cancel-ticket-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CancelTicketPageRoutingModule: () => (/* binding */ CancelTicketPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _cancel_ticket_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cancel-ticket.page */ 94604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _CancelTicketPageRoutingModule;




const routes = [{
  path: '',
  component: _cancel_ticket_page__WEBPACK_IMPORTED_MODULE_0__.CancelTicketPage
}];
class CancelTicketPageRoutingModule {}
_CancelTicketPageRoutingModule = CancelTicketPageRoutingModule;
_CancelTicketPageRoutingModule.ɵfac = function CancelTicketPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CancelTicketPageRoutingModule)();
};
_CancelTicketPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _CancelTicketPageRoutingModule
});
_CancelTicketPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CancelTicketPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 76867:
/*!*******************************************************!*\
  !*** ./src/app/cancel-ticket/cancel-ticket.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CancelTicketPageModule: () => (/* binding */ CancelTicketPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _cancel_ticket_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cancel-ticket-routing.module */ 7642);
/* harmony import */ var _cancel_ticket_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cancel-ticket.page */ 94604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _CancelTicketPageModule;






class CancelTicketPageModule {}
_CancelTicketPageModule = CancelTicketPageModule;
_CancelTicketPageModule.ɵfac = function CancelTicketPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CancelTicketPageModule)();
};
_CancelTicketPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _CancelTicketPageModule
});
_CancelTicketPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _cancel_ticket_routing_module__WEBPACK_IMPORTED_MODULE_0__.CancelTicketPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CancelTicketPageModule, {
    declarations: [_cancel_ticket_page__WEBPACK_IMPORTED_MODULE_1__.CancelTicketPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _cancel_ticket_routing_module__WEBPACK_IMPORTED_MODULE_0__.CancelTicketPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 94604:
/*!*****************************************************!*\
  !*** ./src/app/cancel-ticket/cancel-ticket.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CancelTicketPage: () => (/* binding */ CancelTicketPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _calendar_modal_calendar_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../calendar-modal/calendar-modal.page */ 70990);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _services_validator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/validator-service */ 1863);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/theme-service */ 99692);
/* harmony import */ var _services_exception__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/exception */ 91502);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 87330);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _services_global_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/global-data.service */ 7516);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 45564);

var _CancelTicketPage;



















function CancelTicketPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 2)(3, "ion-buttons", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Cancel ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "ion-content", 4)(8, "div", 5)(9, "div", 6)(10, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function CancelTicketPage_ng_container_0_Template_form_ngSubmit_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.continueToCancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "ion-card")(12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, "PNR Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "ion-row", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "ion-input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "ion-row", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](19, "ion-input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21, "Journey date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "ion-row", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function CancelTicketPage_ng_container_0_Template_ion_row_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.departureDateModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](24, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "ion-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](28, "ion-input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](29, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "div", 16)(31, "ion-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](32, "Cancel ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r1.cancelTicketForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", ctx_r1.cancelTicketForm.value.displayDate == "" ? "" : ctx_r1.cancelTicketForm.value.displayDate, " ");
  }
}
function CancelTicketPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 18)(3, "ion-buttons", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Cancel ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "ion-content", 16)(8, "div", 5)(9, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function CancelTicketPage_ng_container_1_Template_form_ngSubmit_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.continueToCancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](11, "ion-input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "ion-input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "ion-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function CancelTicketPage_ng_container_1_Template_ion_item_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.departureDateModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "ion-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](19, "ion-input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](20, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 16)(22, "ion-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23, "Cancel ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r1.cancelTicketForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r1.cancelTicketForm.value.displayDate == "" ? "Journey Date" : ctx_r1.cancelTicketForm.value.displayDate);
  }
}
function CancelTicketPage_ng_container_2_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-datetime", 36, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionChange", function CancelTicketPage_ng_container_2_ng_template_18_Template_ion_datetime_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const popoverDatetime_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.displayMybookings(popoverDatetime_r6 == null ? null : popoverDatetime_r6.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("max", ctx_r1.maxDate);
  }
}
function CancelTicketPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ion-header", 27)(2, "ion-toolbar", 28)(3, "ion-buttons", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Cancel Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "ion-content", 29)(8, "div", 5)(9, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function CancelTicketPage_ng_container_2_Template_form_ngSubmit_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.continueToCancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "ion-item", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](11, "ion-input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "ion-item", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "ion-input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "ion-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "ion-input", 34)(16, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "ion-modal", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, CancelTicketPage_ng_container_2_ng_template_18_Template, 2, 1, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "div", 16)(20, "ion-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21, "Cancel Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r1.cancelTicketForm);
  }
}
class CancelTicketPage {
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
    // showCancelTicketError: boolean = false;
    this.CancelTicketErrorMessage = '';
    this.pnrNumber = '';
    this.email = '';
    this.departureDate = {};
    this.departureDateReturn = {};
    this.maxDate = '';
    this.isIos = false;
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    // this.commonService.gTrack('cancelticket');
    this.appData.newTheme = this.util.getNewTheme();
    this.metaData = this.commonStorage.getItem("metaData");
  }
  ngOnInit() {
    const today = new Date();
    // this.maxDate = today.toISOString().split('T')[0];
    this.validations();
  }
  ionViewDidLoad() {
    // this.commonService.gTrack('cancelTicket','“Cancel ticket” button is clicked in Cancel Ticket page')
  }
  validations() {
    this.cancelTicketForm = this.formBuilder.group({
      pnr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required])],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _services_validator_service__WEBPACK_IMPORTED_MODULE_2__.ValidatorService.emailOrPhoneValidator])],
      displayDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required])]
    });
  }
  // showError(msg :any) {  not in use anywhere
  //   this.showCancelTicketError = true;
  //   this.CancelTicketErrorMessage = msg;
  // }
  departureDateModal() {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let modal = yield _this.modalController.create({
        component: _calendar_modal_calendar_modal_page__WEBPACK_IMPORTED_MODULE_1__.CalendarModalPage,
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
        _this.cancelTicketForm.controls['displayDate'].setValue(_this.commonService.displayFormatDate(data));
      }
    })();
  }
  continueToCancel() {
    if (this.isValid()) {
      if (!this.util.checkConnection()) {
        return false;
      }
      this.loader.showLoadingDefault();
      this.pnrNumber = this.cancelTicketForm.value.pnr;
      this.email = this.cancelTicketForm.value.email;
      this.displayNewDate = this.cancelTicketForm.value.displayDate;
      this.apiFactory.getTicketDetails_update(this.pnrNumber, this.email, this.displayNewDate, false).subscribe(result => {
        this.loader.hideLoadingDefault();
        if (typeof result.code === 'undefined') {
          this.commonStorage.setItem('cancelTicketDetails', result);
          let numberPhone = result.passenger_details[0].mobile.indexOf('-') > -1 ? result.passenger_details[0].mobile.split('-')[1] : result.passenger_details[0].mobile;
          let emailValidation = this.email !== result.passenger_details[0].email && this.email !== numberPhone;
          let dateValidation = this.dateService.cancelTicketDateFormat(this.travelDate.formattedDate, 'dd-mm-yyyy', this.commonService.checkDateFormat()) === result.travel_date;
          let cancelStatus = result.ticket_status === 'Cancelled';
          if (!emailValidation && !cancelStatus) {
            let navigationExtras = {
              state: {
                user: this.cancelTicketForm.value.email
              }
            };
            this.router.navigate(['cancel-confirmation-ticket'], navigationExtras);
            return true;
          } else {
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
          setTimeout(() => {
            this.util.showAlert('', result.message);
          });
          return false;
        }
      }, err => {
        this.loader.hideLoadingDefault();
        if (!this.util.isConnected()) {
          this.util.showAlert('', 'No internet connection');
        } else {
          this.util.showAlert('', 'An unexpected error occurred');
        }
        return false;
      });
      return true;
    }
    return false;
  }
  isValid() {
    if (this.cancelTicketForm.valid) {
      return true;
    }
    this.errors = true;
    let elem = document.querySelector('ion-input.ng-invalid input');
    if (elem) {
      elem.focus();
    }
    return false;
  }
  onDateSelected(event) {
    let dateObj = new Date(event.detail.value);
    const result = this.dateService.formattedDateData(dateObj);
    this.travelDate = result;
    this.cancelTicketForm.controls['displayDate'].setValue(this.commonService.displayFormatDate(result));
  }
  displayMybookings(date) {
    var _date;
    date = (_date = date) === null || _date === void 0 ? void 0 : _date.substring(0, 10);
    var newDate = new Date(date);
    const result = this.dateService.formattedDateData(newDate);
    this.travelDate = result;
    this.cancelTicketForm.controls['displayDate'].setValue(this.commonService.displayFormatDate(result));
    return this.commonService.displayFormatDate(result);
  }
}
_CancelTicketPage = CancelTicketPage;
_CancelTicketPage.ɵfac = function CancelTicketPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CancelTicketPage)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_4__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_5__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_6__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_exception__WEBPACK_IMPORTED_MODULE_7__.ExceptionProvider), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_8__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_9__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_10__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_11__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_17__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_12__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_global_data_service__WEBPACK_IMPORTED_MODULE_13__.GlobalDataService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController));
};
_CancelTicketPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: _CancelTicketPage,
  selectors: [["app-cancel-ticket"]],
  standalone: false,
  decls: 3,
  vars: 3,
  consts: [["popoverDatetime", ""], [4, "ngIf"], [2, "--background", "#191966"], ["mode", "md", "slot", "start"], [1, "theme1", 2, "--background", "white"], [1, "center-div"], [1, "card-row"], [3, "ngSubmit", "formGroup"], [1, "box"], ["formControlName", "pnr", 1, "themeone-input"], ["type", "email", "formControlName", "email", 1, "themeone-input"], ["tappable", "", 1, "box", 3, "click"], ["src", "./assets/icon/Calendar copy.svg", "alt", "", "slot", "end"], [1, "txt-lbl"], ["ion-button", "", 1, "txt-main"], ["type", "text", "readonly", "", "formControlName", "displayDate", 1, "themeone-input", 2, "display", "none"], ["padding", ""], ["mode", "md", "expand", "block", "type", "submit", 1, "themeone-login-btn"], ["mode", "md", 1, "h50", "bg-cl"], ["slot", "start"], [1, "head"], ["formControlName", "pnr", "label", "PNR Number", "labelPlacement", "floating", 1, "txt-lbl"], ["type", "email", "formControlName", "email", "label", "Email", "labelPlacement", "floating", 1, "txt-lbl"], ["tappable", "", 3, "click"], ["src", "./assets/icon/Calendar.svg", "alt", "", "slot", "end"], ["type", "text", "readonly", "", "formControlName", "displayDate", 2, "display", "none"], ["mode", "md", "expand", "block", "type", "submit", 1, "login-btn"], [1, "ourbustheme"], ["mode", "md", 1, "h50"], ["padding", "", 1, "ourbustheme"], ["lines", "none", "mode", "md", 1, "ourbus_custom_input", "input-spacing"], ["fill", "outline", "formControlName", "pnr", "label", "PNR Number", "labelPlacement", "floating", 1, "ourbus_custom_input1", "txt-lbl"], ["fill", "outline", "type", "email", "formControlName", "email", "label", "Email", "labelPlacement", "floating", 1, "ourbus_custom_input1", "txt-lbl"], ["lines", "none", "mode", "md", "tappable", "", "id", "open-date-input-3", 1, "ourbus_custom_input", "input-spacing"], ["fill", "outline", "type", "text", "formControlName", "displayDate", "label", "Journey Date", "labelPlacement", "floating", 1, "ourbus_inputText", "txt-lbl"], ["id", "dob", "trigger", "open-date-input-3", 1, "ourbus-Modal"], ["mode", "md", "color", "success", "show-default-buttons", "true", "done-text", "Ok", "presentation", "date", "showDefaultTitle", "true", 3, "ionChange", "max"]],
  template: function CancelTicketPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, CancelTicketPage_ng_container_0_Template, 33, 2, "ng-container", 1)(1, CancelTicketPage_ng_container_1_Template, 24, 2, "ng-container", 1)(2, CancelTicketPage_ng_container_2_Template, 22, 1, "ng-container", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "seabirdTheme" || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonDatetime, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonRippleEffect, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonModal, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonBackButton, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --ion-background-color:var(--viewBgColor);\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background:var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  position: fixed;\n  bottom: 10px;\n  height: 50px;\n  border-radius: 4px;\n}\n\n.txt-lbl[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: normal;\n  color: #3e3e52;\n}\n\n.center-div[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n\n.group[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 12px;\n}\n\ninput[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 100%;\n  border: none;\n  background-color: #f7f9fb;\n  border-bottom: 0.5px solid #757575;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n\n\nlabel[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 18px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  top: 10px;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n}\n\n\n\ninput[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:valid    ~ label[_ngcontent-%COMP%] {\n  top: -10px;\n  font-size: 14px;\n  color: #5264AE;\n}\n\n\n\n.bar[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n}\n\n.bar[_ngcontent-%COMP%]:before, .bar[_ngcontent-%COMP%]:after {\n  content: \"\";\n  height: 1px;\n  width: 0;\n  position: absolute;\n  background: #5264AE;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n}\n\n.bar[_ngcontent-%COMP%]:before {\n  left: 50%;\n}\n\n.bar[_ngcontent-%COMP%]:after {\n  right: 50%;\n}\n\n\n\ninput[_ngcontent-%COMP%]:focus    ~ .bar[_ngcontent-%COMP%]:before, input[_ngcontent-%COMP%]:focus    ~ .bar[_ngcontent-%COMP%]:after {\n  width: 50%;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_inputHighlighter {\n  from {\n    background: #5264AE;\n  }\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n.center-div[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\nion-content[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  width: 100%;\n  background-color: #fff !important;\n  margin: 0px;\n  padding: 16px;\n  height: 90vh;\n}\nion-content[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]::part(native) {\n  background-color: #fff !important;\n}\nion-content[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ADADAD;\n  font-size: 12px;\n  font-weight: 500;\n  margin: 0;\n}\nion-content[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  border: 1px solid #DFDFDF;\n  width: 100%;\n  height: 50px;\n  --inner-border-width: 0px;\n}\nion-content[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]::part(placeholder) {\n  opacity: 1;\n}\nion-content[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  width: 100%;\n  margin-top: 6px;\n}\nion-content[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #191966;\n  font-size: 14px;\n  font-weight: 500;\n  margin: 0;\n}\nion-content[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-button.ticket[_ngcontent-%COMP%] {\n  width: 100%;\n}\nion-content[_ngcontent-%COMP%]   .card-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-button.ticket[_ngcontent-%COMP%]::part(native) {\n  background-color: #F2C21A;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #191966;\n  font-weight: 600;\n  height: 45px;\n}\n\n.themeone-input[_ngcontent-%COMP%] {\n  color: #000;\n  height: 50px;\n  border-radius: 6px;\n  border: 1px solid #DFDFDF;\n}\n\n.themeone-login-btn[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background: #F1C11A;\n  color: #191966;\n  font-family: NotoSans;\n  font-weight: bold;\n  font-size: 13px;\n  position: fixed;\n  bottom: 60px;\n  height: 50px;\n  border-radius: 4px;\n}\n\n.sc-ion-input-ios-h[_ngcontent-%COMP%] {\n  --padding-start: 16px;\n}\n\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\n.input-spacing[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  --ion-color-primary: #000 !important;\n  --highlight-color-valid: #000 !important;\n  --highlight-color-invalid: #000 !important;\n  --color-focused:#000 !important;\n}\n\nion-modal#dob[_ngcontent-%COMP%] {\n  --width: 311px !important;\n  --height: 543px !important;\n  --border-radius: 8px !important;\n}\n\n.ourbus_custom_input1[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  --highlight-color-focused:#D9D9D9 !important;\n  --placeholder-color:#000 !important;\n}"]
});

/***/ })

}]);