"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[7027],{

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

/***/ 32266
/*!***********************************************************!*\
  !*** ./src/app/my-bookings/my-bookings-routing.module.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBookingsPageRoutingModule: () => (/* binding */ MyBookingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 49870);
/* harmony import */ var _my_bookings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-bookings.page */ 25212);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _MyBookingsPageRoutingModule;




const routes = [{
  path: '',
  component: _my_bookings_page__WEBPACK_IMPORTED_MODULE_1__.MyBookingsPage
}];
class MyBookingsPageRoutingModule {}
_MyBookingsPageRoutingModule = MyBookingsPageRoutingModule;
_MyBookingsPageRoutingModule.ɵfac = function MyBookingsPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MyBookingsPageRoutingModule)();
};
_MyBookingsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _MyBookingsPageRoutingModule
});
_MyBookingsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MyBookingsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 27027
/*!***************************************************!*\
  !*** ./src/app/my-bookings/my-bookings.module.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBookingsPageModule: () => (/* binding */ MyBookingsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _my_bookings_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-bookings-routing.module */ 32266);
/* harmony import */ var _my_bookings_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-bookings.page */ 25212);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 51670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 17705);
var _MyBookingsPageModule;







class MyBookingsPageModule {}
_MyBookingsPageModule = MyBookingsPageModule;
_MyBookingsPageModule.ɵfac = function MyBookingsPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MyBookingsPageModule)();
};
_MyBookingsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _MyBookingsPageModule
});
_MyBookingsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__.InAppBrowser],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _my_bookings_routing_module__WEBPACK_IMPORTED_MODULE_3__.MyBookingsPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MyBookingsPageModule, {
    declarations: [_my_bookings_page__WEBPACK_IMPORTED_MODULE_4__.MyBookingsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _my_bookings_routing_module__WEBPACK_IMPORTED_MODULE_3__.MyBookingsPageRoutingModule]
  });
})();

/***/ },

/***/ 25212
/*!*************************************************!*\
  !*** ./src/app/my-bookings/my-bookings.page.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBookingsPage: () => (/* binding */ MyBookingsPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var modules_ion_bottom_drawer_drawer_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/ion-bottom-drawer/drawer-state */ 3641);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _map_map_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../map/map.page */ 71692);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/modules */ 85756);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 84692);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 49431);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 83087);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _services_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/firebase-analytics.service */ 47402);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 51670);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 89417);

var _MyBookingsPage;




















const _c0 = ["swiperRef"];
const _c1 = () => ({
  "padding-top": "50px"
});
const _c2 = () => ({});
const _c3 = () => [1, 2, 3, 4, 5];
const _c4 = () => ["booked", "partially cancelled"];
function MyBookingsPage_ng_container_0_ion_header_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 9)(2, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "My Trips");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r0.metaData.msiteFolder == "cbustheme" ? "cbus_header" : "theme1_header");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", ctx_r0.logo ? ctx_r0.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function MyBookingsPage_ng_container_0_ion_header_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-header", 11)(1, "ion-toolbar", 9)(2, "ion-title", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "My Trips");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 9)(5, "ion-segment", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function MyBookingsPage_ng_container_0_ion_header_2_Template_ion_segment_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.segment, $event) || (ctx_r0.segment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ion-segment-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_0_ion_header_2_Template_ion_segment_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.changeSegment("future"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " Upcoming ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ion-segment-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_0_ion_header_2_Template_ion_segment_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.changeSegment("previous"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, " Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r0.metaData.msiteFolder == "cbustheme" ? "cbus_header" : "theme1_header");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r0.metaData.msiteFolder == "cbustheme" ? "title" : "center-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r0.metaData.msiteFolder == "cbustheme" ? "cbus_bg_curved" : "theme1_bg_curved");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.segment);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r0.metaData.msiteFolder == "cbustheme" ? "themeone-segment-cbus" : "themeone-segment-cbus-2");
  }
}
function MyBookingsPage_ng_container_0_ion_content_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-content", 15)(1, "div", 16)(2, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " No bookings found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " Please log in to access your bookings. If you not registered yet click on sign up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ion-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_0_ion_content_3_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.gotoLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_0_ion_content_3_Template_p_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.gotoSignup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function MyBookingsPage_ng_container_0_ion_content_4_div_2_ion_card_1_ion_icon_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ion-icon", 49);
  }
}
function MyBookingsPage_ng_container_0_ion_content_4_div_2_ion_card_1_ion_icon_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ion-icon", 50);
  }
}
function MyBookingsPage_ng_container_0_ion_content_4_div_2_ion_card_1_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", "Cancelledk", " ");
  }
}
function MyBookingsPage_ng_container_0_ion_content_4_div_2_ion_card_1_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", "Will be travelling", " ");
  }
}
function MyBookingsPage_ng_container_0_ion_content_4_div_2_ion_card_1_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", "Trip Completed", " ");
  }
}
function MyBookingsPage_ng_container_0_ion_content_4_div_2_ion_card_1_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", "Is In Journey", " ");
  }
}
function MyBookingsPage_ng_container_0_ion_content_4_div_2_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-card", 28)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_0_ion_content_4_div_2_ion_card_1_Template_div_click_1_listener() {
      const booking_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.detailsPage(booking_r5, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-row", 30)(3, "ion-col", 31)(4, "ion-row", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ion-row", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ion-row", 34)(9, "ion-text", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "ion-col", 36)(12, "ion-row", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "ion-row", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "ion-row", 38)(17, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "ion-row", 39)(20, "ion-col", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, MyBookingsPage_ng_container_0_ion_content_4_div_2_ion_card_1_ion_icon_21_Template, 1, 0, "ion-icon", 41)(22, MyBookingsPage_ng_container_0_ion_content_4_div_2_ion_card_1_ion_icon_22_Template, 1, 0, "ion-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "ion-row", 43)(24, "ion-col", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, MyBookingsPage_ng_container_0_ion_content_4_div_2_ion_card_1_span_26_Template, 2, 1, "span", 46)(27, MyBookingsPage_ng_container_0_ion_content_4_div_2_ion_card_1_span_27_Template, 2, 1, "span", 46)(28, MyBookingsPage_ng_container_0_ion_content_4_div_2_ion_card_1_span_28_Template, 2, 1, "span", 47)(29, MyBookingsPage_ng_container_0_ion_content_4_div_2_ion_card_1_span_29_Template, 2, 1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "ion-col", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const booking_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", booking_r5.weekDay, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r0.metaData.msiteFolder == "cbustheme" ? "cbus_travelDay" : "themeone_travelDay");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", booking_r5.travelDay, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", booking_r5.month, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r0.metaData.msiteFolder == "cbustheme" ? "trip-origin" : "trip-origin-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", booking_r5.origin, " - ", booking_r5.destination, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" PNR ", booking_r5.pnrNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Booked on ", booking_r5.createdOn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", booking_r5.transactionStatus == "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", booking_r5.transactionStatus == "Booked" && !booking_r5.is_in_journey && !booking_r5.iscompleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", booking_r5.transactionStatus == "Booked" && !booking_r5.is_in_journey && booking_r5.iscompleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", booking_r5.transactionStatus == "Booked" && booking_r5.is_in_journey && !booking_r5.iscompleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r0.metaData.msiteFolder == "cbustheme" ? "card-detail-text" : "card-detail-text-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", booking_r5["is_e_phone_booking"] ? "Confirm Booking" : "See Details", " ");
  }
}
function MyBookingsPage_ng_container_0_ion_content_4_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 53)(1, "ion-grid")(2, "ion-row")(3, "ion-col", 54)(4, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "No Bookings Found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }
}
function MyBookingsPage_ng_container_0_ion_content_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MyBookingsPage_ng_container_0_ion_content_4_div_2_ion_card_1_Template, 32, 17, "ion-card", 26)(2, MyBookingsPage_ng_container_0_ion_content_4_div_2_div_2_Template, 6, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.bookingsListToday);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.bookingsListToday.length == 0);
  }
}
function MyBookingsPage_ng_container_0_ion_content_4_div_3_ion_card_1_ion_icon_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ion-icon", 49);
  }
}
function MyBookingsPage_ng_container_0_ion_content_4_div_3_ion_card_1_ion_icon_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ion-icon", 50);
  }
}
function MyBookingsPage_ng_container_0_ion_content_4_div_3_ion_card_1_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", "Cancelled", " ");
  }
}
function MyBookingsPage_ng_container_0_ion_content_4_div_3_ion_card_1_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", "Trip Completed", " ");
  }
}
function MyBookingsPage_ng_container_0_ion_content_4_div_3_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-card", 28)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_0_ion_content_4_div_3_ion_card_1_Template_div_click_1_listener() {
      const booking_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.detailsPage(booking_r7, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-row", 30)(3, "ion-col", 31)(4, "ion-row", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ion-row", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ion-row", 34)(9, "ion-text", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "ion-col", 36)(12, "ion-row", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "ion-row", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "ion-row", 38)(17, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "ion-row", 39)(20, "ion-col", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, MyBookingsPage_ng_container_0_ion_content_4_div_3_ion_card_1_ion_icon_21_Template, 1, 0, "ion-icon", 41)(22, MyBookingsPage_ng_container_0_ion_content_4_div_3_ion_card_1_ion_icon_22_Template, 1, 0, "ion-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "ion-row", 43)(24, "ion-col", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, MyBookingsPage_ng_container_0_ion_content_4_div_3_ion_card_1_span_26_Template, 2, 1, "span", 57)(27, MyBookingsPage_ng_container_0_ion_content_4_div_3_ion_card_1_span_27_Template, 2, 1, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "ion-col", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const booking_r7 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", booking_r7.weekDay, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r0.metaData.msiteFolder == "cbustheme" ? "cbus_travelDay" : "themeone_travelDay");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", booking_r7.travelDay, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", booking_r7.month, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r0.metaData.msiteFolder == "cbustheme" ? "trip-origin" : "trip-origin-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", booking_r7.origin, " - ", booking_r7.destination, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" PNR ", booking_r7.pnrNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Booked on ", booking_r7.createdOn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", booking_r7.transactionStatus == "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", booking_r7.transactionStatus == "Booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r0.metaData.msiteFolder == "cbustheme" ? "card-detail-text" : "card-detail-text-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", booking_r7["is_e_phone_booking"] && booking_r7.transactionStatus != "Cancelled" ? "Confirm Booking" : "See Details", " ");
  }
}
function MyBookingsPage_ng_container_0_ion_content_4_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 53)(1, "ion-grid")(2, "ion-row")(3, "ion-col", 54)(4, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "No Bookings Found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }
}
function MyBookingsPage_ng_container_0_ion_content_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MyBookingsPage_ng_container_0_ion_content_4_div_3_ion_card_1_Template, 30, 15, "ion-card", 26)(2, MyBookingsPage_ng_container_0_ion_content_4_div_3_div_2_Template, 6, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.bookingsList);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.bookingsList.length == 0);
  }
}
function MyBookingsPage_ng_container_0_ion_content_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-content", 22)(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, MyBookingsPage_ng_container_0_ion_content_4_div_2_Template, 3, 2, "div", 24)(3, MyBookingsPage_ng_container_0_ion_content_4_div_3_Template, 3, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitch", ctx_r0.segment);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", "future");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", "previous");
  }
}
function MyBookingsPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MyBookingsPage_ng_container_0_ion_header_1_Template, 5, 2, "ion-header", 5)(2, MyBookingsPage_ng_container_0_ion_header_2_Template, 10, 5, "ion-header", 6)(3, MyBookingsPage_ng_container_0_ion_content_3_Template, 12, 0, "ion-content", 7)(4, MyBookingsPage_ng_container_0_ion_content_4_Template, 4, 3, "ion-content", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isLogin);
  }
}
function MyBookingsPage_ng_container_1_ion_content_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-content", 69)(1, "div", 16)(2, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " No Bookings Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " Please log in to access your bookings. If you not registered yet click on sign up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ion-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_1_ion_content_10_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.gotoLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_1_ion_content_10_Template_p_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.gotoSignup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function MyBookingsPage_ng_container_1_ion_content_11_div_15_ion_row_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-row", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_1_ion_content_11_div_15_ion_row_2_Template_ion_row_click_0_listener() {
      const booking_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.detailsPage(booking_r13, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-col", 86)(2, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "ion-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ion-col", 89)(5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 90)(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, " to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "ion-col", 86)(16, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "ion-icon", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const booking_r13 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](booking_r13.pnrNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](booking_r13.origin ? booking_r13.origin : " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](booking_r13.destination ? booking_r13.destination : " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate4"]("", ctx_r0.dateService.getDayNameFromDate(booking_r13.travelDate) + ", ", "", booking_r13.travelDay, " ", booking_r13.travelMonth, " ", booking_r13.travelYear, "");
  }
}
function MyBookingsPage_ng_container_1_ion_content_11_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 82)(1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, MyBookingsPage_ng_container_1_ion_content_11_div_15_ion_row_2_Template, 18, 7, "ion-row", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.bookingsListToday);
  }
}
function MyBookingsPage_ng_container_1_ion_content_11_ion_row_16_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No Bookings Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_1_ion_content_11_ion_row_16_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_1_ion_content_11_ion_row_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-row")(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, MyBookingsPage_ng_container_1_ion_content_11_ion_row_16_p_2_Template, 2, 0, "p", 93)(3, MyBookingsPage_ng_container_1_ion_content_11_ion_row_16_p_3_Template, 2, 0, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.errMsgTdy);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.errMsgTdy);
  }
}
function MyBookingsPage_ng_container_1_ion_content_11_div_18_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-row", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_1_ion_content_11_div_18_ion_row_1_Template_ion_row_click_0_listener() {
      const booking_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.detailsPage(booking_r15, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-col", 86)(2, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "ion-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ion-col", 89)(5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 90)(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, " to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "ion-col", 86)(16, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "ion-icon", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const booking_r15 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](booking_r15.pnrNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](booking_r15.origin ? booking_r15.origin : " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](booking_r15.destination ? booking_r15.destination : " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate4"]("", ctx_r0.dateService.getDayNameFromDate(booking_r15.travelDate) + ", ", "", booking_r15.travelDay, " ", booking_r15.travelMonth, " ", booking_r15.travelYear, "");
  }
}
function MyBookingsPage_ng_container_1_ion_content_11_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MyBookingsPage_ng_container_1_ion_content_11_div_18_ion_row_1_Template, 18, 7, "ion-row", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.bookingsList);
  }
}
function MyBookingsPage_ng_container_1_ion_content_11_ion_row_19_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No Bookings Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_1_ion_content_11_ion_row_19_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_1_ion_content_11_ion_row_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-row")(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, MyBookingsPage_ng_container_1_ion_content_11_ion_row_19_p_2_Template, 2, 0, "p", 93)(3, MyBookingsPage_ng_container_1_ion_content_11_ion_row_19_p_3_Template, 2, 0, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.errMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.errMsg);
  }
}
function MyBookingsPage_ng_container_1_ion_content_11_div_21_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-row", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_1_ion_content_11_div_21_ion_row_1_Template_ion_row_click_0_listener() {
      const booking_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.detailsPage(booking_r17, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-col", 86)(2, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "ion-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ion-col", 89)(5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 90)(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, " to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "ion-col", 86)(16, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "ion-icon", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const booking_r17 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](booking_r17.pnrNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](booking_r17.origin ? booking_r17.origin : " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](booking_r17.destination ? booking_r17.destination : " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate4"]("", ctx_r0.dateService.getDayNameFromDate(booking_r17.travelDate) + ", ", "", booking_r17.travelDay, " ", booking_r17.travelMonth, " ", booking_r17.travelYear, "");
  }
}
function MyBookingsPage_ng_container_1_ion_content_11_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MyBookingsPage_ng_container_1_ion_content_11_div_21_ion_row_1_Template, 18, 7, "ion-row", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.bookingsList);
  }
}
function MyBookingsPage_ng_container_1_ion_content_11_ion_row_22_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No Bookings Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_1_ion_content_11_ion_row_22_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_1_ion_content_11_ion_row_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-row")(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, MyBookingsPage_ng_container_1_ion_content_11_ion_row_22_p_2_Template, 2, 0, "p", 93)(3, MyBookingsPage_ng_container_1_ion_content_11_ion_row_22_p_3_Template, 2, 0, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.errMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.errMsg);
  }
}
function MyBookingsPage_ng_container_1_ion_content_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-content", 70)(1, "div", 71)(2, "ion-segment", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function MyBookingsPage_ng_container_1_ion_content_11_Template_ion_segment_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.segment, $event) || (ctx_r0.segment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ion-segment-button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_1_ion_content_11_Template_ion_segment_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10);
      const swiperRef_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.goToSlide(swiperRef_r11, 0, "future"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ion-segment-button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_1_ion_content_11_Template_ion_segment_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10);
      const swiperRef_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.goToSlide(swiperRef_r11, 0, "previous"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "ion-segment-button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_1_ion_content_11_Template_ion_segment_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10);
      const swiperRef_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.goToSlide(swiperRef_r11, 0, "cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "swiper-container", 76, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("swiperslidechange", function MyBookingsPage_ng_container_1_ion_content_11_Template_swiper_container_swiperslidechange_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.onSlideChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "swiper-slide", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, MyBookingsPage_ng_container_1_ion_content_11_div_15_Template, 3, 1, "div", 78)(16, MyBookingsPage_ng_container_1_ion_content_11_ion_row_16_Template, 4, 2, "ion-row", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "swiper-slide", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, MyBookingsPage_ng_container_1_ion_content_11_div_18_Template, 2, 1, "div", 80)(19, MyBookingsPage_ng_container_1_ion_content_11_ion_row_19_Template, 4, 2, "ion-row", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "swiper-slide", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, MyBookingsPage_ng_container_1_ion_content_11_div_21_Template, 2, 1, "div", 80)(22, MyBookingsPage_ng_container_1_ion_content_11_ion_row_22_Template, 4, 2, "ion-row", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.segment);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("init", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.bookingsListToday.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.bookingsListToday.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.bookingsList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.bookingsList.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.bookingsList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.bookingsList.length == 0);
  }
}
function MyBookingsPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-header", 61)(2, "ion-toolbar", 62)(3, "ion-row")(4, "ion-col", 63)(5, "ion-buttons")(6, "ion-back-button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_1_Template_ion_back_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.gotoBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "ion-col", 65)(8, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, " My Trips ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, MyBookingsPage_ng_container_1_ion_content_10_Template, 12, 0, "ion-content", 67)(11, MyBookingsPage_ng_container_1_ion_content_11_Template, 23, 8, "ion-content", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", ctx_r0.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c1) : _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](4, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.isLogin && ctx_r0.isShowNoData);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isLogin);
  }
}
function MyBookingsPage_ng_container_2_ion_content_5_div_13_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-row", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_2_ion_content_5_div_13_ion_row_1_Template_ion_row_click_0_listener() {
      const booking_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.detailsPage(booking_r21, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-col", 109)(2, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "ion-icon", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ion-col", 112)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "p", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "p", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Booked ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const booking_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Pnr Number: ", booking_r21.pnrNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", booking_r21.origin ? booking_r21.origin : " ", "-", booking_r21.destination ? booking_r21.destination : " ", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Boarding: ", booking_r21.boardingPoint, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](15, 5, booking_r21.createdOn, "dd MMM y, hh:mm a"));
  }
}
function MyBookingsPage_ng_container_2_ion_content_5_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MyBookingsPage_ng_container_2_ion_content_5_div_13_ion_row_1_Template, 16, 8, "ion-row", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.bookingsListToday);
  }
}
function MyBookingsPage_ng_container_2_ion_content_5_div_14_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No bookings found");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_2_ion_content_5_div_14_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_2_ion_content_5_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 83)(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, MyBookingsPage_ng_container_2_ion_content_5_div_14_p_2_Template, 2, 0, "p", 93)(3, MyBookingsPage_ng_container_2_ion_content_5_div_14_p_3_Template, 2, 0, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.errMsgTdy);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.errMsgTdy);
  }
}
function MyBookingsPage_ng_container_2_ion_content_5_div_16_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-row", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_2_ion_content_5_div_16_ion_row_1_Template_ion_row_click_0_listener() {
      const booking_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.detailsPage(booking_r23, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-col", 109)(2, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "ion-icon", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ion-col", 112)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "p", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "p", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Booked ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const booking_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Pnr Number: ", booking_r23.pnrNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", booking_r23.origin ? booking_r23.origin : " ", "-", booking_r23.destination ? booking_r23.destination : " ", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Boarding: ", booking_r23.boardingPoint, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](15, 5, booking_r23.createdOn, "dd MMM y, hh:mm a"));
  }
}
function MyBookingsPage_ng_container_2_ion_content_5_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MyBookingsPage_ng_container_2_ion_content_5_div_16_ion_row_1_Template, 16, 8, "ion-row", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.bookingsList);
  }
}
function MyBookingsPage_ng_container_2_ion_content_5_div_17_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No bookings found");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_2_ion_content_5_div_17_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_2_ion_content_5_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 83)(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, MyBookingsPage_ng_container_2_ion_content_5_div_17_p_2_Template, 2, 0, "p", 93)(3, MyBookingsPage_ng_container_2_ion_content_5_div_17_p_3_Template, 2, 0, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.errMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.errMsg);
  }
}
function MyBookingsPage_ng_container_2_ion_content_5_div_19_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-row", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_2_ion_content_5_div_19_ion_row_1_Template_ion_row_click_0_listener() {
      const booking_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.detailsPage(booking_r25, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-col", 109)(2, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "ion-icon", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ion-col", 112)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "p", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Cancelled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const booking_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Pnr Number: ", booking_r25.pnrNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", booking_r25.origin ? booking_r25.origin : " ", "-", booking_r25.destination ? booking_r25.destination : " ", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Boarding: ", booking_r25.boardingPoint, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](15, 5, booking_r25.createdOn, "dd MMM y, hh:mm a"));
  }
}
function MyBookingsPage_ng_container_2_ion_content_5_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MyBookingsPage_ng_container_2_ion_content_5_div_19_ion_row_1_Template, 16, 8, "ion-row", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.bookingsList);
  }
}
function MyBookingsPage_ng_container_2_ion_content_5_div_20_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No bookings found");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_2_ion_content_5_div_20_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_2_ion_content_5_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 83)(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, MyBookingsPage_ng_container_2_ion_content_5_div_20_p_2_Template, 2, 0, "p", 93)(3, MyBookingsPage_ng_container_2_ion_content_5_div_20_p_3_Template, 2, 0, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.errMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.errMsg);
  }
}
function MyBookingsPage_ng_container_2_ion_content_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-content", 98)(1, "div")(2, "div", 99)(3, "ion-segment", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function MyBookingsPage_ng_container_2_ion_content_5_Template_ion_segment_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r18);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.segment, $event) || (ctx_r0.segment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ion-segment-button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_2_ion_content_5_Template_ion_segment_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r18);
      const swiperRef_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.goToSlide(swiperRef_r19, 0, "future"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " Upcoming ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ion-segment-button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_2_ion_content_5_Template_ion_segment_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r18);
      const swiperRef_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.goToSlide(swiperRef_r19, 1, "previous"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ion-segment-button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_2_ion_content_5_Template_ion_segment_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r18);
      const swiperRef_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.goToSlide(swiperRef_r19, 2, "cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, " Cancelled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "swiper-container", 76, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("swiperslidechange", function MyBookingsPage_ng_container_2_ion_content_5_Template_swiper_container_swiperslidechange_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r18);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.onSlideChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "swiper-slide", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, MyBookingsPage_ng_container_2_ion_content_5_div_13_Template, 2, 1, "div", 80)(14, MyBookingsPage_ng_container_2_ion_content_5_div_14_Template, 4, 2, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "swiper-slide", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, MyBookingsPage_ng_container_2_ion_content_5_div_16_Template, 2, 1, "div", 80)(17, MyBookingsPage_ng_container_2_ion_content_5_div_17_Template, 4, 2, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "swiper-slide", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, MyBookingsPage_ng_container_2_ion_content_5_div_19_Template, 2, 1, "div", 80)(20, MyBookingsPage_ng_container_2_ion_content_5_div_20_Template, 4, 2, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.segment);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("init", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.bookingsListToday.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.bookingsListToday.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.bookingsList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.bookingsList.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.bookingsList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.bookingsList.length == 0);
  }
}
function MyBookingsPage_ng_container_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "ion-button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_2_div_6_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r26);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.trackYourBus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Track your Bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function MyBookingsPage_ng_container_2_ion_content_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-content")(1, "div", 16)(2, "p", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " No bookings found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " Please log in to access your bookings. If you not registered yet click on sign up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ion-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_2_ion_content_7_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r27);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.gotoLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_2_ion_content_7_Template_p_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r27);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.gotoSignup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function MyBookingsPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-header", 94)(2, "ion-toolbar", 95)(3, "ion-title", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "My Bookings");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, MyBookingsPage_ng_container_2_ion_content_5_Template, 21, 8, "ion-content", 97)(6, MyBookingsPage_ng_container_2_div_6_Template, 3, 0, "div", 5)(7, MyBookingsPage_ng_container_2_ion_content_7_Template, 12, 0, "ion-content", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.metaData && ctx_r0.metaData.trackingoUrl && ctx_r0.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.isLogin);
  }
}
function MyBookingsPage_ng_container_3_div_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" (", ctx_r0.sbTripCount("future"), ")");
  }
}
function MyBookingsPage_ng_container_3_div_6_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" (", ctx_r0.sbTripCount("previous"), ")");
  }
}
function MyBookingsPage_ng_container_3_div_6_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" (", ctx_r0.sbTripCount("cancel"), ")");
  }
}
function MyBookingsPage_ng_container_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 132)(1, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_3_div_6_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.sbSelectSegment("future"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, MyBookingsPage_ng_container_3_div_6_ng_container_3_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_3_div_6_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.sbSelectSegment("previous"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, MyBookingsPage_ng_container_3_div_6_ng_container_6_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_3_div_6_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.sbSelectSegment("cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, " Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, MyBookingsPage_ng_container_3_div_6_ng_container_9_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("sb-tab-btn--active", ctx_r0.segment === "future");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("aria-selected", ctx_r0.segment === "future");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.sbTripCount("future") > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("sb-tab-btn--active", ctx_r0.segment === "previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("aria-selected", ctx_r0.segment === "previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.sbTripCount("previous") > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("sb-tab-btn--active", ctx_r0.segment === "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("aria-selected", ctx_r0.segment === "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.sbTripCount("cancel") > 0);
  }
}
function MyBookingsPage_ng_container_3_ion_content_7_ng_container_1_article_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "article", 137)(1, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ion-skeleton-text", 139)(3, "ion-skeleton-text", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "ion-skeleton-text", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "ion-skeleton-text", 143)(7, "ion-skeleton-text", 143)(8, "ion-skeleton-text", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("animated", true);
  }
}
function MyBookingsPage_ng_container_3_ion_content_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MyBookingsPage_ng_container_3_ion_content_7_ng_container_1_article_1_Template, 9, 6, "article", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](1, _c3));
  }
}
function MyBookingsPage_ng_container_3_ion_content_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Something went wrong. Please try again.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function MyBookingsPage_ng_container_3_ion_content_7_ng_container_3_ng_container_1_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_3_ion_content_7_ng_container_3_ng_container_1_button_34_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.trackYourBus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Track bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_3_ion_content_7_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "article", 148)(2, "div", 149)(3, "span", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_3_ion_content_7_ng_container_3_ng_container_1_Template_div_click_7_listener() {
      const booking_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r29).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.detailsPage(booking_r30, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 153)(9, "div")(10, "h2", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "p", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "img", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "dl", 157)(18, "div")(19, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "PNR");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div")(24, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Berths");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div")(29, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "Boarding");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, MyBookingsPage_ng_container_3_ion_content_7_ng_container_3_ng_container_1_button_34_Template, 3, 0, "button", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const booking_r30 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.sbDepartsLabel(booking_r30));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("sb-status-pill--danger", (booking_r30.transactionStatus || "").toLowerCase().indexOf("cancel") > -1)("sb-status-pill--warning", (booking_r30.transactionStatus || "").toLowerCase().indexOf("booked") > -1 && booking_r30.is_e_phone_booking);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((booking_r30.transactionStatus || "").toLowerCase().indexOf("booked") > -1 && booking_r30.is_e_phone_booking ? "Confirm Booking" : (booking_r30.transactionStatus || "").toLowerCase().indexOf("booked") > -1 ? "CONFIRMEND" : booking_r30.transactionStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", booking_r30.origin, " \u2192 ", booking_r30.destination, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate5"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](14, 17, booking_r30.weekDay), ", ", booking_r30.travelDay, " ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](15, 19, booking_r30.month), " \u00B7 ", booking_r30.time, " - ", booking_r30.dropping_time, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](booking_r30.pnrNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](booking_r30.seatNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](booking_r30.boardingPoint);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.metaData && ctx_r0.metaData.trackingoUrl);
  }
}
function MyBookingsPage_ng_container_3_ion_content_7_ng_container_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 162)(1, "p", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "No upcoming trips");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("height", (ctx_r0.recently_completed_trips == null ? null : ctx_r0.recently_completed_trips.length) ? "50%" : "100%");
  }
}
function MyBookingsPage_ng_container_3_ion_content_7_ng_container_3_ng_container_3_article_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "article", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_3_ion_content_7_ng_container_3_ng_container_3_article_3_Template_article_click_0_listener() {
      const recentBooking_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r32).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.detailsPage(recentBooking_r33, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 169)(4, "span", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "img", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const recentBooking_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"]("", recentBooking_r33.origin_name, " \u2192 ", recentBooking_r33.destination_name, " \u00B7 ", recentBooking_r33.travelDay, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("PNR ", recentBooking_r33.pnr_number, "");
  }
}
function MyBookingsPage_ng_container_3_ion_content_7_ng_container_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "h3", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Recently completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, MyBookingsPage_ng_container_3_ion_content_7_ng_container_3_ng_container_3_article_3_Template, 9, 4, "article", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.recently_completed_trips);
  }
}
function MyBookingsPage_ng_container_3_ion_content_7_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MyBookingsPage_ng_container_3_ion_content_7_ng_container_3_ng_container_1_Template, 35, 21, "ng-container", 146)(2, MyBookingsPage_ng_container_3_ion_content_7_ng_container_3_div_2_Template, 3, 2, "div", 147)(3, MyBookingsPage_ng_container_3_ion_content_7_ng_container_3_ng_container_3_Template, 4, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.bookingsListToday);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.sbTripsState === "ready" && ctx_r0.bookingsListToday.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.sbTripsState === "ready" && (ctx_r0.recently_completed_trips == null ? null : ctx_r0.recently_completed_trips.length) > 0);
  }
}
function MyBookingsPage_ng_container_3_ion_content_7_ng_container_4_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "article", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_3_ion_content_7_ng_container_4_article_1_Template_article_click_0_listener() {
      const booking_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r34).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.detailsPage(booking_r35, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 153)(2, "div")(3, "h2", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "p", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "span", 175)(10, "span", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "img", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "dl", 157)(14, "div")(15, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "PNR");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div")(20, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Berths");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div")(25, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "Boarding");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const booking_r35 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", booking_r35.origin, " \u2192 ", booking_r35.destination, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate5"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 15, booking_r35.weekDay), ", ", booking_r35.travelDay, " ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 17, booking_r35.month), " \u00B7 ", booking_r35.time, " - ", booking_r35.dropping_time, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("sb-status-pill--danger", ctx_r0.segment === "cancel")("sb-status-pill--muted", ctx_r0.segment === "previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](19, _c4).indexOf(booking_r35 == null ? null : booking_r35.transactionStatus == null ? null : booking_r35.transactionStatus.toLowerCase()) > -1 ? "Completed" : booking_r35.transactionStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](booking_r35.pnrNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](booking_r35.seatNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](booking_r35.boardingPoint);
  }
}
function MyBookingsPage_ng_container_3_ion_content_7_ng_container_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 162)(1, "p", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.segment === "cancel" ? "No cancelled trips" : "No completed trips");
  }
}
function MyBookingsPage_ng_container_3_ion_content_7_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MyBookingsPage_ng_container_3_ion_content_7_ng_container_4_article_1_Template, 29, 20, "article", 172)(2, MyBookingsPage_ng_container_3_ion_content_7_ng_container_4_div_2_Template, 3, 1, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.bookingsList);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.sbTripsState === "ready" && ctx_r0.bookingsList.length === 0);
  }
}
function MyBookingsPage_ng_container_3_ion_content_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-content", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MyBookingsPage_ng_container_3_ion_content_7_ng_container_1_Template, 2, 2, "ng-container", 5)(2, MyBookingsPage_ng_container_3_ion_content_7_div_2_Template, 4, 0, "div", 135)(3, MyBookingsPage_ng_container_3_ion_content_7_ng_container_3_Template, 4, 3, "ng-container", 5)(4, MyBookingsPage_ng_container_3_ion_content_7_ng_container_4_Template, 3, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.sbTripsState === "loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.sbTripsState === "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.segment === "future");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.segment === "previous" || ctx_r0.segment === "cancel");
  }
}
function MyBookingsPage_ng_container_3_ion_content_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-content", 134)(1, "div", 176)(2, "h2", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "No trips to show");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Please log in to access your bookings. If you are not registered yet, sign up.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "button", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_3_ion_content_8_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r36);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.gotoLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "button", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_3_ion_content_8_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r36);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.gotoSignup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
}
function MyBookingsPage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-header", 126)(2, "ion-toolbar", 127)(3, "div", 128)(4, "h1", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "My Trips");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, MyBookingsPage_ng_container_3_div_6_Template, 10, 12, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, MyBookingsPage_ng_container_3_ion_content_7_Template, 5, 4, "ion-content", 131)(8, MyBookingsPage_ng_container_3_ion_content_8_Template, 10, 0, "ion-content", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.isLogin);
  }
}
function MyBookingsPage_ng_container_4_ion_toolbar_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-toolbar", 95)(1, "ion-title", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "My Bookings");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", ctx_r0.logo ? ctx_r0.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function MyBookingsPage_ng_container_4_ion_toolbar_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-toolbar", 186)(1, "ion-title", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "My Bookings");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", ctx_r0.logo ? ctx_r0.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function MyBookingsPage_ng_container_4_ion_content_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-content")(1, "div", 187)(2, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " No bookings found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " Please log in to access your bookings. If you not registered yet click on sign up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ion-button", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_4_ion_content_4_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.gotoLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "p", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "p", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_4_ion_content_4_Template_p_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.gotoSignup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function MyBookingsPage_ng_container_4_ion_content_5_div_17_ion_col_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-col", 202)(1, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_4_ion_content_5_div_17_ion_col_1_Template_div_click_1_listener() {
      const booking_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r40).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.detailsPage(booking_r41, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "ion-icon", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "p", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const booking_r41 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", booking_r41.origin ? booking_r41.origin : " ", "-", booking_r41.destination ? booking_r41.destination : " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate4"]("", ctx_r0.dateService.getDayNameFromDate(booking_r41.travelDate) + ", ", "", booking_r41.travelDay, " ", booking_r41.travelMonth, " ", booking_r41.travelYear, "");
  }
}
function MyBookingsPage_ng_container_4_ion_content_5_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MyBookingsPage_ng_container_4_ion_content_5_div_17_ion_col_1_Template, 7, 6, "ion-col", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.bookingsListToday);
  }
}
function MyBookingsPage_ng_container_4_ion_content_5_ion_row_18_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No bookings found");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_4_ion_content_5_ion_row_18_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_4_ion_content_5_ion_row_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-row")(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, MyBookingsPage_ng_container_4_ion_content_5_ion_row_18_p_2_Template, 2, 0, "p", 93)(3, MyBookingsPage_ng_container_4_ion_content_5_ion_row_18_p_3_Template, 2, 0, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.errMsgTdy);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.errMsgTdy);
  }
}
function MyBookingsPage_ng_container_4_ion_content_5_ion_col_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-col", 202)(1, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_4_ion_content_5_ion_col_21_Template_div_click_1_listener() {
      const booking_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.detailsPage(booking_r43, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "ion-icon", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "p", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const booking_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", booking_r43.origin ? booking_r43.origin : " ", "-", booking_r43.destination ? booking_r43.destination : " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"]("", booking_r43.travelDay, " ", booking_r43.travelMonth, " ", booking_r43.travelYear, "");
  }
}
function MyBookingsPage_ng_container_4_ion_content_5_ion_row_22_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No bookings found");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_4_ion_content_5_ion_row_22_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_4_ion_content_5_ion_row_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-row")(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, MyBookingsPage_ng_container_4_ion_content_5_ion_row_22_p_2_Template, 2, 0, "p", 93)(3, MyBookingsPage_ng_container_4_ion_content_5_ion_row_22_p_3_Template, 2, 0, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.errMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.errMsg);
  }
}
function MyBookingsPage_ng_container_4_ion_content_5_ion_col_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-col", 202)(1, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_4_ion_content_5_ion_col_25_Template_div_click_1_listener() {
      const booking_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r44).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.detailsPage(booking_r45, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "ion-icon", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "p", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const booking_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", booking_r45.origin ? booking_r45.origin : " ", "-", booking_r45.destination ? booking_r45.destination : " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"]("", booking_r45.travelDay, " ", booking_r45.travelMonth, " ", booking_r45.travelYear, "");
  }
}
function MyBookingsPage_ng_container_4_ion_content_5_ion_row_26_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No bookings found");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_4_ion_content_5_ion_row_26_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_4_ion_content_5_ion_row_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-row")(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, MyBookingsPage_ng_container_4_ion_content_5_ion_row_26_p_2_Template, 2, 0, "p", 93)(3, MyBookingsPage_ng_container_4_ion_content_5_ion_row_26_p_3_Template, 2, 0, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.errMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.errMsg);
  }
}
function MyBookingsPage_ng_container_4_ion_content_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-content", 191)(1, "ion-toolbar", 192)(2, "ion-segment", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function MyBookingsPage_ng_container_4_ion_content_5_Template_ion_segment_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.segment, $event) || (ctx_r0.segment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ion-segment-button", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_4_ion_content_5_Template_ion_segment_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38);
      const swiperRef_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](15);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.goToSlide(swiperRef_r39, 0, "future"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ion-segment-button", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_4_ion_content_5_Template_ion_segment_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38);
      const swiperRef_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](15);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.goToSlide(swiperRef_r39, 0, "previous"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "ion-segment-button", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_4_ion_content_5_Template_ion_segment_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38);
      const swiperRef_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](15);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.goToSlide(swiperRef_r39, 0, "cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "div", 197, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "swiper-container", 76, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("swiperslidechange", function MyBookingsPage_ng_container_4_ion_content_5_Template_swiper_container_swiperslidechange_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.onSlideChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "swiper-slide", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, MyBookingsPage_ng_container_4_ion_content_5_div_17_Template, 2, 1, "div", 78)(18, MyBookingsPage_ng_container_4_ion_content_5_ion_row_18_Template, 4, 2, "ion-row", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "swiper-slide", 199)(20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, MyBookingsPage_ng_container_4_ion_content_5_ion_col_21_Template, 7, 5, "ion-col", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, MyBookingsPage_ng_container_4_ion_content_5_ion_row_22_Template, 4, 2, "ion-row", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "swiper-slide", 201)(24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, MyBookingsPage_ng_container_4_ion_content_5_ion_col_25_Template, 7, 5, "ion-col", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, MyBookingsPage_ng_container_4_ion_content_5_ion_row_26_Template, 4, 2, "ion-row", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.segment);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 12, "Upcoming"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 14, "Completed"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 16, "Cancelled"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx_r0.segment != "map");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("init", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.bookingsListToday.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.bookingsListToday.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.bookingsList);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.bookingsList.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.bookingsList);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.bookingsList.length == 0);
  }
}
function MyBookingsPage_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-header", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, MyBookingsPage_ng_container_4_ion_toolbar_2_Template, 4, 1, "ion-toolbar", 182)(3, MyBookingsPage_ng_container_4_ion_toolbar_3_Template, 4, 1, "ion-toolbar", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, MyBookingsPage_ng_container_4_ion_content_4_Template, 12, 0, "ion-content", 5)(5, MyBookingsPage_ng_container_4_ion_content_5_Template, 27, 18, "ion-content", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isLogin);
  }
}
function MyBookingsPage_ng_container_5_ion_content_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-content")(1, "div", 16)(2, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "No bookings found");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Log in or create an account to access all features.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ion-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_5_ion_content_7_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r46);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.gotoLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "ion-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_5_ion_content_7_Template_ion_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r46);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.gotoSignup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "p", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
}
function MyBookingsPage_ng_container_5_ion_content_8_div_12_div_1_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const booking_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](booking_r50.serviceNumber);
  }
}
function MyBookingsPage_ng_container_5_ion_content_8_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_5_ion_content_8_div_12_div_1_Template_div_click_0_listener() {
      const booking_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r49).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.detailsPage(booking_r50, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Confirmed");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 223)(4, "div", 224)(5, "p", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, MyBookingsPage_ng_container_5_ion_content_8_div_12_div_1_p_7_Template, 2, 1, "p", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "p", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 228)(11, "p", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "p", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "p", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "div", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 233)(19, "div")(20, "p", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "p", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "a", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "View Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "img", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const booking_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", booking_r50.origin, " - ", booking_r50.destination, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", booking_r50.serviceNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("PNR ", booking_r50.pnrNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](booking_r50.travelMonth);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](booking_r50.travelDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](booking_r50.travelYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Booked on ", booking_r50.createdOn.split(",")[0], ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](booking_r50.createdOn.split(",")[1]);
  }
}
function MyBookingsPage_ng_container_5_ion_content_8_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MyBookingsPage_ng_container_5_ion_content_8_div_12_div_1_Template, 27, 9, "div", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.bookingsListToday);
  }
}
function MyBookingsPage_ng_container_5_ion_content_8_ng_template_13_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No bookings found");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_5_ion_content_8_ng_template_13_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_5_ion_content_8_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MyBookingsPage_ng_container_5_ion_content_8_ng_template_13_p_1_Template, 2, 0, "p", 93)(2, MyBookingsPage_ng_container_5_ion_content_8_ng_template_13_p_2_Template, 2, 0, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.errMsgTdy);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.errMsgTdy);
  }
}
function MyBookingsPage_ng_container_5_ion_content_8_div_16_div_1_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const booking_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](booking_r52.serviceNumber);
  }
}
function MyBookingsPage_ng_container_5_ion_content_8_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_5_ion_content_8_div_16_div_1_Template_div_click_0_listener() {
      const booking_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r51).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.detailsPage(booking_r52, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Trip Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 223)(4, "div", 224)(5, "p", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, MyBookingsPage_ng_container_5_ion_content_8_div_16_div_1_p_7_Template, 2, 1, "p", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "p", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 228)(11, "p", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "p", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "p", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "div", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 233)(19, "div")(20, "p", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "p", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "a", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "View Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "img", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const booking_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", booking_r52.origin, " - ", booking_r52.destination, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", booking_r52.serviceNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("PNR ", booking_r52.pnrNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](booking_r52.travelMonth);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](booking_r52.travelDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](booking_r52.travelYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Booked on ", booking_r52.createdOn.split(",")[0], ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](booking_r52.createdOn.split(",")[1]);
  }
}
function MyBookingsPage_ng_container_5_ion_content_8_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MyBookingsPage_ng_container_5_ion_content_8_div_16_div_1_Template, 27, 9, "div", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.bookingsList);
  }
}
function MyBookingsPage_ng_container_5_ion_content_8_ng_template_17_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No bookings found");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_5_ion_content_8_ng_template_17_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_5_ion_content_8_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MyBookingsPage_ng_container_5_ion_content_8_ng_template_17_p_1_Template, 2, 0, "p", 93)(2, MyBookingsPage_ng_container_5_ion_content_8_ng_template_17_p_2_Template, 2, 0, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.errMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.errMsg);
  }
}
function MyBookingsPage_ng_container_5_ion_content_8_div_20_div_1_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const booking_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](booking_r54.serviceNumber);
  }
}
function MyBookingsPage_ng_container_5_ion_content_8_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_5_ion_content_8_div_20_div_1_Template_div_click_0_listener() {
      const booking_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r53).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.detailsPage(booking_r54, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 223)(4, "div", 224)(5, "p", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, MyBookingsPage_ng_container_5_ion_content_8_div_20_div_1_p_7_Template, 2, 1, "p", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "p", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 228)(11, "p", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "p", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "p", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "div", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 233)(19, "div")(20, "p", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "p", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "a", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "View Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "img", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const booking_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", booking_r54.origin, " - ", booking_r54.destination, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", booking_r54.serviceNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("PNR ", booking_r54.pnrNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](booking_r54.travelMonth);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](booking_r54.travelDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](booking_r54.travelYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Booked on ", booking_r54.createdOn.split(",")[0], ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](booking_r54.createdOn.split(",")[1]);
  }
}
function MyBookingsPage_ng_container_5_ion_content_8_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MyBookingsPage_ng_container_5_ion_content_8_div_20_div_1_Template, 27, 9, "div", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.bookingsList);
  }
}
function MyBookingsPage_ng_container_5_ion_content_8_ng_template_21_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No bookings found");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_5_ion_content_8_ng_template_21_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MyBookingsPage_ng_container_5_ion_content_8_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MyBookingsPage_ng_container_5_ion_content_8_ng_template_21_p_1_Template, 2, 0, "p", 93)(2, MyBookingsPage_ng_container_5_ion_content_8_ng_template_21_p_2_Template, 2, 0, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.errMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.errMsg);
  }
}
function MyBookingsPage_ng_container_5_ion_content_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-content", 214)(1, "ion-toolbar", 192)(2, "ion-segment", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function MyBookingsPage_ng_container_5_ion_content_8_Template_ion_segment_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r47);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.segment, $event) || (ctx_r0.segment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ion-segment-button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_5_ion_content_8_Template_ion_segment_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r47);
      const swiperRef_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.goToSlide(swiperRef_r48, 0, "future"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "ion-segment-button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_5_ion_content_8_Template_ion_segment_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r47);
      const swiperRef_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.goToSlide(swiperRef_r48, 0, "previous"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "ion-segment-button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MyBookingsPage_ng_container_5_ion_content_8_Template_ion_segment_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r47);
      const swiperRef_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.goToSlide(swiperRef_r48, 0, "cancel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "swiper-container", 76, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("swiperslidechange", function MyBookingsPage_ng_container_5_ion_content_8_Template_swiper_container_swiperslidechange_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r47);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.onSlideChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "swiper-slide", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, MyBookingsPage_ng_container_5_ion_content_8_div_12_Template, 2, 1, "div", 217)(13, MyBookingsPage_ng_container_5_ion_content_8_ng_template_13_Template, 3, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "swiper-slide", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, MyBookingsPage_ng_container_5_ion_content_8_div_16_Template, 2, 1, "div", 217)(17, MyBookingsPage_ng_container_5_ion_content_8_ng_template_17_Template, 3, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "swiper-slide", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, MyBookingsPage_ng_container_5_ion_content_8_div_20_Template, 2, 1, "div", 217)(21, MyBookingsPage_ng_container_5_ion_content_8_ng_template_21_Template, 3, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const noUpcoming_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](14);
    const noCompleted_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](18);
    const noCancelled_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](22);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.segment);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("init", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.bookingsListToday.length > 0)("ngIfElse", noUpcoming_r55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.bookingsList.length > 0)("ngIfElse", noCompleted_r56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.bookingsList.length > 0)("ngIfElse", noCancelled_r57);
  }
}
function MyBookingsPage_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-header", 207)(2, "ion-toolbar", 208)(3, "ion-buttons", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "ion-back-button", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "ion-title", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "My Bookings");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, MyBookingsPage_ng_container_5_ion_content_7_Template, 12, 0, "ion-content", 5)(8, MyBookingsPage_ng_container_5_ion_content_8_Template, 23, 8, "ion-content", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isLogin);
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
    // seabirdThemeNew: load state of defaultCall(), which runs on every visit to the tab and clears the lists first.
    // Skeleton (no popup) on every load; empty messages only when 'ready', error block when 'error'.
    this.sbTripsState = 'loading';
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
    this.recently_completed_trips = [];
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
    // seabirdThemeNew: More → "Trips taken" opens this tab on Completed (navigation state set by MorePage.sbOpenCompletedTrips)
    if (this.metaData.msiteFolder == 'seabirdThemeNew' && history.state && history.state.sbSegment === 'previous') {
      this.segment = 'previous';
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
  // async onSlideChanged(slide: any) {
  //   const currentIndex = await slide.getActiveIndex();
  //   await this.getBookingList(currentIndex);
  //   switch (currentIndex) {
  //     case 0:
  //       this.segment = "future";
  //       this.segmentDisplayName = "Upcoming";
  //       this.commonService.gTrack('futureBookings','Future bookings viewed')
  //       break;
  //     case 1:
  //       this.segment = "previous";
  //       this.segmentDisplayName = "Completed";
  //       this.commonService.gTrack('previousBookings','Previous bookings viewed')
  //       break;
  //     case 2:
  //       this.segment = "cancel";
  //       this.segmentDisplayName = "Cancelled";
  //       this.commonService.gTrack('cancelledBookings','Cancelled bookings viewed')
  //       break;
  //     default:
  //       this.segment = "future";
  //       this.segmentDisplayName = "Upcoming";
  //       break;
  //   }
  //   localStorage.setItem('segmentDisplayName', this.segmentDisplayName);
  // }
  ngAfterViewInit() {
    var _this$swiperRef;
    const swiperEl = (_this$swiperRef = this.swiperRef) === null || _this$swiperRef === void 0 ? void 0 : _this$swiperRef.nativeElement;
    if (swiperEl) {
      swiperEl.addEventListener('slidechange', () => {
        this.onSlideChanged();
      });
    }
  }
  onSlideChanged() {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _this$swiperRef2;
      const swiper = (_this$swiperRef2 = _this.swiperRef) === null || _this$swiperRef2 === void 0 ? void 0 : _this$swiperRef2.nativeElement.swiper;
      const currentIndex = swiper.activeIndex;
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
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    this.sbTripsState = 'loading';
    this.apiFactory.myBookings("limit=50&offset=0").subscribe(result => {
      this.errMsg = false;
      this.errMsgTdy = false;
      this.loader.hideLoadingDefault();
      // success, or the server's "no bookings" reply (code 200) → ready; anything else → error
      this.sbTripsState = result && (result.success || result.code == 200) ? 'ready' : 'error';
      try {
        if (result.success) {
          this.bookingsMessage = result.body.message;
          this.recently_completed_trips = result.body.recently_completed_trips.map(trip => ({
            ...trip,
            travelDay: trip.travel_date ? (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.format)((0,date_fns__WEBPACK_IMPORTED_MODULE_7__.parseISO)(trip.travel_date), 'dd MMM') : ''
          }));
          // console.log(result.body.transactions)
          for (let i = 0; i < result.body.transactions.length; i++) {
            var _result$body;
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
            booking.dropping_time = result === null || result === void 0 || (_result$body = result.body) === null || _result$body === void 0 || (_result$body = _result$body.transactions[i]) === null || _result$body === void 0 ? void 0 : _result$body.dropping_time;
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
      // seabirdThemeNew: the list above is built for Upcoming; re-apply Completed when it is the open tab
      // (after the try/catch, so it also runs when a malformed booking stops the loop early)
      if (this.metaData.msiteFolder == 'seabirdThemeNew' && this.segment === 'previous') {
        this.sbSelectSegment('previous');
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
      this.sbTripsState = 'error';
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
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    } else if (this.metaData.msiteFolder == 'shyamolitheme') {
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
          new_booking: 'false'
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
  sbSelectSegment(tabName) {
    const index = tabName === 'previous' ? 1 : tabName === 'cancel' ? 2 : 0;
    const names = {
      future: 'Upcoming',
      previous: 'Completed',
      cancel: 'Cancelled'
    };
    this.segment = tabName;
    this.getBookingList(index);
    if (index === 1) {
      this.bookingsList = this.bookingsList.filter(b => !this.isCancelledOrPartiallyCancelled(b.transactionStatus || ''));
    }
    if (index === 0) {
      this.commonService.gTrack('futureBookings', 'Future bookings viewed');
    } else if (index === 1) {
      this.commonService.gTrack('previousBookings', 'Previous bookings viewed');
      this.errMsg = true;
    } else {
      this.commonService.gTrack('cancelledBookings', 'Cancelled bookings viewed');
      this.errMsg = true;
    }
    this.segmentDisplayName = names[tabName];
    localStorage.setItem('segmentDisplayName', names[tabName]);
    localStorage.setItem('tabName', tabName);
  }
  sbTripCount(tabName) {
    return (this.bookings || []).filter(it => {
      const cancelled = this.isCancelledOrPartiallyCancelled(it.transactionStatus || '');
      if (tabName === 'cancel') {
        return cancelled;
      }
      if (cancelled) {
        return false;
      }
      if (tabName === 'future') {
        return !this.isPastDate(it.travelDate);
      }
      const t = new Date(it.travelDateRaw),
        now = new Date();
      const today = t.getDate() == now.getDate() && t.getMonth() == now.getMonth() && t.getFullYear() == now.getFullYear();
      return this.isPastDate(it.travelDate) && !today;
    }).length;
  }
  sbDepartsLabel(booking) {
    const travel = moment__WEBPACK_IMPORTED_MODULE_2___default()(booking && booking.travelDateRaw, 'YYYY-MM-DD');
    if (!travel.isValid()) {
      return '';
    }
    const days = travel.startOf('day').diff(moment__WEBPACK_IMPORTED_MODULE_2___default()().startOf('day'), 'days');
    if (days <= 0) {
      return 'Departs today';
    }
    return days === 1 ? 'Departs tomorrow' : 'Departs in ' + days + ' days';
  }
}
_MyBookingsPage = MyBookingsPage;
_MyBookingsPage.ɵfac = function MyBookingsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MyBookingsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Config), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_12__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_13__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_14__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_15__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_16__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_17__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_18__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_19__.FirebaseAnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_20__.InAppBrowser), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_21__.DatePipe));
};
_MyBookingsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: _MyBookingsPage,
  selectors: [["app-my-bookings"]],
  viewQuery: function MyBookingsPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.swiperRef = _t.first);
    }
  },
  standalone: false,
  decls: 6,
  vars: 6,
  consts: [["swiperRef", ""], ["mapCanvas", ""], ["noUpcoming", ""], ["noCompleted", ""], ["noCancelled", ""], [4, "ngIf"], ["style", "min-height: 170px;", 4, "ngIf"], ["style", "--background: white", 4, "ngIf"], ["style", "position: absolute;z-index: 9999;top: 120px; --background: transparent;", 4, "ngIf"], [3, "ngClass"], ["alt", "", 1, "icn-main", 3, "src"], [2, "min-height", "170px"], ["mode", "md", "color", "red", "scrollable", "", 3, "ngModelChange", "ngModel", "ngClass"], ["value", "future", 2, "color", "var(--textFieldPlaceholderColor)", 3, "click"], ["value", "previous", 2, "color", "var(--textFieldPlaceholderColor)", 3, "click"], [2, "--background", "white"], [1, "note-1"], [1, "hd-1"], [1, "txt-1"], ["mode", "md", "expand", "block", 1, "search-btn", 3, "click"], [1, "search-txt"], [1, "sign-up", 3, "click"], [2, "position", "absolute", "z-index", "9999", "top", "120px", "--background", "transparent"], [2, "padding-bottom", "120px", "height", "100%", 3, "ngSwitch"], ["class", "prevFuture", 4, "ngSwitchCase"], [1, "prevFuture"], ["style", "    margin: 12px;    --background: none;", 4, "ngFor", "ngForOf"], ["text-center", "", "class", "vertical-align-content", 4, "ngIf"], [2, "margin", "12px", "--background", "none"], [2, "margin", "0", "border", "1px solid #dfdfdf", "border-radius", "10px", 3, "click"], [2, "padding", "14px", "padding-bottom", "8px"], ["size", "2", 1, "date-col", "ion-no-padding"], [1, "ion-justify-content-center", 2, "color", "#FCAF17", "text-align", "center", "letter-spacing", "0.12px", "text-transform", "uppercase"], [1, "travel-day", "ion-justify-content-center", 3, "ngClass"], [1, "ion-justify-content-center"], [1, "date-month", 2, "font-size", "10px", "font-style", "normal", "color", "#5F5F5F"], ["size", "10", 1, "trip-data"], [1, "themeone-pnrno"], [1, "themeone-bookedon"], [1, "devider_set"], ["size", "12", 2, "padding", "0px"], ["style", "display:contents ;", "src", "./assets/icon/devider.svg", 4, "ngIf"], ["style", "display:contents ;", "src", "./assets/icon/network_devider.svg", 4, "ngIf"], [1, "trip-info"], ["size", "6.5", 1, "ion-text-start", 2, "padding", "14px", "padding-top", "4px"], ["src", "./assets/icon/cbustime.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "17px", "width", "20px", "margin-right", "4px"], ["style", "color: #333;\n                                font-size: 12px;\n                                font-weight: 600;\n                                line-height: 22px;\n                                letter-spacing: 0.12px;", 4, "ngIf"], ["style", "color: #3BAD69;\n                                font-size: 12px;\n                                font-weight: 600;\n                                line-height: 22px;\n                                letter-spacing: 0.12px;", 4, "ngIf"], ["size", "5.5", 1, "ion-text-end", 2, "padding", "14px", "padding-top", "4px", 3, "ngClass"], ["src", "./assets/icon/devider.svg", 2, "display", "contents"], ["src", "./assets/icon/network_devider.svg", 2, "display", "contents"], [2, "color", "#333", "font-size", "12px", "font-weight", "600", "line-height", "22px", "letter-spacing", "0.12px"], [2, "color", "#3BAD69", "font-size", "12px", "font-weight", "600", "line-height", "22px", "letter-spacing", "0.12px"], ["text-center", "", 1, "vertical-align-content"], [2, "text-align", "center"], ["size", "6", 1, "ion-text-start", 2, "padding", "14px", "padding-top", "4px"], ["src", "./assets/icon/cbustime.svg", "alt", "", "item-start", "", 1, "themeone_icon-img", 2, "height", "17px", "vertical-align", "sub", "width", "24px", "margin-right", "4px"], ["style", "color: #EE2E3B;\n                            font-size: 12px;\n                            font-weight: 600;\n                            line-height: 22px;\n                            letter-spacing: 0.12px;", 4, "ngIf"], ["style", "color: #3BAD69;\n                            font-size: 12px;\n                            font-weight: 600;\n                            line-height: 22px;\n                            letter-spacing: 0.12px;", 4, "ngIf"], ["size", "6", 1, "ion-text-end", 2, "padding", "14px", "padding-top", "4px", 3, "ngClass"], [2, "color", "#EE2E3B", "font-size", "12px", "font-weight", "600", "line-height", "22px", "letter-spacing", "0.12px"], [1, "ourbustheme", 3, "ngStyle"], ["mode", "md", 2, "padding", "8px"], ["size", "2", 2, "display", "flex"], [3, "click"], ["size", "7", 2, "display", "flex", "align-items", "center", "justify-content", "center"], [1, "editProfile"], ["class", "ourbustheme", 4, "ngIf"], ["style", "--background:#fff;", "class", "ourbustheme", 4, "ngIf"], [1, "ourbustheme"], [1, "ourbustheme", 2, "--background", "#fff"], [2, "margin", "16px"], ["mode", "md", "scrollable", "", 2, "padding", "0px", "background", "#EFEFEF", "border-radius", "8px", 3, "ngModelChange", "ngModel"], ["value", "future", 3, "click"], ["value", "previous", 3, "click"], ["value", "cancel", 3, "click"], [3, "swiperslidechange", "init"], ["id", "future"], ["style", "min-width: 100% !important", 4, "ngIf"], ["id", "previous"], ["style", "width:100%", 4, "ngIf"], ["id", "cancel"], [2, "min-width", "100% !important"], [2, "width", "100%"], ["class", "ourbusRowSet", 3, "click", 4, "ngFor", "ngForOf"], [1, "ourbusRowSet", 3, "click"], ["size", "2"], [1, "ourbus_ticket"], ["src", "././assets/icon/ourbus_ticketsave.svg", 1, "ourbusIcon"], ["size", "8", 1, "ourbus_plain_text"], [2, "font-weight", "normal"], [1, "aroowset"], ["name", "arrow-forward-outline", 1, "ourbusIcon"], ["class", "hd-1", 4, "ngIf"], [1, "seabirdtheme"], ["mode", "md", 1, "high-1"], [1, "headText"], ["class", "seabirdtheme", "style", "    --background: #F1F7FA;", 4, "ngIf"], [1, "seabirdtheme", 2, "--background", "#F1F7FA"], [1, "booking-list-present"], ["mode", "md", "color", "red", "scrollable", "", 3, "ngModelChange", "ngModel"], ["value", "future", 1, "upcomingBtn", 3, "click"], ["value", "previous", 1, "completeBtn", 3, "click"], ["value", "cancel", 1, "cancelBtn", 3, "click"], ["id", "future", 2, "background", "white"], ["id", "previous", 2, "background", "white"], ["id", "cancel", 2, "background", "white"], ["style", "    background: #E1F6F5;\n            border-radius: 10px;margin-bottom: 8px;margin-top: 8px;", 3, "click", 4, "ngFor", "ngForOf"], [2, "background", "#E1F6F5", "border-radius", "10px", "margin-bottom", "8px", "margin-top", "8px", 3, "click"], ["size", "2", 2, "display", "flex", "align-items", "center", "justify-content", "center"], [1, "busCircle"], ["src", "././assets/icon/bus.svg", 2, "width", "20px", "height", "20px"], ["size", "10", 1, "extraSpace"], [2, "font-weight", "bold"], [2, "color", "#00904B"], [2, "margin-left", "30%", "color", "black"], ["style", "    background: #F2F8FF;\n            border-radius: 10px;margin-bottom: 8px;margin-top: 8px;", 3, "click", 4, "ngFor", "ngForOf"], [2, "background", "#F2F8FF", "border-radius", "10px", "margin-bottom", "8px", "margin-top", "8px", 3, "click"], [2, "color", "#2B28CE"], ["style", "    background: #FFF0F2;\n            border-radius: 10px;margin-bottom: 8px;margin-top: 8px;", 3, "click", 4, "ngFor", "ngForOf"], [2, "background", "#FFF0F2", "border-radius", "10px", "margin-bottom", "8px", "margin-top", "8px", 3, "click"], [2, "color", "#D5000E"], [2, "margin-left", "28%", "color", "black"], ["mode", "md", "expand", "block", 1, "track-btn", 3, "click"], [1, "hd-1", 2, "text-align", "left"], [1, "txt-1", 2, "text-align", "left"], [1, "sb-page-header"], [1, "sb-toolbar"], [1, "sb-trips-appbar"], [1, "sb-trips-title"], ["class", "sb-trip-tabs", "role", "tablist", 4, "ngIf"], ["class", "sb-trips", 4, "ngIf"], ["role", "tablist", 1, "sb-trip-tabs"], ["type", "button", "role", "tab", 1, "sb-tab-btn", 3, "click"], [1, "sb-trips"], ["class", "sb-results-empty sb-results-error", "role", "alert", 4, "ngIf"], ["class", "sb-trip-card sb-trip-card--compact sb-trip-card--skeleton", "aria-hidden", "true", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", 1, "sb-trip-card", "sb-trip-card--compact", "sb-trip-card--skeleton"], [1, "sb-skel-row"], [1, "sb-skel", "sb-skel--title", 3, "animated"], [1, "sb-skel", "sb-skel--pill", 3, "animated"], [1, "sb-skel", "sb-skel--line-short", 3, "animated"], [1, "sb-skel-row", "sb-skel-row--foot"], [1, "sb-skel", "sb-skel--foot", 3, "animated"], ["role", "alert", 1, "sb-results-empty", "sb-results-error"], ["name", "alert-circle-outline", "aria-hidden", "true"], [4, "ngFor", "ngForOf"], ["class", "sb-alert-parent", 3, "height", 4, "ngIf"], [1, "sb-trip-card"], [1, "sb-trip-card__strip"], [1, "sb-trip-card__departs"], [1, "sb-status-pill"], ["role", "button", "tabindex", "0", 1, "sb-trip-card__body", 3, "click"], [1, "sb-trip-card__head"], [1, "sb-trip-card__route"], [1, "sb-trip-card__when"], ["src", "./assets/seabird-new/back-arrow-navy.svg", "alt", "", "aria-hidden", "true", "width", "20", "height", "20", 1, "sb-trip-card__chevron"], [1, "sb-trip-meta"], [1, "sb-trip-card__actions"], ["type", "button", "class", "sb-btn-solid", "style", "display: flex; align-items: center; justify-content: center;", 3, "click", 4, "ngIf"], ["type", "button", 1, "sb-btn-solid", 2, "display", "flex", "align-items", "center", "justify-content", "center", 3, "click"], ["src", "./assets/seabird-new/bk-track-bus.svg", "alt", "", "aria-hidden", "true"], [1, "sb-alert-parent"], [1, "sb-trips-empty"], [1, "sb-overline", "sb-trips-section"], ["class", "sb-recent-trip", "role", "button", "tabindex", "0", 3, "click", 4, "ngFor", "ngForOf"], ["role", "button", "tabindex", "0", 1, "sb-recent-trip", 3, "click"], [1, "sb-recent-trip__tile"], ["src", "./assets/seabird-new/bus-from.svg", "alt", "", "width", "22", "height", "22"], [1, "sb-recent-trip__text"], [1, "sb-recent-trip__title"], [1, "sb-recent-trip__sub"], ["class", "sb-trip-card sb-trip-card--compact", "role", "button", "tabindex", "0", 3, "click", 4, "ngFor", "ngForOf"], ["class", "sb-alert-parent", 4, "ngIf"], ["role", "button", "tabindex", "0", 1, "sb-trip-card", "sb-trip-card--compact", 3, "click"], [1, "sb-trip-card__end"], [1, "sb-trips-login"], [1, "sb-trips-login__title"], [1, "sb-trips-login__text"], ["type", "button", 1, "sb-btn-primary", 3, "click"], ["type", "button", 1, "sb-trips-login__link", 3, "click"], ["translucent", "true"], ["mode", "md", "class", "high-1", 4, "ngIf"], ["mode", "md", 4, "ngIf"], ["class", "theme1", 4, "ngIf"], [1, "title-main"], ["mode", "md"], [1, "note-1", 2, "text-align", "left"], ["mode", "md", "expand", "block", 1, "login-button", 2, "height", "20px", "margin", "10px", 3, "click"], [1, "login-txt", 2, "font-size", "16px", "color", "#000", "font-weight", "bold"], [1, "sign-up", 2, "font-size", "16px", 3, "click"], [1, "theme1"], [1, "ion-toolbar1"], ["mode", "md", "color", "red", "scrollable", "", 2, "width", "100%", 3, "ngModelChange", "ngModel"], ["value", "future", 2, "color", "var(--textFieldPlaceholderColor)", "text-transform", "uppercase", 3, "click"], ["value", "previous", 2, "color", "var(--textFieldPlaceholderColor)", "text-transform", "uppercase", 3, "click"], ["value", "cancel", 2, "color", "var(--textFieldPlaceholderColor)", "text-transform", "uppercase", 3, "click"], [1, "map-canvas", 3, "hidden"], ["id", "future", 1, "seat-slide"], ["id", "previous", 1, "seat-slide"], ["size", "12", "size-md", "6", 4, "ngFor", "ngForOf"], ["id", "cancel", 1, "seat-slide"], ["size", "12", "size-md", "6"], [1, "card", "seat-card-bg", 3, "click"], [1, "org-dest"], ["name", "chevron-forward-outline", 1, "booking-details"], [1, "date"], ["translucent", "true", 2, "box-shadow", "none"], ["mode", "md", 1, "shyamoli-header"], ["slot", "start"], ["defaultHref", "/"], [1, "shyamoli-title"], ["class", "shyamoli-theme2", 4, "ngIf"], [1, "shyamoli-sign-up"], [1, "shyamoli-theme2"], ["mode", "md", "scrollable", "", 1, "no-border-segment", "shyamoli-segment", 2, "border-bottom", "1px solid #DFDFDF", "margin-bottom", "6px", 3, "ngModelChange", "ngModel"], ["id", "future", 1, "shyamoli-seat-slide"], [4, "ngIf", "ngIfElse"], ["id", "previous", 1, "shyamoli-seat-slide"], ["id", "cancel", 1, "shyamoli-seat-slide"], ["class", "booking-box", 3, "click", 4, "ngFor", "ngForOf"], [1, "booking-box", 3, "click"], [1, "status-tag", "confirmed"], [1, "booking-top"], [1, "booking-column"], [1, "route", 2, "margin", "0"], ["class", "bus-type", 4, "ngIf"], [1, "pnr"], [1, "date-section"], [1, "month"], [1, "day"], [1, "year"], [1, "divider-line"], [1, "bottom-row"], [1, "booked-on"], [1, "booked-on", "booked-time"], [1, "view-details"], ["src", "./assets/icon/shyamoli-viewdetailarrow.svg", "alt", "arrow"], [1, "bus-type"], [1, "status-tag", "completed"], [1, "status-tag", "cancelled"], ["src", "./assets/icon/shyamoli-viewdetailarrow.svg", "alt", "arrow", 1, "big-arrow"]],
  template: function MyBookingsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, MyBookingsPage_ng_container_0_Template, 5, 4, "ng-container", 5)(1, MyBookingsPage_ng_container_1_Template, 12, 5, "ng-container", 5)(2, MyBookingsPage_ng_container_2_Template, 8, 3, "ng-container", 5)(3, MyBookingsPage_ng_container_3_Template, 9, 3, "ng-container", 5)(4, MyBookingsPage_ng_container_4_Template, 6, 4, "ng-container", 5)(5, MyBookingsPage_ng_container_5_Template, 9, 2, "ng-container", 5);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme" || ctx.metaData.msiteFolder == "networktheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder === "seabirdThemeNew");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "shyamolitheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgSwitchCase, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonBackButton, _angular_common__WEBPACK_IMPORTED_MODULE_21__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_21__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_21__.DatePipe],
  styles: [".title-main {\n  font-family: NotoSans;\n  font-size: 20px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  letter-spacing: normal;\n  display: inline-block;\n  color: var(--viewBgColor);\n}\n\n.high-1 {\n  background-color: var(--primary);\n}\n\nion-slides {\n  min-height: 100%;\n  height: auto;\n}\n\n.seat-slide {\n  margin: 10px auto;\n  border-radius: 4px;\n  background-color: #f7f9fb;\n}\n.seat-slide .seat-card-bg {\n  padding: 0;\n  border-radius: 4px;\n  border: solid 1px #dddddd;\n  background-color: #ffffff;\n  width: 95%;\n  height: auto;\n  margin: 0 0 10px;\n  display: inline-block;\n}\n\n.icn-main {\n  vertical-align: middle;\n  position: absolute;\n  right: 10px;\n  padding: 0;\n  width: 140px;\n  height: 40px;\n  top: 10px;\n}\n\n.search-txt {\n  font-size: 16px;\n  font-weight: bold;\n  width: 61px;\n  color: #000000 !important;\n}\n\n.btnColorChange ion-button {\n  margin: 0 12px 12px;\n  border-radius: 2px;\n  --background: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: \"NotoSans\";\n  text-transform: initial;\n}\n\n.note-1 {\n  padding: 16px;\n  width: 100%;\n  text-align: center;\n}\n\nion-segment-button {\n  text-transform: none !important;\n}\n\n.hd-1 {\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.43;\n  font-weight: bold;\n  letter-spacing: normal;\n  color: #3e3e52;\n}\n\n.txt-1 {\n  width: 328px;\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.43;\n  letter-spacing: normal;\n  color: #3e3e52;\n}\n\n.sign-up {\n  width: 100%;\n  margin: 30px 0 0;\n  border-radius: 4px;\n  font-family: NotoSans;\n  font-size: 13px;\n  font-weight: bolder;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.54;\n  letter-spacing: normal;\n  text-align: center;\n  color: var(--iconsAndButtonsColor);\n}\n\nion-col {\n  margin-bottom: 0;\n}\n\n.card {\n  height: 72px;\n  border-radius: 4px;\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12);\n  background-color: #ffffff;\n  margin: -8px 4px 0;\n}\n\n.org-dest {\n  height: 20px;\n  font-family: NotoSans;\n  font-size: 16px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.25;\n  text-transform: capitalize;\n  letter-spacing: normal;\n  color: #4a4a4a;\n  text-align: left;\n  padding: 5px 5px 12px 12px;\n}\n\n.date {\n  height: 16px;\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n  color: #747f8d;\n  padding: 0 5px 16px 12px;\n  text-align: left;\n}\n\nion-content {\n  --ion-background-color: var(--viewBgColor);\n}\n\n.ios ion-list {\n  margin-bottom: 10px;\n}\n\n.md ion-list {\n  border-top: 1px solid var(--ion-color-step-150, #d7d8da);\n  padding: 0;\n}\n\n.map-button {\n  text-align: right;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n  color: #747f8d;\n  margin: -32px 8px 0;\n}\n\n.booking-details {\n  float: right;\n  margin: -25px 16px 0 5px;\n}\n\n.ion-toolbar1 {\n  background-color: #ffffff !important;\n  --background: #ffffff !important;\n  color: #666666 !important;\n  -webkit-text-fill-color: #666666 !important;\n}\n.ion-toolbar1 .toolbar-background {\n  background-color: var(--primary);\n  --background: var(--primary);\n}\n\n.theme1 .segment-button-checked {\n  --background: #ffffff !important;\n  color: var(--iconsAndButtonsColor) !important;\n  -webkit-text-fill-color: var(--iconsAndButtonsColor) !important;\n}\n\n.ion-color-red {\n  --ion-color-base: var(--iconsAndButtonsColor) !important;\n}\n\n.themeone-segment-cbus {\n  --ion-color-base: #FFBD16 !important;\n}\n.themeone-segment-cbus .segment-button-checked {\n  color: var(--iconsAndButtonsColor) !important;\n  -webkit-text-fill-color: #FFBD16 !important;\n}\n\n.themeone-segment-cbus-2 {\n  --ion-color-base: var(--primaryText) !important;\n}\n.themeone-segment-cbus-2 .segment-button-checked {\n  color: var(--primaryText) !important;\n  -webkit-text-fill-color: var(--primaryText) !important;\n}\n\n/** New theme-1 design start */\n.chip-absolute {\n  position: absolute;\n  top: -18px;\n  right: 12px;\n  z-index: 4 !important;\n}\n\n.date-col {\n  border: 1px solid #DFDFDF;\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  padding: 5px;\n}\n.date-col .date-month {\n  background: rgba(95, 95, 95, 0.1);\n  font-size: 12px;\n  border-radius: 6px;\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.trip-data {\n  padding: 0px 0px 0px 12px;\n}\n\n.devider_set {\n  width: 101%;\n  position: relative;\n  background-color: #fff;\n  left: -1.5px;\n}\n\n.login-button {\n  --background: var(--iconsAndButtonsColor) !important;\n  --border-radius: 0px !important;\n  height: 50px;\n  margin-top: 10px;\n  box-shadow: none !important;\n}\n\n.card-detail-text {\n  font-size: 12px;\n  color: #191966;\n  font-style: normal;\n  font-weight: 600;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.card-detail-text-2 {\n  font-size: 12px;\n  color: var(--primaryText);\n  font-style: normal;\n  font-weight: 600;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.travel-day {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.trip-origin {\n  color: #191966;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n}\n\n.trip-origin-2 {\n  color: var(--primaryText);\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n}\n\n.themeone-pnrno {\n  color: #5F5F5F;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 22px;\n  letter-spacing: 0.14px;\n}\n\n.themeone-bookedon {\n  color: #5F5F5F;\n  font-size: 11px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n  letter-spacing: 0.11px;\n}\n\nion-header ion-toolbar {\n  color: #ffffff;\n}\n\n/** New theme-1 design end */\n.vertical-align-content {\n  display: flex !important;\n  align-content: center !important;\n  align-items: center !important;\n  height: 100%;\n}\n\n.ion-text-start {\n  display: flex;\n  align-items: center;\n  padding-left: 0px;\n}\n\n.toolbar[primary] .toolbar-title, .toolbar[primary] .bar-button-default {\n  color: white;\n}\n\n.prevFuture {\n  background: #fff;\n  border-top: 1px solid #000;\n  height: 100%;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  padding: 10px;\n  overflow: scroll;\n}\n\n.ourbustheme .editProfile {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #2D2D2D;\n  font-size: 18px;\n  font-weight: 700;\n}\n.ourbustheme .segment-button-checked {\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  color: var(--primaryText) !important;\n  padding: 0px 8px;\n  background: var(--iconsAndButtonsColor) !important;\n  margin: 6px;\n  border-radius: 8px;\n}\n.ourbustheme .ourbusRowSet {\n  background-color: #EFEFEF;\n  border-radius: 8px;\n  padding: 8px;\n  border: 1px solid var(--iconsAndButtonsColor);\n  display: flex;\n  align-items: center;\n  margin: 16px 0px;\n}\n.ourbustheme .ourbus_ticket {\n  background-color: #DBEFDC;\n  padding: 8px;\n  border-radius: 4px;\n}\n.ourbustheme .ourbusIcon {\n  width: 24px;\n  height: 24px;\n}\n.ourbustheme .ourbus_plain_text {\n  font-size: 14px;\n  font-weight: 700;\n  color: #2D2D2D;\n  text-align: start;\n}\n.ourbustheme .aroowset {\n  display: flex;\n  justify-content: end;\n  color: var(--iconsAndButtonsColor);\n}\n\n.seabirdtheme .seabird_header {\n  padding: 10px;\n  font-weight: bold;\n  font-size: 16px;\n}\n.seabirdtheme .seabird_header-content {\n  display: flex;\n  flex-direction: column;\n  background: var(--primary);\n}\n.seabirdtheme .seabird_title-container {\n  display: flex;\n  align-items: center;\n  height: 60px;\n}\n.seabirdtheme .headText {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 700;\n}\n.seabirdtheme .upcoming {\n  background: #BEF1ED;\n  padding: 8px;\n  border-radius: 5px;\n}\n.seabirdtheme .completed {\n  background: #D1E6FF;\n  padding: 8px;\n  border-radius: 5px;\n}\n.seabirdtheme .cancelled {\n  background: #F8D2D6;\n  padding: 8px;\n  border-radius: 5px;\n}\n.seabirdtheme .busCircle {\n  border-radius: 50%;\n  border: 1px solid #000000;\n  width: 38px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: white;\n}\n.seabirdtheme .extraSpace {\n  text-align: start;\n}\n.seabirdtheme .extraSpace p {\n  margin: 0px;\n  font-size: 12px;\n  padding: 2px 0px;\n}\n.seabirdtheme .upcomingBtn {\n  background: #BEF1ED;\n  border-radius: 8px;\n  --indicator-height: 0px;\n  color: var(--textFieldPlaceholderColor);\n  margin: 0px 4px 0px 0px;\n}\n.seabirdtheme .completeBtn {\n  background: #D1E6FF;\n  border-radius: 8px;\n  --indicator-height: 0px;\n  color: var(--textFieldPlaceholderColor);\n  margin: 0px 4px 0px 0px;\n}\n.seabirdtheme .cancelBtn {\n  background: #F8D2D6;\n  border-radius: 8px;\n  --indicator-height: 0px;\n  color: var(--textFieldPlaceholderColor);\n}\n\n.cbusHeader {\n  min-height: 170px !important;\n  background: #191966;\n  color: #ffffff;\n  z-index: 1000;\n}\n\nion-segment {\n  width: 100%;\n}\n\n.cbus_header {\n  --background: #191966;\n  color: #ffffff;\n}\n\n.theme1_header {\n  --background: var(--homeBgColor) !important;\n  color: var(--primaryText);\n}\n\n.cbus_bg_curved {\n  padding: 12px 0px;\n  height: 120px;\n  background-color: #191966;\n  color: #ffffff;\n}\n\n.theme1_bg_curved {\n  padding: 12px 0px;\n  height: 130px;\n  background-color: var(--homeBgColor) !important;\n  color: var(--primaryText);\n}\n\n.cbus_travelDay {\n  color: #191966;\n  text-align: center;\n  font-weight: 700;\n  font-size: 18px;\n}\n\n.themeone_travelDay {\n  color: var(--primaryText);\n  text-align: center;\n  font-weight: 700;\n  font-size: 18px;\n}\n\n.search-btn {\n  --background: var(--iconsAndButtonsColor);\n  --color: var(--primaryText);\n  margin: 0 12px 12px;\n  border-radius: 2px;\n  height: 25px;\n}\n\n.title {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n}\n\n.center-title {\n  width: 100%;\n  text-align: center;\n  justify-content: center;\n  display: flex;\n}\n\n.track-btn {\n  --border-radius: 20px;\n  --background: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-weight: bold;\n  font-family: \"NotoSans\";\n  height: 45px;\n  margin-bottom: 10px;\n}\n\n.no-booking {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 70vh;\n  width: 100%;\n}\n\n.booking-list-present {\n  margin: 16px;\n  border: 1px solid #626262;\n  border-radius: 10px;\n  padding: 16px 8px 8px;\n  background: white;\n}\n\n.my-bookings-title {\n  margin: 8px 0px;\n  padding-left: 16px;\n}\n\n/* ---------- SHYAMOLI THEME STYLING ---------- */\n.booking-box {\n  position: relative;\n  border: 1px solid #ddd;\n  border-radius: 12px;\n  margin: 12px 16px;\n  padding: 20px 20px 16px 20px;\n  background-color: #fff;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);\n}\n\n.booking-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.route {\n  font-weight: 600;\n  color: #222;\n  font-size: 15px;\n}\n\n.date-section {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  line-height: 1.1;\n}\n\n.month {\n  font-size: 14px;\n  color: #555;\n  margin: 0;\n}\n\n.day {\n  font-size: 32px;\n  font-weight: 700;\n  color: #00A859;\n  margin: 0;\n}\n\n.year {\n  font-size: 14px;\n  color: #555;\n  margin: 0;\n}\n\n.bus-type, .pnr {\n  font-size: 13px;\n  color: #444;\n  margin-top: 7px;\n  margin-bottom: 5px;\n}\n\n.divider-line {\n  border-bottom: 1px dashed #ccc;\n  margin: 10px 0;\n}\n\n.bottom-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.booked-on {\n  font-size: 12px;\n  color: #777;\n  margin: 0px;\n}\n\n.view-details {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--iconsAndButtonsColor);\n}\n\n.status-tag {\n  position: absolute;\n  top: 10px;\n  right: 9%;\n  top: -10px;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 4px 10px;\n  border-radius: 12px;\n  color: #fff;\n  z-index: 2;\n  letter-spacing: 0.3px;\n}\n\n.status-tag.confirmed {\n  background-color: #4CAF50;\n}\n\n.status-tag.completed {\n  background-color: #9E9E9E;\n}\n\n.status-tag.cancelled {\n  background-color: #F44336;\n}\n\n/* Shyamoli theme: underline only for active segment in .theme2 */\n.theme2 ion-segment.no-border-segment ion-segment-button {\n  position: relative;\n  background: transparent;\n  color: #222;\n  font-weight: 600;\n  border-radius: 0;\n  transition: color 0.2s;\n}\n\n.theme2 ion-segment.no-border-segment ion-segment-button.segment-button-checked::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 20%;\n  right: 20%;\n  bottom: 0;\n  height: 3px;\n  background: #191966; /* Shyamoli theme primary color */\n  border-radius: 2px 2px 0 0;\n  transition: background 0.2s;\n}\n\n/* Remove bottom border and shadow from Shyamoli header/toolbar */\n.shyamoli-header, .shyamoli-header ion-toolbar {\n  --border-width: 0 !important;\n  --box-shadow: none !important;\n  box-shadow: none !important;\n  border-bottom: none !important;\n}\n\n.shyamoli-header {\n  --background: var(--primary) !important;\n}\n.shyamoli-header ion-buttons {\n  position: absolute !important;\n}\n.shyamoli-header .shyamoli-title {\n  text-align: center;\n}\n\n.bus-type-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 4px;\n}\n\n.view-details .shyamoli-viewdetailarrow {\n  width: 20px;\n  height: 20px;\n}\n\n.shyamoli-theme2 ion-segment.no-border-segment ion-segment-button {\n  position: relative;\n  background: transparent;\n  color: #000000;\n  font-weight: 400;\n  border-radius: 0;\n  transition: color 0.2s;\n  font-size: 12px;\n}\n\n.shyamoli-theme2 ion-segment.no-border-segment ion-segment-button.segment-button-checked::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 20%;\n  right: 20%;\n  bottom: 0;\n  height: 2px;\n  background: var(--iconsAndButtonsColor) !important; /* Shyamoli theme primary color */\n  border-radius: 2px 2px 0 0;\n  transition: background 0.2s;\n}\n\n.booked-time {\n  margin: 0px;\n  margin-top: 2px;\n}\n\n.search-btn {\n  --background: var(--iconsAndButtonsColor) !important;\n  --border-radius: 12px !important;\n  height: 50px;\n  margin-top: 10px;\n  box-shadow: none !important;\n}\n\n/* Text inside Login button */\n.search-btn .search-txt {\n  color: #ffffff !important;\n  font-weight: 600 !important;\n  font-size: 16px !important;\n  margin: 0;\n}\n\n/* Sign Up button (grey background) */\n.search-btn:nth-of-type(2) {\n  --background: #EAEAEA !important;\n}\n\n/* Text inside Sign Up */\n.search-btn:nth-of-type(2) .shyamoli-sign-up {\n  color: #000000 !important;\n  font-weight: 600 !important;\n  font-size: 16px !important;\n  margin: 0;\n}"],
  encapsulation: 2
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

/***/ },

/***/ 49431
/*!*******************************************!*\
  !*** ./node_modules/date-fns/parseISO.js ***!
  \*******************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   parseISO: () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ 72162);
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.js */ 91298);
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDate.js */ 91490);




/**
 * The {@link parseISO} function options.
 */

/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param argument - The value to convert
 * @param options - An object with options
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */
function parseISO(argument, options) {
  var _options$additionalDi;
  const invalidDate = () => (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(options === null || options === void 0 ? void 0 : options.in, NaN);
  const additionalDigits = (_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2;
  const dateStrings = splitDateString(argument);
  let date;
  if (dateStrings.date) {
    const parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(+date)) return invalidDate();
  const timestamp = +date;
  let time = 0;
  let offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) return invalidDate();
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) return invalidDate();
  } else {
    const tmpDate = new Date(timestamp + time);
    const result = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_2__.toDate)(0, options === null || options === void 0 ? void 0 : options.in);
    result.setFullYear(tmpDate.getUTCFullYear(), tmpDate.getUTCMonth(), tmpDate.getUTCDate());
    result.setHours(tmpDate.getUTCHours(), tmpDate.getUTCMinutes(), tmpDate.getUTCSeconds(), tmpDate.getUTCMilliseconds());
    return result;
  }
  return (0,_toDate_js__WEBPACK_IMPORTED_MODULE_2__.toDate)(timestamp + time + offset, options === null || options === void 0 ? void 0 : options.in);
}
const patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
const dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
const timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
const timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  const dateStrings = {};
  const array = dateString.split(patterns.dateTimeDelimiter);
  let timeString;

  // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }
  if (timeString) {
    const token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], "");
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  const regex = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + additionalDigits) + "})|(\\d{2}|[+-]\\d{" + (2 + additionalDigits) + "})$)");
  const captures = dateString.match(regex);
  // Invalid ISO-formatted year
  if (!captures) return {
    year: NaN,
    restDateString: ""
  };
  const year = captures[1] ? parseInt(captures[1]) : null;
  const century = captures[2] ? parseInt(captures[2]) : null;

  // either year or century is null, not both
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  const captures = dateString.match(dateRegex);
  // Invalid ISO-formatted string
  if (!captures) return new Date(NaN);
  const isWeekDate = !!captures[4];
  const dayOfYear = parseDateUnit(captures[1]);
  const month = parseDateUnit(captures[2]) - 1;
  const day = parseDateUnit(captures[3]);
  const week = parseDateUnit(captures[4]);
  const dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    const date = new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  const captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  const hours = parseTimeUnit(captures[1]);
  const minutes = parseTimeUnit(captures[2]);
  const seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * _constants_js__WEBPACK_IMPORTED_MODULE_0__.millisecondsInHour + minutes * _constants_js__WEBPACK_IMPORTED_MODULE_0__.millisecondsInMinute + seconds * 1000;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(",", ".")) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === "Z") return 0;
  const captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  const sign = captures[1] === "+" ? -1 : 1;
  const hours = parseInt(captures[2]);
  const minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * _constants_js__WEBPACK_IMPORTED_MODULE_0__.millisecondsInHour + minutes * _constants_js__WEBPACK_IMPORTED_MODULE_0__.millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  const date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  const fourthOfJanuaryDay = date.getUTCDay() || 7;
  const diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// Validation functions

// February is null to handle the leap year (using ||)
const daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseISO);

/***/ }

}]);