"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[5055],{

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

/***/ 40630
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePageRoutingModule: () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 49870);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 51624);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _HomePageRoutingModule;




const routes = [{
  path: '',
  component: _home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage
}];
class HomePageRoutingModule {}
_HomePageRoutingModule = HomePageRoutingModule;
_HomePageRoutingModule.ɵfac = function HomePageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomePageRoutingModule)();
};
_HomePageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _HomePageRoutingModule
});
_HomePageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomePageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 45055
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePageModule: () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ 51624);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-routing.module */ 40630);
/* harmony import */ var _pipes_filter_oculto_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/filter-oculto.pipe */ 43773);
/* harmony import */ var _rate_service_rate_service_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rate-service/rate-service.component */ 32734);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 51670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 17705);
var _HomePageModule;









class HomePageModule {}
_HomePageModule = HomePageModule;
_HomePageModule.ɵfac = function HomePageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomePageModule)();
};
_HomePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: _HomePageModule
});
_HomePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  providers: [_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__.InAppBrowser],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_4__.HomePageRoutingModule, _rate_service_rate_service_component__WEBPACK_IMPORTED_MODULE_6__.RateServiceComponent]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](HomePageModule, {
    declarations: [_home_page__WEBPACK_IMPORTED_MODULE_3__.HomePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_4__.HomePageRoutingModule, _pipes_filter_oculto_pipe__WEBPACK_IMPORTED_MODULE_5__.FilterOcultoPipe, _rate_service_rate_service_component__WEBPACK_IMPORTED_MODULE_6__.RateServiceComponent]
  });
})();

/***/ },

/***/ 51624
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePage: () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 40605);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/geolocation */ 37762);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 84692);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/app */ 48941);
/* harmony import */ var _calendar_modal_calendar_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../calendar-modal/calendar-modal.page */ 70990);
/* harmony import */ var _cities_modal_cities_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cities-modal/cities-modal.page */ 85960);
/* harmony import */ var _custom_ourbus_calender_custom_ourbus_calender_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../custom-ourbus-calender/custom-ourbus-calender.page */ 44076);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 83087);
/* harmony import */ var _services_global_data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/global-data.service */ 7516);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/theme-service */ 99692);
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../services/authentication */ 82491);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 51670);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ 58989);
/* harmony import */ var _services_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../services/firebase-analytics.service */ 47402);
/* harmony import */ var _services_upi_check_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../services/upi-check.service */ 71915);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _rate_service_rate_service_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../rate-service/rate-service.component */ 32734);
/* harmony import */ var _pipes_filter_oculto_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../pipes/filter-oculto.pipe */ 43773);

var _HomePage;





























const _c0 = a0 => ({
  "--background": a0
});
const _c1 = () => ({
  "padding-top": "0px"
});
const _c2 = () => ({});
const _c3 = () => ({
  "padding-top": "29px"
});
const _c4 = (a0, a1, a2) => ({
  "android_video_ratio": a0,
  "ios_video_ratio": a1,
  "desktop_video_ratio": a2
});
const _c5 = a0 => ({
  "rotated": a0
});
const _c6 = () => ({
  "color": "var(--iconsAndButtonsColor)"
});
const _c7 = () => ({
  "color": "var(--primaryText)"
});
const _c8 = a0 => ({
  "background-image": a0,
  "margin-left": "13px"
});
const _c9 = a0 => ({
  "background-image": a0
});
const _c10 = (a0, a1) => ({
  "rotated": a0,
  "isshadow": a1
});
const _c11 = () => ({
  "pointer-events": "none"
});
const _c12 = () => ({
  "opacity": "0.2"
});
const _c13 = a0 => ({
  "fill": a0
});
const _c14 = () => ({
  "margin-bottom": "66px"
});
const _c15 = () => ({
  "margin-bottom": "0px"
});
function HomePage_ng_container_0_div_2_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("touchstart", function HomePage_ng_container_0_div_2_div_1_span_1_Template_span_touchstart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.onMuteClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("name", ctx_r2.isMuted ? "volume-mute" : "volume-high");
  }
}
function HomePage_ng_container_0_div_2_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("touchend", function HomePage_ng_container_0_div_2_div_1_span_2_Template_span_touchend_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.onCloseClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_0_div_2_div_1_video_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "video", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "source", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Your browser does not support the video tag. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("muted", ctx_r2.isMuted);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r2.promotional_url);
  }
}
function HomePage_ng_container_0_div_2_div_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "img", 52);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r2.promotional_url, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function HomePage_ng_container_0_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePage_ng_container_0_div_2_div_1_span_1_Template, 2, 1, "span", 42)(2, HomePage_ng_container_0_div_2_div_1_span_2_Template, 2, 0, "span", 43)(3, HomePage_ng_container_0_div_2_div_1_video_3_Template, 3, 2, "video", 44)(4, HomePage_ng_container_0_div_2_div_1_img_4_Template, 1, 1, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](5, _c4, ctx_r2.appData.isWEBAPP && ctx_r2.util.platformName() == "Android", ctx_r2.appData.isWEBAPP && ctx_r2.util.platformName() == "IOS" || ctx_r2.appData.isIOS, ctx_r2.appData.isWEBAPP && ctx_r2.util.platformName() != "Android" && ctx_r2.util.platformName() != "IOS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.promotional_url_type == "video");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.showCloseButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.promotional_url_type == "video");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.promotional_url_type == "image");
  }
}
function HomePage_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePage_ng_container_0_div_2_div_1_Template, 5, 9, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](2, _c4, ctx_r2.appData.isWEBAPP && ctx_r2.util.platformName() == "Android", ctx_r2.appData.isWEBAPP && ctx_r2.util.platformName() == "IOS" || ctx_r2.appData.isIOS, ctx_r2.appData.isWEBAPP && ctx_r2.util.platformName() != "Android" && ctx_r2.util.platformName() != "IOS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.promotional_url != "");
  }
}
function HomePage_ng_container_0_ion_row_5_ion_col_3_ion_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_ion_row_5_ion_col_3_ion_button_1_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.wallet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, "", ctx_r2.walletbalance, "");
  }
}
function HomePage_ng_container_0_ion_row_5_ion_col_3_ion_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_ion_row_5_ion_col_3_ion_button_2_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.wallet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, "", ctx_r2.walletbalance, "");
  }
}
function HomePage_ng_container_0_ion_row_5_ion_col_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-col", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePage_ng_container_0_ion_row_5_ion_col_3_ion_button_1_Template, 4, 2, "ion-button", 58)(2, HomePage_ng_container_0_ion_row_5_ion_col_3_ion_button_2_Template, 4, 2, "ion-button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
  }
}
function HomePage_ng_container_0_ion_row_5_ion_col_4_ion_button_1_ion_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-icon", 72);
  }
}
function HomePage_ng_container_0_ion_row_5_ion_col_4_ion_button_1_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-icon", 73);
  }
}
function HomePage_ng_container_0_ion_row_5_ion_col_4_ion_button_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"]("Login");
  }
}
function HomePage_ng_container_0_ion_row_5_ion_col_4_ion_button_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"]("Login");
  }
}
function HomePage_ng_container_0_ion_row_5_ion_col_4_ion_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_ion_row_5_ion_col_4_ion_button_1_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.cbus_logIn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePage_ng_container_0_ion_row_5_ion_col_4_ion_button_1_ion_icon_1_Template, 1, 0, "ion-icon", 68)(2, HomePage_ng_container_0_ion_row_5_ion_col_4_ion_button_1_ion_icon_2_Template, 1, 0, "ion-icon", 69)(3, HomePage_ng_container_0_ion_row_5_ion_col_4_ion_button_1_span_3_Template, 2, 1, "span", 70)(4, HomePage_ng_container_0_ion_row_5_ion_col_4_ion_button_1_span_4_Template, 2, 1, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "cbus-wallet" : "themeone-wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
  }
}
function HomePage_ng_container_0_ion_row_5_ion_col_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-col", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePage_ng_container_0_ion_row_5_ion_col_4_ion_button_1_Template, 5, 5, "ion-button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.metaData == null ? null : ctx_r2.metaData.isGeneralLogin);
  }
}
function HomePage_ng_container_0_ion_row_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-row", 53)(1, "ion-col", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, HomePage_ng_container_0_ion_row_5_ion_col_3_Template, 3, 2, "ion-col", 56)(4, HomePage_ng_container_0_ion_row_5_ion_col_4_Template, 2, 1, "ion-col", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx_r2.logo ? ctx_r2.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.authenticate.isLoggedIn() && ctx_r2.metaData && ctx_r2.metaData.walletBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.authenticate.isLoggedIn());
  }
}
function HomePage_ng_container_0_ion_icon_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-icon", 76);
  }
}
function HomePage_ng_container_0_ion_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-icon", 77);
  }
}
function HomePage_ng_container_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "txt-main-slt" : "txt-main-slt-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.searchData.originCity.name);
  }
}
function HomePage_ng_container_0_ion_icon_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-icon", 79);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("rotate", ctx_r2.isRotating);
  }
}
function HomePage_ng_container_0_img_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "img", 80);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](1, _c5, ctx_r2.isRotated));
  }
}
function HomePage_ng_container_0_ion_icon_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-icon", 81);
  }
}
function HomePage_ng_container_0_ion_icon_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-icon", 77);
  }
}
function HomePage_ng_container_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "txt-main-slt" : "txt-main-slt-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.searchData.destCity.name);
  }
}
function HomePage_ng_container_0_ion_icon_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-icon", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_ion_icon_26_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.departureDateModal(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_0_ion_icon_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-icon", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_ion_icon_27_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.departureDateModal(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_0_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_div_31_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.departureDateModal(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "txt-main-slt" : "txt-main-slt-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.globalData.DEPARTURE_DATE.dayNameShort + ", " + ctx_r2.globalData.DEPARTURE_DATE.day + " " + ctx_r2.globalData.DEPARTURE_DATE.monthNameShort, "");
  }
}
function HomePage_ng_container_0_span_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_span_34_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.today());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_0_span_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_span_35_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.today());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_0_span_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_span_37_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.tomorrow());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Tomorrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_0_span_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_span_38_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.tomorrow());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Tomorrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_0_ion_item_39_ion_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-icon", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_ion_item_39_ion_icon_1_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.departureDateModal(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_0_ion_item_39_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-icon", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_ion_item_39_ion_icon_2_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.departureDateModal(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_0_ion_item_39_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_ion_item_39_div_6_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.departureDateModal(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "txt-main-slt" : "txt-main-slt-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.globalData.DEPARTURE_DATE_RETURN.dayNameShort + ", " + ctx_r2.globalData.DEPARTURE_DATE_RETURN.day + " " + ctx_r2.globalData.DEPARTURE_DATE_RETURN.monthNameShort, " ");
  }
}
function HomePage_ng_container_0_ion_item_39_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePage_ng_container_0_ion_item_39_div_6_div_1_Template, 2, 2, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.departureDateReturn && ctx_r2.departureDateReturn.formattedDate);
  }
}
function HomePage_ng_container_0_ion_item_39_div_7_ion_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-icon", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_ion_item_39_div_7_ion_icon_1_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.clearReturnDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_0_ion_item_39_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePage_ng_container_0_ion_item_39_div_7_ion_icon_1_Template, 1, 0, "ion-icon", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.departureDateReturn && ctx_r2.departureDateReturn.formattedDate);
  }
}
function HomePage_ng_container_0_ion_item_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-item", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePage_ng_container_0_ion_item_39_ion_icon_1_Template, 1, 0, "ion-icon", 88)(2, HomePage_ng_container_0_ion_item_39_ion_icon_2_Template, 1, 0, "ion-icon", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 90)(4, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_ion_item_39_Template_div_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r15);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.departureDateModal(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Return Booking (Optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, HomePage_ng_container_0_ion_item_39_div_6_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, HomePage_ng_container_0_ion_item_39_div_7_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx_r2.globalData.DEPARTURE_DATE_RETURN == null ? null : ctx_r2.globalData.DEPARTURE_DATE_RETURN.dayNameShort) != undefined && ctx_r2.globalData.DEPARTURE_DATE_RETURN.day != undefined && ctx_r2.globalData.DEPARTURE_DATE_RETURN.monthNameShort != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.globalData.DEPARTURE_DATE_RETURN.dayNameShort != undefined && ctx_r2.globalData.DEPARTURE_DATE_RETURN.day != undefined && ctx_r2.globalData.DEPARTURE_DATE_RETURN.monthNameShort != undefined);
  }
}
function HomePage_ng_container_0_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 98)(1, "ion-row", 99)(2, "ion-col", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_div_43_Template_ion_col_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r20);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.bushire("Bus Rental Service"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "ion-icon", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Bus Hire");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-col", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_div_43_Template_ion_col_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r20);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.bushire("Car Rental Service"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "ion-icon", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Car Hire");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "ion-col", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_div_43_Template_ion_col_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r20);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.bushire("Package Service"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "ion-icon", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Packages");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
}
function HomePage_ng_container_0_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Recent Searches ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_0_swiper_container_45_swiper_slide_1_ion_icon_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-icon", 124);
  }
}
function HomePage_ng_container_0_swiper_container_45_swiper_slide_1_ion_icon_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-icon", 125);
  }
}
function HomePage_ng_container_0_swiper_container_45_swiper_slide_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "swiper-slide", 107)(1, "ion-row", 108)(2, "ion-col", 109)(3, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-col", 112)(6, "div")(7, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "ion-row", 115)(12, "ion-col", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, HomePage_ng_container_0_swiper_container_45_swiper_slide_1_ion_icon_13_Template, 1, 0, "ion-icon", 117)(14, HomePage_ng_container_0_swiper_container_45_swiper_slide_1_ion_icon_14_Template, 1, 0, "ion-icon", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "ion-row", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_swiper_container_45_swiper_slide_1_Template_ion_row_click_15_listener() {
      const r_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r21).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.bookNow(r_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "ion-col", 120)(17, "span", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, " Book Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "ion-icon", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const r_r22 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r2.roundedLogo, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", r_r22.origin_name, " - ", r_r22.dest_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.changedateformat(r_r22.search_time), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", ctx_r2.metaData.msiteFolder == "cbustheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](7, _c6) : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](8, _c7));
  }
}
function HomePage_ng_container_0_swiper_container_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "swiper-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePage_ng_container_0_swiper_container_45_swiper_slide_1_Template, 21, 9, "swiper-slide", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "filterOculto");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, ctx_r2.recentSearches));
  }
}
function HomePage_ng_container_0_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Recent Searches ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_0_swiper_container_47_swiper_slide_1_ion_icon_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-icon", 124);
  }
}
function HomePage_ng_container_0_swiper_container_47_swiper_slide_1_ion_icon_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-icon", 125);
  }
}
function HomePage_ng_container_0_swiper_container_47_swiper_slide_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "swiper-slide", 107)(1, "ion-row", 108)(2, "ion-col", 126)(3, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-col", 127)(6, "div")(7, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "ion-row", 115)(12, "ion-col", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, HomePage_ng_container_0_swiper_container_47_swiper_slide_1_ion_icon_13_Template, 1, 0, "ion-icon", 117)(14, HomePage_ng_container_0_swiper_container_47_swiper_slide_1_ion_icon_14_Template, 1, 0, "ion-icon", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "ion-row", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_swiper_container_47_swiper_slide_1_Template_ion_row_click_15_listener() {
      const r_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r23).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.bookNow(r_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "ion-col", 120)(17, "span", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, " Book Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "ion-icon", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const r_r24 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r2.roundedLogo, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", r_r24.origin_name, " - ", r_r24.dest_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.changedateformat(r_r24.search_time), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", ctx_r2.metaData.msiteFolder == "cbustheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](7, _c6) : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](8, _c7));
  }
}
function HomePage_ng_container_0_swiper_container_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "swiper-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePage_ng_container_0_swiper_container_47_swiper_slide_1_Template, 21, 9, "swiper-slide", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "filterOculto");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, ctx_r2.authenticate.recentSearches));
  }
}
function HomePage_ng_container_0_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Exclusive Offers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_0_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Exclusive Offers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_0_swiper_container_50_swiper_slide_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "swiper-slide", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_swiper_container_50_swiper_slide_1_Template_swiper_slide_click_0_listener() {
      const r_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.openImage(r_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "ion-img", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", r_r26.thumbnail_image_url);
  }
}
function HomePage_ng_container_0_swiper_container_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "swiper-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePage_ng_container_0_swiper_container_50_swiper_slide_1_Template, 3, 1, "swiper-slide", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.offerPages);
  }
}
function HomePage_ng_container_0_swiper_container_51_swiper_slide_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "swiper-slide", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_swiper_container_51_swiper_slide_1_Template_swiper_slide_click_0_listener() {
      const r_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r27).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.openImage(r_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "ion-img", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", r_r28.thumbnail_image_url);
  }
}
function HomePage_ng_container_0_swiper_container_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "swiper-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePage_ng_container_0_swiper_container_51_swiper_slide_1_Template, 3, 1, "swiper-slide", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.offerPagesMobweb);
  }
}
function HomePage_ng_container_0_div_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 134)(1, "ion-row", 135)(2, "ion-col", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "ion-img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ion-col", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Download Our Official Mobile Application");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-col", 139)(7, "ion-button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_div_52_Template_ion_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r29);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.downloadApp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "p", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, " Download Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
}
function HomePage_ng_container_0_ion_fab_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-fab", 142)(1, "ion-fab-button", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_ion_fab_53_Template_ion_fab_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r30);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.navigateToTrackingo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function HomePage_ng_container_0_ion_fab_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-fab", 142)(1, "ion-fab-button", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_ion_fab_54_Template_ion_fab_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r31);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.openWhatsappChat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx_r2.whatsappJson.chat_configuration.chat_bubble, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function HomePage_ng_container_0_div_55_ion_row_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-row", 169)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Hi, I'm here to help you, Please select the below option and click on start chat.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function HomePage_ng_container_0_div_55_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-radio", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("name", item_r33.query);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", item_r33.query);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r33.query, "");
  }
}
function HomePage_ng_container_0_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 147)(1, "div", 148)(2, "div", 149)(3, "ion-card", 150)(4, "ion-col", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-col", 153)(7, "ion-row")(8, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_div_55_Template_div_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r32);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.closeWhatsappChatOurBus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "span", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "ion-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "ion-row")(13, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "ion-buttons", 157)(16, "ion-button", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_div_55_Template_ion_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r32);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      ctx_r2.selectedRadioGroup = null;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.whatsAppPopup = !ctx_r2.whatsAppPopup);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "ion-icon", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "ion-card", 160)(19, "ion-col")(20, "ion-row", 161)(21, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, HomePage_ng_container_0_div_55_ion_row_23_Template, 3, 0, "ion-row", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "ion-row", 161)(25, "div")(26, "ion-list", 164)(27, "ion-radio-group", 165, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ionChange", function HomePage_ng_container_0_div_55_Template_ion_radio_group_ionChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r32);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.radioGroupChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function HomePage_ng_container_0_div_55_Template_ion_radio_group_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r32);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r2.selectedOption, $event) || (ctx_r2.selectedOption = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, HomePage_ng_container_0_div_55_div_29_Template, 4, 3, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "ion-toolbar", 167)(31, "ion-button", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_div_55_Template_ion_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r32);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.gotoBrowse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, " START CHAT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.whatsappJson.chat_configuration.chat_header, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.whatsappJson.chat_configuration.chat_message, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.whatsappJson.chat_configuration.chat_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.whatsappJson.contact_configuration.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.selectedOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.whatsappJson.contact_configuration);
  }
}
function HomePage_ng_container_0_div_56_ion_row_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-row", 169)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Hi, I'm here to help you, Please select the below option and click on start chat.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function HomePage_ng_container_0_div_56_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-radio", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("name", item_r35.query);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", item_r35.query);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r35.query, "");
  }
}
function HomePage_ng_container_0_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 147)(1, "div", 148)(2, "div", 149)(3, "ion-card", 150)(4, "ion-col", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-col", 153)(7, "ion-row")(8, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_div_56_Template_div_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.closeWhatsappChatOurBus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "span", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "ion-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "ion-row")(13, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "ion-buttons", 157)(16, "ion-button", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_div_56_Template_ion_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      ctx_r2.selectedRadioGroup = null;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.whatsAppPopup = !ctx_r2.whatsAppPopup);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "ion-icon", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "ion-card", 160)(19, "ion-col")(20, "ion-row", 161)(21, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, HomePage_ng_container_0_div_56_ion_row_23_Template, 3, 0, "ion-row", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "ion-row", 161)(25, "div")(26, "ion-list", 164)(27, "ion-radio-group", 165, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ionChange", function HomePage_ng_container_0_div_56_Template_ion_radio_group_ionChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.radioGroupChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function HomePage_ng_container_0_div_56_Template_ion_radio_group_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r2.selectedOption, $event) || (ctx_r2.selectedOption = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, HomePage_ng_container_0_div_56_div_29_Template, 4, 3, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "ion-toolbar", 167)(31, "ion-button", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_div_56_Template_ion_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.gotoBrowse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, " START CHAT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.whatsappJson.chat_configuration.chat_header, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.whatsappJson.chat_configuration.chat_message, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.whatsappJson.chat_configuration.chat_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.whatsappJson.contact_configuration.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.selectedOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.whatsappJson.contact_configuration);
  }
}
function HomePage_ng_container_0_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 175)(1, "ion-card", 156)(2, "ion-row")(3, "ion-col", 176)(4, "ion-button", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_div_57_Template_ion_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.zoom(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "ion-icon", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-col", 179)(7, "ion-button", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_div_57_Template_ion_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.zoom(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "ion-icon", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "ion-col", 181)(10, "ion-button", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_div_57_Template_ion_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.viewImagePopup = !ctx_r2.viewImagePopup);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "ion-icon", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "swiper-container", 185)(15, "swiper-slide")(16, "div", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "img", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function HomePage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-content", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, HomePage_ng_container_0_div_2_Template, 2, 6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 5)(4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, HomePage_ng_container_0_ion_row_5_Template, 5, 3, "ion-row", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-card", 8)(7, "ion-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_Template_ion_item_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.originCityModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, HomePage_ng_container_0_ion_icon_8_Template, 1, 0, "ion-icon", 10)(9, HomePage_ng_container_0_ion_icon_9_Template, 1, 0, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div")(11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, HomePage_ng_container_0_div_13_Template, 2, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_Template_div_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.reverse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, HomePage_ng_container_0_ion_icon_15_Template, 1, 2, "ion-icon", 15)(16, HomePage_ng_container_0_img_16_Template, 1, 3, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "ion-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_Template_ion_item_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.destCityModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, HomePage_ng_container_0_ion_icon_18_Template, 1, 0, "ion-icon", 17)(19, HomePage_ng_container_0_ion_icon_19_Template, 1, 0, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div")(21, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, HomePage_ng_container_0_div_23_Template, 2, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, HomePage_ng_container_0_ion_icon_26_Template, 1, 0, "ion-icon", 19)(27, HomePage_ng_container_0_ion_icon_27_Template, 1, 0, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 21)(29, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_Template_div_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.departureDateModal(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "Date of Journey");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, HomePage_ng_container_0_div_31_Template, 2, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 24)(33, "ion-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, HomePage_ng_container_0_span_34_Template, 2, 0, "span", 26)(35, HomePage_ng_container_0_span_35_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "ion-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](37, HomePage_ng_container_0_span_37_Template, 2, 0, "span", 26)(38, HomePage_ng_container_0_span_38_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](39, HomePage_ng_container_0_ion_item_39_Template, 8, 4, "ion-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "ion-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_0_Template_ion_button_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.search());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, "Search Buses");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](43, HomePage_ng_container_0_div_43_Template, 14, 0, "div", 32)(44, HomePage_ng_container_0_div_44_Template, 2, 0, "div", 33)(45, HomePage_ng_container_0_swiper_container_45_Template, 3, 3, "swiper-container", 2)(46, HomePage_ng_container_0_div_46_Template, 2, 0, "div", 33)(47, HomePage_ng_container_0_swiper_container_47_Template, 3, 3, "swiper-container", 2)(48, HomePage_ng_container_0_div_48_Template, 2, 0, "div", 34)(49, HomePage_ng_container_0_div_49_Template, 2, 0, "div", 34)(50, HomePage_ng_container_0_swiper_container_50_Template, 2, 1, "swiper-container", 2)(51, HomePage_ng_container_0_swiper_container_51_Template, 2, 1, "swiper-container", 2)(52, HomePage_ng_container_0_div_52_Template, 10, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](53, HomePage_ng_container_0_ion_fab_53_Template, 3, 0, "ion-fab", 36)(54, HomePage_ng_container_0_ion_fab_54_Template, 3, 1, "ion-fab", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](55, HomePage_ng_container_0_div_55_Template, 33, 6, "div", 37)(56, HomePage_ng_container_0_div_56_Template, 33, 6, "div", 37)(57, HomePage_ng_container_0_div_57_Template, 18, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](40, _c0, "url(" + ctx_r2.backgroundImage + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.showFloatingContainer);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", ctx_r2.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](42, _c1) : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](43, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "bg-box" : "bg-box_2")("ngStyle", ctx_r2.hideBusTicketText ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](44, _c3) : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](45, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.hideBusTicketText);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.searchData.originCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.searchData.destCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.departureDate && ctx_r2.departureDate.formattedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "cbus-wallet" : "themeone-wallet-today-tomorrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "cbus-wallet" : "themeone-wallet-today-tomorrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.isRoundTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r2.metaData.msiteFolder == "cbustheme" ? "search-btn" : "search-btn_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.allowPackageRequest);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.recentSearches.length > 0 && ctx_r2.authenticate.isLoggedIn() && ctx_r2.isRecentSearches);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.recentSearches.length > 0 && ctx_r2.authenticate.isLoggedIn() && ctx_r2.isRecentSearches);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.authenticate.recentSearches.length > 0 && !ctx_r2.authenticate.isLoggedIn() && ctx_r2.isRecentSearches);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.authenticate.recentSearches.length > 0 && !ctx_r2.authenticate.isLoggedIn() && ctx_r2.isRecentSearches);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.offerPages && ctx_r2.offerPages.length > 0 && !ctx_r2.appData.isWEBAPP);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.offerPagesMobweb && ctx_r2.offerPagesMobweb.length > 0 && ctx_r2.appData.isWEBAPP);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.offerPages && ctx_r2.offerPages.length > 0 && !ctx_r2.appData.isWEBAPP);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.offerPagesMobweb && ctx_r2.offerPagesMobweb.length > 0 && ctx_r2.appData.isWEBAPP);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.util.isWebApp() && (ctx_r2.commonStorage.getItem("metaData").androidUrl != "" && ctx_r2.util.platformName() == "Android" || ctx_r2.commonStorage.getItem("metaData").iosUrl != "" && ctx_r2.util.platformName() == "IOS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.trackingoUrl && ctx_r2.showTrackMyBusIconOnHomePage);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.showWhatsAppOption && ctx_r2.checkWebOption());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.whatsAppPopup && ctx_r2.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.whatsAppPopup && ctx_r2.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.viewImagePopup);
  }
}
function HomePage_ng_container_1_div_2_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("touchstart", function HomePage_ng_container_1_div_2_div_1_span_1_Template_span_touchstart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r38);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.onMuteClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("name", ctx_r2.isMuted ? "volume-mute" : "volume-high");
  }
}
function HomePage_ng_container_1_div_2_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("touchend", function HomePage_ng_container_1_div_2_div_1_span_2_Template_span_touchend_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.onCloseClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_1_div_2_div_1_video_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "video", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "source", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Your browser does not support the video tag. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("muted", ctx_r2.isMuted);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r2.promotional_url);
  }
}
function HomePage_ng_container_1_div_2_div_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "img", 52);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r2.promotional_url, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function HomePage_ng_container_1_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePage_ng_container_1_div_2_div_1_span_1_Template, 2, 1, "span", 42)(2, HomePage_ng_container_1_div_2_div_1_span_2_Template, 2, 0, "span", 43)(3, HomePage_ng_container_1_div_2_div_1_video_3_Template, 3, 2, "video", 44)(4, HomePage_ng_container_1_div_2_div_1_img_4_Template, 1, 1, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](5, _c4, ctx_r2.appData.isWEBAPP && ctx_r2.util.platformName() == "Android", ctx_r2.appData.isWEBAPP && ctx_r2.util.platformName() == "IOS" || ctx_r2.appData.isIOS, ctx_r2.appData.isWEBAPP && ctx_r2.util.platformName() != "Android" && ctx_r2.util.platformName() != "IOS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.promotional_url_type == "video");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.showCloseButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.promotional_url_type == "video");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.promotional_url_type == "image");
  }
}
function HomePage_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePage_ng_container_1_div_2_div_1_Template, 5, 9, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](2, _c4, ctx_r2.appData.isWEBAPP && ctx_r2.util.platformName() == "Android", ctx_r2.appData.isWEBAPP && ctx_r2.util.platformName() == "IOS" || ctx_r2.appData.isIOS, ctx_r2.appData.isWEBAPP && ctx_r2.util.platformName() != "Android" && ctx_r2.util.platformName() != "IOS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.promotional_url != "");
  }
}
function HomePage_ng_container_1_ion_row_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-row")(1, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Bus Tickets");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "img", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx_r2.logo ? ctx_r2.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function HomePage_ng_container_1_ion_row_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx_r2.centerLogo ? ctx_r2.centerLogo : "", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function HomePage_ng_container_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "FROM");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.searchData.originCity.name);
  }
}
function HomePage_ng_container_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "TO");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_1_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.searchData.destCity.name);
  }
}
function HomePage_ng_container_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_1_div_23_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r40);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.departureDateModal(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "SELECT DATE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_1_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_1_div_24_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r41);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.departureDateModal(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.globalData.DEPARTURE_DATE.formattedDate, "");
  }
}
function HomePage_ng_container_1_ion_item_31_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_1_ion_item_31_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r42);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.departureDateModal(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " SELECT RETURN DATE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "(Optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function HomePage_ng_container_1_ion_item_31_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_1_ion_item_31_div_3_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r43);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.departureDateModal(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ion-icon", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_1_ion_item_31_div_3_Template_ion_icon_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r43);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.globalData.DEPARTURE_DATE_RETURN.formattedDate);
  }
}
function HomePage_ng_container_1_ion_item_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-item", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-icon", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, HomePage_ng_container_1_ion_item_31_div_2_Template, 4, 0, "div", 199)(3, HomePage_ng_container_1_ion_item_31_div_3_Template, 4, 1, "div", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.departureDateReturn.formattedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.departureDateReturn && ctx_r2.departureDateReturn.formattedDate);
  }
}
function HomePage_ng_container_1_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 221)(1, "ion-row", 99)(2, "ion-col", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_1_div_36_Template_ion_col_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r44);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.bushire("Bus Rental Service"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "ion-icon", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Bus Hire");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-col", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_1_div_36_Template_ion_col_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r44);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.bushire("Car Rental Service"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "ion-icon", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Car Hire");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "ion-col", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_1_div_36_Template_ion_col_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r44);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.bushire("Package Service"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "ion-icon", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Packages");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
}
function HomePage_ng_container_1_div_39_swiper_slide_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "swiper-slide", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_1_div_39_swiper_slide_2_Template_swiper_slide_click_0_listener() {
      const o_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r45).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.openImage(o_r46));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const o_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](1, _c8, "url(" + o_r46.thumbnail_image_url + ")"));
  }
}
function HomePage_ng_container_1_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "swiper-container", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, HomePage_ng_container_1_div_39_swiper_slide_2_Template, 1, 3, "swiper-slide", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "filterOculto");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, ctx_r2.offerPages));
  }
}
function HomePage_ng_container_1_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 221)(1, "ion-row", 135)(2, "ion-col", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "ion-img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ion-col", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Download Our Official Mobile Application");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-col", 139)(7, "ion-button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_1_div_40_Template_ion_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r47);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.downloadApp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "p", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, " Download Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
}
function HomePage_ng_container_1_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Recent searches ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_1_swiper_container_42_swiper_slide_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "swiper-slide", 107)(1, "div", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "hr", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_1_swiper_container_42_swiper_slide_2_Template_div_click_6_listener() {
      const r_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r48).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.bookNow(r_r49));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "BOOK NOW");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r49 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", r_r49.origin_name, " - ", r_r49.dest_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.changedateformat(r_r49.search_time), " ");
  }
}
function HomePage_ng_container_1_swiper_container_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "swiper-container", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, HomePage_ng_container_1_swiper_container_42_swiper_slide_2_Template, 8, 3, "swiper-slide", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "filterOculto");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, ctx_r2.recentSearches));
  }
}
function HomePage_ng_container_1_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Recent searches ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_1_swiper_container_44_swiper_slide_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "swiper-slide", 107)(1, "ion-row", 231)(2, "ion-col", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ion-col", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-row")(7, "ion-col", 234)(8, "div", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_1_swiper_container_44_swiper_slide_2_Template_div_click_8_listener() {
      const r_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r50).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.bookNow(r_r51));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "BOOK NOW");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const r_r51 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", r_r51.origin_name, " - ", r_r51.dest_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.changedateformat(r_r51.search_time));
  }
}
function HomePage_ng_container_1_swiper_container_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "swiper-container", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, HomePage_ng_container_1_swiper_container_44_swiper_slide_2_Template, 10, 3, "swiper-slide", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "filterOculto");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, ctx_r2.authenticate.recentSearches));
  }
}
function HomePage_ng_container_1_ion_fab_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-fab", 142)(1, "ion-fab-button", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_1_ion_fab_45_Template_ion_fab_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r52);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.navigateToTrackingo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function HomePage_ng_container_1_ion_fab_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-fab", 142)(1, "ion-fab-button", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_1_ion_fab_46_Template_ion_fab_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r53);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.openWhatsappChat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx_r2.whatsappJson.chat_configuration.chat_bubble, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function HomePage_ng_container_1_div_47_ion_row_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-row", 169)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Hi, I'm here to help you, Please select the below option and click on start chat.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function HomePage_ng_container_1_div_47_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-radio", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("name", item_r55.query);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", item_r55.query);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r55.query, "");
  }
}
function HomePage_ng_container_1_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 147)(1, "div", 148)(2, "div", 149)(3, "ion-card", 150)(4, "ion-col", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-col", 153)(7, "ion-row")(8, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_1_div_47_Template_div_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r54);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.closeWhatsappChatOurBus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "span", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "ion-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "ion-row")(13, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "ion-buttons", 157)(16, "ion-button", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_1_div_47_Template_ion_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r54);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      ctx_r2.selectedRadioGroup = null;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.whatsAppPopup = !ctx_r2.whatsAppPopup);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "ion-icon", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "ion-card", 160)(19, "ion-col")(20, "ion-row", 161)(21, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, HomePage_ng_container_1_div_47_ion_row_23_Template, 3, 0, "ion-row", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "ion-row", 161)(25, "div")(26, "ion-list", 164)(27, "ion-radio-group", 165, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ionChange", function HomePage_ng_container_1_div_47_Template_ion_radio_group_ionChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r54);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.radioGroupChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function HomePage_ng_container_1_div_47_Template_ion_radio_group_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r54);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r2.selectedOption, $event) || (ctx_r2.selectedOption = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, HomePage_ng_container_1_div_47_div_29_Template, 4, 3, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "ion-toolbar", 167)(31, "ion-button", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_1_div_47_Template_ion_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r54);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.gotoBrowse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, " START CHAT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.whatsappJson.chat_configuration.chat_header, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.whatsappJson.chat_configuration.chat_message, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.whatsappJson.chat_configuration.chat_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.whatsappJson.contact_configuration.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.selectedOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.whatsappJson.contact_configuration);
  }
}
function HomePage_ng_container_1_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 175)(1, "ion-card", 156)(2, "ion-row")(3, "ion-col", 176)(4, "ion-button", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_1_div_48_Template_ion_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r56);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.zoom(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "ion-icon", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-col", 179)(7, "ion-button", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_1_div_48_Template_ion_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r56);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.zoom(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "ion-icon", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "ion-col", 181)(10, "ion-button", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_1_div_48_Template_ion_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r56);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.viewImagePopup = !ctx_r2.viewImagePopup);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "ion-icon", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "swiper-container", 185)(15, "swiper-slide")(16, "div", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "img", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function HomePage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-content", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, HomePage_ng_container_1_div_2_Template, 2, 6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 189)(4, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, HomePage_ng_container_1_ion_row_5_Template, 4, 1, "ion-row", 2)(6, HomePage_ng_container_1_ion_row_6_Template, 2, 1, "ion-row", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "ion-card", 8)(8, "ion-item", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_1_Template_ion_item_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.originCityModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "img", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, HomePage_ng_container_1_div_10_Template, 2, 0, "div", 193)(11, HomePage_ng_container_1_div_11_Template, 2, 1, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "ion-fab-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_1_Template_ion_fab_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.reverse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "ion-icon", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "ion-item", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_1_Template_ion_item_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.destCityModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "img", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, HomePage_ng_container_1_div_17_Template, 2, 0, "div", 193)(18, HomePage_ng_container_1_div_18_Template, 2, 1, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "ion-item")(21, "ion-item", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](22, "ion-icon", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, HomePage_ng_container_1_div_23_Template, 2, 0, "div", 199)(24, HomePage_ng_container_1_div_24_Template, 2, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "span", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_1_Template_span_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.today());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "span", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_1_Template_span_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.tomorrow());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "Tomorrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](30, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, HomePage_ng_container_1_ion_item_31_Template, 4, 2, "ion-item", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "ion-button", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_1_Template_ion_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.search());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "Search ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](36, HomePage_ng_container_1_div_36_Template, 14, 0, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "div", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](38, "app-rate-service");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](39, HomePage_ng_container_1_div_39_Template, 4, 3, "div", 2)(40, HomePage_ng_container_1_div_40_Template, 10, 0, "div", 205)(41, HomePage_ng_container_1_div_41_Template, 2, 0, "div", 33)(42, HomePage_ng_container_1_swiper_container_42_Template, 4, 3, "swiper-container", 207)(43, HomePage_ng_container_1_div_43_Template, 2, 0, "div", 33)(44, HomePage_ng_container_1_swiper_container_44_Template, 4, 3, "swiper-container", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](45, HomePage_ng_container_1_ion_fab_45_Template, 3, 0, "ion-fab", 36)(46, HomePage_ng_container_1_ion_fab_46_Template, 3, 1, "ion-fab", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](47, HomePage_ng_container_1_div_47_Template, 33, 6, "div", 37)(48, HomePage_ng_container_1_div_48_Template, 18, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", ctx_r2.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](27, _c1) : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](28, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("style", "--background: url(" + ctx_r2.backgroundImage + ") no-repeat center center / cover !important;", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeStyle"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.showFloatingContainer);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", ctx_r2.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](29, _c1) : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](30, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r2.hideHomeBgColor ? "transparent" : "bg-box");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.hideBusTicketText);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.hideBusTicketText);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.searchData.originCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.searchData.originCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("rotate", ctx_r2.isRotating);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.searchData.destCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.searchData.destCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.departureDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.departureDate && ctx_r2.departureDate.formattedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.isRoundTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.allowPackageRequest);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.offerPages && ctx_r2.offerPages.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.util.isWebApp() && (ctx_r2.commonStorage.getItem("metaData").androidUrl != "" && ctx_r2.util.platformName() == "Android" || ctx_r2.commonStorage.getItem("metaData").iosUrl != "" && ctx_r2.util.platformName() == "IOS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.recentSearches.length > 0 && ctx_r2.authenticate.isLoggedIn() && ctx_r2.isRecentSearches);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.recentSearches.length > 0 && ctx_r2.authenticate.isLoggedIn() && ctx_r2.isRecentSearches);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.authenticate.recentSearches.length > 0 && !ctx_r2.authenticate.isLoggedIn() && ctx_r2.isRecentSearches);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.authenticate.recentSearches.length > 0 && !ctx_r2.authenticate.isLoggedIn() && ctx_r2.isRecentSearches);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.trackingoUrl && ctx_r2.showTrackMyBusIconOnHomePage);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.showWhatsAppOption && ctx_r2.checkWebOption());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.whatsAppPopup);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.viewImagePopup);
  }
}
function HomePage_ng_container_2_ion_segment_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-segment", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function HomePage_ng_container_2_ion_segment_18_Template_ion_segment_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r58);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r2.selectedTripSegment, $event) || (ctx_r2.selectedTripSegment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-segment-button", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "svg", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "path", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "One Way");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "ion-segment-button", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "svg", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "path", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Round Trip");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.selectedTripSegment);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](3, _c13, ctx_r2.selectedTripSegment === "oneway" ? "var(--primaryText)" : "#747474"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](5, _c13, ctx_r2.selectedTripSegment === "twoway" ? "var(--primaryText)" : "#747474"));
  }
}
function HomePage_ng_container_2_ion_input_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-input", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_2_ion_input_27_Template_ion_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r59);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.openCustom(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", ctx_r2.returnFormattedDate(ctx_r2.globalData.DEPARTURE_DATE.formattedDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("placeholder", ctx_r2.departureDate && ctx_r2.departureDate.formattedDate ? "Select Date" : "Select Date");
  }
}
function HomePage_ng_container_2_ion_input_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-input", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_2_ion_input_31_Template_ion_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r60);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.openCustom(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", ctx_r2.returnFormattedDate(ctx_r2.globalData.DEPARTURE_DATE.formattedDate));
  }
}
function HomePage_ng_container_2_ion_input_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-input", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_2_ion_input_34_Template_ion_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r61);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.openCustom(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_2_ion_input_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-input", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_2_ion_input_35_Template_ion_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r62);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.openCustom(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", ctx_r2.returnFormattedDate(ctx_r2.globalData.DEPARTURE_DATE_RETURN.formattedDate));
  }
}
function HomePage_ng_container_2_ion_fab_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-fab", 142)(1, "ion-fab-button", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_2_ion_fab_46_Template_ion_fab_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r63);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.openWhatsappChat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx_r2.whatsappJson.chat_configuration.chat_bubble, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function HomePage_ng_container_2_div_47_ion_row_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-row", 169)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Hi, I'm here to help you, Please select the below option and click on start chat.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function HomePage_ng_container_2_div_47_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-radio", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("name", item_r65.query);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", item_r65.query);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r65.query, "");
  }
}
function HomePage_ng_container_2_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 147)(1, "div", 148)(2, "div", 149)(3, "ion-card", 150)(4, "ion-col", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-col", 153)(7, "ion-row")(8, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_2_div_47_Template_div_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r64);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.closeWhatsappChatOurBus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "span", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "ion-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "ion-row")(13, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "ion-buttons", 157)(16, "ion-button", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_2_div_47_Template_ion_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r64);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      ctx_r2.selectedRadioGroup = null;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.whatsAppPopup = !ctx_r2.whatsAppPopup);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "ion-icon", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "ion-card", 160)(19, "ion-col")(20, "ion-row", 161)(21, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, HomePage_ng_container_2_div_47_ion_row_23_Template, 3, 0, "ion-row", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "ion-row", 161)(25, "div")(26, "ion-list", 164)(27, "ion-radio-group", 165, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ionChange", function HomePage_ng_container_2_div_47_Template_ion_radio_group_ionChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r64);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.radioGroupChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function HomePage_ng_container_2_div_47_Template_ion_radio_group_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r64);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r2.selectedOption, $event) || (ctx_r2.selectedOption = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, HomePage_ng_container_2_div_47_div_29_Template, 4, 3, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "ion-toolbar", 167)(31, "ion-button", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_2_div_47_Template_ion_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r64);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.gotoBrowse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, " START CHAT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.whatsappJson.chat_configuration.chat_header, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.whatsappJson.chat_configuration.chat_message, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.whatsappJson.chat_configuration.chat_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.whatsappJson.contact_configuration.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.selectedOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.whatsappJson.contact_configuration);
  }
}
function HomePage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-content", 237)(2, "div", 238)(3, "div", 239)(4, "ion-row", 189)(5, "ion-col", 240)(6, "ion-menu-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "ion-icon", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "ion-col", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Book A Trip");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 243)(11, "p", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Travel with OurBus for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, " Comfort & Ease ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div")(16, "ion-card", 245)(17, "div", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, HomePage_ng_container_2_ion_segment_18_Template, 13, 7, "ion-segment", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "ion-input", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_2_Template_ion_input_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r57);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.originCityModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_2_Template_div_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r57);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.reverse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "ion-icon", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "ion-input", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_2_Template_ion_input_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r57);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.destCityModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, HomePage_ng_container_2_ion_input_27_Template, 1, 2, "ion-input", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 190)(29, "ion-row")(30, "ion-col", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, HomePage_ng_container_2_ion_input_31_Template, 1, 1, "ion-input", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](32, "ion-col", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "ion-col", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, HomePage_ng_container_2_ion_input_34_Template, 1, 0, "ion-input", 256)(35, HomePage_ng_container_2_ion_input_35_Template, 1, 1, "ion-input", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "ion-input", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function HomePage_ng_container_2_Template_ion_input_ngModelChange_37_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r57);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r2.formattedPassengerCount, $event) || (ctx_r2.formattedPassengerCount = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "div", 259)(39, "ion-icon", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_2_Template_ion_icon_click_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r57);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.passengerCount !== 1 ? ctx_r2.decrementValue() : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "ion-icon", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_2_Template_ion_icon_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r57);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.passengerCount !== ctx_r2.metaData.maxSeatsAllowedToBook ? ctx_r2.incrementValue() : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](41, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "ion-button", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_2_Template_ion_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r57);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.enableSearch ? "" : ctx_r2.search());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](43, "ion-icon", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, "\u00A0Search ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](45, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](46, HomePage_ng_container_2_ion_fab_46_Template, 3, 1, "ion-fab", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](47, HomePage_ng_container_2_div_47_Template, 33, 6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", ctx_r2.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](27, _c1) : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](28, _c2))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](29, _c9, "url(" + ctx_r2.backgroundImage + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", ctx_r2.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](31, _c1) : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](32, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.isRoundTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("placeholder", "City or Location")("value", ctx_r2.searchData.originCity ? ctx_r2.searchData.originCity.name : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](33, _c10, ctx_r2.isRotated, ctx_r2.shadow));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("placeholder", "Destination")("value", ctx_r2.searchData.destCity ? ctx_r2.searchData.destCity.name : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r2.selectedTripSegment == "oneway" ? "calender_show" : "calender_hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.departureDate && ctx_r2.departureDate.formattedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r2.selectedTripSegment == "twoway" ? "calender_show" : "calender_hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.departureDate && ctx_r2.departureDate.formattedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.departureDateReturn.formattedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.departureDateReturn && ctx_r2.departureDateReturn.formattedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.formattedPassengerCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("color", ctx_r2.passengerCount === 1 ? "#d3d3d3" : "#000000");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", ctx_r2.passengerCount === 1 ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](36, _c11) : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](37, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("color", ctx_r2.passengerCount === ctx_r2.metaData.maxSeatsAllowedToBook ? "#d3d3d3" : "#4CAF50");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", ctx_r2.passengerCount === ctx_r2.metaData.maxSeatsAllowedToBook ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](38, _c11) : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](39, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r2.enableSearch)("ngStyle", ctx_r2.enableSearch ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](40, _c12) : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](41, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.showWhatsAppOption && ctx_r2.checkWebOption());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.whatsAppPopup);
  }
}
function HomePage_ng_container_3_div_6_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "img", 319);
  }
}
function HomePage_ng_container_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_3_div_6_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r67);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.wallet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePage_ng_container_3_div_6_img_1_Template, 1, 0, "img", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.authenticate.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, "", ctx_r2.walletbalance, "");
  }
}
function HomePage_ng_container_3_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "span", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_3_div_7_Template_span_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r68);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.cbus_logIn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function HomePage_ng_container_3_div_9_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("touchstart", function HomePage_ng_container_3_div_9_div_1_span_1_Template_span_touchstart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r69);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.onMuteClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("name", ctx_r2.isMuted ? "volume-mute" : "volume-high");
  }
}
function HomePage_ng_container_3_div_9_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("touchend", function HomePage_ng_container_3_div_9_div_1_span_2_Template_span_touchend_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r70);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.onCloseClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_3_div_9_div_1_video_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "video", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "source", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Your browser does not support the video tag. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("muted", ctx_r2.isMuted);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r2.promotional_url);
  }
}
function HomePage_ng_container_3_div_9_div_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "img", 52);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r2.promotional_url, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function HomePage_ng_container_3_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePage_ng_container_3_div_9_div_1_span_1_Template, 2, 1, "span", 42)(2, HomePage_ng_container_3_div_9_div_1_span_2_Template, 2, 0, "span", 43)(3, HomePage_ng_container_3_div_9_div_1_video_3_Template, 3, 2, "video", 44)(4, HomePage_ng_container_3_div_9_div_1_img_4_Template, 1, 1, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](5, _c4, ctx_r2.appData.isWEBAPP && ctx_r2.util.platformName() == "Android", ctx_r2.appData.isWEBAPP && ctx_r2.util.platformName() == "IOS" || ctx_r2.appData.isIOS, ctx_r2.appData.isWEBAPP && ctx_r2.util.platformName() != "Android" && ctx_r2.util.platformName() != "IOS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.promotional_url_type == "video");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.showCloseButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.promotional_url_type == "video");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.promotional_url_type == "image");
  }
}
function HomePage_ng_container_3_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePage_ng_container_3_div_9_div_1_Template, 5, 9, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](2, _c4, ctx_r2.appData.isWEBAPP && ctx_r2.util.platformName() == "Android", ctx_r2.appData.isWEBAPP && ctx_r2.util.platformName() == "IOS" || ctx_r2.appData.isIOS, ctx_r2.appData.isWEBAPP && ctx_r2.util.platformName() != "Android" && ctx_r2.util.platformName() != "IOS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.promotional_url != "");
  }
}
function HomePage_ng_container_3_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_3_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.searchData.originCity.name);
  }
}
function HomePage_ng_container_3_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_3_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.searchData.destCity.name);
  }
}
function HomePage_ng_container_3_ion_item_36_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_3_ion_item_36_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r72);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.departureDateModal(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Select return date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "(Optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function HomePage_ng_container_3_ion_item_36_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_3_ion_item_36_div_3_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r73);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.departureDateModal(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.globalData.DEPARTURE_DATE_RETURN.formattedDate, " ");
  }
}
function HomePage_ng_container_3_ion_item_36_div_4_ion_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-icon", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_3_ion_item_36_div_4_ion_icon_1_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r74);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.clearReturnDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_3_ion_item_36_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePage_ng_container_3_ion_item_36_div_4_ion_icon_1_Template, 1, 0, "ion-icon", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.departureDateReturn && ctx_r2.departureDateReturn.formattedDate);
  }
}
function HomePage_ng_container_3_ion_item_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-item", 215)(1, "ion-icon", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_3_ion_item_36_Template_ion_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r71);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.departureDateModal(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, HomePage_ng_container_3_ion_item_36_div_2_Template, 4, 0, "div", 325)(3, HomePage_ng_container_3_ion_item_36_div_3_Template, 2, 1, "div", 326)(4, HomePage_ng_container_3_ion_item_36_div_4_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !(ctx_r2.globalData.DEPARTURE_DATE_RETURN == null ? null : ctx_r2.globalData.DEPARTURE_DATE_RETURN.formattedDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.globalData.DEPARTURE_DATE_RETURN == null ? null : ctx_r2.globalData.DEPARTURE_DATE_RETURN.formattedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.globalData.DEPARTURE_DATE_RETURN.dayNameShort != undefined && ctx_r2.globalData.DEPARTURE_DATE_RETURN.day != undefined && ctx_r2.globalData.DEPARTURE_DATE_RETURN.monthNameShort != undefined);
  }
}
function HomePage_ng_container_3_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 329)(1, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_3_div_38_Template_div_click_1_listener() {
      const item_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r75).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.getClickDate(item_r76));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r76 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r2.globalData.DEPARTURE_DATE.day == ctx_r2.getDate(item_r76) ? "hovered" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.getDate(item_r76));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.getDay(item_r76));
  }
}
function HomePage_ng_container_3_span_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Recent Searches ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_3_div_62_ion_col_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-col", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_3_div_62_ion_col_2_Template_ion_col_click_0_listener() {
      const r_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r77).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.bookNow(r_r78));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", r_r78.origin_name, " - ", r_r78.dest_name, " ");
  }
}
function HomePage_ng_container_3_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, HomePage_ng_container_3_div_62_ion_col_2_Template, 3, 2, "ion-col", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.recentSearches);
  }
}
function HomePage_ng_container_3_span_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Recent Searches ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_3_div_64_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_3_div_64_div_1_Template_div_click_0_listener() {
      const r_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r79).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.bookNow(r_r80));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", r_r80.origin_name, " - ", r_r80.dest_name, "");
  }
}
function HomePage_ng_container_3_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePage_ng_container_3_div_64_div_1_Template, 3, 2, "div", 335);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.authenticate.recentSearches);
  }
}
function HomePage_ng_container_3_ion_fab_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-fab", 142)(1, "ion-fab-button", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_3_ion_fab_65_Template_ion_fab_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r81);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.navigateToTrackingo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function HomePage_ng_container_3_ion_fab_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-fab", 142)(1, "ion-fab-button", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_3_ion_fab_66_Template_ion_fab_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r82);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.openWhatsappChat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx_r2.whatsappJson.chat_configuration.chat_bubble, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function HomePage_ng_container_3_div_67_ion_row_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-row", 169)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Hi, I'm here to help you, Please select the below option and click on start chat.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function HomePage_ng_container_3_div_67_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-radio", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("name", item_r84.query);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", item_r84.query);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r84.query, "");
  }
}
function HomePage_ng_container_3_div_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 147)(1, "div", 148)(2, "div", 149)(3, "ion-card", 150)(4, "ion-col", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-col", 153)(7, "ion-row")(8, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_3_div_67_Template_div_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r83);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.closeWhatsappChatOurBus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "span", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "ion-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "ion-row")(13, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "ion-buttons", 157)(16, "ion-button", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_3_div_67_Template_ion_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r83);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      ctx_r2.selectedRadioGroup = null;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.whatsAppPopup = !ctx_r2.whatsAppPopup);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "ion-icon", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "ion-card", 160)(19, "ion-col")(20, "ion-row", 161)(21, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, HomePage_ng_container_3_div_67_ion_row_23_Template, 3, 0, "ion-row", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "ion-row", 161)(25, "div")(26, "ion-list", 164)(27, "ion-radio-group", 165, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ionChange", function HomePage_ng_container_3_div_67_Template_ion_radio_group_ionChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r83);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.radioGroupChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function HomePage_ng_container_3_div_67_Template_ion_radio_group_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r83);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r2.selectedOption, $event) || (ctx_r2.selectedOption = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, HomePage_ng_container_3_div_67_div_29_Template, 4, 3, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "ion-toolbar", 167)(31, "ion-button", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_3_div_67_Template_ion_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r83);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.gotoBrowse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, " START CHAT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.whatsappJson.chat_configuration.chat_header, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.whatsappJson.chat_configuration.chat_message, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.whatsappJson.chat_configuration.chat_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.whatsappJson.contact_configuration.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.selectedOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.whatsappJson.contact_configuration);
  }
}
function HomePage_ng_container_3_div_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 339)(1, "ion-card", 156)(2, "ion-row")(3, "ion-col", 340)(4, "ion-button", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_3_div_68_Template_ion_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r85);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.zoom(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "ion-icon", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-col", 341)(7, "ion-button", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_3_div_68_Template_ion_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r85);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.zoom(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "ion-icon", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "ion-col", 342)(10, "ion-button", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_3_div_68_Template_ion_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r85);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.viewImagePopup = !ctx_r2.viewImagePopup);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "ion-icon", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "swiper-container", 185)(15, "swiper-slide")(16, "div", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "img", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function HomePage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-header")(2, "ion-row", 189)(3, "ion-col", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "img", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-col", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, HomePage_ng_container_3_div_6_Template, 4, 3, "div", 280)(7, HomePage_ng_container_3_div_7_Template, 3, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "ion-content", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, HomePage_ng_container_3_div_9_Template, 2, 6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 282)(11, "ion-card", 283)(12, "ion-card-content", 284)(13, "ion-item", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_3_Template_ion_item_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r66);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.originCityModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "ion-icon", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, HomePage_ng_container_3_div_15_Template, 2, 0, "div", 287)(16, HomePage_ng_container_3_div_16_Template, 2, 1, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_3_Template_div_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r66);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.reverse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "img", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "div", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "ion-item", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_3_Template_ion_item_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r66);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.destCityModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](22, "ion-icon", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, HomePage_ng_container_3_div_23_Template, 2, 0, "div", 292)(24, HomePage_ng_container_3_div_24_Template, 2, 1, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](26, "div", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "ion-item", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_3_Template_ion_item_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r66);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.departureDateModal(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](28, "ion-icon", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "ion-button", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](32, "ion-icon", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "span", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "Select Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](35, "div", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](36, HomePage_ng_container_3_ion_item_36_Template, 6, 3, "ion-item", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "div", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](38, HomePage_ng_container_3_div_38_Template, 6, 3, "div", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "div", 282)(40, "ion-button", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_3_Template_ion_button_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r66);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.search());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](41, "ion-icon", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, " Search Buses ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "ion-card", 302)(44, "ion-grid", 303)(45, "ion-row")(46, "ion-col", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_3_Template_ion_col_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r66);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.toggleModifyTicket());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "div", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](48, "img", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "div", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50, "Download PNR");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "ion-col", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_3_Template_ion_col_click_51_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r66);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.toggleModifyTicket1());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "div", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](53, "img", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "div", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55, "Ticket Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "ion-col", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_3_Template_ion_col_click_56_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r66);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.goToContactUsPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "div", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](58, "img", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "div", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](60, "Contact Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](61, HomePage_ng_container_3_span_61_Template, 2, 0, "span", 312)(62, HomePage_ng_container_3_div_62_Template, 3, 1, "div", 2)(63, HomePage_ng_container_3_span_63_Template, 2, 0, "span", 313)(64, HomePage_ng_container_3_div_64_Template, 2, 1, "div", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](65, HomePage_ng_container_3_ion_fab_65_Template, 3, 0, "ion-fab", 36)(66, HomePage_ng_container_3_ion_fab_66_Template, 3, 1, "ion-fab", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](67, HomePage_ng_container_3_div_67_Template, 33, 6, "div", 37)(68, HomePage_ng_container_3_div_68_Template, 18, 1, "div", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", ctx_r2.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](21, _c1) : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](22, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx_r2.logo ? ctx_r2.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.authenticate.isLoggedIn() && ctx_r2.metaData && ctx_r2.metaData.walletBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.authenticate.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.showFloatingContainer);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.searchData.originCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.searchData.originCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](23, _c5, ctx_r2.isRotated));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.searchData.destCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.searchData.destCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.globalData.DEPARTURE_DATE.formattedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.isRoundTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.nextFiveDates);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.recentSearches.length > 0 && ctx_r2.authenticate.isLoggedIn() && ctx_r2.isRecentSearches);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.recentSearches.length > 0 && ctx_r2.authenticate.isLoggedIn() && ctx_r2.isRecentSearches);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.authenticate.recentSearches.length > 0 && !ctx_r2.authenticate.isLoggedIn() && ctx_r2.isRecentSearches);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.authenticate.recentSearches.length > 0 && !ctx_r2.authenticate.isLoggedIn() && ctx_r2.isRecentSearches);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.trackingoUrl && ctx_r2.showTrackMyBusIconOnHomePage);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.showWhatsAppOption && ctx_r2.checkWebOption());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.whatsAppPopup);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.viewImagePopup);
  }
}
function HomePage_ng_container_4_div_2_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("touchstart", function HomePage_ng_container_4_div_2_div_1_span_1_Template_span_touchstart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r87);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.onMuteClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("name", ctx_r2.isMuted ? "volume-mute" : "volume-high");
  }
}
function HomePage_ng_container_4_div_2_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("touchend", function HomePage_ng_container_4_div_2_div_1_span_2_Template_span_touchend_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r88);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.onCloseClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_4_div_2_div_1_video_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "video", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "source", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Your browser does not support the video tag. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("muted", ctx_r2.isMuted);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r2.promotional_url);
  }
}
function HomePage_ng_container_4_div_2_div_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "img", 52);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r2.promotional_url, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function HomePage_ng_container_4_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePage_ng_container_4_div_2_div_1_span_1_Template, 2, 1, "span", 42)(2, HomePage_ng_container_4_div_2_div_1_span_2_Template, 2, 0, "span", 43)(3, HomePage_ng_container_4_div_2_div_1_video_3_Template, 3, 2, "video", 44)(4, HomePage_ng_container_4_div_2_div_1_img_4_Template, 1, 1, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](5, _c4, ctx_r2.appData.isWEBAPP && ctx_r2.util.platformName() == "Android", ctx_r2.appData.isWEBAPP && ctx_r2.util.platformName() == "IOS" || ctx_r2.appData.isIOS, ctx_r2.appData.isWEBAPP && ctx_r2.util.platformName() != "Android" && ctx_r2.util.platformName() != "IOS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.promotional_url_type == "video");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.showCloseButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.promotional_url_type == "video");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.promotional_url_type == "image");
  }
}
function HomePage_ng_container_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePage_ng_container_4_div_2_div_1_Template, 5, 9, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](2, _c4, ctx_r2.appData.isWEBAPP && ctx_r2.util.platformName() == "Android", ctx_r2.appData.isWEBAPP && ctx_r2.util.platformName() == "IOS" || ctx_r2.appData.isIOS, ctx_r2.appData.isWEBAPP && ctx_r2.util.platformName() != "Android" && ctx_r2.util.platformName() != "IOS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.promotional_url != "");
  }
}
function HomePage_ng_container_4_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](", ", ctx_r2.username, "");
  }
}
function HomePage_ng_container_4_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 371);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.searchData.originCity.name);
  }
}
function HomePage_ng_container_4_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 372);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Select origin city");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_4_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 371);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.searchData.destCity.name);
  }
}
function HomePage_ng_container_4_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 372);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Select destination city");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_4_span_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 371);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate3"]("", ctx_r2.globalData.DEPARTURE_DATE.dayNameShort, ", ", ctx_r2.globalData.DEPARTURE_DATE.day, " ", ctx_r2.globalData.DEPARTURE_DATE.monthNameShort, "");
  }
}
function HomePage_ng_container_4_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 371);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.globalData.DEPARTURE_DATE == null ? null : ctx_r2.globalData.DEPARTURE_DATE.formattedDate);
  }
}
function HomePage_ng_container_4_ng_container_42_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 371);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate3"]("", ctx_r2.globalData.DEPARTURE_DATE_RETURN.dayNameShort, ", ", ctx_r2.globalData.DEPARTURE_DATE_RETURN.day, " ", ctx_r2.globalData.DEPARTURE_DATE_RETURN.monthNameShort, "");
  }
}
function HomePage_ng_container_4_ng_container_42_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 371);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.globalData.DEPARTURE_DATE_RETURN.formattedDate);
  }
}
function HomePage_ng_container_4_ng_container_42_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 372);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Select return date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_4_ng_container_42_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 377);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_4_ng_container_42_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r90);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.clearReturnDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 378);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_4_ng_container_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "div", 361);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 373)(3, "img", 374);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_4_ng_container_42_Template_img_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r89);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.departureDateModal(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 375);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_4_ng_container_42_Template_div_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r89);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.departureDateModal(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Return date (optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, HomePage_ng_container_4_ng_container_42_span_7_Template, 2, 3, "span", 354)(8, HomePage_ng_container_4_ng_container_42_span_8_Template, 2, 1, "span", 354)(9, HomePage_ng_container_4_ng_container_42_span_9_Template, 2, 0, "span", 355);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, HomePage_ng_container_4_ng_container_42_button_10_Template, 2, 0, "button", 376);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx_r2.globalData.DEPARTURE_DATE_RETURN == null ? null : ctx_r2.globalData.DEPARTURE_DATE_RETURN.formattedDate) && (ctx_r2.globalData.DEPARTURE_DATE_RETURN == null ? null : ctx_r2.globalData.DEPARTURE_DATE_RETURN.dayNameShort));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx_r2.globalData.DEPARTURE_DATE_RETURN == null ? null : ctx_r2.globalData.DEPARTURE_DATE_RETURN.formattedDate) && !(ctx_r2.globalData.DEPARTURE_DATE_RETURN == null ? null : ctx_r2.globalData.DEPARTURE_DATE_RETURN.dayNameShort));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !(ctx_r2.globalData.DEPARTURE_DATE_RETURN == null ? null : ctx_r2.globalData.DEPARTURE_DATE_RETURN.formattedDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.departureDateReturn && ctx_r2.departureDateReturn.formattedDate);
  }
}
function HomePage_ng_container_4_button_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 379);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_4_button_44_Template_button_click_0_listener() {
      const item_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r91).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.getClickDate(item_r92));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r92 = ctx.$implicit;
    const i_r93 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("sb-chip--selected", (ctx_r2.globalData.DEPARTURE_DATE == null ? null : ctx_r2.globalData.DEPARTURE_DATE.day) == ctx_r2.getDate(item_r92));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", i_r93 === 0 ? ctx_r2.getDay(item_r92) : i_r93 === 1 ? "Tomorrow" : ctx_r2.getDay(item_r92) + " " + ctx_r2.getDate(item_r92), " ");
  }
}
function HomePage_ng_container_4_section_50_ng_container_4_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 379);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_4_section_50_ng_container_4_button_1_Template_button_click_0_listener() {
      const r_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r94).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.bookNow(r_r95));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r95 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", r_r95.origin_name, " \u2192 ", r_r95.dest_name, "");
  }
}
function HomePage_ng_container_4_section_50_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePage_ng_container_4_section_50_ng_container_4_button_1_Template, 2, 2, "button", 383);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.recentSearches);
  }
}
function HomePage_ng_container_4_section_50_ng_container_5_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 379);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_4_section_50_ng_container_5_button_1_Template_button_click_0_listener() {
      const r_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r96).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.bookNow(r_r97));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r97 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", r_r97.origin_name, " \u2192 ", r_r97.dest_name, "");
  }
}
function HomePage_ng_container_4_section_50_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePage_ng_container_4_section_50_ng_container_5_button_1_Template, 2, 2, "button", 383);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.authenticate.recentSearches);
  }
}
function HomePage_ng_container_4_section_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section", 380)(1, "h2", 381);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Recent searches");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 382);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, HomePage_ng_container_4_section_50_ng_container_4_Template, 2, 1, "ng-container", 2)(5, HomePage_ng_container_4_section_50_ng_container_5_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.authenticate.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.authenticate.isLoggedIn());
  }
}
function HomePage_ng_container_4_ion_fab_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-fab", 142)(1, "ion-fab-button", 384);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_4_ion_fab_52_Template_ion_fab_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r98);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.navigateToTrackingo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", ctx_r2.showWhatsAppOption && ctx_r2.checkWebOption() ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](1, _c14) : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](2, _c15));
  }
}
function HomePage_ng_container_4_ion_fab_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-fab", 142)(1, "ion-fab-button", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_4_ion_fab_53_Template_ion_fab_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r99);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.openWhatsappChat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx_r2.whatsappJson.chat_configuration.chat_bubble, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function HomePage_ng_container_4_div_54_ion_row_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-row", 169)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Hi, I'm here to help you, Please select the below option and click on start chat.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function HomePage_ng_container_4_div_54_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-radio", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r101 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("name", item_r101.query);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", item_r101.query);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r101.query, "");
  }
}
function HomePage_ng_container_4_div_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 147)(1, "div", 148)(2, "div", 149)(3, "ion-card", 150)(4, "ion-col", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-col", 153)(7, "ion-row")(8, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_4_div_54_Template_div_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r100);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.closeWhatsappChatOurBus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "span", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "ion-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "ion-row")(13, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "ion-buttons", 157)(16, "ion-button", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_4_div_54_Template_ion_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r100);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      ctx_r2.selectedRadioGroup = null;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.whatsAppPopup = !ctx_r2.whatsAppPopup);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "ion-icon", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "ion-card", 160)(19, "ion-col")(20, "ion-row", 161)(21, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, HomePage_ng_container_4_div_54_ion_row_23_Template, 3, 0, "ion-row", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "ion-row", 161)(25, "div")(26, "ion-list", 164)(27, "ion-radio-group", 165, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ionChange", function HomePage_ng_container_4_div_54_Template_ion_radio_group_ionChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r100);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.radioGroupChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function HomePage_ng_container_4_div_54_Template_ion_radio_group_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r100);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r2.selectedOption, $event) || (ctx_r2.selectedOption = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, HomePage_ng_container_4_div_54_div_29_Template, 4, 3, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "ion-toolbar", 167)(31, "ion-button", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_4_div_54_Template_ion_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r100);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.gotoBrowse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, " START CHAT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.whatsappJson.chat_configuration.chat_header, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.whatsappJson.chat_configuration.chat_message, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.whatsappJson.chat_configuration.chat_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.whatsappJson.contact_configuration.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.selectedOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.whatsappJson.contact_configuration);
  }
}
function HomePage_ng_container_4_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 339)(1, "ion-card", 156)(2, "ion-row")(3, "ion-col", 340)(4, "ion-button", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_4_div_55_Template_ion_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r102);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.zoom(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "ion-icon", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-col", 341)(7, "ion-button", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_4_div_55_Template_ion_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r102);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.zoom(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "ion-icon", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "ion-col", 342)(10, "ion-button", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_4_div_55_Template_ion_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r102);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.viewImagePopup = !ctx_r2.viewImagePopup);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "ion-icon", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "swiper-container", 185)(15, "swiper-slide")(16, "div", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "img", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function HomePage_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-content", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, HomePage_ng_container_4_div_2_Template, 2, 6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "header", 344)(4, "div", 345)(5, "div", 346);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "img", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "p", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, HomePage_ng_container_4_ng_container_9_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "h1", 348)(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Where are you");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "headed next?");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "section", 349)(16, "div", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_4_Template_div_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r86);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.originCityModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "img", 351);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 352)(19, "span", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, HomePage_ng_container_4_span_21_Template, 2, 1, "span", 354)(22, HomePage_ng_container_4_span_22_Template, 2, 0, "span", 355);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "div", 356);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "button", 357);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_4_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r86);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.reverse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "img", 358);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 359);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_4_Template_div_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r86);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.destCityModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](27, "img", 360);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 352)(29, "span", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, HomePage_ng_container_4_span_31_Template, 2, 1, "span", 354)(32, HomePage_ng_container_4_span_32_Template, 2, 0, "span", 355);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](33, "div", 361);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "div", 362);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_4_Template_div_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r86);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.departureDateModal(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](35, "img", 363);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 352)(37, "span", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "Date of journey");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](39, HomePage_ng_container_4_span_39_Template, 2, 3, "span", 364)(40, HomePage_ng_container_4_ng_template_40_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](42, HomePage_ng_container_4_ng_container_42_Template, 11, 4, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "div", 365);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](44, HomePage_ng_container_4_button_44_Template, 2, 3, "button", 366);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](45, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "button", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_4_Template_button_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r86);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.search());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](47, "img", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49, "Search buses");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](50, HomePage_ng_container_4_section_50_Template, 6, 2, "section", 369);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](51, "div", 370);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](52, HomePage_ng_container_4_ion_fab_52_Template, 3, 3, "ion-fab", 36)(53, HomePage_ng_container_4_ion_fab_53_Template, 3, 1, "ion-fab", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](54, HomePage_ng_container_4_div_54_Template, 33, 6, "div", 37)(55, HomePage_ng_container_4_div_55_Template, 18, 1, "div", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const sbRawDate_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](41);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("fullscreen", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.showFloatingContainer);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx_r2.logo ? ctx_r2.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.sbGreeting);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.searchData.originCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.searchData.originCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("sb-swap__icon--rotated", ctx_r2.isRotated);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.searchData.destCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.searchData.destCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.globalData.DEPARTURE_DATE == null ? null : ctx_r2.globalData.DEPARTURE_DATE.dayNameShort)("ngIfElse", sbRawDate_r103);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.isRoundTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind3"](45, 22, ctx_r2.nextFiveDates, 0, 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.isRecentSearches && (ctx_r2.authenticate.isLoggedIn() && ctx_r2.recentSearches.length > 0 || !ctx_r2.authenticate.isLoggedIn() && ctx_r2.authenticate.recentSearches.length > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("sb-home__bottom-space--fab", ctx_r2.trackingoUrl && ctx_r2.showTrackMyBusIconOnHomePage || ctx_r2.showWhatsAppOption && ctx_r2.checkWebOption());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.trackingoUrl && ctx_r2.showTrackMyBusIconOnHomePage);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.showWhatsAppOption && ctx_r2.checkWebOption());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.whatsAppPopup);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.viewImagePopup);
  }
}
function HomePage_ng_container_5_div_2_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("touchstart", function HomePage_ng_container_5_div_2_div_1_span_1_Template_span_touchstart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r105);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.onMuteClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("name", ctx_r2.isMuted ? "volume-mute" : "volume-high");
  }
}
function HomePage_ng_container_5_div_2_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("touchend", function HomePage_ng_container_5_div_2_div_1_span_2_Template_span_touchend_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r106);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.onCloseClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_5_div_2_div_1_video_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "video", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "source", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Your browser does not support the video tag. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("muted", ctx_r2.isMuted);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r2.promotional_url);
  }
}
function HomePage_ng_container_5_div_2_div_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "img", 52);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r2.promotional_url, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function HomePage_ng_container_5_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePage_ng_container_5_div_2_div_1_span_1_Template, 2, 1, "span", 42)(2, HomePage_ng_container_5_div_2_div_1_span_2_Template, 2, 0, "span", 43)(3, HomePage_ng_container_5_div_2_div_1_video_3_Template, 3, 2, "video", 44)(4, HomePage_ng_container_5_div_2_div_1_img_4_Template, 1, 1, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](5, _c4, ctx_r2.appData.isWEBAPP && ctx_r2.util.platformName() == "Android", ctx_r2.appData.isWEBAPP && ctx_r2.util.platformName() == "IOS" || ctx_r2.appData.isIOS, ctx_r2.appData.isWEBAPP && ctx_r2.util.platformName() != "Android" && ctx_r2.util.platformName() != "IOS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.promotional_url_type == "video");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.showCloseButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.promotional_url_type == "video");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.promotional_url_type == "image");
  }
}
function HomePage_ng_container_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePage_ng_container_5_div_2_div_1_Template, 5, 9, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](2, _c4, ctx_r2.appData.isWEBAPP && ctx_r2.util.platformName() == "Android", ctx_r2.appData.isWEBAPP && ctx_r2.util.platformName() == "IOS" || ctx_r2.appData.isIOS, ctx_r2.appData.isWEBAPP && ctx_r2.util.platformName() != "Android" && ctx_r2.util.platformName() != "IOS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.promotional_url != "");
  }
}
function HomePage_ng_container_5_ion_header_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-header", 413)(1, "div", 414);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r2.hideBusTicketText ? ctx_r2.centerLogo ? ctx_r2.centerLogo : "" : ctx_r2.logo ? ctx_r2.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function HomePage_ng_container_5_div_5_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 420);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Hi ", ctx_r2.username, "");
  }
}
function HomePage_ng_container_5_div_5_ion_col_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-col", 57)(1, "div", 421);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_5_div_5_ion_col_4_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r107);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.wallet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 422);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "ion-icon", 423);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 424);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 425)(7, "span", 426);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "ion-icon", 427);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", ctx_r2.currencySym, "", ctx_r2.walletbalance, "");
  }
}
function HomePage_ng_container_5_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 416)(1, "ion-row", 417)(2, "ion-col", 418);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, HomePage_ng_container_5_div_5_span_3_Template, 2, 1, "span", 419);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, HomePage_ng_container_5_div_5_ion_col_4_Template, 10, 2, "ion-col", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.username != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.metaData && ctx_r2.metaData.walletBooking);
  }
}
function HomePage_ng_container_5_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 428)(1, "button", 429);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_5_div_6_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r108);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.shyamoliselectedtriptypre("oneway"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " One way ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 429);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_5_div_6_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r108);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.shyamoliselectedtriptypre("roundtrip"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, " Round trip ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx_r2.shyamoli_triptype == "oneway");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx_r2.shyamoli_triptype == "roundtrip");
  }
}
function HomePage_ng_container_5_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Select departure city");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_5_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.searchData.originCity.name);
  }
}
function HomePage_ng_container_5_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Select destination city");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_5_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.searchData.destCity.name);
  }
}
function HomePage_ng_container_5_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Select departure date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_5_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.globalData.DEPARTURE_DATE.dayNameShort + ", " + ctx_r2.globalData.DEPARTURE_DATE.day + " " + ctx_r2.globalData.DEPARTURE_DATE.monthNameShort, " ");
  }
}
function HomePage_ng_container_5_div_33_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Select return date (Optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_5_div_33_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.globalData.DEPARTURE_DATE_RETURN.dayNameShort + ", " + ctx_r2.globalData.DEPARTURE_DATE_RETURN.day + " " + ctx_r2.globalData.DEPARTURE_DATE_RETURN.monthNameShort, " ");
  }
}
function HomePage_ng_container_5_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 391);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_5_div_33_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r109);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.departureDateModal(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "label", 392);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Return date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, HomePage_ng_container_5_div_33_div_3_Template, 2, 0, "div", 393)(4, HomePage_ng_container_5_div_33_div_4_Template, 2, 1, "div", 393);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "ion-icon", 402);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.departureDateReturn.formattedDate || !ctx_r2.globalData.DEPARTURE_DATE_RETURN.formattedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.departureDateReturn && ctx_r2.departureDateReturn.formattedDate && ctx_r2.globalData.DEPARTURE_DATE_RETURN.formattedDate);
  }
}
function HomePage_ng_container_5_span_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Today:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_5_span_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Tomorrow:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_5_span_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate4"](" ", (ctx_r2.globalData.DEPARTURE_DATE == null ? null : ctx_r2.globalData.DEPARTURE_DATE.dayNameShort) || "", "", ",", " ", (ctx_r2.globalData.DEPARTURE_DATE == null ? null : ctx_r2.globalData.DEPARTURE_DATE.day) || "", " ", (ctx_r2.globalData.DEPARTURE_DATE == null ? null : ctx_r2.globalData.DEPARTURE_DATE.monthNameShort) || "", "");
  }
}
function HomePage_ng_container_5_span_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate4"](" ", (ctx_r2.yesterdayDateget == null ? null : ctx_r2.yesterdayDateget.dayNameShort) || "", "", ",", " ", (ctx_r2.yesterdayDateget == null ? null : ctx_r2.yesterdayDateget.day) || "", " ", (ctx_r2.yesterdayDateget == null ? null : ctx_r2.yesterdayDateget.monthNameShort) || "", "");
  }
}
function HomePage_ng_container_5_span_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Tomorrow:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_5_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 431)(1, "div", 432);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_5_div_45_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r110);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.bushire("Bus Rental Service"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "ion-icon", 433);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span", 434);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Bus Hire");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 432);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_5_div_45_Template_div_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r110);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.bushire("Car Rental Service"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "ion-icon", 435);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span", 434);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Car Hire");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 432);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_5_div_45_Template_div_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r110);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.bushire("Package Service"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "ion-icon", 436);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "span", 434);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Packages");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
}
function HomePage_ng_container_5_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 437)(1, "h2", 438);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Recent Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function HomePage_ng_container_5_swiper_container_49_swiper_slide_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "swiper-slide", 441)(1, "div", 442)(2, "div", 443);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "img", 444);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 445)(5, "div", 446);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 447);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 448);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_5_swiper_container_49_swiper_slide_1_Template_div_click_9_listener() {
      const r_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r111).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.bookNow(r_r112));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, " Book Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "svg", 449);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "path", 450);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const r_r112 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", r_r112.origin_name, " - ", r_r112.dest_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.changedateformat(r_r112.search_time));
  }
}
function HomePage_ng_container_5_swiper_container_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "swiper-container", 439);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePage_ng_container_5_swiper_container_49_swiper_slide_1_Template, 13, 3, "swiper-slide", 440);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "filterOculto");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, ctx_r2.recentSearches));
  }
}
function HomePage_ng_container_5_swiper_container_50_swiper_slide_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "swiper-slide", 441)(1, "div", 442)(2, "div", 443);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "img", 444);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 445)(5, "div", 446);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 447);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 448);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_5_swiper_container_50_swiper_slide_1_Template_div_click_9_listener() {
      const r_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r113).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.bookNow(r_r114));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, " Book Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "svg", 449);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "path", 450);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const r_r114 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", r_r114.origin_name, " - ", r_r114.dest_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.changedateformat(r_r114.search_time));
  }
}
function HomePage_ng_container_5_swiper_container_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "swiper-container", 439);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePage_ng_container_5_swiper_container_50_swiper_slide_1_Template, 13, 3, "swiper-slide", 440);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "filterOculto");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, ctx_r2.authenticate.recentSearches));
  }
}
function HomePage_ng_container_5_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 437)(1, "h2", 438);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Our Offers");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function HomePage_ng_container_5_swiper_container_52_swiper_slide_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "swiper-slide", 452);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_5_swiper_container_52_swiper_slide_1_Template_swiper_slide_click_0_listener() {
      const o_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r115).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.openImage(o_r116));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 453);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const o_r116 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", o_r116.thumbnail_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function HomePage_ng_container_5_swiper_container_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "swiper-container", 439);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePage_ng_container_5_swiper_container_52_swiper_slide_1_Template, 2, 1, "swiper-slide", 451);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "filterOculto");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, ctx_r2.offerPages));
  }
}
function HomePage_ng_container_5_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 454)(1, "div", 455)(2, "div", 456);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "ion-img", 457);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 458);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Download Our Official Mobile Application");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "button", 459);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_5_div_53_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r117);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.downloadApp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, " Download Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
}
function HomePage_ng_container_5_ion_fab_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-fab", 460)(1, "ion-fab-button", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_5_ion_fab_54_Template_ion_fab_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r118);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.openWhatsappChat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 461);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function HomePage_ng_container_5_div_55_ion_row_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-row", 169)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Hi, I'm here to help you, Please select the below option and click on start chat.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function HomePage_ng_container_5_div_55_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-radio", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r120 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("name", item_r120.query);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", item_r120.query);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r120.query, "");
  }
}
function HomePage_ng_container_5_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 147)(1, "div", 148)(2, "div", 149)(3, "ion-card", 150)(4, "ion-col", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-col", 153)(7, "ion-row")(8, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_5_div_55_Template_div_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r119);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.closeWhatsappChatOurBus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "span", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "ion-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "ion-row")(13, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "ion-buttons", 157)(16, "ion-button", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_5_div_55_Template_ion_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r119);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      ctx_r2.selectedRadioGroup = null;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.whatsAppPopup = !ctx_r2.whatsAppPopup);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "ion-icon", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "ion-card", 160)(19, "ion-col")(20, "ion-row", 161)(21, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, HomePage_ng_container_5_div_55_ion_row_23_Template, 3, 0, "ion-row", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "ion-row", 161)(25, "div")(26, "ion-list", 164)(27, "ion-radio-group", 165, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ionChange", function HomePage_ng_container_5_div_55_Template_ion_radio_group_ionChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r119);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.radioGroupChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function HomePage_ng_container_5_div_55_Template_ion_radio_group_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r119);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r2.selectedOption, $event) || (ctx_r2.selectedOption = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, HomePage_ng_container_5_div_55_div_29_Template, 4, 3, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "ion-toolbar", 167)(31, "ion-button", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_5_div_55_Template_ion_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r119);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.gotoBrowse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, " START CHAT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.whatsappJson.chat_configuration.chat_header, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.whatsappJson.chat_configuration.chat_message, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.whatsappJson.chat_configuration.chat_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.whatsappJson.contact_configuration.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.selectedOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.whatsappJson.contact_configuration);
  }
}
function HomePage_ng_container_5_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 175)(1, "ion-card", 156)(2, "ion-row")(3, "ion-col", 176)(4, "ion-button", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_5_div_56_Template_ion_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r121);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.zoom(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "ion-icon", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-col", 179)(7, "ion-button", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_5_div_56_Template_ion_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r121);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.zoom(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "ion-icon", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "ion-col", 181)(10, "ion-button", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_5_div_56_Template_ion_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r121);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.viewImagePopup = !ctx_r2.viewImagePopup);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "ion-icon", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "swiper-container", 185)(15, "swiper-slide")(16, "div", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "img", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function HomePage_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-content", 385);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, HomePage_ng_container_5_div_2_Template, 2, 6, "div", 4)(3, HomePage_ng_container_5_ion_header_3_Template, 3, 1, "ion-header", 386);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 387);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, HomePage_ng_container_5_div_5_Template, 5, 2, "div", 388)(6, HomePage_ng_container_5_div_6_Template, 5, 4, "div", 389);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 390)(8, "div", 391);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_5_Template_div_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r104);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.originCityModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "label", 392);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, HomePage_ng_container_5_div_11_Template, 2, 0, "div", 393)(12, HomePage_ng_container_5_div_12_Template, 2, 1, "div", 393);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 391);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_5_Template_div_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r104);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.destCityModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "label", 392);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, HomePage_ng_container_5_div_16_Template, 2, 0, "div", 393)(17, HomePage_ng_container_5_div_17_Template, 2, 1, "div", 393);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 394)(19, "button", 395);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_5_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r104);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.reverse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "svg", 396)(21, "g", 397);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](22, "path", 398)(23, "path", 399);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "defs")(25, "clipPath", 400);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](26, "rect", 401);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 391);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_5_Template_div_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r104);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.departureDateModal(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "label", 392);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "Departure date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, HomePage_ng_container_5_div_30_Template, 2, 0, "div", 393)(31, HomePage_ng_container_5_div_31_Template, 2, 1, "div", 393);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](32, "ion-icon", 402);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](33, HomePage_ng_container_5_div_33_Template, 6, 2, "div", 403);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "div", 404)(35, "button", 405);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_5_Template_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r104);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.today_shyamoli(ctx_r2.yesterdayDateget));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](36, HomePage_ng_container_5_span_36_Template, 2, 0, "span", 2)(37, HomePage_ng_container_5_span_37_Template, 2, 0, "span", 2)(38, HomePage_ng_container_5_span_38_Template, 2, 4, "span", 2)(39, HomePage_ng_container_5_span_39_Template, 2, 4, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "button", 406);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_5_Template_button_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r104);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.tomorrow_shyamoli(ctx_r2.tomorrowdateget));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](41, HomePage_ng_container_5_span_41_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "button", 407);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_5_Template_button_click_43_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r104);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.search());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, " Search for buses ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](45, HomePage_ng_container_5_div_45_Template, 13, 0, "div", 408);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "div", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](47, "app-rate-service");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](48, HomePage_ng_container_5_div_48_Template, 3, 0, "div", 409)(49, HomePage_ng_container_5_swiper_container_49_Template, 3, 3, "swiper-container", 410)(50, HomePage_ng_container_5_swiper_container_50_Template, 3, 3, "swiper-container", 410)(51, HomePage_ng_container_5_div_51_Template, 3, 0, "div", 409)(52, HomePage_ng_container_5_swiper_container_52_Template, 3, 3, "swiper-container", 410)(53, HomePage_ng_container_5_div_53_Template, 8, 0, "div", 411);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](54, HomePage_ng_container_5_ion_fab_54_Template, 3, 0, "ion-fab", 412);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](55, HomePage_ng_container_5_div_55_Template, 33, 6, "div", 37)(56, HomePage_ng_container_5_div_56_Template, 18, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", ctx_r2.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](33, _c1) : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](34, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.showFloatingContainer);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.hideBusTicketText || ctx_r2.hideBusTicketText);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.authenticate.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.isRoundTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.searchData.originCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.searchData.originCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.searchData.destCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.searchData.destCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("rotate", ctx_r2.isRotating);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.departureDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.departureDate && ctx_r2.departureDate.formattedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.shyamoli_triptype == "roundtrip");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.globalData.DEPARTURE_DATE.formattedDate == ctx_r2.dateService.getToday().formattedDate || (ctx_r2.yesterdayDateget == null ? null : ctx_r2.yesterdayDateget.formattedDate) == ctx_r2.dateService.getToday().formattedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.globalData.DEPARTURE_DATE.formattedDate == ctx_r2.dateService.getTomorrow().formattedDate && (ctx_r2.yesterdayDateget == null ? null : ctx_r2.yesterdayDateget.formattedDate) !== ctx_r2.dateService.getToday().formattedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.globalData.DEPARTURE_DATE.formattedDate == ctx_r2.dateService.getToday().formattedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.globalData.DEPARTURE_DATE.formattedDate !== ctx_r2.dateService.getToday().formattedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.tomorrowdateget.formattedDate == ctx_r2.dateService.getTomorrow().formattedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate4"](" ", (ctx_r2.tomorrowdateget == null ? null : ctx_r2.tomorrowdateget.dayNameShort) || "", "", ",", " ", (ctx_r2.tomorrowdateget == null ? null : ctx_r2.tomorrowdateget.day) || "", " ", (ctx_r2.tomorrowdateget == null ? null : ctx_r2.tomorrowdateget.monthNameShort) || "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.allowPackageRequest);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.recentSearches.length > 0 && ctx_r2.authenticate.isLoggedIn() && ctx_r2.isRecentSearches || ctx_r2.authenticate.recentSearches.length > 0 && !ctx_r2.authenticate.isLoggedIn() && ctx_r2.isRecentSearches);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.recentSearches.length > 0 && ctx_r2.authenticate.isLoggedIn() && ctx_r2.isRecentSearches);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.authenticate.recentSearches.length > 0 && !ctx_r2.authenticate.isLoggedIn() && ctx_r2.isRecentSearches);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.offerPages && ctx_r2.offerPages.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.offerPages && ctx_r2.offerPages.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.util.isWebApp() && (ctx_r2.commonStorage.getItem("metaData").androidUrl != "" && ctx_r2.util.platformName() == "Android" || ctx_r2.commonStorage.getItem("metaData").iosUrl != "" && ctx_r2.util.platformName() == "IOS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.showWhatsAppOption && ctx_r2.checkWebOption());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.whatsAppPopup);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.viewImagePopup);
  }
}
class HomePage {
  constructor(dateService, commonStorage, loader, navCtrl, route, router, globalData, apiFactory, util, alertController, theme, authenticate, platform, routerOutlet, commonService, modalCtrl, iab, appData, geolocation, http, modalController, firebaseAnalyticsService, animationCtrl, renderer, upiCheckService) {
    this.dateService = dateService;
    this.commonStorage = commonStorage;
    this.loader = loader;
    this.navCtrl = navCtrl;
    this.route = route;
    this.router = router;
    this.globalData = globalData;
    this.apiFactory = apiFactory;
    this.util = util;
    this.alertController = alertController;
    this.theme = theme;
    this.authenticate = authenticate;
    this.platform = platform;
    this.routerOutlet = routerOutlet;
    this.commonService = commonService;
    this.modalCtrl = modalCtrl;
    this.iab = iab;
    this.appData = appData;
    this.geolocation = geolocation;
    this.http = http;
    this.modalController = modalController;
    this.firebaseAnalyticsService = firebaseAnalyticsService;
    this.animationCtrl = animationCtrl;
    this.renderer = renderer;
    this.upiCheckService = upiCheckService;
    this.enableSearch = true;
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
    this.slideOpts2 = {
      initialSlide: 0,
      loop: true,
      centeredSlidesBounds: true,
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      grabCursor: true,
      centeredSlides: true,
      autoplay: false,
      spaceBetween: 40,
      zoom: {
        maxRatio: 5
      }
    };
    this.slideOpts3 = {
      initialSlide: 1,
      loop: true,
      centeredSlidesBounds: true,
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      grabCursor: true,
      centeredSlides: true,
      autoplay: true,
      spaceBetween: 40,
      zoom: {
        maxRatio: 5
      }
    };
    this.slideOpts1 = {
      loop: false,
      speed: 1000,
      slidesPerView: 1.45,
      slidesPerGroup: 1,
      grabCursor: true,
      spaceBetween: 15
    };
    this.sliderOpts = {
      initialSlide: 0,
      speed: 400,
      loop: false
    };
    this.viewImagePopup = false;
    this.searchData = [];
    this.departureDate = {};
    this.departureDateReturn = {};
    this.isRoundTrip = false;
    this.offerPages = [];
    this.recentSearches = [];
    this.whatsAppPopup = false;
    this.showWhatsAppOption = false;
    this.allowPackageRequest = false;
    this.isRecentSearches = false;
    this.advance_booking_days = 90;
    this.balance = 0;
    this.promobalance = 0;
    this.walletbalance = 0;
    this.callwalletbalance = 'false';
    this.hideShowOldTheme = false;
    this.isRotated = false;
    this.shadow = false;
    this.nextFiveDates = [];
    this.selectedTripSegment = 'oneway';
    this.isModalOpen = false;
    this.isIos = false;
    this.isMuted = true;
    this.promotional_url = '';
    this.promotional_url_type = '';
    this.showCloseButton = false;
    this.showFloatingContainer = true;
    this.offerPagesMobweb = [];
    this.isRotating = false;
    this.username = '';
    this.shyamoli_triptype = 'oneway';
    this.rememberTripChoice = 'oneway';
    this.promotional_url = '';
    this.promotional_url_type = '';
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    // this.setDefaultDate();
    this.generateNextFiveDates(new Date());
    this.commonStorage.localRemove('SELECTED_SERVICE_RETURN');
    this.commonStorage.localRemove('SELECTED_SERVICE');
    this.commonStorage.localRemove('reservationDataReturn');
    this.commonStorage.localRemove('reservationData');
    this.commonStorage.localRemove('travelDateReturn');
    this.commonStorage.localRemove('travelDate');
    this.commonStorage.localRemove('SELECTED_ROUTE');
    this.commonStorage.localRemove('SELECTED_ROUTE_RETURN');
    this.commonStorage.localRemove('selectedTripSegment');
    this.globalData.DEPARTURE_DATE_RETURN = {};
    this.apiFactory.listen().subscribe(res => {
      console.log(res);
      if (res == 'true') {
        this.tomorrowdateget = this.dateService.getNextPrevDate(this.globalData.DEPARTURE_DATE, 1);
        if (this.yesterdayDateget && this.yesterdayDateget.formattedDate == this.globalData.DEPARTURE_DATE.formattedDate) {
          this.yesterdayDateget = this.globalData.DEPARTURE_DATE;
        } else {
          this.yesterdayDateget = this.dateService.getNextPrevDate(this.globalData.DEPARTURE_DATE, -1);
        }
      }
    });
    setInterval(() => {
      if (this.selectedTripSegment === 'oneway') {
        if (this.searchData.originCity && this.searchData.destCity && this.globalData.DEPARTURE_DATE.day) {
          this.enableSearch = false;
        } else {
          this.enableSearch = true;
        }
      }
      if (this.selectedTripSegment === 'twoway') {
        if (this.searchData.originCity && this.searchData.destCity && this.globalData.DEPARTURE_DATE.day && this.globalData.DEPARTURE_DATE_RETURN.day) {
          this.enableSearch = false;
        } else {
          this.enableSearch = true;
        }
      }
    }, 100);
    this.logo_seabird = './assets/icon/seabird1.png';
    this.metaData = this.commonStorage.getItem('metaData');
    this.roundedLogo = this.metaData.roundedLogo;
    this.commonStorage.localSet('autofillData', false);
    this.departureDate = this.dateService.getToday();
    this.commonStorage.localSet('travelDate', this.departureDate);
    this.globalData.DEPARTURE_DATE = this.departureDate;
    this.tomorrowdateget = this.dateService.getNextPrevDate(this.departureDate, 1);
    this.getWhatsappConfig();
    if (localStorage.getItem('booked_now') != 'null') {
      var bookedNow = JSON.parse(localStorage.getItem('booked_now') || '{}');
      if (bookedNow.origin != '' && bookedNow.destination !== undefined && bookedNow.origin !== undefined && bookedNow.origin_name !== undefined && bookedNow.destination_name !== undefined && bookedNow.destination != '' && bookedNow.travel_date != '') {
        this.searchData.originCity = {};
        this.searchData.originCity['name'] = bookedNow.origin_name;
        this.searchData.originCity['id'] = bookedNow.origin;
        this.searchData.destCity = {};
        this.searchData.destCity['name'] = bookedNow.destination_name;
        this.searchData.destCity['id'] = bookedNow.destination;
        let s = [];
        s.push({
          'originCity': this.searchData.originCity
        });
        s.push({
          'destCity': this.searchData.destCity
        });
        this.globalData.DEPARTURE_DATE = this.dateService.getDateObjFromDateStr(bookedNow.travel_date, this.commonService.checkDateFormat(), "yyyy-mm-dd");
        this.commonStorage.localSet("onward", s);
        this.commonStorage.localSet("origin", this.searchData.originCity);
        this.commonStorage.localSet("destination", this.searchData.destCity);
        this.commonStorage.localSet("travelDate", this.globalData.DEPARTURE_DATE);
        this.commonStorage.localRemove('onwardSelect');
        this.navCtrl.navigateForward('available-routes');
      }
    }
    this.showTrackMyBusIconOnHomePage = this.commonStorage.getItem("metaData").showTrackMyBusIconOnHomePage;
    this.trackingoUrl = this.commonStorage.getItem("metaData").trackingoUrl;
    this.options = {
      toolbar: {
        height: 56,
        color: 'red'
      },
      title: {
        color: '#ffffffff',
        staticText: 'Payment',
        showPageTitle: true
      },
      customButtons: [{
        wwwImage: 'assets/icon/back_button.png',
        wwwImagePressed: 'assets/icon/back_button.png',
        align: 'left',
        event: 'backPressed'
      }]
    };
  }
  onMuteClick(event) {
    event.stopPropagation();
    this.toggleMute();
  }
  onCloseClick(event) {
    event.stopPropagation();
    this.closeModal();
  }
  toggleMute() {
    this.isMuted = !this.isMuted;
  }
  closeModal() {
    if (this.promotional_url_type == 'video') {
      const videoElement = document.getElementById('floating-video');
      videoElement.pause();
      videoElement.muted = true;
    }
    const videoContainer = document.getElementById('floating-container');
    if (videoContainer) {
      videoContainer.style.display = 'none'; // Hide the video container
    }
  }
  ngAfterViewInit() {
    const floatingContainer = document.getElementById('floating-container');
    // console.log('Floating Container:', floatingContainer);
    // const floatingContainer = document.getElementById('floating-container');
    const muteButton = document.getElementById('mute-btn');
    const closeButton = document.getElementById('close-btn');
    if (floatingContainer) {
      // Get ion-content dimensions dynamically
      muteButton === null || muteButton === void 0 || muteButton.addEventListener('mousedown', e => e.stopPropagation());
      muteButton === null || muteButton === void 0 || muteButton.addEventListener('touchstart', e => e.stopPropagation());
      closeButton === null || closeButton === void 0 || closeButton.addEventListener('mousedown', e => e.stopPropagation());
      closeButton === null || closeButton === void 0 || closeButton.addEventListener('touchstart', e => e.stopPropagation());
      const ionContent = document.querySelector('ion-content');
      const contentRect = ionContent.getBoundingClientRect(); // Get the bounding rectangle of ion-content
      // Use the content's dimensions for containment
      const draggie = new Draggabilly(floatingContainer, {
        containment: {
          top: 0,
          left: 0,
          bottom: contentRect.height - floatingContainer.offsetHeight,
          // Contain within the bottom of ion-content
          right: contentRect.width - floatingContainer.offsetWidth // Contain within the right of ion-content
        }
      });
      // Debug drag move
      draggie.on('dragMove', (event, pointer, moveVector) => {
        // console.log('Dragging...', event, pointer, moveVector); // Logs all drag events
      });
      // Debug when drag ends
      draggie.on('dragEnd', () => {
        // console.log('Drag Ended');
      });
    } else {
      console.log('Floating container not found!');
    }
  }
  ngOnInit() {
    setTimeout(() => {
      this.showCloseButton = true;
    }, 3000);
    this.commonStorage.localRemove('selectedSeat');
    this.commonStorage.localRemove('selectedSeatReturn');
    // Wait for Firebase Analytics to be ready before logging events
    this.initializeAnalytics();
    // Display FCM token after a delay for testing
    // setTimeout(() => {
    //   this.showFCMTokenForTesting();
    // }, 5000);
    this.appData.newTheme = this.util.getNewTheme();
    if (this.appData.newTheme) {
      this.hideShowOldTheme = false;
    } else {
      this.hideShowOldTheme = true;
    }
    this.commonService.removeGlobalData();
    this.metaData = this.commonStorage.getItem('metaData');
    if (this.metaData.msiteFolder == 'ourbustheme') {
      const storedPassengerCount = this.commonStorage.localGet("ourbusPassengerCount");
      this.passengerCount = storedPassengerCount ? storedPassengerCount : 1;
      this.formattedPassengerCount = this.passengerCount.toString().padStart(2, '0');
    } else {
      this.commonStorage.localRemove("ourbusPassengerCount");
    }
    setTimeout(() => {
      this.metaData = this.commonStorage.getItem('metaData');
      this.app_promotion = this.metaData && this.metaData.app_promotion && this.metaData.app_promotion != '' ? this.metaData.app_promotion : '';
      this.promotional_url = this.app_promotion.url && this.app_promotion.url != '' ? this.app_promotion.url : '';
      this.promotional_url_type = this.app_promotion.type && this.app_promotion.type != '' ? this.app_promotion.type : '';
      if (this.promotional_url === '') {
        this.showFloatingContainer = false;
      } else {
        this.showFloatingContainer = true;
      }
    }, 1000);
    this.callRecentSearch();
  }
  // Initialize Firebase Analytics and log initial events
  initializeAnalytics() {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this.firebaseAnalyticsService.ensureInitialized();
        const isReady = yield _this.firebaseAnalyticsService.isAnalyticsReady();
        if (isReady) {
          _this.firebaseAnalyticsService.logCustomEvent('home', {
            page: 'home page'
          });
          // alert('homeioandroid_test');
          // this.firebaseAnalyticsService.logCustomEvent('homeandroid99', { page: 'home page' });
          // alert('homeioandroid');
          // this.firebaseAnalyticsService.logCustomEvent('homeios99', { page: 'home page' });
        } else {
          console.warn('Firebase Analytics is not ready, skipping initial events');
        }
      } catch (error) {
        console.error('Error initializing analytics:', error);
      }
    })();
  }
  // Method to display FCM token for testing - call this from browser console or add a button
  // async showFCMTokenForTesting() {
  //   await this.notificationTestService.displayFullTokenForTesting();
  // }
  generateNextFiveDates(startDate) {
    this.nextFiveDates = [];
    for (let i = 0; i <= 4; i++) {
      const nextDate = new Date(startDate);
      nextDate.setDate(startDate.getDate() + i);
      this.nextFiveDates.push(nextDate.toISOString());
    }
  }
  getDate(date) {
    let e_date = new Date(date);
    return e_date.getDate();
  }
  getDay(date) {
    let day;
    let e_date = new Date(date).getDay();
    if (e_date == 0) {
      day = 'Sun';
    } else if (e_date == 1) {
      day = 'Mon';
    } else if (e_date == 2) {
      day = 'Tue';
    } else if (e_date == 3) {
      day = 'Wed';
    } else if (e_date == 4) {
      day = 'Thu';
    } else if (e_date == 5) {
      day = 'Fri';
    } else {
      day = 'Sat';
    }
    const today = new Date();
    const inputDate = new Date(date);
    if (today.getDate() === inputDate.getDate() && today.getMonth() === inputDate.getMonth() && today.getFullYear() === inputDate.getFullYear()) {
      day = 'Today';
    }
    return day;
  }
  get sbGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) {
      return 'Good morning';
    }
    return hour < 17 ? 'Good afternoon' : 'Good evening';
  }
  radioGroupChange(e) {}
  getClickDate(getSelectedDate) {
    const today = new Date(getSelectedDate);
    const getDay = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(today, "dd-MM-yyyy");
    const tempDate = this.dateService.getDateObjFromDateStr(getDay, this.commonService.checkDateFormat(), "yyyy-mm-dd");
    this.globalData.DEPARTURE_DATE = tempDate;
    this.globalData.DEPARTURE_DATE.formattedDate = getDay;
    this.departureDate = tempDate;
    if (this.showRoundTripBox) {
      if (this.dateService.comparedate(this.departureDate, this.departureDateReturn)) {
        this.departureDateReturn = this.dateService.getNextPrevDate(this.departureDate, 1);
        this.globalData.DEPARTURE_DATE_RETURN = this.departureDateReturn;
        this.commonStorage.setItem('travelDateReturn', this.departureDateReturn);
      }
    }
  }
  getCurrentLocation() {
    _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_2__.Geolocation.getCurrentPosition().then(resp => {
      // Extract latitude and longitude from the response
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      // Get the city name or perform any other logic with the location
      this.getCityName(this.latitude, this.longitude);
    }).catch(error => {
      // Handle the error (e.g., user denied location, no GPS available, etc.)
      console.error('Error getting location', error);
    });
  }
  getCityName(lat, lng) {
    this.getCityName1(lat, lng).subscribe(response => {
      if (response.address && response.address.city) {
        this.city = response.address.city;
      } else if (response.address && response.address.town) {
        this.city = response.address.town;
      } else if (response.address && response.address.village) {
        this.city = response.address.village;
      } else if (response.address && response.address.state_district) {
        this.city = response.address.state_district;
      } else {
        this.city = 'City not found';
      }
      let currentLocation = this.getCityFromLocation(this.city);
      if (currentLocation) {
        this.searchData.originCity = {};
        this.searchData.originCity['name'] = currentLocation.name;
        this.searchData.originCity['id'] = currentLocation.id;
        if (this.searchData.originCity['id'] == this.searchData.destCity['id']) {
          this.searchData.destCity = {};
          this.searchData.destCity['name'] = 'TO';
        }
      }
    }, error => {
      this.city = 'Error getting city name';
    });
  }
  normalizeCityName(city) {
    switch (city.toLowerCase()) {
      case 'bengaluru':
      case 'bengaluru urban':
        return 'bangalore';
      default:
        return city.toLowerCase();
    }
  }
  getCityFromLocation(location) {
    let originFound = this.commonStorage.getItem('origins');
    const normalizedLocation = this.normalizeCityName(location);
    return originFound.find(city => city.name.toLowerCase() === normalizedLocation);
  }
  getCityName1(lat, lng) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;
    return this.http.get(url);
  }
  returnFormattedDate(dateStr) {
    const [day, month, year] = dateStr.split('-');
    const dateObj = new Date(+year, +month - 1, +day);
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(dateObj, 'MMM dd');
  }
  clearReturnDate() {
    this.departureDateReturn = {};
    this.globalData.DEPARTURE_DATE_RETURN = this.departureDateReturn;
    this.commonStorage.localSet('travelDateReturn', this.departureDateReturn);
  }
  loadPersonalData() {
    this.apiFactory.getprofileData().subscribe(resultData => {
      // this.profileDataGet = resultData;
      // this.photo = this.profileDataGet ? this.profileDataGet.profile_pic : "";
      this.commonStorage.localSet('alldata', resultData);
      this.username = resultData && resultData.first_name ? resultData.first_name : '';
      this.commonStorage.localSet('statedata', resultData.nationality_id);
      this.commonStorage.localSet('forcitydata', resultData.state_code);
      this.commonStorage.localSet('cityId', resultData.city_id);
    }, err => {});
  }
  ionViewWillEnter() {
    var _this2 = this;
    this.loadPersonalData();
    if (this.authenticate.isLoggedIn()) {
      this.username = this.commonStorage.localGet('alldata') && this.commonStorage.localGet('alldata').first_name ? this.commonStorage.localGet('alldata').first_name : '';
      this.getWalletDetails();
    }
    this.commonService.setGloblaData();
    // this.commonService.gTrack('Home', 'Home page is displayed')
    this.authenticate.setRecentSearch();
    if (this.commonStorage.getItem("metaData")) {
      var _this$commonStorage$g;
      this.allowPackageRequest = this.commonStorage.getItem("metaData").allowPackageRequest;
      this.isRecentSearches = this.commonStorage.getItem("metaData").isRecentSearches;
      this.backgroundImage = this.commonStorage.getItem("metaData").backgroundImage;
      this.logo = this.commonStorage.getItem("metaData").mobileHomeLogo ? this.commonStorage.getItem("metaData").mobileHomeLogo : this.commonStorage.getItem("metaData").headerLogo;
      this.centerLogo = this.commonStorage.getItem("metaData").mobileHomeLogoCenter ? this.commonStorage.getItem("metaData").mobileHomeLogoCenter : this.commonStorage.getItem("metaData").headerLogo;
      this.hideBusTicketText = this.commonStorage.getItem("metaData").hideTextHome;
      this.hideHomeBgColor = this.commonStorage.getItem("metaData").hideHomeBgColor;
      this.showWhatsAppOption = this.commonStorage.getItem("metaData").show_whatsapp_chat_in_public;
      this.isRoundTrip = this.commonStorage.getItem("metaData") ? this.commonStorage.getItem("metaData").isRoundTrip : false;
      this.showRoundTripBox = this.isRoundTrip;
      this.offerPages = this.commonStorage.getItem("metaData") ? this.commonStorage.getItem("metaData").offerPages : [];
      this.offerPagesMobweb = this.commonStorage.getItem("metaData") && ((_this$commonStorage$g = this.commonStorage.getItem("metaData").offerPagesMobweb) === null || _this$commonStorage$g === void 0 ? void 0 : _this$commonStorage$g.length) > 0 ? this.commonStorage.getItem("metaData").offerPagesMobweb : [];
      this.callRecentSearch();
      this.advance_booking_days = this.commonStorage.getItem("metaData").advance_booking_days;
    }
    this.commonService.removeGlobalData();
    var lastTimeBackPress = 0;
    var timePeriodToExit = 2000;
    this.subscription = this.platform.backButton.subscribe(/*#__PURE__*/(0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //Double check to exit app
      if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
        _capacitor_app__WEBPACK_IMPORTED_MODULE_4__.App.exitApp(); //Exit from app
      } else {
        _this2.util.showToast("Press back again to exit App");
        lastTimeBackPress = new Date().getTime();
      }
    }));
  }
  ionViewDidEnter() {
    this.commonService.removeGlobalData();
    if (this.metaData.msiteFolder == 'ourbustheme') {
      this.globalData.DEPARTURE_DATE_RETURN = {};
      this.departureDateReturn = {};
    }
    if (localStorage.getItem('whatsappPrefilledData') != null) {
      var prefilledOriDesti = JSON.parse(localStorage.getItem('whatsappPrefilledData') || '');
      this.searchData.originCity = {};
      this.searchData.originCity['name'] = prefilledOriDesti.origin_name;
      this.searchData.originCity['id'] = prefilledOriDesti.origin_id;
      this.searchData.destCity = {};
      this.searchData.destCity['name'] = prefilledOriDesti.destination_name;
      this.searchData.destCity['id'] = prefilledOriDesti.destination_id;
      localStorage.removeItem('whatsappPrefilledData');
    } else {}
  }
  ionViewDidLeave() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  ionViewWillLeave() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.observableVar) {
      this.observableVar.unsubscribe();
    }
  }
  callRecentSearch() {
    if (this.authenticate.isLoggedIn()) {
      this.apiFactory.getRecentSearch().subscribe(res => {
        var _res$recent_search;
        if (((_res$recent_search = res.recent_search) === null || _res$recent_search === void 0 ? void 0 : _res$recent_search.length) > 0) {
          this.recentOrigin = res.recent_search[0].origin_name;
          this.recentDesti = res.recent_search[0].dest_name;
          this.recentOriginId = JSON.stringify(res.recent_search[0].origin_id);
          this.recentDestiId = JSON.stringify(res.recent_search[0].dest_id);
          const origin = this.commonStorage.localGet('origin');
          const destination = this.commonStorage.localGet('destination');
          if (origin && Object.keys(origin).length != 0 && destination && Object.keys(destination).length != 0) {
            this.searchData.originCity = {
              name: origin.name,
              id: origin.id
            };
            this.searchData.destCity = {
              name: destination.name,
              id: destination.id
            };
          } else {
            this.searchData.originCity = {
              name: this.recentOrigin,
              id: res.recent_search[0].origin_id
            };
            this.searchData.destCity = {
              name: this.recentDesti,
              id: res.recent_search[0].dest_id
            };
          }
          this.globalData.RECENT_SEARCH = res.recent_search ? res.recent_search : [];
          this.recentSearches = this.globalData.RECENT_SEARCH ? this.globalData.RECENT_SEARCH : [];
          for (var i = 0; i < this.recentSearches.length; i++) {
            let x = this.recentSearches[i].search_time.substr(0, 10);
            this.recentSearches[i].date = this.dateService.getDateObjFromDateStr(x, this.commonService.checkDateFormat(), "yyyy-mm-dd");
          }
        }
      }, err => {});
    } else {
      const origin = this.commonStorage.localGet('origin');
      const destination = this.commonStorage.localGet('destination');
      if (origin && Object.keys(origin).length != 0 && destination && Object.keys(destination).length != 0) {
        this.searchData.originCity = {
          name: origin.name,
          id: origin.id
        };
        this.searchData.destCity = {
          name: destination.name,
          id: destination.id
        };
      } else {
        this.recentSearches = this.commonStorage.localGet('recent-search-offline') ? this.commonStorage.localGet('recent-search-offline') : [];
        this.searchData.originCity = '';
        this.searchData.destCity = '';
      }
      // this.recentSearches = [];
    }
  }
  changedateformat(date) {
    if (date && date != undefined && date != null && date != '') {
      var r = this.dateService.getDateObjFromDateStr(date, this.commonService.checkDateFormat(), "yyyy-mm-dd");
      if (r.dayName != undefined && r.dayName != null && r.dayName != '') {
        if (this.metaData.msiteFolder == 'shyamolitheme') {
          return r.day + "-" + r.monthNameShort + "-" + r.year + ", " + r.dayName;
        } else {
          return r.dayName + ", " + r.day + " " + r.monthName + " " + r.year;
        }
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
  getDeals() {
    if (!this.util.checkConnection()) {
      return; // Simply return if no connection
    }
    this.apiFactory.getDeals().subscribe(result => {
      let deals = {
        offerCoupon: [],
        promoCoupon: []
      };
      if (result["Offer Coupons"]) {
        deals.offerCoupon = result["Offer Coupons"];
      }
      if (result["Promotion Coupons"]) {
        deals.promoCoupon = result["Promotion Coupons"];
      }
      this.commonStorage.setItem('deals', deals);
      this.commonStorage.localSet('deals', deals);
    }, error => {
      console.error('Error fetching deals', error);
    });
  }
  originCityModal() {
    var _this3 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3.modalController.create({
        component: _cities_modal_cities_modal_page__WEBPACK_IMPORTED_MODULE_6__.CitiesModalPage,
        componentProps: {
          "name": 'origins',
          "list": 1
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      _this3.searchData.originCity = data;
      if (data) {
        _this3.commonStorage.setItem('travelDestination', null);
        _this3.searchData.destCity = null;
      } else if (_this3.recentOriginId && _this3.recentOrigin) {
        _this3.searchData.originCity = {
          id: _this3.recentOriginId,
          name: _this3.recentOrigin
        };
        _this3.searchData.destCity = {
          name: _this3.recentDesti,
          id: _this3.recentDestiId
        };
      } else {
        _this3.searchData.destCity = null;
        _this3.searchData.destCity = null;
      }
      _this3.commonStorage.setItem('travelOrigin', _this3.searchData.originCity);
    })();
  }
  destCityModal() {
    var _this4 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.searchData.originCity || _this4.recentOrigin) {
        const modal = yield _this4.modalController.create({
          component: _cities_modal_cities_modal_page__WEBPACK_IMPORTED_MODULE_6__.CitiesModalPage,
          componentProps: {
            "name": 'destinations',
            "list": 2,
            "originId": _this4.searchData.originCity.id ? _this4.searchData.originCity.id : _this4.recentOriginId
          }
        });
        yield modal.present();
        const {
          data
        } = yield modal.onDidDismiss();
        _this4.searchData.destCity = data;
        _this4.commonStorage.setItem('travelDestination', _this4.searchData.destCity);
      } else {
        _this4.util.showToast('Select Origin City');
      }
    })();
  }
  departureDateModal(type) {
    var _this5 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _this5$metaData, _this5$searchData, _this5$searchData2;
      let modal = yield _this5.modalController.create({
        component: _calendar_modal_calendar_modal_page__WEBPACK_IMPORTED_MODULE_5__.CalendarModalPage,
        componentProps: {
          departureDate: _this5.departureDate,
          showPastDate: false,
          title: type == 1 ? 'Select Onward Date' : "Select Return Date",
          sbRoute: ((_this5$metaData = _this5.metaData) === null || _this5$metaData === void 0 ? void 0 : _this5$metaData.msiteFolder) === 'seabirdThemeNew' && (_this5$searchData = _this5.searchData) !== null && _this5$searchData !== void 0 && (_this5$searchData = _this5$searchData.originCity) !== null && _this5$searchData !== void 0 && _this5$searchData.name && (_this5$searchData2 = _this5.searchData) !== null && _this5$searchData2 !== void 0 && (_this5$searchData2 = _this5$searchData2.destCity) !== null && _this5$searchData2 !== void 0 && _this5$searchData2.name ? _this5.searchData.originCity.name + ' → ' + _this5.searchData.destCity.name : '',
          departureDateReturn: _this5.departureDateReturn,
          maxDateSelection: _this5.dateService.getAdvanceDate(_this5.advance_booking_days),
          type: type
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if (data) {
        if (type == 1) {
          _this5.departureDate = data;
          _this5.globalData.DEPARTURE_DATE = _this5.departureDate;
          _this5.tomorrowdateget = _this5.dateService.getNextPrevDate(_this5.departureDate, 1);
          _this5.yesterdayDateget = _this5.dateService.getNextPrevDate(_this5.departureDate, -1);
          _this5.commonStorage.setItem('travelDate', _this5.departureDate);
          if (_this5.showRoundTripBox) {
            if (_this5.dateService.comparedate(_this5.departureDate, _this5.departureDateReturn)) {
              _this5.departureDateReturn = _this5.dateService.getNextPrevDate(_this5.departureDate, 1);
              _this5.globalData.DEPARTURE_DATE_RETURN = _this5.departureDateReturn;
              _this5.commonStorage.setItem('travelDateReturn', _this5.departureDateReturn);
            } else {}
          }
        } else {
          _this5.departureDateReturn = data;
          _this5.globalData.DEPARTURE_DATE_RETURN = _this5.departureDateReturn;
          _this5.commonStorage.setItem('travelDateReturn', data);
        }
      }
    })();
  }
  search() {
    this.firebaseAnalyticsService.logCustomEvent('search_button_click', {
      page: 'home page'
    });
    if (this.searchData.destCity && this.searchData.originCity) {
      this.globalData.SEARCH_DATA = this.searchData;
      let s = [];
      s.push({
        'originCity': this.searchData.originCity
      });
      s.push({
        'destCity': this.searchData.destCity
      });
      this.commonStorage.localSet("onward", s);
      this.commonStorage.localSet("origin", this.searchData.originCity);
      this.commonStorage.localSet("destination", this.searchData.destCity);
      this.commonStorage.localSet("travelDate", this.globalData.DEPARTURE_DATE);
      this.commonStorage.setItem('travelDate', this.globalData.DEPARTURE_DATE);
      this.commonStorage.localSet("travelDateReturn", this.globalData.DEPARTURE_DATE_RETURN ? this.globalData.DEPARTURE_DATE_RETURN : null);
      this.commonStorage.setItem("travelDateReturn", this.globalData.DEPARTURE_DATE_RETURN ? this.globalData.DEPARTURE_DATE_RETURN : null);
      this.shyamoli_triptype = !this.departureDateReturn.formattedDate ? 'oneway' : this.shyamoli_triptype;
      this.rememberTripChoice = this.metaData.msiteFolder == 'shyamolitheme' ? this.shyamoli_triptype : this.selectedTripSegment;
      this.commonStorage.localSet("selectedTripSegment", this.rememberTripChoice);
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
      this.commonStorage.setItem('selectedTripSegment', this.rememberTripChoice);
      if (this.globalData.DEPARTURE_DATE_RETURN && this.globalData.DEPARTURE_DATE_RETURN.formattedDate) {
        // this.commonService.gTrack('tripSearch', 'searching 1way trips(services) in Home page')
      } else {
        // this.commonService.gTrack('tripSearch', 'searching round trips(services) in Home page')
      }
      if (this.metaData.msiteFolder == 'ourbustheme') {
        this.commonStorage.localSet("ourbusPassengerCount", this.formattedPassengerCount);
        if (this.selectedTripSegment == 'twoway' && !this.departureDateReturn.formattedDate) {
          this.util.showToast('Please select Return date');
        } else {
          let data = {
            "drop_stop_name": this.searchData.destCity.name,
            "pick_stop_name": this.searchData.originCity.name,
            "departure_date": this.globalData.DEPARTURE_DATE.formattedDate,
            "return_date": this.globalData.DEPARTURE_DATE_RETURN && Object.keys(this.globalData.DEPARTURE_DATE_RETURN).length === 0 ? "Not selected" : this.globalData.DEPARTURE_DATE_RETURN.formattedDate,
            "is_serviced_departure": this.selectedTripSegment == 'oneway' ? true : false,
            "is_serviced_return": this.selectedTripSegment == 'twoway' ? true : false,
            "passenger_count": this.passengerCount
          };
          this.util.cleverTapEvent('search_routes', data);
          this.commonStorage.localRemove('onwardSelect');
          this.navCtrl.navigateForward('available-routes');
        }
      } else {
        this.commonStorage.localSet("FromHomePage", true);
        this.commonStorage.localRemove('onwardSelect');
        this.navCtrl.navigateForward('available-routes');
      }
    }
    if (!this.searchData.destCity && !this.searchData.originCity && !this.recentOrigin && !this.recentDesti) {
      this.util.showToast('Select Origin and Destination cities');
    } else if (!this.searchData.originCity && !this.recentOrigin) {
      this.util.showToast('Select Origin City');
    } else if (!this.searchData.destCity && !this.recentDesti) {
      this.util.showToast('Select Destination City');
    }
  }
  openImage(image) {
    this.image = image.thumbnail_image_url;
    if (image.action_url && image.action_url.length > 0) {
      window.open(image.action_url, '_self', 'location=yes');
    } else {
      this.viewImagePopup = true;
    }
  }
  openImage1(image) {
    var _this6 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.image = image;
      _this6.viewImagePopup = true;
    })();
  }
  today() {
    this.commonStorage.localSet("origin", this.searchData.originCity);
    this.commonStorage.localSet("destination", this.searchData.destCity);
    this.departureDate = this.dateService.getToday();
    this.commonStorage.setItem('travelDate', this.departureDate);
    this.globalData.DEPARTURE_DATE = this.departureDate;
    this.commonStorage.localSet("travelDate", this.globalData.DEPARTURE_DATE);
    this.globalData.SEARCH_DATA = this.searchData;
    if (this.searchData.originCity && this.searchData.destCity) {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
      if (this.globalData.DEPARTURE_DATE_RETURN && this.globalData.DEPARTURE_DATE_RETURN.formattedDate) {
        // this.commonService.gTrack('tripSearch', 'searching 1way trips(services) in Home page')
      } else {
        // this.commonService.gTrack('tripSearch', 'searching round trips(services) in Home page')
      }
      this.commonStorage.localRemove('onwardSelect');
      this.navCtrl.navigateForward('available-routes');
    }
    if (!this.searchData.destCity && !this.searchData.originCity) {
      this.util.showToast('Select Origin and Destination cities');
    } else if (!this.searchData.originCity) {
      this.util.showToast('Select Origin City');
    } else if (!this.searchData.destCity) {
      this.util.showToast('Select Destination City');
    }
  }
  tomorrow() {
    this.commonStorage.localSet("origin", this.searchData.originCity);
    this.commonStorage.localSet("destination", this.searchData.destCity);
    this.globalData.DEPARTURE_DATE_RETURN = {};
    this.departureDateReturn = {};
    this.departureDate = this.dateService.getTomorrow();
    this.commonStorage.setItem('travelDate', this.departureDate);
    this.globalData.DEPARTURE_DATE = this.departureDate;
    this.globalData.SEARCH_DATA = this.searchData;
    this.commonStorage.localSet("travelDate", this.globalData.DEPARTURE_DATE);
    if (this.searchData.originCity && this.searchData.destCity) {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
      if (this.globalData.DEPARTURE_DATE_RETURN && this.globalData.DEPARTURE_DATE_RETURN.formattedDate) {
        // this.commonService.gTrack('tripSearch', 'searching 1way trips(services) in Home page')
      } else {
        // this.commonService.gTrack('tripSearch', 'searching round trips(services) in Home page')
      }
      this.commonStorage.localRemove('onwardSelect');
      this.navCtrl.navigateForward('available-routes');
    }
    if (!this.searchData.destCity && !this.searchData.originCity) {
      this.util.showToast('Select Origin and Destination cities');
    } else if (!this.searchData.originCity) {
      this.util.showToast('Select Origin City');
    } else if (!this.searchData.destCity) {
      this.util.showToast('Select Destination City');
    }
  }
  today_shyamoli(date = this.globalData.DEPARTURE_DATE) {
    if (!this.searchData.destCity && !this.searchData.originCity) {
      this.util.showToast('Select Origin and Destination cities');
      return;
    } else if (!this.searchData.originCity) {
      this.util.showToast('Select Origin City');
      return;
    } else if (!this.searchData.destCity) {
      this.util.showToast('Select Destination City');
      return;
    }
    this.commonStorage.localSet("origin", this.searchData.originCity);
    this.commonStorage.localSet("destination", this.searchData.destCity);
    // this.departureDate = this.dateService.getToday();
    // this.departureDate = ;
    this.commonStorage.setItem('travelDate', date);
    this.globalData.DEPARTURE_DATE = date;
    this.yesterdayDateget = this.dateService.getNextPrevDate(this.globalData.DEPARTURE_DATE, -1);
    this.commonStorage.localSet("travelDate", this.globalData.DEPARTURE_DATE);
    this.globalData.SEARCH_DATA = this.searchData;
    if (this.metaData.msiteFolder == 'shyamolitheme') {
      if (!this.departureDateReturn.formattedDate) {
        this.commonStorage.localSet("selectedTripSegment", 'oneway');
      } else {
        this.commonStorage.localSet("selectedTripSegment", 'roundtrip');
      }
    }
    if (this.searchData.originCity && this.searchData.destCity) {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
      if (this.globalData.DEPARTURE_DATE_RETURN && this.globalData.DEPARTURE_DATE_RETURN.formattedDate) {
        // this.commonService.gTrack('tripSearch', 'searching 1way trips(services) in Home page')
      } else {
        // this.commonService.gTrack('tripSearch', 'searching round trips(services) in Home page')
      }
      this.commonStorage.localRemove('onwardSelect');
      this.navCtrl.navigateForward('available-routes');
    }
  }
  tomorrow_shyamoli(date = this.tomorrowdateget) {
    if (!this.searchData.destCity && !this.searchData.originCity) {
      this.util.showToast('Select Origin and Destination cities');
      return;
    } else if (!this.searchData.originCity) {
      this.util.showToast('Select Origin City');
      return;
    } else if (!this.searchData.destCity) {
      this.util.showToast('Select Destination City');
      return;
    }
    this.commonStorage.localSet("origin", this.searchData.originCity);
    this.commonStorage.localSet("destination", this.searchData.destCity);
    this.globalData.DEPARTURE_DATE_RETURN = {};
    this.departureDateReturn = {};
    // this.departureDate = this.dateService.getTomorrow();
    this.departureDate = this.tomorrowdateget;
    this.globalData.DEPARTURE_DATE = date;
    this.yesterdayDateget = this.dateService.getNextPrevDate(this.globalData.DEPARTURE_DATE, -1);
    this.globalData.SEARCH_DATA = this.searchData;
    this.commonStorage.localSet("travelDate", this.globalData.DEPARTURE_DATE);
    this.commonStorage.localSet('selectedTripSegment', 'oneway');
    if (this.searchData.originCity && this.searchData.destCity) {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
      if (this.globalData.DEPARTURE_DATE_RETURN && this.globalData.DEPARTURE_DATE_RETURN.formattedDate) {
        // this.commonService.gTrack('tripSearch', 'searching 1way trips(services) in Home page')
      } else {
        // this.commonService.gTrack('tripSearch', 'searching round trips(services) in Home page')
      }
      this.commonStorage.localRemove('onwardSelect');
      this.navCtrl.navigateForward('available-routes');
    }
  }
  reverse() {
    this.isRotating = true;
    setTimeout(() => {
      this.isRotating = false;
    }, 300);
    if (this.searchData.destCity) {
      var a = this.searchData.originCity;
      this.searchData.originCity = this.searchData.destCity;
      this.globalData.SEARCH_DATA.originCity = this.searchData.destCity;
      this.searchData.destCity = a;
      this.globalData.SEARCH_DATA.destCity = a;
      this.isRotated = !this.isRotated;
    }
    this.shadow = true;
    setTimeout(() => {
      this.shadow = false;
    }, 300);
  }
  bookNow(r) {
    this.globalData.SEARCH_DATA.originCity = {
      id: r.origin_id,
      name: r.origin_name
    };
    this.globalData.SEARCH_DATA.destCity = {
      id: r.dest_id,
      name: r.dest_name
    };
    this.commonStorage.localSet("origin", this.globalData.SEARCH_DATA.originCity);
    this.commonStorage.localSet("destination", this.globalData.SEARCH_DATA.destCity);
    this.searchData = this.globalData.SEARCH_DATA;
    this.commonStorage.setItem('travelOrigin', this.searchData.originCity);
    this.commonStorage.setItem('travelDestination', this.searchData.destCity);
    // this.commonService.gTrack('tripSearch', 'Searching trip from recent search results')
    this.today();
  }
  getWhatsappConfig() {
    this.apiFactory.getWhatsappConfig().subscribe(res => {
      var _this$whatsappJson;
      this.startTime();
      this.observableVar = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.interval)(10000).subscribe(() => {
        this.startTime();
      });
      this.whatsappJson = res;
      if (((_this$whatsappJson = this.whatsappJson) === null || _this$whatsappJson === void 0 || (_this$whatsappJson = _this$whatsappJson.contact_configuration) === null || _this$whatsappJson === void 0 ? void 0 : _this$whatsappJson.length) > 0) {
        var _this$whatsappJson2;
        this.selectedOption = (_this$whatsappJson2 = this.whatsappJson) === null || _this$whatsappJson2 === void 0 || (_this$whatsappJson2 = _this$whatsappJson2.contact_configuration[0]) === null || _this$whatsappJson2 === void 0 ? void 0 : _this$whatsappJson2.query;
      }
    }, err => {});
  }
  openWhatsappChat() {
    this.whatsAppPopup = !this.whatsAppPopup;
  }
  closeWhatsappChatOurBus() {
    this.whatsAppPopup = !this.whatsAppPopup;
  }
  gotoBrowse() {
    let phoneNm = '';
    if (this.selectedOption) {
      for (let i = 0; i < this.whatsappJson.contact_configuration.length; i++) {
        if (this.whatsappJson.contact_configuration[i].query === this.selectedOption) {
          phoneNm = this.whatsappJson.contact_configuration[i].shift_configuration[0].contact_number;
          break;
        }
      }
      if (phoneNm) {
        if (this.appData.isIOS) {
          const url = `https://api.whatsapp.com/send?phone=+${phoneNm}`;
          window.location.href = url;
          this.whatsAppPopup = !this.whatsAppPopup;
        } else {
          const url = `https://wa.me/${phoneNm}?text=`;
          this.iab.create(url, '_system', 'location=yes');
          this.whatsAppPopup = !this.whatsAppPopup;
        }
      } else {
        this.util.showToast('No phone number found for this query');
      }
    } else {
      this.util.showToast('Select query');
    }
  }
  showValue() {}
  checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = this.checkTime(m);
    s = this.checkTime(s);
    this.currentTime = h + ":" + m;
  }
  checkWebOption() {
    if (this.whatsappJson && this.whatsappJson.chat_configuration && this.whatsappJson.chat_configuration.chat_source.length > 0 && this.whatsappJson.chat_configuration.chat_source.indexOf("mobile_web") != -1) {
      return true;
    } else {
      return false;
    }
  }
  zoom(zoomIn) {
    // let zoom = this.slider.nativeElement.swiper.zoom;
    // if (zoomIn) {
    //   zoom.in();
    // } else {
    //   zoom.out();
    // }
  }
  close() {
    this.modalCtrl.dismiss();
  }
  bushire(title) {
    let navigationExtras = {
      queryParams: {
        title: title
      }
    };
    this.navCtrl.navigateForward('bus-hire', navigationExtras);
  }
  downloadApp() {
    if (this.util.platformName() == 'IOS') {
      window.open(this.commonStorage.getItem('metaData').iosUrl);
    }
    if (this.util.platformName() == 'Android') {
      window.open(this.commonStorage.getItem('metaData').androidUrl);
    }
  }
  wallet() {
    this.navCtrl.navigateRoot('wallet', {
      state: {
        previousUrl: this.router.url
      }
    });
  }
  cbus_logIn() {
    this.router.navigate(['login']);
  }
  startAutoSlide(event) {
    // this.slides2.startAutoplay();
  }
  getWalletDetails() {
    this.metaData = this.commonStorage.getItem('metaData');
    this.currencySym = this.commonStorage.getItem('metaData').currencySym;
    this.apiFactory.getWalletBalance().subscribe(res => {
      if (res.success) {
        this.balance = res.body.balance.toFixed(2);
        this.promobalance = res.body.promotional_balance.toFixed(2);
        this.walletbalance = this.metaData.is_wallet_promotional ? parseFloat(this.balance) + parseFloat(this.promobalance) : parseFloat(this.balance);
      }
    }, err => {
      // this.loader.hideLoadingDefault();
    });
  }
  extractLast10Digits(numberString) {
    // Use a regular expression to match the last 10 digits
    const matches = numberString.match(/\d{10}$/);
    if (matches) {
      // If matches are found, return the matched digits
      return matches[0];
    } else {
      // If no matches are found, return an empty string or handle the error as needed
      return '';
    }
  }
  incrementValue() {
    if (this.passengerCount < this.metaData.maxSeatsAllowedToBook) {
      this.passengerCount++;
      this.formattedPassengerCount = this.passengerCount.toString().padStart(2, '0');
    }
  }
  decrementValue() {
    if (this.passengerCount > 1) {
      this.passengerCount--;
      this.formattedPassengerCount = this.passengerCount.toString().padStart(2, '0');
    }
  }
  goToContactUsPage() {
    this.router.navigate(['/contact-us']);
  }
  navigateToTrackingo() {
    var link = document.createElement('a');
    link.href = this.trackingoUrl;
    link.target = '_blank';
    link.click();
  }
  toggleModifyTicket() {
    let navigationExtras = {
      queryParams: {
        title: "Download Ticket",
        from_book_page: false
      }
    };
    this.navCtrl.navigateForward('update-ticket', navigationExtras);
  }
  toggleModifyTicket1() {
    let navigationExtras = {
      queryParams: {
        title: "View Ticket",
        from_book_page: false
      }
    };
    this.navCtrl.navigateForward('update-ticket', navigationExtras);
  }
  openCustom(type) {
    var _this7 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this7.isModalOpen) return; // Prevent multiple modal openings
      _this7.isModalOpen = true; // Set the flag to true when opening the modal
      try {
        let modal = yield _this7.modalController.create({
          component: _custom_ourbus_calender_custom_ourbus_calender_page__WEBPACK_IMPORTED_MODULE_7__.CustomOurbusCalenderPage,
          componentProps: {
            departureDate: _this7.globalData.DEPARTURE_DATE,
            title: type == 1 ? 'Select Onward Date' : "Select Return Date",
            type: type,
            selectedTripSegment: _this7.selectedTripSegment,
            departureDateReturn: _this7.departureDateReturn
          }
        });
        // :
        yield modal.present();
        const {
          data
        } = yield modal.onDidDismiss();
        if (data) {
          const handleDateSelection = date => {
            const formattedDate = _this7.dateService.formattedDateData(date);
            _this7.departureDate = formattedDate;
            _this7.globalData.DEPARTURE_DATE = _this7.departureDate;
            _this7.commonStorage.setItem('travelDate', _this7.departureDate);
            _this7.commonStorage.localSet('travelDate1', _this7.departureDate);
            if (_this7.showRoundTripBox && _this7.dateService.comparedate(_this7.departureDate, _this7.departureDateReturn)) {
              _this7.departureDateReturn = _this7.dateService.getNextPrevDate(_this7.departureDate, 1);
              _this7.globalData.DEPARTURE_DATE_RETURN = _this7.departureDateReturn;
              _this7.commonStorage.setItem('travelDateReturn', _this7.departureDateReturn);
              _this7.commonStorage.localSet('travelDateReturn1', _this7.departureDateReturn);
            }
          };
          if (type === 1) {
            const dateObj = new Date(data.start_date);
            handleDateSelection(dateObj);
            _this7.departureDateReturn = {};
            _this7.globalData.DEPARTURE_DATE_RETURN = _this7.departureDateReturn;
            _this7.commonStorage.localSet('travelDateReturn', _this7.departureDateReturn);
          } else {
            // Handle 'from' travel date
            const fromDate = new Date(data.start_date);
            handleDateSelection(fromDate);
            // Handle 'to' travel return date
            const toDate = new Date(data.end_date);
            const formattedToDate = _this7.dateService.formattedDateData(toDate);
            _this7.departureDateReturn = formattedToDate;
            _this7.globalData.DEPARTURE_DATE_RETURN = _this7.departureDateReturn;
            _this7.commonStorage.setItem('travelDateReturn', _this7.departureDateReturn);
            _this7.commonStorage.localSet('travelDateReturn1', _this7.departureDateReturn);
          }
        }
      } catch (error) {
        console.error("Error opening modal:", error);
      } finally {
        _this7.isModalOpen = false; // Reset the flag after the modal is closed
      }
    })();
  }
  clear() {
    this.departureDateReturn = {};
    this.globalData.DEPARTURE_DATE_RETURN = this.departureDateReturn;
    this.commonStorage.localSet('travelDateReturn', this.departureDateReturn);
  }
  shyamoliselectedtriptypre(type) {
    this.shyamoli_triptype = type;
    if (type == 'oneway') {
      this.clear();
    }
  }
  isTomorrow(date) {
    // date = this.dateService.getNextPrevDate(date, 1)
    if (!date.formatDate) return false;
    const d = new Date(date.formatDate);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return d.toDateString() === tomorrow.toDateString();
  }
}
_HomePage = HomePage;
_HomePage.ɵfac = function HomePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_10__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_11__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_12__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_global_data_service__WEBPACK_IMPORTED_MODULE_16__.GlobalDataService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_17__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_18__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_19__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_authentication__WEBPACK_IMPORTED_MODULE_20__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonRouterOutlet), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_21__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_22__.InAppBrowser), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_23__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_capacitor_geolocation__WEBPACK_IMPORTED_MODULE_2__.Geolocation), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_25__.FirebaseAnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AnimationController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_upi_check_service__WEBPACK_IMPORTED_MODULE_26__.UpiCheckService));
};
_HomePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: _HomePage,
  selectors: [["app-home"]],
  standalone: false,
  decls: 6,
  vars: 6,
  consts: [["radioGroup", ""], ["sbRawDate", ""], [4, "ngIf"], [1, "back-ground", "theme1", 2, "--background", "white !important", 3, "ngStyle"], ["id", "floating-container", "class", "floating-container plt-mobileweb", 3, "ngClass", 4, "ngIf"], [1, "theme_block", 3, "ngStyle"], [3, "ngClass", "ngStyle"], ["class", "cbus-row", 4, "ngIf"], [1, "search-box"], [1, "ion-activatable", "ripple-parent", 2, "--padding-start", "0px", 3, "click"], ["style", "padding-left: 16px;height: 22px;width: 22px;", "src", "./assets/icon/theme1_busicon.svg", "item-start", "", 4, "ngIf"], ["style", "padding-left: 16px;height: 22px;width: 22px;color: black;", "src", "./assets/icon/bus.svg", "item-start", "", 4, "ngIf"], ["position", "floating", "ion-button", "", 1, "txt-main"], ["ion-button", "", 3, "ngClass", 4, "ngIf"], [1, "fab-revrse", 3, "click"], ["style", "height: 49px;width: 49px;", "src", "./assets/icon/swapcbus.svg", 3, "rotate", 4, "ngIf"], ["src", "./assets/icon/leftright.svg", "alt", "", "class", "network_SWap", 3, "ngClass", 4, "ngIf"], ["style", "padding-left: 17px;padding-right: 4px;height: 18px;width: 18px;", "src", "./assets/icon/theme1_tobusicon.svg", "item-start", "", 4, "ngIf"], [1, "ion-activatable", "ripple-parent", 2, "--padding-start", "0px", "width", "100%"], ["style", "padding-left: 13px;height: 24px;width: 29px;", "src", "./assets/icon/calendercbus.svg", "item-start", "", 3, "click", 4, "ngIf"], ["style", "padding-left: 13px;height: 24px;width: 29px;", "src", "./assets/icon/calblack.svg", "item-start", "", 3, "click", 4, "ngIf"], [2, "width", "37%"], ["position", "floating", "ion-button", "", 1, "txt-main", 3, "click"], ["ion-button", "", 3, "ngClass", "click", 4, "ngIf"], [1, "getdateAlign"], [2, "padding", "0px", "margin", "0px", "border", "none", 3, "ngClass"], ["class", "cbus-today-tomorrow", 3, "click", 4, "ngIf"], ["class", "network-today-tomorrow", 3, "click", 4, "ngIf"], [2, "padding", "0px", "margin", "0px", "margin-left", "7px", "border", "none", 3, "ngClass"], ["class", "ion-activatable ripple-parent", "style", "--padding-start: 0px;", 4, "ngIf"], ["mode", "md", "mode", "md", "expand", "block", 3, "click", "ngClass"], [1, "search-txt"], ["class", "bus-hire-cbus", 4, "ngIf"], ["class", "Recent-searches", 4, "ngIf"], ["class", "Recent-searches", "style", "margin-top: 25px; margin-bottom: 0px;", 4, "ngIf"], ["class", "bus-hire", "style", "background-color: var(--iconsAndButtonsColor);", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 4, "ngIf"], ["class", "ourbustheme ourBusMain center", 4, "ngIf"], ["class", "whole center", "style", "z-index:5", 4, "ngIf"], ["id", "floating-container", 1, "floating-container", "plt-mobileweb", 3, "ngClass"], ["style", "padding: 6px;", 3, "ngClass", 4, "ngIf"], [2, "padding", "6px", 3, "ngClass"], ["id", "mute-btn", "class", "mute-btn plt-mobileweb", 3, "touchstart", 4, "ngIf"], ["id", "close-btn", "class", "close-btn plt-mobileweb", 3, "touchend", 4, "ngIf"], ["id", "floating-video", "class", "floating-video plt-mobileweb", "webkit-playsinline", "", "playsinline", "", "autoplay", "", "loop", "", 3, "muted", 4, "ngIf"], ["alt", "Promotional Image", "class", "floating-video plt-mobileweb", 3, "src", 4, "ngIf"], ["id", "mute-btn", 1, "mute-btn", "plt-mobileweb", 3, "touchstart"], [3, "name"], ["id", "close-btn", 1, "close-btn", "plt-mobileweb", 3, "touchend"], ["name", "close"], ["id", "floating-video", "webkit-playsinline", "", "playsinline", "", "autoplay", "", "loop", "", 1, "floating-video", "plt-mobileweb", 3, "muted"], ["type", "video/mp4", 3, "src"], ["alt", "Promotional Image", 1, "floating-video", "plt-mobileweb", 3, "src"], [1, "cbus-row"], ["size", "6", 1, "cbus-col"], ["alt", "", 1, "cbus-icn-main", 3, "src"], ["size", "6", "style", "text-align: end;", 4, "ngIf"], ["size", "6", 2, "text-align", "end"], ["class", "cbus-wallet btn", 3, "click", 4, "ngIf"], ["class", "themeone-wallet btn", 3, "click", 4, "ngIf"], [1, "cbus-wallet", "btn", 3, "click"], ["src", "./assets/icon/walletcbus.svg", "name", "close", "item-start", ""], [2, "color", "#fff"], [1, "themeone-wallet", "btn", 3, "click"], ["src", "./assets/icon/wallet_black.svg", "name", "close", "item-start", "", 2, "--color", "var(--primaryText)"], [2, "color", "#000"], ["class", "btn", 3, "ngClass", "click", 4, "ngIf"], [1, "btn", 3, "click", "ngClass"], ["src", "./assets/icon/login-box-line.svg", "style", "--color: var(--primaryText)", "name", "close", "item-start", "", 4, "ngIf"], ["src", "./assets/icon/login-black.svg", "item-start", "", "style", "--color: var(--primaryText);", 4, "ngIf"], ["style", "font-size: 16px;color: #fff;", 4, "ngIf"], ["style", "font-size: 16px;color: #000;", 4, "ngIf"], ["src", "./assets/icon/login-box-line.svg", "name", "close", "item-start", "", 2, "--color", "var(--primaryText)"], ["src", "./assets/icon/login-black.svg", "item-start", "", 2, "--color", "var(--primaryText)"], [2, "font-size", "16px", "color", "#fff"], [2, "font-size", "16px", "color", "#000"], ["src", "./assets/icon/theme1_busicon.svg", "item-start", "", 2, "padding-left", "16px", "height", "22px", "width", "22px"], ["src", "./assets/icon/bus.svg", "item-start", "", 2, "padding-left", "16px", "height", "22px", "width", "22px", "color", "black"], ["ion-button", "", 3, "ngClass"], ["src", "./assets/icon/swapcbus.svg", 2, "height", "49px", "width", "49px"], ["src", "./assets/icon/leftright.svg", "alt", "", 1, "network_SWap", 3, "ngClass"], ["src", "./assets/icon/theme1_tobusicon.svg", "item-start", "", 2, "padding-left", "17px", "padding-right", "4px", "height", "18px", "width", "18px"], ["src", "./assets/icon/calendercbus.svg", "item-start", "", 2, "padding-left", "13px", "height", "24px", "width", "29px", 3, "click"], ["src", "./assets/icon/calblack.svg", "item-start", "", 2, "padding-left", "13px", "height", "24px", "width", "29px", 3, "click"], ["ion-button", "", 3, "click", "ngClass"], [1, "cbus-today-tomorrow", 3, "click"], [1, "network-today-tomorrow", 3, "click"], [1, "ion-activatable", "ripple-parent", 2, "--padding-start", "0px"], ["style", "height: 24px;width: 24px;padding-left: 15px;", "src", "./assets/icon/calendercbus.svg", "item-start", "", 3, "click", 4, "ngIf"], ["style", "height: 24px;width: 24px;padding-left: 15px;", "src", "./assets/icon/calblack.svg", "item-start", "", 3, "click", 4, "ngIf"], [2, "width", "72%"], ["ion-button", "", "position", "floating", 1, "txt-main", 2, "font-size", "14px", "font-weight", "600", 3, "click"], ["src", "./assets/icon/calendercbus.svg", "item-start", "", 2, "height", "24px", "width", "24px", "padding-left", "15px", 3, "click"], ["src", "./assets/icon/calblack.svg", "item-start", "", 2, "height", "24px", "width", "24px", "padding-left", "15px", 3, "click"], ["ion-button", "", "style", "width: 100%;", 3, "ngClass", "click", 4, "ngIf"], ["ion-button", "", 2, "width", "100%", 3, "click", "ngClass"], ["style", "height: 25px; width: 27px;padding-left: 16px;", "src", "./assets/icon/Cross.svg", "name", "close", 3, "click", 4, "ngIf"], ["src", "./assets/icon/Cross.svg", "name", "close", 2, "height", "25px", "width", "27px", "padding-left", "16px", 3, "click"], [1, "bus-hire-cbus"], [1, "box"], ["size", "4", 3, "click"], ["src", "./assets/icon/bus.svg", 1, "bhire-cbus"], [1, "ft-txt"], ["src", "./assets/icon/car.svg", 1, "bhire-cbus"], ["src", "./assets/icon/luggage.svg", 1, "bhire-cbus"], [1, "Recent-searches"], ["style", "margin-right:0 !important", "class", "recent-srch", 4, "ngFor", "ngForOf"], [1, "recent-srch", 2, "margin-right", "0 !important"], [1, "theme-1-recentSearch-row-1"], ["size", "2", 1, "theme-1-recentSearch-row-1-col1", 2, "padding-bottom", "0px"], [2, "padding", "4px", "border", "1px solid #E5E5E5", "border-radius", "50%", "display", "inline-flex"], [2, "display", "inline-block", "height", "30px", "width", "30px", "top", "23%", 3, "src"], ["size", "10", 2, "padding-top", "2px", "padding-bottom", "0px"], [1, "src-dst", 2, "padding", "0px"], [1, "date-srch"], [1, "devider_set"], ["size", "12", 2, "padding", "0px"], ["style", "display:contents ;", "src", "./assets/icon/devider.svg", 4, "ngIf"], ["style", "display:contents ;", "src", "./assets/icon/network_devider.svg", 4, "ngIf"], [1, "theme-1-recentSearch-row-3", 2, "width", "100%", 3, "click"], ["size", "12", 2, "padding-left", "10px"], [1, "theme-1-book-btn", 3, "ngStyle"], [2, "float", "right", "padding-right", "9px"], ["src", "./assets/icon/cbusnext.svg", 2, "height", "24px", "width", "24px"], ["src", "./assets/icon/devider.svg", 2, "display", "contents"], ["src", "./assets/icon/network_devider.svg", 2, "display", "contents"], ["size", "2", 1, "theme-1-recentSearch-row-1-col1"], ["size", "10", 2, "padding-top", "2px"], [1, "theme-1-recentSearch-row-3", 3, "click"], [1, "Recent-searches", 2, "margin-top", "25px", "margin-bottom", "0px"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [2, "width", "90%", "margin", "20px 24px", "box-shadow", "0px 4px 45px rgba(38,38,38,0.10)", "border-radius", "10px"], [1, "cbusOfferImg", 3, "src"], [1, "bus-hire", 2, "background-color", "var(--iconsAndButtonsColor)"], [2, "background-color", "#f7f7f7", "border-radius", "8px"], ["size", "2", 2, "padding", "0px", "align-self", "center", "margin-left", "-7px", "margin-right", "-8px"], ["src", "./assets/icon/shareApp.svg", "alt", "share image", 2, "height", "31px"], ["size", "4", 2, "text-align", "start", "font-size", "10px", "font-weight", "bold", "padding", "0px", "align-self", "center"], ["size", "6", 2, "padding", "0px", "align-self", "center"], ["mode", "md", "mode", "md", "expand", "block", 1, "fffff", 2, "--background", "var(--iconsAndButtonsColor)", "--color", "var(--primaryText)", 3, "click"], [1, "download-txt"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], [1, "pulse", 3, "click"], ["src", "./assets/icon/track.png", "height", "36", "alt", ""], ["color", "light", 3, "click"], ["height", "28", "alt", "", 3, "src"], [1, "ourbustheme", "ourBusMain", "center"], [1, "legend-box-ourbus", "chat-bg"], [2, "width", "100%", "height", "100%"], [2, "display", "flex"], ["size", "3"], ["src", "./assets/icon/whatsapp.jpg", "alt", "", 2, "max-width", "66% !important", "border-radius", "20%", "margin", "16% 5% 5% 18%"], ["size", "9"], [2, "font-weight", "bold", 3, "click"], [1, "ourbus-cross"], [1, ""], ["slot", "end", 2, "margin-top", "-58px", "margin-right", "-15px"], ["mode", "md", 2, "font-size", "18px", 3, "click"], ["name", "close", "item-start", ""], [1, "watsapp-card"], [2, "padding", "0px 20px"], [1, "sub-hdr-2"], ["style", "padding: 8px 20px 0px;", 4, "ngIf"], ["lines", "none"], ["name", "radio-group", "name", "radio-group", 3, "ionChange", "ngModelChange", "ngModel"], ["class", "ourbus-center-justify", 4, "ngFor", "ngForOf"], [1, "chat-hdr1", "center", 2, "--background", "none !important", "height", "68px !important"], [1, "ourbus-start-btn", 2, "margin", "0px 6px", "width", "96%", 3, "click"], [2, "padding", "8px 20px 0px"], [1, "ourbus-center-justify"], ["mode", "md", 1, "ourbus-ion-radio", 3, "name", "value"], [2, "margin-left", "10px"], [2, "margin", "0px 6px", "width", "96%", "--background", "#478649 !important", "height", "48px", 3, "click"], ["mode", "md", 2, "--color", "black", "--color-checked", "black", 3, "name", "value"], [1, "whole", "center", 2, "z-index", "5"], ["size", "3", "lines", "none", 1, "close-fake"], ["fill", "clear", "color", "light", 2, "border", "1px solid grey", 3, "click"], ["slot", "start", "name", "add", 2, "color", "grey"], ["size", "2", "lines", "none", 1, "close-fake"], ["slot", "start", "name", "remove", 2, "color", "grey"], ["size", "7", "lines", "none", 1, "close-fake"], ["fill", "clear", "color", "light", 2, "border", "1px solid grey", "float", "right", 3, "click"], ["slot", "start", "name", "close", 2, "color", "grey"], [2, "color", "grey"], [2, "height", "45%", "margin-top", "12px"], ["data-swiper-zoom", "5", 1, "swiper-zoom-container"], ["alt", "", 3, "src"], [1, "back-ground", "theme2", 3, "ngStyle"], [3, "ngStyle"], [3, "ngClass"], [1, "ion-activatable", "ripple-parent", 3, "click"], ["src", "./assets/icon/Boarding.svg", "item-start", "", 1, "bp-dp", 2, "filter", "var(--primary)"], ["ion-button", "", "class", "txt-main", 4, "ngIf"], ["ion-button", "", "class", "txt-main-slt", 4, "ngIf"], ["name", "swap-vertical-outline"], ["src", "./assets/icon/Dropping.svg", "item-start", "", 1, "bp-dp", 2, "filter", "var(--primary)"], ["lines", "none", 1, "ion-activatable", "ripple-parent", 2, "margin-left", "-17px", "padding-right", "40px"], ["src", "./assets/icon/CalendarStart.svg", "item-start", ""], ["ion-button", "", "class", "txt-main", 3, "click", 4, "ngIf"], ["ion-button", "", "class", "txt-main-slt", 3, "click", 4, "ngIf"], [1, "txt-date-1", 2, "color", "var(--iconsAndButtonsColor)", 3, "click"], [1, "txt-date-2", 2, "color", "var(--iconsAndButtonsColor)", 3, "click"], ["class", "ion-activatable ripple-parent", 4, "ngIf"], ["mode", "md", "mode", "md", "expand", "block", 1, "search-btn", 2, "--background", "var(--iconsAndButtonsColor)", "--color", "var(--primaryText)", "height", "20px", 3, "click"], ["class", "bus-hire", 4, "ngIf"], ["id", "rateservice"], ["style", "height:45%; margin-top: 12px;", 4, "ngIf"], [1, "Bus-tickets"], ["alt", "", 1, "icn-main", 3, "src"], ["alt", "", 1, "centerImg", 3, "src"], ["ion-button", "", 1, "txt-main"], ["ion-button", "", 1, "txt-main-slt"], ["ion-button", "", 1, "txt-main", 3, "click"], ["ion-button", "", 1, "txt-main-slt", 3, "click"], [1, "ion-activatable", "ripple-parent"], ["src", "./assets/icon/CalendarStop.svg", "item-start", ""], ["class", "txt-main-slt flex-container", "style", "width: 100%;", 3, "click", 4, "ngIf"], [2, "position", "fixed", "right", "5%", "font-weight", "bold"], [1, "txt-main-slt", "flex-container", 2, "width", "100%", 3, "click"], ["name", "close-outline", 1, "close-icon", 3, "click"], [1, "bus-hire"], ["src", "./assets/icon/bus.svg", 1, "bhire"], ["src", "./assets/icon/car.svg", 1, "bhire"], ["src", "./assets/icon/luggage.svg", 1, "bhire"], ["class", " slide-card center-vr", 3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [1, "slide-card", "center-vr", 3, "click", "ngStyle"], [1, "mr-16"], [1, "src-dst"], [1, "Line"], [1, "book-now", 3, "click"], [2, "border-bottom", "1px solid #d8d5d5"], ["size", "12", 1, "src-dst", "Clamp"], ["size", "12", 1, "date-srch"], [2, "text-align", "end"], [2, "--background", "transparent", "--box-shadow", "none", 3, "click"], ["height", "40", "alt", "", 3, "src"], [1, "ourbustheme"], [1, "background-container", 3, "ngStyle"], [2, "padding-top", "10px"], ["size", "2", "id", "main-content", 2, "text-align", "center"], ["src", "././assets/icon/Menu.svg"], ["size", "8", 2, "text-align", "center", "color", "var(--homaPageHeadingTextColor)", "font-weight", "700", "font-size", "18px"], [2, "text-align", "center", "margin", "15px"], [2, "color", "var(--homaPageHeadingTextColor)", "font-size", "24px", "font-weight", "700"], [2, "border-radius", "15px"], [2, "margin", "10px"], ["mode", "ios", "value", "oneway", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["mode", "md", "label", "From", "label-placement", "floating", "fill", "outline", "readonly", "", 1, "ourbus_inputText", "ourbus_inputSeg", 3, "click", "placeholder", "value"], [1, "swap", 3, "click"], ["src", "./assets/icon/ourbusSwap.svg", 1, "ourbus_swap-icon", 2, "width", "45px", "height", "45px", 3, "ngClass"], ["mode", "md", "label", "To", "label-placement", "floating", "fill", "outline", "readonly", "", 1, "ourbus_inputText", "ourbus_inputSeg", 3, "click", "placeholder", "value"], ["mode", "md", "label", "Departure", "label-placement", "floating", "fill", "outline", "class", "ourbus_inputText ourbus_inputSeg", "readonly", "", 3, "value", "placeholder", "click", 4, "ngIf"], [2, "padding-inline-start", "1px", "padding-inline-end", "1px", "padding-top", "0px", "padding-bottom", "0px"], ["mode", "md", "label", "Departure", "label-placement", "floating", "fill", "outline", "class", "ourbus_inputText ourbus_inputSeg", "placeholder", "Select Date", "readonly", "", 3, "value", "click", 4, "ngIf"], ["size", "0.5"], ["mode", "md", "label", "Return", "label-placement", "floating", "fill", "outline", "class", "ourbus_inputText ourbus_inputSeg", "placeholder", "Select Date", "readonly", "", 3, "click", 4, "ngIf"], ["mode", "md", "label", "Return", "label-placement", "floating", "fill", "outline", "class", "ourbus_inputText ourbus_inputSeg", "placeholder", "Select Date", "readonly", "", 3, "value", "click", 4, "ngIf"], ["mode", "md", "label", "Passengers", "label-placement", "floating", "fill", "outline", 1, "ourbus_inputText", "ourbus_inputSeg", 3, "ngModelChange", "readonly", "ngModel"], [2, "position", "absolute", "bottom", "26%", "right", "5%", "z-index", "9999"], ["name", "remove-sharp", 2, "font-size", "24px", 3, "click", "ngStyle"], ["name", "add-sharp", "tabindex", "0", "slot", "end", 2, "font-size", "24px", 3, "click", "ngStyle"], ["expand", "block", 1, "ourbus_btn", 3, "click", "disabled", "ngStyle"], ["name", "search-outline"], ["mode", "ios", "value", "oneway", 3, "ngModelChange", "ngModel"], ["layout", "icon-start", "value", "oneway", 1, "ourbus_segment"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", 3, "ngStyle"], ["d", "M20.7806 12.5306L14.0306 19.2806C13.8899 19.4213 13.699 19.5004 13.5 19.5004C13.301 19.5004 13.1101 19.4213 12.9694 19.2806C12.8286 19.1399 12.7496 18.949 12.7496 18.75C12.7496 18.551 12.8286 18.3601 12.9694 18.2194L18.4397 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H18.4397L12.9694 5.78061C12.8286 5.63988 12.7496 5.44901 12.7496 5.24999C12.7496 5.05097 12.8286 4.8601 12.9694 4.71936C13.1101 4.57863 13.301 4.49957 13.5 4.49957C13.699 4.49957 13.8899 4.57863 14.0306 4.71936L20.7806 11.4694C20.8504 11.539 20.9057 11.6217 20.9434 11.7128C20.9812 11.8038 21.0006 11.9014 21.0006 12C21.0006 12.0986 20.9812 12.1961 20.9434 12.2872C20.9057 12.3782 20.8504 12.461 20.7806 12.5306Z"], ["value", "twoway", "layout", "icon-start", 1, "ourbus_segment"], ["width", "25", "height", "24", "viewBox", "0 0 25 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 3, "ngStyle"], ["d", "M20.5307 17.0306L17.5307 20.0306C17.39 20.1713 17.1991 20.2504 17.0001 20.2504C16.8011 20.2504 16.6102 20.1713 16.4695 20.0306C16.3287 19.8899 16.2497 19.699 16.2497 19.5C16.2497 19.301 16.3287 19.1101 16.4695 18.9694L18.1898 17.25H5.0001C4.80119 17.25 4.61042 17.171 4.46977 17.0303C4.32912 16.8897 4.2501 16.6989 4.2501 16.5C4.2501 16.3011 4.32912 16.1103 4.46977 15.9697C4.61042 15.829 4.80119 15.75 5.0001 15.75H18.1898L16.4695 14.0306C16.3287 13.8899 16.2497 13.699 16.2497 13.5C16.2497 13.301 16.3287 13.1101 16.4695 12.9694C16.6102 12.8286 16.8011 12.7496 17.0001 12.7496C17.1991 12.7496 17.39 12.8286 17.5307 12.9694L20.5307 15.9694C20.6005 16.039 20.6558 16.1217 20.6935 16.2128C20.7313 16.3038 20.7507 16.4014 20.7507 16.5C20.7507 16.5986 20.7313 16.6961 20.6935 16.7872C20.6558 16.8782 20.6005 16.961 20.5307 17.0306ZM7.46948 11.0306C7.61021 11.1713 7.80108 11.2504 8.0001 11.2504C8.19912 11.2504 8.39 11.1713 8.53073 11.0306C8.67146 10.8899 8.75052 10.699 8.75052 10.5C8.75052 10.301 8.67146 10.1101 8.53073 9.96936L6.81041 8.24999H20.0001C20.199 8.24999 20.3898 8.17097 20.5304 8.03032C20.6711 7.88967 20.7501 7.6989 20.7501 7.49999C20.7501 7.30108 20.6711 7.11031 20.5304 6.96966C20.3898 6.82901 20.199 6.74999 20.0001 6.74999H6.81041L8.53073 5.03061C8.67146 4.88988 8.75052 4.69901 8.75052 4.49999C8.75052 4.30097 8.67146 4.1101 8.53073 3.96936C8.39 3.82863 8.19912 3.74957 8.0001 3.74957C7.80108 3.74957 7.61021 3.82863 7.46948 3.96936L4.46948 6.96936C4.39974 7.03902 4.34443 7.12174 4.30668 7.21278C4.26894 7.30383 4.24951 7.40143 4.24951 7.49999C4.24951 7.59855 4.26894 7.69615 4.30668 7.7872C4.34443 7.87824 4.39974 7.96096 4.46948 8.03061L7.46948 11.0306Z"], ["mode", "md", "label", "Departure", "label-placement", "floating", "fill", "outline", "readonly", "", 1, "ourbus_inputText", "ourbus_inputSeg", 3, "click", "value", "placeholder"], ["mode", "md", "label", "Departure", "label-placement", "floating", "fill", "outline", "placeholder", "Select Date", "readonly", "", 1, "ourbus_inputText", "ourbus_inputSeg", 3, "click", "value"], ["mode", "md", "label", "Return", "label-placement", "floating", "fill", "outline", "placeholder", "Select Date", "readonly", "", 1, "ourbus_inputText", "ourbus_inputSeg", 3, "click"], ["mode", "md", "label", "Return", "label-placement", "floating", "fill", "outline", "placeholder", "Select Date", "readonly", "", 1, "ourbus_inputText", "ourbus_inputSeg", 3, "click", "value"], [1, "fabBtn_ourbus", 3, "click"], ["height", "28", 2, "height", "50px", "width", "50px", 3, "src"], ["size", "6", 2, "padding-left", "17px"], ["alt", "", 1, "seabird_logo", 3, "src"], ["size", "6", 2, "display", "flex", "align-items", "center", "justify-content", "end", "padding-right", "17px"], ["class", "seabird_coin-box", 3, "click", 4, "ngIf"], [1, "seabirdTheme", 2, "--background", "#F1F7FA !important"], [1, "seabird_search-container"], [1, "seabird_inputcard"], [1, "ion-no-padding"], ["lines", "none", 3, "click"], ["src", "./assets/icon/Boarding1.svg", "slot", "start", 1, "seabird_bus", 2, "margin-right", "10px"], ["class", "seabird_txt-main seabird_txt-main-sb placeholder", 4, "ngIf"], ["class", "seabird_txt-main-slt input", 4, "ngIf"], [1, "seabird_fab-reverse", 3, "click"], ["src", "./assets/icon/leftright.svg", "alt", "", 1, "seabird_swap-icon", 3, "ngClass"], [1, "seabird_custom-divider"], ["class", "txt-main txt-main-sb placeholder seabird_txt-main-sb", 4, "ngIf"], ["src", "./assets/icon/calblack.svg", "slot", "start", 1, "seabird_bus", 2, "margin-right", "10px"], ["id", "dateInput", 1, "seabird_txt-main-slt"], ["fill", "clear", "slot", "end", 1, "seabird_button1", 2, "margin-right", "-10px"], ["src", "./assets/icon/calblue.svg", "slot", "start", 2, "margin-right", "10px"], [2, "color", "#2B28CE"], [1, "seabird_feedback-options"], ["class", "seabird_feedback-option", 3, "ngClass", 4, "ngFor", "ngForOf"], ["expand", "block", 1, "seabird_search-button", 2, "--background", "var(--iconsAndButtonsColor)", "--color", "var(--primaryText)", 3, "click"], ["name", "search-outline", "slot", "start"], [2, "margin-top", "35px", "box-shadow", "none"], [1, "seabird_grid"], ["size", "4", 2, "text-align", "center", 3, "click"], [1, "seabird_box", 2, "background", "#FBE6D1"], ["src", "././assets/icon/searchfile.svg", 1, "img"], [2, "font-size", "11px", "font-weight", "bold"], [1, "seabird_box", 2, "background", "#F8D2D6"], ["src", "././assets/icon/busticket.svg", 1, "seabird_img"], [1, "seabird_box", 2, "background", "#BEF1ED"], ["src", "././assets/icon/customerservice.svg", 1, "img"], ["class", "seabird_Recent-searches", "style", "margin-left:20px;font-weight: bold;", 4, "ngIf"], ["class", "popular-routes-title", 4, "ngIf"], ["class", "popular-routes-container", 4, "ngIf"], ["class", "seabird_whole center", "style", "z-index:5", 4, "ngIf"], [1, "seabird_coin-box", 3, "click"], ["src", "./assets/icon/star.png", "alt", "star icon", 4, "ngIf"], [1, "seabird_coin-count"], ["src", "./assets/icon/star.png", "alt", "star icon"], [2, "border", "1px solid", "padding", "4px 10px", "border-radius", "15px", "font-size", "14px", "font-weight", "bold", 3, "click"], [1, "seabird_txt-main", "seabird_txt-main-sb", "placeholder"], [1, "seabird_txt-main-slt", "input"], [1, "txt-main", "txt-main-sb", "placeholder", "seabird_txt-main-sb"], ["src", "./assets/icon/calblack.svg", "slot", "start", 1, "seabird_bus", 2, "margin-right", "10px", 3, "click"], ["class", "txt-main seabird_txt-main-slt", "style", "font-size:14px;", 3, "click", 4, "ngIf"], ["class", "txt-main-slt seabird_txt-main-slt", "style", "width: 100%;", 3, "click", 4, "ngIf"], [1, "txt-main", "seabird_txt-main-slt", 2, "font-size", "14px", 3, "click"], [1, "txt-main-slt", "seabird_txt-main-slt", 2, "width", "100%", 3, "click"], [1, "seabird_feedback-option", 3, "ngClass"], [1, "seabird_Recent-searches", 2, "margin-left", "20px", "font-weight", "bold"], ["size", "5", "class", "seabird_boxx", "style", "margin: 4px;", 3, "click", 4, "ngFor", "ngForOf"], ["size", "5", 1, "seabird_boxx", 2, "margin", "4px", 3, "click"], [1, "popular-routes-title"], [1, "popular-routes-container"], ["class", "route-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "route-card", 3, "click"], [1, "route-content"], ["height", "28", 3, "src"], [1, "seabird_whole", "center", 2, "z-index", "5"], ["size", "3", "lines", "none", 1, "seabird_close-fake"], ["size", "2", "lines", "none", 1, "seabird_close-fake"], ["size", "7", "lines", "none", 1, "seabird_close-fake"], [1, "sb-home", 3, "fullscreen"], [1, "sb-hero"], [1, "sb-hero__bar"], [1, "sb-brand"], [1, "sb-hero__greeting"], [1, "sb-hero__title"], ["aria-label", "Search buses", 1, "sb-search-card"], ["role", "button", "tabindex", "0", 1, "sb-field", "sb-field--first", "sb-field--swap-gap", 3, "click"], ["src", "./assets/seabird-new/bus-from.svg", "alt", "", "width", "22", "height", "22", 1, "sb-field__icon"], [1, "sb-field__text"], [1, "sb-field__label"], ["class", "sb-field__value", 4, "ngIf"], ["class", "sb-field__value sb-field__value--placeholder", 4, "ngIf"], [1, "sb-divider", "sb-divider--inset"], ["type", "button", "aria-label", "Swap origin and destination", 1, "sb-swap", 3, "click"], ["src", "./assets/seabird-new/swap-arrows.svg", "alt", "", "width", "20", "height", "20"], ["role", "button", "tabindex", "0", 1, "sb-field", "sb-field--swap-gap", 3, "click"], ["src", "./assets/seabird-new/location-pin-to-coral.svg", "alt", "", "width", "22", "height", "22", 1, "sb-field__icon"], [1, "sb-divider"], ["role", "button", "tabindex", "0", 1, "sb-field", "sb-field--date", 3, "click"], ["src", "./assets/seabird-new/calendar.svg", "alt", "", "width", "22", "height", "22", 1, "sb-field__icon"], ["class", "sb-field__value", 4, "ngIf", "ngIfElse"], [1, "sb-chips"], ["type", "button", "class", "sb-chip", 3, "sb-chip--selected", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "sb-btn-primary", 3, "click"], ["src", "./assets/seabird-new/search.svg", "alt", "", "width", "20", "height", "20"], ["class", "sb-section", 4, "ngIf"], [1, "sb-home__bottom-space"], [1, "sb-field__value"], [1, "sb-field__value", "sb-field__value--placeholder"], [1, "sb-field"], ["src", "./assets/seabird-new/calendar.svg", "alt", "", "width", "22", "height", "22", 1, "sb-field__icon", 3, "click"], ["role", "button", "tabindex", "0", 1, "sb-field__text", 3, "click"], ["type", "button", "class", "sb-field__clear", "aria-label", "Clear return date", 3, "click", 4, "ngIf"], ["type", "button", "aria-label", "Clear return date", 1, "sb-field__clear", 3, "click"], ["src", "./assets/icon/Cross.svg", "alt", ""], ["type", "button", 1, "sb-chip", 3, "click"], [1, "sb-section"], [1, "sb-overline"], [1, "sb-chip-scroller"], ["type", "button", "class", "sb-chip", 3, "click", 4, "ngFor", "ngForOf"], [1, "sb-pulse", 3, "click", "ngStyle"], [1, "shyamoli-theme", 3, "ngStyle"], ["class", "shyamoli-header", 4, "ngIf"], [1, "content-wrapper"], ["class", "greeting-section", "style", "display: block;", 4, "ngIf"], ["class", "trip-type-tabs", 4, "ngIf"], [1, "search-form"], [1, "form-field", 3, "click"], [1, "field-label"], ["class", "field-value", 4, "ngIf"], [1, "swap-button-wrapper"], [1, "swap-button", 3, "click"], ["width", "21", "height", "21", "viewBox", "0 0 21 21", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0_2001_43)"], ["d", "M4.43838 7.01361C4.45987 7.02547 4.48061 7.03658 4.5021 7.04843L4.5021 17.6625C4.5021 17.764 4.49839 17.8663 4.5058 17.967C4.54581 18.573 4.94364 19.0857 5.49187 19.2413C6.05713 19.402 6.6424 19.2035 6.99208 18.7308C7.21063 18.4352 7.26915 18.0959 7.26841 17.7373C7.26693 14.2732 7.26841 10.8082 7.26841 7.34403L7.26841 7.03361C7.72033 7.41441 8.10705 7.80928 8.50192 8.19674C8.85605 8.5442 9.28277 8.682 9.77099 8.57383C10.2918 8.45826 10.6444 8.13525 10.7941 7.62629C10.9467 7.1077 10.8252 6.638 10.44 6.25202C9.2724 5.08075 8.10335 3.91095 6.93207 2.74338C6.28161 2.0944 5.48668 2.0981 4.83029 2.75079C4.10352 3.47385 3.37972 4.20062 2.65443 4.92591C2.19733 5.38301 1.73059 5.83196 1.28683 6.30166C0.679336 6.94545 0.837876 7.97967 1.5965 8.42122C2.13658 8.73608 2.79149 8.65903 3.25451 8.20859C3.65679 7.81817 4.045 7.41293 4.43913 7.01435L4.43913 7.01361L4.43838 7.01361Z", "fill", "white"], ["d", "M13.9293 13.9375L13.8523 13.9724C13.4522 13.5627 13.0655 13.1396 12.6499 12.7477C12.0965 12.2262 11.2482 12.258 10.7289 12.7937C10.2162 13.3226 10.1999 14.1613 10.7252 14.6939C11.9313 15.9178 13.1463 17.1328 14.3694 18.3389C14.8954 18.8575 15.7096 18.8479 16.2497 18.3463C16.446 18.1641 16.6305 17.9692 16.8201 17.7803C17.8262 16.7742 18.8315 15.7674 19.8391 14.7636C20.1584 14.445 20.3228 14.0664 20.2717 13.616C20.2065 13.0396 19.8909 12.6366 19.3442 12.4521C18.7952 12.2662 18.3077 12.4099 17.898 12.8166C17.5572 13.1552 17.2187 13.496 16.8779 13.8346C16.832 13.8798 16.7757 13.9153 16.6942 13.9798L16.6942 3.31826C16.6942 3.22566 16.6971 3.13305 16.6919 3.04119C16.6586 2.4211 16.2608 1.90028 15.7007 1.74174C15.1199 1.57727 14.5072 1.79953 14.1686 2.30034C13.9753 2.58705 13.9278 2.91154 13.9278 3.2501C13.9293 6.7143 13.9286 10.1785 13.9286 13.6427L13.9286 13.9383L13.9286 13.9375L13.9293 13.9375Z", "fill", "white"], ["id", "clip0_2001_43"], ["width", "21", "height", "21", "fill", "white", "transform", "translate(0 21) rotate(-90)"], ["name", "calendar-outline", 1, "calendar-icon"], ["class", "form-field", 3, "click", 4, "ngIf"], [1, "quick-date-buttons"], [1, "quick-date-btn", "today", 3, "click"], [1, "quick-date-btn", "tomorrow", 3, "click"], [1, "search-buses-button", 3, "click"], ["class", "services-section", 4, "ngIf"], ["class", "section-header", 4, "ngIf"], ["class", "recent-search-swiper", 4, "ngIf"], ["class", "download-app-section", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", "class", "whatsapp-fab", 4, "ngIf"], [1, "shyamoli-header"], [1, "header-content"], ["alt", "Logo", 1, "shyamoli-logo", 2, "height", "45px", 3, "src"], [1, "greeting-section", 2, "display", "block"], ["size", "12"], ["size", "6"], ["class", "user-name", 4, "ngIf"], [1, "user-name"], [1, "wallet-badge", 3, "click"], [1, "wallet-icon-wrapper"], ["name", "wallet", 1, "wallet-icon"], [1, "wallet-amount"], [1, "info-icon-wrapper"], [1, "info-icon"], ["src", "./assets/icon/syamoli_wallet.svg", 1, "flash-icon"], [1, "trip-type-tabs"], [1, "tab-button", 3, "click"], [1, "field-value"], [1, "services-section"], [1, "service-item", 3, "click"], ["src", "./assets/icon/bus.svg", 1, "service-icon"], [1, "service-text"], ["src", "./assets/icon/car.svg", 1, "service-icon"], ["src", "./assets/icon/luggage.svg", 1, "service-icon"], [1, "section-header"], [1, "section-title"], [1, "recent-search-swiper"], ["class", "recent-search-slide", 4, "ngFor", "ngForOf"], [1, "recent-search-slide"], [1, "recent-search-card"], [1, "recent-search-content"], ["src", "./assets/icon/shyamoli_recent.svg", "alt", "shyamoli_recent", 2, "width", "21px", "height", "31px"], [1, "recent-search-info"], [1, "recent-search-route"], [1, "recent-search-date"], [1, "book-now-link", 3, "click"], ["width", "12", "height", "5", "viewBox", "0 0 12 5", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M9.20002 0.400024L11.4 2.40002M11.4 2.40002L9.20002 4.40002M11.4 2.40002H0.400024", "stroke", "var(--iconsAndButtonsColor, #FF9100)", "stroke-width", "0.8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["class", "recent-search-slide", 3, "click", 4, "ngFor", "ngForOf"], [1, "recent-search-slide", 3, "click"], ["alt", "Bus Offer", 1, "offer-bus-image", 3, "src"], [1, "download-app-section"], [1, "download-app-content"], [1, "app-info"], ["src", "./assets/icon/shareApp.svg", "alt", "share image", 1, "app-icon"], [1, "app-text"], [1, "download-button", 3, "click"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 1, "whatsapp-fab"], ["src", "./assets/icon/shyamoli_logo_whatsapp.svg", "height", "50", "width", "50", "alt", ""]],
  template: function HomePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, HomePage_ng_container_0_Template, 58, 46, "ng-container", 2)(1, HomePage_ng_container_1_Template, 49, 31, "ng-container", 2)(2, HomePage_ng_container_2_Template, 48, 42, "ng-container", 2)(3, HomePage_ng_container_3_Template, 69, 25, "ng-container", 2)(4, HomePage_ng_container_4_Template, 56, 26, "ng-container", 2)(5, HomePage_ng_container_5_Template, 57, 35, "ng-container", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme" || ctx.metaData.msiteFolder == "networktheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder === "seabirdThemeNew");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "shyamolitheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonRadio, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonRadioGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonRippleEffect, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.TextValueAccessor, _rate_service_rate_service_component__WEBPACK_IMPORTED_MODULE_29__.RateServiceComponent, _angular_common__WEBPACK_IMPORTED_MODULE_27__.SlicePipe, _pipes_filter_oculto_pipe__WEBPACK_IMPORTED_MODULE_30__.FilterOcultoPipe],
  styles: ["@charset \"UTF-8\";\n.floating-container[_ngcontent-%COMP%] {\n  position: fixed !important;\n  bottom: 5px;\n  left: 5px;\n  background-color: #3880ff;\n  z-index: 20;\n  border-radius: 8px;\n  overflow: hidden;\n  background-color: transparent;\n  box-shadow: none;\n  cursor: pointer;\n}\n\n.android_video_ratio[_ngcontent-%COMP%] {\n  width: 137px;\n  height: 237px;\n}\n\n.ios_video_ratio[_ngcontent-%COMP%] {\n  width: 162px;\n  height: 262px;\n}\n\n.desktop_video_ratio[_ngcontent-%COMP%] {\n  width: 137px;\n  height: 237px;\n}\n\n.floating-container[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 20px;\n  padding: 2px 2px 0px 2px;\n}\n\n.floating-video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 12px;\n  object-fit: cover;\n  z-index: 15;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 11px;\n  right: 11px;\n  background-color: rgba(136, 136, 136, 0.6);\n  border-radius: 100%;\n  cursor: pointer;\n  z-index: 30;\n}\n\n.mute-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 11px;\n  left: 11px;\n  font-size: 20px;\n  color: white;\n  background-color: rgba(117, 113, 113, 0.6);\n  border-radius: 100%;\n  cursor: pointer;\n  z-index: 30;\n}\n\n#container[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: none !important;\n  --background-color: var(--viewBgColor) !important;\n}\n\nion-content[_ngcontent-%COMP%]   .theme1[_ngcontent-%COMP%] {\n  --background: white !important;\n}\n\n.theme1[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%] {\n  --background: #F2C21A;\n  --color: #191966;\n  margin: 15px 0;\n  padding: 0px 16px;\n  --border-radius: 100px;\n  height: 40px;\n}\n.theme1[_ngcontent-%COMP%]   .search-btn_2[_ngcontent-%COMP%] {\n  --background: var(--iconsAndButtonsColor);\n  --color: var(--primaryText);\n  margin: 15px 0;\n  padding: 0px 16px;\n  --border-radius: 100px;\n  height: 40px;\n}\n.theme1[_ngcontent-%COMP%]   .bg-box[_ngcontent-%COMP%] {\n  background-color: #191966;\n  padding-bottom: 29px;\n}\n.theme1[_ngcontent-%COMP%]   .bg-box_2[_ngcontent-%COMP%] {\n  background-color: var(--homeBgColor);\n  padding-bottom: 29px;\n}\n.theme1[_ngcontent-%COMP%]   .cbus-wallet[_ngcontent-%COMP%] {\n  border-radius: 100px;\n  --background-activated: none;\n  \n\n  --background:rgba(25, 25, 102, 0.10);\n  --box-shadow: none;\n  --border-radius: 100px;\n  border: 1px solid #858585;\n  margin: 16px 13px 12px 0px;\n}\n.theme1[_ngcontent-%COMP%]   .cbus-wallet[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 22px;\n  letter-spacing: 0.12px;\n}\n.theme1[_ngcontent-%COMP%]   .cbus-wallet[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.theme1[_ngcontent-%COMP%]   .cbus-wallet[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.theme1[_ngcontent-%COMP%]   .themeone-wallet[_ngcontent-%COMP%] {\n  border-radius: 100px;\n  --background-activated: none;\n  \n\n  --background:none;\n  --box-shadow: none;\n  --border-radius: 100px;\n  border: 1px solid #858585;\n  margin: 16px 13px 12px 0px;\n}\n.theme1[_ngcontent-%COMP%]   .themeone-wallet[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 22px;\n  letter-spacing: 0.12px;\n}\n.theme1[_ngcontent-%COMP%]   .themeone-wallet[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.theme1[_ngcontent-%COMP%]   .themeone-wallet[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.theme1[_ngcontent-%COMP%]   .themeone-wallet-today-tomorrow[_ngcontent-%COMP%] {\n  border-radius: 100px;\n  --background-activated: none;\n  \n\n  --background:color-mix(in srgb, var(--sectionHeaderTextColor), transparent 50%);\n  --box-shadow: none;\n  --border-radius: 100px;\n  border: 1px solid #858585;\n  margin: 16px 13px 12px 0px;\n}\n.theme1[_ngcontent-%COMP%]   .themeone-wallet-today-tomorrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 22px;\n  letter-spacing: 0.12px;\n}\n.theme1[_ngcontent-%COMP%]   .themeone-wallet-today-tomorrow[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.theme1[_ngcontent-%COMP%]   .themeone-wallet-today-tomorrow[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.theme1[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  margin: 0px 24px;\n  border-radius: 10px;\n  padding-top: 10px;\n}\n.theme1[_ngcontent-%COMP%]   .Bus-tickets[_ngcontent-%COMP%] {\n  margin: 44px 16px 16px;\n  width: auto;\n  height: 20px;\n  font-family: NotoSans;\n  font-size: 20px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1;\n  letter-spacing: normal;\n  color: var(--placeholderColor);\n}\n.theme1[_ngcontent-%COMP%]   ios-Bus-tickets[_ngcontent-%COMP%] {\n  margin: 44px 16px 16px 25px;\n  width: auto;\n  height: auto;\n  font-family: NotoSans;\n  font-size: 20px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1;\n  letter-spacing: normal;\n  color: var(--placeholderColor);\n}\n.theme1[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  margin: 12px;\n  border-radius: 2px;\n  font-family: Roboto !important;\n}\n.theme1[_ngcontent-%COMP%]   .search-txt[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  text-transform: capitalize;\n  font-family: Roboto;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.theme1[_ngcontent-%COMP%]   .slide-card[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  margin: auto;\n  width: 316px !important;\n  height: 224px;\n  background-repeat: no-repeat;\n  background-size: contain, cover;\n  box-shadow: 0px 1px 16px 5px rgba(38, 38, 51, 0.2784313725);\n}\n.theme1[_ngcontent-%COMP%]   .slidedemo[_ngcontent-%COMP%] {\n  box-shadow: 0px 1px 16px 5px rgba(38, 38, 51, 0.2784313725);\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.theme1[_ngcontent-%COMP%]   .mr-16[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.theme1[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n}\n.theme1[_ngcontent-%COMP%]   .Recent-searches[_ngcontent-%COMP%] {\n  margin: 24px;\n  font-size: 18px;\n  font-weight: 800;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #333333;\n  margin-bottom: 15px;\n}\n.theme1[_ngcontent-%COMP%]   .recent-srch[_ngcontent-%COMP%] {\n  border: 1px solid #dfdfdf;\n  border-radius: 10px;\n  margin: 0px 24px;\n  margin-bottom: 21px;\n  display: inline;\n  width: 88% !important;\n  background-color: #ffffff;\n  margin-right: 24px;\n}\n.theme1[_ngcontent-%COMP%]   .theme-1-book-btn[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 16px;\n  font-weight: 700;\n  color: #191966;\n  padding-left: 9px;\n}\n.theme1[_ngcontent-%COMP%]   .theme-1-recentSearch-row-1[_ngcontent-%COMP%] {\n  width: 100%;\n  align-items: center;\n}\n.theme1[_ngcontent-%COMP%]   .theme-1-recentSearch-row-1-col1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-table;\n  padding-top: 3px;\n}\n.theme1[_ngcontent-%COMP%]   .theme-1-outerCircle-icon[_ngcontent-%COMP%] {\n  display: block;\n  height: 40px;\n  width: 44px;\n}\n.theme1[_ngcontent-%COMP%]   .theme-1-recentSearch-row-2[_ngcontent-%COMP%] {\n  width: 103%;\n}\n.theme1[_ngcontent-%COMP%]   .cbusOfferImg[_ngcontent-%COMP%]::part(image) {\n  border-radius: 10px;\n}\n.theme1[_ngcontent-%COMP%]   .src-dst[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  font-family: NotoSans;\n  font-size: 15px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.25;\n  letter-spacing: normal;\n  color: #4a4a4a;\n  text-align: left;\n  padding-bottom: 3%;\n}\n.theme1[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 100%;\n}\n.theme1[_ngcontent-%COMP%]   .date-srch[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  line-height: 1.33;\n  color: #747f8d;\n}\n.theme1[_ngcontent-%COMP%]   .Line[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 1px;\n  background-color: #e8e8e8;\n}\n.theme1[_ngcontent-%COMP%]   .txt-main[_ngcontent-%COMP%] {\n  margin: 0 0 0 10px;\n  width: 100%;\n  font-size: 11px;\n  color: #5F5F5F;\n}\n.theme1[_ngcontent-%COMP%]   .txt-main-slt[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0 0 0 10px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.43;\n  letter-spacing: normal;\n  color: #191966;\n}\n.theme1[_ngcontent-%COMP%]   .txt-main-slt-2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0 0 0 10px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.43;\n  letter-spacing: normal;\n  color: var(--primaryText);\n}\n.theme1[_ngcontent-%COMP%]   .fab-revrse[_ngcontent-%COMP%] {\n  --background: #3e3e52;\n  position: absolute;\n  z-index: 5;\n  right: 2%;\n  top: 12%;\n}\n.theme1[_ngcontent-%COMP%]   .txt-date-1[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 91px;\n  margin: 0 0 0 15px;\n  font-size: 10px;\n  font-weight: bolder;\n  text-align: right;\n}\n.theme1[_ngcontent-%COMP%]   .txt-date-2[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  margin: 0 0 0 15px;\n  font-size: 10px;\n  font-weight: bolder;\n  text-align: right;\n}\n.theme1[_ngcontent-%COMP%]   .icn-main[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  position: absolute;\n  right: 16px;\n  padding: 0;\n  width: 140px;\n  height: 40px;\n  top: 30px;\n}\n.theme1[_ngcontent-%COMP%]   .ripple-parent[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.theme1[_ngcontent-%COMP%]   .droppngg[_ngcontent-%COMP%] {\n  stroke: red;\n  color: red;\n  fill: red;\n}\n.theme1[_ngcontent-%COMP%]   .whole[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.6);\n}\n.theme1[_ngcontent-%COMP%]   .legend-box[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 90%;\n  background-size: cover;\n  height: 35%;\n  background-repeat: no-repeat;\n}\n.theme1[_ngcontent-%COMP%]   .legend-box-1[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 90%;\n  background-size: cover;\n  height: auto;\n  background-repeat: no-repeat;\n}\n.theme1[_ngcontent-%COMP%]   .txt-msg[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n  text-align: justify;\n  letter-spacing: 0.25px;\n  color: rgba(0, 0, 0, 0.6);\n  margin-top: 10px;\n  width: 100%;\n}\n.theme1[_ngcontent-%COMP%]   .dwn-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #ed3237;\n  margin-top: 28px;\n  width: 100%;\n  text-align: right;\n}\n.theme1[_ngcontent-%COMP%]   .chat-bg[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.theme1[_ngcontent-%COMP%]   .legend-box-1[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  width: 85%;\n  background-size: cover;\n  min-height: 40%;\n  background-repeat: no-repeat;\n}\n.theme1[_ngcontent-%COMP%]   .chat-ftr[_ngcontent-%COMP%] {\n  --background: white !important;\n  background-color: white !important;\n  position: absolute;\n  bottom: 15%;\n  width: 85%;\n}\n.theme1[_ngcontent-%COMP%]   .chat-hdr[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  --background: white !important;\n  background-color: white !important;\n}\n.theme1[_ngcontent-%COMP%]   .chat-hdr1[_ngcontent-%COMP%] {\n  width: 100%;\n  --background: white !important;\n  background-color: white !important;\n}\n.theme1[_ngcontent-%COMP%]   .start-btn[_ngcontent-%COMP%] {\n  color: #01e675;\n  --background: #1da110;\n}\n.theme1[_ngcontent-%COMP%]   .start-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n}\n.theme1[_ngcontent-%COMP%]   .Oval[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  background-color: #d8d8d8;\n  margin: 18px 0 19px 6px;\n  border-radius: 50px;\n}\n.theme1[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  margin: 8px 4px 0 5%;\n  height: 20px;\n  font-family: NotoSans;\n  font-size: 18px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.25;\n  letter-spacing: normal;\n}\n.theme1[_ngcontent-%COMP%]   .nameemailcom[_ngcontent-%COMP%] {\n  height: 14px;\n  margin: 0 4px 0 5%;\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n}\n.theme1[_ngcontent-%COMP%]   .wat-name-hdr[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  -webkit-text-fill-color: black;\n  left: 60px;\n  font-size: 13px;\n  font-weight: bolder;\n}\n.theme1[_ngcontent-%COMP%]   .wat-sub-hdr[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 38px;\n  -webkit-text-fill-color: grey;\n  left: 60px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.theme1[_ngcontent-%COMP%]   .watsapp-card[_ngcontent-%COMP%] {\n  padding: 15px 15px 35px;\n  border-radius: 0 15px 15px 15px;\n}\n.theme1[_ngcontent-%COMP%]   .center-justify[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 10px 10px 10px 0;\n  align-items: center;\n}\n.theme1[_ngcontent-%COMP%]   .sub-hdr-2[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: darkgrey;\n  margin-bottom: 5px;\n}\n.theme1[_ngcontent-%COMP%]   .wat-time[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  bottom: 10px;\n}\n.theme1[_ngcontent-%COMP%]   .bus-hire[_ngcontent-%COMP%] {\n  margin: 10px;\n  background-color: var(--primary);\n  padding: 2px;\n  border-radius: 8px;\n  text-align: center;\n}\n.theme1[_ngcontent-%COMP%]   .bus-hire[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 8px;\n  padding-right: 8px;\n}\n.theme1[_ngcontent-%COMP%]   .bus-hire[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin-left: 12px;\n}\n.theme1[_ngcontent-%COMP%]   .bus-hire[_ngcontent-%COMP%]   .bhire[_ngcontent-%COMP%] {\n  fill: var(--primary);\n  width: 60px;\n  height: 35px;\n  margin-top: 5px;\n}\n.theme1[_ngcontent-%COMP%]   .bus-hire-cbus[_ngcontent-%COMP%] {\n  margin: 10px;\n  background-color: white;\n  padding: 2px;\n  border-radius: 8px;\n  text-align: center;\n  border: 1px solid #e0e0e0;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);\n}\n.theme1[_ngcontent-%COMP%]   .bus-hire-cbus[_ngcontent-%COMP%]   .box-cbus[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 8px;\n  padding-right: 8px;\n}\n.theme1[_ngcontent-%COMP%]   .bus-hire-cbus[_ngcontent-%COMP%]   img-cbus[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin-left: 12px;\n}\n.theme1[_ngcontent-%COMP%]   .bus-hire-cbus[_ngcontent-%COMP%]   .bhire-cbus[_ngcontent-%COMP%] {\n  fill: #191966;\n  width: 60px;\n  height: 35px;\n  margin-top: 5px;\n}\n.theme1[_ngcontent-%COMP%]   .back-ground[_ngcontent-%COMP%] {\n  --background: none;\n  background-size: cover;\n  background-position: center center;\n}\n.theme1[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%] {\n  margin: auto;\n}\n@media screen and (max-height: 640px) {\n  .theme1[_ngcontent-%COMP%]   .wat-sub-hdr[_ngcontent-%COMP%] {\n    top: 38px;\n    left: 55px;\n  }\n  .theme1[_ngcontent-%COMP%]   .wat-name-hdr[_ngcontent-%COMP%] {\n    top: 5px;\n    left: 55px;\n  }\n  .theme1[_ngcontent-%COMP%]   .Oval[_ngcontent-%COMP%] {\n    margin: 12px 0 18px 2px;\n  }\n}\n.theme1[_ngcontent-%COMP%]   .centerImg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 20px;\n}\n.theme1[_ngcontent-%COMP%]   ion-button.fffff.md.button.button-block.button-solid.ion-activatable.ion-focusable.hydrated[_ngcontent-%COMP%] {\n  margin: 6px 12px 6px 10px;\n  font-size: 10px;\n  font-weight: bold;\n  width: 96%;\n  border-radius: 8px;\n  height: 31px;\n}\n.theme1[_ngcontent-%COMP%]   .transparent[_ngcontent-%COMP%] {\n  padding-bottom: 24px;\n  margin-bottom: 16px;\n  background-color: #191966;\n}\n\n.theme2[_ngcontent-%COMP%]   .bg-box[_ngcontent-%COMP%] {\n  height: 344px;\n  background-color: var(--primary);\n}\n.theme2[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  margin: 0 16px 16px;\n  border-radius: 4px;\n}\n.theme2[_ngcontent-%COMP%]   .Bus-tickets[_ngcontent-%COMP%] {\n  margin: 44px 16px 16px;\n  width: auto;\n  height: 20px;\n  font-family: NotoSans;\n  font-size: 20px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1;\n  letter-spacing: normal;\n  color: var(--placeholderColor);\n}\n.theme2[_ngcontent-%COMP%]   ios-Bus-tickets[_ngcontent-%COMP%] {\n  margin: 44px 16px 16px 25px;\n  width: auto;\n  height: auto;\n  font-family: NotoSans;\n  font-size: 20px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1;\n  letter-spacing: normal;\n  color: var(--placeholderColor);\n}\n.theme2[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  margin: 12px;\n  border-radius: 2px;\n  font-family: \"NotoSans\";\n}\n.theme2[_ngcontent-%COMP%]   .search-txt[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  width: 61px;\n  text-transform: capitalize;\n}\n.theme2[_ngcontent-%COMP%]   .slide-card[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  margin: auto;\n  height: 224px;\n  background-repeat: no-repeat;\n  background-size: contain, cover;\n}\n.theme2[_ngcontent-%COMP%]   .mr-16[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.theme2[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n}\n.theme2[_ngcontent-%COMP%]   .Recent-searches[_ngcontent-%COMP%] {\n  margin: 0 0 16px 16px;\n  font-size: 14px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #4a4a4a;\n}\n.theme2[_ngcontent-%COMP%]   .recent-srch[_ngcontent-%COMP%] {\n  padding: 12px;\n  width: 235px !important;\n  height: 100px;\n  font-family: NotoSans;\n  border-radius: 2px;\n  box-shadow: 0 2px 12px 1px rgba(194, 194, 194, 0.5);\n  background-color: #ffffff;\n  margin: 0 5% 10% 0;\n}\n.theme2[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 100%;\n}\n.theme2[_ngcontent-%COMP%]   .src-dst[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 15px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.25;\n  color: #4a4a4a;\n}\n.theme2[_ngcontent-%COMP%]   .date-srch[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  line-height: 1.33;\n  color: #747f8d;\n}\n.theme2[_ngcontent-%COMP%]   .Line[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 1px;\n  background-color: #e8e8e8;\n}\n.theme2[_ngcontent-%COMP%]   .book-now[_ngcontent-%COMP%] {\n  text-align: right;\n  height: 16px;\n  font-family: NotoSans;\n  font-size: 13px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n  color: var(--iconsAndButtonsColor);\n}\n.theme2[_ngcontent-%COMP%]   .txt-main[_ngcontent-%COMP%] {\n  margin: 0 0 0 16px;\n  width: 100%;\n  font-size: 14px;\n  color: #7e7e8c;\n}\n.theme2[_ngcontent-%COMP%]   .txt-main-slt[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0 0 0 16px;\n  font-weight: bolder;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.43;\n  letter-spacing: normal;\n  color: #4a4a4a;\n}\n.theme2[_ngcontent-%COMP%]   .fab-revrse[_ngcontent-%COMP%] {\n  --background: #3e3e52;\n  width: 46px;\n  height: 48px;\n  position: absolute;\n  z-index: 5;\n  right: 3%;\n  top: 9%;\n}\n.theme2[_ngcontent-%COMP%]   .txt-date-1[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 91px;\n  margin: 0 15px 0 15px;\n  font-size: 14px;\n  font-weight: bolder;\n  text-align: right;\n  color: var(--iconsAndButtonsColor);\n}\n.theme2[_ngcontent-%COMP%]   .txt-date-2[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  margin: 0 0 0 15px;\n  font-size: 14px;\n  font-weight: bolder;\n  text-align: right;\n  color: var(--iconsAndButtonsColor);\n}\n.theme2[_ngcontent-%COMP%]   .icn-main[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  position: absolute;\n  right: 16px;\n  padding: 0;\n  width: 140px;\n  height: 40px;\n  top: 30px;\n}\n.theme2[_ngcontent-%COMP%]   .ripple-parent[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.theme2[_ngcontent-%COMP%]   .droppngg[_ngcontent-%COMP%] {\n  stroke: red;\n  color: red;\n  fill: red;\n}\n.theme2[_ngcontent-%COMP%]   .whole[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.6);\n}\n.theme2[_ngcontent-%COMP%]   .legend-box[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 90%;\n  background-size: cover;\n  height: 35%;\n  background-repeat: no-repeat;\n}\n.theme2[_ngcontent-%COMP%]   .legend-box-1[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 90%;\n  background-size: cover;\n  height: auto;\n  background-repeat: no-repeat;\n}\n.theme2[_ngcontent-%COMP%]   .txt-msg[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n  text-align: justify;\n  letter-spacing: 0.25px;\n  color: rgba(0, 0, 0, 0.6);\n  margin-top: 10px;\n  width: 100%;\n}\n.theme2[_ngcontent-%COMP%]   .dwn-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #ed3237;\n  margin-top: 28px;\n  width: 100%;\n  text-align: right;\n}\n.theme2[_ngcontent-%COMP%]   .chat-bg[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.theme2[_ngcontent-%COMP%]   .legend-box-1[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  width: 85%;\n  background-size: cover;\n  min-height: 40%;\n  background-repeat: no-repeat;\n}\n.theme2[_ngcontent-%COMP%]   .chat-ftr[_ngcontent-%COMP%] {\n  --background: white !important;\n  background-color: white !important;\n  position: absolute;\n  bottom: 15%;\n  width: 85%;\n}\n.theme2[_ngcontent-%COMP%]   .chat-hdr[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  --background: white !important;\n  background-color: white !important;\n}\n.theme2[_ngcontent-%COMP%]   .chat-hdr1[_ngcontent-%COMP%] {\n  width: 100%;\n  --background: white !important;\n  background-color: white !important;\n}\n.theme2[_ngcontent-%COMP%]   .start-btn[_ngcontent-%COMP%] {\n  color: #01e675;\n  --background: #1da110;\n}\n.theme2[_ngcontent-%COMP%]   .start-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n}\n.theme2[_ngcontent-%COMP%]   .Oval[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  background-color: #d8d8d8;\n  margin: 18px 0 19px 6px;\n  border-radius: 50px;\n}\n.theme2[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  margin: 8px 4px 0 5%;\n  height: 20px;\n  font-family: NotoSans;\n  font-size: 18px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.25;\n  letter-spacing: normal;\n}\n.theme2[_ngcontent-%COMP%]   .nameemailcom[_ngcontent-%COMP%] {\n  height: 14px;\n  margin: 0 4px 0 5%;\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n}\n.theme2[_ngcontent-%COMP%]   .wat-name-hdr[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  -webkit-text-fill-color: black;\n  left: 60px;\n  font-size: 13px;\n  font-weight: bolder;\n}\n.theme2[_ngcontent-%COMP%]   .wat-sub-hdr[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 38px;\n  -webkit-text-fill-color: grey;\n  left: 60px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.theme2[_ngcontent-%COMP%]   .watsapp-card[_ngcontent-%COMP%] {\n  padding: 15px 15px 35px;\n  border-radius: 0 15px 15px 15px;\n}\n.theme2[_ngcontent-%COMP%]   .center-justify[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 10px 10px 10px 0;\n  align-items: center;\n}\n.theme2[_ngcontent-%COMP%]   .sub-hdr-2[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: darkgrey;\n  margin-bottom: 5px;\n}\n.theme2[_ngcontent-%COMP%]   .wat-time[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  bottom: 10px;\n}\n.theme2[_ngcontent-%COMP%]   .bus-hire[_ngcontent-%COMP%] {\n  margin: 10px;\n  background-color: var(--primary);\n  padding: 2px;\n  border-radius: 8px;\n  text-align: center;\n}\n.theme2[_ngcontent-%COMP%]   .bus-hire[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 8px;\n  padding-right: 8px;\n}\n.theme2[_ngcontent-%COMP%]   .bus-hire[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin-left: 12px;\n}\n.theme2[_ngcontent-%COMP%]   .bus-hire[_ngcontent-%COMP%]   .bhire[_ngcontent-%COMP%] {\n  fill: var(--primary);\n  width: 60px;\n  height: 35px;\n  margin-top: 5px;\n}\n.theme2[_ngcontent-%COMP%]   .back-ground[_ngcontent-%COMP%] {\n  --background: none;\n  background-size: cover;\n  background-position: center center;\n}\n.theme2[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%] {\n  margin: auto;\n}\n@media screen and (max-height: 640px) {\n  .theme2[_ngcontent-%COMP%]   .wat-sub-hdr[_ngcontent-%COMP%] {\n    top: 38px;\n    left: 55px;\n  }\n  .theme2[_ngcontent-%COMP%]   .wat-name-hdr[_ngcontent-%COMP%] {\n    top: 5px;\n    left: 55px;\n  }\n  .theme2[_ngcontent-%COMP%]   .Oval[_ngcontent-%COMP%] {\n    margin: 12px 0 18px 2px;\n  }\n}\n.theme2[_ngcontent-%COMP%]   .centerImg[_ngcontent-%COMP%] {\n  height: 80px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 20px;\n}\n.theme2[_ngcontent-%COMP%]   ion-button.fffff.md.button.button-block.button-solid.ion-activatable.ion-focusable.hydrated[_ngcontent-%COMP%] {\n  margin: 6px 12px 6px 10px;\n  font-size: 10px;\n  font-weight: bold;\n  width: 96%;\n  border-radius: 8px;\n  height: 31px;\n}\n.theme2[_ngcontent-%COMP%]   .transparent[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n}\n\n.feedbackModal[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 90%;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.devider_set[_ngcontent-%COMP%] {\n  width: 101%;\n  position: relative;\n  background-color: #fff;\n  left: -1.5px;\n}\n\n.circle-ripple[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_ripple 3s linear infinite;\n  background-color: #b50e08;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  position: fixed;\n  right: 5%;\n  \n\n  z-index: 1;\n  bottom: 5%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n@keyframes _ngcontent-%COMP%_ripple {\n  0% {\n    transform: scale(0.8);\n    opacity: 0.8;\n  }\n  50% {\n    transform: scale(1.2);\n    opacity: 0.5;\n  }\n  100% {\n    transform: scale(0.8);\n    opacity: 0.8;\n  }\n}\n.trackingo_img[_ngcontent-%COMP%] {\n  background: url(https://www.laxmiholidays.com/tracking-e7c76b700dba896d3f17741183ad30789cf6ebe5879eb20d3aa43b21c5362229.png) no-repeat left bottom;\n  height: 49px;\n  width: 50px;\n  position: fixed;\n  right: 5%;\n  bottom: 5%;\n  z-index: 2; \n\n}\n\n.swap[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: -9%;\n  right: 6%;\n  z-index: 10;\n  --background: #fff;\n}\n\n.ourbus_segment[_ngcontent-%COMP%] {\n  margin: 8px;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.segment-button-checked[_ngcontent-%COMP%] {\n  --indicator-color:var(--iconsAndButtonsColor)!important;\n  --indicator-color-checked: transparent !important;\n  margin: 5px !important;\n  font-size: 14px;\n  font-weight: bold;\n  color: var(--primaryText) !important;\n}\n\n.ourbus_btn[_ngcontent-%COMP%] {\n  height: 50px;\n  box-shadow: none;\n  --border-radius: 8px;\n  font-size: 18px;\n  font-weight: 700;\n  --background:var(--iconsAndButtonsColor);\n  --color:var(--primaryText) ;\n}\n\n.item-label-floating[_ngcontent-%COMP%]   .sc-ion-input-md-h[_ngcontent-%COMP%] {\n  --padding-top: 7px;\n  --padding-bottom: 0px;\n  --padding-start: 0;\n}\n\n.cbus-row[_ngcontent-%COMP%] {\n  margin: 0px 7px;\n  padding-bottom: 8px;\n}\n.cbus-row[_ngcontent-%COMP%]   .cbus-col[_ngcontent-%COMP%] {\n  align-self: center;\n  padding: 14px 0px 10px 17px;\n}\n\n.background-container[_ngcontent-%COMP%] {\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.seabird_header[_ngcontent-%COMP%] {\n  width: 430px;\n  height: 30px;\n  gap: 0px;\n  opacity: 0px;\n  background-color: #2B28CE;\n}\n\n.seabird_logoheader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  background-color: #fff;\n}\n\n.seabird_logo[_ngcontent-%COMP%] {\n  width: 112px;\n  height: 30px;\n  margin-left: 2px;\n}\n\n.seabird_coin-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: white;\n  padding: 5px 10px;\n  border-radius: 15px;\n  border: 0.5px solid;\n  \n\n  \n\n  justify-content: end;\n}\n\n.seabird_coin-count[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 12px;\n  margin-left: 4px;\n}\n\n.seabird_inputcard[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  border: 1px solid #626262;\n  box-shadow: none;\n}\n\n.seabird_fab-reverse[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 24%;\n  left: 90%;\n  transform: translate(-50%, -50%);\n  --background:black;\n  z-index: 10;\n  --box-shadow:none;\n}\n\n.ourbus_swap-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 22px;\n  transform: translateY(3px);\n  transition: transform 0.5s ease-in-out;\n}\n\n.rotated[_ngcontent-%COMP%] {\n  transform: translateY(3px) rotate(180deg);\n}\n\n.seabird_custom-divider[_ngcontent-%COMP%] {\n  margin: 3px 0;\n  border: 0.1px solid #D3D3D3;\n  margin-left: -10px;\n  margin-right: -6px;\n}\n\n.seabird_feedback-options[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 4px;\n  padding-inline: 15px;\n}\n\n.seabird_feedback-option[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid #d1d1d1;\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  min-width: 65px;\n  height: 66px;\n  padding: 6px;\n  font-size: 14px;\n  background-color: white;\n}\n\n.seabird_feedback-option[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-top: 8px;\n}\n\n.seabird_feedback-option.hovered[_ngcontent-%COMP%] {\n  border-color: #007bff;\n  background-color: #DCEEFF;\n}\n\n.seabird_search-container[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.seabird_search-button[_ngcontent-%COMP%] {\n  --border-radius: 50px;\n  font-size: 14px;\n  font-weight: bold;\n  margin-left: 19px;\n  width: 90%;\n  height: 45px;\n}\n\n.seabird_grid[_ngcontent-%COMP%] {\n  margin-top: 1px;\n  margin-bottom: 0px;\n  border: 0.5px solid #626262;\n  border-radius: 8px;\n  padding-left: 7px;\n}\n\n.seabird_box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 70px;\n  border-radius: 8px;\n  margin-bottom: 10px;\n  width: 100px;\n}\n\n.seabird_route-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n  padding: 20px;\n  margin-top: -15px;\n}\n\n.seabird_route-item[_ngcontent-%COMP%] {\n  flex: 1 1 calc(44% - 17px);\n  flex: 0 1 calc(50% - 20px); \n\n  background-color: white;\n  border-radius: 10px;\n  padding: 12px 5px;\n  margin: 4px;\n  margin: 4px 0; \n\n  text-align: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  font-size: 10px;\n  font-weight: 700;\n  border: 0.5px solid #D3D3D3;\n  color: #333;\n  max-width: calc(85% - 59px);\n  max-width: calc(50% - 20px); \n\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: #2B28CE;\n  width: 100%;\n  height: 90px;\n  gap: 0px;\n  opacity: 0px;\n}\n\n.seabirdTheme[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  height: 100%;\n}\n.seabirdTheme[_ngcontent-%COMP%]   .seabird_txt-main-sb[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  color: grey !important;\n}\n.seabirdTheme[_ngcontent-%COMP%]   .seabird_box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 70px;\n  border-radius: 8px;\n  margin-bottom: 10px;\n  width: 100px;\n}\n.seabirdTheme[_ngcontent-%COMP%]   .ourbustheme[_ngcontent-%COMP%]   .native-input.sc-ion-input-md[_ngcontent-%COMP%] {\n  font-family: \"Test S\u00F6hne\" !important;\n}\n.seabirdTheme[_ngcontent-%COMP%]   .ourbustheme[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-family: \"Test S\u00F6hne\" !important;\n}\n.seabirdTheme[_ngcontent-%COMP%]   .seabird_txt-main-slt[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #999999;\n}\n\nion-modal[_ngcontent-%COMP%]::part(content) {\n  width: var(--width);\n  height: var(--height);\n  border-radius: var(--border-radius);\n  max-width: 90%;\n  max-height: 80%;\n}\n\n.placeholder[_ngcontent-%COMP%] {\n  color: #999;\n}\n\n.popular-routes-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n  margin-left: 20px;\n  display: block;\n  margin-bottom: 10px;\n}\n\n.popular-routes-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 14px;\n  margin-left: 17px;\n}\n\n.route-card[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 10px;\n  width: 165px;\n  height: 39px;\n  text-align: center;\n  background-color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n}\n\n.route-content[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #000;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.seabird_boxx[_ngcontent-%COMP%] {\n  border: 1px solid #626262;\n  padding: 10px;\n  border-radius: 10px;\n  font-size: 12px;\n  font-weight: 400;\n  text-align: center;\n  background-color: #fff;\n}\n\n.custom-calendar-modal[_ngcontent-%COMP%]   .days-btn[_ngcontent-%COMP%]   .days-subTitle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #ff5733;\n}\n\n.seabird_swap-icon[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  transform: translateY(3px);\n  transition: transform 0.5s ease-in-out;\n}\n\n.isshadow[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.1);\n  border-radius: 25px;\n}\n\n.calender_show[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.calender_hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.legend-box-ourbus[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  width: 90%;\n  background-size: cover;\n  height: auto;\n  background-repeat: no-repeat;\n}\n\n.ourBusMain[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.4);\n}\n\n.ourbus-start-btn[_ngcontent-%COMP%] {\n  --background:var(--iconsAndButtonsColor) !important;\n  --color:var(--primaryText) !important;\n}\n\n.ourbus-center-justify[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 10px 10px 10px 0;\n  align-items: center;\n}\n\n.ourbus-cross[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 2%;\n  top: 2%;\n  font-size: 18px;\n}\n\n.fabBtn_ourbus[_ngcontent-%COMP%] {\n  --background: transparent;\n  width: 80px;\n  height: 80px;\n  --background-activated: transparent;\n  --box-shadow: none;\n}\n\n.ourbus-ion-radio[_ngcontent-%COMP%] {\n  --color:var(--iconsAndButtonsColor);\n  --color-checked: var(--iconsAndButtonsColor);\n}\n\n.seabird-legend-box-1[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 90%;\n  background-size: cover;\n  height: auto;\n  background-repeat: no-repeat;\n}\n\n.seabirdMain[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.4);\n}\n\n.passenger-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.passenger-input[_ngcontent-%COMP%] {\n  width: 50px;\n  text-align: center;\n  font-size: 18px;\n  font-weight: bold;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 5px;\n  margin: 0 10px;\n}\n\n.action-button[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  --icon-size: 20px;\n}\n\n.getdateAlign[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.ourbus_inputSeg[_ngcontent-%COMP%] {\n  color: #2d2d2d;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.seabird_swap-icon[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease-in-out;\n}\n\n.seabird_swap-icon.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.seabird_Recent-searches[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 14px;\n  margin-left: 20px;\n  display: block;\n  margin-bottom: 10px;\n}\n\n.network_SWap[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 48px;\n  transition: transform 0.3s ease-in-out;\n  filter: invert(63%) sepia(46%) saturate(3107%) hue-rotate(330deg) brightness(100%) contrast(102%);\n}\n\n.network_SWap.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.rotate[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_rotation 0.3s linear;\n}\n\n@keyframes _ngcontent-%COMP%_rotation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(180deg);\n  }\n}\n.bp-dp[_ngcontent-%COMP%] {\n  filter: invert(29%) sepia(0%) saturate(0%) hue-rotate(180deg) brightness(64%) contrast(88%);\n}\n\n.close-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  font-size: 20px;\n  color: #000;\n}\n\n.shyamoli-theme[_ngcontent-%COMP%] {\n  --background: var(--viewBgColor) !important;\n  font-family: \"Gilroy\" !important;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #333;\n  text-transform: capitalize;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .shyamoli-header[_ngcontent-%COMP%] {\n  background-color: #fdf6e3;\n  padding: 16px 0;\n  padding-top: calc(20px + var(--ion-safe-area-top, 0px));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: none;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .shyamoli-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 360px;\n  display: flex;\n  justify-content: center;\n  padding: 0 16px;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .shyamoli-header[_ngcontent-%COMP%]   .shyamoli-logo[_ngcontent-%COMP%] {\n  height: 28px;\n  width: auto;\n  object-fit: contain;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding: 0 16px;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .greeting-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 24px 0 16px 0;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .greeting-section[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .greeting-section[_ngcontent-%COMP%]   .greeting-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #000;\n  margin: 0;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .greeting-section[_ngcontent-%COMP%]   .wallet-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #ffffff;\n  border: 0.5px solid #c2c2c2;\n  border-radius: 50px;\n  padding: 6px 12px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .greeting-section[_ngcontent-%COMP%]   .wallet-badge[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .greeting-section[_ngcontent-%COMP%]   .wallet-badge[_ngcontent-%COMP%]   .flash-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-bottom: 32px;\n  margin-left: 63px;\n  height: 16px;\n  width: 16px;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .greeting-section[_ngcontent-%COMP%]   .wallet-badge[_ngcontent-%COMP%]   .wallet-icon-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .greeting-section[_ngcontent-%COMP%]   .wallet-badge[_ngcontent-%COMP%]   .wallet-icon-wrapper[_ngcontent-%COMP%]   .wallet-icon[_ngcontent-%COMP%] {\n  width: 13px;\n  height: 13px;\n  color: var(--iconsAndButtonsColor, #3bad69);\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .greeting-section[_ngcontent-%COMP%]   .wallet-badge[_ngcontent-%COMP%]   .wallet-amount[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: #140d1c;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .greeting-section[_ngcontent-%COMP%]   .wallet-badge[_ngcontent-%COMP%]   .info-icon-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: #ebebeb;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .greeting-section[_ngcontent-%COMP%]   .wallet-badge[_ngcontent-%COMP%]   .info-icon-wrapper[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  font-size: 6px;\n  color: #000;\n  font-weight: 700;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .greeting-section[_ngcontent-%COMP%]   .login-button-wrapper[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--iconsAndButtonsColor, #ff9100);\n  color: var(--primaryText, #fff);\n  border: none;\n  border-radius: 50px;\n  padding: 6px 12px;\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .greeting-section[_ngcontent-%COMP%]   .login-button-wrapper[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .greeting-section[_ngcontent-%COMP%]   .login-button-wrapper[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]   .login-icon[_ngcontent-%COMP%] {\n  width: 13px;\n  height: 13px;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .trip-type-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin: 16px 0;\n  height: 31px;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .trip-type-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 30px;\n  background-color: #f1f2f4;\n  color: #999;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-align: center;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .trip-type-tabs[_ngcontent-%COMP%]   .tab-button.active[_ngcontent-%COMP%] {\n  background-color: var(--bookingDetailsBgColor);\n  color: var(--primaryText, #fff);\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .trip-type-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin: 16px 0;\n  position: relative;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  border: 1px solid #d9d9d9;\n  border-radius: 5px;\n  padding: 16px;\n  background-color: #fff;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]:active {\n  background-color: #f9f9f9;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #999;\n  display: block;\n  margin-bottom: 3px;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-value[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: #3d3e42;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .calendar-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #000;\n  font-size: 24px;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 50px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #666;\n  font-size: 20px;\n  cursor: pointer;\n  z-index: 10;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]:active {\n  color: #000;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .swap-button-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 68px;\n  z-index: 10;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .swap-button-wrapper[_ngcontent-%COMP%]   .swap-button[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  background-color: var(--iconsAndButtonsColor, #ff9100);\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .swap-button-wrapper[_ngcontent-%COMP%]   .swap-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 21px;\n  height: 21px;\n  transition: transform 0.3s ease;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .swap-button-wrapper[_ngcontent-%COMP%]   .swap-button.rotate[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .swap-button-wrapper[_ngcontent-%COMP%]   .swap-button[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .quick-date-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 8px;\n  display: inline-block;\n  width: 100%;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .quick-date-buttons[_ngcontent-%COMP%]   .tomorrow[_ngcontent-%COMP%] {\n  float: inline-end;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .quick-date-buttons[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%] {\n  float: inline-start;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .quick-date-buttons[_ngcontent-%COMP%]   .quick-date-btn[_ngcontent-%COMP%] {\n  width: 48%;\n  flex: 1;\n  padding: 8px 8px;\n  border: 1px solid #d9d9d9;\n  border-radius: 30px;\n  background-color: #fff;\n  color: #3d3e42;\n  font-size: 13px;\n  font-weight: 400;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-align: center;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .quick-date-buttons[_ngcontent-%COMP%]   .quick-date-btn[_ngcontent-%COMP%]:active {\n  background-color: #f0f0f0;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .search-buses-button[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border: none;\n  border-radius: 30px;\n  background-color: var(--iconsAndButtonsColor, #ff9100);\n  color: var(--primaryText, #fff);\n  font-size: 17px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-align: center;\n  margin-top: 8px;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .search-buses-button[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .services-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  gap: 16px;\n  margin: 24px 0;\n  padding: 16px;\n  background-color: #f8f9fa;\n  border-radius: 10px;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .services-section[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .services-section[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .services-section[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  color: var(--iconsAndButtonsColor, #ff9100);\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .services-section[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #333;\n  text-align: center;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  margin-bottom: 16px;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #333;\n  margin: 0;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .recent-search-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .recent-search-list[_ngcontent-%COMP%]   .recent-search-card[_ngcontent-%COMP%] {\n  background-color: #fdf6e3;\n  border-radius: 10px;\n  padding: 16px;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .recent-search-list[_ngcontent-%COMP%]   .recent-search-card[_ngcontent-%COMP%]   .recent-search-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .recent-search-list[_ngcontent-%COMP%]   .recent-search-card[_ngcontent-%COMP%]   .recent-search-content[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 21px;\n  height: 31px;\n  fill: #000;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .recent-search-list[_ngcontent-%COMP%]   .recent-search-card[_ngcontent-%COMP%]   .recent-search-content[_ngcontent-%COMP%]   .recent-search-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .recent-search-list[_ngcontent-%COMP%]   .recent-search-card[_ngcontent-%COMP%]   .recent-search-content[_ngcontent-%COMP%]   .recent-search-info[_ngcontent-%COMP%]   .recent-search-route[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #333;\n  margin-bottom: 4px;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .recent-search-list[_ngcontent-%COMP%]   .recent-search-card[_ngcontent-%COMP%]   .recent-search-content[_ngcontent-%COMP%]   .recent-search-info[_ngcontent-%COMP%]   .recent-search-date[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #5f5f5f;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .recent-search-list[_ngcontent-%COMP%]   .recent-search-card[_ngcontent-%COMP%]   .recent-search-content[_ngcontent-%COMP%]   .book-now-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--iconsAndButtonsColor, #ff9100);\n  cursor: pointer;\n  white-space: nowrap;\n  transition: opacity 0.3s ease;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .recent-search-list[_ngcontent-%COMP%]   .recent-search-card[_ngcontent-%COMP%]   .recent-search-content[_ngcontent-%COMP%]   .book-now-link[_ngcontent-%COMP%]:active {\n  opacity: 0.8;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .recent-search-list[_ngcontent-%COMP%]   .recent-search-card[_ngcontent-%COMP%]   .recent-search-content[_ngcontent-%COMP%]   .book-now-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 5px;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .recent-search-swiper[_ngcontent-%COMP%] {\n  overflow: visible;\n  width: 100%;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .recent-search-swiper[_ngcontent-%COMP%]   .recent-search-slide[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .recent-search-swiper[_ngcontent-%COMP%]   .recent-search-slide[_ngcontent-%COMP%]   .recent-search-card[_ngcontent-%COMP%] {\n  background-color: #fdf6e3;\n  border-radius: 10px;\n  padding: 16px;\n  min-width: 280px;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .recent-search-swiper[_ngcontent-%COMP%]   .recent-search-slide[_ngcontent-%COMP%]   .recent-search-card[_ngcontent-%COMP%]   .recent-search-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .recent-search-swiper[_ngcontent-%COMP%]   .recent-search-slide[_ngcontent-%COMP%]   .recent-search-card[_ngcontent-%COMP%]   .recent-search-content[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 21px;\n  height: 31px;\n  fill: #000;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .recent-search-swiper[_ngcontent-%COMP%]   .recent-search-slide[_ngcontent-%COMP%]   .recent-search-card[_ngcontent-%COMP%]   .recent-search-content[_ngcontent-%COMP%]   .recent-search-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .recent-search-swiper[_ngcontent-%COMP%]   .recent-search-slide[_ngcontent-%COMP%]   .recent-search-card[_ngcontent-%COMP%]   .recent-search-content[_ngcontent-%COMP%]   .recent-search-info[_ngcontent-%COMP%]   .recent-search-route[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #333;\n  margin-bottom: 4px;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .recent-search-swiper[_ngcontent-%COMP%]   .recent-search-slide[_ngcontent-%COMP%]   .recent-search-card[_ngcontent-%COMP%]   .recent-search-content[_ngcontent-%COMP%]   .recent-search-info[_ngcontent-%COMP%]   .recent-search-date[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #5f5f5f;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .recent-search-swiper[_ngcontent-%COMP%]   .recent-search-slide[_ngcontent-%COMP%]   .recent-search-card[_ngcontent-%COMP%]   .recent-search-content[_ngcontent-%COMP%]   .book-now-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--iconsAndButtonsColor, #ff9100);\n  cursor: pointer;\n  white-space: nowrap;\n  transition: opacity 0.3s ease;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .recent-search-swiper[_ngcontent-%COMP%]   .recent-search-slide[_ngcontent-%COMP%]   .recent-search-card[_ngcontent-%COMP%]   .recent-search-content[_ngcontent-%COMP%]   .book-now-link[_ngcontent-%COMP%]:active {\n  opacity: 0.8;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .recent-search-swiper[_ngcontent-%COMP%]   .recent-search-slide[_ngcontent-%COMP%]   .recent-search-card[_ngcontent-%COMP%]   .recent-search-content[_ngcontent-%COMP%]   .book-now-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 5px;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .offer-banner[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--iconsAndButtonsColor, #ff9100) 0%, #ffb347 100%);\n  border-radius: 10px;\n  padding: 16px;\n  margin-bottom: 16px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .offer-banner[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .offer-banner[_ngcontent-%COMP%]   .offer-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .offer-banner[_ngcontent-%COMP%]   .offer-content[_ngcontent-%COMP%]   .offer-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .offer-banner[_ngcontent-%COMP%]   .offer-content[_ngcontent-%COMP%]   .offer-text[_ngcontent-%COMP%]   .offer-percentage[_ngcontent-%COMP%] {\n  font-size: 60px;\n  font-weight: 900;\n  color: #fff;\n  line-height: 1;\n  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .offer-banner[_ngcontent-%COMP%]   .offer-content[_ngcontent-%COMP%]   .offer-text[_ngcontent-%COMP%]   .offer-percentage[_ngcontent-%COMP%]   .percent-symbol[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .offer-banner[_ngcontent-%COMP%]   .offer-content[_ngcontent-%COMP%]   .offer-text[_ngcontent-%COMP%]   .offer-off[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #fff;\n  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .offer-banner[_ngcontent-%COMP%]   .offer-content[_ngcontent-%COMP%]   .offer-bus-image[_ngcontent-%COMP%] {\n  height: 100px;\n  width: auto;\n  max-width: 50%;\n  object-fit: contain;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .download-app-section[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  border-radius: 8px;\n  padding: 16px;\n  margin: 24px 0;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .download-app-section[_ngcontent-%COMP%]   .download-app-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .download-app-section[_ngcontent-%COMP%]   .download-app-content[_ngcontent-%COMP%]   .app-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex: 1;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .download-app-section[_ngcontent-%COMP%]   .download-app-content[_ngcontent-%COMP%]   .app-info[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%] {\n  height: 31px;\n  width: 31px;\n  flex-shrink: 0;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .download-app-section[_ngcontent-%COMP%]   .download-app-content[_ngcontent-%COMP%]   .app-info[_ngcontent-%COMP%]   .app-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n  color: #333;\n  line-height: 1.3;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .download-app-section[_ngcontent-%COMP%]   .download-app-content[_ngcontent-%COMP%]   .download-button[_ngcontent-%COMP%] {\n  background-color: var(--iconsAndButtonsColor, #ff9100);\n  color: var(--primaryText, #fff);\n  border: none;\n  border-radius: 20px;\n  padding: 8px 16px;\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  white-space: nowrap;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .download-app-section[_ngcontent-%COMP%]   .download-app-content[_ngcontent-%COMP%]   .download-button[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .whatsapp-fab[_ngcontent-%COMP%] {\n  --background: transparent;\n  --box-shadow: none;\n}\n.shyamoli-theme[_ngcontent-%COMP%]   .whatsapp-fab[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  --background: transparent;\n  --box-shadow: none;\n  padding: 0;\n}\n\n@media (max-width: 768px) {\n  .shyamoli-theme[_ngcontent-%COMP%]   .shyamoli-header[_ngcontent-%COMP%] {\n    padding: 14px 0;\n  }\n  .shyamoli-theme[_ngcontent-%COMP%]   .shyamoli-header[_ngcontent-%COMP%]   .shyamoli-logo[_ngcontent-%COMP%] {\n    height: 24px;\n  }\n  .shyamoli-theme[_ngcontent-%COMP%]   .greeting-section[_ngcontent-%COMP%] {\n    margin: 16px 0 12px 0;\n  }\n  .shyamoli-theme[_ngcontent-%COMP%]   .greeting-section[_ngcontent-%COMP%]   .greeting-text[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .shyamoli-theme[_ngcontent-%COMP%]   .greeting-section[_ngcontent-%COMP%]   .wallet-badge[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .shyamoli-theme[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .shyamoli-theme[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-label[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .shyamoli-theme[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-value[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .shyamoli-theme[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .swap-button-wrapper[_ngcontent-%COMP%] {\n    top: 48px;\n  }\n  .shyamoli-theme[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .swap-button-wrapper[_ngcontent-%COMP%]   .swap-button[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n  }\n  .shyamoli-theme[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .search-buses-button[_ngcontent-%COMP%] {\n    font-size: 15px;\n    padding: 12px;\n  }\n  .shyamoli-theme[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .shyamoli-theme[_ngcontent-%COMP%]   .offer-banner[_ngcontent-%COMP%]   .offer-content[_ngcontent-%COMP%]   .offer-text[_ngcontent-%COMP%]   .offer-percentage[_ngcontent-%COMP%] {\n    font-size: 48px;\n  }\n  .shyamoli-theme[_ngcontent-%COMP%]   .offer-banner[_ngcontent-%COMP%]   .offer-content[_ngcontent-%COMP%]   .offer-text[_ngcontent-%COMP%]   .offer-percentage[_ngcontent-%COMP%]   .percent-symbol[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .shyamoli-theme[_ngcontent-%COMP%]   .offer-banner[_ngcontent-%COMP%]   .offer-content[_ngcontent-%COMP%]   .offer-text[_ngcontent-%COMP%]   .offer-off[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .shyamoli-theme[_ngcontent-%COMP%]   .offer-banner[_ngcontent-%COMP%]   .offer-content[_ngcontent-%COMP%]   .offer-bus-image[_ngcontent-%COMP%] {\n    height: 80px;\n  }\n}\n@media (max-width: 480px) {\n  .shyamoli-theme[_ngcontent-%COMP%]   .greeting-text[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .shyamoli-theme[_ngcontent-%COMP%]   .trip-type-tabs[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .shyamoli-theme[_ngcontent-%COMP%]   .trip-type-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%] {\n    font-size: 12px;\n    padding: 6px 12px;\n  }\n  .shyamoli-theme[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .shyamoli-theme[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-label[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .shyamoli-theme[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-value[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .shyamoli-theme[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .quick-date-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .shyamoli-theme[_ngcontent-%COMP%]   .recent-search-card[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .shyamoli-theme[_ngcontent-%COMP%]   .recent-search-card[_ngcontent-%COMP%]   .recent-search-content[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n  .shyamoli-theme[_ngcontent-%COMP%]   .recent-search-card[_ngcontent-%COMP%]   .recent-search-content[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n    width: 18px;\n    height: 28px;\n  }\n  .shyamoli-theme[_ngcontent-%COMP%]   .offer-banner[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .shyamoli-theme[_ngcontent-%COMP%]   .offer-banner[_ngcontent-%COMP%]   .offer-content[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .shyamoli-theme[_ngcontent-%COMP%]   .offer-banner[_ngcontent-%COMP%]   .offer-content[_ngcontent-%COMP%]   .offer-text[_ngcontent-%COMP%]   .offer-percentage[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n  .shyamoli-theme[_ngcontent-%COMP%]   .offer-banner[_ngcontent-%COMP%]   .offer-content[_ngcontent-%COMP%]   .offer-text[_ngcontent-%COMP%]   .offer-percentage[_ngcontent-%COMP%]   .percent-symbol[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .shyamoli-theme[_ngcontent-%COMP%]   .offer-banner[_ngcontent-%COMP%]   .offer-content[_ngcontent-%COMP%]   .offer-text[_ngcontent-%COMP%]   .offer-off[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .shyamoli-theme[_ngcontent-%COMP%]   .offer-banner[_ngcontent-%COMP%]   .offer-content[_ngcontent-%COMP%]   .offer-bus-image[_ngcontent-%COMP%] {\n    height: 60px;\n  }\n}\n.cbus-today-tomorrow[_ngcontent-%COMP%] {\n  margin: auto;\n  color: #191966;\n  font-size: 13px !important;\n  font-weight: bold !important;\n}\n\n.network-today-tomorrow[_ngcontent-%COMP%] {\n  margin: auto;\n  color: var(--primaryText);\n  font-size: 13px !important;\n  font-weight: bold !important;\n}\n\n.pulse[_ngcontent-%COMP%] {\n  margin-bottom: 66px;\n  animation: _ngcontent-%COMP%_pulse 1.4s infinite;\n  border-radius: 50%;\n  box-shadow: 0 0 0 rgba(0, 0, 0, 0.4);\n  --background: white;\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    transform: scale(1);\n    box-shadow: 0 0 0 0 rgba(255, 165, 0, 0.5);\n  }\n  70% {\n    transform: scale(1.08);\n    box-shadow: 0 0 0 15px rgba(255, 165, 0, 0);\n  }\n  100% {\n    transform: scale(1);\n    box-shadow: 0 0 0 0 rgba(255, 165, 0, 0);\n  }\n}"]
});

/***/ },

/***/ 32734
/*!********************************************************!*\
  !*** ./src/app/rate-service/rate-service.component.ts ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RateServiceComponent: () => (/* binding */ RateServiceComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 16213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/appdata */ 40172);
var _RateServiceComponent;








const _c0 = ["theSlides"];
function RateServiceComponent_div_1_swiper_slide_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "swiper-slide")(1, "div")(2, "div")(3, "ion-row", 18)(4, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-col", 21)(7, "ion-row")(8, "ion-col", 22)(9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 23)(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div")(17, "div", 24)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div")(21, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "ion-col", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-col", 19)(24, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RateServiceComponent_div_1_swiper_slide_4_Template_span_click_24_listener() {
      const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      const theSlides_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.getrating1(item_r3.id, 1, theSlides_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-col", 19)(27, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RateServiceComponent_div_1_swiper_slide_4_Template_span_click_27_listener() {
      const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      const theSlides_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.getrating1(item_r3.id, 2, theSlides_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-col", 19)(30, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RateServiceComponent_div_1_swiper_slide_4_Template_span_click_30_listener() {
      const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      const theSlides_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.getrating1(item_r3.id, 3, theSlides_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-col", 19)(33, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RateServiceComponent_div_1_swiper_slide_4_Template_span_click_33_listener() {
      const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      const theSlides_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.getrating1(item_r3.id, 4, theSlides_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " 4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ion-col", 19)(36, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RateServiceComponent_div_1_swiper_slide_4_Template_span_click_36_listener() {
      const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      const theSlides_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.getrating1(item_r3.id, 5, theSlides_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " 5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "ion-col", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-row")(40, "ion-col", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Not Satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "ion-col", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ion-col", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Very Satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r4.lastBokingDetails.origin, " to ", ctx_r4.lastBokingDetails.destination, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r4.lastBokingDetails.doj, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", ctx_r4.lastBokingDetails.bus_details, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.msg);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "btn_", item_r3.id, "_1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "btn_", item_r3.id, "_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "btn_", item_r3.id, "_3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "btn_", item_r3.id, "_4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "btn_", item_r3.id, "_5");
  }
}
function RateServiceComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "div")(2, "swiper-container", 4, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RateServiceComponent_div_1_swiper_slide_4_Template, 45, 15, "swiper-slide", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "swiper-slide")(6, "div", 6)(7, "div", 7)(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Would you like to travel with us again? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RateServiceComponent_div_1_Template_span_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const theSlides_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.travelAgain("yes", theSlides_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " YES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RateServiceComponent_div_1_Template_span_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const theSlides_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.travelAgain("no", theSlides_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " NO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "swiper-slide")(16, "div")(17, "div", 11)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Please write the feedback (optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12)(21, "ion-textarea", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function RateServiceComponent_div_1_Template_ion_textarea_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r4.feedback, $event) || (ctx_r4.feedback = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionInput", function RateServiceComponent_div_1_Template_ion_textarea_ionInput_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.countChars());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14)(23, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "250 Character(s) left");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 16)(26, "ion-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RateServiceComponent_div_1_Template_ion_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.submitFeedback());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r4.slideOpts);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.searchData);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r4.feedback);
  }
}
function RateServiceComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 30)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Thanks for submitting your feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
class RateServiceComponent {
  constructor(apiFactory, util, commonStorage, commonService, appData) {
    this.apiFactory = apiFactory;
    this.util = util;
    this.commonStorage = commonStorage;
    this.commonService = commonService;
    this.appData = appData;
    this.queriesList = [];
    this.model_obj = {};
    this.slideOpts = {
      // initialSlide: 0,
      // speed: 400,
      // loop: false,
      // autoplay: {
      //   delay: 2000,
      // },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    };
    this.feedback = "";
    this.ratingdata = {};
    this.givenRating = false;
    this.metaData = commonStorage.localGet('metaData');
    this.showRatingReviewModal = this.metaData.showRatingReviewModalForBooking;
    this.lastBokingDetails = this.metaData.lastBookingDetails;
  }
  ngOnInit() {
    this.apiFactory.getFeedbackQueries().subscribe(res => {
      this.searchData = [];
      for (let i = 0; i <= res.length - 1; i++) {
        var d = {
          id: "",
          msg: ""
        };
        for (const property in res[i]) {
          d.id = property;
          d.msg = res[i][property];
        }
        this.searchData.push(d);
      }
    }, err => {});
  }
  getrating1(msgId, ratingnumber, slides) {
    var _this$swiperRef;
    let io = [];
    for (let j = 1; j <= 5; j++) {
      const element = document.getElementById('btn_' + msgId + '_' + j);
      if (element) element.style.backgroundColor = '#f0f0f0';
    }
    for (let i = 1; i <= ratingnumber; i++) {
      io.push(i);
      io.forEach(item => {
        const element = document.getElementById('btn_' + msgId + '_' + item);
        if (element) element.style.backgroundColor = 'var(--iconsAndButtonsColor)';
      });
      this.ratingdata[msgId] = ratingnumber;
    }
    (_this$swiperRef = this.swiperRef) === null || _this$swiperRef === void 0 || _this$swiperRef.nativeElement.swiper.slideNext(500, false);
    // slides.slideNext();
  }
  travelAgain(value, slides) {
    var _this$swiperRef2;
    this.travelAgainmsg = value;
    if (value == 'yes') {
      const element = document.getElementById('btn_yes');
      if (element) element.style.backgroundColor = 'var(--iconsAndButtonsColor)';
    } else {
      const element = document.getElementById('btn_yes');
      if (element) element.style.backgroundColor = '#f0f0f0';
    }
    if (value == 'no') {
      const element = document.getElementById('btn_no');
      if (element) element.style.backgroundColor = 'var(--iconsAndButtonsColor)';
    } else {
      const element = document.getElementById('btn_no');
      if (element) element.style.backgroundColor = '#f0f0f0';
    }
    (_this$swiperRef2 = this.swiperRef) === null || _this$swiperRef2 === void 0 || _this$swiperRef2.nativeElement.swiper.slideNext(500, false);
    // slides.slideNext();
  }
  submitFeedback() {
    var data = Object.keys(this.ratingdata);
    this.enteredData = data;
    this.ratingdata['pnr_number'] = this.lastBokingDetails.pnr_number;
    this.ratingdata["device_id"] = "";
    this.ratingdata["action"] = "update_feedback_ratings";
    this.ratingdata["controller"] = "api";
    this.ratingdata["format"] = "json";
    this.ratingdata["like_to_travel_again"] = this.travelAgainmsg;
    this.ratingdata["feedback"] = this.feedback;
    this.apiFactory.updateFeedback(this.lastBokingDetails.pnr_number, "", this.ratingdata).subscribe(res => {
      if (res.code == '401') {
        this.util.showToast(res.message);
        this.givenRating = false;
      } else {
        this.givenRating = true;
        this.util.showToast(res.message);
        setTimeout(() => {
          const box = document.getElementById('box');
          const rateservicebox = document.getElementById('rateservice');
          if (box) box.style.display = 'none';
          if (rateservicebox) rateservicebox.style.visibility = 'hidden';
          this.apiFactory.getMetaAppData().subscribe(response => {
            if (!response.code) {
              let localData = this.appData.isANDROID ? response === null || response === void 0 ? void 0 : response.result[0].open_tic_tnc : response[0].open_tic_tnc;
              this.commonService.setMetaApp(localData);
            }
          });
        }, 2000);
      }
    }, err => {});
  }
  countChars() {
    const myTextArea = this.feedback;
    const charNum = document.getElementById("charNum");
    var maxLength = 250;
    const remaining = maxLength - myTextArea.length;
    if (charNum) charNum.textContent = `${remaining} characters (s) left`;
  }
  ionViewWillEnter() {
    this.metaData = this.commonStorage.localGet('metaData');
  }
}
_RateServiceComponent = RateServiceComponent;
_RateServiceComponent.ɵfac = function RateServiceComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RateServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_2__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_3__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_4__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_6__.AppData));
};
_RateServiceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _RateServiceComponent,
  selectors: [["app-rate-service"]],
  viewQuery: function RateServiceComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.swiperRef = _t.first);
    }
  },
  decls: 3,
  vars: 3,
  consts: [["theSlides", ""], ["id", "box", 3, "ngClass"], ["class", "card seat-card-bg", 4, "ngIf"], [1, "card", "seat-card-bg"], ["pagination", "true", 3, "options"], [4, "ngFor", "ngForOf"], [2, "transform", "translateY(65px)"], [1, "textSet"], [1, "btnSelect"], ["id", "btn_yes", 1, "btnDesign", 3, "click"], ["id", "btn_no", 1, "btnDesign", 3, "click"], [1, "feedbackSet"], [2, "margin-left", "15px", "margin-right", "15px"], ["rows", "4", "cols", "12", 2, "border", "1px solid black", "width", "100%", 3, "ngModelChange", "ionInput", "ngModel"], [2, "text-align", "right"], ["id", "charNum", 2, "font-size", "12px", "font-weight", "400", "color", "#4b4b4b", "padding-right", "10px"], [2, "display", "flex", "justify-content", "center", "margin-bottom", "33px"], [1, "submitBtn", 3, "click"], [2, "align-items", "center", "margin-top", "-10px"], ["size", "2"], ["src", "././assets/icon/destination.png", 2, "height", "35px"], ["size", "10"], [2, "text-align", "left"], [1, "sourToDest"], [1, "msgShow"], ["size", "1"], [1, "rateBtn", 3, "click", "id"], ["size", "4", 1, "msgShow"], ["size", "4"], ["src", "././assets/icon/thank-you.png", 2, "height", "60px"], [1, "feebackSubmit"]],
  template: function RateServiceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RateServiceComponent_div_1_Template, 28, 3, "div", 2)(2, RateServiceComponent_div_2_Template, 6, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.metaData.msiteFolder == "shyamolitheme" ? "shyamoli-center-div" : "center-div");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.lastBokingDetails.pnr_number != null && ctx.showRatingReviewModal && ctx.givenRating == false);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.givenRating == true && ctx.searchData.length == ctx.enteredData.length && ctx.travelAgainmsg != null);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf],
  styles: [".center-div[_ngcontent-%COMP%] {\n  margin: 12px;\n}\n\n.shyamoli-center-div[_ngcontent-%COMP%] {\n  margin: 12px 0px;\n}\n\n.card[_ngcontent-%COMP%] {\n  height: 72px;\n  border-radius: 4px;\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12);\n  background-color: #ffffff;\n}\n\n.seat-card-bg[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: solid 1px #dddddd;\n  background-color: #ffffff;\n  width: 100%;\n  height: auto;\n  margin: 0px 0px 10px 0px;\n  display: inline-block;\n  padding: 10px 0px;\n}\n\n.queries[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #383a3e;\n  text-align: justify;\n  font-size: 14px;\n  padding: 8px;\n}\n\n.rate_div[_ngcontent-%COMP%] {\n  margin-top: -22px;\n  margin-left: -90px;\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  position: fixed;\n  bottom: 10px;\n  height: 50px;\n  border-radius: 4px;\n}\n\n.rateBtn[_ngcontent-%COMP%] {\n  display: flex;\n  \n\n  justify-content: center;\n  align-items: center;\n  \n\n  \n\n  width: 46px;\n  height: 32px;\n  border-radius: 4px;\n  background: #f0f0f0;\n}\n\n.msgShow[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #4b4b4b;\n  padding: 0px 10px 10px 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.textSet[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #4b4b4b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 0px;\n}\n\n.btnSelect[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.btnDesign[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  margin-right: 10px;\n  margin-left: 10px;\n  padding: 10px 26px;\n  border-radius: 5px;\n}\n\n.feedbackSet[_ngcontent-%COMP%] {\n  color: #4a4a4a;\n  font-size: 12px;\n  font-weight: 400;\n}\n\n.submitBtn[_ngcontent-%COMP%] {\n  --background: var(--iconsAndButtonsColor);\n}\n\nion-textarea.sc-ion-textarea-md-h.sc-ion-textarea-md-s.md.hydrated[_ngcontent-%COMP%] {\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n}\n\nion-slide[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\nion-slide.md.swiper-slide.swiper-zoom-container.hydrated.swiper-slide-active[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.sourToDest[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  color: #4b4b4b;\n}\n\n.feebackSubmit[_ngcontent-%COMP%] {\n  color: #4a4a4a;\n  font-size: 12px;\n  font-weight: 400;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}"]
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