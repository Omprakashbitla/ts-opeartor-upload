"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[6857],{

/***/ 15634:
/*!***************************************************************************************!*\
  !*** ./src/app/confirm-cancellation-component/confirm-cancellation-component.page.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmCancellationComponentPage: () => (/* binding */ ConfirmCancellationComponentPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 87330);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/theme-service */ 99692);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 45564);
var _ConfirmCancellationComponentPage;







function ConfirmCancellationComponentPage_ng_container_0_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" Your refund request of ", ctx_r1.currencySym, " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 2, ctx_r1.refundDetails.refund_amount, "1.2-2"), " (Total fare of the ticket - cancellation charges) has been processed and will reflect in your (bank account/wallet) soon. ");
  }
}
function ConfirmCancellationComponentPage_ng_container_0_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " A coupon code has been sent to your E - mail Id. Please make use of this code next time while making payment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ConfirmCancellationComponentPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 1)(3, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Ticket Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-buttons", 2)(6, "ion-back-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConfirmCancellationComponentPage_ng_container_0_Template_ion_back_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.home());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-content")(8, "ion-card", 4)(9, "div", 5)(10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Refund Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-row")(13, "ion-col", 7)(14, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Ticket number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-col", 7)(17, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "ion-row")(20, "ion-col", 7)(21, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Seat numbers");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "ion-col", 7)(24, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "ion-row")(27, "ion-col", 7)(28, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Refund amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "ion-col", 7)(31, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](33, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "ion-row")(35, "ion-col", 7)(36, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Cancellation charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "ion-col", 7)(39, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](41, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, ConfirmCancellationComponentPage_ng_container_0_div_43_Template, 3, 5, "div", 10)(44, ConfirmCancellationComponentPage_ng_container_0_div_44_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.ticket_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.refundDetails.seat_numbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](33, 8, ctx_r1.refundDetails.refund_amount, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](41, 11, ctx_r1.refundDetails.cancellation_charges, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.couponCancel);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.couponCancel);
  }
}
function ConfirmCancellationComponentPage_ng_container_1_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" Your Refund for ", ctx_r1.currencySym, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 2, ctx_r1.refundDetails.refund_amount, "1.2-2"), " will be refunded to the source in 5-10 working days. ");
  }
}
function ConfirmCancellationComponentPage_ng_container_1_div_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " A coupon code has been sent to your E-mail Id. Please make use of this code next time while making payment. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ConfirmCancellationComponentPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-header", 12)(2, "ion-toolbar", 13)(3, "ion-row")(4, "ion-col", 14)(5, "ion-buttons")(6, "ion-back-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConfirmCancellationComponentPage_ng_container_1_Template_ion_back_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.home());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-col", 15)(8, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Cancelling Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "ion-col", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ion-content", 16)(12, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ion-card", 19)(15, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 22)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ion-card", 4)(21, "ion-card", 23)(22, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Refund Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "ion-row")(25, "ion-col", 7)(26, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Ticket Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "ion-col", 7)(29, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Seat Numbers");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "ion-row")(32, "ion-col", 7)(33, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "ion-col", 7)(36, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "ion-row")(39, "ion-col", 7)(40, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Refund Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "ion-col", 7)(43, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Cancellation Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "ion-row")(46, "ion-col", 7)(47, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](49, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "ion-col", 7)(51, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](53, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, ConfirmCancellationComponentPage_ng_container_1_div_55_Template, 3, 5, "div", 10)(56, ConfirmCancellationComponentPage_ng_container_1_div_56_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "ion-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConfirmCancellationComponentPage_ng_container_1_Template_ion_button_click_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.navigateToHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Book Another Ticket ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "ion-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConfirmCancellationComponentPage_ng_container_1_Template_ion_button_click_59_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.navigateToWallet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "See my Wallet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", ctx_r1.bookingDetails.origin, " to ", ctx_r1.bookingDetails.destination, " - ", ctx_r1.bookingDetails.pnrNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.ticket_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.refundDetails.seat_numbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](49, 11, ctx_r1.refundDetails.refund_amount, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](53, 14, ctx_r1.refundDetails.cancellation_charges, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.couponCancel);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.couponCancel);
  }
}
class ConfirmCancellationComponentPage {
  constructor(route, navCtrl, router, theme, commonStorage, commonService) {
    this.route = route;
    this.navCtrl = navCtrl;
    this.router = router;
    this.theme = theme;
    this.commonStorage = commonStorage;
    this.commonService = commonService;
    this.ticketDetails = {};
    this.couponCancel = false;
    this.route.queryParams.subscribe(params => {
      this.ticketDetails = params["ticketDetails"];
      this.refundDetails = params['refundDetails'];
      this.couponCancel = params['couponCancel'];
      this.currencySym = this.commonStorage.getItem('metaData').currencySym;
    });
    this.metaData = this.commonStorage.getItem("metaData");
    this.bookingDetails = this.commonStorage.getItem('bookingDetails');
  }
  ngOnInit() {}
  home() {
    // this.navCtrl.navigateRoot('tabs/home')
    this.router.navigate(['/tabs/home']);
  }
  navigateToHome() {
    this.router.navigate(['/home']);
  }
  navigateToWallet() {
    this.router.navigate(['/wallet']);
  }
}
_ConfirmCancellationComponentPage = ConfirmCancellationComponentPage;
_ConfirmCancellationComponentPage.ɵfac = function ConfirmCancellationComponentPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConfirmCancellationComponentPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_1__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService));
};
_ConfirmCancellationComponentPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _ConfirmCancellationComponentPage,
  selectors: [["app-confirm-cancellation-component"]],
  standalone: false,
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], ["mode", "md", 2, "--background", "#191966", "color", "white"], ["slot", "start"], [3, "click"], [1, "card-1"], [1, "passenger-body", "grey-box"], [1, "Contact-details"], ["width-50", ""], [1, "small"], [1, "small", "bold"], ["class", "cancel-summary", 4, "ngIf"], [1, "cancel-summary"], [1, "ourbustheme"], ["mode", "md", 2, "--background", "white", "color", "white"], ["size", "2"], ["size", "8", 2, "display", "flex", "align-items", "center", "text-align", "center"], [1, "ourbustheme", 2, "--background", "#fafafa"], [1, "OurBus_Cancel"], ["src", "././assets/icon/OurBus_Cancel_.svg", "alt", ""], [1, "OurBus_Ori_dest"], [1, "OurBus_img"], ["src", "././assets/icon/OuBus_Ori_des.svg", "alt", ""], [1, "OurBus_text"], [1, "passenger-body", "OurBus_grey-box"], ["mode", "md", "expand", "block", 1, "OurBus_login-btn", 3, "click"], ["fill", "outline", "mode", "md", "expand", "block", 1, "ourbus-outline-btn", 3, "click"]],
  template: function ConfirmCancellationComponentPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ConfirmCancellationComponentPage_ng_container_0_Template, 45, 14, "ng-container", 0)(1, ConfirmCancellationComponentPage_ng_container_1_Template, 61, 17, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "" || ctx.metaData.msiteFolder == "seabirdTheme" || ctx.metaData.msiteFolder == "cbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonBackButton, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe],
  styles: ["h4[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.cancel-summary[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin-bottom: 10px;\n  text-align: justify;\n  font-size: 13px;\n  padding-top: 12px;\n}\n\n.pass[_ngcontent-%COMP%] {\n  margin: 12px;\n}\n\n.pass[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  font-size: 1.2rem;\n  margin: 0;\n  position: relative;\n  background-color: #ffdd21;\n  color: #000;\n}\n\n.pass[_ngcontent-%COMP%]   .passenger-body[_ngcontent-%COMP%] {\n  padding: 0 10px 10px 10px;\n}\n\n.pass[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 10px 10px 0 0;\n  font-size: 1.7em;\n  padding: 20px 5px 0;\n}\n\n.pass[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  background-color: #fdfdfd;\n  padding: 0;\n  margin: 0;\n}\n\n.small[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n\n.bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --ion-background-color: #f7f9fb;\n}\n\n.passengers[_ngcontent-%COMP%] {\n  margin: 12px;\n}\n\n.passengers[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  font-size: 1.2rem;\n  margin: 0;\n  position: relative;\n  background-color: #efefef;\n  color: #111;\n}\n\n.passengers[_ngcontent-%COMP%]   .passenger-body[_ngcontent-%COMP%] {\n  padding: 0 10px 10px 10px;\n}\n\n.passenger-body[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  margin-bottom: -8px;\n}\n\n.passengers[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 10px 10px 0 0;\n  font-size: 1.7em;\n  padding: 20px 5px 0;\n}\n\n.passengers[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  background-color: #fdfdfd;\n  padding: 0;\n  margin: 0;\n}\n\n.grey-box[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  background-color: #fdfdfd;\n  padding: 10px;\n  overflow: hidden;\n}\n\n.Contact-details[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: var(--sectionHeaderTextColor);\n}\n\n.card-1[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  margin: 0;\n  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0px, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0;\n  border-radius: 0;\n}\n\n.mr-md[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n\n.mr-tp-2[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n\n.mr-tp-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.OurBus_grey-box[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  background-color: #fdfdfd;\n  padding: 10px;\n  overflow: hidden;\n  border: none;\n  border-radius: 4px;\n}\n\n.OurBus_Cancel[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 10px;\n}\n\n.OurBus_Ori_dest[_ngcontent-%COMP%] {\n  --background:#EFEFEF;\n}\n\n.OurBus_Ori_dest[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 10px;\n  border: solid 0.5px gray;\n}\n\n.OurBus_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: auto;\n}\n\n.OurBus_text[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.OurBus_login-btn[_ngcontent-%COMP%] {\n  text-transform: initial;\n  --background: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bold;\n  font-size: 14px;\n  --border-radius: 10px;\n  height: 42px;\n  width: 94%;\n  margin-left: 10px;\n}\n\n.ourbus-outline-btn[_ngcontent-%COMP%] {\n  margin: 12px;\n  text-transform: initial;\n  color: var(--iconsAndButtonsColor);\n  --border-color:var(--iconsAndButtonsColor);\n  --border-width: 1px;\n  font-weight: bolder;\n  font-size: 14px;\n  height: 45px;\n  --border-radius: 10px;\n  --background-activated:#fff !important;\n  --background:#fff !important;\n}"]
});

/***/ }),

/***/ 46857:
/*!*****************************************************************************************!*\
  !*** ./src/app/confirm-cancellation-component/confirm-cancellation-component.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmCancellationComponentPageModule: () => (/* binding */ ConfirmCancellationComponentPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _confirm_cancellation_component_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-cancellation-component-routing.module */ 90040);
/* harmony import */ var _confirm_cancellation_component_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-cancellation-component.page */ 15634);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _ConfirmCancellationComponentPageModule;






class ConfirmCancellationComponentPageModule {}
_ConfirmCancellationComponentPageModule = ConfirmCancellationComponentPageModule;
_ConfirmCancellationComponentPageModule.ɵfac = function ConfirmCancellationComponentPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConfirmCancellationComponentPageModule)();
};
_ConfirmCancellationComponentPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _ConfirmCancellationComponentPageModule
});
_ConfirmCancellationComponentPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _confirm_cancellation_component_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfirmCancellationComponentPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ConfirmCancellationComponentPageModule, {
    declarations: [_confirm_cancellation_component_page__WEBPACK_IMPORTED_MODULE_1__.ConfirmCancellationComponentPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _confirm_cancellation_component_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfirmCancellationComponentPageRoutingModule]
  });
})();

/***/ }),

/***/ 90040:
/*!*************************************************************************************************!*\
  !*** ./src/app/confirm-cancellation-component/confirm-cancellation-component-routing.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmCancellationComponentPageRoutingModule: () => (/* binding */ ConfirmCancellationComponentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _confirm_cancellation_component_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-cancellation-component.page */ 15634);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _ConfirmCancellationComponentPageRoutingModule;




const routes = [{
  path: '',
  component: _confirm_cancellation_component_page__WEBPACK_IMPORTED_MODULE_0__.ConfirmCancellationComponentPage
}];
class ConfirmCancellationComponentPageRoutingModule {}
_ConfirmCancellationComponentPageRoutingModule = ConfirmCancellationComponentPageRoutingModule;
_ConfirmCancellationComponentPageRoutingModule.ɵfac = function ConfirmCancellationComponentPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConfirmCancellationComponentPageRoutingModule)();
};
_ConfirmCancellationComponentPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _ConfirmCancellationComponentPageRoutingModule
});
_ConfirmCancellationComponentPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ConfirmCancellationComponentPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ })

}]);