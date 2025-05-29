"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[9775],{

/***/ 10246:
/*!*************************************************************!*\
  !*** ./src/app/rate-journey/rate-journey-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RateJourneyPageRoutingModule: () => (/* binding */ RateJourneyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _rate_journey_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rate-journey.page */ 94840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _RateJourneyPageRoutingModule;




const routes = [{
  path: '',
  component: _rate_journey_page__WEBPACK_IMPORTED_MODULE_0__.RateJourneyPage
}];
class RateJourneyPageRoutingModule {}
_RateJourneyPageRoutingModule = RateJourneyPageRoutingModule;
_RateJourneyPageRoutingModule.ɵfac = function RateJourneyPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RateJourneyPageRoutingModule)();
};
_RateJourneyPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _RateJourneyPageRoutingModule
});
_RateJourneyPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RateJourneyPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 89775:
/*!*****************************************************!*\
  !*** ./src/app/rate-journey/rate-journey.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RateJourneyPageModule: () => (/* binding */ RateJourneyPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _rate_journey_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rate-journey-routing.module */ 10246);
/* harmony import */ var _rate_journey_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rate-journey.page */ 94840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _RateJourneyPageModule;






class RateJourneyPageModule {}
_RateJourneyPageModule = RateJourneyPageModule;
_RateJourneyPageModule.ɵfac = function RateJourneyPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RateJourneyPageModule)();
};
_RateJourneyPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _RateJourneyPageModule
});
_RateJourneyPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _rate_journey_routing_module__WEBPACK_IMPORTED_MODULE_0__.RateJourneyPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RateJourneyPageModule, {
    declarations: [_rate_journey_page__WEBPACK_IMPORTED_MODULE_1__.RateJourneyPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _rate_journey_routing_module__WEBPACK_IMPORTED_MODULE_0__.RateJourneyPageRoutingModule]
  });
})();

/***/ }),

/***/ 94840:
/*!***************************************************!*\
  !*** ./src/app/rate-journey/rate-journey.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RateJourneyPage: () => (/* binding */ RateJourneyPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 89417);
var _RateJourneyPage;






function RateJourneyPage_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 15)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div")(5, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-col", 17)(8, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RateJourneyPage_div_12_Template_span_click_8_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.getrating1(item_r2.id, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-col", 17)(11, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RateJourneyPage_div_12_Template_span_click_11_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.getrating1(item_r2.id, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-col", 17)(14, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RateJourneyPage_div_12_Template_span_click_14_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.getrating1(item_r2.id, 3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-col", 17)(17, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RateJourneyPage_div_12_Template_span_click_17_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.getrating1(item_r2.id, 4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " 4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-col", 17)(20, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RateJourneyPage_div_12_Template_span_click_20_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.getrating1(item_r2.id, 5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " 5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-row")(24, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Not Satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ion-col", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Very Satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.msg);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "btn_", item_r2.id, "_1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "btn_", item_r2.id, "_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "btn_", item_r2.id, "_3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "btn_", item_r2.id, "_4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "btn_", item_r2.id, "_5");
  }
}
class RateJourneyPage {
  constructor(apiFactory, util, navCtrl) {
    this.apiFactory = apiFactory;
    this.util = util;
    this.navCtrl = navCtrl;
    this.queriesList = [];
    this.feedback = "";
    this.ratingdata = {};
  }
  ngOnInit() {
    this.pnrNumber = localStorage.getItem('pnrNumber');
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
  getrating1(msgId, ratingnumber) {
    let io = [];
    for (let j = 1; j <= 5; j++) {
      const element = document.getElementById('btn_' + msgId + '_' + j);
      if (element) {
        element.style.backgroundColor = '#f0f0f0';
      }
    }
    for (let i = 1; i <= ratingnumber; i++) {
      io.push(i);
      io.forEach(item => {
        // console.log(item)
        const element = document.getElementById('btn_' + msgId + '_' + item);
        if (element) element.style.backgroundColor = 'var(--iconsAndButtonsColor)';
      });
      this.ratingdata[msgId] = ratingnumber;
      // console.log(this.ratingdata,"OMRESULT")
    }
  }
  travelAgain(value) {
    // console.log(value);
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
  }
  submitFeedback() {
    var data = Object.keys(this.ratingdata);
    this.enteredData = data;
    // console.log(this.enteredData, 'Omset')
    // if(this.searchData.length == data.length && this.travelAgainmsg != null){
    this.ratingdata['pnr_number'] = this.pnrNumber;
    this.ratingdata["device_id"] = "";
    this.ratingdata["action"] = "update_feedback_ratings";
    this.ratingdata["controller"] = "api";
    this.ratingdata["format"] = "json";
    this.ratingdata["like_to_travel_again"] = this.travelAgainmsg;
    this.ratingdata["feedback"] = this.feedback;
    this.apiFactory.updateFeedback(this.pnrNumber, "", this.ratingdata).subscribe(res => {
      // console.log(res,"hjfkdghjkf");
      if (res.code == '401') {
        this.util.showToast(res.message);
      } else {
        this.util.showToast(res.message);
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
}
_RateJourneyPage = RateJourneyPage;
_RateJourneyPage.ɵfac = function RateJourneyPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RateJourneyPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_0__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_1__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController));
};
_RateJourneyPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _RateJourneyPage,
  selectors: [["app-rate-journey"]],
  standalone: false,
  decls: 32,
  vars: 2,
  consts: [["mode", "md", 1, "h50"], ["slot", "start"], [1, "head", 2, "opacity", "0.7"], [2, "margin-left", "10px", "color", "var(--iconsAndButtonsColor)", "font-weight", "bold", "font-size", "15px"], [4, "ngFor", "ngForOf"], [1, "textSet"], [1, "btnSelect"], ["id", "btn_yes", 1, "btnDesign", 3, "click"], ["id", "btn_no", 1, "btnDesign", 3, "click"], [1, "feedbackSet"], ["rows", "6", "cols", "20", "maxlength", "250", "minlength", "5", 2, "border", "1px solid black", 3, "ngModelChange", "ionInput", "ngModel"], [2, "text-align", "right"], ["id", "charNum", 2, "font-size", "12px", "font-weight", "400", "color", "#4b4b4b"], [2, "display", "flex", "align-items", "center", "justify-content", "center"], [1, "submitBtn", 3, "click"], [1, "msgShow"], ["size", "1"], ["size", "2"], [1, "rateBtn", 3, "click", "id"], ["size", "8", 1, "satisfiedMsg"], ["size", "4", 1, "satisfiedMsg"]],
  template: function RateJourneyPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Rate Service");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content")(7, "div")(8, "div")(9, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Please Rate your journey based on your Experience. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, RateJourneyPage_div_12_Template, 28, 11, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5)(14, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Would you like to travel with us again? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 6)(17, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RateJourneyPage_Template_span_click_17_listener() {
        return ctx.travelAgain("yes");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " YES ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RateJourneyPage_Template_span_click_19_listener() {
        return ctx.travelAgain("no");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " NO ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 9)(22, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Please write the feedback (optional)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div")(25, "ion-textarea", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RateJourneyPage_Template_ion_textarea_ngModelChange_25_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.feedback, $event) || (ctx.feedback = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionInput", function RateJourneyPage_Template_ion_textarea_ionInput_25_listener() {
        return ctx.countChars();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 11)(27, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "250 Character(s) left");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 13)(30, "ion-button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RateJourneyPage_Template_ion_button_click_30_listener() {
        return ctx.submitFeedback();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.searchData);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.feedback);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTextarea, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonBackButton],
  styles: [".rateBtn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 46px;\n  height: 32px;\n  border-radius: 4px;\n  background: #f0f0f0;\n}\n\n.msgShow[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #4b4b4b;\n  padding: 0px 10px 10px 10px;\n}\n\n.satisfiedMsg[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  color: #4b4b4b;\n  padding: 0px 10px 10px 10px;\n}\n\n.textSet[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #4b4b4b;\n  padding-left: 10px;\n}\n\n.btnSelect[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  padding-top: 15px;\n}\n\n.btnDesign[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  margin-right: 10px;\n  margin-left: 10px;\n  padding: 10px 26px;\n  border-radius: 5px;\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.feedbackSet[_ngcontent-%COMP%] {\n  color: #4a4a4a;\n  font-size: 14px;\n  font-weight: 700;\n  padding: 10px;\n}\n\n.submitBtn[_ngcontent-%COMP%] {\n  --background: var(--iconsAndButtonsColor);\n}"]
});

/***/ })

}]);