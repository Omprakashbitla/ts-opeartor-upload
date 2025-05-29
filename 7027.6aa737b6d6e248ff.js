"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[7027],{

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

/***/ 25212:
/*!*************************************************!*\
  !*** ./src/app/my-bookings/my-bookings.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBookingsPage: () => (/* binding */ MyBookingsPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var modules_ion_bottom_drawer_drawer_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/ion-bottom-drawer/drawer-state */ 3641);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _map_map_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../map/map.page */ 71692);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/modules */ 85756);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 87330);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _services_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/firebase-analytics.service */ 47402);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 51670);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 89417);

var _MyBookingsPage;



















const _c0 = ["swiperRef"];
const _c1 = () => ({
  "padding-top": "50px"
});
const _c2 = () => ({});
function MyBookingsPage_ng_container_0_ion_header_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 6)(2, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "My Trips");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("src", ctx_r0.logo ? ctx_r0.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
  }
}
function MyBookingsPage_ng_container_0_ion_header_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-header", 8)(1, "ion-toolbar", 9)(2, "ion-title", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "My Trips");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-toolbar", 9)(5, "ion-segment", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function MyBookingsPage_ng_container_0_ion_header_2_Template_ion_segment_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r0.segment, $event) || (ctx_r0.segment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "ion-segment-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_0_ion_header_2_Template_ion_segment_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r0.changeSegment("future"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, " Upcoming ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-segment-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_0_ion_header_2_Template_ion_segment_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r0.changeSegment("previous"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9, " Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.segment);
  }
}
function MyBookingsPage_ng_container_0_ion_content_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-content", 14)(1, "div", 15)(2, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, " No bookings found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, " Please log in to access your bookings. If you not registered yet click on sign up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "ion-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_0_ion_content_3_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r0.gotoLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_0_ion_content_3_Template_p_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r0.gotoSignup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function MyBookingsPage_ng_container_0_ion_content_4_div_2_ion_card_1_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", "Cancelledk", " ");
  }
}
function MyBookingsPage_ng_container_0_ion_content_4_div_2_ion_card_1_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", "Will be travelling", " ");
  }
}
function MyBookingsPage_ng_container_0_ion_content_4_div_2_ion_card_1_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", "Trip Completed", " ");
  }
}
function MyBookingsPage_ng_container_0_ion_content_4_div_2_ion_card_1_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", "Is In Journey", " ");
  }
}
function MyBookingsPage_ng_container_0_ion_content_4_div_2_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-card", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_0_ion_content_4_div_2_ion_card_1_Template_div_click_1_listener() {
      const booking_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r0.detailsPage(booking_r5, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "ion-row", 29)(3, "ion-col", 30)(4, "ion-row", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "ion-row", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-row", 33)(9, "ion-text", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "ion-col", 35)(12, "ion-row", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "ion-row", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "ion-row", 38)(17, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "ion-row", 39)(20, "ion-col", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](21, "ion-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "ion-row", 42)(23, "ion-col", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](24, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](25, MyBookingsPage_ng_container_0_ion_content_4_div_2_ion_card_1_span_25_Template, 2, 1, "span", 45)(26, MyBookingsPage_ng_container_0_ion_content_4_div_2_ion_card_1_span_26_Template, 2, 1, "span", 45)(27, MyBookingsPage_ng_container_0_ion_content_4_div_2_ion_card_1_span_27_Template, 2, 1, "span", 46)(28, MyBookingsPage_ng_container_0_ion_content_4_div_2_ion_card_1_span_28_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "ion-col", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const booking_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", booking_r5.weekDay, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", booking_r5.travelDay, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", booking_r5.month, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", booking_r5.origin, " - ", booking_r5.destination, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" PNR ", booking_r5.pnrNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" Booked on ", booking_r5.createdOn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", booking_r5.transactionStatus == "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", booking_r5.transactionStatus == "Booked" && !booking_r5.is_in_journey && !booking_r5.iscompleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", booking_r5.transactionStatus == "Booked" && !booking_r5.is_in_journey && booking_r5.iscompleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", booking_r5.transactionStatus == "Booked" && booking_r5.is_in_journey && !booking_r5.iscompleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", booking_r5["is_e_phone_booking"] ? "Confirm Booking" : "See Details", " ");
  }
}
function MyBookingsPage_ng_container_0_ion_content_4_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 50)(1, "ion-grid")(2, "ion-row")(3, "ion-col", 51)(4, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "No Bookings Found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
  }
}
function MyBookingsPage_ng_container_0_ion_content_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, MyBookingsPage_ng_container_0_ion_content_4_div_2_ion_card_1_Template, 31, 12, "ion-card", 25)(2, MyBookingsPage_ng_container_0_ion_content_4_div_2_div_2_Template, 6, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r0.bookingsListToday);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.bookingsListToday.length == 0);
  }
}
function MyBookingsPage_ng_container_0_ion_content_4_div_3_ion_card_1_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", "Cancelled", " ");
  }
}
function MyBookingsPage_ng_container_0_ion_content_4_div_3_ion_card_1_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", "Trip Completed", " ");
  }
}
function MyBookingsPage_ng_container_0_ion_content_4_div_3_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-card", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_0_ion_content_4_div_3_ion_card_1_Template_div_click_1_listener() {
      const booking_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r0.detailsPage(booking_r7, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "ion-row", 29)(3, "ion-col", 30)(4, "ion-row", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "ion-row", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-row", 33)(9, "ion-text", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "ion-col", 35)(12, "ion-row", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "ion-row", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "ion-row", 38)(17, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "ion-row", 39)(20, "ion-col", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](21, "ion-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "ion-row", 42)(23, "ion-col", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](24, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](25, MyBookingsPage_ng_container_0_ion_content_4_div_3_ion_card_1_span_25_Template, 2, 1, "span", 54)(26, MyBookingsPage_ng_container_0_ion_content_4_div_3_ion_card_1_span_26_Template, 2, 1, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "ion-col", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const booking_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", booking_r7.weekDay, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", booking_r7.travelDay, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", booking_r7.month, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", booking_r7.origin, " - ", booking_r7.destination, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" PNR ", booking_r7.pnrNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" Booked on ", booking_r7.createdOn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", booking_r7.transactionStatus == "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", booking_r7.transactionStatus == "Booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", booking_r7["is_e_phone_booking"] && booking_r7.transactionStatus != "Cancelled" ? "Confirm Booking" : "See Details", " ");
  }
}
function MyBookingsPage_ng_container_0_ion_content_4_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 50)(1, "ion-grid")(2, "ion-row")(3, "ion-col", 51)(4, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "No Bookings Found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
  }
}
function MyBookingsPage_ng_container_0_ion_content_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, MyBookingsPage_ng_container_0_ion_content_4_div_3_ion_card_1_Template, 29, 10, "ion-card", 25)(2, MyBookingsPage_ng_container_0_ion_content_4_div_3_div_2_Template, 6, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r0.bookingsList);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.bookingsList.length == 0);
  }
}
function MyBookingsPage_ng_container_0_ion_content_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-content", 21)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, MyBookingsPage_ng_container_0_ion_content_4_div_2_Template, 3, 2, "div", 23)(3, MyBookingsPage_ng_container_0_ion_content_4_div_3_Template, 3, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitch", ctx_r0.segment);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", "future");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", "previous");
  }
}
function MyBookingsPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, MyBookingsPage_ng_container_0_ion_header_1_Template, 5, 1, "ion-header", 2)(2, MyBookingsPage_ng_container_0_ion_header_2_Template, 10, 1, "ion-header", 3)(3, MyBookingsPage_ng_container_0_ion_content_3_Template, 12, 0, "ion-content", 4)(4, MyBookingsPage_ng_container_0_ion_content_4_Template, 4, 3, "ion-content", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r0.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r0.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.isLogin);
  }
}
function MyBookingsPage_ng_container_1_ion_content_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-content", 66)(1, "div", 15)(2, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, " No Bookings Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, " Please log in to access your bookings. If you not registered yet click on sign up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "ion-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_1_ion_content_10_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r0.gotoLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_1_ion_content_10_Template_p_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r0.gotoSignup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function MyBookingsPage_ng_container_1_ion_content_11_div_15_ion_row_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_1_ion_content_11_div_15_ion_row_2_Template_ion_row_click_0_listener() {
      const booking_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r12).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r0.detailsPage(booking_r13, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-col", 83)(2, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "ion-icon", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-col", 86)(5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 87)(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, " to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "ion-col", 83)(16, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](17, "ion-icon", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const booking_r13 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](booking_r13.pnrNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](booking_r13.origin ? booking_r13.origin : " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](booking_r13.destination ? booking_r13.destination : " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate4"]("", ctx_r0.dateService.getDayNameFromDate(booking_r13.travelDate) + ", ", "", booking_r13.travelDay, " ", booking_r13.travelMonth, " ", booking_r13.travelYear, "");
  }
}
function MyBookingsPage_ng_container_1_ion_content_11_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 79)(1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, MyBookingsPage_ng_container_1_ion_content_11_div_15_ion_row_2_Template, 18, 7, "ion-row", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r0.bookingsListToday);
  }
}
function MyBookingsPage_ng_container_1_ion_content_11_ion_row_16_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "No Bookings Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_1_ion_content_11_ion_row_16_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_1_ion_content_11_ion_row_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row")(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, MyBookingsPage_ng_container_1_ion_content_11_ion_row_16_p_2_Template, 2, 0, "p", 90)(3, MyBookingsPage_ng_container_1_ion_content_11_ion_row_16_p_3_Template, 2, 0, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.errMsgTdy);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r0.errMsgTdy);
  }
}
function MyBookingsPage_ng_container_1_ion_content_11_div_18_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_1_ion_content_11_div_18_ion_row_1_Template_ion_row_click_0_listener() {
      const booking_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r14).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r0.detailsPage(booking_r15, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-col", 83)(2, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "ion-icon", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-col", 86)(5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 87)(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, " to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "ion-col", 83)(16, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](17, "ion-icon", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const booking_r15 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](booking_r15.pnrNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](booking_r15.origin ? booking_r15.origin : " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](booking_r15.destination ? booking_r15.destination : " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate4"]("", ctx_r0.dateService.getDayNameFromDate(booking_r15.travelDate) + ", ", "", booking_r15.travelDay, " ", booking_r15.travelMonth, " ", booking_r15.travelYear, "");
  }
}
function MyBookingsPage_ng_container_1_ion_content_11_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, MyBookingsPage_ng_container_1_ion_content_11_div_18_ion_row_1_Template, 18, 7, "ion-row", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r0.bookingsList);
  }
}
function MyBookingsPage_ng_container_1_ion_content_11_ion_row_19_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "No Bookings Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_1_ion_content_11_ion_row_19_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_1_ion_content_11_ion_row_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row")(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, MyBookingsPage_ng_container_1_ion_content_11_ion_row_19_p_2_Template, 2, 0, "p", 90)(3, MyBookingsPage_ng_container_1_ion_content_11_ion_row_19_p_3_Template, 2, 0, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.errMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r0.errMsg);
  }
}
function MyBookingsPage_ng_container_1_ion_content_11_div_21_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_1_ion_content_11_div_21_ion_row_1_Template_ion_row_click_0_listener() {
      const booking_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r0.detailsPage(booking_r17, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-col", 83)(2, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "ion-icon", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-col", 86)(5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 87)(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, " to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "ion-col", 83)(16, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](17, "ion-icon", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const booking_r17 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](booking_r17.pnrNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](booking_r17.origin ? booking_r17.origin : " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](booking_r17.destination ? booking_r17.destination : " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate4"]("", ctx_r0.dateService.getDayNameFromDate(booking_r17.travelDate) + ", ", "", booking_r17.travelDay, " ", booking_r17.travelMonth, " ", booking_r17.travelYear, "");
  }
}
function MyBookingsPage_ng_container_1_ion_content_11_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, MyBookingsPage_ng_container_1_ion_content_11_div_21_ion_row_1_Template, 18, 7, "ion-row", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r0.bookingsList);
  }
}
function MyBookingsPage_ng_container_1_ion_content_11_ion_row_22_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "No Bookings Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_1_ion_content_11_ion_row_22_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_1_ion_content_11_ion_row_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row")(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, MyBookingsPage_ng_container_1_ion_content_11_ion_row_22_p_2_Template, 2, 0, "p", 90)(3, MyBookingsPage_ng_container_1_ion_content_11_ion_row_22_p_3_Template, 2, 0, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.errMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r0.errMsg);
  }
}
function MyBookingsPage_ng_container_1_ion_content_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-content", 67)(1, "div", 68)(2, "ion-segment", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function MyBookingsPage_ng_container_1_ion_content_11_Template_ion_segment_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r0.segment, $event) || (ctx_r0.segment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "ion-segment-button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_1_ion_content_11_Template_ion_segment_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r10);
      const swiperRef_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r0.goToSlide(swiperRef_r11, 0, "future"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "Upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "ion-segment-button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_1_ion_content_11_Template_ion_segment_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r10);
      const swiperRef_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r0.goToSlide(swiperRef_r11, 0, "previous"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "ion-segment-button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_1_ion_content_11_Template_ion_segment_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r10);
      const swiperRef_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r0.goToSlide(swiperRef_r11, 0, "cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11, "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "swiper-container", 73, 0)(14, "swiper-slide", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](15, MyBookingsPage_ng_container_1_ion_content_11_div_15_Template, 3, 1, "div", 75)(16, MyBookingsPage_ng_container_1_ion_content_11_ion_row_16_Template, 4, 2, "ion-row", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "swiper-slide", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](18, MyBookingsPage_ng_container_1_ion_content_11_div_18_Template, 2, 1, "div", 77)(19, MyBookingsPage_ng_container_1_ion_content_11_ion_row_19_Template, 4, 2, "ion-row", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "swiper-slide", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](21, MyBookingsPage_ng_container_1_ion_content_11_div_21_Template, 2, 1, "div", 77)(22, MyBookingsPage_ng_container_1_ion_content_11_ion_row_22_Template, 4, 2, "ion-row", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.segment);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("init", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.bookingsListToday.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.bookingsListToday.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.bookingsList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.bookingsList.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.bookingsList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.bookingsList.length == 0);
  }
}
function MyBookingsPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-header", 58)(2, "ion-toolbar", 59)(3, "ion-row")(4, "ion-col", 60)(5, "ion-buttons")(6, "ion-back-button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_1_Template_ion_back_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r0.gotoBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "ion-col", 62)(8, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9, " My Trips ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, MyBookingsPage_ng_container_1_ion_content_10_Template, 12, 0, "ion-content", 64)(11, MyBookingsPage_ng_container_1_ion_content_11_Template, 23, 8, "ion-content", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngStyle", ctx_r0.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](3, _c1) : _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](4, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r0.isLogin && ctx_r0.isShowNoData);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.isLogin);
  }
}
function MyBookingsPage_ng_container_2_ion_content_8_div_12_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_2_ion_content_8_div_12_ion_row_1_Template_ion_row_click_0_listener() {
      const booking_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r20).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r0.detailsPage(booking_r21, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-col", 108)(2, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "ion-icon", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-col", 111)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "p", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12, "Booked ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const booking_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Pnr Number: ", booking_r21.pnrNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", booking_r21.origin ? booking_r21.origin : " ", "-", booking_r21.destination ? booking_r21.destination : " ", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Boarding: ", booking_r21.boardingPoint, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](15, 5, booking_r21.createdOn, "dd MMM y, hh:mm a"));
  }
}
function MyBookingsPage_ng_container_2_ion_content_8_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, MyBookingsPage_ng_container_2_ion_content_8_div_12_ion_row_1_Template, 16, 8, "ion-row", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r0.bookingsListToday);
  }
}
function MyBookingsPage_ng_container_2_ion_content_8_div_13_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "No bookings found");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_2_ion_content_8_div_13_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_2_ion_content_8_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 80)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, MyBookingsPage_ng_container_2_ion_content_8_div_13_p_2_Template, 2, 0, "p", 90)(3, MyBookingsPage_ng_container_2_ion_content_8_div_13_p_3_Template, 2, 0, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.errMsgTdy);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r0.errMsgTdy);
  }
}
function MyBookingsPage_ng_container_2_ion_content_8_div_15_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_2_ion_content_8_div_15_ion_row_1_Template_ion_row_click_0_listener() {
      const booking_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r22).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r0.detailsPage(booking_r23, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-col", 108)(2, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "ion-icon", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-col", 111)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "p", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12, "Booked ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const booking_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Pnr Number: ", booking_r23.pnrNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", booking_r23.origin ? booking_r23.origin : " ", "-", booking_r23.destination ? booking_r23.destination : " ", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Boarding: ", booking_r23.boardingPoint, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](15, 5, booking_r23.createdOn, "dd MMM y, hh:mm a"));
  }
}
function MyBookingsPage_ng_container_2_ion_content_8_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, MyBookingsPage_ng_container_2_ion_content_8_div_15_ion_row_1_Template, 16, 8, "ion-row", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r0.bookingsList);
  }
}
function MyBookingsPage_ng_container_2_ion_content_8_div_16_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "No bookings found");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_2_ion_content_8_div_16_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_2_ion_content_8_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 80)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, MyBookingsPage_ng_container_2_ion_content_8_div_16_p_2_Template, 2, 0, "p", 90)(3, MyBookingsPage_ng_container_2_ion_content_8_div_16_p_3_Template, 2, 0, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.errMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r0.errMsg);
  }
}
function MyBookingsPage_ng_container_2_ion_content_8_div_18_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_2_ion_content_8_div_18_ion_row_1_Template_ion_row_click_0_listener() {
      const booking_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r24).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r0.detailsPage(booking_r25, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-col", 108)(2, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "ion-icon", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-col", 111)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "p", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12, "Cancelled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "span", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const booking_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Pnr Number: ", booking_r25.pnrNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", booking_r25.origin ? booking_r25.origin : " ", "-", booking_r25.destination ? booking_r25.destination : " ", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Boarding: ", booking_r25.boardingPoint, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](15, 5, booking_r25.createdOn, "dd MMM y, hh:mm a"));
  }
}
function MyBookingsPage_ng_container_2_ion_content_8_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, MyBookingsPage_ng_container_2_ion_content_8_div_18_ion_row_1_Template, 16, 8, "ion-row", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r0.bookingsList);
  }
}
function MyBookingsPage_ng_container_2_ion_content_8_div_19_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "No bookings found");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_2_ion_content_8_div_19_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_2_ion_content_8_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 80)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, MyBookingsPage_ng_container_2_ion_content_8_div_19_p_2_Template, 2, 0, "p", 90)(3, MyBookingsPage_ng_container_2_ion_content_8_div_19_p_3_Template, 2, 0, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.errMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r0.errMsg);
  }
}
function MyBookingsPage_ng_container_2_ion_content_8_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "ion-button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_2_ion_content_8_div_20_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r26);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r0.trackYourBus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Track your Bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function MyBookingsPage_ng_container_2_ion_content_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-content", 97)(1, "div", 98)(2, "ion-segment", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function MyBookingsPage_ng_container_2_ion_content_8_Template_ion_segment_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r18);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r0.segment, $event) || (ctx_r0.segment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "ion-segment-button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_2_ion_content_8_Template_ion_segment_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r18);
      const swiperRef_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r0.goToSlide(swiperRef_r19, 0, "future"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, " Upcoming ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "ion-segment-button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_2_ion_content_8_Template_ion_segment_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r18);
      const swiperRef_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r0.goToSlide(swiperRef_r19, 0, "previous"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, " Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "ion-segment-button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_2_ion_content_8_Template_ion_segment_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r18);
      const swiperRef_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r0.goToSlide(swiperRef_r19, 0, "cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, " Cancelled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "swiper-container", 73, 0)(11, "swiper-slide", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](12, MyBookingsPage_ng_container_2_ion_content_8_div_12_Template, 2, 1, "div", 77)(13, MyBookingsPage_ng_container_2_ion_content_8_div_13_Template, 4, 2, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "swiper-slide", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](15, MyBookingsPage_ng_container_2_ion_content_8_div_15_Template, 2, 1, "div", 77)(16, MyBookingsPage_ng_container_2_ion_content_8_div_16_Template, 4, 2, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "swiper-slide", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](18, MyBookingsPage_ng_container_2_ion_content_8_div_18_Template, 2, 1, "div", 77)(19, MyBookingsPage_ng_container_2_ion_content_8_div_19_Template, 4, 2, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](20, MyBookingsPage_ng_container_2_ion_content_8_div_20_Template, 3, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.segment);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("init", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.bookingsListToday.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.bookingsListToday.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.bookingsList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.bookingsList.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.bookingsList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.bookingsList.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.metaData && ctx_r0.metaData.trackingoUrl);
  }
}
function MyBookingsPage_ng_container_2_ion_content_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-content")(1, "div", 15)(2, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, " No bookings found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, " Please log in to access your bookings. If you not registered yet click on sign up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "ion-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_2_ion_content_9_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r27);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r0.gotoLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_2_ion_content_9_Template_p_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r27);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r0.gotoSignup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function MyBookingsPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-header", 91)(2, "div", 92)(3, "div")(4, "ion-row", 93)(5, "ion-col", 94)(6, "p", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "My bookings");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, MyBookingsPage_ng_container_2_ion_content_8_Template, 21, 9, "ion-content", 96)(9, MyBookingsPage_ng_container_2_ion_content_9_Template, 12, 0, "ion-content", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r0.isLogin);
  }
}
function MyBookingsPage_ng_container_3_ion_toolbar_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-toolbar", 127)(1, "ion-title", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "My Bookings");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("src", ctx_r0.logo ? ctx_r0.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
  }
}
function MyBookingsPage_ng_container_3_ion_toolbar_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-toolbar", 129)(1, "ion-title", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "My Bookings");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("src", ctx_r0.logo ? ctx_r0.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
  }
}
function MyBookingsPage_ng_container_3_ion_content_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-content")(1, "div", 15)(2, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, " No bookings found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, " Please log in to access your bookings. If you not registered yet click on sign up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "ion-button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_3_ion_content_4_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r28);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r0.gotoLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_3_ion_content_4_Template_p_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r28);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r0.gotoSignup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function MyBookingsPage_ng_container_3_ion_content_5_div_14_ion_col_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 140)(1, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_3_ion_content_5_div_14_ion_col_1_Template_div_click_1_listener() {
      const booking_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r31).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r0.detailsPage(booking_r32, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "p", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "ion-icon", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "p", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const booking_r32 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", booking_r32.origin ? booking_r32.origin : " ", "-", booking_r32.destination ? booking_r32.destination : " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate4"]("", ctx_r0.dateService.getDayNameFromDate(booking_r32.travelDate) + ", ", "", booking_r32.travelDay, " ", booking_r32.travelMonth, " ", booking_r32.travelYear, "");
  }
}
function MyBookingsPage_ng_container_3_ion_content_5_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, MyBookingsPage_ng_container_3_ion_content_5_div_14_ion_col_1_Template, 7, 6, "ion-col", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r0.bookingsListToday);
  }
}
function MyBookingsPage_ng_container_3_ion_content_5_ion_row_15_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "No bookings found");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_3_ion_content_5_ion_row_15_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_3_ion_content_5_ion_row_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row")(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, MyBookingsPage_ng_container_3_ion_content_5_ion_row_15_p_2_Template, 2, 0, "p", 90)(3, MyBookingsPage_ng_container_3_ion_content_5_ion_row_15_p_3_Template, 2, 0, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.errMsgTdy);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r0.errMsgTdy);
  }
}
function MyBookingsPage_ng_container_3_ion_content_5_ion_col_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 140)(1, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_3_ion_content_5_ion_col_18_Template_div_click_1_listener() {
      const booking_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r33).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r0.detailsPage(booking_r34, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "p", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "ion-icon", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "p", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const booking_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", booking_r34.origin ? booking_r34.origin : " ", "-", booking_r34.destination ? booking_r34.destination : " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate3"]("", booking_r34.travelDay, " ", booking_r34.travelMonth, " ", booking_r34.travelYear, "");
  }
}
function MyBookingsPage_ng_container_3_ion_content_5_ion_row_19_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "No bookings found");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_3_ion_content_5_ion_row_19_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_3_ion_content_5_ion_row_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row")(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, MyBookingsPage_ng_container_3_ion_content_5_ion_row_19_p_2_Template, 2, 0, "p", 90)(3, MyBookingsPage_ng_container_3_ion_content_5_ion_row_19_p_3_Template, 2, 0, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.errMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r0.errMsg);
  }
}
function MyBookingsPage_ng_container_3_ion_content_5_ion_col_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 140)(1, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_3_ion_content_5_ion_col_22_Template_div_click_1_listener() {
      const booking_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r35).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r0.detailsPage(booking_r36, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "p", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "ion-icon", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "p", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const booking_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", booking_r36.origin ? booking_r36.origin : " ", "-", booking_r36.destination ? booking_r36.destination : " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate3"]("", booking_r36.travelDay, " ", booking_r36.travelMonth, " ", booking_r36.travelYear, "");
  }
}
function MyBookingsPage_ng_container_3_ion_content_5_ion_row_23_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "No bookings found");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_3_ion_content_5_ion_row_23_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_3_ion_content_5_ion_row_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row")(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, MyBookingsPage_ng_container_3_ion_content_5_ion_row_23_p_2_Template, 2, 0, "p", 90)(3, MyBookingsPage_ng_container_3_ion_content_5_ion_row_23_p_3_Template, 2, 0, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.errMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r0.errMsg);
  }
}
function MyBookingsPage_ng_container_3_ion_content_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-content", 131)(1, "ion-toolbar", 132)(2, "ion-segment", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function MyBookingsPage_ng_container_3_ion_content_5_Template_ion_segment_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r29);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r0.segment, $event) || (ctx_r0.segment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "ion-segment-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_3_ion_content_5_Template_ion_segment_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r29);
      const swiperRef_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r0.goToSlide(swiperRef_r30, 0, "future"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, " Upcoming ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "ion-segment-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_3_ion_content_5_Template_ion_segment_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r29);
      const swiperRef_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r0.goToSlide(swiperRef_r30, 0, "previous"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, " Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "ion-segment-button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_3_ion_content_5_Template_ion_segment_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r29);
      const swiperRef_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r0.goToSlide(swiperRef_r30, 0, "cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "div", 135, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "swiper-container", 73, 0)(13, "swiper-slide", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](14, MyBookingsPage_ng_container_3_ion_content_5_div_14_Template, 2, 1, "div", 75)(15, MyBookingsPage_ng_container_3_ion_content_5_ion_row_15_Template, 4, 2, "ion-row", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "swiper-slide", 137)(17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](18, MyBookingsPage_ng_container_3_ion_content_5_ion_col_18_Template, 7, 5, "ion-col", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](19, MyBookingsPage_ng_container_3_ion_content_5_ion_row_19_Template, 4, 2, "ion-row", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "swiper-slide", 139)(21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](22, MyBookingsPage_ng_container_3_ion_content_5_ion_col_22_Template, 7, 5, "ion-col", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](23, MyBookingsPage_ng_container_3_ion_content_5_ion_row_23_Template, 4, 2, "ion-row", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.segment);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", ctx_r0.segment != "map");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("init", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.bookingsListToday.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.bookingsListToday.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r0.bookingsList);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.bookingsList.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r0.bookingsList);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.bookingsList.length == 0);
  }
}
function MyBookingsPage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-header", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, MyBookingsPage_ng_container_3_ion_toolbar_2_Template, 4, 1, "ion-toolbar", 124)(3, MyBookingsPage_ng_container_3_ion_toolbar_3_Template, 4, 1, "ion-toolbar", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, MyBookingsPage_ng_container_3_ion_content_4_Template, 12, 0, "ion-content", 2)(5, MyBookingsPage_ng_container_3_ion_content_5_Template, 24, 9, "ion-content", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r0.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r0.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.isLogin);
  }
}
class MyBookingsPage {
  constructor(navCtrl, route, router, config,
  // @Inject(DOCUMENT) private doc: Document,
  platform, commonStorage, apiFactory, dateService, util, commonService, loader, modalController, appData, firebaseAnalyticsService, iab, datePipe) {
    this.navCtrl = navCtrl;
    this.route = route;
    this.router = router;
    this.config = config;
    this.platform = platform;
    this.commonStorage = commonStorage;
    this.apiFactory = apiFactory;
    this.dateService = dateService;
    this.util = util;
    this.commonService = commonService;
    this.loader = loader;
    this.modalController = modalController;
    this.appData = appData;
    this.firebaseAnalyticsService = firebaseAnalyticsService;
    this.iab = iab;
    this.datePipe = datePipe;
    this.isLogin = false;
    // myslider1: IonSlides;
    this.dayIndex = 0;
    this.errMsg = false;
    this.errMsgTdy = false;
    this.showToday = false;
    this.bookingsList = [];
    this.webBookings = [];
    this.bookingsListToday = [];
    this.bookingsListYesterday = [];
    this.shouldBounce = true;
    this.disableDrag = false;
    this.dockedHeight = 100;
    this.distanceTop = 100;
    this.drawerState = modules_ion_bottom_drawer_drawer_state__WEBPACK_IMPORTED_MODULE_1__.DrawerState.Docked;
    this.states = modules_ion_bottom_drawer_drawer_state__WEBPACK_IMPORTED_MODULE_1__.DrawerState;
    this.minimumHeight = 100;
    this.bookingResponce = [];
    this.isShowNoData = false;
    this.swiperModules = [swiper_modules__WEBPACK_IMPORTED_MODULE_4__.EffectCube];
    this.slideOpts = {
      initialSlide: 1,
      spaceBetween: 40,
      loop: true,
      centeredSlidesBounds: true,
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      grabCursor: true,
      centeredSlides: true,
      autoplay: true,
      zoom: {
        maxRatio: 5
      }
    };
    this.isIos = false;
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    this.appData.newTheme = this.util.getNewTheme();
    // console.log("constructor");
    // this.logo = this.commonStorage.getItem("metaData").headerLogo;
    this.metaData = this.commonStorage.getItem("metaData");
    this.logo = this.commonStorage.getItem("metaData").mobileNavigationLogo ? this.commonStorage.getItem("metaData").mobileNavigationLogo : this.commonStorage.getItem("metaData").headerLogo;
    localStorage.setItem('tabName', 'future');
  }
  ngOnInit() {
    this.firebaseAnalyticsService.logCustomEvent('my_bookings_page', {
      page: 'My Bookings'
    });
    this.ios = this.config.get('mode') === 'ios';
    this.route.queryParams.subscribe(params => {
      var _this$router$getCurre;
      if ((_this$router$getCurre = this.router.getCurrentNavigation()) !== null && _this$router$getCurre !== void 0 && _this$router$getCurre.extras.state) {
        var _this$router;
        this.isLogin = (_this$router = this.router) === null || _this$router === void 0 || (_this$router = _this$router.getCurrentNavigation()) === null || _this$router === void 0 || (_this$router = _this$router.extras) === null || _this$router === void 0 || (_this$router = _this$router.state) === null || _this$router === void 0 ? void 0 : _this$router['login'];
      }
    });
  }
  loginDetails() {
    if (localStorage.getItem('currentUser')) {
      this.isLogin = true;
      this.defaultCall();
    } else {
      this.isLogin = false;
    }
  }
  ionViewDidEnter() {
    if (this.metaData.msiteFolder == 'ourbustheme' && localStorage.getItem('tabName') != undefined) {
      this.segment = localStorage.getItem('tabName');
    } else {
      this.segment = 'future';
    }
    this.loginDetails();
    if (this.isLogin) {
      this.isShowNoData = false;
    } else {
      this.isShowNoData = true;
    }
  }
  segmentChanged(ev) {
    this.getBookingList(ev.detail.value);
  }
  onSlideChanged(slide) {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentIndex = yield slide.getActiveIndex();
      yield _this.getBookingList(currentIndex);
      switch (currentIndex) {
        case 0:
          _this.segment = "future";
          _this.segmentDisplayName = "Upcoming";
          _this.commonService.gTrack('futureBookings', 'Future bookings viewed');
          break;
        case 1:
          _this.segment = "previous";
          _this.segmentDisplayName = "Completed";
          _this.commonService.gTrack('previousBookings', 'Previous bookings viewed');
          break;
        case 2:
          _this.segment = "cancel";
          _this.segmentDisplayName = "Cancelled";
          _this.commonService.gTrack('cancelledBookings', 'Cancelled bookings viewed');
          break;
        default:
          _this.segment = "future";
          _this.segmentDisplayName = "Upcoming";
          break;
      }
      localStorage.setItem('segmentDisplayName', _this.segmentDisplayName);
    })();
  }
  gotoLogin() {
    // this.navCtrl.navigateForward('login');
    let navigationExtras = {
      state: {
        page: "MyBookingsPage",
        login: false
      }
    };
    this.router.navigate(['login'], navigationExtras);
  }
  gotoSignup() {
    this.navCtrl.navigateForward('sign-up');
  }
  gotoMap() {
    var _this2 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalController.create({
        component: _map_map_page__WEBPACK_IMPORTED_MODULE_3__.MapPage,
        componentProps: {
          destination: {
            "lat": parseFloat(_this2.bookingsListToday[0].latitude),
            "lng": parseFloat(_this2.bookingsListToday[0].longitude)
          },
          boardingPoint: _this2.bookingsListToday[0].boardingPoint
        }
      });
      return yield modal.present();
    })();
  }
  //   this.bookings = [];
  //   this.bookingsList = [];
  //   this.bookingsListToday = [];
  //   this.loader.showLoadingDefault();
  //   this.apiFactory.myBookings("limit=50&offset=0")
  //     .subscribe(
  //       result => {
  //         this.errMsg = false;
  //         this.errMsgTdy = false;
  //         this.loader.hideLoadingDefault();
  //         try {
  //           if (result.success) {
  //             this.bookingsMessage = result.body.message;
  //             for (let i = 0; i < result.body.transactions.length; i++) {
  //               let booking: any = {};
  //               booking.createdOn = this.dateService.getDate(result.body.transactions[i].created_at, 'dd/mm/yyyy') + ' ' + this.dateService.getTime(result.body.transactions[i].created_at);
  //               booking.pnrNumber = result.body.transactions[i].pnr_number;
  //               booking.landmark = result.body.transactions[i].landmark ? result.body.transactions[i].landmark : "At Junction, towards HAL";
  //               booking.seatNumbers = result.body.transactions[i].seat_numbers ? result.body.transactions[i].seat_numbers : "6E";
  //               booking.boardingPoint = result.body.transactions[i].boarding_point ? result.body.transactions[i].boarding_point : "Silkboard";
  //               booking.time = result.body.transactions[i].time ? result.body.transactions[i].time : "06:30 PM";
  //               // booking.time = "06:30 PM";
  //               booking.id = result.body.transactions[i].id;
  //               booking.serviceNumber = result.body.transactions[i].service_number;
  //               booking.transactionStatus = result.body.transactions[i].transaction_status;
  //               booking.travelDate = this.dateService.changeDateFormat(result.body.transactions[i].travel_date, 'yyyy-mm-dd', 'dd/mm/yyyy');
  //               let d = new Date(result.body.transactions[i].travel_date);
  //               booking.travelDateRaw = result.body.transactions[i].travel_date;
  //               booking.travelDay = d.getDate();
  //               booking.travelMonth = this.util.getMonthName(d.getMonth() + 1);
  //               booking.travelYear = d.getFullYear();
  //               booking.is_e_phone_booking = result.body.transactions[i].is_e_phone_booking;
  //               booking.wallet_booking = result.body.transactions[i].wallet_booking;
  //               // booking.origin = this.commonService.getCityById(result.body.transactions[i].origin_id)[0];
  //               booking.origin = result.body.transactions[i].origin_name;
  //               // booking.destination = this.commonService.getDestinationNameById(result.body.transactions[i].destination_id)[0];
  //               booking.destination = result.body.transactions[i].destination_name;
  //               booking.latitude = result.body.transactions[i].latitude;
  //               booking.longitude = result.body.transactions[i].longitude;
  //               booking.isFeedbackSubmitted = result.body.transactions[i].is_feedback_submitted?result.body.transactions[i].is_feedback_submitted:false;
  //               this.bookings.push(booking);
  //               this.getBookingList('future');
  //               this.getTodaysBookingList();
  //               this.getYesterdaysBookingList();
  //               if (this.bookingsListToday.length == 0) {
  //                 this.errMsgTdy = true
  //               }
  //             }
  //             if (result.body.web_bookings) {
  //               for (let i = 0; i < result.body.web_bookings.length; i++) {
  //                 let booking: any = {};
  //                 booking.createdOn = this.dateService.getDate(result.body.web_bookings[i].created_at, 'dd/mm/yyyy') + ' ' + this.dateService.getTime(result.body.web_bookings[i].created_at);
  //                 booking.pnrNumber = result.body.web_bookings[i].pnr_number;
  //                 booking.landmark = result.body.web_bookings[i].landmark ? result.body.web_bookings[i].landmark : "At Junction, towards HAL";
  //                 booking.seatNumbers = result.body.web_bookings[i].seat_numbers ? result.body.web_bookings[i].seat_numbers : "6E";
  //                 booking.boardingPoint = result.body.web_bookings[i].boarding_point ? result.body.web_bookings[i].boarding_point : "Silkboard";
  //                 booking.time = result.body.web_bookings[i].time ? result.body.web_bookings[i].time : "06:30 PM";
  //                 // booking.time = "06:30 PM";
  //                 booking.serviceNumber = result.body.web_bookings[i].service_number;
  //                 booking.web_bookingstatus = result.body.web_bookings[i].transaction_status;
  //                 booking.travelDate = this.dateService.changeDateFormat(result.body.web_bookings[i].travel_date, 'yyyy-mm-dd', 'dd/mm/yyyy');
  //                 let d = new Date(result.body.web_bookings[i].travel_date);
  //                 booking.travelDateRaw = result.body.web_bookings[i].travel_date;
  //                 booking.travelDay = d.getDate();
  //                 booking.travelMonth = this.util.getMonthName(d.getMonth() + 1);
  //                 booking.travelYear = d.getFullYear();
  //                 booking.origin = this.commonService.getCityById(result.body.web_bookings[i].origin_id)[0];
  //                 booking.destination = this.commonService.getDestinationNameById(result.body.web_bookings[i].destination_id)[0];
  //                 booking.isFeedbackSubmitted = result.body.transactions[i].is_feedback_submitted?result.body.transactions[i].is_feedback_submitted:false;
  //                 // this.webBookings.push(booking);
  //               }
  //             }
  //             // this.origins = this.commonStorage.getItem('origins');
  //             // this.destinations = this.commonStorage.getItem('destinations');
  //           } else {
  //             this.errMsg = true;
  //             this.errMsgTdy = true;
  //             if (result.code == 200) {
  //               this.bookingsMessage = result.body.message;
  //             }
  //           }
  //         } catch (e) {
  //           this.errMsg = true;
  //           this.errMsgTdy = true;
  //         }
  //       },
  //       error => {
  //         this.loader.hideLoadingDefault();
  //         this.errMsg = true;
  //         this.errMsgTdy = true;
  //       }
  //     )
  // }
  // added in theme1
  defaultCall() {
    this.bookings = [];
    this.bookingsList = [];
    this.bookingsListToday = [];
    this.loader.showLoadingDefault();
    this.apiFactory.myBookings("limit=50&offset=0").subscribe(result => {
      this.errMsg = false;
      this.errMsgTdy = false;
      this.loader.hideLoadingDefault();
      try {
        if (result.success) {
          this.bookingsMessage = result.body.message;
          // console.log(result.body.transactions)
          for (let i = 0; i < result.body.transactions.length; i++) {
            let booking = {};
            // booking.createdOn = this.dateService.getDate(result.body.transactions[i].created_at, 'dd/mm/yyyy')
            //  + ' ' + this.dateService.getTime(result.body.transactions[i].created_at);
            booking.createdOn = moment__WEBPACK_IMPORTED_MODULE_2___default()(result.body.transactions[i].created_at, "DD/MM/YYYY HH:mm A").format("DD MMM YYYY, hh:mm A");
            booking.pnrNumber = result.body.transactions[i].pnr_number;
            booking.landmark = result.body.transactions[i].landmark ? result.body.transactions[i].landmark : "N/A";
            booking.seatNumbers = result.body.transactions[i].seat_numbers ? result.body.transactions[i].seat_numbers : "N/A";
            booking.boardingPoint = result.body.transactions[i].boarding_point ? result.body.transactions[i].boarding_point : "N/A";
            booking.time = result.body.transactions[i].time ? result.body.transactions[i].time : "N/A";
            booking.weekDay = moment__WEBPACK_IMPORTED_MODULE_2___default()(result.body.transactions[i].travel_date, "YYYY-MM-DD").format("ddd").toUpperCase(); /** @note for new theme-1 */
            booking.month = moment__WEBPACK_IMPORTED_MODULE_2___default()(result.body.transactions[i].travel_date, "YYYY-MM-DD").format("MMM").toUpperCase();
            booking.pnrNumber = result.body.transactions[i].pnr_number;
            booking.landmark = result.body.transactions[i].landmark ? result.body.transactions[i].landmark : "At Junction, towards HAL";
            booking.seatNumbers = result.body.transactions[i].seat_numbers ? result.body.transactions[i].seat_numbers : "6E";
            booking.boardingPoint = result.body.transactions[i].boarding_point ? result.body.transactions[i].boarding_point : "Silkboard";
            booking.time = result.body.transactions[i].time ? result.body.transactions[i].time : "06:30 PM";
            // booking.time = "06:30 PM";
            booking.id = result.body.transactions[i].id;
            booking.serviceNumber = result.body.transactions[i].service_number;
            booking.is_in_journey = result.body.transactions[i].is_in_journey;
            booking.transactionStatus = result.body.transactions[i].transaction_status;
            booking.travelDate = this.dateService.changeDateFormat(result.body.transactions[i].travel_date, 'yyyy-mm-dd', 'dd/mm/yyyy');
            let d = new Date(result.body.transactions[i].travel_date);
            booking.travelDateRaw = result.body.transactions[i].travel_date;
            booking.travelDay = d.getDate();
            booking.travelMonth = this.util.getMonthName(d.getMonth() + 1);
            booking.travelYear = d.getFullYear();
            booking.is_e_phone_booking = result.body.transactions[i].is_e_phone_booking;
            booking.wallet_booking = result.body.transactions[i].wallet_booking;
            // booking.origin = this.commonService.getCityById(result.body.transactions[i].origin_id)[0];
            booking.origin = result.body.transactions[i].origin_name;
            // booking.destination = this.commonService.getDestinationNameById(result.body.transactions[i].destination_id)[0];
            booking.destination = result.body.transactions[i].destination_name;
            booking.latitude = result.body.transactions[i].latitude;
            booking.longitude = result.body.transactions[i].longitude;
            booking.isFeedbackSubmitted = result.body.transactions[i].is_feedback_submitted ? result.body.transactions[i].is_feedback_submitted : false;
            booking.created_at = result.body.transactions[i].created_at;
            this.bookings.push(booking);
            if (this.metaData.msiteFolder == 'ourbustheme') {
              if (localStorage.getItem('tabName') != undefined) {
                if (localStorage.getItem('tabName') == 'previous') {
                  this.getBookingList(1);
                } else if (localStorage.getItem('tabName') == 'cancel') {
                  this.getBookingList(2);
                } else {
                  this.getBookingList(0);
                }
              }
            } else {
              this.getBookingList(0);
            }
            this.getTodaysBookingList();
            this.getYesterdaysBookingList();
            if (this.bookingsListToday.length == 0) {
              this.errMsgTdy = true;
            }
            if (this.bookingsList.length == 0) {
              this.errMsg = true;
            }
          }
          if (result.body.web_bookings) {
            for (let i = 0; i < result.body.web_bookings.length; i++) {
              let booking = {};
              booking.createdOn = this.dateService.getDate(result.body.web_bookings[i].created_at, 'dd/mm/yyyy') + ' ' + this.dateService.getTime(result.body.web_bookings[i].created_at);
              booking.pnrNumber = result.body.web_bookings[i].pnr_number;
              booking.landmark = result.body.web_bookings[i].landmark ? result.body.web_bookings[i].landmark : "At Junction, towards HAL";
              booking.seatNumbers = result.body.web_bookings[i].seat_numbers ? result.body.web_bookings[i].seat_numbers : "6E";
              booking.boardingPoint = result.body.web_bookings[i].boarding_point ? result.body.web_bookings[i].boarding_point : "Silkboard";
              booking.time = result.body.web_bookings[i].time ? result.body.web_bookings[i].time : "06:30 PM";
              // booking.time = "06:30 PM";
              booking.createdOn = moment__WEBPACK_IMPORTED_MODULE_2___default()(result.body.transactions[i].created_at, "DD/MM/YYYY HH:mm A").format("DD MMM YYYY, hh:mm A");
              booking.pnrNumber = result.body.transactions[i].pnr_number;
              booking.landmark = result.body.transactions[i].landmark ? result.body.transactions[i].landmark : "N/A";
              booking.seatNumbers = result.body.transactions[i].seat_numbers ? result.body.transactions[i].seat_numbers : "N/A";
              booking.boardingPoint = result.body.transactions[i].boarding_point ? result.body.transactions[i].boarding_point : "N/A";
              booking.time = result.body.transactions[i].time ? result.body.transactions[i].time : "N/A";
              booking.weekDay = moment__WEBPACK_IMPORTED_MODULE_2___default()(result.body.transactions[i].travel_date, "YYYY-MM-DD").format("ddd").toUpperCase(); /** @note for new theme-1 */
              booking.month = moment__WEBPACK_IMPORTED_MODULE_2___default()(result.body.transactions[i].travel_date, "YYYY-MM-DD").format("MMM").toUpperCase();
              booking.serviceNumber = result.body.web_bookings[i].service_number;
              booking.web_bookingstatus = result.body.web_bookings[i].transaction_status;
              booking.travelDate = this.dateService.changeDateFormat(result.body.web_bookings[i].travel_date, 'yyyy-mm-dd', 'dd/mm/yyyy');
              let d = new Date(result.body.web_bookings[i].travel_date);
              booking.travelDateRaw = result.body.web_bookings[i].travel_date;
              booking.travelDay = d.getDate();
              booking.travelMonth = this.util.getMonthName(d.getMonth() + 1);
              booking.travelYear = d.getFullYear();
              booking.origin = this.commonService.getCityById(result.body.web_bookings[i].origin_id)[0];
              booking.destination = this.commonService.getDestinationNameById(result.body.web_bookings[i].destination_id)[0];
              booking.isFeedbackSubmitted = result.body.transactions[i].is_feedback_submitted ? result.body.transactions[i].is_feedback_submitted : false;
              // booking.created_at = result.body.transactions[i].createdOn ? result.body.transactions[i].createdOn: result.body.web_bookings[i].createdOn;
              // this.webBookings.push(booking);
            }
          }
          // this.origins = this.commonStorage.getItem('origins');
          // this.destinations = this.commonStorage.getItem('destinations');
        } else {
          this.errMsg = true;
          this.errMsgTdy = true;
          if (result.code == 200) {
            this.bookingsMessage = result.body.message;
          }
        }
      } catch (e) {
        this.errMsg = true;
        this.errMsgTdy = true;
      }
    },
    //   this.errMsg = false;
    //   this.errMsgTdy = false;
    //   this.loader.hideLoadingDefault();
    //   try {
    //     if (result.success) {
    //       this.bookingsMessage = result.body.message;
    //       this.bookingResponce = [];
    //       for (let i = 0; i < result.body.transactions.length; i++) {
    //         let booking: any = {};
    //         // booking.createdOn = this.dateService.getDate(result.body.transactions[i].created_at, 'dd/mm/yyyy') + ' ' + this.dateService.getTime(result.body.transactions[i].created_at);
    //         booking.createdOn = moment(
    //           result.body.transactions[i].created_at,
    //           "DD/MM/YYYY HH:mm A"
    //         ).format("DD MMM YYYY, hh:mm A");
    //         booking.pnrNumber = result.body.transactions[i].pnr_number;
    //         booking.landmark = result.body.transactions[i].landmark
    //           ? result.body.transactions[i].landmark
    //           : "At Junction, towards HAL";
    //         booking.seatNumbers = result.body.transactions[i].seat_numbers
    //           ? result.body.transactions[i].seat_numbers
    //           : "6E";
    //         booking.boardingPoint = result.body.transactions[i].boarding_point
    //           ? result.body.transactions[i].boarding_point
    //           : "Silkboard";
    //         booking.time = result.body.transactions[i].time
    //           ? result.body.transactions[i].time
    //           : "06:30 PM";
    //         // booking.time = "06:30 PM";
    //         booking.id = result.body.transactions[i].id;
    //         booking.serviceNumber =
    //           result.body.transactions[i].service_number;
    //         booking.transactionStatus =
    //           result.body.transactions[i].transaction_status;
    //         // booking.travelDate = this.dateService.changeDateFormat(result.body.transactions[i].travel_date, 'yyyy-mm-dd', 'dd/mm/yyyy');
    //         booking.travelDate = result.body.transactions[i].travel_date;
    //         let d = new Date(result.body.transactions[i].travel_date);
    //         booking.travelDateRaw = result.body.transactions[i].travel_date;
    //         booking.travelDay = d.getDate();
    //         booking.travelMonth = this.util.getMonthName(d.getMonth() + 1);
    //         booking.travelYear = d.getFullYear();
    //         booking.is_e_phone_booking =
    //           result.body.transactions[i].is_e_phone_booking;
    //         booking.wallet_booking =
    //           result.body.transactions[i].wallet_booking;
    //         // booking.origin = this.commonService.getCityById(result.body.transactions[i].origin_id)[0];
    //         booking.origin = result.body.transactions[i].origin_name;
    //         // booking.destination = this.commonService.getDestinationNameById(result.body.transactions[i].destination_id)[0];
    //         booking.destination =
    //           result.body.transactions[i].destination_name;
    //         booking.latitude = result.body.transactions[i].latitude;
    //         booking.longitude = result.body.transactions[i].longitude;
    //         booking.isFeedbackSubmitted = result.body.transactions[i]
    //           .is_feedback_submitted
    //           ? result.body.transactions[i].is_feedback_submitted
    //           : false;
    //         booking.weekDay = moment(
    //           result.body.transactions[i].travel_date,
    //           "YYYY-MM-DD"
    //         )
    //           .format("ddd")
    //           .toUpperCase(); /** @note for new theme-1 */
    //         booking.month = moment(
    //           result.body.transactions[i].travel_date,
    //           "YYYY-MM-DD"
    //         )
    //           .format("MMM")
    //           .toUpperCase(); /** @note for new theme-1 */
    //           this.bookingResponce.push(booking);
    //         // this.getBookingList("future");
    //         // this.getTodaysBookingList();
    //         // this.getYesterdaysBookingList();
    //         // if (this.bookingsListToday.length == 0) {
    //         //   this.errMsgTdy = true;
    //         // }
    //       }
    //       // this.bookingResponce =[];
    //       // this.bookingResponce = this.bookings;
    //       console.log(this.bookingResponce)
    //       for (let i = 0; i < result.body.transactions.length; i++) {
    //         let booking: any = {};
    //         // booking.createdOn = this.dateService.getDate(result.body.transactions[i].created_at, 'dd/mm/yyyy') + ' ' + this.dateService.getTime(result.body.transactions[i].created_at);
    //         booking.createdOn = moment(
    //           result.body.transactions[i].created_at,
    //           "DD/MM/YYYY HH:mm A"
    //         ).format("DD MMM YYYY, hh:mm A");
    //         booking.pnrNumber = result.body.transactions[i].pnr_number;
    //         booking.landmark = result.body.transactions[i].landmark
    //           ? result.body.transactions[i].landmark
    //           : "At Junction, towards HAL";
    //         booking.seatNumbers = result.body.transactions[i].seat_numbers
    //           ? result.body.transactions[i].seat_numbers
    //           : "6E";
    //         booking.boardingPoint = result.body.transactions[i].boarding_point
    //           ? result.body.transactions[i].boarding_point
    //           : "Silkboard";
    //         booking.time = result.body.transactions[i].time
    //           ? result.body.transactions[i].time
    //           : "06:30 PM";
    //         // booking.time = "06:30 PM";
    //         booking.id = result.body.transactions[i].id;
    //         booking.serviceNumber =
    //           result.body.transactions[i].service_number;
    //         booking.transactionStatus =
    //           result.body.transactions[i].transaction_status;
    //         // booking.travelDate = this.dateService.changeDateFormat(result.body.transactions[i].travel_date, 'yyyy-mm-dd', 'dd/mm/yyyy');
    //         booking.travelDate = result.body.transactions[i].travel_date;
    //         let d = new Date(result.body.transactions[i].travel_date);
    //         booking.travelDateRaw = result.body.transactions[i].travel_date;
    //         booking.travelDay = d.getDate();
    //         booking.travelMonth = this.util.getMonthName(d.getMonth() + 1);
    //         booking.travelYear = d.getFullYear();
    //         booking.is_e_phone_booking =
    //           result.body.transactions[i].is_e_phone_booking;
    //         booking.wallet_booking =
    //           result.body.transactions[i].wallet_booking;
    //         // booking.origin = this.commonService.getCityById(result.body.transactions[i].origin_id)[0];
    //         booking.origin = result.body.transactions[i].origin_name;
    //         // booking.destination = this.commonService.getDestinationNameById(result.body.transactions[i].destination_id)[0];
    //         booking.destination =
    //           result.body.transactions[i].destination_name;
    //         booking.latitude = result.body.transactions[i].latitude;
    //         booking.longitude = result.body.transactions[i].longitude;
    //         booking.isFeedbackSubmitted = result.body.transactions[i]
    //           .is_feedback_submitted
    //           ? result.body.transactions[i].is_feedback_submitted
    //           : false;
    //         booking.weekDay = moment(
    //           result.body.transactions[i].travel_date,
    //           "YYYY-MM-DD"
    //         )
    //           .format("ddd")
    //           .toUpperCase(); /** @note for new theme-1 */
    //         booking.month = moment(
    //           result.body.transactions[i].travel_date,
    //           "YYYY-MM-DD"
    //         )
    //           .format("MMM")
    //           .toUpperCase(); /** @note for new theme-1 */
    //         this.bookings.push(booking);
    //         this.getBookingList("future");
    //         this.getTodaysBookingList();
    //         this.getYesterdaysBookingList();
    //         if (this.bookingsListToday.length == 0) {
    //           this.errMsgTdy = true;
    //         }
    //       }
    //       if (result.body.web_bookings) {
    //         for (let i = 0; i < result.body.web_bookings.length; i++) {
    //           let booking: any = {};
    //           // booking.createdOn = this.dateService.getDate(result.body.web_bookings[i].created_at, 'dd/mm/yyyy') + ' ' + this.dateService.getTime(result.body.web_bookings[i].created_at);
    //           booking.createdOn = moment(
    //             result.body.web_bookings[i].created_at,
    //             "DD/MM/YYYY HH:mm A"
    //           ).format("DD MMM YYYY, hh:mm A");
    //           booking.pnrNumber = result.body.web_bookings[i].pnr_number;
    //           booking.landmark = result.body.web_bookings[i].landmark
    //             ? result.body.web_bookings[i].landmark
    //             : "At Junction, towards HAL";
    //           booking.seatNumbers = result.body.web_bookings[i].seat_numbers
    //             ? result.body.web_bookings[i].seat_numbers
    //             : "6E";
    //           booking.boardingPoint = result.body.web_bookings[i]
    //             .boarding_point
    //             ? result.body.web_bookings[i].boarding_point
    //             : "Silkboard";
    //           booking.time = result.body.web_bookings[i].time
    //             ? result.body.web_bookings[i].time
    //             : "06:30 PM";
    //           // booking.time = "06:30 PM";
    //           booking.serviceNumber =
    //             result.body.web_bookings[i].service_number;
    //           booking.web_bookingstatus =
    //             result.body.web_bookings[i].transaction_status;
    //           // booking.travelDate = this.dateService.changeDateFormat(result.body.web_bookings[i].travel_date, 'yyyy-mm-dd', 'dd/mm/yyyy');
    //           booking.travelDate = result.body.web_bookings[i].travel_date;
    //           let d = new Date(result.body.web_bookings[i].travel_date);
    //           booking.travelDateRaw = result.body.web_bookings[i].travel_date;
    //           booking.travelDay = d.getDate();
    //           booking.travelMonth = this.util.getMonthName(d.getMonth() + 1);
    //           booking.travelYear = d.getFullYear();
    //           booking.origin = this.commonService.getCityById(
    //             result.body.web_bookings[i].origin_id
    //           )[0];
    //           booking.destination = this.commonService.getDestinationNameById(
    //             result.body.web_bookings[i].destination_id
    //           )[0];
    //           booking.isFeedbackSubmitted = result.body.transactions[i]
    //             .is_feedback_submitted
    //             ? result.body.transactions[i].is_feedback_submitted
    //             : false;
    //           booking.weekDay = moment(
    //             result.body.web_bookings[i].travel_date,
    //             "YYYY-MM-DD"
    //           )
    //             .format("ddd")
    //             .toUpperCase(); /** @note for new theme-1 */
    //           booking.month = moment(
    //             result.body.web_bookings[i].travel_date,
    //             "YYYY-MM-DD"
    //           )
    //             .format("MMM")
    //             .toUpperCase(); /** @note for new theme-1 */
    //           // this.webBookings.push(booking);
    //         }
    //       }
    //       // this.origins = this.commonStorage.getItem('origins');
    //       // this.destinations = this.commonStorage.getItem('destinations');
    //     } else {
    //       this.errMsg = true;
    //       this.errMsgTdy = true;
    //       if (result.code == 200) {
    //         this.bookingsMessage = result.body.message;
    //       }
    //     }
    //   } catch (e) {
    //     this.errMsg = true;
    //     this.errMsgTdy = true;
    //   }
    //   console.log(this.isTravelDateValid('2023-10-10'))
    // },
    error => {
      this.loader.hideLoadingDefault();
      this.errMsg = true;
      this.errMsgTdy = true;
    });
  }
  isCancelledOrPartiallyCancelled(transactionStatus) {
    const status = transactionStatus.toLowerCase();
    return status.indexOf("cancel") > -1 && status !== "partially cancelled";
  }
  getTodaysBookingList() {
    this.bookingsListToday = this.bookings.filter(it => {
      // return this.isToday(it.travelDateRaw) && !this.isSame(it.transactionStatus, 'cancel');
      return !this.isPastDate(it.travelDate) && !this.isCancelledOrPartiallyCancelled(it.transactionStatus);
    });
    for (let i = 0; i < this.bookingsListToday.length; ++i) {
      // const currentTime = new Date().toLocaleString('en-US', { hour: 'numeric', hour12: true });
      const currentDate = new Date().toLocaleDateString('en-US');
      const keyToAdd = "iscompleted";
      if (this.bookingsListToday[i].travelDate === currentDate) {
        // if (currentTime.includes("AM") && parseInt(currentTime) < 10)
        const currentDateTime = new Date();
        const currentHour = currentDateTime.getHours();
        const currentMinute = currentDateTime.getMinutes();
        const currentTime = `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`;
        if (this.convertTo24Hour(this.bookingsListToday[i].time) > currentTime) {
          // console.log("trip not completed");
          this.bookingsListToday[i][keyToAdd] = true;
        } else {
          this.bookingsListToday[i][keyToAdd] = false;
        }
      } else {
        this.bookingsListToday[i][keyToAdd] = false;
      }
    }
    // console.log("this.bookingsListToday>>", this.bookingsListToday);
  }
  convertTo24Hour(timeStr) {
    const [time, period] = timeStr.split(' ');
    const [hours, minutes] = time.split(':');
    let hour = parseInt(hours);
    if (period === "PM" && hour !== 12) {
      hour += 12;
    } else if (period === "AM" && hour === 12) {
      hour = 0;
    }
    return `${hour.toString().padStart(2, '0')}:${minutes}`;
  }
  // end theme 1
  isToday(date) {
    let today = new Date();
    let tDate = new Date(date);
    if (tDate.getDate() == today.getDate() && tDate.getMonth() == today.getMonth() && tDate.getFullYear() == today.getFullYear()) {
      this.showToday = true;
      return true;
    }
    return false;
  }
  getYesterdaysBookingList() {
    this.bookingsListYesterday = this.bookings.filter(it => {
      return this.isYesterday(it.travelDateRaw) && !this.isSame(it.transactionStatus, 'cancel');
    });
    // console.log("this.bookingsListYesterday>>", this.bookingsListYesterday);
  }
  isYesterday(date) {
    let today = new Date();
    let tDate = new Date(date);
    if (tDate.getDate() == today.getDate() - 1 && tDate.getMonth() == today.getMonth() && tDate.getFullYear() == today.getFullYear()) {
      this.showToday = true;
      return true;
    }
    return false;
  }
  isSame(str1, str2) {
    if (str1.toLowerCase().indexOf(str2) > -1) {
      return true;
    }
    return false;
  }
  isPastDate(travelDate) {
    return this.dateService.isPastDate(travelDate);
  }
  getBookingList(type) {
    this.bookingsList = [];
    this.bookingsListToday = [];
    if (type == 0) {
      this.getTodaysBookingList();
    } else if (type == 1) {
      this.bookingsList = this.bookings.filter(it => {
        return this.isPastDate(it.travelDate) && !this.isToday(it.travelDateRaw);
      });
      console.log("this.bookingsList", this.bookingsList);
    } else if (type == 2) {
      this.bookingsList = this.bookings.filter(it => {
        return this.isCancelledOrPartiallyCancelled(it.transactionStatus);
      });
    }
  }
  goToSlide(swiperContainer, slideIndex, tabName) {
    var _this3 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("swiperContainer:", swiperContainer, "slideIndex:", slideIndex);
      if (swiperContainer && swiperContainer.swiper) {
        const swiper = swiperContainer.swiper;
        yield swiper.slideTo(slideIndex); // Move to the selected slide
      }
      if (!swiperContainer || !swiperContainer.swiper) return;
      const swiper = swiperContainer.swiper;
      if (tabName === 'future') {
        yield swiper.slideTo(0);
        _this3.commonService.gTrack('futureBookings', 'Future bookings viewed');
      } else if (tabName === 'previous') {
        _this3.commonService.gTrack('previousBookings', 'Previous bookings viewed');
        yield swiper.slideTo(1);
        _this3.errMsg = true;
      } else if (tabName === 'cancel') {
        _this3.commonService.gTrack('cancelledBookings', 'Cancelled bookings viewed');
        yield swiper.slideTo(2);
        _this3.errMsg = true;
      }
      const segmentDisplayNames = {
        future: 'Upcoming',
        previous: 'Completed',
        cancel: 'Cancelled'
      };
      localStorage.setItem('segmentDisplayName', segmentDisplayNames[tabName] || '');
      localStorage.setItem('tabName', tabName);
    })();
  }
  detailsPage(bokingdetails, previous = false) {
    localStorage.setItem('bookingDetails', JSON.stringify(bokingdetails));
    if (this.metaData.msiteFolder == 'ourbustheme') {
      let navigationExtras = {
        queryParams: {
          hideLocateTrackBus: true,
          rateService: previous,
          redirectToHome: false,
          new_booking: "false"
        }
      };
      this.router.navigate(['booking-details'], navigationExtras);
    } else {
      let navigationExtras = {
        queryParams: {
          hideLocateTrackBus: true,
          rateService: previous,
          redirectToHome: false,
          new_booking: true
        }
      };
      this.router.navigate(['booking-details'], navigationExtras);
    }
    // this.navCtrl.navigateForward('booking-details');
  }
  /**
  * @note for theme-1
  * Filtering futures trip-list and Completed-list.
  */
  changeSegment(filterType) {
    if (filterType === "previous") {
      /** @note for completed trip-list */
      this.getBookingList(1);
    } else {
      /** @note for future trip-list */
      this.getTodaysBookingList();
    }
  }
  isTravelDateValid(date) {
    // 2023-12-31
    const traveldate = new Date(date);
    const today = new Date();
    return traveldate > today;
  }
  trackYourBus() {
    const options = {
      toolbar: 'yes',
      // Show the toolbar
      toolbarcolor: '#FF0000',
      // Customize toolbar color (optional)
      closebuttoncolor: '#00adb5',
      // Customize close button color (optional)
      hideurlbar: 'yes',
      // Hide the URL bar (optional)
      location: 'yes',
      // Show the URL in the location bar
      closebuttoncaption: '←',
      // Hide default close button text
      toolbarposition: 'top'
    };
    var url = this.metaData.trackingoUrl;
    const browser = this.iab.create(url, '_blank', options);
    browser.on('loadstart').subscribe(event => {
      console.log("loadstart -->", event);
    });
  }
  formatDate(originalDate) {
    const parsedDate = new Date(originalDate);
    const formattedDate = this.datePipe.transform(parsedDate, 'd MMM y, hh:mm a');
    console.log(formattedDate);
    return formattedDate;
  }
  gotoBack() {
    this.navCtrl.navigateBack('tabs/home');
  }
}
_MyBookingsPage = MyBookingsPage;
_MyBookingsPage.ɵfac = function MyBookingsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MyBookingsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.Config), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_6__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_7__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_8__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_9__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_10__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_11__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_18__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_12__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_13__.FirebaseAnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_14__.InAppBrowser), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe));
};
_MyBookingsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: _MyBookingsPage,
  selectors: [["app-my-bookings"]],
  viewQuery: function MyBookingsPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.swiperRef = _t.first);
    }
  },
  standalone: false,
  decls: 4,
  vars: 4,
  consts: [["swiperRef", ""], ["mapCanvas", ""], [4, "ngIf"], ["style", "min-height: 170px;    background: #191966;", 4, "ngIf"], ["style", "--background: white", 4, "ngIf"], ["style", "position: absolute;z-index: 9999;top: 155px; --background: transparent;", 4, "ngIf"], [2, "--background", "#191966"], ["alt", "", 1, "icn-main", 3, "src"], [2, "min-height", "170px", "background", "#191966"], [2, "--background", "#191966", "color", "#ffffff"], [1, "title"], ["mode", "md", "color", "red", "scrollable", "", 1, "themeone-segment-cbus", 3, "ngModelChange", "ngModel"], ["value", "future", 2, "color", "var(--textFieldPlaceholderColor)", 3, "click"], ["value", "previous", 2, "color", "var(--textFieldPlaceholderColor)", 3, "click"], [2, "--background", "white"], [1, "note-1"], [1, "hd-1"], [1, "txt-1"], ["mode", "md", "expand", "block", 1, "search-btn", 3, "click"], [1, "search-txt"], [1, "sign-up", 3, "click"], [2, "position", "absolute", "z-index", "9999", "top", "155px", "--background", "transparent"], [2, "padding-bottom", "120px", "height", "100%", 3, "ngSwitch"], ["class", "prevFuture", 4, "ngSwitchCase"], [1, "prevFuture"], ["style", "    margin: 12px;    --background: none;", 4, "ngFor", "ngForOf"], ["text-center", "", "class", "vertical-align-content", 4, "ngIf"], [2, "margin", "12px", "--background", "none"], [2, "margin", "0", "border", "1px solid #dfdfdf", "border-radius", "10px", 3, "click"], [2, "padding", "14px", "padding-bottom", "8px"], ["size", "2", 1, "date-col", "ion-no-padding"], [1, "ion-justify-content-center", 2, "color", "#FCAF17", "text-align", "center", "letter-spacing", "0.12px", "text-transform", "uppercase"], [1, "travel-day", "ion-justify-content-center", 2, "color", "#191966", "text-align", "center", "font-weight", "700", "font-size", "18px"], [1, "ion-justify-content-center"], [1, "date-month", 2, "font-size", "10px", "font-style", "normal", "color", "#5F5F5F"], ["size", "10", 1, "trip-data"], [1, "trip-origin"], [1, "themeone-pnrno"], [1, "themeone-bookedon"], [1, "devider_set"], ["size", "12", 2, "padding", "0px"], ["src", "./assets/icon/devider.svg", 2, "display", "contents"], [1, "trip-info"], ["size", "6.5", 1, "ion-text-start", 2, "padding", "14px", "padding-top", "4px"], ["src", "./assets/icon/cbustime.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "17px", "width", "20px", "margin-right", "4px"], ["style", "color: #333;\n                                font-size: 12px;\n                                font-weight: 600;\n                                line-height: 22px;\n                                letter-spacing: 0.12px;", 4, "ngIf"], ["style", "color: #3BAD69;\n                                font-size: 12px;\n                                font-weight: 600;\n                                line-height: 22px;\n                                letter-spacing: 0.12px;", 4, "ngIf"], ["size", "5.5", 1, "card-detail-text", "ion-text-end", 2, "padding", "14px", "padding-top", "4px"], [2, "color", "#333", "font-size", "12px", "font-weight", "600", "line-height", "22px", "letter-spacing", "0.12px"], [2, "color", "#3BAD69", "font-size", "12px", "font-weight", "600", "line-height", "22px", "letter-spacing", "0.12px"], ["text-center", "", 1, "vertical-align-content"], [2, "text-align", "center"], ["size", "6", 1, "ion-text-start", 2, "padding", "14px", "padding-top", "4px"], ["src", "./assets/icon/cbustime.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "17px", "vertical-align", "sub", "width", "24px", "margin-right", "4px"], ["style", "color: #EE2E3B;\n                            font-size: 12px;\n                            font-weight: 600;\n                            line-height: 22px;\n                            letter-spacing: 0.12px;", 4, "ngIf"], ["style", "color: #3BAD69;\n                            font-size: 12px;\n                            font-weight: 600;\n                            line-height: 22px;\n                            letter-spacing: 0.12px;", 4, "ngIf"], ["size", "6", 1, "card-detail-text", "ion-text-end", 2, "padding", "14px", "padding-top", "4px"], [2, "color", "#EE2E3B", "font-size", "12px", "font-weight", "600", "line-height", "22px", "letter-spacing", "0.12px"], [1, "ourbustheme", 3, "ngStyle"], ["mode", "md", 2, "padding", "8px"], ["size", "2", 2, "display", "flex"], [3, "click"], ["size", "7", 2, "display", "flex", "align-items", "center", "justify-content", "center"], [1, "editProfile"], ["class", "ourbustheme", 4, "ngIf"], ["style", "--background:#fff;", "class", "ourbustheme", 4, "ngIf"], [1, "ourbustheme"], [1, "ourbustheme", 2, "--background", "#fff"], [2, "margin", "16px"], ["mode", "md", "scrollable", "", 2, "padding", "0px", "background", "#EFEFEF", "border-radius", "8px", 3, "ngModelChange", "ngModel"], ["value", "future", 3, "click"], ["value", "previous", 3, "click"], ["value", "cancel", 3, "click"], [3, "init"], ["id", "future"], ["style", "min-width: 100% !important", 4, "ngIf"], ["id", "previous"], ["style", "width:100%", 4, "ngIf"], ["id", "cancel"], [2, "min-width", "100% !important"], [2, "width", "100%"], ["class", "ourbusRowSet", 3, "click", 4, "ngFor", "ngForOf"], [1, "ourbusRowSet", 3, "click"], ["size", "2"], [1, "ourbus_ticket"], ["src", "././assets/icon/ourbus_ticketsave.svg", 1, "ourbusIcon"], ["size", "8", 1, "ourbus_plain_text"], [2, "font-weight", "normal"], [1, "aroowset"], ["name", "arrow-forward-outline", 1, "ourbusIcon"], ["class", "hd-1", 4, "ngIf"], [1, "seabirdtheme"], [1, "seabird_header-content"], [2, "display", "flex", "align-items", "center"], ["size", "12"], [1, "headText", 2, "margin", "8px 0px", "padding-left", "16px"], ["class", "seabirdtheme", "style", "    --background: #F1F7FA;", 4, "ngIf"], [1, "seabirdtheme", 2, "--background", "#F1F7FA"], [2, "margin", "16px", "border", "1px solid #626262", "border-radius", "10px", "padding", "16px 8px 8px", "background", "white"], ["mode", "md", "color", "red", "scrollable", "", 3, "ngModelChange", "ngModel"], ["value", "future", 1, "upcomingBtn", 3, "click"], ["value", "previous", 1, "completeBtn", 3, "click"], ["value", "cancel", 1, "cancelBtn", 3, "click"], ["id", "future", 2, "background", "white"], ["id", "previous", 2, "background", "white"], ["id", "cancel", 2, "background", "white"], ["style", "    background: #E1F6F5;\n            border-radius: 10px;margin-bottom: 8px;margin-top: 8px;", 3, "click", 4, "ngFor", "ngForOf"], [2, "background", "#E1F6F5", "border-radius", "10px", "margin-bottom", "8px", "margin-top", "8px", 3, "click"], ["size", "2", 2, "display", "flex", "align-items", "center", "justify-content", "center"], [1, "busCircle"], ["src", "././assets/icon/bus.svg", 2, "width", "20px", "height", "20px"], ["size", "10", 1, "extraSpace"], [2, "font-weight", "bold"], [2, "color", "#00904B"], [2, "margin-left", "30%", "color", "black"], ["style", "    background: #F2F8FF;\n            border-radius: 10px;margin-bottom: 8px;margin-top: 8px;", 3, "click", 4, "ngFor", "ngForOf"], [2, "background", "#F2F8FF", "border-radius", "10px", "margin-bottom", "8px", "margin-top", "8px", 3, "click"], [2, "color", "#2B28CE"], ["style", "    background: #FFF0F2;\n            border-radius: 10px;margin-bottom: 8px;margin-top: 8px;", 3, "click", 4, "ngFor", "ngForOf"], [2, "background", "#FFF0F2", "border-radius", "10px", "margin-bottom", "8px", "margin-top", "8px", 3, "click"], [2, "color", "#D5000E"], [2, "margin-left", "28%", "color", "black"], ["mode", "md", "expand", "block", 1, "login-btn", 2, "--border-radius", "20px", "height", "45px", 3, "click"], ["translucent", "true"], ["mode", "md", "class", "high-1", 4, "ngIf"], ["mode", "md", 4, "ngIf"], ["class", "theme1", 4, "ngIf"], ["mode", "md", 1, "high-1"], [1, "title-main"], ["mode", "md"], ["mode", "md", "expand", "block", 1, "search-btn", 2, "height", "20px", 3, "click"], [1, "theme1"], [1, "ion-toolbar1"], ["mode", "md", "color", "red", "scrollable", "", 2, "width", "100%", 3, "ngModelChange", "ngModel"], ["value", "cancel", 2, "color", "var(--textFieldPlaceholderColor)", 3, "click"], [1, "map-canvas", 3, "hidden"], ["id", "future", 1, "seat-slide"], ["id", "previous", 1, "seat-slide"], ["size", "12", "size-md", "6", 4, "ngFor", "ngForOf"], ["id", "cancel", 1, "seat-slide"], ["size", "12", "size-md", "6"], [1, "card", "seat-card-bg", 3, "click"], [1, "org-dest"], ["name", "chevron-forward-outline", 1, "booking-details"], [1, "date"]],
  template: function MyBookingsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](0, MyBookingsPage_ng_container_0_Template, 5, 4, "ng-container", 2)(1, MyBookingsPage_ng_container_1_Template, 12, 5, "ng-container", 2)(2, MyBookingsPage_ng_container_2_Template, 10, 2, "ng-container", 2)(3, MyBookingsPage_ng_container_3_Template, 6, 4, "ng-container", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgSwitchCase, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonBackButton, _angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe],
  styles: [".title-main {\n  font-family: NotoSans;\n  font-size: 20px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  letter-spacing: normal;\n}\n\nion-slides {\n  min-height: 100%;\n  height: auto;\n}\n\n.seat-slide {\n  margin: 10px auto;\n  border-radius: 4px;\n  background-color: #f7f9fb;\n}\n.seat-slide .seat-card-bg {\n  padding: 0;\n  border-radius: 4px;\n  border: solid 1px #dddddd;\n  background-color: #ffffff;\n  width: 95%;\n  height: auto;\n  margin: 0 0 10px;\n  display: inline-block;\n}\n\n.icn-main {\n  vertical-align: middle;\n  position: absolute;\n  right: 10px;\n  padding: 0;\n  width: 140px;\n  height: 40px;\n  top: 10px;\n}\n\n.search-txt {\n  font-size: 14px;\n  font-weight: bold;\n  width: 61px;\n}\n\nion-button {\n  margin: 0 12px 12px;\n  border-radius: 2px;\n  --background: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: \"NotoSans\";\n  text-transform: initial;\n}\n\n.note-1 {\n  padding: 16px;\n  width: 100%;\n  text-align: center;\n}\n\nion-segment-button {\n  text-transform: none !important;\n}\n\n.hd-1 {\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.43;\n  font-weight: bold;\n  letter-spacing: normal;\n  color: #3e3e52;\n}\n\n.txt-1 {\n  width: 328px;\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.43;\n  letter-spacing: normal;\n  color: #3e3e52;\n}\n\n.sign-up {\n  width: 100%;\n  margin: 30px 0 0;\n  border-radius: 4px;\n  font-family: NotoSans;\n  font-size: 13px;\n  font-weight: bolder;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.54;\n  letter-spacing: normal;\n  text-align: center;\n  color: var(--iconsAndButtonsColor);\n}\n\nion-col {\n  margin-bottom: 0;\n}\n\n.card {\n  height: 72px;\n  border-radius: 4px;\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12);\n  background-color: #ffffff;\n  margin: -8px 4px 0;\n}\n\n.org-dest {\n  height: 20px;\n  font-family: NotoSans;\n  font-size: 16px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.25;\n  text-transform: uppercase;\n  letter-spacing: normal;\n  color: #4a4a4a;\n  text-align: left;\n  padding: 5px 5px 12px 12px;\n}\n\n.date {\n  height: 16px;\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n  color: #747f8d;\n  padding: 0 5px 16px 12px;\n  text-align: left;\n}\n\nion-content {\n  --ion-background-color: var(--viewBgColor);\n}\n\n.ios ion-list {\n  margin-bottom: 10px;\n}\n\n.md ion-list {\n  border-top: 1px solid var(--ion-color-step-150, #d7d8da);\n  padding: 0;\n}\n\n.map-button {\n  text-align: right;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n  color: #747f8d;\n  margin: -32px 8px 0;\n}\n\n.booking-details {\n  float: right;\n  margin: -25px 16px 0 5px;\n}\n\n.ion-toolbar1 {\n  background-color: #ffffff !important;\n  --background: #ffffff !important;\n  color: #666666 !important;\n  -webkit-text-fill-color: #666666 !important;\n}\n.ion-toolbar1 .toolbar-background {\n  background-color: var(--primary);\n  --background: var(--primary);\n}\n\n.theme1 .segment-button-checked {\n  --background: #ffffff !important;\n  color: var(--iconsAndButtonsColor) !important;\n  -webkit-text-fill-color: var(--iconsAndButtonsColor) !important;\n}\n\n.ion-color-red {\n  --ion-color-base: var(--iconsAndButtonsColor) !important;\n}\n\n.themeone-segment-cbus {\n  --ion-color-base: #FFBD16 !important;\n}\n.themeone-segment-cbus .segment-button-checked {\n  color: var(--iconsAndButtonsColor) !important;\n  -webkit-text-fill-color: #FFBD16 !important;\n}\n\n/** New theme-1 design start */\nion-card {\n  box-shadow: none;\n}\n\n.chip-absolute {\n  position: absolute;\n  top: -18px;\n  right: 12px;\n  z-index: 4 !important;\n}\n\n.date-col {\n  border: 1px solid #DFDFDF;\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  padding: 5px;\n}\n.date-col .date-month {\n  background: rgba(95, 95, 95, 0.1);\n  font-size: 12px;\n  border-radius: 6px;\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.trip-data {\n  padding: 0px 0px 0px 12px;\n}\n\n.devider_set {\n  width: 101%;\n  position: relative;\n  background-color: #fff;\n  left: -1.5px;\n}\n\n.card-detail-text {\n  font-size: 12px;\n  color: #191966;\n  font-style: normal;\n  font-weight: 600;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.travel-day {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.trip-origin {\n  color: #191966;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n}\n\n.themeone-pnrno {\n  color: #5F5F5F;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 22px;\n  letter-spacing: 0.14px;\n}\n\n.themeone-bookedon {\n  color: #5F5F5F;\n  font-size: 11px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n  letter-spacing: 0.11px;\n}\n\nion-header ion-toolbar {\n  color: #ffffff;\n}\n\n/** New theme-1 design end */\n.vertical-align-content {\n  display: flex !important;\n  align-content: center !important;\n  align-items: center !important;\n  height: 100%;\n}\n\n.ion-text-start {\n  display: flex;\n  align-items: center;\n  padding-left: 0px;\n}\n\n.toolbar[primary] .toolbar-title, .toolbar[primary] .bar-button-default {\n  color: white;\n}\n\n.prevFuture {\n  background: #fff;\n  border-top: 1px solid #000;\n  height: 100%;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  padding: 10px;\n  overflow: scroll;\n}\n\n.ourbustheme .editProfile {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #2D2D2D;\n  font-size: 18px;\n  font-weight: 700;\n}\n.ourbustheme .segment-button-checked {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  color: var(--primaryText) !important;\n  padding: 0px 8px;\n  background: var(--iconsAndButtonsColor) !important;\n  margin: 6px;\n  border-radius: 8px;\n}\n.ourbustheme .ourbusRowSet {\n  background-color: #EFEFEF;\n  border-radius: 8px;\n  padding: 8px;\n  border: 1px solid var(--iconsAndButtonsColor);\n  display: flex;\n  align-items: center;\n  margin: 16px 0px;\n}\n.ourbustheme .ourbus_ticket {\n  background-color: #DBEFDC;\n  padding: 8px;\n  border-radius: 4px;\n}\n.ourbustheme .ourbusIcon {\n  width: 24px;\n  height: 24px;\n}\n.ourbustheme .ourbus_plain_text {\n  font-size: 14px;\n  font-weight: 700;\n  color: #2D2D2D;\n  text-align: start;\n}\n.ourbustheme .aroowset {\n  display: flex;\n  justify-content: end;\n  color: var(--iconsAndButtonsColor);\n}\n\n.seabirdtheme .seabird_header {\n  padding: 10px;\n  font-weight: bold;\n  font-size: 16px;\n}\n.seabirdtheme .seabird_header-content {\n  display: flex;\n  flex-direction: column;\n}\n.seabirdtheme .seabird_title-container {\n  display: flex;\n  align-items: center;\n  height: 60px;\n}\n.seabirdtheme .headText {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 700;\n}\n.seabirdtheme .upcoming {\n  background: #BEF1ED;\n  padding: 8px;\n  border-radius: 5px;\n}\n.seabirdtheme .completed {\n  background: #D1E6FF;\n  padding: 8px;\n  border-radius: 5px;\n}\n.seabirdtheme .cancelled {\n  background: #F8D2D6;\n  padding: 8px;\n  border-radius: 5px;\n}\n.seabirdtheme .busCircle {\n  border-radius: 50%;\n  border: 1px solid #000000;\n  width: 38px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: white;\n}\n.seabirdtheme .extraSpace {\n  text-align: start;\n}\n.seabirdtheme .extraSpace p {\n  margin: 0px;\n  font-size: 12px;\n  padding: 2px 0px;\n}\n.seabirdtheme .upcomingBtn {\n  background: #BEF1ED;\n  border-radius: 8px;\n  --indicator-height: 0px;\n  color: var(--textFieldPlaceholderColor);\n  margin: 0px 4px 0px 0px;\n}\n.seabirdtheme .completeBtn {\n  background: #D1E6FF;\n  border-radius: 8px;\n  --indicator-height: 0px;\n  color: var(--textFieldPlaceholderColor);\n  margin: 0px 4px 0px 0px;\n}\n.seabirdtheme .cancelBtn {\n  background: #F8D2D6;\n  border-radius: 8px;\n  --indicator-height: 0px;\n  color: var(--textFieldPlaceholderColor);\n}\n\n.cbusHeader {\n  min-height: 170px !important;\n  background: #191966;\n  color: #ffffff;\n  z-index: 1000;\n}\n\nion-segment {\n  width: 100%;\n}"],
  encapsulation: 2
});

/***/ }),

/***/ 27027:
/*!***************************************************!*\
  !*** ./src/app/my-bookings/my-bookings.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBookingsPageModule: () => (/* binding */ MyBookingsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _my_bookings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-bookings-routing.module */ 32266);
/* harmony import */ var _my_bookings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-bookings.page */ 25212);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 51670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
var _MyBookingsPageModule;







class MyBookingsPageModule {}
_MyBookingsPageModule = MyBookingsPageModule;
_MyBookingsPageModule.ɵfac = function MyBookingsPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MyBookingsPageModule)();
};
_MyBookingsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _MyBookingsPageModule
});
_MyBookingsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  providers: [_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _my_bookings_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyBookingsPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MyBookingsPageModule, {
    declarations: [_my_bookings_page__WEBPACK_IMPORTED_MODULE_1__.MyBookingsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _my_bookings_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyBookingsPageRoutingModule]
  });
})();

/***/ }),

/***/ 32266:
/*!***********************************************************!*\
  !*** ./src/app/my-bookings/my-bookings-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBookingsPageRoutingModule: () => (/* binding */ MyBookingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _my_bookings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-bookings.page */ 25212);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _MyBookingsPageRoutingModule;




const routes = [{
  path: '',
  component: _my_bookings_page__WEBPACK_IMPORTED_MODULE_0__.MyBookingsPage
}];
class MyBookingsPageRoutingModule {}
_MyBookingsPageRoutingModule = MyBookingsPageRoutingModule;
_MyBookingsPageRoutingModule.ɵfac = function MyBookingsPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MyBookingsPageRoutingModule)();
};
_MyBookingsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _MyBookingsPageRoutingModule
});
_MyBookingsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MyBookingsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

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