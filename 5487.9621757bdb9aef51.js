"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[5487],{

/***/ 20966
/*!*******************************************************************************!*\
  !*** ./src/app/phone-confirm-booking/phone-confirm-booking-routing.module.ts ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhoneConfirmBookingPageRoutingModule: () => (/* binding */ PhoneConfirmBookingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 49870);
/* harmony import */ var _phone_confirm_booking_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone-confirm-booking.page */ 7768);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _PhoneConfirmBookingPageRoutingModule;




const routes = [{
  path: '',
  component: _phone_confirm_booking_page__WEBPACK_IMPORTED_MODULE_1__.PhoneConfirmBookingPage
}];
class PhoneConfirmBookingPageRoutingModule {}
_PhoneConfirmBookingPageRoutingModule = PhoneConfirmBookingPageRoutingModule;
_PhoneConfirmBookingPageRoutingModule.ɵfac = function PhoneConfirmBookingPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PhoneConfirmBookingPageRoutingModule)();
};
_PhoneConfirmBookingPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _PhoneConfirmBookingPageRoutingModule
});
_PhoneConfirmBookingPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PhoneConfirmBookingPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 85487
/*!***********************************************************************!*\
  !*** ./src/app/phone-confirm-booking/phone-confirm-booking.module.ts ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhoneConfirmBookingPageModule: () => (/* binding */ PhoneConfirmBookingPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _phone_confirm_booking_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./phone-confirm-booking-routing.module */ 20966);
/* harmony import */ var _phone_confirm_booking_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./phone-confirm-booking.page */ 7768);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 51670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 17705);
var _PhoneConfirmBookingPageModule;







class PhoneConfirmBookingPageModule {}
_PhoneConfirmBookingPageModule = PhoneConfirmBookingPageModule;
_PhoneConfirmBookingPageModule.ɵfac = function PhoneConfirmBookingPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PhoneConfirmBookingPageModule)();
};
_PhoneConfirmBookingPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _PhoneConfirmBookingPageModule
});
_PhoneConfirmBookingPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__.InAppBrowser],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _phone_confirm_booking_routing_module__WEBPACK_IMPORTED_MODULE_3__.PhoneConfirmBookingPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PhoneConfirmBookingPageModule, {
    declarations: [_phone_confirm_booking_page__WEBPACK_IMPORTED_MODULE_4__.PhoneConfirmBookingPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _phone_confirm_booking_routing_module__WEBPACK_IMPORTED_MODULE_3__.PhoneConfirmBookingPageRoutingModule]
  });
})();

/***/ },

/***/ 7768
/*!*********************************************************************!*\
  !*** ./src/app/phone-confirm-booking/phone-confirm-booking.page.ts ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhoneConfirmBookingPage: () => (/* binding */ PhoneConfirmBookingPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/geolocation */ 37762);
/* harmony import */ var capacitor_razorpay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! capacitor-razorpay */ 71602);
/* harmony import */ var _ease_buzz_page_ease_buzz_page_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ease-buzz-page/ease-buzz-page.page */ 17914);
/* harmony import */ var ionic_capacitor_phonepe_pg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-capacitor-phonepe-pg */ 17274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 51670);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _app_services_appdata__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../app/services/appdata */ 40172);
/* harmony import */ var _services_plugin_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/plugin.service */ 65765);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 83087);
/* harmony import */ var _services_exception__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/exception */ 91502);
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../services/authentication */ 82491);
/* harmony import */ var _services_global_data_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../services/global-data.service */ 7516);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 89417);

var _PhoneConfirmBookingPage;






















const _c0 = () => ({
  "color": "#000"
});
const _c1 = () => ({
  "color": "#fff"
});
const _c2 = () => ({
  "--background": "#191966"
});
const _c3 = () => ({
  "--background": "var(--bottomBarColor)"
});
const _c4 = () => ({});
const _c5 = () => ({
  "color": "#191966",
  "--color-checked": "#191966"
});
const _c6 = () => ({
  "color": "var(--bottomBarColor)",
  "--color-checked": "var(--bottomBarColor)"
});
const _c7 = () => ({
  "color": "#191966"
});
function PhoneConfirmBookingPage_ng_container_0_ion_row_10__svg_svg_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "svg", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "path", 66)(2, "path", 67)(3, "path", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PhoneConfirmBookingPage_ng_container_0_ion_row_10_h3_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r2.ticketDetail.duration.split(":")[0] + "h " + ctx_r2.ticketDetail.duration.split(":")[1] + "m", " ");
  }
}
function PhoneConfirmBookingPage_ng_container_0_ion_row_10_h3_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r2.ticketDetail.duration.split(":")[0] + "h " + ctx_r2.ticketDetail.duration.split(":")[1] + "m", " ");
  }
}
function PhoneConfirmBookingPage_ng_container_0_ion_row_10__svg_svg_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "svg", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "path", 72)(2, "path", 73)(3, "path", 74)(4, "path", 75)(5, "path", 76)(6, "path", 77)(7, "path", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PhoneConfirmBookingPage_ng_container_0_ion_row_10_img_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 79);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r2.roundedLogo, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function PhoneConfirmBookingPage_ng_container_0_ion_row_10_ion_row_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 33)(2, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Passenger name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-col", 36)(7, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Seat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const passenger_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](passenger_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", passenger_r4.seat_number, " ");
  }
}
function PhoneConfirmBookingPage_ng_container_0_ion_row_10_div_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_0_ion_row_10_div_97_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.gotoMaps(ctx_r2.ticketDetail.boarding_details));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-icon", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "View on Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function PhoneConfirmBookingPage_ng_container_0_ion_row_10_div_112_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_0_ion_row_10_div_112_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.gotoMaps(ctx_r2.ticketDetail.drop_off_details));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-icon", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "View on Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function PhoneConfirmBookingPage_ng_container_0_ion_row_10_ion_label_127_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Chartered Wallet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-icon", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_0_ion_row_10_ion_label_127_Template_ion_icon_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.showWalletDets = !ctx_r2.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PhoneConfirmBookingPage_ng_container_0_ion_row_10_ion_label_128_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-icon", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_0_ion_row_10_ion_label_128_Template_ion_icon_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.showWalletDets = !ctx_r2.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r2.walletText, " ");
  }
}
function PhoneConfirmBookingPage_ng_container_0_ion_row_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 10)(2, "ion-card", 11)(3, "ion-grid")(4, "ion-row")(5, "ion-col", 12)(6, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "ion-col", 14)(12, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "ion-col", 12)(16, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "ion-col", 16)(19, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, PhoneConfirmBookingPage_ng_container_0_ion_row_10__svg_svg_22_Template, 4, 0, "svg", 17)(23, PhoneConfirmBookingPage_ng_container_0_ion_row_10_h3_23_Template, 2, 1, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "ion-col", 12)(26, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "ion-col", 12)(29, "h2", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, PhoneConfirmBookingPage_ng_container_0_ion_row_10_h3_32_Template, 2, 1, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "ion-col", 14)(34, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "ion-col", 12)(37, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Depart");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "ion-col", 12)(42, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Arrive");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 22)(45, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](46, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "ion-grid")(48, "ion-row", 25)(49, "ion-col", 26)(50, "ion-row")(51, "ion-col", 27)(52, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](53, PhoneConfirmBookingPage_ng_container_0_ion_row_10__svg_svg_53_Template, 8, 0, "svg", 29)(54, PhoneConfirmBookingPage_ng_container_0_ion_row_10_img_54_Template, 1, 1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "ion-col", 31)(56, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "ion-col", 32)(61, "ion-row")(62, "ion-col", 33)(63, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "ion-col", 36)(68, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, " PNR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](72, PhoneConfirmBookingPage_ng_container_0_ion_row_10_ion_row_72_Template, 11, 2, "ion-row", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div", 22)(74, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](75, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "ion-grid")(77, "ion-row")(78, "ion-col", 40)(79, "ion-row")(80, "ion-col", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "svg", 42)(82, "g", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](83, "path", 44)(84, "path", 45)(85, "path", 46)(86, "path", 47)(87, "path", 48)(88, "path", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "defs")(90, "clipPath", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](91, "rect", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "ion-col", 31)(93, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](94, "Pickup Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](97, PhoneConfirmBookingPage_ng_container_0_ion_row_10_div_97_Template, 4, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "ion-row")(99, "ion-col", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "svg", 42)(101, "g", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](102, "path", 56)(103, "path", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "defs")(105, "clipPath", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](106, "rect", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](107, "ion-col", 31)(108, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](109, "Drop Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](112, PhoneConfirmBookingPage_ng_container_0_ion_row_10_div_112_Template, 4, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](113, "div", 22)(114, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](115, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "ion-grid")(117, "ion-row", 25)(118, "ion-col", 10)(119, "h2", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](120, "Select Payment Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "ion-radio-group", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function PhoneConfirmBookingPage_ng_container_0_ion_row_10_Template_ion_radio_group_ngModelChange_121_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.bookType, $event) || (ctx_r2.bookType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ionChange", function PhoneConfirmBookingPage_ng_container_0_ion_row_10_Template_ion_radio_group_ionChange_121_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.bookTypeChanged(ctx_r2.bookType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "ion-item", 61)(123, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](124, " Book Online ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](125, "ion-radio", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](126, "ion-item", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](127, PhoneConfirmBookingPage_ng_container_0_ion_row_10_ion_label_127_Template, 4, 0, "ion-label", 63)(128, PhoneConfirmBookingPage_ng_container_0_ion_row_10_ion_label_128_Template, 4, 1, "ion-label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](129, "ion-radio", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "cbus_src" : "theme1_src");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 31, ctx_r2.ticketDetail.origin.substring(0, 3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "cbus_desti" : "theme1_src");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](14, 33, ctx_r2.ticketDetail.destination.substring(0, 3)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.ticketDetail.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "location-line" : "location-line_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "location-dot" : "location-dot_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "location-bus" : "location-bus_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "location-dot-blue" : "location-dot-blue_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.ticketDetail.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r2.ticketDetail.boarding_details.dep_time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r2.ticketDetail.drop_off_details.arr_time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.ticketDetail.service_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.ticketDetail.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.getFormatedDate(ctx_r2.ticketDetail.travel_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r2.ticketDetail.ticket_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.ticketDetail.passenger_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r2.ticketDetail.boarding_details.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.ticketDetail.boarding_details.latitude);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r2.ticketDetail.drop_off_details ? ctx_r2.ticketDetail.drop_off_details.address : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.ticketDetail.drop_off_details.latitude);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.bookType);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", ctx_r2.metaData.msiteFolder == "cbustheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](35, _c5) : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](36, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", ctx_r2.metaData.msiteFolder == "cbustheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](37, _c5) : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](38, _c6));
  }
}
function PhoneConfirmBookingPage_ng_container_0_div_16_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 90)(1, "ion-row")(2, "ion-col", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-col", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Money earned from cashback and coupons");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Promotional : ", ctx_r2.promobalance, " ");
  }
}
function PhoneConfirmBookingPage_ng_container_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 85)(1, "div", 86)(2, "ion-row")(3, "ion-col", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ion-col", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_0_div_16_Template_ion_col_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.showWalletDets = !ctx_r2.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, PhoneConfirmBookingPage_ng_container_0_div_16_div_7_Template, 9, 1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 90)(9, "ion-row")(10, "ion-col", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "img", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "ion-col", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " Money added by you in wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", ctx_r2.metaData.msiteFolder == "cbustheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](3, _c7) : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.metaData.is_wallet_promotional);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Non-promotional : ", ctx_r2.nonpromobalance, "");
  }
}
function PhoneConfirmBookingPage_ng_container_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 85)(1, "div", 96)(2, "ion-row")(3, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Important: Your onward trip has been booked successfully. To complete your travel, please book the return trip from My Trips \u2014 it's still in Phone Block status.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-col", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_0_div_17_Template_ion_col_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.gotoMyBookings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "OKAY ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}
function PhoneConfirmBookingPage_ng_container_0_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 85)(1, "div", 101)(2, "ion-row")(3, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "payment failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_0_div_18_Template_ion_col_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.paymentFailed = !ctx_r2.paymentFailed);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "OKAY ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}
function PhoneConfirmBookingPage_ng_container_0_div_19_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("( ", ctx_r2.timer, " )");
  }
}
function PhoneConfirmBookingPage_ng_container_0_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 85)(1, "div", 104)(2, "ion-row")(3, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Payment Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Your payment is pending with the Payment gateway. Kindly wait until we are confirming the payment.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-row")(8, "ion-col", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_0_div_19_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.timer === 0 && (ctx_r2.isPendingPayment = !ctx_r2.isPendingPayment));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Cancel Payment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, PhoneConfirmBookingPage_ng_container_0_div_19_span_11_Template, 2, 1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("disabled", ctx_r2.timer > 0)("enable", ctx_r2.timer == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.timer > 0);
  }
}
function PhoneConfirmBookingPage_ng_container_0_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 85)(1, "div", 101)(2, "ion-row")(3, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "This ticket has been booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_0_div_20_Template_ion_col_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.viewTicketPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "VIEW TICKET ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}
function PhoneConfirmBookingPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-header", 1)(2, "ion-toolbar", 2)(3, "ion-buttons", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ion-title", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Confirm Phone Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-content", 5)(8, "ion-toolbar", 4)(9, "ion-grid", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, PhoneConfirmBookingPage_ng_container_0_ion_row_10_Template, 130, 39, "ion-row", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "ion-row")(12, "ion-col", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_0_Template_ion_col_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.confirmBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "ion-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " Continue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, PhoneConfirmBookingPage_ng_container_0_div_16_Template, 17, 5, "div", 9)(17, PhoneConfirmBookingPage_ng_container_0_div_17_Template, 11, 0, "div", 9)(18, PhoneConfirmBookingPage_ng_container_0_div_18_Template, 11, 0, "div", 9)(19, PhoneConfirmBookingPage_ng_container_0_div_19_Template, 12, 5, "div", 9)(20, PhoneConfirmBookingPage_ng_container_0_div_20_Template, 11, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("translucent", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "cbus_header" : "theme1_header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", ctx_r2.metaData.msiteFolder == "cbustheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](14, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](15, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", ctx_r2.metaData.msiteFolder == "cbustheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](16, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](17, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder != "cbustheme" ? "theme1_header" : "")("ngStyle", ctx_r2.metaData.msiteFolder == "cbustheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](18, _c2) : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](19, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", ctx_r2.metaData.msiteFolder == "networktheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](20, _c3) : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](21, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "cbusBgset" : "theme1BgSet");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.ticketDetail);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.showWalletDets);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.showConfirmReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.paymentFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.isPendingPayment);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.viewTicket);
  }
}
function PhoneConfirmBookingPage_ng_container_1_ion_card_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-card", 114)(1, "div")(2, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Fare Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 116)(5, "ion-row")(6, "ion-col", 117)(7, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Refundable Booking Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-col", 117)(10, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "ion-row")(13, "ion-col", 117)(14, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Total Payable");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "ion-col", 117)(17, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.RefundableCharge());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.getTotalPayable());
  }
}
function PhoneConfirmBookingPage_ng_container_1_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "ion-item", 122)(2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Refund Protect");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-checkbox", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function PhoneConfirmBookingPage_ng_container_1_div_57_Template_ion_checkbox_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.showhide, $event) || (ctx_r2.showhide = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r2.metaData.isCancelProtectMandatory);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.showhide);
  }
}
function PhoneConfirmBookingPage_ng_container_1_ion_card_71_div_5_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_1_ion_card_71_div_5_ion_item_1_Template_ion_item_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const payType_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      ctx_r2.paymentType = payType_r18.id;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.calculatePgCharges(ctx_r2.paymentType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-radio", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](payType_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", payType_r18 ? payType_r18.id : "");
  }
}
function PhoneConfirmBookingPage_ng_container_1_ion_card_71_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PhoneConfirmBookingPage_ng_container_1_ion_card_71_div_5_ion_item_1_Template, 4, 2, "ion-item", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", payType_r18.name && payType_r18.name.toUpperCase().indexOf("EBS") < 0);
  }
}
function PhoneConfirmBookingPage_ng_container_1_ion_card_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-card", 114)(1, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Payment options");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-list", 122)(4, "ion-radio-group", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function PhoneConfirmBookingPage_ng_container_1_ion_card_71_Template_ion_radio_group_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.paymentType, $event) || (ctx_r2.paymentType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ionChange", function PhoneConfirmBookingPage_ng_container_1_ion_card_71_Template_ion_radio_group_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.calculatePgCharges(ctx_r2.paymentType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, PhoneConfirmBookingPage_ng_container_1_ion_card_71_div_5_Template, 2, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.paymentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.metaData.payMentGateWayTypes);
  }
}
function PhoneConfirmBookingPage_ng_container_1_div_76_ion_row_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-col", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-col", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_1_div_76_ion_row_6_Template_ion_col_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.navCtrl.navigateForward("wallet"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "ADD MONEY");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_1_div_76_ion_row_6_Template_ion_col_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.bookTypeChanged(ctx_r2.bookType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "PAY ONLINE");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function PhoneConfirmBookingPage_ng_container_1_div_76_ion_row_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-col", 91)(2, "ion-col", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_1_div_76_ion_row_7_Template_ion_col_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.walletNoteModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "CANCEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function PhoneConfirmBookingPage_ng_container_1_div_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_1_div_76_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.walletNoteModal = !ctx_r2.walletNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 101)(2, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Wallet Booking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, PhoneConfirmBookingPage_ng_container_1_div_76_ion_row_6_Template, 6, 0, "ion-row", 0)(7, PhoneConfirmBookingPage_ng_container_1_div_76_ion_row_7_Template, 5, 0, "ion-row", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.walletMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.isShowWalletBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.isShowWalletBtn);
  }
}
function PhoneConfirmBookingPage_ng_container_1_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 85)(1, "div", 101)(2, "ion-row")(3, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "This ticket has been booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_1_div_77_Template_ion_col_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.viewTicketPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "VIEW TICKET ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}
function PhoneConfirmBookingPage_ng_container_1_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 85)(1, "div", 101)(2, "ion-row")(3, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Your payment has failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_1_div_78_Template_ion_col_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.paymentFailed = !ctx_r2.paymentFailed);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "TRY AGAIN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}
function PhoneConfirmBookingPage_ng_container_1_div_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 85)(1, "div", 96)(2, "ion-row")(3, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Important: Your onward trip has been booked successfully. To complete your travel, please book the return trip from My Bookings \u2014 it's still in Phone Block status.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-col", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_1_div_79_Template_ion_col_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.gotoMyBookings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "OKAY ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}
function PhoneConfirmBookingPage_ng_container_1_div_80_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("( ", ctx_r2.timer, " )");
  }
}
function PhoneConfirmBookingPage_ng_container_1_div_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 85)(1, "div", 104)(2, "ion-row")(3, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Payment Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Your payment is pending with the Payment gateway. Kindly wait until we are confirming the payment.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-row")(8, "ion-col", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_1_div_80_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.timer === 0 && (ctx_r2.isPendingPayment = !ctx_r2.isPendingPayment));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Cancel Payment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, PhoneConfirmBookingPage_ng_container_1_div_80_span_11_Template, 2, 1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("disabled", ctx_r2.timer > 0)("enable", ctx_r2.timer == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.timer > 0);
  }
}
function PhoneConfirmBookingPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 109)(3, "ion-buttons", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Confirm Phone Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-content", 112)(8, "div", 113)(9, "ion-card", 114)(10, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Ticket Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 116)(13, "ion-row")(14, "ion-col", 117)(15, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Ticket number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "ion-col", 117)(18, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "ion-row")(21, "ion-col", 117)(22, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Seat numbers");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "ion-col", 117)(25, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "ion-row")(28, "ion-col", 117)(29, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Origin");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "ion-col", 117)(32, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "ion-row")(35, "ion-col", 117)(36, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Destination");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "ion-col", 117)(39, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "ion-row")(42, "ion-col", 117)(43, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "Date of journey");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "ion-col", 117)(46, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "ion-row")(49, "ion-col", 117)(50, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "ion-col", 117)(53, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](55, PhoneConfirmBookingPage_ng_container_1_ion_card_55_Template, 19, 2, "ion-card", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "ion-card", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](57, PhoneConfirmBookingPage_ng_container_1_div_57_Template, 5, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "ion-card", 114)(59, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Select Payment Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "ion-list", 122)(62, "ion-radio-group", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function PhoneConfirmBookingPage_ng_container_1_Template_ion_radio_group_ngModelChange_62_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.bookType, $event) || (ctx_r2.bookType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ionChange", function PhoneConfirmBookingPage_ng_container_1_Template_ion_radio_group_ionChange_62_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.bookTypeChanged(ctx_r2.bookType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "ion-item", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_1_Template_ion_item_click_63_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r2.bookType = "1";
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.bookTypeChanged(ctx_r2.bookType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "Pay Online");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](66, "ion-radio", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "ion-item", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_1_Template_ion_item_click_67_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r2.bookType = "3";
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.bookTypeChanged(ctx_r2.bookType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "Pay From Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](70, "ion-radio", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](71, PhoneConfirmBookingPage_ng_container_1_ion_card_71_Template, 6, 2, "ion-card", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "ion-button", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_1_Template_ion_button_click_72_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.confirmBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](75, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](76, PhoneConfirmBookingPage_ng_container_1_div_76_Template, 8, 3, "div", 129)(77, PhoneConfirmBookingPage_ng_container_1_div_77_Template, 11, 0, "div", 9)(78, PhoneConfirmBookingPage_ng_container_1_div_78_Template, 11, 0, "div", 9)(79, PhoneConfirmBookingPage_ng_container_1_div_79_Template, 11, 0, "div", 9)(80, PhoneConfirmBookingPage_ng_container_1_div_80_Template, 12, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r2.bookingDetails.pnrNumber || ctx_r2.bookingDetails.ticket_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.bookingDetails.seatNumbers || ctx_r2.bookingDetails.seat_numbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.bookingDetails.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.bookingDetails.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.changeDateFormat(ctx_r2.bookingDetails.travelDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.bookingDetails.transactionStatus || ctx_r2.bookingDetails.passenger_details[0].ticket_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.metaData.showCancelProtect && ctx_r2.showhide);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.metaData.showCancelProtect);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.bookType);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.bookOnline && !ctx_r2.metaData.isPhonePeV2PayBitlaEnabled && !ctx_r2.metaData.isPaytmIframeEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.walletNoteModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.viewTicket);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.paymentFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.showConfirmReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.isPendingPayment);
  }
}
function PhoneConfirmBookingPage_ng_container_2_ion_card_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-card", 114)(1, "div")(2, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Fare Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 116)(5, "ion-row")(6, "ion-col", 117)(7, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Refundable Booking Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-col", 117)(10, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "ion-row")(13, "ion-col", 117)(14, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Total Payable");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "ion-col", 117)(17, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.RefundableCharge());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.getTotalPayable());
  }
}
function PhoneConfirmBookingPage_ng_container_2_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "ion-item", 122)(2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Refund Protect");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-checkbox", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function PhoneConfirmBookingPage_ng_container_2_div_57_Template_ion_checkbox_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.showhide, $event) || (ctx_r2.showhide = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r2.metaData.isCancelProtectMandatory);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.showhide);
  }
}
function PhoneConfirmBookingPage_ng_container_2_ion_card_71_div_5_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_2_ion_card_71_div_5_ion_item_1_Template_ion_item_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29);
      const payType_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      ctx_r2.paymentType = payType_r30.id;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.calculatePgCharges(ctx_r2.paymentType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-radio", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](payType_r30.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", payType_r30 ? payType_r30.id : "");
  }
}
function PhoneConfirmBookingPage_ng_container_2_ion_card_71_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PhoneConfirmBookingPage_ng_container_2_ion_card_71_div_5_ion_item_1_Template, 4, 2, "ion-item", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", payType_r30.name && payType_r30.name.toUpperCase().indexOf("EBS") < 0);
  }
}
function PhoneConfirmBookingPage_ng_container_2_ion_card_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-card", 114)(1, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Payment options");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-list", 122)(4, "ion-radio-group", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function PhoneConfirmBookingPage_ng_container_2_ion_card_71_Template_ion_radio_group_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.paymentType, $event) || (ctx_r2.paymentType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ionChange", function PhoneConfirmBookingPage_ng_container_2_ion_card_71_Template_ion_radio_group_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.calculatePgCharges(ctx_r2.paymentType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, PhoneConfirmBookingPage_ng_container_2_ion_card_71_div_5_Template, 2, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.paymentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.metaData.payMentGateWayTypes);
  }
}
function PhoneConfirmBookingPage_ng_container_2_div_75_ion_row_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-col", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-col", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_2_div_75_ion_row_6_Template_ion_col_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r32);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.navCtrl.navigateForward("wallet"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "ADD MONEY");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_2_div_75_ion_row_6_Template_ion_col_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r32);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.bookTypeChanged(ctx_r2.bookType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "PAY ONLINE");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function PhoneConfirmBookingPage_ng_container_2_div_75_ion_row_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-col", 91)(2, "ion-col", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_2_div_75_ion_row_7_Template_ion_col_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.walletNoteModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "CANCEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function PhoneConfirmBookingPage_ng_container_2_div_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_2_div_75_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.walletNoteModal = !ctx_r2.walletNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 101)(2, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Wallet Booking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, PhoneConfirmBookingPage_ng_container_2_div_75_ion_row_6_Template, 6, 0, "ion-row", 0)(7, PhoneConfirmBookingPage_ng_container_2_div_75_ion_row_7_Template, 5, 0, "ion-row", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.walletMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.isShowWalletBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.isShowWalletBtn);
  }
}
function PhoneConfirmBookingPage_ng_container_2_div_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 85)(1, "div", 101)(2, "ion-row")(3, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "This ticket has been booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_2_div_76_Template_ion_col_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.viewTicketPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "VIEW TICKET ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}
function PhoneConfirmBookingPage_ng_container_2_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 85)(1, "div", 101)(2, "ion-row")(3, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Your payment has failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_2_div_77_Template_ion_col_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.paymentFailed = !ctx_r2.paymentFailed);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "TRY AGAIN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}
function PhoneConfirmBookingPage_ng_container_2_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 85)(1, "div", 96)(2, "ion-row")(3, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Important: Your onward trip has been booked successfully. To complete your travel, please book the return trip from My Bookings \u2014 it's still in Phone Block status.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-col", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_2_div_78_Template_ion_col_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.gotoMyBookings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "OKAY ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}
function PhoneConfirmBookingPage_ng_container_2_div_79_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("( ", ctx_r2.timer, " )");
  }
}
function PhoneConfirmBookingPage_ng_container_2_div_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 85)(1, "div", 104)(2, "ion-row")(3, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Payment Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Your payment is pending with the Payment gateway. Kindly wait until we are confirming the payment.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-row")(8, "ion-col", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_2_div_79_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.timer === 0 && (ctx_r2.isPendingPayment = !ctx_r2.isPendingPayment));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Cancel Payment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, PhoneConfirmBookingPage_ng_container_2_div_79_span_11_Template, 2, 1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("disabled", ctx_r2.timer > 0)("enable", ctx_r2.timer == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.timer > 0);
  }
}
function PhoneConfirmBookingPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 109)(3, "ion-buttons", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Confirm Phone Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-content", 137)(8, "div", 113)(9, "ion-card", 114)(10, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Ticket Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 116)(13, "ion-row")(14, "ion-col", 117)(15, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Ticket number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "ion-col", 117)(18, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "ion-row")(21, "ion-col", 117)(22, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Seat numbers");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "ion-col", 117)(25, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "ion-row")(28, "ion-col", 117)(29, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Origin");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "ion-col", 117)(32, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "ion-row")(35, "ion-col", 117)(36, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Destination");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "ion-col", 117)(39, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "ion-row")(42, "ion-col", 117)(43, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "Date of journey");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "ion-col", 117)(46, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "ion-row")(49, "ion-col", 117)(50, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "ion-col", 117)(53, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](55, PhoneConfirmBookingPage_ng_container_2_ion_card_55_Template, 19, 2, "ion-card", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "ion-card", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](57, PhoneConfirmBookingPage_ng_container_2_div_57_Template, 5, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "ion-card", 114)(59, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Select Payment Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "ion-list", 122)(62, "ion-radio-group", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function PhoneConfirmBookingPage_ng_container_2_Template_ion_radio_group_ngModelChange_62_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.bookType, $event) || (ctx_r2.bookType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ionChange", function PhoneConfirmBookingPage_ng_container_2_Template_ion_radio_group_ionChange_62_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.bookTypeChanged(ctx_r2.bookType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "ion-item", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_2_Template_ion_item_click_63_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r2.bookType = "1";
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.bookTypeChanged(ctx_r2.bookType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "Pay Online");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](66, "ion-radio", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "ion-item", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_2_Template_ion_item_click_67_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r2.bookType = "3";
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.bookTypeChanged(ctx_r2.bookType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "Pay From Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](70, "ion-radio", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](71, PhoneConfirmBookingPage_ng_container_2_ion_card_71_Template, 6, 2, "ion-card", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "ion-button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_2_Template_ion_button_click_72_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.confirmBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, " Continue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](74, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](75, PhoneConfirmBookingPage_ng_container_2_div_75_Template, 8, 3, "div", 129)(76, PhoneConfirmBookingPage_ng_container_2_div_76_Template, 11, 0, "div", 9)(77, PhoneConfirmBookingPage_ng_container_2_div_77_Template, 11, 0, "div", 9)(78, PhoneConfirmBookingPage_ng_container_2_div_78_Template, 11, 0, "div", 9)(79, PhoneConfirmBookingPage_ng_container_2_div_79_Template, 12, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.bookingDetails.pnrNumber || ctx_r2.bookingDetails.ticket_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.bookingDetails.seatNumbers || ctx_r2.bookingDetails.seat_numbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.bookingDetails.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.bookingDetails.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.changeDateFormat(ctx_r2.bookingDetails.travelDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.bookingDetails.transactionStatus || ctx_r2.bookingDetails.passenger_details[0].ticket_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.metaData.showCancelProtect && ctx_r2.showhide);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.metaData.showCancelProtect);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.bookType);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.bookOnline && !ctx_r2.metaData.isPhonePeV2PayBitlaEnabled && !ctx_r2.metaData.isPaytmIframeEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.walletNoteModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.viewTicket);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.paymentFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.showConfirmReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.isPendingPayment);
  }
}
function PhoneConfirmBookingPage_ng_container_3_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "ion-row", 176)(2, "ion-col", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-col", 179)(5, "h2", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-row", 182)(10, "ion-col", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "ion-icon", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "ion-col", 185)(13, "h4", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Pickup Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "p")(16, "span", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "ion-col", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "ion-icon", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "ion-col", 190)(23, "h4", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Drop Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "p")(26, "span", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "span", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.globalData.SELECTED_SERVICE.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.globalData.SELECTED_SERVICE.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r2.ticketDetail == null ? null : ctx_r2.ticketDetail.boarding_details == null ? null : ctx_r2.ticketDetail.boarding_details.stage_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.ticketDetail == null ? null : ctx_r2.ticketDetail.boarding_details == null ? null : ctx_r2.ticketDetail.boarding_details.landmark);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r2.ticketDetail == null ? null : ctx_r2.ticketDetail.drop_off_details == null ? null : ctx_r2.ticketDetail.drop_off_details.stage_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.ticketDetail == null ? null : ctx_r2.ticketDetail.drop_off_details == null ? null : ctx_r2.ticketDetail.drop_off_details.landmark);
  }
}
function PhoneConfirmBookingPage_ng_container_3_ion_icon_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-icon", 191);
  }
}
function PhoneConfirmBookingPage_ng_container_3_ion_icon_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-icon", 192);
  }
}
function PhoneConfirmBookingPage_ng_container_3_div_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 193)(1, "span", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const p_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", p_r39.name, " (", p_r39.sex === "Mr" ? "M" : "F", ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](p_r39.seat_number);
  }
}
function PhoneConfirmBookingPage_ng_container_3_ion_card_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-card", 170)(1, "div")(2, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Fare Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 116)(5, "ion-row")(6, "ion-col", 117)(7, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Refundable Booking Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-col", 117)(10, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "ion-row")(13, "ion-col", 117)(14, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Total Payable");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "ion-col", 117)(17, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.RefundableCharge());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.getTotalPayable());
  }
}
function PhoneConfirmBookingPage_ng_container_3_ion_card_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-card", 196)(1, "div")(2, "ion-item", 122)(3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Refund Protect");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ion-checkbox", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function PhoneConfirmBookingPage_ng_container_3_ion_card_77_Template_ion_checkbox_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r40);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.showhide, $event) || (ctx_r2.showhide = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r2.metaData.isCancelProtectMandatory);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.showhide);
  }
}
function PhoneConfirmBookingPage_ng_container_3_ion_card_91_div_5_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_3_ion_card_91_div_5_ion_item_1_Template_ion_item_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r42);
      const payType_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      ctx_r2.paymentType = payType_r43.id;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.calculatePgCharges(ctx_r2.paymentType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-radio", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](payType_r43.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", payType_r43 ? payType_r43.id : "");
  }
}
function PhoneConfirmBookingPage_ng_container_3_ion_card_91_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PhoneConfirmBookingPage_ng_container_3_ion_card_91_div_5_ion_item_1_Template, 4, 2, "ion-item", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", payType_r43.name && payType_r43.name.toUpperCase().indexOf("EBS") < 0);
  }
}
function PhoneConfirmBookingPage_ng_container_3_ion_card_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-card", 170)(1, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Payment options");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-list", 172)(4, "ion-radio-group", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function PhoneConfirmBookingPage_ng_container_3_ion_card_91_Template_ion_radio_group_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r41);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.paymentType, $event) || (ctx_r2.paymentType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ionChange", function PhoneConfirmBookingPage_ng_container_3_ion_card_91_Template_ion_radio_group_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r41);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.calculatePgCharges(ctx_r2.paymentType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, PhoneConfirmBookingPage_ng_container_3_ion_card_91_div_5_Template, 2, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.paymentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.metaData.payMentGateWayTypes);
  }
}
function PhoneConfirmBookingPage_ng_container_3_div_95_ion_row_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-col", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-col", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_3_div_95_ion_row_6_Template_ion_col_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r45);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.navCtrl.navigateForward("wallet"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "ADD MONEY");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_3_div_95_ion_row_6_Template_ion_col_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r45);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.bookTypeChanged(ctx_r2.bookType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "PAY ONLINE");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function PhoneConfirmBookingPage_ng_container_3_div_95_ion_row_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-col", 91)(2, "ion-col", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_3_div_95_ion_row_7_Template_ion_col_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.walletNoteModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "CANCEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function PhoneConfirmBookingPage_ng_container_3_div_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_3_div_95_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r44);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.walletNoteModal = !ctx_r2.walletNoteModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 101)(2, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Wallet Booking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, PhoneConfirmBookingPage_ng_container_3_div_95_ion_row_6_Template, 6, 0, "ion-row", 0)(7, PhoneConfirmBookingPage_ng_container_3_div_95_ion_row_7_Template, 5, 0, "ion-row", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.walletMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.isShowWalletBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.isShowWalletBtn);
  }
}
function PhoneConfirmBookingPage_ng_container_3_div_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 85)(1, "div", 101)(2, "ion-row")(3, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "This ticket has been booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_3_div_96_Template_ion_col_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.viewTicketPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "VIEW TICKET ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}
function PhoneConfirmBookingPage_ng_container_3_div_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 85)(1, "div", 101)(2, "ion-row")(3, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Your payment has failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "ion-col", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-col", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_3_div_97_Template_ion_col_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r48);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.paymentFailed = !ctx_r2.paymentFailed);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "TRY AGAIN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}
function PhoneConfirmBookingPage_ng_container_3_div_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 85)(1, "div", 104)(2, "ion-row")(3, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Payment Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Your payment is pending with the Payment gateway. Kindly wait until we are confirming the payment.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-row")(8, "ion-col", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_3_div_98_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r49);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.timer === 0 && (ctx_r2.isPendingPayment = !ctx_r2.isPendingPayment));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("disabled", ctx_r2.timer > 0)("enable", ctx_r2.timer == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Cancel Payment (", ctx_r2.timer, ")");
  }
}
function PhoneConfirmBookingPage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-header", 139)(2, "ion-toolbar", 109)(3, "ion-buttons", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Confirm Phone Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-content", 141)(8, "div", 113)(9, "ion-row")(10, "ion-col", 142)(11, "div")(12, "div", 143)(13, "ion-row", 144)(14, "ion-col", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "img", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "ion-col", 147)(17, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "ion-row", 148)(22, "ion-col", 12)(23, "h2", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](25, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "ion-col", 14)(29, "h2", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](31, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "ion-col", 12)(33, "p", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "ion-col", 12)(37, "p", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "ion-col", 12)(40, "h2", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "ion-col", 152)(43, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "ion-icon", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "h3", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "ion-col", 14)(48, "h2", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "ion-col", 12)(51, "p", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "Depart");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](54, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "ion-col", 12)(56, "p", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "Arrive");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, PhoneConfirmBookingPage_ng_container_3_div_58_Template, 30, 6, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "ion-row", 157)(60, "ion-col", 158)(61, "h2", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_3_Template_h2_click_61_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r38);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.viewDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](63, PhoneConfirmBookingPage_ng_container_3_ion_icon_63_Template, 1, 0, "ion-icon", 160)(64, PhoneConfirmBookingPage_ng_container_3_ion_icon_64_Template, 1, 0, "ion-icon", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "div")(66, "ion-card", 162)(67, "ion-card-content", 163)(68, "h2", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 165)(71, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, "Seat");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](75, PhoneConfirmBookingPage_ng_container_3_div_75_Template, 5, 3, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](76, PhoneConfirmBookingPage_ng_container_3_ion_card_76_Template, 19, 2, "ion-card", 168)(77, PhoneConfirmBookingPage_ng_container_3_ion_card_77_Template, 6, 2, "ion-card", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "ion-card", 170)(79, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](80, "Select Payment Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "ion-list", 172)(82, "ion-radio-group", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function PhoneConfirmBookingPage_ng_container_3_Template_ion_radio_group_ngModelChange_82_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r38);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.bookType, $event) || (ctx_r2.bookType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ionChange", function PhoneConfirmBookingPage_ng_container_3_Template_ion_radio_group_ionChange_82_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r38);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.bookTypeChanged(ctx_r2.bookType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "ion-item", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_3_Template_ion_item_click_83_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r38);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r2.bookType = "1";
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.bookTypeChanged(ctx_r2.bookType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, "Pay Online");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](86, "ion-radio", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "ion-item", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_3_Template_ion_item_click_87_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r38);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r2.bookType = "3";
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.bookTypeChanged(ctx_r2.bookType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89, "Pay From Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](90, "ion-radio", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](91, PhoneConfirmBookingPage_ng_container_3_ion_card_91_Template, 6, 2, "ion-card", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "ion-button", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_3_Template_ion_button_click_92_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r38);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.confirmBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](94, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](95, PhoneConfirmBookingPage_ng_container_3_div_95_Template, 8, 3, "div", 129)(96, PhoneConfirmBookingPage_ng_container_3_div_96_Template, 11, 0, "div", 9)(97, PhoneConfirmBookingPage_ng_container_3_div_97_Template, 11, 0, "div", 9)(98, PhoneConfirmBookingPage_ng_container_3_div_98_Template, 11, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_9_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.globalData.DEPARTURE_DATE.day);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.globalData.DEPARTURE_DATE.monthNameShort);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](25, 24, (tmp_3_0 = ctx_r2.globalData.SEARCH_DATA == null ? null : ctx_r2.globalData.SEARCH_DATA.originCity == null ? null : ctx_r2.globalData.SEARCH_DATA.originCity.name == null ? null : ctx_r2.globalData.SEARCH_DATA.originCity.name.substring(0, 3)) !== null && tmp_3_0 !== undefined ? tmp_3_0 : ctx_r2.bookingDetails == null ? null : ctx_r2.bookingDetails.origin.substring(0, 3)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](31, 26, (tmp_4_0 = ctx_r2.globalData.SEARCH_DATA == null ? null : ctx_r2.globalData.SEARCH_DATA.destCity == null ? null : ctx_r2.globalData.SEARCH_DATA.destCity.name == null ? null : ctx_r2.globalData.SEARCH_DATA.destCity.name.substring(0, 3)) !== null && tmp_4_0 !== undefined ? tmp_4_0 : ctx_r2.bookingDetails == null ? null : ctx_r2.bookingDetails.destination.substring(0, 3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((tmp_5_0 = ctx_r2.globalData.SEARCH_DATA == null ? null : ctx_r2.globalData.SEARCH_DATA.originCity == null ? null : ctx_r2.globalData.SEARCH_DATA.originCity.name) !== null && tmp_5_0 !== undefined ? tmp_5_0 : ctx_r2.bookingDetails == null ? null : ctx_r2.bookingDetails.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((tmp_6_0 = ctx_r2.globalData.SEARCH_DATA == null ? null : ctx_r2.globalData.SEARCH_DATA.destCity == null ? null : ctx_r2.globalData.SEARCH_DATA.destCity.name) !== null && tmp_6_0 !== undefined ? tmp_6_0 : ctx_r2.bookingDetails == null ? null : ctx_r2.bookingDetails.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((tmp_7_0 = ctx_r2.bookingDetails == null ? null : ctx_r2.bookingDetails.boarding_details == null ? null : ctx_r2.bookingDetails.boarding_details.dep_time) !== null && tmp_7_0 !== undefined ? tmp_7_0 : ctx_r2.bookingDetails == null ? null : ctx_r2.bookingDetails.dep_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.globalData.SELECTED_SERVICE.duration.split(":")[0] + "h " + ctx_r2.globalData.SELECTED_SERVICE.duration.split(":")[1] + "m");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (tmp_9_0 = ctx_r2.bookingDetails == null ? null : ctx_r2.bookingDetails.drop_off_details == null ? null : ctx_r2.bookingDetails.drop_off_details.arr_time) !== null && tmp_9_0 !== undefined ? tmp_9_0 : ctx_r2.bookingDetails == null ? null : ctx_r2.bookingDetails.arr_time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.moreLessOpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r2.moreLessOpt ? "Less" : "Show", " Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.moreLessOpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.moreLessOpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Passenger Details (", ctx_r2.bookingDetails == null ? null : ctx_r2.bookingDetails.passenger_details == null ? null : ctx_r2.bookingDetails.passenger_details.length, " Seats)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((ctx_r2.bookingDetails == null ? null : ctx_r2.bookingDetails.passenger_details == null ? null : ctx_r2.bookingDetails.passenger_details.length) > 1 ? "Passengers details" : "Passenger details");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.bookingDetails == null ? null : ctx_r2.bookingDetails.passenger_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.metaData.showCancelProtect && ctx_r2.showhide);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.metaData.showCancelProtect);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.bookType);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.bookOnline && !ctx_r2.metaData.isPhonePeV2PayBitlaEnabled && !ctx_r2.metaData.isPaytmIframeEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.walletNoteModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.viewTicket);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.paymentFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.isPendingPayment);
  }
}
function PhoneConfirmBookingPage_ng_container_4_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 238)(1, "span", 239)(2, "span", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Refund Protect");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-checkbox", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function PhoneConfirmBookingPage_ng_container_4_div_47_Template_ion_checkbox_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r51);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.showhide, $event) || (ctx_r2.showhide = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.showhide);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r2.metaData.isCancelProtectMandatory);
  }
}
function PhoneConfirmBookingPage_ng_container_4_section_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 209)(1, "h2", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Fare details");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 212)(4, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Refundable booking charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 242)(10, "span", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Total payable");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, "", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](8, 4, ctx_r2.RefundableCharge(), "1.0-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, "", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](14, 7, ctx_r2.getTotalPayable(), "1.0-2"), "");
  }
}
function PhoneConfirmBookingPage_ng_container_4_div_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Payment options");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PhoneConfirmBookingPage_ng_container_4_section_71_ng_container_1_button_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 250);
  }
}
function PhoneConfirmBookingPage_ng_container_4_section_71_ng_container_1_button_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", payType_r53.name, " ");
  }
}
function PhoneConfirmBookingPage_ng_container_4_section_71_ng_container_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_4_section_71_ng_container_1_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r52);
      const payType_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      ctx_r2.paymentType = payType_r53.id;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.calculatePgCharges(ctx_r2.paymentType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, PhoneConfirmBookingPage_ng_container_4_section_71_ng_container_1_button_1_img_4_Template, 1, 0, "img", 248)(5, PhoneConfirmBookingPage_ng_container_4_section_71_ng_container_1_button_1_span_5_Template, 2, 1, "span", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payType_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-checked", ctx_r2.paymentType == payType_r53.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", payType_r53.name == "RazorPay" && payType_r53.id == "53");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", payType_r53.name != "RazorPay" || payType_r53.id != "53");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("sb-radio--on", ctx_r2.paymentType == payType_r53.id);
  }
}
function PhoneConfirmBookingPage_ng_container_4_section_71_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PhoneConfirmBookingPage_ng_container_4_section_71_ng_container_1_button_1_Template, 7, 5, "button", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const payType_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", payType_r53.name && payType_r53.name.toUpperCase().indexOf("EBS") < 0);
  }
}
function PhoneConfirmBookingPage_ng_container_4_section_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PhoneConfirmBookingPage_ng_container_4_section_71_ng_container_1_Template, 2, 1, "ng-container", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.metaData.payMentGateWayTypes);
  }
}
function PhoneConfirmBookingPage_ng_container_4_ion_footer_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-footer", 251)(1, "button", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_4_ion_footer_76_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r54);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.confirmBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Continue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function PhoneConfirmBookingPage_ng_container_4_div_77_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 258)(1, "span", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "ion-icon", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div")(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Promotional balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Money earned from cashback and coupons");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, " ", ctx_r2.promobalance, "");
  }
}
function PhoneConfirmBookingPage_ng_container_4_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_4_div_77_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r55);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.showWalletDets = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_4_div_77_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r55);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 255)(3, "h2", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Wallet details");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_4_div_77_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r55);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.showWalletDets = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, PhoneConfirmBookingPage_ng_container_4_div_77_div_7_Template, 10, 2, "div", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 258)(9, "span", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "ion-icon", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div")(12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Non-promotional balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "p", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Money added by you in wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.metaData.is_wallet_promotional);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, " ", ctx_r2.nonpromobalance, "");
  }
}
function PhoneConfirmBookingPage_ng_container_4_div_78_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 267)(1, "button", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_4_div_78_div_6_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r57);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.navCtrl.navigateForward("wallet"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Add money ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_4_div_78_div_6_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r57);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      ctx_r2.bookType = "1";
      ctx_r2.bookTypeChanged(ctx_r2.bookType);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.walletNoteModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Pay online ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function PhoneConfirmBookingPage_ng_container_4_div_78_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 267)(1, "button", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_4_div_78_div_7_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r58);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.walletNoteModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function PhoneConfirmBookingPage_ng_container_4_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_4_div_78_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r56);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.walletNoteModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_4_div_78_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r56);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h2", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Wallet booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, PhoneConfirmBookingPage_ng_container_4_div_78_div_6_Template, 5, 0, "div", 266)(7, PhoneConfirmBookingPage_ng_container_4_div_78_div_7_Template, 3, 0, "div", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.walletMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.isShowWalletBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.isShowWalletBtn);
  }
}
function PhoneConfirmBookingPage_ng_container_4_div_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 270)(1, "div", 271)(2, "h2", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Booking confirmed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "This ticket has been booked successfully.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 267)(7, "button", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_4_div_79_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r59);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.viewTicketPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " View ticket ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}
function PhoneConfirmBookingPage_ng_container_4_div_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 270)(1, "div", 271)(2, "h2", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Payment failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Your payment has failed.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 267)(7, "button", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_4_div_80_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r60);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.paymentFailed = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Try again ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}
function PhoneConfirmBookingPage_ng_container_4_div_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 270)(1, "div", 271)(2, "h2", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Important");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Your onward trip has been booked successfully. To complete your travel, please book the return trip from My Trips \u2014 it is still in Phone Block status. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 267)(7, "button", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_4_div_81_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r61);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.gotoMyBookings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Okay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}
function PhoneConfirmBookingPage_ng_container_4_div_82_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("(", ctx_r2.timer, ")");
  }
}
function PhoneConfirmBookingPage_ng_container_4_div_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 270)(1, "div", 271)(2, "h2", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Payment pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Your payment is pending with the payment gateway. Kindly wait until we confirm the payment. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 267)(7, "button", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_4_div_82_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r62);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.timer === 0 && (ctx_r2.isPendingPayment = false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Cancel payment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, PhoneConfirmBookingPage_ng_container_4_div_82_span_9_Template, 2, 1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r2.timer > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.timer > 0);
  }
}
function PhoneConfirmBookingPage_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-header", 199)(2, "ion-toolbar", 200)(3, "div", 201)(4, "button", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_4_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r50);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.navCtrl.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "img", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 204)(7, "h1", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Confirm phone booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "p", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Review your ticket and confirm booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "ion-content", 207)(12, "div", 208)(13, "section", 209)(14, "h2", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Ticket details");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 211)(17, "div", 212)(18, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Ticket number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "span", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 212)(23, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Seat numbers");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "span", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 212)(28, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Origin");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "span", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 212)(33, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Destination");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "span", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 212)(38, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Date of journey");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "span", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 212)(43, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "span", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, PhoneConfirmBookingPage_ng_container_4_div_47_Template, 5, 2, "div", 215)(48, PhoneConfirmBookingPage_ng_container_4_section_48_Template, 15, 10, "section", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "Select payment method");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "section", 218)(52, "button", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_4_Template_button_click_52_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r50);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r2.bookType = "1";
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.bookTypeChanged(ctx_r2.bookType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "span", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](54, "img", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "span", 222)(56, "span", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "Book online");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "span", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "Pay securely online");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](60, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_4_Template_div_click_61_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r50);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r2.bookType = "3";
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.bookTypeChanged(ctx_r2.bookType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "span", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](63, "img", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "span", 222)(65, "span", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "button", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneConfirmBookingPage_ng_container_4_Template_button_click_67_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r50);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.showWalletDets = !ctx_r2.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](68, "ion-icon", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](69, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](70, PhoneConfirmBookingPage_ng_container_4_div_70_Template, 2, 0, "div", 230)(71, PhoneConfirmBookingPage_ng_container_4_section_71_Template, 2, 1, "section", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "p", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](73, "img", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, " 100% secure, encrypted payments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](75, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](76, PhoneConfirmBookingPage_ng_container_4_ion_footer_76_Template, 3, 0, "ion-footer", 234)(77, PhoneConfirmBookingPage_ng_container_4_div_77_Template, 18, 3, "div", 235)(78, PhoneConfirmBookingPage_ng_container_4_div_78_Template, 8, 3, "div", 236)(79, PhoneConfirmBookingPage_ng_container_4_div_79_Template, 9, 0, "div", 237)(80, PhoneConfirmBookingPage_ng_container_4_div_80_Template, 9, 0, "div", 237)(81, PhoneConfirmBookingPage_ng_container_4_div_81_Template, 9, 0, "div", 237)(82, PhoneConfirmBookingPage_ng_container_4_div_82_Template, 10, 2, "div", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.bookingDetails.pnrNumber || ctx_r2.bookingDetails.ticket_number || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.bookingDetails.seatNumbers || ctx_r2.bookingDetails.seat_numbers || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.bookingDetails.origin || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.bookingDetails.destination || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.changeDateFormat(ctx_r2.bookingDetails.travelDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.bookingDetails.transactionStatus || (ctx_r2.bookingDetails.passenger_details == null ? null : ctx_r2.bookingDetails.passenger_details[0] == null ? null : ctx_r2.bookingDetails.passenger_details[0].ticket_status) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.metaData.showCancelProtect);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.metaData.showCancelProtect && ctx_r2.showhide);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-checked", ctx_r2.bookType == "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("sb-radio--on", ctx_r2.bookType == "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-checked", ctx_r2.bookType == "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.walletText);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("sb-radio--on", ctx_r2.bookType == "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.bookOnline && !ctx_r2.metaData.isPhonePeV2PayBitlaEnabled && !ctx_r2.metaData.isPaytmIframeEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.bookOnline && !ctx_r2.metaData.isPhonePeV2PayBitlaEnabled && !ctx_r2.metaData.isPaytmIframeEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.showWalletDets);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.showWalletDets);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.walletNoteModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.viewTicket);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.paymentFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.showConfirmReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.isPendingPayment);
  }
}
class PhoneConfirmBookingPage {
  constructor(commonStorage, apiFactory, dateService, iab, util, commonService, loader, modalController, navCtrl, appData, locationProvider, route, router, ex, platform, auth, globalData) {
    var _JSON$parse, _localStorage$getItem, _localStorage$getItem2, _localStorage$getItem3;
    this.commonStorage = commonStorage;
    this.apiFactory = apiFactory;
    this.dateService = dateService;
    this.iab = iab;
    this.util = util;
    this.commonService = commonService;
    this.loader = loader;
    this.modalController = modalController;
    this.navCtrl = navCtrl;
    this.appData = appData;
    this.locationProvider = locationProvider;
    this.route = route;
    this.router = router;
    this.ex = ex;
    this.platform = platform;
    this.auth = auth;
    this.globalData = globalData;
    this.bookOnline = true;
    this.payFromWallet = false;
    this.payMentGateWayTypes = [];
    this.booking = [];
    this.pgType = {};
    this.pgChargesAmount = 0;
    this.walletMessage = "";
    this.isShowWalletBtn = false;
    this.walletNoteModal = false;
    this.showWalletDets = false;
    this.bookType = '1';
    this.cancel_protect_percentage = 10;
    this.viewTicket = false;
    this.paymentFailed = false;
    this.is_round_trip = false;
    this.roundTrip = false;
    this.ticketDetail = [];
    this.timer = 10;
    this.moreLessOpt = false;
    this.walletText = '';
    this.appData.newTheme = this.util.getNewTheme();
    this.showhide = true;
    this.route.queryParams.subscribe(params => {
      this.isRoundTrip = params["is_roundTrip"] && params["is_roundTrip"] == 'true' ? true : false;
    });
    this.totalAmount = (_JSON$parse = JSON.parse((_localStorage$getItem = localStorage.getItem('ticket-details')) !== null && _localStorage$getItem !== void 0 ? _localStorage$getItem : '{}')) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.ticket_fare;
    const ticketDetails = JSON.parse((_localStorage$getItem2 = localStorage.getItem('ticket-details')) !== null && _localStorage$getItem2 !== void 0 ? _localStorage$getItem2 : '{}');
    this.totalAmount = (ticketDetails === null || ticketDetails === void 0 ? void 0 : ticketDetails.ticket_fare) || 0;
    this.bookingDetails = JSON.parse((_localStorage$getItem3 = localStorage.getItem('bookingDetails')) !== null && _localStorage$getItem3 !== void 0 ? _localStorage$getItem3 : '{}');
    this.travelDate = this.dateService.getDateObjFromDateStr(this.bookingDetails.travelDate);
    this.pnrNumber = this.bookingDetails.pnrNumber ? this.bookingDetails.pnrNumber : this.bookingDetails.ticket_number;
    this.metaData = this.commonStorage.getItem("metaData");
    const travelsName = this.commonStorage.getItem("metaData").travels_name;
    if (travelsName && travelsName != undefined && travelsName != null && travelsName != '') {
      this.walletText = travelsName + " Wallet";
    } else {
      this.walletText = "Wallet";
    }
    this.roundedLogo = this.metaData.roundedLogo;
    this.isCancelProtect = this.metaData.showCancelProtect;
    this.payMentGateWayTypes = this.metaData.payMentGateWayTypes;
    for (var i = 0; i < this.metaData.payMentGateWayTypes.length; i++) {
      if (this.metaData.payMentGateWayTypes[i].checked == true) {
        this.paymentType = this.metaData.payMentGateWayTypes[i].id;
      }
    }
  }
  ngOnInit() {
    var _localStorage$getItem4;
    this.ticketDetail = JSON.parse((_localStorage$getItem4 = localStorage.getItem("ticket-details")) !== null && _localStorage$getItem4 !== void 0 ? _localStorage$getItem4 : '{}');
    this.currencySym = this.commonStorage.localGet('metaData') ? this.commonStorage.localGet('metaData').currencySym : '₹';
    this.getWalletDetails();
    this.caluclatePercen = (this.cancel_protect_percentage / 100 * this.totalAmount).toFixed(2);
    this.totalPayble = (parseFloat(this.caluclatePercen) + this.totalAmount).toFixed(2);
    if (this.metaData.msiteFolder == 'shyamolitheme') {
      // Filter payTypes to match the HTML *ngIf condition
      let validPayTypes = this.metaData.payMentGateWayTypes.filter(p => p.name && p.name.toUpperCase().indexOf('EBS') < 0);
      if (validPayTypes.length > 0) {
        this.paymentType = validPayTypes[0].id; // Select the first valid payType
      }
    }
  }
  getWalletDetails() {
    this.apiFactory.getWalletBalance().subscribe(res => {
      if (res.success) {
        this.nonpromobalance = res.body.balance;
        this.promobalance = res.body.promotional_balance;
      }
    }, err => {});
  }
  bookTypeChanged(value) {
    if (value == 1) {
      this.bookOnline = true;
      this.payFromWallet = false;
    } else if (value == 3) {
      this.bookOnline = false;
      this.payFromWallet = true;
    } else {}
  }
  getFormatedDate(date) {
    return moment__WEBPACK_IMPORTED_MODULE_1___default()(date, "DD/MM/YYYY").format("DD MMM YYYY");
  }
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
  calculatePgCharges(id) {
    let pgCharges = this.metaData.pgCharges;
    this.pgType = pgCharges.find(it => {
      if (it.pay_gay_type_id == id) {
        return it;
      }
    });
    if (this.pgType && this.pgType.transaction_type) {
      if (this.pgType.transaction_type.toUpperCase() == 'NONE') {
        this.pgChargesAmount = 0;
      } else if (this.pgType.transaction_type.toUpperCase() == 'PERCENTAGE') {
        this.pgChargesAmount = this.pgType.transaction_charges * this.netBookingAmount / 100;
      } else if (this.pgType.transaction_type.toUpperCase() == 'FIXED') {
        this.pgChargesAmount = this.pgType.transaction_charges;
      }
    }
  }
  confirmBooking() {
    console.log('con_bk', this.reservationData);
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
    try {
      let pathForBooking = "pnr_number=" + this.pnrNumber;
      if (this.metaData.showCancelProtect && this.showhide) {
        pathForBooking += "&is_cancel_protect=" + this.showhide;
      } else {
        pathForBooking += "&is_cancel_protect=" + false;
      }
      if (this.bookType == '1') {
        let payType = this.payMentGateWayTypes.find(it => {
          return this.paymentType == it.id;
        });
        pathForBooking += "&pay_gay_type=" + payType.id;
        pathForBooking += "&native_app_type=" + platformNumber;
        pathForBooking += "&is_mobile_app=true";
        if (this.paymentType == '32-22-PHONEPE_V2' && this.metaData.isPhonePeV2PayBitlaEnabled) {
          pathForBooking += "&is_required_pay_flow=true";
          if (this.auth.isLoggedIn()) {
            pathForBooking += `&auth_token=${this.auth.token}`;
          }
        }
        this.bookTicket(pathForBooking);
      } else {
        pathForBooking += "&is_wallet_booking=true";
        pathForBooking += "&native_app_type=" + platformNumber;
        pathForBooking += "&pay_gay_type=" + "";
        this.bookTicket(pathForBooking);
      }
    } catch (e) {}
  }
  openInNewTab(url) {
    var link = document.createElement('a');
    link.href = url;
    link.target = '_self';
    link.click();
  }
  bookTicket(pathForBooking) {
    var _this = this;
    if (!this.util.checkConnection()) {
      return;
    }
    this.loader.showLoadingDefault();
    this.apiFactory.phoneEBook(pathForBooking).subscribe(/*#__PURE__*/function () {
      var _ref = (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
        // setTimeout(() => {
        _this.loader.hideLoadingDefault();
        // }, 100);
        if (result.code == 401) {
          _this.util.showToast(result.message);
        } else if (result.passenger_details) {
          _this.util.showAlert('', 'TICKET CONFIRMED SUCCESSFULLY');
          localStorage.setItem('bookingDetails', JSON.stringify(result));
          let navigationExtras = {
            queryParams: {
              new_booking: true
            }
          };
          if (!_this.isRoundTrip) _this.navCtrl.navigateRoot('booking-details', navigationExtras);else if (_this.isRoundTrip) {
            _this.showConfirmReturn = true;
          }
        } else if ('is_razorpay_payment' in result) {
          if (result.is_razorpay_payment == true) {
            if (result.amount != null && result.merchant_id != null && result.order_id != null && result.secret_key != null) {
              _this.payWithRazorpay(result);
            }
          }
        } else if (_this.paymentType == "55") {
          let self = _this;
          if (_this.appData.isWEBAPP) {
            _this.openInNewTab(result.payment_link);
          } else if (_this.appData.isIOS && !_this.appData.isWEBAPP) {
            const browser = _this.iab.create(result.payment_link + "", '_blank', _this.options);
            browser.on('loadstart').subscribe(event => {
              if (event.url.indexOf('ticket-confirm') > -1) {
                browser.close();
                localStorage.setItem('bookingDetails', JSON.stringify(self.commonStorage.localGet('bookedTicketDetails')));
                let navigationExtras = {
                  queryParams: {
                    new_booking: true
                  }
                };
                if (!_this.isRoundTrip) _this.navCtrl.navigateRoot('booking-details', navigationExtras);else if (_this.isRoundTrip) {
                  _this.showConfirmReturn = true;
                }
                // }
              } else if (event.url.indexOf('ticket-cancel') > -1) {
                self.commonStorage.localRemove('bookedTicketDetails');
                browser.close();
                localStorage.setItem('bookingDetails', JSON.stringify(self.commonStorage.localGet('bookedTicketDetails')));
                let navigationExtras = {
                  queryParams: {
                    new_booking: true
                  }
                };
                if (!_this.isRoundTrip) _this.navCtrl.navigateRoot('booking-details', navigationExtras);else if (_this.isRoundTrip) {
                  _this.showConfirmReturn = true;
                }
              }
            });
          }
        } else if (_this.paymentType == "57") {
          if (result.code == 200) {
            const popover = yield _this.modalController.create({
              component: _ease_buzz_page_ease_buzz_page_page__WEBPACK_IMPORTED_MODULE_4__.EaseBuzzPagePage,
              componentProps: {
                'result': result
              }
            });
            yield popover.present();
          } else {
            _this.util.showToast(result.message);
          }
        } else if (_this.paymentType == '45') {
          var halfKey = _this.emcription(_this.metaData.serverDate, _this.metaData.subdomain);
          let marchantKey = atob(result.merchant_id);
          marchantKey = marchantKey.replace(halfKey, '');
          if (_this.appData.isWEBAPP) {
            var options = {
              "features": {
                "enableExpressPay": true,
                "enableInstrumentDeRegistration": true,
                "enableMerTxnDetails": true,
                "enableNewWindowFlow": true
              },
              "consumerData": {
                "deviceId": "WEBSH2",
                "token": result.token,
                "paymentMode": "all",
                "merchantLogoUrl": "https://www.paynimo.com/CompanyDocs/company-logo-vertical-light.png",
                "merchantId": marchantKey,
                "currency": "INR",
                "consumerId": result.consumer_id,
                "consumerMobileNo": result.consumer_mobile_no,
                "consumerEmailId": result.consumer_email_id,
                "txnId": result.txn_id,
                "items": [{
                  "itemId": "FIRST",
                  "amount": result.amount,
                  "comAmt": "0"
                }],
                "customStyle": {
                  "PRIMARY_COLOR_CODE": "#45beaa",
                  "SECONDARY_COLOR_CODE": "#FFFFFF",
                  "BUTTON_COLOR_CODE_1": "#2d8c8c",
                  "BUTTON_COLOR_CODE_2": "#FFFFFF"
                }
              }
            };
            var paymentCallback = response => {
              let techSuccessMsg = response.msg;
              let splitPnr = techSuccessMsg.split('|')[3];
              let msgCase = techSuccessMsg.split('|')[0];
              if (msgCase == '0300') {
                var halfKey = _this.emcription(_this.metaData.serverDate, _this.metaData.subdomain);
                let message = btoa(techSuccessMsg);
                message = message.replace(halfKey, '');
                let bookingDetails = {
                  "pnr_number": splitPnr
                };
                localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
                let navigationExtras = {
                  queryParams: {
                    new_booking: true,
                    hideLocateTrackBus: false
                  }
                };
                _this.navigationExtras = navigationExtras;
                _this.paymentFailed = false;
                _this.viewTicket = true;
                _this.apiFactory.techProcessCall(splitPnr, message).subscribe(result => {}, err => {});
              } else if (msgCase != '0300' || !msgCase) {
                _this.paymentFailed = true;
                _this.viewTicket = false;
              }
            };
            var errorCallback = error => {
              _this.paymentFailed = true;
              _this.viewTicket = false;
            };
            WLCheckout.open(options, paymentCallback, errorCallback);
          } else if (_this.appData.isIOS) {
            var options = {
              "features": {
                "enableExpressPay": true,
                "enableInstrumentDeRegistration": true,
                "enableMerTxnDetails": true,
                "enableNewWindowFlow": true
              },
              "consumerData": {
                "deviceId": "iOSSH2",
                "token": result.token,
                "paymentMode": "all",
                "merchantLogoUrl": "https://www.paynimo.com/CompanyDocs/company-logo-vertical-light.png",
                "merchantId": marchantKey,
                "currency": "INR",
                "consumerId": result.consumer_id,
                "consumerMobileNo": result.consumer_mobile_no,
                "consumerEmailId": result.consumer_email_id,
                "txnId": result.txn_id,
                "items": [{
                  "itemId": "FIRST",
                  "amount": result.amount,
                  "comAmt": "0"
                }],
                "customStyle": {
                  "PRIMARY_COLOR_CODE": "#45beaa",
                  "SECONDARY_COLOR_CODE": "#FFFFFF",
                  "BUTTON_COLOR_CODE_1": "#2d8c8c",
                  "BUTTON_COLOR_CODE_2": "#FFFFFF"
                }
              }
            };
            var paymentCallback = response => {
              let techSuccessMsg = response.msg;
              let splitPnr = techSuccessMsg.split('|')[3];
              let msgCase = techSuccessMsg.split('|')[0];
              if (msgCase == '0300') {
                var halfKey = _this.emcription(_this.metaData.serverDate, _this.metaData.subdomain);
                let message = btoa(techSuccessMsg);
                message = message.replace(halfKey, '');
                let bookingDetails = {
                  "pnr_number": splitPnr
                };
                localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
                let navigationExtras = {
                  queryParams: {
                    new_booking: true,
                    hideLocateTrackBus: false
                  }
                };
                _this.navigationExtras = navigationExtras;
                _this.paymentFailed = false;
                _this.viewTicket = true;
                _this.apiFactory.techProcessCall(splitPnr, message).subscribe(result => {}, err => {});
              } else if (msgCase != '0300' || !msgCase) {
                // this.commonService.gTrack('addwallet','adding money to wallet failed');
                _this.util.showToast('Payment failed', 'bottom');
              }
            };
            var errorCallback = error => {
              // this.commonService.gTrack('addwallet','adding money to wallet failed');
              _this.util.showToast('Payment failed', 'bottom');
            };
            WLCheckout.open(options, paymentCallback, errorCallback);
          }
        } else if (_this.paymentType == '60' && result.is_phonepe_v2_payment) {
          if (!_this.appData.isWEBAPP && (_this.appData.isANDROID || _this.appData.isIOS)) {
            console.log(JSON.stringify(result), 'raja');
            const payload = {
              merchantId: result.merchant_id,
              orderId: result.orderId,
              token: result.token,
              amount: result.amount,
              paymentMode: {
                type: "PAY_PAGE"
              }
            };
            yield ionic_capacitor_phonepe_pg__WEBPACK_IMPORTED_MODULE_5__.PhonePePaymentPlugin.init({
              environment: result.is_live_environment ? 'PRODUCTION' : 'SANDBOX',
              merchantId: result.merchant_id,
              flowId: _this.pnrNumber,
              enableLogging: false
            }).then(() => {
              ionic_capacitor_phonepe_pg__WEBPACK_IMPORTED_MODULE_5__.PhonePePaymentPlugin.startTransaction({
                request: JSON.stringify(payload),
                showLoaderFlag: true,
                appSchema: _this.appData.isANDROID ? '' : 'mytravelApplication'
              }).then(res => {
                console.log("PhonePe Callback Response ===>", res);
                console.log(JSON.stringify(res), 'raja2');
                // Example:
                if (res['status'] === "SUCCESS" || res['status'] === "COMPLETED" || res['code'] === "PAYMENT_SUCCESS") {
                  // Payment completed successfully
                  //   this.verifyPaymentOnServer(result.orderId);
                } else if (res['status'] === "FAILED" || res['status'] === "FAILURE") {
                  // Payment failed
                } else if (res['status'] === "CANCELLED" || res['status'] === "CANCEL") {
                  // User cancelled
                }
                _this.call_Pay_Status(result);
              }).catch(err => {
                console.error("Transaction Error: ", err);
              });
            }).catch(error => {
              console.error("PhonePe Init Error: ", error);
            });
          } else if (_this.appData.isWEBAPP) {
            if (result.payment_link) _this.openInNewTab(result.payment_link);else _this.util.showToast("Payment link not found");
          }
        } else if (_this.paymentType == '32-22-PHONEPE_V2' && _this.metaData.isPhonePeV2PayBitlaEnabled) {
          if (result.pay_flow) {
            let self = _this;
            let browser;
            if (_this.appData.isWEBAPP) {
              browser = _this.iab.create(result.pay_flow, '_self', {
                location: 'no',
                toolbar: 'no'
              });
            } else {
              browser = _this.iab.create(result.pay_flow, '_blank', {
                location: 'no',
                toolbar: 'no',
                phonepepopup: 'yes'
              });
            }
            browser.on('loadstart').subscribe(event => {
              if (event.url.indexOf('ticket-confirm') > -1) {
                browser.close();
                _this.commonStorage.localSet('bookedTicketDetails', result);
                localStorage.setItem('bookingDetails', JSON.stringify(self.commonStorage.localGet('bookedTicketDetails')));
                let navigationExtras = {
                  queryParams: {
                    new_booking: 'true'
                  }
                };
                _this.navigationExtras = navigationExtras;
                _this.viewTicket = true;
                if (_this.metaData.msiteFolder == 'ourbustheme' || _this.metaData.msiteFolder == 'shyamolitheme') {
                  _this.navCtrl.navigateRoot('booking-details', _this.navigationExtras);
                }
              } else if (event.url.indexOf('ticket-cancel') > -1 || event.url.includes('failed')) {
                self.commonStorage.localRemove('bookedTicketDetails');
                browser.close();
                _this.viewTicket = false;
                _this.paymentFailed = true;
              }
            });
          }
        } else if (result.pay_gay_url && !result.code) {
          let form = document.getElementById('payMentGateWayForm');
          _this.commonStorage.localSet('bookedTicketDetails', result);
          let formHtml = '';
          for (let key in result) {
            if (result.hasOwnProperty(key)) {
              let value = result[key];
              if (key == "passenger_contact_details" || key == "passengers_details") {
                value = encodeURIComponent(value);
              }
              let value2 = '';
              if (value) {
                value2 = value.toString().replace(/\n/g, '');
              }
              formHtml += '<input type="hidden" value="' + value2 + '" id="' + key + '" name="' + key + '"/>';
            }
          }
          if (!(_this.paymentType == "31")) {
            form.innerHTML = formHtml;
          }
          let payScript = "var form = document.getElementById('ts-app-payment-form-redirect'); ";
          let dirtyEl = '<input type="hidden" id="page_is_dirty" value="no">';
          payScript += "form.innerHTML = `" + formHtml + dirtyEl + "`;";
          payScript += "form.action = `" + result.pay_gay_url + "`;";
          payScript += "form.method = 'POST';";
          payScript += `var e = document.getElementById("page_is_dirty");`;
          payScript += `if (e.value == "no") {e.value = "yes";form.submit();}`;
          payScript += `else {var retVal = confirm("Are you sure you want to go Back?");if( retVal == true ){window.location = "http://local-cancel";}else{form.submit();} }`;
          let payScript2 = "";
          payScript2 += "var form = document.getElementById('ts-app-payment-form-redirect');";
          payScript2 += "form.innerHTML = `" + formHtml + dirtyEl + "`;";
          payScript += "form.action = `" + result.pay_gay_url + "`;";
          payScript += "form.method = 'POST';";
          payScript2 += `var e = document.getElementById("page_is_dirty");`;
          payScript2 += `if (e.value == "yes") {e.value = "yes";form.submit();}`;
          payScript2 += `else {var retVal = confirm("Are you sure you want to go Back?");if( retVal == true ){window.location = "http://local-cancel";}else{form.submit();} }`;
          if (result.html_body_contents && !result.pay_gay_url) {
            let parser = new DOMParser();
            let doc = parser.parseFromString(result.html_body_contents, "text/xml");
            let htmlStr = "";
            htmlStr += '<script src="https://www.paynimo.com/paynimocheckout/client/lib/jquery.min.js" type="text/javascript"></script>';
            payScript = "document.write(`" + htmlStr + result.html_body_contents + "<body></body>`);";
            payScript2 = payScript;
          }
          if ((_this.platform.is('cordova') || _this.platform.is('android') || _this.platform.is('ios')) && !_this.appData.isWEBAPP) {
            let browser;
            let self = _this;
            let track = 0;
            let prevUrl = '';
            browser = _this.iab.create(_this.appData.BASE_URL + "bookings/payment_gateway_redirect_page", '_blank', 'location=no, toolbar=no');
            browser.on('loadstart').subscribe(event => {
              console.log('event.url => ', event.url);
              if (event.url.indexOf("payment_gateway_redirect_page") > -1 && prevUrl.indexOf("payment_gateway_redirect_page") > -1) {
                track = 0;
              }
              if ((event.url.indexOf("status=0") > -1 || event.url.indexOf("pnr_number") > -1 || event.url.indexOf("ticket-confirm") > -1) && event.url.indexOf('payment_gateway_redirect_page') <= -1) {
                let pnrNumber = self.commonStorage.localGet('bookedTicketDetails').pnr_number;
                browser.close();
                localStorage.setItem('bookingDetails', JSON.stringify(self.commonStorage.localGet('bookedTicketDetails')));
                let navigationExtras = {
                  queryParams: {
                    new_booking: false
                  }
                };
                _this.navCtrl.navigateRoot('booking-details', navigationExtras);
              } else if (event.url.indexOf("ticket_failure") > -1 || event.url.indexOf("ticket-cancel") > -1 || event.url.indexOf("status=1") > -1 || event.url.indexOf("customerCancellation") > -1 || event.url.indexOf("www.ticketsimply.com") > -1) {
                self.commonStorage.localRemove('bookedTicketDetails');
                browser.close();
                localStorage.setItem('bookingDetails', JSON.stringify(self.commonStorage.localGet('bookedTicketDetails')));
                let navigationExtras = {
                  queryParams: {
                    new_booking: false
                  }
                };
                _this.navCtrl.navigateRoot('booking-details', navigationExtras);
              } else if (event.url.indexOf("local-cancel") > -1) {
                setTimeout(() => {
                  browser.close();
                }, 500);
              }
            });
            browser.on('loadstop').subscribe(event => {
              if (event.url.indexOf("payment_gateway_redirect_page") > -1) {
                if (track <= 0) {
                  browser.executeScript({
                    code: payScript
                  });
                } else {
                  browser.executeScript({
                    code: payScript2
                  });
                }
              }
              track++;
            });
            browser.on('exit').subscribe(event => {
              browser.executeScript({
                code: payScript
              });
            });
            browser.on('backPressed').subscribe(event => {
              navigator.notification.confirm('Are you sure you want to go Back?', function (index) {
                if (index == 1) {
                  setTimeout(() => {
                    browser.close();
                  }, 500);
                }
              }, '', ['YES', 'NO']);
            });
          } else {
            form.action = result.pay_gay_url;
            form.method = "POST";
            form.submit();
          }
        } else if (result.code == 443) {
          _this.walletNoteModal = true;
          var msg = result.message;
          _this.isShowWalletBtn = true;
          _this.walletMessage = result.message;
        } else if (result.code) {
          _this.util.showAlert("Error", result.message);
        } else {
          if (!result.code && (result.ticket_number || result.pnr_number)) {
            localStorage.setItem('bookingDetails', JSON.stringify(result));
            let navigationExtras = {
              queryParams: {
                new_booking: true
              }
            };
            if (!_this.isRoundTrip) _this.navCtrl.navigateRoot('booking-details', navigationExtras);else if (_this.isRoundTrip) {
              _this.showConfirmReturn = true;
            }
          }
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), err => {
      this.loader.hideLoadingDefault();
      if (!this.util.isConnected()) {
        this.util.showAlert("Error Loading", "Internet not connected please connect the internect and try after again");
      } else {
        this.util.showAlert("Error Loading", "Something went wrong please try after some time");
      }
      this.ex.call('PaymentDetailsPage', 'bookTicket() --> this.apiFactory.bookETicket(passengersData,pathForBooking)', err, '');
    });
  }
  clearReturnJourney() {
    this.globalData.DEPARTURE_DATE_RETURN = {};
    this.commonStorage.setItem('travelDateReturn', {});
    // this.modalController.dismiss({});
  }
  bookWallet(pathForBooking) {
    if (!this.util.checkConnection()) {
      return;
    }
    this.loader.showLoadingDefault();
    this.apiFactory.phoneEBook(pathForBooking).subscribe(result => {
      this.loader.hideLoadingDefault();
      if (result.passenger_details) {
        this.util.showAlert('', 'TICKET CONFIRMED SUCCESSFULLY');
        this.commonStorage.localSet('bookedTicketDetails', result);
        localStorage.setItem('bookingDetails', JSON.stringify(result));
        let navigationExtras = {
          queryParams: {
            new_booking: true
          }
        };
        this.navCtrl.navigateRoot('booking-details', navigationExtras);
      } else if (result.code == 443) {
        this.walletNoteModal = true;
        var msg = result.message;
        this.isShowWalletBtn = true;
        this.walletMessage = result.message;
      } else {
        this.util.showAlert('', result.message);
      }
    }, err => {
      this.loader.hideLoadingDefault();
      if (!this.util.isConnected()) {
        this.util.showAlert("Error Loading", "Internet not connected please connect the internect and try after again");
      } else {
        this.util.showAlert("Error Loading", "Something went wrong please try after some time");
      }
      this.ex.call('PaymentDetailsPage', 'bookTicket() --> this.apiFactory.bookETicket(passengersData,pathForBooking)', err, '');
    });
  }
  cancelbtn() {
    this.walletNoteModal = false;
  }
  RefundableCharge() {
    var m = parseInt(this.commonStorage.getItem('ticket-details-item').ticket_fare) * this.metaData.cancelProtectPercentage / 100;
    return m;
  }
  getTotalPayable() {
    var m = parseInt(this.commonStorage.getItem('ticket-details-item').ticket_fare) + this.RefundableCharge();
    return m;
  }
  emcription(serverDate, subdomain) {
    var _serverDate, _serverDate2;
    const [first, second] = ((_serverDate = serverDate) === null || _serverDate === void 0 ? void 0 : _serverDate.split('T')) || [];
    serverDate = first === null || first === void 0 ? void 0 : first.replace('-', '');
    serverDate = (_serverDate2 = serverDate) === null || _serverDate2 === void 0 ? void 0 : _serverDate2.replace('-', '');
    var res = subdomain.concat(serverDate);
    var halfEncryptData = btoa(res);
    return halfEncryptData;
  }
  payWithRazorpay(ticketData) {
    var _this2 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        var _this2$metaData, _this2$metaData2;
        const halfKey = _this2.emcription((_this2$metaData = _this2.metaData) === null || _this2$metaData === void 0 ? void 0 : _this2$metaData.serverDate, (_this2$metaData2 = _this2.metaData) === null || _this2$metaData2 === void 0 ? void 0 : _this2$metaData2.subdomain);
        let merchantKey = atob(ticketData.merchant_id).replace(halfKey, '');
        const options = {
          description: 'Credits towards consultation',
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
        const result = yield capacitor_razorpay__WEBPACK_IMPORTED_MODULE_3__.Checkout.open(options);
        const response = typeof result.response === 'string' ? JSON.parse(result.response) : result.response;
        const paymentId = response === null || response === void 0 ? void 0 : response.razorpay_payment_id;
        if (!paymentId) {
          throw new Error('Payment ID missing');
        }
        _this2.util.showToast('TICKET CONFIRMED SUCCESSFULLY');
        _this2.commonStorage.localSet('bookedTicketDetails', ticketData);
        localStorage.setItem('bookingDetails', JSON.stringify(ticketData));
        let navigationExtras = {
          queryParams: {
            new_booking: 'true',
            hideLocateTrackBus: true
          }
        };
        _this2.navigationExtras = navigationExtras;
        _this2.loader.showLoadingDefault();
        _this2.apiFactory.paymentSuccessCall(ticketData.pnr_number, paymentId).subscribe(() => {
          setTimeout(() => {
            _this2.loader.hideLoadingDefault();
            if (!_this2.isRoundTrip) {
              _this2.navCtrl.navigateRoot('booking-details', _this2.navigationExtras);
            } else {
              _this2.showConfirmReturn = true;
            }
          }, 500);
        }, err => {
          setTimeout(() => {
            _this2.loader.hideLoadingDefault();
            if (!_this2.isRoundTrip) {
              _this2.navCtrl.navigateRoot('booking-details', _this2.navigationExtras);
            } else {
              _this2.showConfirmReturn = true;
            }
          }, 500);
        });
      } catch (error) {
        _this2.commonStorage.localSet('bookedTicketDetails', ticketData);
        localStorage.setItem('bookingDetails', JSON.stringify(_this2.commonStorage.localGet('bookedTicketDetails')));
        let navigationExtras = {
          queryParams: {
            new_booking: 'true',
            hideLocateTrackBus: true
          }
        };
        _this2.navigationExtras = navigationExtras;
        _this2.navCtrl.navigateRoot('booking-details', _this2.navigationExtras);
        _this2.loader.showLoadingDefault();
        _this2.apiFactory.paymentFailureCall(ticketData.pnr_number, ticketData.order_id).subscribe(() => {
          setTimeout(() => {
            _this2.loader.hideLoadingDefault();
            if (!_this2.isRoundTrip) {
              _this2.navCtrl.navigateRoot('booking-details', _this2.navigationExtras);
            } else {
              _this2.showConfirmReturn = true;
            }
          }, 500);
        }, err => {
          setTimeout(() => {
            _this2.loader.hideLoadingDefault();
            if (!_this2.isRoundTrip) {
              _this2.navCtrl.navigateRoot('booking-details', _this2.navigationExtras);
            } else {
              _this2.showConfirmReturn = true;
            }
          }, 500);
        });
      }
    })();
  }
  viewTicketPage() {
    this.viewTicket = false;
    this.navCtrl.navigateRoot('booking-details', this.navigationExtras);
  }
  gotoMaps(mapdata) {
    this.loader.showLoadingDefault();
    _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_2__.Geolocation.getCurrentPosition({
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
  call_Pay_Status(resp) {
    const ticketOrPnr = resp.ticket_number || resp.pnr_number;
    // this.loader.showLoadingDefault();
    this.checkPhonePeStatus(resp.ticket_number ? resp.ticket_number : resp.pnr_number).subscribe({
      next: res => {
        console.log(JSON.stringify(res));
        this.loader.hideLoadingDefault();
        if (res.code === 200 && res.status) {
          switch (res.status.toUpperCase()) {
            case 'COMPLETED':
              this.loader.showLoadingDefault();
              this.apiFactory.phone_pe_v2_conpay(ticketOrPnr).subscribe(resdata => {
                this.loader.hideLoadingDefault();
              }, err => {
                this.loader.hideLoadingDefault();
              });
              this.stopCountdown();
              this.viewTicket = true;
              this.isPendingPayment = false;
              this.paymentFailed = false;
              this.loader.hideLoadingDefault();
              if (this.pendingTimeOut && this.isPendingPayment) {
                this.viewTicket = true;
                this.isPendingPayment = false;
                this.paymentFailed = false;
              }
              break;
            case 'FAILED':
              // this.releaseBookTicket(ticketOrPnr);
              this.stopCountdown();
              this.paymentFailed = true;
              this.viewTicket = false;
              this.isPendingPayment = false;
              this.util.showToast('Payment failed');
              break;
            case 'PENDING':
              if (!this.pendingTimeOut && !this.isPendingPayment) {
                //   this.openSMS('',"Pending_PhonePe_v2",ticketOrPnr);
                this.isPendingPayment = true;
                this.paymentFailed = false;
                this.viewTicket = false;
                this.startCountdownTimer();
              }
              this.pendingTimeOut = setTimeout(() => {
                this.call_Pay_Status(resp);
              }, 1000);
              break;
            default:
              this.util.showToast('Server Error');
              break;
          }
        } else {
          this.loader.hideLoadingDefault();
          this.util.showToast(res.error || res.message || "Invalid payment response or missing data");
        }
      },
      error: () => {
        this.loader.hideLoadingDefault();
        this.util.showToast('Server Error');
      }
    });
  }
  checkPhonePeStatus(ticketNumber) {
    return this.apiFactory.phonepe_v2_payment_success(ticketNumber, '');
  }
  startCountdownTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
    this.timer = 10; // reset timer if needed
    this.timerInterval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
        console.log('Timer finished');
        // optionally handle auto cancel:
        // this.isPendingPayment = false;
        // this.paymentFailed = true;
      }
    }, 1000);
  }
  stopCountdown() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    this.timer = 0;
  }
  gotoMyBookings() {
    if (this.metaData.msiteFolder == 'ourbustheme') {
      this.navCtrl.navigateRoot('/my-bookings');
    } else {
      this.navCtrl.navigateRoot('tabs/my-bookings');
    }
  }
  viewDetails() {
    this.moreLessOpt = !this.moreLessOpt;
  }
}
_PhoneConfirmBookingPage = PhoneConfirmBookingPage;
_PhoneConfirmBookingPage.ɵfac = function PhoneConfirmBookingPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PhoneConfirmBookingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_7__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_8__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_9__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__.InAppBrowser), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_11__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_12__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_13__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_services_appdata__WEBPACK_IMPORTED_MODULE_16__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_plugin_service__WEBPACK_IMPORTED_MODULE_17__.PluginProvider), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_exception__WEBPACK_IMPORTED_MODULE_19__.ExceptionProvider), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_authentication__WEBPACK_IMPORTED_MODULE_20__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_global_data_service__WEBPACK_IMPORTED_MODULE_21__.GlobalDataService));
};
_PhoneConfirmBookingPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _PhoneConfirmBookingPage,
  selectors: [["app-phone-confirm-booking"]],
  standalone: false,
  decls: 5,
  vars: 5,
  consts: [[4, "ngIf"], [3, "translucent"], [3, "ngClass"], ["mode", "md", "slot", "start", 3, "ngStyle"], [3, "ngStyle"], [3, "ngClass", "ngStyle"], ["size", "12", 3, "click"], [1, "Continue-button", 2, "font-weight", "bold", "height", "50px"], ["id", "payMentGateWayForm", "name", "payMentGateWayForm"], ["class", "whole center", 4, "ngIf"], ["size", "12"], [1, "ion-no-margin", "ion-padding-top", "ion-padding-bottom"], ["size", "4", 1, "ion-no-padding"], [2, "margin-bottom", "0"], ["size", "4 ", 1, "ion-no-padding"], [2, "color", "#A0A0A0"], ["size", "4", 2, "display", "flex", "align-items", "center", "padding", "0"], ["width", "23", "height", "8", "viewBox", "0 0 23 8", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["style", " font-size: 12px;", 4, "ngIf"], [1, "", 2, "margin", "0", "color", "#000 !important"], ["style", "margin: 0; position: absolute;  left: 30%;top: -7px; font-size: 12px;", 4, "ngIf"], [2, "margin", "0", "color", "#000 !important"], [1, "card-corner-design", 2, "position", "relative"], [1, "card-circular-corner", "ion-margin-top", "ion-margin-bottom"], [1, "dash-line"], [1, "ion-padding"], ["size", "12", 1, "pnr-status"], ["size", "2", 2, "display", "flex", "justify-content", "center", "align-items", "center"], [1, "pnr-circle-status"], ["width", "23", "height", "23", "viewBox", "0 0 23 23", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["style", " height: 30px; width: 30px;", 3, "src", 4, "ngIf"], ["size", "10"], ["size", "12", 1, "ticket-details"], ["size", "6"], [1, "ticket-details-description"], [1, "ticket-details-status"], ["size", "6", 1, "ion-justify-content-end"], [1, "ticket-details-description", 2, "text-align", "end"], [1, "ticket-details-status", 2, "text-align", "end"], [4, "ngFor", "ngForOf"], ["size", "12", 1, ""], ["size", "2", 2, "display", "flex", "justify-content", "center"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["opacity", "0.5", "clip-path", "url(#clip0_6_6126)"], ["d", "M9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12Z", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12Z", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 2V4", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 20V22", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M20 12H22", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M2 12H4", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "clip0_6_6126"], ["width", "24", "height", "24", "fill", "white"], [1, "pickup-point"], [1, "pickup-detail"], ["style", "display: inline-flex; margin-left: -3px;", 3, "click", 4, "ngIf"], ["opacity", "0.5", "clip-path", "url(#clip0_6_6134)"], ["d", "M9 11C9 11.7956 9.31607 12.5587 9.87868 13.1213C10.4413 13.6839 11.2044 14 12 14C12.7956 14 13.5587 13.6839 14.1213 13.1213C14.6839 12.5587 15 11.7956 15 11C15 10.2044 14.6839 9.44129 14.1213 8.87868C13.5587 8.31607 12.7956 8 12 8C11.2044 8 10.4413 8.31607 9.87868 8.87868C9.31607 9.44129 9 10.2044 9 11Z", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M17.657 16.657L13.414 20.9C13.039 21.2746 12.5306 21.4851 12.0005 21.4851C11.4704 21.4851 10.962 21.2746 10.587 20.9L6.343 16.657C5.22422 15.5382 4.46234 14.1127 4.15369 12.5609C3.84504 11.009 4.00349 9.40051 4.60901 7.93873C5.21452 6.47694 6.2399 5.22754 7.55548 4.3485C8.87107 3.46947 10.4178 3.00029 12 3.00029C13.5822 3.00029 15.1289 3.46947 16.4445 4.3485C17.7601 5.22754 18.7855 6.47694 19.391 7.93873C19.9965 9.40051 20.155 11.009 19.8463 12.5609C19.5377 14.1127 18.7758 15.5382 17.657 16.657Z", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "clip0_6_6134"], [1, "Method-pay"], ["mode", "md", 2, "width", "100%", "padding-left", "5px", 3, "ngModelChange", "ionChange", "ngModel"], ["lines", "none", 2, "border-bottom", "1px solid rgba(128,128,128,0.3)", "--background", "white"], ["slot", "start", "value", "1", 3, "ngStyle"], ["style", "justify-content: start;display: flex; align-items: center;", 4, "ngIf"], ["slot", "start", "value", "3", 3, "ngStyle"], ["width", "23", "height", "8", "viewBox", "0 0 23 8", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.54909 6.42781C6.67037 5.70013 6.42781 5.21501 5.82141 4.85117C5.33629 4.60862 4.7299 4.60861 4.24478 4.97245C3.75966 5.33629 3.5171 5.82141 3.63838 6.42781H3.5171C2.54687 6.42781 1.57663 6.42781 0.485118 6.42781C0.12128 6.42781 0 6.30653 0 5.94269C0 5.21501 0 4.36606 0 3.63838C0 3.5171 4.60837e-07 3.39582 0.12128 3.39582C0.242559 3.27454 0.242558 3.27454 0.242558 3.15326C0.242558 2.18303 0.363838 1.33407 0.363838 0.363838C0.363838 0.12128 0.485118 0 0.727677 0C1.57663 0 2.42559 0 3.27454 0C7.15548 0 10.9151 0 14.7961 0C16.9791 0 19.2834 0 21.4664 0C21.9516 0 22.4367 0.363838 22.558 0.848955V0.970235C22.558 2.42559 22.558 3.88094 22.558 5.45757C22.558 5.57885 22.4367 5.70013 22.3154 5.70013C21.8303 5.82141 21.2239 5.94269 20.7388 6.06397C20.1324 6.18525 19.4047 6.30653 18.7983 6.42781C18.5557 6.42781 18.1919 6.54909 17.8281 6.54909C17.8281 5.94269 17.7068 5.33629 17.1004 4.97245C16.8578 4.85117 16.494 4.7299 16.2514 4.7299C15.4025 4.85117 14.7961 5.57885 14.9174 6.42781C12.2492 6.42781 9.45979 6.42781 6.54909 6.42781ZM10.5513 0.848955C10.0662 0.848955 9.45979 0.848955 8.97467 0.848955C8.73211 0.848955 8.48956 0.970235 8.48956 1.33407C8.48956 1.69791 8.48956 2.06175 8.48956 2.54687C8.48956 2.9107 8.61084 3.03198 8.97467 3.03198C10.0662 3.03198 11.0364 3.03198 12.1279 3.03198C12.3705 3.03198 12.6131 2.9107 12.6131 2.54687C12.6131 2.18303 12.6131 1.69791 12.6131 1.33407C12.6131 1.09151 12.4918 0.848955 12.1279 0.848955C11.6428 0.848955 11.0364 0.848955 10.5513 0.848955ZM5.82141 0.848955C5.33629 0.848955 4.7299 0.848955 4.24478 0.848955C4.00222 0.848955 3.88094 0.970235 3.75966 1.21279C3.75966 1.57663 3.75966 2.06175 3.75966 2.42559C3.75966 2.66815 3.88094 2.78943 4.1235 2.78943C5.21501 2.78943 6.30653 2.78943 7.39804 2.78943C7.6406 2.78943 7.76188 2.66815 7.76188 2.42559C7.76188 2.06175 7.76188 1.57663 7.76188 1.21279C7.76188 0.848955 7.6406 0.727677 7.27676 0.727677C6.79164 0.848956 6.30653 0.848955 5.82141 0.848955ZM15.2812 0.848955C14.7961 0.848955 14.1897 0.848955 13.7046 0.848955C13.462 0.848955 13.3407 0.970235 13.3407 1.21279C13.3407 1.57663 13.3407 2.06175 13.3407 2.42559C13.3407 2.66815 13.462 2.78943 13.7046 2.78943C14.7961 2.78943 15.8876 2.78943 16.9791 2.78943C17.2217 2.78943 17.3429 2.66815 17.3429 2.42559C17.3429 2.06175 17.3429 1.57663 17.3429 1.21279C17.3429 0.848955 17.2217 0.727677 16.8578 0.727677C16.3727 0.848956 15.7663 0.848955 15.2812 0.848955ZM20.0111 2.91071C20.4962 2.91071 21.1026 2.91071 21.5877 2.91071C21.8303 2.91071 21.9516 2.78942 21.9516 2.54687C21.9516 2.30431 21.9516 2.06175 21.9516 1.69791C21.9516 1.33407 21.8303 1.09151 21.4664 0.970235C21.3452 0.848956 21.1026 0.848955 20.8601 0.848955C20.0111 0.848955 19.1621 0.848955 18.3132 0.848955C17.9493 0.848955 17.8281 0.970235 17.8281 1.33407C17.8281 1.69791 17.8281 2.06175 17.8281 2.42559C17.8281 2.78943 17.9493 2.91071 18.3132 2.91071C18.9196 2.91071 19.526 2.91071 20.0111 2.91071ZM1.33407 3.27454C1.33407 3.88094 1.33407 4.60862 1.33407 5.21501C1.33407 5.45757 1.45535 5.57885 1.69791 5.57885C1.94047 5.57885 2.18303 5.57885 2.42559 5.57885C2.66815 5.57885 2.91071 5.45757 2.91071 5.09373C2.91071 3.75966 2.91071 2.42559 2.91071 1.21279C2.91071 0.970235 2.78943 0.848956 2.54687 0.727677C2.30431 0.727677 2.06175 0.727677 1.94047 0.727677C1.57663 0.727677 1.45535 0.848955 1.45535 1.21279C1.33407 2.06175 1.33407 2.66815 1.33407 3.27454Z", "fill", "#191966"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M4.00195 6.06393C4.00195 5.45753 4.60835 4.97241 5.21475 4.97241C5.82114 4.97241 6.30626 5.45753 6.30626 6.18521C6.30626 6.7916 5.82114 7.27672 5.21475 7.27672C4.48707 7.27672 4.00195 6.7916 4.00195 6.06393ZM5.69986 6.18521C5.69986 5.94265 5.4573 5.57881 5.21475 5.57881C4.97219 5.57881 4.72963 5.82137 4.60835 6.06393C4.60835 6.30649 4.85091 6.67032 5.09347 6.67032C5.4573 6.67032 5.69986 6.42776 5.69986 6.18521Z", "fill", "#191966"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M16.4938 7.27672C15.8874 7.27672 15.281 6.7916 15.4023 6.06393C15.4023 5.45753 15.8874 4.97241 16.4938 4.97241C17.1002 4.97241 17.5854 5.45753 17.5854 6.18521C17.7066 6.7916 17.2215 7.27672 16.4938 7.27672ZM17.1002 6.06393C17.1002 5.82137 16.8577 5.57881 16.6151 5.57881C16.3726 5.57881 16.13 5.82137 16.13 6.18521C16.13 6.42776 16.3726 6.67032 16.7364 6.67032C16.8577 6.67032 17.1002 6.42777 17.1002 6.06393Z", "fill", "#191966"], [2, "font-size", "12px"], [2, "margin", "0", "position", "absolute", "left", "30%", "top", "-7px", "font-size", "12px"], ["width", "23", "height", "23", "viewBox", "0 0 23 23", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M6.46973 7.04369L3.66703 4.24098C-0.282238 8.50874 -0.282238 15.1333 3.66703 19.4648L6.46973 16.6621C4.04921 13.9231 4.04921 9.78269 6.46973 7.04369Z", "fill", "#FBAE17"], ["d", "M7.04294 17.2353L4.24023 20.038C8.50799 23.9873 15.1326 23.9873 19.464 20.038L16.6613 17.2353C13.9223 19.6559 9.78195 19.6559 7.04294 17.2353Z", "fill", "#FBAE17"], ["d", "M17.2344 16.6621L20.0371 19.4648C23.9863 15.197 23.9863 8.57244 20.0371 4.24098L17.2344 7.04369C19.6549 9.78269 19.6549 13.9231 17.2344 16.6621Z", "fill", "#BBBDBF"], ["d", "M16.6613 6.4704L19.464 3.6677C15.1963 -0.281567 8.57169 -0.281567 4.24023 3.6677L7.04294 6.4704C9.78195 4.04989 13.9223 4.04989 16.6613 6.4704Z", "fill", "#FBAE17"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M9.33617 13.4135C9.39987 13.0313 9.27247 12.7765 8.95398 12.5854C8.69919 12.458 8.3807 12.458 8.12591 12.6491C7.87112 12.8402 7.74372 13.095 7.80742 13.4135H7.74372C7.23414 13.4135 6.72456 13.4135 6.15128 13.4135C5.96018 13.4135 5.89648 13.3498 5.89648 13.1587C5.89648 12.7765 5.89648 12.3306 5.89648 11.9484C5.89648 11.8847 5.89648 11.821 5.96018 11.821C6.02388 11.7573 6.02388 11.7573 6.02388 11.6936C6.02388 11.184 6.08758 10.7382 6.08758 10.2286C6.08758 10.1012 6.15128 10.0375 6.27867 10.0375C6.72456 10.0375 7.17044 10.0375 7.61633 10.0375C9.65466 10.0375 11.6293 10.0375 13.6676 10.0375C14.8142 10.0375 16.0244 10.0375 17.171 10.0375C17.4258 10.0375 17.6806 10.2286 17.7443 10.4834V10.5471C17.7443 11.3114 17.7443 12.0758 17.7443 12.9039C17.7443 12.9676 17.6806 13.0313 17.6169 13.0313C17.3621 13.095 17.0436 13.1587 16.7888 13.2224C16.4703 13.2861 16.0881 13.3498 15.7696 13.4135C15.6423 13.4135 15.4512 13.4772 15.2601 13.4772C15.2601 13.1587 15.1964 12.8402 14.8779 12.6491C14.7505 12.5854 14.5594 12.5217 14.432 12.5217C13.9861 12.5854 13.6676 12.9676 13.7313 13.4135C12.33 13.4135 10.8649 13.4135 9.33617 13.4135ZM11.4382 10.4834C11.1834 10.4834 10.8649 10.4834 10.6101 10.4834C10.4827 10.4834 10.3553 10.5471 10.3553 10.7382C10.3553 10.9292 10.3553 11.1203 10.3553 11.3751C10.3553 11.5662 10.419 11.6299 10.6101 11.6299C11.1834 11.6299 11.693 11.6299 12.2663 11.6299C12.3937 11.6299 12.5211 11.5662 12.5211 11.3751C12.5211 11.184 12.5211 10.9292 12.5211 10.7382C12.5211 10.6108 12.4574 10.4834 12.2663 10.4834C12.0115 10.4834 11.693 10.4834 11.4382 10.4834ZM8.95398 10.4834C8.69919 10.4834 8.3807 10.4834 8.12591 10.4834C7.99851 10.4834 7.93482 10.5471 7.87112 10.6745C7.87112 10.8655 7.87112 11.1203 7.87112 11.3114C7.87112 11.4388 7.93482 11.5025 8.06221 11.5025C8.63549 11.5025 9.20877 11.5025 9.78205 11.5025C9.90945 11.5025 9.97315 11.4388 9.97315 11.3114C9.97315 11.1203 9.97315 10.8655 9.97315 10.6745C9.97315 10.4834 9.90945 10.4197 9.71835 10.4197C9.46356 10.4834 9.20877 10.4834 8.95398 10.4834ZM13.9224 10.4834C13.6676 10.4834 13.3491 10.4834 13.0943 10.4834C12.9669 10.4834 12.9032 10.5471 12.9032 10.6745C12.9032 10.8655 12.9032 11.1203 12.9032 11.3114C12.9032 11.4388 12.9669 11.5025 13.0943 11.5025C13.6676 11.5025 14.2409 11.5025 14.8142 11.5025C14.9416 11.5025 15.0053 11.4388 15.0053 11.3114C15.0053 11.1203 15.0053 10.8655 15.0053 10.6745C15.0053 10.4834 14.9416 10.4197 14.7505 10.4197C14.4957 10.4834 14.1772 10.4834 13.9224 10.4834ZM16.4066 11.5662C16.6614 11.5662 16.9799 11.5662 17.2347 11.5662C17.3621 11.5662 17.4258 11.5025 17.4258 11.3751C17.4258 11.2477 17.4258 11.1203 17.4258 10.9292C17.4258 10.7382 17.3621 10.6108 17.171 10.5471C17.1073 10.4834 16.9799 10.4834 16.8525 10.4834C16.4066 10.4834 15.9607 10.4834 15.5149 10.4834C15.3238 10.4834 15.2601 10.5471 15.2601 10.7382C15.2601 10.9292 15.2601 11.1203 15.2601 11.3114C15.2601 11.5025 15.3238 11.5662 15.5149 11.5662C15.8333 11.5662 16.1518 11.5662 16.4066 11.5662ZM6.59716 11.7573C6.59716 12.0758 6.59716 12.458 6.59716 12.7765C6.59716 12.9039 6.66086 12.9676 6.78825 12.9676C6.91565 12.9676 7.04305 12.9676 7.17044 12.9676C7.29784 12.9676 7.42523 12.9039 7.42523 12.7128C7.42523 12.0121 7.42523 11.3114 7.42523 10.6745C7.42523 10.5471 7.36153 10.4834 7.23414 10.4197C7.10674 10.4197 6.97935 10.4197 6.91565 10.4197C6.72456 10.4197 6.66086 10.4834 6.66086 10.6745C6.59716 11.1203 6.59716 11.4388 6.59716 11.7573Z", "fill", "#BBBDBF"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7.99805 13.2224C7.99805 12.9039 8.31654 12.6491 8.63503 12.6491C8.95351 12.6491 9.20831 12.9039 9.20831 13.2861C9.20831 13.6046 8.95351 13.8594 8.63503 13.8594C8.25284 13.8594 7.99805 13.6046 7.99805 13.2224ZM8.88982 13.2861C8.88982 13.1587 8.76242 12.9676 8.63503 12.9676C8.50763 12.9676 8.38023 13.095 8.31654 13.2224C8.31654 13.3498 8.44393 13.5409 8.57133 13.5409C8.76242 13.5409 8.88982 13.4135 8.88982 13.2861Z", "fill", "#BBBDBF"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M14.559 13.8594C14.2405 13.8594 13.922 13.6046 13.9857 13.2224C13.9857 12.9039 14.2405 12.6491 14.559 12.6491C14.8775 12.6491 15.1323 12.9039 15.1323 13.2861C15.196 13.6046 14.9412 13.8594 14.559 13.8594ZM14.8775 13.2224C14.8775 13.095 14.7501 12.9676 14.6227 12.9676C14.4953 12.9676 14.3679 13.095 14.3679 13.2861C14.3679 13.4135 14.4953 13.5409 14.6864 13.5409C14.7501 13.5409 14.8775 13.4135 14.8775 13.2224Z", "fill", "#BBBDBF"], [2, "height", "30px", "width", "30px", 3, "src"], [2, "display", "inline-flex", "margin-left", "-3px", 3, "click"], ["src", "./assets/icon/cbuslocation.svg", "item-start", "", 2, "height", "20px", "width", "20px"], [1, "themeone-viewmap-txt", 2, "margin", "auto", "margin-top", "4px"], [2, "justify-content", "start", "display", "flex", "align-items", "center"], ["name", "information-circle-outline", 2, "z-index", "50", "height", "23px", "width", "26px", "margin-left", "5px", 3, "click"], [1, "whole", "center"], [1, "legend-box", 2, "position", "absolute", "bottom", "0", "width", "100% !important"], ["size", "6", 1, "brws-txt", 2, "margin", "0", "font-size", "14px", "font-weight", "600"], ["size", "6", 1, "dwn-txt", 2, "margin", "0", "font-size", "14px", "font-weight", "600", 3, "click", "ngStyle"], ["class", "container-m", 4, "ngIf"], [1, "container-m"], ["size", "2"], ["src", "./assets/icon/rupee-indian.png", "alt", "", 2, "height", "40px"], ["size", "10", 1, "promo-txt-m"], [2, "font-size", "11px"], ["src", "./assets/icon/calculator.png", "alt", "", 2, "height", "40px"], [1, "legend-box", 2, "position", "absolute", "bottom", "40%", "width", "86% !important"], [1, "circle"], [1, "txt-msg"], ["size", "7"], ["size", "5", 1, "dwn-txt", 2, "--color", "var(--primaryText)", 3, "click"], [1, "legend-box"], [1, "circle1"], ["size", "5", 1, "dwn-txt", 3, "click"], [1, "legend-box", 2, "width", "300px !important"], [2, "color", "grey", "font-weight", "bold"], [1, "txt-msg", 2, "font-size", "14px"], ["size", "12", 1, "dwn-txt", 2, "text-align", "center", 3, "click"], ["expand", "block"], ["mode", "md", 1, "h50"], ["slot", "start"], [1, "head"], [1, "bg-content"], [1, "center-div"], [1, "card-1", "mr-tp-16"], [1, "Contact-details"], [1, "pass-body", "grey-box"], ["width-50", ""], [1, "small"], [1, "small", "bold"], ["class", "card-1 mr-tp-16", 4, "ngIf"], [1, "card-1", "mr-tp-16", 2, "padding", "0"], ["lines", "none"], ["mode", "md", 3, "ngModelChange", "ionChange", "ngModel"], ["button", "", 2, "border-bottom", "1px solid rgba(128,128,128,0.3)", 3, "click"], ["slot", "start", "color", "red", "value", "1"], ["slot", "start", "color", "red", "value", "3"], ["mode", "md", "expand", "full", 1, "routes-footer", "mr-tp-16", 3, "click"], [1, "center", "pay-txt-1"], ["class", "whole center", 3, "click", 4, "ngIf"], ["slot", "start", 2, "--color", "var(--iconsAndButtonsColor)", 3, "ngModelChange", "disabled", "ngModel"], ["style", "border-bottom:1px solid rgba(128,128,128,0.3)", "button", "", 3, "click", 4, "ngIf"], ["slot", "start", "color", "red", 3, "value"], [1, "whole", "center", 3, "click"], [1, "txt-msg-hd"], ["size", "5", 1, "brws-txt", 3, "click"], ["size", "5", 1, "brws-txt"], [1, "bg-content", "seabirdTheme"], ["mode", "md", "expand", "block", 1, "searbird-login-btn", 3, "click"], [2, "box-shadow", "none"], [1, "head", "shyamoli-head"], [2, "--background", "#ffffff"], ["size", "12", 2, "padding", "0px"], ["id", "reviewBookingCardShyamoli", 1, "shyamoli-review-booking-card", 2, "overflow", "inherit", "margin", "0", "border", "1px solid #dfdfdf"], [1, "ion-padding", "review-booking-card-first-row_2", 2, "padding", "7px"], ["size", "10", 2, "align-content", "center"], ["src", "./assets/icon/Shyamoliwhite.svg", "alt", "Shyamoli", 1, "shyamoli-logo"], ["size", "2", 2, "display", "flex", "justify-content", "center", "align-items", "center", "flex-direction", "column"], [1, "ion-padding-top", 2, "padding-bottom", "10px", "padding-top", "10px"], [1, "shyamoli-city-short-name"], [2, "color", "#000000", "font-size", "12px", "font-weight", "600"], [1, "shyamoli-service-time"], ["size", "4", 1, "ion-no-padding", 2, "display", "flex", "align-items", "center", "justify-content", "center", "padding", "0"], [1, "location-bus_2"], ["src", "./assets/icon/shyamoli_arrow.svg", 2, "height", "18px", "width", "48px"], [2, "margin-top", "0px", "font-size", "12px", "font-weight", "600", "color", "#333333", "text-align", "center"], [2, "color", "#999999"], [1, "ion-margin-vertical", 2, "margin", "0"], ["size", "12", 2, "padding-bottom", "12px", "padding-top", "0px"], [1, "show-details_2", 2, "font-weight", "bold", "color", "#5F5F5F", 3, "click"], ["name", "chevron-down-circle-outline", "class", "ion-margin-start", "style", "height: 18px;width: 18px;margin-left: 4px;", 4, "ngIf"], ["name", "chevron-up-circle-outline", "class", "ion-margin-start", "style", "height: 18px;width: 18px;margin-left: 4px;", 4, "ngIf"], [1, "shyamoli-passenger-block", 2, "margin", "12px 0px"], [2, "padding", "0px"], [1, "title", 2, "text-align", "left"], [1, "header-row"], [1, "header-text-row", 2, "font-size", "15px"], ["class", "passenger-row", 4, "ngFor", "ngForOf"], ["class", "shyamoli-card-1 mr-tp-16", 4, "ngIf"], ["class", "shyamoli-card-1 mr-tp-16", "style", "padding: 0;", 4, "ngIf"], [1, "shyamoli-card-1", "mr-tp-16"], [1, "shyamoli-contact-details"], ["lines", "none", 2, "background", "none"], ["mode", "md", 2, "--background", "#ffffff", 3, "ngModelChange", "ionChange", "ngModel"], ["mode", "md", "button", "", 1, "shyamoli-payment-item", 2, "--background", "#ffffff", 3, "click"], ["mode", "md", "expand", "full", 1, "shyamoli-button", "mr-tp-16", 3, "click"], [1, "bustype", 2, "margin-top", "5px", "margin-bottom", "5px"], ["size", "1.3", 2, "align-content", "center"], ["src", "./assets/icon/shyamoliVector.svg"], ["size", "10.7", 2, "display", "flex", "justify-content", "center", "align-items", "start", "flex-direction", "column"], [2, "margin", "0px", "font-size", "14px", "color", "#333333", "font-weight", "600"], [2, "color", "#333333", "font-size", "10px"], [1, "passanger-details", "ion-margin", 2, "margin-top", "0px"], ["size", "1.5"], ["src", "./assets/icon/themeone_location.svg", "name", "navigate-circle-outline", "size", "large", 2, "height", "24px", "width", "24px"], ["size", "10.5", 2, "padding", "5px 0px 0px 0px"], [2, "line-height", "22px", "color", "#999999", "font-weight", "600"], [1, "drop_board_address"], ["size", "1.5", 1, ""], ["src", "./assets/icon/theme1_dropicon.svg", "name", "navigate-circle-outline", "size", "large", 2, "height", "24px", "width", "24px"], ["size", "10.5", 1, "", 2, "padding", "5px 0px 0px 0px"], ["name", "chevron-down-circle-outline", 1, "ion-margin-start", 2, "height", "18px", "width", "18px", "margin-left", "4px"], ["name", "chevron-up-circle-outline", 1, "ion-margin-start", 2, "height", "18px", "width", "18px", "margin-left", "4px"], [1, "passenger-row"], [1, "name"], [1, "seat", 2, "font-size", "15px"], [1, "shyamoli-card-1", "mr-tp-16", 2, "padding", "0"], ["slot", "start", 1, "shyamoli-checkbox", 3, "ngModelChange", "disabled", "ngModel"], ["class", "shyamoli-payment-item", "style", "--background: #ffffff;", "mode", "md", "button", "", 3, "click", 4, "ngIf"], [1, "sb-page-header"], [1, "sb-toolbar"], [1, "sb-results-appbar", "sb-pax-appbar"], ["type", "button", "aria-label", "Back", 1, "sb-icon-btn", 3, "click"], ["src", "./assets/seabird-new/back-arrow-navy.svg", "alt", "", "width", "20", "height", "20"], [1, "sb-appbar__text"], [1, "sb-appbar__title"], [1, "sb-appbar__subtitle"], [1, "sb-pay", "sb-phone-confirm"], [1, "sb-pay__body"], [1, "sb-pax-card"], [1, "sb-pax-card__title"], [1, "sb-phone-confirm__details"], [1, "sb-fare__row"], [1, "sb-fare__label"], [1, "sb-fare__value"], ["class", "sb-pax-tile", 4, "ngIf"], ["class", "sb-pax-card", 4, "ngIf"], [1, "sb-pay-label"], ["role", "radiogroup", "aria-label", "Payment method", 1, "sb-pay-card", "sb-methods"], ["type", "button", "role", "radio", 1, "sb-method", 3, "click"], [1, "sb-method__icon"], ["src", "./assets/seabird-new/pay-card.svg", "alt", "", "width", "20", "height", "20"], [1, "sb-method__text"], [1, "sb-method__title"], [1, "sb-method__sub"], [1, "sb-radio"], ["role", "radio", "tabindex", "0", 1, "sb-method", 3, "click"], ["src", "./assets/seabird-new/pay-wallet.svg", "alt", "", "width", "20", "height", "20"], ["type", "button", "aria-label", "Wallet information", 1, "sb-method__info", 3, "click"], ["name", "information-circle-outline", "aria-hidden", "true"], ["class", "sb-pay-label", 4, "ngIf"], ["class", "sb-pay-card sb-methods", "role", "radiogroup", "aria-label", "Payment gateway", 4, "ngIf"], [1, "sb-secure"], ["src", "./assets/seabird-new/pay-secure.svg", "alt", "", "width", "14", "height", "14"], ["class", "sb-pay-footer", 4, "ngIf"], ["class", "sb-pax-sheet-backdrop", 3, "click", 4, "ngIf"], ["class", "sb-dialog-backdrop", 3, "click", 4, "ngIf"], ["class", "sb-dialog-backdrop", 4, "ngIf"], [1, "sb-pax-tile"], [1, "sb-pax-tile__text"], [1, "sb-pax-tile__title"], ["mode", "md", 1, "sb-pax-check", 3, "ngModelChange", "ngModel", "disabled"], [1, "sb-fare__row", "sb-fare__total"], [1, "sb-fare__total-label"], [1, "sb-fare__total-value"], ["role", "radiogroup", "aria-label", "Payment gateway", 1, "sb-pay-card", "sb-methods"], ["type", "button", "class", "sb-method", "role", "radio", 3, "click", 4, "ngIf"], ["src", "./assets/seabird-new/pay-bank.svg", "alt", "", "width", "20", "height", "20"], ["class", "sb-method__logo", "src", "./assets/icon/Razorpay_Secure_Payment-1.png", "alt", "Razorpay", 4, "ngIf"], ["class", "sb-method__title", 4, "ngIf"], ["src", "./assets/icon/Razorpay_Secure_Payment-1.png", "alt", "Razorpay", 1, "sb-method__logo"], [1, "sb-pay-footer"], ["type", "button", 1, "sb-btn-primary", "sb-pay-footer__btn", 3, "click"], [1, "sb-pax-sheet-backdrop", 3, "click"], ["role", "dialog", "aria-label", "Wallet details", 1, "sb-pax-sheet", 3, "click"], [1, "sb-pax-card__head"], ["type", "button", 1, "sb-pax-sheet__close", 3, "click"], ["class", "sb-wallet-balance", 4, "ngIf"], [1, "sb-wallet-balance"], ["name", "wallet-outline"], [2, "margin", "0px"], ["name", "gift-outline"], [1, "sb-dialog-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "sb-dialog", 3, "click"], [1, "sb-confirm__title"], [1, "sb-confirm__text"], ["class", "sb-confirm__actions", 4, "ngIf"], [1, "sb-confirm__actions"], ["type", "button", 1, "sb-btn-secondary", 3, "click"], ["type", "button", 1, "sb-btn-primary", 3, "click"], [1, "sb-dialog-backdrop"], ["role", "dialog", "aria-modal", "true", 1, "sb-dialog"], ["type", "button", 1, "sb-btn-primary", 3, "click", "disabled"]],
  template: function PhoneConfirmBookingPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, PhoneConfirmBookingPage_ng_container_0_Template, 21, 22, "ng-container", 0)(1, PhoneConfirmBookingPage_ng_container_1_Template, 81, 15, "ng-container", 0)(2, PhoneConfirmBookingPage_ng_container_2_Template, 80, 15, "ng-container", 0)(3, PhoneConfirmBookingPage_ng_container_3_Template, 99, 28, "ng-container", 0)(4, PhoneConfirmBookingPage_ng_container_4_Template, 83, 24, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme" || ctx.metaData.msiteFolder == "networktheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "ourbustheme" || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "shyamolitheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder === "seabirdThemeNew");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonRadio, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonRadioGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonBackButton, _angular_common__WEBPACK_IMPORTED_MODULE_22__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_22__.DecimalPipe],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --ion-background-color: #f7f9fb;\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background: #ed3237;\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  position: fixed;\n  bottom: 0;\n  height: 50px;\n  border-radius: 4px;\n}\n\n.center-div[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n\n.bg-cl[_ngcontent-%COMP%] {\n  --background: #ffdd21 !important;\n}\n\n.bg-content[_ngcontent-%COMP%] {\n  --background: #e4e5e6;\n}\n\n.card-1[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  margin: 0;\n  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0px, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0;\n  border-radius: 0;\n}\n\n.mr-md[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n\n.mr-tp-2[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n\n.mr-tp-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.Contact-details[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: #d84e55;\n}\n\n.pass[_ngcontent-%COMP%] {\n  margin: 12px;\n}\n\n.pass[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  font-size: 1.2rem;\n  margin: 0;\n  position: relative;\n  background-color: #ffdd21;\n  color: #000;\n}\n\n.pass[_ngcontent-%COMP%]   .passenger-body[_ngcontent-%COMP%] {\n  padding: 0 10px 10px;\n}\n\n.pass[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 10px 10px 0 0;\n  font-size: 1.7em;\n  padding: 20px 5px 0;\n}\n\n.pass[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  background-color: #fdfdfd;\n  padding: 0;\n  margin: 0;\n}\n\n.small[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n\n.bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.routes-footer[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 100%;\n  --background: #ed3237;\n  color: white;\n  font-weight: bolder;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.whole[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.6);\n}\n\n.legend-box[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 280px;\n  height: auto;\n}\n\n.txt-msg[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n  text-align: justify;\n  letter-spacing: 0.25px;\n  color: rgba(0, 0, 0, 0.6);\n  margin-top: 10px;\n  width: 100%;\n}\n\n.dwn-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #ed3237;\n  margin-top: 28px;\n  width: 100%;\n  text-align: right;\n}\n\n.brws-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #4a4a4a;\n  margin-top: 28px;\n  width: 100%;\n  text-align: left;\n}\n\n.txt-msg-hd[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bolder;\n  font-family: NotoSans;\n  color: rgba(0, 0, 0, 0.6);\n}\n\nion-segment[_ngcontent-%COMP%] {\n  width: 100%;\n  border-bottom: 1px solid #fff;\n}\n\nion-segment-button[_ngcontent-%COMP%]::part(indicator-background) {\n  background: #FFBD16;\n}\n\nion-segment-button.segment-button-checked[_ngcontent-%COMP%]::part(native) {\n  color: #FFBD16;\n}\n\nion-card[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\nion-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-align: center;\n}\nion-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin: 0;\n  text-align: center;\n}\nion-card[_ngcontent-%COMP%]   .location-line[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n  background-color: #dfdfdf;\n  position: relative;\n}\nion-card[_ngcontent-%COMP%]   .location-line[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: rgba(25, 25, 102, 0.2);\n  position: absolute;\n  left: -8px;\n  top: -8px;\n}\nion-card[_ngcontent-%COMP%]   .location-line[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: rgba(242, 194, 26, 0.2);\n  position: absolute;\n  top: -8px;\n  right: -8px;\n}\nion-card[_ngcontent-%COMP%]   .location-line_2[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n  background-color: #dfdfdf;\n  position: relative;\n}\nion-card[_ngcontent-%COMP%]   .location-line_2[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: rgba(59, 173, 105, 0.2);\n  position: absolute;\n  left: -8px;\n  top: -8px;\n}\nion-card[_ngcontent-%COMP%]   .location-line_2[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: rgba(59, 173, 105, 0.2);\n  position: absolute;\n  top: -8px;\n  right: -8px;\n}\nion-card[_ngcontent-%COMP%]   .location-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  background-color: #191966;\n  border-radius: 50%;\n  position: absolute;\n  left: -4px;\n  top: -4px;\n}\nion-card[_ngcontent-%COMP%]   .location-dot_2[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  background-color: #3BAD69;\n  border-radius: 50%;\n  position: absolute;\n  left: -4px;\n  top: -4px;\n}\nion-card[_ngcontent-%COMP%]   .location-dot-blue[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  background-color: #f2c21a;\n  border-radius: 50%;\n  position: absolute;\n  right: -4px;\n  top: -4px;\n}\nion-card[_ngcontent-%COMP%]   .location-dot-blue_2[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  background-color: #3BAD69;\n  border-radius: 50%;\n  position: absolute;\n  right: -4px;\n  top: -4px;\n}\nion-card[_ngcontent-%COMP%]   .location-bus[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -3px;\n  right: 40%;\n}\nion-card[_ngcontent-%COMP%]   .location-bus_2[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  right: 30%;\n}\nion-card[_ngcontent-%COMP%]   .card-circular-corner[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background-color: #191966;\n  position: absolute;\n  bottom: -12px;\n  left: -12px;\n}\nion-card[_ngcontent-%COMP%]   .card-circular-corner[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background-color: #191966;\n  position: absolute;\n  right: -12px;\n  bottom: -12px;\n}\nion-card[_ngcontent-%COMP%]   .dash-line[_ngcontent-%COMP%] {\n  border-top: 1px dashed #DFDFDF;\n  margin: 0px 25px;\n}\nion-card[_ngcontent-%COMP%]   .pnr-status[_ngcontent-%COMP%] {\n  background-color: #F3F3F7;\n  border-radius: 10px;\n}\nion-card[_ngcontent-%COMP%]   .pnr-status[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: start;\n  font-size: 14px;\n  font-weight: 600;\n}\nion-card[_ngcontent-%COMP%]   .pnr-status[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 16px 0px;\n  text-align: start;\n  font-size: 16px;\n  font-weight: 600;\n}\nion-card[_ngcontent-%COMP%]   .pnr-status[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: start;\n  font-size: 10px;\n}\nion-card[_ngcontent-%COMP%]   .pnr-status[_ngcontent-%COMP%]   .track-circle[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background-color: #FFBD16;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-card[_ngcontent-%COMP%]   .pnr-circle-status[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  border: 1px solid #DFDFDF;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n}\nion-card[_ngcontent-%COMP%]   .ticket-details[_ngcontent-%COMP%]   p.ticket-details-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #A0A0A0;\n  text-align: start;\n}\nion-card[_ngcontent-%COMP%]   .ticket-details[_ngcontent-%COMP%]   p.ticket-details-status[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #333333;\n  text-align: start;\n  font-weight: 600;\n}\nion-card[_ngcontent-%COMP%]   .pickup-point[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: start;\n  color: #A0A0A0;\n}\nion-card[_ngcontent-%COMP%]   .pickup-detail[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: start;\n  font-weight: 400;\n  margin-bottom: 5px;\n}\nion-card[_ngcontent-%COMP%]   .pickup-detail-view[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: start;\n  color: #191966;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n}\nion-card[_ngcontent-%COMP%]   .pickup-detail-view[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\nion-card[_ngcontent-%COMP%]   .bus-contact[_ngcontent-%COMP%]   h4.light-font[_ngcontent-%COMP%] {\n  color: #A0A0A0;\n  font-size: 14px;\n  margin: 0;\n}\nion-card[_ngcontent-%COMP%]   .bus-contact[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n}\nion-card[_ngcontent-%COMP%]   .bus-contact[_ngcontent-%COMP%]   .bus-contact-circle[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: #25E88A;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%] {\n  background-color: #F3F3F7;\n  border-radius: 10px;\n}\nion-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n  text-align: left;\n  color: #333333;\n}\nion-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   p.left[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: left;\n  font-weight: 500;\n  color: #333333;\n}\nion-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   p.right[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: right;\n  font-weight: 600;\n  color: #333333;\n}\nion-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-details-line[_ngcontent-%COMP%] {\n  height: 1px;\n  border-top: 1px solid #C2C2C2;\n}\nion-card[_ngcontent-%COMP%]   h2.edit-ticket[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: left;\n  font-size: 16px;\n  color: #191966;\n  font-weight: 600;\n}\nion-card[_ngcontent-%COMP%]   h2.Method-pay[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: start;\n  font-size: 16px;\n  font-weight: 600;\n  color: #333333;\n}\n\nion-button.Continue-button[_ngcontent-%COMP%]::part(native) {\n  --background: #f2c21a;\n  color: #191966;\n}\n\nion-button.Continue-button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nion-card[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\n.container-m[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 15px auto;\n  height: auto;\n  border: 1px solid grey;\n  background-color: #f5f5f5;\n  padding: 10px;\n}\n\n.promo-txt-m[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: darkslategrey;\n}\n\n.themeone-viewmap-txt[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-left: 5px;\n  margin-top: auto;\n  color: #191966;\n  font-family: Roboto;\n}\n\n.seabirdTheme[_ngcontent-%COMP%]   .Contact-details[_ngcontent-%COMP%] {\n  color: var(--iconsAndButtonsColor);\n}\n.seabirdTheme[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%] {\n  --background-checked: var(--iconsAndButtonsColor);\n  --color: var(--iconsAndButtonsColor) !important;\n  --background: var(--iconsAndButtonsColor) !important;\n  --ion-color-base: var(--iconsAndButtonsColor) !important;\n}\n.seabirdTheme[_ngcontent-%COMP%]   .searbird-login-btn[_ngcontent-%COMP%] {\n  --background: var(--iconsAndButtonsColor);\n  margin: 10px 4px;\n  --border-radius: 20px;\n  height: 45px;\n}\n\n.cbusBgset[_ngcontent-%COMP%] {\n  background: #191966 !important;\n}\n\n.theme1BgSet[_ngcontent-%COMP%] {\n  background: var(--bottomBarColor) !important;\n}\n\n.cbus_header[_ngcontent-%COMP%] {\n  --background: #191966;\n  color: #fff;\n}\n\n.theme1_header[_ngcontent-%COMP%] {\n  --background: var(--bottomBarColor);\n  color: white;\n}\n\n.cbus_src[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: bold;\n  color: #191966 !important;\n}\n\n.theme1_src[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: bold;\n  color: var(--primaryText) !important;\n}\n\n.cbus_desti[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: bold;\n  color: #F2C21A !important;\n}\n\nion-content.theme1_header[_ngcontent-%COMP%] {\n  --background: #000;\n}\nion-content.theme1_header[_ngcontent-%COMP%]   .card-circular-corner[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background-color: var(--bottomBarColor);\n  position: absolute;\n  bottom: -12px;\n  left: -12px;\n}\nion-content.theme1_header[_ngcontent-%COMP%]   .card-circular-corner[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background-color: var(--bottomBarColor);\n  position: absolute;\n  right: -12px;\n  bottom: -12px;\n}\nion-content.theme1_header[_ngcontent-%COMP%]   .download-ticket[_ngcontent-%COMP%] {\n  --background: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  height: 90%;\n  margin: 0;\n}\nion-content.theme1_header[_ngcontent-%COMP%]   .share-button[_ngcontent-%COMP%] {\n  font-size: 56px;\n}\nion-content.theme1_header[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  font-size: 20px;\n  color: #fff;\n  line-height: 25px;\n  text-align: center;\n  background: #52c328;\n}\nion-content.theme1_header[_ngcontent-%COMP%]   .circle1[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  font-size: 20px;\n  color: #fff;\n  line-height: 25px;\n  text-align: center;\n  background: #ed3237;\n}\n\n.shyamoli-card-1[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  box-shadow: none;\n  border: 1px solid #DFDFDF;\n  padding: 12px 16px;\n  margin: 16px 0px;\n}\n\n.md[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  border-top: none;\n  padding: 0;\n}\n\n.shyamoli-contact-details[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n  text-align: left;\n  color: #333333;\n}\n\n.shyamoli-button[_ngcontent-%COMP%] {\n  --background: #ff9800;\n  height: 48px;\n  border-radius: 12px;\n  font-size: 17px;\n  font-weight: 600;\n  margin-top: 40px;\n}\n\n.shyamoli-head[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-left: -20px;\n  text-align: center;\n}\n\n.shyamoli-checkbox[_ngcontent-%COMP%]::part(container) {\n  border-radius: 0px;\n  border: 2px solid var(--iconsAndButtonsColor);\n}\n\n.shyamoli-checkbox[_ngcontent-%COMP%] {\n  margin: -11px 15px -12px 8px;\n  --color:var(--iconsAndButtonsColor);\n  --background-checked:var(--iconsAndButtonsColor);\n  --checkbox-background-checked:var(--iconsAndButtonsColor);\n}\n\n.shyamoli-payment-item[_ngcontent-%COMP%] {\n  background-color: #fff2e1;\n  border-radius: 5px;\n  font-weight: bold;\n  border: 1px solid #D9D9D9;\n  border-radius: 5px;\n  margin: 10px 0px;\n}\n.shyamoli-payment-item[_ngcontent-%COMP%]   .shyamoli-payment-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #626262;\n}\n\n.shyamoli-passenger-block[_ngcontent-%COMP%] {\n  margin: 12px 0px;\n  border-radius: 10px;\n  box-shadow: none;\n  border: 1px solid #DFDFDF;\n  padding: 10px 16px;\n  padding-bottom: 12px;\n  padding-top: 14px;\n}\n.shyamoli-passenger-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 15px;\n  margin-bottom: 10px;\n  color: #333;\n}\n.shyamoli-passenger-block[_ngcontent-%COMP%]   .header-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  color: #999;\n  margin-bottom: 5px;\n}\n.shyamoli-passenger-block[_ngcontent-%COMP%]   .passenger-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 3px;\n}\n.shyamoli-passenger-block[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #000;\n  font-size: 15px;\n}\n.shyamoli-passenger-block[_ngcontent-%COMP%]   .seat[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #000;\n}\n\n.shyamoli-review-booking-card[_ngcontent-%COMP%] {\n  margin: 3px;\n  position: relative;\n  box-shadow: none;\n  border: 1px solid #DFDFDF;\n  \n\n  overflow: inherit;\n  border-radius: 10px;\n  background: #ffffff !important;\n}\n.shyamoli-review-booking-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-align: center;\n}\n.shyamoli-review-booking-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin: 0;\n  text-align: center;\n}\n.shyamoli-review-booking-card[_ngcontent-%COMP%]   .show-details[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #191966;\n  font-size: 14px;\n}\n.shyamoli-review-booking-card[_ngcontent-%COMP%]   .show-details_2[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #000;\n  font-size: 14px;\n}\n.shyamoli-review-booking-card[_ngcontent-%COMP%]   .passanger-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  margin: 0;\n  text-align: left;\n  color: #333333;\n}\n.shyamoli-review-booking-card[_ngcontent-%COMP%]   .passanger-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #A0A0A0;\n  margin: 0;\n  font-size: 14px;\n  font-weight: 500;\n}\n.shyamoli-review-booking-card[_ngcontent-%COMP%]   .passanger-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #333333;\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n}\n.shyamoli-review-booking-card[_ngcontent-%COMP%]   .passanger-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  text-align: left;\n  font-weight: 400;\n  color: #333;\n}\n.shyamoli-review-booking-card[_ngcontent-%COMP%]   .review-booking-card-first-row_2[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background-color: var(--iconsAndButtonsColor);\n  color: #fff;\n}\n.shyamoli-review-booking-card[_ngcontent-%COMP%]   .review-booking-card-first-row_2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n  font-weight: 500;\n  color: #fff;\n}\n.shyamoli-review-booking-card[_ngcontent-%COMP%]   .review-booking-card-first-row_2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin: 0;\n  font-weight: 400;\n  color: #fff;\n}\n.shyamoli-review-booking-card[_ngcontent-%COMP%]   .review-booking-card-first-row_2[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin: 0;\n  font-weight: 600;\n  color: #fff;\n}\n.shyamoli-review-booking-card[_ngcontent-%COMP%]   .bustype[_ngcontent-%COMP%] {\n  background-color: #F3F3F7;\n  border-radius: 10px;\n  padding: 8px 8px;\n  margin: 15px 16px;\n}\n\n.shyamoli-city-short-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: bold;\n  color: var(--iconsAndButtonsColor);\n  font-size: 18px;\n}\n\n.shyamoli-service-time[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333 !important;\n  font-weight: 600;\n  font-size: 15px !important;\n  margin-top: 5px;\n}\n\n.drop_board_address[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.sb-phone-confirm__details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.sb-pay-footer__btn[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  min-height: 48px;\n  margin: 0;\n}"]
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

/***/ },

/***/ 9740
/*!*************************************************************************!*\
  !*** ./node_modules/ionic-capacitor-phonepe-pg/dist/esm/definitions.js ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ },

/***/ 17274
/*!*******************************************************************!*\
  !*** ./node_modules/ionic-capacitor-phonepe-pg/dist/esm/index.js ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhonePePaymentPlugin: () => (/* binding */ PhonePePaymentPlugin)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 9740);

const PhonePePaymentPlugin = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('PhonePePaymentSDK');


//# sourceMappingURL=index.js.map

/***/ }

}]);