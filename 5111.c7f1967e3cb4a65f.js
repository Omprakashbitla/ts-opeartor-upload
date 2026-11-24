"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[5111],{

/***/ 37246
/*!***********************************************************************!*\
  !*** ./src/app/pay-phone-booking/pay-phone-booking-routing.module.ts ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PayPhoneBookingPageRoutingModule: () => (/* binding */ PayPhoneBookingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 49870);
/* harmony import */ var _pay_phone_booking_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pay-phone-booking.page */ 45984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _PayPhoneBookingPageRoutingModule;




const routes = [{
  path: '',
  component: _pay_phone_booking_page__WEBPACK_IMPORTED_MODULE_1__.PayPhoneBookingPage
}];
class PayPhoneBookingPageRoutingModule {}
_PayPhoneBookingPageRoutingModule = PayPhoneBookingPageRoutingModule;
_PayPhoneBookingPageRoutingModule.ɵfac = function PayPhoneBookingPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PayPhoneBookingPageRoutingModule)();
};
_PayPhoneBookingPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _PayPhoneBookingPageRoutingModule
});
_PayPhoneBookingPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PayPhoneBookingPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 55111
/*!***************************************************************!*\
  !*** ./src/app/pay-phone-booking/pay-phone-booking.module.ts ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PayPhoneBookingPageModule: () => (/* binding */ PayPhoneBookingPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _pay_phone_booking_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pay-phone-booking-routing.module */ 37246);
/* harmony import */ var _pay_phone_booking_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pay-phone-booking.page */ 45984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
var _PayPhoneBookingPageModule;






class PayPhoneBookingPageModule {}
_PayPhoneBookingPageModule = PayPhoneBookingPageModule;
_PayPhoneBookingPageModule.ɵfac = function PayPhoneBookingPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PayPhoneBookingPageModule)();
};
_PayPhoneBookingPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: _PayPhoneBookingPageModule
});
_PayPhoneBookingPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _pay_phone_booking_routing_module__WEBPACK_IMPORTED_MODULE_3__.PayPhoneBookingPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PayPhoneBookingPageModule, {
    declarations: [_pay_phone_booking_page__WEBPACK_IMPORTED_MODULE_4__.PayPhoneBookingPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _pay_phone_booking_routing_module__WEBPACK_IMPORTED_MODULE_3__.PayPhoneBookingPageRoutingModule]
  });
})();

/***/ },

/***/ 45984
/*!*************************************************************!*\
  !*** ./src/app/pay-phone-booking/pay-phone-booking.page.ts ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PayPhoneBookingPage: () => (/* binding */ PayPhoneBookingPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _price_breakup_price_breakup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../price-breakup/price-breakup.component */ 30072);
/* harmony import */ var capacitor_razorpay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! capacitor-razorpay */ 71602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 83087);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_global_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/global-data.service */ 7516);
/* harmony import */ var _app_services_appdata__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../app/services/appdata */ 40172);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 89417);

var _PayPhoneBookingPage;













const _c0 = ["statePopover"];
const _c1 = ["stateSelectBox"];
const _c2 = () => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const _c3 = () => [0, 1];
function PayPhoneBookingPage_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 67)(1, "ion-row")(2, "ion-col")(3, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Pickup Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-row", 71)(10, "ion-col", 72)(11, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Drop Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r1.ticketDetails == null ? null : ctx_r1.ticketDetails.boarding_details == null ? null : ctx_r1.ticketDetails.boarding_details.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.ticketDetails == null ? null : ctx_r1.ticketDetails.boarding_details == null ? null : ctx_r1.ticketDetails.boarding_details.landmark);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r1.ticketDetails == null ? null : ctx_r1.ticketDetails.drop_off_details == null ? null : ctx_r1.ticketDetails.drop_off_details.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.ticketDetails == null ? null : ctx_r1.ticketDetails.drop_off_details == null ? null : ctx_r1.ticketDetails.drop_off_details.landmark);
  }
}
function PayPhoneBookingPage_ion_row_66_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const passenger_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("(", passenger_r3.gender, ")");
  }
}
function PayPhoneBookingPage_ion_row_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-row", 73)(1, "ion-col")(2, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Passenger name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, PayPhoneBookingPage_ion_row_66_ng_container_6_Template, 2, 1, "ng-container", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-col", 77)(8, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Seat");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const passenger_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", passenger_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", passenger_r3.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](passenger_r3.seat_number);
  }
}
function PayPhoneBookingPage_ng_template_113_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PayPhoneBookingPage_ng_template_113_ion_item_1_Template_ion_item_click_0_listener() {
      const state_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.selectState(state_r5.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const state_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("detail", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", state_r5.name, " ");
  }
}
function PayPhoneBookingPage_ng_template_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PayPhoneBookingPage_ng_template_113_ion_item_1_Template, 2, 2, "ion-item", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.states);
  }
}
function PayPhoneBookingPage_ng_template_127_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 82)(1, "div", 83)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-icon", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PayPhoneBookingPage_ng_template_127_Template_ion_icon_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.showConfirmationPopup = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Valid for 10 min only ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Note: This booking is valid for 10 min only. Please complete the payment to avoid cancellation. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " On confirmation, you will receive the details on your registered email id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " and number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-row", 88)(17, "ion-col", 89)(18, "ion-button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PayPhoneBookingPage_ng_template_127_Template_ion_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.showConfirmationPopup = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ion-col", 89)(21, "ion-button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PayPhoneBookingPage_ng_template_127_Template_ion_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onConfirmPayment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.emailId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.phoneNumber);
  }
}
class PayPhoneBookingPage {
  constructor(route, apiFactory, navCtrl, util, globalData, modalController, appData, commonStorage, loader) {
    this.route = route;
    this.apiFactory = apiFactory;
    this.navCtrl = navCtrl;
    this.util = util;
    this.globalData = globalData;
    this.modalController = modalController;
    this.appData = appData;
    this.commonStorage = commonStorage;
    this.loader = loader;
    this.pnrNumber = '';
    this.phoneNumber = '';
    this.showDetails = true;
    this.states = [];
    this.selectedState = '';
    this.emailId = '';
    this.concession_details = [];
    this.passengerForm = [];
    this.showConfirmationPopup = false;
    this.metaData = this.commonStorage.getItem("metaData");
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.pnrNumber = params['pnr_number'] || '';
      this.phoneNumber = params['phone_number'] || '';
      this.selectedState = params['state'] || '';
      console.log('PNR:', this.pnrNumber);
      console.log('Phone:', this.phoneNumber);
      if (this.pnrNumber && this.phoneNumber) {
        this.getTicketDetails();
      }
    });
    this.stateListApi();
  }
  cancellation() {
    this.navCtrl.navigateForward('cancellation-policies');
  }
  goBack() {
    this.navCtrl.back();
  }
  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
  stateListApi() {
    this.apiFactory.gstState().subscribe(res => {
      if (res.code === 200) {
        this.states = res.states.map(state => ({
          ...state,
          name: state.name.toUpperCase()
        }));
      } else {
        this.util.showToast(res.message);
      }
    }, err => {});
  }
  get stateSelectOptions() {
    var _this$stateSelectBox$, _this$stateSelectBox;
    const width = (_this$stateSelectBox$ = (_this$stateSelectBox = this.stateSelectBox) === null || _this$stateSelectBox === void 0 || (_this$stateSelectBox = _this$stateSelectBox.nativeElement) === null || _this$stateSelectBox === void 0 ? void 0 : _this$stateSelectBox.offsetWidth) !== null && _this$stateSelectBox$ !== void 0 ? _this$stateSelectBox$ : 260;
    document.documentElement.style.setProperty('--state-popover-width', `${width}px`);
    return {
      cssClass: 'state-select-popover',
      side: 'top',
      alignment: 'start'
    };
  }
  selectState(name) {
    this.selectedState = name;
    this.statePopover.dismiss();
  }
  setPopoverWidth() {
    var _this$stateSelectBox$2, _this$stateSelectBox2;
    const width = (_this$stateSelectBox$2 = (_this$stateSelectBox2 = this.stateSelectBox) === null || _this$stateSelectBox2 === void 0 || (_this$stateSelectBox2 = _this$stateSelectBox2.nativeElement) === null || _this$stateSelectBox2 === void 0 ? void 0 : _this$stateSelectBox2.offsetWidth) !== null && _this$stateSelectBox$2 !== void 0 ? _this$stateSelectBox$2 : 260;
    document.documentElement.style.setProperty('--state-popover-width', `${width}px`);
  }
  openStatePopover(event) {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _this$states;
      if (!((_this$states = _this.states) !== null && _this$states !== void 0 && _this$states.length)) {
        return;
      }
      const triggerEl = _this.stateSelectBox.nativeElement;
      const rect = triggerEl.getBoundingClientRect();
      document.documentElement.style.setProperty('--state-popover-width', `${rect.width}px`);
      _this.statePopover.event = event;
      _this.statePopover.reference = 'trigger';
      _this.statePopover.side = 'top';
      _this.statePopover.alignment = 'center';
      _this.statePopover.size = 'cover';
      yield _this.statePopover.present();
    })();
  }
  getTicketDetails() {
    this.apiFactory.getTicketDetailsForPhoneBook(this.pnrNumber, this.phoneNumber, true).subscribe(result => {
      this.ticketDetails = result;
      if (typeof result.code == "undefined") {
        var _this$ticketDetails;
        this.ticketDetails = result;
        if (((_this$ticketDetails = this.ticketDetails) === null || _this$ticketDetails === void 0 || (_this$ticketDetails = _this$ticketDetails.passenger_details) === null || _this$ticketDetails === void 0 ? void 0 : _this$ticketDetails.length) > 0) {
          var _this$ticketDetails$p, _this$ticketDetails$p2, _this$ticketDetails$p3;
          this.emailId = ((_this$ticketDetails$p = this.ticketDetails.passenger_details[0]) === null || _this$ticketDetails$p === void 0 ? void 0 : _this$ticketDetails$p.email) || ((_this$ticketDetails$p2 = this.ticketDetails.passenger_details[0]) === null || _this$ticketDetails$p2 === void 0 ? void 0 : _this$ticketDetails$p2.cus_email) || '';
          this.selectedState = ((_this$ticketDetails$p3 = this.ticketDetails.passenger_details[0]) === null || _this$ticketDetails$p3 === void 0 ? void 0 : _this$ticketDetails$p3.state) || this.selectedState || '';
        }
        this.farebreakUpcall();
        console.log(this.ticketDetails);
      } else {
        if (result.code == 419) {}
      }
    }, err => {
      if (!this.util.isConnected()) {
        console.log('No internet connection');
      } else {
        console.log('SOMETHING WENT WRONG PLEASE TRY AFTER SOMTIME');
      }
    });
  }
  callFarebreakup() {
    var _this2 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalController.create({
        component: _price_breakup_price_breakup_component__WEBPACK_IMPORTED_MODULE_1__.PriceBreakupComponent,
        componentProps: {
          filData: _this2.globalData,
          fareBreakup_hash: _this2.fareBreakup_hash,
          isReturn: false,
          idProof: false,
          phoneBooking: false,
          payFromWallet: false,
          checkCancelProtect: true,
          idProofCnt: 0,
          appliedOfferCoupon: '',
          promoCoupon: '',
          appliedcoupon1: false,
          appliedcoupon2: false,
          appliedCouponname: '',
          smartMilesDiscount: 0,
          smartMileCoupon: '',
          pnrDiscountAplied: false,
          quotePnrForm: {},
          privCardNumber: '',
          onwardSeatDetails: "",
          returnSeatDetails: "",
          isFromCoachLayout: false
        },
        cssClass: '',
        breakpoints: [0, 0.3, 0.5, 0.8],
        initialBreakpoint: 0.3
      });
      yield modal.present();
    })();
  }
  farebreakUpcall() {
    var _this$ticketDetails2, _this$ticketDetails3, _this$ticketDetails4, _this$ticketDetails5, _this$ticketDetails6, _this$ticketDetails7, _this$ticketDetails8, _this$ticketDetails9;
    var pathForBooking = "";
    pathForBooking = "res_id=" + ((_this$ticketDetails2 = this.ticketDetails) === null || _this$ticketDetails2 === void 0 ? void 0 : _this$ticketDetails2.reservation_id);
    if (this.util.isWebApp()) {
      pathForBooking += "&native_app_type=6";
    } else {
      if (this.util.isIos()) {
        pathForBooking += "&native_app_type=9";
      } else {
        pathForBooking += "&native_app_type=10";
      }
    }
    pathForBooking += "&origin=" + this.ticketDetails.origin;
    pathForBooking += "&destination=" + this.ticketDetails.destination;
    pathForBooking += "&boarding_at=" + ((_this$ticketDetails3 = this.ticketDetails) === null || _this$ticketDetails3 === void 0 || (_this$ticketDetails3 = _this$ticketDetails3.boarding_details) === null || _this$ticketDetails3 === void 0 ? void 0 : _this$ticketDetails3.stage_id);
    pathForBooking += "&drop_off=" + ((_this$ticketDetails4 = this.ticketDetails) === null || _this$ticketDetails4 === void 0 || (_this$ticketDetails4 = _this$ticketDetails4.drop_off_details) === null || _this$ticketDetails4 === void 0 ? void 0 : _this$ticketDetails4.stage_id);
    pathForBooking += "&no_of_seats=" + (((_this$ticketDetails5 = this.ticketDetails) === null || _this$ticketDetails5 === void 0 || (_this$ticketDetails5 = _this$ticketDetails5.passenger_details) === null || _this$ticketDetails5 === void 0 ? void 0 : _this$ticketDetails5.length) || 0);
    pathForBooking += "&is_mobile_app=true";
    pathForBooking += "&is_round_trip=false";
    if (this.metaData.showCancelProtect) {
      pathForBooking += "&is_cancel_protect=" + true;
    }
    const seatNumbers = ((_this$ticketDetails6 = this.ticketDetails) === null || _this$ticketDetails6 === void 0 || (_this$ticketDetails6 = _this$ticketDetails6.passenger_details) === null || _this$ticketDetails6 === void 0 ? void 0 : _this$ticketDetails6.map(passenger => passenger.seat_number)) || [];
    let promoCoupon;
    promoCoupon = '';
    let data = {
      "seat_numbers": seatNumbers,
      "no_of_seats": ((_this$ticketDetails7 = this.ticketDetails) === null || _this$ticketDetails7 === void 0 || (_this$ticketDetails7 = _this$ticketDetails7.passenger_details) === null || _this$ticketDetails7 === void 0 ? void 0 : _this$ticketDetails7.length) || 0,
      "return_seat_numbers": "",
      "use_smart_miles": false,
      "passenger_titles": {},
      "boarding_at": (_this$ticketDetails8 = this.ticketDetails) === null || _this$ticketDetails8 === void 0 || (_this$ticketDetails8 = _this$ticketDetails8.boarding_details) === null || _this$ticketDetails8 === void 0 ? void 0 : _this$ticketDetails8.stage_id,
      "drop_off": (_this$ticketDetails9 = this.ticketDetails) === null || _this$ticketDetails9 === void 0 || (_this$ticketDetails9 = _this$ticketDetails9.drop_off_details) === null || _this$ticketDetails9 === void 0 ? void 0 : _this$ticketDetails9.stage_id,
      "return_boarding_at": '',
      "return_dropoff": '',
      "offer_coupon": '',
      "promo_coupon": promoCoupon,
      "previous_pnr_details": {},
      "coupon_details": [],
      "use_e_discount": true,
      "priv_card_number": '',
      "is_cancel_protect": true
    };
    this.apiFactory.fareBreakUp(data, pathForBooking).subscribe(res => {
      this.fareBreakup_hash = res.fare_break_up_hash;
      this.fareBreakUpDetails = res;
      this.concessionFareDetails = res.concession_fare_details;
      if (this.concessionFareDetails) {
        for (let seat of this.concessionFareDetails) {
          for (let i = 0; i < this.passengerForm.length; i++) {
            if (this.passengerForm[i].get('seat_number').value === seat.seat) {
              this.passengerForm[i].get('concession_fare').setValue(seat.fare);
            }
          }
        }
      }
    }, err => {});
  }
  confirmBooking() {
    var _this$emailId, _this$selectedState;
    if (!((_this$emailId = this.emailId) !== null && _this$emailId !== void 0 && _this$emailId.trim())) {
      this.util.showToast('Please enter email address');
      return;
    }
    if (!((_this$selectedState = this.selectedState) !== null && _this$selectedState !== void 0 && _this$selectedState.trim())) {
      this.util.showToast('Please select state');
      return;
    }
    let platformNumber;
    if (this.appData.isWEBAPP) {
      platformNumber = 6;
    } else {
      if (this.appData.isIOS) {
        platformNumber = 9;
      } else {
        platformNumber = 10;
      }
    }
    let pathForBooking = 'pnr_number=' + this.pnrNumber;
    pathForBooking += '&is_wallet_booking=false';
    pathForBooking += '&native_app_type=' + platformNumber;
    pathForBooking += '&pay_gay_type=53';
    pathForBooking += '&is_cancel_protect=false';
    pathForBooking += '&is_phone_booking=true';
    pathForBooking += '&email_id=' + encodeURIComponent(this.emailId);
    pathForBooking += '&state=' + encodeURIComponent(this.selectedState);
    console.log(pathForBooking);
    this.confirmEPhoneBooking(pathForBooking);
  }
  confirmEPhoneBooking(pathForBooking) {
    this.apiFactory.phoneEBook(pathForBooking).subscribe(result => {
      console.log('Confirm Booking Response', result);
      if (result.code) {
        this.util.showToast(result.message);
        return;
      }
      if (result.is_razorpay_payment && result.amount && result.order_id && result.merchant_id && result.secret_key) {
        this.payWithRazorpay(result);
        return;
      }
      this.util.showToast('Unable to initiate payment');
    }, err => {
      this.util.showToast('Something went wrong');
    });
  }
  emcription(serverDate, subdomain) {
    if (!serverDate) {
      return '';
    }
    if (serverDate instanceof Date) {
      serverDate = serverDate.toISOString();
    }
    serverDate = String(serverDate);
    const [first] = serverDate.split('T');
    const formattedDate = first.replaceAll('-', '');
    const res = subdomain + formattedDate;
    return btoa(res);
  }
  payWithRazorpay(ticketData) {
    var _this3 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        var _this3$metaData, _this3$metaData2, _this3$metaData3, _this3$metaData4;
        console.log('metaData at payment time:', (_this3$metaData = _this3.metaData) === null || _this3$metaData === void 0 ? void 0 : _this3$metaData.subdomain, (_this3$metaData2 = _this3.metaData) === null || _this3$metaData2 === void 0 ? void 0 : _this3$metaData2.serverDate);
        const halfKey = _this3.emcription((_this3$metaData3 = _this3.metaData) === null || _this3$metaData3 === void 0 ? void 0 : _this3$metaData3.serverDate, (_this3$metaData4 = _this3.metaData) === null || _this3$metaData4 === void 0 ? void 0 : _this3$metaData4.subdomain);
        let merchantKey = atob(ticketData.merchant_id).replace(halfKey, '');
        console.log('merchantKey:', merchantKey);
        const options = {
          description: 'Phone booking',
          image: 'https://i.imgur.com/3g7nmJC.png',
          order_id: ticketData.order_id,
          currency: 'INR',
          key: merchantKey,
          amount: ticketData.amount,
          prefill: {
            email: ticketData.email_id,
            contact: ticketData.phone_no,
            name: ticketData.passenger_name
          },
          theme: {
            color: '#3399cc'
          }
        };
        console.log('calling Checkout.open', options);
        const result = yield capacitor_razorpay__WEBPACK_IMPORTED_MODULE_2__.Checkout.open(options);
        const response = typeof result.response === 'string' ? JSON.parse(result.response) : result.response;
        const paymentId = response === null || response === void 0 ? void 0 : response.razorpay_payment_id;
        if (!paymentId) {
          throw new Error('Payment ID missing');
        }
        _this3.util.showToast('TICKET CONFIRMED SUCCESSFULLY');
        _this3.commonStorage.localSet('bookedTicketDetails', ticketData);
        localStorage.setItem('bookingDetails', JSON.stringify(ticketData));
        let navigationExtras = {
          queryParams: {
            new_booking: 'true',
            hideLocateTrackBus: true
          }
        };
        _this3.navigationExtras = navigationExtras;
        _this3.loader.showLoadingDefault();
        _this3.apiFactory.paymentSuccessCall(ticketData.pnr_number, paymentId).subscribe(() => {
          setTimeout(() => {
            _this3.loader.hideLoadingDefault();
            _this3.navCtrl.navigateRoot('booking-details', _this3.navigationExtras);
          }, 500);
        }, err => {
          setTimeout(() => {
            _this3.loader.hideLoadingDefault();
            _this3.navCtrl.navigateRoot('booking-details', _this3.navigationExtras);
          }, 500);
        });
      } catch (error) {
        console.error('payWithRazorpay caught error:', error);
        _this3.commonStorage.localSet('bookedTicketDetails', ticketData);
        localStorage.setItem('bookingDetails', JSON.stringify(_this3.commonStorage.localGet('bookedTicketDetails')));
        let navigationExtras = {
          queryParams: {
            new_booking: 'true',
            hideLocateTrackBus: true
          }
        };
        _this3.navigationExtras = navigationExtras;
        _this3.navCtrl.navigateRoot('booking-details', _this3.navigationExtras);
        _this3.loader.showLoadingDefault();
        _this3.apiFactory.paymentFailureCall(ticketData.pnr_number, ticketData.order_id).subscribe(() => {
          setTimeout(() => {
            _this3.loader.hideLoadingDefault();
            _this3.navCtrl.navigateRoot('booking-details', _this3.navigationExtras);
          }, 500);
        }, err => {
          setTimeout(() => {
            _this3.loader.hideLoadingDefault();
            _this3.navCtrl.navigateRoot('booking-details', _this3.navigationExtras);
          }, 500);
        });
      }
    })();
  }
  openConfirmationPopup() {
    var _this$emailId2, _this$selectedState2;
    if (!((_this$emailId2 = this.emailId) !== null && _this$emailId2 !== void 0 && _this$emailId2.trim())) {
      this.util.showToast('Please enter email address');
      return;
    }
    if (!((_this$selectedState2 = this.selectedState) !== null && _this$selectedState2 !== void 0 && _this$selectedState2.trim())) {
      this.util.showToast('Please select state');
      return;
    }
    this.showConfirmationPopup = true;
  }
  onConfirmPayment() {
    this.showConfirmationPopup = false;
    this.confirmBooking();
  }
  formatDuration(duration) {
    try {
      const parts = duration === null || duration === void 0 ? void 0 : duration.split(':');
      if ((parts === null || parts === void 0 ? void 0 : parts.length) >= 2) {
        return `${parts[0]}h ${parts[1]}m`;
      }
      return duration || '';
    } catch {
      return duration || '';
    }
  }
}
_PayPhoneBookingPage = PayPhoneBookingPage;
_PayPhoneBookingPage.ɵfac = function PayPhoneBookingPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PayPhoneBookingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_5__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_8__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_global_data_service__WEBPACK_IMPORTED_MODULE_9__.GlobalDataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_services_appdata__WEBPACK_IMPORTED_MODULE_10__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_11__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_12__.LoaderService));
};
_PayPhoneBookingPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _PayPhoneBookingPage,
  selectors: [["app-pay-phone-booking"]],
  viewQuery: function PayPhoneBookingPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.statePopover = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.stateSelectBox = _t.first);
    }
  },
  standalone: false,
  decls: 128,
  vars: 34,
  consts: [["stateSelectBox", ""], ["statePopover", ""], [1, "review-toolbar", 2, "padding-top", "8px", "padding-bottom", "8px"], ["slot", "start"], ["mode", "md", "defaultHref", "/", "text", "", 2, "position", "absolute", 3, "click"], [3, "fullscreen"], [1, "main-card"], [1, "card-header"], [1, "brand"], [1, "brand-logo"], ["src", "./assets/icon/chartered.svg", "alt", "", 1, "themeone-img"], [1, "brand-info"], [1, "app-name"], [1, "service-name"], [1, "date-info"], [1, "date-num"], [1, "date-month"], [1, "route-row"], [1, "route-col", "source"], [1, "city-code"], [1, "city-name"], [1, "time"], [1, "time-label"], [1, "route-mid"], ["src", "./assets/icon/bus.svg", "alt", "", 1, "themeone-img", 2, "width", "20px", "height", "20px"], [1, "route-line-wrap"], [1, "dot", "blue"], [1, "dashed-line"], [1, "dot", "yellow"], [1, "duration"], [1, "route-col", "dest"], [1, "card-corner-design", 2, "position", "relative"], [1, "card-circular-corner", "ion-margin-top", "ion-margin-bottom"], [1, "dotted-divider"], [1, "less-details-row", 3, "click"], ["viewBox", "0 0 24 24", 1, "chevron-icon"], ["d", "M6 9l6 6 6-6", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["class", "pick-drop-section", 4, "ngIf"], [1, "solid-divider"], [1, "passenger-section"], [1, "section-title"], ["class", "passenger-row", 4, "ngFor", "ngForOf"], [1, "status-warning"], [1, "section-card"], [1, "field-label"], [1, "field-value-box"], ["type", "email", "placeholder", "e.g. test@example.com", 3, "ngModelChange", "ngModel"], [1, "field-note"], [1, "field-label", 2, "margin-top", "16px"], ["id", "state-trigger", 1, "select-box", 3, "click"], ["name", "chevron-down-outline"], [1, "policy-row", 3, "click"], ["viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10 6l6 6-6 6V6z"], [1, "tc-row"], [1, "tc-note"], [1, "tc-highlight"], [1, "bottom-spacer"], ["side", "top", "alignment", "center", "size", "cover", 1, "state-select-popover", 3, "showBackdrop", "dismissOnSelect", "arrow"], [1, "bottom-pay-bar"], [1, "pay-bar-inner"], [1, "fare-info"], [1, "fare-amount"], [1, "view-breakup", 3, "click"], ["size", "auto", 3, "click"], [1, "pay-btn"], ["cssClass", "confirmation-modal", 3, "didDismiss", "isOpen", "initialBreakpoint", "breakpoints"], [1, "pick-drop-section"], [1, "pick-drop-label"], [1, "pick-drop-value"], [1, "pick-drop-address"], [1, "pick-drop-gap"], [2, "margin-top", "16px"], [1, "passenger-row"], [1, "pax-label"], [1, "pax-name"], [4, "ngIf"], ["size", "auto", 1, "seat-col"], [1, "seat-label"], [1, "seat-badge"], ["button", "", "lines", "full", 3, "detail", "click", 4, "ngFor", "ngForOf"], ["button", "", "lines", "full", 3, "click", "detail"], [1, "confirmation-sheet"], [1, "header-row"], ["name", "close", 2, "width", "24px", "height", "24px", "color", "#AFAFAF", 3, "click"], [1, "validity-chip"], [1, "note-text"], [1, "contact-text"], [1, "button-row"], ["size", "6"], ["fill", "outline", "expand", "block", 3, "click"], ["expand", "block", 3, "click"]],
  template: function PayPhoneBookingPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 2)(2, "ion-buttons", 3)(3, "ion-back-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PayPhoneBookingPage_Template_ion_back_button_click_3_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.goBack());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Confirm Phone Bookings");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-content", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 11)(13, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Chartered Bus \u2014 First");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 14)(18, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "ion-row", 17)(23, "ion-col", 18)(24, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "uppercase");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Depart");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "ion-col", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "span", 26)(37, "div", 27)(38, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "ion-col", 30)(42, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](44, "uppercase");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Arrive");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 31)(52, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PayPhoneBookingPage_Template_div_click_54_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.toggleDetails());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "svg", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "path", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, PayPhoneBookingPage_div_59_Template, 17, 4, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 39)(62, "ion-row")(63, "ion-col")(64, "span", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](66, PayPhoneBookingPage_ion_row_66_Template, 12, 3, "ion-row", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div")(68, "ion-row")(69, "ion-col")(70, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, " Status: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Pending payment.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, " Complete payment to confirm your seat. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 43)(76, "ion-row")(77, "ion-col")(78, "span", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "Contact & billing details");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "ion-row")(81, "ion-col")(82, "span", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "Email address");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 45)(85, "ion-input", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function PayPhoneBookingPage_Template_ion_input_ngModelChange_85_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.emailId, $event) || (ctx.emailId = $event);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "Ticket confirmation will be sent to this email");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "ion-row")(89, "ion-col")(90, "span", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "State (residential address)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 49, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PayPhoneBookingPage_Template_div_click_92_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.openStatePopover($event));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](96, "ion-icon", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "Required for GST / billing purposes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PayPhoneBookingPage_Template_div_click_99_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.cancellation());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "Cancellation policy");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "svg", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](103, "path", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "ion-row", 54)(105, "ion-col")(106, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "By clicking on continue you agree to all our ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "span", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, "T&C");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](110, "div", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "ion-popover", 58, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](113, PayPhoneBookingPage_ng_template_113_Template, 2, 1, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "ion-footer")(115, "div", 59)(116, "ion-row", 60)(117, "ion-col")(118, "div", 61)(119, "span", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "span", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PayPhoneBookingPage_Template_span_click_121_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.callFarebreakup());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](122, "View breakup");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "ion-col", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PayPhoneBookingPage_Template_ion_col_click_123_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.openConfirmationPopup());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "button", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, "Continue to payment");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "ion-modal", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("didDismiss", function PayPhoneBookingPage_Template_ion_modal_didDismiss_126_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.showConfirmationPopup = false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](127, PayPhoneBookingPage_ng_template_127_Template, 23, 2, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      let tmp_4_0;
      let tmp_5_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.ticketDetails == null ? null : ctx.ticketDetails.bus_type);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.ticketDetails == null ? null : ctx.ticketDetails.travel_date == null ? null : (tmp_4_0 = ctx.ticketDetails.travel_date.split("/")) == null ? null : tmp_4_0[0]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](32, _c2)[+(ctx.ticketDetails == null ? null : ctx.ticketDetails.travel_date == null ? null : (tmp_5_0 = ctx.ticketDetails.travel_date.split("/")) == null ? null : tmp_5_0[1]) - 1], " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 28, ctx.ticketDetails == null ? null : ctx.ticketDetails.origin == null ? null : ctx.ticketDetails.origin.substring(0, 3)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.ticketDetails == null ? null : ctx.ticketDetails.origin);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.ticketDetails == null ? null : ctx.ticketDetails.dep_time);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.formatDuration(ctx.ticketDetails == null ? null : ctx.ticketDetails.duration));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](44, 30, ctx.ticketDetails == null ? null : ctx.ticketDetails.destination == null ? null : ctx.ticketDetails.destination.substring(0, 3)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.ticketDetails == null ? null : ctx.ticketDetails.destination);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.ticketDetails == null ? null : ctx.ticketDetails.arr_time);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("transform", ctx.showDetails ? "rotate(180deg)" : "rotate(0deg)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.showDetails ? "Less Details" : "More Details", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showDetails);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Passenger details (", (ctx.ticketDetails == null ? null : ctx.ticketDetails.passenger_details == null ? null : ctx.ticketDetails.passenger_details.length) || 0, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.ticketDetails == null ? null : ctx.ticketDetails.passenger_details);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.emailId);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("placeholder", !ctx.selectedState);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.selectedState || "Select your state", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showBackdrop", true)("dismissOnSelect", true)("arrow", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u20B9", ctx.fareBreakup_hash == null ? null : ctx.fareBreakup_hash["Payble Amount"], "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isOpen", ctx.showConfirmationPopup)("initialBreakpoint", 1)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](33, _c3));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonModal, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonPopover, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonBackButton, _angular_common__WEBPACK_IMPORTED_MODULE_13__.UpperCasePipe],
  styles: ["[_nghost-%COMP%] {\n  --ion-background-color: #F0F0F5;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: #F0F0F5;\n}\n\nion-header[_ngcontent-%COMP%]::after {\n  display: none;\n}\n\n.review-toolbar[_ngcontent-%COMP%] {\n  --background: #ffffff !important;\n  --color: #1e1e1e;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  border-bottom: 1px solid #E0E0E0;\n}\n\n.review-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  color: #1E1E1E;\n  font-weight: 700;\n  font-size: 18px;\n  text-align: start;\n  align-items: center;\n  text-align-last: center;\n}\n\n.review-toolbar[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%] {\n  --color: $color-dark-text;\n}\n\nion-footer[_ngcontent-%COMP%] {\n  background: transparent;\n  box-shadow: none;\n  --background: transparent;\n}\n\n.main-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  margin: 16px 16px 12px;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background: #191966;\n  padding: 12px 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.card-header[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.card-header[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background: #F5C518;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.card-header[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  fill: #191966;\n}\n.card-header[_ngcontent-%COMP%]   .brand-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.card-header[_ngcontent-%COMP%]   .brand-info[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #ffffff;\n  line-height: 1.3;\n}\n.card-header[_ngcontent-%COMP%]   .brand-info[_ngcontent-%COMP%]   .service-name[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.6);\n}\n.card-header[_ngcontent-%COMP%]   .date-info[_ngcontent-%COMP%] {\n  text-align: right;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n.card-header[_ngcontent-%COMP%]   .date-info[_ngcontent-%COMP%]   .date-num[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #ffffff;\n  line-height: 1;\n}\n.card-header[_ngcontent-%COMP%]   .date-info[_ngcontent-%COMP%]   .date-month[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.65);\n}\n\n.route-row[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 14px 8px 12px;\n  align-items: flex-start;\n}\n.route-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.route-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 3px;\n}\n.route-col[_ngcontent-%COMP%]   .city-code[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  text-transform: uppercase;\n  line-height: 1;\n}\n.route-col[_ngcontent-%COMP%]   .city-name[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9E9E9E;\n}\n.route-col[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1E1E1E;\n  margin-top: 6px;\n}\n.route-col[_ngcontent-%COMP%]   .time-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9E9E9E;\n}\n.route-col.source[_ngcontent-%COMP%]   .city-code[_ngcontent-%COMP%] {\n  color: #191966;\n}\n.route-col.dest[_ngcontent-%COMP%]   .city-code[_ngcontent-%COMP%] {\n  color: #F5C518;\n}\n\n.route-mid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 2px;\n}\n.route-mid[_ngcontent-%COMP%]   .bus-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  fill: #191966;\n  margin-bottom: 4px;\n}\n\n.route-line-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  gap: 2px;\n}\n\n.dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.dot.blue[_ngcontent-%COMP%] {\n  background: #191966;\n}\n.dot.yellow[_ngcontent-%COMP%] {\n  background: #F5C518;\n}\n\n.dashed-line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 2px;\n  background-image: repeating-linear-gradient(to right, #191966 0px, #191966 6px, transparent 6px, transparent 12px);\n}\n\n.duration[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9E9E9E;\n  margin-top: 4px;\n}\n\n.dotted-divider[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n  background-image: repeating-linear-gradient(to right, #E0E0E0 0px, #E0E0E0 6px, transparent 6px, transparent 12px);\n}\n\n.solid-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #E0E0E0;\n}\n\n.less-details-row[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.less-details-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #191966;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.less-details-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  fill: #191966;\n}\n\n.pick-drop-section[_ngcontent-%COMP%] {\n  padding: 12px 20px 16px;\n}\n.pick-drop-section[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.pick-drop-section[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n}\n\n.pick-drop-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9E9E9E;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n\n.pick-drop-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1E1E1E;\n  margin-top: 4px;\n}\n\n.pick-drop-address[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9E9E9E;\n  margin-top: 3px;\n  line-height: 1.5;\n}\n\n.pick-drop-gap[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n\n.passenger-section[_ngcontent-%COMP%] {\n  padding: 14px 16px 16px;\n}\n.passenger-section[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n}\n.passenger-section[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1E1E1E;\n  display: block;\n  margin-bottom: 10px;\n}\n\n.passenger-row[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  align-items: center;\n  margin-bottom: 0;\n}\n\n.pax-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: #9E9E9E;\n}\n\n.pax-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 15px;\n  font-weight: 700;\n  color: #1E1E1E;\n  margin-top: 2px;\n}\n\n.seat-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n.seat-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9E9E9E;\n  margin-bottom: 4px;\n}\n\n.seat-badge[_ngcontent-%COMP%] {\n  background: #191966;\n  color: #ffffff;\n  font-size: 13px;\n  font-weight: 700;\n  padding: 12px 24px;\n  border-radius: 6px;\n}\n\n.status-warning[_ngcontent-%COMP%] {\n  border: 1.5px solid #F5C518;\n  background: #FFFDE7;\n  border-radius: 8px;\n  padding: 10px 12px;\n  margin: 12px 10px 2px 10px;\n  font-size: 13px;\n  color: #7B6200;\n}\n\n.section-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  padding: 14px 16px;\n  margin: 0 2px 12px;\n}\n.section-card[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.section-card[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.field-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 700;\n  color: #1E1E1E;\n  margin-bottom: 6px;\n  margin-top: 12px;\n}\n.field-label[_ngcontent-%COMP%]:first-of-type {\n  margin-top: 0;\n}\n\n.field-value-box[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 8px;\n  padding: 2px 12px;\n  font-size: 14px;\n  font-weight: 700;\n  color: #1E1E1E;\n  border: 1px solid #E0E0E0;\n}\n\n.field-note[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: #9E9E9E;\n  margin-top: 5px;\n  margin-bottom: 4px;\n}\n\n.select-box[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #E0E0E0;\n  border-radius: 8px;\n  min-height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 14px;\n}\n\n.select-box[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  width: 100%;\n  --placeholder-color: #8a8a8a;\n  --placeholder-opacity: 1;\n  font-size: 14px;\n  font-weight: 600;\n  color: #191966;\n}\n\n  .state-select-popover {\n  --width: var(--state-popover-width, 260px) !important;\n  --max-height: 280px !important;\n  --height: auto !important;\n  --offset-y: 0px !important;\n  --offset-x: 0px !important;\n  --background: #ffffff;\n  --box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n}\n  .state-select-popover::part(content) {\n  border-radius: 12px !important;\n  overflow: hidden;\n}\n  .state-select-popover .popover-viewport {\n  max-height: 280px !important;\n  overflow-y: auto !important;\n  border-radius: 12px !important;\n}\n  .state-select-popover ion-list {\n  padding: 0 !important;\n  background: #ffffff;\n}\n  .state-select-popover ion-item {\n  --background: #ffffff;\n  --color: #1E1E1E;\n  --padding-start: 16px;\n  --inner-padding-end: 16px;\n  --min-height: 44px;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.policy-row[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 14px 16px;\n  margin: 20px 16px 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  cursor: pointer;\n}\n.policy-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #191966;\n}\n.policy-row[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  fill: #1E1E1E;\n}\n\n.tc-row[_ngcontent-%COMP%] {\n  padding: 0 16px;\n  margin-bottom: 8px;\n}\n.tc-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.tc-note[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #555555;\n}\n\n.tc-highlight[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #191966;\n  padding-left: 2px;\n}\n\n.bottom-spacer[_ngcontent-%COMP%] {\n  height: 80px;\n}\n\n.bottom-pay-bar[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 10px 16px;\n  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);\n}\n\n.pay-bar-inner[_ngcontent-%COMP%] {\n  align-items: center;\n  margin: 0;\n}\n.pay-bar-inner[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.fare-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.fare-info[_ngcontent-%COMP%]   .fare-amount[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  color: #1E1E1E;\n  line-height: 1.1;\n}\n.fare-info[_ngcontent-%COMP%]   .view-breakup[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #191966;\n  cursor: pointer;\n}\n\n.pay-btn[_ngcontent-%COMP%] {\n  background: #F5C518;\n  color: #191966;\n  font-size: 15px;\n  font-weight: 700;\n  border: none;\n  border-radius: 8px;\n  padding: 13px 20px;\n  cursor: pointer;\n  white-space: nowrap;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.confirmation-modal[_ngcontent-%COMP%] {\n  --height: auto;\n  --border-radius: 24px 24px 0 0;\n}\n\n.confirmation-sheet[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.header-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.contact-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #000;\n  font-weight: 700;\n}\n\n.validity-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 10px;\n  padding: 8px 12px;\n  border-radius: 8px;\n  background: #fff8e1;\n  color: #ff6f00;\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.note-text[_ngcontent-%COMP%], \n.contact-text[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: 13px;\n  line-height: 16px;\n  color: #4A4A4A;\n}\n\n.button-row[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n\n.button-row[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  height: 48px;\n  font-size: 18px;\n  font-weight: 600;\n  text-transform: none;\n}\n\n.button-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]:first-child   ion-button[_ngcontent-%COMP%] {\n  --background: #F2F2F2;\n  --border-color: #F2F2F2;\n  --color: #311B92;\n  --border-radius: 4px;\n}\n\n.button-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]:last-child   ion-button[_ngcontent-%COMP%] {\n  --background: #FFD400;\n  --border-color: #FFD400;\n  --color: #000000;\n  --border-radius: 4px;\n}\n\n.card-circular-corner[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: #F0F0F5;\n  position: absolute;\n  bottom: -12px;\n  left: -12px;\n}\n\n.card-circular-corner[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: #F0F0F5;\n  position: absolute;\n  right: -12px;\n  bottom: -12px;\n}"]
});

/***/ },

/***/ 29780
/*!*****************************************************************!*\
  !*** ./node_modules/capacitor-razorpay/dist/esm/definitions.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ },

/***/ 71602
/*!***********************************************************!*\
  !*** ./node_modules/capacitor-razorpay/dist/esm/index.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Checkout: () => (/* reexport safe */ _web__WEBPACK_IMPORTED_MODULE_1__.Checkout),
/* harmony export */   CheckoutWeb: () => (/* reexport safe */ _web__WEBPACK_IMPORTED_MODULE_1__.CheckoutWeb)
/* harmony export */ });
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definitions */ 29780);
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web */ 2408);


//# sourceMappingURL=index.js.map

/***/ },

/***/ 2408
/*!*********************************************************!*\
  !*** ./node_modules/capacitor-razorpay/dist/esm/web.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Checkout: () => (/* binding */ Checkout),
/* harmony export */   CheckoutWeb: () => (/* binding */ CheckoutWeb)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definitions */ 29780);


class CheckoutWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.WebPlugin {
  constructor() {
    super();
  }
  echo(options) {
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('ECHO', options);
      return options;
    })();
  }
  open(options) {
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(options);
      return new Promise((resolve, reject) => {
        var _a;
        var razorpay;
        //add handlers to options to get the success response
        var finalOps = options;
        finalOps['handler'] = function (res) {
          console.log(res.razorpay_payment_id);
          resolve({
            response: res
          });
        };
        finalOps['modal.ondismiss'] = function () {
          reject(JSON.stringify({
            code: 2,
            description: 'Payment Canceled by User'
          }));
        };
        var retryCount = 0;
        if (finalOps.hasOwnProperty('retry')) {
          if (finalOps.retry.enabled === true) {
            retryCount = finalOps.retry.max_count;
          }
        }
        //get the first script tag in the document
        var rjs = document.getElementsByTagName('script')[0];
        //create a HTMLScriptElement object for rzp script injection
        var rzpjs = document.createElement('script');
        rzpjs.id = 'rzp-jssdk';
        rzpjs.setAttribute('src', 'https://checkout.razorpay.com/v1/checkout.js');
        (_a = rjs.parentNode) === null || _a === void 0 ? void 0 : _a.appendChild(rzpjs);
        rzpjs.addEventListener('load', () => {
          try {
            razorpay = new window.Razorpay(finalOps);
            razorpay.open();
            razorpay.on('payment.failed', res => {
              var _a;
              retryCount = retryCount - 1;
              if (retryCount < 0) {
                console.log(res);
                (_a = rjs.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(rzpjs);
                reject(res.error);
              }
            });
          } catch (err) {
            reject({
              response: err
            });
          }
        });
      });
      // var rjs = document.getElementsByTagName('script')[0]
      // var razorpay;
      // var js:HTMLScriptElement = document.createElement('script')
      // js.id = 'rzp-jssdk'
      // js.setAttribute('src','https://checkout.razorpay.com/v1/checkout.js')
      // document.body.appendChild(js);
      // document.body.appendChild(js);
      // rjs.parentNode?.appendChild(js)
      // rjs.addEventListener('load',()=>{
      //   try{
      //     razorpay = new (window as any).Razorpay(options)
      //     razorpay.open()
      //     razorpay.on('payment.failed',function(response:any){
      //         console.log('payment failed')
      //         console.log(response)
      //     })
      //   }catch(err){
      //     document.body.removeChild(js)
      //     return{
      //       response: "Problem opening checkouts"
      //     }
      //   }
      // })
      // return {
      //   response:options.key
      // }
    })();
  }
}
const Checkout = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)('Checkout', {
  web: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 2408)).then(m => new m.CheckoutWeb())
});


//# sourceMappingURL=web.js.map

/***/ }

}]);