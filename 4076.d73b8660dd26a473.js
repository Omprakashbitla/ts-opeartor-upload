"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[4076],{

/***/ 44076:
/*!***********************************************************************!*\
  !*** ./src/app/custom-ourbus-calender/custom-ourbus-calender.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomOurbusCalenderPage: () => (/* binding */ CustomOurbusCalenderPage)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 97586);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 45564);
var _CustomOurbusCalenderPage;






const _c0 = () => ({
  "padding-top": "50px"
});
const _c1 = () => ({});
const _c2 = (a0, a1, a2, a3, a4) => ({
  "disabled": a0,
  "selected": a1,
  "in-range": a2,
  "selected-date": a3,
  "range-highlight": a4
});
function CustomOurbusCalenderPage_div_9_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](day_r1);
  }
}
function CustomOurbusCalenderPage_div_9_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 17);
  }
}
function CustomOurbusCalenderPage_div_9_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CustomOurbusCalenderPage_div_9_button_7_Template_button_click_0_listener() {
      const day_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.selectDate(day_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const day_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction5"](2, _c2, day_r3.isDisabled, day_r3.isSelected, day_r3.isInRange, day_r3.isSelected, day_r3.isInRange && !day_r3.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", day_r3.date, " ");
  }
}
function CustomOurbusCalenderPage_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CustomOurbusCalenderPage_div_9_span_4_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CustomOurbusCalenderPage_div_9_span_6_Template, 1, 0, "span", 15)(7, CustomOurbusCalenderPage_div_9_button_7_Template, 2, 8, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const month_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", month_r5.name, " ", month_r5.year, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.weekDays);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", month_r5.startingBlanks);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", month_r5.days);
  }
}
class CustomOurbusCalenderPage {
  constructor(modalController, params, commonStorage) {
    this.modalController = modalController;
    this.params = params;
    this.commonStorage = commonStorage;
    this.months = [];
    this.weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    this.today = moment__WEBPACK_IMPORTED_MODULE_0___default()();
    this.selectedDates = [];
    this.selectedEndDate = null;
    this.originalPreselectedDate = null;
    this.isIos = false;
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    let departureDate = params.get('departureDate');
    this.departureDate = moment__WEBPACK_IMPORTED_MODULE_0___default()(departureDate.formattedDate, "DD-MM-YYYY").format("YYYY-MM-DD");
    this.type = params.get('type');
    let departureDateReturn = params.get('departureDateReturn');
    this.departureDateReturn = moment__WEBPACK_IMPORTED_MODULE_0___default()(departureDateReturn.formattedDate, "DD-MM-YYYY").format("YYYY-MM-DD");
    this.title = params.get('title');
    this.multipleDateSelection = this.type === 2;
    this.selectedTripSegment = params.get('selectedTripSegment');
    this.originalPreselectedDate = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.departureDate); // Save original date for checking later
  }
  ngOnInit() {
    // Set the flag for multiple date selection based on the selected trip segment
    if (this.selectedTripSegment === 'oneway') {
      this.multipleDateSelection = false; // Disable multiple date selection for one-way trips
    } else {
      this.multipleDateSelection = this.type === 2; // Allow multiple date selection for return trips
    }
    // Initialize the departure and return date logic
    if (this.departureDate && this.departureDate.formattedDate) {
      this.departureDate = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.departureDate.formattedDate, "DD-MM-YYYY").format("YYYY-MM-DD");
    }
    if (this.departureDateReturn && this.departureDateReturn.formattedDate) {
      this.departureDateReturn = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.departureDateReturn.formattedDate, "DD-MM-YYYY").format("YYYY-MM-DD");
    }
    // Conditionally set selected dates based on the trip segment type
    if (this.selectedTripSegment === 'oneway') {
      this.selectedDates = [moment__WEBPACK_IMPORTED_MODULE_0___default()(this.departureDate, "YYYY-MM-DD")]; // Only departure date for one-way
    } else if (this.departureDate && this.departureDateReturn) {
      this.selectedDates = [moment__WEBPACK_IMPORTED_MODULE_0___default()(this.departureDate, "YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()(this.departureDateReturn, "YYYY-MM-DD")];
      this.selectedEndDate = this.selectedDates[1];
      this.highlightRange();
    } else if (this.departureDate) {
      this.selectedDates = [moment__WEBPACK_IMPORTED_MODULE_0___default()(this.departureDate, "YYYY-MM-DD")];
    }
    // Generate the calendar with or without a date range
    this.generateCalendar({
      numMonths: 12,
      showPreviousMonths: false,
      preselectedDate: this.departureDate || null,
      dateRange: this.selectedTripSegment === 'oneway' ? null : {
        start: this.departureDate,
        end: this.departureDateReturn || null
      }
    });
  }
  generateCalendar({
    numMonths = 12,
    showPreviousMonths = false,
    preselectedDate = null,
    dateRange = null
  } = {}) {
    this.months = [];
    const direction = showPreviousMonths ? -1 : 1;
    for (let i = 0; i < numMonths; i++) {
      const monthStart = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.today).add(i * direction, 'months').startOf('month');
      const daysInMonth = monthStart.daysInMonth();
      const days = [];
      const startingDay = monthStart.day() === 0 ? 6 : monthStart.day() - 1;
      const startingBlanks = Array(startingDay).fill(null);
      for (let d = 1; d <= daysInMonth; d++) {
        const currentDay = moment__WEBPACK_IMPORTED_MODULE_0___default()(monthStart).date(d);
        const isInRange = dateRange ? currentDay.isBetween(dateRange.start, dateRange.end, 'day', '[]') : false;
        const isDisabled = dateRange !== null && dateRange !== void 0 && dateRange.start ? currentDay.isBefore(this.today, 'day') || currentDay.isBefore(moment__WEBPACK_IMPORTED_MODULE_0___default()(dateRange.start), 'day') : currentDay.isBefore(this.today, 'day');
        days.push({
          date: currentDay.date(),
          fullDate: currentDay,
          isSelected: preselectedDate ? currentDay.isSame(preselectedDate, 'day') || currentDay.isSame(this.selectedEndDate, 'day') : false,
          isDisabled: isDisabled,
          isInRange: isInRange,
          price: `$${Math.floor(Math.random() * 100)}` // Example price
        });
      }
      this.months.push({
        name: monthStart.format('MMMM'),
        year: monthStart.format('YYYY'),
        days: days,
        startingBlanks: startingBlanks
      });
    }
    if (showPreviousMonths) {
      this.months.reverse();
    }
    if (dateRange) {
      this.highlightRange();
    }
  }
  selectDate(day) {
    if (day.isDisabled) return;
    if (this.multipleDateSelection) {
      if (this.departureDate === day.fullDate.format("YYYY-MM-DD") && this.selectedDates.length === 1) {
        var _this$selectedEndDate;
        this.selectedDates.push(day.fullDate);
        this.selectedEndDate = day.fullDate;
        this.markSelectedDate(this.departureDate);
        this.markSelectedDate((_this$selectedEndDate = this.selectedEndDate) !== null && _this$selectedEndDate !== void 0 ? _this$selectedEndDate : moment__WEBPACK_IMPORTED_MODULE_0___default()());
        this.highlightRange();
      } else {
        this.handleMultipleDateSelection(day);
      }
    } else {
      this.handleSingleDateSelection(day);
    }
  }
  handleSingleDateSelection(day) {
    this.clearSelectedDates();
    this.selectedDates = [day.fullDate];
    day.isSelected = true;
  }
  handleMultipleDateSelection(day) {
    if (this.selectedDates.length === 0) {
      // Start selection with the departure date
      this.selectedDates = [moment__WEBPACK_IMPORTED_MODULE_0___default()(this.departureDate)];
      this.markSelectedDate(this.departureDate);
    }
    if (this.selectedDates.length === 1) {
      var _this$selectedEndDate2;
      // Select the end date
      day.isSelected = true;
      this.selectedEndDate = day.fullDate;
      this.selectedDates.push(day.fullDate);
      this.markSelectedDate((_this$selectedEndDate2 = this.selectedEndDate) !== null && _this$selectedEndDate2 !== void 0 ? _this$selectedEndDate2 : moment__WEBPACK_IMPORTED_MODULE_0___default()());
      this.highlightRange();
    } else if (this.selectedDates.length === 2) {
      var _this$selectedEndDate3;
      // If two dates are already selected, reset and start over
      this.clearSelectedDates();
      this.selectedDates = [moment__WEBPACK_IMPORTED_MODULE_0___default()(this.departureDate), day.fullDate];
      this.selectedEndDate = day.fullDate;
      this.markSelectedDate(this.departureDate);
      this.markSelectedDate((_this$selectedEndDate3 = this.selectedEndDate) !== null && _this$selectedEndDate3 !== void 0 ? _this$selectedEndDate3 : moment__WEBPACK_IMPORTED_MODULE_0___default()());
      this.highlightRange();
    }
  }
  markSelectedDate(date) {
    this.months.forEach(month => {
      month.days.forEach(day => {
        if (day.fullDate.isSame(date, 'day')) {
          day.isSelected = true;
        }
      });
    });
  }
  clearEndDateSelection() {
    this.months.forEach(month => {
      month.days.forEach(day => {
        if (day.fullDate.isSame(this.selectedEndDate)) {
          day.isSelected = false;
          day.isInRange = false;
        }
      });
    });
    this.selectedEndDate = null;
  }
  clearSelectedDates() {
    this.months.forEach(month => {
      month.days.forEach(day => {
        day.isSelected = false;
        day.isInRange = false;
      });
    });
    this.selectedDates = [];
  }
  highlightRange() {
    if (this.selectedDates.length < 2) return;
    const start = this.selectedDates[0];
    const end = this.selectedDates[1];
    this.months.forEach(month => {
      month.days.forEach(day => {
        const dayDate = day.fullDate;
        day.isInRange = dayDate.isAfter(start, 'day') && dayDate.isBefore(end, 'day');
        if (dayDate.isSame(start, 'day') || dayDate.isSame(end, 'day')) {
          day.isSelected = true; // Ensure start and end dates remain selected
        }
      });
    });
  }
  confirmSelection() {
    // If no dates are selected, use departureDate
    if (this.selectedDates.length === 0 && this.departureDate) {
      this.selectedDates = [moment__WEBPACK_IMPORTED_MODULE_0___default()(this.departureDate, "YYYY-MM-DD")];
    }
    // Sort selected dates
    this.selectedDates.sort((a, b) => a.diff(b));
    const startDate = this.selectedDates[0];
    const endDate = this.selectedDates.length > 1 ? this.selectedDates[this.selectedDates.length - 1] : startDate;
    if (this.type === 1) {
      this.modalController.dismiss({
        start_date: startDate.format("YYYY-MM-DD")
      });
    } else if (this.type === 2) {
      this.modalController.dismiss({
        start_date: startDate.format("YYYY-MM-DD"),
        end_date: endDate.format("YYYY-MM-DD")
      });
      // Logic for storing in commonStorage
      const startDateFormatted = startDate.format("YYYY-MM-DD");
      const endDateFormatted = endDate.format("YYYY-MM-DD");
      this.commonStorage.localSet("isSameStartEndDate", startDateFormatted === endDateFormatted ? "yes" : "no");
      const currentDateFormatted = moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");
      this.commonStorage.localSet("isCSameStartEndDate", startDateFormatted === currentDateFormatted && endDateFormatted === currentDateFormatted ? "yes" : "no");
      const isNextDay = endDate.isSame(startDate.clone().add(1, "day"), "day");
      this.commonStorage.localSet("isNextDay", isNextDay ? "yes" : "no");
    } else {
      // Handle other types if needed
    }
  }
  gotoback() {
    this.modalController.dismiss();
  }
}
_CustomOurbusCalenderPage = CustomOurbusCalenderPage;
_CustomOurbusCalenderPage.ɵfac = function CustomOurbusCalenderPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CustomOurbusCalenderPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_2__.CommonStorage));
};
_CustomOurbusCalenderPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _CustomOurbusCalenderPage,
  selectors: [["app-custom-ourbus-calender"]],
  standalone: false,
  decls: 13,
  vars: 4,
  consts: [[1, "ourbustheme", 2, "box-shadow", "0px 4px 8px 0px #00000014"], [3, "ngStyle"], ["size", "2", 1, "col", 3, "click"], ["name", "arrow-back-outline"], ["size", "8"], [1, "header_p"], ["size", "2"], [1, "ourbustheme"], ["class", "month-section", 4, "ngFor", "ngForOf"], [1, "ourbustheme", 2, "box-shadow", "0px 13px 10px 21px #00000014"], ["expand", "block", 1, "ourbus_btn", 3, "click"], [1, "month-section"], [1, "week-days"], [4, "ngFor", "ngForOf"], [1, "days-grid"], ["class", "day blank", 4, "ngFor", "ngForOf"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "day", "blank"], [3, "click", "ngClass"]],
  template: function CustomOurbusCalenderPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-row", 1)(2, "ion-col", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CustomOurbusCalenderPage_Template_ion_col_click_2_listener() {
        return ctx.gotoback();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-col", 4)(5, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Choose your date(s)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ion-col", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-content", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, CustomOurbusCalenderPage_div_9_Template, 8, 5, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-footer", 9)(11, "ion-button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CustomOurbusCalenderPage_Template_ion_button_click_11_listener() {
        return ctx.confirmSelection();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Select Dates");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.months);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRow],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: #ffffff;\n}\n\n.month-section[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.month-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-left: 10px;\n  font-weight: 700;\n}\n\n.week-days[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  font-weight: bold;\n  margin-bottom: 14px;\n  margin-top: 25px;\n}\n\n.days-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 0px; \n\n}\n\nbutton[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  font-size: 14px;\n  position: relative;\n  padding: 0;\n  height: 55px;\n  width: 100%;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #333;\n}\n\nbutton.selected[_ngcontent-%COMP%] {\n  background-color: var(--iconsAndButtonsColor);\n  color: var(--primaryText);\n}\n\nbutton.in-range[_ngcontent-%COMP%] {\n  position: relative;\n  color: #333;\n  border-radius: 0px;\n  z-index: 1; \n\n  overflow: hidden; \n\n}\n\nbutton.in-range[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--iconsAndButtonsColor);\n  opacity: 0.1; \n\n  z-index: -1; \n\n  border-radius: inherit; \n\n}\n\nbutton.disabled[_ngcontent-%COMP%] {\n  color: #cccccc;\n  pointer-events: none;\n}\n\nbutton[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #666;\n  margin-top: 4px;\n}\n\n.range-line[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  height: 100%;\n  background-color: #eef7ed;\n  z-index: -1;\n}\n\n.col[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.col[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\n.header_p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 20px;\n  font-weight: 700;\n}\n\n.ourbus_btn[_ngcontent-%COMP%] {\n  height: 50px;\n  box-shadow: none;\n  --border-radius: 8px;\n  font-size: 18px;\n  font-weight: 700;\n  --background:var(--iconsAndButtonsColor);\n  --color:var(--primaryText);\n  margin: 16px;\n  --background-activated:var(--iconsAndButtonsColor);\n}\n\n\n\n.range-highlight[_ngcontent-%COMP%] {\n  border-radius: 18%;\n}\n\n\n\n.selected-date[_ngcontent-%COMP%] {\n  border-radius: 18%;\n}"]
});

/***/ })

}]);