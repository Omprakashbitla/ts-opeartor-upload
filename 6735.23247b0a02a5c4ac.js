"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[6735],{

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

/***/ }),

/***/ 52233:
/*!*********************************************************!*\
  !*** ./node_modules/@capacitor/share/dist/esm/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ 56735:
/*!***********************************************************!*\
  !*** ./src/app/booking-details/booking-details.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingDetailsPageModule: () => (/* binding */ BookingDetailsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _booking_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking-details-routing.module */ 64470);
/* harmony import */ var _booking_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking-details.page */ 82888);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 51670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
var _BookingDetailsPageModule;







class BookingDetailsPageModule {}
_BookingDetailsPageModule = BookingDetailsPageModule;
_BookingDetailsPageModule.ɵfac = function BookingDetailsPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BookingDetailsPageModule)();
};
_BookingDetailsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _BookingDetailsPageModule
});
_BookingDetailsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  providers: [_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _booking_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookingDetailsPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BookingDetailsPageModule, {
    declarations: [_booking_details_page__WEBPACK_IMPORTED_MODULE_1__.BookingDetailsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _booking_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookingDetailsPageRoutingModule]
  });
})();

/***/ }),

/***/ 64470:
/*!*******************************************************************!*\
  !*** ./src/app/booking-details/booking-details-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingDetailsPageRoutingModule: () => (/* binding */ BookingDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _booking_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking-details.page */ 82888);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _BookingDetailsPageRoutingModule;




const routes = [{
  path: '',
  component: _booking_details_page__WEBPACK_IMPORTED_MODULE_0__.BookingDetailsPage
}];
class BookingDetailsPageRoutingModule {}
_BookingDetailsPageRoutingModule = BookingDetailsPageRoutingModule;
_BookingDetailsPageRoutingModule.ɵfac = function BookingDetailsPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BookingDetailsPageRoutingModule)();
};
_BookingDetailsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _BookingDetailsPageRoutingModule
});
_BookingDetailsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BookingDetailsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 82888:
/*!*********************************************************!*\
  !*** ./src/app/booking-details/booking-details.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingDetailsPage: () => (/* binding */ BookingDetailsPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _map_map_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map/map.page */ 71692);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/share */ 52233);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/authentication */ 82491);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 87330);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 51670);
/* harmony import */ var _services_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/firebase-analytics.service */ 47402);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 89417);

var _BookingDetailsPage;



















const _c0 = () => ({
  "padding-top": "50px"
});
const _c1 = () => ({});
const _c2 = a0 => ({
  "cancelled-class": a0
});
const _c3 = (a0, a1) => ({
  "high-2": a0,
  "high-1": a1
});
function BookingDetailsPage_ng_container_0_ion_buttons_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-buttons", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_buttons_3_Template_ion_buttons_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.gotoMyBookings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_0_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_icon_4_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.goToHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_segment_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-segment", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function BookingDetailsPage_ng_container_0_ion_content_7_ion_segment_1_Template_ion_segment_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.segment, $event) || (ctx_r1.segment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-segment-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, " Onward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "ion-segment-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, " Return ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.segment);
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_7_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.trackBusModal = !ctx_r1.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 15)(2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "This action will require you to download TrackingGo App");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-row")(5, "ion-col", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_7_div_2_Template_ion_col_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.openTgoBrowser("http://" + ctx_r1.metaData.subdomain + ".trackingo.in/live_track"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "OPEN IN BROWSER");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "ion-col", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_7_div_2_Template_ion_col_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.openTgoBrowser("https://play.google.com/store/apps/details?id=com.bitla.trackingooperator"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, "DOWNLOAD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_div_82_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 57)(2, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Passenger name");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "ion-col", 60)(7, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, " Seat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const passenger_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](passenger_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", passenger_r6.seat_number, " ");
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_div_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_div_82_ion_row_1_Template, 11, 2, "ion-row", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const passenger_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", passenger_r6.ticket_status != "Cancelled");
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_div_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_div_107_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.gotoMaps(1, ctx_r1.ticketDetails.boarding_details.latitude, ctx_r1.ticketDetails.boarding_details.longitude));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-icon", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "View on Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_div_122_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_div_122_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.gotoMaps(2, ctx_r1.ticketDetails.drop_off_details.latitude, ctx_r1.ticketDetails.drop_off_details.longitude));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-icon", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "View on Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_row_127_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 42)(1, "ion-col", 43)(2, "ion-row", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_row_127_Template_ion_row_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.trackBusModal = !ctx_r1.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "ion-col", 103)(4, "h2", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "Track My Bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "ion-col", 105)(7, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](8, "ion-icon", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_129_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 19)(1, "ion-button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_129_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.confirmBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "p", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Confirm Phone Booking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_130_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_131_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 19)(1, "ion-row", 111)(2, "ion-col", 103)(3, "a", 112)(4, "h4", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "Bus Operator Contact Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "h4", 114)(7, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "ion-col", 105)(10, "a", 112)(11, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "svg", 117)(13, "g", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](14, "path", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "defs")(16, "clipPath", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](17, "rect", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("href", "tel:" + ctx_r1.ticketDetails.boarding_details.contact_numbers, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.boarding_details.contact_numbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("href", "tel:" + ctx_r1.ticketDetails.boarding_details.contact_numbers, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_143_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 88)(1, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Cash coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_144_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 90)(1, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails.cash_coupon.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_145_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 88)(1, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Bus Operator GST");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_146_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 90)(1, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails.service_tax_amount.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_147_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 88)(1, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Transaction Charge");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_148_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 90)(1, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails.transaction_charges.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_149_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 88)(1, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "CC Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_150_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 90)(1, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails.cc_charges.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_151_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 88)(1, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Promotional Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_152_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 90)(1, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails.usable_promotional_balance.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_153_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 88)(1, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Wallet Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_154_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 90)(1, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails.wallet_balance.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_163_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 57)(1, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Transaction ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_164_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 57)(1, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.transaction_id);
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_165_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 57)(1, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Payment Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_166_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 57)(1, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.payment_method);
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_grid_167_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-grid", 42)(1, "ion-row", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_grid_167_Template_ion_row_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.goToUpdate("0"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "ion-col", 54)(3, "h2", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Modify Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "ion-row", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_grid_167_Template_ion_row_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.goToCancel("0"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-col", 54)(9, "h2", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, "Cancel Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "ion-row", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_grid_167_Template_ion_row_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.gotocontactsupport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "ion-col", 54)(15, "h2", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16, "Contact Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](18, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_row_168_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 54)(2, "ion-button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_row_168_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.downloadticketInvoice());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, " Download Ticket ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "ion-icon", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "ion-col", 128)(6, "ion-icon", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_row_168_Template_ion_icon_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.socialShare());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-grid")(1, "ion-row")(2, "ion-col", 19)(3, "ion-card", 20)(4, "ion-grid")(5, "ion-row")(6, "ion-col", 21)(7, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](9, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "ion-col", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "h2", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "ion-col", 24)(13, "h2", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](15, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "ion-col", 21)(17, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "ion-col", 27)(20, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](21, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "svg", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](24, "path", 32)(25, "path", 33)(26, "path", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](27, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "ion-col", 21)(29, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "ion-col", 21)(32, "h2", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "ion-col", 21)(35, "h3", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](37, "ion-col", 24)(38, "h2", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "ion-col", 21)(41, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](42, "Depart");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](43, "ion-col", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](44, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](45, "ion-col", 21)(46, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](47, "Arrive");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](48, "div", 39)(49, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](50, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](51, "ion-grid")(52, "ion-row", 42)(53, "ion-col", 43)(54, "ion-row")(55, "ion-col", 44)(56, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](57, "svg", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](58, "path", 47)(59, "path", 48)(60, "path", 49)(61, "path", 50)(62, "path", 51)(63, "path", 52)(64, "path", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](65, "ion-col", 54)(66, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](68, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](70, "ion-col", 56)(71, "ion-row")(72, "ion-col", 57)(73, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](74, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](75, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](77, "ion-col", 60)(78, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](79, " PNR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](80, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](82, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_div_82_Template, 2, 1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](83, "div", 39)(84, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](85, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](86, "ion-grid")(87, "ion-row", 64)(88, "ion-col", 65)(89, "ion-row")(90, "ion-col", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](91, "svg", 67)(92, "g", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](93, "path", 69)(94, "path", 70)(95, "path", 71)(96, "path", 72)(97, "path", 73)(98, "path", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](99, "defs")(100, "clipPath", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](101, "rect", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](102, "ion-col", 54)(103, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](104, "Pickup Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](105, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](106);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](107, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_div_107_Template, 4, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](108, "ion-row")(109, "ion-col", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](110, "svg", 67)(111, "g", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](112, "path", 81)(113, "path", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](114, "defs")(115, "clipPath", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](116, "rect", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](117, "ion-col", 54)(118, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](119, "Drop Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](120, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](121);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](122, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_div_122_Template, 4, 0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](123, "div", 39)(124, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](125, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](126, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](127, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_row_127_Template, 9, 0, "ion-row", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](128, "ion-row", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](129, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_129_Template, 5, 0, "ion-col", 86)(130, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_130_Template, 2, 0, "ion-col", 86)(131, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_131_Template, 18, 3, "ion-col", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](132, "ion-grid", 42)(133, "ion-row", 87)(134, "ion-col", 19)(135, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](136, "Payment Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](137, "ion-col", 88)(138, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](139, "Base Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](140, "ion-col", 90)(141, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](142);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](143, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_143_Template, 3, 0, "ion-col", 92)(144, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_144_Template, 3, 1, "ion-col", 93)(145, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_145_Template, 3, 0, "ion-col", 92)(146, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_146_Template, 3, 1, "ion-col", 93)(147, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_147_Template, 3, 0, "ion-col", 92)(148, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_148_Template, 3, 1, "ion-col", 93)(149, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_149_Template, 3, 0, "ion-col", 92)(150, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_150_Template, 3, 1, "ion-col", 93)(151, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_151_Template, 3, 0, "ion-col", 92)(152, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_152_Template, 3, 1, "ion-col", 93)(153, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_153_Template, 3, 0, "ion-col", 92)(154, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_154_Template, 3, 1, "ion-col", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](155, "ion-col", 88)(156, "p", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](157, "Total Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](158, "ion-col", 90)(159, "p", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](160);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](161, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](162, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](163, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_163_Template, 3, 0, "ion-col", 97)(164, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_164_Template, 3, 1, "ion-col", 97)(165, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_165_Template, 3, 0, "ion-col", 97)(166, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_col_166_Template, 3, 1, "ion-col", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](167, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_grid_167_Template, 19, 0, "ion-grid", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](168, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_ion_row_168_Template, 7, 0, "ion-row", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](9, 41, ctx_r1.ticketDetails.origin.substring(0, 3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](15, 43, ctx_r1.ticketDetails.destination.substring(0, 3)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", ctx_r1.ticketDetails.boarding_details.dep_time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.duration, " hrs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.drop_off_details ? ctx_r1.ticketDetails.drop_off_details.arr_time : ctx_r1.ticketDetails.arr_time ? ctx_r1.ticketDetails.arr_time : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.service_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.getFormatedDate(ctx_r1.ticketDetails.travel_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.ticket_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.ticketDetails.passenger_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.boarding_details.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.boarding_details.latitude != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.drop_off_details ? ctx_r1.ticketDetails.drop_off_details.address : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.drop_off_details && ctx_r1.ticketDetails.drop_off_details.latitude != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.ticketDetails.is_e_phone_booking && ctx_r1.isPastDate(ctx_r1.ticketDetails.travel_date) != true && ctx_r1.ticketDetails.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.is_e_phone_booking && ctx_r1.ticketDetails.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.ticket_status != "Cancelled" && ctx_r1.isPastDate(ctx_r1.ticketDetails.travel_date) != true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.ticketDetails.is_e_phone_booking && ctx_r1.isPastDate(ctx_r1.ticketDetails.travel_date) != true && ctx_r1.ticketDetails.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails.base_fare.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails.cash_coupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails.cash_coupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails.transaction_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails.transaction_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails.cc_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails.cc_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails.usable_promotional_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails.usable_promotional_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails.wallet_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails.wallet_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", ctx_r1.fareBreakupDetails.total_fare.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.transaction_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.transaction_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.payment_method);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.payment_method);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.ticket_status != "Cancelled" && ctx_r1.isDateGreaterOrEqual(ctx_r1.ticketDetails.travel_date, ctx_r1.TodayDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.ticket_status != "Cancelled" && !ctx_r1.ticketDetails.is_e_phone_booking);
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_div_82_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 57)(2, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Passenger name");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "ion-col", 60)(7, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, " Seat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const passenger_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](passenger_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", passenger_r13.seat_number, " ");
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_div_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_div_82_ion_row_1_Template, 11, 2, "ion-row", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const passenger_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", passenger_r13.ticket_status != "Cancelled");
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_div_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_div_107_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.gotoMaps(1, ctx_r1.ticketDetails.onward.boarding_details.latitude, ctx_r1.ticketDetails.onward.boarding_details.longitude));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-icon", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "View on Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_div_122_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_div_122_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.gotoMaps(2, ctx_r1.ticketDetails.onward.drop_off_details.latitude, ctx_r1.ticketDetails.onward.drop_off_details.longitude));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-icon", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "View on Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_row_127_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 42)(1, "ion-col", 43)(2, "ion-row", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_row_127_Template_ion_row_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.trackBusModal = !ctx_r1.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "ion-col", 103)(4, "h2", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "Track My Bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "ion-col", 105)(7, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](8, "ion-icon", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_129_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 19)(1, "ion-button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_129_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.confirmBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "p", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Confirm Phone Booking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_130_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_131_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 19)(1, "ion-row", 111)(2, "ion-col", 103)(3, "a", 112)(4, "h4", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "Bus Operator Contact Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "h4", 114)(7, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "ion-col", 105)(10, "a", 112)(11, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "svg", 117)(13, "g", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](14, "path", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "defs")(16, "clipPath", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](17, "rect", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("href", "tel:" + ctx_r1.ticketDetails.onward.boarding_details.contact_numbers, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.boarding_details.contact_numbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("href", "tel:" + ctx_r1.ticketDetails.onward.boarding_details.contact_numbers, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_143_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 88)(1, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Cash coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_144_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 90)(1, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_onward.cash_coupon.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_145_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 88)(1, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Bus Operator GST");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_146_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 90)(1, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_onward.service_tax_amount.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_147_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 88)(1, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Transaction Charge");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_148_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 90)(1, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_onward.transaction_charges.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_149_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 88)(1, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "CC Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_150_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 90)(1, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_onward.cc_charges.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_151_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 88)(1, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Promotional Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_152_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 90)(1, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_onward.usable_promotional_balance.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_153_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 88)(1, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Wallet Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_154_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 90)(1, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_onward.wallet_balance.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_163_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 57)(1, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Transaction ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_164_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 57)(1, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.transaction_id);
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_165_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 57)(1, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Payment Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_166_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 57)(1, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.payment_method);
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_grid_167_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-grid", 42)(1, "ion-row", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_grid_167_Template_ion_row_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.goToUpdate("1"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "ion-col", 54)(3, "h2", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Modify Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "ion-row", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_grid_167_Template_ion_row_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.goToCancel("1"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-col", 54)(9, "h2", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, "Cancel Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "ion-row", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_grid_167_Template_ion_row_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.gotocontactsupport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "ion-col", 54)(15, "h2", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16, "Contact Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](18, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_row_168_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 54)(2, "ion-button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_row_168_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.downloadticketInvoice());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, " Download Ticket ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "ion-icon", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "ion-col", 128)(6, "ion-icon", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_row_168_Template_ion_icon_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.socialShare());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-grid")(1, "ion-row")(2, "ion-col", 19)(3, "ion-card", 20)(4, "ion-grid")(5, "ion-row")(6, "ion-col", 21)(7, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](9, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "ion-col", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "h2", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "ion-col", 24)(13, "h2", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](15, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "ion-col", 21)(17, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "ion-col", 27)(20, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](21, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "svg", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](24, "path", 131)(25, "path", 132)(26, "path", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](27, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "ion-col", 21)(29, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "ion-col", 21)(32, "h2", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "ion-col", 21)(35, "h3", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](37, "ion-col", 24)(38, "h2", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "ion-col", 21)(41, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](42, "Depart");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](43, "ion-col", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](44, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](45, "ion-col", 21)(46, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](47, "Arrive");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](48, "div", 39)(49, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](50, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](51, "ion-grid")(52, "ion-row", 42)(53, "ion-col", 43)(54, "ion-row")(55, "ion-col", 44)(56, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](57, "svg", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](58, "path", 47)(59, "path", 48)(60, "path", 49)(61, "path", 50)(62, "path", 51)(63, "path", 52)(64, "path", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](65, "ion-col", 54)(66, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](68, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](70, "ion-col", 56)(71, "ion-row")(72, "ion-col", 57)(73, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](74, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](75, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](77, "ion-col", 60)(78, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](79, " PNR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](80, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](82, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_div_82_Template, 2, 1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](83, "div", 39)(84, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](85, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](86, "ion-grid")(87, "ion-row", 64)(88, "ion-col", 65)(89, "ion-row")(90, "ion-col", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](91, "svg", 67)(92, "g", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](93, "path", 69)(94, "path", 70)(95, "path", 71)(96, "path", 72)(97, "path", 73)(98, "path", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](99, "defs")(100, "clipPath", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](101, "rect", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](102, "ion-col", 54)(103, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](104, "Pickup Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](105, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](106);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](107, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_div_107_Template, 4, 0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](108, "ion-row")(109, "ion-col", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](110, "svg", 67)(111, "g", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](112, "path", 81)(113, "path", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](114, "defs")(115, "clipPath", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](116, "rect", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](117, "ion-col", 54)(118, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](119, "Drop Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](120, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](121);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](122, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_div_122_Template, 4, 0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](123, "div", 39)(124, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](125, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](126, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](127, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_row_127_Template, 9, 0, "ion-row", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](128, "ion-row", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](129, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_129_Template, 5, 0, "ion-col", 86)(130, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_130_Template, 2, 0, "ion-col", 86)(131, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_131_Template, 18, 3, "ion-col", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](132, "ion-grid", 42)(133, "ion-row", 87)(134, "ion-col", 19)(135, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](136, "Payment Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](137, "ion-col", 88)(138, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](139, "Base Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](140, "ion-col", 90)(141, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](142);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](143, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_143_Template, 3, 0, "ion-col", 92)(144, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_144_Template, 3, 1, "ion-col", 93)(145, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_145_Template, 3, 0, "ion-col", 92)(146, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_146_Template, 3, 1, "ion-col", 93)(147, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_147_Template, 3, 0, "ion-col", 92)(148, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_148_Template, 3, 1, "ion-col", 93)(149, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_149_Template, 3, 0, "ion-col", 92)(150, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_150_Template, 3, 1, "ion-col", 93)(151, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_151_Template, 3, 0, "ion-col", 92)(152, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_152_Template, 3, 1, "ion-col", 93)(153, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_153_Template, 3, 0, "ion-col", 92)(154, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_154_Template, 3, 1, "ion-col", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](155, "ion-col", 88)(156, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](157, "Total Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](158, "ion-col", 90)(159, "p", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](160);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](161, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](162, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](163, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_163_Template, 3, 0, "ion-col", 97)(164, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_164_Template, 3, 1, "ion-col", 97)(165, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_165_Template, 3, 0, "ion-col", 97)(166, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_col_166_Template, 3, 1, "ion-col", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](167, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_grid_167_Template, 19, 0, "ion-grid", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](168, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_ion_row_168_Template, 7, 0, "ion-row", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](9, 41, ctx_r1.ticketDetails.onward.origin.substring(0, 3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](15, 43, ctx_r1.ticketDetails.onward.destination.substring(0, 3)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", ctx_r1.ticketDetails.onward.boarding_details.dep_time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.onward.duration, " hrs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.onward.drop_off_details ? ctx_r1.ticketDetails.onward.drop_off_details.arr_time : ctx_r1.ticketDetails.onward.arr_time ? ctx_r1.ticketDetails.onward.arr_time : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.service_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.getFormatedDate(ctx_r1.ticketDetails.onward.travel_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.onward.ticket_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.ticketDetails.onward.passenger_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.onward.boarding_details.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.boarding_details.latitude != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.onward.drop_off_details ? ctx_r1.ticketDetails.onward.drop_off_details.address : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.drop_off_details && ctx_r1.ticketDetails.onward.drop_off_details.latitude != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.ticketDetails.onward.is_e_phone_booking && ctx_r1.isPastDate(ctx_r1.ticketDetails.onward.travel_date) != true && ctx_r1.ticketDetails.onward.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.is_e_phone_booking && ctx_r1.ticketDetails.onward.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.ticket_status != "Cancelled" && ctx_r1.isPastDate(ctx_r1.ticketDetails.onward.travel_date) != true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.ticketDetails.onward.is_e_phone_booking && ctx_r1.isPastDate(ctx_r1.ticketDetails.onward.travel_date) != true && ctx_r1.ticketDetails.onward.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_onward.base_fare.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_onward.cash_coupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_onward.cash_coupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_onward.transaction_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_onward.transaction_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_onward.cc_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_onward.cc_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_onward.usable_promotional_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_onward.usable_promotional_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_onward.wallet_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_onward.wallet_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", ctx_r1.currencySym, "", ctx_r1.fareBreakupDetails_onward.total_fare.toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.transaction_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.transaction_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.payment_method);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.payment_method);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.ticket_status != "Cancelled" && ctx_r1.ticketDetails.onward.travel_date >= ctx_r1.TodayDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.ticket_status != "Cancelled" && !ctx_r1.ticketDetails.onward.is_e_phone_booking);
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_div_82_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 57)(2, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Passenger name");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "ion-col", 60)(7, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, " Seat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const passenger_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](passenger_r20.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", passenger_r20.seat_number, " ");
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_div_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_div_82_ion_row_1_Template, 11, 2, "ion-row", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const passenger_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", passenger_r20.ticket_status != "Cancelled");
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_div_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_div_107_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.gotoMaps(1, ctx_r1.ticketDetails.return.boarding_details.latitude, ctx_r1.ticketDetails.return.boarding_details.longitude));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-icon", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "View on Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_div_122_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_div_122_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.gotoMaps(2, ctx_r1.ticketDetails.return.drop_off_details.latitude, ctx_r1.ticketDetails.return.drop_off_details.longitude));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-icon", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "View on Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_row_127_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 42)(1, "ion-col", 43)(2, "ion-row", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_row_127_Template_ion_row_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.trackBusModal = !ctx_r1.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "ion-col", 103)(4, "h2", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "Track My Bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "ion-col", 105)(7, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](8, "ion-icon", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_129_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 19)(1, "ion-button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_129_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.confirmBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "p", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Confirm Phone Booking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_130_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_131_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 19)(1, "ion-row", 111)(2, "ion-col", 103)(3, "a", 112)(4, "h4", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "Bus Operator Contact Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "h4", 114)(7, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "ion-col", 105)(10, "a", 112)(11, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "svg", 117)(13, "g", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](14, "path", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "defs")(16, "clipPath", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](17, "rect", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("href", "tel:" + ctx_r1.ticketDetails.return.boarding_details.contact_numbers, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.boarding_details.contact_numbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("href", "tel:" + ctx_r1.ticketDetails.return.boarding_details.contact_numbers, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_143_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 88)(1, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Cash coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_144_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 90)(1, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_return.cash_coupon.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_145_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 88)(1, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Bus Operator GST");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_146_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 90)(1, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_return.service_tax_amount.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_147_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 88)(1, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Transaction Charge");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_148_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 90)(1, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_return.transaction_charges.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_149_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 88)(1, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "CC Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_150_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 90)(1, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_return.cc_charges.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_151_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 88)(1, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Promotional Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_152_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 90)(1, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_return.usable_promotional_balance.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_153_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 88)(1, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Wallet Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_154_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 90)(1, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_return.wallet_balance.toFixed(2));
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_163_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 57)(1, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Transaction ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_164_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 57)(1, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.transaction_id);
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_165_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 57)(1, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Payment Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_166_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 57)(1, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.payment_method);
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_grid_167_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-grid", 42)(1, "ion-row", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_grid_167_Template_ion_row_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.goToUpdate("2"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "ion-col", 54)(3, "h2", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Modify Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "ion-row", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_grid_167_Template_ion_row_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.goToCancel("2"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-col", 54)(9, "h2", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, "Cancel Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "ion-row", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_grid_167_Template_ion_row_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.gotocontactsupport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "ion-col", 54)(15, "h2", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16, "Contact Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "ion-col", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](18, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_row_168_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 54)(2, "ion-button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_row_168_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.downloadticketInvoice());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, " Download Ticket ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "ion-icon", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "ion-col", 128)(6, "ion-icon", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_row_168_Template_ion_icon_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.socialShare());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-grid")(1, "ion-row")(2, "ion-col", 19)(3, "ion-card", 20)(4, "ion-grid")(5, "ion-row")(6, "ion-col", 21)(7, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](9, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "ion-col", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "h2", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "ion-col", 24)(13, "h2", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](15, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "ion-col", 21)(17, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "ion-col", 27)(20, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](21, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "svg", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](24, "path", 131)(25, "path", 132)(26, "path", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](27, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "ion-col", 21)(29, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "ion-col", 21)(32, "h2", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "ion-col", 21)(35, "h3", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](37, "ion-col", 24)(38, "h2", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "ion-col", 21)(41, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](42, "Depart");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](43, "ion-col", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](44, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](45, "ion-col", 21)(46, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](47, "Arrive");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](48, "div", 39)(49, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](50, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](51, "ion-grid")(52, "ion-row", 42)(53, "ion-col", 43)(54, "ion-row")(55, "ion-col", 44)(56, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](57, "svg", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](58, "path", 47)(59, "path", 48)(60, "path", 49)(61, "path", 50)(62, "path", 51)(63, "path", 52)(64, "path", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](65, "ion-col", 54)(66, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](68, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](70, "ion-col", 56)(71, "ion-row")(72, "ion-col", 57)(73, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](74, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](75, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](77, "ion-col", 60)(78, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](79, " PNR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](80, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](82, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_div_82_Template, 2, 1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](83, "div", 39)(84, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](85, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](86, "ion-grid")(87, "ion-row", 64)(88, "ion-col", 65)(89, "ion-row")(90, "ion-col", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](91, "svg", 67)(92, "g", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](93, "path", 69)(94, "path", 70)(95, "path", 71)(96, "path", 72)(97, "path", 73)(98, "path", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](99, "defs")(100, "clipPath", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](101, "rect", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](102, "ion-col", 54)(103, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](104, "Pickup Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](105, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](106);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](107, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_div_107_Template, 4, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](108, "ion-row")(109, "ion-col", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](110, "svg", 67)(111, "g", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](112, "path", 81)(113, "path", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](114, "defs")(115, "clipPath", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](116, "rect", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](117, "ion-col", 54)(118, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](119, "Drop Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](120, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](121);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](122, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_div_122_Template, 4, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](123, "div", 39)(124, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](125, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](126, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](127, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_row_127_Template, 9, 0, "ion-row", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](128, "ion-row", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](129, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_129_Template, 5, 0, "ion-col", 86)(130, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_130_Template, 2, 0, "ion-col", 86)(131, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_131_Template, 18, 3, "ion-col", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](132, "ion-grid", 42)(133, "ion-row", 87)(134, "ion-col", 19)(135, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](136, "Payment Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](137, "ion-col", 88)(138, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](139, "Base Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](140, "ion-col", 90)(141, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](142);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](143, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_143_Template, 3, 0, "ion-col", 92)(144, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_144_Template, 3, 1, "ion-col", 93)(145, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_145_Template, 3, 0, "ion-col", 92)(146, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_146_Template, 3, 1, "ion-col", 93)(147, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_147_Template, 3, 0, "ion-col", 92)(148, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_148_Template, 3, 1, "ion-col", 93)(149, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_149_Template, 3, 0, "ion-col", 92)(150, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_150_Template, 3, 1, "ion-col", 93)(151, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_151_Template, 3, 0, "ion-col", 92)(152, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_152_Template, 3, 1, "ion-col", 93)(153, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_153_Template, 3, 0, "ion-col", 92)(154, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_154_Template, 3, 1, "ion-col", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](155, "ion-col", 88)(156, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](157, "Total Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](158, "ion-col", 90)(159, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](160);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](161, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](162, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](163, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_163_Template, 3, 0, "ion-col", 97)(164, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_164_Template, 3, 1, "ion-col", 97)(165, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_165_Template, 3, 0, "ion-col", 97)(166, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_col_166_Template, 3, 1, "ion-col", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](167, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_grid_167_Template, 19, 0, "ion-grid", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](168, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_ion_row_168_Template, 7, 0, "ion-row", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](9, 41, ctx_r1.ticketDetails.return.origin.substring(0, 3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](15, 43, ctx_r1.ticketDetails.return.destination.substring(0, 3)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", ctx_r1.ticketDetails.return.boarding_details.dep_time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.return.duration, " hrs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.return.drop_off_details ? ctx_r1.ticketDetails.return.drop_off_details.arr_time : ctx_r1.ticketDetails.return.arr_time ? ctx_r1.ticketDetails.return.arr_time : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.service_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.getFormatedDate(ctx_r1.ticketDetails.return.travel_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.return.ticket_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.ticketDetails.return.passenger_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.return.boarding_details.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.boarding_details.latitude != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.return.drop_off_details ? ctx_r1.ticketDetails.return.drop_off_details.address : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.drop_off_details && ctx_r1.ticketDetails.return.drop_off_details.latitude != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.ticketDetails.return.is_e_phone_booking && ctx_r1.isPastDate(ctx_r1.ticketDetails.return.travel_date) != true && ctx_r1.ticketDetails.return.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.is_e_phone_booking && ctx_r1.ticketDetails.return.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.ticket_status != "Cancelled" && ctx_r1.isPastDate(ctx_r1.ticketDetails.return.travel_date) != true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.ticketDetails.return.is_e_phone_booking && ctx_r1.isPastDate(ctx_r1.ticketDetails.return.travel_date) != true && ctx_r1.ticketDetails.return.ticket_status != "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fareBreakupDetails_return.base_fare.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_return.cash_coupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_return.cash_coupon);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_return.transaction_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_return.transaction_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_return.cc_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_return.cc_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_return.usable_promotional_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_return.usable_promotional_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_return.wallet_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakupDetails_return.wallet_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", ctx_r1.fareBreakupDetails_return.total_fare.toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.transaction_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.transaction_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.payment_method);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.payment_method);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.ticket_status != "Cancelled" && ctx_r1.ticketDetails.return.travel_date >= ctx_r1.TodayDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.ticket_status != "Cancelled" && !ctx_r1.ticketDetails.return.is_e_phone_booking);
  }
}
function BookingDetailsPage_ng_container_0_ion_content_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-content", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_0_ion_content_7_ion_segment_1_Template, 5, 1, "ion-segment", 9)(2, BookingDetailsPage_ng_container_0_ion_content_7_div_2_Template, 9, 0, "div", 10)(3, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_3_Template, 169, 45, "ion-grid", 0)(4, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_4_Template, 169, 45, "ion-grid", 0)(5, BookingDetailsPage_ng_container_0_ion_content_7_ion_grid_5_Template, 169, 45, "ion-grid", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.isRoundTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.trackBusModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails && !ctx_r1.isRoundTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails && ctx_r1.isRoundTrip && ctx_r1.segment == "future");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails && ctx_r1.isRoundTrip && ctx_r1.segment == "previous");
  }
}
function BookingDetailsPage_ng_container_0_ion_content_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-content")(1, "div", 136)(2, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "ion-icon", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "p", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "Note: Your ticket is in Pending.Please check after sometime.");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 140)(7, "ion-button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_0_ion_content_8_Template_ion_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.goToHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "p", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9, "Okay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
}
function BookingDetailsPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-header", 1)(2, "ion-toolbar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, BookingDetailsPage_ng_container_0_ion_buttons_3_Template, 2, 0, "ion-buttons", 3)(4, BookingDetailsPage_ng_container_0_ion_icon_4_Template, 1, 0, "ion-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "Ticket Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, BookingDetailsPage_ng_container_0_ion_content_7_Template, 6, 5, "ion-content", 5)(8, BookingDetailsPage_ng_container_0_ion_content_8_Template, 11, 0, "ion-content", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("translucent", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.newBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.newBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails != null && ctx_r1.ticketStatus != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketStatus == "Pending");
  }
}
function BookingDetailsPage_ng_container_1_ion_buttons_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-buttons", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-back-button", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_1_ion_buttons_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-buttons", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_buttons_6_Template_ion_buttons_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.goToMyTrips());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_div_10_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.trackBusModal1 = !ctx_r1.trackBusModal1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 156)(2, "ion-row")(3, "ion-col", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "img", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "ion-row", 159)(6, "ion-col")(7, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("src", "https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=" + "pnr= " + ctx_r1.qrPnr + " seat No= " + ctx_r1.qrSeatNo, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Reference Code:", ctx_r1.qrPnr, "");
  }
}
function BookingDetailsPage_ng_container_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_div_11_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.trackBusModal = !ctx_r1.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 15)(2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "This action will require you to download TrackingGo App");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-row")(5, "ion-col", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_div_11_Template_ion_col_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.openTgoBrowser("http://" + ctx_r1.metaData.subdomain + ".trackingo.in/live_track"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "OPEN IN BROWSER");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "ion-col", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_div_11_Template_ion_col_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.openTgoBrowser("https://play.google.com/store/apps/details?id=com.bitla.trackingooperator"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, "DOWNLOAD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_12_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Your ticket is booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_12_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Your ticket is cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_12_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_12_div_21_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r32);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.downloadticketInvoice());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "img", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Download Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_12_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "div", 215);
  }
}
function BookingDetailsPage_ng_container_1_ion_content_12_ion_row_104_ion_col_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 217)(1, "div", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const passenger_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", passenger_r33.seat_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", passenger_r33.name ? passenger_r33.name : "N/A", "\u00A0(", passenger_r33.gender, ") ");
  }
}
function BookingDetailsPage_ng_container_1_ion_content_12_ion_row_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_1_ion_content_12_ion_row_104_ion_col_1_Template, 5, 3, "ion-col", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const passenger_r33 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.areAllTicketsCancelled() && passenger_r33.ticket_status != "Cancelled" || ctx_r1.areAllTicketsCancelled());
  }
}
function BookingDetailsPage_ng_container_1_ion_content_12_ion_icon_113_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-icon", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_12_ion_icon_113_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.toggleRadioGroup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_12_ion_icon_114_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-icon", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_12_ion_icon_114_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.toggleRadioGroup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_12_ion_row_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row")(1, "ion-col")(2, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Each passenger is allowed to bring one large piece of luggage weighing up to 15 kg, along with one handbag. The handbag should be compact enough to fit either under your seat or in the overhead compartment, if available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_12_ion_row_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row")(1, "ion-col")(2, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "For any extra luggage, an additional ticket will be required. However, if there\u2019s extra space on board, we\u2019ll do our best to accommodate without needing an extra ticket. If space is limited, the policy will be strictly enforced.");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_12_ion_row_140_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_12_ion_row_140_Template_ion_row_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.bookAgain());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-col", 223)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Book Again");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_12_ion_row_141_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_12_ion_row_141_Template_ion_row_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r37);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.gotoMyBookings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-col")(2, "ion-button", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, " See my Trips ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_12_div_142_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "ion-row", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_12_div_142_Template_ion_row_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r38);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.goToCancel("0"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "ion-col", 223)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Cancel Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_12_div_143_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "ion-row")(2, "ion-col")(3, "ion-button", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_12_div_143_Template_ion_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r39);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.goToUpdate("0"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "Update Booking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_12_ion_row_144_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row")(1, "ion-col")(2, "ion-button", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_12_ion_row_144_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r40);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.confirmBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, " Confirm Phone Booking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-content", 161)(1, "div", 162)(2, "ion-row", 163)(3, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, BookingDetailsPage_ng_container_1_ion_content_12_span_4_Template, 2, 0, "span", 0)(5, BookingDetailsPage_ng_container_1_ion_content_12_span_5_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "ion-row", 164)(7, "ion-col", 19)(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9, "Aisi hoti hai Bharat ki Sawari");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "ion-row", 165)(11, "ion-col", 19)(12, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_12_Template_div_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.copyCode(ctx_r1.bookingDetails.pnr_number ? ctx_r1.bookingDetails.pnr_number : ctx_r1.bookingDetails.ticket_number ? ctx_r1.bookingDetails.ticket_number : ctx_r1.bookingDetails.pnrNumber));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "span", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](16, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](18, "ion-icon", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "ion-row", 165)(20, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](21, BookingDetailsPage_ng_container_1_ion_content_12_div_21_Template, 4, 0, "div", 170)(22, BookingDetailsPage_ng_container_1_ion_content_12_div_22_Template, 1, 0, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "ion-row", 172)(24, "ion-col", 19)(25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](26, "A copy of the ticket has been mailed to");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "ion-row", 173)(28, "ion-col", 19)(29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "ion-card", 174)(32, "ion-row", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](33, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "ion-row", 176)(35, "ion-col", 177)(36, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "ion-col", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](41, "ion-icon", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](42, "ion-col", 182)(43, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](45, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](47, "ion-row", 183)(48, "ion-col", 184)(49, "span", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](50, "Date of Departure");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](51, "ion-col", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](52, "ion-col", 187)(53, "span", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](54, "Departure");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](55, "ion-row", 183)(56, "ion-col", 184)(57, "span", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](59, "ion-col", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](60, "ion-col", 187)(61, "span", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](63, "ion-row", 183)(64, "ion-col", 184)(65, "span", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](66, "Date of Arrival");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](67, "ion-col", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](68, "ion-col", 187)(69, "span", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](70, "Arrival");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](71, "ion-row", 183)(72, "ion-col", 184)(73, "span", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](75, "ion-col", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](76, "ion-col", 187)(77, "span", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](79, "ion-row", 183)(80, "ion-col", 157)(81, "span", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](82, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](83, "ion-row", 183)(84, "ion-col", 157)(85, "span", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](87, "ion-row", 189)(88, "ion-col", 19)(89, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](90, "This transaction will show as \u201COurBus\u201D on your billing statement.");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](91, "ion-row", 190)(92, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](93, "span", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](94, "ion-row", 192)(95, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](96, "img", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](97, "ion-card", 194)(98, "ion-row", 195)(99, "ion-col", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](100, "ion-icon", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](101, "ion-col", 197)(102, "span", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](103, "Passenger(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](104, BookingDetailsPage_ng_container_1_ion_content_12_ion_row_104_Template, 2, 1, "ion-row", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](105, "ion-card", 194)(106, "ion-row", 195)(107, "ion-col", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](108, "ion-icon", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](109, "ion-col", 201)(110, "span", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](111, "Luggage");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](112, "ion-col", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](113, BookingDetailsPage_ng_container_1_ion_content_12_ion_icon_113_Template, 1, 0, "ion-icon", 203)(114, BookingDetailsPage_ng_container_1_ion_content_12_ion_icon_114_Template, 1, 0, "ion-icon", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](115, BookingDetailsPage_ng_container_1_ion_content_12_ion_row_115_Template, 4, 0, "ion-row", 0)(116, BookingDetailsPage_ng_container_1_ion_content_12_ion_row_116_Template, 4, 0, "ion-row", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](117, "ion-card", 194)(118, "ion-row", 195)(119, "ion-col", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](120, "ion-icon", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](121, "ion-col", 207)(122, "span", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](123, "Arrival Time at Boarding Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](124, "ion-row")(125, "ion-col")(126, "span", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](127, "Be there 15 minutes earlier");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](128, "ion-row")(129, "ion-col")(130, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](131, "We recommend arriving at the pickup stop at least 15 minutes before the scheduled departure time.");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](132, "ion-row")(133, "ion-col")(134, "span", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](135, "Special Needs");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](136, "ion-row")(137, "ion-col")(138, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](139, "Allow us to be better prepared for your upcoming journey by informing us on support@ourbus.in of any special needs that you might have.");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](140, BookingDetailsPage_ng_container_1_ion_content_12_ion_row_140_Template, 4, 0, "ion-row", 210)(141, BookingDetailsPage_ng_container_1_ion_content_12_ion_row_141_Template, 4, 0, "ion-row", 211)(142, BookingDetailsPage_ng_container_1_ion_content_12_div_142_Template, 5, 0, "div", 0)(143, BookingDetailsPage_ng_container_1_ion_content_12_div_143_Template, 7, 0, "div", 0)(144, BookingDetailsPage_ng_container_1_ion_content_12_ion_row_144_Template, 4, 0, "ion-row", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.ticket_status == "Booked" || ctx_r1.ticketDetails.ticket_status == "Partially Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.ticket_status == "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", "PNR Number:\u00A0", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", ctx_r1.bookingDetails.pnr_number ? ctx_r1.bookingDetails.pnr_number : ctx_r1.bookingDetails.ticket_number ? ctx_r1.bookingDetails.ticket_number : ctx_r1.bookingDetails.pnrNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.ticket_status == "Booked" && ctx_r1.ticketDetails.sharing_pdf_link_ios != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.ticket_status == "Booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.passenger_details[0].email ? ctx_r1.ticketDetails.passenger_details[0].email : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.bookingDetails.origin ? ctx_r1.bookingDetails.origin : ctx_r1.ticketDetails && ctx_r1.ticketDetails.origin ? ctx_r1.ticketDetails.origin : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.boarding_details.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.bookingDetails.destination ? ctx_r1.bookingDetails.destination : ctx_r1.ticketDetails && ctx_r1.ticketDetails.destination ? ctx_r1.ticketDetails.destination : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.drop_off_details ? ctx_r1.ticketDetails.drop_off_details.address : "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails && ctx_r1.ticketDetails.travel_date ? ctx_r1.changeDateFormat1(ctx_r1.ticketDetails.travel_date) : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.boarding_details.dep_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails && ctx_r1.ticketDetails.arr_date ? ctx_r1.changeDateFormat1(ctx_r1.ticketDetails.arr_date) : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.drop_off_details.arr_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.stg_duration ? ctx_r1.ticketDetails.stg_duration.slice(0, 2) + "h " + ctx_r1.ticketDetails.stg_duration.slice(3, 5) + "m" : ctx_r1.ticketDetails.duration.slice(0, 2) + "h " + ctx_r1.ticketDetails.duration.slice(3, 5) + "m", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("src", ctx_r1.logo ? ctx_r1.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.ticketDetails.passenger_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.isShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.isShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.isShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.isShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.newBooking == "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.newBooking == "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", (ctx_r1.newBooking == "false" || !ctx_r1.newBooking) && ctx_r1.ticketDetails.is_can_cancel);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", (ctx_r1.newBooking == "false" || !ctx_r1.newBooking) && ctx_r1.ticketDetails.is_can_cancel);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.is_e_phone_booking && ctx_r1.ticketDetails.ticket_status !== "Cancelled");
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_13_div_12_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r42);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.copyCode(ctx_r1.ticketDetails.onward.ticket_number));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "ion-icon", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", "PNR Number:\u00A0", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.ticket_number);
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_13_div_13_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.copyCode(ctx_r1.ticketDetails.return.ticket_number));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "ion-icon", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", "PNR Number:\u00A0", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.ticket_number);
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_14_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r44);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.ticketInvoiceOnWardsD(ctx_r1.ticketDetails.onward.sharing_pdf_link_ios));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "img", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Download Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_14_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "div", 215);
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 165)(1, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, BookingDetailsPage_ng_container_1_ion_content_13_ion_row_14_div_2_Template, 4, 0, "div", 238)(3, BookingDetailsPage_ng_container_1_ion_content_13_ion_row_14_div_3_Template, 1, 0, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.ticket_status == "Booked" && ctx_r1.ticketDetails.onward.sharing_pdf_link_ios != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.ticket_status == "Booked" && ctx_r1.ticketDetails.return.sharing_pdf_link_ios != "");
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_15_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r45);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.ticketInvoicereturnD(ctx_r1.ticketDetails.return.sharing_pdf_link_ios));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "img", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Download Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_15_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "div", 215);
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 165)(1, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, BookingDetailsPage_ng_container_1_ion_content_13_ion_row_15_div_2_Template, 4, 0, "div", 238)(3, BookingDetailsPage_ng_container_1_ion_content_13_ion_row_15_div_3_Template, 1, 0, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.ticket_status == "Booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.ticket_status == "Booked");
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_ion_col_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 19)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.passenger_details[0].email);
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_ion_col_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.passenger_details[0].email);
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "ion-card", 240)(2, "ion-row", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-row", 176)(5, "ion-col", 177)(6, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "ion-col", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "ion-icon", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "ion-col", 177)(13, "div", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "div", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "ion-row", 183)(18, "ion-col", 243)(19, "span", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](20, "Date of Departure");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](21, "ion-col", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "ion-col", 187)(23, "span", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24, "Departure");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "ion-row", 183)(26, "ion-col", 184)(27, "span", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](29, "ion-col", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "ion-col", 187)(31, "span", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "ion-row", 183)(34, "ion-col", 184)(35, "span", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](36, "Date of Arrival");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](37, "ion-col", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "ion-col", 187)(39, "span", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](40, "Arrival");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](41, "ion-row", 183)(42, "ion-col", 184)(43, "span", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](45, "ion-col", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](46, "ion-col", 187)(47, "span", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](49, "ion-row", 183)(50, "ion-col", 157)(51, "span", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](52, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](53, "ion-row", 183)(54, "ion-col", 157)(55, "span", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.boarding_details.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.drop_off_details ? ctx_r1.ticketDetails.onward.drop_off_details.address : "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.changeDateFormat1(ctx_r1.ticketDetails.onward.travel_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.boarding_details.dep_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails && ctx_r1.ticketDetails.onward.arr_date ? ctx_r1.changeDateFormat1(ctx_r1.ticketDetails.onward.arr_date) : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.drop_off_details.arr_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.onward.stg_duration ? ctx_r1.ticketDetails.onward.stg_duration.slice(0, 2) + "h " + ctx_r1.ticketDetails.onward.stg_duration.slice(3, 5) + "m" : ctx_r1.ticketDetails.onward.duration.slice(0, 2) + "h " + ctx_r1.ticketDetails.onward.duration.slice(3, 5) + "m", " ");
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "ion-card", 240)(2, "ion-row", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-row", 176)(5, "ion-col", 177)(6, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "ion-col", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "ion-icon", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "ion-col", 177)(13, "div", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "div", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "ion-row", 183)(18, "ion-col", 243)(19, "span", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](20, "Date of Departure");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](21, "ion-col", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "ion-col", 187)(23, "span", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24, "Departure");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "ion-row", 183)(26, "ion-col", 184)(27, "span", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](29, "ion-col", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "ion-col", 187)(31, "span", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "ion-row", 183)(34, "ion-col", 184)(35, "span", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](36, "Date of Arrival");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](37, "ion-col", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "ion-col", 187)(39, "span", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](40, "Arrival");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](41, "ion-row", 183)(42, "ion-col", 184)(43, "span", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](45, "ion-col", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](46, "ion-col", 187)(47, "span", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](49, "ion-row", 183)(50, "ion-col", 157)(51, "span", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](52, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](53, "ion-row", 183)(54, "ion-col", 157)(55, "span", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.boarding_details.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.drop_off_details ? ctx_r1.ticketDetails.return.drop_off_details.address : "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails && ctx_r1.ticketDetails.return.travel_date ? ctx_r1.changeDateFormat1(ctx_r1.ticketDetails.return.travel_date) : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.boarding_details.dep_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails && ctx_r1.ticketDetails.return.arr_date ? ctx_r1.changeDateFormat1(ctx_r1.ticketDetails.return.arr_date) : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.drop_off_details.arr_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.stg_duration ? ctx_r1.ticketDetails.return.stg_duration.slice(0, 2) + "h " + ctx_r1.ticketDetails.return.stg_duration.slice(3, 5) + "m" : ctx_r1.ticketDetails.return.duration.slice(0, 2) + "h " + ctx_r1.ticketDetails.return.duration.slice(3, 5) + "m");
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_div_44_div_8_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 217)(2, "div", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const passenger_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", passenger_r46.seat_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", passenger_r46.name ? passenger_r46.name : "N/A", "\u00A0(", passenger_r46.gender, ") ");
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_div_44_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_1_ion_content_13_div_44_div_8_ion_row_1_Template, 6, 3, "ion-row", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.ticketDetails.onward.passenger_details);
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "ion-card", 194)(2, "ion-row", 195)(3, "ion-col", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "ion-icon", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "ion-col", 197)(6, "span", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "Passenger(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, BookingDetailsPage_ng_container_1_ion_content_13_div_44_div_8_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment == "onward");
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_div_45_ion_row_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 217)(2, "div", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const passenger_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", passenger_r47.seat_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", passenger_r47.name ? passenger_r47.name : "N/A", "\u00A0(", passenger_r47.gender, ") ");
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "ion-card", 194)(2, "ion-row", 195)(3, "ion-col", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "ion-icon", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "ion-col", 197)(6, "span", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "Passenger(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, BookingDetailsPage_ng_container_1_ion_content_13_div_45_ion_row_9_Template, 6, 3, "ion-row", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.ticketDetails.return.passenger_details);
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_ion_icon_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-icon", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_13_ion_icon_54_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r48);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.toggleRadioGroupR());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_ion_icon_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-icon", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_13_ion_icon_55_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r49);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.toggleRadioGroupR());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row")(1, "ion-col")(2, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Each passenger is allowed to bring one large piece of luggage weighing up to 15 kg, along with one handbag. The handbag should be compact enough to fit either under your seat or in the overhead compartment, if available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row")(1, "ion-col")(2, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "For any extra luggage, an additional ticket will be required. However, if there\u2019s extra space on board, we\u2019ll do our best to accommodate without needing an extra ticket. If space is limited, the policy will be strictly enforced.");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_81_Template_ion_row_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r50);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.bookAgain());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-col", 223)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Book Again");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_82_ion_col_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 223)(1, "ion-button", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, " See my Trips ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_82_Template_ion_row_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r51);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.gotoMyBookings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_1_ion_content_13_ion_row_82_ion_col_1_Template, 3, 0, "ion-col", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.auth.isLoggedIn());
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_13_ion_row_83_Template_ion_row_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r52);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.confirmBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-col")(2, "ion-button", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, " Confirm Phone Booking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_1_ion_content_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-content", 161)(1, "div", 162)(2, "ion-row", 163)(3, "ion-col", 19)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "Your ticket is booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "ion-row", 164)(7, "ion-col", 19)(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9, "Aisi hoti hai Bharat ki Sawari");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "ion-row", 165)(11, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](12, BookingDetailsPage_ng_container_1_ion_content_13_div_12_Template, 7, 2, "div", 227)(13, BookingDetailsPage_ng_container_1_ion_content_13_div_13_Template, 7, 2, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](14, BookingDetailsPage_ng_container_1_ion_content_13_ion_row_14_Template, 4, 2, "ion-row", 228)(15, BookingDetailsPage_ng_container_1_ion_content_13_ion_row_15_Template, 4, 2, "ion-row", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "ion-row", 172)(17, "ion-col", 19)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19, "A copy of the ticket has been mailed to");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "ion-row", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](21, BookingDetailsPage_ng_container_1_ion_content_13_ion_col_21_Template, 3, 1, "ion-col", 86)(22, BookingDetailsPage_ng_container_1_ion_content_13_ion_col_22_Template, 3, 1, "ion-col", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "ion-row", 229)(24, "ion-segment", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function BookingDetailsPage_ng_container_1_ion_content_13_Template_ion_segment_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r41);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.selectedTripSegment, $event) || (ctx_r1.selectedTripSegment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "ion-segment-button", 231)(26, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](27, "ion-icon", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](29, "Onward Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "ion-segment-button", 233)(31, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](32, "ion-icon", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](34, "Return Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](35, BookingDetailsPage_ng_container_1_ion_content_13_div_35_Template, 57, 9, "div", 0)(36, BookingDetailsPage_ng_container_1_ion_content_13_div_36_Template, 57, 9, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](37, "ion-row", 189)(38, "ion-col", 19)(39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](40, "This transaction will show as \u201COurBus\u201D on your billing statement.");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](41, "ion-row", 192)(42, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](43, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](44, BookingDetailsPage_ng_container_1_ion_content_13_div_44_Template, 9, 1, "div", 0)(45, BookingDetailsPage_ng_container_1_ion_content_13_div_45_Template, 10, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](46, "ion-card", 194)(47, "ion-row", 195)(48, "ion-col", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](49, "ion-icon", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](50, "ion-col", 201)(51, "span", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](52, "Luggage");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](53, "ion-col", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](54, BookingDetailsPage_ng_container_1_ion_content_13_ion_icon_54_Template, 1, 0, "ion-icon", 235)(55, BookingDetailsPage_ng_container_1_ion_content_13_ion_icon_55_Template, 1, 0, "ion-icon", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](56, BookingDetailsPage_ng_container_1_ion_content_13_ion_row_56_Template, 4, 0, "ion-row", 0)(57, BookingDetailsPage_ng_container_1_ion_content_13_ion_row_57_Template, 4, 0, "ion-row", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](58, "ion-card", 194)(59, "ion-row", 195)(60, "ion-col", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](61, "ion-icon", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](62, "ion-col", 207)(63, "span", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](64, "Arrival Time at Boarding Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](65, "ion-row")(66, "ion-col")(67, "span", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](68, "Be there 15 minutes early");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](69, "ion-row")(70, "ion-col")(71, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](72, "Users are suggested to arrive at the pickup stop at least 15 minutes prior to the departure time.");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](73, "ion-row")(74, "ion-col")(75, "span", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](76, "Special Needs");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](77, "ion-row")(78, "ion-col")(79, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](80, "Allow us to be better prepared for your upcoming journey by informing us on support@ourbus.in of any special needs that you might have.");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](81, BookingDetailsPage_ng_container_1_ion_content_13_ion_row_81_Template, 4, 0, "ion-row", 210)(82, BookingDetailsPage_ng_container_1_ion_content_13_ion_row_82_Template, 2, 1, "ion-row", 211)(83, BookingDetailsPage_ng_container_1_ion_content_13_ion_row_83_Template, 4, 0, "ion-row", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment == "onward");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment == "return");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment == "onward");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment == "return");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment == "onward");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment != "onward");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectedTripSegment);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment == "onward");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment == "return");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("src", ctx_r1.logo ? ctx_r1.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment == "onward");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment == "return");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.isShowR);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.isShowR);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.isShowR);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.isShowR);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.newBooking == "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.newBooking == "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.is_e_phone_booking && ctx_r1.ticketDetails.return.is_e_phone_booking);
  }
}
function BookingDetailsPage_ng_container_1_ion_content_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-content")(1, "div", 136)(2, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "ion-icon", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "p", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "Note: Your ticket is in Pending.Please check after sometime.");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 140)(7, "ion-button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_1_ion_content_14_Template_ion_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r53);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.goToHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "p", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9, "Okay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
}
function BookingDetailsPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-header", 142)(2, "ion-toolbar", 143)(3, "ion-row")(4, "ion-col", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, BookingDetailsPage_ng_container_1_ion_buttons_5_Template, 2, 0, "ion-buttons", 145)(6, BookingDetailsPage_ng_container_1_ion_buttons_6_Template, 2, 0, "ion-buttons", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "ion-col", 147)(8, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, BookingDetailsPage_ng_container_1_div_10_Template, 9, 2, "div", 150)(11, BookingDetailsPage_ng_container_1_div_11_Template, 9, 0, "div", 150)(12, BookingDetailsPage_ng_container_1_ion_content_12_Template, 145, 27, "ion-content", 151)(13, BookingDetailsPage_ng_container_1_ion_content_13_Template, 84, 19, "ion-content", 151)(14, BookingDetailsPage_ng_container_1_ion_content_14_Template, 11, 0, "ion-content", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngStyle", ctx_r1.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](9, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](10, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.newBooking == "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.newBooking == "false" || !ctx_r1.newBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("src", ctx_r1.logo ? ctx_r1.logo : "", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.trackBusModal1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.trackBusModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails != null && !ctx_r1.isRoundTrip && ctx_r1.ticketStatus != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails != null && ctx_r1.isRoundTrip && ctx_r1.ticketStatus != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketStatus == "Pending");
  }
}
function BookingDetailsPage_ng_container_2_ion_buttons_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-buttons", 254)(1, "ion-button", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_2_ion_buttons_6_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r54);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.cancelTicketDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "ion-icon", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_2_ion_buttons_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-buttons", 254)(1, "ion-button", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_2_ion_buttons_7_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r55);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.cancelTicketDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "ion-icon", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_2_ion_card_12_ion_row_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 229)(1, "ion-col", 282)(2, "div", 195)(3, "div")(4, "p", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "p", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-col", 284)(9, "div")(10, "p", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "p", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const passenger_r57 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](passenger_r57.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", passenger_r57.gender == "M" ? "Male" : "Female", " | ", passenger_r57.age, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](passenger_r57.seat_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.bus_type.split(",")[1]);
  }
}
function BookingDetailsPage_ng_container_2_ion_card_12_ion_row_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 278)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-col", 279)(5, "div")(6, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.payment_method);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fare);
  }
}
function BookingDetailsPage_ng_container_2_ion_card_12_ion_button_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-button", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_2_ion_card_12_ion_button_91_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r58);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.confirmBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "p", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Confirm Phone Booking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_2_ion_card_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-card", 257)(1, "ion-row", 258)(2, "ion-col", 259)(3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "ion-col", 260)(6, "p", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-col", 262)(9, "p", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "p", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12, "Boarding: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "span", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "p", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16, "Drop: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "span", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "p", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](20, "Departure: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "span", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "p", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24, "Arrival: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "span", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "p", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "p", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_2_ion_card_12_Template_p_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r56);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.trackBusModal = !ctx_r1.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30, "Track Bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "div", 258)(32, "ion-row")(33, "ion-col", 268)(34, "p", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](35, "Passenger Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](36, BookingDetailsPage_ng_container_2_ion_card_12_ion_row_36_Template, 14, 5, "ion-row", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](37, "div", 258)(38, "ion-row")(39, "ion-col", 268)(40, "p", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](41, "Fare & Payment Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](42, "ion-row")(43, "ion-col", 271)(44, "p", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](45, "Base Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](46, "ion-col", 273)(47, "p", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](49, "ion-row")(50, "ion-col", 271)(51, "p", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](52, "e-Booking Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](53, "ion-col", 273)(54, "p", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](56, "ion-row")(57, "ion-col", 271)(58, "p", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](59, "Service Tax Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](60, "ion-col", 273)(61, "p", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](63, "ion-row")(64, "ion-col", 271)(65, "p", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](66, "CC Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](67, "ion-col", 273)(68, "p", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](70, "ion-row")(71, "ion-col", 271)(72, "p", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](73, "Total Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](74, "ion-col", 273)(75, "p", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](77, "div", 258)(78, "ion-row")(79, "ion-col", 276)(80, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](81, "Payment Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](82, "ion-row")(83, "ion-col", 278)(84, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](85, "Total Amount Paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](86, "ion-col", 279)(87, "div")(88, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](90, BookingDetailsPage_ng_container_2_ion_card_12_ion_row_90_Template, 8, 2, "ion-row", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](91, BookingDetailsPage_ng_container_2_ion_card_12_ion_button_91_Template, 4, 0, "ion-button", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Pnr Number: ", ctx_r1.ticketDetails.ticket_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](21, _c2, ctx_r1.segmentDisplayName === "Cancelled"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.segmentDisplayName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.ticketDetails.origin, " - ", ctx_r1.ticketDetails.destination, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.boarding_details.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.drop_off_details ? ctx_r1.ticketDetails.drop_off_details.address : "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.ticketDetails.travel_date, ",", ctx_r1.ticketDetails.dep_time, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.ticketDetails.arr_date, ", ", ctx_r1.ticketDetails.arr_time, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", ctx_r1.ticketDetails.duration, "hrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.ticketDetails.passenger_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.ticketDetails.fare_break_up_hash.base_fare);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.ticketDetails.fare_break_up_hash.ebooking_discount);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.ticketDetails.fare_break_up_hash.service_tax_amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.ticketDetails.fare_break_up_hash.cc_charges);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.ticketDetails.fare_break_up_hash.total_fare);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.currencySym + "" + ctx_r1.fare);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.payment_method);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.is_e_phone_booking);
  }
}
function BookingDetailsPage_ng_container_2_div_13_ion_row_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 229)(1, "ion-col", 282)(2, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "ion-icon", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div")(5, "p", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "p", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "ion-col", 284)(10, "div")(11, "p", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "p", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const passenger_r60 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](passenger_r60.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", passenger_r60.gender == "M" ? "Male" : "Female", " | ", passenger_r60.age, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](passenger_r60.seat_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.bus_type.split(",")[1]);
  }
}
function BookingDetailsPage_ng_container_2_div_13_span_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "(Inc. Taxes)");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_2_div_13_ion_row_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 229)(1, "ion-col", 282)(2, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "ion-icon", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div")(5, "p", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "p", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "ion-col", 284)(10, "div")(11, "p", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "p", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const passenger_r61 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](passenger_r61.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", passenger_r61.gender == "M" ? "Male" : "Female", " | ", passenger_r61.age, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](passenger_r61.seat_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.bus_type.split(",")[1]);
  }
}
function BookingDetailsPage_ng_container_2_div_13_span_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "(Inc. Taxes)");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "p", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Onward Journey");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "ion-card", 257)(4, "ion-row", 258)(5, "ion-col", 128)(6, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](7, "ion-icon", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-col", 291)(9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "p", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "p", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14, "Boarding: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "span", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "p", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18, "Drop: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "span", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "p", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](22, "Departure: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "span", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "p", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](26, "Arrival: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "span", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "p", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "p", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_2_div_13_Template_p_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r59);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.trackBusModal = !ctx_r1.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](32, "Track Bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "ion-col", 293)(34, "p", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](36, "div", 258)(37, "ion-row")(38, "ion-col", 268)(39, "p", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](40, "Passenger Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](41, BookingDetailsPage_ng_container_2_div_13_ion_row_41_Template, 15, 5, "ion-row", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](42, "ion-row", 258)(43, "ion-col", 295)(44, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](45, "Fare ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](46, BookingDetailsPage_ng_container_2_div_13_span_46_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](47, "ion-col", 279)(48, "div")(49, "span", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](51, "p", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](52, "Return Journey");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](53, "ion-card", 257)(54, "ion-row", 258)(55, "ion-col", 128)(56, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](57, "ion-icon", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](58, "ion-col", 291)(59, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](61, "p", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](63, "p", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](64, "Boarding: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](65, "span", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](67, "p", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](68, "Drop: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](69, "span", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](71, "p", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](72, "Departure: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](73, "span", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](75, "p", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](76, "Arrival: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](77, "span", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](79, "p", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](81, "p", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_2_div_13_Template_p_click_81_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r59);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.trackBusModal = !ctx_r1.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](82, "Track Bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](83, "ion-col", 293)(84, "p", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](86, "div", 258)(87, "ion-row")(88, "ion-col", 268)(89, "p", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](90, "Passenger Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](91, BookingDetailsPage_ng_container_2_div_13_ion_row_91_Template, 15, 5, "ion-row", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](92, "ion-row", 258)(93, "ion-col", 295)(94, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](95, "Fare ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](96, BookingDetailsPage_ng_container_2_div_13_span_96_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](97, "ion-col", 279)(98, "div")(99, "span", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Pnr Number: ", ctx_r1.ticketDetails.onward.ticket_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.ticketDetails.onward.origin, " - ", ctx_r1.ticketDetails.onward.destination, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.boarding_details.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.drop_off_details ? ctx_r1.ticketDetails.onward.drop_off_details.address : "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.changeDateFormat1(ctx_r1.ticketDetails.onward.boarding_details.travel_date) + "," + ctx_r1.ticketDetails.onward.boarding_details.dep_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.changeDateFormat1(ctx_r1.ticketDetails.onward.drop_off_details.travel_date) + "," + ctx_r1.ticketDetails.onward.drop_off_details ? ctx_r1.ticketDetails.onward.drop_off_details.arr_time : "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", ctx_r1.ticketDetails.onward.duration, "hrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.ticket_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.ticketDetails.onward.passenger_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.serviceTaxAmount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencyType, "", ctx_r1.fare, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Pnr Number: ", ctx_r1.ticketDetails.return.ticket_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.ticketDetails.return.origin, " - ", ctx_r1.ticketDetails.return.destination, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.boarding_details.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.drop_off_details ? ctx_r1.ticketDetails.return.drop_off_details.address : "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.changeDateFormat1(ctx_r1.ticketDetails.return.boarding_details.travel_date) + "," + ctx_r1.ticketDetails.return.boarding_details.dep_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.changeDateFormat1(ctx_r1.ticketDetails.return.drop_off_details.travel_date) + "," + ctx_r1.ticketDetails.return.drop_off_details ? ctx_r1.ticketDetails.return.drop_off_details.arr_time : "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", ctx_r1.ticketDetails.return.duration, "hrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.ticket_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.ticketDetails.return.passenger_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.serviceTaxAmount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencyType, "", ctx_r1.fare, "");
  }
}
function BookingDetailsPage_ng_container_2_ion_content_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-content")(1, "div", 136)(2, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "ion-icon", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "p", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "Note: Your ticket is in Pending.Please check after sometime.");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 140)(7, "ion-button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_2_ion_content_14_Template_ion_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r62);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.goToHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "p", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9, "Okay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
}
function BookingDetailsPage_ng_container_2_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_2_div_15_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r63);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.trackBusModal = !ctx_r1.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 15)(2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "This action will require you to download TrackingGo App");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-row")(5, "ion-col", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_2_div_15_Template_ion_col_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r63);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.openTgoBrowser("http://" + ctx_r1.metaData.subdomain + ".trackingo.in/live_track"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "OPEN IN BROWSER");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "ion-col", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_2_div_15_Template_ion_col_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r63);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.openTgoBrowser("https://play.google.com/store/apps/details?id=com.bitla.trackingooperator"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, "DOWNLOAD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
}
function BookingDetailsPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-header", 247)(2, "div", 248)(3, "div")(4, "ion-row", 195)(5, "ion-col", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, BookingDetailsPage_ng_container_2_ion_buttons_6_Template, 3, 0, "ion-buttons", 249)(7, BookingDetailsPage_ng_container_2_ion_buttons_7_Template, 3, 0, "ion-buttons", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-col", 250)(9, "p", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, "Ticket Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "ion-content", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](12, BookingDetailsPage_ng_container_2_ion_card_12_Template, 92, 23, "ion-card", 253)(13, BookingDetailsPage_ng_container_2_div_13_Template, 101, 26, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](14, BookingDetailsPage_ng_container_2_ion_content_14_Template, 11, 0, "ion-content", 0)(15, BookingDetailsPage_ng_container_2_div_15_Template, 9, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.redirectToHome);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.redirectToHome);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails != null && !ctx_r1.isRoundTrip && ctx_r1.ticketStatus != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails != null && ctx_r1.isRoundTrip && ctx_r1.ticketStatus != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketStatus == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.trackBusModal);
  }
}
function BookingDetailsPage_ng_container_3_ion_buttons_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-buttons", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_3_ion_buttons_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-buttons", 308)(1, "ion-button", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_ion_buttons_4_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r64);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.gotoHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "ion-icon", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_3_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", ctx_r1.bookingDetails.origin ? ctx_r1.bookingDetails.origin : ctx_r1.ticketDetails && ctx_r1.ticketDetails.origin ? ctx_r1.ticketDetails.origin : "", "-", ctx_r1.bookingDetails.destination ? ctx_r1.bookingDetails.destination : ctx_r1.ticketDetails && ctx_r1.ticketDetails.destination ? ctx_r1.ticketDetails.destination : "", " ");
  }
}
function BookingDetailsPage_ng_container_3_ion_title_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-title", 312);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Ticket Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_3_p_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 313);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_p_7_Template_p_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r65);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.trackBusModal = !ctx_r1.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Track Bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_3_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails && ctx_r1.ticketDetails.travel_date ? ctx_r1.changeDateFormat(ctx_r1.ticketDetails.travel_date) : "");
  }
}
function BookingDetailsPage_ng_container_3_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_div_9_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r66);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.trackBusModal = !ctx_r1.trackBusModal);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 15)(2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "This action will require you to download TrackingGo App");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-row")(5, "ion-col", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_div_9_Template_ion_col_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r66);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.openTgoBrowser("http://" + ctx_r1.metaData.subdomain + ".trackingo.in/live_track"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "OPEN IN BROWSER");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "ion-col", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_div_9_Template_ion_col_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r66);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.openTgoBrowser("https://play.google.com/store/apps/details?id=com.bitla.trackingooperator"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, "DOWNLOAD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
}
function BookingDetailsPage_ng_container_3_ion_content_10_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_ion_content_10_div_3_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r67);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.ticketInvoice());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "img", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_3_ion_content_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "div", 215);
  }
}
function BookingDetailsPage_ng_container_3_ion_content_10_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_ion_content_10_div_6_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r68);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.taxInvoice());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "img", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Tax invoice");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_3_ion_content_10_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "div", 344);
  }
}
function BookingDetailsPage_ng_container_3_ion_content_10_span_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_ion_content_10_span_20_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r69);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.gotoMap(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Locate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_3_ion_content_10_span_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_ion_content_10_span_31_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r70);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.gotoMap(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Locate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_3_ion_content_10_div_44_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 328)(1, "div", 329)(2, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 331)(7, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const passenger_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](passenger_r71.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.ticket_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Seat ", passenger_r71.seat_number, "");
  }
}
function BookingDetailsPage_ng_container_3_ion_content_10_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_3_ion_content_10_div_44_div_1_Template, 9, 3, "div", 346);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const passenger_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", passenger_r71.ticket_status != "Cancelled");
  }
}
function BookingDetailsPage_ng_container_3_ion_content_10_span_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "(Inc. Taxes)");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_3_ion_content_10_ion_button_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-button", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_ion_content_10_ion_button_96_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r72);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.confirmBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "p", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Confirm Phone Booking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_3_ion_content_10_ion_row_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 348)(1, "ion-col", 349)(2, "ion-button", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_ion_content_10_ion_row_97_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r73);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.goToCancel("0"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "p", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Cancel Booking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "ion-col", 349)(7, "ion-button", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_ion_content_10_ion_row_97_Template_ion_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r73);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.goToUpdate("0"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "p", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9, "Update Booking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}
function BookingDetailsPage_ng_container_3_ion_content_10_ion_row_98_ion_col_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 349)(1, "ion-button", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_ion_content_10_ion_row_98_ion_col_6_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r75);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.gotoMyBookings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "p", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "View My Bookings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_3_ion_content_10_ion_row_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 348)(1, "ion-col", 349)(2, "ion-button", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_ion_content_10_ion_row_98_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r74);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.gotoHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "p", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Book Another Ticket ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, BookingDetailsPage_ng_container_3_ion_content_10_ion_row_98_ion_col_6_Template, 5, 0, "ion-col", 351);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.auth.isLoggedIn());
  }
}
function BookingDetailsPage_ng_container_3_ion_content_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-content", 315)(1, "ion-row")(2, "ion-col", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, BookingDetailsPage_ng_container_3_ion_content_10_div_3_Template, 4, 0, "div", 170)(4, BookingDetailsPage_ng_container_3_ion_content_10_div_4_Template, 1, 0, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "ion-col", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, BookingDetailsPage_ng_container_3_ion_content_10_div_6_Template, 4, 0, "div", 316)(7, BookingDetailsPage_ng_container_3_ion_content_10_div_7_Template, 1, 0, "div", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-item", 318)(9, "div", 319)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11, " Boarding / Dropping point details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 320)(13, "div", 321)(14, "ul")(15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "div", 322)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](20, BookingDetailsPage_ng_container_3_ion_content_10_span_20_Template, 2, 0, "span", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "div", 325)(24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "div", 322)(29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](31, BookingDetailsPage_ng_container_3_ion_content_10_span_31_Template, 2, 0, "span", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "div", 325)(35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](37, "div", 326)(38, "ion-item", 318)(39, "div", 319)(40, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](41, " Passenger details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](42, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](43, " PNR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](44, BookingDetailsPage_ng_container_3_ion_content_10_div_44_Template, 2, 1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](45, "div", 327)(46, "ion-item", 318)(47, "div", 319)(48, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](49, " Bus details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](50, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](51, " Bus no. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](52, "div", 328)(53, "div", 329)(54, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](56, "div", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](58, "div", 331)(59, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](61, "ion-item", 318)(62, "div", 319)(63, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](64, " Contact details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](65, "div", 327)(66, "div", 328)(67, "div", 329)(68, "div", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](69, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](70, "div", 333)(71, "span", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](73, "div", 329)(74, "div", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](75, "Mobile number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](76, "div", 335)(77, "span", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](79, "div", 329)(80, "div", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](81, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](82, "div", 337)(83, "span", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](85, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](86, "div", 327)(87, "div", 328)(88, "div", 329)(89, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](90, "Fare ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](91, BookingDetailsPage_ng_container_3_ion_content_10_span_91_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](92, "div")(93, "span", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](95, "div", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](96, BookingDetailsPage_ng_container_3_ion_content_10_ion_button_96_Template, 4, 0, "ion-button", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](97, BookingDetailsPage_ng_container_3_ion_content_10_ion_row_97_Template, 11, 0, "ion-row", 340)(98, BookingDetailsPage_ng_container_3_ion_content_10_ion_row_98_Template, 7, 1, "ion-row", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.ticket_status == "Booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.ticket_status == "Booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.ticket_status != "Cancelled" && ctx_r1.ticketDetails.ticket_status != "Wallet Phone Booking" && ctx_r1.isVisibleTaxInvoice);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.ticket_status != "Cancelled" && ctx_r1.ticketDetails.ticket_status != "Wallet Phone Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.hideLocateTrackBus);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", ctx_r1.ticketDetails.boarding_details.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.boarding_details.dep_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.hideLocateTrackBus);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.drop_off_details ? ctx_r1.ticketDetails.drop_off_details.address : "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.drop_off_details ? ctx_r1.ticketDetails.drop_off_details.arr_time : "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.ticketDetails.passenger_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.bus_type.split(",")[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.service_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.bus_type.split(",")[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.passenger_details[0].name ? ctx_r1.ticketDetails.passenger_details[0].name : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.passenger_details[0].mobile ? ctx_r1.getMobileNumber(ctx_r1.ticketDetails.passenger_details[0].mobile) : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.passenger_details[0].email ? ctx_r1.ticketDetails.passenger_details[0].email : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.serviceTaxAmount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.currencyType, "", ctx_r1.fare, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.is_e_phone_booking && ctx_r1.ticketDetails.ticket_status !== "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.is_e_phone_booking && ctx_r1.ticketDetails.ticket_status !== "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.newBooking);
  }
}
function BookingDetailsPage_ng_container_3_ion_content_11_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_ion_content_11_div_11_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r76);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.ticketInvoiceOnWards());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "img", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_3_ion_content_11_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "div", 215);
  }
}
function BookingDetailsPage_ng_container_3_ion_content_11_ion_col_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_ion_content_11_ion_col_13_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r77);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.taxInvoiceOnWards());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "img", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Tax invoice");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_3_ion_content_11_ion_col_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "div", 215);
  }
}
function BookingDetailsPage_ng_container_3_ion_content_11_ion_col_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_3_ion_content_11_ion_col_13_div_1_Template, 4, 0, "div", 316)(2, BookingDetailsPage_ng_container_3_ion_content_11_ion_col_13_div_2_Template, 1, 0, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.ticket_status != "Wallet Phone Booking" && ctx_r1.isVisibleTaxInvoice);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.ticket_status != "Wallet Phone Booking");
  }
}
function BookingDetailsPage_ng_container_3_ion_content_11_div_18_span_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_ion_content_11_div_18_span_8_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r78);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.gotoMap(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Locate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_3_ion_content_11_div_18_span_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_ion_content_11_div_18_span_19_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r79);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.gotoMap(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Locate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_3_ion_content_11_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 320)(1, "div", 321)(2, "ul")(3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 322)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, BookingDetailsPage_ng_container_3_ion_content_11_div_18_span_8_Template, 2, 0, "span", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "div", 325)(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "div", 322)(17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](19, BookingDetailsPage_ng_container_3_ion_content_11_div_18_span_19_Template, 2, 0, "span", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "div", 325)(23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.hideLocateTrackBus);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", ctx_r1.ticketDetails.onward.boarding_details.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.boarding_details.dep_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.hideLocateTrackBus);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.onward.drop_off_details ? ctx_r1.ticketDetails.onward.drop_off_details.address : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.drop_off_details ? ctx_r1.ticketDetails.onward.drop_off_details.arr_time : "NA");
  }
}
function BookingDetailsPage_ng_container_3_ion_content_11_div_25_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 328)(1, "div", 329)(2, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 331)(7, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const passenger_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](passenger_r80.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.ticket_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Seat ", passenger_r80.seat_number, "");
  }
}
function BookingDetailsPage_ng_container_3_ion_content_11_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_3_ion_content_11_div_25_div_1_div_1_Template, 9, 3, "div", 346);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const passenger_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", passenger_r80.ticket_status != "Cancelled");
  }
}
function BookingDetailsPage_ng_container_3_ion_content_11_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_3_ion_content_11_div_25_div_1_Template, 2, 1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.ticketDetails.onward.passenger_details);
  }
}
function BookingDetailsPage_ng_container_3_ion_content_11_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 328)(1, "div", 329)(2, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 331)(7, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "hr", 358);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.bus_type.split(",")[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.service_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.onward.bus_type.split(",")[0]);
  }
}
function BookingDetailsPage_ng_container_3_ion_content_11_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_ion_content_11_div_43_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r81);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.ticketInvoicereturn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "img", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_3_ion_content_11_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "div", 215);
  }
}
function BookingDetailsPage_ng_container_3_ion_content_11_ion_col_45_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_ion_content_11_ion_col_45_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r82);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.taxInvoiceReturn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "img", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Tax invoice");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_3_ion_content_11_ion_col_45_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "div", 215);
  }
}
function BookingDetailsPage_ng_container_3_ion_content_11_ion_col_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_3_ion_content_11_ion_col_45_div_1_Template, 4, 0, "div", 316)(2, BookingDetailsPage_ng_container_3_ion_content_11_ion_col_45_div_2_Template, 1, 0, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.ticket_status != "Wallet Phone Booking" && ctx_r1.isVisibleTaxInvoice);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.ticket_status != "Wallet Phone Booking");
  }
}
function BookingDetailsPage_ng_container_3_ion_content_11_div_50_span_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_ion_content_11_div_50_span_8_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r83);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.gotoMap(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Locate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_3_ion_content_11_div_50_span_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_ion_content_11_div_50_span_19_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r84);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.gotoMap(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Locate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_3_ion_content_11_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 320)(1, "div", 321)(2, "ul")(3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 322)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, BookingDetailsPage_ng_container_3_ion_content_11_div_50_span_8_Template, 2, 0, "span", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "div", 325)(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "div", 322)(17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](19, BookingDetailsPage_ng_container_3_ion_content_11_div_50_span_19_Template, 2, 0, "span", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "div", 325)(23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.hideLocateTrackBus);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", ctx_r1.ticketDetails.return.boarding_details.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.boarding_details.dep_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.hideLocateTrackBus);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.ticketDetails.return.drop_off_details ? ctx_r1.ticketDetails.return.drop_off_details.address : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.drop_off_details ? ctx_r1.ticketDetails.return.drop_off_details.arr_time : "NA");
  }
}
function BookingDetailsPage_ng_container_3_ion_content_11_div_57_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 328)(1, "div", 329)(2, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 331)(7, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const passenger_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](passenger_r85.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.ticket_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Seat ", passenger_r85.seat_number, "");
  }
}
function BookingDetailsPage_ng_container_3_ion_content_11_div_57_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_3_ion_content_11_div_57_div_1_div_1_Template, 9, 3, "div", 346);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const passenger_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", passenger_r85.ticket_status != "Cancelled");
  }
}
function BookingDetailsPage_ng_container_3_ion_content_11_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, BookingDetailsPage_ng_container_3_ion_content_11_div_57_div_1_Template, 2, 1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.ticketDetails.return.passenger_details);
  }
}
function BookingDetailsPage_ng_container_3_ion_content_11_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 328)(1, "div", 329)(2, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 331)(7, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "hr", 358);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.bus_type.split(",")[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.service_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.ticketDetails.return.bus_type.split(",")[0]);
  }
}
function BookingDetailsPage_ng_container_3_ion_content_11_ion_button_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-button", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_ion_content_11_ion_button_65_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r86);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.confirmBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "p", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Confirm Phone Booking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function BookingDetailsPage_ng_container_3_ion_content_11_ion_row_66_ion_col_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-col", 349)(1, "ion-button", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_ion_content_11_ion_row_66_ion_col_6_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r88);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.gotoMyBookings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "p", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "View My Bookings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function BookingDetailsPage_ng_container_3_ion_content_11_ion_row_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-row", 348)(1, "ion-col", 349)(2, "ion-button", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_ion_content_11_ion_row_66_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r87);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.gotoHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "p", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Book Another Ticket ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, BookingDetailsPage_ng_container_3_ion_content_11_ion_row_66_ion_col_6_Template, 5, 0, "ion-col", 351);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.auth.isLoggedIn());
  }
}
function BookingDetailsPage_ng_container_3_ion_content_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-content", 315)(1, "div", 352)(2, "ion-item", 318)(3, "div", 353)(4, "span")(5, "div", 354);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, " Onward Journey");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "ion-row")(10, "ion-col", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](11, BookingDetailsPage_ng_container_3_ion_content_11_div_11_Template, 4, 0, "div", 170)(12, BookingDetailsPage_ng_container_3_ion_content_11_div_12_Template, 1, 0, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](13, BookingDetailsPage_ng_container_3_ion_content_11_ion_col_13_Template, 3, 2, "ion-col", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "ion-item", 318)(15, "div", 319)(16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17, " Boarding / Dropping point details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](18, BookingDetailsPage_ng_container_3_ion_content_11_div_18_Template, 25, 8, "div", 355);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "ion-item", 318)(20, "div", 319)(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](22, " Passenger details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24, " PNR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](25, BookingDetailsPage_ng_container_3_ion_content_11_div_25_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "ion-item", 318)(27, "div", 319)(28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](29, " Bus details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](31, " Bus no. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](32, BookingDetailsPage_ng_container_3_ion_content_11_div_32_Template, 10, 3, "div", 346);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "div", 356)(34, "ion-item", 318)(35, "div", 353)(36, "span")(37, "div", 354);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](38, " Return Journey");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](41, "ion-row")(42, "ion-col", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](43, BookingDetailsPage_ng_container_3_ion_content_11_div_43_Template, 4, 0, "div", 170)(44, BookingDetailsPage_ng_container_3_ion_content_11_div_44_Template, 1, 0, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](45, BookingDetailsPage_ng_container_3_ion_content_11_ion_col_45_Template, 3, 2, "ion-col", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](46, "ion-item", 318)(47, "div", 319)(48, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](49, " Boarding / Dropping point details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](50, BookingDetailsPage_ng_container_3_ion_content_11_div_50_Template, 25, 8, "div", 355);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](51, "ion-item", 318)(52, "div", 319)(53, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](54, " Passenger details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](55, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](56, " PNR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](57, BookingDetailsPage_ng_container_3_ion_content_11_div_57_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](58, "ion-item", 357)(59, "div", 319)(60, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](61, " Bus details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](62, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](63, " Bus no. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](64, BookingDetailsPage_ng_container_3_ion_content_11_div_64_Template, 10, 3, "div", 346);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](65, BookingDetailsPage_ng_container_3_ion_content_11_ion_button_65_Template, 4, 0, "ion-button", 339)(66, BookingDetailsPage_ng_container_3_ion_content_11_ion_row_66_Template, 7, 1, "ion-row", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", ctx_r1.changeDateFormat(ctx_r1.ticketDetails.onward.travel_date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.ticket_status == "Booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.ticket_status == "Booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.newBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.passenger_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.onward.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", ctx_r1.changeDateFormat(ctx_r1.ticketDetails.return.travel_date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.ticket_status == "Booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.ticket_status == "Booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.newBooking);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.passenger_details);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails.return.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.newBooking && ctx_r1.ticketDetails.return.is_e_phone_booking && ctx_r1.ticketDetails.onward.is_e_phone_booking);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.newBooking);
  }
}
function BookingDetailsPage_ng_container_3_ion_content_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-content")(1, "div", 136)(2, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "ion-icon", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "p", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "Note: Your ticket is in Pending.Please check after sometime.");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 140)(7, "ion-button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function BookingDetailsPage_ng_container_3_ion_content_12_Template_ion_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r89);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.goToHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "p", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9, "Okay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
}
function BookingDetailsPage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, BookingDetailsPage_ng_container_3_ion_buttons_3_Template, 2, 0, "ion-buttons", 300)(4, BookingDetailsPage_ng_container_3_ion_buttons_4_Template, 3, 0, "ion-buttons", 301)(5, BookingDetailsPage_ng_container_3_p_5_Template, 2, 2, "p", 302)(6, BookingDetailsPage_ng_container_3_ion_title_6_Template, 2, 0, "ion-title", 303)(7, BookingDetailsPage_ng_container_3_p_7_Template, 2, 0, "p", 304)(8, BookingDetailsPage_ng_container_3_p_8_Template, 2, 1, "p", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, BookingDetailsPage_ng_container_3_div_9_Template, 9, 0, "div", 10)(10, BookingDetailsPage_ng_container_3_ion_content_10_Template, 99, 25, "ion-content", 306)(11, BookingDetailsPage_ng_container_3_ion_content_11_Template, 67, 16, "ion-content", 306)(12, BookingDetailsPage_ng_container_3_ion_content_12_Template, 11, 0, "ion-content", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction2"](11, _c3, ctx_r1.isRoundTrip, !ctx_r1.isRoundTrip));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.newBooking && !ctx_r1.redirectToHome);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.newBooking && ctx_r1.redirectToHome);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.isRoundTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.isRoundTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.isRoundTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.isRoundTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.trackBusModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails != null && !ctx_r1.isRoundTrip && ctx_r1.ticketStatus != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketDetails != null && ctx_r1.isRoundTrip && ctx_r1.ticketStatus != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.ticketStatus == "Pending");
  }
}
class BookingDetailsPage {
  constructor(commonStorage, apiFactory, dateService,
  // private iab: InAppBrowser,
  util,
  // private transfer: FileTransfer,
  appData, commonService, loader, modalController, auth, navCtrl,
  // private locationProvider: PluginProvider,
  route, router, platform, inAppBrowser, firebaseAnalyticsService) {
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
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    this.segmentDisplayName = localStorage.getItem('segmentDisplayName') || 'Upcoming';
    this.commonStorage.localRemove('autofillData');
    this.bookingDetails = JSON.parse(localStorage.getItem('bookingDetails'));
    this.bookingDetails = this.bookingDetails == null ? this.commonStorage.localGet('bookedTicketDetails') : this.bookingDetails;
    let travelDate = this.bookingDetails.travelDate ? this.bookingDetails.travelDate : this.bookingDetails.travel_date;
    this.day = this.dateService.getDayNameFromDate(travelDate);
    this.route.queryParams.subscribe(params => {
      this.redirectToHome = params['redirectToHome'] ? params['redirectToHome'] : false;
      this.newBooking = params['new_booking'];
      this.hideLocateTrackBus = params["hideLocateTrackBus"] ? params["hideLocateTrackBus"] : false;
      this.isRoundTrip = params["is_roundTrip"] ? params["is_roundTrip"] : false;
      this.rateServicee = params["rateService"] ? params["rateService"] : false;
    });
    this.metaData = this.commonStorage.getItem("metaData");
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
          let travelDate = this.bookingDetails.travelDate ? this.bookingDetails.travelDate : this.bookingDetails.travel_date;
          this.day = this.dateService.getDayNameFromDate(travelDate);
          this.ticketDetails = result;
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
          if (this.metaData.msiteFolder == 'ourbustheme') {
            this.checkTravelDate();
          }
          this.fareBreakupDetails_onward = result.onward.fare_break_up_hash;
          this.fareBreakupDetails_return = result.return.fare_break_up_hash;
          this.ticketStatus = this.ticketDetails.ticket_status;
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
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
  socialShare() {
    const shareOptions = {
      title: 'Share this app',
      text: 'Check out this app!',
      url: this.message,
      dialogTitle: 'Share via'
    };
    _capacitor_share__WEBPACK_IMPORTED_MODULE_2__.Share.share(shareOptions).then(() => {}, () => {
      this.util.showToast("Failed to share app ");
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
    this.navCtrl.navigateForward('phone-confirm-booking');
    // this.router.navigate(['phone-confirm-booking']);
  }
  taxInvoice() {
    let travelDate = this.bookingDetails.travelDate ? this.bookingDetails.travelDate : this.bookingDetails.travel_date;
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
  downloadticketInvoice() {
    if (this.ticketDetails.sharing_pdf_link_ios != "") {
      // this.download(this.ticketDetails.sharing_pdf_link);
      // http://jpsb-qa1.jpsb-qa1.ticketsimply.co.in/shortened_url/oJLYkcp1IBsv
      //https://orbs-np.orbs-np.ourbus.in/t_tickets/cms_download_pdf_ticket?pnr_number=ETL835
      // let newText = this.ticketDetails.sharing_pdf_link.replace(
      //   ".cbus-qa1.",
      //   "."
      // );
      let newText = this.ticketDetails.sharing_pdf_link_ios;
      if (this.appData.isIOS) {
        this.downloadinIOS(newText);
      } else {
        this.download(newText);
      }
    } else {
      this.util.showToast("Invalid Pdf link");
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
      // this.download(this.ticketDetails.sharing_pdf_link);
      // http://jpsb-qa1.jpsb-qa1.ticketsimply.co.in/shortened_url/oJLYkcp1IBsv
      let newText = this.ticketDetails.sharing_pdf_link.replace('.jpsb-qa1.', '.');
      this.download(newText);
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
    let travelDate = this.bookingDetails.travelDate ? this.bookingDetails.travelDate : this.bookingDetails.travel_date;
    var path = 'ticket_number=' + this.ticketDetails.onward.ticket_number + '&journey_date=' + travelDate + '&email_or_phone_number=' + this.ticketDetails.onward.passenger_details[0].mobile;
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
    let travelDate = this.bookingDetails.travelDate ? this.bookingDetails.travelDate : this.bookingDetails.travel_date;
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
        user: getNum == '1' ? this.ticketDetails.onward.passenger_details[0].cus_email : getNum == '2' ? this.ticketDetails.return.passenger_details[0].cus_email : this.ticketDetails.passenger_details[0].cus_email
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
    this.navCtrl.navigateForward('contact-us');
  }
  /**
  * @nete for new theme-1
  * @param date which is formated according to new Theme-1 design.
  * @returns
  */
  getFormatedDate(date) {
    return moment__WEBPACK_IMPORTED_MODULE_3___default()(date, "DD/MM/YYYY").format("DD MMM YYYY");
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
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
}
_BookingDetailsPage = BookingDetailsPage;
_BookingDetailsPage.ɵfac = function BookingDetailsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BookingDetailsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_5__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_6__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_7__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_8__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_9__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_10__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_11__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_authentication__WEBPACK_IMPORTED_MODULE_12__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_17__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_17__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_13__.InAppBrowser), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_14__.FirebaseAnalyticsService));
};
_BookingDetailsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: _BookingDetailsPage,
  selectors: [["app-booking-details"]],
  standalone: false,
  decls: 4,
  vars: 4,
  consts: [[4, "ngIf"], [1, "theme1", 2, "--background", "#191966", 3, "translucent"], [2, "--opacity", "8 !important"], ["mode", "md", "slot", "start", 3, "click", 4, "ngIf"], ["slot", "start", "style", "height: 30px; width: 26px; margin-left: 4%;", "name", "home", 3, "click", 4, "ngIf"], ["class", "theme1", 4, "ngIf"], ["mode", "md", "slot", "start", 3, "click"], ["slot", "start", "name", "home", 2, "height", "30px", "width", "26px", "margin-left", "4%", 3, "click"], [1, "theme1"], ["mode", "md", "scrollable", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "whole center", 3, "click", 4, "ngIf"], ["mode", "md", "scrollable", "", 3, "ngModelChange", "ngModel"], ["value", "future", 2, "color", "#fff"], ["value", "previous", 2, "color", "#fff"], [1, "whole", "center", 3, "click"], [1, "legend-box"], [1, "txt-msg"], ["size", "7", 1, "brws-txt", 3, "click"], ["size", "5", 1, "dwn-txt", 3, "click"], ["size", "12"], [1, "ion-no-margin", "ion-padding-top", "ion-padding-bottom"], ["size", "4", 1, "ion-no-padding"], [1, "", 2, "margin", "0", "font-weight", "bold", "color", "#191966 !important"], [2, "margin-bottom", "0"], ["size", "4 ", 1, "ion-no-padding"], [1, "", 2, "margin", "0", "font-weight", "bold", "color", "#F2C21A !important"], [2, "color", "#A0A0A0"], ["size", "4", 2, "display", "flex", "align-items", "center", "padding", "0"], [1, "location-line"], [1, "location-dot"], [1, "location-bus"], ["width", "24", "height", "8", "viewBox", "0 0 24 8", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M16.5085 6.42781C16.3873 5.70013 16.6298 5.21501 17.2362 4.85117C17.7213 4.60862 18.3277 4.60861 18.8128 4.97245C19.298 5.33629 19.5405 5.82141 19.4192 6.42781H19.5405C20.5108 6.42781 21.481 6.42781 22.5725 6.42781C22.9363 6.42781 23.0576 6.30653 23.0576 5.94269C23.0576 5.21501 23.0576 4.36606 23.0576 3.63838C23.0576 3.5171 23.0576 3.39582 22.9363 3.39582C22.8151 3.27454 22.8151 3.27454 22.8151 3.15326C22.8151 2.18303 22.6938 1.33407 22.6938 0.363838C22.6938 0.12128 22.5725 0 22.3299 0C21.481 0 20.632 0 19.7831 0C15.9021 0 12.1425 0 8.26154 0C6.07851 0 3.7742 0 1.59117 0C1.10605 0 0.620937 0.363838 0.499659 0.848955V0.970235C0.499659 2.42559 0.499659 3.88094 0.499659 5.45757C0.499659 5.57885 0.620934 5.70013 0.742214 5.70013C1.22733 5.82141 1.83373 5.94269 2.31885 6.06397C2.92525 6.18525 3.65292 6.30653 4.25932 6.42781C4.50187 6.42781 4.86571 6.54909 5.22955 6.54909C5.22955 5.94269 5.35083 5.33629 5.95723 4.97245C6.19979 4.85117 6.56362 4.7299 6.80618 4.7299C7.65514 4.85117 8.26154 5.57885 8.14026 6.42781C10.8084 6.42781 13.5978 6.42781 16.5085 6.42781ZM12.5063 0.848955C12.9914 0.848955 13.5978 0.848955 14.0829 0.848955C14.3255 0.848955 14.5681 0.970235 14.5681 1.33407C14.5681 1.69791 14.5681 2.06175 14.5681 2.54687C14.5681 2.9107 14.4468 3.03198 14.0829 3.03198C12.9914 3.03198 12.0212 3.03198 10.9297 3.03198C10.6871 3.03198 10.4446 2.9107 10.4446 2.54687C10.4446 2.18303 10.4446 1.69791 10.4446 1.33407C10.4446 1.09151 10.5658 0.848955 10.9297 0.848955C11.4148 0.848955 12.0212 0.848955 12.5063 0.848955ZM17.2362 0.848955C17.7213 0.848955 18.3277 0.848955 18.8128 0.848955C19.0554 0.848955 19.1767 0.970235 19.298 1.21279C19.298 1.57663 19.298 2.06175 19.298 2.42559C19.298 2.66815 19.1767 2.78943 18.9341 2.78943C17.8426 2.78943 16.7511 2.78943 15.6596 2.78943C15.417 2.78943 15.2957 2.66815 15.2957 2.42559C15.2957 2.06175 15.2957 1.57663 15.2957 1.21279C15.2957 0.848955 15.417 0.727677 15.7809 0.727677C16.266 0.848956 16.7511 0.848955 17.2362 0.848955ZM7.77642 0.848955C8.26154 0.848955 8.86793 0.848955 9.35305 0.848955C9.59561 0.848955 9.71689 0.970235 9.71689 1.21279C9.71689 1.57663 9.71689 2.06175 9.71689 2.42559C9.71689 2.66815 9.59561 2.78943 9.35305 2.78943C8.26154 2.78943 7.17002 2.78943 6.07851 2.78943C5.83595 2.78943 5.71467 2.66815 5.71467 2.42559C5.71467 2.06175 5.71467 1.57663 5.71467 1.21279C5.71467 0.848955 5.83595 0.727677 6.19979 0.727677C6.6849 0.848956 7.2913 0.848955 7.77642 0.848955ZM3.04652 2.91071C2.56141 2.91071 1.95501 2.91071 1.46989 2.91071C1.22733 2.91071 1.10605 2.78942 1.10605 2.54687C1.10605 2.30431 1.10605 2.06175 1.10605 1.69791C1.10605 1.33407 1.22733 1.09151 1.59117 0.970235C1.71245 0.848956 1.95501 0.848955 2.19757 0.848955C3.04652 0.848955 3.89548 0.848955 4.74443 0.848955C5.10827 0.848955 5.22955 0.970235 5.22955 1.33407C5.22955 1.69791 5.22955 2.06175 5.22955 2.42559C5.22955 2.78943 5.10827 2.91071 4.74443 2.91071C4.13804 2.91071 3.53164 2.91071 3.04652 2.91071ZM21.7235 3.27454C21.7235 3.88094 21.7235 4.60862 21.7235 5.21501C21.7235 5.45757 21.6023 5.57885 21.3597 5.57885C21.1171 5.57885 20.8746 5.57885 20.632 5.57885C20.3895 5.57885 20.1469 5.45757 20.1469 5.09373C20.1469 3.75966 20.1469 2.42559 20.1469 1.21279C20.1469 0.970235 20.2682 0.848956 20.5108 0.727677C20.7533 0.727677 20.9959 0.727677 21.1171 0.727677C21.481 0.727677 21.6023 0.848955 21.6023 1.21279C21.7235 2.06175 21.7235 2.66815 21.7235 3.27454Z", "fill", "#191966"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M19.0557 6.06396C19.0557 5.45756 18.4493 4.97244 17.8429 4.97244C17.2365 4.97244 16.7514 5.45756 16.7514 6.18524C16.7514 6.79163 17.2365 7.27675 17.8429 7.27675C18.5705 7.27675 19.0557 6.79163 19.0557 6.06396ZM17.3578 6.18524C17.3578 5.94268 17.6003 5.57884 17.8429 5.57884C18.0854 5.57884 18.328 5.8214 18.4493 6.06396C18.4493 6.30652 18.2067 6.67036 17.9642 6.67036C17.6003 6.67036 17.3578 6.42779 17.3578 6.18524Z", "fill", "#191966"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.56377 7.27675C7.17017 7.27675 7.77657 6.79163 7.65529 6.06396C7.65529 5.45756 7.17017 4.97244 6.56377 4.97244C5.95738 4.97244 5.47226 5.45756 5.47226 6.18524C5.35098 6.79163 5.8361 7.27675 6.56377 7.27675ZM5.95738 6.06396C5.95738 5.8214 6.19994 5.57884 6.4425 5.57884C6.68505 5.57884 6.92761 5.8214 6.92761 6.18524C6.92761 6.42779 6.68505 6.67036 6.32122 6.67036C6.19994 6.67036 5.95738 6.4278 5.95738 6.06396Z", "fill", "#191966"], [1, "location-dot-blue"], [1, "", 2, "margin", "0", "color", "#000 !important", "margin-top", "13px !important"], [2, "margin", "0", "position", "absolute", "left", "30%", "top", "5px", "color", "#A0A0A0", "font-size", "14px"], [1, "", 2, "margin", "0", "color", "#000 !important", "margin-top", "13px!important"], [1, "card-corner-design", 2, "position", "relative"], [1, "card-circular-corner", "ion-margin-top", "ion-margin-bottom"], [1, "dash-line"], [1, "ion-padding"], ["size", "12", 1, "pnr-status"], ["size", "2", 2, "display", "flex", "justify-content", "center", "align-items", "center"], [1, "pnr-circle-status"], ["width", "23", "height", "23", "viewBox", "0 0 23 23", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M6.46973 7.04369L3.66703 4.24098C-0.282238 8.50874 -0.282238 15.1333 3.66703 19.4648L6.46973 16.6621C4.04921 13.9231 4.04921 9.78269 6.46973 7.04369Z", "fill", "#FBAE17"], ["d", "M7.04294 17.2353L4.24023 20.038C8.50799 23.9873 15.1326 23.9873 19.464 20.038L16.6613 17.2353C13.9223 19.6559 9.78195 19.6559 7.04294 17.2353Z", "fill", "#FBAE17"], ["d", "M17.2344 16.6621L20.0371 19.4648C23.9863 15.197 23.9863 8.57244 20.0371 4.24098L17.2344 7.04369C19.6549 9.78269 19.6549 13.9231 17.2344 16.6621Z", "fill", "#BBBDBF"], ["d", "M16.6613 6.4704L19.464 3.6677C15.1963 -0.281567 8.57169 -0.281567 4.24023 3.6677L7.04294 6.4704C9.78195 4.04989 13.9223 4.04989 16.6613 6.4704Z", "fill", "#FBAE17"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M9.33617 13.4135C9.39987 13.0313 9.27247 12.7765 8.95398 12.5854C8.69919 12.458 8.3807 12.458 8.12591 12.6491C7.87112 12.8402 7.74372 13.095 7.80742 13.4135H7.74372C7.23414 13.4135 6.72456 13.4135 6.15128 13.4135C5.96018 13.4135 5.89648 13.3498 5.89648 13.1587C5.89648 12.7765 5.89648 12.3306 5.89648 11.9484C5.89648 11.8847 5.89648 11.821 5.96018 11.821C6.02388 11.7573 6.02388 11.7573 6.02388 11.6936C6.02388 11.184 6.08758 10.7382 6.08758 10.2286C6.08758 10.1012 6.15128 10.0375 6.27867 10.0375C6.72456 10.0375 7.17044 10.0375 7.61633 10.0375C9.65466 10.0375 11.6293 10.0375 13.6676 10.0375C14.8142 10.0375 16.0244 10.0375 17.171 10.0375C17.4258 10.0375 17.6806 10.2286 17.7443 10.4834V10.5471C17.7443 11.3114 17.7443 12.0758 17.7443 12.9039C17.7443 12.9676 17.6806 13.0313 17.6169 13.0313C17.3621 13.095 17.0436 13.1587 16.7888 13.2224C16.4703 13.2861 16.0881 13.3498 15.7696 13.4135C15.6423 13.4135 15.4512 13.4772 15.2601 13.4772C15.2601 13.1587 15.1964 12.8402 14.8779 12.6491C14.7505 12.5854 14.5594 12.5217 14.432 12.5217C13.9861 12.5854 13.6676 12.9676 13.7313 13.4135C12.33 13.4135 10.8649 13.4135 9.33617 13.4135ZM11.4382 10.4834C11.1834 10.4834 10.8649 10.4834 10.6101 10.4834C10.4827 10.4834 10.3553 10.5471 10.3553 10.7382C10.3553 10.9292 10.3553 11.1203 10.3553 11.3751C10.3553 11.5662 10.419 11.6299 10.6101 11.6299C11.1834 11.6299 11.693 11.6299 12.2663 11.6299C12.3937 11.6299 12.5211 11.5662 12.5211 11.3751C12.5211 11.184 12.5211 10.9292 12.5211 10.7382C12.5211 10.6108 12.4574 10.4834 12.2663 10.4834C12.0115 10.4834 11.693 10.4834 11.4382 10.4834ZM8.95398 10.4834C8.69919 10.4834 8.3807 10.4834 8.12591 10.4834C7.99851 10.4834 7.93482 10.5471 7.87112 10.6745C7.87112 10.8655 7.87112 11.1203 7.87112 11.3114C7.87112 11.4388 7.93482 11.5025 8.06221 11.5025C8.63549 11.5025 9.20877 11.5025 9.78205 11.5025C9.90945 11.5025 9.97315 11.4388 9.97315 11.3114C9.97315 11.1203 9.97315 10.8655 9.97315 10.6745C9.97315 10.4834 9.90945 10.4197 9.71835 10.4197C9.46356 10.4834 9.20877 10.4834 8.95398 10.4834ZM13.9224 10.4834C13.6676 10.4834 13.3491 10.4834 13.0943 10.4834C12.9669 10.4834 12.9032 10.5471 12.9032 10.6745C12.9032 10.8655 12.9032 11.1203 12.9032 11.3114C12.9032 11.4388 12.9669 11.5025 13.0943 11.5025C13.6676 11.5025 14.2409 11.5025 14.8142 11.5025C14.9416 11.5025 15.0053 11.4388 15.0053 11.3114C15.0053 11.1203 15.0053 10.8655 15.0053 10.6745C15.0053 10.4834 14.9416 10.4197 14.7505 10.4197C14.4957 10.4834 14.1772 10.4834 13.9224 10.4834ZM16.4066 11.5662C16.6614 11.5662 16.9799 11.5662 17.2347 11.5662C17.3621 11.5662 17.4258 11.5025 17.4258 11.3751C17.4258 11.2477 17.4258 11.1203 17.4258 10.9292C17.4258 10.7382 17.3621 10.6108 17.171 10.5471C17.1073 10.4834 16.9799 10.4834 16.8525 10.4834C16.4066 10.4834 15.9607 10.4834 15.5149 10.4834C15.3238 10.4834 15.2601 10.5471 15.2601 10.7382C15.2601 10.9292 15.2601 11.1203 15.2601 11.3114C15.2601 11.5025 15.3238 11.5662 15.5149 11.5662C15.8333 11.5662 16.1518 11.5662 16.4066 11.5662ZM6.59716 11.7573C6.59716 12.0758 6.59716 12.458 6.59716 12.7765C6.59716 12.9039 6.66086 12.9676 6.78825 12.9676C6.91565 12.9676 7.04305 12.9676 7.17044 12.9676C7.29784 12.9676 7.42523 12.9039 7.42523 12.7128C7.42523 12.0121 7.42523 11.3114 7.42523 10.6745C7.42523 10.5471 7.36153 10.4834 7.23414 10.4197C7.10674 10.4197 6.97935 10.4197 6.91565 10.4197C6.72456 10.4197 6.66086 10.4834 6.66086 10.6745C6.59716 11.1203 6.59716 11.4388 6.59716 11.7573Z", "fill", "#BBBDBF"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7.99805 13.2224C7.99805 12.9039 8.31654 12.6491 8.63503 12.6491C8.95351 12.6491 9.20831 12.9039 9.20831 13.2861C9.20831 13.6046 8.95351 13.8594 8.63503 13.8594C8.25284 13.8594 7.99805 13.6046 7.99805 13.2224ZM8.88982 13.2861C8.88982 13.1587 8.76242 12.9676 8.63503 12.9676C8.50763 12.9676 8.38023 13.095 8.31654 13.2224C8.31654 13.3498 8.44393 13.5409 8.57133 13.5409C8.76242 13.5409 8.88982 13.4135 8.88982 13.2861Z", "fill", "#BBBDBF"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M14.559 13.8594C14.2405 13.8594 13.922 13.6046 13.9857 13.2224C13.9857 12.9039 14.2405 12.6491 14.559 12.6491C14.8775 12.6491 15.1323 12.9039 15.1323 13.2861C15.196 13.6046 14.9412 13.8594 14.559 13.8594ZM14.8775 13.2224C14.8775 13.095 14.7501 12.9676 14.6227 12.9676C14.4953 12.9676 14.3679 13.095 14.3679 13.2861C14.3679 13.4135 14.4953 13.5409 14.6864 13.5409C14.7501 13.5409 14.8775 13.4135 14.8775 13.2224Z", "fill", "#BBBDBF"], ["size", "10"], [2, "margin-top", "5px"], ["size", "12", 1, "ticket-details"], ["size", "6"], [1, "ticket-details-description"], [1, "ticket-details-status"], ["size", "6", 1, "ion-justify-content-end"], [1, "ticket-details-description", 2, "text-align", "end"], [1, "ticket-details-status", 2, "text-align", "end"], [4, "ngFor", "ngForOf"], [1, "ion-no-padding"], ["size", "12", 1, ""], ["size", "2", 2, "display", "flex", "justify-content", "center"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["opacity", "0.5", "clip-path", "url(#clip0_6_6126)"], ["d", "M9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12Z", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12Z", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 2V4", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 20V22", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M20 12H22", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M2 12H4", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "clip0_6_6126"], ["width", "24", "height", "24", "fill", "white"], [1, "pickup-point"], [1, "pickup-detail"], ["class", "pickup-detail-view", "style", "display: inline-flex; margin-left: -3px;", 3, "click", 4, "ngIf"], ["opacity", "0.5", "clip-path", "url(#clip0_6_6134)"], ["d", "M9 11C9 11.7956 9.31607 12.5587 9.87868 13.1213C10.4413 13.6839 11.2044 14 12 14C12.7956 14 13.5587 13.6839 14.1213 13.1213C14.6839 12.5587 15 11.7956 15 11C15 10.2044 14.6839 9.44129 14.1213 8.87868C13.5587 8.31607 12.7956 8 12 8C11.2044 8 10.4413 8.31607 9.87868 8.87868C9.31607 9.44129 9 10.2044 9 11Z", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M17.657 16.657L13.414 20.9C13.039 21.2746 12.5306 21.4851 12.0005 21.4851C11.4704 21.4851 10.962 21.2746 10.587 20.9L6.343 16.657C5.22422 15.5382 4.46234 14.1127 4.15369 12.5609C3.84504 11.009 4.00349 9.40051 4.60901 7.93873C5.21452 6.47694 6.2399 5.22754 7.55548 4.3485C8.87107 3.46947 10.4178 3.00029 12 3.00029C13.5822 3.00029 15.1289 3.46947 16.4445 4.3485C17.7601 5.22754 18.7855 6.47694 19.391 7.93873C19.9965 9.40051 20.155 11.009 19.8463 12.5609C19.5377 14.1127 18.7758 15.5382 17.657 16.657Z", "stroke", "#191966", "stroke-width", "1.75", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "clip0_6_6134"], ["style", "display: inline-flex; margin-left: -3px;", 3, "click", 4, "ngIf"], ["class", "ion-padding", 4, "ngIf"], ["size", "12", 4, "ngIf"], [1, "ion-padding", "payment-details"], ["size", "8", 2, "display", "flex", "justify-content", "start", "align-items", "center"], [1, "left"], ["size", "4", 2, "display", "flex", "justify-content", "end", "align-items", "center"], [1, "right"], ["size", "8", "style", "display: flex; justify-content: start; align-items: center", 4, "ngIf"], ["size", "4", "style", "display: flex; justify-content: end; align-items: center", 4, "ngIf"], [1, "left", 2, "font-weight", "500"], [1, "right", 2, "font-weight", "500"], [1, "payment-details-line", "ion-margin-bottom", "ion-margin-top"], ["size", "6", 4, "ngIf"], [1, "pickup-detail-view", 2, "display", "inline-flex", "margin-left", "-3px", 3, "click"], ["src", "./assets/icon/cbuslocation.svg", "item-start", "", 2, "height", "20px", "width", "20px"], [1, "themeone-viewmap-txt", 2, "margin", "auto", "margin-top", "4px"], [2, "display", "inline-flex", "margin-left", "-3px", 3, "click"], [3, "click"], ["size", "8"], [2, "color", "#333"], ["size", "4", 1, "ion-justify-content-end", "ion-align-items-center", 2, "display", "flex"], [1, "track-circle"], ["src", "./assets/icon/themeone-trackmybus.svg", "name", "location-outline", 2, "height", "30px", "width", "30px"], ["mode", "md", "mode", "md", "expand", "block", 1, "search-btn", 2, "--background", "#f2c21a", "color", "#191966", "font-weight", "bold", "height", "50px", 3, "click"], [1, "search-txt"], [2, "height", "1px", "border-top", "1px solid #dfdfdf"], [1, "bus-contact"], [3, "href"], [1, "light-font", 2, "margin-left", "10px"], [2, "margin-left", "10px", "margin-top", "5px"], [2, "color", "#000", "text-decoration", "none"], [1, "bus-contact-circle"], ["width", "26", "height", "26", "viewBox", "0 0 26 26", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0_6_6102)"], ["d", "M5.41667 4.33334H9.75L11.9167 9.75001L9.20833 11.375C10.3685 13.7275 12.2725 15.6315 14.625 16.7917L16.25 14.0833L21.6667 16.25V20.5833C21.6667 21.158 21.4384 21.7091 21.0321 22.1154C20.6257 22.5217 20.0746 22.75 19.5 22.75C15.2742 22.4932 11.2885 20.6987 8.2949 17.7051C5.3013 14.7115 3.5068 10.7258 3.25 6.50001C3.25 5.92537 3.47827 5.37427 3.8846 4.96795C4.29093 4.56162 4.84203 4.33334 5.41667 4.33334Z", "fill", "white"], ["id", "clip0_6_6102"], ["width", "26", "height", "26", "fill", "white"], [1, "ion-no-padding", 3, "click"], [1, "edit-ticket"], ["size", "2", 2, "display", "flex", "justify-content", "end", "align-items", "center"], ["src", "././assets/icon/cbusnext.svg", "alt", ""], ["expand", "block", "fill", "clear", 1, "download-ticket", 3, "click"], ["slot", "end", "src", "assets/new/download.svg"], ["size", "2"], ["src", "assets/new/share.svg", 1, "share-button", 3, "click"], ["width", "23", "height", "8", "viewBox", "0 0 23 8", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.54909 6.42781C6.67037 5.70013 6.42781 5.21501 5.82141 4.85117C5.33629 4.60862 4.7299 4.60861 4.24478 4.97245C3.75966 5.33629 3.5171 5.82141 3.63838 6.42781H3.5171C2.54687 6.42781 1.57663 6.42781 0.485118 6.42781C0.12128 6.42781 0 6.30653 0 5.94269C0 5.21501 0 4.36606 0 3.63838C0 3.5171 4.60837e-07 3.39582 0.12128 3.39582C0.242559 3.27454 0.242558 3.27454 0.242558 3.15326C0.242558 2.18303 0.363838 1.33407 0.363838 0.363838C0.363838 0.12128 0.485118 0 0.727677 0C1.57663 0 2.42559 0 3.27454 0C7.15548 0 10.9151 0 14.7961 0C16.9791 0 19.2834 0 21.4664 0C21.9516 0 22.4367 0.363838 22.558 0.848955V0.970235C22.558 2.42559 22.558 3.88094 22.558 5.45757C22.558 5.57885 22.4367 5.70013 22.3154 5.70013C21.8303 5.82141 21.2239 5.94269 20.7388 6.06397C20.1324 6.18525 19.4047 6.30653 18.7983 6.42781C18.5557 6.42781 18.1919 6.54909 17.8281 6.54909C17.8281 5.94269 17.7068 5.33629 17.1004 4.97245C16.8578 4.85117 16.494 4.7299 16.2514 4.7299C15.4025 4.85117 14.7961 5.57885 14.9174 6.42781C12.2492 6.42781 9.45979 6.42781 6.54909 6.42781ZM10.5513 0.848955C10.0662 0.848955 9.45979 0.848955 8.97467 0.848955C8.73211 0.848955 8.48956 0.970235 8.48956 1.33407C8.48956 1.69791 8.48956 2.06175 8.48956 2.54687C8.48956 2.9107 8.61084 3.03198 8.97467 3.03198C10.0662 3.03198 11.0364 3.03198 12.1279 3.03198C12.3705 3.03198 12.6131 2.9107 12.6131 2.54687C12.6131 2.18303 12.6131 1.69791 12.6131 1.33407C12.6131 1.09151 12.4918 0.848955 12.1279 0.848955C11.6428 0.848955 11.0364 0.848955 10.5513 0.848955ZM5.82141 0.848955C5.33629 0.848955 4.7299 0.848955 4.24478 0.848955C4.00222 0.848955 3.88094 0.970235 3.75966 1.21279C3.75966 1.57663 3.75966 2.06175 3.75966 2.42559C3.75966 2.66815 3.88094 2.78943 4.1235 2.78943C5.21501 2.78943 6.30653 2.78943 7.39804 2.78943C7.6406 2.78943 7.76188 2.66815 7.76188 2.42559C7.76188 2.06175 7.76188 1.57663 7.76188 1.21279C7.76188 0.848955 7.6406 0.727677 7.27676 0.727677C6.79164 0.848956 6.30653 0.848955 5.82141 0.848955ZM15.2812 0.848955C14.7961 0.848955 14.1897 0.848955 13.7046 0.848955C13.462 0.848955 13.3407 0.970235 13.3407 1.21279C13.3407 1.57663 13.3407 2.06175 13.3407 2.42559C13.3407 2.66815 13.462 2.78943 13.7046 2.78943C14.7961 2.78943 15.8876 2.78943 16.9791 2.78943C17.2217 2.78943 17.3429 2.66815 17.3429 2.42559C17.3429 2.06175 17.3429 1.57663 17.3429 1.21279C17.3429 0.848955 17.2217 0.727677 16.8578 0.727677C16.3727 0.848956 15.7663 0.848955 15.2812 0.848955ZM20.0111 2.91071C20.4962 2.91071 21.1026 2.91071 21.5877 2.91071C21.8303 2.91071 21.9516 2.78942 21.9516 2.54687C21.9516 2.30431 21.9516 2.06175 21.9516 1.69791C21.9516 1.33407 21.8303 1.09151 21.4664 0.970235C21.3452 0.848956 21.1026 0.848955 20.8601 0.848955C20.0111 0.848955 19.1621 0.848955 18.3132 0.848955C17.9493 0.848955 17.8281 0.970235 17.8281 1.33407C17.8281 1.69791 17.8281 2.06175 17.8281 2.42559C17.8281 2.78943 17.9493 2.91071 18.3132 2.91071C18.9196 2.91071 19.526 2.91071 20.0111 2.91071ZM1.33407 3.27454C1.33407 3.88094 1.33407 4.60862 1.33407 5.21501C1.33407 5.45757 1.45535 5.57885 1.69791 5.57885C1.94047 5.57885 2.18303 5.57885 2.42559 5.57885C2.66815 5.57885 2.91071 5.45757 2.91071 5.09373C2.91071 3.75966 2.91071 2.42559 2.91071 1.21279C2.91071 0.970235 2.78943 0.848956 2.54687 0.727677C2.30431 0.727677 2.06175 0.727677 1.94047 0.727677C1.57663 0.727677 1.45535 0.848955 1.45535 1.21279C1.33407 2.06175 1.33407 2.66815 1.33407 3.27454Z", "fill", "#191966"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M4.00195 6.06393C4.00195 5.45753 4.60835 4.97241 5.21475 4.97241C5.82114 4.97241 6.30626 5.45753 6.30626 6.18521C6.30626 6.7916 5.82114 7.27672 5.21475 7.27672C4.48707 7.27672 4.00195 6.7916 4.00195 6.06393ZM5.69986 6.18521C5.69986 5.94265 5.4573 5.57881 5.21475 5.57881C4.97219 5.57881 4.72963 5.82137 4.60835 6.06393C4.60835 6.30649 4.85091 6.67032 5.09347 6.67032C5.4573 6.67032 5.69986 6.42776 5.69986 6.18521Z", "fill", "#191966"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M16.4938 7.27672C15.8874 7.27672 15.281 6.7916 15.4023 6.06393C15.4023 5.45753 15.8874 4.97241 16.4938 4.97241C17.1002 4.97241 17.5854 5.45753 17.5854 6.18521C17.7066 6.7916 17.2215 7.27672 16.4938 7.27672ZM17.1002 6.06393C17.1002 5.82137 16.8577 5.57881 16.6151 5.57881C16.3726 5.57881 16.13 5.82137 16.13 6.18521C16.13 6.42776 16.3726 6.67032 16.7364 6.67032C16.8577 6.67032 17.1002 6.42777 17.1002 6.06393Z", "fill", "#191966"], [2, "margin", "0", "position", "absolute", "left", "30%", "top", "5px", "font-size", "14px", "color", "#A0A0A0"], [1, "right", 2, "font-weight", "600"], [2, "margin-top", "50%"], [2, "font-size", "35px", "display", "flex", "align-items", "center", "justify-content", "center"], ["src", "././assets/icon/UnconfirmedEmoji.svg"], [2, "text-align", "center", "font-size", "16px"], [2, "display", "flex", "align-items", "center", "justify-content", "center"], ["mode", "md", 1, "search-btn", 2, "--background", "var(--iconsAndButtonsColor)", "--color", "var(--primaryText)", 3, "click"], [1, "ourbustheme", 3, "ngStyle"], ["mode", "md", 2, "padding", "8px"], ["size", "2", 2, "display", "flex"], ["mode", "md", "style", "padding-bottom: 6px;", "class", "center", 4, "ngIf"], ["mode", "md", "style", "padding-bottom: 6px;", "class", "center", 3, "click", 4, "ngIf"], ["size", "7", 2, "display", "flex", "align-items", "center", "justify-content", "left"], [1, "editProfile"], [2, "width", "120px", "height", "30px", 3, "src"], ["class", "whole center ourbustheme", 3, "click", 4, "ngIf"], ["class", "ourbustheme", 4, "ngIf"], ["mode", "md", 1, "center", 2, "padding-bottom", "6px"], ["defaultHref", "/home"], ["mode", "md", 1, "center", 2, "padding-bottom", "6px", 3, "click"], [1, "whole", "center", "ourbustheme", 3, "click"], [1, "legend-box", 2, "position", "absolute", "bottom", "0", "width", "100% !important", "padding", "12px", "border-radius", "8px 8px 0px 0px"], ["size", "12", 2, "text-align", "center"], ["alt", "QR Code", 3, "src"], [2, "text-align", "center", "margin-bottom", "8px"], [1, "ourbus-bustype-div"], [1, "ourbustheme"], [2, "margin", "16px"], [1, "ourbus_heading"], [1, "ourbus_subhead"], [1, "ourbus_subhead_id"], [1, "pnr", 3, "click"], [1, "pnr_num"], [2, "width", "4px"], ["src", "././assets/icon/ourbusCopy.svg", 1, "copyCode"], ["style", "margin:5px;padding-left: 4px;position: absolute;z-index: 1000;", "class", "center-hr", 3, "click", 4, "ngIf"], ["style", "margin-bottom: 15px;", 4, "ngIf"], [1, "ourbus_subhead1"], [1, "ourbus_subhead2"], [2, "margin-left", "0px", "margin-right", "0px", "margin-bottom", "0px", "border-radius", "8px 8px 16px 16px", "box-shadow", "0 4px 16px rgba(0, 0, 0, 0.12)"], [1, "paddingSet", "ourbus_primary_card"], [1, "paddingSet"], ["size", "4"], [1, "ourbusMainText"], [1, "ourbusSubText"], ["size", "4", 1, "ourbusCenterSet"], ["src", "././assets/icon/ourbus_ticket.svg", 2, "width", "72px", "height", "32px"], ["size", "4", 2, "text-align", "end"], [2, "padding", "0px 8px"], ["size", "6.5"], [1, "ourbusDepartureText"], ["size", "1"], ["size", "4.5", 2, "text-align", "end"], [1, "departText2"], [1, "qrText"], [2, "margin-left", "44%"], [2, "border", "1px solid #D9D9D9", "display", "block", "width", "32px"], [2, "text-align", "center"], [2, "width", "115px", "height", "21px", 3, "src"], [1, "primaryCard"], [2, "display", "flex", "align-items", "center"], ["src", "././assets/icon/ourbus_multiUsers.svg", 2, "width", "24px", "height", "24px"], ["size", "7"], [1, "primaryPass", 2, "vertical-align", "super"], ["size", "1", 2, "padding-left", "2px"], ["src", "././assets/icon/OurbusSuitcase.svg", 2, "width", "24px", "height", "24px"], ["size", "10", 2, "padding-left", "0px"], ["size", "1", 2, "text-align", "end"], ["name", "chevron-down-outline", "style", "font-size: 22px;color: #4caf50;", 3, "click", 4, "ngIf"], ["name", "chevron-up-outline", "style", "font-size:22px;color: #4caf50;", 3, "click", 4, "ngIf"], ["size", "1", 2, "display", "flex"], ["src", "././assets/icon/ourbusAlarm.svg", 2, "width", "24px", "height", "24px"], ["size", "11", 2, "padding-left", "1px"], [2, "font-size", "16px", "font-weight", "700", "color", "var(--iconsAndButtonsColor)"], [1, "ourbus-dark-text-div"], ["class", "bookAgain", 3, "click", 4, "ngIf"], [3, "click", 4, "ngIf"], [1, "center-hr", 2, "margin", "5px", "padding-left", "4px", "position", "absolute", "z-index", "1000", 3, "click"], ["src", "./assets/icon/download_img.png", "alt", "", 1, "color-change", 2, "width", "20px"], [1, "ticket_Label"], [2, "margin-bottom", "15px"], ["size", "8", "class", "passenger-item", "style", "display: flex;align-items: center;", 4, "ngIf"], ["size", "8", 1, "passenger-item", 2, "display", "flex", "align-items", "center"], [1, "passenger-avatar"], [1, "primaryPassName"], ["name", "chevron-down-outline", 2, "font-size", "22px", "color", "#4caf50", 3, "click"], ["name", "chevron-up-outline", 2, "font-size", "22px", "color", "#4caf50", 3, "click"], [1, "bookAgain", 3, "click"], [2, "padding", "14px"], ["mode", "md", "expand", "block", 1, "search-btn", 2, "--background", "var(--iconsAndButtonsColor)", "--color", "var(--primaryText)", "height", "50px"], ["mode", "md", "expand", "block", 1, "search-btn", 2, "--background", "var(--iconsAndButtonsColor)", "--color", "var(--primaryText)", "height", "50px", 3, "click"], ["mode", "md", "expand", "block", 1, "search-btn", 2, "--background", "var(--iconsAndButtonsColor)", "--color", "var(--primaryText)", 3, "click"], ["class", "pnr", 3, "click", 4, "ngIf"], ["class", "ourbus_subhead_id", 4, "ngIf"], [2, "margin", "8px 0px"], ["mode", "ios", 2, "padding", "4px", 3, "ngModelChange", "ngModel"], ["value", "onward", 1, "ourbus_segment"], ["name", "arrow-forward-outline", 2, "width", "16px", "height", "16px", "margin-right", "8px"], ["value", "return"], ["name", "arrow-back-outline", 2, "width", "16px", "height", "16px", "margin-right", "8px"], ["name", "chevron-down-outline", "style", "font-size:22px;color: #4caf50;", 3, "click", 4, "ngIf"], [2, "font-size", "14px", "font-weight", "300", "color", "#2D2D2D"], ["style", "margin: 8px;", 3, "click", 4, "ngIf"], ["class", "center-hr", 3, "click", 4, "ngIf"], [1, "center-hr", 3, "click"], [2, "margin-left", "0px", "margin-right", "0px", "margin-bottom", "0px", "border-radius", "8px 8px 16px 16px"], [1, "ourbusMainText", 2, "text-align", "end"], [1, "ourbusSubText", 2, "text-align", "end"], ["size", "6.5", 2, "text-align", "start"], ["style", "padding: 14px;", 4, "ngIf"], [2, "margin", "8px", 3, "click"], ["mode", "md", "expand", "block", 1, "search-btn", 2, "--background", "var(--iconsAndButtonsColor)", "--color", "var(--primaryText)"], [1, "seabirdtheme"], [1, "seabird_header-content"], ["mode", "md", 4, "ngIf"], ["size", "11"], [1, "headText", 2, "margin", "0px", "padding-left", "16px"], [1, "seabirdtheme", 2, "--background", "#F1F7FA"], ["style", "    border: 1px solid #626262;\n    border-radius: 10px;", 4, "ngIf"], ["mode", "md"], ["fill", "clear", 3, "click"], ["src", "./assets/icon/Close_SeaBird.svg", "slot", "icon-only", 2, "height", "12px", "width", "12px", "margin-right", "12px"], [2, "border", "1px solid #626262", "border-radius", "10px"], [1, "busRow"], ["size", "9", 1, "startPosition", 2, "padding-bottom", "0px"], ["size", "3", 1, "startPosition", 2, "padding-bottom", "0px", "text-align", "end"], [1, "Sea_bird_Completed", 3, "ngClass"], ["size", "12", 1, "startPosition", 2, "padding-top", "0px"], [2, "font-size", "14px", "font-weight", "700"], [2, "font-size", "12px", "font-weight", "700"], [2, "font-weight", "500"], [2, "color", "#999999"], [2, "color", "#2B28CE", "font-weight", "700", 3, "click"], ["size", "12", 1, "startPosition"], [1, "mainHeading"], ["style", "margin: 8px 0px;", 4, "ngFor", "ngForOf"], ["size", "8", 1, "startPosition"], [2, "text-align", "start", "color", "#000"], ["size", "4", 1, "startPosition"], [2, "text-align", "end", "font-size", "12px", "color", "#000"], [2, "text-align", "end", "font-size", "12px", "font-weight", "700", "color", "#000"], ["size", "12", 2, "text-align", "start", "color", "#000", "font-weight", "700"], [1, "name"], ["size", "6", 2, "text-align", "start", "color", "#000"], ["size", "6", 2, "text-align", "end", "color", "#000", "font-weight", "700"], [1, "value", 2, "text-align", "end", "font-size", "12px", "font-weight", "700", "color", "#000"], ["mode", "md", "class", "login-btn", "expand", "block", 3, "click", 4, "ngIf"], ["sie", "8", 1, "startPosition"], [2, "color", "#999999", "font-weight", "700"], ["sie", "4", 1, "startPosition"], [2, "text-align", "end", "font-size", "14px", "font-weight", "700", "color", "#000"], [2, "text-align", "end", "color", "#999999"], ["mode", "md", "expand", "block", 1, "login-btn", 3, "click"], [2, "margin", "8px"], [1, "busCircle"], ["src", "././assets/icon/bus.svg", 2, "width", "20px", "height", "20px"], ["size", "7", 1, "startPosition"], [2, "color", "#191966", "font-weight", "700", 3, "click"], ["size", "3", 1, "startPosition", 2, "text-align", "end"], [1, "status"], ["size", "6", 2, "text-align", "start", "color", "#000", "font-weight", "700"], [1, "value", 2, "font-weight", "400"], ["src", "././assets/icon/seabird_passenger_logo.svg", 2, "width", "24px", "height", "24px", "margin-right", "8px"], ["size", "5", 1, "seabird_dwn-txt", 3, "click"], [3, "ngClass"], ["mode", "md", "style", "padding-bottom: 6px;", "class", "center", "slot", "start", 4, "ngIf"], ["style", "margin-top:-4px", "slot", "start", 4, "ngIf"], ["class", "org-dest", 4, "ngIf"], ["class", "head", "style", "margin-left: -15px;", 4, "ngIf"], ["class", "track", 3, "click", 4, "ngIf"], ["class", "date", 4, "ngIf"], ["padding", "", 4, "ngIf"], ["mode", "md", "slot", "start", 1, "center", 2, "padding-bottom", "6px"], ["slot", "start", 2, "margin-top", "-4px"], ["mode", "md", 3, "click"], ["src", "././assets/icon/Home.svg", "item-start", "", 2, "height", "24px", "width", "24px"], [1, "org-dest"], [1, "head", 2, "margin-left", "-15px"], [1, "track", 3, "click"], [1, "date"], ["padding", ""], ["style", "margin:5px;position: absolute;right:10px;z-index: 1000;", "class", "center-hr", 3, "click", 4, "ngIf"], ["style", "margin-bottom: 10px;", 4, "ngIf"], ["lines", "none"], ["item-content", "", 1, "bp-dp"], [1, "card"], [1, "box"], [1, "title"], ["class", "locate", 3, "click", 4, "ngIf"], [1, "info"], [1, "time"], [1, "pass"], [1, "pass1"], [1, "card1"], [1, "main"], [1, "value"], [1, "main1"], [1, "name", 2, "margin", "10px 0px 0px 10px"], [2, "margin", "10px 10px 0px 0px"], [1, "name", 2, "margin", "5px 0px 0px 10px"], [2, "margin", "5px 10px 0px 0px"], [1, "name", 2, "margin", "5px 0px 10px 10px"], [2, "margin", "5px 10px 10px 0px"], [2, "margin", "26px 15px 16px 16px"], ["mode", "md", "class", "search-btn", "expand", "block", 3, "click", 4, "ngIf"], ["style", "margin: 26px 15px 16px 16px;", "class", "center-hr", 4, "ngIf"], ["src", "./assets/icon/download_img.png", "alt", "", 2, "width", "20px"], [1, "center-hr", 2, "margin", "5px", "position", "absolute", "right", "10px", "z-index", "1000", 3, "click"], [1, "taxInvoice_Label"], [2, "margin-bottom", "10px"], [1, "locate", 3, "click"], ["class", "card1", 4, "ngIf"], ["mode", "md", "expand", "block", 1, "search-btn", 3, "click"], [1, "center-hr", 2, "margin", "26px 15px 16px 16px"], ["size", "6", 2, "padding", "0"], [2, "font-size", "0.7rem"], ["style", "padding:0;", "size", "6", 4, "ngIf"], [1, "box1"], ["item-content", "", 1, "bp-dp", 2, "margin-top", "12px"], [1, "Contact-details"], ["class", "card", 4, "ngIf"], [1, "box2"], ["lines", "none", 2, "margin-top", "10px"], ["noshade", "", 2, "border", "none", "background", "#cccccc47"]],
  template: function BookingDetailsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](0, BookingDetailsPage_ng_container_0_Template, 9, 5, "ng-container", 0)(1, BookingDetailsPage_ng_container_1_Template, 15, 11, "ng-container", 0)(2, BookingDetailsPage_ng_container_2_Template, 16, 6, "ng-container", 0)(3, BookingDetailsPage_ng_container_3_Template, 13, 14, "ng-container", 0);
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
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonBackButton, _angular_common__WEBPACK_IMPORTED_MODULE_19__.UpperCasePipe],
  styles: [".title-main[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 20px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  letter-spacing: normal;\n  color: #4a4a4a;\n}\n\n.high-1[_ngcontent-%COMP%] {\n  height: 75px;\n}\n\n.high-2[_ngcontent-%COMP%] {\n  height: 55px;\n}\n\n.taxInvoice_Label[_ngcontent-%COMP%] {\n  color: var(--iconsAndButtonsColor);\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.ticket_Label[_ngcontent-%COMP%] {\n  color: var(--sectionHeaderTextColor);\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.whole[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.6);\n}\n\n.legend-box[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 280px;\n  height: 152px;\n}\n\n.brws-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #4a4a4a;\n  margin-top: 28px;\n  width: 100%;\n  text-align: left;\n}\n\n.dwn-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: #ed3237;\n  margin-top: 28px;\n  width: 100%;\n  text-align: right;\n}\n\n.seabird_dwn-txt[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: bolder;\n  letter-spacing: 1.25px;\n  text-align: center;\n  color: var(--iconsAndButtonsColor);\n  margin-top: 28px;\n  width: 100%;\n  text-align: right;\n}\n\n.txt-msg[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n  letter-spacing: 0.25px;\n  color: rgba(0, 0, 0, 0.6);\n  margin-top: 10px;\n  width: 100%;\n}\n\n.org-dest[_ngcontent-%COMP%] {\n  height: 0;\n  font-family: NotoSans;\n  font-size: 16px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.25;\n  letter-spacing: normal;\n  color: #4a4a4a;\n  padding: 4px 0 0;\n}\n\n.date[_ngcontent-%COMP%] {\n  height: 16px;\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n  color: #747f8d;\n  padding: 10px 4px 0 0;\n  text-align: left;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --ion-background-color: var(--viewBgColor);\n}\n\n.ios[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.md[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--ion-color-step-150, #d7d8da);\n  padding: 0;\n}\n\n.card-onward[_ngcontent-%COMP%] {\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12);\n  background-color: #ffffff;\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-bottom: -13px;\n}\n\n.onward-p[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 16px;\n  color: red;\n  padding-left: 8px;\n}\n\n.search-txt[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.search-btn[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n}\n\n.map-button[_ngcontent-%COMP%] {\n  text-align: right;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n  color: #747f8d;\n  margin: -32px 8px 0;\n}\n\n.track[_ngcontent-%COMP%] {\n  float: right;\n  font-family: NotoSans;\n  font-size: 16px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.25;\n  letter-spacing: normal;\n  color: red;\n  margin: -15px 16px 0 5px;\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12);\n  background-color: #ffffff;\n  margin-left: 15px;\n  margin-right: 15px;\n  padding-top: 15px;\n}\n\n.card1[_ngcontent-%COMP%] {\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12);\n  background-color: #ffffff;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n\n.bp-dp[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #7e7e8c;\n  display: flex;\n  width: 100%;\n}\n\n.bp-dp[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  flex: 1.5;\n  font-size: 13px;\n  font-weight: bold;\n}\n\n.bp-dp[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  flex: 0.75;\n  font-size: 13px;\n  font-weight: bold;\n}\n\n.mr-tp[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.box[_ngcontent-%COMP%] {\n  margin: 0 3%;\n  overflow: hidden;\n  padding: 4px 0 0 60px;\n}\n\n.box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  position: relative;\n  transition: all 0.5s linear;\n  top: 0;\n}\n\n.box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 15px 45px 0;\n  position: relative;\n  color: black;\n}\n\n.box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  content: \"\";\n  display: block;\n  width: 0;\n  height: 125%;\n  border: 1px dashed #5279d0;\n  position: absolute;\n  top: -6px;\n  left: -30px;\n}\n\n.box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #5279d0;\n  border: 2px solid #b7ccfc;\n  position: absolute;\n  left: -7.5px;\n}\n\n.box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child    > span[_ngcontent-%COMP%] {\n  content: \"\";\n  display: block;\n  width: 0;\n  height: 125%;\n  border: none !important;\n  position: absolute;\n  top: -6px;\n  left: -30px;\n}\n\n.box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:before {\n  top: -10px;\n}\n\n\n\n.box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  color: #3e3e52;\n  margin-bottom: 5px;\n  position: relative;\n  top: -17px;\n}\n\n.label-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  color: #3e3e52;\n  margin-bottom: 5px;\n  height: 20px;\n  padding: 12px 5px 12px 12px;\n}\n\n.label-pnr[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  color: #3e3e52;\n  float: right;\n  margin: -20px 16px 0 5px;\n}\n\n.label-seat[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: normal;\n  color: #3e3e52;\n  margin-top: -10px;\n  height: 16px;\n  padding: 14px 5px 32px 12px;\n}\n\n.label-bustype1[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  color: #3e3e52;\n  margin-bottom: 5px;\n  height: 20px;\n  padding: 12px 5px 12px 12px;\n}\n\n.label-bustype2[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: normal;\n  color: #3e3e52;\n  margin-top: -10px;\n  height: 16px;\n  padding: 14px 5px 22px 12px;\n}\n\n.label-bustype3[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  color: #3e3e52;\n  float: right;\n  text-align: right;\n  margin: -20px 3px 0 5px;\n  width: 40%;\n}\n\n.box[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  position: relative;\n  top: -20px;\n  font-size: 10px;\n  color: #7e7e8c;\n}\n\n.box[_ngcontent-%COMP%]   .locate[_ngcontent-%COMP%] {\n  float: right;\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.25;\n  letter-spacing: normal;\n  color: red;\n  margin-right: -40px;\n  margin-top: 20px;\n}\n\n.box[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -100px;\n  color: black;\n  font-size: 80%;\n  font-weight: bold;\n}\n\n.box[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  top: -16px;\n}\n\n.text[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 14px;\n  font-weight: bold;\n  display: inline-block;\n  padding-left: 7px;\n  vertical-align: middle;\n}\n\n.item-lines-none[_ngcontent-%COMP%] {\n  \n\n  --background: none;\n  position: relative;\n  bottom: -8px;\n  margin-top: -10px;\n}\n\nion-button[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  --background: #ed3237;\n  font-family: \"NotoSans\";\n}\n\n.pass[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.pass1[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.main[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.main1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.main1[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: -18px;\n  margin-bottom: -10px;\n}\n\n.main2[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: -7px;\n  margin-left: 9px;\n  margin-bottom: 5px;\n}\n\n.name[_ngcontent-%COMP%] {\n  flex: 1.5;\n  font-size: 13px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-weight: bold;\n}\n\n.value[_ngcontent-%COMP%] {\n  flex: 0.8;\n  font-size: 13px;\n  font-weight: bold;\n}\n\n.Contact-details[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: var(--sectionHeaderTextColor);\n}\n\n.ticket-card[_ngcontent-%COMP%] {\n  margin-left: 16px;\n  margin-right: 16px;\n  margin-bottom: -10px;\n  background: #fff;\n  margin-top: 20px;\n}\n\n.box1[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 0px 0px rgba(0, 0, 0, 0.12);\n  background-color: rgba(255, 255, 255, 0.6392156863);\n  padding-bottom: 15px;\n}\n\n.box2[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0px 0px rgba(0, 0, 0, 0.12);\n  background-color: rgba(255, 255, 255, 0.6392156863);\n  padding-bottom: 15px;\n}\n\n.valuee[_ngcontent-%COMP%] {\n  flex: 0.8;\n  font-size: 13px;\n  font-weight: bold;\n}\n\n.namee[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: bold;\n  padding-right: 32%;\n}\n\n.theme1[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%] {\n  width: 100%;\n  border-bottom: 1px solid #fff;\n}\n.theme1[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]::part(indicator-background) {\n  --background: #ffbd16;\n}\n.theme1[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%]::part(native) {\n  color: #ffbd16;\n}\n\nion-card[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\nion-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-align: center;\n}\nion-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin: 0;\n  text-align: center;\n}\nion-card[_ngcontent-%COMP%]   .location-line[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n  background-color: #dfdfdf;\n  position: relative;\n}\nion-card[_ngcontent-%COMP%]   .location-line[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: rgba(25, 25, 102, 0.2);\n  position: absolute;\n  left: -8px;\n  top: -8px;\n}\nion-card[_ngcontent-%COMP%]   .location-line[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: rgba(242, 194, 26, 0.2);\n  position: absolute;\n  top: -8px;\n  right: -8px;\n}\nion-card[_ngcontent-%COMP%]   .location-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  background-color: #191966;\n  border-radius: 50%;\n  position: absolute;\n  left: -4px;\n  top: -4px;\n}\nion-card[_ngcontent-%COMP%]   .location-dot-blue[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  background-color: #f2c21a;\n  border-radius: 50%;\n  position: absolute;\n  right: -4px;\n  top: -4px;\n}\nion-card[_ngcontent-%COMP%]   .location-bus[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -3px;\n  right: 40%;\n}\nion-card[_ngcontent-%COMP%]   .card-circular-corner[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background-color: #191966;\n  position: absolute;\n  bottom: -12px;\n  left: -12px;\n}\nion-card[_ngcontent-%COMP%]   .card-circular-corner[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background-color: #191966;\n  position: absolute;\n  right: -12px;\n  bottom: -12px;\n}\nion-card[_ngcontent-%COMP%]   .dash-line[_ngcontent-%COMP%] {\n  border-top: 1px dashed #dfdfdf;\n  margin: 0px 25px;\n}\nion-card[_ngcontent-%COMP%]   .pnr-status[_ngcontent-%COMP%] {\n  background-color: #f3f3f7;\n  border-radius: 10px;\n}\nion-card[_ngcontent-%COMP%]   .pnr-status[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: start;\n  font-size: 14px;\n  font-weight: 600;\n}\nion-card[_ngcontent-%COMP%]   .pnr-status[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 16px 0px;\n  text-align: start;\n  font-size: 16px;\n  font-weight: 600;\n}\nion-card[_ngcontent-%COMP%]   .pnr-status[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: start;\n  font-size: 10px;\n}\nion-card[_ngcontent-%COMP%]   .pnr-status[_ngcontent-%COMP%]   .track-circle[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: #ffbd16;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-card[_ngcontent-%COMP%]   .pnr-circle-status[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  border: 1px solid #dfdfdf;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n}\nion-card[_ngcontent-%COMP%]   .ticket-details[_ngcontent-%COMP%]   p.ticket-details-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #a0a0a0;\n  text-align: start;\n}\nion-card[_ngcontent-%COMP%]   .ticket-details[_ngcontent-%COMP%]   p.ticket-details-status[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #333333;\n  text-align: start;\n  font-weight: 600;\n  margin-top: 5px;\n}\nion-card[_ngcontent-%COMP%]   .pickup-point[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: start;\n  color: #a0a0a0;\n}\nion-card[_ngcontent-%COMP%]   .pickup-detail[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: start;\n  font-weight: 400;\n  margin-bottom: 5px;\n  color: #333333;\n}\nion-card[_ngcontent-%COMP%]   .pickup-detail-view[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: start;\n  color: #191966;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n}\nion-card[_ngcontent-%COMP%]   .pickup-detail-view[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\nion-card[_ngcontent-%COMP%]   .bus-contact[_ngcontent-%COMP%]   h4.light-font[_ngcontent-%COMP%] {\n  color: #a0a0a0;\n  font-size: 14px;\n  margin: 0;\n}\nion-card[_ngcontent-%COMP%]   .bus-contact[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n}\nion-card[_ngcontent-%COMP%]   .bus-contact[_ngcontent-%COMP%]   .bus-contact-circle[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: #25e88a;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%] {\n  background-color: #f3f3f7;\n  border-radius: 10px;\n}\nion-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n  text-align: left;\n  color: #333333;\n}\nion-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   p.left[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: left;\n  color: #333333;\n}\nion-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   p.right[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: right;\n  color: #333333;\n}\nion-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-details-line[_ngcontent-%COMP%] {\n  height: 1px;\n  border-top: 1px solid #c2c2c2;\n}\nion-card[_ngcontent-%COMP%]   h2.edit-ticket[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: left;\n  font-size: 16px;\n  color: #191966;\n  font-weight: 600;\n}\n\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\nion-header.theme1[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: #191966;\n  color: #fff;\n}\n\nion-content.theme1[_ngcontent-%COMP%] {\n  --background: #191966;\n}\nion-content.theme1[_ngcontent-%COMP%]   .card-circular-corner[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background-color: #191966;\n  position: absolute;\n  bottom: -12px;\n  left: -12px;\n}\nion-content.theme1[_ngcontent-%COMP%]   .card-circular-corner[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background-color: #191966;\n  position: absolute;\n  right: -12px;\n  bottom: -12px;\n}\nion-content.theme1[_ngcontent-%COMP%]   .download-ticket[_ngcontent-%COMP%] {\n  --background: var(--primary);\n  color: #191966;\n  height: 90%;\n  margin: 0;\n}\nion-content.theme1[_ngcontent-%COMP%]   .share-button[_ngcontent-%COMP%] {\n  font-size: 56px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.themeone-viewmap-txt[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-left: 5px;\n  margin-top: auto;\n  color: #191966;\n  font-family: Roboto;\n}\n\n.ourbustheme[_ngcontent-%COMP%]   .passenger-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .passenger-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: #e6f4e6;\n  color: #4caf50;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 20px;\n  margin-right: 10px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_heading[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n  text-align: center;\n  color: var(--iconsAndButtonsColor) !important;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_subhead[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 300;\n  text-align: center;\n  color: #2D2D2D;\n  font-style: italic;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_subhead1[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 300;\n  text-align: center;\n  color: #747474;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_subhead2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  text-align: center;\n  color: #2D2D2D;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_radiusBox[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  border-radius: 1000px;\n  padding: 8px 12px;\n  display: flex;\n  align-items: center;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_smallText[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 300;\n  color: #2D2D2D;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_segment[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.ourbustheme[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  color: #747474;\n  font-size: 14px;\n  font-weight: 700;\n}\n.ourbustheme[_ngcontent-%COMP%]   .segment-button-checked[_ngcontent-%COMP%] {\n  --indicator-color: var(--iconsAndButtonsColor) !important;\n  --indicator-color-checked: transparent !important;\n  color: var(--primaryText) !important;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_primary_card[_ngcontent-%COMP%] {\n  color: #2D2D2D;\n  font-size: 18px;\n  font-weight: 700;\n  background-color: #DBEFDC;\n}\n.ourbustheme[_ngcontent-%COMP%]   .paddingSet[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbusCenterSet[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbusMainText[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #2D2D2D;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbusSubText[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 300;\n  color: var(--iconsAndButtonsColor) !important;\n  text-decoration: underline;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbusDepartureText[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 300;\n  color: #747474;\n}\n.ourbustheme[_ngcontent-%COMP%]   .departText2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #2D2D2D;\n}\n.ourbustheme[_ngcontent-%COMP%]   .qrText[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 300;\n  color: #747474;\n  text-align: center;\n  margin-top: 10px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .primaryCard[_ngcontent-%COMP%] {\n  margin: 8px 0px;\n  padding: 8px;\n  border-radius: 8px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n}\n.ourbustheme[_ngcontent-%COMP%]   .primaryPass[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #2D2D2D;\n}\n.ourbustheme[_ngcontent-%COMP%]   .primaryPassName[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 300;\n  color: #2D2D2D;\n}\n.ourbustheme[_ngcontent-%COMP%]   .roundDiv[_ngcontent-%COMP%] {\n  color: #397D32;\n  background-color: #DBEFDC;\n  padding: 6px;\n  border-radius: 50%;\n  margin-right: 4px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 4px; \n\n  height: 4px; \n\n  background-color: #747474; \n\n  border-radius: 50%; \n\n}\n.ourbustheme[_ngcontent-%COMP%]   .bookAgain[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--iconsAndButtonsColor) !important;\n  font-size: 18px;\n  font-weight: 700;\n  margin: 8px;\n  border: 1px solid var(--iconsAndButtonsColor);\n  border-radius: 4px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .roundedDiv[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  color: var(--iconsAndButtonsColor) !important;\n  border: 1px solid var(--iconsAndButtonsColor);\n  font-size: 12px;\n  font-weight: 300;\n  border-radius: 1000px;\n  height: 32px;\n  width: 104px;\n  text-align: center;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_subhead_id[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 300;\n  text-align: center;\n  color: #2D2D2D;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_subhead_id[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_subhead_id[_ngcontent-%COMP%]   .pnr[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #2D2D2D;\n  border-radius: 30px 30px 30px 30px;\n  background: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.4), inset 0px 0px 5px 1px rgba(255, 255, 255, 0.3);\n  width: auto;\n  height: 30px;\n  padding: 0px 15px;\n  font-weight: bold;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_subhead_id[_ngcontent-%COMP%]   .pnr[_ngcontent-%COMP%]   .copyCode[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  display: inline-block;\n  vertical-align: middle;\n  color: #397D32;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_subhead_id[_ngcontent-%COMP%]   .pnr[_ngcontent-%COMP%]   .pnr_num[_ngcontent-%COMP%] {\n  color: #397D32;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.seabirdtheme[_ngcontent-%COMP%]   .seabird_header[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-weight: bold;\n  font-size: 16px;\n}\n.seabirdtheme[_ngcontent-%COMP%]   .seabird_header-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.seabirdtheme[_ngcontent-%COMP%]   .seabird_title-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 60px;\n}\n.seabirdtheme[_ngcontent-%COMP%]   .headText[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 700;\n}\n.seabirdtheme[_ngcontent-%COMP%]   .ticketShow[_ngcontent-%COMP%] {\n  margin: 2px;\n  color: #999999;\n  font-size: 12px;\n  font-weight: 400;\n}\n.seabirdtheme[_ngcontent-%COMP%]   .srcDesti1[_ngcontent-%COMP%] {\n  text-align: end;\n  font-size: 14px;\n  font-weight: 700;\n  color: #000;\n}\n.seabirdtheme[_ngcontent-%COMP%]   .msgShow1[_ngcontent-%COMP%] {\n  text-align: end;\n  font-size: 10px;\n  font-weight: 400;\n  margin: 8px 0px;\n  color: #000;\n}\n.seabirdtheme[_ngcontent-%COMP%]   .srcDesti[_ngcontent-%COMP%] {\n  text-align: start;\n  font-size: 14px;\n  font-weight: 700;\n  color: #000;\n}\n.seabirdtheme[_ngcontent-%COMP%]   .msgShow[_ngcontent-%COMP%] {\n  text-align: start;\n  font-size: 10px;\n  font-weight: 400;\n  margin: 8px 0px;\n  color: #000;\n}\n.seabirdtheme[_ngcontent-%COMP%]   .borderSet[_ngcontent-%COMP%] {\n  border-top: 1px dashed #626262;\n  border-bottom: 1px dashed #626262;\n}\n.seabirdtheme[_ngcontent-%COMP%]   .passengerName[_ngcontent-%COMP%] {\n  text-align: start;\n  padding: 8px 0px;\n  font-size: 14px;\n  font-weight: 700;\n  color: #000000;\n}\n.seabirdtheme[_ngcontent-%COMP%]   .seatDetails[_ngcontent-%COMP%] {\n  text-align: end;\n  padding: 8px 0px;\n  font-size: 14px;\n  color: #2B28CE;\n  font-weight: 700;\n}\n.seabirdtheme[_ngcontent-%COMP%]   .busRow[_ngcontent-%COMP%] {\n  margin: 8px;\n  background: #F2F8FF;\n  padding: 8px;\n  border-radius: 5px;\n}\n.seabirdtheme[_ngcontent-%COMP%]   .busCircle[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: 1px solid #000000;\n  width: 38px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: white;\n}\n.seabirdtheme[_ngcontent-%COMP%]   .startPosition[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: start;\n  color: #000;\n  padding: 2px 0px;\n}\n.seabirdtheme[_ngcontent-%COMP%]   .mainHeading[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n}\n.seabirdtheme[_ngcontent-%COMP%]   .Sea_bird_Completed[_ngcontent-%COMP%] {\n  color: green !important;\n}\n.seabirdtheme[_ngcontent-%COMP%]   .cancelled-class[_ngcontent-%COMP%] {\n  color: red !important;\n}\n\n.ourbus-bustype-div[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 300;\n  color: #747474;\n}\n\n.ourbus-dark-text-div[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #2D2D2D;\n}\n\n.color-change[_ngcontent-%COMP%] {\n  filter: brightness(0) saturate(100%) invert(43%) sepia(58%) saturate(376%) hue-rotate(92deg) brightness(97%) contrast(94%);\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  --background: var(--iconsAndButtonsColor);\n  margin: 10px 4px;\n  --border-radius: 20px;\n  height: 45px;\n}"]
});

/***/ }),

/***/ 92871:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/share/dist/esm/definitions.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ })

}]);