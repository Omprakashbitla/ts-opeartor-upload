"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[6549],{

/***/ 4970:
/*!********************************************************************************!*\
  !*** ./node_modules/@capacitor-community/firebase-analytics/dist/esm/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirebaseAnalytics: () => (/* binding */ FirebaseAnalytics)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 17500);

const FirebaseAnalytics = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)("FirebaseAnalytics", {
  web: () => __webpack_require__.e(/*! import() */ 4496).then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 24496)).then(m => new m.FirebaseAnalyticsWeb())
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 17500:
/*!**************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/firebase-analytics/dist/esm/definitions.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 30072:
/*!**********************************************************!*\
  !*** ./src/app/price-breakup/price-breakup.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PriceBreakupComponent: () => (/* binding */ PriceBreakupComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_global_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/global-data.service */ 7516);
var _PriceBreakupComponent;










function PriceBreakupComponent_div_12_ion_row_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Base Fare ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PriceBreakupComponent_div_12_ion_row_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", key_r1, " ");
  }
}
function PriceBreakupComponent_div_12_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, PriceBreakupComponent_div_12_ion_row_1_span_2_Template, 2, 0, "span", 13)(3, PriceBreakupComponent_div_12_ion_row_1_span_3_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-col", 14)(5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", key_r1 == "Ticket fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", key_r1 != "Ticket fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx_r1.currencySym, "", ctx_r1.fareBreakup_hash[key_r1].toFixed(2), " ");
  }
}
function PriceBreakupComponent_div_12_hr_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "hr", 17);
  }
}
function PriceBreakupComponent_div_12_ion_row_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 12)(2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Total Amount Payable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-col", 14)(5, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx_r1.currencySym, "", ctx_r1.fareBreakup_hash[key_r1].toFixed(2), " ");
  }
}
function PriceBreakupComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PriceBreakupComponent_div_12_ion_row_1_Template, 7, 4, "ion-row", 10)(2, PriceBreakupComponent_div_12_hr_2_Template, 1, 0, "hr", 11)(3, PriceBreakupComponent_div_12_ion_row_3_Template, 7, 2, "ion-row", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakup_hash[key_r1] != 0 && key_r1 != "Payble Amount" && key_r1 != "Total Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", key_r1 == "Payble Amount" || key_r1 != "Total Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", key_r1 == "Payble Amount" || key_r1 != "Total Fare");
  }
}
class PriceBreakupComponent {
  constructor(modalCtrl, commonStorage, util, navParams, dateService, commonService, navCtrl, apiFactory, globalData) {
    this.modalCtrl = modalCtrl;
    this.commonStorage = commonStorage;
    this.util = util;
    this.dateService = dateService;
    this.commonService = commonService;
    this.navCtrl = navCtrl;
    this.apiFactory = apiFactory;
    this.globalData = globalData;
    this.reservationData = [];
    this.onwardSeatDetails = [];
    this.returnSeatDetails = [];
    this.isReturn = false;
    this.isBima = false;
    this.payFromWallet = false;
    this.phoneBooking = false;
    this.idProofCnt = 0;
    this.promoCoupons = [];
    this.offersDropDown = [];
    this.showOfferCoupon = true;
    this.appliedcoupon1 = false;
    this.appliedcoupon2 = false;
    this.smartMilesDiscount = 0;
    this.smartMileCoupon = '';
    this.pnrDiscountAplied = false;
    this.passengerDetails = [];
    this.privCardNumber = "";
    this.isFromCoachLayout = false;
    this.dd_p = navParams.get('filData');
    this.metaData = this.commonStorage.localGet("metaData");
    // console.log(this.dd_p,this.globalData)
    this.isReturn = navParams.get('isReturn');
    this.idProof = navParams.get('idProof');
    this.checkCancelProtect = navParams.get('checkCancelProtect');
    this.payFromWallet = navParams.get('payFromWallet');
    this.phoneBooking = navParams.get('phoneBooking');
    this.appliedcoupon2 = navParams.get('appliedcoupon1');
    this.appliedcoupon1 = navParams.get('appliedcoupon1');
    this.appliedCouponname = navParams.get('appliedCouponname');
    this.smartMilesDiscount = navParams.get('smartMilesDiscount');
    this.smartMileCoupon = navParams.get('smartMileCoupon');
    this.pnrDiscountAplied = navParams.get('pnrDiscountAplied');
    this.quotePnrForm = navParams.get('quotePnrForm');
    this.privCardNumber = navParams.get('privCardNumber');
    this.idProofCnt = navParams.get('idProofCnt');
    this.promoCoupons = navParams.get('promoCoupons');
    this.appliedOfferCoupon = navParams.get('appliedOfferCoupon');
    this.is_cancel_protect = this.metaData.showCancelProtect;
    this.currencySym = this.commonStorage.localGet('metaData') ? this.commonStorage.localGet('metaData').currencySym : '₹';
    this.passengerDetails = this.commonStorage.localGet("passengerDetails");
    this.e_ticket_discount = this.commonStorage.getItem('deals').e_ticket_discount ? true : false;
    this.isBima = JSON.parse(localStorage.getItem('isBima'));
    this.reservationData = this.commonStorage.localGet("reservationData");
    this.reservationDataReturn = this.commonStorage.localGet("reservationDataReturn");
    this.isFromCoachLayout = navParams.get('isFromCoachLayout');
    this.onwardSeatDetails = navParams.get('onwardSeatDetails');
    this.returnSeatDetails = navParams.get('returnSeatDetails');
    this.offersDropDown = this.metaData.offersDropDown;
    for (var k = 0; k < this.offersDropDown.length; k++) {
      if (this.offersDropDown[k].id == '7') {
        this.offerType = '7';
      } else if (this.offersDropDown[k].id == '5') {
        this.offerType = '5';
      } else {
        this.offerType = '0';
      }
    }
  }
  ngOnInit() {
    let pathForBooking = '';
    if (this.isFromCoachLayout) {
      pathForBooking = "res_id=" + this.globalData.SELECTED_ROUTE.reservation_id;
    } else {
      pathForBooking = "res_id=" + this.globalData.RESERVATION_DATA.reserveId;
    }
    if (this.util.isWebApp()) {
      pathForBooking += "&native_app_type=6";
    } else {
      if (this.util.isIos()) {
        pathForBooking += "&native_app_type=9";
      } else {
        pathForBooking += "&native_app_type=10";
      }
    }
    pathForBooking += "&origin=" + this.globalData.SEARCH_DATA.originCity.id;
    pathForBooking += "&destination=" + this.globalData.SEARCH_DATA.destCity.id;
    if (!this.isFromCoachLayout) {
      pathForBooking += "&boarding_at=" + (this.reservationData.boardingStage ? this.reservationData.boardingStage.id : '');
      pathForBooking += "&drop_off=" + (this.reservationData.droppingStage ? this.reservationData.droppingStage.id : '');
    }
    pathForBooking += "&no_of_seats=" + this.onwardSeatDetails.length;
    if (this.paymentType) {
      pathForBooking += "&referral_code=&pay_gay_type=" + this.paymentType;
    }
    pathForBooking += "&is_mobile_app=true";
    if (this.isReturn) {
      pathForBooking += "&is_round_trip=true";
      if (!this.isFromCoachLayout) {
        pathForBooking += "&return_res_id=" + this.reservationDataReturn.reserveId;
      } else {
        pathForBooking += "&return_res_id=" + this.globalData.SELECTED_ROUTE_RETURN.reservation_id;
      }
    } else {
      pathForBooking += "&is_round_trip=false";
    }
    if (this.isBima) {
      pathForBooking += "&is_bima=true";
    }
    if (this.payFromWallet) {
      pathForBooking += "&is_wallet=true";
    }
    if (this.phoneBooking) {
      pathForBooking += "&is_e_phone_booking=true";
      pathForBooking += "&is_wallet=true";
    }
    if (this.is_cancel_protect && this.metaData.showCancelProtect) {
      pathForBooking += "&is_cancel_protect=" + this.checkCancelProtect;
    }
    let seatNumbers = [];
    for (let s of this.onwardSeatDetails) {
      seatNumbers.push(s.seat_number);
    }
    let seatNumbersReturn = [];
    for (let s of this.returnSeatDetails) {
      seatNumbersReturn.push(s.seat_number);
    }
    let promoCoupon;
    if (this.idProof && this.metaData['couponIdProofDetails'] || this.idProofCnt > 0) {
      let promoCoupon = {};
      this.idProofCnt = 0;
      promoCoupon['coupon_code'] = this.appliedOfferCoupon && this.offerType != '2' && this.offerType == '7' ? this.appliedOfferCoupon.coupon_code : '';
      promoCoupon["id_proof_details"] = this.idProof;
      if (this.idProof != '') promoCoupon["id_proof_details"] = this.idProof;
    } else {
      promoCoupon = this.appliedOfferCoupon && this.offerType != '2' && this.offerType == '7' ? this.appliedOfferCoupon.coupon_code : '';
    }
    if (promoCoupon != '') {
      this.appliedCouponname = promoCoupon;
      this.appliedcoupon1 = true;
    }
    let data = {
      "seat_numbers": seatNumbers,
      "no_of_seats": this.onwardSeatDetails.length,
      "return_seat_numbers": seatNumbersReturn,
      "use_smart_miles": this.smartMilesDiscount && this.smartMilesDiscount > 0 ? true : false,
      "passenger_titles": {},
      "boarding_at": !this.isFromCoachLayout ? this.reservationData.boardingStage.id : '',
      "drop_off": !this.isFromCoachLayout && this.reservationData.droppingStage ? this.reservationData.droppingStage.id : '',
      "return_boarding_at": !this.isFromCoachLayout && this.isReturn ? this.reservationDataReturn.boardingStage.id : '',
      "return_dropoff": !this.isFromCoachLayout && this.isReturn ? this.reservationDataReturn.droppingStage ? this.reservationDataReturn.droppingStage.id : '' : '',
      "offer_coupon": this.appliedOfferCoupon && (this.smartMileCoupon == '' || this.smartMileCoupon == undefined) && this.offerType != '7' && this.offerType != '2' ? this.appliedOfferCoupon.coupon_code : '',
      "promo_coupon": promoCoupon,
      "previous_pnr_details": this.pnrDiscountAplied ? {
        "previous_pnr": this.quotePnrForm.value.pnrnumber,
        "phone_number": this.quotePnrForm.value.mobileno
      } : {},
      "coupon_details": this.passengerDetails && this.passengerDetails.coupon_details ? this.passengerDetails.coupon_details : [],
      "use_e_discount": this.e_ticket_discount,
      "priv_card_number": this.privCardNumber,
      "is_cancel_protect": this.checkCancelProtect
    };
    this.apiFactory.fareBreakUp(data, pathForBooking).subscribe(res => {
      this.fareBreakup_hash = res.fare_break_up_hash;
    }, err => {});
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }
  getObjectKeys(obj) {
    if (obj == null) {
      return [];
    }
    return Object.keys(obj);
  }
}
_PriceBreakupComponent = PriceBreakupComponent;
_PriceBreakupComponent.ɵfac = function PriceBreakupComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PriceBreakupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_0__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_1__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavParams), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_2__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_4__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_global_data_service__WEBPACK_IMPORTED_MODULE_5__.GlobalDataService));
};
_PriceBreakupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _PriceBreakupComponent,
  selectors: [["app-price-breakup"]],
  decls: 13,
  vars: 1,
  consts: [[2, "--background", "white"], [2, "margin", "10px 0px 10px 10px"], [2, "display", "flex", "align-items", "center"], [1, "themeone-bg-cl", 2, "font-size", "18px", "font-weight", "700", "color", "#333333"], [2, "float", "right"], ["slot", "end"], ["mode", "md", 3, "click"], ["name", "close", 2, "color", "#ADADAD", "height", "24px", "width", "24px"], [1, "search-box", 2, "margin", "0px 10px"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "divider", 4, "ngIf"], ["size", "8", 2, "display", "flex", "align-items", "center"], ["class", "themeone-bg-cl-subtxt", 4, "ngIf"], ["size", "4"], [1, "themeone-bg-cl-subtxt", 2, "float", "right"], [1, "themeone-bg-cl-subtxt"], [1, "divider"], [1, "themeone-footer-txt"], [1, "themeone-footer-txt", 2, "float", "right"]],
  template: function PriceBreakupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-content", 0)(1, "div", 1)(2, "ion-row")(3, "ion-col", 2)(4, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Price Breakup ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-col")(7, "span", 4)(8, "ion-buttons", 5)(9, "ion-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PriceBreakupComponent_Template_ion_button_click_9_listener() {
        return ctx.dismiss();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "ion-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "ion-card", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, PriceBreakupComponent_div_12_Template, 4, 3, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.getObjectKeys(ctx.fareBreakup_hash));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf],
  styles: [".search-box[_ngcontent-%COMP%] {\n  margin: 0px;\n  box-shadow: none;\n}\n\n.themeone-bg-cl-[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #333333;\n}\n\n.themeone-bg-cl-subtxt[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #333333;\n}\n\n.themeone-footer-txt[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #333333;\n}\n\n.divider[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n  margin-left: 12px;\n  margin-right: 12px;\n}"]
});

/***/ }),

/***/ 47402:
/*!********************************************************!*\
  !*** ./src/app/services/firebase-analytics.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirebaseAnalyticsService: () => (/* binding */ FirebaseAnalyticsService)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor-community/firebase-analytics */ 4970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _common_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common-storage */ 96970);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _appdata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appdata */ 40172);

var _FirebaseAnalyticsService;





class FirebaseAnalyticsService {
  constructor(commonStorage, platform, appdata) {
    this.commonStorage = commonStorage;
    this.platform = platform;
    this.appdata = appdata;
    const localData = this.commonStorage.localGet('metaData');
    this.operatorName = localData ? localData.operatorName : null;
    // Initialize Firebase Analytics
    this.initializeAnalytics();
  }
  initializeAnalytics() {
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const firebaseInitOptions = {
        apiKey: 'AIzaSyADe1YXngQ8NPrMkDyy1UBtOH1XqhqMsgA',
        authDomain: 'customer-app---mweb.firebaseapp.com',
        projectId: 'customer-app---mweb',
        storageBucket: 'customer-app---mweb.appspot.com',
        messagingSenderId: '697968204843',
        appId: '1:697968204843:web:2acfadff1e6821c0eede6e',
        measurementId: 'G-ZFC9S0PR6W'
      };
      try {
        yield _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_1__.FirebaseAnalytics.initializeFirebase(firebaseInitOptions);
      } catch (error) {
        console.error('Error initializing Firebase Analytics:', error);
      }
    })();
  }
  // Log custom event
  logCustomEvent(eventName, params) {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.operatorName) {
        params['OPERATOR_NAME'] = _this.operatorName;
      }
      try {
        if (_this.appdata.isIOS) {
          // Log event on native platforms
          yield _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_1__.FirebaseAnalytics.logEvent({
            name: eventName,
            params
          });
        } else if (_this.appdata.isWEBAPP) {
          // Log event on web
        }
      } catch (error) {
        console.error(`Error logging custom event "${eventName}":`, error);
      }
    })();
  }
}
_FirebaseAnalyticsService = FirebaseAnalyticsService;
_FirebaseAnalyticsService.ɵfac = function FirebaseAnalyticsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FirebaseAnalyticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_common_storage__WEBPACK_IMPORTED_MODULE_2__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_appdata__WEBPACK_IMPORTED_MODULE_3__.AppData));
};
_FirebaseAnalyticsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: _FirebaseAnalyticsService,
  factory: _FirebaseAnalyticsService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);