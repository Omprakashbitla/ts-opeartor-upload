"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[6250],{

/***/ 66250:
/*!***********************************************************!*\
  !*** ./src/app/snack-preference/snack-preference.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnackPreferencePage: () => (/* binding */ SnackPreferencePage)
/* harmony export */ });
/* harmony import */ var _Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 31482);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _services_exception__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/exception */ 91502);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 87330);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 89417);

var _SnackPreferencePage;










const _c0 = ["mySlider"];
function SnackPreferencePage_ion_row_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-row", 18)(1, "div", 19)(2, "ion-segment", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SnackPreferencePage_ion_row_11_Template_ion_segment_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.berthType, $event) || (ctx_r1.berthType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-segment-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SnackPreferencePage_ion_row_11_Template_ion_segment_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.goToSlide(0, "onwards"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ion-segment-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SnackPreferencePage_ion_row_11_Template_ion_segment_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.goToSlide(1, "return"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.berthType);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", "Onward", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", "Return", " ");
  }
}
function SnackPreferencePage_swiper_container_12_ion_row_3_ion_card_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", s_r6.quantity, " added");
  }
}
function SnackPreferencePage_swiper_container_12_ion_row_3_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-card", 28)(1, "ion-item")(2, "ion-thumbnail", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SnackPreferencePage_swiper_container_12_ion_row_3_ion_card_1_span_4_Template, 2, 1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ion-label")(6, "ion-row")(7, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 32)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "\u20B9");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "ion-row", 33)(15, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "ion-row", 35)(18, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SnackPreferencePage_swiper_container_12_ion_row_3_ion_card_1_Template_span_click_18_listener() {
      const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.decrement(i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SnackPreferencePage_swiper_container_12_ion_row_3_ion_card_1_Template_span_click_22_listener() {
      const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.increment(i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const s_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", s_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", s_r6.quantity > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](s_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", s_r6.price, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](s_r6.remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](s_r6.quantity);
  }
}
function SnackPreferencePage_swiper_container_12_ion_row_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SnackPreferencePage_swiper_container_12_ion_row_3_ion_card_1_Template, 24, 6, "ion-card", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.snacksOnward);
  }
}
function SnackPreferencePage_swiper_container_12_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No snacks found !");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SnackPreferencePage_swiper_container_12_ion_row_7_ion_card_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", s_r9.quantity, " added");
  }
}
function SnackPreferencePage_swiper_container_12_ion_row_7_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-card", 28)(1, "ion-item")(2, "ion-thumbnail", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SnackPreferencePage_swiper_container_12_ion_row_7_ion_card_1_span_4_Template, 2, 1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ion-label")(6, "ion-row")(7, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 32)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "\u20B9");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "ion-row", 33)(15, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "ion-row", 35)(18, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SnackPreferencePage_swiper_container_12_ion_row_7_ion_card_1_Template_span_click_18_listener() {
      const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.decrement(i_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SnackPreferencePage_swiper_container_12_ion_row_7_ion_card_1_Template_span_click_22_listener() {
      const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.increment(i_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const s_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", s_r9.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", s_r9.quantity > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](s_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", s_r9.price, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](s_r9.remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](s_r9.quantity);
  }
}
function SnackPreferencePage_swiper_container_12_ion_row_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SnackPreferencePage_swiper_container_12_ion_row_7_ion_card_1_Template, 24, 6, "ion-card", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.snacksReturn);
  }
}
function SnackPreferencePage_swiper_container_12_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No snacks found !");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SnackPreferencePage_swiper_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "swiper-container", 23, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("swiperslidechange", function SnackPreferencePage_swiper_container_12_Template_swiper_container_swiperslidechange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const mySlider_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onSlideChanged(mySlider_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "swiper-slide", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, SnackPreferencePage_swiper_container_12_ion_row_3_Template, 2, 1, "ion-row", 25)(4, SnackPreferencePage_swiper_container_12_ng_template_4_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "swiper-slide", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, SnackPreferencePage_swiper_container_12_ion_row_7_Template, 2, 1, "ion-row", 25)(8, SnackPreferencePage_swiper_container_12_ng_template_8_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const noSnack_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](5);
    const noSnackR_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](9);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx_r1.slideOpts);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.snacksOnward.length > 0)("ngIfElse", noSnack_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.snacksReturn.length > 0)("ngIfElse", noSnackR_r12);
  }
}
function SnackPreferencePage_div_13_ion_card_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", s_r14.quantity, " added");
  }
}
function SnackPreferencePage_div_13_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-card")(1, "ion-item")(2, "ion-thumbnail", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SnackPreferencePage_div_13_ion_card_1_span_4_Template, 2, 1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ion-label")(6, "ion-row")(7, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 32)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "\u20B9");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "ion-row", 33)(15, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "ion-row", 35)(18, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SnackPreferencePage_div_13_ion_card_1_Template_span_click_18_listener() {
      const i_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.decrement(i_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SnackPreferencePage_div_13_ion_card_1_Template_span_click_22_listener() {
      const i_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.increment(i_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const s_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", s_r14.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", s_r14.quantity > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](s_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", s_r14.price, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](s_r14.remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](s_r14.quantity);
  }
}
function SnackPreferencePage_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SnackPreferencePage_div_13_ion_card_1_Template, 24, 6, "ion-card", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.snacks);
  }
}
class SnackPreferencePage {
  constructor(dateService, location, ex, commonService, commonStorage, apiFactory, route, modalController, navParams) {
    this.dateService = dateService;
    this.location = location;
    this.ex = ex;
    this.commonService = commonService;
    this.commonStorage = commonStorage;
    this.apiFactory = apiFactory;
    this.route = route;
    this.modalController = modalController;
    this.navParams = navParams;
    this.snacks = [];
    this.snacksOnward = [];
    this.snacksReturn = [];
    this.isReturn = false;
    this.slideOpts = {
      slidesPerView: 1
    };
    this.berthType = 'onwards';
    this.resId = navParams.get('onwardResId');
    this.returnResid = navParams.get('returnResId');
    this.isReturn = navParams.get('isReturn');
    this.snackList();
    if (this.isReturn) {
      this.returnSnackList();
    }
  }
  goToSlide(slideNum, tabName) {
    var _this = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (tabName == 'onwards') {
        var _this$slides;
        yield (_this$slides = _this.slides) === null || _this$slides === void 0 ? void 0 : _this$slides.nativeElement.swiper.slidePrev(500, false);
      } else if (tabName == "return") {
        var _this$slides2;
        yield (_this$slides2 = _this.slides) === null || _this$slides2 === void 0 ? void 0 : _this$slides2.nativeElement.swiper.slideNext(500, false);
      }
      _this.berthType = tabName;
    })();
  }
  onSlideChanged(slides) {
    var _this2 = this;
    return (0,_Users_omprakash_Documents_officeWorkspace_capacitor_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        var _this2$slides;
        const currentIndex = yield (_this2$slides = _this2.slides) === null || _this2$slides === void 0 ? void 0 : _this2$slides.nativeElement.swiper.activeIndex;
        console.log('zed', currentIndex);
        switch (currentIndex) {
          case 0:
            _this2.berthType = "onwards";
            break;
          case 1:
            _this2.berthType = "return";
            break;
          default:
            _this2.berthType = "onwards";
            break;
        }
      } catch (e) {
        console.log("onSlideChanged ex", e);
      }
    })();
  }
  ngOnInit() {}
  snackList() {
    this.apiFactory.getSnackList(this.resId).subscribe(res => {
      console.log(res);
      if (res.status == 200) {
        this.snacks = res.snacks;
        this.snacks = this.snacks.map(function (el) {
          var o = Object.assign({}, el);
          o.quantity = 0;
          return o;
        });
        if (this.isReturn) {
          this.snacksOnward = JSON.parse(JSON.stringify(this.snacks));
        }
        console.log(this.snacks);
      }
    }, err => {});
  }
  returnSnackList() {
    this.apiFactory.getSnackList(this.returnResid).subscribe(res => {
      console.log(res);
      if (res.status == 200) {
        this.snacksReturn = res.snacks;
        this.snacksReturn = this.snacksReturn.map(function (el) {
          var o = Object.assign({}, el);
          o.quantity = 0;
          return o;
        });
        console.log(this.snacksReturn);
      }
    }, err => {});
  }
  increment(index) {
    if (this.isReturn) {
      if (this.berthType == "onwards") {
        this.snacksOnward[index].quantity += 1;
      } else {
        this.snacksReturn[index].quantity += 1;
      }
    } else {
      this.snacks[index].quantity += 1;
    }
  }
  decrement(index) {
    if (this.isReturn) {
      if (this.berthType == "onwards") {
        this.decrement1(this.snacksOnward, index);
      } else {
        this.decrement1(this.snacksReturn, index);
      }
    } else {
      this.decrement1(this.snacks, index);
    }
  }
  decrement1(data, index) {
    if (data[index].quantity - 1 < 1) {
      data[index].quantity = 0;
    } else {
      data[index].quantity -= 1;
      console.log('item->' + data[index].quantity);
    }
  }
  proceedToPayment() {
    console.log(this.snacks);
    let selectedSnack = [];
    let selectedSnackOnward = [];
    let selectedSnackReturn = [];
    if (!this.isReturn) {
      for (var i = 0; i < this.snacks.length; i++) {
        let obj;
        if (this.snacks[i].quantity > 0) {
          obj['snack_id'] = this.snacks[i]['snack_id'];
          obj['quantity'] = this.snacks[i]['quantity'];
          selectedSnack.push(obj);
        }
      }
    } else {
      if (this.snacksOnward.length > 0) {
        for (var i = 0; i < this.snacksOnward.length; i++) {
          let obj;
          if (this.snacksOnward[i].quantity > 0) {
            obj['snack_id'] = this.snacksOnward[i]['snack_id'];
            obj['quantity'] = this.snacksOnward[i]['quantity'];
            selectedSnackOnward.push(obj);
          }
        }
      } else if (this.snacksReturn.length > 0) {
        for (var i = 0; i < this.snacksReturn.length; i++) {
          let obj;
          if (this.snacksReturn[i].quantity > 0) {
            obj['snack_id'] = this.snacksReturn[i]['snack_id'];
            obj['quantity'] = this.snacksReturn[i]['quantity'];
            selectedSnackReturn.push(obj);
          }
        }
      }
    }
    let snacksDetails;
    if (!this.isReturn) {
      snacksDetails = selectedSnack;
    } else {
      snacksDetails = {};
      if (selectedSnackOnward.length > 0) {
        snacksDetails['reservation_id'] = {
          "id": this.resId,
          "snacks": selectedSnackOnward
        };
      } else if (selectedSnackReturn.length > 0) {
        snacksDetails['return_reservation_id'] = {
          "id": this.returnResid,
          "snacks": selectedSnackReturn
        };
      }
    }
    this.modalController.dismiss(snacksDetails);
  }
  dismiss() {
    this.modalController.dismiss("");
  }
  skip() {
    this.modalController.dismiss();
  }
}
_SnackPreferencePage = SnackPreferencePage;
_SnackPreferencePage.ɵfac = function SnackPreferencePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SnackPreferencePage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_1__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_exception__WEBPACK_IMPORTED_MODULE_2__.ExceptionProvider), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_4__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_5__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavParams));
};
_SnackPreferencePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _SnackPreferencePage,
  selectors: [["app-snack-preference"]],
  viewQuery: function SnackPreferencePage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.slides = _t.first);
    }
  },
  standalone: false,
  decls: 20,
  vars: 3,
  consts: [["mySlider", ""], ["noSnack", ""], ["noSnackR", ""], [1, "h50"], ["slot", "start"], ["mode", "md", 2, "font-size", "18px", 3, "click"], ["name", "arrow-back", "color", "default"], [1, "head"], [1, "bg-content"], [2, "margin-top", "16px"], [1, "card-p"], ["class", "center-hr", 4, "ngIf"], ["pagination", "false", 3, "options", "swiperslidechange", 4, "ngIf"], [4, "ngIf"], [2, "height", "50px"], [1, "routes-footer"], [1, "button1", 3, "click"], [1, "button2", 3, "click"], [1, "center-hr"], [1, "seg-btn"], ["mode", "md", 1, "tabs", 3, "ngModelChange", "ngModel"], ["value", "onward", 1, "center", 3, "click"], ["value", "return", 1, "center", 3, "click"], ["pagination", "false", 3, "swiperslidechange", "options"], ["id", "onwards"], [4, "ngIf", "ngIfElse"], ["id", "return"], ["style", "width: 100%;", 4, "ngFor", "ngForOf"], [2, "width", "100%"], ["onError", "src = './assets/noimagefound.png'", "alt", "", 3, "src"], ["class", "display-qty", 4, "ngIf"], [1, "product-name"], [1, "align-price"], [2, "width", "60%", "margin-top", "8px"], [1, "product-dec"], [1, "inc-dic"], [1, "qtyminus", 3, "click"], [1, "qty"], [1, "qtyplus", 3, "click"], [1, "display-qty"], [2, "text-align", "center"], [4, "ngFor", "ngForOf"]],
  template: function SnackPreferencePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 3)(2, "ion-buttons", 4)(3, "ion-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SnackPreferencePage_Template_ion_button_click_3_listener() {
        return ctx.dismiss();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "ion-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Snack Preference");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-content", 8)(8, "ion-card", 9)(9, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Snacks you select here will be served to you during your journey");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, SnackPreferencePage_ion_row_11_Template, 7, 3, "ion-row", 11)(12, SnackPreferencePage_swiper_container_12_Template, 10, 5, "swiper-container", 12)(13, SnackPreferencePage_div_13_Template, 2, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 15)(16, "ion-button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SnackPreferencePage_Template_ion_button_click_16_listener() {
        return ctx.skip();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " Skip ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "ion-button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SnackPreferencePage_Template_ion_button_click_18_listener() {
        return ctx.proceedToPayment();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, " Proceed to payment ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isReturn);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isReturn);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isReturn);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonThumbnail, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.SelectValueAccessor],
  styles: [".head[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  margin: 16px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #4a4a4a;\n}\n\n.card-1[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  margin: 0;\n  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0px, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0;\n  border-radius: 0;\n  height: 44px;\n}\n\n.h50[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\n.bg-content[_ngcontent-%COMP%] {\n  --background: var(--viewBgColor);\n}\n\n.card-p[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin: 0;\n  \n\n  font-size: 13px;\n}\n\n.align-price[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  font-size: 14px;\n  font-weight: bold;\n  top: 15px;\n}\n\n.product-name[_ngcontent-%COMP%] {\n  width: 50%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.product-dec[_ngcontent-%COMP%] {\n  font-size: 8px;\n  white-space: normal;\n  margin-top: 5px;\n}\n\n.qty[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  text-align: center;\n  border: none;\n  background: #ccc;\n  font-size: 14px;\n  color: rgba(115, 114, 114, 0.9803921569);\n  text-align: center;\n  line-height: 22px;\n}\n\n.qtyplus[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  background: #00adb5;\n  border: none;\n  border-radius: 5px;\n  text-align: center;\n  font-size: 20px;\n  line-height: 20px;\n  color: #fff;\n}\n\n.qtyminus[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  background: rgba(128, 128, 128, 0.7019607843);\n  border: none;\n  border-radius: 5px;\n  text-align: center;\n  font-size: 30px;\n  line-height: 20px;\n  color: #fff;\n}\n\n.inc-dic[_ngcontent-%COMP%] {\n  margin-top: -26px;\n  position: absolute;\n  right: 7px;\n  background: #ccc;\n  padding: 2px;\n  border-radius: 5px;\n}\n\n.display-qty[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 65px;\n  left: 10px;\n  background: rgba(0, 173, 181, 0.7294117647);\n  width: 70px;\n  height: 17px;\n  border-radius: 5px;\n  font-size: 12px;\n  color: #fff;\n  text-align: center;\n}\n\n.item[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%] {\n  min-width: 3.5rem;\n  min-height: 4.5rem;\n}\n\nion-card[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%] {\n  min-width: 3.5rem;\n  min-height: 4.5rem;\n}\n\n.routes-footer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  position: fixed;\n  bottom: 0px;\n  margin: 0px;\n  z-index: 99999;\n  padding: 8px 8px 0px 8px;\n}\n\n.routes-footer[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  font-size: 12px;\n  align-items: center;\n  justify-content: center;\n}\n\n.routes-footer[_ngcontent-%COMP%]   .button1[_ngcontent-%COMP%] {\n  --background:#3e3e52;\n  height: 45px;\n  width: 80px;\n}\n\n.routes-footer[_ngcontent-%COMP%]   .button2[_ngcontent-%COMP%] {\n  --background:var(--iconsAndButtonsColor);\n  height: 45px;\n  width: calc(100% - 88px);\n}"]
});

/***/ })

}]);