"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[6735],{

/***/ 17500
/*!**************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/firebase-analytics/dist/esm/definitions.js ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ },

/***/ 4970
/*!********************************************************************************!*\
  !*** ./node_modules/@capacitor-community/firebase-analytics/dist/esm/index.js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ 92871
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/share/dist/esm/definitions.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ },

/***/ 52233
/*!*********************************************************!*\
  !*** ./node_modules/@capacitor/share/dist/esm/index.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Share: () => (/* binding */ Share)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 92871);

const Share = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Share', {
  web: () => __webpack_require__.e(/*! import() */ 1227).then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 91227)).then(m => new m.ShareWeb())
});


//# sourceMappingURL=index.js.map

/***/ },

/***/ 64470
/*!*******************************************************************!*\
  !*** ./src/app/booking-details/booking-details-routing.module.ts ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingDetailsPageRoutingModule: () => (/* binding */ BookingDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 49870);
/* harmony import */ var _booking_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking-details.page */ 82888);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _BookingDetailsPageRoutingModule;




const routes = [{
  path: '',
  component: _booking_details_page__WEBPACK_IMPORTED_MODULE_1__.BookingDetailsPage
}];
class BookingDetailsPageRoutingModule {}
_BookingDetailsPageRoutingModule = BookingDetailsPageRoutingModule;
_BookingDetailsPageRoutingModule.ɵfac = function BookingDetailsPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BookingDetailsPageRoutingModule)();
};
_BookingDetailsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _BookingDetailsPageRoutingModule
});
_BookingDetailsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BookingDetailsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 56735
/*!***********************************************************!*\
  !*** ./src/app/booking-details/booking-details.module.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingDetailsPageModule: () => (/* binding */ BookingDetailsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _booking_details_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./booking-details-routing.module */ 64470);
/* harmony import */ var _booking_details_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./booking-details.page */ 82888);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 51670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 17705);
var _BookingDetailsPageModule;







class BookingDetailsPageModule {}
_BookingDetailsPageModule = BookingDetailsPageModule;
_BookingDetailsPageModule.ɵfac = function BookingDetailsPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BookingDetailsPageModule)();
};
_BookingDetailsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _BookingDetailsPageModule
});
_BookingDetailsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__.InAppBrowser],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _booking_details_routing_module__WEBPACK_IMPORTED_MODULE_3__.BookingDetailsPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](BookingDetailsPageModule, {
    declarations: [_booking_details_page__WEBPACK_IMPORTED_MODULE_4__.BookingDetailsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _booking_details_routing_module__WEBPACK_IMPORTED_MODULE_3__.BookingDetailsPageRoutingModule]
  });
})();

/***/ },

/***/ 82888
/*!*********************************************************!*\
  !*** ./src/app/booking-details/booking-details.page.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingDetailsPage: () => (/* binding */ BookingDetailsPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _map_map_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map/map.page */ 71692);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/share */ 52233);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/authentication */ 82491);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 83087);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 51670);
/* harmony import */ var _services_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/firebase-analytics.service */ 47402);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 89417);

var _BookingDetailsPage;



















const _c0 = () => ({
  "color": "#000"
});
const _c1 = () => ({
  "color": "var(--placeholderColor)"
});
const _c2 = () => ({
  "padding-top": "0px"
});
const _c3 = () => ({});
const _c4 = a0 => ({
  "cancelled-class": a0
});
const _c5 = a0 => ({
  st: a0
});
const _c6 = (a0, a1, a2) => ({
  "sb-bk-hero--ok": a0,
  "sb-bk-hero--bad": a1,
  "sb-bk-hero--wait": a2
});
const _c7 = a0 => ({
  t: a0,
  n: "0",
  label: ""
});
const _c8 = a0 => ({
  t: a0,
  n: "1",
  label: "Onward journey"
});
const _c9 = a0 => ({
  t: a0,
  n: "2",
  label: "Return journey"
});
const _c10 = (a0, a1) => ({
  "sb-bk-pill--ok": a0,
  "sb-bk-pill--bad": a1
});
const _c11 = (a0, a1) => ({
  "high-2": a0,
  "high-1": a1
});
const _c12 = () => ({
  "overflow": "inherit",
  border: "1px solid #ff7373",
  backgroundColor: "#fff5f5 "
});
const _c13 = () => ({
  "overflow": "inherit",
  margin: 0,
  border: "1px solid #dfdfdf"
});
function BookingDetailsPage_ng_container_0_ion_back_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-back-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_back_button_4_Template_ion_back_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_0_ion_back_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-back-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_back_button_5_Template_ion_back_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToMorePage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_0_ion_back_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-back-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_back_button_6_Template_ion_back_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_segment_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-segment", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function BookingDetailsPage_ng_container_0_ion_content_9_ion_segment_1_Template_ion_segment_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.segment, $event) || (ctx_r1.segment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-segment-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Onward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-segment-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Return ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.segment);
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_9_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.trackBusModal = !ctx_r1.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 16)(2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "This action will require you to download TrackingGo App");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-row")(5, "ion-col", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_9_div_2_Template_ion_col_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.openTgoBrowser("http://" + ctx_r1.metaData.subdomain + ".trackingo.in/live_track"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "OPEN IN BROWSER");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_9_div_2_Template_ion_col_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.openTgoBrowser("https://play.google.com/store/apps/details?id=com.bitla.trackingooperator"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "DOWNLOAD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "dwn-txt" : "themeone-dwn-txt");
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3__svg_svg_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "svg", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "path", 84)(2, "path", 85)(3, "path", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_h3_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h3", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.duration, " hrs ");
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_h3_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h3", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.duration, " hrs ");
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3__svg_svg_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "svg", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "path", 90)(2, "path", 91)(3, "path", 92)(4, "path", 93)(5, "path", 94)(6, "path", 95)(7, "path", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_img_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 97);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.roundedLogo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_div_73_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 45)(2, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Passenger name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-col", 48)(7, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Seat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const passenger_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](passenger_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", passenger_r8.seat_number, " ");
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_div_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_div_73_ion_row_1_Template, 11, 2, "ion-row", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const passenger_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", passenger_r8.ticket_status != "Cancelled");
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_div_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_div_98_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.gotoMaps(1, ctx_r1.ticketDetails.boarding_details.latitude, ctx_r1.ticketDetails.boarding_details.longitude));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "View on Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_div_117_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_div_117_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.gotoMaps(2, ctx_r1.ticketDetails.drop_off_details.latitude, ctx_r1.ticketDetails.drop_off_details.longitude));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "View on Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_row_122_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 35)(1, "ion-col", 36)(2, "ion-row", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_row_122_Template_ion_row_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.trackBusModal = !ctx_r1.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-col", 104)(4, "h2", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Track My Bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-col", 106)(7, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ion-icon", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_124_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 20)(1, "ion-button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_124_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.confirmBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Confirm Phone Booking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "cbus_btn" : "theme1_btn");
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_125_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_126_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 20)(1, "ion-row", 112)(2, "ion-col", 104)(3, "a", 113)(4, "h4", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Bus Operator Contact Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h4", 115)(7, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-col", 106)(10, "a", 113)(11, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "svg", 118)(13, "g", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "path", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "defs")(16, "clipPath", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "rect", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", "tel:" + ctx_r1.ticketDetails.boarding_details.contact_numbers, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.boarding_details.contact_numbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", "tel:" + ctx_r1.ticketDetails.boarding_details.contact_numbers, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_138_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 73)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Cash coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_139_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 75)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails.cash_coupon.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_140_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 73)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "E-Booking Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_141_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 75)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails.ebooking_discount.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_142_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 73)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Bus Operator GST");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_143_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 75)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails.service_tax_amount.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_144_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 73)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Transaction Charge");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_145_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 75)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails.transaction_charges.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_146_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 73)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "CC Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_147_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 75)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails.cc_charges.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_148_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 73)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Promotional Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_149_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 75)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails.usable_promotional_balance.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_150_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 73)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Wallet Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_151_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 75)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails.wallet_balance.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_160_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 45)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Transaction ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_161_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 45)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.transaction_id);
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_grid_168_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-grid", 35)(1, "ion-row", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_grid_168_Template_ion_row_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToUpdate("0"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-col", 41)(3, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Modify Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-row", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_grid_168_Template_ion_row_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToCancel("0"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-col", 41)(9, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Cancel Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ion-row", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_grid_168_Template_ion_row_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.gotocontactsupport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-col", 41)(15, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Contact Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "edit-ticket" : "edit-ticket-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "edit-ticket" : "edit-ticket-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "edit-ticket" : "edit-ticket-2");
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_row_169_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 41)(2, "ion-button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_row_169_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.downloadticketInvoice("0"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Download Ticket ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-icon", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-col", 128)(6, "ion-icon", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_row_169_Template_ion_icon_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.socialShare("0"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-grid")(1, "ion-row")(2, "ion-col", 20)(3, "ion-card", 21)(4, "ion-grid")(5, "ion-row")(6, "ion-col", 22)(7, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "h2", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-col", 24)(13, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "ion-col", 22)(17, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "ion-col", 26)(20, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3__svg_svg_23_Template, 4, 0, "svg", 27)(24, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_h3_24_Template, 2, 1, "h3", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "ion-col", 22)(27, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "ion-col", 22)(30, "h2", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_h3_33_Template, 2, 1, "h3", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "ion-col", 24)(35, "h2", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "ion-col", 22)(38, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Depart");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "ion-col", 22)(43, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Arrive");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 32)(46, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "ion-grid")(49, "ion-row", 35)(50, "ion-col", 36)(51, "ion-row")(52, "ion-col", 37)(53, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3__svg_svg_54_Template, 8, 0, "svg", 39)(55, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_img_55_Template, 1, 1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "ion-col", 41)(57, "h4", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "ion-col", 44)(62, "ion-row")(63, "ion-col", 45)(64, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "ion-col", 48)(69, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, " PNR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](73, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_div_73_Template, 2, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "div", 32)(75, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](76, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "ion-grid")(78, "ion-row", 52)(79, "ion-col", 53)(80, "ion-row", 54)(81, "ion-col", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "svg", 56)(83, "g", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](84, "path", 58)(85, "path", 59)(86, "path", 60)(87, "path", 61)(88, "path", 62)(89, "path", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "defs")(91, "clipPath", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](92, "rect", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "ion-col", 41)(94, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95, "Pickup Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](98, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_div_98_Template, 4, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "ion-row")(100, "ion-col", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "svg", 56)(102, "g", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](103, "path", 58)(104, "path", 59)(105, "path", 60)(106, "path", 61)(107, "path", 62)(108, "path", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "defs")(110, "clipPath", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](111, "rect", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "ion-col", 41)(113, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114, "Drop Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](117, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_div_117_Template, 4, 0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "div", 32)(119, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](120, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](122, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_row_122_Template, 9, 0, "ion-row", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "ion-row", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](124, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_124_Template, 5, 1, "ion-col", 71)(125, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_125_Template, 2, 0, "ion-col", 71)(126, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_126_Template, 18, 3, "ion-col", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](127, "ion-grid", 35)(128, "ion-row", 72)(129, "ion-col", 20)(130, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](131, "Payment Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](132, "ion-col", 73)(133, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](134, "Base Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](135, "ion-col", 75)(136, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](137);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](138, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_138_Template, 3, 0, "ion-col", 77)(139, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_139_Template, 3, 1, "ion-col", 78)(140, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_140_Template, 3, 0, "ion-col", 77)(141, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_141_Template, 3, 1, "ion-col", 78)(142, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_142_Template, 3, 0, "ion-col", 77)(143, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_143_Template, 3, 1, "ion-col", 78)(144, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_144_Template, 3, 0, "ion-col", 77)(145, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_145_Template, 3, 1, "ion-col", 78)(146, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_146_Template, 3, 0, "ion-col", 77)(147, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_147_Template, 3, 1, "ion-col", 78)(148, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_148_Template, 3, 0, "ion-col", 77)(149, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_149_Template, 3, 1, "ion-col", 78)(150, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_150_Template, 3, 0, "ion-col", 77)(151, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_151_Template, 3, 1, "ion-col", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](152, "ion-col", 73)(153, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](154, "Total Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](155, "ion-col", 75)(156, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](157);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](158, "ion-col", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](159, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](160, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_160_Template, 3, 0, "ion-col", 82)(161, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_col_161_Template, 3, 1, "ion-col", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](162, "ion-col", 45)(163, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](164, "Payment Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](165, "ion-col", 45)(166, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](167);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](168, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_grid_168_Template, 19, 3, "ion-grid", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](169, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_ion_row_169_Template, 7, 0, "ion-row", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "cbus_src" : "theme1_src");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 52, ctx_r1.ticketDetails.origin.substring(0, 3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "cbus_desti" : "theme1_src");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 54, ctx_r1.ticketDetails.destination.substring(0, 3)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "location-line" : "location-line_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "location-dot" : "location-dot_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "location-bus" : "location-bus_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "location-dot-blue" : "location-dot-blue_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r1.ticketDetails.boarding_details.dep_time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.drop_off_details ? ctx_r1.ticketDetails.drop_off_details.arr_time : ctx_r1.ticketDetails.arr_time ? ctx_r1.ticketDetails.arr_time : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.service_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.getFormatedDate(ctx_r1.ticketDetails.travel_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.ticket_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.ticketDetails.passenger_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.boarding_details.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.boarding_details.latitude != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.drop_off_details ? ctx_r1.ticketDetails.drop_off_details.address : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.drop_off_details && ctx_r1.ticketDetails.drop_off_details.latitude != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.ticketDetails.is_e_phone_booking && ctx_r1.isPastDate(ctx_r1.ticketDetails.travel_date) != true && ctx_r1.ticketDetails.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.is_e_phone_booking && ctx_r1.ticketDetails.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.ticket_status != "Cancelled" && ctx_r1.isPastDate(ctx_r1.ticketDetails.travel_date) != true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.ticketDetails.is_e_phone_booking && ctx_r1.isPastDate(ctx_r1.ticketDetails.travel_date) != true && ctx_r1.ticketDetails.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails.base_fare.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails.cash_coupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails.cash_coupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails.transaction_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails.transaction_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails.cc_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails.cc_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails.usable_promotional_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails.usable_promotional_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails.wallet_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails.wallet_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", ctx_r1.fareBreakupDetails.total_fare.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.transaction_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.transaction_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.payment_method ? ctx_r1.ticketDetails.payment_method : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.ticket_status != "Cancelled" && ctx_r1.isDateGreaterOrEqual(ctx_r1.ticketDetails.travel_date, ctx_r1.TodayDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.ticket_status != "Cancelled" && !ctx_r1.ticketDetails.is_e_phone_booking);
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4__svg_svg_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "svg", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "path", 143)(2, "path", 144)(3, "path", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_h3_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h3", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.onward.duration, " hrs ");
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_h3_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h3", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.onward.duration, " hrs ");
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4__svg_svg_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "svg", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "path", 90)(2, "path", 91)(3, "path", 92)(4, "path", 93)(5, "path", 94)(6, "path", 95)(7, "path", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_img_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 97);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.roundedLogo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_div_73_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 45)(2, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Passenger name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-col", 48)(7, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Seat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const passenger_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](passenger_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", passenger_r15.seat_number, " ");
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_div_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_div_73_ion_row_1_Template, 11, 2, "ion-row", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const passenger_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", passenger_r15.ticket_status != "Cancelled");
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_div_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_div_98_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.gotoMaps(1, ctx_r1.ticketDetails.onward.boarding_details.latitude, ctx_r1.ticketDetails.onward.boarding_details.longitude));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "View on Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_div_113_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_div_113_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.gotoMaps(2, ctx_r1.ticketDetails.onward.drop_off_details.latitude, ctx_r1.ticketDetails.onward.drop_off_details.longitude));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "View on Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_row_118_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 35)(1, "ion-col", 36)(2, "ion-row", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_row_118_Template_ion_row_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.trackBusModal = !ctx_r1.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-col", 104)(4, "h2", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Track My Bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-col", 106)(7, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ion-icon", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_120_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 20)(1, "ion-button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_120_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.confirmBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Confirm Phone Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "cbus_btn" : "theme1_btn");
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_121_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 20)(1, "ion-row", 112)(2, "ion-col", 104)(3, "a", 113)(4, "h4", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Bus Operator Contact Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h4", 115)(7, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-col", 106)(10, "a", 113)(11, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "svg", 118)(13, "g", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "path", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "defs")(16, "clipPath", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "rect", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", "tel:" + ctx_r1.ticketDetails.onward.boarding_details.contact_numbers, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.boarding_details.contact_numbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", "tel:" + ctx_r1.ticketDetails.onward.boarding_details.contact_numbers, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_134_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 73)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Cash coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_135_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 75)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_onward.cash_coupon.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_136_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 73)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "E-Booking Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_137_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 75)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + (ctx_r1.fareBreakupDetails_onward.ebooking_discount ? ctx_r1.fareBreakupDetails_onward.ebooking_discount.toFixed(2) : "0.00"));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_138_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 73)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Bus Operator GST");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_139_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 75)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_onward.service_tax_amount.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_140_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 73)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Transaction Charge");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_141_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 75)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_onward.transaction_charges.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_142_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 73)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "CC Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_143_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 75)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_onward.cc_charges.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_144_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 73)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Promotional Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_145_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 75)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_onward.usable_promotional_balance.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_146_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 73)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Wallet Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_147_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 75)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_onward.wallet_balance.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_156_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 45)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Transaction ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_157_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 45)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.transaction_id);
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_grid_164_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-grid", 35)(1, "ion-row", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_grid_164_Template_ion_row_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToUpdate("1"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-col", 41)(3, "h2", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Modify Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-row", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_grid_164_Template_ion_row_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToCancel("1"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-col", 41)(9, "h2", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Cancel Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ion-row", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_grid_164_Template_ion_row_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.gotocontactsupport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-col", 41)(15, "h2", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Contact Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_row_165_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 41)(2, "ion-button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_row_165_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.downloadticketInvoice("1"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Download Ticket ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-icon", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-col", 128)(6, "ion-icon", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_row_165_Template_ion_icon_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.socialShare("1"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-grid")(1, "ion-row")(2, "ion-col", 20)(3, "ion-card", 130)(4, "ion-grid")(5, "ion-row")(6, "ion-col", 22)(7, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "h2", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-col", 24)(13, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "ion-col", 22)(17, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "ion-col", 26)(20, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4__svg_svg_23_Template, 4, 0, "svg", 131)(24, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_h3_24_Template, 2, 1, "h3", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "ion-col", 22)(27, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "ion-col", 22)(30, "h2", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_h3_33_Template, 2, 1, "h3", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "ion-col", 24)(35, "h2", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "ion-col", 22)(38, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Depart");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "ion-col", 22)(43, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Arrive");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 32)(46, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "ion-grid")(49, "ion-row", 35)(50, "ion-col", 36)(51, "ion-row")(52, "ion-col", 37)(53, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4__svg_svg_54_Template, 8, 0, "svg", 39)(55, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_img_55_Template, 1, 1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "ion-col", 41)(57, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "ion-col", 44)(62, "ion-row")(63, "ion-col", 45)(64, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "ion-col", 48)(69, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, " PNR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](73, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_div_73_Template, 2, 1, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "div", 32)(75, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](76, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "ion-grid")(78, "ion-row", 52)(79, "ion-col", 53)(80, "ion-row")(81, "ion-col", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "svg", 56)(83, "g", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](84, "path", 58)(85, "path", 59)(86, "path", 60)(87, "path", 61)(88, "path", 62)(89, "path", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "defs")(91, "clipPath", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](92, "rect", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "ion-col", 41)(94, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95, "Pickup Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](98, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_div_98_Template, 4, 0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "ion-row")(100, "ion-col", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "svg", 56)(102, "g", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](103, "path", 138)(104, "path", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "defs")(106, "clipPath", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](107, "rect", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "ion-col", 41)(109, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](110, "Drop Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](113, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_div_113_Template, 4, 0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "div", 32)(115, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](116, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](118, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_row_118_Template, 9, 0, "ion-row", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "ion-row", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](120, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_120_Template, 4, 1, "ion-col", 71)(121, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_121_Template, 2, 0, "ion-col", 71)(122, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_122_Template, 18, 3, "ion-col", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "ion-grid", 35)(124, "ion-row", 72)(125, "ion-col", 20)(126, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](127, "Payment Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "ion-col", 73)(129, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](130, "Base Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "ion-col", 75)(132, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](133);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](134, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_134_Template, 3, 0, "ion-col", 77)(135, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_135_Template, 3, 1, "ion-col", 78)(136, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_136_Template, 3, 0, "ion-col", 77)(137, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_137_Template, 3, 1, "ion-col", 78)(138, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_138_Template, 3, 0, "ion-col", 77)(139, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_139_Template, 3, 1, "ion-col", 78)(140, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_140_Template, 3, 0, "ion-col", 77)(141, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_141_Template, 3, 1, "ion-col", 78)(142, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_142_Template, 3, 0, "ion-col", 77)(143, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_143_Template, 3, 1, "ion-col", 78)(144, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_144_Template, 3, 0, "ion-col", 77)(145, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_145_Template, 3, 1, "ion-col", 78)(146, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_146_Template, 3, 0, "ion-col", 77)(147, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_147_Template, 3, 1, "ion-col", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](148, "ion-col", 73)(149, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](150, "Total Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "ion-col", 75)(152, "p", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](153);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](154, "ion-col", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](155, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](156, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_156_Template, 3, 0, "ion-col", 82)(157, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_col_157_Template, 3, 1, "ion-col", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](158, "ion-col", 45)(159, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](160, "Payment Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](161, "ion-col", 45)(162, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](163);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](164, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_grid_164_Template, 19, 0, "ion-grid", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](165, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_ion_row_165_Template, 7, 0, "ion-row", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "cbus_src" : "theme1_src");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 52, ctx_r1.ticketDetails.onward.origin.substring(0, 3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "cbus_desti" : "theme1_src");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 54, ctx_r1.ticketDetails.onward.destination.substring(0, 3)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "location-line" : "location-line_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "location-dot" : "location-dot_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "location-bus" : "location-bus_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "location-dot-blue" : "location-dot-blue_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r1.ticketDetails.onward.boarding_details.dep_time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.onward.drop_off_details ? ctx_r1.ticketDetails.onward.drop_off_details.arr_time : ctx_r1.ticketDetails.onward.arr_time ? ctx_r1.ticketDetails.onward.arr_time : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.service_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.getFormatedDate(ctx_r1.ticketDetails.onward.travel_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.onward.ticket_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.ticketDetails.onward.passenger_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.onward.boarding_details.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.boarding_details.latitude != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.onward.drop_off_details ? ctx_r1.ticketDetails.onward.drop_off_details.address : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.drop_off_details && ctx_r1.ticketDetails.onward.drop_off_details.latitude != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.ticketDetails.onward.is_e_phone_booking && ctx_r1.isPastDate(ctx_r1.ticketDetails.onward.travel_date) != true && ctx_r1.ticketDetails.onward.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.is_e_phone_booking && ctx_r1.ticketDetails.onward.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.ticket_status != "Cancelled" && ctx_r1.isPastDate(ctx_r1.ticketDetails.onward.travel_date) != true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.ticketDetails.onward.is_e_phone_booking && ctx_r1.isPastDate(ctx_r1.ticketDetails.onward.travel_date) != true && ctx_r1.ticketDetails.onward.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_onward.base_fare.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_onward.cash_coupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_onward.cash_coupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_onward.transaction_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_onward.transaction_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_onward.cc_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_onward.cc_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_onward.usable_promotional_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_onward.usable_promotional_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_onward.wallet_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_onward.wallet_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", ctx_r1.currencySym, "", ctx_r1.fareBreakupDetails_onward.total_fare.toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.transaction_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.transaction_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.payment_method ? ctx_r1.ticketDetails.onward.payment_method : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.ticket_status != "Cancelled" && ctx_r1.ticketDetails.onward.travel_date >= ctx_r1.TodayDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.ticket_status != "Cancelled" && !ctx_r1.ticketDetails.onward.is_e_phone_booking);
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5__svg_svg_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "svg", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "path", 143)(2, "path", 144)(3, "path", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_h3_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h3", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.return.duration, " hrs ");
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_h3_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h3", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.return.duration, " hrs ");
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5__svg_svg_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "svg", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "path", 90)(2, "path", 91)(3, "path", 92)(4, "path", 93)(5, "path", 94)(6, "path", 95)(7, "path", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_img_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 97);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.roundedLogo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_div_73_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 45)(2, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Passenger name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-col", 48)(7, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Seat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const passenger_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](passenger_r22.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", passenger_r22.seat_number, " ");
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_div_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_div_73_ion_row_1_Template, 11, 2, "ion-row", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const passenger_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", passenger_r22.ticket_status != "Cancelled");
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_div_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_div_98_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.gotoMaps(1, ctx_r1.ticketDetails.return.boarding_details.latitude, ctx_r1.ticketDetails.return.boarding_details.longitude));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "View on Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_div_113_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_div_113_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.gotoMaps(2, ctx_r1.ticketDetails.return.drop_off_details.latitude, ctx_r1.ticketDetails.return.drop_off_details.longitude));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "View on Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_row_118_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 35)(1, "ion-col", 36)(2, "ion-row", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_row_118_Template_ion_row_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.trackBusModal = !ctx_r1.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-col", 104)(4, "h2", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Track My Bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-col", 106)(7, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ion-icon", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_120_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 20)(1, "ion-button", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_120_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.confirmBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Confirm Phone Booking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "cbus_btn" : "theme1_btn");
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_121_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 20)(1, "ion-row", 112)(2, "ion-col", 104)(3, "a", 113)(4, "h4", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Bus Operator Contact Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h4", 115)(7, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-col", 106)(10, "a", 113)(11, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "svg", 118)(13, "g", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "path", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "defs")(16, "clipPath", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "rect", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", "tel:" + ctx_r1.ticketDetails.return.boarding_details.contact_numbers, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.boarding_details.contact_numbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", "tel:" + ctx_r1.ticketDetails.return.boarding_details.contact_numbers, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_134_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 73)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Cash coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_135_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 75)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_return.cash_coupon.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_136_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 73)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "E-Booking Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_137_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 75)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + (ctx_r1.fareBreakupDetails_return == null ? null : ctx_r1.fareBreakupDetails_return.ebooking_discount) ? ctx_r1.fareBreakupDetails_return == null ? null : ctx_r1.fareBreakupDetails_return.ebooking_discount.toFixed(2) : "0.00");
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_138_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 73)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Bus Operator GST");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_139_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 75)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_return.service_tax_amount.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_140_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 73)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Transaction Charge");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_141_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 75)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_return.transaction_charges.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_142_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 73)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "CC Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_143_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 75)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_return.cc_charges.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_144_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 73)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Promotional Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_145_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 75)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_return.usable_promotional_balance.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_146_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 73)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Wallet Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_147_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 75)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_return.wallet_balance.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_156_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 45)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Transaction ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_157_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 45)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.transaction_id);
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_grid_164_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-grid", 35)(1, "ion-row", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_grid_164_Template_ion_row_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToUpdate("2"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-col", 41)(3, "h2", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Modify Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-row", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_grid_164_Template_ion_row_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToCancel("2"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-col", 41)(9, "h2", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Cancel Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ion-row", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_grid_164_Template_ion_row_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.gotocontactsupport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-col", 41)(15, "h2", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Contact Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_row_165_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 41)(2, "ion-button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_row_165_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.downloadticketInvoice("2"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Download Ticket ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-icon", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-col", 128)(6, "ion-icon", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_row_165_Template_ion_icon_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.socialShare("2"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-grid")(1, "ion-row")(2, "ion-col", 20)(3, "ion-card", 130)(4, "ion-grid")(5, "ion-row")(6, "ion-col", 22)(7, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "h2", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-col", 24)(13, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "ion-col", 22)(17, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "ion-col", 26)(20, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5__svg_svg_23_Template, 4, 0, "svg", 131)(24, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_h3_24_Template, 2, 1, "h3", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "ion-col", 22)(27, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "ion-col", 22)(30, "h2", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_h3_33_Template, 2, 1, "h3", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "ion-col", 24)(35, "h2", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "ion-col", 22)(38, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Depart");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "ion-col", 22)(43, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Arrive");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 32)(46, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "ion-grid")(49, "ion-row", 35)(50, "ion-col", 36)(51, "ion-row")(52, "ion-col", 37)(53, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5__svg_svg_54_Template, 8, 0, "svg", 39)(55, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_img_55_Template, 1, 1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "ion-col", 41)(57, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "ion-col", 44)(62, "ion-row")(63, "ion-col", 45)(64, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "ion-col", 48)(69, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, " PNR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](73, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_div_73_Template, 2, 1, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "div", 32)(75, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](76, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "ion-grid")(78, "ion-row", 52)(79, "ion-col", 53)(80, "ion-row")(81, "ion-col", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "svg", 56)(83, "g", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](84, "path", 58)(85, "path", 59)(86, "path", 60)(87, "path", 61)(88, "path", 62)(89, "path", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "defs")(91, "clipPath", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](92, "rect", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "ion-col", 41)(94, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95, "Pickup Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](98, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_div_98_Template, 4, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "ion-row")(100, "ion-col", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "svg", 56)(102, "g", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](103, "path", 138)(104, "path", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "defs")(106, "clipPath", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](107, "rect", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "ion-col", 41)(109, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](110, "Drop Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](113, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_div_113_Template, 4, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "div", 32)(115, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](116, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](118, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_row_118_Template, 9, 0, "ion-row", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "ion-row", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](120, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_120_Template, 5, 1, "ion-col", 71)(121, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_121_Template, 2, 0, "ion-col", 71)(122, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_122_Template, 18, 3, "ion-col", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "ion-grid", 35)(124, "ion-row", 72)(125, "ion-col", 20)(126, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](127, "Payment Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "ion-col", 73)(129, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](130, "Base Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "ion-col", 75)(132, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](133);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](134, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_134_Template, 3, 0, "ion-col", 77)(135, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_135_Template, 3, 1, "ion-col", 78)(136, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_136_Template, 3, 0, "ion-col", 77)(137, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_137_Template, 3, 1, "ion-col", 78)(138, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_138_Template, 3, 0, "ion-col", 77)(139, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_139_Template, 3, 1, "ion-col", 78)(140, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_140_Template, 3, 0, "ion-col", 77)(141, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_141_Template, 3, 1, "ion-col", 78)(142, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_142_Template, 3, 0, "ion-col", 77)(143, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_143_Template, 3, 1, "ion-col", 78)(144, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_144_Template, 3, 0, "ion-col", 77)(145, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_145_Template, 3, 1, "ion-col", 78)(146, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_146_Template, 3, 0, "ion-col", 77)(147, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_147_Template, 3, 1, "ion-col", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](148, "ion-col", 73)(149, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](150, "Total Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "ion-col", 75)(152, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](153);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](154, "ion-col", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](155, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](156, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_156_Template, 3, 0, "ion-col", 82)(157, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_col_157_Template, 3, 1, "ion-col", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](158, "ion-col", 45)(159, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](160, "Payment Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](161, "ion-col", 45)(162, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](163);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](164, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_grid_164_Template, 19, 0, "ion-grid", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](165, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_ion_row_165_Template, 7, 0, "ion-row", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "cbus_src" : "theme1_src");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 52, ctx_r1.ticketDetails.return.origin.substring(0, 3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "cbus_desti" : "theme1_src");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 54, ctx_r1.ticketDetails.return.destination.substring(0, 3)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "location-line" : "location-line_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "location-dot" : "location-dot_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "location-bus" : "location-bus_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "location-dot-blue" : "location-dot-blue_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r1.ticketDetails.return.boarding_details.dep_time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.return.drop_off_details ? ctx_r1.ticketDetails.return.drop_off_details.arr_time : ctx_r1.ticketDetails.return.arr_time ? ctx_r1.ticketDetails.return.arr_time : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.service_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.getFormatedDate(ctx_r1.ticketDetails.return.travel_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.return.ticket_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.ticketDetails.return.passenger_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.return.boarding_details.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.boarding_details.latitude != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.return.drop_off_details ? ctx_r1.ticketDetails.return.drop_off_details.address : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.drop_off_details && ctx_r1.ticketDetails.return.drop_off_details.latitude != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.ticketDetails.return.is_e_phone_booking && ctx_r1.isPastDate(ctx_r1.ticketDetails.return.travel_date) != true && ctx_r1.ticketDetails.return.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.is_e_phone_booking && ctx_r1.ticketDetails.return.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.ticket_status != "Cancelled" && ctx_r1.isPastDate(ctx_r1.ticketDetails.return.travel_date) != true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.ticketDetails.return.is_e_phone_booking && ctx_r1.isPastDate(ctx_r1.ticketDetails.return.travel_date) != true && ctx_r1.ticketDetails.return.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_return.base_fare.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_return.cash_coupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_return.cash_coupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_return.transaction_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_return.transaction_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_return.cc_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_return.cc_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_return.usable_promotional_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_return.usable_promotional_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_return.wallet_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_return.wallet_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", ctx_r1.fareBreakupDetails_return.total_fare.toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.transaction_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.transaction_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.payment_method ? ctx_r1.ticketDetails.return.payment_method : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.ticket_status != "Cancelled" && ctx_r1.ticketDetails.return.travel_date >= ctx_r1.TodayDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.ticket_status != "Cancelled" && !ctx_r1.ticketDetails.return.is_e_phone_booking);
  }
}
function BookingDetailsPage_ng_container_0_ion_content_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_0_ion_content_9_ion_segment_1_Template, 5, 1, "ion-segment", 10)(2, BookingDetailsPage_ng_container_0_ion_content_9_div_2_Template, 9, 1, "div", 11)(3, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_3_Template, 170, 56, "ion-grid", 1)(4, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_4_Template, 166, 56, "ion-grid", 1)(5, BookingDetailsPage_ng_container_0_ion_content_9_ion_grid_5_Template, 166, 56, "ion-grid", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "theme1" : "theme1_header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isRoundTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.trackBusModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails && !ctx_r1.isRoundTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails && ctx_r1.isRoundTrip && ctx_r1.segment == "future");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails && ctx_r1.isRoundTrip && ctx_r1.segment == "previous");
  }
}
function BookingDetailsPage_ng_container_0_ion_content_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content")(1, "div", 153)(2, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-icon", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Note: Your ticket is in Pending.Please check after sometime.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 157)(7, "ion-button", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_10_Template_ion_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Okay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function BookingDetailsPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-header", 2)(2, "ion-toolbar", 3)(3, "ion-buttons", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_Template_ion_buttons_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.gotoMyBookings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, BookingDetailsPage_ng_container_0_ion_back_button_4_Template, 1, 0, "ion-back-button", 5)(5, BookingDetailsPage_ng_container_0_ion_back_button_5_Template, 1, 0, "ion-back-button", 5)(6, BookingDetailsPage_ng_container_0_ion_back_button_6_Template, 1, 0, "ion-back-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-title", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Ticket Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, BookingDetailsPage_ng_container_0_ion_content_9_Template, 6, 6, "ion-content", 7)(10, BookingDetailsPage_ng_container_0_ion_content_10_Template, 11, 0, "ion-content", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("translucent", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "theme1" : "theme1_header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", ctx_r1.metaData.msiteFolder == "cbustheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](9, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](10, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.newBooking == true || ctx_r1.newBooking == "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r1.newBooking == false || ctx_r1.newBooking == "false") && !ctx_r1.redirectToHome);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.redirectToHome);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", ctx_r1.metaData.msiteFolder == "cbustheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](11, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](12, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails != null && ctx_r1.ticketStatus != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketStatus == "Pending");
  }
}
function BookingDetailsPage_ng_container_1_ion_buttons_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-buttons", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-back-button", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_1_ion_buttons_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-buttons", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_buttons_6_Template_ion_buttons_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToMyTrips());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_div_10_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.trackBusModal1 = !ctx_r1.trackBusModal1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 173)(2, "ion-row")(3, "ion-col", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-row", 176)(6, "ion-col")(7, "span", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", "https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=" + "pnr= " + ctx_r1.qrPnr + " seat No= " + ctx_r1.qrSeatNo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Reference Code:", ctx_r1.qrPnr, "");
  }
}
function BookingDetailsPage_ng_container_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_div_11_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.trackBusModal = !ctx_r1.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 16)(2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "This action will require you to download TrackingGo App");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-row")(5, "ion-col", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_div_11_Template_ion_col_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.openTgoBrowser("http://" + ctx_r1.metaData.subdomain + ".trackingo.in/live_track"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "OPEN IN BROWSER");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-col", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_div_11_Template_ion_col_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.openTgoBrowser("https://play.google.com/store/apps/details?id=com.bitla.trackingooperator"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "DOWNLOAD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_12_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Your ticket is booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_12_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Your ticket is cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_12_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_12_div_21_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.downloadticketInvoice("0"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Download Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_12_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 232);
  }
}
function BookingDetailsPage_ng_container_1_ion_content_12_ion_row_104_ion_col_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 234)(1, "div", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const passenger_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", passenger_r35.seat_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", passenger_r35.name ? passenger_r35.name : "N/A", "\u00A0(", passenger_r35.gender, ") ");
  }
}
function BookingDetailsPage_ng_container_1_ion_content_12_ion_row_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_1_ion_content_12_ion_row_104_ion_col_1_Template, 5, 3, "ion-col", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const passenger_r35 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.areAllTicketsCancelled() && passenger_r35.ticket_status != "Cancelled" || ctx_r1.areAllTicketsCancelled());
  }
}
function BookingDetailsPage_ng_container_1_ion_content_12_ion_icon_113_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-icon", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_12_ion_icon_113_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.toggleRadioGroup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_12_ion_icon_114_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-icon", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_12_ion_icon_114_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.toggleRadioGroup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_12_ion_row_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row")(1, "ion-col")(2, "span", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Each passenger is allowed to bring one large piece of luggage weighing up to 15 kg, along with one handbag. The handbag should be compact enough to fit either under your seat or in the overhead compartment, if available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_12_ion_row_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row")(1, "ion-col")(2, "span", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "For any extra luggage, an additional ticket will be required. However, if there\u2019s extra space on board, we\u2019ll do our best to accommodate without needing an extra ticket. If space is limited, the policy will be strictly enforced.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_12_ion_row_140_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_12_ion_row_140_Template_ion_row_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r38);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.bookAgain());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-col", 240)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Book Again");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_12_ion_row_141_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_12_ion_row_141_Template_ion_row_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r39);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.gotoMyBookings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-col")(2, "ion-button", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " See my Trips ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_12_div_142_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "ion-row", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_12_div_142_Template_ion_row_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToCancel("0"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-col", 240)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Cancel Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_12_div_143_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "ion-row")(2, "ion-col")(3, "ion-button", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_12_div_143_Template_ion_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToUpdate("0"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Update Booking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_12_ion_row_144_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row")(1, "ion-col")(2, "ion-button", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_12_ion_row_144_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r42);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.confirmBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Confirm Phone Booking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content", 179)(1, "div", 180)(2, "ion-row", 181)(3, "ion-col", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, BookingDetailsPage_ng_container_1_ion_content_12_span_4_Template, 2, 0, "span", 1)(5, BookingDetailsPage_ng_container_1_ion_content_12_span_5_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-row", 182)(7, "ion-col", 20)(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Aisi hoti hai Bharat ki Sawari");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-row", 183)(11, "ion-col", 20)(12, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_12_Template_div_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.copyCode(ctx_r1.bookingDetails.pnr_number ? ctx_r1.bookingDetails.pnr_number : ctx_r1.bookingDetails.ticket_number ? ctx_r1.bookingDetails.ticket_number : ctx_r1.bookingDetails.pnrNumber));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "span", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "div", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "ion-icon", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "ion-row", 183)(20, "ion-col", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, BookingDetailsPage_ng_container_1_ion_content_12_div_21_Template, 4, 0, "div", 188)(22, BookingDetailsPage_ng_container_1_ion_content_12_div_22_Template, 1, 0, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "ion-row", 190)(24, "ion-col", 20)(25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "A copy of the ticket has been mailed to");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "ion-row", 191)(28, "ion-col", 20)(29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "ion-card", 192)(32, "ion-row", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "ion-col", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "ion-row", 194)(35, "ion-col", 195)(36, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "ion-col", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "ion-icon", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "ion-col", 195)(43, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "ion-row", 200)(48, "ion-col", 201)(49, "span", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Date of Departure");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "ion-col", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "ion-col", 204)(53, "span", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Departure");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "ion-row", 200)(56, "ion-col", 201)(57, "span", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](59, "ion-col", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "ion-col", 204)(61, "span", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "ion-row", 200)(64, "ion-col", 201)(65, "span", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Date of Arrival");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](67, "ion-col", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "ion-col", 204)(69, "span", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "Arrival");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "ion-row", 200)(72, "ion-col", 201)(73, "span", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](75, "ion-col", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "ion-col", 204)(77, "span", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "ion-row", 200)(80, "ion-col", 174)(81, "span", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "ion-row", 200)(84, "ion-col", 174)(85, "span", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "ion-row", 206)(88, "ion-col", 20)(89, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "This transaction will show as \u201COurBus\u201D on your billing statement.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "ion-row", 207)(92, "ion-col", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](93, "span", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "ion-row", 209)(95, "ion-col", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](96, "img", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "ion-card", 211)(98, "ion-row", 212)(99, "ion-col", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](100, "ion-icon", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "ion-col", 214)(102, "span", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103, "Passenger(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](104, BookingDetailsPage_ng_container_1_ion_content_12_ion_row_104_Template, 2, 1, "ion-row", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "ion-card", 211)(106, "ion-row", 212)(107, "ion-col", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](108, "ion-icon", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "ion-col", 218)(110, "span", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](111, "Luggage");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "ion-col", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](113, BookingDetailsPage_ng_container_1_ion_content_12_ion_icon_113_Template, 1, 0, "ion-icon", 220)(114, BookingDetailsPage_ng_container_1_ion_content_12_ion_icon_114_Template, 1, 0, "ion-icon", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](115, BookingDetailsPage_ng_container_1_ion_content_12_ion_row_115_Template, 4, 0, "ion-row", 1)(116, BookingDetailsPage_ng_container_1_ion_content_12_ion_row_116_Template, 4, 0, "ion-row", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "ion-card", 211)(118, "ion-row", 212)(119, "ion-col", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](120, "ion-icon", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "ion-col", 224)(122, "span", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](123, "Arrival Time at Boarding Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "ion-row")(125, "ion-col")(126, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](127, "Be there 15 minutes earlier");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "ion-row")(129, "ion-col")(130, "span", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](131, "We recommend arriving at the pickup stop at least 15 minutes before the scheduled departure time.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](132, "ion-row")(133, "ion-col")(134, "span", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](135, "Special Needs");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "ion-row")(137, "ion-col")(138, "span", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](139, "Allow us to be better prepared for your upcoming journey by informing us on support@ourbus.in of any special needs that you might have.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](140, BookingDetailsPage_ng_container_1_ion_content_12_ion_row_140_Template, 4, 0, "ion-row", 227)(141, BookingDetailsPage_ng_container_1_ion_content_12_ion_row_141_Template, 4, 0, "ion-row", 228)(142, BookingDetailsPage_ng_container_1_ion_content_12_div_142_Template, 5, 0, "div", 1)(143, BookingDetailsPage_ng_container_1_ion_content_12_div_143_Template, 7, 0, "div", 1)(144, BookingDetailsPage_ng_container_1_ion_content_12_ion_row_144_Template, 4, 0, "ion-row", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.ticket_status == "Booked" || ctx_r1.ticketDetails.ticket_status == "Partially Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.ticket_status == "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", "PNR Number:\u00A0", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r1.bookingDetails.pnr_number ? ctx_r1.bookingDetails.pnr_number : ctx_r1.bookingDetails.ticket_number ? ctx_r1.bookingDetails.ticket_number : ctx_r1.bookingDetails.pnrNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.ticket_status == "Booked" && ctx_r1.ticketDetails.sharing_pdf_link_ios != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.ticket_status == "Booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.passenger_details[0].email ? ctx_r1.ticketDetails.passenger_details[0].email : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.bookingDetails.origin ? ctx_r1.bookingDetails.origin : ctx_r1.ticketDetails && ctx_r1.ticketDetails.origin ? ctx_r1.ticketDetails.origin : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.boarding_details.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.bookingDetails.destination ? ctx_r1.bookingDetails.destination : ctx_r1.ticketDetails && ctx_r1.ticketDetails.destination ? ctx_r1.ticketDetails.destination : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.drop_off_details ? ctx_r1.ticketDetails.drop_off_details.address : "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails && ctx_r1.ticketDetails.travel_date ? ctx_r1.changeDateFormat1(ctx_r1.ticketDetails.travel_date) : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.boarding_details.dep_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails && ctx_r1.ticketDetails.arr_date ? ctx_r1.changeDateFormat1(ctx_r1.ticketDetails.arr_date) : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.drop_off_details.arr_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.stg_duration ? ctx_r1.ticketDetails.stg_duration.slice(0, 2) + "h " + ctx_r1.ticketDetails.stg_duration.slice(3, 5) + "m" : ctx_r1.ticketDetails.duration.slice(0, 2) + "h " + ctx_r1.ticketDetails.duration.slice(3, 5) + "m", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r1.logo ? ctx_r1.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.ticketDetails.passenger_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.isShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.newBooking == "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.newBooking == "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r1.newBooking == "false" || !ctx_r1.newBooking) && ctx_r1.ticketDetails.is_can_cancel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r1.newBooking == "false" || !ctx_r1.newBooking) && ctx_r1.ticketDetails.is_can_cancel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.is_e_phone_booking && ctx_r1.ticketDetails.ticket_status !== "Cancelled");
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_13_div_12_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r44);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.copyCode(ctx_r1.ticketDetails.onward.ticket_number));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ion-icon", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", "PNR Number:\u00A0", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.ticket_number);
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_13_div_13_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r45);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.copyCode(ctx_r1.ticketDetails.return.ticket_number));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ion-icon", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", "PNR Number:\u00A0", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.ticket_number);
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_14_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.ticketInvoiceOnWardsD(ctx_r1.ticketDetails.onward.sharing_pdf_link_ios));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Download Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_14_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 232);
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 183)(1, "ion-col", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, BookingDetailsPage_ng_container_1_ion_content_13_ion_row_14_div_2_Template, 4, 0, "div", 255)(3, BookingDetailsPage_ng_container_1_ion_content_13_ion_row_14_div_3_Template, 1, 0, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.ticket_status == "Booked" && ctx_r1.ticketDetails.onward.sharing_pdf_link_ios != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.ticket_status == "Booked" && ctx_r1.ticketDetails.return.sharing_pdf_link_ios != "");
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_15_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r47);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.ticketInvoicereturnD(ctx_r1.ticketDetails.return.sharing_pdf_link_ios));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Download Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_15_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 232);
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 183)(1, "ion-col", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, BookingDetailsPage_ng_container_1_ion_content_13_ion_row_15_div_2_Template, 4, 0, "div", 255)(3, BookingDetailsPage_ng_container_1_ion_content_13_ion_row_15_div_3_Template, 1, 0, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.ticket_status == "Booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.ticket_status == "Booked");
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_ion_col_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 20)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.passenger_details[0].email);
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_ion_col_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.passenger_details[0].email);
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "ion-card", 257)(2, "ion-row", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-col", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-row", 194)(5, "ion-col", 195)(6, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-col", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "ion-icon", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-col", 195)(13, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "ion-row", 200)(18, "ion-col", 259)(19, "span", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Date of Departure");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "ion-col", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "ion-col", 204)(23, "span", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Departure");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "ion-row", 200)(26, "ion-col", 201)(27, "span", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "ion-col", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "ion-col", 204)(31, "span", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "ion-row", 200)(34, "ion-col", 201)(35, "span", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Date of Arrival");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "ion-col", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "ion-col", 204)(39, "span", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Arrival");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "ion-row", 200)(42, "ion-col", 201)(43, "span", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "ion-col", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "ion-col", 204)(47, "span", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "ion-row", 200)(50, "ion-col", 174)(51, "span", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "ion-row", 200)(54, "ion-col", 174)(55, "span", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.boarding_details.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.drop_off_details ? ctx_r1.ticketDetails.onward.drop_off_details.address : "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.changeDateFormat1(ctx_r1.ticketDetails.onward.travel_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.boarding_details.dep_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails && ctx_r1.ticketDetails.onward.arr_date ? ctx_r1.changeDateFormat1(ctx_r1.ticketDetails.onward.arr_date) : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.drop_off_details.arr_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.onward.stg_duration ? ctx_r1.ticketDetails.onward.stg_duration.slice(0, 2) + "h " + ctx_r1.ticketDetails.onward.stg_duration.slice(3, 5) + "m" : ctx_r1.ticketDetails.onward.duration.slice(0, 2) + "h " + ctx_r1.ticketDetails.onward.duration.slice(3, 5) + "m", " ");
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "ion-card", 257)(2, "ion-row", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-col", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-row", 194)(5, "ion-col", 195)(6, "div", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-col", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "ion-icon", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-col", 195)(13, "div", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "ion-row", 200)(18, "ion-col", 259)(19, "span", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Date of Departure");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "ion-col", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "ion-col", 204)(23, "span", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Departure");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "ion-row", 200)(26, "ion-col", 201)(27, "span", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "ion-col", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "ion-col", 204)(31, "span", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "ion-row", 200)(34, "ion-col", 201)(35, "span", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Date of Arrival");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "ion-col", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "ion-col", 204)(39, "span", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Arrival");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "ion-row", 200)(42, "ion-col", 201)(43, "span", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "ion-col", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "ion-col", 204)(47, "span", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "ion-row", 200)(50, "ion-col", 174)(51, "span", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "ion-row", 200)(54, "ion-col", 174)(55, "span", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.boarding_details.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.drop_off_details ? ctx_r1.ticketDetails.return.drop_off_details.address : "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails && ctx_r1.ticketDetails.return.travel_date ? ctx_r1.changeDateFormat1(ctx_r1.ticketDetails.return.travel_date) : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.boarding_details.dep_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails && ctx_r1.ticketDetails.return.arr_date ? ctx_r1.changeDateFormat1(ctx_r1.ticketDetails.return.arr_date) : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.drop_off_details.arr_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.stg_duration ? ctx_r1.ticketDetails.return.stg_duration.slice(0, 2) + "h " + ctx_r1.ticketDetails.return.stg_duration.slice(3, 5) + "m" : ctx_r1.ticketDetails.return.duration.slice(0, 2) + "h " + ctx_r1.ticketDetails.return.duration.slice(3, 5) + "m");
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_div_44_div_8_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 234)(2, "div", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const passenger_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", passenger_r48.seat_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", passenger_r48.name ? passenger_r48.name : "N/A", "\u00A0(", passenger_r48.gender, ") ");
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_div_44_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_1_ion_content_13_div_44_div_8_ion_row_1_Template, 6, 3, "ion-row", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.ticketDetails.onward.passenger_details);
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "ion-card", 211)(2, "ion-row", 212)(3, "ion-col", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-icon", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-col", 214)(6, "span", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Passenger(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, BookingDetailsPage_ng_container_1_ion_content_13_div_44_div_8_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment == "onward");
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_div_45_ion_row_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 234)(2, "div", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const passenger_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", passenger_r49.seat_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", passenger_r49.name ? passenger_r49.name : "N/A", "\u00A0(", passenger_r49.gender, ") ");
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "ion-card", 211)(2, "ion-row", 212)(3, "ion-col", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-icon", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-col", 214)(6, "span", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Passenger(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, BookingDetailsPage_ng_container_1_ion_content_13_div_45_ion_row_9_Template, 6, 3, "ion-row", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.ticketDetails.return.passenger_details);
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_ion_icon_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-icon", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_13_ion_icon_54_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r50);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.toggleRadioGroupR());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_ion_icon_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-icon", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_13_ion_icon_55_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r51);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.toggleRadioGroupR());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row")(1, "ion-col")(2, "span", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Each passenger is allowed to bring one large piece of luggage weighing up to 15 kg, along with one handbag. The handbag should be compact enough to fit either under your seat or in the overhead compartment, if available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row")(1, "ion-col")(2, "span", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "For any extra luggage, an additional ticket will be required. However, if there\u2019s extra space on board, we\u2019ll do our best to accommodate without needing an extra ticket. If space is limited, the policy will be strictly enforced.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_81_Template_ion_row_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.bookAgain());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-col", 240)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Book Again");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_82_ion_col_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 240)(1, "ion-button", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " See my Trips ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_82_Template_ion_row_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r53);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.gotoMyBookings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_1_ion_content_13_ion_row_82_ion_col_1_Template, 3, 0, "ion-col", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.auth.isLoggedIn());
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_83_Template_ion_row_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r54);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.confirmBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-col")(2, "ion-button", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Confirm Phone Booking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content", 179)(1, "div", 180)(2, "ion-row", 181)(3, "ion-col", 20)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Your ticket is booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-row", 182)(7, "ion-col", 20)(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Aisi hoti hai Bharat ki Sawari");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-row", 183)(11, "ion-col", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, BookingDetailsPage_ng_container_1_ion_content_13_div_12_Template, 7, 2, "div", 244)(13, BookingDetailsPage_ng_container_1_ion_content_13_div_13_Template, 7, 2, "div", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, BookingDetailsPage_ng_container_1_ion_content_13_ion_row_14_Template, 4, 2, "ion-row", 245)(15, BookingDetailsPage_ng_container_1_ion_content_13_ion_row_15_Template, 4, 2, "ion-row", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "ion-row", 190)(17, "ion-col", 20)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "A copy of the ticket has been mailed to");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "ion-row", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, BookingDetailsPage_ng_container_1_ion_content_13_ion_col_21_Template, 3, 1, "ion-col", 71)(22, BookingDetailsPage_ng_container_1_ion_content_13_ion_col_22_Template, 3, 1, "ion-col", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "ion-row", 246)(24, "ion-segment", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function BookingDetailsPage_ng_container_1_ion_content_13_Template_ion_segment_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.selectedTripSegment, $event) || (ctx_r1.selectedTripSegment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "ion-segment-button", 248)(26, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "ion-icon", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Onward Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "ion-segment-button", 250)(31, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "ion-icon", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Return Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, BookingDetailsPage_ng_container_1_ion_content_13_div_35_Template, 57, 9, "div", 1)(36, BookingDetailsPage_ng_container_1_ion_content_13_div_36_Template, 57, 9, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "ion-row", 206)(38, "ion-col", 20)(39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "This transaction will show as \u201COurBus\u201D on your billing statement.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "ion-row", 209)(42, "ion-col", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "img", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, BookingDetailsPage_ng_container_1_ion_content_13_div_44_Template, 9, 1, "div", 1)(45, BookingDetailsPage_ng_container_1_ion_content_13_div_45_Template, 10, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "ion-card", 211)(47, "ion-row", 212)(48, "ion-col", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "ion-icon", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "ion-col", 218)(51, "span", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Luggage");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "ion-col", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, BookingDetailsPage_ng_container_1_ion_content_13_ion_icon_54_Template, 1, 0, "ion-icon", 252)(55, BookingDetailsPage_ng_container_1_ion_content_13_ion_icon_55_Template, 1, 0, "ion-icon", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, BookingDetailsPage_ng_container_1_ion_content_13_ion_row_56_Template, 4, 0, "ion-row", 1)(57, BookingDetailsPage_ng_container_1_ion_content_13_ion_row_57_Template, 4, 0, "ion-row", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "ion-card", 211)(59, "ion-row", 212)(60, "ion-col", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](61, "ion-icon", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "ion-col", 224)(63, "span", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Arrival Time at Boarding Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "ion-row")(66, "ion-col")(67, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Be there 15 minutes early");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "ion-row")(70, "ion-col")(71, "span", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "Users are suggested to arrive at the pickup stop at least 15 minutes prior to the departure time.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "ion-row")(74, "ion-col")(75, "span", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "Special Needs");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "ion-row")(78, "ion-col")(79, "span", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, "Allow us to be better prepared for your upcoming journey by informing us on support@ourbus.in of any special needs that you might have.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](81, BookingDetailsPage_ng_container_1_ion_content_13_ion_row_81_Template, 4, 0, "ion-row", 227)(82, BookingDetailsPage_ng_container_1_ion_content_13_ion_row_82_Template, 2, 1, "ion-row", 228)(83, BookingDetailsPage_ng_container_1_ion_content_13_ion_row_83_Template, 4, 0, "ion-row", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment == "onward");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment == "return");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment == "onward");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment == "return");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment == "onward");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment != "onward");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectedTripSegment);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment == "onward");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment == "return");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r1.logo ? ctx_r1.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment == "onward");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment == "return");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.isShowR);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isShowR);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isShowR);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isShowR);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.newBooking == "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.newBooking == "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.is_e_phone_booking && ctx_r1.ticketDetails.return.is_e_phone_booking);
  }
}
function BookingDetailsPage_ng_container_1_ion_content_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content")(1, "div", 153)(2, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-icon", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Note: Your ticket is in Pending.Please check after sometime.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 157)(7, "ion-button", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_14_Template_ion_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r55);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Okay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function BookingDetailsPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-header", 159)(2, "ion-toolbar", 160)(3, "ion-row")(4, "ion-col", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, BookingDetailsPage_ng_container_1_ion_buttons_5_Template, 2, 0, "ion-buttons", 162)(6, BookingDetailsPage_ng_container_1_ion_buttons_6_Template, 2, 0, "ion-buttons", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-col", 164)(8, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "img", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, BookingDetailsPage_ng_container_1_div_10_Template, 9, 2, "div", 167)(11, BookingDetailsPage_ng_container_1_div_11_Template, 9, 0, "div", 167)(12, BookingDetailsPage_ng_container_1_ion_content_12_Template, 145, 27, "ion-content", 168)(13, BookingDetailsPage_ng_container_1_ion_content_13_Template, 84, 19, "ion-content", 168)(14, BookingDetailsPage_ng_container_1_ion_content_14_Template, 11, 0, "ion-content", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", ctx_r1.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](9, _c2) : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](10, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.newBooking == "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.newBooking == "false" || !ctx_r1.newBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r1.logo ? ctx_r1.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.trackBusModal1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.trackBusModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails != null && !ctx_r1.isRoundTrip && ctx_r1.ticketStatus != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails != null && ctx_r1.isRoundTrip && ctx_r1.ticketStatus != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketStatus == "Pending");
  }
}
function BookingDetailsPage_ng_container_2_ion_buttons_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-buttons", 273)(1, "ion-button", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_2_ion_buttons_6_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r56);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.cancelTicketDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-icon", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_2_ion_buttons_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-buttons", 273)(1, "ion-button", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_2_ion_buttons_7_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r57);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.cancelTicketDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-icon", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_2_ion_card_12_ion_row_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 246)(1, "ion-col", 303)(2, "div", 212)(3, "div")(4, "p", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-col", 305)(9, "div")(10, "p", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "p", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const passenger_r59 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](passenger_r59.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", passenger_r59.gender == "M" ? "Male" : "Female", " | ", passenger_r59.age, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Seat ", passenger_r59.seat_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.bus_type.split(",")[1]);
  }
}
function BookingDetailsPage_ng_container_2_ion_card_12_span_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "(Inc. Taxes)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_2_ion_card_12_ion_row_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 300)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-col", 292)(5, "div")(6, "span", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.payment_method);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](8, 2, ctx_r1.fare, "1.1-1"));
  }
}
function BookingDetailsPage_ng_container_2_ion_card_12_ion_button_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-button", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_2_ion_card_12_ion_button_106_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r60);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.confirmBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Confirm Phone Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_2_ion_card_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-card", 276)(1, "ion-row", 277)(2, "ion-col", 278)(3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-col", 279)(6, "p", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-col", 281)(9, "p", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "p", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Boarding: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "p", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Drop: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "span", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "p", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Departure: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "span", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "p", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Arrival: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "span", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "p", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "p", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_2_ion_card_12_Template_p_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r58);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.trackBusModal = !ctx_r1.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Track Bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 277)(32, "ion-row")(33, "ion-col", 287)(34, "p", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Passenger Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, BookingDetailsPage_ng_container_2_ion_card_12_ion_row_36_Template, 14, 5, "ion-row", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "ion-row", 277)(38, "ion-col", 290)(39, "div", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Fare ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, BookingDetailsPage_ng_container_2_ion_card_12_span_41_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "ion-col", 292)(43, "div")(44, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 277)(47, "ion-row")(48, "ion-col", 287)(49, "p", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Fare & Payment Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "ion-row")(52, "ion-col", 294)(53, "p", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Base Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "ion-col", 296)(56, "p", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](58, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "ion-row")(60, "ion-col", 294)(61, "p", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "e-Booking Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "ion-col", 296)(64, "p", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](66, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "ion-row")(68, "ion-col", 294)(69, "p", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "Service Tax Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "ion-col", 296)(72, "p", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](74, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "ion-row")(76, "ion-col", 294)(77, "p", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, "CC Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "ion-col", 296)(80, "p", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](82, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "ion-row")(84, "ion-col", 294)(85, "p", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, "Total Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "ion-col", 296)(88, "p", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](90, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "div", 277)(92, "ion-row")(93, "ion-col", 299)(94, "div", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95, "Payment Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "ion-row")(97, "ion-col", 300)(98, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99, "Total Amount Paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "ion-col", 292)(101, "div")(102, "span", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](104, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](105, BookingDetailsPage_ng_container_2_ion_card_12_ion_row_105_Template, 9, 5, "ion-row", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](106, BookingDetailsPage_ng_container_2_ion_card_12_ion_button_106_Template, 3, 0, "ion-button", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Pnr Number: ", ctx_r1.ticketDetails.ticket_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](42, _c4, ctx_r1.segmentDisplayName === "Cancelled"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.segmentDisplayName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r1.ticketDetails.origin, " - ", ctx_r1.ticketDetails.destination, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.boarding_details.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.drop_off_details ? ctx_r1.ticketDetails.drop_off_details.address : "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r1.ticketDetails.travel_date, ",", ctx_r1.ticketDetails.dep_time, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r1.ticketDetails.arr_date, ", ", ctx_r1.ticketDetails.arr_time, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx_r1.ticketDetails == null ? null : ctx_r1.ticketDetails.duration.split(":")[0]) + " hrs " + (ctx_r1.ticketDetails == null ? null : ctx_r1.ticketDetails.duration.split(":")[1]) + " mins");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.ticketDetails.passenger_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.serviceTaxAmount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", ctx_r1.fare, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](58, 24, ctx_r1.ticketDetails.fare_break_up_hash.base_fare, "1.1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](66, 27, ctx_r1.ticketDetails.fare_break_up_hash.ebooking_discount, "1.1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](74, 30, ctx_r1.ticketDetails.fare_break_up_hash.service_tax_amount, "1.1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](82, 33, ctx_r1.ticketDetails.fare_break_up_hash.cc_charges, "1.1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](90, 36, ctx_r1.ticketDetails.fare_break_up_hash.total_fare, "1.1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](104, 39, ctx_r1.fare, "1.1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.payment_method);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.is_e_phone_booking);
  }
}
function BookingDetailsPage_ng_container_2_div_13_ion_row_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 246)(1, "ion-col", 303)(2, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-icon", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div")(5, "p", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-col", 305)(10, "div")(11, "p", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "p", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const passenger_r62 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](passenger_r62.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", passenger_r62.gender == "M" ? "Male" : "Female", " | ", passenger_r62.age, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](passenger_r62.seat_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.bus_type.split(",")[1]);
  }
}
function BookingDetailsPage_ng_container_2_div_13_span_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "(Inc. Taxes)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_2_div_13_ion_row_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 246)(1, "ion-col", 303)(2, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-icon", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div")(5, "p", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-col", 305)(10, "div")(11, "p", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "p", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const passenger_r63 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](passenger_r63.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", passenger_r63.gender == "M" ? "Male" : "Female", " | ", passenger_r63.age, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](passenger_r63.seat_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.bus_type.split(",")[1]);
  }
}
function BookingDetailsPage_ng_container_2_div_13_span_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "(Inc. Taxes)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "p", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Onward Journey");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-card", 276)(4, "ion-row", 277)(5, "ion-col", 128)(6, "div", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "ion-icon", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-col", 312)(9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "p", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "p", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Boarding: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "p", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Drop: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "span", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "p", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Departure: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "span", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "p", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Arrival: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "span", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "p", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "p", 313);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_2_div_13_Template_p_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r61);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.trackBusModal = !ctx_r1.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Track Bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "ion-col", 314)(34, "p", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 277)(37, "ion-row")(38, "ion-col", 287)(39, "p", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Passenger Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, BookingDetailsPage_ng_container_2_div_13_ion_row_41_Template, 15, 5, "ion-row", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "ion-row", 277)(43, "ion-col", 290)(44, "div", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Fare ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, BookingDetailsPage_ng_container_2_div_13_span_46_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "ion-col", 292)(48, "div")(49, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "p", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Return Journey");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "ion-card", 276)(54, "ion-row", 277)(55, "ion-col", 128)(56, "div", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "ion-icon", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "ion-col", 312)(59, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "p", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "p", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Boarding: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "span", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "p", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Drop: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "span", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "p", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "Departure: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "span", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "p", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "Arrival: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "span", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "p", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "p", 313);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_2_div_13_Template_p_click_81_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r61);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.trackBusModal = !ctx_r1.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, "Track Bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "ion-col", 314)(84, "p", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "div", 277)(87, "ion-row")(88, "ion-col", 287)(89, "p", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "Passenger Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](91, BookingDetailsPage_ng_container_2_div_13_ion_row_91_Template, 15, 5, "ion-row", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "ion-row", 277)(93, "ion-col", 290)(94, "div", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95, "Fare ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](96, BookingDetailsPage_ng_container_2_div_13_span_96_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "ion-col", 292)(98, "div")(99, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Pnr Number: ", ctx_r1.ticketDetails.onward.ticket_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r1.ticketDetails.onward.origin, " - ", ctx_r1.ticketDetails.onward.destination, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.boarding_details.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.drop_off_details ? ctx_r1.ticketDetails.onward.drop_off_details.address : "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.changeDateFormat1(ctx_r1.ticketDetails.onward.boarding_details.travel_date) + "," + ctx_r1.ticketDetails.onward.boarding_details.dep_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.changeDateFormat1(ctx_r1.ticketDetails.onward.drop_off_details.travel_date) + "," + ctx_r1.ticketDetails.onward.drop_off_details ? ctx_r1.ticketDetails.onward.drop_off_details.arr_time : "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r1.ticketDetails.onward.duration, "hrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.ticket_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.ticketDetails.onward.passenger_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r1.ticketDetails == null ? null : ctx_r1.ticketDetails.onward == null ? null : ctx_r1.ticketDetails.onward.service_tax_amount) > 0 && !ctx_r1.hideGstText);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "\u2002", (ctx_r1.ticketDetails == null ? null : ctx_r1.ticketDetails.onward == null ? null : ctx_r1.ticketDetails.onward.total_fare) || "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Pnr Number: ", ctx_r1.ticketDetails.return.ticket_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r1.ticketDetails.return.origin, " - ", ctx_r1.ticketDetails.return.destination, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.boarding_details.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.drop_off_details ? ctx_r1.ticketDetails.return.drop_off_details.address : "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.changeDateFormat1(ctx_r1.ticketDetails.return.boarding_details.travel_date) + "," + ctx_r1.ticketDetails.return.boarding_details.dep_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.changeDateFormat1(ctx_r1.ticketDetails.return.drop_off_details.travel_date) + "," + ctx_r1.ticketDetails.return.drop_off_details ? ctx_r1.ticketDetails.return.drop_off_details.arr_time : "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r1.ticketDetails.return.duration, "hrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.ticket_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.ticketDetails.return.passenger_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r1.ticketDetails == null ? null : ctx_r1.ticketDetails.return == null ? null : ctx_r1.ticketDetails.return.service_tax_amount) > 0 && !ctx_r1.hideGstText);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "\u2002", (ctx_r1.ticketDetails == null ? null : ctx_r1.ticketDetails.return == null ? null : ctx_r1.ticketDetails.return.total_fare) || "-", "");
  }
}
function BookingDetailsPage_ng_container_2_ion_content_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content")(1, "div", 153)(2, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-icon", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Note: Your ticket is in Pending.Please check after sometime.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 157)(7, "ion-button", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_2_ion_content_14_Template_ion_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r64);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Okay");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
}
function BookingDetailsPage_ng_container_2_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_2_div_15_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r65);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.trackBusModal = !ctx_r1.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 16)(2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "This action will require you to download TrackingGo App");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-row")(5, "ion-col", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_2_div_15_Template_ion_col_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r65);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.openTgoBrowser("http://" + ctx_r1.metaData.subdomain + ".trackingo.in/live_track"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "OPEN IN BROWSER");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-col", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_2_div_15_Template_ion_col_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r65);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.openTgoBrowser("https://play.google.com/store/apps/details?id=com.bitla.trackingooperator"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "DOWNLOAD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function BookingDetailsPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-header", 266)(2, "div", 267)(3, "div")(4, "ion-row", 212)(5, "ion-col", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, BookingDetailsPage_ng_container_2_ion_buttons_6_Template, 3, 0, "ion-buttons", 268)(7, BookingDetailsPage_ng_container_2_ion_buttons_7_Template, 3, 0, "ion-buttons", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-col", 269)(9, "p", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Ticket Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-content", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, BookingDetailsPage_ng_container_2_ion_card_12_Template, 107, 44, "ion-card", 272)(13, BookingDetailsPage_ng_container_2_div_13_Template, 101, 26, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, BookingDetailsPage_ng_container_2_ion_content_14_Template, 10, 0, "ion-content", 1)(15, BookingDetailsPage_ng_container_2_div_15_Template, 9, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.redirectToHome);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.redirectToHome);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails != null && !ctx_r1.isRoundTrip && ctx_r1.ticketStatus != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails != null && ctx_r1.isRoundTrip && ctx_r1.ticketStatus != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketStatus == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.trackBusModal);
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_ng_container_1_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r67);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.socialShare("0"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_div_7_ion_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 336);
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_div_7_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 337);
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_div_7_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 338);
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_3_ng_container_1_div_7_ion_icon_1_Template, 1, 0, "ion-icon", 333)(2, BookingDetailsPage_ng_container_3_ng_container_1_div_7_ion_icon_2_Template, 1, 0, "ion-icon", 334)(3, BookingDetailsPage_ng_container_3_ng_container_1_div_7_ion_icon_3_Template, 1, 0, "ion-icon", 335);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const v_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", v_r68.st == "Booked" || v_r68.st == "Confirmed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", v_r68.st == "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", v_r68.st != "Booked" && v_r68.st != "Confirmed" && v_r68.st != "Cancelled");
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Ticket details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Booking confirmed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Booking cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Booking pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const v_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](v_r68.st);
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Loading your ticket\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Your ticket is in pending. Please check after some time.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_div_19_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_div_19_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_3_ng_container_1_div_19_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    const sbTicket_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](21);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", sbTicket_r69)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c7, ctx_r1.ticketDetails));
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_div_19_ng_container_2_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_div_19_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_3_ng_container_1_div_19_ng_container_2_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    const sbTicket_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](21);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", sbTicket_r69)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c8, ctx_r1.ticketDetails.onward));
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_div_19_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_div_19_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_3_ng_container_1_div_19_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    const sbTicket_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](21);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", sbTicket_r69)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c9, ctx_r1.ticketDetails.return));
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_div_19_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_3_ng_container_1_div_19_ng_container_2_ng_container_1_Template, 2, 4, "ng-container", 1)(2, BookingDetailsPage_ng_container_3_ng_container_1_div_19_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return);
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_3_ng_container_1_div_19_ng_container_1_Template, 2, 4, "ng-container", 1)(2, BookingDetailsPage_ng_container_3_ng_container_1_div_19_ng_container_2_Template, 3, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.isRoundTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isRoundTrip);
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_ng_template_20_p_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 363);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const label_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().label;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](label_r70);
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_ng_template_20_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 364);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().t;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, ctx_r1.formatTravelDate(t_r71.travel_date), "EEE, d MMM"));
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_ng_template_20_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 364);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().t;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", t_r71.duration.split(":")[0], "h ", t_r71.duration.split(":")[1], "m");
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_ng_template_20_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 364);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().t;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, ctx_r1.formatTravelDate(t_r71.arr_date), "EEE, d MMM"));
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_ng_template_20_ng_container_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const p_r72 = ctx.$implicit;
    const last_r73 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", p_r72.name == null ? null : p_r72.name.trim(), "", last_r73 ? "" : ", ", "");
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_ng_template_20_div_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "dt", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "dd", 360);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const t_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().t;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](t_r71.payment_method);
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_ng_template_20_button_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 365);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_ng_container_1_ng_template_20_button_64_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r74);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.confirmBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Confirm phone booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_ng_template_20_div_65_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 369);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_ng_container_1_ng_template_20_div_65_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r75);
      const n_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).n;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.downloadticketInvoice(n_r76));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 370);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_ng_template_20_div_65_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 369);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_ng_container_1_ng_template_20_div_65_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r77);
      const n_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).n;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.socialShare(n_r76));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_ng_template_20_div_65_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 371);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_ng_container_1_ng_template_20_div_65_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r78);
      const n_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).n;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToCancel(n_r76));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 372);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_ng_template_20_div_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 366);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_3_ng_container_1_ng_template_20_div_65_button_1_Template, 4, 0, "button", 367)(2, BookingDetailsPage_ng_container_3_ng_container_1_ng_template_20_div_65_button_2_Template, 4, 0, "button", 367)(3, BookingDetailsPage_ng_container_3_ng_container_1_ng_template_20_div_65_button_3_Template, 4, 0, "button", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const t_r71 = ctx_r78.t;
    const n_r76 = ctx_r78.n;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !t_r71.is_e_phone_booking);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", n_r76 != "0" && !t_r71.is_e_phone_booking);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isDateGreaterOrEqual(t_r71.travel_date, ctx_r1.TodayDate));
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, BookingDetailsPage_ng_container_3_ng_container_1_ng_template_20_p_0_Template, 2, 1, "p", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "section", 342)(2, "div", 343)(3, "div")(4, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "PNR");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 346);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 347)(12, "div", 348)(13, "span", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, BookingDetailsPage_ng_container_3_ng_container_1_ng_template_20_span_17_Template, 3, 4, "span", 351);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 352);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "img", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, BookingDetailsPage_ng_container_3_ng_container_1_ng_template_20_span_20_Template, 2, 2, "span", 351);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 354)(22, "span", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "span", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, BookingDetailsPage_ng_container_3_ng_container_1_ng_template_20_span_26_Template, 3, 4, "span", 351);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 355);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "span", 356)(29, "span", 357)(30, "span", 358);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "dl", 359)(32, "div")(33, "dt", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Boarding");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "dd", 360);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div")(38, "dt", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Report by");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "dd", 360);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div")(43, "dt", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "dd", 360);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div")(48, "dt", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "dd", 360);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div")(53, "dt", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Travellers");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "dd", 360);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, BookingDetailsPage_ng_container_3_ng_container_1_ng_template_20_ng_container_56_Template, 2, 2, "ng-container", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div")(58, "dt", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "dd", 360);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](62, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, BookingDetailsPage_ng_container_3_ng_container_1_ng_template_20_div_63_Template, 5, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](64, BookingDetailsPage_ng_container_3_ng_container_1_ng_template_20_button_64_Template, 2, 0, "button", 361)(65, BookingDetailsPage_ng_container_3_ng_container_1_ng_template_20_div_65_Template, 4, 3, "div", 362);
  }
  if (rf & 2) {
    const t_r71 = ctx.t;
    const label_r70 = ctx.label;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", label_r70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", "Ticket " + t_r71.ticket_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](t_r71.ticket_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](29, _c10, t_r71.ticket_status == "Booked" || t_r71.ticket_status == "Confirmed", t_r71.ticket_status == "Cancelled"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](t_r71.ticket_status == "Booked" || t_r71.ticket_status == "Confirmed" ? "Confirmed" : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 24, t_r71.ticket_status));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](t_r71.dep_time || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](t_r71.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", t_r71.travel_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", t_r71.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](t_r71.arr_time || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](t_r71.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", t_r71.arr_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((t_r71.boarding_details == null ? null : t_r71.boarding_details.address) || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((t_r71.boarding_details == null ? null : t_r71.boarding_details.dep_time) || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](t_r71.no_of_seats == 1 ? "Berth" : "Berths");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](t_r71.seat_numbers || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](t_r71.bus_type ? t_r71.bus_type.split(",").join(" ").split(" ").join(" ").trim() : "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", t_r71.passenger_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](t_r71.is_e_phone_booking ? "Amount" : "Paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](62, 26, t_r71.total_fare, "1.0-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", t_r71.payment_method);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", t_r71.is_e_phone_booking && t_r71.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", t_r71.ticket_status != "Cancelled");
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_ion_footer_22_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 376);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_ng_container_1_ion_footer_22_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r80);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Book return");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_ion_footer_22_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 377);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_ng_container_1_ion_footer_22_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r81);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.trackBusModal = !ctx_r1.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 378);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Track bus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_ion_footer_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-footer", 373);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_3_ng_container_1_ion_footer_22_button_1_Template, 2, 0, "button", 374)(2, BookingDetailsPage_ng_container_3_ng_container_1_ion_footer_22_button_2_Template, 3, 0, "button", 375);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const v_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.newBooking == true || ctx_r1.newBooking == "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", v_r68.st != "Pending" && v_r68.st != "Cancelled");
  }
}
function BookingDetailsPage_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-content", 319)(2, "div", 320)(3, "div", 321)(4, "button", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_ng_container_1_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r66);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.cancelTicketDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "ion-icon", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, BookingDetailsPage_ng_container_3_ng_container_1_button_6_Template, 2, 0, "button", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, BookingDetailsPage_ng_container_3_ng_container_1_div_7_Template, 4, 3, "div", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "h1", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, BookingDetailsPage_ng_container_3_ng_container_1_ng_container_9_Template, 2, 0, "ng-container", 1)(10, BookingDetailsPage_ng_container_3_ng_container_1_ng_container_10_Template, 2, 0, "ng-container", 1)(11, BookingDetailsPage_ng_container_3_ng_container_1_ng_container_11_Template, 2, 0, "ng-container", 1)(12, BookingDetailsPage_ng_container_3_ng_container_1_ng_container_12_Template, 2, 0, "ng-container", 1)(13, BookingDetailsPage_ng_container_3_ng_container_1_ng_container_13_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "p", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, BookingDetailsPage_ng_container_3_ng_container_1_ng_container_15_Template, 2, 0, "ng-container", 1)(16, BookingDetailsPage_ng_container_3_ng_container_1_ng_container_16_Template, 2, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "E-ticket sent to E-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, BookingDetailsPage_ng_container_3_ng_container_1_div_19_Template, 3, 2, "div", 328)(20, BookingDetailsPage_ng_container_3_ng_container_1_ng_template_20_Template, 66, 32, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, BookingDetailsPage_ng_container_3_ng_container_1_ion_footer_22_Template, 3, 2, "ion-footer", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const v_r68 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fullscreen", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](13, _c6, v_r68.st == "Booked" || v_r68.st == "Confirmed", v_r68.st == "Cancelled", v_r68.st && v_r68.st != "Booked" && v_r68.st != "Confirmed" && v_r68.st != "Cancelled"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails && !ctx_r1.isRoundTrip && v_r68.st != "Cancelled" && v_r68.st != "Pending" && (ctx_r1.ticketDetails.sharing_pdf_link || ctx_r1.ticketDetails.sharing_pdf_link_ios));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", v_r68.st);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !v_r68.st);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", v_r68.st == "Booked" || v_r68.st == "Confirmed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", v_r68.st == "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", v_r68.st == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", v_r68.st && v_r68.st != "Booked" && v_r68.st != "Confirmed" && v_r68.st != "Cancelled" && v_r68.st != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !v_r68.st);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", v_r68.st == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails && v_r68.st != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", v_r68.st && v_r68.st != "Cancelled");
  }
}
function BookingDetailsPage_ng_container_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 379);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r82);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.trackBusModal = !ctx_r1.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 380);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_div_2_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r82);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 381)(3, "button", 382);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_div_2_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r82);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.trackBusModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-icon", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 383);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ion-icon", 384);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h2", 385);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "This action will require you to download TrackingGo App");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 386)(10, "button", 387);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_div_2_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r82);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      ctx_r1.openTgoBrowser("http://" + ctx_r1.metaData.subdomain + ".trackingo.in/live_track");
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.trackBusModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Open in browser");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 388);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_div_2_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r82);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      ctx_r1.openTgoBrowser("https://play.google.com/store/apps/details?id=com.bitla.trackingooperator");
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.trackBusModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function BookingDetailsPage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_3_ng_container_1_Template, 23, 17, "ng-container", 1)(2, BookingDetailsPage_ng_container_3_div_2_Template, 14, 0, "div", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c5, ctx_r1.ticketStatus || (ctx_r1.ticketDetails == null ? null : ctx_r1.ticketDetails.onward == null ? null : ctx_r1.ticketDetails.onward.ticket_status) || ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.trackBusModal);
  }
}
function BookingDetailsPage_ng_container_4_ion_back_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-back-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_4_ion_back_button_4_Template_ion_back_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r83);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_4_ion_back_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-back-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_4_ion_back_button_5_Template_ion_back_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r84);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToMorePage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_4_ion_back_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-back-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_4_ion_back_button_6_Template_ion_back_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r85);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_4_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 396);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", ctx_r1.bookingDetails.origin ? ctx_r1.bookingDetails.origin : ctx_r1.ticketDetails && ctx_r1.ticketDetails.origin ? ctx_r1.ticketDetails.origin : "", "-", ctx_r1.bookingDetails.destination ? ctx_r1.bookingDetails.destination : ctx_r1.ticketDetails && ctx_r1.ticketDetails.destination ? ctx_r1.ticketDetails.destination : "", " ");
  }
}
function BookingDetailsPage_ng_container_4_ion_title_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-title", 397);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Ticket Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_4_p_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 398);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_4_p_9_Template_p_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r86);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.trackBusModal = !ctx_r1.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Track Bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_4_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 399);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails && ctx_r1.ticketDetails.travel_date ? ctx_r1.changeDateFormat(ctx_r1.ticketDetails.travel_date) : "");
  }
}
function BookingDetailsPage_ng_container_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_4_div_11_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r87);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.trackBusModal = !ctx_r1.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 16)(2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "This action will require you to download TrackingGo App");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-row")(5, "ion-col", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_4_div_11_Template_ion_col_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r87);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.openTgoBrowser("http://" + ctx_r1.metaData.subdomain + ".trackingo.in/live_track"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "OPEN IN BROWSER");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-col", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_4_div_11_Template_ion_col_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r87);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.openTgoBrowser("https://play.google.com/store/apps/details?id=com.bitla.trackingooperator"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "DOWNLOAD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function BookingDetailsPage_ng_container_4_ion_content_12_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_4_ion_content_12_div_3_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r88);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.ticketInvoice());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_4_ion_content_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 232);
  }
}
function BookingDetailsPage_ng_container_4_ion_content_12_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 431);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_4_ion_content_12_div_6_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r89);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.taxInvoice());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 432);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Tax invoice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_4_ion_content_12_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 433);
  }
}
function BookingDetailsPage_ng_container_4_ion_content_12_span_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 434);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_4_ion_content_12_span_20_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r90);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.gotoMap(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Locate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_4_ion_content_12_span_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 434);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_4_ion_content_12_span_33_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r91);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.gotoMap(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Locate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_4_ion_content_12_div_48_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 419)(1, "div", 420)(2, "div", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 436);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 437)(7, "div", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const passenger_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](passenger_r92.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.ticket_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Seat ", passenger_r92.seat_number, "");
  }
}
function BookingDetailsPage_ng_container_4_ion_content_12_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_4_ion_content_12_div_48_div_1_Template, 9, 3, "div", 435);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const passenger_r92 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", passenger_r92.ticket_status != "Cancelled");
  }
}
function BookingDetailsPage_ng_container_4_ion_content_12_span_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Bus No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_4_ion_content_12_span_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.bus_number);
  }
}
function BookingDetailsPage_ng_container_4_ion_content_12_span_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "(Inc. Taxes)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_4_ion_content_12_ion_button_104_Template(rf, ctx) {
  if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-button", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_4_ion_content_12_ion_button_104_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r93);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.confirmBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Confirm Phone Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_4_ion_content_12_ion_row_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 438)(1, "ion-col", 439)(2, "ion-button", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_4_ion_content_12_ion_row_105_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r94);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToCancel("0"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 440);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Cancel Booking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-col", 439)(7, "ion-button", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_4_ion_content_12_ion_row_105_Template_ion_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r94);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToUpdate("0"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 440);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Update Booking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_4_ion_content_12_ion_row_106_ion_col_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 439)(1, "ion-button", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_4_ion_content_12_ion_row_106_ion_col_6_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r96);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.gotoMyBookings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 440);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "View My Bookings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_4_ion_content_12_ion_row_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 438)(1, "ion-col", 439)(2, "ion-button", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_4_ion_content_12_ion_row_106_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r95);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.gotoHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 440);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Book Another Ticket ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, BookingDetailsPage_ng_container_4_ion_content_12_ion_row_106_ion_col_6_Template, 5, 0, "ion-col", 441);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.auth.isLoggedIn());
  }
}
function BookingDetailsPage_ng_container_4_ion_content_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content", 400)(1, "ion-row")(2, "ion-col", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, BookingDetailsPage_ng_container_4_ion_content_12_div_3_Template, 4, 0, "div", 188)(4, BookingDetailsPage_ng_container_4_ion_content_12_div_4_Template, 1, 0, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-col", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, BookingDetailsPage_ng_container_4_ion_content_12_div_6_Template, 4, 0, "div", 401)(7, BookingDetailsPage_ng_container_4_ion_content_12_div_7_Template, 1, 0, "div", 402);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-item", 403)(9, "div", 404)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " Boarding / Dropping point details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 405)(13, "div", 406)(14, "ul")(15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 407)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, BookingDetailsPage_ng_container_4_ion_content_12_span_20_Template, 2, 0, "span", 408);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 409);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 410);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 411)(26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 407)(31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, BookingDetailsPage_ng_container_4_ion_content_12_span_33_Template, 2, 0, "span", 408);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 409);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 410);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 411)(39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 412)(42, "ion-item", 403)(43, "div", 404)(44, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, " Passenger details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, " PNR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, BookingDetailsPage_ng_container_4_ion_content_12_div_48_Template, 2, 1, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div")(50, "ion-row", 413)(51, "ion-col", 414)(52, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Bus details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "ion-col", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, BookingDetailsPage_ng_container_4_ion_content_12_span_55_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "ion-col", 415)(57, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Service No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "ion-card", 416)(60, "ion-row", 417)(61, "ion-col", 414)(62, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "ion-col", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](65, BookingDetailsPage_ng_container_4_ion_content_12_span_65_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "ion-col", 415)(67, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "ion-item", 403)(70, "div", 404)(71, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, " Contact details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "div", 418)(74, "div", 419)(75, "div", 420)(76, "div", 421);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 422)(79, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "div", 420)(82, "div", 423);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "Mobile number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 424)(85, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 420)(88, "div", 425);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "div", 426)(91, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](93, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "div", 418)(95, "div", 419)(96, "div", 420)(97, "div", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, "Fare ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](99, BookingDetailsPage_ng_container_4_ion_content_12_span_99_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "div")(101, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "div", 427);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](104, BookingDetailsPage_ng_container_4_ion_content_12_ion_button_104_Template, 3, 0, "ion-button", 428);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](105, BookingDetailsPage_ng_container_4_ion_content_12_ion_row_105_Template, 11, 0, "ion-row", 429)(106, BookingDetailsPage_ng_container_4_ion_content_12_ion_row_106_Template, 7, 1, "ion-row", 429);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fullscreen", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.ticket_status == "Booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.ticket_status == "Booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.ticket_status != "Cancelled" && ctx_r1.ticketDetails.ticket_status != "Wallet Phone Booking" && ctx_r1.isVisibleTaxInvoice);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.ticket_status != "Cancelled" && ctx_r1.ticketDetails.ticket_status != "Wallet Phone Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.hideLocateTrackBus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r1.ticketDetails.boarding_details.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.boarding_details.pickup_address);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.boarding_details.dep_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.hideLocateTrackBus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.drop_off_details ? ctx_r1.ticketDetails.drop_off_details.address : "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.drop_off_details.dropoff_address);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.drop_off_details ? ctx_r1.ticketDetails.drop_off_details.arr_time : "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.ticketDetails.passenger_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_coach_number_in_public_side_search_result);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_coach_number_in_public_side_search_result);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.service_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.passenger_details[0].name ? ctx_r1.ticketDetails.passenger_details[0].name : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.passenger_details[0].mobile ? ctx_r1.getMobileNumber(ctx_r1.ticketDetails.passenger_details[0].mobile) : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.passenger_details[0].email ? ctx_r1.ticketDetails.passenger_details[0].email : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.serviceTaxAmount > 0 && !ctx_r1.hideGstText);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "\u2002", ctx_r1.fare, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.is_e_phone_booking && ctx_r1.ticketDetails.ticket_status !== "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.is_e_phone_booking && ctx_r1.ticketDetails.ticket_status !== "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.newBooking || ctx_r1.newBooking == undefined || ctx_r1.newBooking == null || ctx_r1.newBooking == "");
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_4_ion_content_13_div_11_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r97);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.ticketInvoiceOnWards());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 232);
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_ion_col_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 431);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_4_ion_content_13_ion_col_13_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r98);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.taxInvoiceOnWards());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 432);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Tax invoice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_ion_col_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 232);
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_ion_col_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_4_ion_content_13_ion_col_13_div_1_Template, 4, 0, "div", 401)(2, BookingDetailsPage_ng_container_4_ion_content_13_ion_col_13_div_2_Template, 1, 0, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.ticket_status != "Wallet Phone Booking" && ctx_r1.isVisibleTaxInvoice);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.ticket_status != "Wallet Phone Booking");
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_div_18_span_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 434);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_4_ion_content_13_div_18_span_8_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r99);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.gotoMap(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Locate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_div_18_span_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 434);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_4_ion_content_13_div_18_span_19_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r100);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.gotoMap(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Locate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 405)(1, "div", 406)(2, "ul")(3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 448)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, BookingDetailsPage_ng_container_4_ion_content_13_div_18_span_8_Template, 2, 0, "span", 408);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 409);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 411)(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 448)(17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, BookingDetailsPage_ng_container_4_ion_content_13_div_18_span_19_Template, 2, 0, "span", 408);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 409);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 411)(23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.hideLocateTrackBus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r1.ticketDetails.onward.boarding_details.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.boarding_details.dep_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.hideLocateTrackBus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.onward.drop_off_details ? ctx_r1.ticketDetails.onward.drop_off_details.address : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.drop_off_details ? ctx_r1.ticketDetails.onward.drop_off_details.arr_time : "NA");
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_div_25_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 419)(1, "div", 420)(2, "div", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 436);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 437)(7, "div", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const passenger_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](passenger_r101.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.ticket_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Seat ", passenger_r101.seat_number, "");
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_4_ion_content_13_div_25_div_1_div_1_Template, 9, 3, "div", 435);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const passenger_r101 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", passenger_r101.ticket_status != "Cancelled");
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_4_ion_content_13_div_25_div_1_Template, 2, 1, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.ticketDetails.onward.passenger_details);
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Bus No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_span_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.bus_number);
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_ng_container_50_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "(Inc. Taxes)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_ng_container_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 418)(2, "div", 419)(3, "div", 420)(4, "div", 421);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 422)(7, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 420)(10, "div", 423);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Mobile number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 424)(13, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 420)(16, "div", 425);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 426)(19, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 418)(22, "div", 419)(23, "div", 420)(24, "div", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Fare ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, BookingDetailsPage_ng_container_4_ion_content_13_ng_container_50_span_26_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div")(28, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails ? ctx_r1.ticketDetails.onward.passenger_details[0].name : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails ? ctx_r1.ticketDetails.onward.passenger_details[0].mobile : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails && ctx_r1.ticketDetails.onward.passenger_details ? ctx_r1.ticketDetails.onward.passenger_details[0].email : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r1.ticketDetails == null ? null : ctx_r1.ticketDetails.onward == null ? null : ctx_r1.ticketDetails.onward.service_tax_amount) > 0 && !ctx_r1.hideGstText);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", ctx_r1.ticketDetails.onward && ctx_r1.ticketDetails.onward ? ctx_r1.ticketDetails.onward.total_fare : ctx_r1.ticketDetails.onward.ticket_fare, "");
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_4_ion_content_13_div_61_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r102);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.ticketInvoicereturn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 232);
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_ion_col_63_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 431);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_4_ion_content_13_ion_col_63_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r103);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.taxInvoiceReturn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 432);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Tax invoice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_ion_col_63_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 232);
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_ion_col_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_4_ion_content_13_ion_col_63_div_1_Template, 4, 0, "div", 401)(2, BookingDetailsPage_ng_container_4_ion_content_13_ion_col_63_div_2_Template, 1, 0, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.ticket_status != "Wallet Phone Booking" && ctx_r1.isVisibleTaxInvoice);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.ticket_status != "Wallet Phone Booking");
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_div_68_span_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 434);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_4_ion_content_13_div_68_span_8_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r104);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.gotoMap(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Locate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_div_68_span_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 434);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_4_ion_content_13_div_68_span_19_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r105);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.gotoMap(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Locate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_div_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 405)(1, "div", 406)(2, "ul")(3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 448)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, BookingDetailsPage_ng_container_4_ion_content_13_div_68_span_8_Template, 2, 0, "span", 408);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 409);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 411)(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 448)(17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, BookingDetailsPage_ng_container_4_ion_content_13_div_68_span_19_Template, 2, 0, "span", 408);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 409);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 411)(23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.hideLocateTrackBus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r1.ticketDetails.return.boarding_details.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.boarding_details.dep_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.hideLocateTrackBus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.return.drop_off_details ? ctx_r1.ticketDetails.return.drop_off_details.address : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.drop_off_details ? ctx_r1.ticketDetails.return.drop_off_details.arr_time : "NA");
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_div_75_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 419)(1, "div", 420)(2, "div", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 436);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 437)(7, "div", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const passenger_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](passenger_r106.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.ticket_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Seat ", passenger_r106.seat_number, "");
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_div_75_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_4_ion_content_13_div_75_div_1_div_1_Template, 9, 3, "div", 435);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const passenger_r106 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", passenger_r106.ticket_status != "Cancelled");
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_div_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_4_ion_content_13_div_75_div_1_Template, 2, 1, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.ticketDetails.return.passenger_details);
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_span_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Bus No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_span_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.bus_number);
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_ng_container_100_div_2_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "(Inc. Taxes)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_ng_container_100_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 419)(1, "div", 420)(2, "div", 421);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 422)(5, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 420)(8, "div", 423);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Mobile number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 424)(11, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 420)(14, "div", 425);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 426)(17, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 420)(20, "div", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Fare ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, BookingDetailsPage_ng_container_4_ion_content_13_ng_container_100_div_2_span_22_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div")(24, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const passenger_r107 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails && ctx_r1.ticketDetails.return.passenger_details ? ctx_r1.ticketDetails.return.passenger_details[0].name : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails && ctx_r1.ticketDetails.return.passenger_details ? ctx_r1.ticketDetails.return.passenger_details[0].mobile : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails && ctx_r1.ticketDetails.return.passenger_details ? ctx_r1.ticketDetails.return.passenger_details[0].email : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r1.ticketDetails == null ? null : ctx_r1.ticketDetails.return == null ? null : ctx_r1.ticketDetails.return.service_tax_amount) > 0 && !ctx_r1.hideGstText);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", passenger_r107 && ctx_r1.ticketDetails.return.total_fare ? ctx_r1.ticketDetails.return.total_fare : ctx_r1.ticketDetails.return.ticket_fare, "");
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_ng_container_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 418);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, BookingDetailsPage_ng_container_4_ion_content_13_ng_container_100_div_2_Template, 26, 6, "div", 449);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.ticketDetails.return.passenger_details);
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_ion_row_101_ion_col_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 439)(1, "ion-button", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_4_ion_content_13_ion_row_101_ion_col_6_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r109);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.gotoMyBookings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 440);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "View My Bookings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_ion_row_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 438)(1, "ion-col", 439)(2, "ion-button", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_4_ion_content_13_ion_row_101_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r108);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.gotoHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 440);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Book Another Ticket ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, BookingDetailsPage_ng_container_4_ion_content_13_ion_row_101_ion_col_6_Template, 5, 0, "ion-col", 441);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.auth.isLoggedIn());
  }
}
function BookingDetailsPage_ng_container_4_ion_content_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content", 400)(1, "div", 442)(2, "ion-item", 403)(3, "div", 443)(4, "span")(5, "div", 444);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Onward Journey");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-row")(10, "ion-col", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, BookingDetailsPage_ng_container_4_ion_content_13_div_11_Template, 4, 0, "div", 188)(12, BookingDetailsPage_ng_container_4_ion_content_13_div_12_Template, 1, 0, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, BookingDetailsPage_ng_container_4_ion_content_13_ion_col_13_Template, 3, 2, "ion-col", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-item", 403)(15, "div", 404)(16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " Boarding / Dropping point details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, BookingDetailsPage_ng_container_4_ion_content_13_div_18_Template, 25, 8, "div", 445);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "ion-item", 403)(20, "div", 404)(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Passenger details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " PNR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, BookingDetailsPage_ng_container_4_ion_content_13_div_25_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div")(27, "ion-row", 413)(28, "ion-col", 414)(29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Bus details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "ion-col", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, BookingDetailsPage_ng_container_4_ion_content_13_span_32_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "ion-col", 415)(34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Service No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "ion-card", 416)(37, "ion-row", 417)(38, "ion-col", 414)(39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "ion-col", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, BookingDetailsPage_ng_container_4_ion_content_13_span_42_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "ion-col", 415)(44, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "ion-item", 403)(47, "div", 404)(48, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, " Contact details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, BookingDetailsPage_ng_container_4_ion_content_13_ng_container_50_Template, 30, 6, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 446)(52, "ion-item", 403)(53, "div", 443)(54, "span")(55, "div", 444);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, " Return Journey");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "ion-row")(60, "ion-col", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](61, BookingDetailsPage_ng_container_4_ion_content_13_div_61_Template, 4, 0, "div", 188)(62, BookingDetailsPage_ng_container_4_ion_content_13_div_62_Template, 1, 0, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, BookingDetailsPage_ng_container_4_ion_content_13_ion_col_63_Template, 3, 2, "ion-col", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "ion-item", 447)(65, "div", 404)(66, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, " Boarding / Dropping point details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, BookingDetailsPage_ng_container_4_ion_content_13_div_68_Template, 25, 8, "div", 445);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "ion-item", 403)(70, "div", 404)(71, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, " Passenger details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, " PNR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](75, BookingDetailsPage_ng_container_4_ion_content_13_div_75_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div")(77, "ion-row", 413)(78, "ion-col", 414)(79, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, "Bus details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "ion-col", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](82, BookingDetailsPage_ng_container_4_ion_content_13_span_82_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "ion-col", 415)(84, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "Service No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "ion-card", 416)(87, "ion-row", 417)(88, "ion-col", 414)(89, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "ion-col", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](92, BookingDetailsPage_ng_container_4_ion_content_13_span_92_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "ion-col", 415)(94, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "ion-item", 403)(97, "div", 404)(98, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99, " Contact details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](100, BookingDetailsPage_ng_container_4_ion_content_13_ng_container_100_Template, 3, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](101, BookingDetailsPage_ng_container_4_ion_content_13_ion_row_101_Template, 7, 1, "ion-row", 429);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fullscreen", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r1.changeDateFormat(ctx_r1.ticketDetails.onward.travel_date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.ticket_status == "Booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.ticket_status == "Booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.newBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.passenger_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_coach_number_in_public_side_search_result);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_coach_number_in_public_side_search_result);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.service_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r1.changeDateFormat(ctx_r1.ticketDetails.return.travel_date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.ticket_status == "Booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.ticket_status == "Booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.newBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.passenger_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_coach_number_in_public_side_search_result);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_coach_number_in_public_side_search_result);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.service_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.passenger_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.newBooking);
  }
}
function BookingDetailsPage_ng_container_4_ion_content_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content", 450)(1, "div", 153)(2, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-icon", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Note: Your ticket is in Pending.Please check after sometime.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 157)(7, "ion-button", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_4_ion_content_14_Template_ion_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r110);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Okay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fullscreen", true);
  }
}
function BookingDetailsPage_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-header", 2)(2, "ion-toolbar", 9)(3, "ion-buttons", 389);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, BookingDetailsPage_ng_container_4_ion_back_button_4_Template, 1, 0, "ion-back-button", 5)(5, BookingDetailsPage_ng_container_4_ion_back_button_5_Template, 1, 0, "ion-back-button", 5)(6, BookingDetailsPage_ng_container_4_ion_back_button_6_Template, 1, 0, "ion-back-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, BookingDetailsPage_ng_container_4_p_7_Template, 2, 2, "p", 390)(8, BookingDetailsPage_ng_container_4_ion_title_8_Template, 2, 0, "ion-title", 391)(9, BookingDetailsPage_ng_container_4_p_9_Template, 2, 0, "p", 392)(10, BookingDetailsPage_ng_container_4_p_10_Template, 2, 1, "p", 393);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, BookingDetailsPage_ng_container_4_div_11_Template, 9, 0, "div", 11)(12, BookingDetailsPage_ng_container_4_ion_content_12_Template, 107, 29, "ion-content", 394)(13, BookingDetailsPage_ng_container_4_ion_content_13_Template, 102, 24, "ion-content", 394)(14, BookingDetailsPage_ng_container_4_ion_content_14_Template, 11, 1, "ion-content", 395);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("translucent", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](13, _c11, ctx_r1.isRoundTrip, !ctx_r1.isRoundTrip));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.newBooking == true || ctx_r1.newBooking == "true" || ctx_r1.newBooking == undefined || ctx_r1.newBooking == null || ctx_r1.newBooking == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r1.newBooking == false || ctx_r1.newBooking == "false") && !ctx_r1.redirectToHome);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.redirectToHome);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.isRoundTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isRoundTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.isRoundTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.isRoundTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.trackBusModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails != null && !ctx_r1.isRoundTrip && ctx_r1.ticketStatus != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails != null && ctx_r1.isRoundTrip && ctx_r1.ticketStatus != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketStatus == "Pending");
  }
}
function BookingDetailsPage_ng_container_5_ion_back_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-back-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_back_button_4_Template_ion_back_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r111);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_5_ion_back_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-back-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_back_button_5_Template_ion_back_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r112);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToMorePage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_5_ion_back_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-back-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_back_button_6_Template_ion_back_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r113);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_5_ion_title_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-title", 456);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "View Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_5_ion_title_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-title", 456);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "View Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_5_ion_title_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-title", 456);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Cancelled Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_5_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_div_10_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r114);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.trackBusModal = !ctx_r1.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 16)(2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "This action will require you to download TrackingGo App");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-row")(5, "ion-col", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_div_10_Template_ion_col_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r114);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.openTgoBrowser("http://" + ctx_r1.metaData.subdomain + ".trackingo.in/live_track"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "OPEN IN BROWSER");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-col", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_div_10_Template_ion_col_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r114);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.openTgoBrowser("https://play.google.com/store/apps/details?id=com.bitla.trackingooperator"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "DOWNLOAD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function BookingDetailsPage_ng_container_5_ion_content_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 516);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_content_11_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r116);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.copyCode(ctx_r1.ticketDetails.ticket_number));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 517)(3, "h2", 518);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-icon", 519)(5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Your tickets have been booked! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 520)(9, "span", 521);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "ion-icon", 522);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" PNR: ", ctx_r1.ticketDetails.ticket_number, "");
  }
}
function BookingDetailsPage_ng_container_5_ion_content_11_ion_row_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 523)(1, "ion-col", 203)(2, "div", 524);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " \u2B50 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-col", 269)(5, "div", 525);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 526);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" +", ctx_r1.ticketDetails.earned_smart_points, " points earned! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Points will be credited after your journey completes on ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](9, 2, ctx_r1.formatTravelDate(ctx_r1.ticketDetails == null ? null : ctx_r1.ticketDetails.travel_date), "dd-MMM-yyyy"), ". ");
  }
}
function BookingDetailsPage_ng_container_5_ion_content_11_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 527)(1, "ion-row", 528);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-icon", 529);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 530);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "This ticket is cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_5_ion_content_11_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 531);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_content_11_div_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r117);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.copyCode(ctx_r1.bookingDetails.pnr_number || ctx_r1.bookingDetails.ticket_number || ctx_r1.bookingDetails.pnrNumber));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 532)(3, "div", 533)(4, "h2", 534)(5, "span", 535);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 536);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ion-icon", 537);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" PNR: ", ctx_r1.ticketDetails.ticket_number, "");
  }
}
function BookingDetailsPage_ng_container_5_ion_content_11_div_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 538)(1, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 539);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const p_r118 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", p_r118.name, " (", p_r118.gender, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](p_r118.seat_number);
  }
}
function BookingDetailsPage_ng_container_5_ion_content_11_div_95_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_content_11_div_95_ion_row_1_Template_ion_row_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r119);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.trackBusModal = !ctx_r1.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-col", 465)(2, "h2", 541);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Track My Bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-col", 542)(5, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ion-icon", 543);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_5_ion_content_11_div_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 540);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_5_ion_content_11_div_95_ion_row_1_Template, 7, 0, "ion-row", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.ticketDetails.is_e_phone_booking && ctx_r1.isPastDate(ctx_r1.ticketDetails.travel_date) != true && ctx_r1.ticketDetails.ticket_status != "Cancelled");
  }
}
function BookingDetailsPage_ng_container_5_ion_content_11_ion_col_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 462)(1, "ion-button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_content_11_ion_col_98_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r120);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.confirmBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Confirm Phone Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "cbus_btn" : "theme1_btn");
  }
}
function BookingDetailsPage_ng_container_5_ion_content_11_ion_col_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 544)(1, "ion-row", 112)(2, "ion-col", 545)(3, "a", 113)(4, "h4", 546);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Bus Operator Contact Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h4", 43)(7, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-col", 547)(10, "a", 113)(11, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "svg", 118)(13, "g", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "path", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "defs")(16, "clipPath", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "rect", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", "tel:" + ctx_r1.ticketDetails.boarding_details.contact_numbers, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.boarding_details.contact_numbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", "tel:" + ctx_r1.ticketDetails.boarding_details.contact_numbers, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function BookingDetailsPage_ng_container_5_ion_content_11_ion_col_112_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 73)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Cash coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_5_ion_content_11_ion_col_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 505)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails.cash_coupon.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_5_ion_content_11_ion_col_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 504)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Tax");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_5_ion_content_11_ion_col_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 505)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails.service_tax_amount.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_5_ion_content_11_ion_col_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 504)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.fareBreakupDetails && ctx_r1.fareBreakupDetails.offer_discount != 0 ? "Offer Discount" : ctx_r1.fareBreakupDetails && ctx_r1.fareBreakupDetails.ebooking_discount != 0 ? "E-Booking Discount" : ctx_r1.fareBreakupDetails && ctx_r1.fareBreakupDetails.previous_pnr_discount != 0 ? "Previous Pnr Discount" : ctx_r1.fareBreakupDetails && ctx_r1.fareBreakupDetails.privilege_card_discount != 0 ? "Privilege Card Discount" : "Discount", " ");
  }
}
function BookingDetailsPage_ng_container_5_ion_content_11_ion_col_117_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 505)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, " ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 2, ctx_r1.fareBreakupDetails ? (ctx_r1.fareBreakupDetails.offer_discount ? ctx_r1.fareBreakupDetails.offer_discount : 0) + (ctx_r1.fareBreakupDetails.ebooking_discount ? ctx_r1.fareBreakupDetails.ebooking_discount : 0) + (ctx_r1.fareBreakupDetails.previous_pnr_discount ? ctx_r1.fareBreakupDetails.previous_pnr_discount : 0) + (ctx_r1.fareBreakupDetails.privilege_card_discount ? ctx_r1.fareBreakupDetails.privilege_card_discount : 0) : 0, "1.1-1"), " ");
  }
}
function BookingDetailsPage_ng_container_5_ion_content_11_ion_col_118_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 504)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Transaction Charge");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_5_ion_content_11_ion_col_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 505)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails.transaction_charges.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_5_ion_content_11_ion_col_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 504)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "CC Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_5_ion_content_11_ion_col_121_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 505)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails.cc_charges.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_5_ion_content_11_ion_col_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 504)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Promotional Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_5_ion_content_11_ion_col_123_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 505)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails.usable_promotional_balance.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_5_ion_content_11_ion_col_124_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 504)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Wallet Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_5_ion_content_11_ion_col_125_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 505)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails.wallet_balance.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_5_ion_content_11_ion_col_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 20)(1, "div", 548)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Points discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 549);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("\u2212\u20B9", ctx_r1.ticketDetails.discounted_smart_point, " (", ctx_r1.ticketDetails.discounted_smart_point, " pts)");
  }
}
function BookingDetailsPage_ng_container_5_ion_content_11_ion_col_133_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 20)(1, "div", 548)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Points to earn");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 550);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("+", ctx_r1.ticketDetails.earned_smart_points, " pts (after trip)");
  }
}
function BookingDetailsPage_ng_container_5_ion_content_11_ion_col_136_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 45)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_5_ion_content_11_ion_col_137_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 45)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.transaction_id);
  }
}
function BookingDetailsPage_ng_container_5_ion_content_11_ion_col_141_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 551)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.payment_method ? ctx_r1.ticketDetails.payment_method : "-");
  }
}
function BookingDetailsPage_ng_container_5_ion_content_11_div_149_Template(rf, ctx) {
  if (rf & 1) {
    const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 552)(1, "ion-grid")(2, "ion-row", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_content_11_div_149_Template_ion_row_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r121);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToUpdate("0"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-col", 41)(4, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Modify Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-row", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_content_11_div_149_Template_ion_row_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r121);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToCancel("0"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-col", 41)(10, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Cancel Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-row", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_content_11_div_149_Template_ion_row_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r121);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.gotocontactsupport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "ion-col", 41)(16, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Contact Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "edit-ticket" : "edit-ticket-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "edit-ticket" : "edit-ticket-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "edit-ticket" : "edit-ticket-2");
  }
}
function BookingDetailsPage_ng_container_5_ion_content_11_div_150_Template(rf, ctx) {
  if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 552)(1, "ion-grid")(2, "ion-row", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_content_11_div_150_Template_ion_row_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r122);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.gotocontactsupport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-col", 41)(4, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Contact Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "edit-ticket" : "edit-ticket-2");
  }
}
function BookingDetailsPage_ng_container_5_ion_content_11_ion_row_152_Template(rf, ctx) {
  if (rf & 1) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 553)(1, "ion-col", 554)(2, "ion-button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_content_11_ion_row_152_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r123);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.downloadticketInvoice("0"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Download Ticket ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-icon", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-col", 555)(6, "ion-button", 556);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_content_11_ion_row_152_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r123);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.socialShare("0"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "ion-icon", 557);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_5_ion_content_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content", 457);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_5_ion_content_11_div_1_Template, 12, 1, "div", 458)(2, BookingDetailsPage_ng_container_5_ion_content_11_ion_row_2_Template, 10, 5, "ion-row", 459)(3, BookingDetailsPage_ng_container_5_ion_content_11_div_3_Template, 5, 0, "div", 460)(4, BookingDetailsPage_ng_container_5_ion_content_11_div_4_Template, 9, 1, "div", 461);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-grid")(6, "ion-row")(7, "ion-col", 462)(8, "div")(9, "div", 463)(10, "ion-row", 464)(11, "ion-col", 465);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "img", 466);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ion-col", 467)(14, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "ion-row", 468)(19, "ion-col", 22)(20, "h2", 469);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "h2", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "ion-col", 24)(26, "h2", 469);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](28, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "ion-col", 22)(30, "p", 470);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "ion-col", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "ion-col", 22)(34, "p", 470);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "ion-col", 22)(37, "h2", 471);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "ion-col", 472)(40, "div", 473);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "ion-icon", 474);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "h3", 475);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "ion-col", 24)(45, "h2", 471);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "ion-col", 22)(48, "p", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Depart");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "ion-col", 22)(53, "p", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Arrive");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "ion-row", 476)(56, "ion-col", 477);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "img", 478);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "ion-col", 479)(59, "h2", 480);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "p", 481);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "ion-row", 482)(64, "ion-col", 483);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](65, "ion-icon", 484);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "ion-col", 485)(67, "h4", 486);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Pickup Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "p")(70, "span", 487);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "span", 487);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "ion-col", 488);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](75, "ion-icon", 489);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "ion-col", 490)(77, "h4", 486);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, "Drop Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "p")(80, "span", 487);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "span", 487);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div")(85, "ion-card", 9)(86, "ion-card-content", 491)(87, "h2", 492);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "div", 493)(90, "span", 494);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "span", 494);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](93, "Seat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](94, BookingDetailsPage_ng_container_5_ion_content_11_div_94_Template, 5, 3, "div", 495)(95, BookingDetailsPage_ng_container_5_ion_content_11_div_95_Template, 2, 1, "div", 496);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "div", 497)(97, "ion-row", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](98, BookingDetailsPage_ng_container_5_ion_content_11_ion_col_98_Template, 4, 1, "ion-col", 498)(99, BookingDetailsPage_ng_container_5_ion_content_11_ion_col_99_Template, 18, 3, "ion-col", 499);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "div", 497)(101, "ion-grid", 500)(102, "ion-row", 501)(103, "ion-col", 502)(104, "h2", 503);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105, "Payment Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "ion-col", 504)(107, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, "Base Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "ion-col", 505)(110, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](112, BookingDetailsPage_ng_container_5_ion_content_11_ion_col_112_Template, 3, 0, "ion-col", 77)(113, BookingDetailsPage_ng_container_5_ion_content_11_ion_col_113_Template, 3, 1, "ion-col", 506)(114, BookingDetailsPage_ng_container_5_ion_content_11_ion_col_114_Template, 3, 0, "ion-col", 507)(115, BookingDetailsPage_ng_container_5_ion_content_11_ion_col_115_Template, 3, 1, "ion-col", 506)(116, BookingDetailsPage_ng_container_5_ion_content_11_ion_col_116_Template, 3, 1, "ion-col", 507)(117, BookingDetailsPage_ng_container_5_ion_content_11_ion_col_117_Template, 4, 5, "ion-col", 506)(118, BookingDetailsPage_ng_container_5_ion_content_11_ion_col_118_Template, 3, 0, "ion-col", 507)(119, BookingDetailsPage_ng_container_5_ion_content_11_ion_col_119_Template, 3, 1, "ion-col", 506)(120, BookingDetailsPage_ng_container_5_ion_content_11_ion_col_120_Template, 3, 0, "ion-col", 507)(121, BookingDetailsPage_ng_container_5_ion_content_11_ion_col_121_Template, 3, 1, "ion-col", 506)(122, BookingDetailsPage_ng_container_5_ion_content_11_ion_col_122_Template, 3, 0, "ion-col", 507)(123, BookingDetailsPage_ng_container_5_ion_content_11_ion_col_123_Template, 3, 1, "ion-col", 506)(124, BookingDetailsPage_ng_container_5_ion_content_11_ion_col_124_Template, 3, 0, "ion-col", 507)(125, BookingDetailsPage_ng_container_5_ion_content_11_ion_col_125_Template, 3, 1, "ion-col", 506);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](126, "ion-col", 504)(127, "p", 508);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](128, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "ion-col", 505)(130, "p", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](131);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](132, BookingDetailsPage_ng_container_5_ion_content_11_ion_col_132_Template, 6, 2, "ion-col", 71)(133, BookingDetailsPage_ng_container_5_ion_content_11_ion_col_133_Template, 6, 1, "ion-col", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](134, "ion-col", 462);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](135, "div", 509);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](136, BookingDetailsPage_ng_container_5_ion_content_11_ion_col_136_Template, 3, 0, "ion-col", 82)(137, BookingDetailsPage_ng_container_5_ion_content_11_ion_col_137_Template, 3, 1, "ion-col", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](138, "ion-col", 45)(139, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](140, "Payment Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](141, BookingDetailsPage_ng_container_5_ion_content_11_ion_col_141_Template, 3, 1, "ion-col", 510);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](142, "ion-col", 462);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](143, "div", 509);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](144, "ion-col", 462)(145, "div", 511);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_content_11_Template_div_click_145_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r115);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.taxInvoice());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](146, "span", 512);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](147, "Tax Invoice ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](148, "ion-icon", 513);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](149, BookingDetailsPage_ng_container_5_ion_content_11_div_149_Template, 20, 3, "div", 514)(150, BookingDetailsPage_ng_container_5_ion_content_11_div_150_Template, 8, 1, "div", 514);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](152, BookingDetailsPage_ng_container_5_ion_content_11_ion_row_152_Template, 8, 0, "ion-row", 515);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fullscreen", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.newBooking == true || ctx_r1.newBooking != "false");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.earned_smart_points && ctx_r1.ticketDetails.earned_smart_points != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketStatus === "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.newBooking == "false");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", ctx_r1.ticketStatus == "Cancelled" ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](60, _c12) : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](61, _c13))("ngClass", ctx_r1.ticketStatus === "Cancelled" ? "shyamoli-review-booking-card-cancelled cancelled-card" : "shyamoli-review-booking-card normal-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.getshyamoliDateFormat(ctx_r1.ticketDetails.travel_date, "1"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.getshyamoliDateFormat(ctx_r1.ticketDetails.travel_date, "2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 56, ctx_r1.ticketDetails.origin.substring(0, 3)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](28, 58, ctx_r1.ticketDetails.destination.substring(0, 3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.boarding_details.dep_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx_r1.ticketDetails == null ? null : ctx_r1.ticketDetails.duration == null ? null : ctx_r1.ticketDetails.duration.split(":")[0]) + "h " + (ctx_r1.ticketDetails == null ? null : ctx_r1.ticketDetails.duration == null ? null : ctx_r1.ticketDetails.duration.split(":")[1]) + "m");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.drop_off_details ? ctx_r1.ticketDetails.drop_off_details.arr_time : ctx_r1.ticketDetails.arr_time ? ctx_r1.ticketDetails.arr_time : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.ticketStatus == "Cancelled" ? "cancel-bustype" : "bustype");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.service_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r1.ticketDetails.boarding_details.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.boarding_details.landmark);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.drop_off_details ? ctx_r1.ticketDetails.drop_off_details.address : "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.drop_off_details ? ctx_r1.ticketDetails.drop_off_details.landmark : "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.ticketStatus == "Cancelled" ? "shyamoli-passenger-cancel-block" : "shyamoli-passenger-block");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Passenger Details (", ctx_r1.ticketDetails.passenger_details.length, " Seats)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.passenger_details.length > 1 ? "Passengers name" : "Passenger name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.ticketDetails.passenger_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.ticketDetails.is_e_phone_booking && ctx_r1.isPastDate(ctx_r1.ticketDetails.travel_date) != true && ctx_r1.ticketDetails.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.is_e_phone_booking && ctx_r1.ticketDetails.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.ticketDetails.is_e_phone_booking && ctx_r1.isPastDate(ctx_r1.ticketDetails.travel_date) != true && ctx_r1.ticketDetails.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.ticketStatus == "Cancelled" ? "cancel-payment-details" : "payment-details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails.base_fare.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails.cash_coupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails.cash_coupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp() && ctx_r1.showDiscount(ctx_r1.fareBreakupDetails));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp() && ctx_r1.showDiscount(ctx_r1.fareBreakupDetails));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails.transaction_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails.transaction_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails.cc_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails.cc_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails.usable_promotional_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails.usable_promotional_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails.wallet_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails.wallet_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", ctx_r1.fareBreakupDetails.total_fare.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.discounted_smart_point && ctx_r1.ticketDetails.discounted_smart_point != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.earned_smart_points && ctx_r1.ticketDetails.earned_smart_points != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.transaction_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.transaction_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.payment_method);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.ticket_status != "Cancelled" && ctx_r1.isDateGreaterOrEqual(ctx_r1.ticketDetails.travel_date, ctx_r1.TodayDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.ticket_status == "Cancelled" && ctx_r1.isDateGreaterOrEqual(ctx_r1.ticketDetails.travel_date, ctx_r1.TodayDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.ticketDetails.is_e_phone_booking);
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_div_1_ion_row_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 523)(1, "ion-col", 203)(2, "div", 524);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " \u2B50 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-col", 269)(5, "div", 525);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 526);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" +", ctx_r1.ticketDetails == null ? null : ctx_r1.ticketDetails.onward == null ? null : ctx_r1.ticketDetails.onward.earned_smart_points, " points earned! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Points will be credited after your journey completes on ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](9, 2, ctx_r1.formatTravelDate(ctx_r1.ticketDetails == null ? null : ctx_r1.ticketDetails.onward == null ? null : ctx_r1.ticketDetails.onward.travel_date), "dd-MMM-yyyy"), ". ");
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 516);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_content_12_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r125);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.copyCode(ctx_r1.ticketDetails.onward.round_trip_number));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-row")(2, "ion-col", 517)(3, "h2", 518);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-icon", 519)(5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Your tickets have been booked! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 520)(9, "span", 521);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "ion-icon", 522);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, BookingDetailsPage_ng_container_5_ion_content_12_div_1_ion_row_12_Template, 10, 5, "ion-row", 459);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" PNR: ", ctx_r1.ticketDetails.onward.round_trip_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails == null ? null : ctx_r1.ticketDetails.onward == null ? null : ctx_r1.ticketDetails.onward.earned_smart_points);
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_div_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 538)(1, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 539);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const p_r126 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", p_r126.name, " (", p_r126.gender, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](p_r126.seat_number);
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_div_94_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_content_12_div_94_ion_row_1_Template_ion_row_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r127);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.trackBusModal = !ctx_r1.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-col", 465)(2, "h2", 541);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Track My Bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-col", 542)(5, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ion-icon", 543);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_div_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 540);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_5_ion_content_12_div_94_ion_row_1_Template, 7, 0, "ion-row", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.ticketDetails.onward.is_e_phone_booking && ctx_r1.isPastDate(ctx_r1.ticketDetails.onward.travel_date) != true && ctx_r1.ticketDetails.onward.ticket_status != "Cancelled");
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 462)(1, "ion-button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_97_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r128);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.confirmBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Confirm Phone Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "cbus_btn" : "theme1_btn");
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 544)(1, "ion-row", 112)(2, "ion-col", 545)(3, "a", 113)(4, "h4", 546);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Bus Operator Contact Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h4", 43)(7, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-col", 547)(10, "a", 113)(11, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "svg", 118)(13, "g", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "path", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "defs")(16, "clipPath", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "rect", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", "tel:" + ctx_r1.ticketDetails.onward.boarding_details.contact_numbers, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.boarding_details.contact_numbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", "tel:" + ctx_r1.ticketDetails.onward.boarding_details.contact_numbers, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 504)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Cash coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_112_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 505)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_onward.cash_coupon.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 504)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Tax");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 505)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_onward.service_tax_amount.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 504)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.fareBreakupDetails_onward && ctx_r1.fareBreakupDetails_onward.offer_discount != 0 ? "Offer Discount" : ctx_r1.fareBreakupDetails_onward && ctx_r1.fareBreakupDetails_onward.ebooking_discount != 0 ? "E-Booking Discount" : ctx_r1.fareBreakupDetails_onward && ctx_r1.fareBreakupDetails_onward.previous_pnr_discount != 0 ? "Previous Pnr Discount" : ctx_r1.fareBreakupDetails_onward && ctx_r1.fareBreakupDetails_onward.privilege_card_discount != 0 ? "Privilege Card Discount" : "Discount", " ");
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 505)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, " ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 2, ctx_r1.fareBreakupDetails_onward ? (ctx_r1.fareBreakupDetails_onward.offer_discount ? ctx_r1.fareBreakupDetails_onward.offer_discount : 0) + (ctx_r1.fareBreakupDetails_onward.ebooking_discount ? ctx_r1.fareBreakupDetails_onward.ebooking_discount : 0) + (ctx_r1.fareBreakupDetails_onward.previous_pnr_discount ? ctx_r1.fareBreakupDetails_onward.previous_pnr_discount : 0) + (ctx_r1.fareBreakupDetails_onward.privilege_card_discount ? ctx_r1.fareBreakupDetails_onward.privilege_card_discount : 0) : 0, "1.1-1"), " ");
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_117_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 504)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Transaction Charge");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_118_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 505)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_onward.transaction_charges.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 504)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "CC Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 505)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_onward.cc_charges.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_121_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 504)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Promotional Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 505)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_onward.usable_promotional_balance.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_123_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 504)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Wallet Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_124_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 505)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_onward.wallet_balance.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_133_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 45)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_134_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 45)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.transaction_id);
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_138_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 551)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.payment_method ? ctx_r1.ticketDetails.onward.payment_method : "-");
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_div_146_Template(rf, ctx) {
  if (rf & 1) {
    const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 552)(1, "ion-grid")(2, "ion-row", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_content_12_div_146_Template_ion_row_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r129);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToUpdate("1"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-col", 41)(4, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Modify Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-row", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_content_12_div_146_Template_ion_row_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r129);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToCancel("1"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-col", 41)(10, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Cancel Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-row", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_content_12_div_146_Template_ion_row_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r129);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.gotocontactsupport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "ion-col", 41)(16, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Contact Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "edit-ticket" : "edit-ticket-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "edit-ticket" : "edit-ticket-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "edit-ticket" : "edit-ticket-2");
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_div_147_Template(rf, ctx) {
  if (rf & 1) {
    const _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 552)(1, "ion-grid")(2, "ion-row", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_content_12_div_147_Template_ion_row_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r130);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.gotocontactsupport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-col", 41)(4, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Contact Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "edit-ticket" : "edit-ticket-2");
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_row_149_Template(rf, ctx) {
  if (rf & 1) {
    const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 553)(1, "ion-col", 554)(2, "ion-button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_content_12_ion_row_149_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r131);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.downloadticketInvoice("1"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Download Ticket ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-icon", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-col", 555)(6, "ion-button", 556);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_content_12_ion_row_149_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r131);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.socialShare("1"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "ion-icon", 557);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_row_156_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 523)(1, "ion-col", 203)(2, "div", 524);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " \u2B50 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-col", 269)(5, "div", 525);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 526);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" +", ctx_r1.ticketDetails == null ? null : ctx_r1.ticketDetails.return == null ? null : ctx_r1.ticketDetails.return.earned_smart_points, " points earned! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Points will be credited after your journey completes on ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](9, 2, ctx_r1.formatTravelDate(ctx_r1.ticketDetails == null ? null : ctx_r1.ticketDetails.return == null ? null : ctx_r1.ticketDetails.return.travel_date), "dd-MMM-yyyy"), ". ");
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_div_241_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 538)(1, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 539);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const p_r132 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", p_r132.name, " (", p_r132.gender, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](p_r132.seat_number);
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_div_242_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_content_12_div_242_ion_row_1_Template_ion_row_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r133);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.trackBusModal = !ctx_r1.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-col", 465)(2, "h2", 541);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Track My Bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-col", 542)(5, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ion-icon", 543);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_div_242_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 540);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_5_ion_content_12_div_242_ion_row_1_Template, 7, 0, "ion-row", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.ticketDetails.return.is_e_phone_booking && ctx_r1.isPastDate(ctx_r1.ticketDetails.return.travel_date) != true && ctx_r1.ticketDetails.return.ticket_status != "Cancelled");
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_245_Template(rf, ctx) {
  if (rf & 1) {
    const _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 462)(1, "ion-button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_245_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r134);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.confirmBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Confirm Phone Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "cbus_btn" : "theme1_btn");
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_246_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 544)(1, "ion-row", 112)(2, "ion-col", 545)(3, "a", 113)(4, "h4", 546);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Bus Operator Contact Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h4", 43)(7, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-col", 547)(10, "a", 113)(11, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "svg", 118)(13, "g", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "path", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "defs")(16, "clipPath", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "rect", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", "tel:" + ctx_r1.ticketDetails.return.boarding_details.contact_numbers, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.boarding_details.contact_numbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", "tel:" + ctx_r1.ticketDetails.return.boarding_details.contact_numbers, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_259_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 504)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Cash coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_260_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 505)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_return.cash_coupon.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_261_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 504)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Tax");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_262_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 505)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_return.service_tax_amount.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_263_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 504)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.fareBreakupDetails_return && ctx_r1.fareBreakupDetails_return.offer_discount != 0 ? "Offer Discount" : ctx_r1.fareBreakupDetails_return && ctx_r1.fareBreakupDetails_return.ebooking_discount != 0 ? "E-Booking Discount" : ctx_r1.fareBreakupDetails_return && ctx_r1.fareBreakupDetails_return.previous_pnr_discount != 0 ? "Previous Pnr Discount" : ctx_r1.fareBreakupDetails_return && ctx_r1.fareBreakupDetails_return.privilege_card_discount != 0 ? "Privilege Card Discount" : "Discount", " ");
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_264_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 505)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, " ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 2, ctx_r1.fareBreakupDetails_return ? (ctx_r1.fareBreakupDetails_return.offer_discount ? ctx_r1.fareBreakupDetails_return.offer_discount : 0) + (ctx_r1.fareBreakupDetails_return.ebooking_discount ? ctx_r1.fareBreakupDetails_return.ebooking_discount : 0) + (ctx_r1.fareBreakupDetails_return.previous_pnr_discount ? ctx_r1.fareBreakupDetails_return.previous_pnr_discount : 0) + (ctx_r1.fareBreakupDetails_return.privilege_card_discount ? ctx_r1.fareBreakupDetails_return.privilege_card_discount : 0) : 0, "1.1-1"), " ");
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_265_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 504)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Transaction Charge");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_266_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 505)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_return.transaction_charges.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_267_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 504)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "CC Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_268_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 505)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_return.cc_charges.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_269_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 504)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Promotional Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_270_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 505)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_return.usable_promotional_balance.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_271_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 504)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Wallet Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_272_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 505)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_return.wallet_balance.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_281_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 45)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_282_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 45)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.transaction_id);
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_col_286_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 551)(1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.payment_method ? ctx_r1.ticketDetails.return.payment_method : "-");
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_div_294_Template(rf, ctx) {
  if (rf & 1) {
    const _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 552)(1, "ion-grid")(2, "ion-row", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_content_12_div_294_Template_ion_row_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r135);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToUpdate("2"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-col", 41)(4, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Modify Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-row", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_content_12_div_294_Template_ion_row_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r135);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToCancel("2"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-col", 41)(10, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Cancel Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-row", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_content_12_div_294_Template_ion_row_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r135);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.gotocontactsupport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "ion-col", 41)(16, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Contact Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "edit-ticket" : "edit-ticket-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "edit-ticket" : "edit-ticket-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "edit-ticket" : "edit-ticket-2");
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_div_295_Template(rf, ctx) {
  if (rf & 1) {
    const _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 552)(1, "ion-grid")(2, "ion-row", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_content_12_div_295_Template_ion_row_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r136);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.gotocontactsupport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-col", 41)(4, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Contact Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "edit-ticket" : "edit-ticket-2");
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_ion_row_297_Template(rf, ctx) {
  if (rf & 1) {
    const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 553)(1, "ion-col", 554)(2, "ion-button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_content_12_ion_row_297_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r137);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.downloadticketInvoice("2"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Download Ticket ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-icon", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-col", 555)(6, "ion-button", 556);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_content_12_ion_row_297_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r137);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.socialShare("2"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "ion-icon", 557);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_5_ion_content_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content", 457);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_5_ion_content_12_div_1_Template, 13, 2, "div", 458);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-grid")(3, "ion-row")(4, "ion-col", 558)(5, "div")(6, "div", 559)(7, "span", 560);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Onward Trip Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-row", 464)(10, "ion-col", 465);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "img", 466);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-col", 467)(13, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "ion-row", 468)(18, "ion-col", 22)(19, "h2", 469);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "h2", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "ion-col", 24)(25, "h2", 469);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "ion-col", 22)(29, "p", 470);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "ion-col", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "ion-col", 22)(33, "p", 470);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "ion-col", 22)(36, "h2", 471);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "ion-col", 472)(39, "div", 473);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "ion-icon", 474);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "h3", 475);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "ion-col", 24)(44, "h2", 471);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "ion-col", 22)(47, "p", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Depart");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](50, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "ion-col", 22)(52, "p", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Arrive");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "ion-row", 561)(55, "ion-col", 477);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "img", 478);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "ion-col", 479)(58, "h2", 480);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "p", 562);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "ion-row", 482)(63, "ion-col", 483);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](64, "ion-icon", 484);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "ion-col", 485)(66, "h4", 486);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "Pickup Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "p")(69, "span", 487);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "span", 487);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "ion-col", 488);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](74, "ion-icon", 489);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "ion-col", 490)(76, "h4", 486);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "Drop Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "p")(79, "span", 487);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "span", 487);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div")(84, "ion-card", 563)(85, "ion-card-content", 491)(86, "h2", 448);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 493)(89, "span", 494);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "span", 494);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, "Seat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](93, BookingDetailsPage_ng_container_5_ion_content_12_div_93_Template, 5, 3, "div", 495)(94, BookingDetailsPage_ng_container_5_ion_content_12_div_94_Template, 2, 1, "div", 496);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "div", 497)(96, "ion-row", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](97, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_97_Template, 4, 1, "ion-col", 498)(98, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_98_Template, 18, 3, "ion-col", 499);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "div", 497)(100, "ion-grid", 500)(101, "ion-row", 564)(102, "ion-col", 502)(103, "h2", 503);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](104, "Payment Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "ion-col", 504)(106, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](107, "Base Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "ion-col", 505)(109, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](111, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_111_Template, 3, 0, "ion-col", 507)(112, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_112_Template, 3, 1, "ion-col", 506)(113, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_113_Template, 3, 0, "ion-col", 507)(114, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_114_Template, 3, 1, "ion-col", 506)(115, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_115_Template, 3, 1, "ion-col", 507)(116, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_116_Template, 4, 5, "ion-col", 506)(117, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_117_Template, 3, 0, "ion-col", 507)(118, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_118_Template, 3, 1, "ion-col", 506)(119, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_119_Template, 3, 0, "ion-col", 507)(120, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_120_Template, 3, 1, "ion-col", 506)(121, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_121_Template, 3, 0, "ion-col", 507)(122, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_122_Template, 3, 1, "ion-col", 506)(123, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_123_Template, 3, 0, "ion-col", 507)(124, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_124_Template, 3, 1, "ion-col", 506);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "ion-col", 504)(126, "p", 565);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](127, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "ion-col", 505)(129, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "ion-col", 462);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](132, "div", 509);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](133, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_133_Template, 3, 0, "ion-col", 82)(134, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_134_Template, 3, 1, "ion-col", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](135, "ion-col", 45)(136, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](137, "Payment Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](138, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_138_Template, 3, 1, "ion-col", 510);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](139, "ion-col", 462);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](140, "div", 509);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](141, "ion-col", 566);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_content_12_Template_ion_col_click_141_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r124);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.taxInvoiceOnWards());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](142, "div", 567)(143, "span", 568);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](144, "Tax Invoice ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](145, "ion-icon", 513);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](146, BookingDetailsPage_ng_container_5_ion_content_12_div_146_Template, 20, 3, "div", 514)(147, BookingDetailsPage_ng_container_5_ion_content_12_div_147_Template, 8, 1, "div", 514);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](148, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](149, BookingDetailsPage_ng_container_5_ion_content_12_ion_row_149_Template, 8, 0, "ion-row", 515);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](150, "ion-row")(151, "ion-col", 569)(152, "div", 570)(153, "div", 559)(154, "span", 560);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](155, "Return Trip Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](156, BookingDetailsPage_ng_container_5_ion_content_12_ion_row_156_Template, 10, 5, "ion-row", 459);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](157, "ion-row", 464)(158, "ion-col", 465);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](159, "img", 466);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](160, "ion-col", 467)(161, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](162);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](163, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](164);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](165, "ion-row", 468)(166, "ion-col", 22)(167, "h2", 469);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](168);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](169, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](170, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](171, "h2", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](172, "ion-col", 24)(173, "h2", 469);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](174);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](175, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](176, "ion-col", 22)(177, "p", 470);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](178);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](179, "ion-col", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](180, "ion-col", 22)(181, "p", 470);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](182);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](183, "ion-col", 22)(184, "h2", 471);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](185);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](186, "ion-col", 472)(187, "div", 473);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](188, "ion-icon", 474);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](189, "h3", 475);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](190);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](191, "ion-col", 24)(192, "h2", 471);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](193);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](194, "ion-col", 22)(195, "p", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](196, "Depart");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](197, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](198, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](199, "ion-col", 22)(200, "p", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](201, "Arrive");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](202, "ion-row", 571)(203, "ion-col", 477);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](204, "img", 478);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](205, "ion-col", 479)(206, "h2", 480);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](207);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](208, "p", 562);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](209);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](210, "ion-row", 482)(211, "ion-col", 483);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](212, "ion-icon", 484);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](213, "ion-col", 485)(214, "h4", 486);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](215, "Pickup Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](216, "p")(217, "span", 487);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](218);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](219, "span", 487);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](220);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](221, "ion-col", 488);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](222, "ion-icon", 489);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](223, "ion-col", 490)(224, "h4", 486);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](225, "Drop Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](226, "p")(227, "span", 487);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](228);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](229, "span", 487);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](230);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](231, "div")(232, "ion-card", 572)(233, "ion-card-content", 491)(234, "h2", 448);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](235);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](236, "div", 493)(237, "span", 494);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](238);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](239, "span", 494);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](240, "Seat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](241, BookingDetailsPage_ng_container_5_ion_content_12_div_241_Template, 5, 3, "div", 495)(242, BookingDetailsPage_ng_container_5_ion_content_12_div_242_Template, 2, 1, "div", 496);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](243, "div", 497)(244, "ion-row", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](245, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_245_Template, 4, 1, "ion-col", 498)(246, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_246_Template, 18, 3, "ion-col", 499);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](247, "div")(248, "ion-grid", 573)(249, "ion-row", 574)(250, "ion-col", 502)(251, "h2", 503);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](252, "Payment Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](253, "ion-col", 73)(254, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](255, "Base Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](256, "ion-col", 505)(257, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](258);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](259, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_259_Template, 3, 0, "ion-col", 507)(260, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_260_Template, 3, 1, "ion-col", 506)(261, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_261_Template, 3, 0, "ion-col", 507)(262, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_262_Template, 3, 1, "ion-col", 506)(263, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_263_Template, 3, 1, "ion-col", 507)(264, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_264_Template, 4, 5, "ion-col", 506)(265, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_265_Template, 3, 0, "ion-col", 507)(266, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_266_Template, 3, 1, "ion-col", 506)(267, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_267_Template, 3, 0, "ion-col", 507)(268, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_268_Template, 3, 1, "ion-col", 506)(269, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_269_Template, 3, 0, "ion-col", 507)(270, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_270_Template, 3, 1, "ion-col", 506)(271, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_271_Template, 3, 0, "ion-col", 507)(272, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_272_Template, 3, 1, "ion-col", 506);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](273, "ion-col", 504)(274, "p", 565);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](275, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](276, "ion-col", 505)(277, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](278);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](279, "ion-col", 462);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](280, "div", 509);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](281, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_281_Template, 3, 0, "ion-col", 82)(282, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_282_Template, 3, 1, "ion-col", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](283, "ion-col", 45)(284, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](285, "Payment Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](286, BookingDetailsPage_ng_container_5_ion_content_12_ion_col_286_Template, 3, 1, "ion-col", 510);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](287, "ion-col", 462);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](288, "div", 509);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](289, "ion-col", 566);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_content_12_Template_ion_col_click_289_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r124);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.taxInvoiceReturn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](290, "div", 567)(291, "span", 568);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](292, "Tax Invoice ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](293, "ion-icon", 513);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](294, BookingDetailsPage_ng_container_5_ion_content_12_div_294_Template, 20, 3, "div", 514)(295, BookingDetailsPage_ng_container_5_ion_content_12_div_295_Template, 8, 1, "div", 514);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](296, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](297, BookingDetailsPage_ng_container_5_ion_content_12_ion_row_297_Template, 8, 0, "ion-row", 515);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fullscreen", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.newBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.getshyamoliDateFormat(ctx_r1.ticketDetails.onward.travel_date, "1"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.getshyamoliDateFormat(ctx_r1.ticketDetails.onward.travel_date, "2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 91, ctx_r1.ticketDetails.onward.origin.substring(0, 3)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 93, ctx_r1.ticketDetails.onward.destination.substring(0, 3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.boarding_details.dep_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx_r1.ticketDetails == null ? null : ctx_r1.ticketDetails.onward == null ? null : ctx_r1.ticketDetails.onward.duration == null ? null : ctx_r1.ticketDetails.onward.duration.split(":")[0]) + "h " + (ctx_r1.ticketDetails == null ? null : ctx_r1.ticketDetails.onward == null ? null : ctx_r1.ticketDetails.onward.duration == null ? null : ctx_r1.ticketDetails.onward.duration.split(":")[1]) + "m");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.onward.drop_off_details ? ctx_r1.ticketDetails.onward.drop_off_details.arr_time : ctx_r1.ticketDetails.onward.arr_time ? ctx_r1.ticketDetails.onward.arr_time : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.service_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r1.ticketDetails.onward.boarding_details.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.boarding_details.landmark);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.drop_off_details ? ctx_r1.ticketDetails.onward.drop_off_details.address : "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.drop_off_details ? ctx_r1.ticketDetails.onward.drop_off_details.landmark : "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Passenger Details (", ctx_r1.ticketDetails.onward.passenger_details.length, " Seats)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.passenger_details.length > 1 ? "Passengers name" : "Passenger name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.ticketDetails.onward.passenger_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.ticketDetails.onward.is_e_phone_booking && ctx_r1.isPastDate(ctx_r1.ticketDetails.onward.travel_date) != true && ctx_r1.ticketDetails.onward.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.is_e_phone_booking && ctx_r1.ticketDetails.onward.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.ticketDetails.onward.is_e_phone_booking && ctx_r1.isPastDate(ctx_r1.ticketDetails.onward.travel_date) != true && ctx_r1.ticketDetails.onward.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_onward.base_fare.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_onward.cash_coupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_onward.cash_coupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp() && ctx_r1.showDiscount(ctx_r1.fareBreakupDetails_onward));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp() && ctx_r1.showDiscount(ctx_r1.fareBreakupDetails_onward));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_onward.transaction_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_onward.transaction_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_onward.cc_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_onward.cc_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_onward.usable_promotional_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_onward.usable_promotional_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_onward.wallet_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_onward.wallet_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", ctx_r1.fareBreakupDetails_onward.total_fare.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.transaction_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.transaction_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.payment_method);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.ticket_status != "Cancelled" && ctx_r1.isDateGreaterOrEqual(ctx_r1.ticketDetails.onward.travel_date, ctx_r1.TodayDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.ticket_status == "Cancelled" && ctx_r1.isDateGreaterOrEqual(ctx_r1.ticketDetails.onward.travel_date, ctx_r1.TodayDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.ticketDetails.onward.is_e_phone_booking);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r1.ticketDetails == null ? null : ctx_r1.ticketDetails.return == null ? null : ctx_r1.ticketDetails.return.earned_smart_points) && ctx_r1.ticketDetails.return.earned_smart_points > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.getshyamoliDateFormat(ctx_r1.ticketDetails.return.travel_date, "1"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.getshyamoliDateFormat(ctx_r1.ticketDetails.return.travel_date, "2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](169, 95, ctx_r1.ticketDetails.return.origin.substring(0, 3)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](175, 97, ctx_r1.ticketDetails.return.destination.substring(0, 3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.boarding_details.dep_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx_r1.ticketDetails.return == null ? null : ctx_r1.ticketDetails.return.duration == null ? null : ctx_r1.ticketDetails.return.duration.split(":")[0]) + "h " + (ctx_r1.ticketDetails.return == null ? null : ctx_r1.ticketDetails.return.duration == null ? null : ctx_r1.ticketDetails.return.duration.split(":")[1]) + "m");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.return.drop_off_details ? ctx_r1.ticketDetails.return.drop_off_details.arr_time : ctx_r1.ticketDetails.return.arr_time ? ctx_r1.ticketDetails.return.arr_time : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.service_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r1.ticketDetails.return.boarding_details.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.boarding_details.landmark);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.drop_off_details ? ctx_r1.ticketDetails.return.drop_off_details.address : "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.drop_off_details ? ctx_r1.ticketDetails.return.drop_off_details.landmark : "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Passenger Details (", ctx_r1.ticketDetails.return.passenger_details.length, " Seats)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.passenger_details.length > 1 ? "Passengers name" : "Passenger name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.ticketDetails.return.passenger_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.ticketDetails.return.is_e_phone_booking && ctx_r1.isPastDate(ctx_r1.ticketDetails.return.travel_date) != true && ctx_r1.ticketDetails.return.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.is_e_phone_booking && ctx_r1.ticketDetails.return.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.ticketDetails.return.is_e_phone_booking && ctx_r1.isPastDate(ctx_r1.ticketDetails.return.travel_date) != true && ctx_r1.ticketDetails.return.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_return.base_fare.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_return.cash_coupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_return.cash_coupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp() && ctx_r1.showDiscount(ctx_r1.fareBreakupDetails_return));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp() && ctx_r1.showDiscount(ctx_r1.fareBreakupDetails_return));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_return.transaction_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_return.transaction_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_return.cc_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_return.cc_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_return.usable_promotional_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_return.usable_promotional_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_return.wallet_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_return.wallet_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", ctx_r1.fareBreakupDetails_return.total_fare.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.transaction_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.transaction_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.payment_method);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.ticket_status != "Cancelled" && ctx_r1.isDateGreaterOrEqual(ctx_r1.ticketDetails.return.travel_date, ctx_r1.TodayDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.ticket_status == "Cancelled" && ctx_r1.isDateGreaterOrEqual(ctx_r1.ticketDetails.return.travel_date, ctx_r1.TodayDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.ticketDetails.return.is_e_phone_booking);
  }
}
function BookingDetailsPage_ng_container_5_ion_content_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content", 450)(1, "div", 153)(2, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-icon", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Note: Your ticket is in Pending.Please check after sometime.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 157)(7, "ion-button", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_5_ion_content_13_Template_ion_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r138);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goToHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Okay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fullscreen", true);
  }
}
function BookingDetailsPage_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-header", 451)(2, "ion-toolbar", 452)(3, "ion-buttons", 453);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, BookingDetailsPage_ng_container_5_ion_back_button_4_Template, 1, 0, "ion-back-button", 5)(5, BookingDetailsPage_ng_container_5_ion_back_button_5_Template, 1, 0, "ion-back-button", 5)(6, BookingDetailsPage_ng_container_5_ion_back_button_6_Template, 1, 0, "ion-back-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, BookingDetailsPage_ng_container_5_ion_title_7_Template, 2, 0, "ion-title", 454)(8, BookingDetailsPage_ng_container_5_ion_title_8_Template, 2, 0, "ion-title", 454)(9, BookingDetailsPage_ng_container_5_ion_title_9_Template, 2, 0, "ion-title", 454);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, BookingDetailsPage_ng_container_5_div_10_Template, 9, 0, "div", 11)(11, BookingDetailsPage_ng_container_5_ion_content_11_Template, 153, 62, "ion-content", 455)(12, BookingDetailsPage_ng_container_5_ion_content_12_Template, 298, 99, "ion-content", 455)(13, BookingDetailsPage_ng_container_5_ion_content_13_Template, 11, 1, "ion-content", 395);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("translucent", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.newBooking == true || ctx_r1.newBooking == "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r1.newBooking == false || ctx_r1.newBooking == "false") && !ctx_r1.redirectToHome);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.redirectToHome);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.isRoundTrip && ctx_r1.ticketStatus != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isRoundTrip && ctx_r1.ticketStatus != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketStatus == "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.trackBusModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails != null && !ctx_r1.isRoundTrip && ctx_r1.ticketStatus != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails != null && ctx_r1.isRoundTrip && ctx_r1.ticketStatus != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticketStatus == "Pending");
  }
}
class BookingDetailsPage {
  constructor(commonStorage, apiFactory, dateService,
  // private iab: InAppBrowser,
  util,
  // private transfer: FileTransfer,
  appData, commonService, loader, modalController, auth, navCtrl,
  // private locationProvider: PluginProvider,
  route, router, platform, inAppBrowser, firebaseAnalyticsService, ngZone) {
    var _this$bookingDetails, _this$bookingDetails2, _this$metaData;
    this.commonStorage = commonStorage;
    this.apiFactory = apiFactory;
    this.dateService = dateService;
    this.util = util;
    this.appData = appData;
    this.commonService = commonService;
    this.loader = loader;
    this.modalController = modalController;
    this.auth = auth;
    this.navCtrl = navCtrl;
    this.route = route;
    this.router = router;
    this.platform = platform;
    this.inAppBrowser = inAppBrowser;
    this.firebaseAnalyticsService = firebaseAnalyticsService;
    this.ngZone = ngZone;
    this.bookingDetails = {};
    this.day = "";
    this.newBooking = "false";
    this.hideLocateTrackBus = "false";
    this.rateServicee = "false";
    this.isRoundTrip = false;
    this.trackBusModal = false;
    this.trackBusModal1 = false;
    this.isSocialShare = false;
    this.feedbackGiven = false;
    this.isVisibleTaxInvoice = true;
    this.roundTripPnr = '';
    this.redirectToHome = false;
    this.segment = 'future';
    this.options = {
      location: 'no',
      hidden: 'no',
      clearcache: 'yes',
      clearsessioncache: 'yes',
      zoom: 'yes',
      hardwareback: 'yes',
      mediaPlaybackRequiresUserAction: 'no',
      shouldPauseOnSuspend: 'no',
      closebuttoncaption: 'Close',
      disallowoverscroll: 'yes',
      toolbar: 'yes',
      enableViewportScale: 'yes',
      allowInlineMediaPlayback: 'no',
      presentationstyle: 'fullscreen',
      fullscreen: 'yes'
    };
    this.selectedTripSegment = 'onward';
    this.segmentDisplayName = '';
    this.isCancelBtnShow = false;
    this.isShow = false;
    this.isShowR = false;
    this.isIos = false;
    this.backButtonSubscription = null; // <--- added
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    this.segmentDisplayName = localStorage.getItem('segmentDisplayName') || 'Upcoming';
    this.commonStorage.localRemove('autofillData');
    this.bookingDetails = JSON.parse(localStorage.getItem('bookingDetails'));
    this.bookingDetails = this.bookingDetails == null ? this.commonStorage.localGet('bookedTicketDetails') : this.bookingDetails;
    let travelDate = (_this$bookingDetails = this.bookingDetails) !== null && _this$bookingDetails !== void 0 && _this$bookingDetails.travelDate ? this.bookingDetails.travelDate : (_this$bookingDetails2 = this.bookingDetails) === null || _this$bookingDetails2 === void 0 ? void 0 : _this$bookingDetails2.travel_date;
    this.day = this.dateService.getDayNameFromDate(travelDate);
    this.route.queryParams.subscribe(params => {
      this.redirectToHome = params['redirectToHome'] ? params['redirectToHome'] : false;
      this.newBooking = params['new_booking'];
      this.hideLocateTrackBus = params["hideLocateTrackBus"] ? params["hideLocateTrackBus"] : false;
      this.isRoundTrip = params["is_roundTrip"] ? params["is_roundTrip"] : false;
      this.rateServicee = params["rateService"] ? params["rateService"] : false;
    });
    this.metaData = this.commonStorage.getItem("metaData");
    this.hideGstText = ((_this$metaData = this.metaData) === null || _this$metaData === void 0 ? void 0 : _this$metaData.hideGstText) || false;
    this.roundedLogo = this.metaData.roundedLogo;
    this.logo = this.commonStorage.getItem("metaData").mobileNavigationLogo ? this.commonStorage.getItem("metaData").mobileNavigationLogo : this.commonStorage.getItem("metaData").headerLogo;
    this.currencySym = this.commonStorage.localGet('metaData') ? this.commonStorage.localGet('metaData').currencySym : '₹';
    if (this.appData.isIndonesia) {
      this.isVisibleTaxInvoice = false;
    } else if (this.appData.isAfrica) {
      this.isVisibleTaxInvoice = false;
    } else {
      this.isVisibleTaxInvoice = true;
    }
    let date = this.dateService.getToday().formattedDate;
    this.TodayDate = moment__WEBPACK_IMPORTED_MODULE_3___default()(date, "DD-MM-YYYY").format("DD/MM/YYYY");
  }
  ngOnInit() {
    this.appData.newTheme = this.util.getNewTheme();
    this.firebaseAnalyticsService.logCustomEvent('ticket_details', {
      page: 'Booking Details Page'
    });
  }
  ionViewDidEnter() {
    this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(9999, () => {
      this.ngZone.run(() => {
        setTimeout(() => {
          this.handleBackNavigation();
        }, 100);
      });
    });
  }
  handleBackNavigation() {
    localStorage.setItem('segmentDisplayName', 'Upcoming');
    if (!this.redirectToHome) {
      if (this.newBooking) {
        this.navCtrl.navigateRoot('tabs/home');
      } else {
        this.navCtrl.navigateRoot('tabs/more');
      }
    } else {
      if (this.newBooking == undefined) {
        this.navCtrl.navigateRoot('tabs/more');
      } else {
        this.navCtrl.navigateRoot('tabs/my-bookings');
      }
    }
  }
  ionViewWillLeave() {
    // Clean up subscription to avoid duplicates / memory leaks
    if (this.backButtonSubscription) {
      this.backButtonSubscription.unsubscribe();
      this.backButtonSubscription = null;
    }
  }
  ionViewWillEnter() {
    this.commonService.gTrack("mybookings", "Booking details page viewed");
    if (this.util.platformName() == "IOS" || this.util.platformName() == "Web") {
      this.isSocialShare = false;
    } else {
      this.isSocialShare = true;
    }
    this.loader.showLoadingDefault();
    if (!this.isRoundTrip) {
      this.apiFactory.getTicketDetails(this.bookingDetails.pnr_number ? this.bookingDetails.pnr_number : this.bookingDetails.ticket_number ? this.bookingDetails.ticket_number : this.bookingDetails.pnrNumber).subscribe(result => {
        this.feedbackGiven = result.feedback_given;
        this.fare = result.total_fare;
        this.serviceTaxAmount = result.service_tax_amount;
        this.loader.hideLoadingDefault();
        if (typeof result.code == "undefined") {
          var _this$bookingDetails3;
          let travelDate = (_this$bookingDetails3 = this.bookingDetails) !== null && _this$bookingDetails3 !== void 0 && _this$bookingDetails3.travelDate ? this.bookingDetails.travelDate : this.bookingDetails.travel_date;
          this.day = this.dateService.getDayNameFromDate(travelDate);
          this.ticketDetails = result;
          this.firebaseAnalyticsService.generateNewSessionId();
          this.checkTravelDate();
          this.nameTwoDigitShow = this.ticketDetails.passenger_details[0].name.slice(0, 2).toUpperCase();
          this.fareBreakupDetails = result.fare_break_up_hash;
          this.ticketStatus = this.ticketDetails.ticket_status;
          this.commonStorage.localSet("ticket-details", this.ticketDetails);
          this.commonStorage.setItem("ticket-details-item", this.ticketDetails);
        } else {
          if (result.code == 419) {}
        }
      }, err => {
        if (!this.util.isConnected()) {
          this.util.showAlert("ERROR LOADING", "INTERNET NOT CONNECTED PLEASE CONNECT INTERNET AND TRY AFTER AGAIN");
        } else {
          this.util.showAlert("ERROR LOADING", "SOMETHING WENT WRONG PLEASE TRY AFTER SOMTIME");
        }
      });
    } else {
      this.apiFactory.getTicketDetails(this.bookingDetails.round_trip_number).subscribe(result => {
        this.loader.hideLoadingDefault();
        if (typeof result.code == "undefined") {
          this.ticketDetails = result;
          this.firebaseAnalyticsService.generateNewSessionId();
          if (this.metaData.msiteFolder == 'ourbustheme') {
            this.checkTravelDate();
          }
          this.fareBreakupDetails_onward = result.onward.fare_break_up_hash;
          this.fareBreakupDetails_return = result.return.fare_break_up_hash;
          this.ticketStatus = this.ticketDetails.ticket_status;
          this.commonStorage.setItem("ticket-details-item", this.ticketDetails);
          this.commonStorage.localSet("ticket-details", this.ticketDetails.onward);
        } else {}
        if (result.onward.code == 419) {
          if (result.onward.message) {
            this.util.showToast(result.onward.message);
          }
          this.util.showToast(result.onward.message);
        }
        if (result.onward.code == 500) {
          if (result.onward.message) {
            this.util.showToast(result.onward.message);
          }
        }
      }, err => {
        if (!this.util.isConnected()) {
          this.util.showAlert("ERROR LOADING", "INTERNET NOT CONNECTED PLEASE CONNECT INTERNET AND TRY AFTER AGAIN");
        } else {
          this.util.showAlert("ERROR LOADING", "SOMETHING WENT WRONG PLEASE TRY AFTER SOMTIME");
        }
      });
    }
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
  changeDateFormat1(date) {
    if (date) {
      const r = this.dateService.getDateObjFromDateStr(date, this.commonService.checkDateFormat(), "yyyy-mm-dd");
      if (r !== null && r !== void 0 && r.dayName) {
        return `${r.dayName}, ${r.day.toString().padStart(2, '0')} ${r.monthName.slice(0, 3)} ${r.year}`;
      }
      const parsedDate = new Date(date.substr(0, 10).trim());
      if (!isNaN(parsedDate.getTime())) {
        const dayName = this.util.getDayName(parsedDate.getDay()); // No +1 adjustment needed
        const day = parsedDate.getDate().toString().padStart(2, '0'); // Ensure two-digit day
        const monthName = this.util.getMonthName(parsedDate.getMonth() + 1).slice(0, 3); // Abbreviated month
        const year = parsedDate.getFullYear();
        return `${dayName}, ${day} ${monthName} ${year}`;
      }
      return date;
    }
    return date;
  }
  checkTravelDate() {
    const currentDate = new Date();
    const travelDate = this.parseDate(this.ticketDetails.travel_date);
    if (currentDate <= travelDate) {
      this.isCancelBtnShow = true;
    } else {
      this.isCancelBtnShow = false;
    }
  }
  parseDate(dateString) {
    const [day, month, year] = dateString.split('/').map(Number);
    return new Date(year, month - 1, day); // month - 1 because months are zero-based in JS Date
  }
  toUppercaseFirstLetter(str) {
    return str.slice(0, 2).toUpperCase();
  }
  gotoMap(type) {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (type == 2) {
        _this.util.showToast('No location found', 'center');
        return false;
      }
      const modal = yield _this.modalController.create({
        component: _map_map_page__WEBPACK_IMPORTED_MODULE_1__.MapPage,
        componentProps: {
          destination: {
            "lat": parseFloat(_this.bookingDetails.latitude),
            "lng": parseFloat(_this.bookingDetails.longitude)
          },
          boardingPoint: _this.bookingDetails.landmark,
          title: type == 1 ? "Boarding point" : "Droping point"
        }
      });
      return yield modal.present();
    })();
  }
  socialShare(getNum) {
    if (getNum == '1') {
      var _this$ticketDetails$o;
      this.message = (_this$ticketDetails$o = this.ticketDetails.onward.sharing_pdf_link_ios) !== null && _this$ticketDetails$o !== void 0 ? _this$ticketDetails$o : this.ticketDetails.onward.sharing_pdf_link;
    } else if (getNum == '2') {
      var _this$ticketDetails$r;
      this.message = (_this$ticketDetails$r = this.ticketDetails.return.sharing_pdf_link_ios) !== null && _this$ticketDetails$r !== void 0 ? _this$ticketDetails$r : this.ticketDetails.return.sharing_pdf_link;
    } else if (getNum == '0') {
      var _this$ticketDetails$s;
      this.message = (_this$ticketDetails$s = this.ticketDetails.sharing_pdf_link_ios) !== null && _this$ticketDetails$s !== void 0 ? _this$ticketDetails$s : this.ticketDetails.sharing_pdf_link;
    } else {
      this.util.showToast("Invalid Pdf link");
    }
    const shareOptions = {
      title: 'Share Ticket',
      text: '',
      url: this.message,
      dialogTitle: 'Share via'
    };
    _capacitor_share__WEBPACK_IMPORTED_MODULE_2__.Share.share(shareOptions).then(() => {}, () => {
      this.util.showToast("Failed to share pdf");
    });
  }
  gotoHome() {
    this.navCtrl.navigateRoot('tabs/home');
  }
  gotoMyBookings() {
    if (this.metaData.msiteFolder == 'ourbustheme') {
      this.navCtrl.navigateRoot('/my-bookings');
    } else {
      this.navCtrl.navigateRoot('tabs/my-bookings');
    }
  }
  openTgoBrowser(url) {
    this.commonService.gTrack("trackMyBus", "“trackmybus” option is selected from menu");
    this.inAppBrowser.create(url, '_system', 'location=yes');
  }
  openTgoApp() {}
  confirmBooking() {
    let navigationExtras = {
      queryParams: {
        new_booking: true,
        is_roundTrip: this.isRoundTrip
      }
    };
    if (this.segment == 'previous') {
      this.util.showToast('Hi, you need to book the onward trip first before booking the return trip.');
      return;
    } else {
      console.log('navigationExtras', navigationExtras);
      this.navCtrl.navigateForward(['phone-confirm-booking'], navigationExtras).then(() => {
        console.log('NavController navigation successful');
      }).catch(error => {
        console.error('NavController navigation failed:', error);
        // Try Router as fallback
        this.router.navigate(['phone-confirm-booking'], navigationExtras);
      });
      console.log('after navigation');
    }
    // this.router.navigate(['phone-confirm-booking']);
  }
  taxInvoice() {
    var _this$bookingDetails4, _this$bookingDetails5;
    // console.log(this.bookingDetails , 'ticketDetails', this.ticketDetails);
    let travelDate = this.ticketDetails.travel_date || ((_this$bookingDetails4 = this.bookingDetails) === null || _this$bookingDetails4 === void 0 ? void 0 : _this$bookingDetails4.travelDate) || ((_this$bookingDetails5 = this.bookingDetails) === null || _this$bookingDetails5 === void 0 ? void 0 : _this$bookingDetails5.travel_date);
    var path = 'ticket_number=' + this.ticketDetails.ticket_number + '&journey_date=' + travelDate + '&email_or_phone_number=' + this.ticketDetails.passenger_details[0].mobile;
    this.apiFactory.downloadTaxInvoice(path).subscribe(res => {
      if (res.status && res.status == 200) {
        this.download(res.pdf_url);
      } else if (res.message) {
        this.util.showToast(res.message);
      } else {
        this.util.showToast('Server Error!');
      }
    }, err => {
      this.util.showToast('Server Error!');
    });
  }
  downloadticketInvoice(getNum) {
    if (getNum == '0') {
      if (this.ticketDetails.sharing_pdf_link_ios || this.ticketDetails.sharing_pdf_link) {
        var _this$ticketDetails$s2;
        let newText = (_this$ticketDetails$s2 = this.ticketDetails.sharing_pdf_link_ios) !== null && _this$ticketDetails$s2 !== void 0 ? _this$ticketDetails$s2 : this.ticketDetails.sharing_pdf_link;
        if (this.appData.isIOS) {
          this.downloadinIOS(newText);
        } else {
          this.download(newText);
        }
      } else {
        this.util.showToast("Invalid Pdf link");
      }
    } else if (getNum == '1') {
      if (this.ticketDetails.onward.sharing_pdf_link || this.ticketDetails.onward.sharing_pdf_link_ios) {
        var _this$ticketDetails$o2;
        let newText = (_this$ticketDetails$o2 = this.ticketDetails.onward.sharing_pdf_link_ios) !== null && _this$ticketDetails$o2 !== void 0 ? _this$ticketDetails$o2 : this.ticketDetails.onward.sharing_pdf_link;
        if (this.appData.isIOS) {
          this.downloadinIOS(newText);
        } else {
          this.download(newText);
        }
      } else {
        this.util.showToast("Invalid Pdf link");
      }
    } else if (getNum == '2') {
      if (this.ticketDetails.return.sharing_pdf_link || this.ticketDetails.return.sharing_pdf_link_ios) {
        var _this$ticketDetails$r2;
        let newText = (_this$ticketDetails$r2 = this.ticketDetails.return.sharing_pdf_link_ios) !== null && _this$ticketDetails$r2 !== void 0 ? _this$ticketDetails$r2 : this.ticketDetails.return.sharing_pdf_link;
        if (this.appData.isIOS) {
          this.downloadinIOS(newText);
        } else {
          this.download(newText);
        }
      } else {
        this.util.showToast("Invalid Pdf link");
      }
    } else {
      this.util.showToast("Invalid");
    }
  }
  downloadinIOS(url) {
    /** Previous code */
    //let target = "_blank";
    //this.iab.create(url,target,this.options);
    /** New code */
    // this.iab.create(url, '_system', 'location=yes');
    window.open(url, "_system", "location=yes,enableViewportScale=yes,hidden=no");
    /*window.PreviewAnyFile.previewPath(
           error => console.error("open failed", error)
           ,url
    );*/
    // const target = '_system'; // Opens in the system browser
    // const options = 'location=yes';
    // const ref = (window as any).cordova.InAppBrowser.open(url, target, options);
    // ref.addEventListener('loaderror', (event: any) => {
    //   console.error('InAppBrowser Error:', event.message);
    // });
  }
  ticketInvoice() {
    if (this.ticketDetails.sharing_pdf_link != '') {
      var _this$ticketDetails, _this$ticketDetails2;
      // let newText = this.ticketDetails.sharing_pdf_link.replace('.jpsb-qa1.', '.');
      let newText = '';
      if ((_this$ticketDetails = this.ticketDetails) !== null && _this$ticketDetails !== void 0 && _this$ticketDetails.sharing_pdf_link_ios && ((_this$ticketDetails2 = this.ticketDetails) === null || _this$ticketDetails2 === void 0 ? void 0 : _this$ticketDetails2.sharing_pdf_link_ios) != '') {
        var _this$ticketDetails3;
        newText = (_this$ticketDetails3 = this.ticketDetails) === null || _this$ticketDetails3 === void 0 ? void 0 : _this$ticketDetails3.sharing_pdf_link_ios;
      } else {
        var _this$ticketDetails4;
        newText = (_this$ticketDetails4 = this.ticketDetails) === null || _this$ticketDetails4 === void 0 ? void 0 : _this$ticketDetails4.sharing_pdf_link;
      }
      if (this.appData.isIOS) {
        this.downloadinIOS(newText);
      } else {
        this.download(newText);
      }
    } else {
      this.util.showToast("Invalid Pdf link");
    }
  }
  ticketInvoiceOnWards() {
    if (this.ticketDetails.onward.sharing_pdf_link != '') {
      let newText = this.ticketDetails.onward.sharing_pdf_link.replace('.jpsb-qa1.', '.');
      this.download(newText);
    } else {
      this.util.showToast("Invalid Pdf link");
    }
  }
  ticketInvoiceOnWardsD(url) {
    if (url != "") {
      // this.download(this.ticketDetails.sharing_pdf_link);
      // http://jpsb-qa1.jpsb-qa1.ticketsimply.co.in/shortened_url/oJLYkcp1IBsv
      // let newText = this.ticketDetails.onward.sharing_pdf_link.replace(
      //   ".cbus-qa1.",
      //   "."
      // );
      let newText = url;
      if (this.appData.isIOS) {
        this.downloadinIOS(newText);
      } else {
        this.download(newText);
      }
    } else {
      this.util.showToast("Invalid Pdf link");
    }
  }
  ticketInvoicereturn() {
    if (this.ticketDetails.return.sharing_pdf_link != '') {
      let newText = this.ticketDetails.return.sharing_pdf_link.replace('.jpsb-qa1.', '.');
      this.download(newText);
    } else {
      this.util.showToast("Invalid Pdf link");
    }
  }
  ticketInvoicereturnD(url) {
    if (url != "") {
      // this.download(this.ticketDetails.sharing_pdf_link);
      // http://jpsb-qa1.jpsb-qa1.ticketsimply.co.in/shortened_url/oJLYkcp1IBsv
      // let newText = this.ticketDetails.return.sharing_pdf_link.replace(
      //   ".cbus-qa1.",
      //   "."
      // );
      let newText = url;
      if (this.appData.isIOS) {
        this.downloadinIOS(newText);
      } else {
        this.download(newText);
      }
    } else {
      this.util.showToast("Invalid Pdf link");
    }
  }
  taxInvoiceOnWards() {
    var _this$ticketDetails5, _this$ticketDetails6, _this$ticketDetails7, _this$ticketDetails8, _this$ticketDetails9, _this$ticketDetails0;
    let travelDate = (_this$ticketDetails5 = this.ticketDetails) !== null && _this$ticketDetails5 !== void 0 && (_this$ticketDetails5 = _this$ticketDetails5.onward) !== null && _this$ticketDetails5 !== void 0 && _this$ticketDetails5.travel_date ? (_this$ticketDetails6 = this.ticketDetails) === null || _this$ticketDetails6 === void 0 || (_this$ticketDetails6 = _this$ticketDetails6.onward) === null || _this$ticketDetails6 === void 0 ? void 0 : _this$ticketDetails6.travel_date : (_this$ticketDetails7 = this.ticketDetails) === null || _this$ticketDetails7 === void 0 || (_this$ticketDetails7 = _this$ticketDetails7.onward) === null || _this$ticketDetails7 === void 0 ? void 0 : _this$ticketDetails7.travel_date;
    let pnr = ((_this$ticketDetails8 = this.ticketDetails) === null || _this$ticketDetails8 === void 0 || (_this$ticketDetails8 = _this$ticketDetails8.onward) === null || _this$ticketDetails8 === void 0 ? void 0 : _this$ticketDetails8.ticket_number) || this.bookingDetails.pnr_number || this.bookingDetails.ticket_number || this.bookingDetails.pnrNumber;
    let mobile = ((_this$ticketDetails9 = this.ticketDetails) === null || _this$ticketDetails9 === void 0 || (_this$ticketDetails9 = _this$ticketDetails9.onward) === null || _this$ticketDetails9 === void 0 || (_this$ticketDetails9 = _this$ticketDetails9.passenger_details[0]) === null || _this$ticketDetails9 === void 0 ? void 0 : _this$ticketDetails9.mobile) || ((_this$ticketDetails0 = this.ticketDetails) === null || _this$ticketDetails0 === void 0 ? void 0 : _this$ticketDetails0.passenger_details[0].cus_mobile);
    var path = 'ticket_number=' + pnr + '&journey_date=' + travelDate + '&email_or_phone_number=' + mobile;
    this.apiFactory.downloadTaxInvoice(path).subscribe(res => {
      if (res.status && res.status == 200) {
        this.download(res.pdf_url);
      } else if (res.message) {
        this.util.showToast(res.message);
      } else {
        this.util.showToast('Server Error!');
      }
    }, err => {
      this.util.showToast('Server Error!');
    });
  }
  taxInvoiceReturn() {
    let travelDate = this.ticketDetails.return.travel_date ? this.ticketDetails.return.travel_date : this.ticketDetails.return.travel_date;
    var path = 'ticket_number=' + this.ticketDetails.return.ticket_number + '&journey_date=' + travelDate + '&email_or_phone_number=' + this.ticketDetails.return.passenger_details[0].mobile;
    this.apiFactory.downloadTaxInvoice(path).subscribe(res => {
      if (res.status && res.status == 200) {
        this.download(res.pdf_url);
      } else if (res.message) {
        this.util.showToast(res.message);
      } else {
        this.util.showToast('Server Error!');
      }
    }, err => {
      this.util.showToast('Server Error!');
    });
  }
  download(uri) {
    window.open(uri);
    // const fileTransfer: FileTransferObject = this.transfer.create();
    //   const url = uri;
    //   fileTransfer.download(url, this.file + 'taxInvoice.pdf').then((entry) => {
    //   }, (error) => {
    //     // handle error
    //   });
  }
  rateJourney() {
    localStorage.setItem('pnrNumber', this.ticketDetails.ticket_number);
    this.navCtrl.navigateForward('rate-journey');
  }
  goToCancel(getNum) {
    if (getNum == '1') {
      this.commonStorage.setItem("cancelTicketDetails", this.ticketDetails.onward);
    } else if (getNum == '2') {
      this.commonStorage.setItem("cancelTicketDetails", this.ticketDetails.return);
    } else {
      this.commonStorage.setItem("cancelTicketDetails", this.ticketDetails);
    }
    // this.commonStorage.setItem("cancelTicketDetails", this.ticketDetails);
    let navigationExtras = {
      state: {
        user: getNum == '1' ? {
          email: this.ticketDetails.onward.passenger_details[0].cus_email,
          mobile: this.ticketDetails.onward.passenger_details[0].cus_mobile
        } : getNum == '2' ? {
          email: this.ticketDetails.return.passenger_details[0].cus_email,
          mobile: this.ticketDetails.return.passenger_details[0].cus_mobile
        } : {
          email: this.ticketDetails.passenger_details[0].cus_email,
          mobile: this.ticketDetails.passenger_details[0].cus_mobile
        }
      }
    };
    this.router.navigate(["cancel-confirmation-ticket"], navigationExtras);
    //this.navCtrl.navigateRoot('cancel-confirmation-ticket');
  }
  goToUpdate(getNum) {
    if (getNum == '1') {
      this.commonStorage.setItem("ticket_details_res", this.ticketDetails.onward);
    } else if (getNum == '2') {
      this.commonStorage.setItem("ticket_details_res", this.ticketDetails.return);
    } else {
      this.commonStorage.setItem("ticket_details_res", this.ticketDetails);
    }
    if (this.metaData.msiteFolder == 'ourbustheme') {
      let navigationExtras = {
        queryParams: {
          title: "Update Ticket",
          from_book_page: true,
          newBooking: this.newBooking,
          otp_enabled: true,
          user: getNum == '1' ? this.ticketDetails.onward : getNum == '2' ? this.ticketDetails.return : this.ticketDetails
        }
      };
      if (this.isRoundTrip == true) {
        this.commonStorage.localSet('isRoundTrip', this.isRoundTrip);
      } else {
        this.commonStorage.localRemove('isRoundTrip');
      }
      this.navCtrl.navigateForward("update-ticket", navigationExtras);
    } else {
      let navigationExtras = {
        queryParams: {
          title: "Modify Ticket",
          from_book_page: true,
          newBooking: this.newBooking,
          user: getNum == '1' ? this.ticketDetails.onward : getNum == '2' ? this.ticketDetails.return : this.ticketDetails
        }
      };
      if (this.isRoundTrip == true) {
        this.commonStorage.localSet('isRoundTrip', this.isRoundTrip);
      } else {
        this.commonStorage.localRemove('isRoundTrip');
      }
      this.navCtrl.navigateForward("update-ticket", navigationExtras);
    }
  }
  goToHome() {
    this.navCtrl.navigateRoot("tabs/home");
  }
  gotocontactsupport() {
    this.navCtrl.navigateForward('contact-us', {
      state: {
        previousUrl: this.router.url
      }
    });
  }
  /**
  * @nete for new theme-1
  * @param date which is formated according to new Theme-1 design.
  * @returns
  */
  getFormatedDate(date) {
    return moment__WEBPACK_IMPORTED_MODULE_3___default()(date, "DD/MM/YYYY").format("DD MMM YYYY");
  }
  convertToMMDDYYYY(dateString) {
    // Expecting dateString like "14/11/2025"
    const [day, month, year] = dateString.split('/');
    return `${month}/${day}/${year}`;
  }
  getshyamoliDateFormat(date, type) {
    const outputDate = this.convertToMMDDYYYY(date);
    date = outputDate;
    const traveldate = new Date(date);
    const formattedDate = this.dateService.formattedDateData(traveldate);
    if (type == '1') {
      return formattedDate.day;
      // <h1>{{ globalData.DEPARTURE_DATE.day }}</h1>
      // <h1>{{ globalData.DEPARTURE_DATE.monthNameShort }}</h1>
    } else {
      return formattedDate.monthNameShort;
    }
  }
  isToday(date) {
    let today = new Date();
    let tDate = new Date(date);
    if (tDate.getDate() == today.getDate() && tDate.getMonth() == today.getMonth() && tDate.getFullYear() == today.getFullYear()) {
      return true;
    }
    return false;
  }
  isCheckPastDate(travelDate) {
    return this.dateService.isPastDate(travelDate);
  }
  isPastDate(travelDate) {
    return this.isCheckPastDate(travelDate) && !this.isToday(this.TodayDate);
  }
  isDateGreaterOrEqual(date1, date2) {
    // Convert the date strings to Date objects
    const parts1 = date1.split('/');
    const parts2 = date2.split('/');
    // Format: month/day/year
    const d1 = new Date(parts1[2], parts1[1] - 1, parts1[0]); // Month is 0-indexed
    const d2 = new Date(parts2[2], parts2[1] - 1, parts2[0]); // Month is 0-indexed
    // Compare the dates
    return d1 >= d2;
  }
  gotoMaps(type, lat, long) {
    var _this2 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.platform.is('ios')) {
        const url = `http://maps.apple.com/maps?q=${lat},${long}`;
        const browser = _this2.inAppBrowser.create(url, '_system');
        browser.show();
      } else {
        var url = 'http://maps.google.com/maps?q=loc:' + lat + ',' + long;
        window.open(url, '_system');
      }
    })();
  }
  getMobileNumber(num) {
    if (!num.includes('+')) {
      num = '+' + num;
      return num;
    } else {
      return num;
    }
  }
  qrClick(pnr, seatNo) {
    this.trackBusModal1 = !this.trackBusModal1;
    this.qrPnr = pnr;
    this.qrSeatNo = seatNo;
  }
  cancelTicketDetails() {
    localStorage.setItem('segmentDisplayName', 'Upcoming');
    if (!this.redirectToHome) {
      if (this.newBooking) {
        this.navCtrl.navigateBack('tabs/home');
      } else {
        this.navCtrl.navigateBack('tabs/more');
      }
    } else {
      if (this.newBooking == undefined) {
        this.navCtrl.navigateBack('tabs/more');
      } else {
        this.navCtrl.navigateBack('tabs/my-bookings');
      }
    }
  }
  copyCode(couponCode) {
    // if (this.platform.is('cordova')) {
    //   this.clipboard.copy(couponCode).then(() => {
    //     this.util.showToast("PNR copied to clipboard")
    //   }).catch((error) => {
    //     this.util.showToast("'Error copying PNR");
    //   });
    // } else {
    this.copyToBrowserClipboard(couponCode);
    // }
  }
  copyToBrowserClipboard(couponCode) {
    const textArea = document.createElement('textarea');
    textArea.value = couponCode;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    this.util.showToast("PNR copied to clipboard");
  }
  getPassengerName(details) {
    for (let i = 0; i < details.length; i++) {
      if (details[i].ticket_status !== "Cancelled") {
        return details[i].name.trim(); // Returning the name if the ticket is not cancelled
      }
    }
    return details[0].name.trim(); // If all are cancelled, return the first passenger's name
  }
  areAllTicketsCancelled() {
    return this.ticketDetails.passenger_details.every(passenger => passenger.ticket_status === 'Cancelled');
  }
  goToMyTrips() {
    this.navCtrl.navigateRoot('/my-bookings');
    /*this.router.navigate(['my-bookings']).then(() => {
      window.location.reload();
    });*/
  }
  goToReschedulePage() {
    let navigationExtras = {
      queryParams: {
        "pnr_number": this.ticketDetails.ticket_number,
        "is_from_ticketdetails": true
      }
    };
    this.navCtrl.navigateForward('prepostone', navigationExtras);
  }
  bookAgain() {
    this.navCtrl.navigateForward('available-routes');
  }
  toggleRadioGroup() {
    this.isShow = !this.isShow;
  }
  toggleRadioGroupR() {
    this.isShowR = !this.isShowR;
  }
  goToMorePage() {
    this.navCtrl.navigateRoot('tabs/more');
  }
  showDiscount(fareBreakupDetails) {
    let discount = 0;
    discount = (fareBreakupDetails.offer_discount ? fareBreakupDetails.offer_discount : 0) + (fareBreakupDetails.ebooking_discount ? fareBreakupDetails.ebooking_discount : 0) + (fareBreakupDetails.previous_pnr_discount ? fareBreakupDetails.previous_pnr_discount : 0) + (fareBreakupDetails.privilege_card_discount ? fareBreakupDetails.privilege_card_discount : 0);
    if (discount == 0) {
      return false;
    } else return true;
  }
  formatTravelDate(dateStr) {
    const [day, month, year] = dateStr.split('/');
    return new Date(+year, +month - 1, +day);
  }
}
_BookingDetailsPage = BookingDetailsPage;
_BookingDetailsPage.ɵfac = function BookingDetailsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BookingDetailsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_6__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_7__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_8__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_9__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_10__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_11__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_12__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_authentication__WEBPACK_IMPORTED_MODULE_15__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_17__.InAppBrowser), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_18__.FirebaseAnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone));
};
_BookingDetailsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _BookingDetailsPage,
  selectors: [["app-booking-details"]],
  standalone: false,
  decls: 6,
  vars: 6,
  consts: [["sbTicket", ""], [4, "ngIf"], [3, "translucent"], [2, "--background", "var(--homeBgColor) !important", "--opacity", "8 !important", 3, "ngClass"], ["mode", "md", "slot", "start", 3, "click", "ngStyle"], ["text", "", 3, "click", 4, "ngIf"], [1, "center-title", 3, "ngStyle"], [3, "ngClass", 4, "ngIf"], ["text", "", 3, "click"], [3, "ngClass"], ["mode", "md", "scrollable", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "whole center", 3, "click", 4, "ngIf"], ["mode", "md", "scrollable", "", 3, "ngModelChange", "ngModel"], ["value", "future", 2, "color", "#fff"], ["value", "previous", 2, "color", "#fff"], [1, "whole", "center", 3, "click"], [1, "legend-box"], [1, "txt-msg"], ["size", "7", 1, "brws-txt", 3, "click"], ["size", "5", 3, "click", "ngClass"], ["size", "12"], [1, "ion-no-margin", "ion-padding-top", "ion-padding-bottom", "card-cbus"], ["size", "4", 1, "ion-no-padding"], [2, "margin-bottom", "0"], ["size", "4 ", 1, "ion-no-padding"], [2, "color", "#A0A0A0"], ["size", "4", 2, "display", "flex", "align-items", "center", "padding", "0"], ["width", "24", "height", "8", "viewBox", "0 0 24 8", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["style", "\n                        color: #A0A0A0;\n                        font-size: 14px;\n                      ", 4, "ngIf"], [1, "", 2, "margin", "0", "color", "#000 !important", "margin-top", "13px !important", "font-weight", "bold"], ["style", "\n                      margin: 0;\n                      position: absolute;\n                      left: 30%;\n                      top: 5px;color: #A0A0A0;\n                      font-size: 14px;\n                    ", 4, "ngIf"], [1, "", 2, "margin", "0", "color", "#000 !important", "margin-top", "13px!important", "font-weight", "bold"], [1, "card-corner-design", 2, "position", "relative"], [1, "card-circular-corner", "ion-margin-top", "ion-margin-bottom"], [1, "dash-line"], [1, "ion-padding"], ["size", "12", 1, "pnr-status"], ["size", "2", 2, "display", "flex", "justify-content", "center", "align-items", "center"], [1, "pnr-circle-status"], ["width", "23", "height", "23", "viewBox", "0 0 23 23", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["style", " height: 30px; width: 30px;", 3, "src", 4, "ngIf"], ["size", "10"], [2, "color", "#333333"], [2, "margin-top", "5px"], ["size", "12", 1, "ticket-details"], ["size", "6"], [1, "ticket-details-description"], [1, "ticket-details-status"], ["size", "6", 1, "ion-justify-content-end"], [1, "ticket-details-description", 2, "text-align", "end"], [1, "ticket-details-status", 2, "text-align", "end"], ["style", "margin-top: 30px;", 4, "ngFor", "ngForOf"], [1, "ion-no-padding"], ["size", "12", 1, ""], [2, "margin-bottom", "22px"], ["size", "2", 2, "display", "flex", "justify-content", "center"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["opacity", "0.8", "clip-path", "url(#clip0_6_6126)"], ["d", "M9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12Z", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12Z", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 2V4", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 20V22", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M20 12H22", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M2 12H4", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "clip0_6_6126"], ["width", "24", "height", "24", "fill", "white"], [1, "pickup-point"], [1, "pickup-detail"], ["class", "pickup-detail-view", "style", "display: inline-flex; margin-left: -3px;", 3, "click", 4, "ngIf"], ["style", "display: inline-flex; margin-left: -3px;", 3, "click", 4, "ngIf"], ["class", "ion-padding", 4, "ngIf"], ["size", "12", 4, "ngIf"], [1, "ion-padding", "payment-details"], ["size", "8", 2, "display", "flex", "justify-content", "start", "align-items", "center"], [1, "left"], ["size", "4", 2, "display", "flex", "justify-content", "end", "align-items", "center"], [1, "right"], ["size", "8", "style", "display: flex; justify-content: start; align-items: center", 4, "ngIf"], ["size", "4", "style", "display: flex; justify-content: end; align-items: center", 4, "ngIf"], [1, "left", 2, "font-weight", "500"], [1, "right", 2, "font-weight", "500"], [1, "payment-details-line", "ion-margin-bottom", "ion-margin-top"], ["size", "6", 4, "ngIf"], ["width", "24", "height", "8", "viewBox", "0 0 24 8", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M16.5085 6.42781C16.3873 5.70013 16.6298 5.21501 17.2362 4.85117C17.7213 4.60862 18.3277 4.60861 18.8128 4.97245C19.298 5.33629 19.5405 5.82141 19.4192 6.42781H19.5405C20.5108 6.42781 21.481 6.42781 22.5725 6.42781C22.9363 6.42781 23.0576 6.30653 23.0576 5.94269C23.0576 5.21501 23.0576 4.36606 23.0576 3.63838C23.0576 3.5171 23.0576 3.39582 22.9363 3.39582C22.8151 3.27454 22.8151 3.27454 22.8151 3.15326C22.8151 2.18303 22.6938 1.33407 22.6938 0.363838C22.6938 0.12128 22.5725 0 22.3299 0C21.481 0 20.632 0 19.7831 0C15.9021 0 12.1425 0 8.26154 0C6.07851 0 3.7742 0 1.59117 0C1.10605 0 0.620937 0.363838 0.499659 0.848955V0.970235C0.499659 2.42559 0.499659 3.88094 0.499659 5.45757C0.499659 5.57885 0.620934 5.70013 0.742214 5.70013C1.22733 5.82141 1.83373 5.94269 2.31885 6.06397C2.92525 6.18525 3.65292 6.30653 4.25932 6.42781C4.50187 6.42781 4.86571 6.54909 5.22955 6.54909C5.22955 5.94269 5.35083 5.33629 5.95723 4.97245C6.19979 4.85117 6.56362 4.7299 6.80618 4.7299C7.65514 4.85117 8.26154 5.57885 8.14026 6.42781C10.8084 6.42781 13.5978 6.42781 16.5085 6.42781ZM12.5063 0.848955C12.9914 0.848955 13.5978 0.848955 14.0829 0.848955C14.3255 0.848955 14.5681 0.970235 14.5681 1.33407C14.5681 1.69791 14.5681 2.06175 14.5681 2.54687C14.5681 2.9107 14.4468 3.03198 14.0829 3.03198C12.9914 3.03198 12.0212 3.03198 10.9297 3.03198C10.6871 3.03198 10.4446 2.9107 10.4446 2.54687C10.4446 2.18303 10.4446 1.69791 10.4446 1.33407C10.4446 1.09151 10.5658 0.848955 10.9297 0.848955C11.4148 0.848955 12.0212 0.848955 12.5063 0.848955ZM17.2362 0.848955C17.7213 0.848955 18.3277 0.848955 18.8128 0.848955C19.0554 0.848955 19.1767 0.970235 19.298 1.21279C19.298 1.57663 19.298 2.06175 19.298 2.42559C19.298 2.66815 19.1767 2.78943 18.9341 2.78943C17.8426 2.78943 16.7511 2.78943 15.6596 2.78943C15.417 2.78943 15.2957 2.66815 15.2957 2.42559C15.2957 2.06175 15.2957 1.57663 15.2957 1.21279C15.2957 0.848955 15.417 0.727677 15.7809 0.727677C16.266 0.848956 16.7511 0.848955 17.2362 0.848955ZM7.77642 0.848955C8.26154 0.848955 8.86793 0.848955 9.35305 0.848955C9.59561 0.848955 9.71689 0.970235 9.71689 1.21279C9.71689 1.57663 9.71689 2.06175 9.71689 2.42559C9.71689 2.66815 9.59561 2.78943 9.35305 2.78943C8.26154 2.78943 7.17002 2.78943 6.07851 2.78943C5.83595 2.78943 5.71467 2.66815 5.71467 2.42559C5.71467 2.06175 5.71467 1.57663 5.71467 1.21279C5.71467 0.848955 5.83595 0.727677 6.19979 0.727677C6.6849 0.848956 7.2913 0.848955 7.77642 0.848955ZM3.04652 2.91071C2.56141 2.91071 1.95501 2.91071 1.46989 2.91071C1.22733 2.91071 1.10605 2.78942 1.10605 2.54687C1.10605 2.30431 1.10605 2.06175 1.10605 1.69791C1.10605 1.33407 1.22733 1.09151 1.59117 0.970235C1.71245 0.848956 1.95501 0.848955 2.19757 0.848955C3.04652 0.848955 3.89548 0.848955 4.74443 0.848955C5.10827 0.848955 5.22955 0.970235 5.22955 1.33407C5.22955 1.69791 5.22955 2.06175 5.22955 2.42559C5.22955 2.78943 5.10827 2.91071 4.74443 2.91071C4.13804 2.91071 3.53164 2.91071 3.04652 2.91071ZM21.7235 3.27454C21.7235 3.88094 21.7235 4.60862 21.7235 5.21501C21.7235 5.45757 21.6023 5.57885 21.3597 5.57885C21.1171 5.57885 20.8746 5.57885 20.632 5.57885C20.3895 5.57885 20.1469 5.45757 20.1469 5.09373C20.1469 3.75966 20.1469 2.42559 20.1469 1.21279C20.1469 0.970235 20.2682 0.848956 20.5108 0.727677C20.7533 0.727677 20.9959 0.727677 21.1171 0.727677C21.481 0.727677 21.6023 0.848955 21.6023 1.21279C21.7235 2.06175 21.7235 2.66815 21.7235 3.27454Z", "fill", "#191966"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M19.0557 6.06396C19.0557 5.45756 18.4493 4.97244 17.8429 4.97244C17.2365 4.97244 16.7514 5.45756 16.7514 6.18524C16.7514 6.79163 17.2365 7.27675 17.8429 7.27675C18.5705 7.27675 19.0557 6.79163 19.0557 6.06396ZM17.3578 6.18524C17.3578 5.94268 17.6003 5.57884 17.8429 5.57884C18.0854 5.57884 18.328 5.8214 18.4493 6.06396C18.4493 6.30652 18.2067 6.67036 17.9642 6.67036C17.6003 6.67036 17.3578 6.42779 17.3578 6.18524Z", "fill", "#191966"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.56377 7.27675C7.17017 7.27675 7.77657 6.79163 7.65529 6.06396C7.65529 5.45756 7.17017 4.97244 6.56377 4.97244C5.95738 4.97244 5.47226 5.45756 5.47226 6.18524C5.35098 6.79163 5.8361 7.27675 6.56377 7.27675ZM5.95738 6.06396C5.95738 5.8214 6.19994 5.57884 6.4425 5.57884C6.68505 5.57884 6.92761 5.8214 6.92761 6.18524C6.92761 6.42779 6.68505 6.67036 6.32122 6.67036C6.19994 6.67036 5.95738 6.4278 5.95738 6.06396Z", "fill", "#191966"], [2, "color", "#A0A0A0", "font-size", "14px"], [2, "margin", "0", "position", "absolute", "left", "30%", "top", "5px", "color", "#A0A0A0", "font-size", "14px"], ["width", "23", "height", "23", "viewBox", "0 0 23 23", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M6.46973 7.04369L3.66703 4.24098C-0.282238 8.50874 -0.282238 15.1333 3.66703 19.4648L6.46973 16.6621C4.04921 13.9231 4.04921 9.78269 6.46973 7.04369Z", "fill", "#FBAE17"], ["d", "M7.04294 17.2353L4.24023 20.038C8.50799 23.9873 15.1326 23.9873 19.464 20.038L16.6613 17.2353C13.9223 19.6559 9.78195 19.6559 7.04294 17.2353Z", "fill", "#FBAE17"], ["d", "M17.2344 16.6621L20.0371 19.4648C23.9863 15.197 23.9863 8.57244 20.0371 4.24098L17.2344 7.04369C19.6549 9.78269 19.6549 13.9231 17.2344 16.6621Z", "fill", "#BBBDBF"], ["d", "M16.6613 6.4704L19.464 3.6677C15.1963 -0.281567 8.57169 -0.281567 4.24023 3.6677L7.04294 6.4704C9.78195 4.04989 13.9223 4.04989 16.6613 6.4704Z", "fill", "#FBAE17"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M9.33617 13.4135C9.39987 13.0313 9.27247 12.7765 8.95398 12.5854C8.69919 12.458 8.3807 12.458 8.12591 12.6491C7.87112 12.8402 7.74372 13.095 7.80742 13.4135H7.74372C7.23414 13.4135 6.72456 13.4135 6.15128 13.4135C5.96018 13.4135 5.89648 13.3498 5.89648 13.1587C5.89648 12.7765 5.89648 12.3306 5.89648 11.9484C5.89648 11.8847 5.89648 11.821 5.96018 11.821C6.02388 11.7573 6.02388 11.7573 6.02388 11.6936C6.02388 11.184 6.08758 10.7382 6.08758 10.2286C6.08758 10.1012 6.15128 10.0375 6.27867 10.0375C6.72456 10.0375 7.17044 10.0375 7.61633 10.0375C9.65466 10.0375 11.6293 10.0375 13.6676 10.0375C14.8142 10.0375 16.0244 10.0375 17.171 10.0375C17.4258 10.0375 17.6806 10.2286 17.7443 10.4834V10.5471C17.7443 11.3114 17.7443 12.0758 17.7443 12.9039C17.7443 12.9676 17.6806 13.0313 17.6169 13.0313C17.3621 13.095 17.0436 13.1587 16.7888 13.2224C16.4703 13.2861 16.0881 13.3498 15.7696 13.4135C15.6423 13.4135 15.4512 13.4772 15.2601 13.4772C15.2601 13.1587 15.1964 12.8402 14.8779 12.6491C14.7505 12.5854 14.5594 12.5217 14.432 12.5217C13.9861 12.5854 13.6676 12.9676 13.7313 13.4135C12.33 13.4135 10.8649 13.4135 9.33617 13.4135ZM11.4382 10.4834C11.1834 10.4834 10.8649 10.4834 10.6101 10.4834C10.4827 10.4834 10.3553 10.5471 10.3553 10.7382C10.3553 10.9292 10.3553 11.1203 10.3553 11.3751C10.3553 11.5662 10.419 11.6299 10.6101 11.6299C11.1834 11.6299 11.693 11.6299 12.2663 11.6299C12.3937 11.6299 12.5211 11.5662 12.5211 11.3751C12.5211 11.184 12.5211 10.9292 12.5211 10.7382C12.5211 10.6108 12.4574 10.4834 12.2663 10.4834C12.0115 10.4834 11.693 10.4834 11.4382 10.4834ZM8.95398 10.4834C8.69919 10.4834 8.3807 10.4834 8.12591 10.4834C7.99851 10.4834 7.93482 10.5471 7.87112 10.6745C7.87112 10.8655 7.87112 11.1203 7.87112 11.3114C7.87112 11.4388 7.93482 11.5025 8.06221 11.5025C8.63549 11.5025 9.20877 11.5025 9.78205 11.5025C9.90945 11.5025 9.97315 11.4388 9.97315 11.3114C9.97315 11.1203 9.97315 10.8655 9.97315 10.6745C9.97315 10.4834 9.90945 10.4197 9.71835 10.4197C9.46356 10.4834 9.20877 10.4834 8.95398 10.4834ZM13.9224 10.4834C13.6676 10.4834 13.3491 10.4834 13.0943 10.4834C12.9669 10.4834 12.9032 10.5471 12.9032 10.6745C12.9032 10.8655 12.9032 11.1203 12.9032 11.3114C12.9032 11.4388 12.9669 11.5025 13.0943 11.5025C13.6676 11.5025 14.2409 11.5025 14.8142 11.5025C14.9416 11.5025 15.0053 11.4388 15.0053 11.3114C15.0053 11.1203 15.0053 10.8655 15.0053 10.6745C15.0053 10.4834 14.9416 10.4197 14.7505 10.4197C14.4957 10.4834 14.1772 10.4834 13.9224 10.4834ZM16.4066 11.5662C16.6614 11.5662 16.9799 11.5662 17.2347 11.5662C17.3621 11.5662 17.4258 11.5025 17.4258 11.3751C17.4258 11.2477 17.4258 11.1203 17.4258 10.9292C17.4258 10.7382 17.3621 10.6108 17.171 10.5471C17.1073 10.4834 16.9799 10.4834 16.8525 10.4834C16.4066 10.4834 15.9607 10.4834 15.5149 10.4834C15.3238 10.4834 15.2601 10.5471 15.2601 10.7382C15.2601 10.9292 15.2601 11.1203 15.2601 11.3114C15.2601 11.5025 15.3238 11.5662 15.5149 11.5662C15.8333 11.5662 16.1518 11.5662 16.4066 11.5662ZM6.59716 11.7573C6.59716 12.0758 6.59716 12.458 6.59716 12.7765C6.59716 12.9039 6.66086 12.9676 6.78825 12.9676C6.91565 12.9676 7.04305 12.9676 7.17044 12.9676C7.29784 12.9676 7.42523 12.9039 7.42523 12.7128C7.42523 12.0121 7.42523 11.3114 7.42523 10.6745C7.42523 10.5471 7.36153 10.4834 7.23414 10.4197C7.10674 10.4197 6.97935 10.4197 6.91565 10.4197C6.72456 10.4197 6.66086 10.4834 6.66086 10.6745C6.59716 11.1203 6.59716 11.4388 6.59716 11.7573Z", "fill", "#BBBDBF"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7.99805 13.2224C7.99805 12.9039 8.31654 12.6491 8.63503 12.6491C8.95351 12.6491 9.20831 12.9039 9.20831 13.2861C9.20831 13.6046 8.95351 13.8594 8.63503 13.8594C8.25284 13.8594 7.99805 13.6046 7.99805 13.2224ZM8.88982 13.2861C8.88982 13.1587 8.76242 12.9676 8.63503 12.9676C8.50763 12.9676 8.38023 13.095 8.31654 13.2224C8.31654 13.3498 8.44393 13.5409 8.57133 13.5409C8.76242 13.5409 8.88982 13.4135 8.88982 13.2861Z", "fill", "#BBBDBF"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M14.559 13.8594C14.2405 13.8594 13.922 13.6046 13.9857 13.2224C13.9857 12.9039 14.2405 12.6491 14.559 12.6491C14.8775 12.6491 15.1323 12.9039 15.1323 13.2861C15.196 13.6046 14.9412 13.8594 14.559 13.8594ZM14.8775 13.2224C14.8775 13.095 14.7501 12.9676 14.6227 12.9676C14.4953 12.9676 14.3679 13.095 14.3679 13.2861C14.3679 13.4135 14.4953 13.5409 14.6864 13.5409C14.7501 13.5409 14.8775 13.4135 14.8775 13.2224Z", "fill", "#BBBDBF"], [2, "height", "30px", "width", "30px", 3, "src"], [2, "margin-top", "30px"], [1, "pickup-detail-view", 2, "display", "inline-flex", "margin-left", "-3px", 3, "click"], ["src", "./assets/icon/cbuslocation.svg", "item-start", "", 2, "height", "20px", "width", "20px"], [1, "themeone-viewmap-txt", 2, "margin", "auto", "margin-top", "4px"], [2, "display", "inline-flex", "margin-left", "-3px", 3, "click"], [3, "click"], ["size", "8"], [2, "color", "#333"], ["size", "4", 1, "ion-justify-content-end", "ion-align-items-center", 2, "display", "flex"], [1, "track-circle"], ["src", "./assets/icon/themeone-trackmybus.svg", "name", "location-outline", 2, "height", "30px", "width", "30px"], ["mode", "md", "mode", "md", "expand", "block", 1, "search-btn", 2, "--background", "var(--iconsAndButtonsColor)", "--color", "var(--primaryText)", "font-weight", "bold", "height", "50px", 3, "click", "ngClass"], [1, "confirm-btn", 2, "font-size", "16px"], [2, "height", "1px", "border-top", "1px solid #dfdfdf"], [1, "bus-contact"], [3, "href"], [1, "light-font", 2, "margin-left", "10px"], [2, "margin-left", "10px", "margin-top", "5px"], [2, "color", "#000", "text-decoration", "none"], [1, "bus-contact-circle"], ["width", "26", "height", "26", "viewBox", "0 0 26 26", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0_6_6102)"], ["d", "M5.41667 4.33334H9.75L11.9167 9.75001L9.20833 11.375C10.3685 13.7275 12.2725 15.6315 14.625 16.7917L16.25 14.0833L21.6667 16.25V20.5833C21.6667 21.158 21.4384 21.7091 21.0321 22.1154C20.6257 22.5217 20.0746 22.75 19.5 22.75C15.2742 22.4932 11.2885 20.6987 8.2949 17.7051C5.3013 14.7115 3.5068 10.7258 3.25 6.50001C3.25 5.92537 3.47827 5.37427 3.8846 4.96795C4.29093 4.56162 4.84203 4.33334 5.41667 4.33334Z", "fill", "white"], ["id", "clip0_6_6102"], ["width", "26", "height", "26", "fill", "white"], [1, "ion-no-padding", 3, "click"], ["size", "2", 2, "display", "flex", "justify-content", "end", "align-items", "center"], ["src", "././assets/icon/cbusnext.svg", "alt", ""], ["expand", "block", "fill", "clear", 1, "download-ticket", 3, "click"], ["slot", "end", "src", "assets/new/download.svg"], ["size", "2"], ["src", "assets/new/share.svg", 1, "share-button", 3, "click"], [1, "ion-no-margin", "ion-padding-top", "ion-padding-bottom"], ["width", "23", "height", "8", "viewBox", "0 0 23 8", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["style", "\n                        font-size: 14px;color: #A0A0A0;\n                      ", 4, "ngIf"], [1, "", 2, "margin", "0", "color", "#000 !important", "margin-top", "13px!important"], ["style", "\n                      margin: 0;\n                      position: absolute;\n                      left: 30%;\n                      top: 5px;\n                      font-size: 14px;color: #A0A0A0;\n                    ", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["opacity", "0.5", "clip-path", "url(#clip0_6_6126)"], ["opacity", "0.5", "clip-path", "url(#clip0_6_6134)"], ["d", "M9 11C9 11.7956 9.31607 12.5587 9.87868 13.1213C10.4413 13.6839 11.2044 14 12 14C12.7956 14 13.5587 13.6839 14.1213 13.1213C14.6839 12.5587 15 11.7956 15 11C15 10.2044 14.6839 9.44129 14.1213 8.87868C13.5587 8.31607 12.7956 8 12 8C11.2044 8 10.4413 8.31607 9.87868 8.87868C9.31607 9.44129 9 10.2044 9 11Z", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M17.657 16.657L13.414 20.9C13.039 21.2746 12.5306 21.4851 12.0005 21.4851C11.4704 21.4851 10.962 21.2746 10.587 20.9L6.343 16.657C5.22422 15.5382 4.46234 14.1127 4.15369 12.5609C3.84504 11.009 4.00349 9.40051 4.60901 7.93873C5.21452 6.47694 6.2399 5.22754 7.55548 4.3485C8.87107 3.46947 10.4178 3.00029 12 3.00029C13.5822 3.00029 15.1289 3.46947 16.4445 4.3485C17.7601 5.22754 18.7855 6.47694 19.391 7.93873C19.9965 9.40051 20.155 11.009 19.8463 12.5609C19.5377 14.1127 18.7758 15.5382 17.657 16.657Z", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "clip0_6_6134"], [1, "right", 2, "font-weight", "600"], ["width", "23", "height", "8", "viewBox", "0 0 23 8", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.54909 6.42781C6.67037 5.70013 6.42781 5.21501 5.82141 4.85117C5.33629 4.60862 4.7299 4.60861 4.24478 4.97245C3.75966 5.33629 3.5171 5.82141 3.63838 6.42781H3.5171C2.54687 6.42781 1.57663 6.42781 0.485118 6.42781C0.12128 6.42781 0 6.30653 0 5.94269C0 5.21501 0 4.36606 0 3.63838C0 3.5171 4.60837e-07 3.39582 0.12128 3.39582C0.242559 3.27454 0.242558 3.27454 0.242558 3.15326C0.242558 2.18303 0.363838 1.33407 0.363838 0.363838C0.363838 0.12128 0.485118 0 0.727677 0C1.57663 0 2.42559 0 3.27454 0C7.15548 0 10.9151 0 14.7961 0C16.9791 0 19.2834 0 21.4664 0C21.9516 0 22.4367 0.363838 22.558 0.848955V0.970235C22.558 2.42559 22.558 3.88094 22.558 5.45757C22.558 5.57885 22.4367 5.70013 22.3154 5.70013C21.8303 5.82141 21.2239 5.94269 20.7388 6.06397C20.1324 6.18525 19.4047 6.30653 18.7983 6.42781C18.5557 6.42781 18.1919 6.54909 17.8281 6.54909C17.8281 5.94269 17.7068 5.33629 17.1004 4.97245C16.8578 4.85117 16.494 4.7299 16.2514 4.7299C15.4025 4.85117 14.7961 5.57885 14.9174 6.42781C12.2492 6.42781 9.45979 6.42781 6.54909 6.42781ZM10.5513 0.848955C10.0662 0.848955 9.45979 0.848955 8.97467 0.848955C8.73211 0.848955 8.48956 0.970235 8.48956 1.33407C8.48956 1.69791 8.48956 2.06175 8.48956 2.54687C8.48956 2.9107 8.61084 3.03198 8.97467 3.03198C10.0662 3.03198 11.0364 3.03198 12.1279 3.03198C12.3705 3.03198 12.6131 2.9107 12.6131 2.54687C12.6131 2.18303 12.6131 1.69791 12.6131 1.33407C12.6131 1.09151 12.4918 0.848955 12.1279 0.848955C11.6428 0.848955 11.0364 0.848955 10.5513 0.848955ZM5.82141 0.848955C5.33629 0.848955 4.7299 0.848955 4.24478 0.848955C4.00222 0.848955 3.88094 0.970235 3.75966 1.21279C3.75966 1.57663 3.75966 2.06175 3.75966 2.42559C3.75966 2.66815 3.88094 2.78943 4.1235 2.78943C5.21501 2.78943 6.30653 2.78943 7.39804 2.78943C7.6406 2.78943 7.76188 2.66815 7.76188 2.42559C7.76188 2.06175 7.76188 1.57663 7.76188 1.21279C7.76188 0.848955 7.6406 0.727677 7.27676 0.727677C6.79164 0.848956 6.30653 0.848955 5.82141 0.848955ZM15.2812 0.848955C14.7961 0.848955 14.1897 0.848955 13.7046 0.848955C13.462 0.848955 13.3407 0.970235 13.3407 1.21279C13.3407 1.57663 13.3407 2.06175 13.3407 2.42559C13.3407 2.66815 13.462 2.78943 13.7046 2.78943C14.7961 2.78943 15.8876 2.78943 16.9791 2.78943C17.2217 2.78943 17.3429 2.66815 17.3429 2.42559C17.3429 2.06175 17.3429 1.57663 17.3429 1.21279C17.3429 0.848955 17.2217 0.727677 16.8578 0.727677C16.3727 0.848956 15.7663 0.848955 15.2812 0.848955ZM20.0111 2.91071C20.4962 2.91071 21.1026 2.91071 21.5877 2.91071C21.8303 2.91071 21.9516 2.78942 21.9516 2.54687C21.9516 2.30431 21.9516 2.06175 21.9516 1.69791C21.9516 1.33407 21.8303 1.09151 21.4664 0.970235C21.3452 0.848956 21.1026 0.848955 20.8601 0.848955C20.0111 0.848955 19.1621 0.848955 18.3132 0.848955C17.9493 0.848955 17.8281 0.970235 17.8281 1.33407C17.8281 1.69791 17.8281 2.06175 17.8281 2.42559C17.8281 2.78943 17.9493 2.91071 18.3132 2.91071C18.9196 2.91071 19.526 2.91071 20.0111 2.91071ZM1.33407 3.27454C1.33407 3.88094 1.33407 4.60862 1.33407 5.21501C1.33407 5.45757 1.45535 5.57885 1.69791 5.57885C1.94047 5.57885 2.18303 5.57885 2.42559 5.57885C2.66815 5.57885 2.91071 5.45757 2.91071 5.09373C2.91071 3.75966 2.91071 2.42559 2.91071 1.21279C2.91071 0.970235 2.78943 0.848956 2.54687 0.727677C2.30431 0.727677 2.06175 0.727677 1.94047 0.727677C1.57663 0.727677 1.45535 0.848955 1.45535 1.21279C1.33407 2.06175 1.33407 2.66815 1.33407 3.27454Z", "fill", "#191966"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M4.00195 6.06393C4.00195 5.45753 4.60835 4.97241 5.21475 4.97241C5.82114 4.97241 6.30626 5.45753 6.30626 6.18521C6.30626 6.7916 5.82114 7.27672 5.21475 7.27672C4.48707 7.27672 4.00195 6.7916 4.00195 6.06393ZM5.69986 6.18521C5.69986 5.94265 5.4573 5.57881 5.21475 5.57881C4.97219 5.57881 4.72963 5.82137 4.60835 6.06393C4.60835 6.30649 4.85091 6.67032 5.09347 6.67032C5.4573 6.67032 5.69986 6.42776 5.69986 6.18521Z", "fill", "#191966"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M16.4938 7.27672C15.8874 7.27672 15.281 6.7916 15.4023 6.06393C15.4023 5.45753 15.8874 4.97241 16.4938 4.97241C17.1002 4.97241 17.5854 5.45753 17.5854 6.18521C17.7066 6.7916 17.2215 7.27672 16.4938 7.27672ZM17.1002 6.06393C17.1002 5.82137 16.8577 5.57881 16.6151 5.57881C16.3726 5.57881 16.13 5.82137 16.13 6.18521C16.13 6.42776 16.3726 6.67032 16.7364 6.67032C16.8577 6.67032 17.1002 6.42777 17.1002 6.06393Z", "fill", "#191966"], [2, "font-size", "14px", "color", "#A0A0A0"], [2, "margin", "0", "position", "absolute", "left", "30%", "top", "5px", "font-size", "14px", "color", "#A0A0A0"], [1, "search-txt", "phone-confirm-txt"], [1, "edit-ticket"], ["style", "color: #A0A0A0;\n                      font-size: 14px;\n                    ", 4, "ngIf"], ["mode", "md", "mode", "md", "expand", "block", 1, "search-btn", 2, "--background", "var(--iconsAndButtonsColor)", "--color", "var(--primaryText)", 3, "click", "ngClass"], [1, "confirm-btn"], [2, "margin-top", "50%"], [2, "font-size", "35px", "display", "flex", "align-items", "center", "justify-content", "center"], ["src", "././assets/icon/UnconfirmedEmoji.svg"], [2, "text-align", "center", "font-size", "16px"], [2, "display", "flex", "align-items", "center", "justify-content", "center"], ["mode", "md", 1, "search-btn", 2, "--background", "var(--iconsAndButtonsColor)", "--color", "var(--primaryText)", 3, "click"], [1, "ourbustheme", 3, "ngStyle"], ["mode", "md", 2, "padding", "8px"], ["size", "2", 2, "display", "flex"], ["mode", "md", "style", "padding-bottom: 6px;", "class", "center", 4, "ngIf"], ["mode", "md", "style", "padding-bottom: 6px;", "class", "center", 3, "click", 4, "ngIf"], ["size", "7", 2, "display", "flex", "align-items", "center", "justify-content", "left"], [1, "editProfile"], [2, "width", "120px", "height", "30px", 3, "src"], ["class", "whole center ourbustheme", 3, "click", 4, "ngIf"], ["class", "ourbustheme", 4, "ngIf"], ["mode", "md", 1, "center", 2, "padding-bottom", "6px"], ["defaultHref", "/home"], ["mode", "md", 1, "center", 2, "padding-bottom", "6px", 3, "click"], [1, "whole", "center", "ourbustheme", 3, "click"], [1, "legend-box", 2, "position", "absolute", "bottom", "0", "width", "100% !important", "padding", "12px", "border-radius", "8px 8px 0px 0px"], ["size", "12", 2, "text-align", "center"], ["alt", "QR Code", 3, "src"], [2, "text-align", "center", "margin-bottom", "8px"], [1, "ourbus-bustype-div"], ["size", "5", 1, "dwn-txt", 3, "click"], [1, "ourbustheme"], [2, "margin", "16px"], [1, "ourbus_heading"], [1, "ourbus_subhead"], [1, "ourbus_subhead_id"], [1, "pnr", 3, "click"], [1, "pnr_num"], [2, "width", "4px"], ["src", "././assets/icon/ourbusCopy.svg", 1, "copyCode"], ["style", "margin:5px;padding-left: 4px;position: absolute;z-index: 1000;", "class", "center-hr", 3, "click", 4, "ngIf"], ["style", "margin-bottom: 15px;", 4, "ngIf"], [1, "ourbus_subhead1"], [1, "ourbus_subhead2"], [2, "margin-left", "0px", "margin-right", "0px", "margin-bottom", "0px", "border-radius", "8px 8px 16px 16px", "box-shadow", "0 4px 16px rgba(0, 0, 0, 0.12)"], [1, "paddingSet", "ourbus_primary_card"], [1, "paddingSet"], ["size", "4"], [1, "ourbusMainText", 2, "text-align", "left"], [1, "ourbusSubText"], ["size", "4", 1, "ourbusCenterSet"], ["src", "././assets/icon/ourbus_ticket.svg", 2, "width", "72px", "height", "32px"], [2, "padding", "0px 8px"], ["size", "6.5"], [1, "ourbusDepartureText"], ["size", "1"], ["size", "4.5", 2, "text-align", "end"], [1, "departText2"], [1, "qrText"], [2, "margin-left", "44%"], [2, "border", "1px solid #D9D9D9", "display", "block", "width", "32px"], [2, "text-align", "center"], [2, "width", "115px", "height", "21px", 3, "src"], [1, "primaryCard"], [2, "display", "flex", "align-items", "center"], ["src", "././assets/icon/ourbus_multiUsers.svg", 2, "width", "24px", "height", "24px"], ["size", "7"], [1, "primaryPass", 2, "vertical-align", "super"], ["size", "1", 2, "padding-left", "2px"], ["src", "././assets/icon/OurbusSuitcase.svg", 2, "width", "24px", "height", "24px"], ["size", "10", 2, "padding-left", "0px"], ["size", "1", 2, "text-align", "end"], ["name", "chevron-down-outline", "style", "font-size: 22px;color: #4caf50;", 3, "click", 4, "ngIf"], ["name", "chevron-up-outline", "style", "font-size:22px;color: #4caf50;", 3, "click", 4, "ngIf"], ["size", "1", 2, "display", "flex"], ["src", "././assets/icon/ourbusAlarm.svg", 2, "width", "24px", "height", "24px"], ["size", "11", 2, "padding-left", "1px"], [2, "font-size", "16px", "font-weight", "700", "color", "var(--iconsAndButtonsColor)"], [1, "ourbus-dark-text-div"], ["class", "bookAgain", 3, "click", 4, "ngIf"], [3, "click", 4, "ngIf"], [1, "center-hr", 2, "margin", "5px", "padding-left", "4px", "position", "absolute", "z-index", "1000", 3, "click"], ["src", "./assets/icon/download_img.png", "alt", "", 1, "color-change", 2, "width", "20px"], [1, "ticket_Label"], [2, "margin-bottom", "15px"], ["size", "8", "class", "passenger-item", "style", "display: flex;align-items: center;", 4, "ngIf"], ["size", "8", 1, "passenger-item", 2, "display", "flex", "align-items", "center"], [1, "passenger-avatar"], [1, "primaryPassName"], ["name", "chevron-down-outline", 2, "font-size", "22px", "color", "#4caf50", 3, "click"], ["name", "chevron-up-outline", 2, "font-size", "22px", "color", "#4caf50", 3, "click"], [1, "bookAgain", 3, "click"], [2, "padding", "14px"], ["mode", "md", "expand", "block", 1, "search-btn", 2, "--background", "var(--iconsAndButtonsColor)", "--color", "var(--primaryText)", "height", "50px"], ["mode", "md", "expand", "block", 1, "search-btn", 2, "--background", "var(--iconsAndButtonsColor)", "--color", "var(--primaryText)", "height", "50px", 3, "click"], ["mode", "md", "expand", "block", 1, "search-btn", 2, "--background", "var(--iconsAndButtonsColor)", "--color", "var(--primaryText)", 3, "click"], ["class", "pnr", 3, "click", 4, "ngIf"], ["class", "ourbus_subhead_id", 4, "ngIf"], [2, "margin", "8px 0px"], ["mode", "ios", 2, "padding", "4px", 3, "ngModelChange", "ngModel"], ["value", "onward", 1, "ourbus_segment"], ["name", "arrow-forward-outline", 2, "width", "16px", "height", "16px", "margin-right", "8px"], ["value", "return"], ["name", "arrow-back-outline", 2, "width", "16px", "height", "16px", "margin-right", "8px"], ["name", "chevron-down-outline", "style", "font-size:22px;color: #4caf50;", 3, "click", 4, "ngIf"], [2, "font-size", "14px", "font-weight", "300", "color", "#2D2D2D"], ["style", "margin: 8px;", 3, "click", 4, "ngIf"], ["class", "center-hr", 3, "click", 4, "ngIf"], [1, "center-hr", 3, "click"], [2, "margin-left", "0px", "margin-right", "0px", "margin-bottom", "0px", "border-radius", "8px 8px 16px 16px"], [1, "ourbusSubText", 2, "text-align", "end"], ["size", "6.5", 2, "text-align", "start"], [1, "ourbusMainText"], [1, "ourbusMainText", 2, "text-align", "end"], ["style", "padding: 14px;", 4, "ngIf"], [2, "margin", "8px", 3, "click"], ["mode", "md", "expand", "block", 1, "search-btn", 2, "--background", "var(--iconsAndButtonsColor)", "--color", "var(--primaryText)"], [1, "search-txt"], [1, "seabirdtheme"], [1, "seabird_header-content"], ["mode", "md", 4, "ngIf"], ["size", "11"], [1, "headText", 2, "margin", "0px", "padding-left", "16px"], [1, "seabirdtheme", 2, "--background", "#F1F7FA"], ["style", "    border: 1px solid #626262;\n    border-radius: 10px;", 4, "ngIf"], ["mode", "md"], ["fill", "clear", 3, "click"], ["src", "./assets/icon/Close_SeaBird.svg", "slot", "icon-only", 2, "height", "12px", "width", "12px"], [2, "border", "1px solid #626262", "border-radius", "10px"], [1, "busRow"], ["size", "9", 1, "startPosition", 2, "padding-bottom", "0px"], ["size", "3", 1, "startPosition", 2, "padding-bottom", "0px", "text-align", "end"], [1, "Sea_bird_Completed", 3, "ngClass"], ["size", "12", 1, "startPosition", 2, "margin-top", "4px"], [2, "font-size", "14px", "font-weight", "700"], [2, "font-size", "12px", "font-weight", "700"], [2, "font-weight", "500"], [2, "color", "#999999"], [2, "color", "#2B28CE", "font-weight", "700", 3, "click"], ["size", "12", 1, "startPosition"], [1, "mainHeading"], ["style", "margin: 8px 0px;", 4, "ngFor", "ngForOf"], ["size", "6", 2, "text-align", "start", "color", "#000", "font-weight", "700"], [1, "name"], ["size", "6", 2, "text-align", "end", "color", "#000", "font-weight", "700"], [1, "value", 2, "font-weight", "400"], ["size", "8", 1, "startPosition"], [2, "text-align", "start", "color", "#000"], ["size", "4", 1, "startPosition"], [2, "text-align", "end", "font-size", "12px", "color", "#000"], [2, "text-align", "end", "font-size", "12px", "font-weight", "700", "color", "#000"], ["size", "12", 2, "text-align", "start", "color", "#000", "font-weight", "700"], ["size", "6", 2, "text-align", "start", "color", "#000"], [1, "value", 2, "text-align", "end", "font-size", "12px", "font-weight", "700", "color", "#000"], ["mode", "md", "class", "login-btn", "expand", "block", "style", "--background:var(--iconsAndButtonsColor);--color:var(--primaryText);height: 20px;", 3, "click", 4, "ngIf"], ["sie", "8", 1, "startPosition"], [2, "color", "#999999", "font-weight", "700"], ["sie", "4", 1, "startPosition"], [2, "text-align", "end", "font-size", "14px", "font-weight", "700", "color", "#000"], [2, "text-align", "end", "color", "#999999"], ["mode", "md", "expand", "block", 1, "login-btn", 2, "--background", "var(--iconsAndButtonsColor)", "--color", "var(--primaryText)", "height", "20px", 3, "click"], [2, "margin", "8px"], [1, "busCircle"], ["src", "././assets/icon/bus.svg", 2, "width", "20px", "height", "20px"], ["size", "7", 1, "startPosition"], [2, "color", "#191966", "font-weight", "700", 3, "click"], ["size", "3", 1, "startPosition", 2, "text-align", "end"], [1, "status"], ["src", "././assets/icon/seabird_passenger_logo.svg", 2, "width", "24px", "height", "24px", "margin-right", "8px"], ["size", "5", 1, "seabird_dwn-txt", 3, "click"], ["class", "sb-dialog-backdrop", 3, "click", 4, "ngIf"], [1, "sb-bk", 3, "fullscreen"], [1, "sb-bk-hero", 3, "ngClass"], [1, "sb-bk-hero__bar"], ["type", "button", "aria-label", "Close", 1, "sb-bk-iconbtn", 3, "click"], ["name", "close-outline", "aria-hidden", "true"], ["type", "button", "class", "sb-bk-iconbtn", "aria-label", "Share ticket", 3, "click", 4, "ngIf"], ["class", "sb-bk-badge", "aria-hidden", "true", 4, "ngIf"], [1, "sb-bk-hero__title"], [1, "sb-bk-hero__sub"], ["class", "sb-bk-body", 4, "ngIf"], ["class", "sb-pay-footer sb-sheet-footer", 4, "ngIf"], ["type", "button", "aria-label", "Share ticket", 1, "sb-bk-iconbtn", 3, "click"], ["name", "share-social-outline", "aria-hidden", "true"], ["aria-hidden", "true", 1, "sb-bk-badge"], ["name", "checkmark", 4, "ngIf"], ["name", "close", 4, "ngIf"], ["name", "time-outline", 4, "ngIf"], ["name", "checkmark"], ["name", "close"], ["name", "time-outline"], [1, "sb-bk-body"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "sb-bk-leg", 4, "ngIf"], [1, "sb-bk-ticket"], [1, "sb-bk-ticket__pnr"], [1, "sb-bk-label"], [1, "sb-bk-pnr"], [1, "sb-bk-pill", 3, "ngClass"], [1, "sb-bk-route"], [1, "sb-bk-route__end"], [1, "sb-bk-time"], [1, "sb-bk-city"], ["class", "sb-bk-date", 4, "ngIf"], [1, "sb-bk-route__mid"], ["src", "./assets/seabird-new/bk-bus.svg", "alt", "", "aria-hidden", "true"], [1, "sb-bk-route__end", "sb-bk-route__end--right"], ["aria-hidden", "true", 1, "sb-bk-tear"], [1, "sb-bk-notch", "sb-bk-notch--l"], [1, "sb-bk-perf"], [1, "sb-bk-notch", "sb-bk-notch--r"], [1, "sb-bk-grid"], [1, "sb-bk-val"], ["type", "button", "class", "sb-btn-primary sb-bk-confirm", 3, "click", 4, "ngIf"], ["class", "sb-bk-actions", 4, "ngIf"], [1, "sb-bk-leg"], [1, "sb-bk-date"], ["type", "button", 1, "sb-btn-primary", "sb-bk-confirm", 3, "click"], [1, "sb-bk-actions"], ["type", "button", "class", "sb-bk-action", 3, "click", 4, "ngIf"], ["type", "button", "class", "sb-bk-action sb-bk-action--danger", 3, "click", 4, "ngIf"], ["type", "button", 1, "sb-bk-action", 3, "click"], ["src", "./assets/seabird-new/bk-download.svg", "alt", "", "aria-hidden", "true"], ["type", "button", 1, "sb-bk-action", "sb-bk-action--danger", 3, "click"], ["src", "./assets/seabird-new/bk-cancel.svg", "alt", "", "aria-hidden", "true"], [1, "sb-pay-footer", "sb-sheet-footer"], ["type", "button", "class", "sb-btn-secondary sb-pay-footer__btn", 3, "click", 4, "ngIf"], ["type", "button", "class", "sb-btn-primary sb-pay-footer__btn", 3, "click", 4, "ngIf"], ["type", "button", 1, "sb-btn-secondary", "sb-pay-footer__btn", 3, "click"], ["type", "button", 1, "sb-btn-primary", "sb-pay-footer__btn", 3, "click"], ["src", "./assets/seabird-new/bk-track-bus.svg", "alt", "", "aria-hidden", "true"], [1, "sb-dialog-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "sbTrackBusTitle", 1, "sb-dialog", "sb-confirm", 3, "click"], [1, "sb-dialog__head", "sb-confirm__head"], ["type", "button", "aria-label", "Close", 1, "sb-icon-btn", "sb-dialog__close", 3, "click"], [1, "sb-confirm__icon"], ["name", "bus-outline", "aria-hidden", "true"], ["id", "sbTrackBusTitle", 1, "sb-confirm__title"], [1, "sb-confirm__actions"], ["type", "button", 1, "sb-btn-secondary", 3, "click"], ["type", "button", 1, "sb-btn-primary", 3, "click"], ["mode", "md", "slot", "start", 1, "center", 2, "padding-bottom", "6px"], ["class", "org-dest", 4, "ngIf"], ["class", "head", "style", "margin-left: -15px;", 4, "ngIf"], ["class", "track", 3, "click", 4, "ngIf"], ["class", "date", 4, "ngIf"], ["padding", "", 3, "fullscreen", 4, "ngIf"], [3, "fullscreen", 4, "ngIf"], [1, "org-dest"], [1, "head", 2, "margin-left", "-15px"], [1, "track", 3, "click"], [1, "date"], ["padding", "", 3, "fullscreen"], ["style", "margin:5px;position: absolute;right:10px;z-index: 1000;", "class", "center-hr", 3, "click", 4, "ngIf"], ["style", "margin-bottom: 10px;", 4, "ngIf"], ["lines", "none"], ["item-content", "", 1, "bp-dp"], [1, "card"], [1, "box"], [1, "booking-title"], ["class", "locate", 3, "click", 4, "ngIf"], [1, "info"], [1, "address"], [1, "time"], [1, "pass"], [1, "newBusDetailsHeader"], ["size", "4", 2, "text-align", "start"], ["size", "4", 2, "text-align", "end"], [1, "newBusDetailsCard"], [1, "newBusDetailsCardContent"], [1, "pass1"], [1, "card1"], [1, "main"], [1, "name", 2, "margin", "10px 0px 0px 10px"], [2, "margin", "10px 10px 0px 0px"], [1, "name", 2, "margin", "5px 0px 0px 10px"], [2, "margin", "5px 10px 0px 0px"], [1, "name", 2, "margin", "5px 0px 10px 10px"], [2, "margin", "5px 10px 10px 0px"], [2, "margin", "26px 15px 16px 16px"], ["mode", "md", "class", "search-btn", "expand", "block", "style", "--background:var(--iconsAndButtonsColor);--color:var(--primaryText)", 3, "click", 4, "ngIf"], ["style", "margin: 26px 15px 16px 16px;", "class", "center-hr", 4, "ngIf"], ["src", "./assets/icon/download_img.png", "alt", "", 2, "width", "20px"], [1, "center-hr", 2, "margin", "5px", "position", "absolute", "right", "10px", "z-index", "1000", 3, "click"], [1, "taxInvoice_Label"], [2, "margin-bottom", "10px"], [1, "locate", 3, "click"], ["class", "card1", 4, "ngIf"], [1, "value"], [1, "main1"], [1, "center-hr", 2, "margin", "26px 15px 16px 16px"], ["size", "6", 2, "padding", "0"], [2, "font-size", "0.7rem"], ["style", "padding:0;", "size", "6", 4, "ngIf"], [1, "box1"], ["item-content", "", 1, "bp-dp", 2, "margin-top", "12px"], [1, "Contact-details"], ["class", "card", 4, "ngIf"], [1, "box2"], ["lines", "none", 2, "margin-bottom", "10px"], [1, "title"], ["class", "card1", 4, "ngFor", "ngForOf"], [3, "fullscreen"], [1, "shyamoi-td-header", 2, "box-shadow", "none !important", "text-align", "center !important", "font-size", "18px !important", "color", "#333333 !important", "height", "50px", 3, "translucent"], ["mode", "md", 2, "--border-width", "0px"], ["mode", "md", "slot", "start", 2, "position", "absolute"], ["class", "head", "style", "font-size: 18px;text-align: center;", 4, "ngIf"], ["padding", "", "class", "shyamoli-bg-content", 3, "fullscreen", 4, "ngIf"], [1, "head", 2, "font-size", "18px", "text-align", "center"], ["padding", "", 1, "shyamoli-bg-content", 3, "fullscreen"], ["class", "shyamoli-booking-success-box", 3, "click", 4, "ngIf"], ["class", "points-toast-card ion-align-items-center", 4, "ngIf"], ["class", "shyamoli-booking-cancel-box", 4, "ngIf"], ["class", "shyamoli-booking-success-box pnr_block", 3, "click", 4, "ngIf"], ["size", "12", 2, "padding", "0px"], [3, "ngStyle", "ngClass"], [1, "ion-padding", "review-booking-card-first-row_2", 2, "padding", "7px"], ["size", "10", 2, "align-content", "center"], ["src", "./assets/icon/Shyamoliwhite.svg"], ["size", "2", 2, "display", "flex", "justify-content", "center", "align-items", "center", "flex-direction", "column"], [1, "ion-padding-top", 2, "padding-bottom", "10px"], [1, "shyamoli-city-short-name"], [2, "color", "#000000", "font-size", "12px", "font-weight", "600"], [1, "shyamoli-service-time"], ["size", "4", 1, "ion-no-padding", 2, "display", "flex", "align-items", "center", "padding", "0"], [1, "location-bus_2"], ["src", "./assets/icon/shyamoli_arrow.svg", 2, "height", "18px", "width", "48px"], [2, "margin-top", "0px", "font-size", "12px", "font-weight", "600", "color", "#333333", "text-align", "center"], [1, "bustype", 3, "ngClass"], ["size", "1.3", 2, "align-content", "center"], ["src", "./assets/icon/shyamoliVector.svg"], ["size", "10.7", 2, "display", "flex", "justify-content", "center", "align-items", "start", "flex-direction", "column"], [2, "margin", "0px", "font-size", "14px", "color", "#333333", "font-weight", "600"], [2, "color", "#333333", "font-size", "10px", "text-align", "left"], [1, "passanger-details", "ion-margin", 2, "margin-top", "0px"], ["size", "1.5", 1, "pickup-droping-align"], ["src", "./assets/icon/themeone_location.svg", "name", "navigate-circle-outline", "size", "large", 2, "height", "24px", "width", "24px"], ["size", "10.5", 1, "pickup-droping-align", 2, "padding", "5px 0px 0px 0px"], [2, "line-height", "22px", "color", "#999999", "font-weight", "600"], [1, "drop_board_address"], ["size", "1.5"], ["src", "./assets/icon/theme1_dropicon.svg", "name", "navigate-circle-outline", "size", "large", 2, "height", "24px", "width", "24px"], ["size", "10.5", 2, "padding", "5px 0px 0px 0px"], [2, "padding", "0px"], [1, "passenger-title"], [1, "header-row"], [1, "header-text-row", 2, "font-size", "15px"], ["class", "passenger-row", 4, "ngFor", "ngForOf"], ["class", "shyamoli-track-bus-section", 4, "ngIf"], [2, "margin", "16px 0px"], ["style", "padding: 0px;", "size", "12", 4, "ngIf"], ["size", "12", "style", "padding: 5px 0px;", 4, "ngIf"], [2, "padding", "0px 0px"], [2, "padding", "15px 15px 15px 15px", 3, "ngClass"], ["size", "12", 2, "font-weight", "400"], [2, "font-size", "15px"], ["size", "8", 2, "display", "flex", "justify-content", "start", "align-items", "center", "padding", "3px 5px"], ["size", "4", 2, "display", "flex", "justify-content", "end", "align-items", "center", "padding", "3px 5px"], ["size", "4", "style", "display: flex; justify-content: end; align-items: center;padding: 3px 5px;", 4, "ngIf"], ["size", "8", "style", "display: flex; justify-content: start; align-items: center;padding: 3px 5px;", 4, "ngIf"], [1, "left", 2, "color", "#000", "font-weight", "600"], [1, "payment-details-line", "ion-margin-bottom", "ion-margin-top", 2, "margin", "10px 0px"], ["size", "6", "style", "text-align: end;", 4, "ngIf"], [2, "display", "flex", "align-items", "center", "justify-content", "end", 3, "click"], ["mode", "md", 2, "font-weight", "bold", "margin-right", "4%", "color", "#333333", "font-size", "16px"], ["src", "assets/icon/shyamoli_download.svg", 2, "width", "35px", "height", "33px", "margin-right", "1%", "margin-bottom", "1%"], ["class", "shyamoli-modeify-cancel-contact-section", 4, "ngIf"], ["style", "align-items: center;", 4, "ngIf"], [1, "shyamoli-booking-success-box", 3, "click"], ["size", "12", 1, "center-hr"], [1, "booking-success-txt", 2, "text-align", "center", "margin", "0px", "width", "100%"], ["name", "checkmark-circle-sharp"], [1, "pnr_block", 2, "margin", "0", "padding", "10px", "text-align", "left", "margin-top", "12px", "width", "100%"], [2, "font-weight", "bold", "margin-left", "3%"], ["src", "assets/icon/shyamoli_copy_icon.svg", 2, "height", "30px", "width", "30px", "position", "absolute", "right", "5%", "bottom", "9%"], [1, "points-toast-card", "ion-align-items-center"], [1, "points-toast-card__icon"], [1, "points-toast-card__title"], [1, "points-toast-card__subtitle"], [1, "shyamoli-booking-cancel-box"], [1, "cancel-row"], ["src", "assets/icon/shyamoli-skip.svg", 1, "cancel-icon"], [1, "cancel-text"], [1, "shyamoli-booking-success-box", "pnr_block", 3, "click"], ["size", "12", 1, "center-hr", 2, "justify-content", "space-between"], [2, "margin-left", "4%"], [1, "booking-success-txt", 2, "text-align", "center", "margin", "0px"], [2, "font-weight", "bold"], [2, "margin-right", "4%", "margin-top", "2%"], ["src", "assets/icon/shyamoli_copy_icon.svg", 2, "height", "30px", "width", "30px"], [1, "passenger-row"], [1, "seat", 2, "font-size", "15px"], [1, "shyamoli-track-bus-section"], [2, "color", "#333", "text-align", "left", "font-weight", "600", "font-size", "16px"], ["size", "2", 1, "ion-justify-content-end", "ion-align-items-center", 2, "display", "flex"], ["src", "./assets/icon/shyamoli_location_icon.svg", "name", "location-outline", 2, "height", "30px", "width", "30px"], ["size", "12", 2, "padding", "5px 0px"], ["size", "8", 2, "padding", "0px"], [1, "light-font"], ["size", "4", 1, "ion-justify-content-end", "ion-align-items-center", 2, "padding", "0px", "text-align", "-webkit-right"], [1, "bd-row"], [1, "bd-val", "green"], [1, "bd-val", "orange"], ["size", "6", 2, "text-align", "end"], [1, "shyamoli-modeify-cancel-contact-section"], [2, "align-items", "center"], ["size", "10", 1, "shyamoli-download-ticket-section"], ["size", "2", 1, "share-col"], ["fill", "clear", 1, "share-button", 3, "click"], ["src", "assets/shyamoli-share.svg", 1, "share-icon"], ["size", "12", 2, "padding", "0px", "padding-bottom", "14px", "padding-top", "14px"], [1, "shyamoli-review-booking-card", 2, "overflow", "inherit", "margin", "0", "border", "1px solid #dfdfdf"], [1, "journey-type-label"], [1, "bustype", 2, "margin-bottom", "5px"], [2, "color", "#333333", "font-size", "10px"], [1, "shyamoli-passenger-block", 2, "margin", "0px"], [1, "payment-details", 2, "padding", "12px"], [1, "left", 2, "color", "#000"], ["size", "12", 2, "padding", "0px", 3, "click"], [2, "display", "flex", "align-items", "center", "justify-content", "end"], [2, "font-weight", "bold", "margin-right", "4%", "color", "#333333", "font-size", "16px"], ["size", "12", 2, "padding", "10px 0px"], [2, "margin", "0px", "padding-top", "12px"], [1, "bustype", 2, "margin-top", "5px", "margin-bottom", "5px"], [1, "shyamoli-passenger-block"], [2, "padding", "10px 0px"], [1, "payment-details", 2, "padding", "5px"]],
  template: function BookingDetailsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, BookingDetailsPage_ng_container_0_Template, 11, 13, "ng-container", 1)(1, BookingDetailsPage_ng_container_1_Template, 15, 11, "ng-container", 1)(2, BookingDetailsPage_ng_container_2_Template, 16, 6, "ng-container", 1)(3, BookingDetailsPage_ng_container_3_Template, 3, 4, "ng-container", 1)(4, BookingDetailsPage_ng_container_4_Template, 15, 16, "ng-container", 1)(5, BookingDetailsPage_ng_container_5_Template, 14, 11, "ng-container", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme" || ctx.metaData.msiteFolder == "networktheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder === "seabirdThemeNew");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "shyamolitheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonBackButton, _angular_common__WEBPACK_IMPORTED_MODULE_19__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_19__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe],
  styles: [".title-main[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 20px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  letter-spacing: normal;\n  color: #4a4a4a;\n}\n\n.high-1[_ngcontent-%COMP%] {\n  height: 75px;\n}\n\n.high-2[_ngcontent-%COMP%] {\n  height: 55px;\n}\n\n.taxInvoice_Label[_ngcontent-%COMP%] {\n  color: var(--iconsAndButtonsColor);\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.ticket_Label[_ngcontent-%COMP%] {\n  color: var(--sectionHeaderTextColor);\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.whole[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.6);\n}\n\n.legend-box[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 280px;\n  height: 152px;\n}\n\n.brws-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #4a4a4a;\n  margin-top: 28px;\n  width: 100%;\n  text-align: left;\n}\n\n.dwn-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #ed3237;\n  margin-top: 28px;\n  width: 100%;\n  text-align: right;\n}\n\n.themeone-dwn-txt[_ngcontent-%COMP%] {\n  background: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  margin-top: 20px;\n}\n\n.seabird_dwn-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: var(--iconsAndButtonsColor);\n  margin-top: 28px;\n  width: 100%;\n  text-align: right;\n}\n\n.txt-msg[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n  letter-spacing: 0.25px;\n  color: rgba(0, 0, 0, 0.6);\n  margin-top: 10px;\n  width: 100%;\n}\n\n.org-dest[_ngcontent-%COMP%] {\n  height: 0;\n  font-family: NotoSans;\n  font-size: 16px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.25;\n  letter-spacing: normal;\n  color: #4a4a4a;\n  padding: 4px 0 0;\n}\n\n.date[_ngcontent-%COMP%] {\n  height: 16px;\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n  color: #747f8d;\n  padding: 10px 4px 0 0;\n  text-align: left;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --ion-background-color: var(--viewBgColor);\n}\n\n.ios[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.md[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--ion-color-step-150, #d7d8da);\n  padding: 0;\n}\n\n.card-onward[_ngcontent-%COMP%] {\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12);\n  background-color: #ffffff;\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-bottom: -13px;\n}\n\n.onward-p[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 16px;\n  color: red;\n  padding-left: 8px;\n}\n\n.confirm-btn[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.search-txt[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.search-btn[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n}\n\n.map-button[_ngcontent-%COMP%] {\n  text-align: right;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n  color: #747f8d;\n  margin: -32px 8px 0;\n}\n\n.track[_ngcontent-%COMP%] {\n  float: right;\n  font-family: NotoSans;\n  font-size: 16px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.25;\n  letter-spacing: normal;\n  color: red;\n  margin: -15px 16px 0 5px;\n}\n\n.card[_ngcontent-%COMP%] {\n  height: 130px;\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12);\n  background-color: #ffffff;\n  margin-left: 15px;\n  margin-right: 15px;\n  padding-top: 15px;\n}\n\n.card1[_ngcontent-%COMP%] {\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12);\n  background-color: #ffffff;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n\n.bp-dp[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #7e7e8c;\n  display: flex;\n  width: 100%;\n}\n\n.bp-dp[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  flex: 1.5;\n  font-size: 13px;\n  font-weight: bold;\n}\n\n.bp-dp[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  flex: 0.75;\n  font-size: 13px;\n  font-weight: bold;\n}\n\n.mr-tp[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.box[_ngcontent-%COMP%] {\n  margin: 0 3%;\n  overflow: hidden;\n  padding: 4px 0 0 60px;\n}\n\n.box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  position: relative;\n  transition: all 0.5s linear;\n  top: 0;\n}\n\n.box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 25px 45px 0;\n  position: relative;\n  color: black;\n}\n\n.box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  content: \"\";\n  display: block;\n  width: 0;\n  height: 185%;\n  border: 1px dashed #5279d0;\n  position: absolute;\n  top: -6px;\n  left: -30px;\n}\n\n.box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #5279d0;\n  border: 2px solid #b7ccfc;\n  position: absolute;\n  left: -7.5px;\n}\n\n.box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child    > span[_ngcontent-%COMP%] {\n  content: \"\";\n  display: block;\n  width: 0;\n  height: 125%;\n  border: none !important;\n  position: absolute;\n  top: -6px;\n  left: -30px;\n}\n\n.box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:before {\n  top: -10px;\n}\n\n\n\n.box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  color: #3e3e52;\n  margin-bottom: 5px;\n  position: relative;\n  top: -17px;\n}\n\n.label-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  color: #3e3e52;\n  margin-bottom: 5px;\n  height: 20px;\n  padding: 12px 5px 12px 12px;\n}\n\n.label-pnr[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  color: #3e3e52;\n  float: right;\n  margin: -20px 16px 0 5px;\n}\n\n.label-seat[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: normal;\n  color: #3e3e52;\n  margin-top: -10px;\n  height: 16px;\n  padding: 14px 5px 32px 12px;\n}\n\n.label-bustype1[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  color: #3e3e52;\n  margin-bottom: 5px;\n  height: 20px;\n  padding: 12px 5px 12px 12px;\n}\n\n.label-bustype2[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: normal;\n  color: #3e3e52;\n  margin-top: -10px;\n  height: 16px;\n  padding: 14px 5px 22px 12px;\n}\n\n.label-bustype3[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  color: #3e3e52;\n  float: right;\n  text-align: right;\n  margin: -20px 3px 0 5px;\n  width: 40%;\n}\n\n.box[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  font-size: 10px;\n  color: #7e7e8c;\n}\n\n.box[_ngcontent-%COMP%]   .locate[_ngcontent-%COMP%] {\n  float: right;\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.25;\n  letter-spacing: normal;\n  color: red;\n  margin-right: -40px;\n}\n\n.box[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -100px;\n  color: black;\n  font-size: 80%;\n  font-weight: bold;\n}\n\n.box[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  top: -16px;\n}\n\n.text[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 14px;\n  font-weight: bold;\n  display: inline-block;\n  padding-left: 7px;\n  vertical-align: middle;\n}\n\n.item-lines-none[_ngcontent-%COMP%] {\n  \n\n  --background: none;\n  position: relative;\n  bottom: -8px;\n  margin-top: -10px;\n}\n\nion-button[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  --background: #ed3237;\n  font-family: \"NotoSans\";\n}\n\n.pass[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.pass1[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.main[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.main1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.main1[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: -18px;\n  margin-bottom: -10px;\n}\n\n.main2[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: -7px;\n  margin-left: 9px;\n  margin-bottom: 5px;\n}\n\n.name[_ngcontent-%COMP%] {\n  flex: 1.5;\n  font-size: 13px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-weight: bold;\n}\n\n.value[_ngcontent-%COMP%] {\n  flex: 0.8;\n  font-size: 13px;\n  font-weight: bold;\n}\n\n.Contact-details[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: var(--sectionHeaderTextColor);\n}\n\n.ticket-card[_ngcontent-%COMP%] {\n  margin-left: 16px;\n  margin-right: 16px;\n  margin-bottom: -10px;\n  background: #fff;\n  margin-top: 20px;\n}\n\n.box1[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 0px 0px rgba(0, 0, 0, 0.12);\n  background-color: rgba(255, 255, 255, 0.6392156863);\n  padding-bottom: 15px;\n}\n\n.box2[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0px 0px rgba(0, 0, 0, 0.12);\n  background-color: rgba(255, 255, 255, 0.6392156863);\n  padding-bottom: 15px;\n}\n\n.valuee[_ngcontent-%COMP%] {\n  flex: 0.8;\n  font-size: 13px;\n  font-weight: bold;\n}\n\n.namee[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: bold;\n  padding-right: 32%;\n}\n\n.theme1[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%] {\n  width: 100%;\n  border-bottom: 1px solid #fff;\n}\n.theme1[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]::part(indicator-background) {\n  --background: #ffbd16;\n}\n.theme1[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%]::part(native) {\n  color: #ffbd16;\n}\n\nion-card[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\nion-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-align: center;\n}\nion-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin: 0;\n  text-align: center;\n}\nion-card[_ngcontent-%COMP%]   .location-line[_ngcontent-%COMP%] {\n  width: 100%;\n  width: 100%;\n  height: 1px;\n  border: solid 1px #dfdfdf;\n  border-style: dashed;\n  position: relative;\n}\nion-card[_ngcontent-%COMP%]   .location-line[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: rgba(25, 25, 102, 0.2);\n  position: absolute;\n  left: -8px;\n  top: -8px;\n}\nion-card[_ngcontent-%COMP%]   .location-line[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: rgba(242, 194, 26, 0.2);\n  position: absolute;\n  top: -8px;\n  right: -8px;\n}\nion-card[_ngcontent-%COMP%]   .location-line_2[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n  background-color: #dfdfdf;\n  position: relative;\n}\nion-card[_ngcontent-%COMP%]   .location-line_2[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: rgba(59, 173, 105, 0.2);\n  position: absolute;\n  left: -8px;\n  top: -8px;\n}\nion-card[_ngcontent-%COMP%]   .location-line_2[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: rgba(59, 173, 105, 0.2);\n  position: absolute;\n  top: -8px;\n  right: -8px;\n}\nion-card[_ngcontent-%COMP%]   .location-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  background-color: #191966;\n  border-radius: 50%;\n  position: absolute;\n  left: -4px;\n  top: -4px;\n}\nion-card[_ngcontent-%COMP%]   .location-dot_2[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  background-color: #3BAD69;\n  border-radius: 50%;\n  position: absolute;\n  left: -4px;\n  top: -4px;\n}\nion-card[_ngcontent-%COMP%]   .location-dot-blue[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  background-color: #f2c21a;\n  border-radius: 50%;\n  position: absolute;\n  right: -4px;\n  top: -4px;\n}\nion-card[_ngcontent-%COMP%]   .location-dot-blue_2[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  background-color: #3BAD69;\n  border-radius: 50%;\n  position: absolute;\n  right: -4px;\n  top: -4px;\n}\nion-card[_ngcontent-%COMP%]   .location-bus[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 6px;\n  right: 40%;\n}\nion-card[_ngcontent-%COMP%]   .location-bus_2[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  right: 25%;\n}\nion-card[_ngcontent-%COMP%]   .card-circular-corner[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background-color: #191966;\n  position: absolute;\n  bottom: -12px;\n  left: -12px;\n}\nion-card[_ngcontent-%COMP%]   .card-circular-corner[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background-color: #191966;\n  position: absolute;\n  right: -12px;\n  bottom: -12px;\n}\nion-card[_ngcontent-%COMP%]   .dash-line[_ngcontent-%COMP%] {\n  border-top: 3px dashed #dfdfdf;\n  margin: 0px 25px;\n}\nion-card[_ngcontent-%COMP%]   .pnr-status[_ngcontent-%COMP%] {\n  background-color: #f3f3f7;\n  border-radius: 10px;\n}\nion-card[_ngcontent-%COMP%]   .pnr-status[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: start;\n  font-size: 14px;\n  font-weight: 600;\n}\nion-card[_ngcontent-%COMP%]   .pnr-status[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 16px 0px;\n  text-align: start;\n  font-size: 16px;\n  font-weight: 600;\n}\nion-card[_ngcontent-%COMP%]   .pnr-status[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: start;\n  font-size: 10px;\n}\nion-card[_ngcontent-%COMP%]   .pnr-status[_ngcontent-%COMP%]   .track-circle[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: #ffbd16;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-card[_ngcontent-%COMP%]   .pnr-circle-status[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  border: 1px solid #dfdfdf;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n}\nion-card[_ngcontent-%COMP%]   .ticket-details[_ngcontent-%COMP%]   p.ticket-details-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #a0a0a0;\n  text-align: start;\n}\nion-card[_ngcontent-%COMP%]   .ticket-details[_ngcontent-%COMP%]   p.ticket-details-status[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #333333;\n  text-align: start;\n  font-weight: 600;\n  margin-top: 5px;\n}\nion-card[_ngcontent-%COMP%]   .pickup-point[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: start;\n  color: #a0a0a0;\n}\nion-card[_ngcontent-%COMP%]   .pickup-detail[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: start;\n  font-weight: 400;\n  margin-bottom: 5px;\n  color: #333333;\n}\nion-card[_ngcontent-%COMP%]   .pickup-detail-view[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: start;\n  color: #191966;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n}\nion-card[_ngcontent-%COMP%]   .pickup-detail-view[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\nion-card[_ngcontent-%COMP%]   .bus-contact[_ngcontent-%COMP%]   h4.light-font[_ngcontent-%COMP%] {\n  color: #a0a0a0;\n  font-size: 14px;\n  margin: 0;\n}\nion-card[_ngcontent-%COMP%]   .bus-contact[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n}\nion-card[_ngcontent-%COMP%]   .bus-contact[_ngcontent-%COMP%]   .bus-contact-circle[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: #25e88a;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-card[_ngcontent-%COMP%]   .cancel-payment-details[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 10px;\n}\nion-card[_ngcontent-%COMP%]   .cancel-payment-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n  text-align: left;\n  color: #333333;\n}\nion-card[_ngcontent-%COMP%]   .cancel-payment-details[_ngcontent-%COMP%]   p.left[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: left;\n  color: #333333;\n}\nion-card[_ngcontent-%COMP%]   .cancel-payment-details[_ngcontent-%COMP%]   p.right[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: right;\n  color: #333333;\n}\nion-card[_ngcontent-%COMP%]   .cancel-payment-details[_ngcontent-%COMP%]   .payment-details-line[_ngcontent-%COMP%] {\n  height: 1px;\n  border-top: 1px solid #c2c2c2;\n}\nion-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%] {\n  background-color: #f3f3f7;\n  border-radius: 10px;\n}\nion-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n  text-align: left;\n  color: #333333;\n}\nion-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   p.left[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: left;\n  color: #333333;\n}\nion-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   p.right[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: right;\n  color: #333333;\n}\nion-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-details-line[_ngcontent-%COMP%] {\n  height: 1px;\n  border-top: 1px solid #c2c2c2;\n}\nion-card[_ngcontent-%COMP%]   h2.edit-ticket[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: left;\n  font-size: 16px;\n  color: #191966;\n  font-weight: 600;\n}\n\nion-card[_ngcontent-%COMP%]   h2.edit-ticket-2[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: left;\n  font-size: 16px;\n  color: var(--primaryText);\n  font-weight: 600;\n}\n\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\nion-header.theme1[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: #191966;\n  color: #fff;\n}\n\nion-header.theme1_header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--bottomBarColor);\n  color: white;\n}\n\nion-content.theme1[_ngcontent-%COMP%] {\n  --background: #191966;\n}\nion-content.theme1[_ngcontent-%COMP%]   .card-circular-corner[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background-color: #191966;\n  position: absolute;\n  bottom: -12px;\n  left: -12px;\n}\nion-content.theme1[_ngcontent-%COMP%]   .card-circular-corner[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background-color: #191966;\n  position: absolute;\n  right: -12px;\n  bottom: -12px;\n}\nion-content.theme1[_ngcontent-%COMP%]   .download-ticket[_ngcontent-%COMP%] {\n  --background: var(--iconsAndButtonsColor);\n  color: #191966;\n  height: 90%;\n  margin: 0;\n  font-weight: 700;\n}\nion-content.theme1[_ngcontent-%COMP%]   .share-button[_ngcontent-%COMP%] {\n  font-size: 56px;\n}\n\nion-content.theme1_header[_ngcontent-%COMP%] {\n  --background: var(--bottomBarColor);\n}\nion-content.theme1_header[_ngcontent-%COMP%]   .card-circular-corner[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background-color: var(--bottomBarColor);\n  position: absolute;\n  bottom: -12px;\n  left: -12px;\n}\nion-content.theme1_header[_ngcontent-%COMP%]   .card-circular-corner[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background-color: var(--bottomBarColor);\n  position: absolute;\n  right: -12px;\n  bottom: -12px;\n}\nion-content.theme1_header[_ngcontent-%COMP%]   .download-ticket[_ngcontent-%COMP%] {\n  --background: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  height: 90%;\n  margin: 0;\n}\nion-content.theme1_header[_ngcontent-%COMP%]   .share-button[_ngcontent-%COMP%] {\n  font-size: 56px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.themeone-viewmap-txt[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-left: 5px;\n  margin-top: auto;\n  color: #191966;\n  font-family: Roboto;\n}\n\n.ourbustheme[_ngcontent-%COMP%]   .passenger-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .passenger-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: #e6f4e6;\n  color: #4caf50;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 20px;\n  margin-right: 10px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_heading[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n  text-align: center;\n  color: var(--iconsAndButtonsColor) !important;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_subhead[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 300;\n  text-align: center;\n  color: #2D2D2D;\n  font-style: italic;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_subhead1[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 300;\n  text-align: center;\n  color: #747474;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_subhead2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  text-align: center;\n  color: #2D2D2D;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_radiusBox[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  border-radius: 1000px;\n  padding: 8px 12px;\n  display: flex;\n  align-items: center;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_smallText[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 300;\n  color: #2D2D2D;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_segment[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.ourbustheme[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  color: #747474;\n  font-size: 14px;\n  font-weight: 700;\n}\n.ourbustheme[_ngcontent-%COMP%]   .segment-button-checked[_ngcontent-%COMP%] {\n  --indicator-color: var(--iconsAndButtonsColor) !important;\n  --indicator-color-checked: transparent !important;\n  color: var(--primaryText) !important;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_primary_card[_ngcontent-%COMP%] {\n  color: #2D2D2D;\n  font-size: 18px;\n  font-weight: 700;\n  background-color: #DBEFDC;\n}\n.ourbustheme[_ngcontent-%COMP%]   .paddingSet[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbusCenterSet[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbusMainText[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #2D2D2D;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbusSubText[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 300;\n  color: var(--iconsAndButtonsColor) !important;\n  text-decoration: underline;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbusDepartureText[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 300;\n  color: #747474;\n}\n.ourbustheme[_ngcontent-%COMP%]   .departText2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #2D2D2D;\n}\n.ourbustheme[_ngcontent-%COMP%]   .qrText[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 300;\n  color: #747474;\n  text-align: center;\n  margin-top: 10px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .primaryCard[_ngcontent-%COMP%] {\n  margin: 8px 0px;\n  padding: 8px;\n  border-radius: 8px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n}\n.ourbustheme[_ngcontent-%COMP%]   .primaryPass[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #2D2D2D;\n}\n.ourbustheme[_ngcontent-%COMP%]   .primaryPassName[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 300;\n  color: #2D2D2D;\n}\n.ourbustheme[_ngcontent-%COMP%]   .roundDiv[_ngcontent-%COMP%] {\n  color: #397D32;\n  background-color: #DBEFDC;\n  padding: 6px;\n  border-radius: 50%;\n  margin-right: 4px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 4px; \n\n  height: 4px; \n\n  background-color: #747474; \n\n  border-radius: 50%; \n\n}\n.ourbustheme[_ngcontent-%COMP%]   .bookAgain[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--iconsAndButtonsColor) !important;\n  font-size: 18px;\n  font-weight: 700;\n  margin: 8px;\n  border: 1px solid var(--iconsAndButtonsColor);\n  border-radius: 4px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .roundedDiv[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  color: var(--iconsAndButtonsColor) !important;\n  border: 1px solid var(--iconsAndButtonsColor);\n  font-size: 12px;\n  font-weight: 300;\n  border-radius: 1000px;\n  height: 32px;\n  width: 104px;\n  text-align: center;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_subhead_id[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 300;\n  text-align: center;\n  color: #2D2D2D;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_subhead_id[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_subhead_id[_ngcontent-%COMP%]   .pnr[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #2D2D2D;\n  border-radius: 30px 30px 30px 30px;\n  background: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.4), inset 0px 0px 5px 1px rgba(255, 255, 255, 0.3);\n  width: auto;\n  height: 30px;\n  padding: 0px 15px;\n  font-weight: bold;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_subhead_id[_ngcontent-%COMP%]   .pnr[_ngcontent-%COMP%]   .copyCode[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  display: inline-block;\n  vertical-align: middle;\n  color: #397D32;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_subhead_id[_ngcontent-%COMP%]   .pnr[_ngcontent-%COMP%]   .pnr_num[_ngcontent-%COMP%] {\n  color: #397D32;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.seabirdtheme[_ngcontent-%COMP%]   .seabird_header[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-weight: bold;\n  font-size: 16px;\n}\n.seabirdtheme[_ngcontent-%COMP%]   .seabird_header-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background: var(--primary);\n}\n.seabirdtheme[_ngcontent-%COMP%]   .seabird_title-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 60px;\n}\n.seabirdtheme[_ngcontent-%COMP%]   .headText[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 700;\n}\n.seabirdtheme[_ngcontent-%COMP%]   .ticketShow[_ngcontent-%COMP%] {\n  margin: 2px;\n  color: #999999;\n  font-size: 12px;\n  font-weight: 400;\n}\n.seabirdtheme[_ngcontent-%COMP%]   .srcDesti1[_ngcontent-%COMP%] {\n  text-align: end;\n  font-size: 14px;\n  font-weight: 700;\n  color: #000;\n}\n.seabirdtheme[_ngcontent-%COMP%]   .msgShow1[_ngcontent-%COMP%] {\n  text-align: end;\n  font-size: 10px;\n  font-weight: 400;\n  margin: 8px 0px;\n  color: #000;\n}\n.seabirdtheme[_ngcontent-%COMP%]   .srcDesti[_ngcontent-%COMP%] {\n  text-align: start;\n  font-size: 14px;\n  font-weight: 700;\n  color: #000;\n}\n.seabirdtheme[_ngcontent-%COMP%]   .msgShow[_ngcontent-%COMP%] {\n  text-align: start;\n  font-size: 10px;\n  font-weight: 400;\n  margin: 8px 0px;\n  color: #000;\n}\n.seabirdtheme[_ngcontent-%COMP%]   .borderSet[_ngcontent-%COMP%] {\n  border-top: 1px dashed #626262;\n  border-bottom: 1px dashed #626262;\n}\n.seabirdtheme[_ngcontent-%COMP%]   .passengerName[_ngcontent-%COMP%] {\n  text-align: start;\n  padding: 8px 0px;\n  font-size: 14px;\n  font-weight: 700;\n  color: #000000;\n}\n.seabirdtheme[_ngcontent-%COMP%]   .seatDetails[_ngcontent-%COMP%] {\n  text-align: end;\n  padding: 8px 0px;\n  font-size: 14px;\n  color: #2B28CE;\n  font-weight: 700;\n}\n.seabirdtheme[_ngcontent-%COMP%]   .busRow[_ngcontent-%COMP%] {\n  margin: 8px;\n  background: #F2F8FF;\n  padding: 8px;\n  border-radius: 5px;\n}\n.seabirdtheme[_ngcontent-%COMP%]   .busCircle[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: 1px solid #000000;\n  width: 38px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: white;\n}\n.seabirdtheme[_ngcontent-%COMP%]   .startPosition[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: start;\n  color: #000;\n  padding: 2px 0px;\n}\n.seabirdtheme[_ngcontent-%COMP%]   .mainHeading[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n}\n.seabirdtheme[_ngcontent-%COMP%]   .Sea_bird_Completed[_ngcontent-%COMP%] {\n  color: green !important;\n}\n.seabirdtheme[_ngcontent-%COMP%]   .cancelled-class[_ngcontent-%COMP%] {\n  color: red !important;\n}\n\n.ourbus-bustype-div[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 300;\n  color: #747474;\n}\n\n.ourbus-dark-text-div[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #2D2D2D;\n}\n\n.color-change[_ngcontent-%COMP%] {\n  filter: brightness(0) saturate(100%) invert(43%) sepia(58%) saturate(376%) hue-rotate(92deg) brightness(97%) contrast(94%);\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  --background: var(--iconsAndButtonsColor);\n  margin: 10px 4px;\n  --border-radius: 20px;\n  height: 45px;\n}\n\n.cbus_src[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: bold;\n  color: #191966 !important;\n}\n\n.theme1_src[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: bold;\n  color: var(--primaryText) !important;\n}\n\n.cbus_desti[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: bold;\n  color: #F2C21A !important;\n}\n\n.cbus_header[_ngcontent-%COMP%] {\n  --background: #191966;\n  color: #fff;\n}\n\n.theme1_header[_ngcontent-%COMP%] {\n  --background: var(--bottomBarColor) !important;\n  color: white;\n}\n\n.cbus_btn[_ngcontent-%COMP%] {\n  --background:#f2c21a;\n  color: #191966;\n  font-weight: bold;\n  height: 50px;\n}\n\n.theme1_btn[_ngcontent-%COMP%] {\n  --background:var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-weight: bold;\n  height: 50px;\n}\n\n.center-title[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  pointer-events: none;\n}\n\n.shyamoli-bg-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  padding: 0px 12px;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  --background: #FFFFFF !important;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  margin: 0;\n  text-align: center;\n  display: contents;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-review-booking-card-cancelled[_ngcontent-%COMP%] {\n  margin: 3px;\n  position: relative;\n  box-shadow: none;\n  border: 1px solid #DFDFDF;\n  \n\n  overflow: inherit;\n  border-radius: 10px;\n  background: #fff5f5 !important;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-review-booking-card-cancelled[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-align: center;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-review-booking-card-cancelled[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin: 0;\n  text-align: center;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-review-booking-card-cancelled[_ngcontent-%COMP%]   .show-details[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #191966;\n  font-size: 14px;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-review-booking-card-cancelled[_ngcontent-%COMP%]   .show-details_2[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #000;\n  font-size: 14px;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-review-booking-card-cancelled[_ngcontent-%COMP%]   .passanger-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  margin: 0;\n  text-align: left;\n  color: #333333;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-review-booking-card-cancelled[_ngcontent-%COMP%]   .passanger-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #A0A0A0;\n  margin: 0;\n  font-size: 14px;\n  font-weight: 500;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-review-booking-card-cancelled[_ngcontent-%COMP%]   .passanger-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #333333;\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-review-booking-card-cancelled[_ngcontent-%COMP%]   .passanger-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  text-align: left;\n  font-weight: 400;\n  color: #333;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-review-booking-card-cancelled[_ngcontent-%COMP%]   .review-booking-card-first-row_2[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background-color: var(--iconsAndButtonsColor);\n  color: #fff;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-review-booking-card-cancelled[_ngcontent-%COMP%]   .review-booking-card-first-row_2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n  font-weight: 500;\n  color: #fff;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-review-booking-card-cancelled[_ngcontent-%COMP%]   .review-booking-card-first-row_2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin: 0;\n  font-weight: 400;\n  color: #fff;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-review-booking-card-cancelled[_ngcontent-%COMP%]   .review-booking-card-first-row_2[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin: 0;\n  font-weight: 600;\n  color: #fff;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-review-booking-card-cancelled[_ngcontent-%COMP%]   .bustype[_ngcontent-%COMP%] {\n  background-color: #F3F3F7;\n  border-radius: 10px;\n  padding: 8px 8px;\n  margin: 5px 16px;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-review-booking-card-cancelled[_ngcontent-%COMP%]   .cancel-bustype[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 8px 8px;\n  margin: 5px 16px;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-review-booking-card[_ngcontent-%COMP%] {\n  margin: 3px;\n  position: relative;\n  box-shadow: none;\n  border: 1px solid #DFDFDF;\n  \n\n  overflow: inherit;\n  border-radius: 10px;\n  background: #FFFFFF !important;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-review-booking-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-align: center;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-review-booking-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin: 0;\n  text-align: center;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-review-booking-card[_ngcontent-%COMP%]   .show-details[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #191966;\n  font-size: 14px;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-review-booking-card[_ngcontent-%COMP%]   .show-details_2[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #000;\n  font-size: 14px;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-review-booking-card[_ngcontent-%COMP%]   .passanger-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  margin: 0;\n  text-align: left;\n  color: #333333;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-review-booking-card[_ngcontent-%COMP%]   .passanger-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #A0A0A0;\n  margin: 0;\n  font-size: 14px;\n  font-weight: 500;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-review-booking-card[_ngcontent-%COMP%]   .passanger-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #333333;\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-review-booking-card[_ngcontent-%COMP%]   .passanger-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  text-align: left;\n  font-weight: 400;\n  color: #333;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-review-booking-card[_ngcontent-%COMP%]   .review-booking-card-first-row_2[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background-color: var(--iconsAndButtonsColor);\n  color: #fff;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-review-booking-card[_ngcontent-%COMP%]   .review-booking-card-first-row_2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n  font-weight: 500;\n  color: #fff;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-review-booking-card[_ngcontent-%COMP%]   .review-booking-card-first-row_2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin: 0;\n  font-weight: 400;\n  color: #fff;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-review-booking-card[_ngcontent-%COMP%]   .review-booking-card-first-row_2[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin: 0;\n  font-weight: 600;\n  color: #fff;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-review-booking-card[_ngcontent-%COMP%]   .bustype[_ngcontent-%COMP%] {\n  background-color: #F3F3F7;\n  border-radius: 10px;\n  padding: 8px 8px;\n  margin: 5px 16px;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .location-line_2[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n  background-color: #dfdfdf;\n  position: relative;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .location-line_2[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: rgba(59, 173, 105, 0.2);\n  position: absolute;\n  left: -8px;\n  top: -8px;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .location-line_2[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: rgba(59, 173, 105, 0.2);\n  position: absolute;\n  top: -8px;\n  right: -8px;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .location-dot_2[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  background-color: #3BAD69;\n  border-radius: 50%;\n  position: absolute;\n  left: -4px;\n  top: -4px;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .location-bus_2[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  right: 30%;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .location-dot-blue_2[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  background-color: #3BAD69;\n  border-radius: 50%;\n  position: absolute;\n  right: -4px;\n  top: -4px;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .devider_set[_ngcontent-%COMP%] {\n  width: 100.7%;\n  position: relative;\n  background-color: #fff;\n  left: -1.2px;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .drop_board_address[_ngcontent-%COMP%] {\n  display: block;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .show-details_2[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #000;\n  font-size: 14px;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-passenger-block[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  box-shadow: none;\n  border: 1px solid #DFDFDF;\n  padding: 12px 16px;\n  margin: 16px 0px;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-passenger-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 15px;\n  margin-bottom: 10px;\n  color: #333;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-passenger-block[_ngcontent-%COMP%]   .header-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  color: #999;\n  margin-bottom: 5px;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-passenger-block[_ngcontent-%COMP%]   .passenger-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 5px;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-passenger-block[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #000;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-passenger-block[_ngcontent-%COMP%]   .seat[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #000;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-passenger-cancel-block[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  box-shadow: none;\n  border: 1px solid #ff7373;\n  background-color: #fff5f5 !important;\n  padding: 12px 16px;\n  margin: 16px 0px;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-passenger-cancel-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 15px;\n  margin-bottom: 10px;\n  color: #333;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-passenger-cancel-block[_ngcontent-%COMP%]   .header-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  color: #999;\n  margin-bottom: 5px;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-passenger-cancel-block[_ngcontent-%COMP%]   .passenger-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 5px;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-passenger-cancel-block[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #000;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-passenger-cancel-block[_ngcontent-%COMP%]   .seat[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #000;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-card-1[_ngcontent-%COMP%] {\n  border: 1px solid #D9D9D9;\n  margin: 28px 15px;\n  border-radius: 5px;\n  box-shadow: none;\n  padding: 18px 20px;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 15px;\n  margin-bottom: 10px;\n  color: #333;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .email-input[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  height: 55px; \n\n  font-size: 15px;\n  color: #333;\n  background: #fff;\n  margin-top: 6px;\n  padding-left: 14px; \n\n  display: flex;\n  align-items: center;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]     ion-input.email-input .native-input {\n  height: auto;\n  margin-left: 15px;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-select[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  height: 55px;\n  font-size: 15px;\n  color: #333;\n  \n\n  \n\n  padding-left: 14px;\n  display: flex;\n  align-items: center;\n  --highlight-color: none;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .offersItem-border[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  border: 1px solid orange;\n  \n\n  background-color: #fff2e1;\n  border-radius: 5px;\n  font-weight: bold;\n  border-style: dashed;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .shyamoli-offerDesign[_ngcontent-%COMP%] {\n  padding: 4px 8px 4px 8px;\n  font-weight: bold;\n}\n.shyamoli-bg-content[_ngcontent-%COMP%]   .passenger-title[_ngcontent-%COMP%] {\n  text-align: left !important;\n  font-weight: 600;\n  font-size: 15px;\n  margin-bottom: 10px;\n  color: #333;\n}\n\n.shyamoli-payment-item[_ngcontent-%COMP%] {\n  background-color: #fff2e1;\n  border-radius: 5px;\n  font-weight: bold;\n  border: 1px solid #D9D9D9;\n  border-radius: 5px;\n  margin: 15px 0px;\n}\n.shyamoli-payment-item[_ngcontent-%COMP%]   .shyamoli-payment-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #626262;\n}\n\n.shyamoli-cancellation-block[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #DFDFDF;\n  margin: 28px 15px;\n  box-shadow: none;\n  padding: 0px 10px 10px 0px;\n}\n.shyamoli-cancellation-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #000000;\n  font-weight: 400;\n  margin: 0;\n  font-size: 16px;\n}\n\n.shyamoli-track-bus-section[_ngcontent-%COMP%] {\n  background-color: #FDF6E3;\n  border-radius: 10px;\n  padding: 7px 10px;\n  margin: 16px 0px;\n}\n\n.shyamoli-modeify-cancel-contact-section[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n  padding-bottom: 16px;\n}\n.shyamoli-modeify-cancel-contact-section[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 16px;\n  font-weight: bold;\n  padding-bottom: 5px;\n}\n\n.shyamoli-download-ticket-section[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  height: 50px;\n  --background: var(--iconsAndButtonsColor);\n  color: var(--primary);\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.shyamoli-download-ticket-section[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(98deg) brightness(109%) contrast(102%);\n}\n\n.shyamoli-booking-success-box[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.shyamoli-booking-success-box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 20px;\n  color: #333333;\n}\n.shyamoli-booking-success-box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 16px;\n  color: #5f5f5f;\n}\n.shyamoli-booking-success-box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  height: 52px;\n  width: 52px;\n  color: #3BAD69;\n}\n\n.shyamoli-booking-cancel-box[_ngcontent-%COMP%] {\n  background-color: #ff4040;\n  border-radius: 8px;\n  padding: 6px 14px;\n  margin: 14px 70px 0px 70px;\n  margin-top: 16px;\n}\n\n.cancel-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n\n.cancel-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #ffffff;\n}\n\n.cancel-text[_ngcontent-%COMP%] {\n  margin-top: 1px;\n  font-size: 16px;\n  font-weight: 500;\n  color: #ffffff;\n}\n\n.journey-type-label[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  background-color: #333333;\n  color: #ffffff;\n  top: -12px;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 5px 7px;\n  border-radius: 30px;\n}\n\n.shyamoi-td-header.header-md[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n  text-align: center !important;\n  font-size: 18px !important;\n  color: #333333 !important;\n}\n\n.shyamoli-city-short-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: bold;\n  color: var(--iconsAndButtonsColor);\n  font-size: 18px;\n}\n\n.shyamoli-service-time[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333 !important;\n  font-weight: 600;\n  font-size: 15px !important;\n  margin-top: 13px;\n}\n\n.pnr_block[_ngcontent-%COMP%] {\n  border: 1px solid var(--iconsAndButtonsColor);\n  border-radius: 35px;\n  background: #FDF6E3;\n  margin: 10px 14px;\n  margin-top: 16px;\n}\n\n.newBusDetailsHeader[_ngcontent-%COMP%] {\n  margin: 16px 16px 2px 16px;\n  text-align: center;\n  font-size: 13px;\n  color: #7e7e8c;\n  font-weight: bold;\n}\n\n.newBusDetailsCard[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 2px;\n  padding: 4px;\n}\n\n.newBusDetailsCardContent[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #000;\n  text-align: center;\n}\n\n.share-button[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 4px;\n  --padding-bottom: 4px;\n  --background: transparent;\n  box-shadow: none;\n}\n\n.share-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n\n.share-col[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.cancelled-card[_ngcontent-%COMP%] {\n  background-color: \"#fff5f5 !important\";\n}\n\n.pickup-droping-align[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\nion-card.card-cbus[_ngcontent-%COMP%] {\n  padding-bottom: 0px;\n  margin-bottom: 10px;\n}\n\n.box[_ngcontent-%COMP%]   .booking-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  color: #3e3e52;\n  margin-bottom: 5px;\n  position: relative;\n  top: -17px;\n}\n\n.phone-confirm-txt[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.points-toast-card[_ngcontent-%COMP%] {\n  margin: 6px 12px;\n  padding: 11px 13px;\n  background: #FFF3DC;\n  border: 1px solid #F0C070;\n  border-radius: var(--radius);\n  flex-wrap: nowrap;\n  gap: 10px;\n}\n.points-toast-card__icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  line-height: 1;\n}\n.points-toast-card__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--primary-dk);\n}\n.points-toast-card__subtitle[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  font-size: 11px;\n  line-height: 1.4;\n  color: #9A6020;\n}\n\n.bd-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: var(--text-sm);\n  margin-bottom: 6px;\n}\n\n.bd-val[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-hd);\n}\n\n.bd-val.green[_ngcontent-%COMP%] {\n  color: var(--active-green);\n}\n\n.bd-val.orange[_ngcontent-%COMP%] {\n  color: var(--primary-dk);\n}\n\n.bd-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}"]
});

/***/ },

/***/ 47402
/*!********************************************************!*\
  !*** ./src/app/services/firebase-analytics.service.ts ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirebaseAnalyticsService: () => (/* binding */ FirebaseAnalyticsService)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor-community/firebase-analytics */ 4970);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _common_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common-storage */ 96970);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _appdata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appdata */ 40172);
/* harmony import */ var _util_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util-provider */ 81101);

var _FirebaseAnalyticsService;







class FirebaseAnalyticsService {
  constructor(commonStorage, platform, appdata, util) {
    this.commonStorage = commonStorage;
    this.platform = platform;
    this.appdata = appdata;
    this.util = util;
    this.isInitialized = false;
    this.initializationPromise = null;
    const localData = this.commonStorage.localGet('metaData');
    this.operatorName = localData ? localData.operatorName : null;
    // Initialize Firebase Analytics
    this.initializationPromise = this.initializeAnalytics(localData);
    this.generateNewSessionId();
  }
  initializeAnalytics(localData) {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let firebaseInitOptions;
      if (localData && localData.msiteFolder == 'cbustheme') {
        firebaseInitOptions = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.c_firebaseConfig;
      } else {
        firebaseInitOptions = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebaseConfig;
      }
      try {
        if (_this.appdata.isANDROID) {
          // For Android, Firebase is auto-initialized via google-services.json
          // No need to call initializeFirebase()
          _this.isInitialized = true;
          console.log('Firebase Analytics initialized successfully for Android');
        } else if (_this.appdata.isIOS) {
          // For iOS, Firebase is auto-initialized via GoogleService-Info.plist
          // The native Firebase SDK is already loaded, just mark as initialized
          _this.isInitialized = true;
          console.log('Firebase Analytics initialized successfully for iOS');
        } else {
          // For Web, use initializeFirebase
          yield _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_1__.FirebaseAnalytics.initializeFirebase(firebaseInitOptions);
          _this.isInitialized = true;
          console.log('Firebase Analytics initialized successfully for Web');
        }
      } catch (error) {
        console.error('Error initializing Firebase Analytics:', error);
        _this.isInitialized = false;
      }
    })();
  }
  // Log custom event
  logCustomEvent(eventName, params) {
    var _this2 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Wait for initialization to complete
        if (_this2.initializationPromise) {
          yield _this2.initializationPromise;
        }
        if (!_this2.isInitialized) {
          console.warn('Firebase Analytics is not initialized. Cannot log event:', eventName);
          return;
        }
        if (_this2.operatorName) {
          params['OPERATOR_NAME'] = _this2.operatorName;
        }
        params['op_custom_session_id'] = _this2.session_id;
        if (_this2.appdata.isIOS) {
          // Log event on native iOS platforms
          yield _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_1__.FirebaseAnalytics.logEvent({
            name: eventName,
            params
          });
          console.log(`Event "${eventName}" logged successfully on iOS`);
        } else if (_this2.appdata.isANDROID) {
          // Log event on native Android platforms
          yield _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_1__.FirebaseAnalytics.logEvent({
            name: eventName,
            params
          });
          console.log(`Event "${eventName}" logged successfully on Android with params:`, params);
        } else if (_this2.appdata.isWEBAPP) {
          // Log event on web
          yield _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_1__.FirebaseAnalytics.logEvent({
            name: eventName,
            params
          });
          console.log(`Event "${eventName}" logged successfully on Web`);
        }
      } catch (error) {
        console.error(`Error logging custom event "${eventName}":`, error);
      }
    })();
  }
  // Check if Firebase Analytics is initialized
  isAnalyticsReady() {
    var _this3 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.initializationPromise) {
        yield _this3.initializationPromise;
      }
      return _this3.isInitialized;
    })();
  }
  // Method to manually initialize if needed
  ensureInitialized() {
    var _this4 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.initializationPromise) {
        yield _this4.initializationPromise;
      }
      if (!_this4.isInitialized) {
        console.warn('Firebase Analytics initialization failed or is not complete');
      }
    })();
  }
  generateNewSessionId() {
    if (this.sessionInterval) {
      clearInterval(this.sessionInterval);
    }
    this.session_id = this.util.generateSid();
    this.sessionInterval = setInterval(() => {
      this.generateNewSessionId();
    }, 30 * 60 * 1000);
  }
}
_FirebaseAnalyticsService = FirebaseAnalyticsService;
_FirebaseAnalyticsService.ɵfac = function FirebaseAnalyticsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FirebaseAnalyticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_common_storage__WEBPACK_IMPORTED_MODULE_4__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_appdata__WEBPACK_IMPORTED_MODULE_6__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_util_provider__WEBPACK_IMPORTED_MODULE_7__.UtilProvider));
};
_FirebaseAnalyticsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _FirebaseAnalyticsService,
  factory: _FirebaseAnalyticsService.ɵfac,
  providedIn: 'root'
});

/***/ },

/***/ 45312
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: true,
  c_firebaseConfig: {
    apiKey: "AIzaSyCGL9kGMW80ARug7-1-m0zHX0q4N6EMmNg",
    authDomain: "pc-api-5560718033266272099-659.firebaseapp.com",
    projectId: "pc-api-5560718033266272099-659",
    storageBucket: "pc-api-5560718033266272099-659.firebasestorage.app",
    messagingSenderId: "276783339554",
    appId: "1:276783339554:web:a3d1878b9e2601740f927b",
    measurementId: "G-8PFZ6HYLEM"
  },
  firebaseConfig: {
    apiKey: "AIzaSyADe1YXngQ8NPrMkDyy1UBtOH1XqhqMsgA",
    authDomain: "customer-app---mweb.firebaseapp.com",
    projectId: "customer-app---mweb",
    storageBucket: "customer-app---mweb.firebasestorage.app",
    messagingSenderId: "697968204843",
    appId: "1:697968204843:web:2acfadff1e6821c0eede6e",
    measurementId: "G-ZFC9S0PR6W"
  }
};

/***/ }

}]);