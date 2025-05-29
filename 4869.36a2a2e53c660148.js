"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[4869],{

/***/ 20062:
/*!*******************************************************!*\
  !*** ./src/app/point-transfer/point-transfer.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PointTransferPage: () => (/* binding */ PointTransferPage)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 45564);
var _PointTransferPage;









function PointTransferPage_ng_container_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 23)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "No Data Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function PointTransferPage_ng_container_0_div_28_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 38)(1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dd_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", dd_r3.expiry_date, " (Expiry Date)");
  }
}
function PointTransferPage_ng_container_0_div_28_ion_img_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PointTransferPage_ng_container_0_div_28_ion_img_24_Template_ion_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const dd_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.otpPage(dd_r3.id, dd_r3.points));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PointTransferPage_ng_container_0_div_28_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 41)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function PointTransferPage_ng_container_0_div_28_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 42)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Expired");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function PointTransferPage_ng_container_0_div_28_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 43)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function PointTransferPage_ng_container_0_div_28_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 44)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Added");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function PointTransferPage_ng_container_0_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "ion-row")(2, "ion-col", 24)(3, "div", 25)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-col", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, PointTransferPage_ng_container_0_div_28_div_10_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "ion-row")(12, "ion-col", 9)(13, "div", 28)(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "ion-col", 29)(17, "ion-row")(18, "ion-col", 9)(19, "div")(20, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "ion-col", 29)(23, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, PointTransferPage_ng_container_0_div_28_ion_img_24_Template, 1, 0, "ion-img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "ion-row")(26, "ion-col", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, PointTransferPage_ng_container_0_div_28_div_27_Template, 3, 0, "div", 33)(28, PointTransferPage_ng_container_0_div_28_div_28_Template, 3, 0, "div", 34)(29, PointTransferPage_ng_container_0_div_28_div_29_Template, 3, 0, "div", 35)(30, PointTransferPage_ng_container_0_div_28_div_30_Template, 3, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dd_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](dd_r3.pnr_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](dd_r3.travel_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", dd_r3.expiry_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", dd_r3.transaction_message, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", dd_r3.points, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", dd_r3.transferable && dd_r3.status == "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", dd_r3.status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", dd_r3.status == "Expired");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", dd_r3.status == "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", dd_r3.status == "Added");
  }
}
function PointTransferPage_ng_container_0_div_29_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PointTransferPage_ng_container_0_div_29_span_5_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.nextPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Next page");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PointTransferPage_ng_container_0_div_29_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PointTransferPage_ng_container_0_div_29_span_6_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.previousPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Prev page");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PointTransferPage_ng_container_0_div_29_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "First");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PointTransferPage_ng_container_0_div_29_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Last");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PointTransferPage_ng_container_0_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 45)(1, "div")(2, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, PointTransferPage_ng_container_0_div_29_span_5_Template, 2, 0, "span", 47)(6, PointTransferPage_ng_container_0_div_29_span_6_Template, 2, 0, "span", 47)(7, PointTransferPage_ng_container_0_div_29_span_7_Template, 2, 0, "span", 48)(8, PointTransferPage_ng_container_0_div_29_span_8_Template, 2, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r1.page, "/", ctx_r1.totalPages, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.isShownNext);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.isShownPrev);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.page == 1 && ctx_r1.totalPages != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.page == ctx_r1.totalPages && ctx_r1.totalPages != 1);
  }
}
function PointTransferPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 1)(3, "ion-buttons", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "ion-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Loyalty Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, PointTransferPage_ng_container_0_div_8_Template, 3, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 5)(10, "ion-row")(11, "ion-col", 6)(12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "ion-img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "ion-col", 9)(15, "div", 10)(16, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Loyalty Points balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "ion-col", 6)(22, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PointTransferPage_ng_container_0_Template_div_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "ion-img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 14)(25, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "RECENT ACTIVITY");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, PointTransferPage_ng_container_0_div_28_Template, 32, 10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, PointTransferPage_ng_container_0_div_29_Template, 9, 6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PointTransferPage_ng_container_0_Template_div_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("touchmove", function PointTransferPage_ng_container_0_Template_div_touchmove_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.touchMove($event));
    })("touchend", function PointTransferPage_ng_container_0_Template_div_touchend_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.touchEnd());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 22)(34, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Smart miles ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "1: Your point tier is Defining your point value and based on that calculating Redemption Discount. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "2: Points value is Dynamically Change Their Trend and it may be changed without any prior notice. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "3: Use points frequently to get more points.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "4: Points get expired automatically. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "5: No Claim or refund guaranteed on Expired/Used Points Management have all rights to change point trend or Discontinue it.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.demo.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.demo1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.demo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.demo.length > 0 && ctx_r1.totalPages != 1);
  }
}
function PointTransferPage_ng_container_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 23)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "No Data Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function PointTransferPage_ng_container_1_div_27_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 38)(1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dd_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](3, 1, dd_r8.expiry_date, "dd MMM yyyy"), " ");
  }
}
function PointTransferPage_ng_container_1_div_27_ion_img_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PointTransferPage_ng_container_1_div_27_ion_img_17_Template_ion_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const dd_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.otpPage(dd_r8.id, dd_r8.points));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PointTransferPage_ng_container_1_div_27_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 72)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function PointTransferPage_ng_container_1_div_27_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 73)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Expired");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function PointTransferPage_ng_container_1_div_27_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 74)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function PointTransferPage_ng_container_1_div_27_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Added");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function PointTransferPage_ng_container_1_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-card", 63)(3, "ion-row")(4, "ion-col", 64)(5, "div", 65)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, PointTransferPage_ng_container_1_div_27_div_8_Template, 4, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-col", 66)(10, "ion-row")(11, "ion-col", 9)(12, "div")(13, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "ion-col", 29)(16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, PointTransferPage_ng_container_1_div_27_ion_img_17_Template, 1, 0, "ion-img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "ion-row")(19, "ion-col", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, PointTransferPage_ng_container_1_div_27_div_20_Template, 3, 0, "div", 68)(21, PointTransferPage_ng_container_1_div_27_div_21_Template, 3, 0, "div", 69)(22, PointTransferPage_ng_container_1_div_27_div_22_Template, 3, 0, "div", 70)(23, PointTransferPage_ng_container_1_div_27_div_23_Template, 3, 0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const dd_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](dd_r8.transaction_message);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", dd_r8.expiry_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", dd_r8.points, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", dd_r8.transferable && dd_r8.status == "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", dd_r8.status == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", dd_r8.status == "Expired");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", dd_r8.status == "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", dd_r8.status == "Added");
  }
}
function PointTransferPage_ng_container_1_div_28_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PointTransferPage_ng_container_1_div_28_span_5_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.nextPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Next page");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PointTransferPage_ng_container_1_div_28_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PointTransferPage_ng_container_1_div_28_span_6_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.previousPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Prev page");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PointTransferPage_ng_container_1_div_28_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "First");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PointTransferPage_ng_container_1_div_28_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Last");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PointTransferPage_ng_container_1_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 45)(1, "div")(2, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, PointTransferPage_ng_container_1_div_28_span_5_Template, 2, 0, "span", 47)(6, PointTransferPage_ng_container_1_div_28_span_6_Template, 2, 0, "span", 47)(7, PointTransferPage_ng_container_1_div_28_span_7_Template, 2, 0, "span", 48)(8, PointTransferPage_ng_container_1_div_28_span_8_Template, 2, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r1.page, "/", ctx_r1.totalPages, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.isShownNext);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.isShownPrev);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.page == 1 && ctx_r1.totalPages != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.page == ctx_r1.totalPages && ctx_r1.totalPages != 1);
  }
}
function PointTransferPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-content", 51)(2, "ion-toolbar", 52)(3, "ion-buttons", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "ion-back-button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Loyalty Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, PointTransferPage_ng_container_1_div_7_Template, 3, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "ion-card", 55)(9, "ion-row")(10, "ion-col", 6)(11, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "ion-img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "ion-col", 9)(14, "div", 58)(15, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Loyalty Points balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "ion-col", 6)(21, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PointTransferPage_ng_container_1_Template_div_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "ion-img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Recent activity");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, PointTransferPage_ng_container_1_div_27_Template, 24, 8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, PointTransferPage_ng_container_1_div_28_Template, 9, 6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PointTransferPage_ng_container_1_Template_div_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("touchmove", function PointTransferPage_ng_container_1_Template_div_touchmove_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.touchMove($event));
    })("touchend", function PointTransferPage_ng_container_1_Template_div_touchend_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.touchEnd());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 22)(33, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Smart miles ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "1: Your point tier is Defining your point value and based on that calculating Redemption Discount. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "2: Points value is Dynamically Change Their Trend and it may be changed without any prior notice. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "3: Use points frequently to get more points.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "4: Points get expired automatically. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "5: No Claim or refund guaranteed on Expired/Used Points Management have all rights to change point trend or Discontinue it.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.demo.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.demo1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.demo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.demo.length > 0 && ctx_r1.totalPages != 1);
  }
}
class PointTransferPage {
  constructor(appData, navCtrl, loader, apiFactory, commonStorage, dateService) {
    this.appData = appData;
    this.navCtrl = navCtrl;
    this.loader = loader;
    this.apiFactory = apiFactory;
    this.commonStorage = commonStorage;
    this.dateService = dateService;
    this.demo = [];
    this.obj2 = {};
    this.object1 = Object;
    this.dddd = {};
    this.users = [];
    this.page = 1;
    this.object = Object;
    this.isShownPrev = false;
    this.pagesNum = [];
    this.isShownNext = true;
    this.isIos = false;
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    const currentUser = localStorage.getItem('currentUser');
    this.userDetails = currentUser ? JSON.parse(currentUser) : null;
    this.smartMilesData();
    this.metaData = this.commonStorage.getItem('metaData');
  }
  ngOnInit() {
    this.close();
  }
  smartMilesData() {
    this.loader.showLoadingDefault();
    this.apiFactory.getSmartMilesData("&page=" + this.page).subscribe(data => {
      this.loader.hideLoadingDefault();
      this.demo1 = data.total_points;
      this.demo = data.customer_smart_transactions;
      this.totalPages = data.total_page;
    }, error => {
      this.loader.hideLoadingDefault();
    });
  }
  otpPage(idData, pointValue) {
    localStorage.setItem('dataGet', idData);
    localStorage.setItem('totalPoints', pointValue);
    this.navCtrl.navigateForward('otp-confirmation');
  }
  previousPage() {
    if (this.page == 1) {
      this.page = 1;
    } else {
      this.page -= 1;
      this.smartMilesData();
    }
    if (this.page > 1) {
      this.isShownPrev = true;
    } else {
      this.isShownPrev = false;
    }
    if (this.page < this.totalPages) {
      this.isShownNext = true;
    } else {
      this.isShownNext = false;
    }
  }
  nextPage() {
    if (this.page < this.totalPages) {
      this.page += 1;
      this.smartMilesData();
    }
    if (this.page > 1) {
      this.isShownPrev = true;
    } else {
      this.isShownPrev = false;
    }
    if (this.page < this.totalPages) {
      this.isShownNext = true;
    } else {
      this.isShownNext = false;
    }
  }
  openInfo() {
    document.querySelector(".bottomsheet").style.bottom = "0px";
    document.querySelector(".bg").style.display = "block";
  }
  close() {
    this.currentPosition = 0;
    this.startPosition = 0;
    const bottomSheet = document.querySelector(".bottomsheet");
    const bg = document.querySelector(".bg");
    if (bottomSheet) {
      bottomSheet.style.bottom = "-1000px";
      bottomSheet.style.transform = "translate3d(0px,0px,0px)";
    }
    if (bg) {
      bg.style.display = "none";
    }
  }
  touchMove(evt) {
    if (this.startPosition == 0) {
      this.startPosition = evt.touches[0].clientY;
    }
    const bottomSheet = document.querySelector(".bottomsheet");
    this.height = bottomSheet ? bottomSheet.clientHeight : 0;
    var y = evt.touches[0].clientY;
    this.currentPosition = y - this.startPosition;
    if (this.currentPosition > 0 && this.startPosition > 0) {
      document.querySelector(".bottomsheet").style.transform = "translate3d(0px," + this.currentPosition + "px,0px)";
    }
  }
  touchEnd() {
    this.minimumThreshold = this.height - 130;
    if (this.currentPosition < this.minimumThreshold) {
      document.querySelector(".bottomsheet").style.transform = "translate3d(0px,0px,0px)";
    } else {
      this.close();
    }
  }
  formatDate(dateString) {
    const date = new Date(dateString); // Create a new Date object
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
    return date.toLocaleDateString('en-GB', options); // Format the date as "11 Oct 2024"
  }
}
_PointTransferPage = PointTransferPage;
_PointTransferPage.ɵfac = function PointTransferPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PointTransferPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_1__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_3__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_4__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_5__.DateService));
};
_PointTransferPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _PointTransferPage,
  selectors: [["app-point-transfer"]],
  standalone: false,
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], ["mode", "md", 1, "h50", "bg-cl"], ["slot", "start"], [1, "head"], ["class", "center", "style", "height: 100%; width: 100%;", 4, "ngIf"], [1, "container"], ["size", "2"], [1, "roundDiv"], ["src", "./assets/gifttt.png", 1, "firstIcon"], ["size", "8"], [1, "pointshowDiv"], [2, "font-size", "smaller", "color", "#636363"], [1, "informationDiv", 3, "click"], ["src", "./assets/information.jpg"], [1, "activityDiv"], [2, "color", "#797777"], [2, "padding-bottom", "40px"], [4, "ngFor", "ngForOf"], ["style", "background-color: #fff; position: fixed; bottom: 0px; width: 100%;", 4, "ngIf"], [1, "bg", 3, "click"], [1, "bottomsheet", 3, "touchmove", "touchend"], [1, "swipe-handler"], [1, "content", "ion-padding"], [1, "center", 2, "height", "100%", "width", "100%"], ["size", "6"], [1, "pnrDiv"], [2, "font-size", "14px", "color", "#636363"], ["class", "expiryDiv", 4, "ngIf"], [1, "descriptionDiv"], ["size", "4"], [2, "margin-left", "30px"], ["style", " width: 20px; float: right; margin-right: 20px;", "src", "./assets/arrow-right.png", 3, "click", 4, "ngIf"], ["size", "12"], ["class", "statusDiv", "style", "background-color: #ff9800;", 4, "ngIf"], ["class", "statusDiv", "style", "background-color: #f44336;", 4, "ngIf"], ["class", "statusDiv", "style", "background-color: #009688;", 4, "ngIf"], ["class", "statusDiv", "style", "background-color: #8bc34a;", 4, "ngIf"], [2, "border-bottom", "1px solid #cacaca", "padding-top", "10px"], [1, "expiryDiv"], [2, "font-size", "12px", "color", "#797777"], ["src", "./assets/arrow-right.png", 2, "width", "20px", "float", "right", "margin-right", "20px", 3, "click"], [1, "statusDiv", 2, "background-color", "#ff9800"], [1, "statusDiv", 2, "background-color", "#f44336"], [1, "statusDiv", 2, "background-color", "#009688"], [1, "statusDiv", 2, "background-color", "#8bc34a"], [2, "background-color", "#fff", "position", "fixed", "bottom", "0px", "width", "100%"], [2, "float", "left", "padding", "10px"], ["class", "pageBtn", 3, "click", 4, "ngIf"], ["class", "pageBtn", 4, "ngIf"], [1, "pageBtn", 3, "click"], [1, "pageBtn"], [2, "--background", "#F1F7FA"], ["mode", "md", 2, "--background", "#F1F7FA"], ["defaultHref", "/tabs/more"], [1, "SeaBird_head", 2, "margin", "0px"], [1, "SeaBird_container"], [1, "SeaBird_rounDiv"], ["src", "./assets/icon/star.png", 1, "Sea_firstIcon"], [1, "SeaBird_pointshowDiv"], [1, "SeaBird_Loyality"], [1, "SeaBird_points"], [1, "SeaBird_line"], [1, "SeaBird_Recent"], [1, "SeaBird_card"], ["size", "9"], [1, "SeaBird_descriptionDiv"], ["size", "3"], [2, "color", "green"], ["class", "SeaBird_statusDiv", "style", "background-color: #ff9800;", 4, "ngIf"], ["class", "SeaBird_statusDiv", "style", "background-color: #f44336;", 4, "ngIf"], ["class", "SeaBird_statusDiv", "style", "background-color: #009688;", 4, "ngIf"], ["class", "SeaBird_statusDiv", "style", "background-color: #8bc34a;", 4, "ngIf"], [1, "SeaBird_statusDiv", 2, "background-color", "#ff9800"], [1, "SeaBird_statusDiv", 2, "background-color", "#f44336"], [1, "SeaBird_statusDiv", 2, "background-color", "#009688"], [1, "SeaBird_statusDiv", 2, "background-color", "#8bc34a"]],
  template: function PointTransferPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, PointTransferPage_ng_container_0_Template, 46, 4, "ng-container", 0)(1, PointTransferPage_ng_container_1_Template, 45, 4, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "cbustheme" || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonBackButton, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
  styles: [".firDiv[_ngcontent-%COMP%] {\n  background: greenyellow;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 90px;\n  height: 25px;\n  border-radius: 20px;\n  text-align: center;\n  margin-top: 15px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n.icon-set[_ngcontent-%COMP%] {\n  width: 20px;\n  float: right;\n  margin-right: 10px;\n  --background-color: rgb(86, 145, 233);\n}\n\nion-col.md.hydrated[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: auto;\n  float: left;\n  list-style-type: none;\n}\n\nli[_ngcontent-%COMP%] {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.pageBtn[_ngcontent-%COMP%] {\n  float: right;\n  color: #3f51b5;\n  font-size: 10px;\n  padding-right: 20px;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  font-weight: bold;\n}\n\n.roundDiv[_ngcontent-%COMP%] {\n  object-fit: cover;\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n  margin: 10px;\n  padding: 10px;\n  background-color: var(--primary);\n}\n\n.firstIcon[_ngcontent-%COMP%] {\n  color: black;\n  width: 22px;\n  height: 22px;\n  display: flex;\n  align-items: center;\n  margin: auto;\n}\n\n.pointshowDiv[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.informationDiv[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  margin-left: 10px;\n  height: 25px;\n  width: 25px;\n}\n\n.activityDiv[_ngcontent-%COMP%] {\n  padding: 18px 0 5px 10px;\n  font-size: 0.8rem;\n  background-color: #eeeeee;\n}\n\n.pnrDiv[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.expiryDiv[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-top: 5px;\n}\n\n.descriptionDiv[_ngcontent-%COMP%] {\n  margin: 10px;\n  font-size: 13px;\n  color: #636363;\n}\n\n.statusDiv[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 25px;\n  border-radius: 20px;\n  text-align: center;\n  margin-top: 10px;\n  padding-top: 3px;\n  padding-bottom: 5px;\n  color: white;\n  font-size: 14px;\n}\n\n.bottomsheet[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: auto;\n  bottom: -1000px;\n  border-radius: 15px 15px 0 0;\n  z-index: 20;\n  background-color: #fff;\n  transition: 0.1s;\n  transform: translate3d(0, 0, 0);\n}\n.bottomsheet[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.bottomsheet[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: gray;\n  font-weight: bold;\n}\n.bottomsheet[_ngcontent-%COMP%]   .swipe-handler[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 30px;\n  height: 6px;\n  position: absolute;\n  left: 50%;\n  top: 5%;\n  margin-left: -10px;\n  margin-top: -3px;\n  border-radius: 3px;\n  background: lightgray;\n}\n\n.bg[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 10;\n  transition: 0.3s;\n  display: none;\n}\n\n.SeaBird_Recent[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: black;\n  padding: 18px 0 5px 10px;\n  font-size: 0.8rem;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background:#F1F7FA ;\n}\n\n.SeaBird_container[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 1px solid grey;\n}\n\n.Sea_firstIcon[_ngcontent-%COMP%] {\n  height: 14.85px;\n  width: 18.01px;\n}\n\n.SeaBird_Loyality[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #000000;\n  font-weight: 600;\n  margin-left: -44px;\n}\n\n.SeaBird_head[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #000000;\n  font-weight: 700;\n}\n\n.SeaBird_rounDiv[_ngcontent-%COMP%] {\n  margin-left: 9px;\n  margin-top: 31px;\n}\n\n.SeaBird_points[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 10px;\n  color: #000000;\n  margin-left: -30px;\n  margin-top: 8px;\n}\n\n.SeaBird_descriptionDiv[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.SeaBird_card[_ngcontent-%COMP%] {\n  --background:#F1F7FA;\n  margin: 8px;\n  padding: 4px;\n}\n\n.SeaBird_line[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #cacaca;\n  padding-top: 10px;\n  margin-left: 16px;\n  width: 311px;\n}\n\n.SeaBird_pointshowDiv[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.SeaBird_statusDiv[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 21px;\n  border-radius: 20px;\n  text-align: center;\n  margin-top: 10px;\n  padding-top: 3px;\n  padding-bottom: 5px;\n  color: white;\n  font-size: 12px;\n}"]
});

/***/ }),

/***/ 44869:
/*!*********************************************************!*\
  !*** ./src/app/point-transfer/point-transfer.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PointTransferPageModule: () => (/* binding */ PointTransferPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 45564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _point_transfer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point-transfer-routing.module */ 62276);
/* harmony import */ var _point_transfer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point-transfer.page */ 20062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _PointTransferPageModule;






class PointTransferPageModule {}
_PointTransferPageModule = PointTransferPageModule;
_PointTransferPageModule.ɵfac = function PointTransferPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PointTransferPageModule)();
};
_PointTransferPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _PointTransferPageModule
});
_PointTransferPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _point_transfer_routing_module__WEBPACK_IMPORTED_MODULE_0__.PointTransferPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PointTransferPageModule, {
    declarations: [_point_transfer_page__WEBPACK_IMPORTED_MODULE_1__.PointTransferPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _point_transfer_routing_module__WEBPACK_IMPORTED_MODULE_0__.PointTransferPageRoutingModule]
  });
})();

/***/ }),

/***/ 62276:
/*!*****************************************************************!*\
  !*** ./src/app/point-transfer/point-transfer-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PointTransferPageRoutingModule: () => (/* binding */ PointTransferPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 47624);
/* harmony import */ var _point_transfer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point-transfer.page */ 20062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var _PointTransferPageRoutingModule;




const routes = [{
  path: '',
  component: _point_transfer_page__WEBPACK_IMPORTED_MODULE_0__.PointTransferPage
}];
class PointTransferPageRoutingModule {}
_PointTransferPageRoutingModule = PointTransferPageRoutingModule;
_PointTransferPageRoutingModule.ɵfac = function PointTransferPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PointTransferPageRoutingModule)();
};
_PointTransferPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _PointTransferPageRoutingModule
});
_PointTransferPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PointTransferPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ })

}]);