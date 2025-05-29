"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[6851],{

/***/ 16851:
/*!*********************************************************************************!*\
  !*** ./src/app/cancel-confirmation-ticket/cancel-confirmation-ticket.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CancelConfirmationTicketPageModule: () => (/* binding */ CancelConfirmationTicketPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _cancel_confirmation_ticket_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cancel-confirmation-ticket-routing.module */ 25450);
/* harmony import */ var _cancel_confirmation_ticket_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cancel-confirmation-ticket.page */ 89628);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _CancelConfirmationTicketPageModule;






class CancelConfirmationTicketPageModule {}
_CancelConfirmationTicketPageModule = CancelConfirmationTicketPageModule;
_CancelConfirmationTicketPageModule.ɵfac = function CancelConfirmationTicketPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CancelConfirmationTicketPageModule)();
};
_CancelConfirmationTicketPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _CancelConfirmationTicketPageModule
});
_CancelConfirmationTicketPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _cancel_confirmation_ticket_routing_module__WEBPACK_IMPORTED_MODULE_0__.CancelConfirmationTicketPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CancelConfirmationTicketPageModule, {
    declarations: [_cancel_confirmation_ticket_page__WEBPACK_IMPORTED_MODULE_1__.CancelConfirmationTicketPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _cancel_confirmation_ticket_routing_module__WEBPACK_IMPORTED_MODULE_0__.CancelConfirmationTicketPageRoutingModule]
  });
})();

/***/ }),

/***/ 25450:
/*!*****************************************************************************************!*\
  !*** ./src/app/cancel-confirmation-ticket/cancel-confirmation-ticket-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CancelConfirmationTicketPageRoutingModule: () => (/* binding */ CancelConfirmationTicketPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _cancel_confirmation_ticket_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cancel-confirmation-ticket.page */ 89628);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _CancelConfirmationTicketPageRoutingModule;




const routes = [{
  path: '',
  component: _cancel_confirmation_ticket_page__WEBPACK_IMPORTED_MODULE_0__.CancelConfirmationTicketPage
}];
class CancelConfirmationTicketPageRoutingModule {}
_CancelConfirmationTicketPageRoutingModule = CancelConfirmationTicketPageRoutingModule;
_CancelConfirmationTicketPageRoutingModule.ɵfac = function CancelConfirmationTicketPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CancelConfirmationTicketPageRoutingModule)();
};
_CancelConfirmationTicketPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _CancelConfirmationTicketPageRoutingModule
});
_CancelConfirmationTicketPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CancelConfirmationTicketPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 37762:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Geolocation: () => (/* binding */ Geolocation)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 61636);

const Geolocation = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Geolocation', {
  web: () => __webpack_require__.e(/*! import() */ 2920).then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 92920)).then(m => new m.GeolocationWeb())
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 61636:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 89628:
/*!*******************************************************************************!*\
  !*** ./src/app/cancel-confirmation-ticket/cancel-confirmation-ticket.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CancelConfirmationTicketPage: () => (/* binding */ CancelConfirmationTicketPage)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/geolocation */ 37762);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 87330);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/theme-service */ 99692);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 45564);
var _CancelConfirmationTicketPage;
















const _c0 = a0 => ({
  "seat-cancelled": a0
});
function CancelConfirmationTicketPage_ng_container_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "ion-row")(3, "ion-col", 12)(4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, " Cancellation Charges ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "ion-col", 14)(7, "ion-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CancelConfirmationTicketPage_ng_container_0_div_8_Template_ion_icon_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.showRefundType = !ctx_r2.showRefundType);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 16)(9, "ion-row", 17)(10, "ion-col", 18)(11, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "Cancel Percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "ion-col", 18)(14, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "ion-row", 17)(17, "ion-col", 18)(18, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19, "Cancel Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "ion-col", 18)(21, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "ion-row", 17)(24, "ion-col", 18)(25, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26, "Refund Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "ion-col", 18)(28, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "ion-row")(31, "ion-col", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CancelConfirmationTicketPage_ng_container_0_div_8_Template_ion_col_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.showRefundType = !ctx_r2.showRefundType);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "ion-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "ion-col", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CancelConfirmationTicketPage_ng_container_0_div_8_Template_ion_col_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.cancelTicket(ctx_r2.PassengerDetails));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "ion-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36, "Cancel Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", ctx_r2.cancelCouponDetails.cancel_percent, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, "", ctx_r2.cancelCouponDetails.cancelled_fare, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, "", ctx_r2.cancelCouponDetails.refund_amount, "");
  }
}
function CancelConfirmationTicketPage_ng_container_0_ion_card_12_p_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CancelConfirmationTicketPage_ng_container_0_ion_card_12_p_99_Template_p_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.gotoMaps(ctx_r2.ticketDetails.boarding_details));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "ion-icon", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "View on map ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function CancelConfirmationTicketPage_ng_container_0_ion_card_12_p_114_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CancelConfirmationTicketPage_ng_container_0_ion_card_12_p_114_Template_p_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.gotoMaps(ctx_r2.ticketDetails.drop_off_details));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "ion-icon", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "View on map ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function CancelConfirmationTicketPage_ng_container_0_ion_card_12_ion_col_129_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-col", 89)(1, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Cash coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function CancelConfirmationTicketPage_ng_container_0_ion_card_12_ion_col_130_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-col", 91)(1, "p", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.currencySym + "" + ctx_r2.fareBreakupDetails.cash_coupon.toFixed(2));
  }
}
function CancelConfirmationTicketPage_ng_container_0_ion_card_12_ion_col_131_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-col", 89)(1, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Bus Operator GST");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function CancelConfirmationTicketPage_ng_container_0_ion_card_12_ion_col_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-col", 91)(1, "p", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.currencySym + "" + ctx_r2.fareBreakupDetails.service_tax_amount.toFixed(2));
  }
}
function CancelConfirmationTicketPage_ng_container_0_ion_card_12_ion_col_133_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-col", 89)(1, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Transaction Charge");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function CancelConfirmationTicketPage_ng_container_0_ion_card_12_ion_col_134_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-col", 91)(1, "p", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.currencySym + "" + ctx_r2.fareBreakupDetails.transaction_charges.toFixed(2));
  }
}
function CancelConfirmationTicketPage_ng_container_0_ion_card_12_ion_col_135_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-col", 89)(1, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "CC Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function CancelConfirmationTicketPage_ng_container_0_ion_card_12_ion_col_136_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-col", 91)(1, "p", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.currencySym + "" + ctx_r2.fareBreakupDetails.cc_charges.toFixed(2));
  }
}
function CancelConfirmationTicketPage_ng_container_0_ion_card_12_ion_col_137_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-col", 89)(1, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Promotional Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function CancelConfirmationTicketPage_ng_container_0_ion_card_12_ion_col_138_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-col", 91)(1, "p", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", ctx_r2.currencySym + "" + ctx_r2.fareBreakupDetails.usable_promotional_balance.toFixed(2), " ");
  }
}
function CancelConfirmationTicketPage_ng_container_0_ion_card_12_ion_col_139_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-col", 89)(1, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Wallet Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function CancelConfirmationTicketPage_ng_container_0_ion_card_12_ion_col_140_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-col", 91)(1, "p", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.currencySym + "" + ctx_r2.fareBreakupDetails.wallet_balance.toFixed(2));
  }
}
function CancelConfirmationTicketPage_ng_container_0_ion_card_12_ion_col_149_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-col", 62)(1, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Transaction ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function CancelConfirmationTicketPage_ng_container_0_ion_card_12_ion_col_150_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-col", 62)(1, "p", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.ticketDetails.transaction_id);
  }
}
function CancelConfirmationTicketPage_ng_container_0_ion_card_12_ion_col_151_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-col", 62)(1, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Payment Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function CancelConfirmationTicketPage_ng_container_0_ion_card_12_ion_col_152_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-col", 62)(1, "p", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.ticketDetails.payment_method);
  }
}
function CancelConfirmationTicketPage_ng_container_0_ion_card_12_div_157_ion_row_1_ion_checkbox_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-checkbox", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function CancelConfirmationTicketPage_ng_container_0_ion_card_12_div_157_ion_row_1_ion_checkbox_13_Template_ion_checkbox_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.checkeBoxChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function CancelConfirmationTicketPage_ng_container_0_ion_card_12_div_157_ion_row_1_ion_checkbox_13_Template_ion_checkbox_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r6);
      const passenger_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](passenger_r7.checked, $event) || (passenger_r7.checked = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const passenger_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", passenger_r7.checked);
  }
}
function CancelConfirmationTicketPage_ng_container_0_ion_card_12_div_157_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 62)(2, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Passenger name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "ion-col", 103)(7, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " Seat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "ion-col", 104)(12, "ion-item", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, CancelConfirmationTicketPage_ng_container_0_ion_card_12_div_157_ion_row_1_ion_checkbox_13_Template, 1, 1, "ion-checkbox", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const passenger_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](passenger_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", passenger_r7.seat_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", passenger_r7.ticket_status !== "Pending" && passenger_r7.ticket_status !== "Cancelled");
  }
}
function CancelConfirmationTicketPage_ng_container_0_ion_card_12_div_157_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CancelConfirmationTicketPage_ng_container_0_ion_card_12_div_157_ion_row_1_Template, 14, 3, "ion-row", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const passenger_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", passenger_r7.ticket_status != "Cancelled");
  }
}
function CancelConfirmationTicketPage_ng_container_0_ion_card_12_div_158_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-item")(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Cash Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "ion-radio", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function CancelConfirmationTicketPage_ng_container_0_ion_card_12_div_158_ion_item_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-item")(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Wallet refund");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "ion-radio", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function CancelConfirmationTicketPage_ng_container_0_ion_card_12_div_158_ion_item_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-item")(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "ion-radio", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function CancelConfirmationTicketPage_ng_container_0_ion_card_12_div_158_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 108)(1, "ion-radio-group", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function CancelConfirmationTicketPage_ng_container_0_ion_card_12_div_158_Template_ion_radio_group_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r2.refundType, $event) || (ctx_r2.refundType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, CancelConfirmationTicketPage_ng_container_0_ion_card_12_div_158_ion_item_2_Template, 4, 0, "ion-item", 0)(3, CancelConfirmationTicketPage_ng_container_0_ion_card_12_div_158_ion_item_3_Template, 4, 0, "ion-item", 0)(4, CancelConfirmationTicketPage_ng_container_0_ion_card_12_div_158_ion_item_4_Template, 4, 0, "ion-item", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.refundType);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r2.ticketDetails.is_coupon_used && !ctx_r2.ticketDetails.wallet_booking && ctx_r2.commonStorage.getItem("metaData").isAllowCashCredit);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.ticketDetails.wallet_booking);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r2.ticketDetails.wallet_booking && ctx_r2.showCoupon);
  }
}
function CancelConfirmationTicketPage_ng_container_0_ion_card_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-card", 25)(1, "ion-grid")(2, "ion-row")(3, "ion-col", 26)(4, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ion-col", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "ion-col", 26)(10, "h2", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "ion-col", 26)(14, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "ion-col", 31)(17, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "svg", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](21, "path", 36)(22, "path", 37)(23, "path", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](24, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "ion-col", 26)(26, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "ion-col", 26)(29, "h2", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "h2", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32, " Depart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "ion-col", 26)(34, "h3", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "ion-col", 43)(37, "h2", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "h2", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](40, " Arrive ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "div", 44)(42, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](43, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "ion-grid")(45, "ion-row", 47)(46, "ion-col", 48)(47, "ion-row")(48, "ion-col", 49)(49, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "svg", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](51, "path", 52)(52, "path", 53)(53, "path", 54)(54, "path", 55)(55, "path", 56)(56, "path", 57)(57, "path", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "ion-col", 59)(59, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](61, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](63, "ion-col", 61)(64, "ion-row")(65, "ion-col", 62)(66, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](67, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](68, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](70, "ion-col", 65)(71, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](72, " PNR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](73, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](75, "div", 44)(76, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](77, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](78, "ion-grid")(79, "ion-row", 68)(80, "ion-col", 69)(81, "ion-row")(82, "ion-col", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](83, "svg", 71)(84, "g", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](85, "path", 73)(86, "path", 74)(87, "path", 75)(88, "path", 76)(89, "path", 77)(90, "path", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](91, "defs")(92, "clipPath", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](93, "rect", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](94, "ion-col", 59)(95, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](96, "Pickup Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](97, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](98);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](99, CancelConfirmationTicketPage_ng_container_0_ion_card_12_p_99_Template, 3, 0, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](100, "ion-row")(101, "ion-col", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](102, "svg", 71)(103, "g", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](104, "path", 85)(105, "path", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](106, "defs")(107, "clipPath", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](108, "rect", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](109, "ion-col", 59)(110, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](111, "Drop Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](112, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](114, CancelConfirmationTicketPage_ng_container_0_ion_card_12_p_114_Template, 3, 0, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](115, "div", 44)(116, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](117, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](118, "ion-grid", 47)(119, "ion-row", 88)(120, "ion-col", 6)(121, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](122, "Fare Breakup");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](123, "ion-col", 89)(124, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](125, "Base Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](126, "ion-col", 91)(127, "p", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](128);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](129, CancelConfirmationTicketPage_ng_container_0_ion_card_12_ion_col_129_Template, 3, 0, "ion-col", 93)(130, CancelConfirmationTicketPage_ng_container_0_ion_card_12_ion_col_130_Template, 3, 1, "ion-col", 94)(131, CancelConfirmationTicketPage_ng_container_0_ion_card_12_ion_col_131_Template, 3, 0, "ion-col", 93)(132, CancelConfirmationTicketPage_ng_container_0_ion_card_12_ion_col_132_Template, 3, 1, "ion-col", 94)(133, CancelConfirmationTicketPage_ng_container_0_ion_card_12_ion_col_133_Template, 3, 0, "ion-col", 93)(134, CancelConfirmationTicketPage_ng_container_0_ion_card_12_ion_col_134_Template, 3, 1, "ion-col", 94)(135, CancelConfirmationTicketPage_ng_container_0_ion_card_12_ion_col_135_Template, 3, 0, "ion-col", 93)(136, CancelConfirmationTicketPage_ng_container_0_ion_card_12_ion_col_136_Template, 3, 1, "ion-col", 94)(137, CancelConfirmationTicketPage_ng_container_0_ion_card_12_ion_col_137_Template, 3, 0, "ion-col", 93)(138, CancelConfirmationTicketPage_ng_container_0_ion_card_12_ion_col_138_Template, 3, 1, "ion-col", 94)(139, CancelConfirmationTicketPage_ng_container_0_ion_card_12_ion_col_139_Template, 3, 0, "ion-col", 93)(140, CancelConfirmationTicketPage_ng_container_0_ion_card_12_ion_col_140_Template, 3, 1, "ion-col", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](141, "ion-col", 89)(142, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](143, "Total Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](144, "ion-col", 91)(145, "p", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](147, "ion-col", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](148, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](149, CancelConfirmationTicketPage_ng_container_0_ion_card_12_ion_col_149_Template, 3, 0, "ion-col", 97)(150, CancelConfirmationTicketPage_ng_container_0_ion_card_12_ion_col_150_Template, 3, 1, "ion-col", 97)(151, CancelConfirmationTicketPage_ng_container_0_ion_card_12_ion_col_151_Template, 3, 0, "ion-col", 97)(152, CancelConfirmationTicketPage_ng_container_0_ion_card_12_ion_col_152_Template, 3, 1, "ion-col", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](153, "ion-row")(154, "ion-col", 61)(155, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](156, "Passenger Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](157, CancelConfirmationTicketPage_ng_container_0_ion_card_12_div_157_Template, 2, 1, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](158, CancelConfirmationTicketPage_ng_container_0_ion_card_12_div_158_Template, 5, 4, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 36, ctx_r2.ticketDetails.origin.substring(0, 3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](12, 38, ctx_r2.ticketDetails.destination.substring(0, 3)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.ticketDetails.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.ticketDetails.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.ticketDetails.boarding_details.dep_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r2.ticketDetails.duration, " hrs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r2.ticketDetails.drop_off_details ? ctx_r2.ticketDetails.drop_off_details.arr_time : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.ticketDetails.service_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.ticketDetails.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.getFormatedDate(ctx_r2.ticketDetails.travel_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r2.ticketDetails.ticket_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r2.ticketDetails.boarding_details.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.ticketDetails.boarding_details.latitude != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r2.ticketDetails.drop_off_details ? ctx_r2.ticketDetails.drop_off_details.address : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.ticketDetails.drop_off_details && ctx_r2.ticketDetails.drop_off_details.latitude != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.currencySym + "" + ctx_r2.fareBreakupDetails.base_fare.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.cash_coupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.cash_coupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r2.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r2.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.transaction_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.transaction_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.cc_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.cc_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.usable_promotional_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.usable_promotional_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.wallet_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.fareBreakupDetails.wallet_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](" ", ctx_r2.currencySym, "", ctx_r2.fareBreakupDetails.total_fare.toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.ticketDetails.transaction_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.ticketDetails.transaction_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.ticketDetails.payment_method);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.ticketDetails.payment_method);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r2.PassengerDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.ticketDetails.boarding_details.address && ctx_r2.ticketDetails.ticket_status != "Cancelled");
  }
}
function CancelConfirmationTicketPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-header", 1)(2, "ion-toolbar", 2)(3, "ion-buttons", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Ticket Cancellation");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ion-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, CancelConfirmationTicketPage_ng_container_0_div_8_Template, 37, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "ion-grid")(10, "ion-row")(11, "ion-col", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, CancelConfirmationTicketPage_ng_container_0_ion_card_12_Template, 159, 40, "ion-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "ion-row")(14, "ion-col", 8)(15, "ion-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CancelConfirmationTicketPage_ng_container_0_Template_ion_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.canCancel(ctx_r2.PassengerDetails));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "Cancel Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("translucent", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.showRefundType);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.ticketDetails);
  }
}
function CancelConfirmationTicketPage_ng_container_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 118)(1, "div", 119)(2, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Onward journey ticket details");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "ion-row")(5, "ion-col", 121)(6, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "Ticket number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "ion-col", 121)(9, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "ion-row")(12, "ion-col", 121)(13, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "Date of journey");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "ion-col", 121)(16, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "ion-row")(19, "ion-col", 121)(20, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, "Service number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "ion-col", 121)(23, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "ion-row")(26, "ion-col", 121)(27, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, "Bus type");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "ion-col", 121)(30, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "ion-row")(33, "ion-col", 121)(34, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "ion-col", 121)(37, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "ion-row")(40, "ion-col", 121)(41, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "ion-col", 121)(44, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "ion-row")(47, "ion-col", 121)(48, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](49, "Pickup point");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "ion-col", 121)(51, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](53, "ion-row")(54, "ion-col", 121)(55, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](56, "Depart on");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](57, "ion-col", 121)(58, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](60, "ion-row")(61, "ion-col", 121)(62, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](63, "No. of seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](64, "ion-col", 121)(65, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](67, "ion-row")(68, "ion-col", 121)(69, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](70, "Arrival on");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](71, "ion-col", 121)(72, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](74, "ion-row")(75, "ion-col", 121)(76, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](77, "Total fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](78, "ion-col", 121)(79, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.ticketDetails.ticket_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.changeDateFormat(ctx_r2.ticketDetails.travel_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.ticketDetails.service_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.ticketDetails.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.ticketDetails.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.ticketDetails.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.ticketDetails.boarding_details.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", ctx_r2.changeDateFormat(ctx_r2.ticketDetails.travel_date), " ", ctx_r2.ticketDetails.boarding_details.dep_time, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.ticketDetails.no_of_seats);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", ctx_r2.changeDateFormat(ctx_r2.ticketDetails.arr_date), " ", ctx_r2.ticketDetails.arr_time, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, " ", ctx_r2.ticketDetails.total_fare, "");
  }
}
function CancelConfirmationTicketPage_ng_container_1_div_9_ng_template_20_ion_checkbox_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-checkbox", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function CancelConfirmationTicketPage_ng_container_1_div_9_ng_template_20_ion_checkbox_13_Template_ion_checkbox_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.checkeBoxChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function CancelConfirmationTicketPage_ng_container_1_div_9_ng_template_20_ion_checkbox_13_Template_ion_checkbox_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r11);
      const passenger_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](passenger_r12.checked, $event) || (passenger_r12.checked = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const passenger_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", passenger_r12.checked);
  }
}
function CancelConfirmationTicketPage_ng_container_1_div_9_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "tr")(2, "td", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CancelConfirmationTicketPage_ng_container_1_div_9_ng_template_20_Template_td_click_2_listener() {
      const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.check(i_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "td", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CancelConfirmationTicketPage_ng_container_1_div_9_ng_template_20_Template_td_click_4_listener() {
      const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.check(i_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "td", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CancelConfirmationTicketPage_ng_container_1_div_9_ng_template_20_Template_td_click_6_listener() {
      const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.check(i_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "td", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CancelConfirmationTicketPage_ng_container_1_div_9_ng_template_20_Template_td_click_8_listener() {
      const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.check(i_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "td", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CancelConfirmationTicketPage_ng_container_1_div_9_ng_template_20_Template_td_click_10_listener() {
      const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.check(i_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "td", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, CancelConfirmationTicketPage_ng_container_1_div_9_ng_template_20_ion_checkbox_13_Template, 1, 1, "ion-checkbox", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const passenger_r12 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", i_r10 + 1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](passenger_r12.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](passenger_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](passenger_r12.seat_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](7, _c0, passenger_r12.ticket_status == "Cancelled"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", passenger_r12.ticket_status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", passenger_r12.ticket_status !== "Pending" && passenger_r12.ticket_status !== "Cancelled");
  }
}
function CancelConfirmationTicketPage_ng_container_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 108)(1, "div", 119)(2, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Passengers");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "table", 122)(6, "thead")(7, "tr", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "Seat");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "th", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, CancelConfirmationTicketPage_ng_container_1_div_9_ng_template_20_Template, 14, 9, "ng-template", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r2.PassengerDetails);
  }
}
function CancelConfirmationTicketPage_ng_container_1_div_10_ion_item_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-item")(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Cash Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "ion-radio", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function CancelConfirmationTicketPage_ng_container_1_div_10_ion_item_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-item")(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Wallet refund");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "ion-radio", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function CancelConfirmationTicketPage_ng_container_1_div_10_ion_item_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-item")(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "ion-radio", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function CancelConfirmationTicketPage_ng_container_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 108)(1, "p", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Refund Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ion-radio-group", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function CancelConfirmationTicketPage_ng_container_1_div_10_Template_ion_radio_group_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r2.refundType, $event) || (ctx_r2.refundType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, CancelConfirmationTicketPage_ng_container_1_div_10_ion_item_4_Template, 4, 0, "ion-item", 0)(5, CancelConfirmationTicketPage_ng_container_1_div_10_ion_item_5_Template, 4, 0, "ion-item", 0)(6, CancelConfirmationTicketPage_ng_container_1_div_10_ion_item_6_Template, 4, 0, "ion-item", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.refundType);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r2.ticketDetails.is_coupon_used && !ctx_r2.ticketDetails.wallet_booking && ctx_r2.commonStorage.getItem("metaData").isAllowCashCredit);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.ticketDetails.wallet_booking);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r2.ticketDetails.wallet_booking && ctx_r2.showCoupon);
  }
}
function CancelConfirmationTicketPage_ng_container_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 136)(1, "ion-button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CancelConfirmationTicketPage_ng_container_1_div_11_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.canCancel(ctx_r2.PassengerDetails));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Cancel Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function CancelConfirmationTicketPage_ng_container_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 10)(1, "div", 138)(2, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " Cancellation Charges ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 16)(5, "p", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "p", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "p", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "ion-col", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "ion-col", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CancelConfirmationTicketPage_ng_container_1_div_12_Template_ion_col_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r15);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.showRefundType = !ctx_r2.showRefundType);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "CLOSE");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "ion-col", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CancelConfirmationTicketPage_ng_container_1_div_12_Template_ion_col_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r15);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.cancelTicket(ctx_r2.PassengerDetails));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "CANCEL TICKET");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Cancel percent : ", ctx_r2.cancelCouponDetails.cancel_percent, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("Cancel fare: ", ctx_r2.currencySym, " ", ctx_r2.cancelCouponDetails.cancelled_fare, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("Refund amount : ", ctx_r2.currencySym, " ", ctx_r2.cancelCouponDetails.refund_amount, "");
  }
}
function CancelConfirmationTicketPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 113)(3, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Ticket Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "ion-buttons", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ion-content", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, CancelConfirmationTicketPage_ng_container_1_div_8_Template, 81, 14, "div", 116)(9, CancelConfirmationTicketPage_ng_container_1_div_9_Template, 21, 1, "div", 99)(10, CancelConfirmationTicketPage_ng_container_1_div_10_Template, 7, 4, "div", 99)(11, CancelConfirmationTicketPage_ng_container_1_div_11_Template, 3, 0, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, CancelConfirmationTicketPage_ng_container_1_div_12_Template, 17, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.ticketDetails.boarding_details.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.ticketDetails.boarding_details.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.ticketDetails.boarding_details.address && ctx_r2.ticketDetails.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.ticketDetails && ctx_r2.ticketDetails.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.showRefundType);
  }
}
function CancelConfirmationTicketPage_ng_container_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 118)(1, "div", 119)(2, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Onward journey ticket details");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "ion-row")(5, "ion-col", 121)(6, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "Ticket number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "ion-col", 121)(9, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "ion-row")(12, "ion-col", 121)(13, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "Date of journey");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "ion-col", 121)(16, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "ion-row")(19, "ion-col", 121)(20, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, "Service number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "ion-col", 121)(23, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "ion-row")(26, "ion-col", 121)(27, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, "Bus type");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "ion-col", 121)(30, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "ion-row")(33, "ion-col", 121)(34, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "ion-col", 121)(37, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "ion-row")(40, "ion-col", 121)(41, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "ion-col", 121)(44, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "ion-row")(47, "ion-col", 121)(48, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](49, "Pickup point");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "ion-col", 121)(51, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](53, "ion-row")(54, "ion-col", 121)(55, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](56, "Depart on");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](57, "ion-col", 121)(58, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](60, "ion-row")(61, "ion-col", 121)(62, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](63, "No. of seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](64, "ion-col", 121)(65, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](67, "ion-row")(68, "ion-col", 121)(69, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](70, "Arrival on");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](71, "ion-col", 121)(72, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](74, "ion-row")(75, "ion-col", 121)(76, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](77, "Total fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](78, "ion-col", 121)(79, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.ticketDetails.ticket_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.changeDateFormat(ctx_r2.ticketDetails.travel_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.ticketDetails.service_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.ticketDetails.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.ticketDetails.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.ticketDetails.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.ticketDetails.boarding_details.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", ctx_r2.changeDateFormat(ctx_r2.ticketDetails.travel_date), " ", ctx_r2.ticketDetails.boarding_details.dep_time, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.ticketDetails.no_of_seats);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", ctx_r2.changeDateFormat(ctx_r2.ticketDetails.arr_date), " ", ctx_r2.ticketDetails.arr_time, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, " ", ctx_r2.ticketDetails.total_fare, "");
  }
}
function CancelConfirmationTicketPage_ng_container_2_div_9_ng_template_20_ion_checkbox_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-checkbox", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function CancelConfirmationTicketPage_ng_container_2_div_9_ng_template_20_ion_checkbox_13_Template_ion_checkbox_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r18);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.checkeBoxChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function CancelConfirmationTicketPage_ng_container_2_div_9_ng_template_20_ion_checkbox_13_Template_ion_checkbox_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r18);
      const passenger_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](passenger_r19.checked, $event) || (passenger_r19.checked = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const passenger_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", passenger_r19.checked);
  }
}
function CancelConfirmationTicketPage_ng_container_2_div_9_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "tr")(2, "td", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CancelConfirmationTicketPage_ng_container_2_div_9_ng_template_20_Template_td_click_2_listener() {
      const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r16).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.check(i_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "td", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CancelConfirmationTicketPage_ng_container_2_div_9_ng_template_20_Template_td_click_4_listener() {
      const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r16).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.check(i_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "td", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CancelConfirmationTicketPage_ng_container_2_div_9_ng_template_20_Template_td_click_6_listener() {
      const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r16).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.check(i_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "td", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CancelConfirmationTicketPage_ng_container_2_div_9_ng_template_20_Template_td_click_8_listener() {
      const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r16).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.check(i_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "td", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CancelConfirmationTicketPage_ng_container_2_div_9_ng_template_20_Template_td_click_10_listener() {
      const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r16).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.check(i_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "td", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, CancelConfirmationTicketPage_ng_container_2_div_9_ng_template_20_ion_checkbox_13_Template, 1, 1, "ion-checkbox", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const passenger_r19 = ctx.$implicit;
    const i_r17 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", i_r17 + 1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](passenger_r19.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](passenger_r19.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](passenger_r19.seat_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](7, _c0, passenger_r19.ticket_status == "Cancelled"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", passenger_r19.ticket_status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", passenger_r19.ticket_status !== "Pending" && passenger_r19.ticket_status !== "Cancelled");
  }
}
function CancelConfirmationTicketPage_ng_container_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 108)(1, "div", 119)(2, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Passengers");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "table", 122)(6, "thead")(7, "tr", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "Seat");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "th", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, CancelConfirmationTicketPage_ng_container_2_div_9_ng_template_20_Template, 14, 9, "ng-template", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r2.PassengerDetails);
  }
}
function CancelConfirmationTicketPage_ng_container_2_div_10_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-item")(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Cash Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "ion-radio", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function CancelConfirmationTicketPage_ng_container_2_div_10_ion_item_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-item")(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Wallet refund");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "ion-radio", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function CancelConfirmationTicketPage_ng_container_2_div_10_ion_item_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-item")(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "ion-radio", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function CancelConfirmationTicketPage_ng_container_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 108)(1, "ion-radio-group", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function CancelConfirmationTicketPage_ng_container_2_div_10_Template_ion_radio_group_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r20);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r2.refundType, $event) || (ctx_r2.refundType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, CancelConfirmationTicketPage_ng_container_2_div_10_ion_item_2_Template, 4, 0, "ion-item", 0)(3, CancelConfirmationTicketPage_ng_container_2_div_10_ion_item_3_Template, 4, 0, "ion-item", 0)(4, CancelConfirmationTicketPage_ng_container_2_div_10_ion_item_4_Template, 4, 0, "ion-item", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.refundType);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r2.ticketDetails.is_coupon_used && !ctx_r2.ticketDetails.wallet_booking && ctx_r2.commonStorage.getItem("metaData").isAllowCashCredit);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.ticketDetails.wallet_booking);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r2.ticketDetails.wallet_booking && ctx_r2.showCoupon);
  }
}
function CancelConfirmationTicketPage_ng_container_2_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 136)(1, "ion-button", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CancelConfirmationTicketPage_ng_container_2_div_11_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r21);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.canCancel(ctx_r2.PassengerDetails));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Cancel Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function CancelConfirmationTicketPage_ng_container_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 10)(1, "div", 138)(2, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " Cancellation Charges ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 16)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "ion-col", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "ion-col", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CancelConfirmationTicketPage_ng_container_2_div_12_Template_ion_col_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r22);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.showRefundType = !ctx_r2.showRefundType);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "CLOSE");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "ion-col", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CancelConfirmationTicketPage_ng_container_2_div_12_Template_ion_col_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r22);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.cancelTicket(ctx_r2.PassengerDetails));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "CANCEL TICKET");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Cancel percent : ", ctx_r2.cancelCouponDetails.cancel_percent, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("Cancel fare: ", ctx_r2.currencySym, " ", ctx_r2.cancelCouponDetails.cancelled_fare, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("Refund amount : ", ctx_r2.currencySym, " ", ctx_r2.cancelCouponDetails.refund_amount, "");
  }
}
function CancelConfirmationTicketPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 113)(3, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Ticket Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "ion-buttons", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ion-content", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, CancelConfirmationTicketPage_ng_container_2_div_8_Template, 81, 14, "div", 116)(9, CancelConfirmationTicketPage_ng_container_2_div_9_Template, 21, 1, "div", 99)(10, CancelConfirmationTicketPage_ng_container_2_div_10_Template, 5, 4, "div", 99)(11, CancelConfirmationTicketPage_ng_container_2_div_11_Template, 3, 0, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, CancelConfirmationTicketPage_ng_container_2_div_12_Template, 17, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.ticketDetails.boarding_details.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.ticketDetails.boarding_details.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.ticketDetails.boarding_details.address && ctx_r2.ticketDetails.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.ticketDetails && ctx_r2.ticketDetails.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.showRefundType);
  }
}
function CancelConfirmationTicketPage_ng_container_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 154)(1, "ion-card", 155)(2, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Ticket Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "ion-row")(5, "ion-col", 121)(6, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "Ticket Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "span", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "ion-col", 121)(12, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "Date of Journey");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "span", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "ion-row")(18, "ion-col", 121)(19, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "Service Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "span", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "ion-col", 121)(25, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26, "Bus Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "span", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "ion-row")(31, "ion-col", 121)(32, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](34, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "span", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "ion-col", 121)(38, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "span", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "ion-row")(44, "ion-col", 121)(45, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](46, "Pickup Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](47, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "span", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "ion-col", 121)(51, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](52, "Depart On");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](53, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](54, "span", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](56, "ion-row")(57, "ion-col", 121)(58, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](59, "Number of Seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](60, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](61, "span", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](63, "ion-col", 121)(64, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](65, "Arrival On");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](66, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](67, "span", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](69, "ion-row")(70, "ion-col", 121)(71, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](72, "Total Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](73, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](74, "span", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](76, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](77, "ion-col", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.ticketDetails.service_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.changeDateFormat(ctx_r2.ticketDetails.travel_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.ticketDetails.service_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.ticketDetails.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.ticketDetails.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.ticketDetails.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.ticketDetails.boarding_details.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", ctx_r2.changeDateFormat(ctx_r2.ticketDetails.travel_date), " ", ctx_r2.ticketDetails.boarding_details.dep_time, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.ticketDetails.no_of_seats);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", ctx_r2.changeDateFormat(ctx_r2.ticketDetails.arr_date), " ", ctx_r2.ticketDetails.arr_time, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, "", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](76, 14, ctx_r2.ticketDetails.total_fare, "1.2-2"), "");
  }
}
function CancelConfirmationTicketPage_ng_container_3_ion_card_13_ng_template_17_ion_checkbox_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-checkbox", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function CancelConfirmationTicketPage_ng_container_3_ion_card_13_ng_template_17_ion_checkbox_9_Template_ion_checkbox_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r25);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.checkeBoxChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function CancelConfirmationTicketPage_ng_container_3_ion_card_13_ng_template_17_ion_checkbox_9_Template_ion_checkbox_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r25);
      const passenger_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](passenger_r26.checked, $event) || (passenger_r26.checked = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const passenger_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", passenger_r26.checked);
  }
}
function CancelConfirmationTicketPage_ng_container_3_ion_card_13_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "tr")(2, "td", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CancelConfirmationTicketPage_ng_container_3_ion_card_13_ng_template_17_Template_td_click_2_listener() {
      const i_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r23).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.check(i_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "td", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CancelConfirmationTicketPage_ng_container_3_ion_card_13_ng_template_17_Template_td_click_4_listener() {
      const i_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r23).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.check(i_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "td", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CancelConfirmationTicketPage_ng_container_3_ion_card_13_ng_template_17_Template_td_click_6_listener() {
      const i_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r23).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.check(i_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "td", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, CancelConfirmationTicketPage_ng_container_3_ion_card_13_ng_template_17_ion_checkbox_9_Template, 1, 1, "ion-checkbox", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const passenger_r26 = ctx.$implicit;
    const i_r24 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](i_r24 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](passenger_r26.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](passenger_r26.seat_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", passenger_r26.ticket_status !== "Pending" && passenger_r26.ticket_status !== "Cancelled");
  }
}
function CancelConfirmationTicketPage_ng_container_3_ion_card_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-card", 108)(1, "div", 159)(2, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "img", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "\u00A0\u00A0Passenger(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "table", 162)(7, "thead")(8, "tr", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "th", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "th", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "th", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "Seat");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "th", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, CancelConfirmationTicketPage_ng_container_3_ion_card_13_ng_template_17_Template, 10, 4, "ng-template", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r2.PassengerDetails);
  }
}
function CancelConfirmationTicketPage_ng_container_3_ion_card_14_ion_item_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-item")(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Back To Source");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "ion-radio", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function CancelConfirmationTicketPage_ng_container_3_ion_card_14_ion_item_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-item")(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Wallet Refund");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "ion-radio", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function CancelConfirmationTicketPage_ng_container_3_ion_card_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-card", 108)(1, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "img", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " \u00A0 \u00A0Select a Refund Option");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "ion-radio-group", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function CancelConfirmationTicketPage_ng_container_3_ion_card_14_Template_ion_radio_group_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r27);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r2.refundType, $event) || (ctx_r2.refundType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, CancelConfirmationTicketPage_ng_container_3_ion_card_14_ion_item_5_Template, 4, 0, "ion-item", 0)(6, CancelConfirmationTicketPage_ng_container_3_ion_card_14_ion_item_6_Template, 4, 0, "ion-item", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.refundType);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r2.ticketDetails.is_coupon_used && !ctx_r2.ticketDetails.wallet_booking && ctx_r2.commonStorage.getItem("metaData").isAllowCashCredit);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.ticketDetails.wallet_booking);
  }
}
function CancelConfirmationTicketPage_ng_container_3_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 136)(1, "ion-button", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CancelConfirmationTicketPage_ng_container_3_div_15_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r28);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.canCancel(ctx_r2.PassengerDetails));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Cancel Ticket ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ion-button", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CancelConfirmationTicketPage_ng_container_3_div_15_Template_ion_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r28);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.navigateBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, " I don't want to cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function CancelConfirmationTicketPage_ng_container_3_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 172)(1, "div", 173)(2, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " Cancellation Charges ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 175)(5, "p", 176)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "Cancellation Charge: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "p", 176)(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "Cancellation Percentage: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "p", 177)(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "Refund Amount: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "ion-button", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CancelConfirmationTicketPage_ng_container_3_div_16_Template_ion_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r29);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.cancelTicket(ctx_r2.PassengerDetails));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "Cancel Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "ion-button", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CancelConfirmationTicketPage_ng_container_3_div_16_Template_ion_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r29);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.showRefundType = !ctx_r2.showRefundType);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22, "Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, "", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](9, 5, ctx_r2.cancelCouponDetails.cancelled_fare, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", ctx_r2.cancelCouponDetails.cancel_percent, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, "", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](18, 8, ctx_r2.cancelCouponDetails.refund_amount, "1.2-2"), "");
  }
}
function CancelConfirmationTicketPage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-header", 149)(2, "ion-toolbar", 113)(3, "ion-row")(4, "ion-col", 141)(5, "ion-buttons");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ion-col", 150)(8, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "Cancelling Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "ion-col", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "ion-content", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, CancelConfirmationTicketPage_ng_container_3_div_12_Template, 78, 17, "div", 152)(13, CancelConfirmationTicketPage_ng_container_3_ion_card_13_Template, 18, 1, "ion-card", 99)(14, CancelConfirmationTicketPage_ng_container_3_ion_card_14_Template, 7, 3, "ion-card", 99)(15, CancelConfirmationTicketPage_ng_container_3_div_15_Template, 5, 0, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, CancelConfirmationTicketPage_ng_container_3_div_16_Template, 23, 11, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.ticketDetails.boarding_details.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.ticketDetails.boarding_details.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.ticketDetails.boarding_details.address && ctx_r2.ticketDetails.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.ticketDetails && ctx_r2.ticketDetails.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.showRefundType);
  }
}
class CancelConfirmationTicketPage {
  constructor(route, router, navCtrl, commonStorage, formBuilder, apiFactory, loader, commonService, util, dateService, theme, appData) {
    this.route = route;
    this.router = router;
    this.navCtrl = navCtrl;
    this.commonStorage = commonStorage;
    this.formBuilder = formBuilder;
    this.apiFactory = apiFactory;
    this.loader = loader;
    this.commonService = commonService;
    this.util = util;
    this.dateService = dateService;
    this.theme = theme;
    this.appData = appData;
    this.cancelCouponDetails = {};
    this.showRefundType = false;
    this.showCoupon = false;
    this.isIos = false;
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    this.route.queryParams.subscribe(params => {
      var _navigation$extras;
      const navigation = this.router.getCurrentNavigation();
      if (navigation !== null && navigation !== void 0 && (_navigation$extras = navigation.extras) !== null && _navigation$extras !== void 0 && _navigation$extras.state) {
        this.data = navigation.extras.state['user'];
      }
      if (this.data) {
        this.email = this.data;
      }
      this.defaultCall();
    });
    this.appData.newTheme = this.util.getNewTheme();
    this.metaData = this.commonStorage.getItem("metaData");
  }
  ngOnInit() {}
  changeDateFormat(date) {
    if (date && date != undefined && date != null && date != '') {
      var r = this.dateService.getDateObjFromDateStr(date, this.commonService.checkDateFormat(), "yyyy-mm-dd");
      if (r.dayName != undefined && r.dayName != null && r.dayName != '') {
        return r.dayName + ", " + r.day + " " + r.monthName + " " + r.year;
      } else {
        var d = new Date(date.substr(0, 10).toString().trim());
        if (d.toString() != "Invalid Date" && d != null) {
          var m = this.util.getDayName(d.getDay() + 1) + " " + d.getDate() + " " + this.util.getMonthName(d.getMonth() + 1) + " " + d.getFullYear();
          return m;
        } else {
          return date;
        }
      }
    } else {
      return date;
    }
  }
  defaultCall() {
    this.metaData = this.commonStorage.getItem("metaData");
    this.currencySym = this.commonStorage.getItem('metaData').currencySym;
    this.showCoupon = this.commonStorage.getItem('metaData').isCouponAllowed;
    this.ticketDetails = {};
    this.ticketDetails.boarding_details = {};
    this.showCancel = false;
    this.ticketDetails = this.commonStorage.getItem('cancelTicketDetails');
    if (!this.ticketDetails.is_coupon_used && !this.ticketDetails.wallet_booking && this.commonStorage.getItem('metaData').isAllowCashCredit) {
      this.refundType = '2';
    } else if (this.ticketDetails.wallet_booking) {
      this.refundType = '3';
    } else {
      this.refundType = '3';
    }
    this.fareBreakupDetails = this.ticketDetails.fare_break_up_hash;
    if (this.metaData.msiteFolder == 'ourbustheme') {
      this.PassengerDetails = this.ticketDetails.passenger_details.filter(passenger => passenger.ticket_status !== 'Cancelled');
      this.PassengerDetails.forEach(passenger => {
        passenger.checked = false; // Make sure none of the checkboxes are selected initially
      });
    } else {
      this.PassengerDetails = this.ticketDetails.passenger_details;
      if (this.PassengerDetails.length > 1) {}
    }
    this.loader.hideLoadingDefault();
    this.refundType = this.ticketDetails.is_coupon_used ? '1' : this.ticketDetails.wallet_booking ? '3' : !this.commonStorage.getItem('metaData').isAllowCashCredit ? '1' : '2';
  }
  getFormatedDate(date) {
    return moment__WEBPACK_IMPORTED_MODULE_0___default()(date, "DD/MM/YYYY").format("DD MMM YYYY");
  }
  checkeBoxChange() {
    for (let passenger of this.PassengerDetails) {
      if (passenger.checked) {
        this.showCancel = true;
        break;
      }
      this.showCancel = false;
    }
  }
  check(index) {
    this.PassengerDetails[index].checked = !this.PassengerDetails[index].checked;
  }
  canCancel(passengerDetails) {
    if (!this.util.checkConnection()) {
      return false;
    }
    if (!this.seatNos(passengerDetails)) {
      this.util.showToast('Please select seat to cancel');
      return false;
    }
    this.loader.showLoadingDefault();
    this.apiFactory.canCancel(this.ticketDetails.ticket_number, this.seatNos(passengerDetails)).subscribe(result => {
      this.loader.hideLoadingDefault();
      this.onCancelSuccess(result);
    }, error => {
      this.loader.hideLoadingDefault();
    });
    return true;
  }
  seatNos(passengerDetails) {
    let seatNos = "";
    for (let passenger of passengerDetails) {
      if (passenger.checked) {
        seatNos += passenger.seat_number + ",";
      }
    }
    return seatNos;
  }
  onCancelSuccess(result) {
    if (result.success && result.body) {
      this.cancelCouponDetails = result.body;
      this.showRefundType = true;
    } else if (!result.success && result.body) {
      if (result.body.response) {
        this.util.showToast(result.body.response.message);
      }
    }
  }
  cancelTicket(passengerDetails) {
    if (!this.util.checkConnection()) {
      return;
    }
    let cancelSeatsList = [];
    for (let passenger of passengerDetails) {
      if (passenger.checked) {
        cancelSeatsList.push(passenger.seat_number);
      }
    }
    if (cancelSeatsList.length > 0) {
      this.loader.showLoadingDefault();
      try {
        let path = "ticket_number=" + this.ticketDetails.ticket_number + '&contact_details=' + this.email + '&travel_date=' + this.ticketDetails.travel_date + "&refund_type=" + this.refundType;
        if (this.ticketDetails.wallet_booking) {
          path = "ticket_number=" + this.ticketDetails.ticket_number + '&contact_details=' + this.email + '&travel_date=' + this.ticketDetails.travel_date;
        }
        let completedStatus = cancelSeatsList.length === this.PassengerDetails.length;
        path = completedStatus ? path : path + "&seat_numbers=" + cancelSeatsList.join(',');
        let currentCancelState = completedStatus ? this.apiFactory.cancelETicketCompletely(path) : this.apiFactory.cancelETicketPartially(path);
        currentCancelState.subscribe(result => {
          this.loader.hideLoadingDefault();
          if (typeof result.code !== "undefined") {
            this.util.showAlert('', result.message);
          } else {
            let navigationExtras = {
              queryParams: {
                refundDetails: result,
                ticketDetails: this.ticketDetails,
                couponCancel: this.refundType == 1 ? true : false
              }
            };
            this.navCtrl.navigateForward('confirm-cancellation-component', navigationExtras);
          }
        }, err => {
          this.loader.hideLoadingDefault();
          if (!this.util.isConnected()) {} else {}
        });
      } catch (e) {
        this.loader.hideLoadingDefault();
      }
    } else {}
  }
  navigateBack() {
    this.navCtrl.back();
  }
  gotoMaps(mapdata) {
    this.loader.showLoadingDefault();
    _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.getCurrentPosition({
      timeout: 10000,
      enableHighAccuracy: true,
      maximumAge: 3600
    }).then(resp => {
      this.loader.hideLoadingDefault();
      let lat = resp.coords.latitude;
      let long = resp.coords.longitude;
      let latB = mapdata.latitude;
      let longB = mapdata.longitude;
      var url = 'https://www.google.com/maps/dir/?api=1&origin=' + lat + ',' + long + '&destination=' + latB + ',' + longB;
      window.open(url, '_system');
    }).catch(error => {
      this.loader.hideLoadingDefault();
    });
  }
}
_CancelConfirmationTicketPage = CancelConfirmationTicketPage;
_CancelConfirmationTicketPage.ɵfac = function CancelConfirmationTicketPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CancelConfirmationTicketPage)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_3__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_4__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_5__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_6__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_7__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_8__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_9__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_10__.AppData));
};
_CancelConfirmationTicketPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: _CancelConfirmationTicketPage,
  selectors: [["app-cancel-confirmation-ticket"]],
  standalone: false,
  decls: 4,
  vars: 4,
  consts: [[4, "ngIf"], [1, "theme1", 2, "--background", "#191966", 3, "translucent"], [2, "--background", "#191966", "--opacity", "3 !important"], ["mode", "md", "slot", "start"], [1, "theme1", 2, "--background", "#191966"], ["class", "whole center", 4, "ngIf"], ["size", "12"], ["class", "ion-no-margin ion-padding-top ion-padding-bottom", 4, "ngIf"], ["size", "12", 2, "text-align", "center"], [1, "cancel-button", 3, "click"], [1, "whole", "center"], [1, "legend-box1", 2, "position", "absolute", "bottom", "5%", "width", "100% !important"], ["size", "9", 1, "ion-no-padding"], [1, "cancel-txt-msg-hd"], ["size", "3", 1, "ion-text-end"], ["name", "close-outline", 2, "height", "28px", "width", "28px", "color", "gray", 3, "click"], [1, "txt-msg"], [1, "ion-no-padding", "cancel-details"], ["size", "6", 1, "ion-no-padding"], [1, "left", 2, "font-weight", "400", "margin", "2px"], [1, "right", 2, "font-weight", "400", "margin", "2px"], ["size", "6", 1, "", 3, "click"], ["fill", "clear", 1, "cancel-close-btn"], ["size", "6", 3, "click"], ["fill", "clear", 1, "cancel-btn"], [1, "ion-no-margin", "ion-padding-top", "ion-padding-bottom"], ["size", "4", 1, "ion-no-padding"], [1, "", 2, "margin", "0", "font-weight", "bold", "color", "#191966 !important"], [2, "margin-bottom", "0"], [1, "", 2, "margin", "0", "font-weight", "bold", "color", "#F2C21A !important"], [2, "color", "#a0a0a0"], ["size", "4", 2, "display", "flex", "align-items", "center", "padding", "0"], [1, "location-line"], [1, "location-dot"], [1, "location-bus"], ["width", "23", "height", "8", "viewBox", "0 0 23 8", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.54909 6.42781C6.67037 5.70013 6.42781 5.21501 5.82141 4.85117C5.33629 4.60862 4.7299 4.60861 4.24478 4.97245C3.75966 5.33629 3.5171 5.82141 3.63838 6.42781H3.5171C2.54687 6.42781 1.57663 6.42781 0.485118 6.42781C0.12128 6.42781 0 6.30653 0 5.94269C0 5.21501 0 4.36606 0 3.63838C0 3.5171 4.60837e-07 3.39582 0.12128 3.39582C0.242559 3.27454 0.242558 3.27454 0.242558 3.15326C0.242558 2.18303 0.363838 1.33407 0.363838 0.363838C0.363838 0.12128 0.485118 0 0.727677 0C1.57663 0 2.42559 0 3.27454 0C7.15548 0 10.9151 0 14.7961 0C16.9791 0 19.2834 0 21.4664 0C21.9516 0 22.4367 0.363838 22.558 0.848955V0.970235C22.558 2.42559 22.558 3.88094 22.558 5.45757C22.558 5.57885 22.4367 5.70013 22.3154 5.70013C21.8303 5.82141 21.2239 5.94269 20.7388 6.06397C20.1324 6.18525 19.4047 6.30653 18.7983 6.42781C18.5557 6.42781 18.1919 6.54909 17.8281 6.54909C17.8281 5.94269 17.7068 5.33629 17.1004 4.97245C16.8578 4.85117 16.494 4.7299 16.2514 4.7299C15.4025 4.85117 14.7961 5.57885 14.9174 6.42781C12.2492 6.42781 9.45979 6.42781 6.54909 6.42781ZM10.5513 0.848955C10.0662 0.848955 9.45979 0.848955 8.97467 0.848955C8.73211 0.848955 8.48956 0.970235 8.48956 1.33407C8.48956 1.69791 8.48956 2.06175 8.48956 2.54687C8.48956 2.9107 8.61084 3.03198 8.97467 3.03198C10.0662 3.03198 11.0364 3.03198 12.1279 3.03198C12.3705 3.03198 12.6131 2.9107 12.6131 2.54687C12.6131 2.18303 12.6131 1.69791 12.6131 1.33407C12.6131 1.09151 12.4918 0.848955 12.1279 0.848955C11.6428 0.848955 11.0364 0.848955 10.5513 0.848955ZM5.82141 0.848955C5.33629 0.848955 4.7299 0.848955 4.24478 0.848955C4.00222 0.848955 3.88094 0.970235 3.75966 1.21279C3.75966 1.57663 3.75966 2.06175 3.75966 2.42559C3.75966 2.66815 3.88094 2.78943 4.1235 2.78943C5.21501 2.78943 6.30653 2.78943 7.39804 2.78943C7.6406 2.78943 7.76188 2.66815 7.76188 2.42559C7.76188 2.06175 7.76188 1.57663 7.76188 1.21279C7.76188 0.848955 7.6406 0.727677 7.27676 0.727677C6.79164 0.848956 6.30653 0.848955 5.82141 0.848955ZM15.2812 0.848955C14.7961 0.848955 14.1897 0.848955 13.7046 0.848955C13.462 0.848955 13.3407 0.970235 13.3407 1.21279C13.3407 1.57663 13.3407 2.06175 13.3407 2.42559C13.3407 2.66815 13.462 2.78943 13.7046 2.78943C14.7961 2.78943 15.8876 2.78943 16.9791 2.78943C17.2217 2.78943 17.3429 2.66815 17.3429 2.42559C17.3429 2.06175 17.3429 1.57663 17.3429 1.21279C17.3429 0.848955 17.2217 0.727677 16.8578 0.727677C16.3727 0.848956 15.7663 0.848955 15.2812 0.848955ZM20.0111 2.91071C20.4962 2.91071 21.1026 2.91071 21.5877 2.91071C21.8303 2.91071 21.9516 2.78942 21.9516 2.54687C21.9516 2.30431 21.9516 2.06175 21.9516 1.69791C21.9516 1.33407 21.8303 1.09151 21.4664 0.970235C21.3452 0.848956 21.1026 0.848955 20.8601 0.848955C20.0111 0.848955 19.1621 0.848955 18.3132 0.848955C17.9493 0.848955 17.8281 0.970235 17.8281 1.33407C17.8281 1.69791 17.8281 2.06175 17.8281 2.42559C17.8281 2.78943 17.9493 2.91071 18.3132 2.91071C18.9196 2.91071 19.526 2.91071 20.0111 2.91071ZM1.33407 3.27454C1.33407 3.88094 1.33407 4.60862 1.33407 5.21501C1.33407 5.45757 1.45535 5.57885 1.69791 5.57885C1.94047 5.57885 2.18303 5.57885 2.42559 5.57885C2.66815 5.57885 2.91071 5.45757 2.91071 5.09373C2.91071 3.75966 2.91071 2.42559 2.91071 1.21279C2.91071 0.970235 2.78943 0.848956 2.54687 0.727677C2.30431 0.727677 2.06175 0.727677 1.94047 0.727677C1.57663 0.727677 1.45535 0.848955 1.45535 1.21279C1.33407 2.06175 1.33407 2.66815 1.33407 3.27454Z", "fill", "#191966"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M4.00195 6.06393C4.00195 5.45753 4.60835 4.97241 5.21475 4.97241C5.82114 4.97241 6.30626 5.45753 6.30626 6.18521C6.30626 6.7916 5.82114 7.27672 5.21475 7.27672C4.48707 7.27672 4.00195 6.7916 4.00195 6.06393ZM5.69986 6.18521C5.69986 5.94265 5.4573 5.57881 5.21475 5.57881C4.97219 5.57881 4.72963 5.82137 4.60835 6.06393C4.60835 6.30649 4.85091 6.67032 5.09347 6.67032C5.4573 6.67032 5.69986 6.42776 5.69986 6.18521Z", "fill", "#191966"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M16.4938 7.27672C15.8874 7.27672 15.281 6.7916 15.4023 6.06393C15.4023 5.45753 15.8874 4.97241 16.4938 4.97241C17.1002 4.97241 17.5854 5.45753 17.5854 6.18521C17.7066 6.7916 17.2215 7.27672 16.4938 7.27672ZM17.1002 6.06393C17.1002 5.82137 16.8577 5.57881 16.6151 5.57881C16.3726 5.57881 16.13 5.82137 16.13 6.18521C16.13 6.42776 16.3726 6.67032 16.7364 6.67032C16.8577 6.67032 17.1002 6.42777 17.1002 6.06393Z", "fill", "#191966"], [1, "location-dot-blue"], [1, "", 2, "margin", "0", "color", "#000 !important", "margin-top", "10px"], [1, "", 2, "margin", "0", "font-size", "14px", "color", "#a0a0a0"], [2, "margin", "0", "position", "absolute", "left", "30%", "top", "5px", "font-size", "14px", "color", "#A0A0A0"], ["size", "4 ", 1, "ion-no-padding"], [1, "card-corner-design", 2, "position", "relative"], [1, "card-circular-corner", "ion-margin-top", "ion-margin-bottom"], [1, "dash-line"], [1, "ion-padding"], ["size", "12", 1, "pnr-status"], ["size", "2", 2, "display", "flex", "justify-content", "center", "align-items", "center"], [1, "pnr-circle-status"], ["width", "23", "height", "23", "viewBox", "0 0 23 23", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M6.46973 7.04369L3.66703 4.24098C-0.282238 8.50874 -0.282238 15.1333 3.66703 19.4648L6.46973 16.6621C4.04921 13.9231 4.04921 9.78269 6.46973 7.04369Z", "fill", "#FBAE17"], ["d", "M7.04294 17.2353L4.24023 20.038C8.50799 23.9873 15.1326 23.9873 19.464 20.038L16.6613 17.2353C13.9223 19.6559 9.78195 19.6559 7.04294 17.2353Z", "fill", "#FBAE17"], ["d", "M17.2344 16.6621L20.0371 19.4648C23.9863 15.197 23.9863 8.57244 20.0371 4.24098L17.2344 7.04369C19.6549 9.78269 19.6549 13.9231 17.2344 16.6621Z", "fill", "#BBBDBF"], ["d", "M16.6613 6.4704L19.464 3.6677C15.1963 -0.281567 8.57169 -0.281567 4.24023 3.6677L7.04294 6.4704C9.78195 4.04989 13.9223 4.04989 16.6613 6.4704Z", "fill", "#FBAE17"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M9.33617 13.4135C9.39987 13.0313 9.27247 12.7765 8.95398 12.5854C8.69919 12.458 8.3807 12.458 8.12591 12.6491C7.87112 12.8402 7.74372 13.095 7.80742 13.4135H7.74372C7.23414 13.4135 6.72456 13.4135 6.15128 13.4135C5.96018 13.4135 5.89648 13.3498 5.89648 13.1587C5.89648 12.7765 5.89648 12.3306 5.89648 11.9484C5.89648 11.8847 5.89648 11.821 5.96018 11.821C6.02388 11.7573 6.02388 11.7573 6.02388 11.6936C6.02388 11.184 6.08758 10.7382 6.08758 10.2286C6.08758 10.1012 6.15128 10.0375 6.27867 10.0375C6.72456 10.0375 7.17044 10.0375 7.61633 10.0375C9.65466 10.0375 11.6293 10.0375 13.6676 10.0375C14.8142 10.0375 16.0244 10.0375 17.171 10.0375C17.4258 10.0375 17.6806 10.2286 17.7443 10.4834V10.5471C17.7443 11.3114 17.7443 12.0758 17.7443 12.9039C17.7443 12.9676 17.6806 13.0313 17.6169 13.0313C17.3621 13.095 17.0436 13.1587 16.7888 13.2224C16.4703 13.2861 16.0881 13.3498 15.7696 13.4135C15.6423 13.4135 15.4512 13.4772 15.2601 13.4772C15.2601 13.1587 15.1964 12.8402 14.8779 12.6491C14.7505 12.5854 14.5594 12.5217 14.432 12.5217C13.9861 12.5854 13.6676 12.9676 13.7313 13.4135C12.33 13.4135 10.8649 13.4135 9.33617 13.4135ZM11.4382 10.4834C11.1834 10.4834 10.8649 10.4834 10.6101 10.4834C10.4827 10.4834 10.3553 10.5471 10.3553 10.7382C10.3553 10.9292 10.3553 11.1203 10.3553 11.3751C10.3553 11.5662 10.419 11.6299 10.6101 11.6299C11.1834 11.6299 11.693 11.6299 12.2663 11.6299C12.3937 11.6299 12.5211 11.5662 12.5211 11.3751C12.5211 11.184 12.5211 10.9292 12.5211 10.7382C12.5211 10.6108 12.4574 10.4834 12.2663 10.4834C12.0115 10.4834 11.693 10.4834 11.4382 10.4834ZM8.95398 10.4834C8.69919 10.4834 8.3807 10.4834 8.12591 10.4834C7.99851 10.4834 7.93482 10.5471 7.87112 10.6745C7.87112 10.8655 7.87112 11.1203 7.87112 11.3114C7.87112 11.4388 7.93482 11.5025 8.06221 11.5025C8.63549 11.5025 9.20877 11.5025 9.78205 11.5025C9.90945 11.5025 9.97315 11.4388 9.97315 11.3114C9.97315 11.1203 9.97315 10.8655 9.97315 10.6745C9.97315 10.4834 9.90945 10.4197 9.71835 10.4197C9.46356 10.4834 9.20877 10.4834 8.95398 10.4834ZM13.9224 10.4834C13.6676 10.4834 13.3491 10.4834 13.0943 10.4834C12.9669 10.4834 12.9032 10.5471 12.9032 10.6745C12.9032 10.8655 12.9032 11.1203 12.9032 11.3114C12.9032 11.4388 12.9669 11.5025 13.0943 11.5025C13.6676 11.5025 14.2409 11.5025 14.8142 11.5025C14.9416 11.5025 15.0053 11.4388 15.0053 11.3114C15.0053 11.1203 15.0053 10.8655 15.0053 10.6745C15.0053 10.4834 14.9416 10.4197 14.7505 10.4197C14.4957 10.4834 14.1772 10.4834 13.9224 10.4834ZM16.4066 11.5662C16.6614 11.5662 16.9799 11.5662 17.2347 11.5662C17.3621 11.5662 17.4258 11.5025 17.4258 11.3751C17.4258 11.2477 17.4258 11.1203 17.4258 10.9292C17.4258 10.7382 17.3621 10.6108 17.171 10.5471C17.1073 10.4834 16.9799 10.4834 16.8525 10.4834C16.4066 10.4834 15.9607 10.4834 15.5149 10.4834C15.3238 10.4834 15.2601 10.5471 15.2601 10.7382C15.2601 10.9292 15.2601 11.1203 15.2601 11.3114C15.2601 11.5025 15.3238 11.5662 15.5149 11.5662C15.8333 11.5662 16.1518 11.5662 16.4066 11.5662ZM6.59716 11.7573C6.59716 12.0758 6.59716 12.458 6.59716 12.7765C6.59716 12.9039 6.66086 12.9676 6.78825 12.9676C6.91565 12.9676 7.04305 12.9676 7.17044 12.9676C7.29784 12.9676 7.42523 12.9039 7.42523 12.7128C7.42523 12.0121 7.42523 11.3114 7.42523 10.6745C7.42523 10.5471 7.36153 10.4834 7.23414 10.4197C7.10674 10.4197 6.97935 10.4197 6.91565 10.4197C6.72456 10.4197 6.66086 10.4834 6.66086 10.6745C6.59716 11.1203 6.59716 11.4388 6.59716 11.7573Z", "fill", "#BBBDBF"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7.99805 13.2224C7.99805 12.9039 8.31654 12.6491 8.63503 12.6491C8.95351 12.6491 9.20831 12.9039 9.20831 13.2861C9.20831 13.6046 8.95351 13.8594 8.63503 13.8594C8.25284 13.8594 7.99805 13.6046 7.99805 13.2224ZM8.88982 13.2861C8.88982 13.1587 8.76242 12.9676 8.63503 12.9676C8.50763 12.9676 8.38023 13.095 8.31654 13.2224C8.31654 13.3498 8.44393 13.5409 8.57133 13.5409C8.76242 13.5409 8.88982 13.4135 8.88982 13.2861Z", "fill", "#BBBDBF"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M14.559 13.8594C14.2405 13.8594 13.922 13.6046 13.9857 13.2224C13.9857 12.9039 14.2405 12.6491 14.559 12.6491C14.8775 12.6491 15.1323 12.9039 15.1323 13.2861C15.196 13.6046 14.9412 13.8594 14.559 13.8594ZM14.8775 13.2224C14.8775 13.095 14.7501 12.9676 14.6227 12.9676C14.4953 12.9676 14.3679 13.095 14.3679 13.2861C14.3679 13.4135 14.4953 13.5409 14.6864 13.5409C14.7501 13.5409 14.8775 13.4135 14.8775 13.2224Z", "fill", "#BBBDBF"], ["size", "10"], [2, "margin-top", "5px"], ["size", "12", 1, "ticket-details"], ["size", "6"], [1, "ticket-details-description"], [1, "ticket-details-status"], ["size", "6", 1, "ion-justify-content-end"], [1, "ticket-details-description", 2, "text-align", "end"], [1, "ticket-details-status", 2, "text-align", "end"], [1, "ion-no-padding"], ["size", "12", 1, ""], ["size", "2", 2, "display", "flex", "justify-content", "center"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["opacity", "0.5", "clip-path", "url(#clip0_6_6126)"], ["d", "M9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12Z", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12Z", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 2V4", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 20V22", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M20 12H22", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M2 12H4", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "clip0_6_6126"], ["width", "24", "height", "24", "fill", "white"], [1, "pickup-point"], [1, "pickup-detail"], ["class", "pickup-detail-view", 3, "click", 4, "ngIf"], ["opacity", "0.5", "clip-path", "url(#clip0_6_6134)"], ["d", "M9 11C9 11.7956 9.31607 12.5587 9.87868 13.1213C10.4413 13.6839 11.2044 14 12 14C12.7956 14 13.5587 13.6839 14.1213 13.1213C14.6839 12.5587 15 11.7956 15 11C15 10.2044 14.6839 9.44129 14.1213 8.87868C13.5587 8.31607 12.7956 8 12 8C11.2044 8 10.4413 8.31607 9.87868 8.87868C9.31607 9.44129 9 10.2044 9 11Z", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M17.657 16.657L13.414 20.9C13.039 21.2746 12.5306 21.4851 12.0005 21.4851C11.4704 21.4851 10.962 21.2746 10.587 20.9L6.343 16.657C5.22422 15.5382 4.46234 14.1127 4.15369 12.5609C3.84504 11.009 4.00349 9.40051 4.60901 7.93873C5.21452 6.47694 6.2399 5.22754 7.55548 4.3485C8.87107 3.46947 10.4178 3.00029 12 3.00029C13.5822 3.00029 15.1289 3.46947 16.4445 4.3485C17.7601 5.22754 18.7855 6.47694 19.391 7.93873C19.9965 9.40051 20.155 11.009 19.8463 12.5609C19.5377 14.1127 18.7758 15.5382 17.657 16.657Z", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "clip0_6_6134"], [1, "ion-padding", "payment-details"], ["size", "8", 2, "display", "flex", "justify-content", "start", "align-items", "center"], [1, "left"], ["size", "4", 2, "display", "flex", "justify-content", "end", "align-items", "center"], [1, "right"], ["size", "8", "style", "display: flex; justify-content: start; align-items: center", 4, "ngIf"], ["size", "4", "style", "display: flex; justify-content: end; align-items: center", 4, "ngIf"], [1, "right", 2, "font-weight", "600"], [1, "payment-details-line", "ion-margin-bottom", "ion-margin-top"], ["size", "6", 4, "ngIf"], ["class", " ticket-details", 4, "ngFor", "ngForOf"], ["class", "passengers ticket-details text-dark2 passenger-details", 4, "ngIf"], [1, "pickup-detail-view", 3, "click"], ["name", "location-outline"], [1, "ticket-details"], ["size", "3", 1, "ion-justify-content-end"], ["size", "3"], ["color", "none", "lines", "none"], ["class", "ion-no-margin", "slot", "start", 3, "ngModel", "ionChange", "ngModelChange", 4, "ngIf"], ["slot", "start", 1, "ion-no-margin", 3, "ionChange", "ngModelChange", "ngModel"], [1, "passengers", "ticket-details", "text-dark2", "passenger-details"], ["mode", "md", 3, "ngModelChange", "ngModel"], ["value", "2", "slot", "start", "checked", ""], ["value", "3", "slot", "start", "checked", ""], ["slot", "start", "value", "1"], ["mode", "md"], ["slot", "start"], [1, "bg-content"], ["class", "passengers ticket-details text-dark2 fare-details", 4, "ngIf"], ["padding", "", 4, "ngIf"], [1, "passengers", "ticket-details", "text-dark2", "fare-details"], [1, "passenger-body", "grey-box"], [1, "seabird-Contact-details", 2, "padding-bottom", "10px", "border-bottom", "1px solid #ddd"], ["width-50", ""], [1, "small"], [1, "small", "bold"], [1, "seabird-Contact-details"], [1, "bold", "small"], [1, "text-center"], ["ngFor", "", 3, "ngForOf"], [1, "", 3, "click"], [1, "bold", 3, "click"], [1, "", 3, "click", "ngClass"], ["class", "SeaBird_check", "mode", "md", 3, "ngModel", "ionChange", "ngModelChange", 4, "ngIf"], ["mode", "md", 1, "SeaBird_check", 3, "ionChange", "ngModelChange", "ngModel"], ["color", "red", "value", "2", "slot", "start", "checked", ""], ["color", "red", "value", "3", "slot", "start", "checked", ""], ["color", "red", "slot", "start", "value", "1"], ["padding", ""], ["mode", "md", "expand", "block", 1, "seabird-login-btn", 3, "click"], [1, "legend-box"], [1, "txt-msg-hd"], [2, "font-weight", "700"], ["size", "2"], ["size", "4", 1, "brws-txt", 3, "click"], ["size", "6", 1, "SeaBird_dwn-txt", 3, "click"], [1, "Contact-details"], ["color", "primary", 3, "ngModel", "ionChange", "ngModelChange", 4, "ngIf"], ["color", "primary", 3, "ionChange", "ngModelChange", "ngModel"], ["mode", "md", "expand", "block", 1, "login-btn", 3, "click"], ["size", "6", 1, "dwn-txt", 3, "click"], [1, "ourbustheme"], ["size", "8", 2, "display", "flex", "align-items", "center", "text-align", "center"], [1, "bg-content", "ourbustheme"], ["class", "ticket-details text-dark2 fare-details", 4, "ngIf"], ["class", "whole center ourbustheme", 4, "ngIf"], [1, "ticket-details", "text-dark2", "fare-details"], [1, "passenger-body", 2, "background", "#fff", "margin-inline", "14px", "margin", "10px 16px"], [1, "Contact-details", 2, "margin-left", "5px", "margin-bottom", "10px", "margin-top", "15px"], [1, "ourbus_small"], [1, "ourbus_small_bold"], [1, "passenger-body"], [1, "Contact-details", 2, "display", "flex", "margin-left", "5px"], ["src", "././assets/icon/ourbus_multiUsers.svg"], [1, "small", "table-small"], [1, "bold", "small", 2, "color", "#000"], [1, "orbsBorder"], [1, "text-center", "orbsBorder"], [1, "orbsBorder", 3, "click"], ["mode", "md", "class", "SeaBird_check", 3, "ngModel", "ionChange", "ngModelChange", 4, "ngIf"], [1, "Contact-details", 2, "display", "flex", "margin-left", "15px"], ["src", "././assets/icon/ourbus_credit_card.svg"], ["mode", "md", "expand", "block", 1, "ourbus_login_btn", 3, "click"], ["fill", "outline", "mode", "md", "expand", "block", 1, "ourbus-outline-btn", 3, "click"], [1, "whole", "center", "ourbustheme"], [1, "legend-box", 2, "width", "350px"], [1, "Our_bus_Cancellation"], [1, "Our_bus_Cancel"], [1, "OurBus_para"], [1, "OurBus_para1"], ["mode", "md", "expand", "block", 1, "OurBus_login-btn", 3, "click"], ["mode", "md", "expand", "block", 1, "OurBus_Close", 3, "click"]],
  template: function CancelConfirmationTicketPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, CancelConfirmationTicketPage_ng_container_0_Template, 17, 3, "ng-container", 0)(1, CancelConfirmationTicketPage_ng_container_1_Template, 13, 5, "ng-container", 0)(2, CancelConfirmationTicketPage_ng_container_2_Template, 13, 5, "ng-container", 0)(3, CancelConfirmationTicketPage_ng_container_3_Template, 17, 5, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonRadio, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonRadioGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonBackButton, _angular_common__WEBPACK_IMPORTED_MODULE_15__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DecimalPipe],
  styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n}\n\n.gap[_ngcontent-%COMP%] {\n  transition: all linear 0.3s;\n  height: 0px;\n}\n\n.h80[_ngcontent-%COMP%] {\n  height: 60px;\n}\n\n.table-bordered[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n}\n\n.table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], \n.table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], \n.table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], \n.table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%], \n.table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%], \n.table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n}\n\n.table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], \n.table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  border-bottom-width: 2px;\n}\n\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  padding: 7px 2px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n\n.ticket-details[_ngcontent-%COMP%]   ion-row.fare[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  \n\n  padding: 0px 0;\n}\n.ticket-details[_ngcontent-%COMP%]   ion-row.fare[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.bottom-btn[_ngcontent-%COMP%] {\n  transition: all 0.25s ease-out;\n}\n\n.bottom-btn.down[_ngcontent-%COMP%] {\n  bottom: -40px;\n}\n\n.checkbox-ios[_ngcontent-%COMP%]   .checkbox-icon[_ngcontent-%COMP%] {\n  border-color: #999;\n}\n\n.checkbox-ios[_ngcontent-%COMP%]   .checkbox-icon.checkbox-checked[_ngcontent-%COMP%] {\n  border-color: #fff;\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  bottom: 0;\n  height: 50px;\n  border-radius: 4px;\n}\n\n.seabird-login-btn[_ngcontent-%COMP%] {\n  height: 50px;\n  text-transform: initial;\n  --background: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  position: relative;\n  --border-radius: 20px;\n  bottom: 11px;\n}\n\n.whole[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.6);\n}\n\n.legend-box[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 300px;\n}\n\n.legend-box1[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 300px;\n  border-top-right-radius: 8px;\n  border-top-left-radius: 8px;\n}\n\nh5.title.uppercase[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  margin: 0;\n  padding: 5px 0px 1px;\n  border-bottom: 1px solid #ddd;\n}\n\n.primary-text[_ngcontent-%COMP%] {\n  color: #0044ff;\n}\n\n.contents[_ngcontent-%COMP%] {\n  transition: height 0.2s ease-in-out;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n  font-size: 1.2em;\n  margin: 3px;\n  \n\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: 0;\n  font-family: inherit;\n  font-style: inherit;\n  font-variant: inherit;\n  line-height: 1;\n  text-transform: none;\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n\n.seat-cancelled[_ngcontent-%COMP%] {\n  color: #ff8181;\n}\n\n.passengers[_ngcontent-%COMP%] {\n  margin: 12px;\n}\n\n.passengers[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  font-size: 1.2rem;\n  margin: 0;\n  position: relative;\n  background-color: #efefef;\n  color: #111;\n}\n\n.passengers[_ngcontent-%COMP%]   .passenger-body[_ngcontent-%COMP%] {\n  padding: 0 10px 10px 10px;\n}\n\n.passengers[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 10px 10px 0 0;\n  font-size: 1.7em;\n  padding: 20px 5px 0;\n}\n\n.passengers[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  background-color: #fdfdfd;\n  padding: 0;\n  margin: 0;\n}\n\n.small[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n\n.bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.grey-box[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  border: 1px solid #ddd;\n  background-color: #fdfdfd;\n  padding: 10px;\n  overflow: hidden;\n}\n\n.passengers[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], \n.passengers[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n\n.passengers[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .text-input[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n\n.passengers[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --ion-background-color: var(--viewBgColor);\n}\n\n.Contact-details[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: var(--sectionHeaderTextColor);\n  margin-top: 10px;\n}\n\n.seabird-Contact-details[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  margin-top: 10px;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-top: none;\n}\n\n.brws-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #4a4a4a;\n  margin-top: 28px;\n  width: 100%;\n  text-align: left;\n}\n\n.dwn-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #ed3237;\n  margin-top: 28px;\n  width: 100%;\n  text-align: right;\n}\n\n.txt-msg-hd[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bolder;\n  font-family: NotoSans;\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.txt-msg[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: normal;\n  text-align: justify;\n  letter-spacing: 0.25px;\n  color: rgba(0, 0, 0, 0.6);\n  width: 100%;\n}\n\nion-card[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\nion-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-align: center;\n}\nion-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin: 0;\n  text-align: center;\n}\nion-card[_ngcontent-%COMP%]   .location-line[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n  background-color: #DFDFDF;\n  position: relative;\n}\nion-card[_ngcontent-%COMP%]   .location-line[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: rgba(242, 194, 26, 0.2);\n  position: absolute;\n  left: -8px;\n  top: -8px;\n}\nion-card[_ngcontent-%COMP%]   .location-line[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: rgba(25, 25, 102, 0.2);\n  position: absolute;\n  top: -8px;\n  right: -8px;\n}\nion-card[_ngcontent-%COMP%]   .location-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  background-color: #f2c21a;\n  border-radius: 50%;\n  position: absolute;\n  left: -4px;\n  top: -4px;\n}\nion-card[_ngcontent-%COMP%]   .location-dot-blue[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  background-color: #191966;\n  border-radius: 50%;\n  position: absolute;\n  right: -4px;\n  top: -4px;\n}\nion-card[_ngcontent-%COMP%]   .location-bus[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -3px;\n  right: 40%;\n}\nion-card[_ngcontent-%COMP%]   .card-circular-corner[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background-color: #191966;\n  position: absolute;\n  bottom: -12px;\n  left: -12px;\n}\nion-card[_ngcontent-%COMP%]   .card-circular-corner[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background-color: #191966;\n  position: absolute;\n  right: -12px;\n  bottom: -12px;\n}\nion-card[_ngcontent-%COMP%]   .dash-line[_ngcontent-%COMP%] {\n  border-top: 1px dashed #DFDFDF;\n  margin: 0px 25px;\n}\nion-card[_ngcontent-%COMP%]   .pnr-status[_ngcontent-%COMP%] {\n  background-color: #F3F3F7;\n  border-radius: 10px;\n}\nion-card[_ngcontent-%COMP%]   .pnr-status[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: start;\n  font-size: 14px;\n  font-weight: 600;\n}\nion-card[_ngcontent-%COMP%]   .pnr-status[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 16px 0px;\n  text-align: start;\n  font-size: 16px;\n  font-weight: 600;\n}\nion-card[_ngcontent-%COMP%]   .pnr-status[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: start;\n  font-size: 10px;\n}\nion-card[_ngcontent-%COMP%]   .pnr-status[_ngcontent-%COMP%]   .track-circle[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background-color: #FFBD16;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-card[_ngcontent-%COMP%]   .pnr-circle-status[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  border: 1px solid #DFDFDF;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n}\nion-card[_ngcontent-%COMP%]   .ticket-details[_ngcontent-%COMP%]   p.ticket-details-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #A0A0A0;\n  text-align: start;\n}\nion-card[_ngcontent-%COMP%]   .ticket-details[_ngcontent-%COMP%]   p.ticket-details-status[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #333333;\n  text-align: start;\n  font-weight: 600;\n  margin-top: 5px;\n  margin-bottom: 12px;\n}\nion-card[_ngcontent-%COMP%]   .ticket-details[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%] {\n  --background-checked: #191966;\n}\nion-card[_ngcontent-%COMP%]   .ticket-details[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\nion-card[_ngcontent-%COMP%]   .ticket-details[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]::part(container) {\n  border-radius: 6px;\n}\nion-card[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%] {\n  --size: 20px;\n  --background-checked: #191966;\n  --color: #191966 !important;\n  --background: #191966 !important;\n}\nion-card[_ngcontent-%COMP%]   .pickup-point[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: start;\n  color: #A0A0A0;\n}\nion-card[_ngcontent-%COMP%]   .pickup-detail[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: start;\n  font-weight: 400;\n  margin-bottom: 5px;\n  color: #333333;\n}\nion-card[_ngcontent-%COMP%]   .pickup-detail-view[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: start;\n  color: #191966;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n}\nion-card[_ngcontent-%COMP%]   .pickup-detail-view[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\nion-card[_ngcontent-%COMP%]   .bus-contact[_ngcontent-%COMP%]   h4.light-font[_ngcontent-%COMP%] {\n  color: #A0A0A0;\n  font-size: 14px;\n  margin: 0;\n}\nion-card[_ngcontent-%COMP%]   .bus-contact[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n}\nion-card[_ngcontent-%COMP%]   .bus-contact[_ngcontent-%COMP%]   .bus-contact-circle[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: #25E88A;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%] {\n  background-color: #F3F3F7;\n  border-radius: 10px;\n}\nion-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n  text-align: left;\n  color: #333333;\n}\nion-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   p.left[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: left;\n  font-weight: 500;\n  color: #333333;\n}\nion-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   p.right[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: right;\n  color: #333333;\n}\nion-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-details-line[_ngcontent-%COMP%] {\n  height: 1px;\n  border-top: 1px solid #C2C2C2;\n}\nion-card[_ngcontent-%COMP%]   h2.edit-ticket[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: left;\n  font-size: 16px;\n  color: #191966;\n  font-weight: 600;\n}\n\nion-button.cancel-button[_ngcontent-%COMP%]::part(native) {\n  background-color: #F2C21A;\n  color: #191966;\n}\n\nion-button.cancel-button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.theme-1-legend-box[_ngcontent-%COMP%] {\n  border-radius: 18px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 100%;\n}\n\n.legend-box1[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 100%;\n  border-top-right-radius: 8px;\n  border-top-left-radius: 8px;\n}\n\n.cancel-details[_ngcontent-%COMP%]   p.left[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: left;\n  font-weight: 600;\n  color: #333333;\n}\n.cancel-details[_ngcontent-%COMP%]   p.right[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: right;\n  font-weight: 600;\n  color: #333333;\n}\n\n.cancel-close-btn[_ngcontent-%COMP%] {\n  background: #eaeef3;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  color: #181d64;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.cancel-btn[_ngcontent-%COMP%] {\n  background: #f2c038;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  color: #181d64;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.cancel-txt-msg-hd[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bolder;\n  font-family: NotoSans;\n  color: #333;\n}\n\n.SeaBird_check[_ngcontent-%COMP%] {\n  --ion-color-primary: #3c3e52 !important;\n}\n\n.SeaBird_dwn-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #2b28ce;\n  margin-top: 28px;\n  width: 100%;\n  text-align: right;\n}\n\n.custom-radio[_ngcontent-%COMP%] {\n  --color-checked: green;\n  --color: green;\n}\n\n.Our_bus_Cancellation[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  font-family: NotoSans;\n  text-align: center;\n  margin-bottom: 10px;\n}\n\n.OurBus_login-btn[_ngcontent-%COMP%] {\n  text-transform: initial;\n  --background: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bold;\n  font-size: 13px;\n  --border-radius: 10px;\n  margin-bottom: 10px;\n  height: 50px;\n}\n\n.OurBus_Close[_ngcontent-%COMP%] {\n  text-transform: initial;\n  --background: var(--primaryText);\n  color: var(--iconsAndButtonsColor);\n  font-family: NotoSans;\n  font-weight: bold;\n  font-size: 13px;\n  border-radius: 4px;\n  border: solid 1px #4caf50;\n  height: 50px;\n}\n\n.Our_bus_Cancel[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: normal;\n  text-align: justify;\n  letter-spacing: 0.25px;\n  color: rgba(0, 0, 0, 0.6);\n  width: 100%;\n  padding: 10px;\n}\n\n.OurBus_para[_ngcontent-%COMP%] {\n  margin: 0px;\n  color: black;\n}\n\n.OurBus_para1[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.ourbustheme[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%] {\n  --color: var(--iconsAndButtonsColor);\n  --color-checked: var(--iconsAndButtonsColor);\n}\n\n.ourbus_login_btn[_ngcontent-%COMP%] {\n  text-transform: initial;\n  --background: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-weight: bolder;\n  font-size: 14px;\n  bottom: 0;\n  height: 45px;\n  --border-radius: 12px;\n  margin: 12px;\n  height: 50px;\n}\n\n.ourbus-outline-btn[_ngcontent-%COMP%] {\n  margin: 12px;\n  text-transform: initial;\n  color: var(--iconsAndButtonsColor);\n  --border-color:var(--iconsAndButtonsColor);\n  --border-width: 1px;\n  font-weight: bolder;\n  font-size: 14px;\n  height: 45px;\n  --border-radius: 10px;\n  height: 50px;\n  --background-activated:#fff !important;\n  --background:#fff !important;\n}\n\n.ourbus_small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.ourbus_small_bold[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #000;\n  font-weight: 700;\n}\n\n.table-small[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), \n.table-small[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  width: 45%; \n\n}\n\n.table-small[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), \n.table-small[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n  width: 30%; \n\n}\n\n.table-small[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), \n.table-small[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\n  width: 15%; \n\n}\n\n.orbsBorder[_ngcontent-%COMP%] {\n  border: none !important;\n}\n.orbsBorder[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.orbsBorder[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: none !important;\n  border-bottom: none !important;\n}"]
});

/***/ })

}]);