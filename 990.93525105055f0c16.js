"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[990],{

/***/ 70990:
/*!*******************************************************!*\
  !*** ./src/app/calendar-modal/calendar-modal.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalendarModalPage: () => (/* binding */ CalendarModalPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/theme-service */ 99692);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_global_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/global-data.service */ 7516);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _components_tan_calendar_tan_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/tan-calendar/tan-calendar */ 94370);
var _CalendarModalPage;









function CalendarModalPage_ion_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CalendarModalPage_ion_button_10_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CalendarModalPage_ion_content_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-content", 11)(1, "tan-calendar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onDateSelect", function CalendarModalPage_ion_content_11_Template_tan_calendar_onDateSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.dateSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r1.theme.themeColorName + "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("headerBackground", ctx_r1.calendarStyling.headerBackground)("headerText", ctx_r1.calendarStyling.headerText)("btnPrimary", ctx_r1.calendarStyling.btnPrimary)("btnSecondary", ctx_r1.calendarStyling.btnSecondary)("btnText", ctx_r1.calendarStyling.btnText)("deactivatePastDate", ctx_r1.calendarStyling.deactivatePastDate)("dateSelected", ctx_r1.departureDate)("minDateSelection", ctx_r1.minDateSelection)("maxDateSelection", ctx_r1.maxDateSelection)("deactivateFutureDate", ctx_r1.deactivateFutureDate)("dateFormat", ctx_r1.calendarStyling.dateFormat);
  }
}
function CalendarModalPage_ion_content_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-content", 11)(1, "tan-calendar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onDateSelect", function CalendarModalPage_ion_content_12_Template_tan_calendar_onDateSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.dateSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r1.theme.themeColorName + "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("headerBackground", ctx_r1.calendarStyling.headerBackground)("headerText", ctx_r1.calendarStyling.headerText)("btnPrimary", ctx_r1.calendarStyling.btnPrimary)("btnSecondary", ctx_r1.calendarStyling.btnSecondary)("btnText", ctx_r1.calendarStyling.btnText)("deactivatePastDate", ctx_r1.calendarStyling.deactivatePastDate)("dateSelected", ctx_r1.departureDate)("minDateSelection", ctx_r1.minDateSelection)("maxDateSelection", ctx_r1.maxDateSelection)("deactivateFutureDate", ctx_r1.deactivateFutureDate)("dateFormat", ctx_r1.calendarStyling.dateFormat);
  }
}
class CalendarModalPage {
  constructor(navCtrl, modalController, dateService, util, params, theme, commonStorage, globalData) {
    this.navCtrl = navCtrl;
    this.modalController = modalController;
    this.dateService = dateService;
    this.util = util;
    this.params = params;
    this.theme = theme;
    this.commonStorage = commonStorage;
    this.globalData = globalData;
    this.title = "Select Date";
    this.deactivateFutureDate = false;
    this.showClear = false;
    this.departureDateReturn = {};
    this.minDateSelection = {};
    this.maxDateSelection = {};
    this.departureDate = {
      day: 0,
      month: 0,
      year: 0,
      monthName: 'Jan',
      dayName: "Sun",
      formattedDate: '00-00-0000'
    };
    this.calendarStyling = {
      headerBackground: "#777",
      headerText: "#222",
      btnPrimary: "#fff",
      btnSecondary: "#FF5722",
      btnText: "#000",
      height: '34px',
      width: '600px',
      firstDayOfWeek: 'su',
      dateFormat: 'dd-mm-yyyy',
      sunHighlight: true,
      deactivatePastDate: true
    };
    this.metaData = this.commonStorage.getItem('metaData');
    this.departureDate = params.get('departureDate');
    this.type = params.get('type');
    this.departureDateReturn = params.get('departureDateReturn');
    if (!this.departureDateReturn) {
      this.departureDateReturn;
    }
    this.showPastDate = params.get('showPastDate');
    this.deactivateFutureDate = params.get('deactivateFutureDate');
    this.title = params.get('title');
    this.type = params.get('type');
    this.maxDateSelection = params.get('maxDateSelection');
    this.calendarStyling.deactivatePastDate = !this.showPastDate;
    if (this.departureDateReturn) {
      this.showClear = Object.keys(this.departureDateReturn).length > 0;
    }
    if (this.type == 2) {
      if (Object.keys(this.departureDateReturn).length == 0) {
        let dt = new Date(new Date(this.departureDate.year, this.departureDate.month, this.departureDate.day + 1));
        this.departureDateReturn = {
          day: dt.getDate(),
          month: dt.getMonth(),
          year: dt.getFullYear(),
          dayName: this.util.getDayName(dt.getDay()),
          monthName: this.util.getMonthName(dt.getMonth()),
          formattedDate: this.dateService.preZero(dt.getDate()) + "-" + this.dateService.preZero(dt.getMonth()) + "-" + dt.getFullYear()
        };
      }
      this.minDateSelection = this.departureDate;
      this.departureDate = this.departureDateReturn;
    }
  }
  ngOnInit() {}
  dismiss() {
    this.modalController.dismiss();
  }
  dateSelected(event) {
    this.departureDate = event;
    this.modalController.dismiss(this.departureDate);
  }
  clear() {
    this.globalData.DEPARTURE_DATE_RETURN = {};
    this.commonStorage.setItem('travelDateReturn', {});
    this.modalController.dismiss({});
  }
}
_CalendarModalPage = CalendarModalPage;
_CalendarModalPage.ɵfac = function CalendarModalPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CalendarModalPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_0__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_1__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavParams), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_2__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_3__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_global_data_service__WEBPACK_IMPORTED_MODULE_4__.GlobalDataService));
};
_CalendarModalPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _CalendarModalPage,
  selectors: [["app-calendar-modal"]],
  standalone: false,
  decls: 13,
  vars: 4,
  consts: [["mode", "md", 2, "--background", "var(--primary)"], ["slot", "start"], ["mode", "md", 2, "font-size", "18px", 3, "click"], ["name", "arrow-back", "color", "default"], [1, "header-div-2", 2, "display", "flex"], [1, "head", 2, "margin", "0px 16px"], [1, "back-btn", 3, "click"], ["slot", "end"], ["mode", "md", "class", "clear-date", 3, "click", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["mode", "md", 1, "clear-date", 3, "click"], [3, "ngClass"], [3, "onDateSelect", "headerBackground", "headerText", "btnPrimary", "btnSecondary", "btnText", "deactivatePastDate", "dateSelected", "minDateSelection", "maxDateSelection", "deactivateFutureDate", "dateFormat"]],
  template: function CalendarModalPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1)(3, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CalendarModalPage_Template_ion_button_click_3_listener() {
        return ctx.dismiss();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "ion-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CalendarModalPage_Template_div_click_8_listener() {
        return ctx.dismiss();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-buttons", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, CalendarModalPage_ion_button_10_Template, 2, 0, "ion-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, CalendarModalPage_ion_content_11_Template, 2, 12, "ion-content", 9)(12, CalendarModalPage_ion_content_12_Template, 2, 12, "ion-content", 9);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.type == 2 && ctx.showClear);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme" || ctx.metaData.msiteFolder == "ourbustheme" || ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar, _components_tan_calendar_tan_calendar__WEBPACK_IMPORTED_MODULE_5__.TanCalendar],
  encapsulation: 2
});

/***/ }),

/***/ 94370:
/*!*********************************************************!*\
  !*** ./src/app/components/tan-calendar/tan-calendar.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TanCalendar: () => (/* binding */ TanCalendar)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var src_app_services_common_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/common-storage */ 96970);
var _TanCalendar;





const _c0 = a0 => ({
  "transparent": a0
});
const _c1 = a0 => ({
  "color": a0
});
const _c2 = () => ({
  "color": "white"
});
const _c3 = () => ({
  "color": "var(--primaryText)"
});
const _c4 = a0 => ({
  "background-color": a0
});
const _c5 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({
  "unit older": a0,
  "unit next-month": a1,
  "unit": a2,
  "today": a3,
  "past": a4,
  "future": a5,
  "inactive": a6,
  "selected": a7
});
const _c6 = (a0, a1) => ({
  "background-color": a0,
  "color": a1
});
function TanCalendar_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const days_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](days_r1);
  }
}
function TanCalendar_div_18_div_1_b_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "b", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const d_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c6, ctx_r3.isSelectedDay(d_r3.day, d_r3.month, d_r3.year, d_r3.cmo) ? ctx_r3.headerBackground : ctx_r3.btnPrimary, ctx_r3.isSelectedDay(d_r3.day, d_r3.month, d_r3.year, d_r3.cmo) ? "#fff" : ctx_r3.btnText));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](d_r3.day);
  }
}
function TanCalendar_div_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TanCalendar_div_18_div_1_Template_div_click_0_listener() {
      const d_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.cellClicked(d_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TanCalendar_div_18_div_1_b_2_Template, 2, 5, "b", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const d_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c4, ctx_r3.btnPrimary))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction8"](5, _c5, d_r3.cmo === ctx_r3.PREV_MONTH, d_r3.cmo === ctx_r3.NEXT_MONTH, d_r3.cmo === ctx_r3.CURR_MONTH || d_r3.cmo !== ctx_r3.CURR_MONTH, ctx_r3.isCurrDay(d_r3.day, d_r3.month, d_r3.year, d_r3.cmo), ctx_r3.isPast(d_r3.day, d_r3.month, d_r3.year, d_r3.cmo), ctx_r3.isFuture(d_r3.day, d_r3.month, d_r3.year, d_r3.cmo) || ctx_r3.isGreaterThanMax(d_r3.day, d_r3.month, d_r3.year, d_r3.cmo) || ctx_r3.isLessThanMin(d_r3.day, d_r3.month, d_r3.year, d_r3.cmo), ctx_r3.isLessThanDate(d_r3), ctx_r3.isSelectedDay(d_r3.day, d_r3.month, d_r3.year, d_r3.cmo)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", d_r3.cmo === ctx_r3.CURR_MONTH);
  }
}
function TanCalendar_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TanCalendar_div_18_div_1_Template, 3, 14, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const w_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", w_r5);
  }
}
class TanCalendar {
  constructor(elem, commanStorage) {
    this.elem = elem;
    this.commanStorage = commanStorage;
    this.showSelector = false;
    this.visibleMonth = {
      monthTxt: '',
      monthNbr: 0,
      year: 0
    };
    this.selectedDate = {
      year: 0,
      month: 0,
      day: 0
    };
    this.weekDays = [];
    this.dates = [];
    this.selectionDayTxt = '';
    this.dayIdx = 0;
    this.today = null;
    // hour:string;
    // minute:string;
    // ampm:string;
    this.time = {
      hour: '12',
      minute: '00',
      ampm: 'AM',
      formattedTime: ''
    };
    this.PREV_MONTH = 1;
    this.CURR_MONTH = 2;
    this.NEXT_MONTH = 3;
    // Default options
    this.dayLabels = {
      su: 'Sun',
      mo: 'Mon',
      tu: 'Tue',
      we: 'Wed',
      th: 'Thu',
      fr: 'Fri',
      sa: 'Sat'
    };
    this.dayLabels_full = {
      su: 'Sunday',
      mo: 'Monday',
      tu: 'Tuesday',
      we: 'Wednesday',
      th: 'Thursday',
      fr: 'Friday',
      sa: 'Saturday'
    };
    // dayLabels = { su: 'sunday', mo: 'monday', tu: 'tuesday', we: 'wednesday', th: 'thursday', fr: 'friday', sa: 'saturday' };
    this.dayLabelsArray = {
      1: 'Sun',
      2: 'Mon',
      3: 'Tue',
      4: 'Wed',
      5: 'Thu',
      6: 'Fri',
      7: 'Sat'
    };
    this.dayLabelsArray_full = {
      1: 'Sunday',
      2: 'Monday',
      3: 'Tuesday',
      4: 'Wednesday',
      5: 'Thursday',
      6: 'Friday',
      7: 'Saturday'
    };
    this.monthLabels = {
      1: 'Jan',
      2: 'Feb',
      3: 'Mar',
      4: 'Apr',
      5: 'May',
      6: 'Jun',
      7: 'Jul',
      8: 'Aug',
      9: 'Sep',
      10: 'Oct',
      11: 'Nov',
      12: 'Dec'
    };
    this.monthLabels_full = {
      1: 'January',
      2: 'February',
      3: 'March',
      4: 'April',
      5: 'May',
      6: 'June',
      7: 'July',
      8: 'August',
      9: 'September',
      10: 'October',
      11: 'November',
      12: 'December'
    };
    this.todayBtnTxt = 'Today';
    this.hours = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    this.minutes = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'];
    this.CalWidth = '600px';
    this.headerBackground = "#699DE7";
    this.headerText = "#777";
    this.btnPrimary = "#699DE7";
    this.btnSecondary = "#99bDE7";
    this.btnText = "#fff";
    this.dateFormat = "mm-dd-yyyy";
    this.height = '34px';
    this.width = '600px';
    this.firstDayOfWeek = 'su';
    this.sunHighlight = true;
    this.deactivatePastDate = false;
    this.deactivateFutureDate = false;
    this.showTime = false;
    this.timeFormat = '12';
    this.onDateSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.onMonthChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.today = new Date();
  }
  ngOnInit() {
    this.openBtnClicked();
    // Custom Editing Pardeep
    this.border = 'none';
    let doc = document.getElementsByTagName('html')[0];
    doc.addEventListener('click', event => {
      true;
      if (this.showSelector && event.target && this.elem.nativeElement !== event.target && !this.elem.nativeElement.contains(event.target)) {
        this.showSelector = true;
      }
    }, true);
    // Custom Editing Pardeep
    let days = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
    this.dayIdx = days.indexOf(this.firstDayOfWeek);
    if (this.dayIdx !== -1) {
      let idx = this.dayIdx;
      if (typeof this.dateFormat === 'undefined') {
        this.dateFormat = 'mm-dd-yyyy';
      }
      for (var i = 0; i < days.length; i++) {
        this.weekDays.push(this.dayLabels[days[idx]]);
        idx = days[idx] === 'sa' ? 0 : idx + 1;
      }
    }
    //this.time = this.formatAMPM(new Date());
    this.metaData = this.commanStorage.getItem("metaData");
  }
  formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = '';
    if (this.timeFormat == '12') {
      ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0' + minutes : minutes;
    }
    var strTime = hours + ':' + minutes + ' ' + ampm;
    // return strTime;
    return {
      hour: hours,
      minute: minutes,
      ampm: ampm,
      formattedTime: strTime
    };
  }
  addHour(type) {
    if (type == 1) {
      this.timeFormat == '12' ? this.time["hour"] < 12 ? this.time["hour"] = this.addZero(parseInt(this.time['hour']) + 1) : this.time["hour"] = this.addZero(parseInt(this.time['hour'])) : this.time["hour"] < 23 ? this.time["hour"]++ : this.time["hour"] = this.time["hour"];
    } else {
      this.time["hour"] > 0 ? this.time["hour"] = this.addZero(parseInt(this.time['hour']) - 1) : '';
    }
    this.time["formattedTime"] = this.time["hour"] + ':' + this.time["minute"] + ' ' + this.time["ampm"];
  }
  addMinute(type) {
    if (type == 1) {
      this.time["minute"] < 59 ? this.time["minute"] = this.addZero(parseInt(this.time['minute']) + 1) : '';
    } else {
      this.time["minute"] > 0 ? this.time["minute"] = this.addZero(parseInt(this.time['minute']) - 1) : '';
    }
    this.time["formattedTime"] = this.time["hour"] + ':' + this.time["minute"] + ' ' + this.time["ampm"];
  }
  addZero(value) {
    if (value < 10) return '0' + value;else return value;
  }
  ampmChange() {
    this.time["formattedTime"] = this.time["hour"] + ':' + this.time["minute"] + ' ' + this.time["ampm"];
  }
  ngOnChanges(changes) {
    try {
      this.selectionDayTxt = changes['dateSelected'].currentValue;
      if (this.selectionDayTxt !== '') {
        if (this.dateSelected) {
          this.selectedDate.day = this.dateSelected.day;
          this.selectedDate.month = this.dateSelected.month;
          this.selectedDate.year = this.dateSelected.year;
          this.visibleMonth = {
            monthTxt: this.dateSelected.monthName,
            monthNbr: this.dateSelected.month,
            year: this.dateSelected.year
          };
        }
        if (this.dateSelected && this.dateSelected['time']) {
          this.time = this.dateSelected.time;
        } else {
          this.time = this.formatAMPM(new Date());
        }
        //let fmt =  this.dateFormat;
        // let dpos:number = fmt.indexOf('dd');
        // let mpos:number = fmt.indexOf('mm');
        // let ypos:number = fmt.indexOf('yyyy');
        //this.selectedDate = {day: dpos, month: mpos, year: ypos};
        //this.formatDate(this.dateFormat);
        //this.selectedDate = {day: parseInt(this.selectionDayTxt.substring(dpos, dpos + 2)),
        //month: parseInt(this.selectionDayTxt.substring(mpos, mpos + 2)),
        //year: parseInt(this.selectionDayTxt.substring(ypos, ypos + 4))};
      }
    } catch (e) {}
  }
  // Function for get Events List API //
  // API_getEvent() {
  // 	let url_newEvent = this.base_path_service.base_path_event() + 'event/?year='+this.visibleMonth.year+'&month='+this.visibleMonth.monthNbr;
  // 	this.base_path_service.GetRequestbase_path_servic(url_newEvent)
  // 		.subscribe(res=> {
  //             this.EventsBooked = res[0].json;
  //             this.createEventCalendar();
  // 		},
  // 		err=> {
  // 		})
  // }
  // Function for get Events List API //
  openBtnClicked() {
    this.showSelector = !this.showSelector;
    if (this.showSelector) {
      let y = 0,
        m = 0;
      if (this.selectedDate.year === 0 && this.selectedDate.month === 0 && this.selectedDate.day === 0) {
        y = this.today.getFullYear();
        m = this.today.getMonth() + 1;
      } else {
        y = this.selectedDate.year;
        m = this.selectedDate.month;
      }
      // Set current month
      this.visibleMonth = {
        monthTxt: this.monthLabels_full[m],
        monthNbr: m,
        year: y
      };
      // Create current month
      this.createMonth(m, y);
    }
  }
  prevMonth() {
    if (!this.hidePreviosMonth()) {
      let m = this.visibleMonth.monthNbr;
      let y = this.visibleMonth.year;
      if (m === 1) {
        m = 12;
        y--;
      } else {
        m--;
      }
      this.visibleMonth = {
        monthTxt: this.monthText(m),
        monthNbr: m,
        year: y
      };
      this.createMonth(m, y);
    }
    // this.API_getEvent();
  }
  nextMonth() {
    if (!this.hideNextMonth()) {
      let m = this.visibleMonth.monthNbr;
      let y = this.visibleMonth.year;
      if (m === 12) {
        m = 1;
        y++;
      } else {
        m++;
      }
      this.visibleMonth = {
        monthTxt: this.monthText(m),
        monthNbr: m,
        year: y
      };
      this.createMonth(m, y);
    }
    // this.API_getEvent();
  }
  cellClicked(cell) {
    // Cell clicked in the selector
    if (cell.cmo !== this.CURR_MONTH) return;
    if (this.minDateSelection && Object.keys(this.minDateSelection).length > 0) {
      if (new Date(this.minDateSelection.year, this.minDateSelection.month, this.minDateSelection.day) > new Date(cell.year, cell.month, cell.day)) {
        return;
      }
    }
    if (this.maxDateSelection && Object.keys(this.maxDateSelection).length > 0) {
      if (new Date(this.maxDateSelection.year, this.maxDateSelection.month, this.maxDateSelection.day) < new Date(cell.year, cell.month, cell.day)) {
        return;
      }
    }
    if (!this.isPast(cell.day, cell.month, cell.year, cell.cmo) && !this.isFuture(cell.day, cell.month, cell.year, cell.cmo)) {
      if (cell.cmo === this.PREV_MONTH) {
        // Previous month of day
        this.prevMonth();
      } else if (cell.cmo === this.CURR_MONTH) {
        // Current month of day
        this.selectDate(cell);
      } else if (cell.cmo === this.NEXT_MONTH) {
        // Next month of day
        this.nextMonth();
      }
    }
  }
  selectDate(date) {
    this.selectedDate = {
      day: date.day,
      month: date.month,
      year: date.year
    };
    this.selectionDayTxt = this.formatDate(date);
    // Custom Editing Pardeep
    this.showSelector = true;
    // Custom Editing Pardeep
    let selD = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
    //let epoAPI_getEventc = selD.getTime() / 1000.0;
    this.dateSelected = {
      day: date.day,
      month: date.month,
      year: date.year,
      dayNameShort: this.dayLabelsArray[selD.getDay() + 1],
      dayName: this.dayLabelsArray_full[selD.getDay() + 1],
      monthNameShort: this.monthLabels[date.month],
      monthName: this.monthLabels_full[date.month],
      formattedDate: this.selectionDayTxt
    };
    if (this.showTime) return;
    if (this.minDateSelection && Object.keys(this.minDateSelection).length > 0) {
      if (new Date(this.minDateSelection.year, this.minDateSelection.month, this.minDateSelection.day) <= new Date(date.year, date.month, date.day)) {
        this.onDateSelect.emit({
          day: date.day,
          month: date.month,
          year: date.year,
          dayName: this.dayLabelsArray_full[selD.getDay() + 1],
          dayNameShort: this.dayLabelsArray[selD.getDay() + 1],
          monthName: this.monthLabels_full[date.month],
          monthNameShort: this.monthLabels[date.month],
          formattedDate: this.selectionDayTxt
        });
      } else {
        return;
      }
    } else if (this.maxDateSelection && Object.keys(this.maxDateSelection).length > 0) {
      if (new Date(this.maxDateSelection.year, this.maxDateSelection.month, this.maxDateSelection.day) >= new Date(date.year, date.month, date.day)) {
        this.onDateSelect.emit({
          day: date.day,
          month: date.month,
          year: date.year,
          dayName: this.dayLabelsArray_full[selD.getDay() + 1],
          dayNameShort: this.dayLabelsArray[selD.getDay() + 1],
          monthName: this.monthLabels_full[date.month],
          monthNameShort: this.monthLabels[date.month],
          formattedDate: this.selectionDayTxt
        });
      } else {
        return;
      }
    } else {
      this.onDateSelect.emit({
        day: date.day,
        month: date.month,
        year: date.year,
        dayName: this.dayLabelsArray_full[selD.getDay() + 1],
        dayNameShort: this.dayLabelsArray[selD.getDay() + 1],
        monthName: this.monthLabels_full[date.month],
        monthNameShort: this.monthLabels[date.month],
        formattedDate: this.selectionDayTxt
      });
    }
  }
  isLessThanDate(date) {
    this.selectionDayTxt = this.formatDate(date);
    let selD = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
    if (Object.keys(this.minDateSelection).length > 0) {
      // Ensure correct comparison of date values
      if (new Date(this.minDateSelection.year, this.minDateSelection.month - 1, this.minDateSelection.day) > new Date(date.year, date.month - 1, date.day)) {
        return true;
      }
    }
    return false;
  }
  preZero(val) {
    // Prepend zero if smaller than 10
    return val < '10' ? '0' + val : val;
  }
  formatDate(val) {
    return this.dateFormat.replace('yyyy', val.year).replace('mm', this.preZero(val.month)).replace('dd', this.preZero(val.day));
  }
  monthText(m) {
    // Returns mont as a text
    return this.monthLabels_full[m];
  }
  monthStartIdx(y, m) {
    // Month start index
    let d = new Date();
    d.setDate(1);
    d.setMonth(m - 1);
    d.setFullYear(y);
    let idx = d.getDay() + this.sundayIdx();
    return idx >= 7 ? idx - 7 : idx;
  }
  daysInMonth(m, y) {
    // Return number of days of current month
    return new Date(y, m, 0).getDate();
  }
  daysInPrevMonth(m, y) {
    // Return number of days of the previous month
    if (m === 1) {
      m = 12;
      y--;
    } else {
      m--;
    }
    return this.daysInMonth(m, y);
  }
  isCurrDay(d, m, y, cmo) {
    // Check is a given date the current date
    return d === this.today.getDate() && m === this.today.getMonth() + 1 && y === this.today.getFullYear() && cmo === 2;
  }
  isSelectedDay(d, m, y, cmo) {
    // Check is a given date the current date
    if (this.dateSelected) {
      return d === this.dateSelected.day && m === this.dateSelected.month && y === this.dateSelected.year && cmo === 2;
    }
    return false;
  }
  isPast(d, m, y, cmo) {
    if (this.deactivatePastDate) {
      let month = m;
      switch (cmo) {
        case this.PREV_MONTH:
          month = m - 2;
          break;
        case this.CURR_MONTH:
          month = m - 1;
          break;
        default:
          break;
      }
      let dt = new Date(y, month, d + 1);
      if (dt < this.today) {
        return true;
      }
      return false;
    }
    return false;
  }
  isFuture(d, m, y, cmo) {
    if (this.deactivateFutureDate) {
      let month = m;
      switch (cmo) {
        case this.NEXT_MONTH:
          month = m;
          break;
        case this.CURR_MONTH:
          month = m - 1;
          break;
        default:
          break;
      }
      let dt = new Date(y, month, d);
      if (dt > this.today) {
        return true;
      }
      return false;
    }
    return false;
  }
  isLessThanMin(d, m, y, cmo) {
    if (this.minDateSelection && Object.keys(this.minDateSelection).length > 0) {
      if (new Date(this.minDateSelection.year, this.minDateSelection.month, this.minDateSelection.day) <= new Date(y, m, d)) {
        // this.onDateSelect.emit({
        //     day: this.selectedDate.day,
        //     month: this.selectedDate.month,
        //     year: this.selectedDate.year,
        //     dayName: this.dayLabelsArray[selD.getDay() + 1],
        //     monthName: this.monthLabels[this.selectedDate.month],
        //     formattedDate: this.selectionDayTxt
        // });
        return false;
      } else {
        return true;
      }
    }
    return false;
  }
  isGreaterThanMax(d, m, y, cmo) {
    if (this.maxDateSelection && Object.keys(this.maxDateSelection).length > 0) {
      if (new Date(this.maxDateSelection.year, this.maxDateSelection.month, this.maxDateSelection.day) >= new Date(y, m, d)) {
        // this.onDateSelect.emit({
        //     day: this.selectedDate.day,
        //     month: this.selectedDate.month,
        //     year: this.selectedDate.year,
        //     dayName: this.dayLabelsArray[selD.getDay() + 1],
        //     monthName: this.monthLabels[this.selectedDate.month],
        //     formattedDate: this.selectionDayTxt
        // });
        return false;
      } else {
        return true;
      }
    }
    return false;
  }
  hidePreviosMonth() {
    if (this.deactivatePastDate) {
      let m = this.visibleMonth.monthNbr - 1;
      let y = this.visibleMonth.year;
      let dt = new Date();
      let mt = dt.getMonth();
      let yt = dt.getFullYear();
      if (m <= mt && y <= yt) {
        return true;
      }
    }
    return false;
  }
  hideNextMonth() {
    if (this.deactivateFutureDate) {
      let m = this.visibleMonth.monthNbr - 1;
      let y = this.visibleMonth.year;
      let dt = new Date();
      let mt = dt.getMonth();
      let yt = dt.getFullYear();
      if (m >= mt && y >= yt) {
        return true;
      }
    }
    return false;
  }
  sundayIdx() {
    // Index of Sunday day
    return this.dayIdx > 0 ? 7 - this.dayIdx : 0;
  }
  createMonth(m, y) {
    let selD = new Date(y, m - 1, 1, 0, 0, 0, 0);
    this.onMonthChange.emit({
      day: 1,
      month: m,
      year: y,
      dayName: this.dayLabelsArray_full[selD.getDay() + 1],
      dayNameShort: this.dayLabelsArray[selD.getDay() + 1],
      monthName: this.monthLabels_full[m],
      monthNameShort: this.monthLabels_full[m],
      formattedDate: "01-" + this.preZero(m.toString()) + "-" + y
    });
    this.dates.length = 0;
    let monthStart = this.monthStartIdx(y, m);
    let dInThisM = this.daysInMonth(m, y);
    let dInPrevM = this.daysInPrevMonth(m, y);
    let sunIdx = this.sundayIdx();
    let dayNbr = 1;
    let cmo = this.PREV_MONTH;
    for (var i = 1; i < 7; i++) {
      var week = [];
      if (i === 1) {
        // First week
        var pm = dInPrevM - monthStart + 1;
        // Previous month
        for (var j = pm; j <= dInPrevM; j++) {
          week.push({
            day: j,
            month: m,
            year: y,
            cmo: cmo,
            currDay: this.isCurrDay(j, m, y, cmo),
            sun: week.length === sunIdx
          });
        }
        cmo = this.CURR_MONTH;
        // Current month
        var daysLeft = 7 - week.length;
        for (var j = 0; j < daysLeft; j++) {
          week.push({
            day: dayNbr,
            month: m,
            year: y,
            cmo: cmo,
            currDay: this.isCurrDay(dayNbr, m, y, cmo),
            sun: week.length === sunIdx
          });
          dayNbr++;
        }
      } else {
        // Rest of the weeks
        for (var j = 1; j < 8; j++) {
          if (dayNbr > dInThisM) {
            // Next month
            dayNbr = 1;
            cmo = this.NEXT_MONTH;
          }
          week.push({
            day: dayNbr,
            month: m,
            year: y,
            cmo: cmo,
            currDay: this.isCurrDay(dayNbr, m, y, cmo),
            sun: week.length === sunIdx
          });
          dayNbr++;
        }
      }
      this.dates.push(week);
    }
  }
  selectDateTime() {
    let selD = new Date(this.selectedDate.year, this.selectedDate.month - 1, this.selectedDate.day, 0, 0, 0, 0);
    this.dateSelected.time = {
      // return strTime;
      hour: this.time['hour'],
      minute: this.time['minute'],
      ampm: this.time['ampm'],
      formattedTime: this.time['hour'] + ':' + this.time['minute'] + ' ' + this.time['ampm']
    };
    // this.onDateSelect.emit({
    //     day: this.selectedDate.day,
    //     month: this.selectedDate.month,
    //     year: this.selectedDate.year,
    //     dayName: this.dayLabelsArray[selD.getDay() + 1],
    //     monthName: this.monthLabels[this.selectedDate.month],
    //     formattedDate: this.selectionDayTxt,
    //     time:this.time
    // });
    this.onDateSelect.emit(this.dateSelected);
  }
}
_TanCalendar = TanCalendar;
_TanCalendar.ɵfac = function TanCalendar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TanCalendar)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_common_storage__WEBPACK_IMPORTED_MODULE_0__.CommonStorage));
};
_TanCalendar.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _TanCalendar,
  selectors: [["tan-calendar"]],
  inputs: {
    CalWidth: "CalWidth",
    headerBackground: "headerBackground",
    headerText: "headerText",
    btnPrimary: "btnPrimary",
    btnSecondary: "btnSecondary",
    btnText: "btnText",
    dateFormat: "dateFormat",
    height: "height",
    width: "width",
    border: "border",
    firstDayOfWeek: "firstDayOfWeek",
    sunHighlight: "sunHighlight",
    deactivatePastDate: "deactivatePastDate",
    deactivateFutureDate: "deactivateFutureDate",
    dateSelected: "dateSelected",
    minDateSelection: "minDateSelection",
    maxDateSelection: "maxDateSelection",
    showTime: "showTime",
    timeFormat: "timeFormat"
  },
  outputs: {
    onDateSelect: "onDateSelect",
    onMonthChange: "onMonthChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
  decls: 21,
  vars: 19,
  consts: [[1, "tan-calendar"], [1, ""], [1, "col-sm-12", "col-md-12", 2, "z-index", "1000"], [1, "Event-calendar"], [1, "years", "clearfix", 2, "background", "var(--primary) !important"], [1, "unit", "prev", 2, "text-align", "left", "padding-left", "10px", 3, "click", "ngClass"], ["name", "return-up-back-outline"], [1, "monyear", "uppercase", 3, "ngStyle"], [3, "ngStyle"], [1, "unit", "next", 2, "text-align", "right", "padding-right", "10px", 3, "click", "ngClass"], ["name", "return-up-forward-outline"], [1, "clear"], [1, "clearfix", "WeekDays", 3, "ngStyle"], ["class", "unit", 4, "ngFor", "ngForOf"], [1, "days"], [1, "clearfix"], [4, "ngFor", "ngForOf"], ["id", "divcalendartable"], [1, "unit"], ["tappable", "", 3, "click", 4, "ngFor", "ngForOf"], ["tappable", "", 3, "click"], [3, "ngStyle", "ngClass"], [3, "ngStyle", 4, "ngIf"]],
  template: function TanCalendar_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TanCalendar_Template_div_click_5_listener() {
        return ctx.prevMonth();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7)(8, "b", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TanCalendar_Template_div_click_10_listener() {
        return ctx.nextMonth();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "ion-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, TanCalendar_div_14_Template, 3, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14)(17, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, TanCalendar_div_18_Template, 2, 1, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "div", 17);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx.hidePreviosMonth()));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c1, ctx.headerText));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.metaData.msiteFolder == "cbustheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c2) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.visibleMonth.monthTxt, " ", ctx.visibleMonth.year, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, ctx.hideNextMonth()));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c4, ctx.headerBackground));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.weekDays);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.dates);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle],
  styles: ["\n\n.header[_ngcontent-%COMP%]:after {\n  content: none;\n}\n\n.Event-calendar[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: black;\n  border-radius: 0px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n  -webkit-border-radius: 0px;\n  -moz-border-radius: 0px;\n}\n\n.Event-calendar[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%] {\n  float: left;\n  width: 12.28%;\n  text-align: center;\n  color: #fff;\n}\n.Event-calendar[_ngcontent-%COMP%]   .unit.selected[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--primaryText) !important;\n  background-image: linear-gradient(50deg, #3c7e33 0%, #3c9e33 100%) !important;\n}\n\n.Event-calendar[_ngcontent-%COMP%]   .years[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 34%;\n  display: flex;\n  height: 100%;\n  color: #999;\n  font-size: 7vw;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.Event-calendar[_ngcontent-%COMP%]   .years[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\n  text-align: right;\n  width: 34%;\n  display: flex;\n  height: 100%;\n  color: #999;\n  font-size: 7vw;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.Event-calendar[_ngcontent-%COMP%]   .years[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  opacity: 0.55;\n}\n\n.Event-calendar[_ngcontent-%COMP%]   .years[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%]   em[_ngcontent-%COMP%], \n.Event-calendar[_ngcontent-%COMP%]   .years[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  border: 1px solid #666;\n  color: #666;\n  border-radius: 50%;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n}\n\n.Event-calendar[_ngcontent-%COMP%]   .years[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]:before, \n.Event-calendar[_ngcontent-%COMP%]   .years[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]:before {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  margin-top: 6px;\n  font-size: 0;\n  content: \"\";\n  border-style: solid;\n  border-width: 7px;\n}\n\n.Event-calendar[_ngcontent-%COMP%]   .years[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]:before {\n  top: 1px;\n  left: 2px;\n  border-color: transparent #666 transparent transparent;\n}\n\n.Event-calendar[_ngcontent-%COMP%]   .years[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]:before {\n  top: 1px;\n  left: 12px;\n  border-color: transparent transparent transparent #666;\n}\n\n.years[_ngcontent-%COMP%] {\n  height: 12vw;\n  background: #FFDE21;\n  color: white;\n}\n\n.Event-calendar[_ngcontent-%COMP%]   .years[_ngcontent-%COMP%]   .monyear[_ngcontent-%COMP%] {\n  float: left;\n  width: 32%;\n  text-align: center;\n  text-transform: capitalize;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  font-size: 14px;\n}\n\n.Event-calendar[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  border-top: 1px solid #d7dee8;\n}\n\n.Event-calendar[_ngcontent-%COMP%]   .WeekDays[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%] {\n  margin: 1%;\n}\n\n.Event-calendar[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%] {\n  height: 60px;\n  \n\n  \n\n  \n\n  \n\n  margin: 1%;\n  overflow: hidden;\n  \n\n  \n\n  \n\n  height: 12vw;\n}\n\n.Event-calendar[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: normal;\n  display: block;\n  width: 100%;\n  height: 100%;\n  border: 2px solid white;\n  \n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n}\n.Event-calendar[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:hover {\n  background: #ccc !important;\n}\n\n.Event-calendar[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: red;\n  padding: 5px;\n  border-radius: 50%;\n}\n\n.Event-calendar[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%]   .tl[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: absolute;\n  margin-left: -85%;\n  background: #f6bc41;\n}\n\n.Event-calendar[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: absolute;\n  margin-left: -20%;\n  background: #3ab0d8;\n}\n\n.Event-calendar[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%]   .bl[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: absolute;\n  margin-left: -40px;\n  margin-top: 31px;\n  background: #e9593e;\n}\n\n.Event-calendar[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%]   .br[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: absolute;\n  margin-left: -20%;\n  \n\n  \n\n  \n\n  margin-top: 31px;\n  background: #656d78;\n}\n\n.Event-calendar[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .unit.older[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  color: #ddd;\n  cursor: default;\n  background-color: transparent;\n}\n\n\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background: #e4ebf3;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 5px;\n  border-radius: 50%;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .glyphicon-header[_ngcontent-%COMP%] {\n  background: #f6bc41;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .glyphicon-eur[_ngcontent-%COMP%] {\n  background: #3ab0d8;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .glyphicon-king[_ngcontent-%COMP%] {\n  background: #656d78;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .glyphicon-plus[_ngcontent-%COMP%] {\n  background: #e9593e;\n}\n\n.today[_ngcontent-%COMP%] {\n  border: 1px solid --ion-color-primary;\n}\n\n.days[_ngcontent-%COMP%]   .unit.selected[_ngcontent-%COMP%] {\n  border: 1px solid --ion-color-primary;\n}\n\n.days[_ngcontent-%COMP%]   .unit.today[_ngcontent-%COMP%] {\n  border: 1px solid --ion-color-primary;\n}\n\n.past[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.past[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  opacity: 0.2;\n}\n\n.future[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.future[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  opacity: 0.2;\n}\n\n.transparent[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.unit[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:hover   b[_ngcontent-%COMP%] {\n  opacity: 0.8 !important;\n}\n\n.inactive[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n\n\n@media screen and (max-device-width: 321px) and (orientation: portrait) {\n  \n\n  tan-calendar[_ngcontent-%COMP%]   .Event-calendar[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%] {\n    height: 39px;\n    border-radius: 50%;\n    overflow: hidden;\n    line-height: 39px;\n    padding: 0;\n  }\n  tan-calendar[_ngcontent-%COMP%]   .Event-calendar[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    border: 0;\n  }\n}\n.clear[_ngcontent-%COMP%] {\n  clear: both;\n}\n\n.WeekDays[_ngcontent-%COMP%] {\n  padding: 2vw 0;\n  font-size: 4vw;\n}\n\n\n\n@media screen and (max-device-width: 640px) {\n  \n\n}\n\n\n@media screen and (min-device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  \n\n}\n\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  \n\n}\n\n\n@media (min-device-height: 667px) and (min-device-width: 375px) and (-webkit-min-device-pixel-ratio: 3) {\n  \n\n}\n\n\n@media screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n  \n\n}\n\n\n@media screen and (min-width: 1024px) {\n  \n\n}"]
});

/***/ })

}]);