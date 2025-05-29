"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[6365],{

/***/ 901:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/Parser.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Parser: () => (/* binding */ Parser)
/* harmony export */ });
/* harmony import */ var _Setter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Setter.js */ 84337);

class Parser {
  run(dateString, token, match, options) {
    const result = this.parse(dateString, token, match, options);
    if (!result) {
      return null;
    }
    return {
      setter: new _Setter_js__WEBPACK_IMPORTED_MODULE_0__.ValueSetter(result.value, this.validate, this.set, this.priority, this.subPriority),
      rest: result.rest
    };
  }
  validate(_utcDate, _value, _options) {
    return true;
  }
}

/***/ }),

/***/ 6365:
/*!*************************************************************!*\
  !*** ./src/app/available-routes/available-routes.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AvailableRoutesPageModule: () => (/* binding */ AvailableRoutesPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _available_routes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./available-routes-routing.module */ 33468);
/* harmony import */ var _available_routes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./available-routes.page */ 73446);
/* harmony import */ var _pipes_departure_date_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/departure-date.pipe */ 78111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
var _AvailableRoutesPageModule;







class AvailableRoutesPageModule {}
_AvailableRoutesPageModule = AvailableRoutesPageModule;
_AvailableRoutesPageModule.ɵfac = function AvailableRoutesPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AvailableRoutesPageModule)();
};
_AvailableRoutesPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _AvailableRoutesPageModule
});
_AvailableRoutesPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _available_routes_routing_module__WEBPACK_IMPORTED_MODULE_0__.AvailableRoutesPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AvailableRoutesPageModule, {
    declarations: [_available_routes_page__WEBPACK_IMPORTED_MODULE_1__.AvailableRoutesPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _available_routes_routing_module__WEBPACK_IMPORTED_MODULE_0__.AvailableRoutesPageRoutingModule, _pipes_departure_date_pipe__WEBPACK_IMPORTED_MODULE_2__.DepartureDatePipe]
  });
})();

/***/ }),

/***/ 17589:
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/YearParser.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   YearParser: () => (/* binding */ YearParser)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 64467);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ 901);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 80633);




// From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
// | Year     |     y | yy |   yyy |  yyyy | yyyyy |
// |----------|-------|----|-------|-------|-------|
// | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
// | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
// | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
// | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
// | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
class YearParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 130);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(dateString, token, match) {
    const valueCallback = year => ({
      year,
      isTwoDigitYear: token === "yy"
    });
    switch (token) {
      case "y":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(4, dateString), valueCallback);
      case "yo":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)(match.ordinalNumber(dateString, {
          unit: "year"
        }), valueCallback);
      default:
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString), valueCallback);
    }
  }
  validate(_date, value) {
    return value.isTwoDigitYear || value.year > 0;
  }
  set(date, flags, value) {
    const currentYear = date.getFullYear();
    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.normalizeTwoDigitYear)(value.year, currentYear);
      date.setFullYear(normalizedTwoDigitYear, 0, 1);
      date.setHours(0, 0, 0, 0);
      return date;
    }
    const year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
    date.setFullYear(year, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ 19032:
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/ExtendedYearParser.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtendedYearParser: () => (/* binding */ ExtendedYearParser)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 64467);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ 901);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 80633);



class ExtendedYearParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 130);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(dateString, token) {
    if (token === "u") {
      return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigitsSigned)(4, dateString);
    }
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigitsSigned)(token.length, dateString);
  }
  set(date, _flags, value) {
    date.setFullYear(value, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ 20352:
/*!**********************************************************************************!*\
  !*** ./src/app/source-destination-editor/source-destination-editor.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SourceDestinationEditorComponent: () => (/* binding */ SourceDestinationEditorComponent)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _calendar_modal_calendar_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../calendar-modal/calendar-modal.page */ 70990);
/* harmony import */ var _cities_modal_cities_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cities-modal/cities-modal.page */ 85960);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/common-service */ 6036);

var _SourceDestinationEditorComponent;










function SourceDestinationEditorComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.searchData.originCity.name);
  }
}
function SourceDestinationEditorComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.searchData.destCity.name);
  }
}
function SourceDestinationEditorComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SourceDestinationEditorComponent_div_32_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.departureDateModal(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.departureDate.dayNameShort + ", " + ctx_r0.departureDate.day + " " + ctx_r0.departureDate.monthNameShort);
  }
}
function SourceDestinationEditorComponent_ion_item_40_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SourceDestinationEditorComponent_ion_item_40_div_5_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.departureDateModal(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.departureDateReturn.dayNameShort + ", " + ctx_r0.departureDateReturn.day + " " + ctx_r0.departureDateReturn.monthNameShort, " ");
  }
}
function SourceDestinationEditorComponent_ion_item_40_ion_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SourceDestinationEditorComponent_ion_item_40_ion_icon_6_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.clearReturnDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function SourceDestinationEditorComponent_ion_item_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-item", 30)(1, "ion-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SourceDestinationEditorComponent_ion_item_40_Template_ion_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.departureDateModal(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 32)(3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SourceDestinationEditorComponent_ion_item_40_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.departureDateModal(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Return Booking (Optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, SourceDestinationEditorComponent_ion_item_40_div_5_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, SourceDestinationEditorComponent_ion_item_40_ion_icon_6_Template, 1, 0, "ion-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.departureDateReturn && ctx_r0.departureDateReturn.formattedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.departureDateReturn && ctx_r0.departureDateReturn.formattedDate);
  }
}
class SourceDestinationEditorComponent {
  constructor(modalCtrl, commonStorage, util, navParams, dateService, commonService, navCtrl) {
    this.modalCtrl = modalCtrl;
    this.commonStorage = commonStorage;
    this.util = util;
    this.dateService = dateService;
    this.commonService = commonService;
    this.navCtrl = navCtrl;
    this.departureDate = {};
    this.departureDateReturn = {};
    this.advance_booking_days = 90;
    this.isRoundTrip = false;
    this.globalData = navParams.get('filData');
    this.get_old_globalData = navParams.get('filData');
    this.searchData = this.globalData.SEARCH_DATA ? this.globalData.SEARCH_DATA : this.searchData;
    this.departureDate = this.globalData.DEPARTURE_DATE ? this.globalData.DEPARTURE_DATE : this.departureDate;
    this.departureDateReturn = this.globalData.DEPARTURE_DATE_RETURN ? this.globalData.DEPARTURE_DATE_RETURN : this.departureDateReturn;
    if (this.commonStorage.getItem("metaData")) {
      this.advance_booking_days = this.commonStorage.getItem("metaData") ? this.commonStorage.getItem("metaData").advance_booking_days : 90;
      this.isRoundTrip = this.commonStorage.getItem("metaData") ? this.commonStorage.getItem("metaData").isRoundTrip : false;
      this.showRoundTripBox = this.isRoundTrip;
    }
  }
  ngOnInit() {}
  dismiss(type) {
    if (type == 1) {
      this.globalData = this.get_old_globalData;
      this.searchData = this.globalData.SEARCH_DATA ? this.globalData.SEARCH_DATA : this.searchData;
      this.departureDate = this.globalData.DEPARTURE_DATE ? this.globalData.DEPARTURE_DATE : this.departureDate;
      this.departureDateReturn = this.globalData.DEPARTURE_DATE_RETURN ? this.globalData.DEPARTURE_DATE_RETURN : this.departureDateReturn;
      if (this.commonStorage.getItem("metaData")) {
        this.advance_booking_days = this.commonStorage.getItem("metaData") ? this.commonStorage.getItem("metaData").advance_booking_days : 90;
        this.isRoundTrip = this.commonStorage.getItem("metaData") ? this.commonStorage.getItem("metaData").isRoundTrip : false;
        this.showRoundTripBox = this.isRoundTrip;
      }
      this.modalCtrl.dismiss('');
    }
  }
  reverse() {
    if (this.searchData.destCity) {
      var a = this.searchData.originCity;
      this.searchData.originCity = this.searchData.destCity;
      this.globalData.SEARCH_DATA.originCity = this.searchData.destCity;
      this.searchData.destCity = a;
      this.globalData.SEARCH_DATA.destCity = a;
    }
  }
  departureDateModal(type) {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let modal = yield _this.modalCtrl.create({
        component: _calendar_modal_calendar_modal_page__WEBPACK_IMPORTED_MODULE_1__.CalendarModalPage,
        componentProps: {
          departureDate: _this.departureDate,
          showPastDate: false,
          title: type == 1 ? 'Select Journey Date' : "Select Return Date",
          departureDateReturn: _this.departureDateReturn,
          maxDateSelection: _this.dateService.getAdvanceDate(_this.advance_booking_days),
          type: type
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if (data) {
        if (type == 1) {
          _this.departureDate = data;
        } else {
          _this.departureDateReturn = data;
        }
      }
    })();
  }
  originCityModal() {
    var _this2 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalCtrl.create({
        component: _cities_modal_cities_modal_page__WEBPACK_IMPORTED_MODULE_2__.CitiesModalPage,
        componentProps: {
          "name": 'origins',
          "list": 1
        } // this.subscription.unsubscribe();
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if (data) {
        _this2.searchData.originCity = data;
        _this2.commonStorage.setItem('travelDestination', null);
        _this2.searchData.destCity = null;
      }
    })();
  }
  destCityModal() {
    var _this3 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.searchData.originCity) {
        const modal = yield _this3.modalCtrl.create({
          component: _cities_modal_cities_modal_page__WEBPACK_IMPORTED_MODULE_2__.CitiesModalPage,
          componentProps: {
            "name": 'destinations',
            "list": 2,
            "originId": _this3.searchData.originCity.id ? _this3.searchData.originCity.id : _this3.searchData.originCity.id
          }
        });
        yield modal.present();
        const {
          data
        } = yield modal.onDidDismiss();
        if (data) {
          _this3.searchData.destCity = data;
        }
      } else {
        _this3.util.showToast('Select Origin City');
      }
    })();
  }
  today() {
    this.commonStorage.localSet("origin", this.searchData.originCity);
    this.commonStorage.localSet("destination", this.searchData.destCity);
    this.departureDate = this.dateService.getToday();
    this.commonStorage.localSet('travelDate', this.departureDate);
    this.globalData.DEPARTURE_DATE = this.departureDate;
    this.commonStorage.localSet("travelDate", this.globalData.DEPARTURE_DATE);
    this.globalData.SEARCH_DATA = this.searchData;
    if (this.searchData.originCity && this.searchData.destCity) {
      // this.subscription.unsubscribe();
      if (this.globalData.DEPARTURE_DATE_RETURN && this.globalData.DEPARTURE_DATE_RETURN.formattedDate) {
        // this.commonService.gTrack('tripSearch', 'searching 1way trips(services) in Home page')
      } else {
        // this.commonService.gTrack('tripSearch', 'searching round trips(services) in Home page')
      }
      this.modalCtrl.dismiss("true");
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
    this.globalData.DEPARTURE_DATE = this.departureDate;
    this.globalData.SEARCH_DATA = this.searchData;
    this.commonStorage.localSet("travelDate", this.globalData.DEPARTURE_DATE);
    if (this.searchData.originCity && this.searchData.destCity) {
      // this.subscription.unsubscribe();
      if (this.globalData.DEPARTURE_DATE_RETURN && this.globalData.DEPARTURE_DATE_RETURN.formattedDate) {
        // this.commonService.gTrack('tripSearch', 'searching 1way trips(services) in Home page')
      } else {
        // this.commonService.gTrack('tripSearch', 'searching round trips(services) in Home page')
      }
      this.modalCtrl.dismiss("true");
    }
    if (!this.searchData.destCity && !this.searchData.originCity) {
      this.util.showToast('Select Origin and Destination cities');
    } else if (!this.searchData.originCity) {
      this.util.showToast('Select Origin City');
    } else if (!this.searchData.destCity) {
      this.util.showToast('Select Destination City');
    }
  }
  search() {
    this.commonStorage.setItem('travelOrigin', this.searchData.originCity);
    this.commonStorage.setItem('travelDestination', this.searchData.destCity);
    this.globalData.DEPARTURE_DATE = this.departureDate;
    this.commonStorage.localSet('travelDate', this.departureDate);
    if (this.showRoundTripBox) {
      if (this.dateService.comparedate(this.departureDate, this.departureDateReturn)) {
        this.departureDateReturn = this.dateService.getNextPrevDate(this.departureDate, 1);
        this.globalData.DEPARTURE_DATE_RETURN = this.departureDateReturn;
        this.commonStorage.localSet('travelDateReturn', this.departureDateReturn);
      } else {}
    }
    this.globalData.DEPARTURE_DATE_RETURN = this.departureDateReturn;
    this.commonStorage.localSet('travelDateReturn', this.departureDateReturn);
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
      this.commonStorage.localSet('travelDate', this.globalData.DEPARTURE_DATE);
      this.commonStorage.localSet("travelDateReturn", this.globalData.DEPARTURE_DATE_RETURN ? this.globalData.DEPARTURE_DATE_RETURN : null);
      this.commonStorage.setItem("travelDateReturn", this.globalData.DEPARTURE_DATE_RETURN ? this.globalData.DEPARTURE_DATE_RETURN : null);
      // this.subscription.unsubscribe();
      if (this.globalData.DEPARTURE_DATE_RETURN && this.globalData.DEPARTURE_DATE_RETURN.formattedDate) {
        // this.commonService.gTrack('tripSearch', 'searching 1way trips(services) in Home page')
      } else {
        // this.commonService.gTrack('tripSearch', 'searching round trips(services) in Home page')
      }
      this.modalCtrl.dismiss("true");
    }
    if (!this.searchData.destCity && !this.searchData.originCity) {
      this.util.showToast('Select Origin and Destination cities');
    } else if (!this.searchData.originCity) {
      this.util.showToast('Select Origin City');
    } else if (!this.searchData.destCity) {
      this.util.showToast('Select Destination City');
    }
  }
  clearReturnDate() {
    this.departureDateReturn = {};
    this.globalData.DEPARTURE_DATE_RETURN = this.departureDateReturn;
    this.commonStorage.localSet('travelDateReturn', this.departureDateReturn);
  }
}
_SourceDestinationEditorComponent = SourceDestinationEditorComponent;
_SourceDestinationEditorComponent.ɵfac = function SourceDestinationEditorComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SourceDestinationEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_3__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_4__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavParams), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_5__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_6__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController));
};
_SourceDestinationEditorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: _SourceDestinationEditorComponent,
  selectors: [["app-source-destination-editor"]],
  decls: 44,
  vars: 4,
  consts: [[1, "theme1", 2, "--background", "white"], [2, "display", "flex", "align-items", "center"], [1, "themeone-bg-cl", 2, "margin-left", "15px"], [2, "float", "right"], ["slot", "end"], ["mode", "md", 3, "click"], ["name", "close", 2, "color", "#333333"], [1, "search-box"], [1, "ion-activatable", "ripple-parent", 2, "--padding-start", "0px", 3, "click"], ["src", "./assets/icon/theme1_busicon.svg", "item-start", "", 2, "padding-left", "16px", "height", "20px", "width", "27px"], ["position", "floating", "ion-button", "", 1, "txt-main"], ["ion-button", "", "class", "txt-main-slt", 4, "ngIf"], [1, "fab-revrse", 3, "click"], ["src", "./assets/icon/swapcbus.svg", 2, "height", "61px", "width", "65px"], ["src", "./assets/icon/theme1_tobusicon.svg", "item-start", "", 2, "padding-left", "16px", "height", "19px", "width", "27px"], [1, "ion-activatable", "ripple-parent", 2, "--padding-start", "0px", "width", "100%"], ["src", "./assets/icon/calendercbus.svg", "item-start", "", 2, "padding-left", "16px", "height", "24px", "width", "29px", 3, "click"], [2, "width", "37%"], ["position", "floating", "ion-button", "", 1, "txt-main", 3, "click"], ["ion-button", "", "class", "txt-main-slt", 3, "click", 4, "ngIf"], [2, "width", "53%", "text-align", "end", "margin-right", "16px"], [1, "cbus-wallet", 2, "padding", "0px", "margin", "0px", "background", "#19196610", "border", "none"], [1, "cbus-today", 2, "color", "#191966", "font-size", "11px", 3, "click"], [1, "cbus-wallet", 2, "padding", "0px", "margin", "0px", "margin-left", "7px", "background", "#19196610", "border", "none"], [1, "cbus-tomorrow", 2, "color", "#191966", "font-size", "11px", 3, "click"], ["class", "ion-activatable ripple-parent", "style", "--padding-start: 0px;", 4, "ngIf"], ["mode", "md", "mode", "md", "expand", "block", 1, "search-btn", 3, "click"], [1, "search-txt"], ["ion-button", "", 1, "txt-main-slt"], ["ion-button", "", 1, "txt-main-slt", 3, "click"], [1, "ion-activatable", "ripple-parent", 2, "--padding-start", "0px"], ["src", "./assets/icon/calendercbus.svg", "item-start", "", 2, "height", "25px", "width", "27px", "padding-left", "16px", 3, "click"], [2, "width", "72%"], ["ion-button", "", "position", "floating", 1, "txt-main", 2, "font-size", "14px", 3, "click"], ["ion-button", "", "class", "txt-main-slt", "style", "width: 100%;", 3, "click", 4, "ngIf"], ["style", "height: 25px; width: 27px;padding-left: 16px;", "src", "./assets/icon/Cross.svg", "name", "close", 3, "click", 4, "ngIf"], ["ion-button", "", 1, "txt-main-slt", 2, "width", "100%", 3, "click"], ["src", "./assets/icon/Cross.svg", "name", "close", 2, "height", "25px", "width", "27px", "padding-left", "16px", 3, "click"]],
  template: function SourceDestinationEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-content", 0)(1, "div")(2, "ion-row")(3, "ion-col", 1)(4, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Search Route ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "ion-col")(7, "span", 3)(8, "ion-buttons", 4)(9, "ion-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SourceDestinationEditorComponent_Template_ion_button_click_9_listener() {
        return ctx.dismiss(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "ion-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "ion-card", 7)(12, "ion-item", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SourceDestinationEditorComponent_Template_ion_item_click_12_listener() {
        return ctx.originCityModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "ion-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div")(15, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "From");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, SourceDestinationEditorComponent_div_17_Template, 2, 1, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SourceDestinationEditorComponent_Template_div_click_18_listener() {
        return ctx.reverse();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "ion-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "ion-item", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SourceDestinationEditorComponent_Template_ion_item_click_20_listener() {
        return ctx.destCityModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "ion-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div")(23, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "To");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, SourceDestinationEditorComponent_div_25_Template, 2, 1, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "ion-ripple-effect");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "ion-item", 15)(28, "ion-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SourceDestinationEditorComponent_Template_ion_icon_click_28_listener() {
        return ctx.departureDateModal(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 17)(30, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SourceDestinationEditorComponent_Template_div_click_30_listener() {
        return ctx.departureDateModal(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Date of Journey");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, SourceDestinationEditorComponent_div_32_Template, 2, 1, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 20)(34, "ion-button", 21)(35, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SourceDestinationEditorComponent_Template_span_click_35_listener() {
        return ctx.today();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "Today");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "ion-button", 23)(38, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SourceDestinationEditorComponent_Template_span_click_38_listener() {
        return ctx.tomorrow();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Tomorrow");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, SourceDestinationEditorComponent_ion_item_40_Template, 7, 2, "ion-item", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "ion-button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SourceDestinationEditorComponent_Template_ion_button_click_41_listener() {
        return ctx.search();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "p", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "Search Buses");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.searchData.originCity);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.searchData.destCity);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.departureDate && ctx.departureDate.formattedDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isRoundTrip);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf],
  styles: [".search-box[_ngcontent-%COMP%] {\n  margin: 0px;\n  box-shadow: none;\n}\n\n.search-btn[_ngcontent-%COMP%] {\n  --background: #F2C21A;\n  --color: #191966;\n  margin: 13px 0;\n  padding: 0px 16px;\n  --border-radius: 100px;\n}\n\n.ripple-parent[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n\n.fab-revrse[_ngcontent-%COMP%] {\n  --background: #3e3e52;\n  position: absolute;\n  z-index: 5;\n  right: 3%;\n  top: 8%;\n}\n\n.txt-main[_ngcontent-%COMP%] {\n  margin: 0 0 0 16px;\n  width: 100%;\n  font-size: 11px;\n  color: #A0A0A0;\n}\n\n.txt-main-slt[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0 0 0 16px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.43;\n  letter-spacing: normal;\n  color: #191966;\n}\n\n.cbus-wallet[_ngcontent-%COMP%] {\n  border-radius: 100px;\n  \n\n  --background: #ffffff00;\n  --box-shadow: none;\n  padding: 7px 3px;\n  border: 0.5px solid #858585;\n}\n.cbus-wallet[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n}\n.cbus-wallet[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.search-txt[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  text-transform: capitalize;\n}\n\nion-button[_ngcontent-%COMP%] {\n  margin: 12px;\n  border-radius: 2px;\n  font-family: \"NotoSans\";\n}\n\nion-button.fffff.md.button.button-block.button-solid.ion-activatable.ion-focusable.hydrated[_ngcontent-%COMP%] {\n  margin: 6px 12px 6px 10px;\n  font-size: 10px;\n  font-weight: bold;\n  width: 96%;\n  border-radius: 8px;\n  height: 31px;\n}\n\n.themeone-head[_ngcontent-%COMP%] {\n  color: #333333;\n  padding: 0;\n  margin: 0;\n  font-family: Helvetica Now Text;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 26px;\n  letter-spacing: 0em;\n}\n\n.themeone-bg-cl[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  --background: white;\n  -webkit-text-fill-color: #333333 !important;\n  font-weight: 500;\n}"]
});

/***/ }),

/***/ 21482:
/*!********************************************!*\
  !*** ./node_modules/date-fns/setISODay.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setISODay: () => (/* binding */ setISODay)
/* harmony export */ });
/* harmony import */ var _addDays_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addDays.js */ 71479);
/* harmony import */ var _getISODay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getISODay.js */ 48110);
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ 91490);




/**
 * The {@link setISODay} function options.
 */

/**
 * @name setISODay
 * @category Weekday Helpers
 * @summary Set the day of the ISO week to the given date.
 *
 * @description
 * Set the day of the ISO week to the given date.
 * ISO week starts with Monday.
 * 7 is the index of Sunday, 1 is the index of Monday, etc.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param day - The day of the ISO week of the new date
 * @param options - An object with options
 *
 * @returns The new date with the day of the ISO week set
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * const result = setISODay(new Date(2014, 8, 1), 7)
 * //=> Sun Sep 07 2014 00:00:00
 */
function setISODay(date, day, options) {
  const date_ = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options === null || options === void 0 ? void 0 : options.in);
  const currentDay = (0,_getISODay_js__WEBPACK_IMPORTED_MODULE_1__.getISODay)(date_, options);
  const diff = day - currentDay;
  return (0,_addDays_js__WEBPACK_IMPORTED_MODULE_2__.addDays)(date_, diff, options);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setISODay);

/***/ }),

/***/ 23596:
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/Hour0to23Parser.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hour0to23Parser: () => (/* binding */ Hour0to23Parser)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 64467);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ 86965);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ 901);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 80633);




class Hour0to23Parser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 70);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      case "H":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.numericPatterns.hour23h, dateString);
      case "Ho":
        return match.ordinalNumber(dateString, {
          unit: "hour"
        });
      default:
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 23;
  }
  set(date, _flags, value) {
    date.setHours(value, 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ 24165:
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/AMPMParser.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AMPMParser: () => (/* binding */ AMPMParser)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 64467);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ 901);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 80633);



class AMPMParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 80);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      case "a":
      case "aa":
      case "aaa":
        return match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return match.dayPeriod(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(date, _flags, value) {
    date.setHours((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.dayPeriodEnumToHours)(value), 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ 25305:
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/AMPMMidnightParser.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AMPMMidnightParser: () => (/* binding */ AMPMMidnightParser)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 64467);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ 901);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 80633);



class AMPMMidnightParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 80);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      case "b":
      case "bb":
      case "bbb":
        return match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return match.dayPeriod(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(date, _flags, value) {
    date.setHours((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.dayPeriodEnumToHours)(value), 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ 28222:
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/TimestampMillisecondsParser.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimestampMillisecondsParser: () => (/* binding */ TimestampMillisecondsParser)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 64467);
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constructFrom.js */ 91298);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ 901);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 80633);




class TimestampMillisecondsParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 20);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", "*");
  }
  parse(dateString) {
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseAnyDigitsSigned)(dateString);
  }
  set(date, _flags, value) {
    return [(0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_3__.constructFrom)(date, value), {
      timestampIsSet: true
    }];
  }
}

/***/ }),

/***/ 29209:
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/TimestampSecondsParser.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimestampSecondsParser: () => (/* binding */ TimestampSecondsParser)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 64467);
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constructFrom.js */ 91298);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ 901);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 80633);




class TimestampSecondsParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 40);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", "*");
  }
  parse(dateString) {
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseAnyDigitsSigned)(dateString);
  }
  set(date, _flags, value) {
    return [(0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_3__.constructFrom)(date, value * 1000), {
      timestampIsSet: true
    }];
  }
}

/***/ }),

/***/ 30501:
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/Hour0To11Parser.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hour0To11Parser: () => (/* binding */ Hour0To11Parser)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 64467);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ 86965);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ 901);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 80633);




class Hour0To11Parser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 70);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      case "K":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.numericPatterns.hour11h, dateString);
      case "Ko":
        return match.ordinalNumber(dateString, {
          unit: "hour"
        });
      default:
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 11;
  }
  set(date, _flags, value) {
    const isPM = date.getHours() >= 12;
    if (isPM && value < 12) {
      date.setHours(value + 12, 0, 0, 0);
    } else {
      date.setHours(value, 0, 0, 0);
    }
    return date;
  }
}

/***/ }),

/***/ 33468:
/*!*********************************************************************!*\
  !*** ./src/app/available-routes/available-routes-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AvailableRoutesPageRoutingModule: () => (/* binding */ AvailableRoutesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _available_routes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./available-routes.page */ 73446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _AvailableRoutesPageRoutingModule;




const routes = [{
  path: '',
  component: _available_routes_page__WEBPACK_IMPORTED_MODULE_0__.AvailableRoutesPage
}];
class AvailableRoutesPageRoutingModule {}
_AvailableRoutesPageRoutingModule = AvailableRoutesPageRoutingModule;
_AvailableRoutesPageRoutingModule.ɵfac = function AvailableRoutesPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AvailableRoutesPageRoutingModule)();
};
_AvailableRoutesPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _AvailableRoutesPageRoutingModule
});
_AvailableRoutesPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AvailableRoutesPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 34076:
/*!******************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/StandAloneLocalDayParser.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StandAloneLocalDayParser: () => (/* binding */ StandAloneLocalDayParser)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 64467);
/* harmony import */ var _setDay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../setDay.js */ 56441);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ 901);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 80633);





// Stand-alone local day of week
class StandAloneLocalDayParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 90);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]);
  }
  parse(dateString, token, match, options) {
    const valueCallback = value => {
      // We want here floor instead of trunc, so we get -7 for value 0 instead of 0
      const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
      return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
    };
    switch (token) {
      // 3
      case "c":
      case "cc":
        // 03
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString), valueCallback);
      // 3rd
      case "co":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)(match.ordinalNumber(dateString, {
          unit: "day"
        }), valueCallback);
      // Tue
      case "ccc":
        return match.day(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.day(dateString, {
          width: "short",
          context: "standalone"
        }) || match.day(dateString, {
          width: "narrow",
          context: "standalone"
        });

      // T
      case "ccccc":
        return match.day(dateString, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return match.day(dateString, {
          width: "short",
          context: "standalone"
        }) || match.day(dateString, {
          width: "narrow",
          context: "standalone"
        });

      // Tuesday
      case "cccc":
      default:
        return match.day(dateString, {
          width: "wide",
          context: "standalone"
        }) || match.day(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.day(dateString, {
          width: "short",
          context: "standalone"
        }) || match.day(dateString, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 6;
  }
  set(date, _flags, value, options) {
    date = (0,_setDay_js__WEBPACK_IMPORTED_MODULE_3__.setDay)(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ 34704:
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/MinuteParser.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MinuteParser: () => (/* binding */ MinuteParser)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 64467);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ 86965);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ 901);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 80633);




class MinuteParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 60);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      case "m":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.numericPatterns.minute, dateString);
      case "mo":
        return match.ordinalNumber(dateString, {
          unit: "minute"
        });
      default:
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 59;
  }
  set(date, _flags, value) {
    date.setMinutes(value, 0, 0);
    return date;
  }
}

/***/ }),

/***/ 40360:
/*!****************************************!*\
  !*** ./node_modules/date-fns/parse.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   longFormatters: () => (/* reexport safe */ _lib_format_longFormatters_js__WEBPACK_IMPORTED_MODULE_0__.longFormatters),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parsers: () => (/* reexport safe */ _parse_lib_parsers_js__WEBPACK_IMPORTED_MODULE_1__.parsers)
/* harmony export */ });
/* harmony import */ var _lib_defaultLocale_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/defaultLocale.js */ 75672);
/* harmony import */ var _lib_format_longFormatters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/format/longFormatters.js */ 83849);
/* harmony import */ var _lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_lib/protectedTokens.js */ 18648);
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.js */ 91298);
/* harmony import */ var _getDefaultOptions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getDefaultOptions.js */ 78590);
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toDate.js */ 91490);
/* harmony import */ var _parse_lib_Setter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parse/_lib/Setter.js */ 84337);
/* harmony import */ var _parse_lib_parsers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse/_lib/parsers.js */ 46192);









// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874


/**
 * The {@link parse} function options.
 */

// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const notWhitespaceRegExp = /\S/;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;

/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format string.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
 *
 * ```javascript
 * parse('23 AM', 'HH a', new Date())
 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
 * ```
 *
 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Sun           | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 001, ..., 999                |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `parse` will try to match both formatting and stand-alone units interchangeably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
 *
 *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
 *
 *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
 *
 *    while `uu` will just assign the year as is:
 *
 *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
 *
 *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear](https://date-fns.org/docs/setISOWeekYear)
 *    and [setWeekYear](https://date-fns.org/docs/setWeekYear)).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 7. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be assigned to the date in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `referenceDate` which works as a context of parsing.
 *
 * `referenceDate` must be passed for correct work of the function.
 * If you're not sure which `referenceDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `referenceDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param dateStr - The string to parse
 * @param formatStr - The string of tokens
 * @param referenceDate - defines values missing from the parsed dateString
 * @param options - An object with options.
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @returns The parsed date
 *
 * @throws `options.locale` must contain `match` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
 *   locale: eo
 * })
 * //=> Sun Feb 28 2010 00:00:00
 */
function parse(dateStr, formatStr, referenceDate, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _defaultOptions$local, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _defaultOptions$local2;
  const invalidDate = () => (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_2__.constructFrom)((options === null || options === void 0 ? void 0 : options.in) || referenceDate, NaN);
  const defaultOptions = (0,_getDefaultOptions_js__WEBPACK_IMPORTED_MODULE_3__.getDefaultOptions)();
  const locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_js__WEBPACK_IMPORTED_MODULE_4__.enUS;
  const firstWeekContainsDate = (_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 || (_options$locale2 = options.locale) === null || _options$locale2 === void 0 || (_options$locale2 = _options$locale2.options) === null || _options$locale2 === void 0 ? void 0 : _options$locale2.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 || (_defaultOptions$local = _defaultOptions$local.options) === null || _defaultOptions$local === void 0 ? void 0 : _defaultOptions$local.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1;
  const weekStartsOn = (_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 || (_options$locale3 = options.locale) === null || _options$locale3 === void 0 || (_options$locale3 = _options$locale3.options) === null || _options$locale3 === void 0 ? void 0 : _options$locale3.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local2 = defaultOptions.locale) === null || _defaultOptions$local2 === void 0 || (_defaultOptions$local2 = _defaultOptions$local2.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0;
  if (!formatStr) return dateStr ? invalidDate() : (0,_toDate_js__WEBPACK_IMPORTED_MODULE_5__.toDate)(referenceDate, options === null || options === void 0 ? void 0 : options.in);
  const subFnOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale
  };

  // If timezone isn't specified, it will try to use the context or
  // the reference date and fallback to the system time zone.
  const setters = [new _parse_lib_Setter_js__WEBPACK_IMPORTED_MODULE_6__.DateTimezoneSetter(options === null || options === void 0 ? void 0 : options.in, referenceDate)];
  const tokens = formatStr.match(longFormattingTokensRegExp).map(substring => {
    const firstCharacter = substring[0];
    if (firstCharacter in _lib_format_longFormatters_js__WEBPACK_IMPORTED_MODULE_0__.longFormatters) {
      const longFormatter = _lib_format_longFormatters_js__WEBPACK_IMPORTED_MODULE_0__.longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp);
  const usedTokens = [];
  for (let token of tokens) {
    if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_7__.isProtectedWeekYearToken)(token)) {
      (0,_lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_7__.warnOrThrowProtectedError)(token, formatStr, dateStr);
    }
    if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_7__.isProtectedDayOfYearToken)(token)) {
      (0,_lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_7__.warnOrThrowProtectedError)(token, formatStr, dateStr);
    }
    const firstCharacter = token[0];
    const parser = _parse_lib_parsers_js__WEBPACK_IMPORTED_MODULE_1__.parsers[firstCharacter];
    if (parser) {
      const {
        incompatibleTokens
      } = parser;
      if (Array.isArray(incompatibleTokens)) {
        const incompatibleToken = usedTokens.find(usedToken => incompatibleTokens.includes(usedToken.token) || usedToken.token === firstCharacter);
        if (incompatibleToken) {
          throw new RangeError(`The format string mustn't contain \`${incompatibleToken.fullToken}\` and \`${token}\` at the same time`);
        }
      } else if (parser.incompatibleTokens === "*" && usedTokens.length > 0) {
        throw new RangeError(`The format string mustn't contain \`${token}\` and any other token at the same time`);
      }
      usedTokens.push({
        token: firstCharacter,
        fullToken: token
      });
      const parseResult = parser.run(dateStr, token, locale.match, subFnOptions);
      if (!parseResult) {
        return invalidDate();
      }
      setters.push(parseResult.setter);
      dateStr = parseResult.rest;
    } else {
      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
      }

      // Replace two single quote characters with one single quote character
      if (token === "''") {
        token = "'";
      } else if (firstCharacter === "'") {
        token = cleanEscapedString(token);
      }

      // Cut token from string, or, if string doesn't match the token, return Invalid Date
      if (dateStr.indexOf(token) === 0) {
        dateStr = dateStr.slice(token.length);
      } else {
        return invalidDate();
      }
    }
  }

  // Check if the remaining input contains something other than whitespace
  if (dateStr.length > 0 && notWhitespaceRegExp.test(dateStr)) {
    return invalidDate();
  }
  const uniquePrioritySetters = setters.map(setter => setter.priority).sort((a, b) => b - a).filter((priority, index, array) => array.indexOf(priority) === index).map(priority => setters.filter(setter => setter.priority === priority).sort((a, b) => b.subPriority - a.subPriority)).map(setterArray => setterArray[0]);
  let date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_5__.toDate)(referenceDate, options === null || options === void 0 ? void 0 : options.in);
  if (isNaN(+date)) return invalidDate();
  const flags = {};
  for (const setter of uniquePrioritySetters) {
    if (!setter.validate(date, subFnOptions)) {
      return invalidDate();
    }
    const result = setter.set(date, flags, subFnOptions);
    // Result is tuple (date, flags)
    if (Array.isArray(result)) {
      date = result[0];
      Object.assign(flags, result[1]);
      // Result is date
    } else {
      date = result;
    }
  }
  return date;
}
function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parse);

/***/ }),

/***/ 41516:
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/ISOWeekYearParser.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISOWeekYearParser: () => (/* binding */ ISOWeekYearParser)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 64467);
/* harmony import */ var _startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../startOfISOWeek.js */ 31337);
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constructFrom.js */ 91298);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ 901);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 80633);






// ISO week-numbering year
class ISOWeekYearParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 130);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]);
  }
  parse(dateString, token) {
    if (token === "R") {
      return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigitsSigned)(4, dateString);
    }
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigitsSigned)(token.length, dateString);
  }
  set(date, _flags, value) {
    const firstWeekOfYear = (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_3__.constructFrom)(date, 0);
    firstWeekOfYear.setFullYear(value, 0, 4);
    firstWeekOfYear.setHours(0, 0, 0, 0);
    return (0,_startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_4__.startOfISOWeek)(firstWeekOfYear);
  }
}

/***/ }),

/***/ 42106:
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/Hour1To24Parser.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hour1To24Parser: () => (/* binding */ Hour1To24Parser)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 64467);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ 86965);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ 901);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 80633);




class Hour1To24Parser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 70);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      case "k":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.numericPatterns.hour24h, dateString);
      case "ko":
        return match.ordinalNumber(dateString, {
          unit: "hour"
        });
      default:
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 24;
  }
  set(date, _flags, value) {
    const hours = value <= 24 ? value % 24 : value;
    date.setHours(hours, 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ 43019:
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/Hour1to12Parser.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hour1to12Parser: () => (/* binding */ Hour1to12Parser)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 64467);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ 86965);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ 901);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 80633);




class Hour1to12Parser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 70);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      case "h":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.numericPatterns.hour12h, dateString);
      case "ho":
        return match.ordinalNumber(dateString, {
          unit: "hour"
        });
      default:
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 12;
  }
  set(date, _flags, value) {
    const isPM = date.getHours() >= 12;
    if (isPM && value < 12) {
      date.setHours(value + 12, 0, 0, 0);
    } else if (!isPM && value === 12) {
      date.setHours(0, 0, 0, 0);
    } else {
      date.setHours(value, 0, 0, 0);
    }
    return date;
  }
}

/***/ }),

/***/ 46192:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parsers: () => (/* binding */ parsers)
/* harmony export */ });
/* harmony import */ var _parsers_EraParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parsers/EraParser.js */ 85226);
/* harmony import */ var _parsers_YearParser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsers/YearParser.js */ 17589);
/* harmony import */ var _parsers_LocalWeekYearParser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parsers/LocalWeekYearParser.js */ 73830);
/* harmony import */ var _parsers_ISOWeekYearParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsers/ISOWeekYearParser.js */ 41516);
/* harmony import */ var _parsers_ExtendedYearParser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsers/ExtendedYearParser.js */ 19032);
/* harmony import */ var _parsers_QuarterParser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsers/QuarterParser.js */ 68220);
/* harmony import */ var _parsers_StandAloneQuarterParser_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parsers/StandAloneQuarterParser.js */ 69577);
/* harmony import */ var _parsers_MonthParser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsers/MonthParser.js */ 84998);
/* harmony import */ var _parsers_StandAloneMonthParser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parsers/StandAloneMonthParser.js */ 77591);
/* harmony import */ var _parsers_LocalWeekParser_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parsers/LocalWeekParser.js */ 47631);
/* harmony import */ var _parsers_ISOWeekParser_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parsers/ISOWeekParser.js */ 47001);
/* harmony import */ var _parsers_DateParser_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parsers/DateParser.js */ 73964);
/* harmony import */ var _parsers_DayOfYearParser_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parsers/DayOfYearParser.js */ 89206);
/* harmony import */ var _parsers_DayParser_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parsers/DayParser.js */ 62626);
/* harmony import */ var _parsers_LocalDayParser_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./parsers/LocalDayParser.js */ 89835);
/* harmony import */ var _parsers_StandAloneLocalDayParser_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./parsers/StandAloneLocalDayParser.js */ 34076);
/* harmony import */ var _parsers_ISODayParser_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./parsers/ISODayParser.js */ 93193);
/* harmony import */ var _parsers_AMPMParser_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./parsers/AMPMParser.js */ 24165);
/* harmony import */ var _parsers_AMPMMidnightParser_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./parsers/AMPMMidnightParser.js */ 25305);
/* harmony import */ var _parsers_DayPeriodParser_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./parsers/DayPeriodParser.js */ 69183);
/* harmony import */ var _parsers_Hour1to12Parser_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./parsers/Hour1to12Parser.js */ 43019);
/* harmony import */ var _parsers_Hour0to23Parser_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./parsers/Hour0to23Parser.js */ 23596);
/* harmony import */ var _parsers_Hour0To11Parser_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./parsers/Hour0To11Parser.js */ 30501);
/* harmony import */ var _parsers_Hour1To24Parser_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./parsers/Hour1To24Parser.js */ 42106);
/* harmony import */ var _parsers_MinuteParser_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./parsers/MinuteParser.js */ 34704);
/* harmony import */ var _parsers_SecondParser_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./parsers/SecondParser.js */ 59028);
/* harmony import */ var _parsers_FractionOfSecondParser_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./parsers/FractionOfSecondParser.js */ 84359);
/* harmony import */ var _parsers_ISOTimezoneWithZParser_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./parsers/ISOTimezoneWithZParser.js */ 94036);
/* harmony import */ var _parsers_ISOTimezoneParser_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./parsers/ISOTimezoneParser.js */ 50554);
/* harmony import */ var _parsers_TimestampSecondsParser_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./parsers/TimestampSecondsParser.js */ 29209);
/* harmony import */ var _parsers_TimestampMillisecondsParser_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./parsers/TimestampMillisecondsParser.js */ 28222);
































/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */
const parsers = {
  G: new _parsers_EraParser_js__WEBPACK_IMPORTED_MODULE_0__.EraParser(),
  y: new _parsers_YearParser_js__WEBPACK_IMPORTED_MODULE_1__.YearParser(),
  Y: new _parsers_LocalWeekYearParser_js__WEBPACK_IMPORTED_MODULE_2__.LocalWeekYearParser(),
  R: new _parsers_ISOWeekYearParser_js__WEBPACK_IMPORTED_MODULE_3__.ISOWeekYearParser(),
  u: new _parsers_ExtendedYearParser_js__WEBPACK_IMPORTED_MODULE_4__.ExtendedYearParser(),
  Q: new _parsers_QuarterParser_js__WEBPACK_IMPORTED_MODULE_5__.QuarterParser(),
  q: new _parsers_StandAloneQuarterParser_js__WEBPACK_IMPORTED_MODULE_6__.StandAloneQuarterParser(),
  M: new _parsers_MonthParser_js__WEBPACK_IMPORTED_MODULE_7__.MonthParser(),
  L: new _parsers_StandAloneMonthParser_js__WEBPACK_IMPORTED_MODULE_8__.StandAloneMonthParser(),
  w: new _parsers_LocalWeekParser_js__WEBPACK_IMPORTED_MODULE_9__.LocalWeekParser(),
  I: new _parsers_ISOWeekParser_js__WEBPACK_IMPORTED_MODULE_10__.ISOWeekParser(),
  d: new _parsers_DateParser_js__WEBPACK_IMPORTED_MODULE_11__.DateParser(),
  D: new _parsers_DayOfYearParser_js__WEBPACK_IMPORTED_MODULE_12__.DayOfYearParser(),
  E: new _parsers_DayParser_js__WEBPACK_IMPORTED_MODULE_13__.DayParser(),
  e: new _parsers_LocalDayParser_js__WEBPACK_IMPORTED_MODULE_14__.LocalDayParser(),
  c: new _parsers_StandAloneLocalDayParser_js__WEBPACK_IMPORTED_MODULE_15__.StandAloneLocalDayParser(),
  i: new _parsers_ISODayParser_js__WEBPACK_IMPORTED_MODULE_16__.ISODayParser(),
  a: new _parsers_AMPMParser_js__WEBPACK_IMPORTED_MODULE_17__.AMPMParser(),
  b: new _parsers_AMPMMidnightParser_js__WEBPACK_IMPORTED_MODULE_18__.AMPMMidnightParser(),
  B: new _parsers_DayPeriodParser_js__WEBPACK_IMPORTED_MODULE_19__.DayPeriodParser(),
  h: new _parsers_Hour1to12Parser_js__WEBPACK_IMPORTED_MODULE_20__.Hour1to12Parser(),
  H: new _parsers_Hour0to23Parser_js__WEBPACK_IMPORTED_MODULE_21__.Hour0to23Parser(),
  K: new _parsers_Hour0To11Parser_js__WEBPACK_IMPORTED_MODULE_22__.Hour0To11Parser(),
  k: new _parsers_Hour1To24Parser_js__WEBPACK_IMPORTED_MODULE_23__.Hour1To24Parser(),
  m: new _parsers_MinuteParser_js__WEBPACK_IMPORTED_MODULE_24__.MinuteParser(),
  s: new _parsers_SecondParser_js__WEBPACK_IMPORTED_MODULE_25__.SecondParser(),
  S: new _parsers_FractionOfSecondParser_js__WEBPACK_IMPORTED_MODULE_26__.FractionOfSecondParser(),
  X: new _parsers_ISOTimezoneWithZParser_js__WEBPACK_IMPORTED_MODULE_27__.ISOTimezoneWithZParser(),
  x: new _parsers_ISOTimezoneParser_js__WEBPACK_IMPORTED_MODULE_28__.ISOTimezoneParser(),
  t: new _parsers_TimestampSecondsParser_js__WEBPACK_IMPORTED_MODULE_29__.TimestampSecondsParser(),
  T: new _parsers_TimestampMillisecondsParser_js__WEBPACK_IMPORTED_MODULE_30__.TimestampMillisecondsParser()
};

/***/ }),

/***/ 47001:
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISOWeekParser: () => (/* binding */ ISOWeekParser)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 64467);
/* harmony import */ var _setISOWeek_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../setISOWeek.js */ 56298);
/* harmony import */ var _startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../startOfISOWeek.js */ 31337);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ 86965);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ 901);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 80633);







// ISO week of year
class ISOWeekParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 100);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      case "I":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.numericPatterns.week, dateString);
      case "Io":
        return match.ordinalNumber(dateString, {
          unit: "week"
        });
      default:
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 53;
  }
  set(date, _flags, value) {
    return (0,_startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_4__.startOfISOWeek)((0,_setISOWeek_js__WEBPACK_IMPORTED_MODULE_5__.setISOWeek)(date, value));
  }
}

/***/ }),

/***/ 47631:
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalWeekParser: () => (/* binding */ LocalWeekParser)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 64467);
/* harmony import */ var _setWeek_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../setWeek.js */ 75583);
/* harmony import */ var _startOfWeek_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../startOfWeek.js */ 28034);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ 86965);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ 901);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 80633);







// Local week of year
class LocalWeekParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 100);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      case "w":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.numericPatterns.week, dateString);
      case "wo":
        return match.ordinalNumber(dateString, {
          unit: "week"
        });
      default:
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 53;
  }
  set(date, _flags, value, options) {
    return (0,_startOfWeek_js__WEBPACK_IMPORTED_MODULE_4__.startOfWeek)((0,_setWeek_js__WEBPACK_IMPORTED_MODULE_5__.setWeek)(date, value, options), options);
  }
}

/***/ }),

/***/ 48110:
/*!********************************************!*\
  !*** ./node_modules/date-fns/getISODay.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISODay: () => (/* binding */ getISODay)
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ 91490);


/**
 * The {@link getISODay} function options.
 */

/**
 * @name getISODay
 * @category Weekday Helpers
 * @summary Get the day of the ISO week of the given date.
 *
 * @description
 * Get the day of the ISO week of the given date,
 * which is 7 for Sunday, 1 for Monday etc.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The day of ISO week
 *
 * @example
 * // Which day of the ISO week is 26 February 2012?
 * const result = getISODay(new Date(2012, 1, 26))
 * //=> 7
 */
function getISODay(date, options) {
  const day = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options === null || options === void 0 ? void 0 : options.in).getDay();
  return day === 0 ? 7 : day;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISODay);

/***/ }),

/***/ 50554:
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/ISOTimezoneParser.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISOTimezoneParser: () => (/* binding */ ISOTimezoneParser)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 64467);
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constructFrom.js */ 91298);
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getTimezoneOffsetInMilliseconds.js */ 48833);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ 86965);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ 901);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 80633);







// Timezone (ISO-8601)
class ISOTimezoneParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 10);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(dateString, token) {
    switch (token) {
      case "x":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseTimezonePattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.timezonePatterns.basicOptionalMinutes, dateString);
      case "xx":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseTimezonePattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.timezonePatterns.basic, dateString);
      case "xxxx":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseTimezonePattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.timezonePatterns.basicOptionalSeconds, dateString);
      case "xxxxx":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseTimezonePattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.timezonePatterns.extendedOptionalSeconds, dateString);
      case "xxx":
      default:
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseTimezonePattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.timezonePatterns.extended, dateString);
    }
  }
  set(date, flags, value) {
    if (flags.timestampIsSet) return date;
    return (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_4__.constructFrom)(date, date.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_js__WEBPACK_IMPORTED_MODULE_5__.getTimezoneOffsetInMilliseconds)(date) - value);
  }
}

/***/ }),

/***/ 56298:
/*!*********************************************!*\
  !*** ./node_modules/date-fns/setISOWeek.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setISOWeek: () => (/* binding */ setISOWeek)
/* harmony export */ });
/* harmony import */ var _getISOWeek_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getISOWeek.js */ 2982);
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ 91490);



/**
 * The {@link setISOWeek} function options.
 */

/**
 * @name setISOWeek
 * @category ISO Week Helpers
 * @summary Set the ISO week to the given date.
 *
 * @description
 * Set the ISO week to the given date, saving the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The `Date` type of the context function.
 *
 * @param date - The date to be changed
 * @param week - The ISO week of the new date
 * @param options - An object with options
 *
 * @returns The new date with the ISO week set
 *
 * @example
 * // Set the 53rd ISO week to 7 August 2004:
 * const result = setISOWeek(new Date(2004, 7, 7), 53)
 * //=> Sat Jan 01 2005 00:00:00
 */
function setISOWeek(date, week, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options === null || options === void 0 ? void 0 : options.in);
  const diff = (0,_getISOWeek_js__WEBPACK_IMPORTED_MODULE_1__.getISOWeek)(_date, options) - week;
  _date.setDate(_date.getDate() - diff * 7);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setISOWeek);

/***/ }),

/***/ 56441:
/*!*****************************************!*\
  !*** ./node_modules/date-fns/setDay.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setDay: () => (/* binding */ setDay)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.js */ 9807);
/* harmony import */ var _addDays_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addDays.js */ 71479);
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.js */ 91490);




/**
 * The {@link setDay} function options.
 */

/**
 * @name setDay
 * @category Weekday Helpers
 * @summary Set the day of the week to the given date.
 *
 * @description
 * Set the day of the week to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param day - The day of the week of the new date
 * @param options - An object with options.
 *
 * @returns The new date with the day of the week set
 *
 * @example
 * // Set week day to Sunday, with the default weekStartsOn of Sunday:
 * const result = setDay(new Date(2014, 8, 1), 0)
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // Set week day to Sunday, with a weekStartsOn of Monday:
 * const result = setDay(new Date(2014, 8, 1), 0, { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 00:00:00
 */
function setDay(date, day, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _defaultOptions$local;
  const defaultOptions = (0,_lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn = (_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 || (_options$locale = options.locale) === null || _options$locale === void 0 || (_options$locale = _options$locale.options) === null || _options$locale === void 0 ? void 0 : _options$locale.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 || (_defaultOptions$local = _defaultOptions$local.options) === null || _defaultOptions$local === void 0 ? void 0 : _defaultOptions$local.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0;
  const date_ = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_1__.toDate)(date, options === null || options === void 0 ? void 0 : options.in);
  const currentDay = date_.getDay();
  const remainder = day % 7;
  const dayIndex = (remainder + 7) % 7;
  const delta = 7 - weekStartsOn;
  const diff = day < 0 || day > 6 ? day - (currentDay + delta) % 7 : (dayIndex + delta) % 7 - (currentDay + delta) % 7;
  return (0,_addDays_js__WEBPACK_IMPORTED_MODULE_2__.addDays)(date_, diff, options);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setDay);

/***/ }),

/***/ 59028:
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/SecondParser.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecondParser: () => (/* binding */ SecondParser)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 64467);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ 86965);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ 901);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 80633);




class SecondParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 50);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      case "s":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.numericPatterns.second, dateString);
      case "so":
        return match.ordinalNumber(dateString, {
          unit: "second"
        });
      default:
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 59;
  }
  set(date, _flags, value) {
    date.setSeconds(value, 0);
    return date;
  }
}

/***/ }),

/***/ 62626:
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/DayParser.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayParser: () => (/* binding */ DayParser)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 64467);
/* harmony import */ var _setDay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../setDay.js */ 56441);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ 901);




// Day of week
class DayParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 90);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return match.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.day(dateString, {
          width: "short",
          context: "formatting"
        }) || match.day(dateString, {
          width: "narrow",
          context: "formatting"
        });

      // T
      case "EEEEE":
        return match.day(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return match.day(dateString, {
          width: "short",
          context: "formatting"
        }) || match.day(dateString, {
          width: "narrow",
          context: "formatting"
        });

      // Tuesday
      case "EEEE":
      default:
        return match.day(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.day(dateString, {
          width: "short",
          context: "formatting"
        }) || match.day(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 6;
  }
  set(date, _flags, value, options) {
    date = (0,_setDay_js__WEBPACK_IMPORTED_MODULE_2__.setDay)(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ 68220:
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/QuarterParser.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuarterParser: () => (/* binding */ QuarterParser)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 64467);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ 901);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 80633);



class QuarterParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 120);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
      case "QQ":
        // 01, 02, 03, 04
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return match.ordinalNumber(dateString, {
          unit: "quarter"
        });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return match.quarter(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.quarter(dateString, {
          width: "narrow",
          context: "formatting"
        });

      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return match.quarter(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return match.quarter(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.quarter(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.quarter(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 4;
  }
  set(date, _flags, value) {
    date.setMonth((value - 1) * 3, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ 69183:
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/DayPeriodParser.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayPeriodParser: () => (/* binding */ DayPeriodParser)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 64467);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ 901);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 80633);




// in the morning, in the afternoon, in the evening, at night
class DayPeriodParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 80);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return match.dayPeriod(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(date, _flags, value) {
    date.setHours((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.dayPeriodEnumToHours)(value), 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ 69577:
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/StandAloneQuarterParser.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StandAloneQuarterParser: () => (/* binding */ StandAloneQuarterParser)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 64467);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ 901);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 80633);



class StandAloneQuarterParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 120);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      // 1, 2, 3, 4
      case "q":
      case "qq":
        // 01, 02, 03, 04
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return match.ordinalNumber(dateString, {
          unit: "quarter"
        });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return match.quarter(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.quarter(dateString, {
          width: "narrow",
          context: "standalone"
        });

      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return match.quarter(dateString, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return match.quarter(dateString, {
          width: "wide",
          context: "standalone"
        }) || match.quarter(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.quarter(dateString, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 4;
  }
  set(date, _flags, value) {
    date.setMonth((value - 1) * 3, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ 70616:
/*!********************************************************!*\
  !*** ./src/app/short-filter/short-filter.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShortFilterComponent: () => (/* binding */ ShortFilterComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/appdata */ 40172);
var _ShortFilterComponent;









const _c0 = ["targetDiv"];
const _c1 = ["targetDiv2"];
const _c2 = () => ({
  "padding-top": "50px"
});
const _c3 = () => ({});
const _c4 = (a0, a1) => ({
  "themeone-selected-icon": a0,
  "themeone-filter-subhead": a1
});
const _c5 = (a0, a1) => ({
  "themeone-selected-icon2 typeTitle": a0,
  "themeone-filter-head typeTitle": a1
});
const _c6 = (a0, a1) => ({
  "seabird_selected_div": a0,
  "content-wrapper": a1
});
const _c7 = (a0, a1) => ({
  "caption1": a0,
  "caption": a1
});
const _c8 = (a0, a1) => ({
  "selected-div": a0,
  "content-wrapper": a1
});
function ShortFilterComponent_ng_container_0_ion_list_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-list", 42)(1, "ion-card", 12)(2, "ion-row")(3, "ion-list-header")(4, "ion-label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Bus type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 44)(7, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_0_ion_list_88_Template_div_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterBusType("ac"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "ion-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " AC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_0_ion_list_88_Template_div_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterBusType("nonac"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "ion-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " Non-AC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_0_ion_list_88_Template_div_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterBusType(ctx_r1.subdomain == "abct" ? "shuttle" : "semisleeper"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "ion-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 52)(23, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_0_ion_list_88_Template_div_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterBusType(ctx_r1.subdomain == "abct" ? "sprinter" : "sleeper"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "ion-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](6, _c5, ctx_r1.checkBusType("ac"), !ctx_r1.checkBusType("ac")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](9, _c5, ctx_r1.checkBusType("nonac"), !ctx_r1.checkBusType("nonac")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](12, _c5, ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "shuttle" : "semisleeper"), !ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "shuttle" : "semisleeper")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.subdomain == "abct" ? "Shuttle" : "Seater", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](15, _c5, ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "sprinter" : "sleeper"), !ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "sprinter" : "sleeper")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.subdomain == "abct" ? "Sprinter" : "Sleeper", " ");
  }
}
function ShortFilterComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-header", 5)(2, "ion-toolbar", 6)(3, "ion-title", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Sort & Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-buttons", 8)(6, "ion-back-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_0_Template_ion_back_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.dismiss(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-content", 10)(8, "ion-list", 11)(9, "ion-card", 12)(10, "ion-row")(11, "ion-list-header")(12, "ion-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " Departure From ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-row", 14)(15, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_0_Template_ion_col_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterDepatureTimeSource("morning"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 18)(19, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, " Early Morning ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " 12AM - 6AM ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "ion-col", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_0_Template_ion_col_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterDepatureTimeSource("noon"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 18)(27, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " Morning ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, " 6AM - 12PM ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "ion-row", 14)(32, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_0_Template_ion_col_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterDepatureTimeSource("eve"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 18)(36, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, " After Noon ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, " 12PM - 6PM ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "ion-col", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_0_Template_ion_col_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterDepatureTimeSource("night"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 18)(44, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, " Night ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, " 6PM - 12AM ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "ion-list", 25)(49, "ion-card", 12)(50, "ion-row")(51, "ion-list-header")(52, "ion-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, " Arrival From ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "ion-row", 14)(55, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_0_Template_ion_col_click_55_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterDepatureTimeDestination("morning"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 18)(59, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, " Early Morning ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, " 12AM - 6AM ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "ion-col", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_0_Template_ion_col_click_63_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterDepatureTimeDestination("noon"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](65, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 18)(67, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, " Morning ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, " 6AM - 12PM ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "ion-row", 14)(72, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_0_Template_ion_col_click_72_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterDepatureTimeDestination("eve"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](74, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "div", 18)(76, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, " After Noon ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, " 12PM - 6PM ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "ion-col", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_0_Template_ion_col_click_80_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterDepatureTimeDestination("night"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](82, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 18)(84, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, " Night ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, " 6PM - 12AM ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](88, ShortFilterComponent_ng_container_0_ion_list_88_Template, 28, 18, "ion-list", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "ion-list", 27)(90, "ion-card", 12)(91, "ion-row")(92, "ion-list-header")(93, "ion-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94, " Sort by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "ion-radio-group", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ShortFilterComponent_ng_container_0_Template_ion_radio_group_ngModelChange_95_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.filterValues.sortBy, $event) || (ctx_r1.filterValues.sortBy = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "ion-item", 30)(97, "ion-label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, "Cheapest first");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](99, "ion-radio", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "ion-item", 30)(101, "ion-label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102, "Early Departure");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](103, "ion-radio", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "ion-item", 30)(105, "ion-label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106, "Late Departure");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](107, "ion-radio", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "ion-footer", 35)(109, "div", 36)(110, "div", 37)(111, "div", 38)(112, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_0_Template_span_click_112_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.clearFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](113, "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "div", 40)(115, "div")(116, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_0_Template_span_click_116_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.dismiss(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](117, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", ctx_r1.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](11, _c2) : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](12, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](13, _c4, ctx_r1.checkforDepartureSourceFilter("morning"), !ctx_r1.checkforDepartureSourceFilter("morning")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](16, _c4, ctx_r1.checkforDepartureSourceFilter("noon"), !ctx_r1.checkforDepartureSourceFilter("noon")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](19, _c4, ctx_r1.checkforDepartureSourceFilter("eve"), !ctx_r1.checkforDepartureSourceFilter("eve")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](22, _c4, ctx_r1.checkforDepartureSourceFilter("night"), !ctx_r1.checkforDepartureSourceFilter("night")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](25, _c4, ctx_r1.checkforDepartureDestinationFilter("morning"), !ctx_r1.checkforDepartureDestinationFilter("morning")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](28, _c4, ctx_r1.checkforDepartureDestinationFilter("noon"), !ctx_r1.checkforDepartureDestinationFilter("noon")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](31, _c4, ctx_r1.checkforDepartureDestinationFilter("eve"), !ctx_r1.checkforDepartureDestinationFilter("eve")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](34, _c4, ctx_r1.checkforDepartureDestinationFilter("night"), !ctx_r1.checkforDepartureDestinationFilter("night")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.util.isInternational || ctx_r1.subdomain != "abct");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.filterValues.sortBy);
  }
}
function ShortFilterComponent_ng_container_1_div_109_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 92)(1, "ion-grid")(2, "ion-row")(3, "ion-col", 93)(4, "div", 94)(5, "ion-checkbox", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function ShortFilterComponent_ng_container_1_div_109_div_1_Template_ion_checkbox_ionChange_5_listener() {
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.setFilters(item_r6.id, "bp"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-col", 96)(7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r1.isSelectedBP(item_r6.id))("value", item_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r6.name);
  }
}
function ShortFilterComponent_ng_container_1_div_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ShortFilterComponent_ng_container_1_div_109_div_1_Template, 9, 3, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.filteredBoardingPoints);
  }
}
function ShortFilterComponent_ng_container_1_ng_template_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Not Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ShortFilterComponent_ng_container_1_div_121_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 92)(1, "ion-grid")(2, "ion-row")(3, "ion-col", 93)(4, "div", 94)(5, "ion-checkbox", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function ShortFilterComponent_ng_container_1_div_121_div_1_Template_ion_checkbox_ionChange_5_listener() {
      const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.setFilters(item_r8.id, "dp"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-col", 96)(7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r1.isSelectedDP(item_r8.id))("value", item_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r8.name);
  }
}
function ShortFilterComponent_ng_container_1_div_121_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ShortFilterComponent_ng_container_1_div_121_div_1_Template, 9, 3, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.filteredDroppingPoints);
  }
}
function ShortFilterComponent_ng_container_1_ng_template_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Not Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ShortFilterComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 54)(3, "ion-title", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-buttons", 56)(6, "ion-button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_1_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.dismiss(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "ion-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-content", 59)(9, "ion-list", 60)(10, "ion-card", 61)(11, "ion-row")(12, "ion-list-header")(13, "ion-label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " Sort by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "ion-list", 63)(16, "ion-radio-group", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ShortFilterComponent_ng_container_1_Template_ion_radio_group_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.filterValues.sortBy, $event) || (ctx_r1.filterValues.sortBy = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "ion-item", 30)(18, "ion-label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Cheapest first");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "ion-radio", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "ion-item", 30)(22, "ion-label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Early Departure");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "ion-radio", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "ion-item", 30)(26, "ion-label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Late Departure");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "ion-radio", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "hr", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "ion-list", 60)(31, "ion-card", 61)(32, "ion-row")(33, "ion-list-header")(34, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, " Filter by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, " Bus departure time from source");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 71)(39, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_1_Template_div_click_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterDepatureTimeSource("morning"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "ion-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "00:00 - 06:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_1_Template_div_click_43_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterDepatureTimeSource("noon"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "ion-icon", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "06:00 - 12:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_1_Template_div_click_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterDepatureTimeSource("eve"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "ion-icon", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "12:00 - 18:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_1_Template_div_click_51_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterDepatureTimeSource("night"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "ion-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "18:00 - 24:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "hr", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, " Bus arrival time at destination");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 71)(59, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_1_Template_div_click_59_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterDepatureTimeDestination("morning"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](60, "ion-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "00:00 - 06:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_1_Template_div_click_63_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterDepatureTimeDestination("noon"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](64, "ion-icon", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "06:00 - 12:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_1_Template_div_click_67_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterDepatureTimeDestination("eve"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](68, "ion-icon", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "12:00 - 18:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_1_Template_div_click_71_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterDepatureTimeDestination("night"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](72, "ion-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "18:00 - 24:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](75, "hr", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "ion-list", 60)(77, "ion-card", 61)(78, "ion-row")(79, "ion-list-header")(80, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, " Bus type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 79)(83, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_1_Template_div_click_83_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterBusType(ctx_r1.subdomain == "abct" ? "sprinter" : "sleeper"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](84, "ion-icon", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_1_Template_div_click_87_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterBusType(ctx_r1.subdomain == "abct" ? "shuttle" : "semisleeper"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](88, "ion-icon", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_1_Template_div_click_91_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterBusType("ac"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](92, "ion-icon", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94, "AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_1_Template_div_click_95_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterBusType("nonac"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](96, "ion-icon", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, "Non AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](99, "hr", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "ion-list")(101, "ion-card", 61)(102, "ion-row")(103, "ion-list-header")(104, "ion-label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105, " Boarding point ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "ion-row")(107, "ion-col")(108, "ion-searchbar", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ShortFilterComponent_ng_container_1_Template_ion_searchbar_ngModelChange_108_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionInput", function ShortFilterComponent_ng_container_1_Template_ion_searchbar_ionInput_108_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterBoardingPoints($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](109, ShortFilterComponent_ng_container_1_div_109_Template, 2, 1, "div", 84)(110, ShortFilterComponent_ng_container_1_ng_template_110_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "ion-list", 60)(113, "ion-card", 61)(114, "ion-row")(115, "ion-list-header")(116, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](117, " Dropping Point ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "ion-row")(119, "ion-col")(120, "ion-searchbar", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ShortFilterComponent_ng_container_1_Template_ion_searchbar_ngModelChange_120_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.searchTerm2, $event) || (ctx_r1.searchTerm2 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionInput", function ShortFilterComponent_ng_container_1_Template_ion_searchbar_ionInput_120_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterDroppingPoints($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](121, ShortFilterComponent_ng_container_1_div_121_Template, 2, 1, "div", 84)(122, ShortFilterComponent_ng_container_1_ng_template_122_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](124, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "ion-footer")(126, "div", 86)(127, "ion-row")(128, "ion-col", 87)(129, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_1_Template_p_click_129_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.clearFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](130, "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "ion-col", 89)(132, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_1_Template_p_click_132_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.dismiss(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](133, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const noResults_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](111);
    const noResultss_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](123);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r1.origin.name, " - ", ctx_r1.destination.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.filterValues.sortBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](37, _c6, ctx_r1.checkforDepartureSourceFilter("morning"), !ctx_r1.checkforDepartureSourceFilter("morning")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](40, _c7, ctx_r1.checkforDepartureSourceFilter("morning"), !ctx_r1.checkforDepartureSourceFilter("morning")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](43, _c6, ctx_r1.checkforDepartureSourceFilter("noon"), !ctx_r1.checkforDepartureSourceFilter("noon")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](46, _c7, ctx_r1.checkforDepartureSourceFilter("noon"), !ctx_r1.checkforDepartureSourceFilter("noon")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](49, _c6, ctx_r1.checkforDepartureSourceFilter("eve"), !ctx_r1.checkforDepartureSourceFilter("eve")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](52, _c7, ctx_r1.checkforDepartureSourceFilter("eve"), !ctx_r1.checkforDepartureSourceFilter("eve")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](55, _c6, ctx_r1.checkforDepartureSourceFilter("night"), !ctx_r1.checkforDepartureSourceFilter("night")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](58, _c7, ctx_r1.checkforDepartureSourceFilter("night"), !ctx_r1.checkforDepartureSourceFilter("night")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](61, _c6, ctx_r1.checkforDepartureDestinationFilter("morning"), !ctx_r1.checkforDepartureDestinationFilter("morning")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](64, _c7, ctx_r1.checkforDepartureDestinationFilter("morning"), !ctx_r1.checkforDepartureDestinationFilter("morning")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](67, _c6, ctx_r1.checkforDepartureDestinationFilter("noon"), !ctx_r1.checkforDepartureDestinationFilter("noon")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](70, _c7, ctx_r1.checkforDepartureDestinationFilter("noon"), !ctx_r1.checkforDepartureDestinationFilter("noon")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](73, _c6, ctx_r1.checkforDepartureDestinationFilter("eve"), !ctx_r1.checkforDepartureDestinationFilter("eve")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](76, _c7, ctx_r1.checkforDepartureDestinationFilter("eve"), !ctx_r1.checkforDepartureDestinationFilter("eve")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](79, _c6, ctx_r1.checkforDepartureDestinationFilter("night"), !ctx_r1.checkforDepartureDestinationFilter("night")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](82, _c7, ctx_r1.checkforDepartureDestinationFilter("night"), !ctx_r1.checkforDepartureDestinationFilter("night")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](85, _c6, ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "sprinter" : "sleeper"), !ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "sprinter" : "sleeper")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.subdomain == "abct" ? "./assets/icon/sprinter.svg" : "./assets/icon/Sleeper Seat.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](88, _c7, ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "sprinter" : "sleeper"), !ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "sprinter" : "sleeper")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.subdomain == "abct" ? "Sprinter" : "Sleeper");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](91, _c6, ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "shuttle" : "semisleeper"), !ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "shuttle" : "semisleeper")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.subdomain == "abct" ? "./assets/icon/shuttle.svg" : "./assets/icon/Without Window.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](94, _c7, ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "shuttle" : "semisleeper"), !ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "shuttle" : "semisleeper")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.subdomain == "abct" ? "Shuttle" : "Seater");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](97, _c6, ctx_r1.checkBusType("ac"), !ctx_r1.checkBusType("ac")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](100, _c7, ctx_r1.checkBusType("ac"), !ctx_r1.checkBusType("ac")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](103, _c6, ctx_r1.checkBusType("nonac"), !ctx_r1.checkBusType("nonac")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](106, _c7, ctx_r1.checkBusType("nonac"), !ctx_r1.checkBusType("nonac")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.filteredBoardingPoints.length > 0)("ngIfElse", noResults_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchTerm2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.filteredDroppingPoints.length > 0)("ngIfElse", noResultss_r10);
  }
}
function ShortFilterComponent_ng_container_2__svg_svg_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "svg", 127)(1, "mask", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "rect", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "g", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "path", 131)(5, "path", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ShortFilterComponent_ng_container_2_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Pickup Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ShortFilterComponent_ng_container_2__svg_svg_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "svg", 127)(1, "mask", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "rect", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "g", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "path", 134)(5, "path", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ShortFilterComponent_ng_container_2_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Pickup Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ShortFilterComponent_ng_container_2__svg_svg_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "svg", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "path", 136)(2, "path", 137)(3, "path", 138)(4, "path", 139)(5, "path", 140)(6, "path", 141)(7, "path", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ShortFilterComponent_ng_container_2_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Drop Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ShortFilterComponent_ng_container_2__svg_svg_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "svg", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "path", 143)(2, "path", 144)(3, "path", 145)(4, "path", 146)(5, "path", 147)(6, "path", 148)(7, "path", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ShortFilterComponent_ng_container_2_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Drop Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ShortFilterComponent_ng_container_2__svg_svg_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "svg", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "path", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ShortFilterComponent_ng_container_2_span_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Lowest Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ShortFilterComponent_ng_container_2__svg_svg_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "svg", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "path", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ShortFilterComponent_ng_container_2_span_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Lowest Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ShortFilterComponent_ng_container_2_ion_row_152_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row")(1, "ion-col")(2, "ion-searchbar", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ShortFilterComponent_ng_container_2_ion_row_152_Template_ion_searchbar_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionInput", function ShortFilterComponent_ng_container_2_ion_row_152_Template_ion_searchbar_ionInput_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterBoardingPoints($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchTerm);
  }
}
function ShortFilterComponent_ng_container_2_div_153_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 156)(1, "ion-grid")(2, "ion-row")(3, "ion-col", 157)(4, "div", 94)(5, "ion-checkbox", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function ShortFilterComponent_ng_container_2_div_153_div_2_div_1_Template_ion_checkbox_ionChange_5_listener() {
      const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.setFilters(item_r14.id, "bp"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-col", 159)(7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r1.isSelectedBP(item_r14.id))("value", item_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r14.name);
  }
}
function ShortFilterComponent_ng_container_2_div_153_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ShortFilterComponent_ng_container_2_div_153_div_2_div_1_Template, 9, 3, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.filteredBoardingPoints);
  }
}
function ShortFilterComponent_ng_container_2_div_153_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Not Avaialable");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ShortFilterComponent_ng_container_2_div_153_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 152, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ShortFilterComponent_ng_container_2_div_153_div_2_Template, 2, 1, "div", 153)(3, ShortFilterComponent_ng_container_2_div_153_ng_template_3_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const noResults_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.filteredBoardingPoints.length > 0)("ngIfElse", noResults_r15);
  }
}
function ShortFilterComponent_ng_container_2_ion_row_160_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row")(1, "ion-col")(2, "ion-searchbar", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ShortFilterComponent_ng_container_2_ion_row_160_Template_ion_searchbar_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.searchTerm2, $event) || (ctx_r1.searchTerm2 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionInput", function ShortFilterComponent_ng_container_2_ion_row_160_Template_ion_searchbar_ionInput_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterDroppingPoints($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchTerm2);
  }
}
function ShortFilterComponent_ng_container_2_div_161_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 156)(1, "ion-grid")(2, "ion-row")(3, "ion-col", 157)(4, "div", 94)(5, "ion-checkbox", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function ShortFilterComponent_ng_container_2_div_161_div_2_div_1_Template_ion_checkbox_ionChange_5_listener() {
      const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.setFilters(item_r18.id, "dp"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-col", 159)(7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r18 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r1.isSelectedDP(item_r18.id))("value", item_r18.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r18.name);
  }
}
function ShortFilterComponent_ng_container_2_div_161_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ShortFilterComponent_ng_container_2_div_161_div_2_div_1_Template, 9, 3, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.filteredDroppingPoints);
  }
}
function ShortFilterComponent_ng_container_2_div_161_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 152, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ShortFilterComponent_ng_container_2_div_161_div_2_Template, 2, 1, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const noResultss_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](163);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.filteredDroppingPoints.length > 0)("ngIfElse", noResultss_r19);
  }
}
function ShortFilterComponent_ng_container_2_ng_template_162_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Not Avaialable");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ShortFilterComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-header", 99)(2, "ion-toolbar", 54)(3, "ion-title", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Sort and Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-buttons", 56)(6, "ion-button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_2_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.dismiss(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "ion-icon", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-content", 102)(9, "div", 103)(10, "p", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Sort By");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-row")(13, "ion-col", 105)(14, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_2_Template_div_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.sortBy("early_depature"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, ShortFilterComponent_ng_container_2__svg_svg_15_Template, 6, 0, "svg", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ShortFilterComponent_ng_container_2_span_17_Template, 2, 0, "span", 108)(18, ShortFilterComponent_ng_container_2__svg_svg_18_Template, 6, 0, "svg", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, ShortFilterComponent_ng_container_2_span_20_Template, 2, 0, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "ion-col", 105)(22, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_2_Template_div_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.sortBy("drop_time"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, ShortFilterComponent_ng_container_2__svg_svg_23_Template, 8, 0, "svg", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, ShortFilterComponent_ng_container_2_span_25_Template, 2, 0, "span", 108)(26, ShortFilterComponent_ng_container_2__svg_svg_26_Template, 8, 0, "svg", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, ShortFilterComponent_ng_container_2_span_28_Template, 2, 0, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "ion-row")(30, "ion-col", 105)(31, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_2_Template_div_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.sortBy("cheapest_first"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, ShortFilterComponent_ng_container_2__svg_svg_32_Template, 2, 0, "svg", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, ShortFilterComponent_ng_container_2_span_34_Template, 2, 0, "span", 108)(35, ShortFilterComponent_ng_container_2__svg_svg_35_Template, 2, 0, "svg", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, ShortFilterComponent_ng_container_2_span_37_Template, 2, 0, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 103)(39, "p", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Filter By");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "ion-label", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Bus Departure Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "ion-grid", 111)(44, "ion-row", 112)(45, "ion-col")(46, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_2_Template_div_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterDepatureTimeSource("noon"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "img", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 115)(49, "ion-label", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Morning");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "ion-label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "06:00 AM to 12:00 PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "ion-col")(54, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_2_Template_div_click_54_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterDepatureTimeSource("eve"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "img", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 115)(57, "ion-label", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Afternoon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "ion-label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "12:00 PM to 06:00 PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "ion-row", 112)(62, "ion-col")(63, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_2_Template_div_click_63_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterDepatureTimeSource("night"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](64, "img", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 115)(66, "ion-label", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "Evening");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "ion-label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "06:00 PM to 12:00 AM");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "ion-col")(71, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_2_Template_div_click_71_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterDepatureTimeSource("morning"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](72, "img", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "div", 115)(74, "ion-label", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "Night");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "ion-label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "12:00 AM to 06:00 AM");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 103)(79, "ion-label", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, "Bus Arrival Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "ion-grid", 111)(82, "ion-row", 112)(83, "ion-col")(84, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_2_Template_div_click_84_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterDepatureTimeDestination("noon"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](85, "img", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "div", 115)(87, "ion-label", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "Morning");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "ion-label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "06:00 AM to 12:00 PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "ion-col")(92, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_2_Template_div_click_92_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterDepatureTimeDestination("eve"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](93, "img", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "div", 115)(95, "ion-label", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "Afternoon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "ion-label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, "12:00 PM to 06:00 PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "ion-row", 112)(100, "ion-col")(101, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_2_Template_div_click_101_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterDepatureTimeDestination("night"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](102, "img", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "div", 115)(104, "ion-label", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105, "Evening");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "ion-label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](107, "06:00 PM to 12:00 AM");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "ion-col")(109, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_2_Template_div_click_109_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterDepatureTimeDestination("morning"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](110, "img", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "div", 115)(112, "ion-label", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](113, "Night");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "ion-label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](115, "12:00 AM to 06:00 AM");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "div", 103)(117, "ion-label", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](118, "Bus Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "ion-grid", 111)(120, "ion-row", 112)(121, "ion-col")(122, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_2_Template_div_click_122_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterBusType("ac"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](123, "img", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "div", 115)(125, "ion-label", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](126, "A/C");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](127, "ion-col")(128, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_2_Template_div_click_128_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterBusType("nonac"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](129, "img", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "div", 115)(131, "ion-label", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](132, "Non A/C");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "ion-row", 112)(134, "ion-col")(135, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_2_Template_div_click_135_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterBusType(ctx_r1.subdomain == "abct" ? "shuttle" : "semisleeper"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](136, "img", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "div", 115)(138, "ion-label", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](139, "Seater");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](140, "ion-col")(141, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_2_Template_div_click_141_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterBusType(ctx_r1.subdomain == "abct" ? "sprinter" : "sleeper"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](142, "img", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](143, "div", 115)(144, "ion-label", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](145, "Sleeper");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](146, "div", 103)(147, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_2_Template_div_click_147_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.togglePoints("boarding"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](148, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](149, " Boarding Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](150, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](151, "ion-icon", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](152, ShortFilterComponent_ng_container_2_ion_row_152_Template, 3, 1, "ion-row", 4)(153, ShortFilterComponent_ng_container_2_div_153_Template, 5, 2, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](154, "div", 103)(155, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_2_Template_div_click_155_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.togglePoints("dropping"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](156, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](157, " Dropping Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](158, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](159, "ion-icon", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](160, ShortFilterComponent_ng_container_2_ion_row_160_Template, 3, 1, "ion-row", 4)(161, ShortFilterComponent_ng_container_2_div_161_Template, 3, 2, "div", 122)(162, ShortFilterComponent_ng_container_2_ng_template_162_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](164, "ion-footer")(165, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](166, "ion-col", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](167, "ion-col", 124)(168, "ion-button", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_2_Template_ion_button_click_168_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.clearFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](169, "Reset Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](170, "ion-col", 124)(171, "ion-button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShortFilterComponent_ng_container_2_Template_ion_button_click_171_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.dismiss(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](172, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](173, "ion-col", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.checkSortBy("early_depature") ? "ourbus_sort_by_div_selected" : "ourbus_sort_by_div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.checkSortBy("early_depature"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.checkSortBy("early_depature"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.checkSortBy("early_depature"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.checkSortBy("early_depature"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.checkSortBy("drop_time") ? "ourbus_sort_by_div_selected" : "ourbus_sort_by_div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.checkSortBy("drop_time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.checkSortBy("drop_time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.checkSortBy("drop_time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.checkSortBy("drop_time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.checkSortBy("cheapest_first") ? "ourbus_sort_by_div_selected" : "ourbus_sort_by_div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.checkSortBy("cheapest_first"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.checkSortBy("cheapest_first"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.checkSortBy("cheapest_first"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.checkSortBy("cheapest_first"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](45, _c8, ctx_r1.checkforDepartureSourceFilter("noon"), !ctx_r1.checkforDepartureSourceFilter("noon")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.checkforDepartureSourceFilter("noon") ? "./assets/icon/ourbus_selected_morning.svg" : "./assets/icon/ourbus_morning.svg", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](48, _c8, ctx_r1.checkforDepartureSourceFilter("eve"), !ctx_r1.checkforDepartureSourceFilter("eve")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.checkforDepartureSourceFilter("eve") ? "./assets/icon/ourbus_noon_selected.svg" : "./assets/icon/ourbus_noon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](51, _c8, ctx_r1.checkforDepartureSourceFilter("night"), !ctx_r1.checkforDepartureSourceFilter("night")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.checkforDepartureSourceFilter("night") ? "./assets/icon/ourbus_selected_eve.svg" : "./assets/icon/ourbus_eve.svg", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](54, _c8, ctx_r1.checkforDepartureSourceFilter("morning"), !ctx_r1.checkforDepartureSourceFilter("morning")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.checkforDepartureSourceFilter("morning") ? "./assets/icon/ourbus_selected_night.svg" : "./assets/icon/ourbus_night.svg", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](57, _c8, ctx_r1.checkforDepartureDestinationFilter("noon"), !ctx_r1.checkforDepartureDestinationFilter("noon")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.checkforDepartureDestinationFilter("noon") ? "./assets/icon/ourbus_selected_morning.svg" : "./assets/icon/ourbus_morning.svg", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](60, _c8, ctx_r1.checkforDepartureDestinationFilter("eve"), !ctx_r1.checkforDepartureDestinationFilter("eve")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.checkforDepartureDestinationFilter("eve") ? "./assets/icon/ourbus_noon_selected.svg" : "./assets/icon/ourbus_noon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](63, _c8, ctx_r1.checkforDepartureDestinationFilter("night"), !ctx_r1.checkforDepartureDestinationFilter("night")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.checkforDepartureDestinationFilter("night") ? "./assets/icon/ourbus_selected_eve.svg" : "./assets/icon/ourbus_eve.svg", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](66, _c8, ctx_r1.checkforDepartureDestinationFilter("morning"), !ctx_r1.checkforDepartureDestinationFilter("morning")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.checkforDepartureDestinationFilter("morning") ? "./assets/icon/ourbus_selected_night.svg" : "./assets/icon/ourbus_night.svg", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](69, _c8, ctx_r1.checkBusType("ac"), !ctx_r1.checkBusType("ac")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", !ctx_r1.checkBusType("ac") ? "./assets/icon/ourbus_ac.svg" : "./assets/icon/ourbus_ac_selected.svg", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](72, _c8, ctx_r1.checkBusType("nonac"), !ctx_r1.checkBusType("nonac")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", !ctx_r1.checkBusType("nonac") ? "./assets/icon/ourbus_nonac.svg" : "./assets/icon/ourbus_nonac_selected.svg", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](75, _c8, ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "shuttle" : "semisleeper"), !ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "shuttle" : "semisleeper")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", !ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "shuttle" : "semisleeper") ? "./assets/icon/ourbus_seater.svg" : "./assets/icon/ourbus_seater_selected.svg", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](78, _c8, ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "sprinter" : "sleeper"), !ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "sprinter" : "sleeper")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "sprinter" : "sleeper") ? "./assets/icon/ourbus_sleeperseat.svg" : "./assets/icon/ourbus_sleeperseat_nonSelect.svg", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("name", ctx_r1.arrowIconBpoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.showBoardingPoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.showBoardingPoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("name", ctx_r1.arrowIconDpoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.showDroppingPoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.showDroppingPoints);
  }
}
class ShortFilterComponent {
  constructor(navParams, modalCtrl, commonStorage, util, apiFacory, appData) {
    this.modalCtrl = modalCtrl;
    this.commonStorage = commonStorage;
    this.util = util;
    this.apiFacory = apiFacory;
    this.appData = appData;
    this.filterValues = {
      sortBy: '',
      busType: [],
      sourceDepartureTime: [],
      destinationDepartureTime: [],
      boardingPoint: [],
      droppingPoint: []
    };
    this.closeModal = {};
    this.boardingPoint = [];
    this.droppingPoint = [];
    this.selectedbp = [];
    this.selecteddp = [];
    this.searchTerm = '';
    this.filteredBoardingPoints = [];
    this.searchTerm2 = '';
    this.filteredDroppingPoints = [];
    this.showBoardingPoints = false;
    this.showDroppingPoints = false;
    this.arrowIconBpoints = 'chevron-down-outline';
    this.arrowIconDpoints = 'chevron-down-outline';
    this.isIos = false;
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    this.appData.newTheme = this.util.getNewTheme();
    this.origin = navParams.get('origin');
    this.destination = navParams.get('destination');
    this.filterValues = navParams.get('filData');
    this.closeModal = JSON.parse(JSON.stringify(navParams.get('filData')));
    this.subdomain = this.commonStorage.getItem("metaData").subdomain;
    this.getdate = navParams.get('getdate');
    this.metaData = this.commonStorage.getItem("metaData");
    this.apiFacory.getBPDP(this.origin.id, this.destination.id, this.getdate).subscribe(res => {
      if (res.code == 200) {
        this.boardingPoint = res.boarding_points;
        this.droppingPoint = res.dropping_points;
        this.filteredBoardingPoints = this.boardingPoint;
        this.filteredDroppingPoints = this.droppingPoint;
      } else {
        this.boardingPoint = [];
        this.droppingPoint = [];
        this.filteredBoardingPoints = this.boardingPoint;
        this.filteredDroppingPoints = this.droppingPoint;
      }
    }, err => {
      this.boardingPoint = [];
      this.droppingPoint = [];
    });
    if (this.filterValues['droppingPoint'] && this.filterValues['droppingPoint'].length != 0) {
      this.selecteddp = this.filterValues['droppingPoint'];
    }
    if (this.filterValues['boradingPoint'] && this.filterValues['boradingPoint'].length != 0) {
      this.selectedbp = this.filterValues['boradingPoint'];
    }
  }
  filterBoardingPoints(e) {
    this.filteredBoardingPoints = this.boardingPoint.filter(point => point.name.toLowerCase().includes(e.detail.value.toLowerCase()));
  }
  filterDroppingPoints(e) {
    this.filteredDroppingPoints = this.droppingPoint.filter(point => point.name.toLowerCase().includes(e.detail.value.toLowerCase()));
  }
  ngOnInit() {}
  filterDepatureTimeSource(type) {
    let index = this.filterValues['sourceDepartureTime'].indexOf(type);
    if (index > -1) {
      this.filterValues['sourceDepartureTime'].splice(index, 1);
    } else {
      this.filterValues['sourceDepartureTime'].push(type);
    }
  }
  checkforDepartureSourceFilter(type) {
    return this.filterValues['sourceDepartureTime'].indexOf(type) > -1;
  }
  filterDepatureTimeDestination(type) {
    let index = this.filterValues['destinationDepartureTime'].indexOf(type);
    if (index > -1) {
      this.filterValues['destinationDepartureTime'].splice(index, 1);
    } else {
      this.filterValues['destinationDepartureTime'].push(type);
    }
  }
  checkforDepartureDestinationFilter(type) {
    return this.filterValues['destinationDepartureTime'].indexOf(type) > -1;
  }
  filterBusType(type) {
    let index = this.filterValues['busType'].indexOf(type);
    if (index > -1) {
      this.filterValues['busType'].splice(index, 1);
    } else if (this.filterValues['busType'].length == 0) {
      this.filterValues['busType'].push(type);
    } else if (this.filterValues['busType'].length == 1) {
      this.filterByTwoitem(type);
    } else if (this.filterValues['busType'].length == 2) {
      // this.filterValues['busType'].splice(0, 1);
      // this.filterByTwoitem(type);
      if (type == (this.subdomain == 'abct' ? 'shuttle' : 'semisleeper')) {
        let non = this.filterValues['busType'].indexOf(this.subdomain == 'abct' ? 'sprinter' : 'sleeper');
        this.filterValues['busType'].splice(non, 1);
        this.filterByTwoitem(type);
      } else if (type == (this.subdomain == 'abct' ? 'sprinter' : 'sleeper')) {
        let non = this.filterValues['busType'].indexOf(this.subdomain == 'abct' ? 'shuttle' : 'semisleeper');
        this.filterValues['busType'].splice(non, 1);
        this.filterByTwoitem(type);
      } else if (type == "nonac") {
        let non = this.filterValues['busType'].indexOf("ac");
        this.filterValues['busType'].splice(non, 1);
        this.filterByTwoitem(type);
      } else {
        let non = this.filterValues['busType'].indexOf("nonac");
        this.filterValues['busType'].splice(non, 1);
        this.filterByTwoitem(type);
      }
    }
  }
  filterByTwoitem(type) {
    if (this.filterValues['busType'][0] == (this.subdomain == 'abct' ? 'sprinter' : 'sleeper')) {
      if (type == "ac") {
        this.filterValues['busType'].push(type);
      } else if (type == "nonac") {
        this.filterValues['busType'].push(type);
      } else {
        this.singleSelect(type);
      }
    } else if (this.filterValues['busType'][0] == (this.subdomain == 'abct' ? 'shuttle' : 'semisleeper')) {
      if (type == "ac") {
        this.filterValues['busType'].push(type);
      } else if (type == "nonac") {
        this.filterValues['busType'].push(type);
      } else {
        this.singleSelect(type);
      }
    } else if (this.filterValues['busType'][0] == "ac") {
      if (type == (this.subdomain == 'abct' ? 'sprinter' : 'sleeper')) {
        this.filterValues['busType'].push(type);
      } else if (type == (this.subdomain == 'abct' ? 'shuttle' : 'semisleeper')) {
        this.filterValues['busType'].push(type);
      } else {
        this.singleSelect(type);
      }
    } else if (this.filterValues['busType'][0] == "nonac") {
      if (type == (this.subdomain == 'abct' ? 'sprinter' : 'sleeper')) {
        this.filterValues['busType'].push(type);
      } else if (type == (this.subdomain == 'abct' ? 'shuttle' : 'semisleeper')) {
        this.filterValues['busType'].push(type);
      } else {
        this.singleSelect(type);
      }
    }
  }
  singleSelect(type) {
    this.filterValues['busType'] = [];
    this.filterValues['busType'].push(type);
  }
  checkBusType(type) {
    return this.filterValues['busType'].indexOf(type) > -1;
  }
  dismiss(type) {
    if (type == 1) {
      this.modalCtrl.dismiss(this.closeModal);
    } else {
      this.modalCtrl.dismiss(this.filterValues);
    }
  }
  sortBy(data) {
    this.filterValues.sortBy = data;
  }
  checkSortBy(value) {
    return this.filterValues.sortBy === value;
  }
  clearFilter() {
    this.filterValues = {
      sortBy: '',
      busType: [],
      sourceDepartureTime: [],
      destinationDepartureTime: [],
      boardingPoint: [],
      droppingPoint: []
    };
    this.selectedbp = [];
    this.selecteddp = [];
    this.closeModal = this.filterValues;
    this.getApi();
    this.util.showToast("Filters cleared");
  }
  getApi() {
    this.apiFacory.getBPDP(this.origin.id, this.destination.id, this.getdate).subscribe(res => {
      if (res.code == 200) {
        this.boardingPoint = res.boarding_points;
        this.droppingPoint = res.dropping_points;
        this.selectedbp = [];
        this.selecteddp = [];
        this.filterValues['boradingPoint'] = [];
        this.filterValues['droppingPoint'] = [];
        this.filteredBoardingPoints = this.boardingPoint;
        this.filteredDroppingPoints = this.droppingPoint;
      } else {
        this.boardingPoint = [];
        this.droppingPoint = [];
        this.filteredBoardingPoints = this.boardingPoint;
        this.filteredDroppingPoints = this.droppingPoint;
        this.selectedbp = [];
        this.selecteddp = [];
      }
    }, err => {
      this.boardingPoint = [];
      this.droppingPoint = [];
    });
  }
  isSelectedBP(id) {
    return this.selectedbp.includes(id);
  }
  isSelectedDP(id) {
    return this.selecteddp.includes(id);
  }
  setFilters(type, key) {
    switch (key) {
      case 'bp':
        {
          let index = this.filterValues['boradingPoint'] ? this.filterValues['boradingPoint'].length : 0;
          if (index > 0) {
            if (!this.filterValues['boradingPoint'].includes(type)) {
              this.filterValues['boradingPoint'].push(type);
              // this.selectedbp.push(type);
            } else {
              let index = this.filterValues['boradingPoint'].indexOf(type);
              this.filterValues['boradingPoint'].splice(index, 1);
              // this.selectedbp.splice(index, 1);
            }
          } else {
            this.filterValues['boradingPoint'].push(type);
            this.selectedbp.push(type);
          }
          break;
        }
      case 'dp':
        {
          let index = this.filterValues['droppingPoint'] ? this.filterValues['droppingPoint'].length : 0;
          if (index > 0) {
            if (!this.filterValues['droppingPoint'].includes(type)) {
              this.filterValues['droppingPoint'].push(type);
            } else {
              let index = this.filterValues['droppingPoint'].indexOf(type);
              this.filterValues['droppingPoint'].splice(index, 1);
            }
          } else {
            this.filterValues['droppingPoint'].push(type);
            this.selectedbp.push(type);
          }
          break;
        }
      default:
        {
          //statements;
          break;
        }
    }
  }
  togglePoints(type) {
    if (type === 'boarding') {
      this.showBoardingPoints = !this.showBoardingPoints;
      this.arrowIconBpoints = this.showBoardingPoints ? 'chevron-up-outline' : 'chevron-down-outline';
      if (this.showBoardingPoints) {
        setTimeout(() => {
          this.scrollToDiv();
        }, 100);
      }
    } else if (type === 'dropping') {
      this.showDroppingPoints = !this.showDroppingPoints;
      this.arrowIconDpoints = this.showDroppingPoints ? 'chevron-up-outline' : 'chevron-down-outline';
      if (this.showDroppingPoints) {
        setTimeout(() => {
          this.scrollToDiv2();
        }, 100);
      }
    }
  }
  scrollToDiv() {
    if (this.targetDiv) {
      this.targetDiv.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  scrollToDiv2() {
    if (this.targetDiv2) {
      this.targetDiv2.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
_ShortFilterComponent = ShortFilterComponent;
_ShortFilterComponent.ɵfac = function ShortFilterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ShortFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_1__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_2__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_3__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_4__.AppData));
};
_ShortFilterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _ShortFilterComponent,
  selectors: [["app-short-filter"]],
  viewQuery: function ShortFilterComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.targetDiv = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.targetDiv2 = _t.first);
    }
  },
  inputs: {
    origin: "origin",
    destination: "destination"
  },
  decls: 3,
  vars: 3,
  consts: [["noResults", ""], ["noResultss", ""], ["targetDiv", ""], ["targetDiv2", ""], [4, "ngIf"], [1, "ion-no-border", 3, "ngStyle"], ["mode", "md", 1, "themeone-bg-cl"], [1, "themeone-head", 2, "margin-right", "17%"], ["slot", "start"], [2, "color", "#333333", 3, "click"], ["padding", "", 1, "theme1", 2, "padding-bottom", "75px !important", "--background", "white"], [1, "themeone-pd-0"], [1, "themeone-routes-box", "mr-0"], [1, "theme1", "themeone-sort-lable1"], [1, "themeone-departure-row1"], ["size", "5.5", 1, "themeone-departure-col1", 3, "click", "ngClass"], [1, "themeone-filter-icon"], ["src", "./assets/icon/cbusevening.svg", 2, "height", "25px", "width", "25px"], [1, "themeone-filter-time"], [1, "themeone-filter-head"], [2, "margin-top", "5px"], ["size", "5.5", "offset", "1", 1, "themeone-departure-col1", 3, "click", "ngClass"], ["src", "./assets/icon/cbusearlymorning.svg", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/cbusmorning.svg", 2, "height", "25px", "width", "25px"], ["src", "./assets/icon/cbusnight.svg", 2, "height", "25px", "width", "25px"], [1, "themeone-pd-0", 2, "display", "none"], ["class", "theme1 themeone-pd-0", 4, "ngIf"], [1, "mrt-15", "pd-0", 2, "margin-top", "0px"], [1, "themeone-sort-lable1"], ["mode", "md", 2, "width", "100%", 3, "ngModelChange", "ngModel"], ["lines", "none"], [1, "txt-lbl", 2, "color", "#333333"], ["slot", "start", "value", "cheapest_first", 2, "--color-checked", "#191966"], ["slot", "start", "value", "early_depature", 2, "--color-checked", "#191966"], ["slot", "start", "value", "late_depature", 2, "--color-checked", "#191966"], [1, "theme1"], ["ion-button", "", 1, "bottom", 2, "box-shadow", "none", "justify-content", "center", "margin-bottom", "10px"], [2, "width", "93%", "display", "flex"], [1, "seats", "center-hr"], [1, "seat-lbl", 2, "color", "#1919668f", "font-size", "16px", 3, "click"], [1, "pay", "center", 2, "border-radius", "5px", "background", "#F2C21A", "border", "none", "-webkit-text-fill-color", "#191966", "color", "#191966", "padding-bottom", "0px"], [3, "click"], [1, "theme1", "themeone-pd-0"], [1, "themeone-sort-lable1", 2, "margin", "13px 0px 15px 0px"], [2, "padding", "0px 16px", "display", "-webkit-box"], [1, "themeone-filterbus-type", 3, "click", "ngClass"], ["src", "./assets/icon/cbusac.svg", 2, "height", "25px", "width", "25px"], [2, "margin-top", "4px", "margin-left", "5px"], [1, "themeone-filterbus-type", 2, "margin-left", "10px", 3, "click", "ngClass"], ["src", "./assets/icon/cbusnonac.svg", 2, "height", "25px", "width", "25px"], [2, "margin-left", "5px", "margin-top", "4px"], ["src", "./assets/icon/cbusseater.svg", 2, "height", "25px", "width", "25px"], [2, "padding", "11px 16px", "display", "-webkit-box"], ["src", "./assets/icon/cbus-filter-seater.svg", 2, "height", "25px", "width", "25px"], [1, "bg-cl"], [1, "head", 2, "margin-left", "15px"], ["slot", "end"], ["mode", "md", 3, "click"], ["name", "close", 2, "color", "#5b5757"], ["padding", "", 2, "padding-bottom", "75px !important"], [1, "pd-0"], [1, "routes-box", "mr-0"], [1, "sort-lable"], [2, "width", "100%"], [1, "txt-lbl"], ["color", "red", "slot", "start", "value", "cheapest_first", 2, "--ion-color-base", "var(--iconsAndButtonsColor) !important"], ["color", "red", "slot", "start", "value", "early_depature", 2, "--ion-color-base", "var(--iconsAndButtonsColor) !important"], ["color", "red", "slot", "start", "value", "late_depature", 2, "--ion-color-base", "var(--iconsAndButtonsColor) !important"], [1, "divider"], [1, "sort-lable1", 2, "margin-bottom", "10px"], [1, "bus-time"], [1, "coll1"], [1, "item", "seabird_cmn_padding", 3, "click", "ngClass"], ["src", "./assets/icon/Timings/Early Morning Checkin.svg", 2, "font-size", "28px"], [3, "ngClass"], ["src", "./assets/icon/Timings/6AM Checkin.svg", 2, "font-size", "28px"], ["src", "./assets/icon/Timings/Noon.svg", 2, "font-size", "28px"], ["src", "./assets/icon/Timings/Evening.svg", 2, "font-size", "28px"], [1, "sort-lable1"], [1, "coll", 2, "margin-top", "0px"], [2, "font-size", "20px", 3, "src"], ["src", "./assets/icon/Available.svg", 2, "font-size", "20px"], ["src", "./assets/icon/No AC.svg", 2, "font-size", "20px"], [3, "ngModelChange", "ionInput", "ngModel"], ["style", "height: 240px;\n        overflow-y: scroll;", 4, "ngIf", "ngIfElse"], [2, "margin-bottom", "24px"], ["ion-button", ""], ["size", "6", 2, "display", "flex", "align-items", "center", "justify-content", "center"], [2, "margin", "12px", "font-size", "13px", 3, "click"], [2, "display", "flex", "align-items", "center", "justify-content", "center", "background", "var(--iconsAndButtonsColor)", "color", "white"], [2, "height", "240px", "overflow-y", "scroll"], ["style", "margin: 0px 11px 0px 11px;", 4, "ngFor", "ngForOf"], [2, "margin", "0px 11px 0px 11px"], ["size", "1"], [2, "display", "flex", "align-items", "center"], ["mode", "md", 3, "ionChange", "checked", "value"], ["size", "11"], [2, "text-align", "center"], [2, "text-align", "center", "margin-bottom", "14px"], [1, "ourbustheme"], [1, "head", 2, "margin-left", "15px", "font-size", "16px", "text-align", "left"], ["name", "close", 2, "color", "#000000"], [1, "ourbustheme", 2, "--background", "#FCFCFC"], [2, "margin", "15px", "border-bottom", "1px solid #EFEFEF"], [2, "color", "#2D2D2D", "font-weight", "700"], ["size", "6"], [3, "click", "ngClass"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["style", "margin-top: -1px;", 4, "ngIf"], [2, "color", "#2D2D2D", "font-weight", "700", "font-size", "16px"], [2, "color", "#2D2D2D", "font-size", "16px"], [2, "padding-inline-start", "0px"], [1, "align-center"], [1, "content-wrapper", 3, "click", "ngClass"], [1, "left-image", 3, "src"], [1, "text-container"], [1, "text-line1"], [1, "text-line2"], [1, "div", 3, "click"], [1, "header_div"], [2, "width", "24px", "height", "24px", "position", "relative"], [3, "name"], ["style", "margin-top: 15px;", 4, "ngIf"], ["size", "0.5"], ["size", "5.5"], ["expand", "block", "fill", "outline", 2, "--border-color", "var(--iconsAndButtonsColor)", "--color", "var(--iconsAndButtonsColor)", "--border-radius", "9px", 3, "click"], ["expand", "block", 2, "--background", "var(--iconsAndButtonsColor)", "--color", "var(--primaryText)", "--border-radius", "9px", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["id", "mask0_235_52802", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "20", "height", "20", 2, "mask-type", "alpha"], ["width", "20", "height", "20", "fill", "#C4C4C4"], ["mask", "url(#mask0_235_52802)"], ["d", "M16.3465 9.66595C16.3465 5.65773 13.808 3.65363 10.0002 3.65363C6.19235 3.65363 3.65381 5.65773 3.65381 9.66595V10.334C3.65381 13.6742 6.19235 16.3463 10.0002 16.3463C13.808 16.3463 16.3465 13.6742 16.3465 10.334V9.66595Z", "stroke", "#4CAF50", "stroke-width", "1.04167"], ["d", "M9.88627 6.8819V10.7916L12.3111 9.83577", "stroke", "#4CAF50", "stroke-width", "1.04167", "stroke-linecap", "round", "stroke-linejoin", "round"], [2, "margin-top", "-1px"], ["d", "M16.3465 9.66595C16.3465 5.65773 13.808 3.65363 10.0002 3.65363C6.19235 3.65363 3.65381 5.65773 3.65381 9.66595V10.334C3.65381 13.6742 6.19235 16.3463 10.0002 16.3463C13.808 16.3463 16.3465 13.6742 16.3465 10.334V9.66595Z", "stroke", "#747474", "stroke-width", "1.04167"], ["d", "M9.88627 6.8819V10.7916L12.3111 9.83577", "stroke", "#747474", "stroke-width", "1.04167", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M16.3726 6.62476L16.7791 6.29217C17.1224 6.01129 17.072 5.47216 16.6826 5.25976L16.0468 4.913C15.8603 4.81125 15.6348 4.81125 15.4483 4.913L14.4976 5.43157", "stroke", "#4CAF50", "stroke-width", "0.78125"], ["d", "M3.44943 9.25H5.5M3.44943 12.25H5.5M2.5 10.7476H5.20468", "stroke", "#4CAF50", "stroke-width", "0.78125", "stroke-linecap", "round"], ["d", "M11.499 4.75V2.5", "stroke", "#4CAF50", "stroke-width", "0.78125"], ["d", "M10 2.5H13", "stroke", "#4CAF50", "stroke-width", "0.875", "stroke-linecap", "round"], ["d", "M5.53705 8.05487C6.43301 5.85146 8.51383 4.74976 11.2757 4.74976C15.0091 4.74976 17.498 6.76291 17.498 10.7892V11.4603C17.498 14.8155 15.0091 17.4998 11.2757 17.4998C8.47295 17.4998 6.37156 15.987 5.49805 13.8132", "stroke", "#4CAF50", "stroke-width", "0.78125", "stroke-linecap", "round"], ["d", "M10.7319 7.68186C10.7319 7.89759 10.9068 8.07248 11.1226 8.07248C11.3383 8.07248 11.5132 7.89759 11.5132 7.68186V6.64993C12.729 6.71275 13.7069 7.07292 14.3953 7.69402C15.1262 8.35349 15.5783 9.35004 15.6056 10.7338H14.7473C14.5316 10.7338 14.3567 10.9087 14.3567 11.1244C14.3567 11.3401 14.5316 11.515 14.7473 11.515H15.605C15.5422 13.6809 13.9581 15.4272 11.5132 15.5955V14.7182C11.5132 14.5024 11.3383 14.3276 11.1226 14.3276C10.9068 14.3276 10.7319 14.5024 10.7319 14.7182V15.5955C8.28702 15.4272 6.70292 13.6809 6.64012 11.515H7.49779C7.71353 11.515 7.88841 11.3401 7.88841 11.1244C7.88841 10.9087 7.71353 10.7338 7.49779 10.7338H6.6395C6.66684 9.35004 7.11894 8.35349 7.84986 7.69402C8.53824 7.07292 9.51615 6.71275 10.7319 6.64993V7.68186Z", "stroke", "#4CAF50", "stroke-width", "0.78125", "stroke-linecap", "round"], ["d", "M10.7495 10L10.7495 12.25L12.2495 11.8467", "stroke", "#4CAF50", "stroke-width", "0.78125", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M16.3726 6.62476L16.7791 6.29217C17.1224 6.01129 17.072 5.47216 16.6826 5.25976L16.0468 4.913C15.8603 4.81125 15.6348 4.81125 15.4483 4.913L14.4976 5.43157", "stroke", "#747474", "stroke-width", "0.78125"], ["d", "M3.44943 9.25H5.5M3.44943 12.25H5.5M2.5 10.7476H5.20468", "stroke", "#747474", "stroke-width", "0.78125", "stroke-linecap", "round"], ["d", "M11.499 4.75V2.5", "stroke", "#747474", "stroke-width", "0.78125"], ["d", "M10 2.5H13", "stroke", "#747474", "stroke-width", "0.875", "stroke-linecap", "round"], ["d", "M5.53705 8.05487C6.43301 5.85146 8.51383 4.74976 11.2757 4.74976C15.0091 4.74976 17.498 6.76291 17.498 10.7892V11.4603C17.498 14.8155 15.0091 17.4998 11.2757 17.4998C8.47295 17.4998 6.37156 15.987 5.49805 13.8132", "stroke", "#747474", "stroke-width", "0.78125", "stroke-linecap", "round"], ["d", "M10.7319 7.68186C10.7319 7.89759 10.9068 8.07248 11.1226 8.07248C11.3383 8.07248 11.5132 7.89759 11.5132 7.68186V6.64993C12.729 6.71275 13.7069 7.07292 14.3953 7.69402C15.1262 8.35349 15.5783 9.35004 15.6056 10.7338H14.7473C14.5316 10.7338 14.3567 10.9087 14.3567 11.1244C14.3567 11.3401 14.5316 11.515 14.7473 11.515H15.605C15.5422 13.6809 13.9581 15.4272 11.5132 15.5955V14.7182C11.5132 14.5024 11.3383 14.3276 11.1226 14.3276C10.9068 14.3276 10.7319 14.5024 10.7319 14.7182V15.5955C8.28702 15.4272 6.70292 13.6809 6.64012 11.515H7.49779C7.71353 11.515 7.88841 11.3401 7.88841 11.1244C7.88841 10.9087 7.71353 10.7338 7.49779 10.7338H6.6395C6.66684 9.35004 7.11894 8.35349 7.84986 7.69402C8.53824 7.07292 9.51615 6.71275 10.7319 6.64993V7.68186Z", "stroke", "#747474", "stroke-width", "0.78125", "stroke-linecap", "round"], ["d", "M10.7495 10L10.7495 12.25L12.2495 11.8467", "stroke", "#747474", "stroke-width", "0.78125", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M16.25 6.25C16.25 6.41576 16.1842 6.57473 16.0669 6.69194C15.9497 6.80915 15.7908 6.875 15.625 6.875H13.1133C13.1203 6.97813 13.125 7.08203 13.125 7.1875C13.1236 8.43026 12.6292 9.6217 11.7505 10.5005C10.8717 11.3792 9.68026 11.8736 8.4375 11.875H7.24141L12.9203 17.0375C12.9822 17.0924 13.0325 17.159 13.0685 17.2335C13.1044 17.308 13.1252 17.3889 13.1296 17.4715C13.1341 17.5541 13.1221 17.6367 13.0944 17.7146C13.0666 17.7925 13.0237 17.8642 12.9681 17.9254C12.9125 17.9866 12.8452 18.0361 12.7703 18.0712C12.6954 18.1062 12.6143 18.126 12.5316 18.1295C12.449 18.1329 12.3665 18.12 12.2889 18.0913C12.2113 18.0626 12.1402 18.0189 12.0797 17.9625L5.20469 11.7125C5.11134 11.6277 5.04585 11.5165 5.01683 11.3938C4.98781 11.271 4.99662 11.1423 5.04209 11.0247C5.08757 10.907 5.16759 10.8059 5.27163 10.7345C5.37566 10.6632 5.49885 10.625 5.625 10.625H8.4375C9.34886 10.624 10.2226 10.2615 10.867 9.61704C11.5115 8.97261 11.874 8.09886 11.875 7.1875C11.875 7.08203 11.8695 6.97813 11.8602 6.875H5.625C5.45924 6.875 5.30027 6.80915 5.18306 6.69194C5.06585 6.57473 5 6.41576 5 6.25C5 6.08424 5.06585 5.92527 5.18306 5.80806C5.30027 5.69085 5.45924 5.625 5.625 5.625H11.4977C11.2098 5.06091 10.7717 4.5873 10.2317 4.25644C9.6917 3.92557 9.0708 3.75031 8.4375 3.75H5.625C5.45924 3.75 5.30027 3.68415 5.18306 3.56694C5.06585 3.44973 5 3.29076 5 3.125C5 2.95924 5.06585 2.80027 5.18306 2.68306C5.30027 2.56585 5.45924 2.5 5.625 2.5H15.625C15.7908 2.5 15.9497 2.56585 16.0669 2.68306C16.1842 2.80027 16.25 2.95924 16.25 3.125C16.25 3.29076 16.1842 3.44973 16.0669 3.56694C15.9497 3.68415 15.7908 3.75 15.625 3.75H11.6203C12.1778 4.26589 12.6019 4.90927 12.8562 5.625H15.625C15.7908 5.625 15.9497 5.69085 16.0669 5.80806C16.1842 5.92527 16.25 6.08424 16.25 6.25Z", "fill", "#4CAF50"], ["d", "M16.25 6.25C16.25 6.41576 16.1842 6.57473 16.0669 6.69194C15.9497 6.80915 15.7908 6.875 15.625 6.875H13.1133C13.1203 6.97813 13.125 7.08203 13.125 7.1875C13.1236 8.43026 12.6292 9.6217 11.7505 10.5005C10.8717 11.3792 9.68026 11.8736 8.4375 11.875H7.24141L12.9203 17.0375C12.9822 17.0924 13.0325 17.159 13.0685 17.2335C13.1044 17.308 13.1252 17.3889 13.1296 17.4715C13.1341 17.5541 13.1221 17.6367 13.0944 17.7146C13.0666 17.7925 13.0237 17.8642 12.9681 17.9254C12.9125 17.9866 12.8452 18.0361 12.7703 18.0712C12.6954 18.1062 12.6143 18.126 12.5316 18.1295C12.449 18.1329 12.3665 18.12 12.2889 18.0913C12.2113 18.0626 12.1402 18.0189 12.0797 17.9625L5.20469 11.7125C5.11134 11.6277 5.04585 11.5165 5.01683 11.3938C4.98781 11.271 4.99662 11.1423 5.04209 11.0247C5.08757 10.907 5.16759 10.8059 5.27163 10.7345C5.37566 10.6632 5.49885 10.625 5.625 10.625H8.4375C9.34886 10.624 10.2226 10.2615 10.867 9.61704C11.5115 8.97261 11.874 8.09886 11.875 7.1875C11.875 7.08203 11.8695 6.97813 11.8602 6.875H5.625C5.45924 6.875 5.30027 6.80915 5.18306 6.69194C5.06585 6.57473 5 6.41576 5 6.25C5 6.08424 5.06585 5.92527 5.18306 5.80806C5.30027 5.69085 5.45924 5.625 5.625 5.625H11.4977C11.2098 5.06091 10.7717 4.5873 10.2317 4.25644C9.6917 3.92557 9.0708 3.75031 8.4375 3.75H5.625C5.45924 3.75 5.30027 3.68415 5.18306 3.56694C5.06585 3.44973 5 3.29076 5 3.125C5 2.95924 5.06585 2.80027 5.18306 2.68306C5.30027 2.56585 5.45924 2.5 5.625 2.5H15.625C15.7908 2.5 15.9497 2.56585 16.0669 2.68306C16.1842 2.80027 16.25 2.95924 16.25 3.125C16.25 3.29076 16.1842 3.44973 16.0669 3.56694C15.9497 3.68415 15.7908 3.75 15.625 3.75H11.6203C12.1778 4.26589 12.6019 4.90927 12.8562 5.625H15.625C15.7908 5.625 15.9497 5.69085 16.0669 5.80806C16.1842 5.92527 16.25 6.08424 16.25 6.25Z", "fill", "#747474"], [2, "margin-top", "15px"], ["style", "height: auto; overflow-y: scroll;", 4, "ngIf", "ngIfElse"], [2, "height", "auto", "overflow-y", "scroll"], ["style", "margin: 0px;", 4, "ngFor", "ngForOf"], [2, "margin", "0px"], ["size", "1.5"], ["mode", "md", 1, "bpdpcheckbox", 3, "ionChange", "checked", "value"], ["size", "10.5"], [1, "no-results-message"], ["style", "height: auto;\n                  overflow-y: scroll;", 4, "ngIf", "ngIfElse"]],
  template: function ShortFilterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ShortFilterComponent_ng_container_0_Template, 118, 37, "ng-container", 4)(1, ShortFilterComponent_ng_container_1_Template, 134, 109, "ng-container", 4)(2, ShortFilterComponent_ng_container_2_Template, 174, 81, "ng-container", 4);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "seabirdTheme" || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle],
  styles: [".head[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.bg-cl[_ngcontent-%COMP%] {\n  --background: var(--primary) !important;\n}\n\n.routes-box[_ngcontent-%COMP%] {\n  background-color: white;\n  margin: 0;\n  box-shadow: none;\n}\n\n.txt-lbl[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n}\n\nmain[_ngcontent-%COMP%] {\n  padding-bottom: 75px;\n}\n\n.inner-scroll[_ngcontent-%COMP%] {\n  padding-bottom: 75px;\n}\n\n.mrt-15[_ngcontent-%COMP%] {\n  margin: 15px 0 0;\n}\n\n.pd-0[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --ion-background-color: var(--viewBgColor);\n}\n\n.list-md[_ngcontent-%COMP%] {\n  background: white;\n  padding: 0;\n}\n\n.list-md[_ngcontent-%COMP%]   .item-lines-none[_ngcontent-%COMP%] {\n  --border-width: 0;\n  --inner-border-width: 0;\n  --background: white;\n}\n\n.item[_ngcontent-%COMP%]   .sc-ion-label-md-h[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #3e3e52;\n  padding: 0 12px 2px 0;\n}\n\n.bus-time[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #3e3e52;\n  padding: 8px 16px 13px 15px;\n}\n\n.sort-lable[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: black;\n  font-size: 17px;\n}\n\n.sort-lable1[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: black;\n  font-size: 17px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background: white;\n}\n\nion-col[_ngcontent-%COMP%]    > .text-dark1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 5px;\n  font-size: 15px;\n}\n\n.divider[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  padding: 0;\n  margin-left: 12px;\n  margin-right: 12px;\n}\n\n.coll[_ngcontent-%COMP%] {\n  text-align: justify;\n  margin-top: 20px;\n  font-size: 0.8rem;\n  padding: 0 16px;\n}\n\n.coll[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 25%;\n  \n\n  display: inline-block;\n}\n\n.coll[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 25%;\n  display: inline-block;\n}\n\n.coll1[_ngcontent-%COMP%] {\n  text-align: justify;\n  font-size: 0.8rem;\n  padding: 0 16px;\n}\n\n.coll1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 25%;\n  \n\n  display: inline-block;\n}\n\n.coll1[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 25%;\n  display: inline-block;\n}\n\ndiv.item[_ngcontent-%COMP%] {\n  vertical-align: top;\n  display: inline-block;\n  text-align: center;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 30px;\n}\n\n.caption[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.selected-icon[_ngcontent-%COMP%] {\n  fill: var(--iconsAndButtonsColor);\n  font-size: 28px;\n}\n\n.unselected-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n\ndiv.item[_ngcontent-%COMP%]   .selected-icon[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n  fill: var(--iconsAndButtonsColor);\n  color: var(--iconsAndButtonsColor);\n}\n\n.bottom[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  width: 100vw;\n  height: 54px;\n  z-index: 10;\n  bottom: 0;\n  background: #ffffff;\n  font-size: 13px;\n  transition: all linear 0.24s;\n  flex-direction: row;\n  box-shadow: 5px 10px 10px 10px #888888;\n}\n.bottom[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 3px;\n}\n.bottom[_ngcontent-%COMP%]   .seats[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.bottom[_ngcontent-%COMP%]   .seats[_ngcontent-%COMP%]   .seat-lbl[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4a4a4a;\n}\n.bottom[_ngcontent-%COMP%]   .seats[_ngcontent-%COMP%]   .seat-val[_ngcontent-%COMP%] {\n  margin: 0 0 0 5px;\n  font-size: 13px;\n  font-weight: bolder;\n  color: #4a4a4a;\n}\n.bottom[_ngcontent-%COMP%]   .pay[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n  border: 1px solid var(--iconsAndButtonsColor);\n  background-color: var(--iconsAndButtonsColor);\n  font-size: 13px;\n  font-weight: bolder;\n  color: var(--placeholderColor);\n  -webkit-text-fill-color: var(--primaryText);\n}\n.bottom[_ngcontent-%COMP%]   .nt-txt[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n\n.seabird_bottom[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  width: 100vw;\n  height: 54px;\n  z-index: 10;\n  bottom: 6px;\n  background: #ffffff;\n  font-size: 13px;\n  \n\n  \n\n  \n\n}\n.seabird_bottom[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 3px;\n}\n.seabird_bottom[_ngcontent-%COMP%]   .seats[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.seabird_bottom[_ngcontent-%COMP%]   .seats[_ngcontent-%COMP%]   .seat-lbl[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4a4a4a;\n}\n.seabird_bottom[_ngcontent-%COMP%]   .seats[_ngcontent-%COMP%]   .seat-val[_ngcontent-%COMP%] {\n  margin: 0 0 0 5px;\n  font-size: 13px;\n  font-weight: bolder;\n  color: #4a4a4a;\n}\n.seabird_bottom[_ngcontent-%COMP%]   .pay[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n  border: 1px solid var(--iconsAndButtonsColor);\n  background-color: var(--iconsAndButtonsColor);\n  font-size: 13px;\n  font-weight: bolder;\n  color: var(--placeholderColor);\n  -webkit-text-fill-color: var(--primaryText);\n}\n.seabird_bottom[_ngcontent-%COMP%]   .nt-txt[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --background: white;\n}\n\nion-radio[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.no-results-message[_ngcontent-%COMP%] {\n  padding: 0px 20px 20px 20px;\n  text-align: center;\n}\n\n.themeone-head[_ngcontent-%COMP%] {\n  color: #333333;\n  padding: 0;\n  margin: 0;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 26px;\n  letter-spacing: 0em;\n}\n\n.themeone-bg-cl[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  --background: white;\n  -webkit-text-fill-color: #333333 !important;\n  display: initial;\n  text-align: center;\n}\n\n.themeone-routes-box[_ngcontent-%COMP%] {\n  background-color: white;\n  margin: 0;\n  border-radius: 0;\n}\n\n.themeone-sort-lable1[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #333333;\n  margin-top: 0px;\n}\n\n.themeone-departure-row1[_ngcontent-%COMP%] {\n  margin: 10px 16px;\n}\n\n.themeone-departure-col1[_ngcontent-%COMP%] {\n  border: 1px solid rgb(223, 223, 223);\n  border-radius: 10px;\n  padding: 10px 5px;\n  display: -webkit-inline-box;\n}\n\n.themeone-filter-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  display: inline-block;\n}\n.themeone-filter-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  padding-top: 5px;\n}\n\n.themeone-filter-time[_ngcontent-%COMP%] {\n  display: grid;\n  padding-left: 12px;\n}\n\n.themeone-filter-head[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #333333;\n  font-weight: 500;\n}\n\n.themeone-filter-subhead[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #5F5F5F;\n}\n\n.themeone-pd-0[_ngcontent-%COMP%] {\n  padding: 0;\n  border-bottom: 5px solid #EFEFEF;\n}\n\n.themeone-selected-icon[_ngcontent-%COMP%] {\n  border: 1px solid #191966;\n  background: #191966;\n  font-size: 12px;\n  color: #ffffff;\n}\n.themeone-selected-icon[_ngcontent-%COMP%]   .themeone-filter-head[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #ffffff;\n}\n.themeone-selected-icon[_ngcontent-%COMP%]   .themeone-filter-icon[_ngcontent-%COMP%] {\n  filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(328deg) brightness(102%) contrast(101%);\n}\n\n.themeone-selected-icon2[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  font-weight: 500 !important;\n  margin-top: 3px;\n  margin-left: 2px;\n  border: 1px solid #191966;\n  background: #191966;\n  font-size: 12px;\n  color: #ffffff;\n}\n.themeone-selected-icon2[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(328deg) brightness(102%) contrast(101%);\n}\n\n.themeone-filterbus-type[_ngcontent-%COMP%] {\n  border: 1px solid #dfdfdf;\n  border-radius: 10px;\n  padding: 2px 10px 0px 10px;\n  display: -webkit-box;\n}\n\n.typeTitle[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  margin-left: 2px;\n}\n\nhtml.ios[_ngcontent-%COMP%]   ion-modal[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.no-results-message[_ngcontent-%COMP%] {\n  padding: 0px 20px 20px 20px;\n  text-align: center;\n}\n\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_sort_by_div[_ngcontent-%COMP%] {\n  padding: 5px;\n  border-radius: 10px;\n  border: 1px solid #EFEFEF;\n  color: #747474;\n  font-size: 16px;\n  font-weight: 400;\n  display: flex;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_sort_by_div_selected[_ngcontent-%COMP%] {\n  \n\n  padding: 5px;\n  border-radius: 10px;\n  font-size: 16px;\n  font-weight: 400;\n  color: var(--iconsAndButtonsColor);\n  background: #DBEFDC;\n  border: 1px solid var(--iconsAndButtonsColor);\n  display: flex;\n}\n.ourbustheme[_ngcontent-%COMP%]   .align-center[_ngcontent-%COMP%] {\n  align-items: center;\n  margin-left: -6px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 5px;\n  border: 1px solid #EFEFEF;\n  border-radius: 10px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .left-image[_ngcontent-%COMP%] {\n  width: 40px;\n  height: auto;\n  margin-right: 10px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center; \n\n}\n.ourbustheme[_ngcontent-%COMP%]   .text-line1[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 14px;\n  color: #747474;\n}\n.ourbustheme[_ngcontent-%COMP%]   .text-line2[_ngcontent-%COMP%] {\n  color: gray;\n  font-size: 10px;\n  color: #747474;\n}\n.ourbustheme[_ngcontent-%COMP%]   .selected-div[_ngcontent-%COMP%] {\n  background: #DBEFDC;\n  border: 1px solid var(--iconsAndButtonsColor);\n  display: flex;\n  align-items: center;\n  padding: 5px;\n  border-radius: 10px;\n}\n.ourbustheme[_ngcontent-%COMP%]   div.selected-div[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .text-line1[_ngcontent-%COMP%], \n.ourbustheme[_ngcontent-%COMP%]   div.selected-div[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .text-line2[_ngcontent-%COMP%] {\n  color: var(--iconsAndButtonsColor); \n\n}\n.ourbustheme[_ngcontent-%COMP%]   .div[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  justify-content: space-between;\n  align-items: center;\n  display: inline-flex;\n}\n.ourbustheme[_ngcontent-%COMP%]   .header_div[_ngcontent-%COMP%] {\n  color: #1E1E21;\n  font-size: 16px;\n}\n\n.seabird_cmn_padding[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 15px 0px;\n}\n\n.seabird_selected_div[_ngcontent-%COMP%] {\n  font-size: 10px;\n  background: var(--iconsAndButtonsColor);\n  padding: 15px 0px;\n}\n\n.seabird_selected_div[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  filter: brightness(0) invert(1); \n\n}\n\n.caption1[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: white;\n  display: block;\n}\n\nbody[_ngcontent-%COMP%] {\n  padding: 0 constant(safe-area-inset-right) constant(safe-area-inset-bottom) constant(safe-area-inset-left);\n  padding: 0 env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);\n}\n\n.bpdpcheckbox[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  --border-color:var(--iconsAndButtonsColor);\n  --background-checked:var(--iconsAndButtonsColor);\n  --border-color-checked:var(--iconsAndButtonsColor);\n  --checkbox-background-checked: var(--iconsAndButtonsColor);\n}"]
});

/***/ }),

/***/ 71479:
/*!******************************************!*\
  !*** ./node_modules/date-fns/addDays.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDays: () => (/* binding */ addDays),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.js */ 91298);
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ 91490);



/**
 * The {@link addDays} function options.
 */

/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 * @param options - An object with options
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(date, amount, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options === null || options === void 0 ? void 0 : options.in);
  if (isNaN(amount)) return (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)((options === null || options === void 0 ? void 0 : options.in) || date, NaN);

  // If 0 days, no-op to avoid changing times in the hour before end of DST
  if (!amount) return _date;
  _date.setDate(_date.getDate() + amount);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDays);

/***/ }),

/***/ 73446:
/*!***********************************************************!*\
  !*** ./src/app/available-routes/available-routes.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AvailableRoutesPage: () => (/* binding */ AvailableRoutesPage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _pipes_orderby_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipes/orderby.pipe */ 867);
/* harmony import */ var _calendar_modal_calendar_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../calendar-modal/calendar-modal.page */ 70990);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! date-fns */ 40360);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! date-fns */ 84692);
/* harmony import */ var _short_filter_short_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../short-filter/short-filter.component */ 70616);
/* harmony import */ var _source_destination_editor_source_destination_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../source-destination-editor/source-destination-editor.component */ 20352);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 13961);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/theme-service */ 99692);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_exception__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/exception */ 91502);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 87330);
/* harmony import */ var _services_global_data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/global-data.service */ 7516);
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/authentication */ 82491);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _pipes_departure_date_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../pipes/departure-date.pipe */ 78111);

var _AvailableRoutesPage;
























const _c0 = (a0, a1) => ({
  "themeone-selected-text": a0,
  "themeone-unselected-txt": a1
});
const _c1 = (a0, a1) => ({
  "themeone-selected-icon": a0,
  "themeone-unselected-icon": a1
});
const _c2 = () => ({
  "background": "#ebeaea"
});
const _c3 = (a0, a1) => ({
  "selected-icon": a0,
  "unselected-icon": a1
});
const _c4 = (a0, a1) => ({
  "selected-text": a0,
  "unselected-txt": a1
});
const _c5 = (a0, a1) => ({
  "seabird-selected-text": a0,
  "unselected-txt": a1
});
const _c6 = () => ({
  "margin": "0px 18px 16px"
});
const _c7 = () => ({
  "margin": "18px 16px"
});
const _c8 = (a0, a1) => ({
  "opacity": a0,
  "pointer-events": a1
});
const _c9 = (a0, a1) => ({
  "background": a0,
  "color": a1
});
const _c10 = (a0, a1, a2) => ({
  year: a0,
  month: a1,
  day: a2
});
const _c11 = (a0, a1) => ({
  "highlighted": a0,
  "disabled": a1
});
function AvailableRoutesPage_ng_container_0_ion_segment_9_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "img", 20);
  }
}
function AvailableRoutesPage_ng_container_0_ion_segment_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ion-segment", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function AvailableRoutesPage_ng_container_0_ion_segment_9_Template_ion_segment_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx_r1.journeyType, $event) || (ctx_r1.journeyType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AvailableRoutesPage_ng_container_0_ion_segment_9_img_1_Template, 1, 0, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "ion-segment-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_0_ion_segment_9_Template_ion_segment_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.journeyTypeSelect());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "ion-segment-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_0_ion_segment_9_Template_ion_segment_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.journeyTypeSelect());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.journeyType);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.isreturnTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", ctx_r1.isreturnTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", "Onward", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", !ctx_r1.isreturnTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", "Return", " ");
  }
}
function AvailableRoutesPage_ng_container_0_div_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 26)(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_0_div_10_div_4_Template_div_click_1_listener() {
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r5);
      const item_r7 = ctx_r5.$implicit;
      const i_r8 = ctx_r5.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.getpageDate(1, item_r7.year, item_r7.month, item_r7.day, i_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", ctx_r1.selectedbox == i_r8 ? "cbusnewClass" : "bookingDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate3"](" ", item_r7.date[0], ", ", item_r7.year, " ", item_r7.month, " ");
  }
}
function AvailableRoutesPage_ng_container_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 21)(1, "div", 22)(2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_0_div_10_Template_div_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.departureDateModal(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, AvailableRoutesPage_ng_container_0_div_10_div_4_Template, 3, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r1.mineDisplaydate);
  }
}
function AvailableRoutesPage_ng_container_0_div_11_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 26)(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_0_div_11_div_4_Template_div_click_1_listener() {
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r10);
      const item_r12 = ctx_r10.$implicit;
      const i_r13 = ctx_r10.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.getpageDate(2, item_r12.year, item_r12.month, item_r12.day, i_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", ctx_r1.selectedboxreturn == i_r13 ? "cbusnewClass" : "bookingDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate3"](" ", item_r12.date[0], ", ", item_r12.year, " ", item_r12.month, " ");
  }
}
function AvailableRoutesPage_ng_container_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 21)(1, "div", 22)(2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_0_div_11_Template_div_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.departureDateModal(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, AvailableRoutesPage_ng_container_0_div_11_div_4_Template, 3, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r1.returnmineDisplaydate);
  }
}
function AvailableRoutesPage_ng_container_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"](" Showing ", ctx_r1.routes == null ? null : ctx_r1.routes.length, " ", (ctx_r1.routes == null ? null : ctx_r1.routes.length) > 1 ? "Results" : "Result", " ");
  }
}
function AvailableRoutesPage_ng_container_0_div_14_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", !r_r15.is_allow_multistation_blocked_service ? "cbus-routes-txt-2" : "cbus-routes-txt-2-block");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", r_r15.discount_percentage, "% OFF ");
  }
}
function AvailableRoutesPage_ng_container_0_div_14_div_1_ion_row_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ion-row", 56)(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r1.getDesc(ctx_r1.showDescription(r_r15.description)), " ");
  }
}
function AvailableRoutesPage_ng_container_0_div_14_div_1_span_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, " Incl. taxes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AvailableRoutesPage_ng_container_0_div_14_div_1_span_36_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, " Incl. VAT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AvailableRoutesPage_ng_container_0_div_14_div_1_span_36_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, " Excl. taxes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AvailableRoutesPage_ng_container_0_div_14_div_1_span_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AvailableRoutesPage_ng_container_0_div_14_div_1_span_36_span_1_Template, 2, 0, "span", 1)(2, AvailableRoutesPage_ng_container_0_div_14_div_1_span_36_span_2_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.metaData.chargesInclusive && r_r15.is_service_tax_applicable);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.chargesInclusive && r_r15.is_service_tax_applicable);
  }
}
function AvailableRoutesPage_ng_container_0_div_14_div_1_ion_row_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ion-row", 58)(1, "ion-col", 59)(2, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const r_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", "Booking Available From ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](r_r15.multistation_allowed_time);
  }
}
function AvailableRoutesPage_ng_container_0_div_14_div_1_span_44_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "img", 62);
  }
  if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("src", item_r16.image_url != "" ? item_r16.image_url : "", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsanitizeUrl"]);
  }
}
function AvailableRoutesPage_ng_container_0_div_14_div_1_span_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AvailableRoutesPage_ng_container_0_div_14_div_1_span_44_img_1_Template, 1, 1, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", i_r17 <= 5 && item_r16.image_url != "");
  }
}
function AvailableRoutesPage_ng_container_0_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AvailableRoutesPage_ng_container_0_div_14_div_1_span_1_Template, 2, 2, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 31)(3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_0_div_14_div_1_Template_div_click_3_listener() {
      const r_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r14).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](!r_r15.is_allow_multistation_blocked_service ? ctx_r1.gotoSeatLayout(r_r15) : ctx_r1.blockService(r_r15.multistation_allowed_time));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, AvailableRoutesPage_ng_container_0_div_14_div_1_ion_row_4_Template, 3, 1, "ion-row", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "ion-row", 34)(6, "ion-col", 35)(7, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10, " Depart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "ion-col", 37)(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](13, "ion-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](15, "ion-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](17, "ion-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "ion-col", 42)(21, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](23, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](24, " Arrive ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](25, "div")(26, "ion-row", 43)(27, "ion-col", 44)(28, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](30, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](32, "ion-col", 46)(33, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](35, AvailableRoutesPage_ng_container_0_div_14_div_1_span_35_Template, 2, 0, "span", 47)(36, AvailableRoutesPage_ng_container_0_div_14_div_1_span_36_Template, 3, 2, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](37, AvailableRoutesPage_ng_container_0_div_14_div_1_ion_row_37_Template, 6, 2, "ion-row", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](38, "ion-row", 49)(39, "ion-col", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](40, "ion-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](41, "ion-row", 52)(42, "ion-col", 53)(43, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](44, AvailableRoutesPage_ng_container_0_div_14_div_1_span_44_Template, 2, 1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](45, "ion-col", 54)(46, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const r_r15 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", r_r15.discount_percentage && r_r15.discount_percentage != "" && r_r15.discount_percentage != null && r_r15.discount_percentage != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", r_r15.is_edit_mode == true ? "disableService" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", r_r15.description != null && r_r15.description.trim() != "" && r_r15.is_show_description == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", !r_r15.is_allow_multistation_blocked_service ? "cbus-deprture-time" : "cbus-deprture-time-block");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", r_r15.dep_time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", !r_r15.is_allow_multistation_blocked_service ? "cbus-bus-icon" : "cbus-bus-icon-block");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", !r_r15.is_allow_multistation_blocked_service ? "" : "cbusline-block");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", !r_r15.is_allow_multistation_blocked_service ? "cbus-totaldistance" : "cbus-totaldistance-block");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", (r_r15.duration.split(":")[0] != "10" && r_r15.duration.split(":")[0] != "20" ? r_r15.duration.split(":")[0].replace("0", "") : r_r15.duration.split(":")[0]) + "h " + (r_r15.duration.split(":")[1] != "00" ? r_r15.duration.split(":")[1] + "m" : r_r15.duration.split(":")[1] + "m"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", !r_r15.is_allow_multistation_blocked_service ? "cbus-deprture-time" : "cbus-deprture-time-block");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", r_r15.arr_time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", !r_r15.is_allow_multistation_blocked_service ? "cbus-service-num" : "cbus-service-num-block");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", r_r15.number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", r_r15.bus_type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", !r_r15.is_allow_multistation_blocked_service ? "cbus-deprture-time1" : "cbus-deprture-time-block");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r1.currencySym + " " + ctx_r1.getPrice(r_r15.fare_str), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", r_r15.is_allow_multistation_blocked_service);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", r_r15.bus_amenities);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", r_r15.available_seats + " ", "Seats Left ");
  }
}
function AvailableRoutesPage_ng_container_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AvailableRoutesPage_ng_container_0_div_14_div_1_Template, 48, 21, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r1.routes);
  }
}
function AvailableRoutesPage_ng_container_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 63)(1, "ion-grid", 64)(2, "ion-row")(3, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r1.noRouteFound.message ? ctx_r1.noRouteFound.message : "", "");
  }
}
function AvailableRoutesPage_ng_container_0_ion_fab_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ion-fab", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_0_ion_fab_16_Template_ion_fab_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.shortFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "ion-fab-button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](2, "ion-icon", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
}
function AvailableRoutesPage_ng_container_0_ion_footer_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ion-footer", 70)(1, "ion-toolbar", 71)(2, "ion-row", 72)(3, "ion-col", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_0_ion_footer_17_Template_ion_col_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.filterBusType(ctx_r1.subdomain == "abct" ? "sprinter" : "sleeper"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "ion-col", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_0_ion_footer_17_Template_ion_col_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.filterBusType(ctx_r1.subdomain == "abct" ? "shuttle" : "semisleeper"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](8, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "ion-col", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_0_ion_footer_17_Template_ion_col_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.filterBusType("ac"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](12, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14, "AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "ion-col", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_0_ion_footer_17_Template_ion_col_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.filterBusType("nonac"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](16, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18, " Non-AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](19, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_0_ion_footer_17_Template_div_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.shortFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](20, "img", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](21, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](22, "Sort & Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](10, _c0, ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "sprinter" : "sleeper"), !ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "sprinter" : "sleeper")));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("src", ctx_r1.subdomain == "abct" ? "./assets/icon/sprinter.png" : "./assets/icon/cbusFSleeper.svg", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsanitizeUrl"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](13, _c1, ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "sprinter" : "sleeper"), !ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "sprinter" : "sleeper")));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r1.subdomain == "abct" ? "Sprinter" : "Sleeper");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](16, _c1, ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "shuttle" : "semisleeper"), !ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "shuttle" : "semisleeper")));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("src", ctx_r1.subdomain == "abct" ? "./assets/icon/shuttle.png" : "./assets/icon/cbusFseater.svg", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r1.subdomain == "abct" ? "Shuttle" : "Seater");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](19, _c1, ctx_r1.checkBusType("ac"), !ctx_r1.checkBusType("ac")));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](22, _c0, ctx_r1.checkBusType("nonac"), !ctx_r1.checkBusType("nonac")));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](25, _c1, ctx_r1.checkBusType("nonac"), !ctx_r1.checkBusType("nonac")));
  }
}
function AvailableRoutesPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 3)(3, "ion-buttons", 4)(4, "ion-back-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_0_Template_ion_back_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "ion-title", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_0_Template_div_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.edit_source_desti());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](8, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, AvailableRoutesPage_ng_container_0_ion_segment_9_Template, 6, 6, "ion-segment", 9)(10, AvailableRoutesPage_ng_container_0_div_10_Template, 5, 1, "div", 10)(11, AvailableRoutesPage_ng_container_0_div_11_Template, 5, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "ion-content", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](13, AvailableRoutesPage_ng_container_0_div_13_Template, 2, 2, "div", 12)(14, AvailableRoutesPage_ng_container_0_div_14_Template, 2, 1, "div", 1)(15, AvailableRoutesPage_ng_container_0_div_15_Template, 7, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](16, AvailableRoutesPage_ng_container_0_ion_fab_16_Template, 3, 0, "ion-fab", 14)(17, AvailableRoutesPage_ng_container_0_ion_footer_17_Template, 23, 28, "ion-footer", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"]("", ctx_r1.commaSeparate(ctx_r1.origin.name), " - ", ctx_r1.commaSeparate(ctx_r1.destination.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.globalData.DEPARTURE_DATE_RETURN && ctx_r1.globalData.DEPARTURE_DATE_RETURN.formattedDate && ctx_r1.commonStorage.getItem("metaData").isRoundTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.isreturnTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.isreturnTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.routes.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.routes.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.routes.length == 0 && ctx_r1.showingNoBusIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.subdomain == "abct" || ctx_r1.util.isInternational());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.subdomain != "abct" && !ctx_r1.util.isInternational());
  }
}
function AvailableRoutesPage_ng_container_1_div_7_ion_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ion-icon", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_1_div_7_ion_icon_1_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.prevDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AvailableRoutesPage_ng_container_1_div_7_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ion-icon", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_1_div_7_ion_icon_4_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.nextDate(""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AvailableRoutesPage_ng_container_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AvailableRoutesPage_ng_container_1_div_7_ion_icon_1_Template, 1, 0, "ion-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_1_div_7_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.departureDateModal(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, AvailableRoutesPage_ng_container_1_div_7_ion_icon_4_Template, 1, 0, "ion-icon", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.disablePreviousDateArrow);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"]("", ctx_r1.globalData.DEPARTURE_DATE.day + " ", "", " " + ctx_r1.globalData.DEPARTURE_DATE.monthNameShort, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.showNextMonth());
  }
}
function AvailableRoutesPage_ng_container_1_div_8_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ion-icon", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_1_div_8_ion_icon_4_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.nextDate(""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AvailableRoutesPage_ng_container_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 87)(1, "ion-icon", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_1_div_8_Template_ion_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.prevDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_1_div_8_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.departureDateModal(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, AvailableRoutesPage_ng_container_1_div_8_ion_icon_4_Template, 1, 0, "ion-icon", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"]("", ctx_r1.globalData.DEPARTURE_DATE_RETURN.day + " ", "", " " + ctx_r1.globalData.DEPARTURE_DATE_RETURN.monthNameShort, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.showNextMonth());
  }
}
function AvailableRoutesPage_ng_container_1_ion_segment_10_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "img", 20);
  }
}
function AvailableRoutesPage_ng_container_1_ion_segment_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ion-segment", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function AvailableRoutesPage_ng_container_1_ion_segment_10_Template_ion_segment_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx_r1.journeyType, $event) || (ctx_r1.journeyType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AvailableRoutesPage_ng_container_1_ion_segment_10_img_1_Template, 1, 0, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "ion-segment-button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_1_ion_segment_10_Template_ion_segment_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.journeyTypeSelect());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "ion-segment-button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_1_ion_segment_10_Template_ion_segment_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.journeyTypeSelect());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.journeyType);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.isreturnTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", ctx_r1.isreturnTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", "Onward", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", !ctx_r1.isreturnTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", "Return", " ");
  }
}
function AvailableRoutesPage_ng_container_1_ion_list_11_div_1_ion_row_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ion-row")(1, "ion-label", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r1.showDescription(r_r28.description), " ");
  }
}
function AvailableRoutesPage_ng_container_1_ion_list_11_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"](" ", r_r28.rest_stop_count, " RESTSTOP", r_r28.rest_stop_count > 1 ? "S" : "", " ");
  }
}
function AvailableRoutesPage_ng_container_1_ion_list_11_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "img", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", r_r28.discount_percentage, "% OFF ");
  }
}
function AvailableRoutesPage_ng_container_1_ion_list_11_div_1_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r1.currencySym + " " + ctx_r1.getPrice(r_r28.fare_str), " ");
  }
}
function AvailableRoutesPage_ng_container_1_ion_list_11_div_1_span_16_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span")(1, "p", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "p", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r1.currencySym + " " + r_r28.discounted_price, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r1.currencySym + " " + ctx_r1.getPrice(r_r28.fare_str), " ");
  }
}
function AvailableRoutesPage_ng_container_1_ion_list_11_div_1_span_16_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span")(1, "p", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r1.currencySym + " " + ctx_r1.getPrice(r_r28.fare_str), " ");
  }
}
function AvailableRoutesPage_ng_container_1_ion_list_11_div_1_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AvailableRoutesPage_ng_container_1_ion_list_11_div_1_span_16_span_1_Template, 5, 2, "span", 1)(2, AvailableRoutesPage_ng_container_1_ion_list_11_div_1_span_16_span_2_Template, 3, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", r_r28.fare_string > r_r28.discounted_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", r_r28.fare_string <= r_r28.discounted_price);
  }
}
function AvailableRoutesPage_ng_container_1_ion_list_11_div_1_div_22_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "Inclusive of all taxes");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AvailableRoutesPage_ng_container_1_ion_list_11_div_1_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AvailableRoutesPage_ng_container_1_ion_list_11_div_1_div_22_div_1_span_1_Template, 2, 0, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", r_r28.is_service_tax_applicable);
  }
}
function AvailableRoutesPage_ng_container_1_ion_list_11_div_1_div_22_div_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "Inclusive of VAT");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AvailableRoutesPage_ng_container_1_ion_list_11_div_1_div_22_div_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "Exclusive of VAT");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AvailableRoutesPage_ng_container_1_ion_list_11_div_1_div_22_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AvailableRoutesPage_ng_container_1_ion_list_11_div_1_div_22_div_2_span_1_Template, 2, 0, "span", 117)(2, AvailableRoutesPage_ng_container_1_ion_list_11_div_1_div_22_div_2_span_2_Template, 2, 0, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.metaData.chargesInclusive && r_r28.is_service_tax_applicable);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.chargesInclusive && r_r28.is_service_tax_applicable);
  }
}
function AvailableRoutesPage_ng_container_1_ion_list_11_div_1_div_22_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r1.currencySym + " " + r_r28.is_bima ? ctx_r1.getPrice(r_r28.fare_str) : r_r28.fare_string);
  }
}
function AvailableRoutesPage_ng_container_1_ion_list_11_div_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AvailableRoutesPage_ng_container_1_ion_list_11_div_1_div_22_div_1_Template, 2, 1, "div", 1)(2, AvailableRoutesPage_ng_container_1_ion_list_11_div_1_div_22_div_2_Template, 3, 2, "div", 1)(3, AvailableRoutesPage_ng_container_1_ion_list_11_div_1_div_22_span_3_Template, 2, 1, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", r_r28.discounted_price && r_r28.discounted_price != null && r_r28.discount_percentage != 0 && r_r28.discounted_price != 0);
  }
}
function AvailableRoutesPage_ng_container_1_ion_list_11_div_1_ion_row_23_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "Inclusive of all taxes");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AvailableRoutesPage_ng_container_1_ion_list_11_div_1_ion_row_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AvailableRoutesPage_ng_container_1_ion_list_11_div_1_ion_row_23_div_1_span_1_Template, 2, 0, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", r_r28.is_service_tax_applicable);
  }
}
function AvailableRoutesPage_ng_container_1_ion_list_11_div_1_ion_row_23_div_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "Inclusive of VAT");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AvailableRoutesPage_ng_container_1_ion_list_11_div_1_ion_row_23_div_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "Exclusive of VAT");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AvailableRoutesPage_ng_container_1_ion_list_11_div_1_ion_row_23_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AvailableRoutesPage_ng_container_1_ion_list_11_div_1_ion_row_23_div_2_span_1_Template, 2, 0, "span", 117)(2, AvailableRoutesPage_ng_container_1_ion_list_11_div_1_ion_row_23_div_2_span_2_Template, 2, 0, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.metaData.chargesInclusive && r_r28.is_service_tax_applicable);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.chargesInclusive && r_r28.is_service_tax_applicable);
  }
}
function AvailableRoutesPage_ng_container_1_ion_list_11_div_1_ion_row_23_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r1.currencySym + " " + r_r28.is_bima ? ctx_r1.getPrice(r_r28.fare_str) : r_r28.fare_string);
  }
}
function AvailableRoutesPage_ng_container_1_ion_list_11_div_1_ion_row_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AvailableRoutesPage_ng_container_1_ion_list_11_div_1_ion_row_23_div_1_Template, 2, 1, "div", 120)(2, AvailableRoutesPage_ng_container_1_ion_list_11_div_1_ion_row_23_div_2_Template, 3, 2, "div", 120)(3, AvailableRoutesPage_ng_container_1_ion_list_11_div_1_ion_row_23_span_3_Template, 2, 1, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", r_r28.discounted_price && r_r28.discounted_price != null && r_r28.discount_percentage != 0 && r_r28.discounted_price != 0);
  }
}
function AvailableRoutesPage_ng_container_1_ion_list_11_div_1_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div")(1, "ion-row", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](2, "img", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "ion-row", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", r_r28.number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", r_r28.bus_type, " ");
  }
}
function AvailableRoutesPage_ng_container_1_ion_list_11_div_1_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div")(1, "ion-row", 122)(2, "ion-col", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "img", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "ion-col", 126)(6, "p", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7, "Booking Avaliable From");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "ion-row")(9, "ion-col", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "ion-col", 128)(12, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const r_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", r_r28.number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", r_r28.bus_type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](r_r28.multistation_allowed_time);
  }
}
function AvailableRoutesPage_ng_container_1_ion_list_11_div_1_ion_row_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ion-row", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, " Social Distancing Guaranteed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AvailableRoutesPage_ng_container_1_ion_list_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div")(1, "ion-card", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_1_ion_list_11_div_1_Template_ion_card_click_1_listener() {
      const r_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r27).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](!r_r28.is_allow_multistation_blocked_service ? ctx_r1.gotoSeatLayout(r_r28) : false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, AvailableRoutesPage_ng_container_1_ion_list_11_div_1_ion_row_2_Template, 3, 1, "ion-row", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, AvailableRoutesPage_ng_container_1_ion_list_11_div_1_span_4_Template, 2, 2, "span", 100)(5, AvailableRoutesPage_ng_container_1_ion_list_11_div_1_span_5_Template, 3, 1, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "ion-row", 102)(7, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "div", 105)(12, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](15, AvailableRoutesPage_ng_container_1_ion_list_11_div_1_span_15_Template, 2, 1, "span", 1)(16, AvailableRoutesPage_ng_container_1_ion_list_11_div_1_span_16_Template, 3, 2, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "ion-row")(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](22, AvailableRoutesPage_ng_container_1_ion_list_11_div_1_div_22_Template, 4, 3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](23, AvailableRoutesPage_ng_container_1_ion_list_11_div_1_ion_row_23_Template, 4, 3, "ion-row", 1)(24, AvailableRoutesPage_ng_container_1_ion_list_11_div_1_div_24_Template, 6, 2, "div", 1)(25, AvailableRoutesPage_ng_container_1_ion_list_11_div_1_div_25_Template, 14, 3, "div", 1)(26, AvailableRoutesPage_ng_container_1_ion_list_11_div_1_ion_row_26_Template, 2, 0, "ion-row", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r28 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngStyle", r_r28.is_allow_multistation_blocked_service && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](16, _c2))("ngClass", r_r28.is_edit_mode == true ? "disableService" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", r_r28.description != null && r_r28.description.trim() != "" && r_r28.is_show_description == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", r_r28.rest_stop_count > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", r_r28.discount_percentage && r_r28.discount_percentage != "" && r_r28.discount_percentage != null && r_r28.discount_percentage != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](r_r28.dep_time + " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("- ", r_r28.arr_time, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.show_discounted_fare_in_srp);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.show_discounted_fare_in_srp);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", (r_r28.duration.split(":")[0] != "10" && r_r28.duration.split(":")[0] != "20" ? r_r28.duration.split(":")[0].replace("0", "") : r_r28.duration.split(":")[0]) + "h " + (r_r28.duration.split(":")[1] != "00" ? r_r28.duration.split(":")[1] + "m" : "") + " \u2022 ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", r_r28.available_seats + " ", "seats left ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.show_discounted_fare_in_srp);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.show_discounted_fare_in_srp);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !r_r28.is_allow_multistation_blocked_service);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", r_r28.is_allow_multistation_blocked_service);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", r_r28.social_distancing_guaranteed);
  }
}
function AvailableRoutesPage_ng_container_1_ion_list_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ion-list", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AvailableRoutesPage_ng_container_1_ion_list_11_div_1_Template, 27, 17, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r1.routes);
  }
}
function AvailableRoutesPage_ng_container_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 63)(1, "ion-grid")(2, "ion-row")(3, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "img", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r1.noRouteFound.message ? ctx_r1.noRouteFound.message : "", "");
  }
}
function AvailableRoutesPage_ng_container_1_ion_fab_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ion-fab", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_1_ion_fab_13_Template_ion_fab_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.shortFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "ion-fab-button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](2, "ion-icon", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
}
function AvailableRoutesPage_ng_container_1_ion_footer_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ion-footer")(1, "ion-toolbar", 133)(2, "ion-row", 134)(3, "ion-col", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_1_ion_footer_14_Template_ion_col_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.filterBusType(ctx_r1.subdomain == "abct" ? "sprinter" : "sleeper"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "ion-col", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_1_ion_footer_14_Template_ion_col_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.filterBusType(ctx_r1.subdomain == "abct" ? "shuttle" : "semisleeper"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](8, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "ion-col", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_1_ion_footer_14_Template_ion_col_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.filterBusType("ac"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](12, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14, "AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "ion-col", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_1_ion_footer_14_Template_ion_col_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.filterBusType("nonac"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](16, "img", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18, " Non-AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](19, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_1_ion_footer_14_Template_div_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.shortFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](20, " Sort ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](22, "&");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](24, " Filter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("src", ctx_r1.subdomain == "abct" ? "./assets/icon/sprinter.png" : "./assets/icon/sleeper.png", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsanitizeUrl"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](10, _c3, ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "sprinter" : "sleeper"), !ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "sprinter" : "sleeper")));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](13, _c4, ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "sprinter" : "sleeper"), !ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "sprinter" : "sleeper")));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r1.subdomain == "abct" ? "Sprinter" : "Sleeper");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("src", ctx_r1.subdomain == "abct" ? "./assets/icon/shuttle.png" : "./assets/icon/seater.png", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsanitizeUrl"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](16, _c3, ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "shuttle" : "semisleeper"), !ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "shuttle" : "semisleeper")));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r1.subdomain == "abct" ? "Shuttle" : "Seater");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](19, _c3, ctx_r1.checkBusType("ac"), !ctx_r1.checkBusType("ac")));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](22, _c3, ctx_r1.checkBusType("nonac"), !ctx_r1.checkBusType("nonac")));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](25, _c4, ctx_r1.checkBusType("nonac"), !ctx_r1.checkBusType("nonac")));
  }
}
function AvailableRoutesPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 82)(3, "ion-buttons", 4)(4, "ion-back-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_1_Template_ion_back_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "ion-title", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, AvailableRoutesPage_ng_container_1_div_7_Template, 5, 4, "div", 84)(8, AvailableRoutesPage_ng_container_1_div_8_Template, 5, 3, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "ion-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](10, AvailableRoutesPage_ng_container_1_ion_segment_10_Template, 6, 6, "ion-segment", 85)(11, AvailableRoutesPage_ng_container_1_ion_list_11_Template, 2, 1, "ion-list", 86)(12, AvailableRoutesPage_ng_container_1_div_12_Template, 7, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](13, AvailableRoutesPage_ng_container_1_ion_fab_13_Template, 3, 0, "ion-fab", 14)(14, AvailableRoutesPage_ng_container_1_ion_footer_14_Template, 25, 28, "ion-footer", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"]("", ctx_r1.commaSeparate(ctx_r1.origin.name), " - ", ctx_r1.commaSeparate(ctx_r1.destination.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.isreturnTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.isreturnTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.globalData.DEPARTURE_DATE_RETURN && ctx_r1.globalData.DEPARTURE_DATE_RETURN.formattedDate && ctx_r1.commonStorage.getItem("metaData").isRoundTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.routes.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.routes.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.subdomain == "abct" || ctx_r1.util.isInternational());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.subdomain != "abct" && !ctx_r1.util.isInternational());
  }
}
function AvailableRoutesPage_ng_container_2_div_7_ion_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ion-icon", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_2_div_7_ion_icon_1_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r33);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.prevDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AvailableRoutesPage_ng_container_2_div_7_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ion-icon", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_2_div_7_ion_icon_4_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.nextDate(""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AvailableRoutesPage_ng_container_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AvailableRoutesPage_ng_container_2_div_7_ion_icon_1_Template, 1, 0, "ion-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_2_div_7_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r32);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.departureDateModal(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, AvailableRoutesPage_ng_container_2_div_7_ion_icon_4_Template, 1, 0, "ion-icon", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.disablePreviousDateArrow);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"]("", ctx_r1.globalData.DEPARTURE_DATE.day + " ", "", " " + ctx_r1.globalData.DEPARTURE_DATE.monthNameShort, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.showNextMonth());
  }
}
function AvailableRoutesPage_ng_container_2_div_8_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ion-icon", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_2_div_8_ion_icon_4_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.nextDate(""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AvailableRoutesPage_ng_container_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 87)(1, "ion-icon", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_2_div_8_Template_ion_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.prevDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_2_div_8_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.departureDateModal(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, AvailableRoutesPage_ng_container_2_div_8_ion_icon_4_Template, 1, 0, "ion-icon", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"]("", ctx_r1.globalData.DEPARTURE_DATE_RETURN.day + " ", "", " " + ctx_r1.globalData.DEPARTURE_DATE_RETURN.monthNameShort, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.showNextMonth());
  }
}
function AvailableRoutesPage_ng_container_2_ion_segment_10_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "img", 20);
  }
}
function AvailableRoutesPage_ng_container_2_ion_segment_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ion-segment", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function AvailableRoutesPage_ng_container_2_ion_segment_10_Template_ion_segment_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r37);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx_r1.journeyType, $event) || (ctx_r1.journeyType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AvailableRoutesPage_ng_container_2_ion_segment_10_img_1_Template, 1, 0, "img", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "ion-segment-button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_2_ion_segment_10_Template_ion_segment_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r37);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.journeyTypeSelect());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "ion-segment-button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_2_ion_segment_10_Template_ion_segment_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r37);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.journeyTypeSelect());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.journeyType);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.isreturnTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", ctx_r1.isreturnTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", "Onward", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", !ctx_r1.isreturnTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", "Return", " ");
  }
}
function AvailableRoutesPage_ng_container_2_ion_list_40_div_1_div_2_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 179)(1, "p", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "p", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](5, "img", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r1.currencySym + " " + r_r39.discounted_price, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", "You're saving" + " " + ctx_r1.currencySym + " " + (r_r39.fare_string - r_r39.discounted_price).toFixed(2), " ");
  }
}
function AvailableRoutesPage_ng_container_2_ion_list_40_div_1_div_2_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span")(1, "p", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r1.currencySym + " " + ctx_r1.getPrice(r_r39.fare_str), " ");
  }
}
function AvailableRoutesPage_ng_container_2_ion_list_40_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div")(1, "ion-row", 173)(2, "ion-col", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "ion-col", 175)(5, "div", 105)(6, "span", 176)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, AvailableRoutesPage_ng_container_2_ion_list_40_div_1_div_2_span_8_Template, 6, 2, "span", 177)(9, AvailableRoutesPage_ng_container_2_ion_list_40_div_1_div_2_span_9_Template, 3, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "ion-row")(11, "ion-col", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const r_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", r_r39.number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", r_r39.fare_string > r_r39.discounted_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", r_r39.fare_string <= r_r39.discounted_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", r_r39.bus_type, " ");
  }
}
function AvailableRoutesPage_ng_container_2_ion_list_40_div_1_div_12_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "Inclusive of all taxes");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AvailableRoutesPage_ng_container_2_ion_list_40_div_1_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AvailableRoutesPage_ng_container_2_ion_list_40_div_1_div_12_div_1_span_1_Template, 2, 0, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", r_r39.is_service_tax_applicable);
  }
}
function AvailableRoutesPage_ng_container_2_ion_list_40_div_1_div_12_div_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "Inclusive of VAT");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AvailableRoutesPage_ng_container_2_ion_list_40_div_1_div_12_div_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "Exclusive of VAT");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AvailableRoutesPage_ng_container_2_ion_list_40_div_1_div_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AvailableRoutesPage_ng_container_2_ion_list_40_div_1_div_12_div_2_span_1_Template, 2, 0, "span", 117)(2, AvailableRoutesPage_ng_container_2_ion_list_40_div_1_div_12_div_2_span_2_Template, 2, 0, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.metaData.chargesInclusive && r_r39.is_service_tax_applicable);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.chargesInclusive && r_r39.is_service_tax_applicable);
  }
}
function AvailableRoutesPage_ng_container_2_ion_list_40_div_1_div_12_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r1.currencySym + " " + r_r39.is_bima ? ctx_r1.getPrice(r_r39.fare_str) : r_r39.fare_string);
  }
}
function AvailableRoutesPage_ng_container_2_ion_list_40_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AvailableRoutesPage_ng_container_2_ion_list_40_div_1_div_12_div_1_Template, 2, 1, "div", 1)(2, AvailableRoutesPage_ng_container_2_ion_list_40_div_1_div_12_div_2_Template, 3, 2, "div", 1)(3, AvailableRoutesPage_ng_container_2_ion_list_40_div_1_div_12_span_3_Template, 2, 1, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", r_r39.discounted_price && r_r39.discounted_price != null && r_r39.discount_percentage != 0 && r_r39.discounted_price != 0);
  }
}
function AvailableRoutesPage_ng_container_2_ion_list_40_div_1_ion_row_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "div", 121);
  }
}
function AvailableRoutesPage_ng_container_2_ion_list_40_div_1_ion_row_13_div_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "Inclusive of VAT");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AvailableRoutesPage_ng_container_2_ion_list_40_div_1_ion_row_13_div_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "Exclusive of VAT");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AvailableRoutesPage_ng_container_2_ion_list_40_div_1_ion_row_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AvailableRoutesPage_ng_container_2_ion_list_40_div_1_ion_row_13_div_2_span_1_Template, 2, 0, "span", 117)(2, AvailableRoutesPage_ng_container_2_ion_list_40_div_1_ion_row_13_div_2_span_2_Template, 2, 0, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.metaData.chargesInclusive && r_r39.is_service_tax_applicable);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.chargesInclusive && r_r39.is_service_tax_applicable);
  }
}
function AvailableRoutesPage_ng_container_2_ion_list_40_div_1_ion_row_13_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r1.currencySym + " " + r_r39.is_bima ? ctx_r1.getPrice(r_r39.fare_str) : r_r39.fare_string);
  }
}
function AvailableRoutesPage_ng_container_2_ion_list_40_div_1_ion_row_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AvailableRoutesPage_ng_container_2_ion_list_40_div_1_ion_row_13_div_1_Template, 1, 0, "div", 120)(2, AvailableRoutesPage_ng_container_2_ion_list_40_div_1_ion_row_13_div_2_Template, 3, 2, "div", 120)(3, AvailableRoutesPage_ng_container_2_ion_list_40_div_1_ion_row_13_span_3_Template, 2, 1, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", r_r39.discounted_price && r_r39.discounted_price != null && r_r39.discount_percentage != 0 && r_r39.discounted_price != 0);
  }
}
function AvailableRoutesPage_ng_container_2_ion_list_40_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div")(1, "ion-row", 122)(2, "ion-col", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "img", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "ion-col", 126)(6, "p", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7, "Booking Avaliable From");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "ion-row")(9, "ion-col", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "ion-col", 128)(12, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const r_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", r_r39.number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", r_r39.bus_type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](r_r39.multistation_allowed_time);
  }
}
function AvailableRoutesPage_ng_container_2_ion_list_40_div_1_ion_row_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ion-row", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, " Social Distancing Guaranteed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AvailableRoutesPage_ng_container_2_ion_list_40_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 158)(1, "ion-card", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_2_ion_list_40_div_1_Template_ion_card_click_1_listener() {
      const r_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r38).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](!r_r39.is_allow_multistation_blocked_service ? ctx_r1.gotoSeatLayout(r_r39) : false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, AvailableRoutesPage_ng_container_2_ion_list_40_div_1_div_2_Template, 13, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "ion-row")(4, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "ion-row")(7, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "ion-row", 162)(10, "span", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](12, AvailableRoutesPage_ng_container_2_ion_list_40_div_1_div_12_Template, 4, 3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](13, AvailableRoutesPage_ng_container_2_ion_list_40_div_1_ion_row_13_Template, 4, 3, "ion-row", 1)(14, AvailableRoutesPage_ng_container_2_ion_list_40_div_1_div_14_Template, 14, 3, "div", 1)(15, AvailableRoutesPage_ng_container_2_ion_list_40_div_1_ion_row_15_Template, 2, 0, "ion-row", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "ion-row")(17, "ion-col", 126)(18, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](19, "img", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](22, "ion-col", 126)(23, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](24, "img", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](27, "ion-col", 126)(28, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](29, "img", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](32, "ion-col", 126)(33, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](34, "img", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const r_r39 = ctx.$implicit;
    const i_r40 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngStyle", i_r40 == 0 ? _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](17, _c6) : _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](18, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", r_r39.is_edit_mode == true ? "disableService" : "")("ngStyle", r_r39.is_allow_multistation_blocked_service && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](19, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !r_r39.is_allow_multistation_blocked_service);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"]("Departure: \u00A0", ctx_r1.formatDate(r_r39.dep_date), " \u00A0\u00A0 ", r_r39.dep_time + " ", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"]("Arrival: \u00A0", ctx_r1.formatDate(r_r39.arr_date), " \u00A0\u00A0 ", r_r39.arr_time, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", r_r39.duration, "hrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.show_discounted_fare_in_srp);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.show_discounted_fare_in_srp);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", r_r39.is_allow_multistation_blocked_service);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", r_r39.social_distancing_guaranteed);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r1.currencySym + " " + r_r39.discounted_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r1.currencySym + " " + r_r39.fare_string, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r1.currencySym + " " + r_r39.fare_string);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r1.currencySym + " " + r_r39.fare_string, "");
  }
}
function AvailableRoutesPage_ng_container_2_ion_list_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ion-list", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AvailableRoutesPage_ng_container_2_ion_list_40_div_1_Template, 37, 20, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r1.routes);
  }
}
function AvailableRoutesPage_ng_container_2_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 63)(1, "ion-grid")(2, "ion-row")(3, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "img", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6, "No service available");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()();
  }
}
function AvailableRoutesPage_ng_container_2_ion_fab_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ion-fab", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_2_ion_fab_42_Template_ion_fab_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r41);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.shortFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "ion-fab-button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](2, "ion-icon", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
}
function AvailableRoutesPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 82)(3, "ion-buttons", 4)(4, "ion-back-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_2_Template_ion_back_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "ion-title", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, AvailableRoutesPage_ng_container_2_div_7_Template, 5, 4, "div", 84)(8, AvailableRoutesPage_ng_container_2_div_8_Template, 5, 3, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "ion-content", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](10, AvailableRoutesPage_ng_container_2_ion_segment_10_Template, 6, 6, "ion-segment", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "div", 140)(12, "ion-card", 141)(13, "ion-row", 142)(14, "ion-col", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_2_Template_ion_col_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.filterBusType(ctx_r1.subdomain == "abct" ? "sprinter" : "sleeper"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](16, "img", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](19, "ion-col", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_2_Template_ion_col_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.filterBusType(ctx_r1.subdomain == "abct" ? "shuttle" : "semisleeper"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](21, "img", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](22, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](24, "ion-col", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_2_Template_ion_col_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.filterBusType("ac"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](26, "img", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](27, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](28, "AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](29, "ion-col", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_2_Template_ion_col_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.filterBusType("nonac"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](30, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](31, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](32, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](33, " Non-AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](34, "ion-col", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_2_Template_ion_col_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.shortFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](35, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](36, "img", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](37, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](38, " Sort & Filter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](39, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](40, AvailableRoutesPage_ng_container_2_ion_list_40_Template, 2, 1, "ion-list", 154)(41, AvailableRoutesPage_ng_container_2_div_41_Template, 7, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](42, AvailableRoutesPage_ng_container_2_ion_fab_42_Template, 3, 0, "ion-fab", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"]("", ctx_r1.commaSeparate(ctx_r1.origin.name), " - ", ctx_r1.commaSeparate(ctx_r1.destination.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.isreturnTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.isreturnTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.globalData.DEPARTURE_DATE_RETURN && ctx_r1.globalData.DEPARTURE_DATE_RETURN.formattedDate && ctx_r1.commonStorage.getItem("metaData").isRoundTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](18, _c5, ctx_r1.checkBusType("sleeper"), !ctx_r1.checkBusType("sleeper")));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](21, _c3, ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "sprinter" : "sleeper"), !ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "sprinter" : "sleeper")));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"]("Sleeper");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](24, _c5, ctx_r1.checkBusType("semisleeper"), !ctx_r1.checkBusType("semisleeper")));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](27, _c3, ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "shuttle" : "semisleeper"), !ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "shuttle" : "semisleeper")));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"]("Seater");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](30, _c5, ctx_r1.checkBusType("ac"), !ctx_r1.checkBusType("ac")));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](33, _c3, ctx_r1.checkBusType("ac"), !ctx_r1.checkBusType("ac")));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](36, _c5, ctx_r1.checkBusType("nonac"), !ctx_r1.checkBusType("nonac")));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](39, _c3, ctx_r1.checkBusType("nonac"), !ctx_r1.checkBusType("nonac")));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.routes.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.routes.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.subdomain == "abct" || ctx_r1.util.isInternational());
  }
}
function AvailableRoutesPage_ng_container_3_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r1.journeyType == "onward" ? "\u00A0(Onward)" : "\u00A0(Return)");
  }
}
function AvailableRoutesPage_ng_container_3_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"]("", " " + ctx_r1.globalData.DEPARTURE_DATE.monthNameShort, " ", ctx_r1.leadingZero(ctx_r1.globalData.DEPARTURE_DATE.day) + " ", "");
  }
}
function AvailableRoutesPage_ng_container_3_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"]("", " " + ctx_r1.globalData.DEPARTURE_DATE_RETURN.monthNameShort, " ", ctx_r1.leadingZero(ctx_r1.globalData.DEPARTURE_DATE_RETURN.day) + " ", "");
  }
}
function AvailableRoutesPage_ng_container_3_div_19_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 201)(1, "ion-label", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_3_div_19_div_5_Template_ion_label_click_1_listener() {
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r44);
      const item_r46 = ctx_r44.$implicit;
      const i_r47 = ctx_r44.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.getpageDate(1, item_r46.year, item_r46.month, item_r46.day, i_r47));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r46 = ctx.$implicit;
    const i_r47 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](4, _c9, i_r47 == 0 ? "var(--iconsAndButtonsColor)" : "white", i_r47 == 0 ? "var(--primaryText)" : "black"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate3"](" ", item_r46.date[0], ", ", ctx_r1.leadingZero(item_r46.year), " ", item_r46.month, " ");
  }
}
function AvailableRoutesPage_ng_container_3_div_19_ion_icon_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ion-icon", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_3_div_19_ion_icon_7_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r48);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.nextDate(""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AvailableRoutesPage_ng_container_3_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div")(1, "ion-row", 196)(2, "ion-col", 197)(3, "ion-icon", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_3_div_19_Template_ion_icon_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.prevDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "ion-col", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, AvailableRoutesPage_ng_container_3_div_19_div_5_Template, 3, 7, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "ion-col", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, AvailableRoutesPage_ng_container_3_div_19_ion_icon_7_Template, 1, 0, "ion-icon", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](3, _c8, ctx_r1.disablePreviousDateArrow ? "0.2" : "1", ctx_r1.disablePreviousDateArrow ? "none" : "auto"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r1.mineDisplaydate.slice(0, 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.showNextMonth());
  }
}
function AvailableRoutesPage_ng_container_3_div_20_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "departureDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "ion-label", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_3_div_20_div_1_div_5_Template_ion_label_click_2_listener() {
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r50);
      const item_r52 = ctx_r50.$implicit;
      const i_r53 = ctx_r50.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.getpageDateReturn(1, item_r52.year, item_r52.month, item_r52.day, i_r53, item_r52));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r52 = ctx.$implicit;
    const i_r53 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](11, _c11, i_r53 == ctx_r1.selectedIndex, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](1, 4, item_r52, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction3"](7, _c10, ctx_r1.travel_Date_Return_Test.year, ctx_r1.travel_Date_Return_Test.monthNameShort, ctx_r1.travel_Date_Return_Test.day))));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate3"](" ", item_r52.date[0], ", ", ctx_r1.leadingZero(item_r52.year), " ", item_r52.month, " ");
  }
}
function AvailableRoutesPage_ng_container_3_div_20_div_1_ion_icon_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ion-icon", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_3_div_20_div_1_ion_icon_7_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r54);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.nextDate(ctx_r1.selectedIndex));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](1, _c8, ctx_r1.disableDateForOnwardJourny ? "0.2" : "1", ctx_r1.disableDateForOnwardJourny ? "none" : "auto"));
  }
}
function AvailableRoutesPage_ng_container_3_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div")(1, "ion-row", 196)(2, "ion-col", 197)(3, "ion-icon", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_3_div_20_div_1_Template_ion_icon_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r49);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.prevDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "ion-col", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, AvailableRoutesPage_ng_container_3_div_20_div_1_div_5_Template, 4, 14, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "ion-col", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, AvailableRoutesPage_ng_container_3_div_20_div_1_ion_icon_7_Template, 1, 4, "ion-icon", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](3, _c8, ctx_r1.disablePreviousDateArrow ? "0.2" : "1", ctx_r1.disablePreviousDateArrow ? "none" : "auto"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r1.mineDisplaydate.slice(0, 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.showNextMonth());
  }
}
function AvailableRoutesPage_ng_container_3_div_20_div_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_3_div_20_div_2_div_5_Template_div_click_0_listener() {
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r56);
      const item_r58 = ctx_r56.$implicit;
      const i_r59 = ctx_r56.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.getpageDateReturn(2, item_r58.year, item_r58.month, item_r58.day, i_r59, item_r58));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "ion-label", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r58 = ctx.$implicit;
    const i_r59 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](4, _c9, i_r59 == 0 ? "green" : "white", i_r59 == 0 ? "white" : "black"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate3"](" ", item_r58.date[0], ", ", ctx_r1.leadingZero(item_r58.year), " ", item_r58.month, " ");
  }
}
function AvailableRoutesPage_ng_container_3_div_20_div_2_ion_icon_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ion-icon", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_3_div_20_div_2_ion_icon_7_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r60);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.nextDate(""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AvailableRoutesPage_ng_container_3_div_20_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div")(1, "ion-row", 196)(2, "ion-col", 197)(3, "ion-icon", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_3_div_20_div_2_Template_ion_icon_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r55);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.prevDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "ion-col", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, AvailableRoutesPage_ng_container_3_div_20_div_2_div_5_Template, 3, 7, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "ion-col", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, AvailableRoutesPage_ng_container_3_div_20_div_2_ion_icon_7_Template, 1, 0, "ion-icon", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](3, _c8, ctx_r1.disableDateForReturnJournyForRound ? "0.2" : "1", ctx_r1.disableDateForReturnJournyForRound ? "none" : "auto"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r1.returnmineDisplaydate.slice(0, 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.showNextMonth());
  }
}
function AvailableRoutesPage_ng_container_3_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AvailableRoutesPage_ng_container_3_div_20_div_1_Template, 8, 6, "div", 1)(2, AvailableRoutesPage_ng_container_3_div_20_div_2_Template, 8, 6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.isreturnTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.isreturnTrip);
  }
}
function AvailableRoutesPage_ng_container_3_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", ctx_r1.routes.length, " Results");
  }
}
function AvailableRoutesPage_ng_container_3_div_21_ion_card_2_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("(", r_r61.next_day_service, ")");
  }
}
function AvailableRoutesPage_ng_container_3_div_21_ion_card_2_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r1.currencySym + ctx_r1.getPrice(r_r61.fare_str));
  }
}
function AvailableRoutesPage_ng_container_3_div_21_ion_card_2_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r1.currencySym + ctx_r1.getPrice(r_r61.fare_str));
  }
}
function AvailableRoutesPage_ng_container_3_div_21_ion_card_2_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](" " + ctx_r1.currencySym + r_r61.discounted_price);
  }
}
function AvailableRoutesPage_ng_container_3_div_21_ion_card_2_ion_row_26_ng_container_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "img", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("src", item_r62.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsanitizeUrl"]);
  }
}
function AvailableRoutesPage_ng_container_3_div_21_ion_card_2_ion_row_26_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AvailableRoutesPage_ng_container_3_div_21_ion_card_2_ion_row_26_ng_container_3_div_1_Template, 2, 1, "div", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r62 = ctx.$implicit;
    const i_r63 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", i_r63 <= 8 && item_r62.image_url != "");
  }
}
function AvailableRoutesPage_ng_container_3_div_21_ion_card_2_ion_row_26_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](2, "ion-icon", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "span", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const r_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](r_r61.bus_amenities.length - 8);
  }
}
function AvailableRoutesPage_ng_container_3_div_21_ion_card_2_ion_row_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ion-row")(1, "ion-col")(2, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, AvailableRoutesPage_ng_container_3_div_21_ion_card_2_ion_row_26_ng_container_3_Template, 2, 1, "ng-container", 29)(4, AvailableRoutesPage_ng_container_3_div_21_ion_card_2_ion_row_26_ng_container_4_Template, 6, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const r_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", r_r61.bus_amenities);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", r_r61.bus_amenities.length > 8);
  }
}
function AvailableRoutesPage_ng_container_3_div_21_ion_card_2_ion_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ion-button", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_3_div_21_ion_card_2_ion_button_30_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r64);
      const r_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](!r_r61.is_allow_multistation_blocked_service ? ctx_r1.gotoSeatLayout(r_r61) : false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "View Seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AvailableRoutesPage_ng_container_3_div_21_ion_card_2_ion_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ion-button", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_3_div_21_ion_card_2_ion_button_31_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r65);
      const r_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](!r_r61.is_allow_multistation_blocked_service ? ctx_r1.gotoSeatLayout(r_r61) : false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "Available Soon");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AvailableRoutesPage_ng_container_3_div_21_ion_card_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ion-card", 213)(1, "div", 214)(2, "ion-row")(3, "ion-col", 215)(4, "div", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](6, "img", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "div", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](10, AvailableRoutesPage_ng_container_3_div_21_ion_card_2_span_10_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "div", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "ion-col", 219)(14, "div", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](17, AvailableRoutesPage_ng_container_3_div_21_ion_card_2_span_17_Template, 2, 1, "span", 1)(18, AvailableRoutesPage_ng_container_3_div_21_ion_card_2_span_18_Template, 2, 1, "span", 222)(19, AvailableRoutesPage_ng_container_3_div_21_ion_card_2_span_19_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "ion-col", 223)(21, "div", 224)(22, "div", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](23, "Bus Type:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](24, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](26, AvailableRoutesPage_ng_container_3_div_21_ion_card_2_ion_row_26_Template, 5, 2, "ion-row", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](27, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](28, "ion-col", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](29, "ion-col", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](30, AvailableRoutesPage_ng_container_3_div_21_ion_card_2_ion_button_30_Template, 2, 0, "ion-button", 229)(31, AvailableRoutesPage_ng_container_3_div_21_ion_card_2_ion_button_31_Template, 2, 0, "ion-button", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const r_r61 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", r_r61.is_edit_mode == true ? "disableService" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"]("", r_r61.dep_time.slice(0, 5), "\u00A0", r_r61.dep_time.slice(-2), "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"]("\u00A0", r_r61.arr_time.slice(0, 5), "\u00A0", r_r61.arr_time.slice(-2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"]("", r_r61.duration.slice(0, 2), "h ", r_r61.duration.slice(3, 5), "m ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", r_r61.next_day_service);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](r_r61.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", r_r61.available_seats + " ", "seats left");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !r_r61.discounted_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", r_r61.discounted_price && ctx_r1.getPrice(r_r61.fare_str) > r_r61.discounted_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", r_r61.discounted_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](r_r61.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", r_r61.bus_amenities);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !r_r61.is_edit_mode);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", r_r61.is_edit_mode);
  }
}
function AvailableRoutesPage_ng_container_3_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AvailableRoutesPage_ng_container_3_div_21_div_1_Template, 2, 1, "div", 210)(2, AvailableRoutesPage_ng_container_3_div_21_ion_card_2_Template, 32, 17, "ion-card", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.routes.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r1.routes);
  }
}
function AvailableRoutesPage_ng_container_3_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 239)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "No buses are available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4, "You can book our next available date starting on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "span", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6, "Wednesday, July 31st!");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("hidden", true);
  }
}
function AvailableRoutesPage_ng_container_3_ion_footer_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ion-footer", 242)(1, "ion-toolbar", 243)(2, "ion-row")(3, "ion-col", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_3_ion_footer_23_Template_ion_col_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r66);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.filterBusType(ctx_r1.subdomain == "abct" ? "sprinter" : "sleeper"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "img", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "ion-col", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_3_ion_footer_23_Template_ion_col_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r66);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.filterBusType(ctx_r1.subdomain == "abct" ? "shuttle" : "semisleeper"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](8, "img", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "ion-col", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_3_ion_footer_23_Template_ion_col_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r66);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.filterBusType("ac"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](12, "img", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14, "A/C");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "ion-col", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_3_ion_footer_23_Template_ion_col_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r66);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.filterBusType("nonac"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](16, "img", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18, " Non-A/C");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](19, "ion-col", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_3_ion_footer_23_Template_ion_col_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r66);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.shortFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](20, " Sort /");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](22, "Filter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("src", ctx_r1.subdomain == "abct" ? "./assets/icon/sprinter.png" : "./assets/icon/ourbus_filter_sleeper.svg", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsanitizeUrl"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](10, _c3, ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "sprinter" : "sleeper"), !ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "sprinter" : "sleeper")));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](13, _c4, ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "sprinter" : "sleeper"), !ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "sprinter" : "sleeper")));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r1.subdomain == "abct" ? "Sprinter" : "Sleeper");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("src", ctx_r1.subdomain == "abct" ? "./assets/icon/shuttle.png" : "./assets/icon/ourbus_filter_seat.svg", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsanitizeUrl"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](16, _c3, ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "shuttle" : "semisleeper"), !ctx_r1.checkBusType(ctx_r1.subdomain == "abct" ? "shuttle" : "semisleeper")));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r1.subdomain == "abct" ? "Shuttle" : "Seater");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](19, _c3, ctx_r1.checkBusType("ac"), !ctx_r1.checkBusType("ac")));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](22, _c3, ctx_r1.checkBusType("nonac"), !ctx_r1.checkBusType("nonac")));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](25, _c4, ctx_r1.checkBusType("nonac"), !ctx_r1.checkBusType("nonac")));
  }
}
function AvailableRoutesPage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "ion-header", 184)(2, "ion-toolbar", 82)(3, "ion-row")(4, "ion-col", 185)(5, "ion-icon", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AvailableRoutesPage_ng_container_3_Template_ion_icon_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r42);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.goBack(ctx_r1.isreturnTrip.toString(), ctx_r1.routes.length));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "ion-col", 187)(7, "ion-title", 188)(8, "div", 189)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](11, "ion-icon", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](14, AvailableRoutesPage_ng_container_3_span_14_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](15, AvailableRoutesPage_ng_container_3_div_15_Template, 2, 2, "div", 191)(16, AvailableRoutesPage_ng_container_3_div_16_Template, 2, 2, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "ion-content", 192)(18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](19, AvailableRoutesPage_ng_container_3_div_19_Template, 8, 6, "div", 1)(20, AvailableRoutesPage_ng_container_3_div_20_Template, 4, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](21, AvailableRoutesPage_ng_container_3_div_21_Template, 3, 2, "div", 1)(22, AvailableRoutesPage_ng_container_3_div_22_Template, 7, 1, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](23, AvailableRoutesPage_ng_container_3_ion_footer_23_Template, 23, 28, "ion-footer", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r1.commaSeparate(ctx_r1.origin.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r1.commaSeparate(ctx_r1.destination.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.selectedTripSegment == "twoway");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.isreturnTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.isreturnTrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.TripType == "oneway");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.TripType == "twoway");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.routes.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.routes.length == 0 && ctx_r1.showingNoBusIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.subdomain != "abct" && !ctx_r1.util.isInternational());
  }
}
class AvailableRoutesPage {
  constructor(theme, navCtrl, commonStorage, commonService, apiFacory, dateService, loader, util, ex, route, globalData, menu, modalController, auth, appData, alertController) {
    this.theme = theme;
    this.navCtrl = navCtrl;
    this.commonStorage = commonStorage;
    this.commonService = commonService;
    this.apiFacory = apiFacory;
    this.dateService = dateService;
    this.loader = loader;
    this.util = util;
    this.ex = ex;
    this.route = route;
    this.globalData = globalData;
    this.menu = menu;
    this.modalController = modalController;
    this.auth = auth;
    this.appData = appData;
    this.alertController = alertController;
    this.routes = [];
    this.copyRoutes = [];
    this.routesFull = [];
    this.searchData = [];
    this.origin = [];
    this.bus_classification = false;
    this.destination = [];
    this.travelDate = [];
    this.dateFull = [];
    this.showFilter = false;
    this.boardingPoints = [];
    this.droppingPoints = [];
    this.orderByField = "dep_time";
    this.order = 'DESC';
    this.orderBy = "dep_time,1";
    this.showDepartedroutesBtn = false;
    this.showContinueReturn = false;
    this.noRouteFound = {
      code: 0,
      message: ""
    };
    this.mySlideOptions = {
      initialSlide: 0,
      loop: false
    };
    this.isBPDP = false;
    this.bp = false;
    this.dp = false;
    this.isreturnTrip = false;
    this.filterData = {
      sortBy: '',
      busType: [],
      sourceDepartureTime: [],
      destinationDepartureTime: [],
      boradingPoint: [],
      droppingPoint: []
    };
    this.minearrayDate = [];
    this.mineDisplaydate = [];
    this.returnmineDisplaydate = [];
    this.isRoundTrip = false;
    this.show_discounted_fare_in_srp = false;
    this.showingNoBusIcon = false;
    this.hideShowOldTheme = false;
    this.selectedIndex = 0;
    this.imageLoadErrors = [];
    // gettodaysDate: Date;
    this.selectedTripSegment = 'oneway';
    this.disableDateForOnwardJourny = false;
    this.disableDateForReturnJourny = false;
    this.isSameDatevalue = false;
    this.tapNextCalenderButton = false;
    this.tapPreviousCalenderButtonIndex = false;
    this.isIos = false;
    this.queryParamsSub = rxjs__WEBPACK_IMPORTED_MODULE_19__.Subscription;
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    //this.commonService.gTrack("serviceselection");
    this.metaData = this.commonStorage.getItem("metaData");
    this.subdomain = this.metaData.subdomain;
    this.orderByPipe = new _pipes_orderby_pipe__WEBPACK_IMPORTED_MODULE_1__.OrderbyPipe();
    this.show_discounted_fare_in_srp = this.metaData.show_discounted_fare_in_srp;
    this.appData.newTheme = this.util.getNewTheme();
    if (this.appData.newTheme) {
      this.hideShowOldTheme = false;
    } else {
      this.hideShowOldTheme = true;
    }
    this.selectedTripSegment = this.commonStorage.getItem('selectedTripSegment');
    this.travel_Date_Return_Test = this.commonStorage.localGet('travelDateReturn1');
  }
  goBack(isRound = '', serviceCount = 0) {
    const isOurBusTheme = this.metaData.msiteFolder === 'ourbustheme';
    if (isOurBusTheme) {
      if (isRound) {
        // If it's a round trip and service count is 0, show an alert box
        serviceCount === 0 ? this.callAlertBox() : this.navCtrl.navigateBack(['/stage-details']);
      } else {
        // Otherwise navigate back to the home page
        this.navCtrl.navigateBack(['/home']);
      }
    } else {
      if (this.isreturnTrip) {
        // If it's a return trip, navigate back to seat layout
        this.navCtrl.navigateBack(['/seat-layout']);
      } else {
        // Otherwise navigate back to the home tab
        this.navCtrl.navigateBack(['/tabs/home']);
      }
    }
  }
  ionViewWillEnter() {
    //clear local storage seat selection
    this.commonStorage.localRemove('selectedSeat');
    this.commonStorage.localRemove('selectedSeatReturn');
    //end
    this.isRoundTrip = this.commonStorage.getItem("metaData") ? this.commonStorage.getItem("metaData").isRoundTrip : false;
    this.showRoundTripBox = this.isRoundTrip;
    this.departureDate = this.globalData.DEPARTURE_DATE;
    this.departureDateReturn = this.globalData.DEPARTURE_DATE_RETURN;
    console.log('this.departureDate', this.departureDate.monthNameShort);
  }
  ionViewDidEnter() {
    let hasCalledDefault = false;
    this.route.queryParams.subscribe(params => {
      if (!hasCalledDefault) {
        this.isreturnTrip = params["is_return_trip"];
        this.journeyTypeSelect();
        if (this.metaData.gst_tsrtc_enable) {
          this.defaultCall(true);
        }
        hasCalledDefault = true;
        this.queryParamsSub.unsubscribe();
      }
    });
    if (!this.metaData.gst_tsrtc_enable) {
      this.defaultCall(true);
    }
  }
  ngOnInit() {
    this.appData.newTheme = this.util.getNewTheme();
    if (this.appData.newTheme) {
      this.hideShowOldTheme = false;
    } else {
      this.hideShowOldTheme = true;
    }
    this.searchLog = this.globalData.SEARCH_DATA;
  }
  accountDeRegisterAlert(title, msg) {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: title,
        message: msg,
        backdropDismiss: false,
        buttons: [{
          text: 'Ok',
          handler: () => {
            _this.auth.logout();
            _this.navCtrl.navigateForward('tabs/home');
          }
        }]
      });
      yield alert.present();
    })();
  }
  defaultCall(getval) {
    this.TripType = this.commonStorage.localGet("selectedTripSegment");
    this.route.queryParams.subscribe(params => {
      this.isreturnTrip = params["is_return_trip"];
    });
    if (this.metaData.msiteFolder == 'ourbustheme') {
      if (getval && this.isSameDatevalue == false) {
        const dateParts = this.globalData.DEPARTURE_DATE.formattedDate.split("-");
        const rearrangedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
        var newDate = new Date(rearrangedDate);
        var aryDates = this.GetDatesPro(newDate, 6, 1);
        this.dateDisplayData(aryDates, 1);
        this.selectedbox = 0;
        if (this.isreturnTrip) {
          const datePartsRet = this.globalData.DEPARTURE_DATE_RETURN.formattedDate.split("-");
          const rearrangedDateRet = `${datePartsRet[2]}-${datePartsRet[1]}-${datePartsRet[0]}`;
          var newDateRet = new Date(rearrangedDateRet);
          var aryDatesRet = this.GetDatesPro(newDateRet, 6, 2);
          this.dateDisplayData(aryDatesRet, 2);
          this.selectedboxreturn = 0;
        }
      } else {
        if (this.isreturnTrip) {
          const datePartsRet = this.globalData.DEPARTURE_DATE_RETURN.formattedDate.split("-");
          const rearrangedDateRet = `${datePartsRet[2]}-${datePartsRet[1]}-${datePartsRet[0]}`;
          var newDateRet = new Date(rearrangedDateRet);
          var aryDatesRet = this.GetDatesPro(newDateRet, 6, 2);
          this.dateDisplayData(aryDatesRet, 2);
          this.selectedboxreturn = 0;
        }
      }
    } else {
      if (getval) {
        const dateParts = this.globalData.DEPARTURE_DATE.formattedDate.split("-");
        const rearrangedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
        var newDate = new Date(rearrangedDate);
        var aryDates = this.GetDatesPro(newDate, 6, 1);
        this.dateDisplayData(aryDates, 1);
        this.selectedbox = 0;
        if (this.isreturnTrip) {
          const datePartsRet = this.globalData.DEPARTURE_DATE_RETURN.formattedDate.split("-");
          const rearrangedDateRet = `${datePartsRet[2]}-${datePartsRet[1]}-${datePartsRet[0]}`;
          var newDateRet = new Date(rearrangedDateRet);
          var aryDatesRet = this.GetDatesPro(newDateRet, 6, 2);
          this.dateDisplayData(aryDatesRet, 2);
          this.selectedboxreturn = 0;
        }
      }
    }
    if (!this.util.checkConnection()) {
      return false;
    }
    if (this.isreturnTrip) {
      //this.commonService.gTrack('roundtripsearch');
      this.commonService.gTrack('roundtripsearch');
      this.origin = this.globalData.SEARCH_DATA.destCity;
      this.destination = this.globalData.SEARCH_DATA.originCity;
      if (this.metaData.allowBPDPFare) {
        this.commonStorage.localSet('ORIGIN_ID_RET', this.globalData.SEARCH_DATA.destCity.id);
        this.commonStorage.localSet('DESTINATION_ID_RET', this.globalData.SEARCH_DATA.originCity.id);
      }
      this.dateFull = this.globalData.DEPARTURE_DATE_RETURN;
      this.travelDate = this.globalData.DEPARTURE_DATE_RETURN.formattedDate;
    } else {
      if (this.metaData.allowBPDPFare) {
        this.commonStorage.localSet('ORIGIN_ID', this.globalData.SEARCH_DATA.originCity.id);
        this.commonStorage.localSet('DESTINATION_ID', this.globalData.SEARCH_DATA.destCity.id);
      }
      this.origin = this.globalData.SEARCH_DATA.originCity;
      this.destination = this.globalData.SEARCH_DATA.destCity;
      this.dateFull = this.globalData.DEPARTURE_DATE;
      this.travelDate = this.globalData.DEPARTURE_DATE.formattedDate;
    }
    if (!this.auth.isLoggedIn()) {
      var h = {
        dest_id: this.destination.id,
        dest_name: this.destination.name,
        origin_id: this.origin.id,
        origin_name: this.origin.name,
        search_time: this.travelDate
      };
      if (this.commonStorage.localGet('recent-search-offline') && this.commonStorage.localGet('recent-search-offline').length > 0) {
        let allData = this.commonStorage.localGet('recent-search-offline');
        let checkData = allData.filter(ele => {
          if (ele.origin_id == this.origin.id && ele.dest_id == this.destination.id) {
            if (this.travelDate != ele.search_time) {
              ele.search_time = this.travelDate;
              // return ;
            }
          }
          return ele.origin_id == this.origin.id && ele.dest_id == this.destination.id;
        });
        this.commonStorage.localSet('recent-search-offline', allData);
        this.auth.setRecentSearch();
        if (checkData.length < 1) {
          let addData = this.commonStorage.localGet('recent-search-offline');
          addData.push(h);
          this.commonStorage.localSet('recent-search-offline', addData);
          this.auth.setRecentSearch();
        }
      } else {
        let addData = [];
        addData.push(h);
        this.commonStorage.localSet('recent-search-offline', addData);
        this.auth.setRecentSearch();
      }
    } else {
      this.commonStorage.localRemove('recent-search-offline');
      this.auth.setRecentSearch();
    }
    this.currencySym = this.commonStorage.localGet('metaData') ? this.commonStorage.localGet('metaData').currencySym : '₹';
    let travelDateQuery = this.commonService.apiFormatDate(this.dateFull);
    this.bookingAfterTravelDate = this.commonStorage.localGet('metaData') ? this.commonStorage.localGet('metaData')['is_allow_booking_after_travel_date'] : false;
    this.disablePreviousDateArrow = this.bookingAfterTravelDate ? false : this.dateService.isPast(this.dateFull.day, this.dateFull.month, this.dateFull.year);
    if (this.metaData.msiteFolder == 'ourbustheme') {
      if (this.TripType == 'twoway' && !this.isreturnTrip) {
        // condition to handle return date arrow button
        let trave_date_Test = this.commonStorage.localGet('travelDate1');
        let travel_date = this.dateService.parseDateFromString(trave_date_Test.formattedDate);
        this.disableDateForReturnJourny = this.dateService.isOneDayBeforeGivenDate(this.dateFull.day, this.dateFull.month, this.dateFull.year, travel_date);
        // condition to handle departue date arrow button
        let travel_Date_Return_Test = this.commonStorage.localGet('travelDateReturn1');
        let travel_Date_Return = this.dateService.parseDateFromString(travel_Date_Return_Test.formattedDate);
        let selectedDateObj = new Date(this.dateFull.year, this.dateFull.month - 1, this.dateFull.day);
        let oneDayAfter = new Date(selectedDateObj);
        oneDayAfter.setDate(selectedDateObj.getDate() + 1);
        let twoDaysAfter = new Date(selectedDateObj);
        twoDaysAfter.setDate(selectedDateObj.getDate() + 2);
        let travelDate = new Date(travel_Date_Return_Test.year, travel_Date_Return_Test.month - 1, travel_Date_Return_Test.day);
        const areDatesEqual = (date1, date2) => date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
        const isOneDayAfter = areDatesEqual(oneDayAfter, travelDate);
        const isTwoDaysAfter = areDatesEqual(twoDaysAfter, travelDate);
        const isSameDate = areDatesEqual(selectedDateObj, travelDate);
        this.disableDateForOnwardJourny = this.dateService.isSameOrOneDayAfterGivenDate(this.dateFull.day, this.dateFull.month, this.dateFull.year, travel_Date_Return);
        let isNextDay = this.commonStorage.localGet("isNextDay");
        let isSameStartEndDate = this.commonStorage.localGet("isSameStartEndDate");
        if (isNextDay == "yes") {
          this.isTwoDaysAfter = 'no';
          if (isSameDate) {
            this.isSameDatevalue = true;
            this.selectedIndex = 1;
            this.isOneDayAfter = 'no';
          } else if (isOneDayAfter) {
            this.isSameDatevalue = true;
            this.selectedIndex = 0;
            this.isOneDayAfter = 'yes';
          } else {
            this.isSameDatevalue = false;
            this.selectedIndex = 0;
            this.isOneDayAfter = 'no';
          }
        } else if (isSameStartEndDate == 'yes') {
          if (isSameDate) {
            this.isSameDatevalue = true;
            this.selectedIndex = 0;
            this.isSameDate = 'yes';
          } else {
            this.isSameDatevalue = false;
            this.selectedIndex = 0;
            this.isSameDate = 'no';
          }
        } else {
          if (isSameDate || isOneDayAfter || isTwoDaysAfter) {
            this.isSameDatevalue = true;
            if (isSameDate) {
              let dd = this.commonStorage.localGet("isCSameStartEndDate");
              if (dd == 'yes') {
                this.selectedIndex = 0;
                this.isTwoDaysAfter = 'no';
              } else {
                if (!this.tapNextCalenderButton) {
                  if (this.tapSelectedIndex != undefined && this.tapSelectedIndex == 2) {
                    this.selectedIndex = 2;
                    this.isTwoDaysAfter = 'no';
                  } else if (this.tapSelectedIndex != undefined && this.tapSelectedIndex == 1) {
                    this.selectedIndex = 1;
                    this.isTwoDaysAfter = 'no';
                  }
                } else {
                  if (this.tapSelectedIndex == 2) {
                    this.selectedIndex = 2;
                    this.isTwoDaysAfter = 'no';
                  } else {
                    this.selectedIndex = 2;
                    this.isTwoDaysAfter = 'no';
                  }
                }
              }
            }
            if (isOneDayAfter) {
              if (!this.tapNextCalenderButton) {
                if (this.tapSelectedIndex != undefined && (this.tapSelectedIndex == 2 || this.tapSelectedIndex == 0)) {
                  this.selectedIndex = 0;
                  this.isTwoDaysAfter = 'no';
                } else {
                  this.selectedIndex = 1;
                  this.isTwoDaysAfter = 'no';
                }
              } else {
                if (this.tapSelectedIndex == 0) {
                  this.selectedIndex = 1;
                  this.isTwoDaysAfter = 'no';
                } else {
                  this.selectedIndex = 1;
                  this.isTwoDaysAfter = 'no';
                }
              }
              if (this.tapPreviousCalenderButtonIndex && !this.tapNextCalenderButton && this.tapSelectedIndex == 1) {
                this.selectedIndex = 0;
                this.isTwoDaysAfter = 'no';
              } else if (this.tapPreviousCalenderButtonIndex && !this.tapNextCalenderButton && this.tapSelectedIndex == 2) {
                this.selectedIndex = 1;
                this.isTwoDaysAfter = 'no';
              }
            }
            if (isTwoDaysAfter) {
              if (this.tapPreviousCalenderButtonIndex && (this.tapSelectedIndex == 1 || this.tapSelectedIndex == 0)) {
                this.isTwoDaysAfter = 'no';
                this.selectedIndex = 0;
                this.isSameDatevalue = false;
                window.location.reload();
              } else {
                this.selectedIndex = 0;
                this.isTwoDaysAfter = 'yes';
              }
            }
          } else {
            this.isSameDatevalue = false;
            this.isTwoDaysAfter = 'no';
            this.selectedIndex = 0;
          }
        }
      } else if (this.TripType == 'twoway' && this.isreturnTrip) {
        let travel_Date = this.commonStorage.localGet('travelDate1');
        let travel_Date1 = this.dateService.parseDateFromString(travel_Date.formattedDate);
        this.disableDateForReturnJournyForRound = this.dateService.isSameOrOneDayAfterTravelDate(this.dateFull.day, this.dateFull.month, this.dateFull.year, travel_Date1);
      }
    }
    this.travelDateHeader = this.dateService.headerDate(this.travelDate);
    var th = this;
    th.loader.showLoadingDefault();
    let path = '';
    if (this.metaData.msiteFolder == 'ourbustheme') {
      let passengerCount = this.commonStorage.localGet("ourbusPassengerCount");
      path = this.origin.id + '/' + this.destination.id + '/' + travelDateQuery + '.json?show_only_available_services=false&show_injourney_services=true&passenger_count=' + passengerCount;
    } else {
      path = this.origin.id + '/' + this.destination.id + '/' + travelDateQuery + '.json?show_only_available_services=false&show_injourney_services=true';
    }
    // if(this.appData.isIOS){
    this.clevertapDate = this.commonService.apiFormatDate(this.dateFull);
    ;
    // }
    this.apiFacory.getAvaiableRoutes(path).subscribe(routes => {
      this.filterData = {
        sortBy: '',
        busType: [],
        sourceDepartureTime: [],
        destinationDepartureTime: [],
        boradingPoint: [],
        droppingPoint: []
      };
      this.routes = routes;
      this.showOverlay = this.commonStorage.getItem('availableRoutesOverlay');
      th.loader.hideLoadingDefault();
      this.showingNoBusIcon = true;
      if (routes && !routes.code) {
        this.routes = this.orderByPipe.transform(this.routes, ['price']);
        this.routesFull = this.routes;
        var today = this.dateService.getToday();
        this.copyRoutes = this.routes;
        if (this.travelDate == today.formattedDate) {
          // this.routes = this.routes.filter(ele => {
          //   //  return this.convertTime12to24(ele.dep_time) >= this.time;
          // });
        }
        var departedRoutes = this.routesFull.filter(ele => {
          //  return this.convertTime12to24(ele.dep_time) < this.time;
        });
        if (departedRoutes.length > 0 && this.travelDate == today.formattedDate) {
          this.showDepartedroutesBtn = true;
        } else {
          this.showDepartedroutesBtn = false;
        }
        this.orderByField = "dep_time";
        this.order = 'DESC';
        this.orderBy = "dep_time,1";
      } else {
        this.routes = [];
        this.noRouteFound = routes;
      }
    }, error => {
      th.loader.hideLoadingDefault();
      if (!this.util.isConnected()) {
        this.util.showAlert("Error Loading", "Internet is not connected. Please connect internet and try again!");
      } else {
        this.util.showAlert("Error Loading", "Something went wrong, please try after sometime");
      }
      this.navCtrl.pop();
      this.ex.call('AvailableRoutesPage', "defaultCall() --> this.apiFacory.getAvaiableRoutes", error);
    });
  }
  gotoSeatLayout(route) {
    if (route.is_edit_mode === true) {
      this.util.showToast('This trip is temporarily not available');
      return;
    }
    if (!this.util.checkConnection()) {
      return;
    }
    const isReturnTrip = this.isreturnTrip;
    const isBPDPFare = this.metaData.allowBPDPFare;
    const travelDateKey = isReturnTrip ? 'travelDateReturn' : 'travelDate';
    const selectedRouteKey = isReturnTrip ? 'SELECTED_ROUTE_RETURN' : 'SELECTED_ROUTE';
    const resIdKey = isReturnTrip ? 'RES_ID_RET' : 'RES_ID';
    const originKey = isReturnTrip ? 'ORIGIN_ID_RET' : 'ORIGIN_ID';
    const destKey = isReturnTrip ? 'DESTINATION_ID_RET' : 'DESTINATION_ID';
    const boardingKey = isReturnTrip ? 'BOARDING_DETAILS_RET' : 'BOARDING_DETAILS';
    const droppingKey = isReturnTrip ? 'DROPPING_DETAILS_RET' : 'DROPPING_DETAILS';
    const depTimeKey = isReturnTrip ? 'DEP_TIME_RET' : 'DEP_TIME';
    this.commonStorage.localSet('SERVICE_DESCRIPTION', route.description && route.is_show_description ? route.description : '');
    this.commonStorage.localSet('AMENITIES', route.bus_amenities || []);
    this.globalData.AMENITIES = route.bus_amenities || [];
    this.commonStorage.localSet('REST_STOPS', route.rest_stop_details || []);
    this.globalData.REST_STOPS = route.rest_stop_details || [];
    this.globalData[selectedRouteKey] = route;
    this.commonStorage.localSet(selectedRouteKey, route);
    this.commonStorage.localSet(resIdKey, route.reservation_id);
    if (isBPDPFare) {
      const origin = isReturnTrip ? this.globalData.SEARCH_DATA.destCity.id : this.globalData.SEARCH_DATA.originCity.id;
      const destination = isReturnTrip ? this.globalData.SEARCH_DATA.originCity.id : this.globalData.SEARCH_DATA.destCity.id;
      this.commonStorage.localSet(originKey, origin);
      this.commonStorage.localSet(destKey, destination);
    } else {
      this.commonStorage.localSet(originKey, route.origin_id);
      this.commonStorage.localSet(destKey, route.destination_id);
    }
    this.commonStorage.localSet(boardingKey, route.boarding_point_details);
    this.commonStorage.localSet(droppingKey, route.drop_off_details);
    this.commonStorage.localSet(depTimeKey, route.dep_time);
    this.commonStorage.localSet(travelDateKey, isReturnTrip ? this.globalData.DEPARTURE_DATE_RETURN : this.globalData.DEPARTURE_DATE);
    const navigationExtras = isReturnTrip ? {
      queryParams: {
        is_return_trip: true
      }
    } : {};
    this.commonService.gTrack('available routes');
    this.commonService.gTrack('serviceSelection', 'service selected in trips search result');
    if (isBPDPFare) {
      this.navCtrl.navigateForward('stage-details-apply-bp-dp', navigationExtras);
    } else {
      this.navCtrl.navigateForward('seat-layout', navigationExtras);
    }
    if (this.metaData.msiteFolder == 'ourbustheme') {
      this.cleverTapViewSeatsEvent(route);
    }
    localStorage.setItem('isBima', route.is_bima ? String(route.is_bima) : 'false');
    localStorage.setItem('isBPDP', route.is_apply_bp_dp_fare ? String(route.is_apply_bp_dp_fare) : 'false');
    if (!isReturnTrip) {
      this.getDeals(route);
    }
  }
  blockService(msg) {
    this.util.showToast("Booking will be available from " + msg + " for this route");
  }
  getPrice(price) {
    var x = price.split(',').sort(function (a, b) {
      return a - b;
    });
    x = x.filter(function (e) {
      return e;
    });
    return x[0];
  }
  formatDate(inputDate) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const [day, month, year] = inputDate.split("/");
    const formattedMonth = months[parseInt(month) - 1];
    return `${day} - ${formattedMonth}`;
  }
  showDescription(text) {
    if (text != "" && text != null && text.length >= '32') return text.substring(0, 32) + "...";else return text.substring(0, 35) + "";
  }
  getDeals(route) {
    if (!this.util.checkConnection()) {
      return false;
    }
    var resId = route.reservation_id;
    this.apiFacory.getDealsForReservation(resId).subscribe(res => {
      if (res[resId]) {
        this.commonStorage.localSet('deals_for_res', res[resId]);
      }
    }, err => {});
  }
  departureDateModal(type) {
    var _this2 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.departureDate = _this2.globalData.DEPARTURE_DATE;
      let modal = yield _this2.modalController.create({
        component: _calendar_modal_calendar_modal_page__WEBPACK_IMPORTED_MODULE_2__.CalendarModalPage,
        componentProps: {
          departureDate: _this2.departureDate,
          showPastDate: false,
          title: type == 1 ? 'Select Journey Date' : "Select Return Date",
          departureDateReturn: _this2.departureDateReturn,
          maxDateSelection: _this2.dateService.getAdvanceDate(_this2.commonStorage.getItem("metaData").advance_booking_days),
          type: type
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if (data) {
        if (type == 1) {
          _this2.departureDate = data;
          _this2.selectedbox = 0;
          _this2.globalData.DEPARTURE_DATE = _this2.departureDate;
          _this2.commonStorage.localSet('travelDate', _this2.departureDate);
          //start get next 7 dtaes button
          const dateParts = _this2.departureDate.formattedDate.split("-");
          const rearrangedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
          var newDate = new Date(rearrangedDate);
          var aryDates = _this2.GetDatesPro(newDate, 6, type);
          _this2.dateDisplayData(aryDates, type);
          //end
          if (_this2.showRoundTripBox) {
            if (_this2.departureDateReturn && _this2.dateService.comparedate(_this2.departureDate, _this2.departureDateReturn)) {
              _this2.departureDateReturn = _this2.dateService.getNextPrevDate(_this2.departureDate, 1);
              _this2.globalData.DEPARTURE_DATE_RETURN = _this2.departureDateReturn;
              _this2.commonStorage.localSet('travelDateReturn', _this2.departureDateReturn);
              _this2.selectedboxreturn = 0;
              const datePartsRet = _this2.departureDateReturn.formattedDate.split("-");
              const rearrangedDateRet = `${datePartsRet[2]}-${datePartsRet[1]}-${datePartsRet[0]}`;
              var newDateRet = new Date(rearrangedDateRet);
              var aryDatesRet = _this2.GetDatesPro(newDateRet, 6, 2);
              _this2.dateDisplayData(aryDatesRet, 2);
            }
          } else {}
        } else {
          _this2.selectedboxreturn = 0;
          _this2.departureDateReturn = data;
          const dateParts = _this2.departureDateReturn.formattedDate.split("-");
          const rearrangedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
          var newDate = new Date(rearrangedDate);
          var aryDates = _this2.GetDatesPro(newDate, 6, type);
          _this2.dateDisplayData(aryDates, type);
          _this2.globalData.DEPARTURE_DATE_RETURN = _this2.departureDateReturn;
          _this2.commonStorage.localSet('travelDateReturn', data);
        }
      }
      _this2.defaultCall(true);
    })();
  }
  // get 7days button
  GetDatesPro(startDate, daysToAdd, type) {
    if (type == 1) {
      var aryDates = [];
      for (var i = 0; i <= daysToAdd; i++) {
        var currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);
        aryDates.push(this.DayAsString(currentDate.getDay()) + " " + currentDate.getDate() + " " + this.MonthAsString(currentDate.getMonth()) + " " + currentDate.getFullYear());
      }
    } else {
      var aryDates = [];
      for (var i = 0; i <= daysToAdd; i++) {
        var currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);
        aryDates.push(this.DayAsString(currentDate.getDay()) + " " + currentDate.getDate() + " " + this.MonthAsString(currentDate.getMonth()) + " " + currentDate.getFullYear());
      }
    }
    return aryDates;
  }
  DayAsString(dayIndex) {
    var weekdays = new Array(7);
    weekdays[0] = "Sun";
    weekdays[1] = "Mon";
    weekdays[2] = "Tue";
    weekdays[3] = "Wed";
    weekdays[4] = "Thu";
    weekdays[5] = "Fri";
    weekdays[6] = "Sat";
    return weekdays[dayIndex];
  }
  MonthAsString(monthIndex) {
    var d = new Date();
    var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
    return month[monthIndex];
  }
  dateDisplayData(aryDates, type) {
    if (type == 1) {
      this.mineDisplaydate.splice(0, this.mineDisplaydate.length);
      for (let i = 0; i < aryDates.length; ++i) {
        const date = aryDates[i].split(' ');
        const displaydt = {
          "date": date[0].split(' '),
          "year": date[1],
          "month": date[2],
          "day": date[3]
        };
        this.mineDisplaydate.push(displaydt);
      }
    } else {
      this.returnmineDisplaydate.splice(0, this.returnmineDisplaydate.length);
      for (let i = 0; i < aryDates.length; ++i) {
        const date = aryDates[i].split(' ');
        const displaydt = {
          "date": date[0].split(' '),
          "year": date[1],
          "month": date[2],
          "day": date[3]
        };
        this.returnmineDisplaydate.push(displaydt);
      }
    }
  }
  getpageDate(type, day, month, year, i) {
    if (this.metaData.msiteFolder == 'ourbustheme') {
      const rearrangedDate = `${year}-${month}-${day}`;
      let parsedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_20__.parse)(rearrangedDate, 'yyyy-MMM-dd', new Date());
      const getdateSelected = (0,date_fns__WEBPACK_IMPORTED_MODULE_21__.format)(parsedDate, 'yyyy-MM-dd');
      var newDate = new Date(getdateSelected);
      var aryDates = this.GetDatesPro(newDate, 6, type);
      this.dateDisplayData(aryDates, type);
      // var dateselectData = new Date(standardDateString);
      if (type == 1) {
        var data = this.dateService.getToday_got(newDate);
        this.departureDate = data;
        this.globalData.DEPARTURE_DATE = this.departureDate;
        this.commonStorage.localSet('travelDate', this.departureDate);
        this.commonStorage.setItem("travelDate", this.departureDate);
        if (this.showRoundTripBox) {
          if (this.departureDateReturn && this.dateService.comparedate(this.departureDate, this.departureDateReturn)) {
            this.departureDateReturn = this.dateService.getNextPrevDate(this.departureDate, 1);
            this.globalData.DEPARTURE_DATE_RETURN = this.departureDateReturn;
            this.commonStorage.localSet('travelDateReturn', this.departureDateReturn);
            this.commonStorage.setItem("travelDateReturn", this.departureDateReturn);
            this.selectedboxreturn = 0;
            const datePartsRet = this.departureDateReturn.formattedDate.split("-");
            const rearrangedDateRet = `${datePartsRet[2]}-${datePartsRet[1]}-${datePartsRet[0]}`;
            var newDateRet = new Date(rearrangedDateRet);
            var aryDatesRet = this.GetDatesPro(newDateRet, 6, 2);
            // var aryDatesRet = newDateRet;
            //  //console.log(newDateRet,'array data dates')
            this.dateDisplayData(aryDatesRet, 2);
          }
        }
      } else {
        var data = this.dateService.getToday_got(newDate);
        this.departureDateReturn = data;
        this.globalData.DEPARTURE_DATE_RETURN = this.departureDateReturn;
        this.commonStorage.localSet('travelDateReturn', data);
      }
    } else {
      if (type == 1) {
        this.selectedbox = i;
        // this.util.showToast(this.sendDate);
        var dateselect = year + '-' + month + '-' + day;
        var getDate = dateselect.split('-');
        const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
        const monthIndex = months.indexOf(getDate[1].toLowerCase());
        const dayname = parseInt(getDate[2], 10);
        const standardDayString = dayname < 10 ? `0${dayname}` : `${dayname}`;
        let month_in_string;
        if (monthIndex <= 9) {
          month_in_string = (monthIndex + 1).toString();
          month_in_string = '0' + month_in_string;
        } else {
          month_in_string = (monthIndex + 1).toString();
        }
        const standardDateString = `${getDate[0]}-${month_in_string}-${standardDayString}`;
        // const standardDateString = `${getDate[0]}-${monthIndex + 1}-${getDate[2]}`;
        var dateselectData = new Date(standardDateString);
        var data = this.dateService.getToday_got(dateselectData);
        // var data = {
        // day: dateselectData.getDate(),
        // dayNameShort: this.util.getDayName(dateselectData.getDay() + 1).slice(0, 3),
        // monthNameShort: this.util.getMonthName(dateselectData.getMonth() + 1).slice(0, 3),
        // month: dateselectData.getMonth()+1,
        // year: dateselectData.getFullYear(),
        // dayName: this.util.getDayName(dateselectData.getDay()+1),
        // monthName: this.util.getMonthName(dateselectData.getMonth()+1),
        // formattedDate: this.dateService.preZero(dateselectData.getDate()) + "-" + this.dateService.preZero((dateselectData.getMonth()+1)) + "-" + dateselectData.getFullYear()
        // }
        this.departureDate = data;
        // this.checkValidDepAndReturn(data);
        this.globalData.DEPARTURE_DATE = this.departureDate;
        this.commonStorage.localSet('travelDate', this.departureDate);
        //start get next 7 dtaes button
        const dateParts = this.departureDate.formattedDate.split("-");
        const rearrangedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
        // var newDate = new Date(rearrangedDate);
        // var aryDates = this.GetDatesPro(newDate, 6);
        // this.dateDisplayData(aryDates);
        //end
        if (this.showRoundTripBox) {
          if (this.departureDateReturn && this.dateService.comparedate(this.departureDate, this.departureDateReturn)) {
            this.departureDateReturn = this.dateService.getNextPrevDate(this.departureDate, 1);
            this.globalData.DEPARTURE_DATE_RETURN = this.departureDateReturn;
            this.commonStorage.localSet('travelDateReturn', this.departureDateReturn);
            this.selectedboxreturn = 0;
            const datePartsRet = this.departureDateReturn.formattedDate.split("-");
            const rearrangedDateRet = `${datePartsRet[2]}-${datePartsRet[1]}-${datePartsRet[0]}`;
            var newDateRet = new Date(rearrangedDateRet);
            var aryDatesRet = this.GetDatesPro(newDateRet, 6, 2);
            // var aryDatesRet = newDateRet;
            this.dateDisplayData(aryDatesRet, 2);
          }
        } else {
          // this.departureDateReturn = this.dateService.getNextPrevDate(this.departureDate, 1)
          // this.globalData.DEPARTURE_DATE_RETURN = this.departureDateReturn;
          // this.commonStorage.setItem('travelDateReturn', this.departureDateReturn);
        }
      } else {
        this.selectedboxreturn = i;
        // this.util.showToast(this.sendDate);
        var dateselect = year + '-' + month + '-' + day;
        var getDate = dateselect.split('-');
        const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
        const monthIndex = months.indexOf(getDate[1].toLowerCase());
        const dayname = parseInt(getDate[2], 10);
        const standardDayString = dayname < 10 ? `0${dayname}` : `${dayname}`;
        let month_in_string;
        if (monthIndex <= 9) {
          month_in_string = (monthIndex + 1).toString();
          month_in_string = '0' + month_in_string;
        } else {
          month_in_string = (monthIndex + 1).toString();
        }
        const standardDateString = `${getDate[0]}-${month_in_string}-${standardDayString}`;
        var dateselectData = new Date(standardDateString);
        var data = this.dateService.getToday_got(dateselectData);
        // var data = {
        // day: dateselectData.getDate(),
        // dayNameShort: this.util.getDayName(dateselectData.getDay() + 1).slice(0, 3),
        // monthNameShort: this.util.getMonthName(dateselectData.getMonth() + 1).slice(0, 3),
        // month: dateselectData.getMonth()+1,
        // year: dateselectData.getFullYear(),
        // dayName: this.util.getDayName(dateselectData.getDay()+1),
        // monthName: this.util.getMonthName(dateselectData.getMonth()+1),
        // formattedDate: this.dateService.preZero(dateselectData.getDate()) + "-" + this.dateService.preZero((dateselectData.getMonth()+1)) + "-" + dateselectData.getFullYear()
        // }
        this.departureDateReturn = data;
        this.globalData.DEPARTURE_DATE_RETURN = this.departureDateReturn;
        this.commonStorage.localSet('travelDateReturn', data);
      }
    }
    this.defaultCall(false);
    // var newDate = new Date(year+"-"+month+"-"+day);
    // this.sendDate = this.datePipe.transform(newDate, 'yyyy-MM-dd');
    // format(parseISO(value), 'MMM dd yyyy');
    // this.pageDate = format(newDate, 'dd MMM yyyy');
    // this.sendDate = format(newDate, 'yyyy-MM-dd');
    // this.util.showToast(this.sendDate);
    // this.loader.showLoadingDefault();
    // setTimeout(() => {
    // // this.defaultCall(truethis.origin,this.destination,this.hub,this.active,this.selectedhubId,'1',this.perpage);
    // this.pagination_defaultCall(this.origin,this.destination,this.hub,this.active,this.selectedhubId,'1',this.perpage);
    // }, 500);
    // this.displayMybookings(date,this.sendDate,2);
    //this.pageDate = date+" "+year;
    // this.sendDate = year+"-"+month+"-"+day;
    // this.displayMybookings(date);
    // this.pageDatePro = format(newDate, 'yyyy-MM-dd');
  }
  getpageDateReturn(type, day, month, year1, i, all) {
    const monthMap = {
      Jan: 1,
      Feb: 2,
      Mar: 3,
      Apr: 4,
      May: 5,
      Jun: 6,
      Jul: 7,
      Aug: 8,
      Sep: 9,
      Oct: 10,
      Nov: 11,
      Dec: 12
    };
    const monthNumber = monthMap[month];
    this.selectedIndex = 0;
    if (this.metaData.msiteFolder == 'ourbustheme') {
      this.travel_Date_Return_Test = this.commonStorage.localGet('travelDateReturn1');
      this.selectedIndex = i;
      let isDepartureDate1 = day == this.travel_Date_Return_Test.day && month == this.travel_Date_Return_Test.monthNameShort && year1 == this.travel_Date_Return_Test.year;
      let day_n = year1;
      let year_n = day;
      let travel_Date_Return_Test = this.commonStorage.localGet('travelDateReturn1');
      // Ensure current date variables are correctly defined
      // Create selectedDateObj
      let selectedDateObj = new Date(day_n, monthNumber - 1, year_n);
      // Calculate oneDayAfter and twoDaysAfter
      let oneDayAfter = new Date(selectedDateObj);
      oneDayAfter.setDate(selectedDateObj.getDate() + 1);
      let twoDaysAfter = new Date(selectedDateObj);
      twoDaysAfter.setDate(selectedDateObj.getDate() + 2);
      // Create travelDate
      let travelDate = new Date(travel_Date_Return_Test.year, travel_Date_Return_Test.month - 1, travel_Date_Return_Test.day);
      // Compare Dates
      const areDatesEqual = (date1, date2) => date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
      const isOneDayAfter = areDatesEqual(oneDayAfter, travelDate);
      const isTwoDaysAfter = areDatesEqual(twoDaysAfter, travelDate);
      const isSameDate = areDatesEqual(selectedDateObj, travelDate);
      if (isOneDayAfter || isTwoDaysAfter || isSameDate) {}
      let isDepartureDate = day == this.travel_Date_Return_Test.day && month == this.travel_Date_Return_Test.monthNameShort && year1 == this.travel_Date_Return_Test.year;
      const rearrangedDate = `${year1}-${month}-${day}`;
      let parsedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_20__.parse)(rearrangedDate, 'yyyy-MMM-dd', new Date());
      const getdateSelected = (0,date_fns__WEBPACK_IMPORTED_MODULE_21__.format)(parsedDate, 'yyyy-MM-dd');
      var newDate = new Date(getdateSelected);
      if (isOneDayAfter) {
        this.showNextMonth();
        this.disableDateForOnwardJourny = false;
        this.selectedIndex = i;
      } else if (isTwoDaysAfter) {
        var aryDates = this.GetDatesPro(newDate, 6, type);
        this.dateDisplayData(aryDates, type);
        if (i == 0) {
          this.selectedIndex = i;
        } else {
          this.selectedIndex = i - 1;
        }
        this.showNextMonth();
        this.disableDateForOnwardJourny = false;
      } else if (isSameDate) {
        this.selectedIndex = i;
        this.showNextMonth();
        this.disableDateForOnwardJourny = true;
      } else {
        this.selectedIndex = 0;
        var aryDates = this.GetDatesPro(newDate, 6, type);
        this.dateDisplayData(aryDates, type);
        this.showNextMonth();
        this.disableDateForOnwardJourny = false;
      }
      if (type == 1) {
        var data = this.dateService.getToday_got(newDate);
        this.departureDate = data;
        this.globalData.DEPARTURE_DATE = this.departureDate;
        this.commonStorage.localSet('travelDate', this.departureDate);
        this.commonStorage.setItem("travelDate", this.departureDate);
        if (this.showRoundTripBox) {
          if (this.departureDateReturn && this.dateService.comparedate(this.departureDate, this.departureDateReturn)) {
            this.departureDateReturn = this.dateService.getNextPrevDate(this.departureDate, 1);
            this.globalData.DEPARTURE_DATE_RETURN = this.departureDateReturn;
            this.commonStorage.localSet('travelDateReturn', this.departureDateReturn);
            this.commonStorage.setItem("travelDateReturn", this.departureDateReturn);
            this.selectedboxreturn = 0;
            const datePartsRetOurbus = this.departureDateReturn.formattedDate.split("-");
            const rearrangedDateRet = `${datePartsRetOurbus[2]}-${datePartsRetOurbus[1]}-${datePartsRetOurbus[0]}`;
            const newDateRet = new Date(rearrangedDateRet);
            const aryDatesRet = this.GetDatesPro(newDateRet, 6, 2);
            this.dateDisplayData(aryDatesRet, 2);
          }
        }
      } else {
        var data = this.dateService.getToday_got(newDate);
        this.departureDateReturn = data;
        this.globalData.DEPARTURE_DATE_RETURN = this.departureDateReturn;
        this.commonStorage.localSet('travelDateReturn', data);
      }
      this.tapSelectedIndex = i;
      this.defaultCall(true);
    } else {
      if (type == 1) {
        this.selectedbox = 1;
        var dateselect = year1 + '-' + month + '-' + day;
        var getDateReturn = dateselect.split('-');
        const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
        const monthIndex = months.indexOf(getDateReturn[1].toLowerCase());
        const daynameReturnNew = parseInt(getDateReturn[2], 10);
        const standardDayString = daynameReturnNew < 10 ? `0${daynameReturnNew}` : `${daynameReturnNew}`;
        let month_in_string;
        if (monthIndex <= 9) {
          month_in_string = (monthIndex + 1).toString();
          month_in_string = '0' + month_in_string;
        } else {
          month_in_string = (monthIndex + 1).toString();
        }
        const standardDateString = `${getDateReturn[0]}-${month_in_string}-${standardDayString}`;
        var drs = standardDateString.split('-');
        var dateselectData = new Date(drs[0], drs[1] - 1, drs[2]);
        var data = this.dateService.getToday_got(dateselectData);
        this.departureDate = data;
        this.globalData.DEPARTURE_DATE = this.departureDate;
        this.commonStorage.localSet('travelDate', this.departureDate);
        const dateParts = this.departureDate.formattedDate.split("-");
        const rearrangedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
        if (this.showRoundTripBox) {
          if (this.departureDateReturn && this.dateService.comparedate(this.departureDate, this.departureDateReturn)) {
            this.departureDateReturn = this.dateService.getNextPrevDate(this.departureDate, 1);
            this.globalData.DEPARTURE_DATE_RETURN = this.departureDateReturn;
            this.commonStorage.localSet('travelDateReturn', this.departureDateReturn);
            this.selectedboxreturn = 0;
            const datePartsRet = this.departureDateReturn.formattedDate.split("-");
            const rearrangedDateRet = `${datePartsRet[2]}-${datePartsRet[1]}-${datePartsRet[0]}`;
            var newDateRet = new Date(rearrangedDateRet);
            var aryDatesRet = this.GetDatesPro(newDateRet, 6, 2);
            this.dateDisplayData(aryDatesRet, 2);
          }
        } else {}
      } else {
        this.selectedboxreturn = i;
        var dateselect = year1 + '-' + month + '-' + day;
        var getDateReturn = dateselect.split('-');
        const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
        const monthIndex = months.indexOf(getDateReturn[1].toLowerCase());
        const daynameReturnNew = parseInt(getDateReturn[2], 10);
        const standardDayString = daynameReturnNew < 10 ? `0${daynameReturnNew}` : `${daynameReturnNew}`;
        let month_in_string;
        if (monthIndex <= 9) {
          month_in_string = (monthIndex + 1).toString();
          month_in_string = '0' + month_in_string;
        } else {
          month_in_string = (monthIndex + 1).toString();
        }
        const standardDateString = `${getDateReturn[0]}-${month_in_string}-${standardDayString}`;
        var dateselectData = new Date(standardDateString);
        var data = this.dateService.getToday_got(dateselectData);
        this.departureDateReturn = data;
        this.globalData.DEPARTURE_DATE_RETURN = this.departureDateReturn;
        this.commonStorage.localSet('travelDateReturn', data);
      }
    }
  }
  nextDate(i) {
    if (!this.util.checkConnection()) {
      return false;
    }
    this.commonStorage.localSet('travelDate', this.departureDate);
    this.dateService.addDate(1, this.isreturnTrip).subscribe(() => {
      this.globalData.DEPARTURE_DATE = this.commonStorage.localGet("travelDate");
      this.globalData.DEPARTURE_DATE_RETURN = this.commonStorage.localGet("travelDateReturn");
      this.tapNextCalenderButton = true;
      this.tapNextCalenderButtonIndex = i;
      this.defaultCall(true);
    });
  }
  showNextMonth() {
    var x = [];
    if (this.isreturnTrip) {
      x = this.globalData.DEPARTURE_DATE_RETURN;
    } else {
      x = this.globalData.DEPARTURE_DATE;
    }
    var maxDateSelection = this.dateService.getAdvanceDate(this.commonStorage.getItem("metaData").advance_booking_days);
    if (new Date(maxDateSelection.year, maxDateSelection.month, maxDateSelection.day) > new Date(x.year, x.month, x.day)) {
      return true;
    }
    return false;
  }
  /**
   * go to the previous date
   */
  prevDate() {
    this.tapPreviousCalenderButtonIndex = true;
    if (!this.util.checkConnection()) {
      return false;
    }
    if (this.isSameDate == 'yes') {
      let travel_Date_Return_Test = this.commonStorage.localGet('travelDateReturn1');
      // Create Date object (month is zero-indexed, so subtract 1 from the month)
      let travelDate = new Date(travel_Date_Return_Test.year, travel_Date_Return_Test.month - 1, travel_Date_Return_Test.day);
      // Subtract 2 days
      travelDate.setDate(travelDate.getDate() - 1);
      // Convert the date object to a string
      let travelDateStr = travelDate.toDateString(); // This will give the format like 'Tue Nov 16 2024'
      // Split the date string into an array
      let slitetravelDate = travelDateStr.split(' ');
      // Create the object with the correct dynamic values
      let obj = {
        date: [slitetravelDate[0]],
        // Day of the week (e.g., 'Tue')
        day: slitetravelDate[3],
        // Day of the month (e.g., '16')
        month: slitetravelDate[1],
        // Short month name (e.g., 'Nov')
        year: slitetravelDate[2] // Full year (e.g., '2024')
      };
      // Add the object to the start of the array
      this.mineDisplaydate.unshift(obj);
    }
    if (this.isOneDayAfter == 'yes') {
      let travel_Date_Return_Test = this.commonStorage.localGet('travelDateReturn1');
      // Create Date object (month is zero-indexed, so subtract 1 from the month)
      let travelDate = new Date(travel_Date_Return_Test.year, travel_Date_Return_Test.month - 1, travel_Date_Return_Test.day);
      // Subtract 2 days
      travelDate.setDate(travelDate.getDate() - 2);
      // Convert the date object to a string
      let travelDateStr = travelDate.toDateString(); // This will give the format like 'Tue Nov 16 2024'
      // Split the date string into an array
      let slitetravelDate = travelDateStr.split(' ');
      // Create the object with the correct dynamic values
      let obj = {
        date: [slitetravelDate[0]],
        // Day of the week (e.g., 'Tue')
        day: slitetravelDate[3],
        // Day of the month (e.g., '16')
        month: slitetravelDate[1],
        // Short month name (e.g., 'Nov')
        year: slitetravelDate[2] // Full year (e.g., '2024')
      };
      // Add the object to the start of the array
      this.mineDisplaydate.unshift(obj);
    }
    if (this.isTwoDaysAfter == 'yes') {
      let travel_Date_Return_Test = this.commonStorage.localGet('travelDateReturn1');
      // Create Date object (month is zero-indexed, so subtract 1 from the month)
      let travelDate = new Date(travel_Date_Return_Test.year, travel_Date_Return_Test.month - 1, travel_Date_Return_Test.day);
      // Subtract 2 days
      travelDate.setDate(travelDate.getDate() - 3);
      // Convert the date object to a string
      let travelDateStr = travelDate.toDateString(); // This will give the format like 'Tue Nov 16 2024'
      // Split the date string into an array
      let slitetravelDate = travelDateStr.split(' ');
      // Create the object with the correct dynamic values
      let obj = {
        date: [slitetravelDate[0]],
        // Day of the week (e.g., 'Tue')
        day: slitetravelDate[3],
        // Day of the month (e.g., '16')
        month: slitetravelDate[1],
        // Short month name (e.g., 'Nov')
        year: slitetravelDate[2] // Full year (e.g., '2024')
      };
      // Add the object to the start of the array
      this.mineDisplaydate.unshift(obj);
    }
    this.dateService.addDate(-1, this.isreturnTrip).subscribe(() => {
      this.globalData.DEPARTURE_DATE = this.commonStorage.localGet("travelDate");
      this.globalData.DEPARTURE_DATE_RETURN = this.commonStorage.localGet("travelDateReturn");
      this.defaultCall(true);
    });
  }
  shortFilter() {
    var _this3 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3.modalController.create({
        component: _short_filter_short_filter_component__WEBPACK_IMPORTED_MODULE_3__.ShortFilterComponent,
        componentProps: {
          origin: _this3.origin,
          destination: _this3.destination,
          filData: _this3.filterData,
          getdate: _this3.commonService.apiFormatDate(_this3.dateFull)
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      _this3.filterData = data;
      let travelDateQuery = _this3.commonService.apiFormatDate(_this3.dateFull);
      _this3.loader.showLoadingDefault();
      let bpointarr = _this3.filterData.boradingPoint;
      let dpointarr = _this3.filterData.droppingPoint;
      let bpoint = bpointarr ? bpointarr.toString() : '';
      let dpoint = dpointarr ? dpointarr.toString() : '';
      let path = '';
      if (_this3.metaData.msiteFolder == 'ourbustheme') {
        let passengerCount = _this3.commonStorage.localGet("ourbusPassengerCount");
        path = _this3.origin.id + '/' + _this3.destination.id + '/' + travelDateQuery + '.json?show_only_available_services=false&show_injourney_services=true&bp=' + bpoint + '&dp=' + dpoint + '&passenger_count=' + passengerCount;
      } else {
        path = _this3.origin.id + '/' + _this3.destination.id + '/' + travelDateQuery + '.json?show_only_available_services=false&show_injourney_services=true&bp=' + bpoint + '&dp=' + dpoint;
      }
      _this3.apiFacory.getAvaiableRoutes(path).subscribe(routes => {
        _this3.loader.hideLoadingDefault();
        if (routes.code == 422) {
          _this3.accountDeRegisterAlert("", routes.message);
        } else {
          if (routes && !routes.code) {
            _this3.routes = routes;
            _this3.copyRoutes = _this3.routes;
            _this3.filter(_this3.filterData, _this3.routes);
            _this3.routes = _this3.orderByPipe.transform(_this3.routes, ['price']);
            _this3.routesFull = _this3.routes;
            var today = _this3.dateService.getToday();
            if (_this3.travelDate == today.formattedDate) {
              // this.routes = this.routes.filter(ele => {
              //   //  return this.convertTime12to24(ele.dep_time) >= this.time;
              // });
            }
            var departedRoutes = _this3.routesFull.filter(ele => {
              //  return this.convertTime12to24(ele.dep_time) < this.time;
            });
            if (departedRoutes.length > 0 && _this3.travelDate == today.formattedDate) {
              _this3.showDepartedroutesBtn = true;
            } else {
              _this3.showDepartedroutesBtn = false;
            }
          } else {
            _this3.routes = [];
            _this3.noRouteFound = routes;
          }
        }
      }, error => {
        _this3.loader.hideLoadingDefault();
        if (!_this3.util.isConnected()) {
          _this3.util.showAlert("Error Loading", "Internet is not connected. Please connect internet and try again!");
        } else {
          _this3.util.showAlert("Error Loading", "Something went wrong, please try after sometime");
        }
        _this3.navCtrl.pop();
        _this3.ex.call('AvailableRoutesPage', "defaultCall() --> this.apiFacory.getAvaiableRoutes", error);
      });
    })();
  }
  edit_source_desti() {
    var _this4 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this4.modalController.create({
        component: _source_destination_editor_source_destination_editor_component__WEBPACK_IMPORTED_MODULE_4__.SourceDestinationEditorComponent,
        componentProps: {
          filData: _this4.globalData
        },
        cssClass: 'custom-modal-class',
        breakpoints: [0, 0.48, 0.5, 0.8],
        initialBreakpoint: 0.48
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      _this4.globalData.DEPARTURE_DATE = _this4.commonStorage.localGet("travelDate");
      _this4.globalData.DEPARTURE_DATE_RETURN = _this4.commonStorage.localGet("travelDateReturn");
      if (data && data != '') {
        _this4.defaultCall(true);
      } else {}
    })();
  }
  filter(filterData, data) {
    this.routes = JSON.parse(JSON.stringify(data));
    this.routes = this.routes.filter(it => {
      let ac = it.bus_type.replace(/-/g, '').replace(/ /g, '').toLowerCase();
      if (filterData.busType.length == 4 || filterData.busType.length == 0) {
        return true;
      }
      if (filterData.busType.length == 1) {
        let aj = filterData.busType[0];
        if (aj == 'nonac') {
          if (ac.indexOf(aj) > -1) return true;
        } else if (aj == 'ac') {
          if (ac.indexOf(aj) > -1 && ac.indexOf('nonac') <= -1) return true;
        } else if (aj == (this.subdomain == 'abct' ? 'shuttle' : 'semisleeper')) {
          if (ac.indexOf(aj) > -1 || ac.indexOf('seater') > -1) return true;
        } else if (aj == (this.subdomain == 'abct' ? 'sprinter' : 'sleeper')) {
          if (ac.indexOf(aj) > -1 && ac.indexOf(this.subdomain == 'abct' ? 'shuttle' : 'semisleeper') <= -1) return true;
          filterData;
        }
      } else {
        if (filterData.busType[0] == (this.subdomain == 'abct' ? 'sprinter' : 'sleeper') && filterData.busType[1] == "ac" || filterData.busType[0] == "ac" && filterData.busType[1] == (this.subdomain == 'abct' ? 'sprinter' : 'sleeper')) {
          if (ac.indexOf("ac") > -1 && ac.indexOf(this.subdomain == 'abct' ? 'sprinter' : 'sleeper') > -1 && ac.indexOf(this.subdomain == 'abct' ? 'shuttle' : 'semisleeper') <= -1) return true;
        } else if (filterData.busType[0] == (this.subdomain == 'abct' ? 'sprinter' : 'sleeper') && filterData.busType[1] == "nonac" || filterData.busType[0] == "nonac" && filterData.busType[1] == (this.subdomain == 'abct' ? 'sprinter' : 'sleeper')) {
          if (ac.indexOf("nonac") > -1 && ac.indexOf(this.subdomain == 'abct' ? 'sprinter' : 'sleeper') > -1 && ac.indexOf(this.subdomain == 'abct' ? 'shuttle' : 'semisleeper') <= -1) return true;
        } else if (filterData.busType[0] == (this.subdomain == 'abct' ? 'shuttle' : 'semisleeper') && filterData.busType[1] == "ac" || filterData.busType[0] == "ac" && filterData.busType[1] == (this.subdomain == 'abct' ? 'shuttle' : 'semisleeper')) {
          if (ac.indexOf("ac") > -1 && ac.indexOf("seater") > -1) {
            if (ac.indexOf("nonac") > -1) {} else {
              return true;
            }
          } else if (ac.indexOf("ac") > -1 && ac.indexOf(this.subdomain == 'abct' ? 'shuttle' : 'semisleeper') > -1) {
            return true;
          }
          //end
        } else if (filterData.busType[0] == (this.subdomain == 'abct' ? 'shuttle' : 'semisleeper') && filterData.busType[1] == "nonac" || filterData.busType[0] == "nonac" && filterData.busType[1] == (this.subdomain == 'abct' ? 'shuttle' : 'semisleeper')) {
          if (ac.indexOf("nonac") > -1 && ac.indexOf("seater") > -1) return true;
        }
      }
      return false;
    });
    this.routes = this.routes.filter(it => {
      if (filterData.sourceDepartureTime.length == 4 || filterData.sourceDepartureTime.length == 0) {
        return true;
      }
      for (let aj of filterData.sourceDepartureTime) {
        if (aj.indexOf('morning') >= 0) {
          if (Date.parse('1970/01/01 ' + it.dep_time) >= Date.parse('1970/01/01 ' + '00:00 AM') && Date.parse('1970/01/01 ' + it.dep_time) <= Date.parse('1970/01/01 ' + '05:59 AM')) return true;
        } else if (aj.indexOf('noon') >= 0) {
          if (Date.parse('1970/01/01 ' + it.dep_time) >= Date.parse('1970/01/01 ' + '06:00 AM') && Date.parse('1970/01/01 ' + it.dep_time) <= Date.parse('1970/01/01 ' + '11:59 AM')) return true;
        } else if (aj.indexOf('eve') >= 0) {
          if (Date.parse('1970/01/01 ' + it.dep_time) >= Date.parse('1970/01/01 ' + '12:00 PM') && Date.parse('1970/01/01 ' + it.dep_time) <= Date.parse('1970/01/01 ' + '05:59 PM')) return true;
        } else if (aj.indexOf('night') >= 0) {
          if (Date.parse('1970/01/01 ' + it.dep_time) >= Date.parse('1970/01/01 ' + '06:00 PM') && Date.parse('1970/01/01 ' + it.dep_time) <= Date.parse('1970/01/01 ' + '11:59 PM')) return true;
        }
      }
      return false;
    });
    this.routes = this.routes.filter(it => {
      if (filterData.destinationDepartureTime.length == 4 || filterData.destinationDepartureTime.length == 0) {
        return true;
      }
      for (let aj of filterData.destinationDepartureTime) {
        if (aj.indexOf('morning') >= 0) {
          if (Date.parse('1970/01/01 ' + it.arr_time) >= Date.parse('1970/01/01 ' + '00:00 AM') && Date.parse('1970/01/01 ' + it.arr_time) <= Date.parse('1970/01/01 ' + '05:59 AM')) return true;
        } else if (aj.indexOf('noon') >= 0) {
          if (Date.parse('1970/01/01 ' + it.arr_time) >= Date.parse('1970/01/01 ' + '06:00 AM') && Date.parse('1970/01/01 ' + it.arr_time) <= Date.parse('1970/01/01 ' + '11:59 AM')) return true;
        } else if (aj.indexOf('eve') >= 0) {
          if (Date.parse('1970/01/01 ' + it.arr_time) >= Date.parse('1970/01/01 ' + '12:00 PM') && Date.parse('1970/01/01 ' + it.arr_time) <= Date.parse('1970/01/01 ' + '05:59 PM')) return true;
        } else if (aj.indexOf('night') >= 0) {
          if (Date.parse('1970/01/01 ' + it.arr_time) >= Date.parse('1970/01/01 ' + '06:00 PM') && Date.parse('1970/01/01 ' + it.arr_time) <= Date.parse('1970/01/01 ' + '11:59 PM')) return true;
        }
      }
      return false;
    });
    if (filterData.sortBy == "late_depature") {
      this.order = 'ASC';
      this.sortBy('dep_time');
    } else if (filterData.sortBy == "early_depature") {
      this.order = 'DESC';
      this.sortBy('dep_time');
    } else if (filterData.sortBy == "cheapest_first") {
      this.routes = this.routes.sort((a, b) => parseFloat(a.fare_str) - parseFloat(b.fare_str));
    } else if (filterData.sortBy == "drop_time") {
      this.order = 'ASC';
      this.sortBy('drop_time');
    }
    if (this.routes.length == 0) {
      this.noRouteFound.message = "No service available";
    } else {
      this.noRouteFound.message = "";
    }
  }
  sortBy(sortFeild) {
    if (this.orderByField == sortFeild) {
      if (this.order === 'ASC') {
        this.order = 'DESC';
      } else {
        this.order = 'ASC';
      }
    } else {
      this.order = 'ASC';
    }
    this.routes = this.sortThis(this.routes, sortFeild, this.order);
    this.orderByField = sortFeild;
  }
  sortThis(arr, orderByValue, orderType = 'ASC') {
    arr.sort((a, b) => {
      if (orderType === 'ASC') {
        if (orderByValue == 'duration' || orderByValue == 'dep_time') return Date.parse('1970/01/01 ' + a[orderByValue]) - Date.parse('1970/01/01 ' + b[orderByValue]);else if (orderByValue == 'duration' || orderByValue == 'drop_time') {
          return Date.parse('1970/01/01 ' + a['arr_time']) - Date.parse('1970/01/01 ' + b['arr_time']);
        } else {
          return a[orderByValue] - b[orderByValue];
        }
      } else {
        if (orderByValue == 'duration' || orderByValue == 'dep_time') return -(Date.parse('1970/01/01 ' + a[orderByValue]) - Date.parse('1970/01/01 ' + b[orderByValue]));else {
          return -(a[orderByValue] - b[orderByValue]);
        }
      }
    });
    return arr;
  }
  filterBusType(type) {
    this.routes = JSON.parse(JSON.stringify(this.copyRoutes));
    if (this.routes.length < 1 || this.routes.message) {
      this.util.showToast("No Services available to filter");
      this.routes = [];
    } else {
      let index = this.filterData['busType'].indexOf(type);
      if (index > -1) {
        this.filterData['busType'].splice(index, 1);
        this.filter(this.filterData, this.copyRoutes);
        if (this.filterData.busType.length == 0) {
          this.routes = [];
          this.routes = JSON.parse(JSON.stringify(this.copyRoutes));
          this.routes = this.orderByPipe.transform(this.routes, ['price']);
        }
      } else if (this.filterData['busType'].length == 0) {
        this.filterData['busType'].push(type);
        this.filter(this.filterData, this.copyRoutes);
      } else if (this.filterData['busType'].length == 1) {
        this.filterByTwoitem(type);
      } else if (this.filterData['busType'].length == 2) {
        if (type == (this.subdomain == 'abct' ? 'shuttle' : 'semisleeper')) {
          let non = this.filterData['busType'].indexOf(this.subdomain == 'abct' ? 'sprinter' : 'sleeper');
          this.filterData['busType'].splice(non, 1);
          this.filterByTwoitem(type);
        } else if (type == (this.subdomain == 'abct' ? 'sprinter' : 'sleeper')) {
          let non = this.filterData['busType'].indexOf(this.subdomain == 'abct' ? 'shuttle' : 'semisleeper');
          this.filterData['busType'].splice(non, 1);
          this.filterByTwoitem(type);
        } else if (type == "nonac") {
          let non = this.filterData['busType'].indexOf("ac");
          this.filterData['busType'].splice(non, 1);
          this.filterByTwoitem(type);
        } else {
          let non = this.filterData['busType'].indexOf("nonac");
          this.filterData['busType'].splice(non, 1);
          this.filterByTwoitem(type);
        }
      }
    }
  }
  filterByTwoitem(type) {
    if (this.filterData['busType'][0] == (this.subdomain == 'abct' ? 'sprinter' : 'sleeper')) {
      if (type == "ac") {
        this.filterData['busType'].push(type);
        this.filter(this.filterData, this.copyRoutes);
      } else if (type == "nonac") {
        this.filterData['busType'].push(type);
        this.filter(this.filterData, this.copyRoutes);
      } else {
        this.singleSelect(type);
      }
    } else if (this.filterData['busType'][0] == (this.subdomain == 'abct' ? 'shuttle' : 'semisleeper')) {
      if (type == "ac") {
        this.filterData['busType'].push(type);
        this.filter(this.filterData, this.copyRoutes);
      } else if (type == "nonac") {
        this.filterData['busType'].push(type);
        this.filter(this.filterData, this.copyRoutes);
      } else {
        this.singleSelect(type);
      }
    } else if (this.filterData['busType'][0] == "ac") {
      if (type == "sleeper") {
        this.filterData['busType'].push(type);
        this.filter(this.filterData, this.copyRoutes);
      } else if (type == "semisleeper") {
        this.filterData['busType'].push(type);
        this.filter(this.filterData, this.copyRoutes);
      } else {
        this.singleSelect(type);
      }
    } else if (this.filterData['busType'][0] == "nonac") {
      if (type == "sleeper") {
        this.filterData['busType'].push(type);
        this.filter(this.filterData, this.copyRoutes);
      } else if (type == "semisleeper") {
        this.filterData['busType'].push(type);
        this.filter(this.filterData, this.copyRoutes);
      } else {
        this.singleSelect(type);
      }
    }
  }
  singleSelect(type) {
    this.filterData['busType'] = [];
    this.filterData['busType'].push(type);
    this.filter(this.filterData, this.copyRoutes);
  }
  checkBusType(type) {
    return this.filterData['busType'].indexOf(type) > -1;
  }
  journeyTypeSelect() {
    if (this.globalData.DEPARTURE_DATE_RETURN && !this.isreturnTrip) {
      this.journeyType = "onward";
      this.commonStorage.localSet("journeyType", this.journeyType);
    } else if (this.isreturnTrip) {
      this.journeyType = "return";
      this.commonStorage.localSet("journeyType", this.journeyType);
    }
  }
  //manoranjan remover comma from origin, destination
  commaSeparate(data) {
    if (data) {
      let city = data.split(',');
      return city[city.length - 1];
    } else {
      return '';
    }
  }
  getDesc(desc) {
    return desc.slice(0, 35);
  }
  selectDate(index) {
    this.selectedIndex = index;
    if (!this.util.checkConnection()) {
      return false;
    }
    this.dateService.addDate(index, this.isreturnTrip).subscribe(() => {
      this.globalData.DEPARTURE_DATE = this.commonStorage.localGet("travelDate");
      this.globalData.DEPARTURE_DATE_RETURN = this.commonStorage.localGet("travelDateReturn");
      this.defaultCall(true);
    });
  }
  onImageError(index) {
    this.imageLoadErrors[index] = true; // Set error for the specific image
  }
  onImageLoad(index) {
    this.imageLoadErrors[index] = false; // Reset error flag for the specific image when it loads successfully
  }
  leadingZero(day) {
    return day.toString().padStart(2, '0');
  }
  callAlertBox() {
    var _this5 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let alert = yield _this5.alertController.create({
        message: "Clicking the 'Back' button will return you to the home page. Do you wish to proceed?",
        buttons: [{
          text: 'No',
          cssClass: "ourbusalertCancel",
          handler: () => {}
        }, {
          text: 'Yes',
          role: 'cancel',
          cssClass: "ourbusalertOk",
          handler: () => {
            _this5.navCtrl.navigateBack(['/tabs/home']);
          }
        }],
        cssClass: "ourBusReturnPopup"
      });
      yield alert.present();
    })();
  }
  cleverTapViewSeatsEvent(selectedRoute) {
    let tripLeg = null;
    let depDate = null;
    let retDate = null;
    if (this.globalData.DEPARTURE_DATE_RETURN.formattedDate) {
      tripLeg = this.isreturnTrip ? "return" : "departure";
    }
    if (this.globalData.DEPARTURE_DATE.formattedDate && !this.isreturnTrip) {
      depDate = this.globalData.DEPARTURE_DATE.formattedDate.replace(/-/g, "/");
    }
    if (this.globalData.DEPARTURE_DATE_RETURN.formattedDate && this.isreturnTrip) {
      retDate = this.globalData.DEPARTURE_DATE_RETURN.formattedDate.replace(/-/g, "/");
    }
    let durationList = selectedRoute.duration.split(":");
    let hour = durationList[0];
    let min = durationList[1];
    hour = hour.indexOf("0") == 0 ? hour.substring(1) : hour;
    let duration = hour + "h " + min + "m";
    let platform = this.appData.isIOS ? 'IOS' : this.appData.isWEBAPP ? 'Mobweb' : "Android";
    let passengerCount = this.commonStorage.localGet("ourbusPassengerCount");
    if (passengerCount < 10) {
      passengerCount = passengerCount.substring(1);
    }
    let data = {
      "trip_leg": tripLeg,
      "pick_stop_name": this.origin.name,
      "drop_stop_name": this.destination.name,
      "departure_date": depDate,
      "return_date": retDate,
      "departure_time": selectedRoute.dep_time,
      "arrival_time": selectedRoute.arr_time,
      "duration": duration,
      "platform": platform,
      "passenger_count": passengerCount
    };
    this.util.cleverTapEvent('view_seats', data);
  }
  cleverTapCall() {
    // if(this.appData.isIOS){
    const today = new Date(this.clevertapDate);
    const getDay = (0,date_fns__WEBPACK_IMPORTED_MODULE_21__.format)(today, "dd-MM-yyyy");
    let data = {
      "drop_stop_name": this.destination.name,
      "pick_stop_name": this.origin.name,
      "departure_date": this.selectedTripSegment == 'oneway' ? getDay : '',
      "return_date": this.selectedTripSegment == 'twoway' ? getDay : '',
      "is_serviced_departure": this.selectedTripSegment == 'oneway' ? true : false,
      "is_serviced_return": this.selectedTripSegment == 'twoway' ? true : false,
      "passenger_count": this.commonStorage.localGet("ourbusPassengerCount")
    };
    this.util.cleverTapEvent('search_routes', data);
    // }
  }
}
_AvailableRoutesPage = AvailableRoutesPage;
_AvailableRoutesPage.ɵfac = function AvailableRoutesPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AvailableRoutesPage)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_6__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_22__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_7__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_8__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_9__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_10__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_11__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_12__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_exception__WEBPACK_IMPORTED_MODULE_13__.ExceptionProvider), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_global_data_service__WEBPACK_IMPORTED_MODULE_14__.GlobalDataService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_24__.MenuController), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_24__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_authentication__WEBPACK_IMPORTED_MODULE_15__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_16__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_24__.AlertController));
};
_AvailableRoutesPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
  type: _AvailableRoutesPage,
  selectors: [["app-available-routes"]],
  standalone: false,
  decls: 4,
  vars: 4,
  consts: [["style", "--background: white;", 4, "ngIf"], [4, "ngIf"], [2, "--background", "white"], ["mode", "md", 1, "themeone-bg-cl", "theme1"], ["slot", "start"], [2, "color", "#333333", 3, "click"], [1, "themeone-avail-head", 2, "width", "200px", "font-size", "16px", "font-weight", "700", "margin-left", "-10px"], [1, "center-hr", 2, "position", "absolute", "right", "16px", "top", "30%", 3, "click"], ["src", "./assets/icon/cbuspencil.svg", "name", "close", "item-start", "", 2, "height", "20px", "width", "20px"], ["mode", "md", "color", "red", "class", "themeone-segment-cbus", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "calenderDate-set", 4, "ngIf"], [1, "theme-1", "theme1"], ["class", "Recent-searches", "style", "    margin-top: 13%;", 4, "ngIf"], ["text-center", "", "class", "vertical-align-content", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 3, "click", 4, "ngIf"], ["class", "theme1", 4, "ngIf"], ["mode", "md", "color", "red", 1, "themeone-segment-cbus", 3, "ngModelChange", "ngModel"], ["style", "margin-left: 4px;\n    position: absolute;\n    left: 20px;\n    top: 12px;", "src", "./assets/icon/Tick.svg", "alt", "", 4, "ngIf"], ["value", "onward", 1, "cbus-center", 3, "click", "disabled"], ["value", "return", 1, "cbus-center", 3, "click", "disabled"], ["src", "./assets/icon/Tick.svg", "alt", "", 2, "margin-left", "4px", "position", "absolute", "left", "20px", "top", "12px"], [1, "calenderDate-set"], [1, "booking-calender-pro1"], [1, "calenderIcon", 3, "click"], ["src", "./assets/icon/calendercbus.svg"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [2, "text-align", "center", "padding", "2px 10px", "font-family", "'Roboto', sans-serif", 3, "click"], [1, "Recent-searches", 2, "margin-top", "13%"], [4, "ngFor", "ngForOf"], [3, "ngClass", 4, "ngIf"], [2, "margin", "16px"], [2, "overflow", "inherit", "margin", "0", "border", "1px solid #dfdfdf", "border-radius", "10px", 3, "click", "ngClass"], ["class", "description_block", 4, "ngIf"], [1, "cbus-available-routes", 2, "width", "100%"], ["size", "3.5", 2, "padding-top", "21px", "padding-left", "16px", "text-align", "left"], [2, "font-size", "14px", "color", "#999999", "display", "block", "margin-top", "4px"], ["size", "5", 2, "padding-top", "0px", "display", "grid"], ["src", "./assets/icon/cbusvehicle.svg", 2, "visibility", "hidden"], [2, "position", "absolute", "left", "41%", "top", "17px"], ["src", "./assets/icon/cbusvehicle.svg", 3, "ngClass"], ["src", "./assets/icon/cbusIllustration.svg", 2, "width", "88%", 3, "ngClass"], ["size", "3.5", 2, "padding-top", "21px", "padding-right", "16px", "text-align", "right"], [2, "width", "100%", "padding-bottom", "10px"], ["size", "8", 2, "padding-left", "16px", "padding-bottom", "4px"], [2, "font-size", "11px", "color", "#999999", "display", "block"], ["size", "4", 2, "text-align", "end", "padding-right", "16px", "padding-top", "8px"], ["style", "font-size: 12px;color: #999999;display: block;", 4, "ngIf"], ["class", "cbus-available-routes", "style", "padding: 0px;width: 100%;", 4, "ngIf"], [1, "devider_set"], ["size", "12", 2, "padding", "0px"], ["src", "./assets/icon/devider.svg", 2, "display", "contents"], [2, "padding-bottom", "9px"], ["size", "8", 2, "padding-left", "16px", "padding-bottom", "2px"], ["size", "4", 2, "padding-right", "16px", "align-self", "center"], [2, "float", "right", "font-size", "12px", "color", "#999999", "display", "block"], [1, "description_block"], [2, "font-size", "12px", "color", "#999999", "display", "block"], [1, "cbus-available-routes", 2, "padding", "0px", "width", "100%"], [2, "display", "grid"], [1, "cbus-totaldistance-block"], ["style", "padding-right: 5px;    height: 17px;\n                                    width: 21px;filter:invert(73%) sepia(68%) saturate(1213%) hue-rotate(346deg) brightness(142%) contrast(101%)", "alt", "", 3, "src", 4, "ngIf"], ["alt", "", 2, "padding-right", "5px", "height", "17px", "width", "21px", "filter", "invert(73%) sepia(68%) saturate(1213%) hue-rotate(346deg) brightness(142%) contrast(101%)", 3, "src"], ["text-center", "", 1, "vertical-align-content"], [2, "padding-bottom", "50px"], ["alt", "", "src", "./assets/icon/cbusnobus.svg", 1, "img-center"], [1, "center-hr", "themeone-error_msg"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 3, "click"], ["color", "danger"], ["name", "filter-outline"], [1, "theme1"], ["mode", "md", 1, "cbus-routes-footer"], [2, "margin-right", "84px"], [3, "click", "ngClass"], ["alt", "", 3, "src", "ngClass"], [1, "ft-txt"], ["alt", "", 3, "src"], ["alt", "", "src", "./assets/icon/cbusFAC.svg"], ["alt", "", "src", "./assets/icon/cbusFnonAC.svg", 3, "ngClass"], [1, "sort-bx", 3, "click"], ["alt", "", "src", "./assets/icon/cbusFilter.svg", 2, "margin", "4px 4px 0px 4px"], [1, "ft-txt", 2, "font-size", "12px"], ["mode", "md", 1, "bg-cl"], [1, "head", 2, "color", "var(--placeholderColor)", "width", "200px"], ["style", "position: absolute;right:16px;top:30%", "class", "center-hr", 4, "ngIf"], ["color", "red", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "mr-0 pd-0", 4, "ngIf"], [1, "center-hr", 2, "position", "absolute", "right", "16px", "top", "30%"], ["class", "fnt-24 head", "name", "chevron-back-outline", 3, "click", 4, "ngIf"], [1, "date-txt", "head", 3, "click"], ["class", "fnt-24", "name", "chevron-forward-outline", 3, "click", 4, "ngIf"], ["name", "chevron-back-outline", 1, "fnt-24", "head", 3, "click"], ["name", "chevron-forward-outline", 1, "fnt-24", 3, "click"], ["class", "fnt-24 head", "name", "chevron-forward-outline", 3, "click", 4, "ngIf"], ["name", "chevron-forward-outline", 1, "fnt-24", "head", 3, "click"], ["color", "red", 3, "ngModelChange", "ngModel"], ["value", "onward", 1, "center", 3, "click", "disabled"], ["value", "return", 1, "center", 3, "click", "disabled"], [1, "mr-0", "pd-0"], [1, "routes-box", "mr-0", 3, "click", "ngStyle", "ngClass"], ["class", "routes-txt-1", 4, "ngIf"], ["class", "routes-txt-2", 4, "ngIf"], [1, "mr-tp-4"], [1, "routes-txt-3"], [1, "routes-txt-4"], [1, "align-price", "center-hr"], [1, "from-txt"], [1, "price-txt"], [1, "mr-lt-5"], ["class", "social-txt", 4, "ngIf"], ["text-wrap", "", 2, "background-color", "#d32b35", "color", "#fff", "padding", "2px 10px", "border-radius", "24px", "font-size", "11px"], [1, "routes-txt-1"], [1, "routes-txt-2"], ["alt", "", "src", "./assets/icon/Deals.svg", "name", "pricetag-outline"], [2, "padding-right", "5px"], [1, "fare_strike"], ["style", "display: none;", "class", "disc-fare", 4, "ngIf"], ["class", "inclusive-txt", 4, "ngIf"], [1, "inclusive-txt"], [1, "disc-fare", 2, "display", "none"], ["style", "margin-top: 3px;", 4, "ngIf"], [2, "margin-top", "3px"], [1, "mr-tp-16", 2, "font-weight", "bolder"], ["src", "./assets/icon/bus.png", "alt", "", 2, "width", "15px", "height", "15px", "margin-right", "5px"], [2, "width", "80%"], ["size", "6", 2, "padding-bottom", "0px"], ["size", "6"], [1, "bookingAvalaible"], ["size", "6", 2, "padding", "0px"], [1, "mltiStationTime"], [1, "social-txt"], ["alt", "", "src", "./assets/icon/NoBus.svg", 1, "img-center"], [1, "center-hr", "error_msg"], ["mode", "md", 1, "routes-footer"], [2, "margin-right", "50px"], [3, "click"], [1, "ft-txt", 3, "ngClass"], ["alt", "", "src", "./assets/icon/ac.png", 2, "margin", "4px", 3, "ngClass"], ["alt", "", "src", "./assets/icon/nonAc.png", 3, "ngClass"], [2, "--background", "#F1F7FA"], [2, "height", "11%"], [2, "box-shadow", "none"], [2, "border-radius", "10px", "border", "1px solid #626262"], ["size", "2.4", 1, "center", 2, "border-right", "1px solid #626262", "padding-bottom", "0px", 3, "click", "ngClass"], ["src", "././assets/icon/seabirdSleeper.svg", 3, "ngClass"], [1, "ft-txt", 2, "font-size", "12px", "margin-bottom", "7px"], ["src", "././assets/icon/seabirdSeater.svg", 3, "ngClass"], ["src", "././assets/icon/seabirdAc.svg", 3, "ngClass"], [1, "ft-txt", 2, "font-size", "12px", "margin-top", "2px"], ["src", "././assets/icon/seabirdNonAc.svg", 3, "ngClass"], ["size", "2.4", 1, "center", 2, "padding-bottom", "0px", 3, "click"], ["src", "././assets/icon/seabirdFilter.svg", "alt", ""], [1, "sort-bx", 2, "font-size", "10px", "text-align", "center"], [2, "height", "86%", "overflow-y", "scroll"], ["class", "mr-0 pd-0", "style", "background: #F1F7FA;", 4, "ngIf"], ["style", "margin-left: 4px;\n      position: absolute;\n      left: 20px;\n      top: 12px;", "src", "./assets/icon/Tick.svg", "alt", "", 4, "ngIf"], [1, "mr-0", "pd-0", 2, "background", "#F1F7FA"], [3, "ngStyle", 4, "ngFor", "ngForOf"], [3, "ngStyle"], [1, "routes-box", "mr-0", 2, "box-shadow", "none", "border", "1px solid #626262", 3, "click", "ngClass", "ngStyle"], [1, "routes-txt-3", 2, "margin", "5px 0px", "font-size", "12px", "color", "#000000"], [1, "routes-txt-4", 2, "margin", "2px 0px", "font-size", "12px", "color", "#000000"], [2, "margin", "4px 0px"], [2, "font-size", "10px", "color", "#999999"], [1, "seabird-content", 2, "background", "#FBE6D1"], ["src", "././assets/icon/seabird_available_logo.svg"], [2, "color", "#00904B"], [1, "seabird-content", 2, "background", "#BEF1ED"], ["src", "././assets/icon/abhibus_available_logo.svg"], [1, "seabird-content", 2, "background", "#F8D2D6"], ["src", "././assets/icon/redbus_available_logo.svg"], [1, "seabird-content", 2, "background", "#D1E6FF"], ["src", "././assets/icon/paytm_available_logo.svg"], [2, "font-weight", "bolder", "font-size", "12px"], ["size", "7", 1, "ion-no-padding", 2, "color", "black"], ["size", "5", 1, "ion-no-padding"], [1, "price-txt", 2, "text-align", "end"], ["style", "font-size: 9px; color: #00904B;", 4, "ngIf"], [1, "Clamp", "ion-no-padding", 2, "margin", "3px 0px", "color", "#999999", "font-size", "10px"], [2, "font-size", "9px", "color", "#00904B"], [2, "font-size", "16px"], [1, ""], ["src", "../../assets/icon/seabirdOfferIcon.svg", "alt", ""], ["src", "./assets/icon/NoBus.svg", 1, "img-center"], [1, "ourbustheme"], ["size", "1.5", 1, "ourbus_center_align"], ["name", "arrow-back-outline", 2, "width", "25px", "height", "25px", 3, "click"], ["size", "10.5"], [1, "ourbus_head", 2, "color", "var(--placeholderColor)", "padding-inline", "0px"], [1, "ourbus_left_align"], ["name", "arrow-forward-outline", 2, "margin-inline", "8px"], ["style", "color: #747474;font-size: 14px;", 4, "ngIf"], [1, "ourbustheme", 2, "--background", "#FCFCFC"], ["class", "ourbus_no_data_container", 4, "ngIf"], ["mode", "ios", "class", "ourbustheme", 4, "ngIf"], [2, "color", "#747474", "font-size", "14px"], [2, "background", "#fff"], ["size", "1", 1, "ourbus-col"], ["name", "chevron-back-outline", 1, "fnt-24", "head", 3, "click", "ngStyle"], ["size", "10", 1, "ourbus-col2"], ["class", "date-box", "style", "flex: 1; text-align: center;", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "date-box", 2, "flex", "1", "text-align", "center", 3, "ngStyle"], [1, "date-label", 3, "click"], ["class", "date-box", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "fnt-24", "name", "chevron-forward-outline", 3, "ngStyle", "click", 4, "ngIf"], [1, "date-box", 3, "ngClass"], ["name", "chevron-forward-outline", 1, "fnt-24", 3, "click", "ngStyle"], ["class", "date-box", "style", "flex: 1; text-align: center;", 3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [1, "date-box", 2, "flex", "1", "text-align", "center", 3, "click", "ngStyle"], [1, "date-label"], ["class", "ourbus-result-div", 4, "ngIf"], ["class", "ourbus-card", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "ourbus-result-div"], [1, "ourbus-card", 3, "ngClass"], [1, "ourbus-div"], ["size", "8", 2, "text-align", "start", "padding-bottom", "0px"], [1, "ourbus_card_div"], ["src", "././assets/icon/ourbus_line.svg"], [2, "font-size", "14px"], ["size", "4", 2, "text-align", "end", "padding-bottom", "0px"], [1, "ourbus-seat-left-text"], [2, "font-size", "18px", "font-weight", "700", "color", "#2D2D2D"], ["style", "text-decoration: line-through; font-size: 12px; color: #747474;", 4, "ngIf"], ["size", "12", 2, "padding-top", "0px"], [1, "ourbus-container"], [1, "ourbus-label"], [1, "ourbus-value"], ["size", "7", 1, "ourbus_left_align"], ["size", "5"], ["class", "ourbus-btn", "expand", "block", 3, "click", 4, "ngIf"], [2, "text-decoration", "line-through", "font-size", "12px", "color", "#747474"], [1, "ourbus-amenities-wrapper"], ["class", "ourbus-amenity", 4, "ngIf"], [1, "ourbus-amenity"], ["alt", "", 1, "ourbus-amenity-img", 3, "src"], [1, "ourbus-amenities-extra"], ["src", "./assets/icon/plusicon.svg", "name", "close", "item-start", "", 1, "ourbus-extra-icon"], [1, "ourbus-extra-count"], ["expand", "block", 1, "ourbus-btn", 3, "click"], [1, "ourbus_no_data_container"], [2, "font-size", "14px", "font-weight", "300", 3, "hidden"], [2, "color", "var(--iconsAndButtonsColor)", "font-weight", "700"], ["mode", "ios", 1, "ourbustheme"], [1, "routes-footer"], [2, "height", "23px", 3, "src", "ngClass"], ["src", "./assets/icon/ourbur_filter_ac.svg", 2, "height", "23px", 3, "ngClass"], ["src", "./assets/icon/ourbus_filter_nonac.svg", 2, "height", "23px", "filter", "invert(100%) brightness(2)", 3, "ngClass"], [1, "ourbus-sort-bx", 2, "font-size", "16px", 3, "click"]],
  template: function AvailableRoutesPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](0, AvailableRoutesPage_ng_container_0_Template, 18, 10, "ng-container", 0)(1, AvailableRoutesPage_ng_container_1_Template, 15, 9, "ng-container", 1)(2, AvailableRoutesPage_ng_container_2_Template, 43, 42, "ng-container", 1)(3, AvailableRoutesPage_ng_container_3_Template, 24, 10, "ng-container", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_24__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_24__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_24__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_24__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_24__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_24__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_24__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_24__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_24__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_24__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_24__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_24__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_24__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_24__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_24__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_24__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_24__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_24__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_24__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_24__.IonBackButton, _pipes_departure_date_pipe__WEBPACK_IMPORTED_MODULE_17__.DepartureDatePipe],
  styles: [".head[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  color: var(--placeholderColor);\n}\n\n.bg-cl[_ngcontent-%COMP%] {\n  --background: var(--primary);\n}\n\n.themeone-bg-cl[_ngcontent-%COMP%] {\n  --background: #ffffff !important;\n  color: #191966 !important;\n}\n\n.routes-box[_ngcontent-%COMP%] {\n  height: auto;\n  padding: 16px 12px;\n  border-bottom: 1px solid #e3e3e3;\n}\n\n.mr-0[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.pd-0[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.routes-txt-1[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #7e7e8c;\n}\n\n.routes-txt-2[_ngcontent-%COMP%] {\n  right: 16px;\n  position: absolute;\n  font-size: 10px;\n  color: #d84e55;\n  height: 15px;\n  display: flex;\n}\n\n.routes-txt-3[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n  color: #3e3e52;\n}\n\n.routes-txt-4[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n  color: #3e3e52;\n}\n\n.mr-tp-4[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.from-txt[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  font-size: 12px;\n}\n\n.align-price[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n}\n\n.price-txt[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: #3e3e52;\n}\n\n.duration-txt[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #7e7e8c;\n}\n\n.inclusive-txt[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  font-size: 9px;\n  font-weight: normal;\n  color: #7e7e8c;\n  margin-top: 2px;\n}\n\n.inclusive-txt1[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  font-size: 9px;\n  font-weight: normal;\n  color: #7e7e8c;\n  margin-top: 16px;\n}\n\n.duration-txt[_ngcontent-%COMP%] {\n  font-size: 8px;\n  font-weight: normal;\n  color: #7e7e8c;\n}\n\n.feat-box[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 99px;\n  height: 22px;\n  border-radius: 4px;\n  background-color: #e6eef7;\n  border: 1px solid #e6eef7;\n  font-size: 10px;\n  color: #3e3e52;\n  padding: 2px;\n  margin: 7px 2px 2px;\n}\n\n.disc-fare[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n}\n\n.mr-tp-16[_ngcontent-%COMP%] {\n  margin: 16px 0 0;\n}\n\n.img-routes[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  width: 20px;\n  height: 19px;\n}\n\n.mr-lt-5[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.routes-footer[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\" !important;\n  height: 100%;\n  --background: #4a4a4a;\n  color: white;\n  font-weight: bolder;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.routes-footer[_ngcontent-%COMP%]   .sort-bx[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\";\n  border: 1px solid var(--iconsAndButtonsColor);\n  background-color: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  -webkit-text-fill-color: var(--primaryText);\n  font-weight: bolder;\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 6px;\n  height: 100%;\n  width: 50px;\n  font-size: 11px;\n  text-align: center;\n}\n.routes-footer[_ngcontent-%COMP%]   .ft-txt[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\";\n  color: var(--primaryText);\n  -webkit-text-fill-color: var(--primaryText);\n}\n.routes-footer[_ngcontent-%COMP%]   .ft-icn[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 20px;\n}\n.routes-footer[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.date-txt[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: center;\n  color: #4a4a4a;\n  margin: 0 4px;\n}\n\n.fnt-24[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.fnt-noroutes[_ngcontent-%COMP%] {\n  margin: 30px 5px 5px;\n  font-size: 14px;\n  text-align: center;\n  color: #4a4a4a;\n}\n\n.selected-icon[_ngcontent-%COMP%] {\n  fill: #ffdd21;\n  font-size: 28px;\n  filter: invert(58%) sepia(49%) saturate(500%) hue-rotate(73deg) brightness(91%) contrast(94%);\n}\n\n.unselected-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.unselected-txt[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\nion-col[_ngcontent-%COMP%]   .selected-icon[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%] {\n  color: #ffdd21;\n  -webkit-text-fill-color: var(--iconsAndButtonsColor);\n}\n\n.social-txt[_ngcontent-%COMP%] {\n  -webkit-text-fill-color: var(--iconsAndButtonsColor) !important;\n}\n\n.vertical-align-content[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-content: center !important;\n  align-items: center !important;\n  height: 100%;\n}\n\n.error_msg[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: center;\n  color: #4a4a4a;\n}\n\n.img-center[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.bookingAvalaible[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 12px;\n  text-align: right;\n  font-weight: 400;\n}\n\n.mltiStationTime[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0px;\n  padding: 0px;\n  text-align: right;\n  font-weight: 700;\n  color: #4a4a4a;\n}\n\n.calenderDate-set[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  padding: 10px 0px;\n  overflow-x: auto;\n  overflow-y: hidden;\n  background: #ffffff;\n  position: fixed;\n  z-index: 999;\n  width: 100%;\n}\n\n.second_calenderDate-set[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  padding: 10px 0px;\n  overflow-x: auto;\n  overflow-y: hidden;\n  background: #ffffff;\n  position: fixed;\n  z-index: 999;\n  width: 100%;\n  top: 14%;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.booking-calender-pro1[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 4px;\n  background-color: white;\n}\n\n.calenderIcon[_ngcontent-%COMP%] {\n  padding: 0px 12px;\n  display: flex;\n  font-size: 20px;\n}\n\n.bookingDate[_ngcontent-%COMP%] {\n  border: 1px solid #DFDFDF;\n  border-radius: 100px;\n  font-size: 12px;\n  display: flex;\n  margin-right: 10px;\n  justify-content: center;\n  align-items: center;\n  padding: 4px 4px;\n  background: #FFFFFF;\n  height: 28px;\n}\n\n.cbusnewClass[_ngcontent-%COMP%] {\n  border: 1px solid #191966;\n  border-radius: 100px;\n  font-size: 12px;\n  display: flex;\n  margin-right: 10px;\n  justify-content: center;\n  align-items: center;\n  padding: 4px 4px;\n  background: #191966 !important;\n  color: #ffffff !important;\n  height: 28px;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.theme-1[_ngcontent-%COMP%] {\n  --background: #ffffff;\n}\n\n.Recent-searches[_ngcontent-%COMP%] {\n  margin: 15px;\n  font-size: 12px;\n  color: #333333;\n  font-weight: 500;\n}\n\n.cbus-available-routes[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.cbus-center[_ngcontent-%COMP%] {\n  flex-direction: inherit;\n  text-transform: capitalize;\n  border-bottom: 1px solid #999999;\n  font-weight: bold;\n}\n\n.themeone-segment-cbus[_ngcontent-%COMP%] {\n  --ion-color-base: #191966 !important;\n}\n.themeone-segment-cbus[_ngcontent-%COMP%]   .segment-button-checked[_ngcontent-%COMP%] {\n  color: var(--iconsAndButtonsColor) !important;\n  -webkit-text-fill-color: #191966 !important;\n}\n\n.themeone-selected-text[_ngcontent-%COMP%] {\n  color: #ffdd21;\n  background: #191966;\n}\n.themeone-selected-text[_ngcontent-%COMP%]   .ft-txt[_ngcontent-%COMP%] {\n  -webkit-text-fill-color: #ffffff;\n}\n\n.themeone-selected-icon[_ngcontent-%COMP%] {\n  fill: #ffdd21;\n  background: #191966;\n}\n.themeone-selected-icon[_ngcontent-%COMP%]   .ft-txt[_ngcontent-%COMP%] {\n  -webkit-text-fill-color: #ffffff;\n}\n\n.themeone-unselected-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.themeone-unselected-icon[_ngcontent-%COMP%]   .ft-txt[_ngcontent-%COMP%] {\n  -webkit-text-fill-color: #A0A0A0;\n}\n\n.themeone-unselected-txt[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.themeone-unselected-txt[_ngcontent-%COMP%]   .ft-txt[_ngcontent-%COMP%] {\n  -webkit-text-fill-color: #A0A0A0;\n}\n\n.cbus-routes-txt-2[_ngcontent-%COMP%] {\n  right: 36px;\n  position: absolute;\n  font-size: 10px;\n  color: #000000;\n  background: #FFBD16;\n  font-weight: bold;\n  border-radius: 100px;\n  margin-top: -7px;\n  padding: 4px 12px;\n}\n\n.cbus-routes-txt-2-block[_ngcontent-%COMP%] {\n  right: 36px;\n  position: absolute;\n  font-size: 10px;\n  color: #555555;\n  font-weight: bold;\n  background: #b8b7b7;\n  border-radius: 100px;\n  margin-top: -7px;\n  padding: 4px 12px;\n}\n\n.cbus-deprture-time[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #191966;\n  display: block;\n}\n\n.cbus-deprture-time1[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: #191966;\n  display: block;\n}\n\n.cbus-deprture-time-block[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #999999;\n  display: block;\n}\n\n.cbus-service-num[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #333333;\n  font-weight: 700;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  display: block;\n}\n\n.cbus-service-num-block[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #999999;\n  font-weight: 700;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  display: block;\n}\n\n.cbus-totaldistance[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #333333;\n  display: block;\n}\n\n.cbus-totaldistance-block[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #999999;\n  display: block;\n}\n\n.cbus-routes-card-bg[_ngcontent-%COMP%] {\n  margin: 16px;\n  background-image: url('cbusavailable_route.0fdcc34b1ec21197.svg');\n  background-repeat: no-repeat;\n  background-size: 100%;\n  height: 200px;\n}\n\n.cbus-bus-icon[_ngcontent-%COMP%] {\n  height: 14px;\n  width: 26px;\n}\n\n.cbus-bus-icon-block[_ngcontent-%COMP%] {\n  height: 14px;\n  width: 26px;\n  filter: invert(32%) sepia(0%) saturate(4966%) hue-rotate(45deg) brightness(0%) contrast(25%);\n}\n\n.cbus-routes-footer[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  font-size: 12px;\n  color: #A0A0A0;\n  --background: #FFFFFF !important;\n}\n.cbus-routes-footer[_ngcontent-%COMP%]   .sort-bx[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\";\n  background-color: #191966;\n  color: var(--primaryText);\n  -webkit-text-fill-color: white;\n  font-weight: bolder;\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 100%;\n  width: 88px;\n  font-size: 11px;\n  text-align: center;\n}\n.cbus-routes-footer[_ngcontent-%COMP%]   .ft-txt[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\";\n  color: var(--primaryText);\n}\n.cbus-routes-footer[_ngcontent-%COMP%]   .ft-icn[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 20px;\n}\n.cbus-routes-footer[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 10px;\n}\n\n.themeone-avail-head[_ngcontent-%COMP%] {\n  color: #333333 !important;\n  -webkit-text-fill-color: #191966;\n}\n\n.themeone-error_msg[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 20px;\n  font-weight: 500;\n  font-size: 20px;\n  color: #333;\n}\n\n.cbusline-block[_ngcontent-%COMP%] {\n  filter: invert(0%) sepia(3%) saturate(5%) hue-rotate(267deg) brightness(32%) contrast(10%);\n}\n\n.theme1[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.devider_set[_ngcontent-%COMP%] {\n  width: 100.7%;\n  position: relative;\n  background-color: #fff;\n  left: -1.2px;\n}\n\n.description_block[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 10px;\n  color: #000000;\n  \n\n  font-weight: bold;\n  border-radius: 100px;\n  margin-top: -10px;\n  padding-left: 16px;\n}\n.description_block[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 24px;\n  font-size: 11px;\n  background: #191966 !important;\n  color: #ffffff !important;\n}\n\n.fare_strike[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  position: absolute;\n  right: 6px;\n  font-size: 14px;\n  color: #7e7e8c;\n}\n\n.price-txt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.ourbus_head[_ngcontent-%COMP%] {\n  color: var(--placeholderColor);\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.ourbus_no_data_container[_ngcontent-%COMP%] {\n  background-color: #EFEFEF;\n  margin: 10px;\n  padding: 5px;\n  text-align: center;\n  border: 1px solid #D9D9D9;\n  border-radius: 10px;\n}\n.ourbus_no_data_container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #2D2D2D;\n  margin-top: 5px;\n  font-weight: 700;\n}\n\n.ourbus_feature_div[_ngcontent-%COMP%] {\n  border: 2px solid #D9D9D9;\n  color: #747474;\n  font-weight: bold;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 5px;\n  margin: 3px;\n  border-radius: 6px;\n  font-size: 12px;\n}\n\n.bg-green[_ngcontent-%COMP%] {\n  background: green;\n  color: white;\n}\n\n.bg-white[_ngcontent-%COMP%] {\n  background: white;\n  color: black;\n}\n\n.box[_ngcontent-%COMP%] {\n  border: 1px solid #EFEFEF;\n  padding: 8px;\n}\n\n.date-box[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  border-radius: 0px;\n  display: inline-block;\n  border-left: 0.5px solid #EFEFEF;\n  border-right: 0.5px solid #EFEFEF;\n  flex: 1;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  background: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  opacity: 1;\n}\n\n.past-date[_ngcontent-%COMP%] {\n  background: #c4c4c4;\n  columns: black;\n  opacity: 0.6;\n}\n\n.normal-date[_ngcontent-%COMP%] {\n  background: white;\n}\n\n.ourbus-col[_ngcontent-%COMP%] {\n  background: #fff;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid #EFEFEF;\n}\n\n.ourbus-col2[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-left: 1px solid #EFEFEF;\n  border-right: 1px solid #EFEFEF;\n  border-bottom: 1px solid #EFEFEF;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  padding-inline-start: 0px;\n  padding-inline-end: 0px;\n}\n\n.ourbus-btn[_ngcontent-%COMP%] {\n  --background:var(--iconsAndButtonsColor);\n  --color:var(--primaryText);\n  font-weight: 700;\n  font-size: 16px;\n  margin: 0px;\n  padding: 0px;\n  height: 36px;\n}\n\n.date-label[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 700;\n}\n\n.ourbus_left_align[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: left;\n}\n\n.ourbus_center_align[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.seabird-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px;\n  height: 40px;\n  border-radius: 8px;\n}\n\n.seabird-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 65px;\n  width: 65px;\n}\n\n.seabird-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-align: end;\n  flex-grow: 1;\n  color: #000000;\n  font-weight: 700;\n  font-size: 12px;\n}\n\n.seabird-selected-text[_ngcontent-%COMP%] {\n  background: blue;\n}\n\n.disableService[_ngcontent-%COMP%] {\n  background-color: #e3e3e3;\n}\n\n.ourbus_card_div[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #2D2D2D;\n  font-weight: 700;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n\n.ourbus-seat-left-text[_ngcontent-%COMP%] {\n  color: #F60C0C;\n  font-size: 12px;\n  font-weight: 600;\n  margin-top: 0px;\n}\n\n.ourbus-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n}\n\n.ourbus-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #09A122;\n  font-weight: 700;\n  white-space: nowrap; \n\n}\n\n.ourbus-value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #747474;\n  font-weight: 500;\n}\n\n.ourbus-col[_ngcontent-%COMP%] {\n  padding-inline-start: 0px;\n}\n\n.ourbus-amenities-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: left;\n  align-items: center;\n}\n\n.ourbus-amenity[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n\n.ourbus-amenity-img[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n  filter: invert(100%) brightness(0%) contrast(100%);\n}\n\n.ourbus-amenities-extra[_ngcontent-%COMP%] {\n  background: #EFEFEF;\n  display: flex;\n  align-items: center;\n  padding: 4px 8px;\n  border-radius: 8px;\n  margin: 0 5px;\n}\n\n.ourbus-extra-icon[_ngcontent-%COMP%] {\n  color: #747474;\n}\n\n.ourbus-extra-count[_ngcontent-%COMP%] {\n  color: #747474;\n  margin-top: -1px;\n}\n\n.ourbus-result-div[_ngcontent-%COMP%] {\n  margin: 10px 10px 10px 15px;\n}\n\n.ourbus-card[_ngcontent-%COMP%] {\n  margin: 7px 9px;\n  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);\n}\n.ourbus-card[_ngcontent-%COMP%]   .ourbus-div[_ngcontent-%COMP%] {\n  padding: 5px;\n  border-bottom: 1px solid #EFEFEF;\n}\n\n.cross_icon[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.ourbus-sort-bx[_ngcontent-%COMP%] {\n  display: block;\n  background-color: var(--iconsAndButtonsColor);\n  font-family: \"Montserrat\";\n  background-color: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n  -webkit-text-fill-color: white;\n  font-weight: bolder;\n  font-size: 14px;\n  text-align: center;\n}\n\n.ourbustheme[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n}\n.ourbustheme[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 10px 5px;\n  font-size: 14px;\n}\n\n.date-box[_ngcontent-%COMP%] {\n  text-align: center;\n  flex: 1;\n}\n\n.highlighted[_ngcontent-%COMP%] {\n  background: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n}\n\n.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 1;\n  cursor: not-allowed;\n  background: #D9D9D9;\n}"]
});

/***/ }),

/***/ 73830:
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/LocalWeekYearParser.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalWeekYearParser: () => (/* binding */ LocalWeekYearParser)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 64467);
/* harmony import */ var _getWeekYear_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../getWeekYear.js */ 4110);
/* harmony import */ var _startOfWeek_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../startOfWeek.js */ 28034);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ 901);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 80633);






// Local week-numbering year
class LocalWeekYearParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 130);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]);
  }
  parse(dateString, token, match) {
    const valueCallback = year => ({
      year,
      isTwoDigitYear: token === "YY"
    });
    switch (token) {
      case "Y":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(4, dateString), valueCallback);
      case "Yo":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)(match.ordinalNumber(dateString, {
          unit: "year"
        }), valueCallback);
      default:
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString), valueCallback);
    }
  }
  validate(_date, value) {
    return value.isTwoDigitYear || value.year > 0;
  }
  set(date, flags, value, options) {
    const currentYear = (0,_getWeekYear_js__WEBPACK_IMPORTED_MODULE_3__.getWeekYear)(date, options);
    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.normalizeTwoDigitYear)(value.year, currentYear);
      date.setFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
      date.setHours(0, 0, 0, 0);
      return (0,_startOfWeek_js__WEBPACK_IMPORTED_MODULE_4__.startOfWeek)(date, options);
    }
    const year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
    date.setFullYear(year, 0, options.firstWeekContainsDate);
    date.setHours(0, 0, 0, 0);
    return (0,_startOfWeek_js__WEBPACK_IMPORTED_MODULE_4__.startOfWeek)(date, options);
  }
}

/***/ }),

/***/ 73964:
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/DateParser.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateParser: () => (/* binding */ DateParser)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 64467);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ 86965);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ 901);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 80633);




const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Day of the month
class DateParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 90);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "subPriority", 1);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      case "d":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.numericPatterns.date, dateString);
      case "do":
        return match.ordinalNumber(dateString, {
          unit: "date"
        });
      default:
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString);
    }
  }
  validate(date, value) {
    const year = date.getFullYear();
    const isLeapYear = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isLeapYearIndex)(year);
    const month = date.getMonth();
    if (isLeapYear) {
      return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
    } else {
      return value >= 1 && value <= DAYS_IN_MONTH[month];
    }
  }
  set(date, _flags, value) {
    date.setDate(value);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ 75583:
/*!******************************************!*\
  !*** ./node_modules/date-fns/setWeek.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setWeek: () => (/* binding */ setWeek)
/* harmony export */ });
/* harmony import */ var _getWeek_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeek.js */ 14523);
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ 91490);



/**
 * The {@link setWeek} function options.
 */

/**
 * @name setWeek
 * @category Week Helpers
 * @summary Set the local week to the given date.
 *
 * @description
 * Set the local week to the given date, saving the weekday number.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param week - The week of the new date
 * @param options - An object with options
 *
 * @returns The new date with the local week set
 *
 * @example
 * // Set the 1st week to 2 January 2005 with default options:
 * const result = setWeek(new Date(2005, 0, 2), 1)
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // Set the 1st week to 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January:
 * const result = setWeek(new Date(2005, 0, 2), 1, {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Sun Jan 4 2004 00:00:00
 */
function setWeek(date, week, options) {
  const date_ = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options === null || options === void 0 ? void 0 : options.in);
  const diff = (0,_getWeek_js__WEBPACK_IMPORTED_MODULE_1__.getWeek)(date_, options) - week;
  date_.setDate(date_.getDate() - diff * 7);
  return (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date_, options === null || options === void 0 ? void 0 : options.in);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setWeek);

/***/ }),

/***/ 77591:
/*!***************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/StandAloneMonthParser.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StandAloneMonthParser: () => (/* binding */ StandAloneMonthParser)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 64467);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ 86965);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ 901);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 80633);




class StandAloneMonthParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 110);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]);
  }
  parse(dateString, token, match) {
    const valueCallback = value => value - 1;
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.numericPatterns.month, dateString), valueCallback);
      // 01, 02, ..., 12
      case "LL":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(2, dateString), valueCallback);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)(match.ordinalNumber(dateString, {
          unit: "month"
        }), valueCallback);
      // Jan, Feb, ..., Dec
      case "LLL":
        return match.month(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.month(dateString, {
          width: "narrow",
          context: "standalone"
        });

      // J, F, ..., D
      case "LLLLL":
        return match.month(dateString, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return match.month(dateString, {
          width: "wide",
          context: "standalone"
        }) || match.month(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.month(dateString, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 11;
  }
  set(date, _flags, value) {
    date.setMonth(value, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ 78111:
/*!**********************************************!*\
  !*** ./src/app/pipes/departure-date.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DepartureDatePipe: () => (/* binding */ DepartureDatePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);
var _DepartureDatePipe;

class DepartureDatePipe {
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(date, departureDate) {
    const monthOrder = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateYear = parseInt(date.day); // Ensure year is parsed correctly
    const dateMonth = monthOrder.indexOf(date.month); // Get the month index
    const dateDay = parseInt(date.year); // Ensure day is parsed correctly
    // Define the departure date and add 1 day
    let departureYear = departureDate.year;
    let departureMonth = monthOrder.indexOf(departureDate.month);
    let departureDay = departureDate.day;
    // Add one day to departureDate
    departureDay += 1;
    // Check if day overflows to the next month
    const daysInMonth = new Date(departureYear, departureMonth + 1, 0).getDate(); // Get the number of days in the current month
    if (departureDay > daysInMonth) {
      departureDay = 1; // Reset to the 1st day of the next month
      departureMonth += 1;
      if (departureMonth > 11) {
        // If the month exceeds December, increment the year
        departureMonth = 0;
        departureYear += 1;
      }
    }
    // Perform the date comparison
    if (dateYear > departureYear) return false;
    if (dateYear === departureYear && dateMonth < departureMonth) return false;
    if (dateYear === departureYear && dateMonth === departureMonth && dateDay < departureDay) return false;
    return true;
  }
}
_DepartureDatePipe = DepartureDatePipe;
_DepartureDatePipe.ɵfac = function DepartureDatePipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DepartureDatePipe)();
};
_DepartureDatePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "departureDate",
  type: _DepartureDatePipe,
  pure: true
});

/***/ }),

/***/ 78590:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/getDefaultOptions.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.js */ 9807);


/**
 * @name getDefaultOptions
 * @category Common Helpers
 * @summary Get default options.
 * @pure false
 *
 * @description
 * Returns an object that contains defaults for
 * `options.locale`, `options.weekStartsOn` and `options.firstWeekContainsDate`
 * arguments for all functions.
 *
 * You can change these with [setDefaultOptions](https://date-fns.org/docs/setDefaultOptions).
 *
 * @returns The default options
 *
 * @example
 * const result = getDefaultOptions()
 * //=> {}
 *
 * @example
 * setDefaultOptions({ weekStarsOn: 1, firstWeekContainsDate: 4 })
 * const result = getDefaultOptions()
 * //=> { weekStarsOn: 1, firstWeekContainsDate: 4 }
 */
function getDefaultOptions() {
  return Object.assign({}, (0,_lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)());
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDefaultOptions);

/***/ }),

/***/ 80633:
/*!***************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/utils.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dayPeriodEnumToHours: () => (/* binding */ dayPeriodEnumToHours),
/* harmony export */   isLeapYearIndex: () => (/* binding */ isLeapYearIndex),
/* harmony export */   mapValue: () => (/* binding */ mapValue),
/* harmony export */   normalizeTwoDigitYear: () => (/* binding */ normalizeTwoDigitYear),
/* harmony export */   parseAnyDigitsSigned: () => (/* binding */ parseAnyDigitsSigned),
/* harmony export */   parseNDigits: () => (/* binding */ parseNDigits),
/* harmony export */   parseNDigitsSigned: () => (/* binding */ parseNDigitsSigned),
/* harmony export */   parseNumericPattern: () => (/* binding */ parseNumericPattern),
/* harmony export */   parseTimezonePattern: () => (/* binding */ parseTimezonePattern)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants.js */ 72162);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ 86965);


function mapValue(parseFnResult, mapFn) {
  if (!parseFnResult) {
    return parseFnResult;
  }
  return {
    value: mapFn(parseFnResult.value),
    rest: parseFnResult.rest
  };
}
function parseNumericPattern(pattern, dateString) {
  const matchResult = dateString.match(pattern);
  if (!matchResult) {
    return null;
  }
  return {
    value: parseInt(matchResult[0], 10),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseTimezonePattern(pattern, dateString) {
  const matchResult = dateString.match(pattern);
  if (!matchResult) {
    return null;
  }

  // Input is 'Z'
  if (matchResult[0] === "Z") {
    return {
      value: 0,
      rest: dateString.slice(1)
    };
  }
  const sign = matchResult[1] === "+" ? 1 : -1;
  const hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  const minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  const seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
  return {
    value: sign * (hours * _constants_js__WEBPACK_IMPORTED_MODULE_0__.millisecondsInHour + minutes * _constants_js__WEBPACK_IMPORTED_MODULE_0__.millisecondsInMinute + seconds * _constants_js__WEBPACK_IMPORTED_MODULE_0__.millisecondsInSecond),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseAnyDigitsSigned(dateString) {
  return parseNumericPattern(_constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.anyDigitsSigned, dateString);
}
function parseNDigits(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(_constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.singleDigit, dateString);
    case 2:
      return parseNumericPattern(_constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.twoDigits, dateString);
    case 3:
      return parseNumericPattern(_constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.threeDigits, dateString);
    case 4:
      return parseNumericPattern(_constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.fourDigits, dateString);
    default:
      return parseNumericPattern(new RegExp("^\\d{1," + n + "}"), dateString);
  }
}
function parseNDigitsSigned(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(_constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.singleDigitSigned, dateString);
    case 2:
      return parseNumericPattern(_constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.twoDigitsSigned, dateString);
    case 3:
      return parseNumericPattern(_constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.threeDigitsSigned, dateString);
    case 4:
      return parseNumericPattern(_constants_js__WEBPACK_IMPORTED_MODULE_1__.numericPatterns.fourDigitsSigned, dateString);
    default:
      return parseNumericPattern(new RegExp("^-?\\d{1," + n + "}"), dateString);
  }
}
function dayPeriodEnumToHours(dayPeriod) {
  switch (dayPeriod) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  const isCommonEra = currentYear > 0;
  // Absolute number of the current year:
  // 1 -> 1 AC
  // 0 -> 1 BC
  // -1 -> 2 BC
  const absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
  let result;
  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    const rangeEnd = absCurrentYear + 50;
    const rangeEndCentury = Math.trunc(rangeEnd / 100) * 100;
    const isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }
  return isCommonEra ? result : 1 - result;
}
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

/***/ }),

/***/ 84337:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/Setter.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateTimezoneSetter: () => (/* binding */ DateTimezoneSetter),
/* harmony export */   Setter: () => (/* binding */ Setter),
/* harmony export */   ValueSetter: () => (/* binding */ ValueSetter)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 64467);
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constructFrom.js */ 91298);
/* harmony import */ var _transpose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../transpose.js */ 84776);



const TIMEZONE_UNIT_PRIORITY = 10;
class Setter {
  constructor() {
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "subPriority", 0);
  }
  validate(_utcDate, _options) {
    return true;
  }
}
class ValueSetter extends Setter {
  constructor(value, validateValue, setValue, priority, subPriority) {
    super();
    this.value = value;
    this.validateValue = validateValue;
    this.setValue = setValue;
    this.priority = priority;
    if (subPriority) {
      this.subPriority = subPriority;
    }
  }
  validate(date, options) {
    return this.validateValue(date, this.value, options);
  }
  set(date, flags, options) {
    return this.setValue(date, flags, this.value, options);
  }
}
class DateTimezoneSetter extends Setter {
  constructor(context, reference) {
    super();
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", TIMEZONE_UNIT_PRIORITY);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "subPriority", -1);
    this.context = context || (date => (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(reference, date));
  }
  set(date, flags) {
    if (flags.timestampIsSet) return date;
    return (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, (0,_transpose_js__WEBPACK_IMPORTED_MODULE_2__.transpose)(date, this.context));
  }
}

/***/ }),

/***/ 84359:
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/FractionOfSecondParser.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FractionOfSecondParser: () => (/* binding */ FractionOfSecondParser)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 64467);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ 901);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 80633);



class FractionOfSecondParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 30);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(dateString, token) {
    const valueCallback = value => Math.trunc(value * Math.pow(10, -token.length + 3));
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString), valueCallback);
  }
  set(date, _flags, value) {
    date.setMilliseconds(value);
    return date;
  }
}

/***/ }),

/***/ 84776:
/*!********************************************!*\
  !*** ./node_modules/date-fns/transpose.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   transpose: () => (/* binding */ transpose)
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructFrom.js */ 91298);


/**
 * @name transpose
 * @category Generic Helpers
 * @summary Transpose the date to the given constructor.
 *
 * @description
 * The function transposes the date to the given constructor. It helps you
 * to transpose the date in the system time zone to say `UTCDate` or any other
 * date extension.
 *
 * @typeParam InputDate - The input `Date` type derived from the passed argument.
 * @typeParam ResultDate - The result `Date` type derived from the passed constructor.
 *
 * @param date - The date to use values from
 * @param constructor - The date constructor to use
 *
 * @returns Date transposed to the given constructor
 *
 * @example
 * // Create July 10, 2022 00:00 in locale time zone
 * const date = new Date(2022, 6, 10)
 * //=> 'Sun Jul 10 2022 00:00:00 GMT+0800 (Singapore Standard Time)'
 *
 * @example
 * // Transpose the date to July 10, 2022 00:00 in UTC
 * transpose(date, UTCDate)
 * //=> 'Sun Jul 10 2022 00:00:00 GMT+0000 (Coordinated Universal Time)'
 */
function transpose(date, constructor) {
  const date_ = isConstructor(constructor) ? new constructor(0) : (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(constructor, 0);
  date_.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
  date_.setHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
  return date_;
}
function isConstructor(constructor) {
  var _constructor$prototyp;
  return typeof constructor === "function" && ((_constructor$prototyp = constructor.prototype) === null || _constructor$prototyp === void 0 ? void 0 : _constructor$prototyp.constructor) === constructor;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (transpose);

/***/ }),

/***/ 84998:
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/MonthParser.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonthParser: () => (/* binding */ MonthParser)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 64467);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ 86965);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ 901);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 80633);




class MonthParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 110);
  }
  parse(dateString, token, match) {
    const valueCallback = value => value - 1;
    switch (token) {
      // 1, 2, ..., 12
      case "M":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.numericPatterns.month, dateString), valueCallback);
      // 01, 02, ..., 12
      case "MM":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(2, dateString), valueCallback);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)(match.ordinalNumber(dateString, {
          unit: "month"
        }), valueCallback);
      // Jan, Feb, ..., Dec
      case "MMM":
        return match.month(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.month(dateString, {
          width: "narrow",
          context: "formatting"
        });

      // J, F, ..., D
      case "MMMMM":
        return match.month(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return match.month(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.month(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.month(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 11;
  }
  set(date, _flags, value) {
    date.setMonth(value, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ 85226:
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/EraParser.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EraParser: () => (/* binding */ EraParser)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 64467);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ 901);


class EraParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 140);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return match.era(dateString, {
          width: "abbreviated"
        }) || match.era(dateString, {
          width: "narrow"
        });

      // A, B
      case "GGGGG":
        return match.era(dateString, {
          width: "narrow"
        });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return match.era(dateString, {
          width: "wide"
        }) || match.era(dateString, {
          width: "abbreviated"
        }) || match.era(dateString, {
          width: "narrow"
        });
    }
  }
  set(date, flags, value) {
    flags.era = value;
    date.setFullYear(value, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ 86965:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/constants.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   numericPatterns: () => (/* binding */ numericPatterns),
/* harmony export */   timezonePatterns: () => (/* binding */ timezonePatterns)
/* harmony export */ });
const numericPatterns = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59

  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999

  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/ // 0 to 9999, -0 to -9999
};
const timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};

/***/ }),

/***/ 89206:
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/DayOfYearParser.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayOfYearParser: () => (/* binding */ DayOfYearParser)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 64467);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ 86965);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ 901);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 80633);




class DayOfYearParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 90);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "subpriority", 1);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]);
  }
  parse(dateString, token, match) {
    switch (token) {
      case "D":
      case "DD":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNumericPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.numericPatterns.dayOfYear, dateString);
      case "Do":
        return match.ordinalNumber(dateString, {
          unit: "date"
        });
      default:
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString);
    }
  }
  validate(date, value) {
    const year = date.getFullYear();
    const isLeapYear = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isLeapYearIndex)(year);
    if (isLeapYear) {
      return value >= 1 && value <= 366;
    } else {
      return value >= 1 && value <= 365;
    }
  }
  set(date, _flags, value) {
    date.setMonth(0, value);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ 89835:
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/LocalDayParser.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalDayParser: () => (/* binding */ LocalDayParser)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 64467);
/* harmony import */ var _setDay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../setDay.js */ 56441);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ 901);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 80633);





// Local day of week
class LocalDayParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 90);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]);
  }
  parse(dateString, token, match, options) {
    const valueCallback = value => {
      // We want here floor instead of trunc, so we get -7 for value 0 instead of 0
      const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
      return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
    };
    switch (token) {
      // 3
      case "e":
      case "ee":
        // 03
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString), valueCallback);
      // 3rd
      case "eo":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)(match.ordinalNumber(dateString, {
          unit: "day"
        }), valueCallback);
      // Tue
      case "eee":
        return match.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.day(dateString, {
          width: "short",
          context: "formatting"
        }) || match.day(dateString, {
          width: "narrow",
          context: "formatting"
        });

      // T
      case "eeeee":
        return match.day(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return match.day(dateString, {
          width: "short",
          context: "formatting"
        }) || match.day(dateString, {
          width: "narrow",
          context: "formatting"
        });

      // Tuesday
      case "eeee":
      default:
        return match.day(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.day(dateString, {
          width: "short",
          context: "formatting"
        }) || match.day(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 6;
  }
  set(date, _flags, value, options) {
    date = (0,_setDay_js__WEBPACK_IMPORTED_MODULE_3__.setDay)(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ 93193:
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/ISODayParser.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISODayParser: () => (/* binding */ ISODayParser)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 64467);
/* harmony import */ var _setISODay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../setISODay.js */ 21482);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ 901);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 80633);





// ISO day of week
class ISODayParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 90);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]);
  }
  parse(dateString, token, match) {
    const valueCallback = value => {
      if (value === 0) {
        return 7;
      }
      return value;
    };
    switch (token) {
      // 2
      case "i":
      case "ii":
        // 02
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseNDigits)(token.length, dateString);
      // 2nd
      case "io":
        return match.ordinalNumber(dateString, {
          unit: "day"
        });
      // Tue
      case "iii":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)(match.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.day(dateString, {
          width: "short",
          context: "formatting"
        }) || match.day(dateString, {
          width: "narrow",
          context: "formatting"
        }), valueCallback);
      // T
      case "iiiii":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)(match.day(dateString, {
          width: "narrow",
          context: "formatting"
        }), valueCallback);
      // Tu
      case "iiiiii":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)(match.day(dateString, {
          width: "short",
          context: "formatting"
        }) || match.day(dateString, {
          width: "narrow",
          context: "formatting"
        }), valueCallback);
      // Tuesday
      case "iiii":
      default:
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.mapValue)(match.day(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.day(dateString, {
          width: "short",
          context: "formatting"
        }) || match.day(dateString, {
          width: "narrow",
          context: "formatting"
        }), valueCallback);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 7;
  }
  set(date, _flags, value) {
    date = (0,_setISODay_js__WEBPACK_IMPORTED_MODULE_3__.setISODay)(date, value);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}

/***/ }),

/***/ 94036:
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/parse/_lib/parsers/ISOTimezoneWithZParser.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ISOTimezoneWithZParser: () => (/* binding */ ISOTimezoneWithZParser)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 64467);
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constructFrom.js */ 91298);
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getTimezoneOffsetInMilliseconds.js */ 48833);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ 86965);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser.js */ 901);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 80633);







// Timezone (ISO-8601. +00:00 is `'Z'`)
class ISOTimezoneWithZParser extends _Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser {
  constructor(...args) {
    super(...args);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "priority", 10);
    (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(dateString, token) {
    switch (token) {
      case "X":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseTimezonePattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.timezonePatterns.basicOptionalMinutes, dateString);
      case "XX":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseTimezonePattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.timezonePatterns.basic, dateString);
      case "XXXX":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseTimezonePattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.timezonePatterns.basicOptionalSeconds, dateString);
      case "XXXXX":
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseTimezonePattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.timezonePatterns.extendedOptionalSeconds, dateString);
      case "XXX":
      default:
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseTimezonePattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.timezonePatterns.extended, dateString);
    }
  }
  set(date, flags, value) {
    if (flags.timestampIsSet) return date;
    return (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_4__.constructFrom)(date, date.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_js__WEBPACK_IMPORTED_MODULE_5__.getTimezoneOffsetInMilliseconds)(date) - value);
  }
}

/***/ })

}]);